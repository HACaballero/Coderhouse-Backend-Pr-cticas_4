const express = require("express");
var bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static("public"));

const router = require("./routes.js");

app.use("/api/productos", router);

app
	.listen(8080, () => console.log("Server iniciado en el puerto 8080"))
	.on("error", function (err) {
		console.log("Error al querer conectarse al puerto 8080");
	});
