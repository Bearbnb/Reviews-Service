const { connection } = require('../database/database');

let makeReadable = (SQLdata) => {
  const obj = [];
  SQLdata.forEach((review) => {
    const r = {
      house_id: review.house_id,
      name: review.name,
      photo: review.photo,
      created: review.created,
      review: review.review,
      host_comments: review.host_comments,
      rating: review.rating,
    };
    obj.push(r);
  });
  return obj;
};

let getReviews = (id, callback) => {
  const q = `SELECT house_id, created, review, host_comments, rating, photo, name
    FROM Reviews JOIN Users
    ON Reviews.user_id = Users.id
    WHERE (house_id = '${id}')
    ORDER BY created DESC`;
  connection.query(q, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let reviews = makeReadable(data);
      console.log(reviews)
      callback( { reviews: reviews } );
    }
  });
}

module.exports = { makeReadable, getReviews };
