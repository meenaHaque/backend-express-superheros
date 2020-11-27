const express = require("express");
const cors = require("cors"); // middleware
const superheroes = require("./database/superheros");
const app = express();
let port = process.env.PORT || 3001;

app.use(cors());

app.get("/api/v1/superheros/", (req, res) => {
	res.setHeader("Content-Type", "application/json");
	res.end(JSON.stringify(superheroes));
});

app.listen(port, () => {
	console.log(`Example app is listening on port http://localhost:${port}`);
});
