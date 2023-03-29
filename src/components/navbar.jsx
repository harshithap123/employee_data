import { Link } from "react-router-dom";
import '../styles/navbar.css'
const Navbar = () => {
    return (
        <nav className="navbar ">
            <div className="container-fluid">
                <img src="/images/img.jpeg" height="60px" width="70px" alt="logo" />
                <div>
                    <ul className="navbar-nav">
                        <li ><Link to="/admin" >Home</Link> </li>

                        <li><Link to="/admin/employee">Employee</Link></li>
                            
                        <li> <Link to="/admin/create" >Create Employee</Link></li>
                           
                        <li>  <Link to="/" >Logout</Link></li>     
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;