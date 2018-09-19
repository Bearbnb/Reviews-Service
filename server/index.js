const express = require('express');
const parser = require('body-parser');
const fs = require('fs');
const queryString = require('query-string');

const { getReviews, getHost } = require('./model');

const app = express();

app.use('/:id', express.static('./public'));
app.use(parser.json());

app.get('/review/:id', (req, res) => {
  const home = req.params.id;
  getReviews(home, (reviews) => {
    getHost(home, (host) => {
      const message = {
        reviews: reviews.reviews,
        host: host.host,
      };
      res.send(message);
    });
  });
});

app.listen(3000, () => console.log('listening on port 3000'));
