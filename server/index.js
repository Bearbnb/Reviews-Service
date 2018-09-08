const express = require('express');

const app = express();
const parser = require('body-parser');
const { connection } = require('../database/database');
const fs = require('fs');

app.use(express.static('./public'));
app.use(parser.json());

app.post('/', (res) => {
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
      fs.writeFile('message.txt', message, (err) => {
        if (err) throw err;
        res.send('success');
      });
    }
  });
});


app.listen(3000, () => console.log('listening on port 3000'));
