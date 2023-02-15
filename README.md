

# Typescript Web Starter for Companies House

This web-starter is designed to allow you to very quickly create a Typescript/Node.js web app. It provides you with the essential building blocks (or scaffolding) for piecing together a Typescript app for the UI and to dictate your overall project structure.


## Downloading and installing

Having cloned the project into your project root, run the following commands:
```
cd node-web-starter-ts
npm install && npm install mocha -g
```


### Config set-up

- The web-starter uses environment variables for configuration.
- The config file is located at `src/config/.env.example` and should be copied over to `src/config/.env`. This is because `.env.example` is versioned and does not contain any sensitive information whereas `.env` (which is the actual config file used by the app) is not versioned due to the fact that this is where you store your sensitive application information e.g passwords, certificate paths, API keys, etc...
- You will need to tweak some values in `.env` to suit your local set up e.g. port number, hostname, SSL settings, etc...


### SSL set-up

- If you wish to work with ssl-enabled endpoints locally, ensure you turn the `NODE_SSL_ENABLED` property to `ON` in the config and also provide paths to your private key and certificate.
- In a typical production environment, this might never be required as the Node app usually sits behind a load balancer with SSL termination.


### Testing

To run the tests, type the following command:
```
npm test
```
For these tests, we've used [Mocha](http://mochajs.org/) with [Sinon](http://sinonjs.org/) and [Chai](http://chaijs.com/).


### Running the app

Before running the application, you'll need to build the src from Typescript to JavaScript, by running:
```
npm run build
```
Then run;
```
npm start
```
To watch for changes with auto restart in your dev environment, run:
```
npm run start:watch
```
...and navigate to http://localhost:3000/ (or whatever hostname/port number combination you've configured the app to)

For SSL connections, navigate to https://localhost:3443


### Empty directories and files

Empty directories and files, wherever you find them, are only there for completeness -- to showcase a folder structure that you should use.


## To-do

- [] Define types and interfaces used in class definitions and methods across the app
- [] Revise linting rule-set
- [] Add pre-commit GIT hooks
- [] Lock down major dependencies to specific versions that are proven to work well


## General notes

 ### 1. Application architecture

- We've opted for the Model-View-Controller design pattern that provides a clear separation of concerns, if executed correctly. This ensures that the task of scaling to a very large codebase with a small or large team(s) remains simple, transparent and minimises source bloat.
- In Node.js parlance, a controller is commonly referred to as a "route" and a controller action is called a "handler". In this starter, we use the "routes" and "handlers" naming convention as opposed to "controllers" and "actions".
- There's  a router file where all route dispatch is handled and requests are fed to the pertinent handlers.
- We have incorporated the concept of "atomic" actions/handlers where all route logic will be neatly tucked away in separate modules without crowding out the primary controller file. It also means that different developers can work on the similarly grouped tasks in the same controller  with little or no versioning conflicts!
- A similar approach to this is route helpers which contain routines and methods that you'd rather see obscured from the primary controller file. Route helpers, if desired, can be created as a sub-folder within the main route folder.
- For this web-starter, controllers have been renamed to `routes` and controller-actions are `route handlers` or quite simply `handlers`. This is so we're in sync with the Node.js/Express.js terminology.


### 2. Unit testing

- This starter kit uses Mocha, Chai and Sinon which have long been the gold standard for writing tests for Node.js apps. Another excellent option is [Jest](https://jestjs.io).


### 3. Coding standards

- Companies House follows the [StandardJS](https://standardjs.com/) coding conventions for both JavaScript and Typescript. Details about these guidelines are documented internally [here](https://github.com/companieshouse/styleguides/blob/main/javascript_node.md).