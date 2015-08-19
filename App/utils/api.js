var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');
// var request = require('superagent');


var API_KEY = 'wgcxhbxsrzrmjnzmh4d3hnbg'; 
var API_URL = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json'; 
var PAGE_SIZE = 25; 
var PARAMS = '?apikey=' + API_KEY + '&page_limit=' + PAGE_SIZE; 
var REQUEST_URL = API_URL + PARAMS;


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


// THIS API UTILS ARE STILL IN PROGRESS

var Api = {
    getMoviesData: function() {
    		return MOCKED_MOVIES_DATA;
    }
};

module.exports = Api;


