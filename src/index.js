require('../index.html');
require('bulma/bulma.sass');
require('bulma/css/bulma.css');
import 'react-tippy/dist/tippy.css';
require ('../assets/stylesheets/style.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import logger from 'redux-logger'
import App from './components/App.jsx';

const store = createStore(
    reducer,
    applyMiddleware(
        logger
    )
);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
document.getElementById('app')
);