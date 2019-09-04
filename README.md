# React-Mocking-Deps-of-Deps-Example
An example repo showing how one can mock dependencies of dependencies in React (with Jest).

## Shoutout To Create-React-App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Deps of Deps In NodeJS

[- Related Deps of Deps Node Examlple Repo -](https://github.com/JimTheMan/NodeJS-Mocking-Deps-of-Deps-Example)

Mocking a dependency's dependencies can be an issue for an OOP programming with services instantiating services instantiating services, and it can cause issues when writing unit tests for backend code as well. Jest is nice in that it has the filepath mocking functinality built-in, but sometimes on the backend you may want to use other testing frameworks such as mocha + chai. You can find examples of this using both [`rewiremock`](https://github.com/theKashey/rewiremock) and [`proxyquire`](https://github.com/thlorenz/proxyquire) in the repo located [here](https://github.com/JimTheMan/NodeJS-Mocking-Deps-of-Deps-Example). 
