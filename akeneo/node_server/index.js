// npm install express --save
// npm install sync-request

const express = require('express');
const request = require('sync-request');

const categories = express();

categories.get('/:destination', (req, res) => {
    console.log(req.params);
    // query params
    // console.log(req.query);

    qStr = Object.keys(req.query).map(function(key) {
        return key + '=' + req.query[key];
    }).join('&');

    // serialised query string
    // console.log(qStr);

    apiResponse = request('GET', `http://34.247.49.79/api/rest/v1/${req.params.destination}?${qStr}`, {
        headers: {
            'Authorization': 'Bearer YzlkZTIwODkyNjZjMDM0NDFiNmM5YzUxYzJiZmYxNDM1Yzk4OWUwZjhiMmFkZWI2ZGE4ZjBkOTVjZDZhZmU1ZA'
        }
    });
    apiResponse = apiResponse.getBody().toString();

    res.send(apiResponse);
});

categories.listen(3000, () => console.log('Example app listening on port 3000!'));