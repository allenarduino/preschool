import React from 'react';
import {Link} from 'react-router-dom';
import "./Mycourses.css";
import "./Displays.css";

//This class component is for students to view their enrolled courses

class Mycourses extends React.Component{

    constructor(props){
        super(props);
        this.state={
            mycourses:[],
            searched_courses:[],
            message:false,
            name:"",
            loading:true

        }
    }

   




/*Function to throw message if search result is empty and
to set mycourses state to an empty array if the search 
result is empty.This will throw an empty page with message
*/
check=()=>{
    this.setState({
        shscourses:[]
    })
/*If we return empty courses, send the message 
by changing the state
*/
    if(this.state.searched_courses.length===0){
      this.setState({
          message:true
      })
    }
}





//Function to search for courses.........................
search=()=>{
     //Please look at this function at the top it's  very important
    this.check();
     
    this.setState({
        mycourses:[]
    })
    const data=new FormData();
    data.append("name",this.state.name)
    fetch("http://127.0.0.1:5000/search_my_enrolled_courses",

    {
        method:"POST",
        headers:{
            Authorization:`${localStorage.getItem("student_token")}`
        },
        "Content-Type":"application/json",
        
        body:data
    }
    )
    .then(res=>res.json())
    .then(data=>{
        this.setState({
            searched_courses:data,
            
        })
        //I did this because of testing in the console
        console.log(data)
        
    })
    .catch(err=>console.log(err))
    

    
    
}

handleinput=(e)=>{
   
this.setState({
    [e.target.name]:e.target.value
})



}















   unenroll=(id)=>{


          if (window.confirm("Are you sure you want to unenroll in this course")){

          


       fetch(`http://127.0.0.1:5000/un_enroll/${id}`,
       {
           method:"DELETE",

           headers:{
               Authorization:`${localStorage.getItem('student_token')}`
           }



       }
       )
       .then(res=>res.json())
       .then(data=>{
           //alert(data)
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
       .catch(err=>console.log(err))
    }
   }





   componentDidMount(){
    fetch("http://127.0.0.1:5000/my_enrolled_courses",
    {
        methods:"GET",
        "Content-Type":"application/json",

        headers:{
            Authorization:`${localStorage.getItem("student_token")}`
        }
    }
    )
    .then(res=>res.json())
    .then(data=>{
        this.setState({
            mycourses:data,
            loading:false
        })

    })
}








    render(){
        return(
            
      <div style={{paddingTop:150}} className="row">

                   {/**********Search nav with search */}
        <div className="search-nav">
 <input type="text"
  value ={this.state.name}
  name="name"
  onChange={this.handleinput}
  onKeyUp={this.search}
   placeholder="Search courses......" 
   className="search-input"/>
   <button className="search-button" onClick={this.search}>Search</button>
 </div>
                {/**********End of search-bar */}





               
               {this.state.searched_courses.length>0?
               
                  

                   
                    this.state.searched_courses.map(t=>
                
                        <div className="course-container  col-md-6 col-xl-4 col-sm-12 col-xs-12 col-lg-3">
                        <div className="course-header"><img className="course-img" src={`https://merl.herokuapp.com${t.course_img}`}/></div>
                        <div className="course-footer  col text-center"><h3 className="course-name">{t.name}</h3>
                        <div className="">
                       <Link to={`singlecourse/${t.course_id}`}><button className="acess-butn">Acess</button></Link>
                       <button onClick={()=>{this.unenroll(t.course_id)}} className="enroll-butn">Unenroll</button>
                       </div>
                        </div>
                       </div>
                       
                        )
                :null}
              



{              this.state.loading==false?
               this.state.mycourses.map(t=>
                    <div className="course-container  col-md-6 col-xl-4 col-sm-12 col-xs-12 col-lg-3">
                <div className="course-header"><img className="course-img" src={`http://127.0.0.1:5000${t.course_img}`}/></div>
                <div className="course-footer  col text-center"><h3 className="course-name">{t.name}</h3>
                <Link to={`singlecourse/${t.course_id}`}><button className="acess-butn">Acess</button></Link>
                       <button onClick={()=>{this.unenroll(t.course_id)}} className="enroll-butn">Unenroll</button>
                </div>
            </div>
                   
                   )
           :<div style={{marginTop:200}} className="col text-center"><h1>{this.state.message}</h1></div>}
        </div>
        
        )
}
}

export default Mycourses;