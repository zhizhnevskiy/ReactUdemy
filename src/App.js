// import logo from './logo.svg';
// import './App.css';
// import Functional from './components/Functional';
// import Class from "./components/Class";
// import Hook from"./components/Hook";
// import Check from"./components/Check"

import React from "react";

class App extends React.Component {

    state = {
        userName: '',
        phone: '',
        email: '',
        city: '',
    }

    changeData = (data) => {
        console.log(data)
        let name = data.target.name; // userName
        let event = data.target.value; // Getting value from input
        this.setState({
            [name]: event
        })
    }

    formSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.userName);
    }

    render() {
        return (
            <div className="App">

                <h5 style={{textAlign:'center'}}>Hello {this.state.userName}</h5>

                <form onSubmit={this.formSubmit}>
                    <div className="form-group" style={{textAlign:'center'}}>
                        <label>User name:</label><br/><br/>
                        <input type="text" name="userName" onChange={this.changeData} /><br/><br/>
                        <input type="text" name="phone" onChange={this.changeData} /><br/><br/>
                        <input type="text" name="email" onChange={this.changeData} /><br/><br/>
                        <input type="text" name="email" onChange={this.changeData} /><br/><br/>
                        <button type="submit">Submit</button>
                    </div>
                </form>

                <div>{ this.state.userName }</div>
                <div>{ this.state.phone }</div>
                <div>{ this.state.email }</div>
                <div>{ this.state.email }</div>

            </div>
        )
    }
}


// function App()
//
// {
//   return (
//     <div className="App">
//       <header className="App-header">
//
//         {/*<Functional*/}
//         {/*    name = 'Yuriy'*/}
//         {/*    age = '37'*/}
//         {/*/>*/}
//
//         <Class/>
//
//         {/*<Hook/>*/}
//
//         {/*<Check/>*/}
//
//       </header>
//     </div>
//   );
// }

export default App;
