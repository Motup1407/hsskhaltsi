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

// App component to manage the welcome screen and routing
const AppLazy = () => {
  const [showWelcome, setShowWelcome] = useState(true); // Control the welcome screen
  const [isPending, startTransition] = useTransition(); // Manage transitions




const router = createBrowserRouter([
  {
    path: "hsskhaltsi/",
    element: (
      <Suspense
        fallback={<WelcomeScreen/>
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
          <Suspense fallback={<WelcomeScreen/>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "About",
        element: (
          <Suspense fallback={<WelcomeScreen/>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "Staff",
        element: (
          <Suspense fallback={<WelcomeScreen/>}>
            <Staff />
          </Suspense>
        ),
      },
      {
        path: "Contact",
        element: (
          <Suspense fallback={<WelcomeScreen/>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "Gallery",
        element: (
          <Suspense fallback={<WelcomeScreen/>}>
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
    }, 1000); // Automatically proceed once useTransition finishes
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
    <AppLazy />
  </StrictMode>
);
