import React, { Component } from 'react';
import Nav from './Nav';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from './Home';
import createHistory from 'history/createBrowserHistory';
import InstructorSignup from './InstructorSignup';
import InstructorLogin from './InstructorLogin';
import InstructorProfile from './InstructorProfile';
import CreateCourse from './CreateCourse';
import CreateQuiz from './CreateQuiz';
import SingleCourse from './SingleCourse';
import Mycourses from './Mycourses';
import DisplayOne from './DisplayOne';
import Editprofile from './EditProfile';
import AddPdf from './AddPdf';
import AddVideo from './AddVideo';
import AddQuiz from './AddQuestion';
import DisplayTwo from './DisplayTwo';
import AddQuestion from './AddQuestion';
import ViewVideos from './ViewVideos';
import ViewPdfs from './ViewPdfs';
import ViewQuestions from './ViewQuestions';
import CourseDescription from './CourseDescription';
import EditCourse from './EditCourse';
import SingleVideo from './SingleVideo';
import SinglePdf from './SinglePdf';








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
 <Route path="/instructorlogin" component={InstructorLogin} />
 <Route path="/instructorprofile" component={InstructorProfile} />
 <Route path="/instructorsignup" component={InstructorSignup}/>
 <Route path="/createcourse" component={CreateCourse}/>
 <Route path="/createquiz" component={CreateQuiz}/>
 <Route path="/singlecourse/:id" component={SingleCourse}/>
 <Route path="/mycourses" component={Mycourses}/>
 <Route path="/display" component={DisplayOne}/>
 <Route path="/editprofile" component={Editprofile}/>
 <Route path="/addpdf/:id" component={AddPdf}/>
 <Route path="/addvideo/:id" component={AddVideo}/>
 <Route path="/addquestion/:id" component={AddQuestion}/>
 <Route path="/viewvideos/:id" component={ViewVideos}/>
 <Route path="/viewpdfs/:id" component={ViewPdfs}/>
 <Route path="/viewquestions/:id" component={ViewQuestions}/>
 <Route path="/coursedescription/:id" component={CourseDescription}/>
 <Route path="/editcourse/:id" component={EditCourse}/>
 <Route path="/singlevideo/:id" component={SingleVideo}/>
 <Route path="/singlepdf/:id" component={SinglePdf}/>
 



 

 </Switch>
 
 </div>
 
 </div>
 
</Router>

    )

   

  }

}



