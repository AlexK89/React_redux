import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Create shared URL for all requests
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// We can adjust headers for requests
axios.defaults.headers.common['Authorization'] = 'Auth Token';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// For requests
axios.interceptors.request.use(request => {
    console.log('Interceptors: ', request);
    // We can modify  response here
    return request;
}, error => {
    console.log('Interceptors errors: ', error);
    return Promise.reject(error);
});

// For responses
axios.interceptors.response.use(response => {
    console.log('Interceptors response: ', response);
    // We can modify  response here
    return response;
}, error => {
    console.log('Interceptors response errors: ', error);
    return Promise.reject(error);
});


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
