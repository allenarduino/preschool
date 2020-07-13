import React from 'react';
import  jwt_decode from 'jwt-decode';
import {Link} from 'react-router-dom';
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
import Enoch from './Images/IMG-20200630-WA0011.jpg';
import Allen from './Images/IMG_20190529_235302_416.jpg';
import Acquah from './Images/IMG-20200630-WA0008.jpg';
import Twumasi from './Images/IMG-20200630-WA0014.jpg';
import Ivan from './Images/IMG-20200630-WA0010.jpg';
import Hotor from './Images/IMG-20200630-WA0012.jpg';
import Tonardo from './Images/IMG-20200630-WA0013.jpg';
import Elija from './Images/IMG-20200630-WA0015.jpg';
import Mohammed from './Images/IMG-20200630-WA0009.jpg';
import Bremang from './Images/WhatsApp Image 2020-06-30 at 18.14.52.jpeg';








class Home extends React.Component{

render(){
    return(
        <div>
            {/********Home page background image */}
            
        <div className="row">
            <div className=" home-background col-lg-12 col-xl-12 col-xs-12 col-sm-12 col-md-12 ">
               <div className="col text-center">
               <h2 className="background-text1">We have faith in the future of our students</h2>


                   <h2 className="background-text2">
                       <b>
        <Typewriter  
  options={{
   strings:["It's never too late to study","You can make it","Please register now","Education is the key"],
    autoStart:true,
     loop:true,
   pauseFor:600,
    
   }}/>
   </b>
                   </h2>
                   <div className="button-container">
                   <Link to="/studentsignup"><button  className="r-button">Signup</button></Link>
                   <Link to="/studentlogin"><button  className="l-button">Log  in</button></Link>
                   </div>
                   </div>
                   </div>
                   </div>

        

{/**********End of home page background image************ */}

<div className="row row-1">
    
  <div className="col text-center">
      <h1 className="big-text"><b>WELCOME TO WAP E-LEARNING</b></h1>
      <h3>Get help from well trained teachers</h3>

</div>

</div>

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



<div className="col  text-center what">
      <h1 className="big-text"><b>WHAT YOU'LL FIND ON WAP</b></h1>
</div>



<div className="row row-5 col text-center ">
   
          {/***********card_one************* */}
          <div className="col-xl-3  card-one">
              
              <img src={variety} className="svg-3"/>
              
             
              <div className="col text-center">
              <b className="variety">A variety of courses</b>
              <p className="small-footer-text">From Mathematics and Economics to Science and English language, 
                  our teachers cover it all.</p>
              </div>
      

    </div>
    {/**************End of card one**************** */}



    {/***********card_one************* */}
    <div className="col-xl-3  card-one">
              
              <img src={expert} className="svg-3"/>
              
             
              <div className="col text-center">
              <b className="variety">Help  from trained teachers</b>
              <p className="small-footer-text">
              Our teachers go through a strict application and vetting process, leaving only the best.
              </p>
              </div>
      

    </div>
    {/**************End of card one**************** */}






    {/***********card_one************* */}
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
    {/**************End of card one**************** */}
      </div>





{/*******************Row 6**************************** */}


<div class="team col text-center">
    <h2 className="team-text">The Amazing Team</h2>
    <h1 className="team-text-2">Meet The Amazing Team behind this innovation</h1>
</div>





<div className="row  row-6 col text-center ">

 {/***********card_one************* */}
 <div className="col-xl-3  card-one">
              
              <img src={Enoch} className="team-avatar"/>
              
             
              <div className="col text-center">
              <b className="variety">Enoch Yeboah</b>
              <p className="role">
                  Project Manager and Front End Developer
                  </p>
              </div>
      

    </div>
    {/**************End of card one**************** */}




 {/***********card_one************* */}
 <div className="col-xl-3  card-one">
              
              <img src={Allen} className="team-avatar"/>
              
             
              <div className="col text-center">
              <b className="variety">Allen Jones</b>
              <p className="role">
                  Full Stack Developer
                  </p>
              </div>
      

    </div>
    {/**************End of card one**************** */}








 {/***********card_one************* */}
 <div className="col-xl-3  card-one">
              
              <img src={Twumasi} className="team-avatar"/>
              
             
              <div className="col text-center">
              <b className="variety">Emmanuel Twumasi</b>
              <p className="role">
                  Back End Developer
                  </p>
              </div>
      

    </div>
    {/**************End of card one**************** */}







 {/***********card_one************* */}
 <div className="col-xl-3  card-one">
              
              <img src={Acquah} className="team-avatar"/>
              
             
              <div className="col text-center">
              <b className="variety">Acquah Ebenezer</b>
              <p className="role">
                  Back End Developer
                  </p>
              </div>
      

    </div>
    {/**************End of card one**************** */}






 {/***********card_one************* */}
 <div className="col-xl-3  card-one">
              
              <img src={Ivan} className="team-avatar"/>
              
             
              <div className="col text-center">
              <b className="variety">Ivan Osei Tutu</b>
              <p className="role">
                  Front End Developer
                  </p>
              </div>
      

    </div>
    {/**************End of card one**************** */}







 {/***********card_one************* */}
 <div className="col-xl-3  card-one">
              
              <img src={Hotor} className="team-avatar"/>
              
             
              <div className="col text-center">
              <b className="variety">Hotor Jasper Aseye</b>
              <p className="role">
                  Front End Developer
                  </p>
              </div>
      

    </div>
    {/**************End of card one**************** */}






 {/***********card_one************* */}
 <div className="col-xl-3  card-one">
              
              <img src={Elija} className="team-avatar"/>
              
             
              <div className="col text-center">
              <b className="variety">Dassah Elija</b>
              <p className="role">
                  Front End Developer
                  </p>
              </div>
      

    </div>
    {/**************End of card one**************** */}





 {/***********card_one************* */}
 <div className="col-xl-3  card-one">
              
              <img src={Tonardo} className="team-avatar"/>
              
             
              <div className="col text-center">
              <b className="variety">Amponsah Kwesi Anthony</b>
              <p className="role">
                  Back End Developer
                  </p>
              </div>
      

    </div>
    {/**************End of card one**************** */}














 {/***********card_one************* */}
 <div className="col-xl-3  card-one">
              
              <img src={Mohammed} className="team-avatar"/>
              
             
              <div className="col text-center">
              <b className="variety">Yakubu Muhammed-jamiu</b>
              <p className="role">
                  Back End Developer
                  </p>
              </div>
      

    </div>
    {/**************End of card one**************** */}






 {/***********card_one************* */}
 <div className="col-xl-3  card-one">
              
              <img src={Bremang} className="team-avatar"/>
              
             
              <div className="col text-center">
              <b className="variety">Bremang Josheph</b>
              <p className="role">
                  Front End Developer
                  </p>
              </div>
      

    </div>
    {/**************End of card one**************** */}












</div>



<div className="row page-footer  ">
<b style={{marginTop:100}} className="col text-center">Copyright@wap</b>
</div>





</div>



   
        
    )
}
}
export default Home;