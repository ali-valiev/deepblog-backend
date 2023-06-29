create table blogs(
  id integer PRIMARY KEY AUTO_INCREMENT,
  title varchar(70),
  author varchar(50),
  date varchar(10),
  body varchar(500)
);

insert into blogs(title, author, date, body)
values
("tittle", "ali", "12-12-2023", "dddddddd");