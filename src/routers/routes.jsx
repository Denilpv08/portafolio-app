import React from 'react';
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Portafolio from '../pages/portafolio/Portafolio';
import Contact from '../pages/contact/Contact';
import Themes from '../components/Themes';

const MyRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='portafolio' element={<Portafolio />} />
        <Route path='contact' element={<Contact />} />
      </Routes>    
    </Router>
  )
}

export default MyRoutes;