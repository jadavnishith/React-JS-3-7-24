import { useState } from 'react'
import './App.css'
import Navbar from './Components/Hooks/UseContext/Navbar'
import Parent from './Components/Hooks/UseContext/Parent'
import Context from './Context/Context'

function App() {
  
  const [count,setCount] = useState(1)
  return (
    <>
      {/* useContext */}
      <Context.Provider value={{count,setCount}}>
      <div className='container'>
      <Navbar/>
      <Parent/>
      <div className='container text-bg-danger text-center p-3'>
        <div className='h1'>Count : {count}</div>
        <button className='btn btn-primary' onClick={() => setCount(count + 1)}>+</button>
      </div>
      </div>
      </Context.Provider>
    </>
  )
}

export default App
