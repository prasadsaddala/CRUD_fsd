//import React from 'react'
import React, { useState } from 'react'
import { useNavigate, useparams } from 'react-router-dom'
import axios from 'axios'

function updateEmp() {
  const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [dob, setDob] = useState('')
    const [salary, setSalary] = useState('')
    const [department, setDepartment] = useState('')
    const {id} = useParams();
    const navigate = useNavigate();

    function handleSubmit(event){
      event.preventDefault();
      axios.put('http://localhost:8081/update/'+id,{name,gender,dob,salary,department})
      .then(res =>{
        console.log(res);
        navigate('/');
      }).catch(err =>console.log(err));
    }
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white round p-3'>
            <form onSubmit={handleSubmit}>
                <h2>update Student</h2>
                <div className='mb-2'>
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder='Enter Name' className='form-control' 
                    onChange={(e) => setName(e.target.value)}/>
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
                    
                
                <button className='btn btn-success'>update</button>
            </form>
            
        </div>
    </div>
  )
}

export default updateEmp;

