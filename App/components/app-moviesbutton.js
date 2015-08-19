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
} = React;

var {
  MKButton,
  MKColor,
} = MK;

var MoviesButton = React.createClass({
  render: function() { 
    return ( 
      <MKButton backgroundColor={MKColor.Teal} onPress={this._handlePress} shadowRadius={2}
  shadowOffset={{width:0, height:2}}
  shadowOpacity={.7} shadowColor="black" >
        <Text style={{color : 'white', fontWeight : 'bold'}}>Press Me!</Text>
      </MKButton>
    );

  },
  _handlePress(event) {
    console.log('Pressed!');
    console.log(this.props.movie.title);
    // this button is triggering function
    // in movies stores called _movieButtonPressed
    MoviesActions.pressMoviesButton();
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