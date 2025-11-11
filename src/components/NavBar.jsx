import React from "react";
import {NavBar, Nav, Container} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <NavBar bg="light" expand="lg" sticky="top">
            <Container>
                <NavBar.Brand as={Link} to="/" style={{color:"blue", fontweight:"bold"}}>
                    WISE @ UW-Madison 
                </NavBar.Brand>
                <NavBar.Toggle aria-controls="navbar-nav"/>
                <NavBar.Collapse id="ms-auto">
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/community">Community Life</Nav.Link>
                    <Nav.Link as={Link} to="/events">Upcoming Events</Nav.Link>
                    <Nav.Link as={Link} to="/faculty">Faculty & Staff</Nav.Link>
                    <Nav.Link as={Link} to="/connect">Stay Connected</Nav.Link>
                </NavBar.Collapse>
            </Container>
        </NavBar>
    )
}