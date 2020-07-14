import React from 'react';
import {Link} from 'react-router-dom';
import './Teachers.css';

class Teachers extends React.Component{

    constructor(props){
        super(props);
        this.state={
            teachers:[],
            
            
        }
    }

   

    componentDidMount(){
        fetch("http://127.0.0.1:5000/view_instructors",{
           methods:"GET",
            "Content-Type":"application/json"
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                teachers:data,
                
                
            })
        })
            
    }


    delete_teacher=(id)=>{
        if(window.confirm("Delete Teacher?")){
            fetch(`http://127.0.0.1:5000/delete_instructor/${id}`,
            {
              method:"DELETE"
            }
            )
            .then(res=>res.json())
            .then(data=>{
              
                
           let teacherlist=this.state.teachers
           for(let i=0;i<teacherlist.length;i++){
               let p=teacherlist[i]
               if(p.id===id){
                   teacherlist.splice(i,1)
                   break
               }
           }
           this.setState({teachers:teacherlist})

            })
            .catch(err=>alert("No Network"))
        }
    }







  


    
       
    render(){
        return(
            <div className="row teacher-background col text-center">
            {
                this.state.teachers.map(t=>{
                      return(
                          
                          <div className=" col text-center teacher-card col-md-3 col-xl-4 col-sm-12 col-xs-12 col-lg-3">
                                                  
                       <img src={`http://127.0.0.1:5000${t.instructor_img}`} className="avatar"/>
                       <h1 style={{color:"black"}} className="name">{t.instructor_name}</h1> 
                       <p>{t.email}</p>
                       <h3 style={{fontSize:17}}>{t.bio}</h3>
    
                          <button onClick={()=>this.delete_teacher(t.id)} className="delete-button">Delete</button>
                         
                      </div>
                      
                      )
                })
                  
            }
        </div>
         
     )
}

}
export default Teachers;


    
