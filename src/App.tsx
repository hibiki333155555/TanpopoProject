import React, { useState } from 'react';
import './App.css'
import BackGroundImage from './components/BackGround'
import './components/FullScrean.css'
import Footer from './components/Footer'
import Title from './components/Title'
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './pages/Home'
import { About } from './pages/About';
import { Moji } from './pages/Moji';
import './components/FullScrean.css';
import imgSample1 from './components/img4.png';


function App() {
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setSidebarOpen(!sidebarOpen);
  // };

  return (
    <> 
      <Sidebar/>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/moji" element={<Moji />} />
        </Routes>
      </Container>
    </>
  )
}

export default App
