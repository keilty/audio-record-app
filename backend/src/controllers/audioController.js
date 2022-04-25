const db = require("../database/models");
const path = require('path');

module.exports = {
  audioCreate: (req, res) => {

    const { theme_id, recipient_id } = req.body;
    db.Audio.create({
      name: req.file.filename,
      theme_id: theme_id,
      recipient_id: recipient_id,
    })
      .then(() => {
        res.status(200).send({ msg: "The audio was created" });
      })
      .catch((error) => {
        res.status(500).send({ msg: "There was an error" });
      })
  },

  audioDestroy: (req, res) => {

    const { id } = req.params;
    db.Audio.destroy({
      where: {
        id: id
      }
    })
      .then(() => {
        return res.redirect('/')
      })
      .catch((error) => {
        res.send(error)
      })
  },

  audioUpdate: (req, res) => {

    const { id } = req.params;
    const { theme_id } = req.body;
    db.Audio.update(
      {
        theme_id: theme_id,
      },
      {
        where: {
          id: id,
        },
      })
      .then(() => {
        return res.redirect('/')
      })
      .catch((error) => {
        res.send(error)
      })
  },

  audioList: (req, res) => {

    db.Audio.findAll()
      .then(() => {
        return res.status(200).json(audioList);
      })
      .catch((error) => {
        res.send(error)
      })
  }
};