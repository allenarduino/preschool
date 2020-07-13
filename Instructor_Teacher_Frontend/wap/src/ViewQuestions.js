import React from 'react';
import {Link} from 'react-router-dom';
import "./ViewQuestion.css";

class ViewQuestions extends React.Component{



   constructor(props){
       super(props);
       this.state={
           questions:[]
       }
   }


   

   componentDidMount(){
    fetch(`http://127.0.0.1:5000/view_questions/${this.props.match.params.id}`,
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


  

delete_question=(id)=>{
    if (window.confirm("Delete Question?")){

    fetch(`http://127.0.0.1:5000/delete_question/${id}`,
    {
        method:"DELETE",

    
    }
    )
    .then(res=>res.json())
    .then(data=>{
        //alert(data)
        let questionlist=this.state.questions
        for(let i=0;i<questionlist.length;i++){
            let q=questionlist[i]
            if(q.id===id){
                questionlist.splice(i,1)
                break
            }
        }
        this.setState({questions:questionlist})
    
    
    })
    .catch(err=>console.log(err))



}
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    




    render(){
        return(
            <div className="row">
            <div className="profile-background">
    {/********This is for testing<button onClick={()=>{localStorage.removeItem("instructor_token")}} style={{marginTop:200}} >Logout</button>**********/}
         

{
    this.state.questions.map(t=>
        <div style={{marginTop:20,marginBottom:20}}  className="col-lg-7 col-xs-10 col-xl-7  col-sm-10 col-md-10 profile-container  "> 
        
        <ul>
            <li  style={{marginLeft:10}}>
                <h3 className="float-left question-text">{t.question}</h3>
            </li>
        </ul>
            <div style={{display:"flex",flexDirection:"column"}}>
           <div  className="option-container"><h3 style={{fontSize:15}} className="float-left">{t.options[0]}</h3></div>
           <div  className="option-container"><h3 style={{fontSize:15}} className="float-left">{t.options[1]}</h3></div>
           <div  className="option-container"><h3 style={{fontSize:15}} className="float-left">{t.options[2]}</h3></div>
           <div  className="option-container"><h3 style={{fontSize:15}} className="float-left">{t.options[3]}</h3></div>
           {/*****************Answer section************************* */}
           <div style={{marginLeft:10}} ><b>Answer= {t.correct_answer}</b>
           <button onClick={()=>this.delete_question(t.id)} className="question-delete-button">Delete</button>
           </div>
            </div>
      
                 
    </div>


        )
} 
         
</div>     
</div>

        )
    }
}

export default ViewQuestions;