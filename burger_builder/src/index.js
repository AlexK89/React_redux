import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducers/burgerBuilderState';
import './index.scss';
import App from './containers/App.jsx';
import registerServiceWorker from './registerServiceWorker';

const rootStore = createStore(reducer);
const app = (
    <Provider store={rootStore}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
