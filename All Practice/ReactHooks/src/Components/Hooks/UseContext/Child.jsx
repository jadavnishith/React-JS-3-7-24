import React, { useContext} from 'react'
import Context from '../../../Context/Context'

function Child() {

const value = useContext(Context)
    console.log(value);
    

  return (
    <>
    <div className='text-center p-3'>
      <h3>Child Count : {value.count}</h3>
      <button className='btn btn-success' onClick={() => value.setCount(value.count + 5)}>+5</button>
      </div>
    </>
  )
}

export default Child
