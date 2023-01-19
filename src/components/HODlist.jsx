import { useNavigate,useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/HODlist.css'

const HODlist = () => {

    let[HOD,setHOD]=useState([])
    let location=useLocation()
   
    useEffect(()=>{
       let fetchData=async()=>{
         let response=await  fetch('http://localhost:1500/HOD')
         let data=await response.json()
   
         setHOD(data)
      }
       fetchData()
   
    },[HOD])
   
    let handleDelete=(id)=>{
         fetch(`http://localhost:1500/HOD/${id}`,{
         method:'DELETE'
      } )
      alert(`${id} will be deleted permenantly`)
    }
   
    
    let navigate=useNavigate();
    let handleEdit=(id)=>{
      
      if(location.pathname == '/admin/HOD-list'){
           navigate(`/admin/HOD-list/${id}`)
    }
    else{
      navigate(`/user/HOD-list/${id}`)
    
    }
   }
    return ( 
        <div className="HODlist">
                <center> <h1 style={{color:"rgba(103, 126, 121)"}}>HEAD OF DEPARTMENTS</h1></center> 
        
        <div className="dept_section">
            {HOD.map(data=>(
               
                <div className="HOD_card">
                 
                  <div className="details">
                     <h1>Dr.{data.Name}</h1>
                     <Link to='/user/dept-list'><h2>Department:{data.department}</h2></Link>
                    <h6>Employee Number:{data.EmployeeNumber}</h6>
                    <h6>Age:{data.Age}</h6>

                   
                    <div className="but">
                    { location.pathname == '/admin/HOD-list' &&<button onClick={()=>handleEdit(data.id)}>Edit</button>}
                    {location.pathname == '/admin/HOD-list' && <button onClick={()=>handleDelete(data.id,data.DepartmentName)}>Delete</button> }
                    </div>
                    </div>
                    <div className="photo">
                     <img src={data.profileImage} alt="" />
                  </div>
                   
                 
                </div>
                 ))}

        </div>

        </div>
     );
}
 
export default HODlist;