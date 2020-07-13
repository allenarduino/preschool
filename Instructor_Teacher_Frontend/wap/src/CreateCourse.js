import React from 'react';
import './CreateCourse.css';
import DisplyOne from './DisplayOne';


class CreateCourse extends React.Component{

constructor(props){
    super(props);
    this.state={
        name:"",
        course_img:null,
        description:"",
        level:"shs",
        name_err:"",
        description_err:"",
        img_err:"",
        loading:false

    }
}



texthandler=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })

    if (this.state.name.trim()===""){
        this.setState({
            name_err:"Course Name must not be empty"
        })
    }
    else{
        this.setState({
            name_err:""
        })
    }

    if(this.state.description.trim()===""){
        this.setState({
            description_err:"Course description required"
        })
    }

     if(this.state.description.length<90){
         this.setState({
             description_err:"Course Description must be at least 90 characters"
         })
     }
     else{
         this.setState({
             description_err:""
         })
     }


     if(this.state.name.length<10){
         this.setState({
             name_err:"Name must be atleast 10 characters long"
         })
     }

   
}

course_imghandler=(e)=>{
    this.setState({
        course_img:e.target.files[0]
    })

    

    
}


levelhandler=(e)=>{
    this.setState({
        level:e.target.value
    })
}

submitpost=(e)=>{
e.preventDefault();
let data=new FormData();
data.append("course_img",this.state.course_img);
data.append("name",this.state.name);
data.append("level",this.state.level)
data.append("description",this.state.description)




if(this.state.name==null){
    this.setState({
        name_err:"Course Name required"
    })
}


else if (this.state.name<10){
this.setState({
    name_err:"Course name must be atleast 10 characters"
})
}

else if(this.state.description.length<90){
    this.setState({
        description_err:"Course description must be atleast 90 characters long"
    })

}
else if(this.state.description.trim()===""){
    this.setState({
        description_err:"Description required"
    })
}

else if(this.state.course_img==null){
    this.setState({
        img_err:"Course image required"
    })
}



else{
    //Else, we send data to the server for processing

    this.setState({
        loading:true
    })

fetch("http://127.0.0.1:5000/create_course",{
  method:"POST" , 
  body:data,
  headers:{
      Authorization:`${localStorage.getItem("instructor_token")}`
  }
}
)
.then(res=>res.json())
.then(data=>{alert(data.message);
    this.setState({
        loading:true
    })
this.props.history.push("display")
}
)
.catch(err=>alert(err))
}
}




render(){
    return(
       
        <div className="row ">
        <div className="bg">
      
              <div className="form-container ">
                  <h3 style={{fontSize:20,color:"#333"}}>Create a course</h3> 


                  <div style={{flexDirection:"row"}} className="col text-center">
        <h3 style={{marginTop:20,textAlign:"center",fontSize:20}}>Name of course</h3>
        <input style={{width:200}} onChange={this.texthandler} type="text" name="name" value={this.state.name} className="courseinput"/>
        <h3 style={{color:"red",fontSize:16}}>{this.state.name_err}</h3>
        </div>

        <div style={{flexDirection:"row"}} className="col text-center">
        <h3 style={{marginTop:20,textAlign:"center",fontSize:20}}>SHS/JHS</h3>
        <select className="selectinput" value={this.state.level} onChange={this.levelhandler}>
        <option value="shs">SHS</option>
        <option value="jhs">JHS</option>
      </select>
      </div>


        <div style={{flexDirection:"row"}} className="col text-center">
        <h3 style={{marginTop:20,textAlign:"center",fontSize:20}}>Description</h3>
        <textarea value={this.state.description} style={{width:200}} onChange={this.texthandler} type="text" name="description" className="courseinput"/>
        <h3 style={{color:"red",fontSize:16}}>{this.state.description_err}</h3>
        </div>
                  
                  <div style={{flexDirection:"row"}} className="col text-center">
        <h3 style={{marginTop:20,textAlign:"center",fontSize:20}}>Course Coverphoto</h3>
        <input    style={{width:200}} onChange={this.course_imghandler} type="file" name="post_media" className="inputfile1"/>
        <h3 style={{color:"red",fontSize:16,marginTop:-20}}>{this.state.img_err}</h3>
        </div>
        
                 <div className="col text-center">
                     {this.state.loading==false?
                       <input type="submit" value='Post' onClick={this.submitpost} style={{width:200}} className="formbutton"/>
                     :  <input type="submit" value='Sending......' onClick={this.submitpost} style={{width:200}} className="formbutton"/>}
               
                 </div>
        
  
        </div>
     </div>
     </div>
     
    )
}
}

export default CreateCourse;