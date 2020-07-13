import React from 'react';
import './InstructorProfile.css';
import {Link} from 'react-router-dom';


class InstructorProfile extends React.Component{

    constructor(props){
        super(props)
        this.state={
            myprofile:[],
            mycourses:[],
        }
    }


    componentDidMount(){
        fetch("http://127.0.0.1:5000/instructor_profile",
        {
            method:"GET",
            headers:{
                Authorization:`${localStorage.getItem("instructor_token")}`
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

//For instructor to delete a course

deletecourse=(id)=>{

    fetch(`http://127.0.0.1:5000/course_delete/${id}`,
    {
        method:"DELETE"
    }
    )
    .then(res=>res.json())
    .then(data=>{
        alert(data.message)
        console.log(data.message)
         let courselist=this.state.mycourses
         for(let i=0;i<courselist.length;i++){
             let p=courselist[i]
             if(p.id===id){
                 courselist.splice(i,1)
                 break
             }
         }
         this.setState({mycourses:courselist})
    })
    .catch(err=>alert(err))
}








    render(){
        return(
            <div className="row">
                <div className="profile-background1">
        {/********This is for testing<button onClick={()=>{localStorage.removeItem("instructor_token")}} style={{marginTop:200}} >Logout</button>**********/}
             
    
    {
        this.state.myprofile.map(t=>
            <div style={{backgroundImage:`http://127.0.0.1:5000${t.coverphoto}`}} className="col-lg-7 col-xs-10 col-xl-7  col-sm-10 col-md-10 profile-container col text-center "> 
            <div className="col text-center">
                                
                <img src={`http://127.0.0.1:5000${t.instructor_img}`} className="avatar"/>
              <h1 className="name">{t.instructor_name}</h1> 
              <h3 style={{fontSize:17,marginTop:20}}>{t.bio}</h3>
              <div className="buttoncontainer col text-center">
                      <button className="profilebutton1" onClick={()=>{this.props.history.push("CreateCourse")}}>Createcourse</button>
                   <button className="profilebutton2" onClick={()=>{this.props.history.push("Editprofile")}}>Edit profile</button>
                   
                  </div>
                </div>
                </div>


            )
    } 
             
   </div>     
</div>
                
        )
    }

    
}

export default InstructorProfile;