import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchText: "",
        };
    }

    onSearchChange(e) {
        this.setState({searchText: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this);
        this.props.onSearch(this.state.searchText);
        e.currentTarget.reset();
    }

    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit.bind(this)}>
                <label htmlFor="search">Search</label>
                <input type="search"
                onChange={this.onSearchChange.bind(this)}
                name="search"
                placeholder="Search..."/>
                <button type="submit" id="submit" className="search-button">Search</button>
            </form>
        );
    }
}

export default SearchForm;