import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg" className="py-3 shadow-sm" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/" style={{color:"blue", fontweight:"bold"}}>
                    WISE @ UW-Madison 
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/community">Community Life</Nav.Link>
                        <Nav.Link as={Link} to="/events">Upcoming Events</Nav.Link>
                        <Nav.Link as={Link} to="/faculty">Faculty & Staff</Nav.Link>
                        <Nav.Link as={Link} to="/connect">Stay Connected</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}