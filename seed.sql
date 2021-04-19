DROP DATABASE IF EXISTS trackingDB;
CREATE database trackingDB;

USE trackingDB;

CREATE TABLE departments (
  id INT NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO departments (id, department_name)
VALUES (001, "sales"),
(002, "manual labor"),
(003, "marketing"),
(004, "HR"),
(005, "finance");

CREATE TABLE roles (
  id INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL (10,4) NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO roles (id, title, salary, department_id)
VALUES (001, "floor", 15.00, 01),
(002, "floor", 15.00, 001),
(003, "accountant", 21.00, 005),
(004, "laborer", 12.00, 003),
(005, "EO", 20.00, 004);

CREATE TABLE employee (
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Dan", "Salezar", 003, 01),
(021, "Christie", "Mendoza", 002, 03),
(301, "Mike", "Quin", 001, 05),
(011, "Rebecca", "Jones", 005, 01),
(201, "Andrew", "Gandolf", 003, 04);