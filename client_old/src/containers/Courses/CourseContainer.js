import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Grid } from "react-bootstrap";
import { CourseActions } from 'reducers';
import './course.css';
import { Route, Switch } from "react-router-dom";
import CourseTable from "components/Course/CourseTable";
import AddCourse from "components/Course/AddCourse";
import CourseDetail from "components/Course/CourseDetail";

class CourseContainer extends Component {
    constructor(props) {
        super(props);

        this.addCourse = props.addCourse;
        this.courses = props.courses;
        this.match = props.match;
    }

    render() {
        return (
            <div className="course-board">
                <Grid fluid>
                    <h1>Manage Courses</h1>
                    <Switch>
                        <Route exact path={this.match.path}
                               render={props => <CourseTable {...props}/>}/>
                        <Route path={`${this.match.path}/add-course`} render={props => <AddCourse addCourse={this.addCourse} {...props}  />}/>
                        <Route path={`${this.match.path}/:id`}
                               render={props => <CourseDetail courses={this.courses} {...props}/>}/>
                    </Switch>
                </Grid>
            </div>
        );
    }
}

CourseContainer.propTypes = {
    courses: PropTypes.array.isRequired,
    addCourse: PropTypes.func,
    match: PropTypes.object,
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

export default connect(mapStateToProps, mapDispatchToProps)(CourseContainer);