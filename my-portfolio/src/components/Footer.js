import React from "react";
import Button from 'react-bootstrap/Button';
import Github from "../assets/github.png"
import Linkedin from "../assets/linkedin.webp"

function Footer() {
    return (
        <div className="footer text-center">
            © Tyler Dinslage
            <br />
            <Button className="footer-git" variant="outline-success"><a href="https://github.com/tylerdins88" target="_blank" rel="noreferrer"><img src={Github} alt="github icon" height="30px"></img></a></Button>{' '}
            <Button className="footer-link" variant="outline-info"><a href="https://www.linkedin.com/in/tyler-dinslage-profile/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="linkedin icon" height="30px"></img></a></Button>
        </div>
    );
}

export default Footer;