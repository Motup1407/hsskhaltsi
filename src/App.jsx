import React from "react";
import { Outlet} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollTop from "./components/scrollTop";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet/>
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default App;
