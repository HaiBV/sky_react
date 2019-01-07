import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, Col, Row } from "react-bootstrap";
import CourseRow from "components/Course/CourseRow";
import { Link } from "react-router-dom";

class CourseTable extends Component {
    constructor(props) {
        super(props);

        this.courses = props.courses;
        this.match = props.match;
    }

    render() {
        return (
            <React.Fragment>
                <Row className="course-list-actions">
                    <Col md={12}>
                        <Button bsStyle="link"><Link to={`${this.match.path}/add-course`}>Add course</Link></Button>
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
                        <CourseRow
                            key={course.id}
                            index={index}
                            course={course}
                            {...this.props}
                        />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

CourseTable.propTypes = {
    courses: PropTypes.array.isRequired,
    match: PropTypes.object,
};

const mapStateToProps = state => {
    return {
        courses: state.course.courses,
    };
};

export default connect(mapStateToProps)(CourseTable);