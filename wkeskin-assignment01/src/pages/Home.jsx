/* 
File Name: Home.jsx
Student Name: Wardatul Keskin
Student ID: 301294696
Date: 2024-09-26
*/

import { useState } from 'react'
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import ProfileImage from '../assets/profile.jpg';
import Wrapper from '../components/Wrapper';
import { Link } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import './default.css'

export default function Home() {
  return (
    <Wrapper>
      <Row className="d-flex justify-content-center">
        <Col xs={6} md={4}>
          <Image style={{marginTop:'35px', marginLeft:'60px'}} src={ProfileImage} roundedCircle />
        </Col>
        <Col xs={18} md={6}>
          
          <h1 id='homeTitle'>Hi, I am Warda!</h1>
          <p id='homeDescription'>I'm a Software Engineer - AI. I've 2 years experience in developing Web Application 
            and other programming language applications. 
            Reach out if you'd like to learn more!</p>
          <div>
            <Link id ='homeLinks' to="/about">
              About Me
            </Link>
            <Link id ='homeLinks' to="/contact">
              Contact Me
            </Link>
          </div><br/>
        </Col>
      </Row>
    </Wrapper>
  );
}
