import React from 'react';
//import './Addvideo.css';
import {Route,BrowseRouter as Router,Link,NavLink} from 'react-router-dom';
import "./SingleCourse.css";


class SingleCourse extends React.Component{

    constructor(props){
        super(props);
        this.state={
            video_count:[],
            pdf_count:[],
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
        description:data.description
       })
    })
 
  }


    render(){
        return(
            <div className="row">
{/*We are doing this because we want to grap the course_id from the descrption array*/}   
      { this.state.description.map(t=>    
  <div className="sub-mynav">
 <ul className="sub-nav-closer">
     <li className= "sub-nav-items"><NavLink className="sub-nav-links" to={`/viewpdfs/${t.id}`}>View pdfs</NavLink></li>
     <li className= "sub-nav-items"><NavLink className="sub-nav-links" to={`/viewvideos/${t.id}`}>View videos</NavLink></li>
     <li className= "sub-nav-items"><NavLink className="sub-nav-links" to={`/takequiz/${t.id}`}>Take Quiz</NavLink></li>
 </ul>
 </div>
      )
      }

 <div className="singlecourse-background  ">
     <div style={{display:"flex",justifyContent:"center"}} className="row">
   {
       this.state.video_count.map(t=>
               
                    
    <div  className="col-lg-3 col-xs-12 col-xl-3  col-sm-12 col-md-3 video_count-container col text-center "> 
    <div className="col text-center">

        <h3 className="video_count-text"> {t.totalvideos} Videos</h3>
      
                        
        </div>
        </div>
        
        
        

            
        )
   }



{
       this.state.pdf_count.map(t=>
               
                    
    <div  className="col-lg-3  col-xs-12 col-xl-3  col-sm-12 col-md-3 video_count-container col text-center "> 
    <div className="col text-center">

        <h3 className="video_count-text"> {t.totalpdfs} PDFs</h3>
      
                        
        </div>
        </div>
        
        
        

            
        )
   }











</div>
   </div>


   


</div>
 

      

        ) 
}

}
export default SingleCourse;