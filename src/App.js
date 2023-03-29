import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';

import EditEmployee from './components/editEmployee';
import Home from './components/home';

import Homepage from './components/homePage';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<Homepage/>}/>
           <Route path="/admin/*" element={<Home/>}/>
           <Route path="/admin/emp/:id" element={<EditEmployee/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;