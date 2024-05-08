Queuing System in JavaScript


This repository contains solutions to various tasks related to building a queuing system in JavaScript using Redis. Below are the details of each task:

Task 0: Install a Redis instance
Follow the instructions in this task to download, extract, compile, and start a Redis server instance. Ensure that Redis is working correctly by setting and retrieving a value using the Redis client.

Repo:
GitHub repository: alx-backend
Directory: 0x03-queuing_system_in_js
Files: README.md, dump.rdb
Task 1: Node Redis Client
Install the node_redis library using npm and create a script 0-redis_client.js that connects to the Redis server. Ensure proper handling of connection errors and log appropriate messages.

Repo:
GitHub repository: alx-backend
Directory: 0x03-queuing_system_in_js
File: 0-redis_client.js
Task 2: Node Redis client and basic operations
Create a script 1-redis_op.js that builds upon the previous task by adding functions to perform basic Redis operations like setting and displaying values.

Repo:
GitHub repository: alx-backend
Directory: 0x03-queuing_system_in_js
File: 1-redis_op.js
Task 3: Node Redis client and async operations
Enhance the previous task by using promisify and async/await to perform Redis operations asynchronously. Implement the script 2-redis_op_async.js accordingly.

Repo:
GitHub repository: alx-backend
Directory: 0x03-queuing_system_in_js
File: 2-redis_op_async.js
Task 4: Node Redis client and advanced operations
Create a script 4-redis_advanced_op.js to demonstrate advanced Redis operations such as storing hash values and retrieving them.

Repo:
GitHub repository: alx-backend
Directory: 0x03-queuing_system_in_js
File: 4-redis_advanced_op.js
Task 5: Node Redis client publisher and subscriber
Implement publisher and subscriber functionalities in separate scripts 5-publisher.js and 5-subscriber.js. These scripts should connect to Redis and perform actions such as publishing and subscribing to channels.

Repo:
GitHub repository: alx-backend
Directory: 0x03-queuing_system_in_js
Files: 5-subscriber.js, 5-publisher.js
Task 6: Create the Job creator
Build a job creator module in a script 6-job_creator.js that utilizes Kue to create and enqueue jobs.

Repo:
GitHub repository: alx-backend
Directory: 0x03-queuing_system_in_js
File: 6-job_creator.js
Task 7: Create the Job processor
Develop a job processor module in a script 6-job_processor.js that listens for and processes jobs created by the job creator.

Repo:
GitHub repository: alx-backend
Directory: 0x03-queuing_system_in_js
File: 6-job_processor.js
Task 8: Track progress and errors with Kue: Create the Job creator
Create a job creator module with error tracking and progress reporting functionalities in a script 7-job_creator.js.

Repo:
GitHub repository: alx-backend
Directory: 0x03-queuing_system_in_js
File: 7-job_creator.js
Task 9: Track progress and errors with Kue: Create the Job processor
Implement a job processor module with error tracking and progress reporting features in a script 7-job_processor.js.

Repo:
GitHub repository: alx-backend
Directory: 0x03-queuing_system_in_js
File: 7-job_processor.js
Task 10: Writing the job creation function
Write a function createPushNotificationsJobs to create and enqueue jobs for push notifications.

Repo:
GitHub repository: alx-backend
Directory: 0x03-queuing_system_in_js
File: 8-job.js
Task 11: Writing the test for job creation
Create tests for the job creation function createPushNotificationsJobs to ensure its functionality.

Repo:
GitHub repository: alx-backend
Directory: 0x03-queuing_system_in_js
File: 8-job.test.js
Task 12: In stock?
Build a web application using Express to manage product stock and reservations. Implement routes to list available products, view product details, and reserve products.

Repo:
GitHub repository: alx-backend
Directory: 0x03-queuing_system_in_js
File: 9-stock.js
