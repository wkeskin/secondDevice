/* 
File Name: Contact.jsx
Student Name: Wardatul Keskin
Student ID: 301294696
Date: 2024-09-26
*/

import { useState } from 'react';
import Wrapper from '../components/Wrapper';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import './default.css';

export default function Contact() {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    // Function to close modal and navigate back to home
    const handleClose = () => {
        setShowModal(false);
        navigate('/'); // Redirect to homepage
    };

    return (
        <Wrapper>
            <h1 className='pageTitle'>Contact</h1>
            <Row>
                <Col>
                    <div id='contactForm'>
                        <h5>ONLINE INQUIRY</h5>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" name="firstName" placeholder="Enter first name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" name="lastName" placeholder="Enter last name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicInquiry">
                                <Form.Label>Inquiry</Form.Label>
                                <Form.Control as="textarea" rows={4} name="inquiry" placeholder="Type your inquiry here" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" name="agree" label="I agree to communicate through email" />
                            </Form.Group>

                            <Button variant="success" type="submit">Submit</Button>
                        </Form>
                    </div>
                </Col>
                <Col id='contactCol'>
                    <h5>CONTACT DETAILS</h5>
                    <div id='contactDetails'>
                        
                    <p><b>Email</b>
                    <p>Wardatul Keskin (She/Her)
                        <p>
                            <a href="mailto:wkeskin@my.centennialcollege.ca" style={{ textDecoration: 'none', color: 'inherit' }}>
                                wkeskin@my.centennialcollege.ca
                            </a>
                        </p></p></p>
                        <p><b>Github</b>
                        <p>
                            <a href="https://github.com/wkeskin" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                github.com/wkeskin
                            </a>
                        </p></p>
                    </div>
                </Col>
            </Row>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thank You</Modal.Title>
                </Modal.Header>
                <Modal.Body>Thank you for submitting your inquiry.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>OK</Button>
                </Modal.Footer>
            </Modal>
        </Wrapper>
    );
}
