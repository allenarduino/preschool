import React from 'react';
import './Display.css';



class DisplayTwo extends React.Component{
    constructor(props){
        super(props);
        this.state={
             name:[]
        }
    }
    componentDidMount(){
        fetch("http://127.0.0.1:5000/display",
        {
            methods:"GET",
            "Content-Type":"application/json",
            headers:{
                Authorization:`${localStorage.getItem("instructor_token")}`
            }
        }
        )
       .then(res=>res.json())
       .then(data=>{
           this.setState({
               name:data
           })
       })
        .catch(err=>console.log(err))
    }


    render(){
        return(
            <div className="row">
            <div className="display-background">
    {/*<button onClick={()=>{localStorage.removeItem("instructor_token")}} style={{marginTop:200}} >Logout</button>*/}
         {/********************Sidebar*************/}

{
    this.state.name.map(t=>
        <div  className="col-lg-7 col-xs-10 col-xl-7  col-sm-10 col-md-10 display-container col text-center "> 
        <div className="col text-center">
                    <p><b>Dear {t.name},</b> </p>  
                      <h3 className="display-message">
                          You have sucessfully created a quiz.
                         You can now start adding questions
                          Happy teaching:)
                      </h3>
              </div>
            </div>
            


        )
} 





</div>     
</div>

        )
    }

}

export default DisplayTwo;