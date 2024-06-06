# ALX Backend JavaScript - 0x06-Unit Testing in JavaScript

## Requirements
- All code will be executed on Ubuntu 18.04 using Node 12.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension
- All tests should pass without any warning or error when running `npm test *.test.js`

## Project Structure

├── 0-calcul.js
├── 0-calcul.test.js
├── 1-calcul.js
├── 1-calcul.test.js
├── 2-calcul_chai.js
├── 2-calcul_chai.test.js
├── 3-payment.js
├── 3-payment.test.js
├── 4-payment.js
├── 4-payment.test.js
├── 5-payment.js
├── 5-payment.test.js
├── 6-payment_token.js
├── 6-payment_token.test.js
├── 7-skip.test.js
├── 8-api
│ ├── package.json
│ ├── api.js
│ └── api.test.js
├── 9-api
│ ├── package.json
│ ├── api.js
│ └── api.test.js
└── 10-api
├── package.json
├── api.js
└── api.test.js


## Tasks

### 0. Basic test with Mocha and Node assertion library
- **Objective**: Set up Mocha and create a basic test suite for a simple function.
- **Files**:
  - `0-calcul.js`
  - `0-calcul.test.js`
- **Steps**:
  - Install Mocha using npm: `npm install mocha`
  - Set up scripts in `package.json` to run Mocha using `npm test`
  - Create a function `calculateNumber` that rounds two numbers and returns their sum
  - Write test cases to validate the functionality using the `assert` module

### 1. Combining descriptions
- **Objective**: Extend the previous function to support different operations.
- **Files**:
  - `1-calcul.js`
  - `1-calcul.test.js`
- **Steps**:
  - Add a `type` argument to the function, supporting `SUM`, `SUBTRACT`, and `DIVIDE`
  - Write test cases using `describe` to organize them

### 2. Basic test using Chai assertion library
- **Objective**: Rewrite test cases using Chai for a more readable format.
- **Files**:
  - `2-calcul_chai.js`
  - `2-calcul_chai.test.js`
- **Steps**:
  - Install Chai: `npm install chai`
  - Rewrite the test suite using Chai's `expect` syntax

### 3. Spies
- **Objective**: Use Sinon to create a spy and validate function calls.
- **Files**:
  - `utils.js`
  - `3-payment.js`
  - `3-payment.test.js`
- **Steps**:
  - Install Sinon: `npm install sinon`
  - Create a spy to ensure the `calculateNumber` function is called correctly

### 4. Stubs
- **Objective**: Use Sinon to create a stub for testing.
- **Files**:
  - `4-payment.js`
  - `4-payment.test.js`
- **Steps**:
  - Create a stub for `calculateNumber` to return a consistent result
  - Validate the function's behavior with the stub in place

### 5. Hooks
- **Objective**: Utilize hooks to run setup and teardown code for tests.
- **Files**:
  - `5-payment.js`
  - `5-payment.test.js`
- **Steps**:
  - Use `beforeEach` and `afterEach` hooks to set up and clean up spies

### 6. Async tests with done
- **Objective**: Test asynchronous code using callbacks.
- **Files**:
  - `6-payment_token.js`
  - `6-payment_token.test.js`
- **Steps**:
  - Create a function returning a promise
  - Write a test that correctly handles the promise with the `done` callback

### 7. Skip
- **Objective**: Skip specific tests without removing them.
- **Files**:
  - `7-skip.test.js`
- **Steps**:
  - Use `it.skip` to bypass a failing test

### 8. Basic Integration testing
- **Objective**: Perform integration testing on an Express app.
- **Files**:
  - `8-api/api.js`
  - `8-api/api.test.js`
  - `8-api/package.json`
- **Steps**:
  - Set up an Express server with basic routes
  - Write tests to verify the server's responses

### 9. Regex integration testing
- **Objective**: Add route validation and test it.
- **Files**:
  - `9-api/api.js`
  - `9-api/api.test.js`
  - `9-api/package.json`
- **Steps**:
  - Add a route with parameter validation
  - Write tests to check for correct and incorrect parameter handling

### 10. Deep equality & Post integration testing
- **Objective**: Add endpoints and perform deeper integration testing.
- **Files**:
  - `10-api/api.js`
  - `10-api/api.test.js`
  - `10-api/package.json`
- **Steps**:
  - Add endpoints returning structured data and handling POST requests
  - Write tests to verify deep equality and correct handling of POST data

## Running Tests
To run the tests for any task, use the following command:

npm test <test-file>

npm test 0-calcul.test.js

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
