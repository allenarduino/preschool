import React from 'react';
import './Signup.css';
import {Link} from 'react-router-dom';

class InstructorSignup extends React.Component{




    constructor(props){
        super(props);
        this.state={
            name:"",
            bio:"",
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

    signup=(e)=>{
        e.preventDefault();


        if (this.state.name.trim()===""){
            this.setState({nameerr:"Name required"})
        }
        else{
            this.setState({nameerr:""})
        }

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
           
     
        fetch(" https://merl.herokuapp.com/admin_signup",{
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
                alert(data.message);
                this.props.history.push("AdminLogin")
                
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
          
                  <div className="form-container ">
                      <form onSubmit={this.signup} className="form-group">
                      <h3 style={{color:"grey",fontSize:20}}>Be an instructor</h3>
                          <input type="text" onChange={this.handleinput}
                          className=" forminput"
                          placeholder="Name"
                          name="name"
                          value={this.state.name}
                          />
                          <h3 style={{color:"red",fontSize:15}}>{this.state.nameerr}</h3>

                       <input type="text" onChange={this.handleinput}
                          className=" forminput"
                          placeholder="Email"
                          name="email"
                          
                          value={this.state.email}
                          />
                            <h3 style={{fontSize:15,color:"red"}}>{this.state.error}</h3>
                       
                       <input type="password" onChange={this.handleinput}
                          className=" forminput"
                          placeholder="Password"
                          name="password"
                          value={this.state.password}
                          />

                           
                  






                          <h3 style={{color:"red",fontSize:15}}>{this.state.passworderr}</h3>

                         {this.state.loading==false?<input type="submit" className="formbutton" value="Sign up"/>:<input type="submit" className="formbutton" value="Sending....."/>}

                          <h3 style={{fontSize:15}}>
                              Already have an account?
                          <Link to="/instructorlogin">
                            <a  style={{fontSize:15,color:"rgb(184, 23, 103)"}}>
                              Login
                              </a> 
                              </Link>
                              </h3>
                      </form>

                     
            </div>
         </div>
         </div>
         
         
         
        )
    }
}

export default InstructorSignup;