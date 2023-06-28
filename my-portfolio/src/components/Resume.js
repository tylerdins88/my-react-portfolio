import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";
import ResumePDF from "../assets/tyler-dinslage-resume-july-2023.pdf"

function Resume() {
    return (
        <>
            <h2 className="reshead">abilities and skill sets:</h2>
            <Accordion id="accordion" defaultActiveKey="0" flush style={{ width: '40vw' }}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>front-end skills.</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>html5</li>
                            <li>css3</li>
                            <li>javascript</li>
                            <li>jQuery</li>
                            <li>responsive design</li>
                            <li>react</li>
                            <li>bootstrap</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>back-end skills.</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>api's</li>
                            <li>node</li>
                            <li>express</li>
                            <li>model view controller (MVC)</li>
                            <li>progressive web applications (PWA)</li>
                            <li>rest</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>dev tools.</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>git</li>
                            <li>npm</li>
                            <li>jest</li>
                            <li>webpack</li>
                            <li>compass</li>
                            <li>insomnia</li>
                            <li>apollo</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>database skills.</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li>mysql</li>
                            <li>sequelize</li>
                            <li>nosql</li>
                            <li>mongodb</li>
                            <li>mongoose</li>
                            <li>graphql</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>soft skills.</Accordion.Header>
                    <Accordion.Body>
                        <p className="skillsShift">customer service:</p>
                        <ul>
                            <li>strong communication skills</li>
                            <li>patience and empathy</li>
                            <li>conflict resolution</li>
                            <li>time management</li>
                        </ul>
                        <p className="skillsShift">sales:</p>
                        <ul>
                            <li>product knowledge</li>
                            <li>sales techniques and strategies</li>
                            <li>goal-oriented mindeset</li>
                            <li>persistence and resilience</li>
                        </ul>
                        <p className="skillsShift">problem-solving:</p>
                        <ul>
                            <li>analytical and critical thinking</li>
                            <li>attention to detail</li>
                            <li>decision-making</li>
                            <li>creativity</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Card className="downres" >
                <Card.Body>
                    <center>
                        <h4>
                            <a target="_blank" rel="noreferrer" href={ResumePDF}>view and download my resume here.</a>
                        </h4>
                    </center>
                </Card.Body>
            </Card>
        </>
    );
}

export default Resume;