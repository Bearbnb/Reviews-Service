const express = require('express');
const parser = require('body-parser');
const fs = require('fs');
const queryString = require('query-string');
const { connection } = require('../database/database');

const { getReviews } = require('./model');

const app = express();

app.use(express.static('./public'));
app.use(parser.json());

app.get('/reviews', (req, res) => {
  const values = queryString.parse(req.url.replace('/reviews?', ''));
  getReviews(values.id, (reviews) => {
    res.send(reviews.reviews);
  });
});

app.listen(3000, () => console.log('listening on port 3000'));
