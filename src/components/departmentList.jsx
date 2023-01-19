import { useNavigate,useLocation } from "react-router-dom";
import '../styles/departmentList.css'
import { useState,useEffect } from "react";
const DepartmentList = () => {
    let[dept,setDept]=useState([])
    let location=useLocation()
   
    useEffect(()=>{
       let fetchData=async()=>{
         let response=await  fetch('http://localhost:1500/departments')
         let data=await response.json()
   
         setDept(data)
      }
       fetchData()
   
    },[dept])
   
    let handleDelete=(id,DepartmentName)=>{
         fetch(`http://localhost:1500/departments/${id}`,{
         method:'DELETE'
      } )
      alert(`${DepartmentName} will be deleted permenantly`)
    }
   
    
    let navigate=useNavigate();
   
    let handleEdit=(id)=>{
      
      if(location.pathname == '/admin/dept-list'){
           navigate(`/admin/dept-list/${id}`)
    }
    else{
      navigate(`/user/dept-list/${id}`)
    
    }
   }

    return ( 
        <div className="departmentlist">
                 <center> <h1 style={{color:"rgba(103, 126, 121)"}}>DEPARTMENT LIST</h1></center>
        
        <div className="dept_section">
            {dept.map(data=>(
               
                <div className="dept_card">
                 
                  <div className="details">
                    <h2>Department Name: {data.DepartmentName}</h2>
                    <h5>Year Founded:{data.YearFounded}</h5>
                    <h6>{data.Description}</h6>
                   
                    <div className="but">
                    { location.pathname == '/admin/dept-list' &&<button onClick={()=>handleEdit(data.id)}>Edit</button>}
                    {location.pathname == '/admin/dept-list' && <button onClick={()=>handleDelete(data.id,data.DepartmentName)}>Delete</button> }
                    </div>
                    </div>
                    <div className="photo">
                     <img src={data.DepartmentProfileImage} alt="" />
                  </div>
                   
                 
                </div>
                 ))}

        </div>

        </div>
     );
}
 
export default DepartmentList;