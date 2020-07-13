import React from 'react';
import  jwt_decode from 'jwt-decode';
import {Link} from 'react-router-dom';

import './Home.css';









class Home extends React.Component{

render(){
    return(
        
        <div className="row">
            <div className="home-background col-lg-12">
               <div className="col text-center">
               <h2 className="background-text1">We have faith in our students' future</h2>
                   <h2 className="background-text2">You can help us do this together</h2>
                   <div className="button-container">
                   <Link to="/instructorsignup"><button  className="r-button">Signup</button></Link>
                   <Link to="/instructorlogin"><button  className="l-button">Log  in</button></Link>
                   </div>
                   </div>
               
            </div>
        </div>
        
    )
}
}
export default Home;