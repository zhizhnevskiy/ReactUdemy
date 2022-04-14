import React, {Component, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";

///////////////////////////////// Class component
class AppHook extends Component {
    state = {
        count: 0,
    }

    render() {
        return (
            <div className="m-5">
                <h4>Clicking Me {this.state.count}</h4>
                <Button onClick={() => {
                    this.setState({count: this.state.count + 1})
                }}>Click me</Button>
            </div>
        )
    }
}


///////////////////////////////// Hook
// export const AppHook = () => {
//
//     const[count, setCount] = useState(0);
//
//     return(
//         <div className="m-5">
//             <h4>Clicking Me { count }</h4>
//             <Button onClick={() => {setCount(count+1)}}>Click me</Button>
//         </div>
//     )
// }

export default AppHook;
