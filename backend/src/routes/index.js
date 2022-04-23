var express = require('express');
var router = express.Router();

const { audioCreate, audioDestroy, audioUpdate, audioList } = require('../controllers/audioController');
const { themeList } = require('../controllers/themeController');
const { recipientList } = require('../controllers/recipientController');

router
.post('/create', audioCreate)
.delete('/delete/:id', audioDestroy)
.patch('/update/:id', audioUpdate)
.get('/audio', audioList)

.get('/theme', themeList)

.get('/recipient', recipientList)

module.exports = router;
