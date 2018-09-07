DROP DATABASE bearbnb;

CREATE DATABASE bearbnb;

USE bearbnb;

CREATE TABLE users (
	id INT AUTO_INCREMENT, 
	photo VARCHAR (100) NULL,

	PRIMARY KEY (id)
);
CREATE TABLE houses (
	id INT AUTO_INCREMENT, 
	owner INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (owner)
		REFERENCES users(id)
		ON DELETE CASCADE
);
CREATE TABLE reviews (
	id INT AUTO_INCREMENT, 
	house_id INT NOT NULL, 
	user_id INT NOT NULL, 
	created DATE NOT NULL, 
	review VARCHAR (255) NULL,
	host_comments VARCHAR (255) NULL, 
	raiting INT,

	PRIMARY KEY (id), 
	FOREIGN KEY (user_id)
		REFERENCES users(id)
		ON DELETE CASCADE
);

