import React from 'react';
import './InstructorProfile.css';
import {Link} from 'react-router-dom';


class AdminProfile extends React.Component{

    constructor(props){
        super(props)
        this.state={
            myprofile:[],
            mycourses:[],
        }
    }


    componentDidMount(){
        fetch("https://merl.herokuapp.com/admin_profile",
        {
            method:"GET",
            headers:{
                Authorization:`${localStorage.getItem("admin_token")}`
            }
        }
        )
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                myprofile:data.profile_info,
              
            })
        })
        .catch(err=>console.log(err))
    }







    render(){
        return(
            <div className="row">
                <div className="profile-background">
        {/*<button onClick={()=>{localStorage.removeItem("instructor_token")}} style={{marginTop:200}} >Logout</button>*/}
             {/********************Sidebar*************/}
    
    {
        this.state.myprofile.map(t=>
            <div style={{backgroundImage:`http://127.0.0.1:5000${t.coverphoto}`}} className="col-lg-7 col-xs-10 col-xl-7  col-sm-10 col-md-10 profile-container col text-center "> 
            <div className="col text-center">
                                
                <img src={`https://merl.herokuapp.com${t.admin_img}`} className="avatar"/>
              <h1 className="name">{t.name}</h1> 
              
              
                      
                   <button className="profilebutton2" onClick={()=>{this.props.history.push("Editprofile")}}>Edit profile</button>
                   
                  
                </div>
                </div>


            )
    } 
    
   </div>     
</div>
                
        )
    }

    
}

export default AdminProfile;