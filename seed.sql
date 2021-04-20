DROP DATABASE IF EXISTS trackingDB;
CREATE database trackingDB;

USE trackingDB;

CREATE TABLE departments (
  id INT NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO departments (id, department_name)
VALUES (1, "sales"),
(2, "manual labor"),
(3, "marketing"),
(4, "HR"),
(5, "finance");

CREATE TABLE roles (
  id INT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL (10,4) NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO roles (id, title, salary, department_id)
VALUES (10, "mechanic", 15.00, 2),
(11, "Sales person", 15.00, 1),
(12, "accountant", 21.00, 5),
(13, "laborer", 12.00, 2),
(14, "EO", 20.00, 4);

CREATE TABLE employee (
  id INT NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Dan", "Salezar", 3, 1),
(2, "Christie", "Mendoza", 2, 3),
(3, "Mike", "Quin", 1, 5),
(4, "Rebecca", "Jones", 4, 1),
(5, "Andrew", "Gandolf", 3, 4);