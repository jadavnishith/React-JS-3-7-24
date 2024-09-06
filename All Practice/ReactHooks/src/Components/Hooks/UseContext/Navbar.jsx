import React, { useContext } from 'react'
import Context from '../../../Context/Context'

function Navbar() {

const value = useContext(Context)

  return (
    <>
      <div className='text-bg-dark'>
        <div className='d-flex justify-content-around align-items-center justify-content-center'>
            <h3>LOGO</h3>
            <h1>Count : {value.count}</h1>
        </div>
      </div>
    </>
  )
}

export default Navbar
