import { useNavigate} from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import '../styles/EmployeeList.css'


import { useState,useEffect } from "react";

const EmployeeList = () => {
     let[employee,setEmp]=useState([])

    let location=useLocation()
   
    useEffect(()=>{
       let fetchData=async()=>{
         let response=await  fetch('http://localhost:1500/Employee')
         let data=await response.json()
   
         setEmp(data)
      }
       fetchData()
   
    },[employee])
   
    let handleDelete=(id,department)=>{
         fetch(`http://localhost:1500/Employee/${id}`,{
         method:'DELETE'
      } )
      alert(`${department} will be deleted permenantly`)
    }

    let navigate=useNavigate();
    let handleEdit=(id)=>{
      
      if(location.pathname == '/admin/emp-list'){
           navigate(`/admin/emp-list/${id}`)
    }
    else{
      navigate(`/user/emp-list/${id}`)
    
    }
   }

     
   
    
    
   
    return ( 
        <div className="Employeelist">
                <center> <h1 >EMPLOYEES</h1></center> 
        
        <div className="emp_section">
            {employee.map(data=>(
               
                <div className="emp_card">
                 
                  <div className="details">
                     <h2>{data.Name}</h2>
                     <h3>Department:{data.department}</h3>
                    <h6>Employee Number:{data.EmployeeNumber}</h6>
                    <h6>Age:{data.Age}</h6>
                  <Link to='/user/HOD-list'>  <h6>Reporting To:{data.reportTo}</h6></Link>
                    <div className="but">
                   { location.pathname == '/admin/emp-list' &&<button onClick={()=>handleEdit(data.id)}>Edit</button>}
                    {location.pathname == '/admin/emp-list' && <button onClick={()=>handleDelete(data.id,data.Name)}>Delete</button> }
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
 
export default EmployeeList;