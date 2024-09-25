import { useState } from "react";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import SignUp from "./Components/SignUp";
import {createBrowserRouter,RouterProvider} from "react-router-dom";

import "./App.css";

function App() {

  const [user, setUser] = useState(null);
  // user: Ye state user ki information store krne ke liye 
  // Initial value null rakhi hai, 
  // kyuki koi user logged in nahi hai.

  const [isLogin, setIsLogin] = useState(false);
  //  isLogin: Ye boolean state check karega ki user logged in hai ya nahi. Initial value false diya hai

 

function toggleLogin() {
  setIsLogin(!isLogin);
  // Ye function isLogin state ko toggle karega. 
  // Agar user logged in hai to false karega aur agar logged out hai to true karega.
}


  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar user={user} setUser={setUser} />
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <Navbar user={user} />
          <SignUp toggleLogin={toggleLogin} />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar user={user} setUser={setUser}  />
          <Login setUser={setUser} toggleLogin={toggleLogin} />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
