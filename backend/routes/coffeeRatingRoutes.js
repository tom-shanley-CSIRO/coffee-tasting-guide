const express = require("express");
const router = express.Router();
const { getCoffeeRatings } = require("../controllers/coffeeRatingController");

router.get("/", getCoffeeRatings);

module.exports = router;
