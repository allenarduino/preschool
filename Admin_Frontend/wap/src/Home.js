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
               <h2 className="background-text1">Welcome Admin</h2>
                 
                   </div>
               
            </div>
        </div>
        
    )
}
}
export default Home;