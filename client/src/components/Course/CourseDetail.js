import React from 'react';
import PropTypes from "prop-types";
import { Button, Col, Row } from "react-bootstrap";

const CourseDetail = props => {
    const {
        courses,
        match,
        history,
    } = props;

    const course = courses.find(course => course.id === parseInt(match.params.id));

    return (
        <React.Fragment>
            <Row className="course-list-actions">
                <Col md={12}>
                    <Button onClick={history.goBack}>Back</Button>
                </Col>
            </Row>
            <Row>
                <Col md={2}>Title</Col>
                <Col md={10}>{course.title}</Col>
                <Col md={2}>Type</Col>
                <Col md={10}>{course.type}</Col>
                <Col md={2}>Description</Col>
                <Col md={10}>{course.description}</Col>
                <Col md={2}>Author</Col>
                <Col md={10}>{course.author}</Col>
                <Col md={2}>Category</Col>
                <Col md={10}>{course.category}</Col>
                <Col md={2}>Length</Col>
                <Col md={10}>{course.length}</Col>
            </Row>
        </React.Fragment>
    );
};

CourseDetail.propTypes = {
    courses: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        type: PropTypes.string,
        description: PropTypes.string,
        author: PropTypes.string,
        category: PropTypes.string,
        length: PropTypes.number,
    })),
    match: PropTypes.object,
    history: PropTypes.object,
};

export default CourseDetail;
