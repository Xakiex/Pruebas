CREATE DATABASE IF NOT EXISTS companydb;

USE companydb

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR (45) DEFAULT NULL,
    salary INT (5) DEFAULT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE usuario (
    id INT(11) NOT NULL,
    name VARCHAR (45) NOT NULL,
    second_name VARCHAR (45) DEFAULT NULL,
    Last_name VARCHAR (45) NOT NULL,
    second_Last_name VARCHAR (45) DEFAULT NULL,
    position VARCHAR (45) NOT NULL,
    password VARCHAR (20) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE cita (
    id INT(11) NOT NULL AUTO_INCREMENT,
    cellphone VARCHAR(15) DEFAULT NULL,
    name VARCHAR (200) NOT NULL,
    date_meeting datetime NOT NULL,
    doctor VARCHAR (200) NOT NULL,
    room VARCHAR (15) DEFAULT NULL,
    status_meeting VARCHAR (15) DEFAULT NULL,
    note VARCHAR (300) DEFAULT NULL,    
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee VALUES 
    (1, 'joe', 1000),
    (2, 'Henry', 2000),
    (3, 'Sam', 2500),
    (4, 'Max', 1500);

INSERT INTO cita VALUES 
    (1, '3115454', 'joe', '2023-07-15 01:04:28', 'Doc Sam', 'C01', 'agendado', 'nota 1'),
    (2, '3115454', 'Henry', '2023-07-15 01:04:28', 'Doc Sam', 'C01', 'agendado', 'nota 1'),
    (3, '3115454', 'Sam', '2023-07-15 01:04:28', 'Doc Sam', 'C01', 'agendado', 'nota 1'),
    (4, '3125454', 'Max', '2023-07-15 01:04:28', 'Doc Sam', 'C01', 'agendado', 'nota 1');

INSERT INTO usuario VALUES 
    (1088, 'Miguel', 'D.', 'Parra', 'Urrutia', 'Admin', '123'),
    (42068, 'Nancy', 'D.', 'Patiño', 'Urrutia', 'Odontóloga', '123'),
    (1, 'Jessica', 'D.', 'Suarez', 'Urrutia', 'Auxiliar', '123'),
    (2, 'Laura', 'D.', 'Patiño', 'Urrutia', 'Odontóloga', '123');

