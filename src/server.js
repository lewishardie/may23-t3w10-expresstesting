// import express
const express = require('express');

// make an instance of express as a customisable server
const app =  express();

// set the port
const PORT = process.env.PORT || 3000;

// create route
app.get("/", (request, response) => {
    response.json({
        message: "Hello World"
    });
});

module.exports = {
    app,
    PORT
}