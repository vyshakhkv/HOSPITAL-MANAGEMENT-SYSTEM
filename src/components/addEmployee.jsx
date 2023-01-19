import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addEmployee.css'
const AddEmployee = () => {
    let[Name,setName]=useState("")
    let[EmployeeNumber,setEmpno]=useState("")
    let[Age,setAge]=useState("")
    let[profileImage,setImage]=useState("")
    let[ProfileDescription,setDesc]=useState("")
    let[department,setDept]=useState("")
    
    let[reportTo,setReport]=useState("")


    
    let navigate = useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault()
        let userdata={Name,EmployeeNumber,Age,profileImage,ProfileDescription,department,reportTo}

        fetch('http://localhost:1500/employee',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(userdata)
    })
    alert(`${Name} is added successfully`)
    navigate('/admin/user-list')

    }
    return ( 
        <div className="addEmployee">
            <div className="addEmp_form">
                <h1>Add Employees</h1>
                <form action="" onSubmit={handleSubmit}>
                   <div className="name">
                    <input type="text" placeholder="Name" value={Name} required onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="enum">
                    <input type="text" placeholder="enter employee number" value={EmployeeNumber} required onChange={(e)=>setEmpno(e.target.value)}/>
                    </div>
                    <div className="age">
                    <input type="text" placeholder="age" value={Age} required onChange={(e)=>setAge(e.target.value)}/>
                    </div>
                    <div className="url">
                    <input type="text" placeholder="Enter profile image url" value={profileImage} required onChange={(e)=>setImage(e.target.value)}/>
                    </div>
                    <div className="description">
                    <input type="text" placeholder="Enter profile description " value={ProfileDescription} required onChange={(e)=>setDesc(e.target.value)}/> 
                    </div>
                    <div className="DEPT">
                    <input type="text" placeholder="Enter Department Name" value={department} required onChange={(e)=>setDept(e.target.value)}/> 
                    </div>
                    <div className="report">
                    <input type="text" placeholder="Enter ReportTo Name" value={reportTo} required onChange={(e)=>setReport(e.target.value)}/> 
                    </div>
                    <button className="but_dept" type="submit">SUBMIT</button>


                </form>


            </div>
        </div>
     );
}
 
export default AddEmployee;