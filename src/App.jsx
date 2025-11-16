import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import AppLayout from "./UI/AppLayout";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Diagnose } from "./pages/Diagnose";


export const App = () => {

  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      // errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />,
          
        },
        {
          path: "/login",
          element: <Login />,
          
        },

        {
          path: "/signup",
          element: <SignUp />,
          
        },
        {
          path: "/diagnose",
          element: <Diagnose />,
          
        },
        
      ],
    },



  ]);


  


  return <RouterProvider router={router} />
}