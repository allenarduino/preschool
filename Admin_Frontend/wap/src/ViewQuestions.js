import React from 'react';
import {Link} from 'react-router-dom';
import "./ViewPdfs.css";

class ViewQuestions extends React.Component{



   constructor(props){
       super(props);
       this.state={
           pdfs:[]
       }
   }


   

   componentDidMount(){
    fetch(`https://merl.herokuapp.com/view_pdfs/${this.props.match.params.id}`,
    {
        method:"GET",
        "Content-Type":"application/json"
    }
    )
    .then(res=>res.json())
    .then(data=>{
        this.setState({
            pdfs:data
        })
    })
    .catch(err=>console.log(err))
}






    render(){
        return(
            <div className="row  pdf-background">
           
            {
                this.state.pdfs.map(t=>
                    
                    <div className=" pdf-header col-md-3 col-xl-2 col-sm-2 col-xs-2 col-lg-3">
                   <img className="pdf-img" src={`https://merl.herokuapp.com${t.pdf_picture}`}/>
                   <div  className=" pdf-footer col text-center"> <h3 className="pdf-title">{t.title}</h3>
                   <Link to={`singlecourse/${t.course_id}`}><button className="pdf-butn">Download</button></Link>
                    </div>
                </div>
                
                   
                )
            }
        </div>

        )
    }
}

export default ViewQuestions;