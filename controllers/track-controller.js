const knex = require("knex")(require("../knexfile"));

const index = async (_req, res) => {
  try {
    const data = await knex("tracks");
    res.json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Error connecting to database`,
    });
  }
};

module.exports = {
  index,
};
