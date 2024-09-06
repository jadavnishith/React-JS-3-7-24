import React, { useContext } from 'react'
import Child from './Child'
import Context from '../../../Context/Context'

function Parent() {
    const value = useContext(Context)
  return (
    <>
    <div className='text-center text-bg-warning'>
     <h1>Parent Component : {value.count}</h1>
     <Child/> 
     </div>
    </>
  )
}

export default Parent
