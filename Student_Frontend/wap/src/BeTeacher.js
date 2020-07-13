import React from 'react';
import './BeTeacher.css';

class BeTeacher extends React.Component{

    render(){
        return(
            <div  className="row be-teacher-background">
                 <div  className="col-lg-7 col-xs-10 col-xl-7  col-sm-10 col-md-10 be-teacher-container col text-center "> 
    
                      <h3 className="display-message">
                       Click <a href="/teach" className="teach-link">here</a>  to register if you want to teach online
                      </h3>
            </div>
            
            </div>
        )
    }

}

export default BeTeacher;