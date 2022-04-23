const express = require('express');
const router = express.Router();
const path = require('path')
const fs = require('fs');

const upload = require('../middlewares/multer')

const { audioCreate, audioDestroy, audioUpdate, audioList,getIndexHtml } = require('../controllers/audioController');
const { themeList } = require('../controllers/themeController');
const { recipientList } = require('../controllers/recipientController');
const { index } = require('../controllers/indexController');

router
// .post('/create', audioCreate)

.delete('/delete/:id', audioDestroy)
.patch('/update/:id', audioUpdate)
.get('/audio', audioList)

.get('/theme', themeList)

.get('/recipient', recipientList)

//Recorder Routes
// .get('/', getIndexHtml)
.get('/', index)
  
  .post('/recordaudio', upload.single('audio'), audioCreate)
  
//   .get('/recordings', (req, res) => {
//     let files = fs.readdirSync(path.join(__dirname, 'uploads'));
//     files = files.filter((file) => {
//       // check that the files are audio files
//       const fileNameArr = file.split('.');
//       return fileNameArr[fileNameArr.length - 1] === 'mp3';
//     }).map((file) => `/${file}`);
//     return res.json({ success: true, files });
//   });

module.exports = router;









