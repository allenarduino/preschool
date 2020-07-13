import React from 'react';
import {Link} from 'react-router-dom';
import "./StudentProfile.css";




class ViewQuestions extends React.Component{



   constructor(props){
       super(props);
       this.state={
          questions:[],
           score:0,
           responses:0
       }
   }


//Function to fetch question from the back end Api
getQuestions=(id)=>{

    fetch(`http://127.0.0.1:5000/view_question/${this.props.match.params.id}`,
    {
        method:"GET",
        "Content-Type":"application/json"
    }
    )
    .then(res=>res.json())
    .then(data=>{
        this.setState({
            questions:data
        })
    })
    .catch(err=>console.log(err))


}



}











export default ViewQuestions;