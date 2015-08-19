'use strict';

var React = require('react-native');
var MoviesButton = require('./app-moviesbutton');

var {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
  Image
} = React;

var movieScreen = React.createClass({
  render: function() {

    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.posters.thumbnail}} style={styles.thumbnail} />
        <Text>{this.props.title}</Text>
      </View>
    );

  },
});

var styles = StyleSheet.create({
  container: {
    flex : 1,
    paddingTop : 80
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
});


module.exports = movieScreen;
