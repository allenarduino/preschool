import React from 'react';
import './Addpdf.css';


class AddPdf extends React.Component{
    constructor(props){
        super(props);
        this.state={
            course:[],
            pdf:"",
            title:""
        }
    }


    componentDidMount(){
        /*For fetching videos under a particular course
        So the the courses.id is grabbed from the course
        */
         fetch(`http://127.0.0.1:5000/add_pdf/${this.props.match.params.id}`,
 
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
 
 
 
     
  //For adding a topic or a video for a specific course   
 
     pdfhandler=(e)=>{
         this.setState({
             pdf:e.target.files[0]
         })
     }
 
     titlehandler=(e)=>{
         this.setState({
             title:e.target.value
         })
     }
 
     addpdf(id){
         const data=new FormData();
         data.append("pdf",this.state.pdf)
         data.append("title",this.state.title)
 
         fetch(`http://127.0.0.1:5000/add_pdf/${id}`,
         {
             method:"POST",
             body:data,
             headers:{
              Authorization: `${localStorage.getItem("instructor_token")}`
          },
         }
 
         )
         .then(res=>res.json())
         .then(data=>{
             alert("PDF uploaded")
          })
         .catch(err=>{
             console.log(err)
         })
     }
 
 
 
 
 
     deletevideo=(id)=>{
      
      fetch(`http://127.0.0.1:5000/videos_delete/${id}`,
     
  
      {
          method:"DELETE"
      }
      )
      .then(res=>res.json())
      .then(data=>{
          console.log(data.message)
          let postlist=this.state.post_comments
          for(let i=0;i<postlist.length;i++){
              let p=postlist[i]
              if(p._id===id){
                  postlist.splice(i,1)
                  break
              }
          }
          this.setState({post:postlist})
      })
      .catch(err=>{console.log(err)})
      
  
  
  }
  
  
 
 
 
 
 
 
 
     render(){
         return(
             <div  className="row add-pdf-background">
        {
          this.state.course.map(t=>{
              const id={t}
              return(
                 <div style={{marginTop:100,paddingBottom:30}} className=" form-container ">
                   
 
            
                   <div style={{flexDirection:"row"}} className="col text-center">
         <h3 style={{marginTop:10,textAlign:"center",fontSize:20}}>PDF Title</h3>
         <input required={true}  style={{width:200}} onChange={this.titlehandler} type="text" name="title" className="courseinput"/>
         </div>


    
                   <div style={{flexDirection:"row"}} className="col text-center">
         <h3 style={{marginTop:10,textAlign:"center",fontSize:20}}>Course PDF</h3>
         <input required={true} ref={(ref)=>{this.pdf=ref;}}   style={{width:200}} onChange={this.pdfhandler} type="file" name="post_media" className="inputfile3"/>
         </div>
         
                  <div className="col text-center">
                  <input type="submit" value='Post' onClick={()=>this.addpdf(t.id)} style={{width:200}} className="formbutton"/>
                  </div>
                  </div>
                 
              )
 
              
          })
        }
     </div>
         )
 }
 


}

export default AddPdf;


