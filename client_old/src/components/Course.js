import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

class Course extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <div>{this.props.type}</div>
                <div>{this.props.description}</div>
                <Link to={`/teachers/${this.props.teacher_topic}/${this.props.teacher}`}>{this.props.teacher}</Link>
            </div>
        );
    }
}

Course.PropTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    description: PropTypes.string,
    teacher: PropTypes.string,
    teacher_topic: PropTypes.string,
};

export default Course;