import React from 'react';
import './Addvideo.css';


class AddVideo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            course:[],
            video_url:"",
            title:"",
            coverphoto:null,
            loading:false,
            coverphoto_err:"",
            title_err:"",
            video_url_err:"",
            loading:false
        }
    }


    componentDidMount(){
        /*For fetching videos under a particular course
        So the the courses.id is grabbed from the course
        */
         fetch(`http://127.0.0.1:5000/add_video/${this.props.match.params.id}`,
 
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
 
 


titlehandler=(e)=>{
this.setState({
    [e.target.name]:e.target.value
})
}


video_url_handler=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}


coverphoto_handler=(e)=>{
    this.setState({
        coverphoto:e.target.files[0]
    })
}





 
  
     addvideo=(id)=>{
         const data=new FormData();
         data.append("coverphoto",this.state.coverphoto)
         data.append("title",this.state.title)
         data.append("video_url",this.state.video_url)

        if(this.state.coverphoto==null){
            this.setState({
                coverphoto_err:"Coverphoto Required"
            })
        }
        else if(this.state.title.trim()==""){
            this.setState({
                title_err:"Video Title required"
            })
        }
        else if(this.state.video_url.trim()=="")
        {
            this.setState({
                video_url_err:"Video url must not be empty"
            })
        }
        else{
           //else we send data to the server
           this.setState({
               loading:true
           })
 
         fetch(`http://127.0.0.1:5000/add_video/${id}`,
         {
             method:"POST",
             body:data,
             headers:{
              Authorization: `${localStorage.getItem("token")}`
          },
         }
 
         )
         .then(res=>res.json())
         .then(data=>{
             alert("Video uploaded");
             this.setState({
                 loading:false
             })
          })
         .catch(err=>{
             alert("No Network")
         })
        }
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
             <div className="row add-pdf-background">
        {
          this.state.course.map(t=>{
              const id={t}
              return(
                 <div style={{marginTop:100,paddingBottom:30}} className="form-container ">
                   
 
 
                   <div style={{flexDirection:"row"}} className="col text-center">
         <h3 style={{marginTop:10,textAlign:"center",fontSize:20}}>Video title/topic</h3>
         <input  value={this.state.title}  style={{width:200}} onChange={this.titlehandler} type="text" name="title" className="courseinput"/>
         <h3 style={{color:"red",fontSize:16}}>{this.state.title_err}</h3>
         </div>
                   
                   <div style={{flexDirection:"row"}} className="col text-center">
         <h3 style={{marginTop:10,textAlign:"center",fontSize:20}}>Course Video Link/URL</h3>
         <input  value={this.state.video_url}  style={{width:200}} onChange={this.video_url_handler} type="text" name="video_url" className="courseinput"/>
         <h3 style={{color:"red",fontSize:16}}>{this.state.video_url_err}</h3>
         </div>
         

         <div style={{flexDirection:"row"}} className="col text-center">
         <h3 style={{marginTop:10,textAlign:"center",fontSize:20}}>Video Coverphoto</h3>
         <input    style={{width:200}} onChange={this.coverphoto_handler} type="file" name="post_media" className="inputfile1"/>
         <h3 style={{color:"red",fontSize:16}}>{this.state.coverphoto_err}</h3>
         </div>



                  <div className="col text-center">
                  {this.state.loading==false?<input type="submit" value='Post' onClick={()=>this.addvideo(t.id)} style={{width:200}} className="formbutton"/>:
                  <input type="submit" value='Sending......' onClick={()=>this.addvideo(t.id)} style={{width:200}} className="formbutton"/>
                  }
                  </div>
                  </div>
                 
              )
 
              
          })
        }
     </div>
         )
 }
 


}

export default AddVideo;


