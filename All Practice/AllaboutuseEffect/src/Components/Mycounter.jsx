import React, { useEffect, useState } from 'react'

function Mycounter() {

    const [count,setCount] = useState(0)

    console.log('Component Mount');

    useEffect( () => {
        // call to be Executed
        console.log("The count is : ",count);
        
        console.log("Component update");

        // Optional return something
        return(() => {
            console.log("cleaned up");
            
        })
        
    },[count]) // Dependency Array
    
  return (

    <>
      <div className='container'>
        <div className='text-center text-bg-dark p-4 mt-4'>
            <div className='counter'>
                <h1 className='mb-3'>Count = {count}</h1>
                <button className='btn btn-outline-warning me-2' onClick={() => setCount (count - 1)}>
                    Decrement (-)
                </button>
                <button className='btn btn-outline-success btn- ms-2'  onClick={() => setCount (count + 1)}>
                    Increment (+)
                </button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Mycounter
