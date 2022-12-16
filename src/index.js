import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeComponent from './component/home';
import LoginComponent from "./component/login";
import RegisterComponent from "./component/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginComponent/>
  },
  {
    path: "/register",
    element: <RegisterComponent/>
  },
  {
    path: "/home",
    element: <HomeComponent/>
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);