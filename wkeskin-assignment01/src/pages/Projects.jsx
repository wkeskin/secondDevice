/* 
File Name: Projects.jsx
Student Name: Wardatul Keskin
Student ID: 301294696
Date: 2024-09-26
*/

import { useState } from 'react'
import Wrapper from '../components/Wrapper'
import './default.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import PremierImage from '../assets/premiers.png';
import ladybugImage from '../assets/ladybug.png';
import webdesign from '../assets/webdesign.png';

export default function Projects() {
    return (
        <Wrapper>
            <h1 className='pageTitle'>Projects</h1>
            <p>There are several projects that I did during my study periods. Below are the example of some projects:</p>
            <div>
                <Row className="d-flex justify-content-center" style={{paddingBottom:'33px'}}>
                    <Col xs={12} md={4} lg={4}>
                        <Card style={{ width: '24rem' }}>
                            <Card.Img variant="top" src={PremierImage} />
                            <Card.Body>
                                <Card.Title><b>GUI Application</b></Card.Title>
                                <Card.Text>
                                    An application that provides users with information about Ontario's Premier,
                                    including their name, picture, and term of office. This application is built based on:
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item><li>C# GUI Application</li></ListGroup.Item>
                                <ListGroup.Item><li>C# Object Oriented Programming</li></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <Card style={{ width: '24rem' }}>
                            <Card.Img variant="top" src={ladybugImage} />
                            <Card.Body>
                                <Card.Title><b>Smash Lady Bug Game</b></Card.Title>
                                <Card.Text>
                                    This is a simple web game built.
                                    This application requires the user to smash the ladybugs to score points,
                                    while the ladybugs continue moving randomly at an increasing speed after the user successfully smashes a bug.
                                    The user can reset the speed and score without worrying about a game over.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item><li>HTML and CSS</li></ListGroup.Item>
                                <ListGroup.Item><li>Javascript with Object Oriented approach</li></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} lg={4}>
                        <Card style={{ width: '24rem' }}>
                            <Card.Img variant="top" src={webdesign} />
                            <Card.Body>
                                <Card.Title><b>Web Designing</b></Card.Title>
                                <Card.Text>
                                    I enjoyed designing website. The picture above is one of the example of my design.
                                    I also put the handle exception using pattern in Javascript.
                                    Previously I had etsy online shop and that's my own logo. I wish one day I could 
                                    continue growing my business and own my own website.
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item><li>HTML, CSS</li></ListGroup.Item>
                                <ListGroup.Item><li>Javascript</li></ListGroup.Item>
                                <ListGroup.Item><li>Graphic Design (Canva, Photoshop, Corel)</li></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Wrapper>
    );
}
