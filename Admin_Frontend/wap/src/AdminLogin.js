import React from 'react';
import './Topnav.css';
import {Link} from 'react-router-dom';
import './Signup.css';


class AdminLogin extends React.Component{




    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            error:"",
            message:"",
            nameerr:"",
            passworderr:"",
            emailerr:"",
            loading:false
            
        }
    }

    handleinput=(e)=>{
        this.setState({
          [e.target.name]:e.target.value
        });
    }

    login=(e)=>{
        e.preventDefault();
    

        if (this.state.email.trim()===""){
            this.setState({emailerr:"Email required"})
        }
        else{
            this.setState({emailerr:""})
        }

        if (this.state.password.trim()===""){
            this.setState({passworderr:"Password required"})
        }
        else{
            this.setState({passworderr:""})

     
            this.setState({
                loading:true
            })


        fetch("https://merl.herokuapp.com/admin_login",{
            method:"POST",
            body:JSON.stringify(this.state),
            headers:{
                'Content-type':'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{

                   this.setState({
                       loading:false
                   })

            if (data.error==null){
                alert("Logged in sucessfully");
                localStorage.setItem("admin_token",data)
                this.props.history.push("AdminProfile");
            }
            else{
                this.setState({error:data.error})
            }
        }).catch((err)=>{alert(err)});
        
        }




    }







    render(){
        return(
            
            <div className="row">
            <div className="bg">
                  <div className="form-container" onSubmit={this.login}>
                      <form onSubmit={this.signup} className="form-group">
                          <h3 style={{color:"grey",fontSize:20}}>Log in Admin</h3>
                      <h3 style={{color:"red",fontSize:20}}>{this.state.error}</h3>
                    
                       <input type="text" onChange={this.handleinput}
                          className=" forminput"
                          placeholder="Email"
                          name="email"
                          required="true"
                          value={this.state.email}
                          />
                        <h3 style={{color:"red",fontSize:15}}>{this.state.emailerr}</h3>
                        <h3 style={{color:"red",fontSize:15}}>{this.state.emailerr}</h3>
                       <input type="password" onChange={this.handleinput}
                          className=" forminput"
                          placeholder="Password"
                          name="password"
                          value={this.state.password}
                          />
                          <h3 style={{color:"red",fontSize:15}}>{this.state.passworderr}</h3>

                       { this.state.loading==false?<input type="submit" className="formbutton" value=" Log in"/>:<input type="submit" className="formbutton" value="Sending...."/>}
                         
                      </form>
            </div>
         </div>
         </div>
         
         
         
        )
    }
}

export default AdminLogin;