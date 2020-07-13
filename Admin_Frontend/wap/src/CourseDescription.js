import React from 'react';
import './ViewCourse.css';
import {Link} from 'react-router-dom';

class CourseDescription extends React.Component{
    constructor(props){
        super(props);
        this.state={
            description:[],
            appeared_message:false
            
        }
    }


    
   








    componentDidMount(){
        fetch(`https://merl.herokuapp.com/view_course/${this.props.match.params.id}`,
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




       
delete_course=(id)=>{
    if (window.confirm("Are you sure you want to delete this course")){

    
    fetch(`http://127.0.0.1:5000/course_delete/${id}`,
    {
      method:"DELETE"
    }
    )
    .then(res=>res.json())
    .then(data=>{
      console.log(" Course Deleted")
    })
  }

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
      <Link  to={`/singlecourse/${t.id}`} style={{marginLeft:30}}><button className="enroll">Content</button></Link>
    <button style={{marginLeft:10}} onClick={()=>{this.delete_course(t.id)}} className="delete-course">Delete Course</button>

        </div>
        </div>



{/******************To show instructor or the author of the course**************** */}
 <div style={{marginTop:70}} className="col text-center col-lg-7 col-xs-10 col-xl-7  col-sm-10 col-md-10 course-description-header col text-center"><h3 style={{fontSize:20}}>Instructor:</h3></div>
<div  className="col-lg-7  col-xs-10 col-xl-7  col-sm-10 col-md-10 course-description-profile-container col text-center "> 

                    
    <img src={`http://127.0.0.1:5000${t.instructor_img}`} className="avatar"/>
  <h1 style={{color:"black"}} className="name">{t.instructor_name}</h1> 
  <h3 style={{fontSize:17}}>{t.bio}</h3>
    
    
    </div>

</div>     

    )
} 

</div>
        
)
    }



}

export default  CourseDescription;