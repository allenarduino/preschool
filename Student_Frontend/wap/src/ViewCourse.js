import React from 'react';
import './ViewCourse.css';
import {Link} from 'react-router-dom';

class ViewCourse extends React.Component{
    constructor(props){
        super(props);
        this.state={
            description:[],
            appeared_message:false,
            isLoading:false
            
        }
    }


    
   






    componentDidMount(){
        fetch(`http://127.0.0.1:5000/view_course/${this.props.match.params.id}`,
        {
            method:"GET",
            "Content-Type":"application/json"
        }
        )
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                description:data
            })
        })
        .catch(err=>console.log(err))
    }


    enroll=(id)=>{
        fetch(`http://127.0.0.1:5000/enroll/${id}`,
        {
            method:"POST",
            headers:{
                Authorization:`${localStorage.getItem("student_token")}`
            }

        }
        )
        .then(res=>res.json())
        .then(data=>{
            if (data.message==null){
                alert(data)
            }
            else{
                   this.setState({
                       appeared_message:true
                   })
                  
            }
           
        })
       

       

    }







   
    render(){
        return(
        
            <div className="row">
{
this.state.description.map(t=>
   
        <div className="profile-background">
    
        {/**********************Container for course description ***************/}
        <div  className=" col-lg-7 col-xs-10 col-xl-7  col-sm-10 col-md-10 course-description-header col text-center"><h3 style={{fontSize:20}}>Course Description:</h3></div>
    <div  className="col-lg-7 col-xs-10 col-xl-7  col-sm-10 col-md-10 course-description-container col text-center"> 
    <div className="col text-center">
                        
       {/*Here we have two conditional UI to display
       If a student has already enrolled in a course and he presses the 
       enroll button, we throw an alert message telling him he's already 
       enrolled 
       */}


      <h1  style={{color:"black"}}  className="name">{t.name}</h1> 
      <h3  style={{fontSize:17}}>{t.description}</h3>
      {/***********************If the student is not loggedin, 
    we send him to the login page before enrollment */}
      {localStorage.getItem("student_token")?
    this.state.appeared_message==false?<button onClick={()=>this.enroll(t.id)} style={{marginTop:30}} className="enroll">Enroll</button>:
     <div className="alert-message col text-center">
         You have already enrolled in this course. Please click 
         <b><Link className="access-link" to={`/viewcourse/singlecourse/${t.id}`}>here</Link> to acess it</b>  
            
         </div>
     
    :<Link to="/studentlogin"><button  style={{marginTop:30}} className="enroll">Enroll</button></Link>}
        </div>
        </div>



{/******************To show instructor or the author of the course**************** */}
 <div style={{marginTop:70}} className="col text-center col-lg-7 col-xs-10 col-xl-7  col-sm-10 col-md-10 course-description-header col text-center"><h3 style={{fontSize:20}}>Instructor:</h3></div>
<div  className="col-lg-7  col-xs-10 col-xl-7  col-sm-10 col-md-10 course-description-profile-container col text-center "> 

                    
    <img src={`http://127.0.0.1:5000${t.instructor_img}`} className="avatar"/>
  <h1 style={{color:"black"}} className="name">{t.instructor_name}</h1> 
       <p style={{color:"black"}}>{t.email}</p>
  <h3 style={{fontSize:17}}>{t.bio}</h3>
    
    
    </div>

</div>     

    )
} 

</div>
        
)
    }



}

export default  ViewCourse;