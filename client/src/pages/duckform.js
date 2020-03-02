import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DateTimePicker from 'react-datetime-picker';
import axios from 'axios';

// Form to submit duck data '/duckform'
class DuckForm extends Component {

    // Initialize state
    state = {
        data: [],
        timeFed: new Date(),
        foodType: null,
        locationDucks: null,
        numDucks: null,
        numGrams: null,
    };

    // Add data to DB
    putDataToDB = (timeFed, foodType, locationDucks, numDucks, numGrams) => {
        axios.post('http://localhost:3001/api/putData', {
            timeOfFeed: timeFed.toLocaleString(),
            foodFed: foodType,
            locationFed: locationDucks,
            numberOfDucksFed: numDucks,
            amountFedToDucks: numGrams
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };

    onDateChange = timeFed => this.setState({ timeFed });

    // UI for the form
    render() {

        const { timeFed } = this.state;

        return(

            <div>
                <Form className="mx-3 my-2">
                    <Form.Group controlId="formTimeFed">
                        <Form.Label>Time of Feed</Form.Label>
                        <br/>
                        <DateTimePicker
                            onChange={this.onDateChange}
                            value={timeFed}
                        />
                        <br/>
                    </Form.Group>
                    <Form.Group controlId="formFoodFed">
                        <Form.Label>Food Fed</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Enter the food you fed the ducks"
                                      onChange={(e) => this.setState({ foodType: e.target.value })}
                                      required
                        />
                    </Form.Group>
                    <Form.Group controlId="formLocationFed">
                        <Form.Label>Location Fed</Form.Label>
                        <Form.Control type="text"
                                      placeholder="Enter the location you fed the ducks"
                                      onChange={(e) => this.setState({ locationDucks: e.target.value })}
                                      required
                        />
                    </Form.Group>
                    <Form.Group controlId="formNumDucks">
                        <Form.Label>Number of Ducks Fed</Form.Label>
                        <Form.Control type="number"
                                      placeholder="Enter the number of ducks you fed"
                                      onChange={(e) => this.setState({ numDucks: e.target.value })}
                                      required
                        />
                    </Form.Group>
                    <Form.Group controlId="formAmountFed">
                        <Form.Label>Amount Fed to Ducks</Form.Label>
                        <Form.Control type="number"
                                      placeholder="Enter the amount of food you fed the ducks in grams"
                                      onChange={(e) => this.setState({ numGrams: e.target.value })}
                                      required
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        onClick={() => this.putDataToDB(
                            this.state.timeFed,
                            this.state.foodType,
                            this.state.locationDucks,
                            this.state.numDucks,
                            this.state.numGrams,
                        )}
                        href="/duckdata"
                    >
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default DuckForm;