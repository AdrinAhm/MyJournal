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
        <div>
            <h1 style={{ textAlign: 'center', fontSize: '50px', color: '#FF4500' }}>Shared Pull</h1>
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