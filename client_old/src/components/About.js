/* ES6 Stateless component */
import React from 'react';
import PropTypes from "prop-types";

const About = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    );
};

About.propTypes = {
    title: PropTypes.string
};

export default About;