import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import '../styles/empEdit.css'
const EmpEdit = () => {

  let[Name,setName]=useState("")
  let[EmployeeNumber,setEmpno]=useState("")
  let[Age,setAge]=useState("")
  let[profileImage,setImage]=useState("")
  let[ProfileDescription,setDesc]=useState("")
  let[department,setDept]=useState("")
  let[reportTo,setReport]=useState("")

  const {id}=useParams();

  const navigate=useNavigate()

  useEffect(()=>{
    axios.get(`http://localhost:1500/employee/${id}`)
    .then((res)=>{
      setName(res.data.Name);
      setEmpno(res.data.EmployeeNumber);
      setAge(res.data.Age);
      setImage(res.data.profileImage);
      setDesc(res.data.ProfileDescription);
      setDept(res.data.department)
      setReport(res.data.reportTo)
      
    });
  },[])

  let data={Name,EmployeeNumber,Age,profileImage,ProfileDescription,department,reportTo}

  function Update(e) {
    e.preventDefault();
    axios.put(`http://localhost:1500/employee/${id}`,data).then(navigate("/admin/emp-list"));
  }


  


  return ( 
    <div className="editEmployee">
        <div className="editEmp_form">
            <h1>Edit Employees</h1>
            <form action="">
               <div className="name">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Name" value={Name} required onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="enum">
                  <label htmlFor="">Employee Number</label>
                <input type="text" placeholder="enter employee number" value={EmployeeNumber} required onChange={(e)=>setEmpno(e.target.value)}/>
                </div>
                <div className="age">
                  <label htmlFor="">Age</label>
                <input type="text" placeholder="age" value={Age} required onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <div className="url">
                  <label htmlFor="">Profile Image</label>
                <input type="text" placeholder="Enter profile image url" value={profileImage} required onChange={(e)=>setImage(e.target.value)}/>
                </div>
                <div className="description">
                  <label htmlFor="">Profile Description</label>
                <textarea type="text" placeholder="Enter profile description " value={ProfileDescription} required onChange={(e)=>setDesc(e.target.value)}/> 
                </div>
                <div className="DEPT">
                  <label htmlFor="">Department</label>
                <input type="text" placeholder="Enter Department Name" value={department} required onChange={(e)=>setDept(e.target.value)}/> 
                </div>
                <div className="report">
                  <label htmlFor="">Report To</label>
                <input type="text" placeholder="Enter ReportTo Name" value={reportTo} required onChange={(e)=>setReport(e.target.value)}/> 
                </div>
                <button className="but_dept" type="submit" onClick={Update}>UPDATE</button>


            </form>


        </div>
    </div>
   );
}
 
export default EmpEdit;