const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

//serves files 
app.use('/', serveStatic(path.join(__dirname,'/dist')))

const port = process.env.PORT || 8081
app.listen(port)

console.log('listening on port: '+port)