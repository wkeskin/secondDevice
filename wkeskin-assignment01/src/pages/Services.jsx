/* 
File Name: Services.jsx
Student Name: Wardatul Keskin
Student ID: 301294696
Date: 2024-09-26
*/

import { useState } from 'react'
import Wrapper from '../components/Wrapper'
import './default.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Services() {
    return (
<Wrapper>
    <h1 className='pageTitle'>Services</h1>
    <p>Here are the full services I offer, tailored to my expertise and skill set.</p>
    <Row>
        <Col  xs={12} md={4} lg={4}>
        <div id='serviceCol'>
        <img id='serviceIcon' src='./webdesign.svg'>
        </img>
        <h5><b>Web Design</b></h5>
        <p>Create simple yet effective web pages using HTML, CSS, JavaScript, and Bootstrap, ensuring they are mobile-friendly and user-friendly</p>
        </div>
        </Col>
        <Col>
        <div id='serviceCol'>
        <img id='serviceIcon' src='./graphicdesign.svg'></img>
        <h5><b>Graphic design</b></h5>
        <p>Create custom logos, banners, pamphlets, ocial media content that align with brand aesthetics using 
            software like Photoshop, CorelDRAW, and Canva.</p>
        </div>
        </Col>
        <Col>
        <div id='serviceCol'>
        <img id='serviceIcon' src='./webdev.svg'></img>
        <h5><b>Web Development</b></h5>
        <p>Build responsive and dynamic web applications using React, JavaScript, HTML, and CSS.</p>
        </div>
        </Col>
    </Row>
    <Row>
        <Col>
        <div id='serviceCol'>
        <img id='serviceIcon' src='./database.svg'></img>
        <h5><b>Backend Development</b></h5>
        <p>Design and develop backend solutions using Node.js, Python, and databases like MongoDB and Oracle SQL.</p>
        </div>
        </Col>
        <Col>
        <div id='serviceCol'>
        <img id='serviceIcon' src='./documentation.svg'></img>
        <h5><b>Software Requirements Documentation</b></h5>
        <p>Create detailed Software Requirements Specification (SRS) documents for projects, ensuring clarity and smooth development processes.</p>
        </div>
        </Col>
        <Col>
        <div id='serviceCol'>
        <img id='serviceIcon' src='./application.svg'></img>
        <h5><b>Desktop Application</b></h5>
        <p>Create GUI-based desktop applications using C# and Java</p>
        </div>
        </Col>
    </Row>

</Wrapper>
    );
}
