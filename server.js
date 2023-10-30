//Install express server
const port = 4000;
const express = require('express');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');
const app = express();

app.use("/", expressStaticGzip(path.join(__dirname + '/dist/ride-now'), {
    enableBrotli: true,
    orderPreference: ['br', 'gz'],
    setHeaders: function (res, path) {
       res.setHeader("Cache-Control", "public, max-age=31536000");
    }
 }));

app.get('/*', function(req,res) {   
    res.setHeader('Cache-Control', 'public, max-age=31536000'); 
    res.sendFile(path.join(__dirname+'/dist/ride-now/index.html'));
});

app.listen(process.env.PORT || port);