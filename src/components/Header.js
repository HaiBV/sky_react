import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <div className="header">
                        <h2>{this.props.title}</h2>
                    </div>
                </Col>
            </Row>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

Header.defaultProps = {
    title: "My Scoreboard",
};

export default Header;