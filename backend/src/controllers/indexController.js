const db = require("../database/models");

module.exports = {
  index: (req, res) => {

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
        .catch(error => console.log(error))  
  }
};