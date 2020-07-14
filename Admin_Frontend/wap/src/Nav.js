import React,{Component} from 'react';
import './Topnav.css';
import {Route,BrowseRouter as Router,Link,NavLink} from 'react-router-dom';
import Home from './Home';
import logo from './Images/facebook_profile_image.png';
import InstructorLogin from './AdminLogin';







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
      fetch("http://127.0.0.1:5000/admin_profile",
      {
        method:"GET",
        "Content-Type":"application/json",

        /*We are passing the token that contains teacher's 
        info to the header so that the server can receive it
        */
        headers:{
               Authorization:`${localStorage.getItem('admin_token')}`
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
    localStorage.removeItem("admin_token");
    this.closedrawer();
  }

 

 render(){

  return (
   
    <div>
{/*************************Phonenav ******************************************* */}
{!localStorage.getItem("admin_token")?
<div>
<div className="phonenav">
<Link to="/"><img src={logo} className="phonelogo"/></Link>
  <Link to="/adminlogin"><button className="float-right loginbutn">Login </button></Link>
</div>





{/**********************************Desktop nav******************************************/}


  <div className="mynav">
  <Link to="/"><img src={logo} className="logo"/></Link>
 <ul className="nav-closer float-right ">
     <li className= "nav-items"><NavLink className="nav-links" to="/"> <Link to="/adminlogin"><button className="float-right loginbutn">Login </button></Link></NavLink></li>
   
 </ul>
 </div>
  
</div>


/*****************Nav after admin_authentication***********************/

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
       <img src={`http://127.0.0.1:5000${t.admin_img}`} className="avatar2"/>
        <h1 className="name2">{t.name}</h1> 
         </div>
         </div>
   )}
   <ul className="col text-center drawer-items">
   <NavLink  onClick={()=>this.closedrawer()} className="nav-links" to="/adminprofile"><li>Profile</li></NavLink>
     <NavLink onClick={()=>this.closedrawer()} className="nav-links" to="/shscourses"><li>SHS courses</li></NavLink>
     <NavLink onClick={()=>this.closedrawer()} className="nav-links" to="/jhscourses"><li>JHS courses</li></NavLink>
     <NavLink onClick={()=>this.closedrawer()} className="nav-links" to="/teachers"><li>Teachers/Instructors</li></NavLink>
     <NavLink onClick={()=>this.closedrawer()} className="nav-links" to="/students"><li>Students</li></NavLink>
   
     </ul> 
    
     <div style={{flexDirection:"row"}} className="col text-center">
          <Link to="/instructorlogin"><button className="nav-logoutbutn" onClick={()=>this.logout()}>Logout Account</button></Link>
          </div>
 
   </div>
   :null}
   
   
   
   
   {/**********************************Desktop nav After adminauth******************************************/}
   
   
     <div className="mynav">
     <Link to="/"><img src={logo} className="logo"/></Link>
    <ul className="nav-closer float-right ">

        <li className= "nav-items"><NavLink className="nav-links" to="/adminprofile">Profile</NavLink></li>
        <li className= "nav-items"><NavLink className="nav-links" to="/shscourses">SHS courses</NavLink></li>
        <li className= "nav-items"><NavLink className="nav-links" to="/jhscourses">JHS courses</NavLink></li>
        <li className= "nav-items"><NavLink className="nav-links" to="/teachers">Teachers</NavLink></li>
        
    </ul>
    </div>
     
   </div>

          
          
   
   }



  </div>
  
    )

  }

}



