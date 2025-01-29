import React, { lazy, Suspense, StrictMode, useState, useTransition, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
const App = lazy(() => import("./App.jsx"));
import logo from "./assets/LOGO.png";
import WelcomeScreen from './components/WelcomeScreen.jsx';
const Home = lazy(() => import("./Pages/Home.jsx"));
const About = lazy(() => import("./Pages/About.jsx"));
const Staff = lazy(() => import("./Pages/Staff.jsx"));
const Contact = lazy(() => import("./Pages/Contact.jsx"));
const Gallery = lazy(() => import("./Pages/Gallery.jsx"));
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/*
const WelcomePage = () => {
  return (
     <div className="flex h-screen bg-gray-900 justify-items-center items-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-nd mx-auto text-center justify-items-center">
            <img className="flex h-60 w-80" src={logo} alt="schoollogo" />
            <h1 className="text-green-500 text-2xl font-bold flex">WELCOME</h1>
            <h6 className="text-gray-900 font-bold">To</h6>
            <h2 className="text-orange-500 text-2xl font-bold flex">
              GOVT HIGHER SECONDARY SCHOOL
            </h2>
            <h2 className="text-orange-500 text-2xl font-bold flex">KHALTSI</h2>
          </div>
        </div>
  );
};*/

// App component to manage the welcome screen and routing
const App1 = () => {
  const [showWelcome, setShowWelcome] = useState(true); // Control the welcome screen
  const [isPending, startTransition] = useTransition(); // Manage transitions




const router = createBrowserRouter([
  {
    path: "hsskhaltsi/",
    element: (
      <Suspense
        fallback={<welcome/>
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
          <Suspense fallback={<h2>Loading...</h2>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "staff",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Staff />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "gallery",
        element: (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Gallery />
          </Suspense>
        ),
      },
    ],
  },
]);

useEffect(() => {
  startTransition(() => {
    setTimeout(() => {
      setShowWelcome(false); // Hide welcome page once the app is ready
    }, 0); // Automatically proceed once useTransition finishes
  });
}, []);
return (
  <>
    {showWelcome || isPending? (
      <WelcomeScreen/>
    ) : (
      <RouterProvider router={router} />
    )}
  </>
);
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App1 />
  </StrictMode>
);
