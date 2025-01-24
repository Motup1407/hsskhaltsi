import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Staff from './Pages/Staff';
import Contact from './Pages/Contact'
import Gallery from './Pages/Gallery';
import ScrollTop from './components/scrollTop'



const App=() => {
  return (
    
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route index element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Staff' element={<Staff/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
      </Routes>
      <ScrollTop/>
      <Footer />
    </div>
  );
}

export default App;