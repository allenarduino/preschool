import React from 'react';
import  jwt_decode from 'jwt-decode';
import {Link} from 'react-router-dom';
import { Fade } from "react-reveal";
import './Home.css';
import Typewriter from 'typewriter-effect';
import imageone from './Images/freepik2.png';
import imagetwo from './Images/finding-variety.png';
import imagethree from './Images/5584.jpg';
import imagefour from './Images/finding-effortless.png';
import student_pic from './Images/Highschool3.png';
import freepik from './Images/freepik2.png';
import freepik_two from './Images/5584.jpg';
import variety from './Images/finding-variety.png';
import expert from './Images/finding-reliable.png';
import effortless from './Images/finding-effortless.png';
import Allen from './Images/allen.jpg';









class Home extends React.Component{

render(){
    return(
       <>
            {/********Home page background image */} 
               <Fade bottom duration={900} distance="40px">     
        <div className="row">
            <div className=" home-background col-lg-12 col-xl-12 col-xs-12 col-sm-12 col-md-12 ">
               <div className="col text-center">
               <h1 className="background-text1">We have faith in the future of our students</h1>
                   <h2 className="background-text2">
                      
     {/*
     <b>
     <Typewriter  
  options={{
   strings:["It's never too late to study","You can make it","Please register now","Education is the key"],
    autoStart:true,
    loop:true,
   pauseFor:600,
    
   }}/>

   </b>
*/}


                   </h2>
                   <div className="button-container">
                   <Link to="/studentsignup"><button  className="r-button">Signup</button></Link>
                   <Link to="/studentlogin"><button  className="l-button">Log  in</button></Link>
                   </div>
                   </div>
                   </div>
                   </div>

        
</Fade>
{/**********End of home page background image************ */}
 <Fade bottom duration={900} distance="40px"> 
<div className="row row-1">  
  <div className="col text-center">
      <h1 className="big-text"><b>WELCOME TO WAP E-LEARNING</b></h1>
      <h3>Get help from well trained teachers</h3>
</div>
</div>
 </Fade> 


<Fade bottom duration={900} distance="40px"> 
<div className="row row-2">
    <div className="col-xl-5">
    <h3 className="list-title"><b>One-to-one live mentorship</b></h3>
    <ol className="ulist">
        <li className="list-one">
            <b>Get help from well trained teachers</b>
        </li>
        <li className="list-one">
            <b>Get free SHS and JHS courses</b>
        </li>
        <li className="list-one">
            <b>Enroll in unlimited number of courses</b>
        </li>

        <li className="list-one">
            <b>Watch unlimited number of tutorial videos</b>
        </li>
       <Link to="/studentsignup"><button className="register">Register</button></Link>
    </ol>
   </div>
   <div className="col-xl-5">
       <img  src={freepik} className="svg-1"/>
   </div>
</div>
</Fade> 



<Fade bottom duration={900} distance="40px"> 
<div className="row row-3">
    <div className="col-xl-5 about-wap-container">
      <img src={student_pic} className="student-pic"/>
      <div className="pink-footer col text-center">
          <b className="ab-title float-left">WAP</b>
          <p className="ab-wap col text-center">
          WAP is an online  platform for JHS and SHS
          students especially students preparing 
          their final exams(BECE/WASSCE).
          If you are a student preparing for 
          your final exams, you are at the 
          right place.

          </p>
      </div>
    </div>

    <div className="col-xl-7 about-wap-2">
    <img  src={freepik_two} className="svg-2"/>
    </div>
</div>
</Fade> 

<div className="col  text-center what">
      <h1 className="big-text"><b>WHAT YOU'LL FIND ON WAP</b></h1>
</div>



<div className="row row-5 col text-center ">
   
          {/***********card_one************* */}
          <Fade bottom duration={900} distance="40px"> 
          <div className="col-xl-3  card-one">
              <img src={variety} className="svg-3"/>
              <div className="col text-center">
              <b className="variety">A variety of courses</b>
              <p className="small-footer-text">From Mathematics and Economics to Science and English language, 
                  our teachers cover it all.</p>
              </div>
      

    </div>
    </Fade>
    {/**************End of card one**************** */}



    {/***********card_one************* */}
    <Fade bottom duration={900} distance="40px"> 
    <div className="col-xl-3  card-one">
              
              <img src={expert} className="svg-3"/>
              
             
              <div className="col text-center">
              <b className="variety">Help  from trained teachers</b>
              <p className="small-footer-text">
              Our teachers go through a strict application and vetting process, leaving only the best.
              </p>
              </div>
    </div>
    </Fade> 
    {/**************End of card one**************** */}






    {/***********card_one************* */}
    <Fade bottom duration={900} distance="40px"> 
    <div className="col-xl-3  card-one">
              
              <img src={effortless} className="svg-3"/>
              
             
              <div className="col text-center">
              <b className="variety">Effortless setup</b>
              <p className="small-footer-text">
              Take advantage of our
              easy set up and billing process 
               to connect with a teacher right away.
              </p>
              </div>
    </div>
    </Fade> 
    {/**************End of card one**************** */}
      </div>


{/*******************Row 6**************************** */}

<div class="team col text-center">
    <h2 className="team-text">The Developer</h2>
    <h1 className="team-text-2">Meet The Amazing Developer behind this innovation</h1>
</div>

<div className="row  row-6 col text-center ">


 {/***********card_one************* */}
 <div className="col-xl-3  card-two">
              
              <img src={Allen} className="team-avatar"/>
              <div className="col text-center">
              <b className="variety">Allen Jones</b>
              <p className="role">
                  CEO and CTO
                  </p>
              </div>
    </div>
    {/****************End of card one***************** */}
   
</div>
</>

      
    )
}
}
export default Home;