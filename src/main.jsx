import React, {lazy,Suspense,StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
const App = lazy(() => import('./App.jsx'))
import loader from './components/loader.jsx'
import Home from './Pages/Home.jsx'
const About = lazy(() => import ('./Pages/About.jsx'));
const Staff = lazy(() => import ('./Pages/Staff.jsx'));
const Contact = lazy(() => import ('./Pages/Contact.jsx'));
const Gallery = lazy(() => import('./Pages/Gallery.jsx'));
import {createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "hsskhaltsi/",
    element: <Suspense fallback={<loader/>}><App /></Suspense>,
    //errorElement: <NotFound />, // Handles 404s or route errors
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <Suspense fallback={<loader/>}><About /></Suspense>},
      { path: "staff", element: <Suspense fallback={<loader/>}><Staff /></Suspense>},
      { path: "contact", element: <Suspense fallback={<loader/>}><Contact /></Suspense>},      
      { path: "gallery", element: <Suspense fallback={<loader/>}><Gallery/></Suspense> }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
);
