import React, { useState } from 'react'

function Counter() {
    const [count,setCount] = useState(0);

    function increment(){
      setCount(count + 1)
      console.log(count);
    }

    function decrement(){
      if(count > 0){
          setCount(count - 1)
      }
      console.log(count);
    }

  return (
    <>
      <div className='container'>
          <div className='text-center mt-3 bg-info'>
              <h1>Counter</h1>
          </div>
          <div className='text-center mt-4'>
          <button type="button" className="btn btn-outline-primary" onClick={increment}>increment</button>
          <button type="button" className="btn btn-outline-secondary mx-5">{count}</button>
          <button type="button" className="btn btn-outline-success" onClick={decrement}>decrement</button>
          </div>
      </div>
    </>
  )
}

export default Counter
