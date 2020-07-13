import React,{Component} from 'react';
import './Topnav.css';
import {Route,BrowseRouter as Router,Link,NavLink} from 'react-router-dom';
import Home from './Home';
import logo from './Images/facebook_profile_image.png';
import InstructorLogin from './InstructorLogin';







export default class Nav extends React.Component {

  constructor(props){
    super(props);
    this.state={
      draweropen:false,
      myprofile:[]
    }
  }


 
/*This will fetch the teacher's info and and change the state
to display it on the navigation drawer*/ 
  fetchinfo=()=>{
      fetch("http://127.0.0.1:5000/instructor_profile",
      {
        method:"GET",
        "Content-Type":"application/json",

        /*We are passing the token that contains teacher's 
        info to the header so that the server can receive it
        */
        headers:{
               Authorization:`${localStorage.getItem('instructor_token')}`
        }
      }
      )//This callback function is for fetching the data
      .then(res=>res.json())
      .then(data=>{
        /*We the change the profile state from above and display the
        data from the server
        */

        this.setState({
          myprofile:data.profile_info
        })
        
      })
  }


  opendrawer=()=>{
    this.setState({
      draweropen:true
    })
    this.fetchinfo();
  }

  closedrawer=()=>{
    this.setState({
      draweropen:false
    })
  }


  logout=()=>{
    localStorage.removeItem("instructor_token");
    this.closedrawer();
  }

 

 render(){

  return (
   
    <div>
{/*************************Phonenav ******************************************* */}
{!localStorage.getItem("instructor_token")?
<div>
<div className="phonenav">
<Link to="/"><img src={logo} className="phonelogo"/></Link>
  <button onClick={()=>this.opendrawer()} className="float-right toggle-butn"> 
  <div className="butn-line"></div>
  <div className="butn-line"></div>
  <div className="butn-line"></div>
  </button>
</div>

{this.state.draweropen==true?
<div className="sidedrawer"> 
<button className="closebtn" onClick={()=>this.closedrawer()}>&times;</button>
<ul className="col text-center drawer-items">
  <NavLink onClick={()=>this.closedrawer()} className="nav-links" to="/"><li>Home</li></NavLink>
  <NavLink onClick={()=>this.closedrawer()} className="nav-links" to="/instructorsignup"><li>Be a teacher</li></NavLink>
  <NavLink onClick={()=>this.closedrawer()} className="nav-links" to="/instructorlogin"><li>Login</li></NavLink>
  </ul>  
</div>
:null}




{/**********************************Desktop nav******************************************/}


  <div className="mynav">
  <Link to="/"><img src={logo} className="logo"/></Link>
 <ul className="nav-closer float-right ">
     <li className= "nav-items"><NavLink className="nav-links" to="/">Home</NavLink></li>
     <li className= " nav-items"><NavLink className="nav-links" to="/instructorsignup">Be a Teacher</NavLink></li>
     <li className= " nav-items"><NavLink className="nav-links" to="/instructorlogin">Login</NavLink></li>
  
 </ul>
 </div>
  
</div>


/*****************Nav after instructor_authentication***********************/

   :<div>
   <div className="phonenav">
   <Link to="/"><img src={logo} className="phonelogo"/></Link>
     <button  onClick={()=>this.opendrawer()} className="float-right toggle-butn"> 
     <div className="butn-line"></div>
     <div className="butn-line"></div>
     <div className="butn-line"></div>
     </button>
   </div>
   
   {this.state.draweropen==true?
   <div className="sidedrawer"> 
   
   {/*This will iterate through the array from the server and display it*/}
   {this.state.myprofile.map(t=><div>
    <button className="closebtn" onClick={()=>this.closedrawer()}>&times;</button>
      <div className=" col text-center">
       <img src={`http://127.0.0.1:5000${t.instructor_img}`} className="avatar2"/>
        <h1 className="name2">{t.instructor_name}</h1> 
         </div>
         </div>
   )}
   <ul className="col text-center drawer-items">
   <NavLink  onClick={()=>this.closedrawer()} className="nav-links" to="/instructorprofile"><li>Profile</li></NavLink>
     <NavLink onClick={()=>this.closedrawer()} className="nav-links" to="/createcourse"><li>create course</li></NavLink>
     <NavLink onClick={()=>this.closedrawer()} className="nav-links" to="/mycourses"><li>My courses</li></NavLink>
     <NavLink onClick={()=>this.closedrawer()} className="nav-links" to="/contact"><li>Contact us</li></NavLink>
   
     </ul> 
    
     <div style={{flexDirection:"row"}} className="col text-center">
          <Link to="/instructorlogin"><button className="nav-logoutbutn" onClick={()=>this.logout()}>Logout Account</button></Link>
          </div>
 
   </div>
   :null}
   
   
   
   
   {/**********************************Desktop nav After instructorauth******************************************/}
   
   
     <div className="mynav">
     <Link to="/"><img src={logo} className="logo"/></Link>
    <ul className="nav-closer float-right ">

        <li className= "nav-items"><NavLink className="nav-links" to="/instructorprofile">Profile</NavLink></li>
        <li className= "nav-items"><NavLink className="nav-links" to="/createcourse">Create course</NavLink></li>
        <li className= "nav-items"><NavLink className="nav-links" to="/contact">Contact us</NavLink></li>
        <li className= "nav-items"><NavLink className="nav-links" to="/mycourses">My courses</NavLink></li>
        
    </ul>
    </div>
     
   </div>

          
          
   
   }



  </div>
  
    )

  }

}



