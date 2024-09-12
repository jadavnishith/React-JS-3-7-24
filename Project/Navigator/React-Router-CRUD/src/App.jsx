import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Container from "./Components/Container";
import UserForm from "./Components/UserForm";
import SliderCarousel from "./Components/SliderCarousel";
import Profile from "./Components/Profile";
import ProfilePage from "./Components/ProfilePage";
import TodoApp from "./Components/TodoApp";
import TodoList from "./Components/TodoList";
import { useState } from "react";
import TodoCounter from "./Components/TodoCounter";

function App() {

  const [items, setItems] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <SliderCarousel />
          <Footer />
        </>
      ),
    },
    {
      path: "/product",
      element: (
        <>
          <Navbar />
          <Container />
          <Footer />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <Navbar />
          <UserForm />
          <Footer />
        </>
      ),
    },
    {
      path: "/profile",
      element: (
        <>
          <Navbar />
          <Profile />
          <Footer />
        </>
      ),
      children: [
        {
          path: "/profile/:profileId",
          element: <ProfilePage />,
        },
      ],
    },
    {
      path: "/todoApp",
      element: (
        <>
          <Navbar />
          {<TodoApp setItems={setItems} items={items}/>}
          <Footer />
        </>
      ),
    },
    {
      path: "/todoList",
      element: (
        <>
          <Navbar />
          {<TodoList items={items} setItems={setItems}/>}
          <Footer />
        </>
      ),
    },
    {
      path: "/todoCounter",
      element: (
        <>
          <Navbar />
          <TodoCounter items={items.length} />
          <Footer />
        </>
      ),
    },
  ]);
  return (
    <>
      <div
        style={{
          backgroundImage: "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
        }}
      >
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
