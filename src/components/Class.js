import React, {Component} from "react";

class testClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            names: [
                {name: 'Yuriy', age: '37'},
                {name: 'Ivan', age: '36'},
                {name: 'Sergey', age: '38'}
            ]
        }
    }

    render() {
        return (
            <span>
                <h4>Your name is {this.state.names[0].name}</h4>
                <h4>Your name is {this.state.names[1].name}</h4>
                <h4>Your name is {this.state.names[2].name}</h4>
            </span>
        )
    }
}

export default testClass;