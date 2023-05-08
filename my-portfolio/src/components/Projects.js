import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Aqua from "../assets/aquaDown.png";
import Booze from "../assets/booze-and-bed.png";
import Fav from "../assets/favorite-musician.jpeg";
import First from "../assets/first-portfolio.png";
import Weather from "../assets/weather-dashboard.png"
import "../index.css";

function Projects() {
    return (
        <Row className='projects'>
            <Card className="aquadown" style={{ width: '19rem' }}>
                <Card.Img variant="top" src={Aqua} />
                <Card.Body>
                    <Card.Title>aquaDown</Card.Title>
                    <Card.Text>
                        this is a app built to showcase my back-end skill set. it was a group project that uses nodeJS, sequelize, mySQL, javascript and express.
                    </Card.Text>
                    <Button variant="primary" target="_blank" rel="noreferrer" href="https://github.com/hngreenberg/aquaDown">github repo.</Button>
                    <Button variant="primary" target="_blank" rel="noreferrer" href="https://aquadown.herokuapp.com/">deployed link.</Button>
                </Card.Body>
            </Card>
            <Card className='boozebed' style={{ width: '19rem' }}>
                <Card.Img variant="top" src={Booze} />
                <Card.Body>
                    <Card.Title>Booze & Bed</Card.Title>
                    <Card.Text>
                        this is a app built to showcase my front-end skill set. it was made using html, css, javascript, and a third-party api. it uses Breweries API.
                    </Card.Text>
                    <Button variant="primary" target="_blank" rel="noreferrer" href="https://github.com/tylerdins88/traveler-project">github repo.</Button>
                    <Button variant="primary" target="_blank" rel="noreferrer" href="https://tylerdins88.github.io/traveler-project/">deployed link.</Button>
                </Card.Body>
            </Card>
            <Card className='weatherdash' style={{ width: '19rem' }}>
                <Card.Img variant="top" src={Weather} />
                <Card.Body>
                    <Card.Title>weather dashboard</Card.Title>
                    <Card.Text>
                        this is a app built to showcase using a third-party api. it uses openWeatherAPI.
                    </Card.Text>
                    <Button variant="primary" target="_blank" rel="noreferrer" href="https://github.com/tylerdins88/weather-dashboard">github repo.</Button>
                    <Button variant="primary" target="_blank" rel="noreferrer" href="https://tylerdins88.github.io/weather-dashboard/">deployed link.</Button>
                </Card.Body>
            </Card>
            <Card className='firstport' style={{ width: '19rem' }}>
                <Card.Img variant="top" src={First} />
                <Card.Body>
                    <Card.Title>first portfolio</Card.Title>
                    <Card.Text>
                        this was the first portfolio i made at the beginning of my web development journey.
                    </Card.Text>
                    <Button variant="primary" target="_blank" rel="noreferrer" href="https://github.com/tylerdins88/tyler-dins-portfolio">github repo.</Button>
                    <Button variant="primary" target="_blank" rel="noreferrer" href="https://tylerdins88.github.io/tyler-dins-portfolio/">deployed link.</Button>
                </Card.Body>
            </Card>
            <Card className='favmus' style={{ width: '19rem' }}>
                <Card.Img variant="top" src={Fav} />
                <Card.Body>
                    <Card.Title>favorite musician</Card.Title>
                    <Card.Text>
                        this was the first basic html webpage i built when learning how html works..
                    </Card.Text>
                    <Button variant="primary" target="_blank" rel="noreferrer" href="https://github.com/tylerdins88/favorite-musician">github repo.</Button>
                    <Button variant="primary" target="_blank" rel="noreferrer" href="https://tylerdins88.github.io/favorite-musician/">deployed link.</Button>
                </Card.Body>
            </Card>
        </Row>
    );
}

export default Projects;