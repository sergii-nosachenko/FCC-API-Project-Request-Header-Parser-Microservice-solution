require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 5000;

// API MIDDLEWARE

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC

app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

app.use('/public', express.static('public'));

// API ROUTES

// Index route, shows index.html page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// API GET route
app.get('/api/whoami', (req, res) => {
  const json = {
    ipaddress: req.ip,
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  };
  res.json(json);
});

// SERVER RUN
app.listen(port, () => {
  console.log('Server running on port: ', port);
});
