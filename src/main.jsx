import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Staff from './Pages/Staff.jsx'
import Contact from './Pages/Contact.jsx'
import Gallery from './Pages/Gallery.jsx'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "hsskhaltsi/",
    element: <App/>,
    //errorElement: <NotFound />, // Handles 404s or route errors
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "staff", element: <Staff /> },
      { path: "contact", element: <Contact /> },      
      { path: "gallery", element: <Gallery /> }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
);
