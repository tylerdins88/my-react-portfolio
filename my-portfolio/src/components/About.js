import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Card from 'react-bootstrap/Card';
import headshot from '../assets/headshot-one.jpg';

function About() {
    return (
        <div className="about">
            <Card.Img id="td" variant="top" src={headshot} style={{ width: '27vw' }} />
            <Card className="aboutme">
                <Card.Body id="aboutMe" style={{ width: '75vw' }}>
                    <Card.Title>about me:</Card.Title>
                    <Card.Text>
                        <p>Certified full stack developer interested in professional opportunities that allow me to expand my technical knowledge. I recently have been in the hopsitality and sales industries, but am looking to start a new career chapter. I am a recent graduate from UC Berkeley's Full Stack Web Development Certification Program. Team player with great technical skills, clear communication, and an excellent work ethic.</p>

                    </Card.Text>
                    <Card.Title>background:</Card.Title>
                    <Card.Text>
                        <p>I graduated from the University of Nebraska at Lincoln in 2011 with a double degree in Finance and Economics. Over the next decade I worked a variety of opportunities that expanded my network, bettered my technical skills, and learned many new ones.</p>

                        <p>In the hopsitality industry I worked with people on vacation, homeowners, HOA's, and local management. I developed several important skills such as strong communication skills, patience & empathy, conflict resolution, teamwork, time management, and attention to detail. You must be professional at all times and know how to communicate effectively with everyone.  </p>

                        <p>The sales industry is all about connecting a consumer with the desired product or service they want. You learn to how to show the value of what you offer, negotiate, and problem-solve. Skills learned here include product knowledge, sales techniques & strategies, goal-oriented mindset, persistence and resilience. This creates and maintains a loyal relationship between the consumer and provider.</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;