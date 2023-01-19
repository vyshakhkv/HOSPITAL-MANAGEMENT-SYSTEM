import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import '../styles/HODEdit.css'

const HodEdit = () => {
 

    let[Name,setName]=useState("")
    let[EmployeeNumber,setEmp]=useState("")
    let[Age,setAge]=useState("")
    let[profileImage,setProfile]=useState("")
    let[ProfileDescription,setDes]=useState("")
    let[department,setDept]=useState("")

 const {id}=useParams();
    
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:1500/HOD/${id}`)
        .then((res) => {
          setName(res.data.Name);
          setEmp(res.data.EmployeeNumber);
          setAge(res.data.Age);
          setProfile(res.data.profileImage);
          setDes(res.data.ProfileDescription);
          setDept(res.data.department);
          
        });
      }, []);

      let data={Name,EmployeeNumber,Age,profileImage,ProfileDescription,department}


      function Update(e) {
        e.preventDefault();
        axios.put(`http://localhost:1500/HOD/${id}`, data).then(navigate("/admin/HOD-list"));
      }

    
    return ( 
        <div className="editDept">
        <div className="editDept_form">
            <h1>Edit Department Heads</h1>
            <form action="" >
               <div className="name">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Name" value={Name} required onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="enum">
                <label htmlFor="">EmployeeNumber</label>
                <input type="text" placeholder="enter employee number" value={EmployeeNumber} required onChange={(e)=>setEmp(e.target.value)}/>
                </div>
                <div className="age">
                <label htmlFor="">Age</label>
                <input type="text" placeholder="age" value={Age} required onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <div className="url">
                <label htmlFor="">Profile Image</label>
                <input type="text" placeholder="Enter profile image url" value={profileImage} required onChange={(e)=>setProfile(e.target.value)}/>
                </div>
                <div className="description">
                <label htmlFor="">Profile Description</label>
                <textarea type="text" placeholder="Enter profile description " value={ProfileDescription} required onChange={(e)=>setDes(e.target.value)}/> 
                </div>
                <div className="DEPT">
                <label htmlFor="">Department</label> 
                <input type="text" placeholder="Enter Department Name" value={department} required onChange={(e)=>setDept(e.target.value)}/> 
                </div>
                <button className="but_dept" type="submit" onClick={Update}>UPDATE</button>


            </form>


        </div>
    </div> 
       
     );
}
 
export default HodEdit;