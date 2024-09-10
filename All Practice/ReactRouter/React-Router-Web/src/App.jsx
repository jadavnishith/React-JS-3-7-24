import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Container from "./Components/Container";
import UserForm from "./Components/UserForm";
import SliderCarousel from "./Components/SliderCarousel";

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar/><SliderCarousel/><Footer/></>,
    },
    {
      path: "/product",
      element: <><Navbar/><Container/><Footer/></>,
    },
    {
      path: "/contact",
      element: <><Navbar/><UserForm/><Footer/></>,
    },
  ]);
  return (
    <>
    <div style={{backgroundImage: "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)"}}>
       <RouterProvider router={router} />
       </div>
    </>
  )
}

export default App
