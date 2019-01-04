import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { Button, Col, ControlLabel, Form, FormControl, FormGroup, Row } from "react-bootstrap";

class AddCourse extends Component {
    constructor(props) {
        super(props);

        this.defaultFormValues = {
            title: "",
            courseType: "",
            description: "",
            author: "",
            category: "",
            length: "",
        }

        this.state = {
            ...this.defaultFormValues,
            redirect: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.addCourse = this.addCourse.bind(this);
    }

    addCourse(e) {
        e.preventDefault();
        this.props.addCourse(this.state);
        this.setState({
            ...this.defaultFormValues,
            redirect: true,
        });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.redirect ?
                        <Redirect to="/courses" /> :
                        <React.Fragment>
                            <Row className="course-list-actions">
                                <Col md={12}>
                                    <Button onClick={this.props.history.goBack}>Back</Button>
                                </Col>
                            </Row>
                            <Form horizontal onSubmit={this.addCourse}>
                                <FormGroup controlId="formHorizontalTitle">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Title
                        </Col>
                                    <Col sm={5}>
                                        <FormControl name="title" type="text" placeholder="Title" value={this.state.title}
                                            onChange={this.handleChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalType">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Type
                        </Col>
                                    <Col sm={5}>
                                        <FormControl name="courseType" type="text" placeholder="Type" value={this.state.courseType}
                                            onChange={this.handleChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalDescription">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Description
                        </Col>
                                    <Col sm={5}>
                                        <FormControl name="description" type="text" placeholder="Description" value={this.state.description}
                                            onChange={this.handleChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalAuthor">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Author
                        </Col>
                                    <Col sm={5}>
                                        <FormControl name="author" type="text" placeholder="Author" value={this.state.author}
                                            onChange={this.handleChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalCategory">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Category
                        </Col>
                                    <Col sm={5}>
                                        <FormControl name="category" type="text" placeholder="Category" value={this.state.category}
                                            onChange={this.handleChange} />
                                    </Col>
                                </FormGroup>
                                <FormGroup controlId="formHorizontalLength">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        Length
                        </Col>
                                    <Col sm={5}>
                                        <FormControl name="length" type="text" placeholder="Length" value={this.state.length}
                                            onChange={this.handleChange} />
                                    </Col>
                                </FormGroup>
                                <Button type="submit">Add Course</Button>
                            </Form>
                        </React.Fragment>
                }
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
