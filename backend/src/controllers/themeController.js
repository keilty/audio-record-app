const db = require("../database/models");

module.exports = {
  themeList: async (req, res) => {
    try {
      const themeList = await db.Theme.findAll();
      res.status(200).json(themeList);
    } catch (error) {
      next(error);
    }
  },
};