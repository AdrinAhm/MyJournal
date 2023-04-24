import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./Push.css";
import { useNavigate } from "react-router-dom";
import { Constants } from "@aws-amplify/core";
import background from "./backgroundimage.jpg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import process from 'process';

function SharedPull() {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    const textareaStyle = {
        width: '99%',
        height: '400px',
        resize: 'none',
        fontSize: '20px'
    };

    const navigate = useNavigate();
    // const version = process.env.REACT_APP_VERSION;
    return (
        <div style={{ backgroundImage: `url(${background})` }}>
        <h1 style={{ textAlign: 'center', fontSize: '50px', color: '#FF4500' }}>Shared Pull</h1>
        <Navbar bg="light" expand="lg">
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="push">Write Journal</Nav.Link>
            <Nav.Link href="pull">Previous Journals</Nav.Link>
            <Nav.Link href="sharedpull">Shared Journals</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
            
            <div>
                <div>
                    <h3>Date</h3>
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                    />
                </div>

                <br></br>
            </div>
            {/* <button onClick={() => navigate('/login', { replace: true })}>
                <h8>Save Journal Entry</h8>
            </button> */}
            <button>
                <h8>Save Journal Entry</h8>
            </button>
            {/* <div>
                <p>Version: {version}</p>
            </div> */}
        </div>

    );
};

export default SharedPull