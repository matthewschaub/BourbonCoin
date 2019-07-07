
USE bourbon_db;

CREATE TABLE addresses(
	id integer PRIMARY KEY,
	address1 varchar(100) NOT NULL,
	address2 varchar(100),
	zipcode integer NOT NULL,
	city varchar(30) NOT NULL,
	state varchar(20) NOT NULL
);




CREATE TABLE users (
	id integer PRIMARY KEY,
	fname varchar(20) NOT NULL,
	lname varchar(20) NOT NULL,
	email varchar(20) UNIQUE NOT NULL,
	publickey varchar(100),
	phonenumber bigint
);


CREATE TABLE user_address (
	user_id integer REFERENCES users ON DELETE CASCADE,
	address_id integer REFERENCES addresses ON DELETE CASCADE,
	PRIMARY KEY(user_id,address_id)
);

CREATE TABLE bottles (
	id integer PRIMARY KEY,
	distillery varchar(20) NOT NULL,
	product_name varchar(20) NOT NULL,
	proof smallint NOT NULL,
	percentage smallint,
	barrel_no integer,
	bottle_no integer,
	fill_date date,
	dump_date date,
	batch_no integer,
	year smallint,
	age integer,
	upc_or_laser varchar(20)
);

CREATE TABLE tokens (
	token_id bigint PRIMARY KEY,
	bottle_id integer REFERENCES bottles ON DELETE CASCADE,
	for_sale boolean DEFAULT TRUE
);

CREATE TYPE status AS ENUM('Accepted','Processing','Rejected');

CREATE TABLE token_requests(
	id integer PRIMARY KEY,
	current_status status,
	bottle_id integer REFERENCES bottles,
	token_id bigint REFERENCES tokens
);