import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';
import 'css/bootstrap.min.css';
import 'css/index.css';
import App from 'containers/App/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    reducers,
    window.devToolsExtension && window.devToolsExtension(),
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
