const { Session } = require('../models/sessionModel');

const sessionController = {};

sessionController.isLoggedIn = (req, res, next) => {
  Session.findOne({ cookieId: req.cookies.ssid }).then((data) => {
    if (data) {
      return next();
    } else {
      res.redirect('/auth');
      return;
    }
  });
};

sessionController.startSession = (req, res, next) => {
  //write code here
  Session.create({
    cookieId: res.locals.id,
  }).then(() => {
    return next();
  });
};

module.exports = sessionController;
