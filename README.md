# Warbler API

## Introduction

This is a JSON web API where users can sign up and sign in to view all messages and create/delete their own messages. 

## About the Stack

Backend: NodeJS/Express

Database: MongoDB

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
 POST '/api/users/:id/messages'
-	Fetches a dictionary of categories in which the keys are the ids and the value is the corresponding string of the category
-	Request Arguments: None
-	Returns: An object with a single key, categories, that contains a object of id: category_string key:value pairs.
{'1' : "Science",
 '2' : "Art",
 '3' : "Geography",
 '4' : "History",
 '5' : "Entertainment",
 '6' : "Sports"}

GET '/api/users/:id/messages/:message_id'
-	Fetches a dictionary of categories in which the keys are the ids and the value is the corresponding string of the category
-	Request Arguments: None
-	Returns: An object with a single key, categories, that contains a object of id: category_string key:value pairs.
{'1' : "Science",
 '2' : "Art",
 '3' : "Geography",
 '4' : "History",
 '5' : "Entertainment",
 '6' : "Sports"}

DELETE '/api/users/:id/messages/:message_id'
-	Fetches a dictionary of categories in which the keys are the ids and the value is the corresponding string of the category
-	Request Arguments: None
-	Returns: An object with a single key, categories, that contains a object of id: category_string key:value pairs.
{'1' : "Science",
 '2' : "Art",
 '3' : "Geography",
 '4' : "History",
 '5' : "Entertainment",
 '6' : "Sports"}
```

View all messages
 ```
 GET '/api/messages'
-	Fetches a dictionary of categories in which the keys are the ids and the value is the corresponding string of the category
-	Request Arguments: None
-	Returns: An object with a single key, categories, that contains a object of id: category_string key:value pairs.
{'1' : "Science",
 '2' : "Art",
 '3' : "Geography",
 '4' : "History",
 '5' : "Entertainment",
 '6' : "Sports"}\
  ```

