/*e.preventDefault() function in any line will prevent
the the form from submitting automatically
*/


import React from 'react';
import InstructorLogin from './InstructorLogin';
import './Editprofile.css';

class EditCourse extends React.Component{

   
constructor(props){
    super(props);
    this.state={
        course_img:null,
        course_description:"",
        course_name:"",
        course_nameerr:"",
        description_err:"",
        course_imgerr:"",
        course:[]
        
    }
}



/*I'm setting this componentDidMount because 
I want to grab the id of the course
*/


componentDidMount(){
    fetch(`http://127.0.0.1:5000/courses/${this.props.match.params.id}`,
  {
      methods:"GET",
      "Content-Type":"application/json"
  }
    )
    .then(res=>res.json())
    .then(data=>{
       this.setState({
        course:data.description
       })
    })
 
  }







filechangehandler=(event)=>{
    this.setState({course_img:event.target.files[0]})
  }

  uploadhandler=(id)=>{

    

  
     /*I'm checking to see wether the bio is empty or not
    If it's  empty, we throw error message*/
   if(this.state.course_img==null){
    this.setState({
        course_imgerr:"Photo Required"
    })
}
   else{
   //Otherwise we send the image to the server
   const formData=new FormData();
   formData.append("course_img",this.state.course_img)
   
   fetch(`http://127.0.0.1:5000/update_course_img/${id}`,
   {
     method:"POST",
     body:formData,
    
   }
   ).then(res=>{alert("Course Image Updated")}).catch(err=>{alert(err)})
}
  }




  

descriptionhandler=(e)=>{
    this.setState({
        course_description:e.target.value
    })
}



submitdescription=(id)=>{
   
    /*I'm checking to see wether the bio is empty or not
    If it's  empty, we throw error message*/
    if (this.state.course_description.trim()===""){
        this.setState({
            description_err:"Description Required"
         })
    }
    else{
        //Otherwise,we send data to the server

    fetch(`http://127.0.0.1:5000/update_course_description/${id}`,{
        method:"POST",
         body:JSON.stringify(this.state.course_description),
         "Content-type":"application/json",

    
    
   
}
    )
    .then(res=>res.json())
    .then(data=>{
        alert(data.message)
    })
    .catch(err=>{console.log(err)})
}
    
}



namehandler=(e)=>{
    this.setState({
        course_name:e.target.value
    })
}




submitname=(id)=>{
    
        /*I'm checking to see wether the name is empty or not
    If it's  empty, we throw error message*/
    if (this.state.course_name.trim()===""){
        this.setState({
            course_nameerr:"Name of course required"
         })
    }
    else{

    //Otherwise ,we send data to the server

    fetch(`http://127.0.0.1:5000/update_course_name/${id}`,{
        method:"POST",
        "Content-Type":"Application/json",
         body:JSON.stringify(this.state.course_name),
    
    

}
    )
    .then(res=>res.json())
    .then(data=>{
        alert(data.message)
    }).catch(err=>{console.log(err)})
} 
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
      console.log("Course Deleted")
    })
  }

}








 

  render(){
      return(
          
        

          
          <div>
                 
                 {
              this.state.course.map(t=><div>

<div style={{flexDirection:"row"}} className="col text-center">
          <h3 style={{marginTop:100,textAlign:"center",fontSize:20}}>Update Course Image</h3>
          <input onChange={this.filechangehandler} type="file" name="course_img" className="inputfile1"/>
          <button onClick={()=>this.uploadhandler(t.id)} className="upload-button">Upload</button>
          <h3 style={{color:"red",fontSize:18}}>{this.state.course_imgerr}</h3>
          </div>

        

        
         
         

          <div style={{flexDirection:"row"}} className="col text-center">
          <h3 style={{marginTop:30,textAlign:"center",fontSize:20}}>Update Name of Course</h3>
          <input  placeholder="Name"value={this.state.course_name} onChange={this.namehandler} type="text" name="course_name" className="nameinput"/>
          <button onClick={()=>this.submitname(t.id)} className="namebutton">Update</button>
          <h3 style={{color:"red",fontSize:18}}>{this.state.course_nameerr}</h3>
          </div>


          <div style={{flexDirection:"row"}} className="col text-center">
          <h3 style={{marginTop:30,textAlign:"center",fontSize:20}}>Update Course Description</h3>
          <textarea  placeholder="Description"value={this.state.description} onChange={this.descriptionhandler} type="text" name="course_description" className="nameinput"/>
          <button onClick={()=>this.submitdescription(t.id)} className="namebutton">Update</button>
          <h3 style={{color:"red",fontSize:18}}>{this.state.description_err}</h3>
          </div>
       
          
        

         

        
    <div style={{marginTop:100}} className=" col text-center">
        <button onClick={()=>{this.delete_course(t.id)}} className="delete-course">Delete Course</button>
    </div>




                   </div>
              )
                  
            }
            
              
          </div>

      )
  }

}

export default EditCourse;