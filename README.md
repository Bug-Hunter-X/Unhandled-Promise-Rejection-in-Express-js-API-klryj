# Unhandled Promise Rejection in Express.js API

This repository demonstrates a common error in Express.js applications: neglecting proper error handling for asynchronous database operations.  The `bug.js` file showcases an example where a promise rejection during user creation is silently handled, leading to a poor user experience and difficult debugging.  `bugSolution.js` provides a corrected version with robust error handling.

## Bug
The original code omits a crucial `catch` block within the asynchronous `db.createUser` call, meaning that any database errors are swallowed silently.

## Solution
The solution implements a proper `catch` block within the `.then()` chain.  In the event of a rejection, the error is sent back to the client with an appropriate HTTP status code, providing actionable feedback for both the user and the developer.