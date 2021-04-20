const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Be sure to update with your own MySQL password!
  password: "",
  database: "trackingDB",
});

connection.connect((err) => {
  if (err) throw err;
  runSearch();
});

const runSearch = () => {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Find Employees",
        "Find Departments",
        "Find Roles",
        "Add Employee",
        "Add Departments",
        "Add Roles",
        "Update Employee Roles",
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "Find Employees":
          employeesSearch();
          break;

        case "Find Departments":
          departmentSearch();
          break;

        case "Find Roles":
          roleSearch();
          break;

        case "Add Employee":
          addEmployees();
          break;

        case "Add Departments":
          addDepartments();
          break;

        case "Add Roles":
          addRole();
          break;

        case "Update Roles":
          updateRoles();
          break;

        default:
          console.table(`Invalid action: ${answer.action}`);
          break;
      }
    });
};

const employeesSearch = () => {
  inquirer
    .prompt({
      name: "employees",
      type: "input",
      message: "Search for Employees",
    })
    .then((answer) => {
      const query = "SELECT *";
      connection.query(query, { last_name: answer.last_name }, (err, res) => {
        // res.forEach(({ id, role_id, manager_id }) => {
        // console.log(answer.employee.id)
        console.table(
          `id: ${res.id} || role_id: ${answer.role_id} || manager_id: ${manager_id}`
        );
        // });
        runSearch();
      });
    });
};

const departmentSearch = () => {
  inquirer
    .prompt({
      name: "department",
      type: "input",
      message: "What department would you like to search for?",
    })
    .then((answer) => {
      const query = "SELECT id FROM departments WHERE = ?";
      connection.query(
        query,
        { department_name: answer.department_name },
        (err, res) => {
          // res.forEach(({ id}) => {
          console.table(`id: ${id} `);
        }
      );
      runSearch();
    });
  // });
};

const roleSearch = () => {
  inquirer
    .prompt({
      name: "roles",
      type: "input",
      message: "Search for Role",
    })
    .then((answer) => {
      const query = "SELECT id, salary, department_id FROM roles WHERE = ?";
      connection.query(query, { title: answer.title }, (err, res) => {
        // res.forEach(({ id, salary, department_id }) => {
        console.table(res);
        // });
        runSearch();
      });
    });
};

const addEmployees = () => {
  // prompt for info about the item being put up for auction
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "Add Department ID",
        validate(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        },
      },
      {
        name: "first_name",
        type: "input",
        message: "Add First Name",
      },
      
    
      {
        name: "manager_id",
        type: "input",
        message: "Add Employees Manager ID",
        validate(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        },
      },
    ])
    .then((answer) => {
      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "INSERT INTO employee SET ?",
        {
          id: answer.id || 0,
          first_name: answer.first_name,
          last_name: answer.last_name,
          role_id: answer.role_id || 0,
          manager_id: answer.manager_id || 0,
        },
        (err) => {
          if (err) throw err;
          console.table("Your Employee was created successfully!");
          // re-prompt the user for if they want to bid or post
          runSearch();
        }
      );
    });
};

const addDepartments = () => {
  // prompt for info about the item being put up for auction
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "Add Department ID",
        validate(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        },
      },
      {
        name: "department_name",
        type: "input",
        message: "Add Department Name",
      },
  
    ])
    .then((answer) => {
      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "INSERT INTO departments SET ?",
        {
          id: answer.id || 0,
          department_name: answer.department_name,
        
        },
        (err) => {
          if (err) throw err;
          console.table("Department successfully added!");
          // re-prompt the user for if they want to bid or post
          runSearch();
        }
      );
    });
};
const addRole = () => {
  // prompt for info about the item being put up for auction
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "Add Department ID",
        validate(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        },
      },
      {
        name: "first_name",
        type: "input",
        message: "Add First Name",
      },
      
    
      {
        name: "manager_id",
        type: "input",
        message: "Add Employees Manager ID",
        validate(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        },
      },
    ])
    .then((answer) => {
      // when finished prompting, insert a new item into the db with that info
      connection.query(
        "INSERT INTO employee SET ?",
        {
          id: answer.id || 0,
          first_name: answer.first_name,
          last_name: answer.last_name,
          role_id: answer.role_id || 0,
          manager_id: answer.manager_id || 0,
        },
        (err) => {
          if (err) throw err;
          console.table("Your Employee was created successfully!");
          // re-prompt the user for if they want to bid or post
          runSearch();
        }
      );
    });
};

