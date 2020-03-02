import React, { Component } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DuckData from './pages/duckdata';
import DuckForm from './pages/duckform';
import HomePage from './pages/homepage';

// Contains basic page requirements
class App extends Component {

    render() {

        return(

            <div>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                    integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                    crossOrigin="anonymous"
                />
                <Router>
                    <NavBar />
                    <Switch>
                        <Route path="/" exact component={HomePage}/>
                        <Route path="/duckform" exact component={DuckForm} />
                        <Route path="/duckdata" exact component={DuckData} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;