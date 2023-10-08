const express = require('express');
const axios = require('axios');
const https = require('https');
const port = 3000;

const application = express();

application.get('/say', function(request,response) {

    https.get('https://eeo1lmkmvd.execute-api.us-east-2.amazonaws.com/prod/say?keyword='+request.query.keyword,
        (resp) => {
        let msg = '';
        resp.on('data', (chunk) => {
            msg += chunk;
            response.write(msg);
            response.end();
        });
    })
});

application.listen(port, () => {
    console.log(`The Application is running on port :${port}`);
});
