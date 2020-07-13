import React from 'react';
import {Link} from 'react-router-dom';
import "./ExploreCourses.css";


class ExploreCourses extends React.Component{

    constructor(props){
        super(props);
        this.state={
            courses:[]
        }
    }

    componentDidMount(){
        fetch("http://127.0.0.1:5000/courses",
        {
            method:"GET"
        }
        )
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                courses:data
            })
        })
        .catch(err=>console.log(err))
    }


render(){
    return(
      <div className="row course-background">
          {
              this.state.courses.map(t=>{
                    return(
                        
                        <div className="course-container col-md-4 col-xl-4 col-sm-12 col-xs-12 col-lg-4">
                        <div className="course-header"><img className="course-img" src={`http://127.0.0.1:5000${t.course_img}`}/></div>
                        <div className="course-footer  col text-center"><h3 className="course-name">{t.name}</h3>
                       <Link to={`singlecourse/${t.id}`}><button className="enroll">View</button></Link>
                        </div>
                    </div>
                    
                    )
              })
                
          }
      </div>
    )
}

}

export default ExploreCourses;