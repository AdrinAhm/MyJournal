import React, { Component, useState, useEffect } from "react";
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
import Card from 'react-bootstrap/Card';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import process from 'process';

function Pull() {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

    useEffect(() => {
        document.body.style.margin = 0;
        document.body.style.padding = 0;
        document.body.style.width = '100%';
      }, []);

    const [showCard, setShowCard] = useState(false);

    const handleButtonClick = () => {
        setShowCard(!showCard);
    };

    const textareaStyle = {
        width: '99%',
        height: '400px',
        resize: 'none',
        fontSize: '20px'

    
    };

    const navigate = useNavigate();
    // const version = process.env.REACT_APP_VERSION;
    return (
        <div style={{ backgroundImage: `url(${background})`, textAlign: 'center' }}>
        <h1 style={{ textAlign: 'center', fontSize: '50px', color: 'white',  fontFamily: 'cursive'}}>MyJournal</h1>
        
        <Navbar bg="light" expand="lg">
        <Container  >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="push" style={{ marginRight: '250px' }}>Write Journal</Nav.Link>
            <Nav.Link href="pull" style={{ marginRight: '250px' }}>Previous Journals</Nav.Link>
            <Nav.Link href="sharedpull">Shared Journals</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
            <div>
                <div>
                    <br></br>
                <Navbar expand="lg"  style={{backgroundColor: 'transparent'}}>
                <Container  >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="flex-column">
                        <h3 style={{color: 'white'}}>Date</h3>
                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDateChange}
                        />
                        <Button variant="light" onClick={handleButtonClick}>
                            {showCard ? 'Grab Journal' : 'Grab Journal'}
                            {/* <h8 style={{color: 	'#000'}}>Grab Shared Entry</h8> */}
                        </Button>
                    </Nav>
                </Navbar.Collapse>
                </Container>
             </Navbar>
                    
                </div>
                {showCard && (
                            <Card style={{backgroundColor: 'transparent', borderColor: 'transparent'}}>
                            <Card.Body>
                                <Card.Title style={{color: 'white'}}>Date: </Card.Title>
                                <Card.Title style={{color: 'white'}}>Rating: </Card.Title>
                                <Card.Text style={{color: 'white'}}>Entry: </Card.Text>
                            </Card.Body>
                            </Card>
                )}
                <br></br>
            </div>
            {/* <button onClick={() => navigate('/login', { replace: true })}>
                <h8>Save Journal Entry</h8>
            </button> */}
            
            {/* <div>
                <p>Version: {version}</p>
            </div> */}
            <br></br>
            <br></br>
            <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br> 
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             

        </div>

        

    );
};

export default Pull