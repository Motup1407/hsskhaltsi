import React, { lazy, Suspense, StrictMode, useTransition } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
const App = lazy(() => wait(1000).then(() => import("./App.jsx")));
import logo from "./assets/LOGO.png";
const Home = lazy(() => import("./Pages/Home.jsx"));
const About = lazy(() => import("./Pages/About.jsx"));
const Staff = lazy(() => import("./Pages/Staff.jsx"));
const Contact = lazy(() => import("./Pages/Contact.jsx"));
const Gallery = lazy(() => import("./Pages/Gallery.jsx"));
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "hsskhaltsi/",
    element: (
      <Suspense
        fallback={
          <div className="flex h-screen bg-gray-800 justify-items-center items-center">
            <div className="w-2/3 mx-auto flex-col justify-items-center">
              <img className="flex h-60 w-80" src={logo} alt="schoollogo" />
              <h1 className="text-green-500 text-2xl font-bold flex">
                WELCOME
              </h1>
              <h6 className="text-white">To</h6>
              <h2 className="text-orange-500 text-2xl font-bold flex">
                GOVT HIGHER SECONDARY SCHOOL
              </h2>
              <h2 className="text-orange-500 text-2xl font-bold flex">
                KHALTSI
              </h2>
            </div>
          </div>
        }
      >
        <App />
      </Suspense>
    ),
    //errorElement: <NotFound />, // Handles 404s or route errors
    children: [
      {
        path: "",
        element: (
          <Suspense fallback="Loading...">
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback="Loading...">
            <About />
          </Suspense>
        ),
      },
      {
        path: "staff",
        element: (
          <Suspense fallback="Loading...">
            <Staff />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback="Loading...">
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "gallery",
        element: (
          <Suspense fallback="Loading...">
            <Gallery />
          </Suspense>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
function wait(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
