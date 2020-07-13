import React from 'react';
import {Link} from 'react-router-dom';
import "./ViewPdfs.css";
import pdf_picture from './Images/Apps-Pdf-B-icon.png';

class ViewPdfs extends React.Component{



   constructor(props){
       super(props);
       this.state={
           pdfs:[]
       }
   }


   

   componentDidMount(){
    fetch(`http://127.0.0.1:5000/view_pdfs/${this.props.match.params.id}`,
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
            <div className="row  pdf-background ">
           
            {
                this.state.pdfs.map(t=>
                    
                    <div className=" pdf-header col-md-3 col-xl-2 col-sm-2 col-xs-2 col-lg-3">
                        {/****************Picture that will be displayed
                        so that the users will know that it's pdf
                        ************************************** */}
                   <img className="pdf-img" src={pdf_picture}/>
                   <div  className=" pdf-footer col text-center"> <h3 className="pdf-title">{t.title}</h3>
                   <Link to={`/singlepdf/${t.id}`}><button className="pdf-butn">View</button></Link>
                    </div>
                </div>
                
                   
                )
            }
        </div>

        )
    }
}

export default ViewPdfs;