import Navbar from "./navbar";
import { Routes, Route } from "react-router-dom";
import EmployeeData from "./employeeData";
import CreateEmp from "./createEmp";
import Adminpage from "./adminpage";


const Home = () => {
    
   return(
    <div>
       <Navbar/>
        <Routes>
            <Route path="/" element={<Adminpage/>}/>
            <Route path="/create" element={<CreateEmp/>} />
            <Route path="/employee" element={<EmployeeData/>}/>
        </Routes>
    </div>
   )
}
 
export default Home;
