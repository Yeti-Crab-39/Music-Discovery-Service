const fs = require('fs/promises');
const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

mongoose.connect(
  'mongodb+srv://matthew0505:u3F0swd1EWxpmonV@yeti-music.wpwzonm.mongodb.net/?retryWrites=true&w=majority'
);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

//routers
// const apiRouter = require('./routes/api');
const authRouter = require('./routes/auth');
const sessionController = require('./controllers/sessionController');

const apiRouter = require('./routes/api');

//handle parsing request body
app.use(express.json());
app.use(cookieParser());
app.use(cors());

//authorized routes
//display homepage ONCE AUTHORIZED
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.use('/test/:id', () => console.log('in the backend'))

// //signup page where login page is displayed and post-request is handled
app.use('/auth', authRouter);

// //OAUTH Handler
let request = require('request'); // "Request" library
let querystring = require('querystring');

let client_id = 'a4ab59da815f4446893f930f835d8c2c'; // Your client id
let client_secret = '90a4bc6259f3447f93efa980449ecadc'; // Your secret
let redirect_uri = 'http://localhost:3000/callback'; // Your redirect uri

let generateRandomString = function (length) {
  let text = '';
  let possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

let stateKey = 'spotify_auth_state';

app.use(cors()).use(cookieParser());

// performing OAuth login request to spotify
app.get('/login', function (req, res) {
  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  let scope = 'user-read-private user-read-email';
  res.redirect(
    'https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,
      })
  );
});

//returning the code and state in req.query once approved
app.get('/callback', function (req, res) {
  // your application requests refresh and access tokens
  // after checking the state parameter
  var code = req.query.code || null;
  var state = req.query.state || null;

  res.clearCookie(stateKey);
  let authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: redirect_uri,
      grant_type: 'authorization_code',
    },
    headers: {
      Authorization:
        'Basic ' +
        new Buffer(client_id + ':' + client_secret).toString('base64'),
    },
    json: true,
  };

  //performing post request
  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token,
        refresh_token = body.refresh_token;

      // !! CHANGE TO SONG OF INTEREST !!
      let searchInput = 'Motion';

      var options = {
        url:
          'https://api.spotify.com/v1/search?q=' +
          searchInput +
          '&type=track' +
          '&limit=1',
        headers: {
          Authorization: 'Bearer ' + access_token,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        json: true,
      };

      // use the access token to access the Spotify Web API
      request.get(options, function (error, response, body) {
        // !! CHANGE WHAT WE DO WITH THE ID HERE !!
        console.log(body.tracks.id);
      });

      // redirecting to home endpoint after completion
      res.redirect('http://localhost:8080');
    } else {
      res.redirect(
        '/#' +
          querystring.stringify({
            error: 'invalid_token',
          })
      );
    }
  });
});

//routing to apiRouter upon api call
// app.use('/user', sessionController.isLoggedIn, apiRouter);
// app.use(express.urlencoded({ extended: true}));
// app.use(express.static(path.join(__dirname, '../client')));

//routers
app.use('/user', apiRouter);

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
