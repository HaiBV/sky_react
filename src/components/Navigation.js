import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
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
                        <NavItem eventKey={1} href="/">
                            Home
                        </NavItem>
                        <NavItem eventKey={2} href="/about">
                            About
                        </NavItem>
                        {/*<li role="presentation">*/}
                            {/*<NavLink exact to="/" role="button">Home</NavLink>*/}
                        {/*</li>*/}
                        {/*<li role="presentation">*/}
                            {/*<NavLink to="/about" role="button">About</NavLink>*/}
                        {/*</li>*/}
                        {/*<li role="presentation">*/}
                            {/*<NavLink to="/teachers" role="button">Teachers</NavLink>*/}
                        {/*</li>*/}
                        {/*<li role="presentation">*/}
                            {/*<NavLink to="/courses" role="button">Courses</NavLink>*/}
                        {/*</li>*/}
                        {/*<li role="presentation">*/}
                            {/*<NavLink to="/scoreboard" role="button">Scoreboard</NavLink>*/}
                        {/*</li>*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;