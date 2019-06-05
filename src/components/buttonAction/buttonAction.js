import React, {Component} from 'react';
import './_index.scss';
import {Link} from "react-router-dom";

class ButtonAction extends Component {

    constructor(props){
        super(props);
        this.state = {
            className: ''
        };
        this.setTransition = this.setTransition.bind(this);
    }

    setTransition(){
        setTimeout(
            function() {
                this.setState({className: 'button'+this.props.color});
            }
                .bind(this),
            200
        );
    }

    componentWillMount(){
        this.setTransition();
    }

    render() {
        return (
            <Link style={{backgroundColor: this.props.color}} className={`buttonAction ${ this.state.className }`} to={`/${ this.props.color }`}> </Link>
        );
    }
}
export default ButtonAction;
