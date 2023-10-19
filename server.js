//Install express server
const express = require('express');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');
const app = express();

// Use plugin to serve Brotli files if browser supports them or fallback to Gzip

const nocache = require('nocache');

app.use(nocache());

app.use("/", expressStaticGzip(path.join(__dirname + '/dist/ride-now'), {
    enableBrotli: true,
    orderPreference: ['br', 'gz'],
    setHeaders: function (res, path) {
       res.setHeader("Cache-Control", "public, max-age=31536000");
    }
 }));

// Serve only the static files form the dist directory

//app.use(express.static(__dirname + '/dist/ride-now'));

app.get('/*', function(req,res) {    
    res.sendFile(path.join(__dirname+'/dist/ride-now/index.html'));
});

app.listen(process.env.PORT || 4000);