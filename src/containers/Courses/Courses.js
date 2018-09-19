import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { CourseActions } from 'actions';
import { NavLink, Route, Redirect } from 'react-router-dom';
import { HTMLCourses, CSSCourses, JavascriptCourses } from 'data/Courses';
import CourseContainer from './CourseContainer';

class Courses extends Component {
    render() {
        return (
            <div>
                <h3>Courses</h3>
                <ul className="course-nav">
                    <li><NavLink to={`${this.props.match.url}/html`}>HTML</NavLink></li>
                    <li><NavLink to={`${this.props.match.url}/css`}>CSS</NavLink></li>
                    <li><NavLink to={`${this.props.match.url}/javascript`}>Javascript</NavLink></li>
                </ul>
                <Route exact path={this.props.match.path} render={() => <Redirect to={`${this.props.match.path}/html`}/>}/>
                <Route path={`${this.props.match.path}/html`} render={() => <CourseContainer data={HTMLCourses}/>}/>
                <Route path={`${this.props.match.path}/css`} render={() => <CourseContainer data={CSSCourses}/>}/>
                <Route path={`${this.props.match.path}/javascript`} render={() => <CourseContainer data={JavascriptCourses}/>}/>
            </div>
        );
    }
}

Courses.propTypes = {
    match: PropTypes.shape({
        path: PropTypes.shape({
            experiment: PropTypes.string,
        }),
        url: PropTypes.shape({
            experiment: PropTypes.string,
        }),
    }).isRequired,
};

export default Courses;