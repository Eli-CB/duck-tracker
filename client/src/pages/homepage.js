import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from "react-bootstrap/Button";

// Homepage for the app with simple greeting '/'
class HomePage extends Component {

    render() {

        return (

            <div>
                <Jumbotron>
                    <h1>Hello park-goers!</h1>
                    <p>
                        This is a simple website to help researchers crowd-source data
                        on how ducks are being fed in the park. Please fill out the form
                        to the best of your knowledge. Thank you for you help!
                    </p>
                    <p>
                        <Button variant="primary" href="/duckform">Form</Button>
                    </p>
                </Jumbotron>
            </div>
        )
    }
}

export default HomePage;