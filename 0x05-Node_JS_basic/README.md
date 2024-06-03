0x05-Node_JS_basic

This repository contains a series of tasks aimed at mastering the fundamentals of Node.js, a powerful JavaScript runtime environment. The tasks cover various aspects of Node.js development, including file handling, asynchronous programming, HTTP server creation, and utilization of the Express.js framework. By completing these tasks, developers will gain a solid foundation in Node.js basics, essential for building scalable and efficient backend applications.

Requirements
Allowed editors: vi, vim, emacs, Visual Studio Code
Interpreted/Compiled: Ubuntu 18.04 LTS using Node (version 12.x.x)
File Endings: All files should end with a new line
Mandatory Files: README.md file at the root of the project folder
File Extensions: Code files should use the .js extension
Testing: Jest with the command npm run test
Linting: ESLint
Verification: npm run full-test to verify the entire project
Export Format: Functions/classes must be exported using module.exports = myFunction;
Provided Files
database.csv: Contains data on students
package.json: Dependency information
babel.config.js: Babel configuration
.eslintrc.js: ESLint configuration
Don’t forget to run $ npm install to install dependencies when you have the package.json.

Tasks
Executing Basic JavaScript with Node JS:

File: 0-console.js
Description: Create a function displayMessage that prints a string argument to STDOUT.
Using Process stdin:

File: 1-stdin.js
Description: Create a program that prompts the user for their name and displays it.
Reading a File Synchronously with Node JS:

File: 2-read_file.js
Description: Create a function countStudents to read the database file and log the number of students in each field.
Reading a File Asynchronously with Node JS:

File: 3-read_file_async.js
Description: Create a function countStudents to asynchronously read the database file and log the number of students in each field.
Creating a Small HTTP Server using Node's HTTP module:

File: 4-http.js
Description: Create a small HTTP server that listens on port 1245 and displays "Hello Holberton School!" for any endpoint.
Creating a More Complex HTTP Server using Node's HTTP module:

File: 5-http.js
Description: Create an HTTP server that returns plain text, with different responses based on the URL path.
Creating a Small HTTP Server using Express:

File: 6-http_express.js
Description: Create an HTTP server using Express that displays "Hello Holberton School!" for the endpoint /.
Creating a More Complex HTTP Server using Express:

File: 7-http_express.js
Description: Create an HTTP server using Express that returns plain text, with different responses based on the URL path.
Organizing a Complex HTTP Server using Express:

Organize the Structure of the Server:
Directories: controllers, routes
Write the App Controller:
File: full_server/controllers/AppController.js
Write the Students Controller:
File: full_server/controllers/StudentsController.js
Write the Routes:
File: full_server/routes/index.js
Write the Server:
File: full_server/server.js
Update package.json:
Command: nodemon --exec babel-node --presets babel-preset-env ./full_server/server.js ./database.csv
Repository Information
GitHub Repository: alx-backend-javascript
Directory: 0x05-Node_JS_basic
