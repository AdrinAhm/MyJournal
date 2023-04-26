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
import background from "./Pictures/backgroundimage.jpg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./SharedPull.css";
import { FaStar } from "react-icons/fa";
import { AiOutlineMail } from 'react-icons/ai';
// import process from 'process';

function SharedPull() {
    const [dateValue, setSelectedDate] = useState(new Date())
    const handleDateChange = (date) => {
        setSelectedDate(date)
    }
    const colors = {
        orange: "#FFBA5A",
        grey: "#a9a9a9"
      };

    const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)
    const starsbeautify = {
        display: "flex",
        flexDirection: "row",
      };

      const handleClick = value => {
        setCurrentValue(value)
      }
    
      const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
      };
    
      const handleMouseLeave = () => {
        setHoverValue(undefined)
      }

    useEffect(() => {
        document.body.style.margin = 0;
        document.body.style.padding = 0;
        document.body.style.width = '100%';
      }, []);

      const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState('');
    const [showCard, setShowCard] = useState(false);

    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleInputChange = (event) => setInputValue(event.target.value);

    const handleButtonClick = () => {
        setShowCard(!showCard);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`User entered: ${inputValue}`);
        handleClose();
      }

    const textareaStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.80)',
        border: '1px solid black',
        width: '80%',
        height: '400px',
        resize: 'none',
        fontSize: '25px',
        display: 'inline-block',
        textAlign: 'left',
        color: 'black'
    };

    const navigate = useNavigate();
    // const version = process.env.REACT_APP_VERSION;
    return (
        <div className="backgroundImage">
        <h1 style={{ textAlign: 'center', fontSize: '50px', color: 'white',  fontFamily: 'cursive'}}>MyJournal</h1>
        
        <Navbar bg="light" expand="lg" className="mx-auto my-navbar">
        <Container  >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="my-nav-link" href="push" style={{ marginRight: '250px' }}>Write Journal</Nav.Link>
              <Nav.Link className="my-nav-link" href="pull" style={{ marginRight: '250px' }}>Previous Journals</Nav.Link>
              <Nav.Link className="my-nav-link" href="sharedpull">Shared Journals</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <form className="Auth-form" onSubmit={newJournal}> */}
        <div>
          <br></br>

          <Navbar expand="lg" style={{ backgroundColor: 'transparent' }}>
            <Container  >
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto flex-column">
                  <h3 style={{ color: 'white' }}>Date</h3>
                  <DatePicker selected={dateValue} onChange={handleDateChange} />
                </Nav>
            </Navbar.Collapse>
                
              <style>
                {`.navbar {
                      border-top-left-radius: 15px;
                      border-top-right-radius: 15px;
                      border-bottom-left-radius: 15px;
                      border-bottom-right-radius: 15px;
                      }`}
              </style>
            </Container>
          </Navbar>
          <br></br>
          <br></br>
          <br></br>
          <div class="mail-button-container">
            <label style={{color: "white", fontSize: "20px"}} for="mail-button">Username</label>
            <Button onClick={handleShow} className="mail-button">
                <AiOutlineMail />
            </Button>
          </div>

          {/* <h3 style={{ color: 'white' }}>Previous Journal</h3>
          <textarea value={journalValue} onChange={handleJournalChange} style={textareaStyle} ref={textareaRef} onKeyDown={handleKeyDown}>

          </textarea>
          <textarea disabled style={textareaStyle} placeholder="Select date for journal to show up here">
          </textarea> */}

          {/* <Navbar expand="lg" style={{ backgroundColor: 'transparent' }}>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-center">
              <Nav className="mx-2">
                <Button type="submit" variant="light" onClick={handleShow}>
                  <h8 style={{ color: '#000' }}>Share</h8>
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Share</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Enter Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleSubmit}>
              Share
            </Button>
          </Modal.Footer>
        </Modal>
                    
                </div>
                {/* {showCard && (
                            <Card style={{backgroundColor: 'transparent', borderColor: 'white', width: '80%',}}>
                            <Card.Body>
                                <Card.Title style={{color: 'white'}}>Date: </Card.Title>
                                <Card.Title style={{color: 'white'}}>Rating: </Card.Title>
                                <Card.Text style={{color: 'white'}}>Entry: </Card.Text>
                            </Card.Body>
                            </Card>
                )}
                <br></br> */}
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
             

        </div>

        

    );
};

export default SharedPull