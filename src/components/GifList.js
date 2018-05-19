import React, {Component} from 'react';
import Gif from "./Gif";

class GifList extends Component {
    render() {
        console.log(this.props.data);
        return (
            this.props.data.map(gif => <Gif url={gif.images.fixed_height.url} key={gif.id}/>)
        );
    }
}

export default GifList;