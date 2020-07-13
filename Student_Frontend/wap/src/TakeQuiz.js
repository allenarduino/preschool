import React from 'react';
import './TakeQuiz.css';


class TakeQuiz extends React.Component{

constructor(props){
    super(props);
    this.state={
        userAnswer:null,
        quiz_data:[],
        currentIndex:0,
        options:[],
        score:0,
        quiz_end:false,
        disabled:true//Disables next button if user is yet to select an option

    }


    }



//We load the questions from the server if component mounts

componentDidMount(){
    const {currentIndex}=this.state;
    fetch(`https://merl.herokuapp.com/take_quiz/${this.props.match.params.id}`,
    {
        method:"GET",
        "Content-Type":"application/json",
    }
    )
    .then(res=>res.json())
    .then(data=>{
       this.setState(()=>{
           return{
               quiz_data:data,
               question:data[this.state.currentIndex].question,
               correct_answer:data[this.state.currentIndex].correct_answer,
               options:data[this.state.currentIndex].options
           };
       })
       
    })
    .catch(err=>console.log(err))
}














     //We need to know the user's answer,the correct answer and the score.

     next_question_handler=()=>{
        const {userAnswer,correct_answer,score}=this.state;

        //Comparing the userAnswer with the actual correct answer

        if(userAnswer===correct_answer){
            this.setState({
                score:score+1
            })

            this.setState({
                currentIndex:this.state.currentIndex+1,
                userAnswer:null,
            })
            console.log(this.state.currentIndex);
        } 


    }
  

    
   




  

//Function to check check if the student answered  so that we enable or disable next function

checkAnswer=(answer)=>{
    this.setState({
        userAnswer:answer,
        disabled:false,
    })
}





finish_handler=()=>{
    if(this.state.currentIndex===this.state.questions.length-1){
        this.setState({
            quiz_end:true
        })
    }
}












/*Now we update the component................
when the compinent updates or when the currrent index changes,
we have to set the questions and also disable the disable the
options so that the user or student will not click on the options.

When the component updates,we are going to load another question and disables
the next button until user or student selects an option
*/


componentDidUpdate(Prevprops,prevState){
    
    if(this.state.currentIndex!==prevState.currentIndex){
    
         this.setState(()=>{
             return{
               disabled:true,
               quiz_data:this.state.quiz_data,
               question:this.state.quiz_data[this.state.currentIndex].question,
               options:this.state.quiz_data[this.state.currentIndex].options,
               correct_answer:this.state.quiz_data[this.state.currentIndex].correct_answer
             };
         })
    
    }

}



//Now we render the data into the  UI

render(){
   const {options,userAnswer,currentIndex,quiz_end}=this.state;


   if(quiz_end){
       return(
           <div>
          <di>jjjjjjj</di>
           </div>
       );

       
   }
   else{
       return(
           <div  className="col text-center col-lg-7 col-xs-10 col-xl-7  col-sm-10 col-md-10 profile-container col text-center">
               <div className="quiz-container">
               <h4 style={{marginTop:100}}>{this.state.question}</h4>
                 { 
                    this.state.options.map(option=>(
                        <p key={option.id}
                        className={`initial-options  ${this.state.userAnswer===option? "selected":null}`}
                        onClick={()=>this.checkAnswer(option)}
                        >
                         {option}
                        </p>
                    ))
                 }

                 {
                     this.state.currentIndex<this.state.quiz_data.length-1&&
                     <button className="finish-butn"
                     disabled={this.state.disabled}
                     onClick={this.next_question_handler}
                     >
                          Next
                     </button>
                 }

                 {
                     this.state.currentIndex===this.state.quiz_data.length-1&&(
                         <button
                         onClick={this.finish_handler}
                         >Finish</button>
                     )
                 }
                 
               </div>
           </div>
       )
   }
}








}

export default TakeQuiz;