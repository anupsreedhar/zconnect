const Router = require('express')
const employeeController = require('../controllers/employeeController.js')
const router = Router();
 
router.get('/', employeeController.getEmployees);
router.get('/:id', employeeController.getByEmployeeId);
router.post('/', employeeController.createEmployee)
router.delete('/:id', employeeController.deleteEmployee);
 
module.exports = router;