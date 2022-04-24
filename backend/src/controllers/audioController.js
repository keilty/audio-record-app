const db = require("../database/models");
const path = require('path');

module.exports = {
  audioCreate: async (req, res) => {
    try {
      const { theme_id, recipient_id } = req.body;
      await db.Audio.create({
        name: req.file.filename,
        theme_id: theme_id,
        recipient_id: recipient_id,
      });
      res.status(200).send({ msg: "The audio was created" });
    } catch (error) {
      // next(error);
      res.status(500).send({ msg: "There was an error" });
    }
  },

  audioDestroy: async (req, res) => {
    const { id } = req.params;
    try {
      await db.Audio.destroy({
        where: { id: id },
      });
      let recipients = db.Recipient.findAll()
      let themes = db.Theme.findAll()
      let audios = db.Audio.findAll({
      include: ['theme', 'recipient']
    }) 

      Promise.all([recipients, themes, audios])
      .then(([recipients, themes, audios]) => {
          return res.render('index', { 
              recipients, 
              themes,
              audios            
          })
      })
      // res.status(200).send({ msg: "The audio has been deleted" });
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

      let recipients = db.Recipient.findAll()
      let themes = db.Theme.findAll()
      let audios = db.Audio.findAll({
      include: ['theme', 'recipient']
    }) 

      Promise.all([recipients, themes, audios])
      .then(([recipients, themes, audios]) => {
          return res.render('index', { 
              recipients, 
              themes,
              audios            
          })
      })
      // res.status(201).send({ msg: "The audio has been updated" });
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
  getIndexHtml: (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  }
};