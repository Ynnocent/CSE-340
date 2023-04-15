/* ******************************************
 * This is the application server
 * ******************************************/
const express = require("express");

const app = express();

// Server Host name and port

const HOST = 'localhost';
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Welcome here!")
});

app.listen(PORT, ()=> {
    console.log(`This trial app is listening on ${HOST}:${PORT}`)
});