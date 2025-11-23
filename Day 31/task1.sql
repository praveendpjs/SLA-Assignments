create database company_db;

use company_db;

create table department(
id Int primary key auto_increment,
name varchar(50),
description varchar(50)
);

select * from department;