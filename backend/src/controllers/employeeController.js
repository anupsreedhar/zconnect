const pool = require('../config/database');
const queries = require('../queries/queries')
 
//create Employee object
const createEmployee = (req, resp) => {
 
    const {id, first_name, last_name, designation, phone_number} = req.body;
    pool.query(queries.createEmployee, [id, first_name, last_name, designation, phone_number], (error,results) => {
        if(error) throw error;
        resp.status(201).send("Employee created successfully");
    });
};
 
//Delete Employee object
const deleteEmployee = (req, resp) => {
    const id = parseInt(req.params.id);
    pool.query(queries.deleteEmployee, [id], (error,results) => {
        if(error) throw error;
        resp.status(200).send("Employee deleted successfully");
    });
};
 
//Retrieve all Employees
const getEmployees = (req, resp) => {
 
    pool.query(queries.getEmployees, (error,results) => {
        if(error) throw error;
        resp.status(200).send(results.rows);
        console.log("All Employees returned successfully");
    });
};
 
//Retrieve Employee object based on the id
const getByEmployeeId = (req, resp) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getEmployeeById, [id], (error,results) => {
        if(error) throw error;
        resp.status(200).send(results.rows);
        console.log(`Employee with ${id} returned successfully`);
    });
}
 
//Exported methods to be used on route layer.
module.exports = {
    createEmployee,
    deleteEmployee,
    getByEmployeeId,
    getEmployees
}