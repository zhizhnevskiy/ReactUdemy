// import logo from './logo.svg';
// import './App.css';
// import Functional from './components/Functional';
// import Class from "./components/Class";
// import Hook from"./components/Hook";
// import Check from"./components/Check"

import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    state = {
        // age: '',

        // email: '',
        // description: '',
        // password: '',

        // emailError: '',
        // passwordError: '',
        // error: '',

        // userName: '',
        // phone: '',
        // email: '',
        // city: '',
    }

    // changeData = (data) => {
    //     console.log(data)
    //     let name = data.target.name; // userName
    //     let event = data.target.value; // Getting value from input
    //     this.setState({
    //         [name]: event
    //     })
    // }

    // validate(){
    //     if(!this.state.email > 0 && !this.state.password > 0){
    //         this.setState({error:"Email and Password Required"})
    //     } else if(!this.state.email > 0) {
    //         this.setState({emailError:"Email Required"})
    //     } else if(!this.state.password > 0) {
    //         this.setState({passwordError:"Password Required"})
    //     } else {
    //         return true;
    //     }
    // }


    // formSubmit = (event) => {
    //     event.preventDefault();
    //     // if(this.validate()){
    //     //     alert("Form Submit Done")
    //     // }
    // }

    render() {

        // const names = ['AA', 'BB', 'CC', 'DD', 'EE'];

        // const names = [
        //     {name: 'Yuriy', age: 37, grade: 3.50},
        //     {name: 'Nadya', age: 38, grade: 4.50},
        //     {name: 'Ilya', age: 11, grade: 5.50},
        // ];

        // const items = names.map((namesValue, namesIndex) => {
        //     return <li className='list-item' key={namesIndex}>
        //         Name: {namesValue.name}, Age: {namesValue.age}, Grade: {namesValue.grade}
        //         <button className="btn btn-sm btn-info">Edit</button>
        //         |
        //         <button className="btn btn-sm btn-danger">Delete</button>
        //     </li>
        // });

        return (
            <div className="App">

                <h4> This is our Home Component </h4>

                {/*<h4>List</h4>*/}
                {/*<ul className='list'>*/}
                {/*    {items}*/}
                {/*</ul>*/}

                {/*<form onSubmit={this.formSubmit}>*/}
                {/*    <div className="form-group" style={{textAlign:'center'}}>*/}

                {/*        <label>Your age:</label><br/><br/>*/}
                {/*            <select onChange={(event)=>{this.setState({age:event.target.value})}}>*/}
                {/*                <option value="" selected disabled>Select you Age</option>*/}
                {/*                <option value="15-20"> 15-20 </option>*/}
                {/*                <option value="15-20"> 21-25 </option>*/}
                {/*                <option value="15-20"> 26-30 </option>*/}
                {/*            </select><br/><br/>*/}
                {/*        <h6>My age: {this.state.age}</h6>*/}

                {/*<label>Email:</label><br/><br/>*/}
                {/*<input type="email"*/}
                {/*       name="email"*/}
                {/*       onChange={(event) => {this.setState({email:event.target.value})}}*/}
                {/*/><br/><br/>*/}
                {/*<strong style={{color:'red'}}>{this.state.emailError}</strong><br/><br/>*/}

                {/*<label>Password:</label><br/><br/>*/}
                {/*<input type="password"*/}
                {/*       name="password"*/}
                {/*       onChange={(event) => {this.setState({password:event.target.value})}}*/}
                {/*/><br/><br/>*/}
                {/*<strong style={{color:'red'}}>{this.state.passwordError}</strong><br/><br/>*/}

                {/*<label>Description:</label><br/><br/>*/}
                {/*<textarea onChange={(event)=>{this.setState({description:event.target.value})}}>Write on here</textarea><br/><br/>*/}
                {/*<h6>{this.state.description}</h6>*/}

                {/*<input type="text" name="userName" onChange={this.changeData} /><br/><br/>*/}
                {/*<input type="text" name="phone" onChange={this.changeData} /><br/><br/>*/}
                {/*<input type="text" name="email" onChange={this.changeData} /><br/><br/>*/}
                {/*<input type="text" name="city" onChange={this.changeData} /><br/><br/>*/}

                {/*        <button type="submit">Submit</button><br/><br/>*/}
                {/*        <strong style={{color:'red'}}>{this.state.error}</strong><br/><br/>*/}
                {/*    </div>*/}
                {/*</form>*/}

                {/*<div>{this.state.email}</div>*/}
                {/*<div>{this.state.password}</div>*/}
                {/*<div>{ this.state.userName }</div>*/}
                {/*<div>{ this.state.phone }</div>*/}
                {/*<div>{ this.state.email }</div>*/}
                {/*<div>{ this.state.city }</div>*/}

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
