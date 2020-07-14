import React from 'react';
import {Route,BrowseRouter as Router,Link,NavLink} from 'react-router-dom';
import "./Singlecourse.css";


class SingleCourse extends React.Component{

    constructor(props){
        super(props);
        this.state={
            video_count:[],
            pdf_count:[],
            question_count:[],
            description:[]
        }
    }

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
        video_count:data.video_count,
        pdf_count:data.pdf_count,
        question_count:data.question_count,
        description:data.description
       })
    })
 
  }














    render(){
        return(
          
            <div className="row">


 


<div style={{marginTop:100}} className="row    col text-center row-single">
     
   {
       this.state.video_count.map(t=>
               
                    
    <div  className="col-lg-3 col-xs-12 col-xl-3  col-sm-12 col-md-3 video_count-container col text-center "> 
    <div className="col text-center">

        <h3 className="video_count-text"> {t.totalvideos} Videos</h3>
      
   {/* I'm doing this mapping or looping because I want to get the course id and map it to the
   videos.This will help the teacher to view the videos he has uploaded
   */}
{
  this.state.description.map(t=>
    <Link to={`/viewvideos/${t.id}`}><button className="view-butns">View</button></Link>
    )
}

        </div>
        </div>     
 )
   }







 {
  this.state.pdf_count.map(t=>
               
                    
    <div  className="col-lg-3  col-xs-12 col-xl-3  col-sm-12 col-md-3 video_count-container col text-center "> 
    <div className="col text-center">

        <h3 className="video_count-text"> {t.totalpdfs} PDFs</h3>
      
      {/* I'm doing this mapping or looping because I want to get the course id and map it to the
   videos.This will help the teacher to view the pdfs he has uploaded
   */}
{
  this.state.description.map(t=>
    <Link to={`/viewpdfs/${t.id}`}><button className="view-butns">View</button></Link>
    )
}
     
        </div>
        </div>
        
        
        

            
        )
   }

        
        
{
  this.state.question_count.map(t=>
               
                    
    <div  className="col-lg-3  col-xs-12 col-xl-3  col-sm-12 col-md-3 video_count-container col text-center "> 
    <div className="col text-center">

        <h3 className="video_count-text"> {t.totalquestions} Created Questions</h3>
      
      {/* I'm doing this mapping or looping because I want to get the course id and map it to the
   videos.This will help the teacher to view the pdfs he has uploaded
   */}
{
  this.state.description.map(t=>
    <Link to={`/viewquestions/${t.id}`}><button className="view-butns">View Them</button></Link>
    )
}
     
        </div>
       
        </div>
        
        
  

            
        )
   }
     

            
        
</div>
</div>



















 



        ) 
}

}
export default SingleCourse;