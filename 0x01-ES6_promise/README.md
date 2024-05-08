Alx Backend JavaScript - ES6 Promise
Welcome to the Alx Backend JavaScript ES6 Promise repository! This repository contains solutions to various tasks related to ES6 Promises.

Task 0: Keep Every Promise
In this task, we create a function getResponseFromAPI() that returns a Promise.

Task 1: Don't Make a Promise If You Know You Can't Keep It
We implement the function getFullResponseFromAPI(success) that returns a Promise. The resolution and rejection of the Promise are based on the success paraimeter.

Task 2: Catch Me If You Can!
The function handleResponseFromAPI(promise) appends handlers to a Promise. It logs a message when the Promise is resolved and returns an object, and logs an error when the Promise is rejected.

Task 3: Handle Multiple Successful Promises
In this task, we import two functions from utils.js and use the handleProfileSignup() function to collectively resolve all promises and log user profile details.

Task 4: Simple Promise
The signUpUser(firstName, lastName) function returns a resolved Promise with user details.

Task 5: Reject the Promises
We implement the uploadPhoto(filename) function, which returns a Promise rejecting with an error if the photo cannot be processed.

Task 6: Handle Multiple Promises
The handleProfileSignup(firstName, lastName, fileName) function calls two other functions and returns an array with the results of the promises.

Task 7: Load Balancer
The loadBalancer(chinaDownload, USDownload) function returns the value from the promise that resolves first between two promises.

Task 8: Throw Error / Try Catch
The divideFunction(numerator, denominator) function divides two numbers and throws an error if the denominator is zero.

Task 9: Throw an Error
The guardrail(mathFunction) function executes a given function and appends the result or error message to an array.

Task 10: Await / Async
The asyncUploadUser() function calls two async functions and returns an object with the results. If one of the functions fails, it returns an empty object.

This repository is licensed under the MIT License.
