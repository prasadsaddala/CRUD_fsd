import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function Employee() {
    const [Employee, setEmployee] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8081/')
        .then(res => setEmployee(res.data))
        .catch(err => console.log(err));

    }, []);

    const handleDelete = async (id) => {
        try{
            await axios.delete('http://localhost:8081/Employee/'+id)
            window.location.reload()
        }catch(err) {
            console.log(err);
        }
        }
    
  return (
    <div className='d-flex vh-100 bg-dark justify-content-center align-items-center'>

        <div className='w-50 bg-white rounded p-3'>
            <Link to="/AddEmployee" className='btn btn-success'>Add +</Link>
            <link></link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>gender</th>
                        <th>dob</th>
                        <th>salary</th>
                        <th>department</th>
                        <th>auctions</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        Employee.map((data, i)=> (
                            <tr key={i}>
                                <td>{data.name}</td>
                                <td>{data.gender}</td>
                                <td>{data.dob}</td>
                                <td>{data.salary}</td>
                                <td>{data.department}</td>
                                <td>
                                    <Link to={`update/${data.ID}`} className='btn btn-primary'>update</Link>
                                    <button className='btn btn-danger ms-2' onClick={ e => handleDelete(data.ID)}>Delete</button>
                                </td>

                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
      
    </div>
  )
}

export default Employee
