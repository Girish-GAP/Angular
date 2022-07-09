// This file contains node-js as a run time environment and express-js as a framework

// Import the express-js
// require function return function handler which is express
const express = require('express');


const api = express();      // Create the object of express


const port = 8500;      // port number at server will listen


api.listen(port, ServerStart);      // For listen


// method for listen
function ServerStart(request, response) {
    console.log("Server start at port 8500");
}


// this method for no address specified after '/'
// '/' represents the root 
// it's an end point in which we want to go.
api.get('/', ServerRoot);       // for root route


// root address of server method
function ServerRoot(request, response) {
    // response for request
    response.json({ "Status": "Success" });
}

// it's an end point in which we want to go.
api.get('/getEmployeeNames', EmployeeNames);    // custome routing


// First control goes to api.get then it will call EmployeeNames method (it takes an jump)
// that's why its take more execution time.
// this function is reusable becase any other can connect it to any other route also.
// Explicit routing defination
function EmployeeNames(request, response)   // provides employee name information
{ 
    response.json(
        [
            { "Name": "Girish" },
            { "Name": "Omkar" }
        ]
    );
}


// Anonymous or fatArrow function to avoid jump of like above method.
// That's why this method perform fastes execution as compare to above method.
// In this function reusability is not possible.
// api is the object
// Inline routing defination
api.get('/Demo', (request, response)  =>
    {
        response.json(
            {
                "Name" : "Girish"
            }
        );
    }
);

