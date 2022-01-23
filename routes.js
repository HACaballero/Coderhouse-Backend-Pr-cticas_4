const express = require("express");
const { Router } = express;
const Producto = require("./Producto.js");
let producto = new Producto("./productos.txt");

const router = new Router();

router.get("/", (req, res) => {
	producto.getAll().then((productos) => {
		res.send({ productos });
	});
});
router.get("/:id", (req, res) => {
	producto.getById(req.params.id).then((productos) => {
		if (productos.length > 0) {
			res.send({ productos });
		} else {
			res.send({ error: "producto no encontrado" });
		}
	});
});

router.post("/", (req, res) => {
	producto.save(req.body).then((newItem) => {
		res.send(newItem);
	});
});
router.delete("/:id", (req, res) => {
	producto.deleteById(req.params.id).then(() => {
		res.send({ message: "Elemento eliminado" });
	});
});
router.put("/:id", (req, res) => {
	producto.update(req.params.id, req.body).then((item) => {
		res.send(item);
	});
});
module.exports = router;
