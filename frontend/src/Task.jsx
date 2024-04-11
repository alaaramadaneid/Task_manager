import React,{useEffect, useState} from "react"
import axios from 'axios'
import { Link } from "react-router-dom"


function Task() {
   const [task, setTask] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/')
    .then(res => setTask(res.data))
    .catch(err =>console.log(err))
  },[])
   const handleDelete = async (id) => {
    try{
      await axios.delete('http://localhost:3000/tasks/'+id)
      window.location.reload()
    }catch(err){
      console.log(err);
    }

   }
    return (
      <>
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
         <div className="w-50 bg-white rounded p-3"> 
         <Link to={"/add"} className="btn btn-success">Add +</Link>
         <table className="table">
          <thead>
          <tr>
             <th>Name</th>
             <th>Title</th>
             <th>description</th>
             <th>date</th>
             <th>Action</th>
           </tr>
          </thead>
          <tbody>
             {
              task.map((data, i )=>(
                <tr kay={i}>
                  <td>{data.name}</td>
                  <td>{data.title}</td>
                  <td>{data.cont}</td>
                  <td>{data.date}</td>
                   <td>
                    <Link to={`update/${data.id}`} className="btn btn-info">Update</Link>
                    <button className="btn btn-danger m-1" onClick={e => handleDelete(data.id)}>Delete</button>
                   </td>
                </tr>
              ))
             }
          </tbody>
</table> 
         </div>
        </div>
       
      </>
    )
  }
  
  export default Task
  