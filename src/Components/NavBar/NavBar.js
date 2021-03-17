import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import logo from '../../images/loog42.png'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navbar-style">
            <div className="container">
                <Navbar expand="lg">
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="logo"/>
                        <span className="logo">
                            Car <span className="text-danger">Eleven</span></span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#home">Gallery</Nav.Link>
                            <Nav.Link href="/addCar">Add Car</Nav.Link>
                            <Nav.Link href="#link">Login</Nav.Link>
                            <Button className="main-button">Register</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        </div>
    );
};

export default NavBar;