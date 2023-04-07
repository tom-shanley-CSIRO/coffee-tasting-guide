const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// @desc    Get coffee
// @route   GET /api/coffee
// @access  Private
const getCoffee = async (req, res) => {
  try {
    const data = await prisma.coffee.findMany();
    res.status(200).json({ message: data });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

// @desc    Create coffee
// @route   POST /api/coffee
// @access  Private
const createCoffee = async (req, res) => {
  try {
    await prisma.coffee.create({
      data: {
        name: req.body.name,
        beanOrigin: req.body.beanOrigin,
        beanType: req.body.beanType,
        description: req.body.description,
        roastType: req.body.roastType,
      },
    });
  } catch (err) {}
  res.status(200).json({ message: `${req.body.name} coffee added` });
};

module.exports = {
  getCoffee,
  createCoffee,
};
