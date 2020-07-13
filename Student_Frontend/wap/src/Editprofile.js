/*e.preventDefault() function in any line will prevent
the the form from submitting automatically
*/


import React from 'react';
import StudentLogin from './StudentLogin';
import './EditProfile.css';
















class Editprofile extends React.Component{

   
constructor(props){
    super(props);
    this.state={
        student_img:null,
        name:"",
        nameerr:"",
        bioerr:"",
        imgerr:"",
        bio:"",
        img_loading:false,
        name_loading:false,
        bio_loading:false,
        
    }
}











filechangehandler=(event)=>{
    this.setState({student_img:event.target.files[0]})
  }

  uploadhandler=(e)=>{

    

   e.preventDefault();
     /*I'm checking to see wether the bio is empty or not
    If it's  empty, we throw error message*/
   if(this.state.student_img==null){
    this.setState({
        imgerr:"Photo Required"
    })
}
   else{
   //Otherwise we send the image to the server
    
   this.setState({
    img_loading:true
})


   const formData=new FormData();
   formData.append("student_img",this.state.student_img)
   
   fetch("http://127.0.0.1:5000//student_update_profile_img",
   {
     method:"POST",
     body:formData,
     headers:{
         Authorization:`${localStorage.getItem("student_token")}`
     }

   }
   )
   .then(res=>{
       alert("Profile photo updated");
       this.setState({
           img_loading:false
       })
    })
   .catch(err=>{alert("Network Error")})
}
  }









namehandler=(e)=>{
 
this.setState({
    [e.target.name]:e.target.value
})

      /*I'm checking to see wether the name is empty or not
    If it's  empty, we throw error message*/
    if (this.state.name.trim()===""){
        this.setState({
            nameerr:"Name Required"
         })
    }

    else if(this.state.name.length<6){
        this.setState({
            nameerr:"Name must be atleast 6 characters long"
        })
    }
    else{
        this.setState({
            nameerr:""
        })
    }
   
}




submitname=(e)=>{
    e.preventDefault();
        /*I'm checking to see wether the name is empty or not
    If it's  empty, we throw error message*/
    if (this.state.name.trim()===""){
        this.setState({
            nameerr:"Name Required"
         })
    }

    else if(this.state.name.length<6){
        this.setState({
            nameerr:"Name must be atleast 6 characters long"
        })
    }
    

    else{

    
      //Otherwise we send data to the server for processing

      this.setState({
        name_loading:true
    })

    fetch("http://127.0.0.1:5000/student_update_name",{
        method:"POST",
        "Content-Type":"Application/json",
         body:JSON.stringify(this.state.name),
    
    
    headers:{
        Authorization:`${localStorage.getItem("student_token")}`
    }
}
    )
    .then(res=>res.json())
    .then(data=>{
        alert(data.message);
        this.setState({
            name_loading:false
        })
    }).catch(err=>{console.log("No Network")})
} 
}







 

  render(){
      return(
          <div>
          <div style={{flexDirection:"row"}} className="col text-center">
          <h3 style={{marginTop:100,textAlign:"center",fontSize:20}}>Update profile picture</h3>
          <input onChange={this.filechangehandler} type="file" name="instructor_img" className="inputfile1"/>
          {this.state.img_loading==false?<button onClick={this.uploadhandler} className="upload-button">Upload</button>:
          <button onClick={this.uploadhandler} className="upload-button">Uploading....</button>
        }
          <h3 style={{color:"red",fontSize:18}}>{this.state.imgerr}</h3>
          </div>

        

        
         
         

          <div style={{flexDirection:"row"}} className="col text-center">
          <h3 style={{marginTop:30,textAlign:"center",fontSize:20}}>Update name</h3>
          <input  placeholder="Name"value={this.state.name} onChange={this.namehandler} type="text" name="name" className="nameinput"/>
          {this.state.name_loading==false?<button onClick={this.submitname} className="namebutton">Update</button>:
          <button onClick={this.submitname} className="namebutton">Updating....</button>
          }
          <h3 style={{color:"red",fontSize:16}}>{this.state.nameerr}</h3>
          </div>




          <div style={{flexDirection:"row"}} className="col text-center">
          <button className="logoutbutn" onClick={()=>{localStorage.removeItem("student_token");this.props.history.push("StudentLogin")}}>Logout Account</button>
          </div>

        





          </div>
      )
  }

}

export default Editprofile;