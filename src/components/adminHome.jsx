import { Routes,Route } from "react-router-dom";
import AddDept from "./addDepartment";
import AddEmployee from "./addEmployee";
import AddHOD from "./addHOD";
import AdminDashboard from "./adminDashboard";
import AdminNavbar from "./adminNavbar";
import DepartmentList from "./departmentList";
import DeptEdit from "./DeptEdit";
import EmpEdit from "./empEdit";
import EmployeeList from "./EmployeeList";
import HodEdit from "./HodEdit";
import HODlist from "./HODlist";

const AdminHome = () => {
    return ( 
        <div className="adminHome">
           <AdminNavbar/>
            <Routes>
                <Route path="/" element={<AdminDashboard/>}/>
                <Route path='/dept-list' element={<DepartmentList/>}/>
                <Route path='/add-dept' element={<AddDept/>}/>
                <Route path='/HOD-list' element={<HODlist/>}/>
                <Route path='/add-HOD'   element={<AddHOD/>}/>
                <Route path='/emp-list'  element={<EmployeeList/>}/>
                <Route path='/add-emp'    element={<AddEmployee/>}/>
                <Route path='/emp-list/:id' element={<EmpEdit/>}/>
                <Route path='/HOD-list/:id' element={<HodEdit/>}/>
                <Route path='/dept-list/:id' element={<DeptEdit/>}/>


            </Routes>
        </div>
     );
}
 
export default AdminHome;