import { useEffect, useRef, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./navbar";


const EditEmployee = () => {

    let { id } = useParams()
    console.log(id)

    let name = useRef()
    let email = useRef()
    let mobile = useRef()
    let designation = useRef()
    let [gender, setGender] = useState('')
    let [course, setcourse] = useState('')
    let [image, setImage] = useState('')
    let date = useRef()

    let navigate = useNavigate()




    useEffect(() => {
        fetch(`http://localhost:5000/emp/${id}`)
            .then(res => res.json())
            .then((data) => {
                name.current.value = data.name;
                mobile.current.value = data.mobile;
                email.current.value = data.email;
                date.current.value = data.date;
            })

    }, [id])



    let handleSubmit = (e) => {
        e.preventDefault()

        let updateuser = {
            name: name.current.value,
            email: email.current.value,
            mobile: mobile.current.value,
            gender: gender,
            designation: designation.current.value,
            course: course,
            image: image,
            date: date.current.value

        }

        fetch(`http://localhost:5000/emp/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateuser)
        })
        alert('data has been submitted')
        navigate('/admin/employee')
    }

    return (
        <div>
            <Navbar />
            <div className="emp">
                <h1 className="text-center">Update Employee</h1>
                <form action="" onSubmit={handleSubmit}>

                    <div className="name">
                        <label  className="one">Name:</label>
                        <input type="text" required ref={name} />
                    </div>


                    <div className="email">
                        <label  className="two"  >Email:</label>
                        <input type="email" required ref={email} />

                    </div>
                    <div className="number ms-3">
                        <label  className="six">Mobile no:</label>
                        <input type="tel" pattern="[6789][0-9]{9}" required ref={mobile}
                        />

                    </div>
                    <div className="dropdown">
                        <label  className="three" >Course:</label>
                        <select name="" id="" required ref={designation}  >
                            <option value="hr" >HR</option>
                            <option value="manager" >Manager</option>
                            <option value="sales" >Sales</option>
                        </select>
                    </div>

                    <div>
                        <label  className="four">Date:</label>
                        <input type="date" ref={date} disabled />
                    </div>


                    <div className="gender">
                        <label  className="five" >Gender:</label>
                        <div className="form-check">
                            <input type="radio" value={gender} onClick={() => { setGender("Male") }} />
                            <label>
                                Male
                            </label>
                            
                            <input type="radio" value="Male" onClick={() => { setGender("Femlae") }} />
                            <label >
                                Female
                            </label>
                        </div>
                      
                        
                    </div>


                    <div  className="course">
                        <label >Course:</label>

                        <input className="c1" type="checkbox" value="MCA" onClick={() => { setcourse("MCA") }} />
                        <label  htmlFor="MCA">MCA</label>

                        <input  type="checkbox" value="BCA" onClick={() => { setcourse("BCA") }} />
                        <label  htmlFor="BCA">BCA</label>

                        <input type="checkbox" value="BSc" onClick={() => { setcourse("BSc") }} />
                        <label  htmlFor="BSC">BSc</label>
                    </div>

                    <div className="image"  >
                    <label  >Image:</label>
                        <input  type="text"  placeholder="Place image link here" value={image} onChange={(e) => setImage(e.target.value)} />
                    </div>

                    <button className="btn ">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default EditEmployee