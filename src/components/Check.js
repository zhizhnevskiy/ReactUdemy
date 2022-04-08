import React, {Component} from "react";

class Check extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         men: [
    //             {name: "Yuriy Zhizhnevskiy"}
    //         ]
    //     }
    // }

    state = {
        name: "Nadya Zhizhnevskaya"
    }

    changeName = (data) => {
        this.setState({
            name: data.target.value
        })
    }

    render() {
        return (
            <span>
                <input type="text" onChange={this.changeName} value={this.state.name}></input>
                <h5>Hello {this.state.name}</h5>
            </span>
        )
    }
}

export default Check