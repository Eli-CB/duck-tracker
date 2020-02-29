import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DateTimePicker from 'react-datetime-picker';

import axios from 'axios';

class App extends Component {
    // Initialize state
    state = {
        data: [],
        timeOfFeed: null,
        foodFed: null,
        locationFed: null,
        numberOfDucksFed: 0,
        amountFedToDucks: 0,
    };

    // Get data from DB
    getDataFromDb = () => {
        fetch('http://localhost:3001/api/getData')
            .then((data) => data.json())
            .then((res) => this.setState({ data: res.data }));
    };

    // Add data to DB
    putDataToDB = (timeFed, foodType, locationDucks, numDucks, numGrams) => {
        let currentIds = this.state.data.map((data) => data.id);
        let idToBeAdded = 0;
        while (currentIds.includes(idToBeAdded)) {
            ++idToBeAdded;
        }

        axios.post('http://localhost:3001/api/putData', {
            timeOfFeed: timeFed,
            foodFed: foodType,
            locationFed: locationDucks,
            numberOfDucksFed: numDucks,
            amountFedToDucks: numGrams
        });
    };

    // UI
    render() {
        const { data } = this.state;

        return(

            <div>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                    integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                    crossOrigin="anonymous"
                />
                <NavBar/>
                <Form>
                    <Form.Group controlId="formDuckFeed">
                        <Form.Label>Time of Feed</Form.Label>
                        <Form.Control type="text" placeholder="Enter the time and day you fed the ducks"/>
                    </Form.Group>
                    <Form.Group controlId="formFoodFed">
                        <Form.Label>Food Fed</Form.Label>
                        <Form.Control type="text" placeholder="Enter the food you fed the ducks"/>
                    </Form.Group>
                    <Form.Group controlId="formLocationFed">
                        <Form.Label>Location Fed</Form.Label>
                        <Form.Control type="text" placeholder="Enter the location you fed the ducks"/>
                    </Form.Group>
                    <Form.Group controlId="formNumDucks">
                        <Form.Label>Number of Ducks Fed</Form.Label>
                        <Form.Control type="text" placeholder="Enter the number of ducks you fed"/>
                    </Form.Group>
                    <Form.Group controlId="formAmountFed">
                        <Form.Label>Amount Fed to Ducks</Form.Label>
                        <Form.Control type="text" placeholder="Enter the amount of food you fed the ducks"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>

        )
    }
}

export default App;