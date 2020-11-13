const express = require("express");
const app = express();
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
	console.log(`Example app is listening on port http://localhost:${port}`);
});
