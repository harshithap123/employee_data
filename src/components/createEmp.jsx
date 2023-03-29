import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
const CreateEmp = () => {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [mobile, setMobile] = useState('')
    let [gender, setGender] = useState('')
    let [course, setcourse] = useState('')
    let [image, setImage] = useState('')

    let [date, setDate] = useState('')

    let designation = useRef()

    let navigate = useNavigate()

    let handlesubmit = (e) => {
        e.preventDefault();

        let emp = { name, email, mobile, gender, course, designation: designation.current.value, date, image }

        fetch(`http://localhost:5000/emp`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(emp)
        })
        alert('data has been submitted')
        navigate('/admin/employee')
    }
    return (
        <div className="emp">
            <h1 className="text-center">Create Employee</h1>
            <form action="" onSubmit={handlesubmit} >


                <div className="name ">

                    <label className="one"  >Name:</label>
                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />

                </div>


                <div className="email ">
                    <label  className="two">Email:</label>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />

                </div>
                <div >
                    <label  className="six" >Mobile no:</label>
                    <input type="text" required pattern="[6789][0-9]{9}" value={mobile} onChange={(e) => setMobile(e.target.value)} />

                </div>


                <div className="dropdown">
                    <label className="three">Course:</label>
                    <select name="" id="" required ref={designation}  >
                        <option value="hr" >HR</option>
                        <option value="manager" >Manager</option>
                        <option value="sales" >Sales</option>
                    </select>
                </div>

                <div>
                    <label   className="four">Date:</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>


                <div className="gender" >
                    <label  className="five" >Gender:</label>
                    <div >
                        <input type="radio" value="gender" onClick={() => { setGender("Male") }} />
                        <label >
                            Male
                        </label>
                        <input type="radio" value="gender" onClick={() => { setGender("Female") }} />
                        <label>
                            Female
                        </label>
                    </div>
                   
                </div>


                <div className="course" >
                    <label  >Course:</label>

                    <input className="c1" type="checkbox" value="MCA" onClick={() => { setcourse("MCA") }} />
                    <label htmlFor="mca">MCA</label>

                    <input type="checkbox" value="BCA" onClick={() => { setcourse("BCA") }} />
                    <label htmlFor="bca">BCA</label>

                    <input type="checkbox" value="BSc" onClick={() => { setcourse("BSc") }} />
                    <label htmlFor="bsc">BSc</label>
                </div>


                <div className="image" >
                <label  >Image:</label>
                    <input type="text" placeholder="Place image link here" value={image} onChange={(e) => setImage(e.target.value)} />

                </div>

                <button className="btn">Submit</button>
            </form>
        </div>
    );
}

export default CreateEmp;