const faker = require('faker');
const mysql = require('mysql');
const { connection } = require('./database');

const datalength = Array.apply(null, { length: 101 }).map(Function.call, Number).slice(1);


const populateUsers = (users) => {
  users.forEach(() => {
    const photo = faker.image.avatar();
    const name = faker.name.firstName();
    const q = `INSERT INTO users (photo, name) VALUES ('${photo}', '${name}')`;
    connection.query(q, (err) => {
      if (err) {
        throw err;
      }
    });
  });
};

const populateHouses = (houses) => {
  houses.forEach(() => {
    const owner = Math.ceil(Math.random() * 100);
    const q = `INSERT INTO houses (owner) VALUES ('${owner}')`;
    connection.query(q, (err) => {
      if (err) {
        throw err;
      }
    });
  });
};

const formatDate = (date) => {
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
};

const populateReviews = (arr) => {
  arr.forEach((review) => {
    const house = review;
    const index = Math.ceil(Math.random() * 25);
    for (let i = 0; i <= index; i++) {
      const user = Math.ceil(Math.random() * 100);
      const date = formatDate(faker.date.past());
      const text = faker.lorem.paragraph();
      let comments = null;
      if (Math.random() * 10 > 8) {
        comments = faker.lorem.sentence();
      }
      const random = () => {
        return Math.round(Math.random() * (5 - 2 + 1) + 2);
      }
      const q = `INSERT INTO reviews (house_id, user_id, created, review, host_comments, accuracy, communication, 
            cleanliness, location, checkin, value) VALUES 
      ('${house}', '${user}', '${date}', '${text}', '${comments}', '${random()}', 
      '${random()}', '${random()}', '${random()}', '${random()}', '${random()}')`;
      connection.query(q, (err) => {
        if (err) {
          throw err;
        }
      });
    }
  });
};

populateUsers(datalength);
populateHouses(datalength);
populateReviews(datalength);
console.log('added new data');
