'use strict';

var React = require('react-native');
var MoviesActions = require('../actions/app-movies');
var MoviesStore = require('../stores/app-movies');
var MK = require('react-native-material-kit');

var {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  NavigatorIOS
} = React;

var {
  MKButton,
  MKColor,
} = MK;

var movieScreen = require('./app-moviescreen.js');

var MoviesButton = React.createClass({
  render: function() {
    return (
      <MKButton backgroundColor={MKColor.Teal} onPress={this._handlePress}
      shadowRadius={2} shadowOffset={{width:0, height:2}}  shadowOpacity={.7}
      shadowColor="black">
        <Text style={{color : 'white', fontWeight : 'bold'}}>See details!</Text>
      </MKButton>
    );

  },
  _handlePress(event) {
    //! TODO
    /* I've an issue here. What is the best way to achieve the push? Is it one of
    the responsability of the store? Weird if this is the case, right?
    But if it's not, it has to be done here. So, the Action/Store is no more needed ?
    */
    
    MoviesActions.pressMoviesButton();

    this.props.navigator.push({
      title: this.props.movie.title,
      component: movieScreen,
      passProps: this.props.movie,
    });


  },
});

var styles = StyleSheet.create({
  fluxwidget: {
    backgroundColor: 'green',
    flex: 2,
    fontSize: 30
  },
});


module.exports = MoviesButton;
