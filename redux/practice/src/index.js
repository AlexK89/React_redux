import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';
import personsReducer from './store/reducers/persons';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = personsReducer;
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
