import React, { Component, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./Push.css";
import { Link } from "react-router-dom";

class Push extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date(),
        };
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange(date) {
        this.setState({ selectedDate: date });
        //save state and send state to database to pull
    }

    render() {
        // const withRouter = Component => props => {
        //     const location = useLocation();
        //     const navigate = useNavigate();
        //     const params = useParams();
          
        //     return (
        //       <Component
        //         {...props}
        //         location={location}
        //         navigate={navigate}
        //         params={params}
        //       />
        //     );
        //   };
          
        // //   export default withRouter;

        // const CustomButton = withRouter(({ history }) => (
        //     <button type='button' onClick={() => { history.push('/Login.js') }}>
        //       Click Me!
        //     </button>
        //   ))

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

        const dropdownStyles = {
            control: (base) => ({
                ...base,
                width: '20px', // adjust the width of the dropdown container
                height: '40px', // adjust the height of the dropdown container
                minHeight: 'unset', // remove any minimum height restriction
                boxShadow: 'none', // remove the default box shadow
                border: '1px solid #ccc', // add a border
                borderRadius: '4px', // add border radius
                fontSize: '16px', // adjust the font size
            }),
            menu: (base) => ({
                ...base,
                width: '200px', // adjust the width of the dropdown menu
                maxHeight: '200px', // set a maximum height for the dropdown menu
            }),
        };

        return (
            <div>
                <h1 style={{ textAlign: 'center',fontSize: '50px', color: '#FF4500'}}>DayBook</h1>
                <div>
                    <div>
                        <h3>Date</h3>
                        <DatePicker
                            selected={this.state.selectedDate}
                            onChange={this.handleDateChange}
                        />
                    </div>

                    <div><h3>How was your day? (1-10)</h3>
                        <Dropdown options={dayRatingOptions}
                            onChange={this._onSelect}
                            placeholder="Select an option"
                            styles={dropdownStyles} />
                    </div>
                    <br></br>
                    <h3>What happened today?</h3>
                    <textarea style={textareaStyle}>

                    </textarea>
                </div>
                <button onClick={event =>  window.location.href='/Login'}>
                    <h8>Save Journal Entry</h8>
                </button>
            </div>


        );
    }

}

export default Push