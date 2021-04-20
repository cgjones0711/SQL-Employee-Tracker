const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Be sure to update with your own MySQL password!
    password: '',
    database: 'trackingDB',
  });

connection.connect((err) => {
  if (err) throw err;
  runSearch();
});

const runSearch = () => {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'Find Employee',
        'Find Department',
        'Find Roles',
        'Add Employee',
        'Add Department',
        'Add Roles',
        'Update Employee Roles'
    
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'Find Employee':
          employeeSearch();
          break;

        case 'Find Departments':
          departmentSearch();
          break;

          case 'Find Roles':
            roleSearch();
            break; 

          case 'Add Employee':
            addEmplpyee();
            break;

          case 'Add Departments':
            addDepartments();
            break;

          case 'Add Roles':
            roleSearch();
            break;
            
            case 'Update Roles':
              updateRoles();
              break;

        default:
          console.table(`Invalid action: ${answer.action}`);
          break;
      }
    });
};

const  employeeSearch = () => {
  inquirer
    .prompt({
      name: 'employee',
      type: 'input',
      message:'Search for Employee',
    })
    .then((answer) => {
      const query = 'SELECT id, role_id, manager_id FROM employee WHERE ?';
      connection.query(query, { last_name: answer.last_name }, (err, res) => {
        // res.forEach(({ id, role_id, manager_id }) => {
          console.table(`id: ${id} || role_id: ${role_id} || manager_id: ${manager_id}`
          );
        // });
        runSearch();
      });
    });
};

const departmentSearch = () => {
    inquirer
      .prompt({
        name: 'department',
        type: 'input',
        message: 'What department would you like to search for?',
      })
      .then((answer) => {
        const query = 'SELECT id FROM departments WHERE ?';
        connection.query(query, { department_name: answer.department_name}, (err, res) => {
          // res.forEach(({ id}) => {
            console.table(
              `id: ${id} `
            );
          });
          runSearch();
        });
      // });
  };

  const  roleSearch = () => {
    inquirer
      .prompt({
        name: 'roles',
        type: 'input',
        message:'Search for Role',
      })
      .then((answer) => {
        const query = 'SELECT id, salary, department_id FROM roles WHERE ?';
        connection.query(query, { title: answer.title }, (err, res) => {
          // res.forEach(({ id, salary, department_id }) => {
            console.table(res);
          // });
          runSearch();
        });
      });
  };




