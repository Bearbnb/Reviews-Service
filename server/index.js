const express = require('express');
const parser = require('body-parser');
const fs = require('fs');
const { connection } = require('../database/database');

const app = express();

app.use(express.static('./public'));
app.use(parser.json());

app.get('/puppy', (req, res) => {
  console.log('in server');

  connection.query('SELECT * FROM reviews WHERE (house_id = \'4\')', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const obj = [];
      data.forEach((review) => {
        const r = {
          id: review.id,
          house_id: review.house_id,
          user_id: review.user_id,
          created: review.created,
          review: review.review,
          host_comments: review.host_comments,
          rating: review.rating,
        };
        obj.push(r);
      });
      const message = JSON.stringify(obj);
      fs.writeFile('message.txt', message, (error) => {
        if (error) throw err;
        res.send('success');
      });
    }
  });
});


app.listen(3000, () => console.log('listening on port 3000'));
