const express = require('express');
const parser = require('body-parser');
const fs = require('fs');
const queryString = require('query-string');

const { getReviews, getHost } = require('./model');

const app = express();

app.use(express.static('./public'));
app.use(parser.json());

app.get('/reviews', (req, res) => {
  const values = queryString.parse(req.url.replace('/reviews?', ''));
  getReviews(values.id, (reviews) => {
    getHost(values.id, (host) =>{
      let message = {reviews : reviews.reviews,
        host: host.host}
      res.send(message);
    })
  });
});

app.listen(3000, () => console.log('listening on port 3000'));
