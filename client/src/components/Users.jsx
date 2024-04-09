import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';


function Users() {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err));
    },[])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/' + id)
        .then(result => {
            console.log(result)
            window.location.reload();
        })
        .catch(err => console.log(err))
    }

  return (
    <div>
        <h1>Student Details</h1>
        <br />
        <table class="table table-bordered table-responsive table-hover">
            <tr>
                <th class="card-header bg-info text-white text-uppercase">FirstName</th>
                <th class="card-header bg-info text-white text-uppercase">LastName</th>
                <th class="card-header bg-info text-white text-uppercase">Email</th>
                <th class="card-header bg-info text-white text-uppercase">Passwoed</th>
                <th class="card-header bg-info text-white text-uppercase">Edit</th>
                <th class="card-header bg-info text-white text-uppercase">Delete</th>
            </tr>
            <tbody>
                {
                    users.map((user)=>{
                        return <tr>
                            <td>{user.FirstName}</td>
                            <td>{user.LastName}</td>
                            <td>{user.Email}</td>
                            <td>{user.Password}</td>
                            <td><Link to={`/update/${user._id}`} className='btn btn-outline-primary'>Edit</Link></td>
                            <td><button className='btn btn-outline-danger'
                            onClick={(e)=>handleDelete(user._id)}>Delete</button></td>
                        </tr>
                    })
                }
                <tr>
                    <td colSpan="6">
                        <Link to="/create" className='btn btn-primary'>Add+</Link>
                    </td>
                </tr>
            </tbody>
            
        </table>
    </div>
  )
}

export default Users