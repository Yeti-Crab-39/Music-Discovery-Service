const fs = require('fs/promises');
const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

//mongoDB connection
mongoose.connect(
  'mongodb+srv://matthew0505:u3F0swd1EWxpmonV@yeti-music.wpwzonm.mongodb.net/?retryWrites=true&w=majority'
);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

//routers
const apiRouter = require('./routes/api');
const authRouter = require('./routes/auth');
const sessionController = require('./controllers/sessionController')

//handle parsing request body
app.use(express.json());
app.use(cookieParser());

//authorized routes
//display homepage ONCE AUTHORIZED
app.get('/', sessionController.isLoggedIn, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

//signup page where login page is displayed and post-request is handled
app.use('/auth', authRouter);

//routing to apiRouter upon api call
app.use('/user', sessionController.isLoggedIn, apiRouter);
// app.use(express.urlencoded({ extended: true}));
// app.use(express.static(path.join(__dirname, '../client')));

// catch-all route handler for any requests to an unknown route
app.use((req, res) => {
  res.status(404).send('This page does not exist');
});

//global error handler
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occured' },
  };
  const errorObj = Object.assign(defaultError, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
