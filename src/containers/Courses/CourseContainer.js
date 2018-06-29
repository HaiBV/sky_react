import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Course from 'components/Course';

class CourseContainer extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.data.map((course) =>
                        <Course
                            key={course.name}
                            name={course.name}
                            type={course.type}
                            description={course.description}
                            teacher={course.teacher}
                            teacher_topic={course.teacher_topic}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

CourseContainer.propTypes = {
    data: PropTypes.array.isRequired,
};

export default CourseContainer;