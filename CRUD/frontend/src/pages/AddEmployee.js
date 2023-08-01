//import React from 'react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddEmployee() {
  const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDob] = useState('')
    const [salary, setSalary] = useState('')
    const [department, setDepartment] = useState('')
    const navigate = useNavigate();

    function handleSubmit(event){
      event.preventDefault();
      axios.post('http://localhost:8081/create',{name,gender,dob,salary,department})
      .then(res =>{
        console.log(res.data);
        navigate('/');
      }).catch(err =>console.log(err));
    }
  return (
    <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
        <div className='w-50 bg-white round p-3'>
            <form onSubmit={handleSubmit}>
                <h2>Add Student</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter Name' className='form-control'
                    onChange={(e) => setName(e.target.value)} />
                    </div>
                <div className='mb-2'>
                    <label htmlFor="">Gender</label>
                    <input type="text" placeholder='Enter gender' className='form-control' 
                    onChange={(e) => setGender(e.target.value)}/>
                    </div>
                    <div className='mb-2'>
                    <label htmlFor="">Dob</label>
                    <input type="dob" placeholder='Enter dob' className='form-control' 
                    onChange={(e) => setDob(e.target.value)}/>
                    </div>
                <div className='mb-2'>
                    <label htmlFor="">Salary</label>
                    <input type="int" placeholder='Enter salary' className='form-control' 
                    onChange={(e) => setSalary(e.target.value)}/>
                    </div>
                <div className='mb-2'>
                    <label htmlFor="">Department</label>
                    <input type="text" placeholder='Enter department' className='form-control'
                    onChange={(e) => setDepartment(e.target.value)}/>
                    </div>
                    
                
                <button className='btn btn-success' >Submit</button>
            </form>
            
        </div>
    </div>
  )
}

export default AddEmployee
