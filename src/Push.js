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
// import { Text, Grid } from "@nextui-org/react";
// import process from 'process';

function Push() {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange = (date) => {
        setSelectedDate(date)
    }

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
        width: '99%',
        height: '400px',
        resize: 'none',
        fontSize: '20px',
        
    };

    const navigate = useNavigate();
    // const version = process.env.REACT_APP_VERSION;
    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: '50px', color: 'white' }}>MyJournal</h1>
            <div>
                <div>
                    <h3 style={{color: 'white'}}>Date</h3>
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                    />
                </div>

                <div><h3 style={{color: 'white'}}>How was your day? (1-10)</h3>
                    {/* <Dropdown options={dayRatingOptions}
                        onChange={this._onSelect}
                        placeholder="Select an option"
                        styles={dropdownStyles} /> */}
                    <label for="quantity"></label>
                    <input type="number" id="quantity" name="quantity" min="1" max="10"></input>
                </div>
                <br></br>
                <h3 style={{color: 'white'}}>What happened today?</h3>
                <textarea style={textareaStyle}>

                </textarea>
                {/* <Grid.Container gap={0.5} css={{ mt: "4px" }}>
                    <Grid>
                        <Textarea placeholder="Default Textarea" width='100000'/>
                    </Grid>
                </Grid.Container> */}

            </div>
            {/* <button onClick={() => navigate('/login', { replace: true })}>
                <h8>Save Journal Entry</h8>
            </button> */}
            <Button variant="light">
                <h8 style={{color: 	'#000'}}>Save Journal Entry</h8>
            </Button>
            <Button onClick={() => navigate('/pull', { replace: true })} variant="light">
                <h8 style={{color: 	'#000'}}>Pull Page</h8>
            </Button>
            <Button onClick={() => navigate('/sharedpull', { replace: true })} variant="light">
                <h8 style={{color: 	'#000'}}>Shared Pull Page</h8>
            </Button>
            {/* <div>
                <p>Version: {version}</p>
            </div> */}
        </div>

    );
};

export default Push