import React, {Component} from 'react';
import SearchForm from './SearchForm';
import GifList from './GifList';
import axios from 'axios';
import {Row} from "react-bootstrap";

class GifSearch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gifs: [],
        };
    }

    handleSearch(query) {
        axios.get('http://api.giphy.com/v1/gifs/search',
            {
                params: {
                    api_key: 'umtYywUvKjQRgnWObFG1ewOT5nlfOFLI',
                    q: query,
                    limit: 24,
                }
            })
            .then(response => this.setState({gifs: response.data.data}))
            .catch(error => false);
    }

    render() {
        return (
            <div className="gif-search">
                <SearchForm onSearch={this.handleSearch.bind(this)}/>
                <Row>
                    <GifList data={this.state.gifs}/>
                </Row>
            </div>
        );
    }
}

export default GifSearch;