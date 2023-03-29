import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../styles/employeeData.css'

const EmployeeData = () => {

    let [employee, setEmployee] = useState([])

    const [searchapidata, setapidata] = useState([])

    const [filterVal, setFilterVal] = useState('');

    let fetchingData = () => {
        fetch(`http://localhost:5000/emp`)
            .then(res => res.json())
            .then(user => {
                setEmployee(user)
                setapidata(user)
            })
    }

    useEffect(() => {
        fetchingData()
    }, [])

    let handlefilter = (e) => {
        if (e.target.value === '') {
            setEmployee(employee)
        } else {
            const filterresult = searchapidata.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
            setEmployee(filterresult)
        }
        setFilterVal(e.target.value)
    }


    let navigate = useNavigate()


    let handleDelete = (id) => {
        fetch(`http://localhost:5000/emp/${id}`, {
            method: "DELETE"
        })
        alert('employee data has been deleted')
        navigate('/admin/employee')
    }



    return (
        <div className="devider">
            <div style={{display:"flex",justifyContent:"space-evenly"}} className="maindevider">

                <div className="count">
                    <h3 style={{ backgroundColor: "yellow", width: "350px", padding: "10px 20px" }}>Total  Number of Employee &nbsp; {employee.length}</h3>
                </div>
                <div className=" search ">
                    <input type="text" placeholder="search" value={filterVal} onChange={(e) => handlefilter(e)} style={{ height: "30px", marginBottom: "10px",  marginRight:"-200px",marginTop:"25px", width:"300px" }} />
                </div>
            </div>

            <table className="table " border="1px" width="1603px">
                <tr>
                    <th >id</th>
                    <th >Image</th>
                    <th >Name</th>
                    <th >Email</th>
                    <th >Mobile</th>
                    <th >Designation</th>
                    <th >Gender</th>
                    <th >Course</th>
                    <th >Date</th>
                    <th id="action">Action</th>
                </tr>

                {
                    employee.map((item, index) => {
                        return (



                            <tbody>

                                <tr>

                                    <th scope="row" >{index + 1}</th>
                                    <td><img src={item.image} alt="" width="50px" height="50px" /></td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                    <td>{item.designation}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.course}</td>
                                    <td>{item.date}</td>
                                    <div className="actions">
                                    <td><Link to={`/admin/emp/${item.id}`}><button className="btn">Edit</button></Link>
                                        <button onClick={() => handleDelete(item.id)} className="btn ">Delete</button>
                                    </td>
                                    </div>

                                </tr>

                            </tbody>

                        )
                    })
                }
            </table>
        </div>
    );
}

export default EmployeeData;