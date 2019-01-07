import React from 'react';
import PropTypes from "prop-types";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CourseRow = props => {
    const {
        course,
        match,
    } = props;
    return (
        <Row className="course-item">
            <Col md={1} className="course-action">
                <Button bsStyle="link" className="course-detail"><Link to={`${match.path}/${course.id}`}>Watch</Link></Button>
            </Col>
            <Col md={7} className="course-title">{course.title}</Col>
            <Col md={2} className="course-author">{course.author}</Col>
            <Col md={1} className="course-category">{course.category}</Col>
            <Col md={1} className="course-length">{course.length}</Col>
        </Row>
    );
};

CourseRow.propTypes = {
    course: PropTypes.shape({
        type: PropTypes.string,
    }),
    index: PropTypes.number,
    type: PropTypes.string,
};

export default CourseRow;