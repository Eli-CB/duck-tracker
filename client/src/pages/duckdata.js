import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import TableHeaderColumn from 'react-bootstrap-table-next';

class DuckData extends Component {

    // Initialize state
    state = {
        data: [],
        timeFed: new Date(),
        foodType: null,
        locationDucks: null,
        numDucks: null,
        numGrams: null,
    };

    // Retrieves data from the DB
    getDataFromDb = () => {
        fetch('http://localhost:3001/api/getData')
            .then((data) => data.json())
            .then((res) => this.setState({ data: res.data }));
    };

    // Call getDataFromDB once per page load
    componentDidMount() {
        this.getDataFromDb();
    }

    // UI for the duck data display page
    render() {

        // The columns of data for the table to display
        const columns = [{
            dataField: 'timeOfFeed',
            text: 'Time Fed'
        }, {
            dataField: 'foodFed',
            text: 'Food Fed'
        }, {
            dataField: 'locationFed',
            text: 'Location Fed'
        }, {
            dataField: 'numberOfDucksFed',
            text: 'Number of Ducks Fed'
        }, {
            dataField: 'amountFedToDucks',
            text: 'Amount Fed To Ducks (Grams)'
        }];

        const { data } = this.state;

        return (
            <div>
                <BootstrapTable keyField={data} data= {data} columns = {columns}>
                    <TableHeaderColumn />
                </BootstrapTable>
            </div>
        )
    }
}

export default DuckData;