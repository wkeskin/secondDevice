/* 
File Name: About.jsx
Student Name: Wardatul Keskin
Student ID: 301294696
Date: 2024-09-26
*/

import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Wrapper from '../components/Wrapper';
import ProfileImage from '../assets/profile.jpg';
import './default.css'

export default function About() {
    return (
        <Wrapper>
            <h1 className='pageTitle'>
                About
            </h1>
            <div id='aboutHeader'>
            <Image src={ProfileImage} roundedCircle />
                <h2>Wardatul Keskin (She/Her)</h2>
            </div>

            <Row className="d-flex justify-content-center">
                <Col xs={12} md={6} style={{ maxWidth: '18rem' }} className="mb-4">
                    {/* This is first card for brief description */}
                    <Card style={{ width: '100%' }}>
                        <Card.Header style={{ textAlign: 'center', fontWeight: 'bolder' }}>About Me</Card.Header>
                        <Card.Body style={{ textAlign: 'center' }}>
                            <Card.Text>
                                I'm studying Software Engineering with a focus on Artificial Intelligence,
                                and I'm excited to share my journey with you!
                                This website is a collection of the projects I've worked on as I dive deeper 
                                into the world of Web Application development and other Programming languages.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6}>
                    {/* This is second card for more description */}
                    <Card style={{ width: '100%'}}>
                        <Card.Header style={{ textAlign: 'center', fontWeight: 'bolder' }}>More About Me</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                <p>Before becoming a software engineer, I spent 10 years in the field of education. During that time,
                                    I gained valuable soft skills like organizing administrative tasks, working in teams, public communication skills,
                                    handling lab procedures, and creating interactive teaching materials.</p>
                                <p>Beyond coding and parenting, I find joy in hobbies that bring balance to my life.
                                    I love cycling, traveling, and gardening.
                                    Cycling and traveling have taught me how to create efficient travel itineraries and adapt to new cultures,
                                    while also offering a refreshing escape.
                                    Gardening, on the other hand, requires persistence and patience,
                                    sparking my curiosity to research how to cultivate plants properly.
                                    Each of these hobbies brings positive energy into both my personal life and career.
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>                
            </Row> <br/>
            <div id='aboutButton'>  <a href="https://drive.google.com/uc?export=download&id=1qkuZX6W2zVinoiGGjdj_nBUczr_a04KL" target="_blank" rel="noopener noreferrer">
                <Button variant="success">Download My Resume</Button>
            </a></div><br />
        </Wrapper>
    );
}
