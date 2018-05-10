import React from 'react';
import ReactDOM from 'react-dom';
import 'css/bootstrap.min.css';
import 'css/index.css';
import App from 'containers/App/App';
import Scoreboard from 'containers/Scoreboard/Scoreboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Scoreboard />, document.getElementById('score-board-application'));

registerServiceWorker();
