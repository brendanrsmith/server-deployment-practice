# server-deployment-practice

## Brendan Smith | 401d41 lab 01

Heroku Dev deployment: <https://brendansmith-server-deploy-dev.herokuapp.com/>

Heroku Production deployment: <https://brendansmith-server-deploy-pro.herokuapp.com/>

GitHub Actions: <https://github.com/brendigler/server-deployment-practice/actions>

Pull Request: <https://github.com/brendigler/server-deployment-practice/pull/1>

### Usage Instructions

- Clone repo locally
- `npm install` to install all dependencies
- create .env file containing a PORT variable
- `node index.js` to start server on port 3000
- `npm test` to run proof-of-life tests via Jest

---

# Node Ecosystem, TDD, CI/CD

Application development in the Node.js ecosystem, including the writing of modular code using CommonJS modules, writing tests to assert code quality, setting up and working in a "Continuous Integration"  environment (Github Actions).

## Learning Objectives

### Students will be able to

#### Describe and Define

- Node and the V8 Engine

#### Execute

- Setup a Node.js Package using npm
- Create CommonJS modules
- Create a simple express server
- See passing tests via GitHub actions (CI)
- Deploy to Heroku using CD

## Notes

The goal of middleware is to act on a request *before* it reaches your server.

`app.use()` runs every request through the supplied middleware, globally.

Route-level middleware allows us to apply middleware specifically to certain routes. `Next()` tells node to move to the next middleware in the chain.

Error handlers must live at the bottom of our server file. 

### Importing and Exporting Modules

If one module **exports** a function or an object ...

```javascript
// person.js
const person = {};

person.walk = function() {
  return 'walking';
}

module.exports = person;
```

Another module can **import** and use that function or object

```javascript
const human = require('./person.js'))
console.log( human.walk() );  // prints 'walking'
```

### CI/CD - Continuous Integration and Deployment

In your lab today, you'll be doing a full "professional" deployment using 2 branches, PR's, and a continuous process to get your code deployed.

You will repeat this process for every server based lab moving forward. Keep these notes (and the lab steps) handy for future reference