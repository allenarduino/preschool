import React from 'react';
//import ReactPlayer from 'react-player';
//import kk from "./Celine Dion Call The Man.mp4";



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



       render(){
           return(
            <div className="row">
            
    {/********This is for testing<button onClick={()=>{localStorage.removeItem("instructor_token")}} style={{marginTop:200}} >Logout</button>**********/}
         

{
    this.state.video.map(t=>
     <div style={{display:"flex",justifyContent:"center",marginTop:100}} className="col text-center">
<video   src={`http://127.0.0.1:5000${t.video_url}`} controls  style={{height:400}}/>
      </div>                      
   
    


        )
} 
         
</div>     

           )
       }





}

export default SingleVideo;
