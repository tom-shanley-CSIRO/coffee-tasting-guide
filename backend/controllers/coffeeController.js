// @desc    Get coffee
// @route   GET /api/coffee
// @access  Private
const getCoffee = async (req, res) => {
  res.status(200).json({ message: "Coffee" });
};

// @desc    Create coffee
// @route   POST /api/coffee
// @access  Private
const createCoffee = async (req, res) => {
  res.status(200).json({ message: "Create Coffee" });
};

module.exports = {
  getCoffee,
  createCoffee,
};
