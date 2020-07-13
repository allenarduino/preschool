import React, { Component } from 'react';
import Nav from './Nav';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import StudentSignup from './StudentSignup';
import StudentLogin from './StudentLogin';
import Home from './Home';
import Editprofile from './Editprofile';
import createHistory from 'history/createBrowserHistory';
import StudentProfile from './StudentProfile';
import ExploreCourses from "./ExploreCourses";
import ShsCourses from './ShsCourses';
import JhsCourses from './JhsCourses';
import Mycourses from './Mycourses';
import SingleCourse from './SingleCourse';
import ViewCourse from './ViewCourse';
import ViewPdfs from './ViewPdfs';
import ViewQuestions from './ViewQuestions';
import ViewVideos from './ViewVideos';
import SingleVideo from './SingleVideo';
import TakeQuiz from './TakeQuiz';
import ForgotPassword from './ForgotPassword';
import SinglePdf from './SinglePdf';
import { tsConstructSignatureDeclaration } from '@babel/types';
import ContactUs from './ContactUs';
import BeTeacher from './BeTeacher';







export const history=createHistory();

history.listen((location,action)=>{
window.scrollTo(0,0)
});


export default class App extends React.Component {
 

 render(){

 
  
 
    return (
    
  <Router history={history}>

    <div>
    
 <Nav/>
 <div className=" container-fluid">
 
   <Switch>
   
 <Route exact path="/" component={Home} />
 <Route  path="/studentsignup" component={StudentSignup}/>
 <Route  path="/studentlogin" component={StudentLogin}/>
 <Route  path="/studentprofile" component={StudentProfile}/>
 <Route path="/Editprofile" component={Editprofile}/>
 <Route path="/courses" component={ExploreCourses}/>
 <Route path="/shscourses" component={ShsCourses}/>
 <Route path="/jhscourses" component={JhsCourses}/>
 <Route path="/mycourses" component={Mycourses}/>
 <Route path="/singlecourse/:id" component={SingleCourse}/>
 <Route path="/viewcourse/singlecourse/:id" component={SingleCourse}/>
 <Route path="/viewcourse/:id" component={ViewCourse}/>
 <Route path="/viewpdfs/:id" component={ViewPdfs}/>
 <Route path="/viewquestions/:id" component={ViewQuestions}/>
 <Route path="/viewvideos/:id" component={ViewVideos}/>
 <Route path="/singlevideo/:id" component={SingleVideo}/>
 <Route path="/takequiz/:id" component={TakeQuiz}/>
 <Route path="/singlepdf/:id" component={SinglePdf}/>
 <Route path="/forgotpassword" component={ForgotPassword}/>
 <Route path="/contact" component={ContactUs}/>
 <Route path="/beteacher" component={BeTeacher}/>
 <Route path="/teach" component={()=>window.location="https://wap-teacher.web.app"}/>

 

 
 

 </Switch>
 
 </div>
 
 </div>
 
</Router>

    )

   

  }

}



