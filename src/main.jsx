import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ClubVerification from './Pages/ClubVerification/ClubVerification';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from '@material-tailwind/react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ]
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>
  },
  {
    path: "/clubVerification",
    element: <ClubVerification></ClubVerification>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>

    </NextUIProvider>

  </React.StrictMode>,
)
