import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { app } from '../firebase'

function UserSignIn() {

    const auth = getAuth(app)

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const signInUser =()=>{

        signInWithEmailAndPassword(auth,email,password)

        .then(()=>alert("user sign in successfully"))
        .catch((err)=>console.log(err))
    }
  return (
    <>
      <div className="container text-bg-primary mt-2 p-4">
        <h1 className='text-center'>SignIn</h1>
        <div className="col my-3">
          <label htmlFor="" className="my-2">User Email</label>
          <input
            type="email"
            required
            placeholder="Enter your Email Here"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col my-3">
          <label htmlFor="" className="my-2">User Password</label>
          <input
            type="password"
            required
            placeholder="Enter your password Here"
            className="form-control"
            value={password}
            onChange={(e) => setPassword( e.target.value)}
          />
        </div>
        <div className="col">
          <button className="btn btn-warning" onClick={signInUser}>
        
            SignIn
          </button>
        </div>
      </div>
    </>
  )
}

export default UserSignIn
