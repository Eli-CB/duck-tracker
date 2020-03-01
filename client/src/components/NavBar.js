import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


//import Link from 'next/link';

class NavBar extends Component {

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="center-mobile" id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/">Form</Link>
                        <Link to="/duckdata">Data</Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse  id="basic-navbar-nav">
                    <Nav className="mr-auto" />
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;