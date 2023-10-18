//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Use plugin to serve Brotli files if browser supports them or fallback to Gzip
//const expressStaticGzip = require('express-static-gzip');
//server.use("/", expressStaticGzip(path.join(__dirname + '/dist/ride-now')));

// Serve only the static files form the dist directory

app.use(express.static(__dirname + '/dist/ride-now'));

app.get('/*', function(req,res) {    
    res.sendFile(path.join(__dirname+'/dist/ride-now/index.html'));
});

app.listen(process.env.PORT || 8080);