var path = require('path');
var express = require('express');
var morgan = require('morgan');


const app = express();
let port = 80;

// Middleware
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV != 'prod') {
  port = 8000;
  app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
}

// Paths
app.use(express.static('umeet'));
app.get('/conference', function(req, res) {
  res.sendFile(path.join(__dirname, 'umeet/index.html'));
});

// Server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));