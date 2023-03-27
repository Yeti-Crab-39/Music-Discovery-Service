const express = require('express');
const path = require('path');
const router = express.Router();

//import controllers
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');

//directs the user follow the post request, creates a user, sets an SSID and starts a session
router.post('/submit',
  userController.createUser,
  cookieController.setSSIDCookie,
  (req, res) => {
    return res.status(200).json(res.locals.id);
  });

//handles verifying user upon logging in
router.post(
  '/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  (req, res) => {
    return res.status(200).json(res.locals.id);
  }
);

module.exports = router;
