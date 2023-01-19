import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import '../styles/DeptEdit.css'
const DeptEdit = () => {

    let[DepartmentName,setDname]=useState("")
    let[DepartmentProfileImage,setImage]=useState("")
    let[YearFounded,setYear]=useState("")
    let[Description,setDescription]=useState("")
    let[HOD,setHOD]=useState("")
   

    const {id}=useParams();
    
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:1500/departments/${id}`)
        .then((res) => {
            setDname(res.data.DepartmentName);
            setImage(res.data.DepartmentProfileImage);
            setYear(res.data.YearFounded);
            setDescription(res.data.Description);
             setHOD(res.data.HOD);
          
        });
      }, []);
      let data={DepartmentName,DepartmentProfileImage,YearFounded,Description,HOD}
       
      function Update(e) {
        e.preventDefault();
        axios.put(`http://localhost:1500/departments/${id}`, data).then(navigate("/admin/dept-list"));
      }
        return ( 

            <div className="ediDept">
            <div className="editDept_form">
                <h1>Edit Department</h1>
                <form action="" >
                   <div className="dname">
                    <label htmlFor="">DepartmentName</label>
                    <input type="text" placeholder="Department Name" value={DepartmentName} required onChange={(e)=>setDname(e.target.value)}/>
                    </div>
                    <div className="image">
                        <label htmlFor="">Department Image</label>
                    <input type="text" placeholder="Department Profile Image" value={DepartmentProfileImage} required onChange={(e)=>setImage(e.target.value)}/>
                    </div>
                    <div className="year">
                        <label htmlFor="">Year Founded</label>
                    <input type="text" placeholder="Year Founded" value={YearFounded} required onChange={(e)=>setYear(e.target.value)}/>
                    </div>
                    <div className="Description">
                        <label htmlFor="">Description</label>
                    <textarea type="text" placeholder="Enter Description" value={Description} required onChange={(e)=>setDescription(e.target.value)}/>
                    </div>
                    <div className="hod">
                        <label htmlFor="">HOD</label>
                    <input type="text" placeholder="Enter name of the HOD " value={HOD} required onChange={(e)=>setHOD(e.target.value)}/> 
                    </div>
                    
                    <button className="but_dept" type="submit" onClick={Update}>UPDATE</button>


                </form>


            </div>
        </div> 
            
         );

     
}
 
export default DeptEdit;