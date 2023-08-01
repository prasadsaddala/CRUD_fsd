
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Student from './pages/Employee';
import Employee from './pages/Employee';
import AddEmployee from './pages/AddEmployee';
import UpdateEmployee from './pages/UpdateEmployee';
import Login from "./pages/Login";
//import Register from "./pages/Register";
import Signup from './pages/Signup';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Employee/>}></Route>
        <Route path="/AddEmployee" element={<AddEmployee/>}></Route>
        <Route path="/update/:id" element={<UpdateEmployee/>}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
