// @desc    Get coffeeRatings
// @route   GET /api/coffee-ratings
// @access  Private
const getCoffeeRatings = async (req, res) => {
  res.status(200).json({ message: "Coffee Scores" });
};

module.exports = {
  getCoffeeRatings,
};
