const express = require('express');
const parser = require('body-parser');
const fs = require('fs');
const { connection } = require('../database/database');

const app = express();

app.use(express.static('./public'));
app.use(parser.json());

app.get('/reviews', (req, res) => {
  const q = `SELECT house_id, created, review, host_comments, rating, photo, name
  FROM Reviews JOIN Users
  ON Reviews.user_id = Users.id
  WHERE (house_id = '4')`
  connection.query(q, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const obj = [];
      data.forEach((review) => {
        const r = {
          id: review.id,
          house_id: review.house_id,
          name: review.name,
          photo: review.photo,
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
        res.send(obj);
      });
    }
  });
});


app.listen(3000, () => console.log('listening on port 3000'));
