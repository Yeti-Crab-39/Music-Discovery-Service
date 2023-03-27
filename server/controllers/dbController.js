//manipulating the database

const { User } = require('../models/Models');
const { Music } = require('../models/Models');

// const musicSchema = new Schema({
//   Song: { type: String, required: true },
//   Artist: { type: String, required: true },
// })

// const userSchema = new Schema({
// firstName: { type: String, required: true },
// lastName: { type: String, required: true },
// userName: { type: String, required: true },
// password: { type: String, required: true },
// topTen: { type: [musicSchema], required: false }
// });

const dbController = {};

dbController.getAllSongs = (req, res, next) => {
  Music.find({})
    .then((response) => {
      res.locals.allSongs = response;
      return next();
    })
    .catch((err) => {
      return next({
        log: `error getting songs in dbController.getAllSongs, ${err}`,
        message: { err: 'middleware error in getAllSongs' },
      });
    });
};

dbController.addSong = (req, res, next) => {
  const { song, artist, uri } = req.body;
  console.log('req. body inside addSong is... ', req.body);
  console.log('song, artis, uri is... ', song, artist, uri);
  Music.create({ Song: song, Artist: artist, uri: uri })
    .then((song) => {
      res.locals.addedSong = song;
      return next();
    })
    .catch((err) => {
      return next({
        log: `error adding song in dbController.addSong, ${err}`,
        message: { err: 'middleware error in addSong' },
      });
    });
};

dbController.deleteSong = (req, res, next) => {
  const { Song } = req.body;
  console.log('reiceved from req.body: ', req.body);
  console.log('reiceved from req.body.song: ', Song);
  Music.findOneAndDelete({ Song: Song })
    .then((deletedSong) => {
      console.log('Deleted song in dbController: ', deletedSong);
      res.locals.deletedSong = deletedSong;
      return next();
    })
    .catch((err) => {
      return next({
        log: `error deleting song in dbController.deleteSong, ${err}`,
        message: { err: 'middleware error in deleteSong' },
      });
    });
};

dbController.updateSong = (req, res, next) => {
  res.locals.updatedSong = updatedSong;
  return next();
};

module.exports = dbController;
