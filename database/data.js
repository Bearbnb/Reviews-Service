const faker = require('faker');
const mysql = require('mysql');
const connection = require('./database').connection;

var arr = Array.apply(null, {length: 101}).map(Function.call, Number).slice(1);


var populateUsers = (arr) => {
	arr.forEach((user)=>{	
		var photo = faker.image.avatar();
		var q = `INSERT INTO users (photo)
				VALUES 
				('${photo}')`

		connection.query(q, (err, data)=>{
			if (err) {
				throw err
			} else {
				console.log('users data was inserted')
			}
		})
	})
}

var populateHouses = (arr) => {
	arr.forEach((house)=>{	
		var owner = Math.ceil(Math.random()*100);
		var q = `INSERT INTO houses (owner)
				VALUES 
				('${owner}')`

		connection.query(q, (err, data)=>{
			if (err) {
				throw err
			} else {
				console.log('houses data was inserted')
			}
		});
	});
}
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

var populateReviews = (arr) => {
	arr.forEach((review)=>{
		var house = review;
				for (var i = 0; i<=10;i++){
			var user = Math.ceil(Math.random()*100);

			var date = formatDate(faker.date.past());
			var review = faker.lorem.sentence();
			if (Math.random()*10 > 8 ){
				var comments = faker.lorem.sentence();
			} else {
				var comments = null;
			}
			var raiting = Math.ceil(Math.random()*5)
			var q = `INSERT INTO reviews (house_id, user_id, created, review, host_comments, raiting)
					VALUES 
					('${house}', '${user}', '${date}', '${review}', '${comments}', '${raiting}')`
			connection.query(q, (err, data)=>{
				if (err) {
					console.log(user);
					throw err
				} else {
					console.log('reviews data was inserted')
				}
			});
		}
	});
}

populateUsers(arr);
populateHouses(arr);
populateReviews(arr);

