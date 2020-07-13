import React from 'react';
import './StudentProfile.css';
import {Link} from 'react-router-dom';
import { object } from 'prop-types';









class StudentProfile extends React.Component{

    constructor(props){
        super(props)
        this.state={
            myprofile:[],
            loading:true
            
        }
    }


    componentDidMount(){
        fetch("http://127.0.0.1:5000/student_profile",
        {
            method:"GET",
            headers:{
                Authorization:`${localStorage.getItem("student_token")}`
            }
        }
        )
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                myprofile:data.profile_info,
                loading:false
                
            })
        })
        .catch(err=>console.log(err))
    }






    render(){
        return(
            <div className="row">
                <div className="profile-background1">
       
    {   this.state.loading==false?
        this.state.myprofile.map(t=>
            <div  className="col-lg-7 col-xs-10 col-xl-7  col-sm-10 col-md-10 profile-container col text-center "> 
            <div className="col text-center">
                                
                <img src={`http://127.0.0.1:5000${t.student_img}`} className="avatar"/>
              <h1 className="name">{t.name}</h1> 
                   <button className="profilebutton2" onClick={()=>{this.props.history.push("Editprofile")}}>Edit profile</button> 
                </div>
                </div>


            )
    :<div className="col text-center loading"><h3>Loading.......</h3></div>} 
    
   </div>     
</div>
                
        )
    }

    
}

export default StudentProfile