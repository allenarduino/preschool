import React from 'react';
import './Addpdf.css';
import DisplayTwo from './DisplayTwo';


class AddQuestion extends React.Component{
    constructor(props){
        super(props);
        this.state={
            course:[],
            question:"",
            answer:"",
            answer_description:"",
            option_one:"",
            option_two:"",
            option_three:"",
            option_four:"",
        }
    }


    componentDidMount(){
        /*For fetching videos under a particular course
        So the the courses.id is grabbed from the course
        */
         fetch(`http://127.0.0.1:5000/add_question/${this.props.match.params.id}`,
 
   {
     method:"GET",
 
    
 }
 )
 .then(res=>res.json())
 .then(data=>{
     this.setState({
        course:data.course
     })
 
    
 })
 .catch(err=>console.log(err))
     }
 
 
 
     
  //For adding a quiz specific course   
 
  
     titlehandler=(e)=>{
         this.setState({
             [e.target.name]:e.target.value
         })
     }
 
     addquestion(id){
        const data=new FormData();
        
        data.append("question",this.state.question)
        data.append("option_one",this.state.option_one)
        data.append("option_two",this.state.option_two)
        data.append("option_three",this.state.option_three)
        data.append("option_four",this.state.option_one)
        data.append("answer",this.state.answer)
        data.append("answer_description",this.state.answer_description)
      

 
         fetch(`http://127.0.0.1:5000/add_question/${id}`,
         {
             method:"POST",
             body:data,

         }
 
         )
         .then(res=>res.json())
         .then(data=>{
             alert("Question Added");
             
          })
         .catch(err=>{
             console.log(err)
         })
     }
 
 
 
 
 
 
 
 
 
 
 
 
     render(){
         return(
             <div className="row">
        {
          this.state.course.map(t=>{
              const id={t}
              return(
                 <div style={{marginTop:100}} className="form-container ">
                   
 
            
                   <div style={{flexDirection:"row"}} className="col text-center">
         <h3 style={{marginTop:10,textAlign:"center",fontSize:20}}>Question</h3>
         <textarea value={this.state.question}  required={true}  style={{width:200}} onChange={this.titlehandler} type="text" name="question" className="courseinput"/>
         </div>

         <div style={{flexDirection:"row"}} className="col text-center">
         <h3 style={{marginTop:10,textAlign:"center",fontSize:20}}>Option 1</h3>
         <textarea value={this.state.option_one}  required={true}  style={{width:200}} onChange={this.titlehandler} type="text" name="option_one" className="courseinput"/>
         </div>


         <div style={{flexDirection:"row"}} className="col text-center">
         <h3 style={{marginTop:10,textAlign:"center",fontSize:20}}>Option 2</h3>
         <textarea  value={this.state.option_two}  required={true}  style={{width:200}} onChange={this.titlehandler} type="text" name="option_two" className="courseinput"/>
         </div>

         <div style={{flexDirection:"row"}} className="col text-center">
         <h3 style={{marginTop:10,textAlign:"center",fontSize:20}}>Option 3</h3>
         <textarea  value={this.state.option_three}  required={true}  style={{width:200}} onChange={this.titlehandler} type="text" name="option_three" className="courseinput"/>
         </div>

         <div style={{flexDirection:"row"}} className="col text-center">
         <h3 style={{marginTop:10,textAlign:"center",fontSize:20}}>Option 4</h3>
         <textarea  value={this.state.option_four}  required={true}  style={{width:200}} onChange={this.titlehandler} type="text" name="option_four" className="courseinput"/>
         </div>

         <div style={{flexDirection:"row"}} className="col text-center">
         <h3 style={{marginTop:10,textAlign:"center",fontSize:20}}>Answer</h3>
         <textarea  value={this.state.answer}   required={true}  style={{width:200}} onChange={this.titlehandler} type="text" name="answer" className="courseinput"/>
         </div>

         <div style={{flexDirection:"row"}} className="col text-center">
         <h3 style={{marginTop:10,textAlign:"center",fontSize:20}}>Answer Description</h3>
         <textarea  value={this.state.answer_description}   required={true}  style={{width:200}} onChange={this.titlehandler} type="text" name="answer_description" className="courseinput"/>
         </div>


         
                  <div className="col text-center">
                  <input type="submit" value='Post' onClick={()=>this.addquestion(t.id)} style={{width:200}} className="formbutton"/>
                  </div>
                  </div>
                 
              )
 
              
          })
        }
     </div>
         )
 }
 


}

export default AddQuestion;


