import React, { Component } from 'react';
import Course from 'components/Course';

class CourseContainer extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.data.map((course) => {
                        return <Course name={course.name}
                                       type={course.type}
                                       description={course.description}
                                       teacher={course.teacher}
                                       teacher_topic={course.teacher_topic}
                        />
                    })}
                </ul>
            </div>
        );
    }
}

export default CourseContainer;