import React, { useState } from 'react'
import axios from 'axios'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import img from '../assets/react.svg';


function CreateUser() {
    const [FirstName,setFirstName]=useState()
    const [LastName,setLastName]=useState()
    const [Email,setEmail]=useState()
    const [Password,setPassword]=useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/createUser',{
            FirstName,
            LastName,
            Email,
            Password
        })
       .then(res => {
            console.log(res)
            navigate('/')
       })
       .catch(err => console.log(err))
    }

  return (
    <div>
        <body class="text-center">
            <main class="form-signin w-50 m-auto">
                <form onSubmit={Submit}>
                    <img src={img} alt="" style={{height:50}} />
                    <h1 class="h3 mb-3 fw-normal">Registration</h1>
                    <br />
                    <br />
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Enter First Name"
                        onChange={(e)=>setFirstName(e.target.value)}/>
                        <label for="floatingInput">First Name</label>
                    </div>
                    <br />
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Enter Last Name"
                        onChange={(e)=>setLastName(e.target.value)}/>
                        <label for="floatingInput">Last Name</label>
                    </div>
                    <br />
                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                        onChange={(e)=>setEmail(e.target.value)}/>
                        <label for="floatingInput">Email</label>
                    </div>
                    <br />
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                        onChange={(e)=>setPassword(e.target.value)}/>
                        <label for="floatingPassword">Password</label>
                    </div>
                    <br />
                    <br />
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <br />
                    <br />
                    <div class="form-floating">
                        <Link to="/" className='btn btn-outline-primary'>View All</Link>
                    </div>
                </form>
            </main>
        </body>
    </div>
  )
}

export default CreateUser