const express = require("express");
const superheroes = require("./database/superheros");
const app = express();
let port = process.env.PORT || 3000;

app.get("/api/v1/superheros/", (req, res) => {
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify(superheroes));
});

app.listen(port, () => {
	console.log(`Example app is listening on port http://localhost:${port}`);
});
