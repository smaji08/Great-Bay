DROP DATABASE IF EXISTS greatbay_db;
CREATE DATABASE greatbay_db;
USE greatbay_db;

CREATE TABLE items (
	id INTEGER(50) AUTO_INCREMENT NOT NULL,
	name VARCHAR(50) NOT NULL,
    price INTEGER(10) NOT NULL,
    PRIMARY KEY (id)
);