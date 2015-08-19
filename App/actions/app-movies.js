var Api = require('../utils/api');
var AppConstants = require('../constants/app-constants.js');
var AppDispatcher = require('../dispatchers/app-dispatcher.js');

var MoviesActions = {
  getMoviesData: function() {
     var payload = {
      actionType: AppConstants.GET_MOVIES_DATA
    };
    AppDispatcher.handleViewAction(payload);
  },
  pressMoviesButton: function() {
    var payload = {
      actionType: AppConstants.MOVIES_BUTTON_PRESSED
    };
    AppDispatcher.handleViewAction(payload);
  },
}

module.exports = MoviesActions;