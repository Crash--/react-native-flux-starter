var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var Api = require('../utils/api.js');
var CHANGE_EVENT = "change";


var _moviesList = [

];

var isLoaded = false;

function _movieButtonPressed(payload){
  
}


var MoviesStore = assign({}, EventEmitter.prototype, {

  getAll : function(){
      if(isLoaded === true){
        return _moviesList;
      }else{
      _moviesList = Api.getMoviesData();
      isLoaded = true;
      MoviesStore.emitChange();
      return _moviesList;
    }
  },
  isLoaded : function(){
      return isLoaded;
  },
  emitChange:function(){
    console.log("changement emis");
    this.emit(CHANGE_EVENT);
  },


  addChangeListener:function(callback){
    console.log("change listener" + callback);

    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener:function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },
  getState: function() {
    return _moviesList;
  },
  dispatcherIndex:AppDispatcher.register(function(payload){
    console.log('prout');
    var action = payload.action;
    switch(action.actionType) {
      case AppConstants.GET_MOVIES_DATA:
        _persistMoviesData(payload);
        break;
      case AppConstants.MOVIES_BUTTON_PRESSED:
        _movieButtonPressed(payload);
        break;
      default:
        return true;
    }
    MoviesStore.emitChange();
    return true;
  })
})

module.exports = MoviesStore;
