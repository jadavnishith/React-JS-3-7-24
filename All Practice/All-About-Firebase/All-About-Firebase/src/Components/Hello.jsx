import React from 'react'
import { getDatabase, ref, set } from 'firebase/database'
import { app } from '../firebase'


function Hello() {
    
    const database = getDatabase(app)

   const sendData = () => {

     set(ref(database, "user/nishit"),
    {
        id:1,
        name:"nishit",
        email:"nishit@gmail.com"
    }).then(() => console.log("Data Added Successfully")
    )
};

  return (
    <>
        <div className='container text-bg-dark text-center'>
      <h1>Firebase Real Time Database</h1>
      <button className='btn btn-success' onClick={sendData}>Send Data</button>
      </div>
    </>
  )
}

export default Hello
