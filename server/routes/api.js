const express = require('express');
const path = require('path');
const dbController = require('../controllers/dbController');
const songController = require('../controllers/songController');

const router = express.Router();

router.get('/', dbController.getAllSongs, (req, res) => {
  return res.status(302).send(res.locals.allSongs);
});
//get a song from the api
router.get('/getSong', songController.getSong, (req, res) => {
  return res.status(200).send(res.locals.song);
});
//
router.post('/addSong', dbController.addSong, (req, res) => {
  return res.status(201).send(res.locals.addedSong);
});

//maybe don't need? need to consult about this
router.delete('/deleteSong', dbController.deleteSong, (req, res) => {
  return res.status(200).send('Deleted song' + res.locals.deletedSong);
});

//update a song from our database list
router.patch('/updateSong', dbController.updateSong, (req, res) => {
  return res.status(200).send(res.locals.updatedSong);
});

module.exports = router;
