import './App.css'
import Add from './Components/Add';
import DisplayData from './Components/DisplayData'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Update from './Components/Update';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <DisplayData/>,
    },
    {
      path: "/create",
      element: <Add/>,
    },
    {
      path: "/update/:id",
      element: <Update/>,
    },
  
  ])

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
