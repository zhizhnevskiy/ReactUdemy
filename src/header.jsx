import React, {Component} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import About from "./components/about";
import Blog from "./components/blog";
import Profile from "./components/profile";
import Contact from "./components/contact";
import App from "./App";

export default class header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand>
                                <Link to="/">Easy Learning</Link>
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link><Link to="/about">About Us</Link></Nav.Link>
                                    <Nav.Link><Link to="/blog">Blog</Link></Nav.Link>
                                    <Nav.Link><Link to="/profile">Profile</Link></Nav.Link>
                                    <Nav.Link><Link to="/contact">Contact Us</Link></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    <Routes>
                        <Route path="/about" element={<About/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/" element={<App/>}/>
                    </Routes>
                </div>
            </Router>
        )
    }
}