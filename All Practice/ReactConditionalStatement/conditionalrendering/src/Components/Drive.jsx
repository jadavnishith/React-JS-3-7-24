import React from 'react'

function Drive({age,allow}) {
  return (
    <>
    <div className='text-primary bg-body-secondary '>
      <h1 className='text-center text-bg-info py-2'>Drive or Not</h1>
      <p className='display-5 text-center py-3'>Your Age is {age} And you {allow} Drive.</p>
      </div>
    </>
  )
}

export default Drive
