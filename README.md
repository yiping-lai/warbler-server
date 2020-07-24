# Warbler API

## Introduction

This is a web API where users can sign up and sign in to view all messages and create/delete their own messages. 

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
-	Fetches a dictionary of categories in which the keys are the ids and the value is the corresponding string of the category
-	Request Arguments: None
-	Returns: An object with a single key, categories, that contains a object of id: category_string key:value pairs.
{'1' : "Science",
 '2' : "Art",
 '3' : "Geography",
 '4' : "History",
 '5' : "Entertainment",
 '6' : "Sports"}
 
POST '/api/auth/signin'
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
 
 For create, read, and delete messages
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
