//Install express server
const port = 4000;
const express = require('express');
const path = require('path');
const spdy = require('spdy')
const expressStaticGzip = require('express-static-gzip');
const fs = require('fs');

const app = express();

// Use plugin to serve Brotli files if browser supports them or fallback to Gzip

const options = {
    key: fs.readFileSync(path.join(__dirname + '/server.key')),
    cert:  fs.readFileSync(path.join(__dirname + '/server.crt'))
}

app.use("/", expressStaticGzip(path.join(__dirname + '/dist/ride-now'), {
    enableBrotli: true,
    orderPreference: ['br', 'gz'],
    setHeaders: function (res, path) {
       res.setHeader("Cache-Control", "public, max-age=31536000");
    }
 }));

app.get('/*', function(req,res) {    
    res.sendFile(path.join(__dirname+'/dist/ride-now/index.html'));
});


spdy
  .createServer(options, app)
  .listen(process.env.PORT || port)