const { connection } = require('../database/database');

const makeReadable = (SQLdata) => {
  const obj = [];
  SQLdata.forEach((review) => {
    const r = {
      house_id: review.house_id,
      name: review.name,
      photo: review.photo,
      created: review.created,
      review: review.review,
      host_comments: review.host_comments,
      rating: [
        { accuracy: review.accuracy },
        { communication: review.communication },
        { cleanliness: review.cleanliness },
        { location: review.location },
        { checkin: review.checkin },
        { value: review.value }],
    };
    obj.push(r);
  });
  return obj;
};

const getReviews = (id, callback) => {
  const q = `SELECT house_id, created, review, host_comments, accuracy, communication, 
  cleanliness, location, checkin, value, photo, name
    FROM Reviews JOIN Users
    ON Reviews.user_id = Users.id
    WHERE (house_id = '${id}')
    ORDER BY created DESC`;
  connection.query(q, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const reviews = makeReadable(data);
      callback({ reviews });
    }
  });
};

const getHost =(id, callback) => {
  const q = `SELECT photo, name
  FROM Users JOIN Houses
  ON Users.id = Houses.owner
  WHERE (houses.id = '${id}')`;
  connection.query(q, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const host = {name: data[0].name, photo:data[0].photo};
      callback({ host });
    }
  });
}

module.exports = { makeReadable, getReviews, getHost };
