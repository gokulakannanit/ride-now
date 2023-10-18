//Install express server
//const express = require('express');
//const path = require('path');

//const app = express();

// Serve only the static files form the dist directory
/*
app.use(express.static(__dirname + '/dist/ride-now'));

app.get('/*', function(req,res) {    
    res.sendFile(path.join(__dirname+'/dist/ride-now/index.html'));
});

app.listen(process.env.PORT || 8080);

*/

// Required modules
const path = require('path');
const express = require('express');
//const expressStaticGzip = require('express-static-gzip');

// Start the server
const server = express();

// Use plugin to serve Brotli files if browser supports them or fallback to Gzip
//server.use("/", expressStaticGzip(path.join(__dirname + '/dist/ride-now')));
server.use(express.static(__dirname + '/dist/ride-now'));
// Get the URL and redirect http to https in production environment else redirect to the main file
server.get(/.*/, function (req, res, next) {
    res.sendFile(path.join(__dirname+'/dist/ride-now/index.html'));
});

// Start the server by listening on the default port or the one configurated before
server.listen(process.env.PORT || serverPort, function () {
    console.log('Node server initialized. Port:%d', process.env.PORT || serverPort);
});