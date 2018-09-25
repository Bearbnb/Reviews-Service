require('dotenv').config();
const express = require('express');
const parser = require('body-parser');
const cors = require('cors');


const port = process.env.PORT;

const { getReviews, getHost } = require('./model');

const app = express();

app.use(cors());
app.use('/:id', express.static('./public'));
app.use(parser.json());

app.get('/reviews/:id', (req, res) => {
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

app.listen(port, () => console.log(`listening on port ${port}`));
