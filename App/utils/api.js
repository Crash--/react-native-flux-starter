var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');


var MOCKED_MOVIES_DATA = [
  {
    title: 'Title',
    year: '2015',
    posters: {
      thumbnail: 'http://i.imgur.com/UePbdph.jpg'
    }
  },
  {
    title: '2nd',
    year: '2015',
    posters: {
      thumbnail: 'http://i.imgur.com/3qflKhA.jpg'
    }
  },
];



var Api = {
    getMoviesData: function() {
    		return MOCKED_MOVIES_DATA;
    }
};

module.exports = Api;
