import { useState } from "react";
import '../styles/addDepartments.css'

import { useNavigate } from "react-router-dom";
const AddDept = () => {
    let[DepartmentName,setDname]=useState("")
    let[DepartmentProfileImage,setImage]=useState("")
    let[YearFounded,setYear]=useState("")
    let[Description,setDescription]=useState("")
    let[HOD,setHOD]=useState("")

    let navigate = useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault()
        let userdata={DepartmentName,DepartmentProfileImage,YearFounded,Description,HOD}

        fetch('http://localhost:1500/departments',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(userdata)
    })
    alert(`${DepartmentName} is added successfully`)
    navigate('/admin/user-list')

    }




    return (
        <div className="addDept">
            <div className="addDept_form">
                <h1>Add Department</h1>
                <form action="" onSubmit={handleSubmit}>
                   <div className="dname">
                    <input type="text" placeholder="Department Name" value={DepartmentName} required onChange={(e)=>setDname(e.target.value)}/>
                    </div>
                    <div className="image">
                    <input type="text" placeholder="Department Profile Image" value={DepartmentProfileImage} required onChange={(e)=>setImage(e.target.value)}/>
                    </div>
                    <div className="year">
                    <input type="text" placeholder="Year Founded" value={YearFounded} required onChange={(e)=>setYear(e.target.value)}/>
                    </div>
                    <div className="Description">
                    <input type="text" placeholder="Enter Description" value={Description} required onChange={(e)=>setDescription(e.target.value)}/>
                    </div>
                    <div className="hod">
                    <input type="text" placeholder="Enter name of the HOD " value={HOD} required onChange={(e)=>setHOD(e.target.value)}/> 
                    </div>
                    <button className="but_dept" type="submit">SUBMIT</button>


                </form>


            </div>
        </div> 

     );
}
 
export default AddDept;