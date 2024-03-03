const express = require('express')
const employeeRoute = require('./src/routes/employeeRoutes')
 
const app = express();
 
//Makes sure the returned object is in json format
app.use(express.json())
 
//base route
app.use('/api/v1/employees', employeeRoute);
 
//Sets the port number and startup message when the server starts
const port = 8080;
app.listen(port, () => console.log(`Listening to port ${port}`))