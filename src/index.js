import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers';

import { watchIncrementAsync } from './sagas.js' 
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	reducers,
	applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(watchIncrementAsync)

ReactDOM.render(<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
registerServiceWorker();
