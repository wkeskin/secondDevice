/* 
File Name: Navbar.jsx
Student Name: Wardatul Keskin
Student ID: 301294696
Date: 2024-09-26
*/

import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicNavbar() {
    return (
        <header style={{marginBottom:'20px'}}>
            <Navbar bg="dark" data-bs-theme="dark" expand="lg"  sticky="top" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img
                            alt="logo"
                            src="/icon.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        WKeskin
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px', fontWeight: 'bold' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Projects">Projects</Nav.Link>
                            <Nav.Link href="/Services">Services</Nav.Link>
                            <Nav.Link href="/About">About</Nav.Link>
                            <NavDropdown title="Contact" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="/Contact">Contact Me</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default BasicNavbar;