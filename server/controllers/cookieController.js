const cookieController = {};

/**
 * setSSIDCookie - store the user id in a cookie
 */
cookieController.setSSIDCookie = (req, res, next) => {
  res.cookie('ssid', res.locals.id, { httpOnly: true });
  return next();
};

module.exports = cookieController;
