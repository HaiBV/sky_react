import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, ControlLabel, Form, FormControl, FormGroup, Row } from "react-bootstrap";

class AddCourse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.addCourse = this.addCourse.bind(this);
    }

    addCourse(e) {
        e.preventDefault();
        // this.props.addPlayer(this.state.name);
        this.setState({name: ""});
    }

    handleChange(e) {
        this.setState({name: e.target.value});
    }

    render() {
        return (
            <React.Fragment>
                <Row className="course-list-actions">
                    <Col md={12}>
                        <Button onClick={this.props.history.goBack}>Back</Button>
                    </Col>
                </Row>
                <Form horizontal onSubmit={this.addCourse}>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Title
                        </Col>
                        <Col sm={5}>
                            <FormControl
                                type="text" placeholder="Title"
                                value={this.state.name}
                                onChange={this.handleChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalType">
                        <Col componentClass={ControlLabel} sm={2}>
                            Type
                        </Col>
                        <Col sm={5}>
                            <FormControl type="text" placeholder="Type"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalDescription">
                        <Col componentClass={ControlLabel} sm={2}>
                            Description
                        </Col>
                        <Col sm={5}>
                            <FormControl type="text" placeholder="Description"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalAuthor">
                        <Col componentClass={ControlLabel} sm={2}>
                            Author
                        </Col>
                        <Col sm={5}>
                            <FormControl type="text" placeholder="Author"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalCategory">
                        <Col componentClass={ControlLabel} sm={2}>
                            Category
                        </Col>
                        <Col Player sm={5}>
                            <FormControl type="text" placeholder="Category"/>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalLength">
                        <Col componentClass={ControlLabel} sm={2}>
                            Length
                        </Col>
                        <Col sm={5}>
                            <FormControl type="text" placeholder="Length"/>
                        </Col>
                    </FormGroup>
                    <Button type="submit">Add Course</Button>
                </Form>
            </React.Fragment>
        );
    }
}

AddCourse.propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
    addCourse: PropTypes.func,
};

export default AddCourse;
