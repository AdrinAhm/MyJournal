import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./Push.css";
import { useNavigate } from "react-router-dom";
import { Constants } from "@aws-amplify/core";
import process from 'process';

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
        fontSize: '20px'
    };

    const navigate = useNavigate();
    // const routeChange = () =>{ 
    //     let path = '/login'; 
    //     navigate(path);
    //   }
    const version = process.env.REACT_APP_VERSION;
    return (
        <div>
            <h1 style={{ textAlign: 'center', fontSize: '50px', color: '#FF4500' }}>DayBook</h1>
            <div>
                <div>
                    <h3>Date</h3>
                    <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                    />
                </div>

                <div><h3>How was your day? (1-10)</h3>
                    {/* <Dropdown options={dayRatingOptions}
                        onChange={this._onSelect}
                        placeholder="Select an option"
                        styles={dropdownStyles} /> */}
                    <label for="quantity"></label>
                    <input type="number" id="quantity" name="quantity" min="1" max="10"></input>
                </div>
                <br></br>
                <h3>What happened today?</h3>
                <textarea style={textareaStyle}>

                </textarea>
            </div>
            <button onClick={() => navigate('/login', { replace: true })}>
                <h8>Save Journal Entry</h8>
            </button>
            <div>
                <p>Version: {version}</p>
            </div>
        </div>

    );
};

export default Push
