import React, { Component, useState,useEffect } from "react";
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

// import { Text, Grid } from "@nextui-org/react";
// import process from 'process';

function Push() {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange = (date) => {
        setSelectedDate(date)
    }
    useEffect(() => {
        document.body.style.margin = 0;
        document.body.style.padding = 0;
        document.body.style.width = '100%';
      }, []);
    

    const dayRatingOptions = [
        { value: 'rate1', label: '1' },
        { value: 'rate2', label: '2' },
        { value: 'rate3', label: '3' },
        { value: 'rate4', label: '4' },
        { value: 'rate5', label: '5' },
        { value: 'rate6', label: '6' },
        { value: 'rate7', label: '7' },
        { value: 'rate8', label: '8' },
        { value: 'rate9', label: '9' },
        { value: 'rate10', label: '10' },
    ];
    const dayRatingDefaultOption = dayRatingOptions[0];

    const textareaStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.80)',
        border: '1px solid black',
        width: '80%',
        height: '400px',
        resize: 'none',
        fontSize: '25px',
        display: 'inline-block',
        textAlign: 'left'
    };

    const navigate = useNavigate();
    // const version = process.env.REACT_APP_VERSION;
    return (
        <div style={{ backgroundImage: `url(${background})`, textAlign: 'center'}}>
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
            <br></br>

            <Navbar expand="lg"  style={{backgroundColor: 'transparent'}}>
                <Container  >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto flex-column">
                        <h3 style={{color: 'white'}}>Date</h3>
                        <DatePicker selected={selectedDate} onChange={handleDateChange} />
                    </Nav>
                    <Nav className="mx-auto flex-column">
                        <h3 style={{color: 'white'}}>How was your day? (1-10)</h3>
                        <label for="quantity"></label>
                        <input type="number" id="quantity" name="quantity" min="1" max="10"></input>
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

                <h3 style={{color: 'white'}}>What happened today?</h3>
                <textarea style={textareaStyle}>

                </textarea>


            </div>
            <br></br>
            <Navbar expand="lg"  style={{backgroundColor: 'transparent'}}>
                <Container  >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto flex-column">
                    <Button variant="light">
                        <h8 style={{color: 	'#000'}}>Save</h8>
                    </Button>
                    </Nav>
                    <Nav className="mx-auto flex-column">
                    <Button variant="light">
                        <h8 style={{color: 	'#000'}}>Share</h8>
                    </Button>
                     </Nav>
                </Navbar.Collapse>
                </Container>
             </Navbar>

            
            {/* <Button onClick={() => navigate('/pull', { replace: true })} variant="light">
                <h8 style={{color: 	'#000'}}>Pull Page</h8>
            </Button>
            <Button onClick={() => navigate('/sharedpull', { replace: true })} variant="light">
                <h8 style={{color: 	'#000'}}>Shared Pull Page</h8>
            </Button> */}
            {/* <div>
                <p>Version: {version}</p>
        </div>*/}
             <br></br>
             <br></br>
             <br></br>

        </div>
    );
};

export default Push