import React from 'react';

const CourseDetail = props => {
    const {
        courses,
        match,
    } = props;

    const course = courses.find(course => course.id === parseInt(match.params.id));

    return (
        <div>
            {course.id}
        </div>
    );
};

export default CourseDetail;
