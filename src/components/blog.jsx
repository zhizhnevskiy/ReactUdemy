import React, {Component} from "react";
import axios from "axios";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

export default class blog extends Component {
    state = {
        posts: [],
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                // handle success
                this.setState({posts: response.data})
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }

    render() {

        const posts = this.state.posts;
        const allPosts = posts.map((post, index) => {
            return(
                <div>
                    <h5>Post №{post.id}. From userId: {post.userId}{}</h5>
                    <a href="" key={index}>{post.title}</a><br/>
                    <p>{post.body}</p>
                </div>
            )
        })

        return (
            <div>
                <h4>This is Blog component</h4>
                <Link to="/writePost" className="m-lg-3">Add new post</Link>
                <div>
                    {allPosts}
                </div>
            </div>
        )
    }
}