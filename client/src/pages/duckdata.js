import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { CSVExport } from 'react-bootstrap-table2-toolkit';

// Table display of current duck data '/duckdata'
class DuckData extends Component {

    // Initialize state
    state = {
        data: [],
    };

    // Retrieves data from the DB
    getDataFromDb = () => {
        fetch('http://localhost:3001/api/getData')
            .then((data) => data.json())
            .then((res) => this.setState({ data: res.data }))
            .catch((err) => console.log("Error retrieving DB data: " + err));
    };

    // Call getDataFromDB once per page load
    componentDidMount() {
        this.getDataFromDb();
    }

    // UI for the duck data display page
    render() {
        const { ExportCSVButton } = CSVExport;

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
                <ToolkitProvider
                    keyField={data}
                    data={data}
                    columns={columns}
                    exportCSV
                    hover
                >
                    {
                        props => (
                            <div>
                                <BootstrapTable { ...props.baseProps } hover />
                                <hr />
                                <ExportCSVButton { ...props.csvProps }>Export as CSV</ExportCSVButton>
                            </div>
                        )
                    }
                </ToolkitProvider>
            </div>
        )
    }
}

export default DuckData;