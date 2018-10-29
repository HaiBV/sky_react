import React from 'react';
import PropTypes from "prop-types";

const Course = (props) => {
    const {
        course,
    } = props;
    return (
        <div>
            <h3>{course.id}</h3>
            <div>{course.type}</div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.shape({
        type: PropTypes.string,
    }),
    index: PropTypes.number,
    type: PropTypes.string,
};

export default Course;