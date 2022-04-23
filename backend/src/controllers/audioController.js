const db = require("../database/models");

module.exports = {
  audioCreate: async (req, res) => {
    try {
      const { name, date_time, theme_id, recipient_id } = req.body;
      await db.Audio.create({
        name: name,
        date_time: date_time,
        theme_id: theme_id,
        recipient_id: recipient_id,
      });
      res.status(200).send({ msg: "The audio was created" });
    } catch (error) {
      next(error);
    }
  },

  audioDestroy: async (req, res) => {
    const { id } = req.params;
    try {
      await db.Audio.destroy({
        where: { id: id },
      });
      return res.status(201).send({ msg: "The audio was deleted" });
    } catch (error) {
      res.status(500).send({ msg: "The audio has not been deleted" });
    }
  },

  audioUpdate: async (req, res) => {
    const { id } = req.params;
    const { theme_id } = req.body;
    try {
      await db.Audio.update(
        {
          theme_id: theme_id,
        },
        {
          where: {
            id: id,
          },
        }
      );
      return res.status(201).send({ msg: "The audio was updated" });
    } catch (error) {
      res.status(500).send(error);
    }
  },

  audioList: async (req, res) => {
    try {
      const audioList = await db.Audio.findAll();
      res.status(200).json(audioList);
    } catch (error) {
      next(error);
    }
  },
};