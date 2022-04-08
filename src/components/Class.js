import React, {Component} from "react";
import './../css/class.css'

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

    hello = () => {
        this.setState({
            names: [
                {name: 'Olga', age: '27'},
                {name: 'Nadya', age: '26'},
                {name: 'Ira', age: '28'}
            ]
        })
    };

    render() {
        const style = {
            backgroundColor: 'black',
            color: "white",
            font: 'inherit',
            border: '2px solid marron',
            cursor: 'pointer'
        }

        return (
            <span>
                <button onClick={this.hello} style={style}>
                    Click me
                </button>

                <h4 className="card">Your name is {this.state.names[0].name}</h4>
                <h4 className="card">Your name is {this.state.names[1].name}</h4>
                <h4 className="card">Your name is {this.state.names[2].name}</h4>
            </span>
        )
    }
}

export default testClass;