const express = require("express");
const cors = require("cors");
const superheroes = require("./database/superheros");
const powers = require("./database/powers");
const app = express();
let port = process.env.PORT || 3001;

app.use(cors());

app.get("/api/v1/superheros/", (req, res) => {
	res.setHeader("Content-Type", "application/json");
	res.setHeader("Server", "express");
	res.end(JSON.stringify(superheroes));
});

// converts javascript object to JSON
// res.end will end the response process
// res is the object

app.get("/api/v1/powers/", (req, res) => {
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify(powers));
});

app.listen(port, () => {
	console.log(`Example app is listening on port http://localhost:${port}`);
});
