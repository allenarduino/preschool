import React from 'react';
import './SinglePdf.css';


class SinglePdf extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pdf:[]
        }
    }


   componentDidMount(){
       fetch(`http://127.0.0.1:5000/view_pdf/${this.props.match.params.id}`,
       {
           method:"GET"
       }
       )
       .then(res=>res.json())
       .then(data=>{
           this.setState({
               pdf:data
           })
       })
   }

     



    render(){
        return(
            
          
            
           <div  className="pdf-container  col text-center">
               {
                   this.state.pdf.map(t=>
                  <iframe src={`http://127.0.0.1:5000${t.pdf}`} className="pdf-size " />
                    )
               }
           </div>
          
        )
    }



}

export default SinglePdf;