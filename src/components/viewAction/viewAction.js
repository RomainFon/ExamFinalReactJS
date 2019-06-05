import React, {Component} from 'react';
import './_index.scss';
import {Link} from "react-router-dom";

class ViewAction extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: "",
            description: ""
        };
        this.classNameButton = ".button"+this.props.color;
        this.onData = this.onData.bind(this);
    }

    componentWillMount() {
        document.querySelector(this.classNameButton).classList.add('startAnimationButton');
        this.onData();
    }

    componentWillUnmount() {
        document.querySelector(this.classNameButton).classList.remove('startAnimationButton');
    }

    onData(){
        let url = '/assets/color.json';
        fetch(url).then(rawData => {
            rawData.json().then(value => {
                this.setState({
                    title: value[this.props.color].title,
                    description: value[this.props.color].description
                });
            });
        });
    }

    render() {
        return (
            <div className={"viewAction"}>
                <h1>{this.state.title}</h1>
                <p>{this.state.description}</p>
                <Link className={"buttonViewMore"} to={"/"}>More More More...</Link>
            </div>
        );
    }
}
export default ViewAction;
