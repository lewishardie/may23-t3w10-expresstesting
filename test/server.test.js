// Test the routes from server.js

const {app} = require("../src/server");

// import supertest so we can manage the app/server in tests properly
const request = require('supertest');

describe("Server root route exists and returns hello world", () => {
    test ("Root route exists and returns status 200", async () => {
        const responseResult = await request(app).get("/");
        expect(responseResult.statusCode).toEqual(200);
    });
    test("Root route exists and returns hello world as a message", async () => {
        const response = await request(app).get("/");
        expect(response.body.message).toEqual("Hello World");
    });
});

describe("Serer route which doesn't exists returns 404", () => {
    test("/welcome route return 404 not found", async () => {
        const responseResult = await request(app).get("/welcome");
        expect(responseResult.statusCode).toEqual(404);
    });
});

describe("POST to root route copies message in request body", () => {
    test("POST request.body.message of Hello World returns received of Hello World", async () => {
        let messageToSend = "Hello World";
        
        const response = await request(app)
        .post('/')
        .send({
            message: messageToSend
        });

        expect(response.body.received).toEqual(messageToSend);
    });
});