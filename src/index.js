import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from 'containers/App';
import Scoreboard from 'containers/Scoreboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Scoreboard />, document.getElementById('score-board-application'));

registerServiceWorker();
