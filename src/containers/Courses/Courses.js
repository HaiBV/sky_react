import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Grid } from "react-bootstrap";
import { CourseActions } from 'actions';
import Course from "components/Course/Course";

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