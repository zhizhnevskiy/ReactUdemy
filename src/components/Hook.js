import React, {useState} from "react";

const Hook = props => {

    const [nameState, setNameState] = useState({
        names: [
            {name: 'Yuriy', age: '37'},
            {name: 'Ivan', age: '36'},
            {name: 'Sergey', age: '38'}
        ]
    })

    const hello = () => {
        setNameState({
            names: [
                {name: 'Olga', age: '27'},
                {name: 'Nadya', age: '26'},
                {name: 'Ira', age: '28'}
            ]
        })
    };

    return (
        <span>
            <button onClick={hello}>Change me</button>

            <h4>Your name is {nameState.names[0].name}</h4>
            <h4>Your name is {nameState.names[1].name}</h4>
            <h4>Your name is {nameState.names[2].name}</h4>
        </span>
    )
}

export default Hook;