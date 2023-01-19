import { Link } from 'react-router-dom';
import '../styles/adminNavbar.css'
const AdminNavbar = () => {
    return ( 
        <div className="adminNavbar">
            <div className="logo">
                <img width="90px" height="90px" src="https://cdn.vectorstock.com/i/preview-1x/23/08/healthcare-management-vector-8132308.jpg" alt="" />

            </div>
            <div className="links">
                <ul>
                <li><Link to='/admin/'>Dashboard</Link></li>
                <li><Link to='/admin/dept-list'>Departments</Link></li>
                <li><Link to='/admin/add-dept'>Add Departments</Link></li>
                <li><Link to='/admin/HOD-list'>Department Heads</Link></li>
                <li><Link to='/admin/add-HOD'>Add Department Heads</Link></li>
                <li><Link to='/admin/emp-list'>Employees</Link></li>
                <li><Link to='/admin/add-emp'>Add Employees</Link></li>
                <li><Link to='/' >Logout</Link></li>
                </ul>

            </div>

        </div>
     );
}
 
export default AdminNavbar;