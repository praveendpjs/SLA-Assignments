create database company_db;

use company_db;

create table department(
id Int primary key auto_increment,
name varchar(50),
description varchar(50)
);

select * from department;

insert into department (id, name, description)
values(1,"praveen","He is a good asset"),
(2,"Ishwarya","She is good at learing"),
(3,"Allen","He is a great at coding");
