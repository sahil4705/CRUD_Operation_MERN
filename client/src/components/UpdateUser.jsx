import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

function UpdateUser() {
    const {id} = useParams()
    const [FirstName,setFirstName]=useState()
    const [LastName,setLastName]=useState()
    const [Email,setEmail]=useState()
    const [Password,setPassword]=useState()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result => {
            console.log(result)
            setFirstName(result.data.FirstName)
            setLastName(result.data.LastName)
            setEmail(result.data.Email)
            setPassword(result.data.Password)
        })
        .catch(err => console.log(err));
    },[])

    const Update = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3001/updateUser/'+id,{
            FirstName:FirstName,
            LastName:LastName,
            Email:Email,
            Password:Password
        })
       .then(result => {
            console.log(result)
            navigate('/')
       })
       .catch(err => console.log(err))

    }

  return (
    <div>
        <body class="text-center">
    
            <main class="form-signin w-50 m-auto">
                <form onSubmit={Update}>
                    
                    <h1 class="h3 mb-3 fw-normal">Registration Edit</h1>
                    <br />
                    <br />
                    <div className="form-floating">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Enter First Name"
                        value={FirstName}
                        onChange={(e)=>setFirstName(e.target.value)}/>
                        <label for="floatingInput">First Name</label>
                    </div>
                    <br />
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Enter Last Name"
                        value={LastName}
                        onChange={(e)=>setLastName(e.target.value)}/>
                        <label for="floatingInput">Last Name</label>
                    </div>
                    <br />
                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                        value={Email}
                        onChange={(e)=>setEmail(e.target.value)}/>
                        <label for="floatingInput">Email</label>
                    </div>
                    <br />
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                        value={Password}
                        onChange={(e)=>setPassword(e.target.value)}/>
                        <label for="floatingPassword">Password</label>
                    </div>
                    <br />
                    <br />
                    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                </form>
            </main>
        </body>
    </div>
  )
}

export default UpdateUser