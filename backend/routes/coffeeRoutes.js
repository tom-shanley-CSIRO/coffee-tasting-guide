const express = require("express");
const router = express.Router();
const { getCoffee } = require("../controllers/coffeeController");

router.get("/", getCoffee);

module.exports = router;
