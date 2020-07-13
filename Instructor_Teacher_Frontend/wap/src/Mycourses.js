import React from 'react';
import './Mycourses.css';
import {Link,NavLink} from 'react-router-dom';

class Mycourses extends React.Component{
constructor(props){
    super(props);
    this.state={
        mycourses:[],
        searched_courses:[],
        name:"",
        message:""

    }

}



/*Function to throw message if search result is empty and
to set mycourses state to an empty array if the search 
result is empty.This will throw an empty page with message
*/
check=()=>{
    this.setState({
        mycourses:[]
    })
/*If we return empty courses, send the message 
by changing the state
*/
    if(this.state.mycourses.length===0){
      this.setState({
          message:"No Result"
      })
    }
}




//Function to search for courses 
search=()=>{
   
    //Please look at this function at the top it's  very important
    this.check();
     
    const data=new FormData();
    data.append("name",this.state.name)
    fetch("http://127.0.0.1:5000/search_my_created_courses",

    {
        method:"POST",
        headers:{
            Authorization:`${localStorage.getItem("instructor_token")}`
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



    componentDidMount(){

        fetch("http://127.0.0.1:5000/mycourses",
        {
            method:"GET",
            "Content-Type":"application/json",
            headers:{
                Authorization:`${localStorage.getItem("instructor_token")}`
            }
    
        }
        )
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                mycourses:data
            })
            console.log(data)
            
        })
        .catch(err=>console.log(err))
    
        
    
    }

render(){
    return(
            
             
         

      <div>



        <div style={{marginTop:150}}  className="row ">
            {/**********Search nav with search */}
        <div className="search-nav">
 <input type="text"
  value ={this.state.name}
  name="name"
  onKeyUp={this.search}
  onChange={this.handleinput}
  
   placeholder="Search courses......" 
   className="search-input"/>
      <button className="search-button"  onClick={this.search}>Search</button>
 </div>
                {/*****************End of search-bar ************/}


                {
               this.state.mycourses.map(t=>
                    <div className="course-container  col-md-6 col-xl-4 col-sm-12 col-xs-12 col-lg-3">
                <div className="course-header"><img className="course-img" src={`http://127.0.0.1:5000${t.course_img}`}/></div>
                <div className="course-footer  col text-center"><h3 className="course-name">{t.name}</h3>
               <Link to={`singlecourse/${t.id}`}><button className="enroll">Content</button></Link>
               <Link style={{marginLeft:10}} to={`coursedescription/${t.id}`}><button className="enroll">Description</button></Link>
                </div>
            </div>
                   
                   )
           }












           {
    
                
               
              this.state.searched_courses.length>0?
              this.state.searched_courses.map(t=>
                
                        
                <div className="course-container  col-md-6 col-xl-4 col-sm-12 col-xs-12 col-lg-3">
                <div className="course-header"><img className="course-img" src={`http://127.0.0.1:5000${t.course_img}`}/></div>
                <div className="course-footer  col text-center"><h3 className="course-name">{t.name}</h3>
               <Link to={`singlecourse/${t.id}`}><button className="enroll">Content</button></Link>
               <Link style={{marginLeft:10}} to={`coursedescription/${t.id}`}><button className="enroll">Description</button></Link>
                </div>
            </div>
               
              ):<div style={{marginTop:200}} className="col text-center"><h1>{this.state.message}</h1></div>

              
              }


           



                 
           
     </div>
     </div>
     


    
    )
}

}

export default Mycourses;