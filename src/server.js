// import express
const express = require('express');

// make an instance of express as a customisable server
const app =  express();

// set the port
const PORT = process.env.PORT || 3000;

// configuration goes here
// this lets us read POST'd JSON body data on the request
app.use(express.json());
// Router goes below

// create route
app.get("/", (request, response) => {
    response.json({
        message: "Hello World"
    });
});

app.post("/", (request, response) => {
    // Just copy what the posted data is
    // Attach it to response.body.recieved
    response.json({
        received: request.body.message
    });
});

module.exports = {
    app,
    PORT
};