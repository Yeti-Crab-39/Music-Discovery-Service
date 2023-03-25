const User = require('../models/Models');
const cookieController = {};

/**
 * setSSIDCookie - store the user id in a cookie
 */
cookieController.setSSIDCookie = (req, res, next) => {
  res.cookie('ssid', res.locals.id, { httpOnly: true });
  next();
  return;
};

module.exports = cookieController;
