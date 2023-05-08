import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function HeaderNavs({ currentPage, handlePageChange }) {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"
                    onClick={() => handlePageChange("Home")}
                    className={currentPage === "Home" ? "nav-link active" : "nav-link"}>hey, i'm Tyler! </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="navLinks">
                        <Nav.Link href="#about"
                            onClick={() => handlePageChange("About")}
                            className={currentPage === "About" ? "nav-link active" : "nav-link"}>about me.</Nav.Link>
                        <Nav.Link href="#projects"
                            onClick={() => handlePageChange("Projects")}
                            className={currentPage === "Projects" ? "nav-link active" : "nav-link"}>my projects.</Nav.Link>
                        <Nav.Link href="#contact"
                            onClick={() => handlePageChange("Contact")}
                            className={currentPage === "Contact" ? "nav-link active" : "nav-link"}>contact me.</Nav.Link>
                        <Nav.Link href="#resume"
                            onClick={() => handlePageChange("Resume")}
                            className={currentPage === "Resume" ? "nav-link active" : "nav-link"}>my resume.</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderNavs;

