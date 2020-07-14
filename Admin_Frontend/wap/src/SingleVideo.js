import React from 'react';
import ReactPlayer from 'react-player';



class SingleVideo extends React.Component{

    constructor(props){
        super(props);
        this.state={
            video:[]
        }
    }



   componentDidMount(){
       fetch(`http://127.0.0.1:5000/view_video/${this.props.match.params.id}`,
       {
           method:"GET"
       }
       )
       .then(res=>res.json())
       .then(data=>{
           this.setState({
               video:data
           })
       })
   }



   


  delete_video=(id)=>{
    if (window.confirm("Are you sure you want to delete this video?")){
    fetch(`http://127.0.0.1:5000/delete_video/${id}`,
    {
        method:"DELETE"
    }
    )
    .then(res=>res.json())
    .then(data=>{
        //alert(data)
        let videolist=this.state.video
        for(let i=0;i<videolist.length;i++){
            let v=videolist[i]
            if(v.id===id){
                videolist.splice(i,1)
                break
            }
        }
        this.setState({video:videolist})


    })
    .catch(err=>console.log(err))
 }
  

   }







       render(){
           return(
            <div style={{paddingBottom:50}} className="row">
            
    {/********This is for testing<button onClick={()=>{localStorage.removeItem("instructor_token")}} style={{marginTop:200}} >Logout</button>**********/}
         

{
    this.state.video.map(t=><div className="col text-center">
      <div style={{display:"flex",justifyContent:"center",marginTop:100}} className="col text-center">
      <video style={{borderRadius:10}} src={`http://127.0.0.1:5000${t.video_url}`} controls  style={{height:400}}/>
      
         </div>                   
   <button onClick={()=>this.delete_video(t.id)} style={{marginLeft:10,marginTop:10}} className="enroll">Delete</button>
          </div>  
       

        )
} 
         
</div>     

           )
       }





}

export default SingleVideo;
