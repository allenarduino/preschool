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










delete_pdf=(id)=>{


    if (window.confirm("Are you sure you want to delete this pdf?")){
    

    


 fetch(`http://127.0.0.1:5000/delete_pdf/${id}`,
 {
     method:"DELETE",

 
 }
 )
 .then(res=>res.json())
 .then(data=>{
     //alert(data)
     let pdflist=this.state.pdfs
     for(let i=0;i<pdflist.length;i++){
         let p=pdflist[i]
         if(p.id===id){
             pdflist.splice(i,1)
             break
         }
     }
     this.setState({pdfs:pdflist})


 })
 .catch(err=>console.log("No Network"))
}
}









    render(){
        return(
            <div className="row  pdf-background">
           
            {
                this.state.pdfs.map(t=>
                    
                    <div className=" pdf-header col-md-3 col-xl-2 col-sm-2 col-xs-2 col-lg-3">
                   <img className="pdf-img" src={pdf_picture}/>
                   <div  className=" pdf-footer col text-center"> <h3 className="pdf-title">{t.title}</h3>
                   <Link to={`/singlepdf/${t.id}`}><button className="pdf-butn">View</button></Link>
                   <button onClick={()=>this.delete_pdf(t.id)} style={{marginLeft:20}} className="pdf-butn">Delete</button>

                    </div>
                </div>
                
                   
                )
            }
        </div>

        )
    }
}

export default ViewPdfs;