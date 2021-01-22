## Table of Contents
1. [General Info](#general-info)
2. [Repository content](#technologies)
3. [Technologies](#technologies)
4. [Installation](#installation)
5. [Try the example](#try-the-example)

### General Info
***
This is an example of a unit test of javascript file. The target of this file is to get users thru the API located in https://dummyapi.io/data/api

## Repository content
| File | Content description | 
|:--------------|:-------------:|
| readUsers.js | Subject under test | 
| readUsers.test.js | test | 
| /exceptions/notFound.js | error manager | 
| /exceptions/validation.js | error manager  |
| package.json | dependencies. Use by npm install command|

## Technologies
***
A list of technologies used within the project:
* [node](https://nodejs.org/es/): Version 12.18.2
* [axios](https://github.com/axios/axios): Version 0.19.0
* [mocha](https://mochajs.org/): Version 6.1.4
* [chai](https://www.chaijs.com/): Version 4.2.0
## Installation
***
To try this example is necessary install node. Then: 
```
$ git clone https://github.com/MarisaAfuera/exampleMochaChai.git
$ cd exampleMochaChai
$ npm install
$ npm start
```
## Try the example
***
Execute the command:
```
mocha readUsers.test.js 
```

You'll see the test result
