import React, {Component} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route, Link, NavLink} from "react-router-dom";
import App from "./App";
import About from "./components/about";
import Blog from "./components/blog";
import Profile from "./components/profile";
import Contact from "./components/contact";
import WritePost from "./components/writePost";

export default class header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand>
                                <NavLink to="/" exact="true" activeStyle={{color:'orange'}}>Easy Learning</NavLink>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link><NavLink to="/about" activeStyle={{color:'orange'}}>About Us</NavLink></Nav.Link>
                                    <Nav.Link><NavLink to="/blog" activeStyle={{color:'orange'}}>Blog</NavLink></Nav.Link>
                                    <Nav.Link><NavLink to="/profile" activeStyle={{color:'orange'}}>Profile</NavLink></Nav.Link>
                                    <Nav.Link><NavLink to="/contact" activeStyle={{color:'orange'}}>Contact Us</NavLink></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    <Routes>
                        <Route path="/" element={<App/>}/>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/writePost" element={<WritePost/>}/>
                    </Routes>
                </div>
            </Router>
        )
    }
}