# Code Validator

## Overview
Code Validator is a web application that allows users to write HTML, CSS, and JavaScript code snippets and validate them against a set of predefined tests. It provides real-time feedback on the correctness of the code based on the defined tests.

## Features
- Users can write HTML, CSS, and JavaScript code snippets in a code editor.
- The application runs predefined tests on the code snippets to validate their correctness.
- Test results are displayed to the user in a modal, indicating whether each test passed or failed.
- Users can easily see which parts of their code need improvement based on the test results.

## Technologies Used
- **Frontend**: React.js, CodeMirror, Axios, TailwindCSS
- **Backend**: Node.js, Express.js, Cheerio

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/im-nishantg/Code-Validator
   
2. Navigate to the project directory:
   ```bash
   cd code-validator
   
3. Install dependencies for both client and server:
   ```bash
   cd client
   npm install
   cd ../server
   npm install

4. Start the server
   ```bash
   npm start
   
5. Start the client
   ```bash
   npm run dev

## Approach

1. Frontend: The frontend is built using React.js. It provides a user interface for writing HTML, CSS, and JavaScript code snippets using CodeMirror. When the user clicks on the "Run Tests" button, the frontend sends the code snippets to the backend for validation.

2. Backend: The backend is built using Node.js and Express.js. It receives the code snippets from the frontend and runs predefined tests using Cheerio, a jQuery-like library for parsing HTML. Each test checks specific aspects of the code snippets, such as the presence of certain elements or attributes.

3. Communication: The frontend communicates with the backend using Axios, a promise-based HTTP client.
