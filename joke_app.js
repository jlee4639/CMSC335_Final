// Imports
const path = require("path");
const express = require("express");
const app = express();
const portNum = 5000;

async function main(){
    // Code for express app
    // Parse data from user form submission
    app.use(express.urlencoded({extended: true}));
    // Be able to parse MongoDB API and Joke API data
    app.use(express.json());
    // Add static files
    app.use(express.static(path.join(__dirname, "public")));

    // Set template views
    app.set("view engine", "ejs");
    app.set("views", path.resolve(__dirname, "templates"));

    // Display homepage
    app.get("/", (request, response) => {
        response.render("homepage");
    });

    app.listen(portNum);
}

main();