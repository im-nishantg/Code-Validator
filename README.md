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

- **Frontend**
  
1. **React.js**: The frontend of the Code Validator application is developed using React.js, a JavaScript library for building user interfaces. React provides a component-based architecture that promotes code reusability and modularity, making it ideal for complex web applications.

2. **CodeMirror** : Within the frontend, CodeMirror is integrated to facilitate code editing. CodeMirror is a versatile and customizable code editor component that supports syntax highlighting, code autocompletion, and other features, enhancing the coding experience for users. It allows users to write HTML, CSS, and JavaScript code snippets comfortably.

3. **User Interaction**: The frontend interface enables users to input their code snippets using the CodeMirror editor. When the user clicks the "Run Tests" button, the frontend sends the code snippets to the backend server for validation.

- **Backend**
  
1. **Node.js and Express.js**: The backend server is implemented using Node.js and Express.js, providing a robust and scalable environment for handling HTTP requests and building RESTful APIs. Node.js offers non-blocking, event-driven architecture, making it efficient for handling concurrent requests and I/O operations. Express.js simplifies route handling and middleware management, streamlining the development process.
   
2. **Cheerio**: Within the backend, Cheerio is utilized for HTML parsing and manipulation. Cheerio is a lightweight and fast HTML parser inspired by jQuery, enabling easy traversal and manipulation of HTML documents. It is employed to run predefined tests on the HTML code received from the frontend, checking for specific elements, attributes, or structural patterns.
Validation Process: Upon receiving code snippets from the frontend, the backend runs predefined tests using Cheerio to validate the HTML content. Each test corresponds to a specific requirement or criterion, such as the presence of certain elements or attributes. Test results are generated based on the outcome of these tests, indicating whether the code snippets meet the specified criteria.

- **Communication**

**Axios**: Communication between the frontend and backend is facilitated by Axios, a promise-based HTTP client for JavaScript. Axios simplifies the process of making asynchronous HTTP requests from the frontend to the backend server, enabling seamless interaction between the two components..
