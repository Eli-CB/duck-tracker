import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
//import Link from 'next/link';
//import '../pages/index.css';

class NavBar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="center-mobile" id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Form</Nav.Link>
                        <Nav.Link href="/data">Data</Nav.Link>
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