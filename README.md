# Artem Pichugn Prtfolio

Artem Pichugn portfolio web site.
[**D**emo](https://artempichugin.herokuapp.com)

This project is intended to be used as a quickstarter for building a
[**M**ongo](https://www.mongodb.com/) [**E**xpress](https://expressjs.com/) [**V**ueJS](https://vuejs.org/) [**N**ode](https://nodejs.org/en/) stack. This is similar to a MEAN stack, except Angular has been swapped out for a VueJS single page application rendered on the client side.

## Technologies
This project uses:

[Mongo](https://www.mongodb.com/) for a NoSQL database.

[Express](https://expressjs.com/) For an HTTP Server

[VueJS](https://vuejs.org/) For Views, with the [Vuetify](https://vuetifyjs.com/) Material Design Framework

[Node](https://nodejs.org/en/) For a JavaScript runtime

## Installation

To install this project simply clone or download the repo:

`git clone https://github.com/aarrttzz/mevn-stack-master.git <dir name>`

`cd <dir name>`

`npm install`

`cp .env.example .env` then add in your local Mongo URI **Changing the PORT variable in the .env will require you to change it in the `views/config/http.js` file.**

### Setup/Development

To develop using this project you can run 

`npm run dev:serve`

and

`npm run dev:client` 

in seperate terminal instances. This will allow hot reloading of both changes to the server and changes to the client.

The server will require you to be running a local instance of [MongoDB](https://www.mongodb.com/).

`npm run static` will build the client-side JavaScript and start the hot reloading of the server environment. `npm run dev:serve` can also be used to just start the API if you are working on that prior to worrying about the client.

#### Scripts

A more detailed breakdown of the scripts are as follows:

| Command `npm run`| Server | Client |
| :------------- |:------------- |:- 
| `start`| Static| Static (requires `npm run build`)
| `dev:serve`      	| Hot reload | Static
| `dev:client` 		| None | Hot Reload 
| `build` | None | Bundled by Webpack
| `static` | Hot reload | Bundled by Webpack

### Requirements

This project will require:

* Node >=7.0

### Dependencies 

* Dependencies Via NPM
	* [Axios](https://github.com/axios/axios) For client side HTTP requests
	* [cors](https://github.com/expressjs/cors) For CORS during development
	* [dotenv](https://github.com/motdotla/dotenv) Loads our .env variables
	* [vue](https://vuejs.org/) Realtime data binding on the frontend
	* [vuetify](https://vuetifyjs.com/vuetify/quick-start) Material design for Vue
	* [vue-router](https://github.com/vuejs/vue-router) Router for the SPA 

