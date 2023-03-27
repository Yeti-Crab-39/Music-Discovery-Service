//getting songs from the API****NOT BEING USED*****
const songController = {
  getSong(req, res, next) {
    console.log('am in songController');
    function getRandomSearch() {
      // A list of all characters that can be chosen.
      const characters = 'abcdefghijklmnopqrstuvwxyz';

      // Gets a random character from the characters string.
      const randomCharacter = characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      let randomSearch = '';

      // Places the wildcard character at the beginning, or both beginning and end, randomly.
      switch (Math.round(Math.random())) {
        case 0:
          randomSearch = randomCharacter + '%';
          break;
        case 1:
          randomSearch = '%' + randomCharacter + '%';
          break;
      }

      return randomSearch;
    }
    const randomOffset = Math.floor(Math.random() * 10000);
    fetch(
      'https://api.spotify.com/v1/search?q=' +
        getRandomSearch() +
        '&type=track&offset=' +
        randomOffset
    )
      .then((response) => response.json())
      .then((response) => console.log(response));
    res.locals.song = song;
    return next();
  },
};

module.exports = songController;
