import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import HTML from './HTML';
import CSS from './CSS';
import Javascript from './JavaScript';

class Courses extends Component {
    render() {
        return (
            <div>
                <h3>Courses</h3>
                <ul className="course-nav">
                    <li><NavLink to="/courses/html">HTML</NavLink></li>
                    <li><NavLink to="/courses/css">CSS</NavLink></li>
                    <li><NavLink to="/courses/javascript">Javascript</NavLink></li>
                </ul>
                <Route exact path="/courses" render={() => <Redirect to="/courses/html"/>}/>
                <Route path="/courses/html" component={HTML}/>
                <Route path="/courses/css" component={CSS}/>
                <Route path="/courses/javascript" component={Javascript}/>
            </div>
        );
    }
}

export default Courses;