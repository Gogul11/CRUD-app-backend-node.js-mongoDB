# CRUD application using node node and mongoDB

This is an **CRUD(Create-Read-Update-Delete)** app backend developed using **node.js** as backend and **MongoDB** as database.

The Routes are specified for different methods (GET, POST, PUT, DELETE) are developed using REST Api.

Mongoose is used to connect with database.

To establish a connection with the database : 
- **mongoose.connect(Connection string)**

After establishing the connection the next step is to create a schema for the collection.
Schema for collection is like a structure for the collection.
The schema can be defined using : 
- **mongoose.Schema(schema-types)**

After defining the schema the next step is to define model (Collection) and this can be done using : 
- **mongoose.model(model_name, Schema)**


## ROUTES :
1. **GET** "/": Fetches and returns all documents from the database with fields name, age, and email.
2. **POST** "/add": Adds a new document to the database using the data provided in the request body.
3. **PUT** "/update": Updates a document in the database based on the name, age, or email provided in  the request body.
4. **DELETE** "/del": Deletes a document from the database based on the name, age, or email provided in the request body.

## Functionality: 
The application provides CRUD operations on a MongoDB collection via HTTP endpoints.

## Error Handling: 
Basic error handling is implemented for each route, returning a status code and message on failure.

## Middleware: 
Uses Express middleware for JSON parsing and CORS handling.

## Database Connection: 
Establishes a connection to MongoDB using Mongoose and starts the server if successful.
Here MongoDB compass is used for monitering databases.
