import React from 'react';
import {Link} from 'react-router-dom';
import './JhsCourses.css';


class ShsCourses extends React.Component{


    constructor(props){
        super(props);
        this.state={
            shscourses:[],
            //enrolled:false
            searched_courses:[],
            name:"",
            message:"",
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
    if(this.state.shscourses.length===0){
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
    fetch("https://merl.herokuapp.com/search_shs_courses",

    {
        method:"POST",
       
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
        fetch("https://merl.herokuapp.com/shs_courses",{
           methods:"GET",
            "Content-Type":"application/json"
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                shscourses:data,
                loading:false
            })
        })
        
    }


   






    render(){
        return(
            <div style={{paddingTop:150}} className="row ">





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



{   this.state.loading==false?
    this.state.shscourses.map(t=>
         <div   className="course-container  col-md-6 col-xl-4 col-sm-12 col-xs-12 col-lg-3">
     <div className="course-header"><img className="course-img" src={`http://127.0.0.1:5000${t.course_img}`}/></div>
     <div className="course-footer  col text-center"><h3 className="course-name">{t.name}</h3>
     <Link to={`viewcourse/${t.id}`}><button className="enroll">View</button></Link>
     </div>
 </div>
        
        )
 :<div  className="col text-center"><h3>Loading....</h3></div>}



            {
                this.state.searched_courses.length>0?
                this.state.searched_courses.map(t=>
                      
                          
                          <div style={{marginTop:-50}} className="course-container col-md-6 col-xl-4 col-sm-12 col-xs-12 col-lg-3">
                             
                          <div className="course-header"> 
                        
                          <img className="course-img" src={`http://127.0.0.1:5000${t.course_img}`}/>
                        
                          </div>
                          
                          <div className="course-footer  col text-center"><h3 className="course-name">{t.name}</h3>
                          <Link to={`viewcourse/${t.id}`}><button className="enroll">View</button></Link>
                          </div>
                      </div>
                      
                      ):<div style={{marginTop:200}} className="col text-center"><h3>{this.state.message}</h3></div>  
            }







        </div>
        )
    }
}

export default ShsCourses;