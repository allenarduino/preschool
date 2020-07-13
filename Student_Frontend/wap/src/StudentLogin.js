import React from 'react';
import './Topnav.css';
import {Link} from 'react-router-dom';



//I'm using this for email validation
const validEmailRegex= 
RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);


//function to validate the form
const validateForm=(errors)=>{
    let valid=true;
    Object.values(errors).forEach(
        //If we have an error string entered by the user,set valid to false
        (val)=>val.length>0&&(valid=false)
    );
    return valid;
}










class StudentLogin extends React.Component{




    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            error:"",//error from the server will be loaded here
            message:"",//message from the server will be loaded here
            k:"",//This will throw an error message if the user submits an empty form
            errors:{//Error from client due to user inputs
             name:"",
             email:"",
             password:"",
             
            },
            loading:false
            
        }
    }

    handleinput=(e)=>{
       this.setState({
           [e.target.name]:e.target.value
       })

        let name=e.target.name;
        let value=e.target.value;
        let errors =this.state.errors;
        /*I'm using switch 
        statement here because
         I want to avoid multiple
        if else statements*/

        switch(name){
                 //Using the switch statement to reduce multiple if else statements
                //Here,I'm testing email pattern
            case 'email': 
                errors.email = 
                  validEmailRegex.test(value)
                    ? ''
                    : 'Email is not valid!';
                break; 
                
            case 'password': 
             errors.password = 
              value.length < 8
               ? 'Password must be at least 8 characters long!'
               : '';
            break;
         default:
         break;
        }

        this.setState({errors, [name]: value}, ()=> {
            //So that I can see the result in the conssole
            console.log(errors)
        })
    }

    login=(e)=>{
        e.preventDefault();
    
        if(validateForm(this.state.errors)){
            console.log("Form is  valid")
            
            
          this.setState({
              loading:true
          })
     
        fetch("http://127.0.0.1:5000/student_login",{
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
                localStorage.setItem("student_token",data)
                this.props.history.push("StudentProfile");
            }
            else{
                this.setState({error:data.error})
            }
        }).catch((err)=>{alert(err)});
        
        
        }
            
               
        else{
            this.setState({
                k:"Invalid Form"
            })
        }   
    



 



    }







    render(){
        return(
            
            <div className="row">
            <div className="bg">
                  <div className="form-container" onSubmit={this.login}>
                      <form onSubmit={this.signup} className="form-group">
                      <h3 style={{color:"red",fontSize:15}}>{this.state.k}</h3>
                          <h3 style={{color:"grey",fontSize:20}}>Log in for Wap</h3>
                      <h3 style={{color:"red",fontSize:20}}>{this.state.error}</h3>
                    
                       <input type="text" onChange={this.handleinput}
                          className=" forminput"
                          placeholder="Email"
                          name="email"
                          required="true"
                          
                          value={this.state.email}
                          />
                        {this.state.errors.email.length>0&&
                          <h3 style={{color:"red",fontSize:15}}>{this.state.errors.email}</h3>
        
                            }
                       <input type="password" onChange={this.handleinput}
                          className=" forminput"
                          placeholder="Password"
                          name="password"
                          required="true"
                          value={this.state.password}
                          />
                        

                        {this.state.loading==false?<input type="submit" className="formbutton" value=" Log in"/>:<input type="submit" className="formbutton" value="Sending...."/>}
                          <h3 style={{fontSize:15}}>
                              Don't have an account?
                          <Link to="/studentsignup">
                            <a  style={{fontSize:15,color:"rgb(184, 23, 103)"}}>
                              Signup
                              </a> 
                              </Link>
                              </h3>
                              <h3 >
                                  <Link to="/forgotpassword">
                                    <a style={{fontSize:15,marginTop:17,color:"rgb(184, 23, 103)",textDecoration:"none"}}>
                                        Forgot Password?
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

export default StudentLogin;