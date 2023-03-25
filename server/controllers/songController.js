//getting songs from the API
const songController = {
  getSong(req, res, next) {
    res.locals.song = song;
    return next();
  },
};

module.exports = songController;
