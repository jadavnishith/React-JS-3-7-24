import React, { useContext } from 'react'
import Context from '../../../Context/Context'

function Home() {
    const value = useContext(Context)
  return (
    <>
      <div className='text-bg-primary p-3 text-center'>
        <h3>Home Count : {value.count}</h3>
        <button className='btn btn-warning  ' onClick={()=>value.setCount(value.count + 10)}>+10</button>
      </div>
    </>
  )
}

export default Home
