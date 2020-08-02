# Warbler API

## Introduction

This is a JSON web API where users can sign up and sign in to view all messages and create/delete their own messages. 

## About the Stack

Backend: NodeJS/Express

Database: MongoDB

### Project Structure

  ```sh
  ├── README.md
  ├── index.js *** the main driver of the app. 
  ├── package.json *** The dependencies we need to install "npm start"
  ├── routes
  │   ├── auth.js 
  │   └── message.js
  ├── models
  │   ├── index.js *** connect with MongoDB database and export all models
  │   ├── message.js
  │   └── user.js
  ├── middleware
  │   └── auth.js *** middleware for user authentication and authorization
  ├── handlers
  │   ├── auth.js
  │   ├── error.js
  │   └── message.js  
  └── node_modules
  ```

## Getting Started

#### Installing Node and NPM

This project depends on Nodejs and Node Package Manager (NPM). Before continuing, you must download and install Node (the download includes NPM) from [https://nodejs.com/en/download](https://nodejs.org/en/download/).

#### Installing project dependencies

This project uses NPM to manage software dependencies. NPM Relies on the package.json file. After cloning, open your terminal and run:

```bash
npm install
```

#### Setting up database

Set up MongoDB database URL in /models/index.js or as an environment variable DATABASEURL.

## Running the server

To run the server, execute:

```bash
node app.js
```

## Sample request for each endpoint. 

For user autourization:
```
POST'/api/auth/signup'
-	Sign up a new user.
-	Request Arguments: username, email, password, and profileImageUrl (optional) to sign up.
      {
        "username":"user0",
        "email":"user0@gmail.com",
        "password":"userpassword",
        "profileImageUrl":"http://myImage.png"
      }
-	Returns an object with id (an assigned user id), username, profileImageUrl, and token (jwt token for user authorization).
      {
        "id": "5f1b56c4be79a6275324a09e",
        "username": "user0",
        "profileImageUrl": "http://myImage.png",
        "token": "easdfjklasdfgDZKE"
      }
 
POST '/api/auth/signin'
-	Fetches a jwt if the user provides correct email/password combination.
-	Request Arguments: email ad password.
    	{
			"email":"user0@gmail.com",
			"password":"userpassword"
       	}
-	Returns an object with id (an assigned user id), username, profileImageUrl, and token (jwt token for user authorization).
    	{
			"id": "5f1b56c4be79a6275324a09e",
			"username": "user0",
			"profileImageUrl": "http://myImage.png",
			"token": "easdfjklasdfgDZKE"
       	}
 ```
 
Create, read, or delete messages:
 ```
 POST '/api/users/:user_id/messages'
-	If a user provides a valid signin token, add a new message that references the user with "user_id" in the database.
-	Request Arguments: a valid bearer jwt and text. 
		{"text":"My first message!!"}
-	Returns: An object with the information of the message created.
		{
			"_id": "5f1b5a4fbe79a6275324a09f",
			"text": "My first message!!",
			"user": {
				"_id": "5f1b56c4be79a6275324a09e",
				"username": "user0",
				"profileImageUrl": "http://myImage.png"
			},
			"createdAt": "2020-07-24T22:01:51.124Z",
			"updatedAt": "2020-07-24T22:01:51.124Z",
			"__v": 0
		}

DELETE '/api/users/:user_id/messages/:message_id'
-	If a user provides a valid signin token, remove the message with message_id that was posted by self.
-	Request Arguments: a valid bearer jwt
-	Returns: An object with the information of the message deleted.
		{
			"_id": "5f1b5a4fbe79a6275324a09f",
			"text": "My first message!!",
			"user": "5f1b56c4be79a6275324a09e",
			"createdAt": "2020-07-24T22:01:51.124Z",
			"updatedAt": "2020-07-24T22:01:51.124Z",
			"__v": 0
		}
```

View all messages
 ```
 GET '/api/messages'
-	If a user provides a valid signin token, fetch a list of messages created by all users sorted by time in descending order.
-	Request Arguments: a valid bearer jwt
-	Returns a list of messages.

	   [
	    {
		"_id": "5f1b4096a4b78801e81e1f29",
		"text": "Hi from user3",
		"user": {
		    "_id": "5f1b408aa4b78801e81e1f28",
		    "username": "user3",
		    "profileImageUrl": ""
		},
		"createdAt": "2020-07-24T20:12:06.416Z",
		"updatedAt": "2020-07-24T20:12:06.416Z",
		"__v": 0
	    },
	    {
		"_id": "5f1b3f20a4b78801e81e1f27",
		"text": "My first message!!!",
		"user": {
		    "_id": "5f1a001229d876027faa6d83",
		    "username": "user2"
		},
		"createdAt": "2020-07-24T20:05:52.818Z",
		"updatedAt": "2020-07-24T20:05:52.818Z",
		"__v": 0
	    }
	]
```

## Reference
Code guided by Udemy - The advanced web developer bootcamp
https://www.udemy.com/course/the-advanced-web-developer-bootcamp/
