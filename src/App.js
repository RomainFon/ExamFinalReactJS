import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from "react-router-dom";
import ButtonAction from './components/buttonAction/buttonAction';
import ViewAction from './components/viewAction/viewAction';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            start: false
        }
    }

    startApp(){
        this.setState({
            start: true
        });
    }

    render(){
        return (
            <Router>
                <div className="App">
                    <button onClick={() => this.startApp()}>Let's go</button>
                    {this.state.start === true &&
                        <div className={"container_button"}>
                            <ButtonAction name={"Button 1"} color={"red"}/>
                            <ButtonAction name={"Button 2"} color={"green"}/>
                            <ButtonAction name={"Button 3"} color={"blue"}/>
                        </div>
                    }
                </div>
                <Route
                    path="/red"
                    render={(props) => <ViewAction {...props} color={"red"} />}
                />
                <Route
                    path="/green"
                    render={(props) => <ViewAction {...props} color={"green"} />}
                />
                <Route
                    path="/blue"
                    render={(props) => <ViewAction {...props} color={"blue"} />}
                />
            </Router>
        );
    }
}

export default App;
