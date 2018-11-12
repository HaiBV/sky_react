import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Button, Col, Row } from "react-bootstrap";
import Course from "components/Course/Course";

class CourseList extends Component {
    constructor(props) {
        super(props);

        this.addCourse = props.addCourse;
        this.courses = props.courses;
        this.match = props.match;
    }

    render() {
        return (
            <React.Fragment>
                <Row className="course-list-actions">
                    <Col md={12}>
                        <Button bsStyle="primary">Add course</Button>
                    </Col>
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
                            match={this.match}
                        />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

CourseList.propTypes = {
    courses: PropTypes.array.isRequired,
    addCourse: PropTypes.func,
};

export default CourseList;