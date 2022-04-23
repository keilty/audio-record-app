const db = require("../database/models");

module.exports = {
  recipientList: async (req, res) => {
    try {
      const audioList = await db.Recipient.findAll();
      res.status(200).json(audioList);
    } catch (error) {
      next(error);
    }
  },
};