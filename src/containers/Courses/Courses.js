import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Button, Col, Grid, Row } from "react-bootstrap";
import { CourseActions } from 'actions';
import Course from "components/Course/Course";
import './course.css';

class Courses extends Component {
    constructor(props) {
        super(props);

        this.addCourse = props.addCourse;
        this.courses = props.courses;
    }
    render() {
        return (
            <div className="course-board">
                <Grid fluid>
                    <Row className="course-list-actions">
                        <h1>Manage Courses</h1>
                        <Button bsStyle="primary">Add course</Button>
                    </Row>
                    <Row className="course-header">
                        <Col md={1}/>
                        <Col md={7} className="course-title">Title</Col>
                        <Col md={2} className="course-author">Author</Col>
                        <Col md={1} className="course-category">Category</Col>
                        <Col md={1} className="course-length">Length</Col>
                    </Row>
                    <div className="courses">
                        {this.courses.map((course, index) => (
                            <Course
                                key={course.id}
                                index={index}
                                course={course}
                            />
                        ))}
                    </div>
                    <div className="add-course">
                    </div>
                </Grid>
            </div>
        );
    }
}

Courses.propTypes = {
    courses: PropTypes.array.isRequired,
    addCourse: PropTypes.func,
};


const mapStateToProps = state => {
    return {
        courses: state.course.courses,
        selectedCourseIndex: state.course.selectedCourseIndex,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(CourseActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);