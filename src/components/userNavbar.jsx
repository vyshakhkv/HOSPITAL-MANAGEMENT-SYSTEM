import { Link } from "react-router-dom";
import '../styles/userNavbar.css'
const UserNavbar = () => {
    return ( 
        <div className="userNavbar">
            <div className="logo">
                <img width="90px" height="90px" src="https://cdn.vectorstock.com/i/preview-1x/23/08/healthcare-management-vector-8132308.jpg" alt="" />

            </div>
            <div className="links">
                <ul>

                <li><Link to='/user/'>Home</Link></li>
                <li><Link to='/user/dept-list'>Departments</Link></li>
                <li><Link to='/user/HOD-list'>Department Heads</Link></li>
                <li><Link to='/user/emp-list' >Employees</Link></li>
                </ul>

            </div>

        </div>
     );
}
 
export default UserNavbar;