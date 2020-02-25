import React, { Component } from "react";
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
        return null;
    }
}

export default App;