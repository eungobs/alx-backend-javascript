# JavaScript Unit Testing with Mocha and Chai

This repository contains a series of tasks aimed at practicing unit testing in JavaScript using the Mocha testing framework and the Chai assertion library. Each task focuses on different aspects of unit testing, including basic tests, integration tests, asynchronous tests, and more.

## Task 0: Basic test with Mocha and Node assertion library

In this task, we start with a basic setup of Mocha and Node's built-in assertion library. We create a function named `calculateNumber` to round two numbers and return their sum. Test cases are provided to ensure the correctness of the function.

### Requirements
- Use Mocha and Node's built-in assertion library.
- Ensure all tests pass without any warning.

## Task 1: Combining descriptions

This task builds upon the previous one by adding more functionality to the `calculateNumber` function. We introduce a new argument named `type`, which can be 'SUM', 'SUBTRACT', or 'DIVIDE'. Depending on the type, the function performs addition, subtraction, or division of the rounded numbers. Test cases are provided to cover different scenarios.

### Requirements
- Use Mocha and Node's built-in assertion library.
- Ensure all tests pass without any warning.

## Task 2: Basic test using Chai assertion library

While using Node's assertion library is valid, many developers prefer a behavior-driven development style. In this task, we switch to the Chai assertion library for easier-to-read tests. The function behavior remains the same as in Task 1, but we rewrite the test suite using Chai's `expect` syntax.

### Requirements
- Use Chai assertion library.
- Ensure all tests pass without any warning.

## Task 3: Spies

Spies are useful for tracking function calls and their arguments. In this task, we introduce the Sinon library to create spies. We create a utility function and a main function that calls it. The goal is to spy on the utility function and verify its behavior when called by the main function.

### Requirements
- Use Sinon library for spies.
- Ensure all tests pass without any warning.

## Task 4: Stubs

Stubs are similar to spies but allow providing a different implementation of the function. We use Sinon to stub a utility function called by the main function. The stub always returns the same value, and we verify the behavior of the main function when calling the stub.

### Requirements
- Use Sinon library for stubs.
- Ensure all tests pass without any warning.

## Task 5: Hooks

Hooks are useful for executing setup and teardown tasks before and after tests. We use Mocha's `beforeEach` and `afterEach` hooks to set up and clean up test environments. The goal is to ensure proper execution of tests and avoid side effects between test cases.

### Requirements
- Use Mocha hooks for setup and cleanup.
- Ensure all tests pass without any warning.

## Task 6: Async tests with done

Async testing is necessary for handling asynchronous code, such as promises. We use Mocha's `done` callback to handle asynchronous tests. The goal is to test a function that returns a promise and verify its behavior under different conditions.

### Requirements
- Use Mocha's `done` callback for async tests.
- Ensure all tests pass without any warning.

## Task 7: Skip

Skipping tests is useful for temporarily excluding failing tests from execution. We use Mocha's `skip` function to skip a failing test without removing it from the test suite. The goal is to ensure other tests can still run successfully while the failing test is being investigated.

### Requirements
- Use Mocha's `skip` function for skipping tests.
- Ensure all tests pass without any warning.

## Task 8: Basic Integration testing

Integration testing involves testing the interaction between different components of a system. We set up a basic Express server and write integration tests to verify its endpoints' behavior. The goal is to ensure the server responds correctly to incoming requests.

### Requirements
- Use Mocha for writing integration tests.
- Ensure all tests pass without any warning.
- The server should not display any errors.

## Task 9: Regex integration testing

Regex integration testing involves testing routes with dynamic parameters. We modify the Express server to include a route with a dynamic parameter that must match a specific pattern. We write integration tests to verify the route's behavior with valid and invalid parameter values.

### Requirements
- Use Mocha for writing integration tests.
- Ensure all tests pass without any warning.

## Task 10: Deep equality & Post integration testing

Deep equality testing involves comparing complex objects for equality. We modify the Express server to include endpoints that return objects with nested properties. We write integration tests to verify the endpoints' responses and ensure deep equality of the returned objects.

### Requirements
- Use Mocha for writing integration tests.
- Ensure all tests pass without any warning.
- The server should not display any errors.
