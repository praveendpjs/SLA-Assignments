create database company_db;

use company_db;

create table users(
id Int primary key auto_increment,
students varchar(50),
description varchar(50)
);

SELECT * FROM users;

ALTER TABLE users
ADD phone int;
