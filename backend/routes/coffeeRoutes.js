const express = require("express");
const router = express.Router();
const { getCoffee, createCoffee } = require("../controllers/coffeeController");

router.get("/", getCoffee);
router.post("/", createCoffee);

module.exports = router;
