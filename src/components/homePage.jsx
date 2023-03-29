import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';
import '../styles/homepage.css'

const Homepage = () => {

    let [login, setLogin] = useState([])
    let [password, setPassword] = useState([])

    let navigate = useNavigate()

    let handleSubmit = () => {
        if (login === "admin@gmail.com" && password === "admin@123") {
            navigate('/admin')
        } else {
            alert('invalid Credentials')
        }

    }

    return (
        <div className="name-login">
            <h1>Login</h1>
            <div className="main" >

                <div className="one1">
                    <label htmlFor="" className="m-2">Email - id</label>
                    <input type="email" value={login} onChange={(e) => setLogin(e.target.value)} className="w-100 p-2 rounded" />
                </div>
                <div className="two2">
                    <label htmlFor="" className="m-2">Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-100 p-2 rounded" />
                </div>
               <div className="btnn">
               <button onClick={handleSubmit} className="btn btn-success m-2 ">Submit</button>
               </div>
            </div>
        </div>
    );
}

export default Homepage;