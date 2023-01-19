import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import '../styles/userDashboard.css'
import { Link } from "react-router-dom";
const UserDashboard = () => {
    let [mail, setMail] = useState("")
    let [password, setPassword] = useState("")
    let [employee, setEmp] = useState([])
    let [dept, setDept] = useState([])
    let navigate = useNavigate()

    let handleLogin = (e) => {
        e.preventDefault()
        let data = { mail, password }

        if (mail == "admin@gmail.com" && password == "1234") {
            navigate('/admin/')
        }
        else {
            alert('Invalid Email or Password')
        }



    }

    let [HOD, setHOD] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:1500/HOD')
            let data = await response.json()

            setHOD(data)
        }
        fetchData()

    }, [HOD])


    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:1500/Employee')
            let data = await response.json()

            setEmp(data)
        }
        fetchData()

    }, [employee])

    useEffect(() => {
        let fetchData = async () => {
            let response = await fetch('http://localhost:1500/departments')
            let data = await response.json()

            setDept(data)
        }
        fetchData()

    }, [dept])




    return (
        <div className="main">

            <div className="userhome">

                <div className="details">
                    <h1>WELCOME TO HOSPITAL MANAGEMENT SYSTEM</h1>
                </div>


                <div className="adminlogin">
                    <div className="logincard">
                        <center> <h1 >Login as Admin</h1></center>
                        <div className="form">
                            <form onSubmit={handleLogin}>
                                <div className="mail">
                                    <label>
                                        Email*
                                        <input type="email" required placeholder="Enter Email" value={mail} onChange={(e) => setMail(e.target.value)} />
                                    </label>
                                </div>
                                <div className="pass">
                                    <label >
                                        Password
                                        <input type="password" placeholder="Enter Password" value={password} onChange={(p) => setPassword(p.target.value)} />
                                    </label>
                                </div>
                                <div className="but1">
                                <button>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
            <div className="bottom">
                <div className="dept1">
                    <center>    <h1>DEPARTMENTS</h1></center>
                    <marquee behavior="" direction=""> <div className="dept_section1">
                        <Link to='/user/dept-list'> {dept.map(data => (

                            <div className="dept_card1">
                                <div className="photo">
                                    <img src={data.DepartmentProfileImage} alt="" />
                                    <h2>{data.DepartmentName}</h2>
                                </div>



                            </div>
                        ))}</Link>

                    </div>
                    </marquee>
                </div>
                <div className="hod1">
                    <center> <h1>DOCTORS</h1></center>
                    <marquee behavior="scroll" direction=""><div className="dept_section1">
                        <Link to='/user/HOD-list'>  {HOD.map(data => (

                            <div className="HOD_card1">

                                <div className="details">
                                    <h1>Dr.{data.Name}</h1>
                                    <h3>Department:<a href='/user/dept-list'>{data.department}</a></h3>
                                    <h5>Employee Number:{data.EmployeeNumber}</h5>
                                </div>
                                <div className="photo">
                                    <img src={data.profileImage} alt="" />
                                </div>


                            </div>
                        ))}
                        </Link>

                    </div>
                    </marquee>
                </div>
                <div className="emp1">
                    <center>  <h1>OUR TEAM</h1></center>
                    <marquee behavior="" direction=""> <div className="emp_section1">
                        <Link to='/user/emp-list'>{employee.map(data => (

                            <div className="emp_card1">

                                <div className="details">
                                    <h1>{data.Name}</h1>
                                    <h3>Department:{data.department}</h3>
                                    <h5>Employee Number:{data.EmployeeNumber}</h5>

                                </div>
                                <div className="photo">
                                    <img src={data.profileImage} alt="" />
                                </div>


                            </div>
                        ))}</Link>

                    </div>

                    </marquee>
                </div>
            </div>
            <div className="footer">
                <h6>Copyright © 2016 Vyshakh</h6>
            </div>
        </div>
    );
}

export default UserDashboard;