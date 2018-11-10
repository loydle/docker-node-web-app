'use strict';

const express = require('express');
const app = express();
const PORT = 80;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  res.end('This is it');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
