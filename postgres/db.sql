create database deepblog;
create table blogs(
  id serial PRIMARY KEY,
  title varchar(70),
  author varchar,
  date varchar,
  body varchar(500)
)