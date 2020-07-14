import React from 'react';
import {Link} from 'react-router-dom';
import "./ViewVideos.css";
import video_icon from './Images/video-play-256.png';

class ViewVideos extends React.Component{



   constructor(props){
       super(props);
       this.state={
           videos:[]
       }
   }


   componentDidMount(){
       fetch(`http://127.0.0.1:5000/view_videos/${this.props.match.params.id}`,
       {
           method:"GET",
           "Content-Type":"application/json",
       }
       )
       .then(res=>res.json())
       .then(data=>{
           this.setState({
               videos:data
           })
       })
       .catch(err=>console.log(err));
   }








    render(){
        return(
            <div style={{paddingTop:100}} className="row course-background">
            {
                this.state.videos.map(t=>{
                      return(
                          
                          <div className="course-container col-xl-3 col-md-6  col-sm-12 col-xs-12 col-lg-3">
                             
                          <div className="video-header"> 
                        
                          <img className="video-img" src={`http://127.0.0.1:5000${t.video_coverphoto}`}/>
                         <div className="col text-center"> <img src={video_icon} style={{marginTop:-200,height:50}}/></div>

                          </div>
                         
                          <div className="course-footer  col text-center"><h3 className="video-name">{t.title}</h3>
                          <Link to={`/singlevideo/${t.id}`}><button className="enroll">View</button></Link>
                          
                          </div>
                      </div>
                      
                      )
                })
                  
            }
        </div>

        )
    }
}

export default ViewVideos;