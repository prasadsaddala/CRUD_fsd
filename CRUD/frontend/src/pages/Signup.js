import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
//import validation from './pages/SingnupValidationValidation'
import validation from './LoginValidation'
import axios from 'axios'

function Signup() {

    const [values,setValues] = useState({
        name: '',
        email: '',
        password:'',
    })
    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))

    }

    const handleSubmit =(event) => {
        event.preventDefault();
        setErrors(validation(values));
        if(errors.name === "" && errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/signup',values)
            .then(res => {
                navigate('/Login');
            })
            .catch(err => console.log(err));
        }
    }
  return (
    <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sign-Up</h2>
            <form action='' onSubmit={handleSubmit}>
            <div className='mb-3'>
                    <label htmlFor='name'><strong>Name</strong></label>
                    <input type='text' placeholder='Enter Name' name='name'
                    onChange={handleInput} className='form-control rounded-0'></input>
                    {errors.name && <span className='text-danger'> {errors.name}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email</strong></label>
                    <input type='email' placeholder='Enter Email' name='email' 
                    onChange={handleInput} className='form-control rounded-0'></input>
                    {errors.email && <span className='text-danger'> {errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>password</strong></label>
                    <input type='password' placeholder='Enter password' name='password'
                    onChange={handleInput} className='form-control rounded-0'></input>      
                    {errors.password && <span className='text-danger'> {errors.password}</span>}
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>sign up</button>
                <p>you are aggre to our termes and policies</p>
                <Link to="/Login" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
            </form>
        </div>
      
    </div>
  )
}

export default Signup
