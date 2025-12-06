import React from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../assets/images/wise-logo-black.png"

export default function NavBar() {
    return (
        <Navbar bg = "light" expand = "lg" className = "py-3 shadow-sm" fixed = "top">
            <Container>
                <img
                    src = {logo}
                    alt = "WISE Logo"
                    width = "8.5%"
                    height = "8.5%"
                    className = "d-inline-block align-top me-3"
                />
                <Navbar.Brand as = {Link} to = "/" style = {{ color: "blue", fontweight: "bold" }}>
                    WISE @ UW-Madison 
                </Navbar.Brand>

                <Navbar.Toggle aria-controls = "basic-navbar-nav"/>

                <Navbar.Collapse id = "basic-navbar-nav">
                    <Nav className = "ms-auto">
                        <Nav.Link as = {Link} to="/">Home</Nav.Link>
                        <Nav.Link as = {Link} to="/about">About</Nav.Link>
                        <Nav.Link as = {Link} to="/community">Community Life</Nav.Link>
                        <Nav.Link as = {Link} to="/events">Events</Nav.Link>
                        <Nav.Link as = {Link} to="/staff">Faculty & Staff</Nav.Link>
                        <Nav.Link as = {Link} to="/connect">Stay Connected</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}