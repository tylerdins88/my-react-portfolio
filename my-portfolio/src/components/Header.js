import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">hey, i'm Tyler! </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about"
                            onClick={() => props.handlePageChange("About")}
                            className={props.currentPage === "About" ? "nav-link active" : "nav-link"}>who i am.</Nav.Link>
                        <Nav.Link href="#portfolio"
                            onClick={() => props.handlePageChange("Portfolio")}
                            className={props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"}>my portfolio.</Nav.Link>
                        <Nav.Link href="#contact"
                            onClick={() => props.handlePageChange("Contact")}
                            className={props.currentPage === "Contact" ? "nav-link active" : "nav-link"}>contact me.</Nav.Link>
                        <Nav.Link href="#resume"
                            onClick={() => props.handlePageChange("Resume")}
                            className={props.currentPage === "Resume" ? "nav-link active" : "nav-link"}>my resume.</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;