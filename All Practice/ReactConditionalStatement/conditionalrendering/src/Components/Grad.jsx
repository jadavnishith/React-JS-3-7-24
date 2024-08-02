import React from 'react'

function Grad({userValue,userGrade}) {

  return (
    <>
    <div className='container bg-body-secondary border-1 rounded-5 p-5 my-4'>
      <h1 className='text-center bg-danger bg-dark-subtle border-3 rounded-4 p-3  text-dark'>
        Your Mark's is {userValue}. And Your Grade is {userGrade}.
      </h1>
      </div>
    </>
  )
}

export default Grad
