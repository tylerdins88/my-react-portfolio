import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Card from 'react-bootstrap/Card';
import Pfp from '../../src/assets/pfp.png';

function About() {
    return (
        <>
            <div className="about">
                <Card.Img id="td" variant="top" src={Pfp} style={{ width: '27vw' }} />
                <Card>

                    <Card.Body id="form" style={{ width: '75vw' }}>
                        <Card.Title>about me:</Card.Title>
                        <Card.Text style={{ width: '75vw' }}>
                            <p>Certified full stack developer interested in professional opportunities that allow me to expand my technical knowledge. I recently have been in the hopsitality and sales industries, but am looking to start a new career chapter. I am a recent graduate from UC Berkeley's Full Stack Web Development Certification Program. Team player with great technical skills, clear communication, and an excellent work ethic.</p>

                        </Card.Text>
                        <Card.Title>background:</Card.Title>
                        <Card.Text style={{ width: '75vw' }}>
                            <p>I graduated from the University of Nebraska at Lincoln in 2011 with a double degree in Finance and Economics. Over the next decade I worked a variety of opportunities that expanded my network, bettered my technical skills, and learned many new ones.</p>

                            <p>In the hopsitality industry I worked with people on vacation, homeowners, HOA's, and local management. I developed several important skills such as communication, customer service, problem-solving, teamwork, time management, and attention to detail. You must be professional at all times and know how to commuicate effectively with everyone.  </p>

                            <p>The sales industry is all about connecting a consumer with the desried product or service they want. You learn to how to show the value of what you offer, negotiate, and problem-solve. You must find solutions and create support to ensure the product supply is elite. This creates and maintains a loyal relationship between the consumer and provider.</p>
                        </Card.Text>

                    </Card.Body>
                </Card>
                <p></p>
            </div>
        </>
    );
};

export default About;