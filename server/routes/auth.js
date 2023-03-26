const express = require('express');
const path = require('path');
const router = express.Router();

//import controllers
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');

//directs the user follow the post request, creates a user, sets an SSID and starts a session
router.post('/submit', (req, res) => {
  userController.createUser,
    cookieController.setSSIDCookie,
    sessionController.startSession,
    res.sendStatus('/');
  return;
});

//handles verifying user upon logging in
router.post(
  '/login',
  userController.verifyUser,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  (req, res) => {
    // what should happen here on successful log in?
    res.redirect('/');
    return;
  }
);

module.exports = router;
