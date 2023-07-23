// Sidebar.js
import React from 'react';
import './Sidebar.css'; // 別途スタイルファイルを作成
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home' 
import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap' 
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <NavbarBs className="sidebar">
            <Container>
                <Nav className='footer-text'>
                  <h1>-</h1>
                  <Nav.Link to="/" as={NavLink}>
                    <h1>Home</h1>
                  </Nav.Link>
                  <h1>-</h1>
                  <Nav.Link to="/about" as={NavLink}>
                    <h1>About</h1>
                  </Nav.Link>
                  <h1>-</h1>
                  <Nav.Link to="/moji" as={NavLink}>
                    <h1>Moji</h1>
                  </Nav.Link>

                </Nav>
            
              </Container>
      </NavbarBs>
  );
};

export default Sidebar;
