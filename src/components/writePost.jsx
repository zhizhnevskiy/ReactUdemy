import React, {Component} from "react";
import {Button, Form} from "react-bootstrap";
import axios from "axios";

export default class writePost extends Component {

    state = {
        title: '',
        body: ''
    }

    formSubmit = (event) => {
        event.preventDefault();
        axios.post('/user', { // test url
            title: this.state.title,
            body: this.state.body
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <center>
                <div className='m-lg-3 col-2'>
                    <Form onSubmit={this.formSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="title"
                                id="title"
                                name="title"
                                aria-required="required"
                                onChange={(event) => {
                                    {this.setState({title: event.target.value})}
                                }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Details</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                placeholder="body"
                                id="body"
                                onChange={(event) => {
                                    {this.setState({body: event.target.value})}
                                }}
                            />
                        </Form.Group>
                        <Button type="submit">Publish</Button>
                    </Form>
                </div>
            </center>
        )
    }
}