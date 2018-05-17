import React, { Component } from 'react';
import SearchForm from 'components/SearchForm';
import GifList from 'components/GifList';

class GifSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gifs: [],
        };
    }

    componentDidMount() {
        fetch();
    }

    render() {
        return (
            <div className="gif-search">
                <SearchForm />
                <GifList />
            </div>
        );
    }
}

export default GifSearch;