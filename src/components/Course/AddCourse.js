import React from 'react';
import PropTypes from 'prop-types';
import { Button, Col, ControlLabel, Form, FormControl, FormGroup, Row } from "react-bootstrap";

const AddCourse = props => {
    const {
        history,
    } = props;

    return (
        <React.Fragment>
            <Row className="course-list-actions">
                <Col md={12}>
                    <Button onClick={history.goBack}>Back</Button>
                </Col>
            </Row>
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Title
                    </Col>
                    <Col sm={5}>
                        <FormControl type="text" placeholder="Title" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalType">
                    <Col componentClass={ControlLabel} sm={2}>
                        Type
                    </Col>
                    <Col sm={5}>
                        <FormControl type="text" placeholder="Type" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalDescription">
                    <Col componentClass={ControlLabel} sm={2}>
                        Description
                    </Col>
                    <Col sm={5}>
                        <FormControl type="text" placeholder="Description" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalAuthor">
                    <Col componentClass={ControlLabel} sm={2}>
                        Author
                    </Col>
                    <Col sm={5}>
                        <FormControl type="text" placeholder="Author" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalCategory">
                    <Col componentClass={ControlLabel} sm={2}>
                        Category
                    </Col>
                    <Col sm={5}>
                        <FormControl type="text" placeholder="Category" />
                    </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalLength">
                    <Col componentClass={ControlLabel} sm={2}>
                        Length
                    </Col>
                    <Col sm={5}>
                        <FormControl type="text" placeholder="Length" />
                    </Col>
                </FormGroup>
            </Form>
        </React.Fragment>
    );
};

AddCourse.propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
};

export default AddCourse;
