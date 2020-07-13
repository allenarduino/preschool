import React, { Component } from 'react';
import Nav from './Nav';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './Home';
import AdminLogin from './AdminLogin';
import AdminProfile from './AdminProfile';
import SingleCourse from './SingleCourse';
import ViewVideos from './ViewVideos';
import ViewPdfs from './ViewPdfs';
import ViewQuestions from './ViewQuestions';
import JhsCourses from './JhsCourses';
import ShsCourses from './ShsCourses';
import ViewCourse from './ViewCourse';
import CourseDescription from './CourseDescription';
import Teachers from './Teachers';
import SingleVideo from './SingleVideo';
import SinglePdf from './SinglePdf';












export default class App extends React.Component {
 

 render(){

 
  
 
    return (
    
  <Router>

    <div>
    
 <Nav/>
 <div className=" container-fluid">
 
   <Switch>
   
 <Route exact path="/" component={Home} />
 <Route path="/adminlogin" component={AdminLogin} />
 <Route path="/adminprofile" component={AdminProfile} />
 <Route path="/singlecourse/:id" component={SingleCourse}/>
 <Route path="/viewvideos/:id" component={ViewVideos}/>
 <Route path="/viewpdfs/:id" component={ViewPdfs}/>
 <Route path="/viewquestions/:id" component={ViewQuestions}/>
 <Route path="/jhscourses" component={JhsCourses}/>
 <Route path="/shscourses" component={ShsCourses}/>
 <Route path="/viewcourse/:id" component={CourseDescription}/>
 <Route path="/coursedescription/singlecourse/:id" component={CourseDescription}/>
 <Route path="/teachers" component={Teachers}/>
 <Route path="/singlevideo/:id" component={SingleVideo}/>
 <Route path="/singlepdf/:id" component={SinglePdf}/>
 

 



 

 </Switch>
 
 </div>
 
 </div>
 
</Router>

    )

   

  }

}



