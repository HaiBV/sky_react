import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './navigation.css';

class Navigation extends Component {
    render() {
        return (
            <Navbar collapseOnSelect className="application-navigation">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Application</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <LinkContainer exact to="/">
                            <NavItem eventKey={1}>Home</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <NavItem eventKey={2}>About</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/teachers">
                            <NavItem eventKey={3}>Teachers</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/courses">
                            <NavItem eventKey={4}>Courses</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/scoreboard">
                            <NavItem eventKey={5}>Scoreboard</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/gif-search">
                            <NavItem eventKey={6}>Gif Search</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;