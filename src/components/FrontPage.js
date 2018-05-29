import React, { Component } from 'react';

class FrontPage extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const teacherName = this.name.value,
            teacherTopic = this.topic.value,
            path = `teachers/${teacherTopic}/${teacherName}`;

        this.props.history.push(path);
    };

    render() {
        return (
            <div>
                <h3>Front End Course Directory</h3>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" ref={(input) => this.name = input}/>
                    <input type="text" placeholder="Topic" ref={(input) => this.topic = input}/>
                    <button type="submit">Go!</button>
                </form>
            </div>
        );
    }
}

export default FrontPage;