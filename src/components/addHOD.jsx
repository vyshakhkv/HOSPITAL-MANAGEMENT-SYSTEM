import { useState } from "react";

import { useNavigate } from "react-router-dom";
const AddHOD = () => {
    let[Name,setName]=useState("")
    let[EmployeeNumber,setEmp]=useState("")
    let[Age,setAge]=useState("")
    let[profileImage,setProfile]=useState("")
    let[ProfileDescription,setDes]=useState("")
    let[department,setDept]=useState("")

    let navigate = useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault()
        let userdata={Name,EmployeeNumber,Age,profileImage,ProfileDescription,department}

        fetch('http://localhost:1500/HOD',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(userdata)
    })
    alert(`${Name} is added successfully`)
    navigate('/admin/HOD-list')

    }




    return (
        <div className="addDept">
            <div className="addDept_form">
                <h1>Add Department Heads</h1>
                <form action="" onSubmit={handleSubmit}>
                   <div className="name">
                    <input type="text" placeholder="Name" value={Name} required onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div className="enum">
                    <input type="text" placeholder="enter employee number" value={EmployeeNumber} required onChange={(e)=>setEmp(e.target.value)}/>
                    </div>
                    <div className="age">
                    <input type="text" placeholder="age" value={Age} required onChange={(e)=>setAge(e.target.value)}/>
                    </div>
                    <div className="url">
                    <input type="text" placeholder="Enter profile image url" value={profileImage} required onChange={(e)=>setProfile(e.target.value)}/>
                    </div>
                    <div className="description">
                    <input type="text" placeholder="Enter profile description " value={ProfileDescription} required onChange={(e)=>setDes(e.target.value)}/> 
                    </div>
                    <div className="DEPT">
                    <input type="text" placeholder="Enter Department Name" value={department} required onChange={(e)=>setDept(e.target.value)}/> 
                    </div>
                    <button className="but_dept" type="submit">SUBMIT</button>


                </form>


            </div>
        </div> 

     );
}
 
export default AddHOD;