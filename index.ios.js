'use strict';

var React = require('react-native');
var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet
} = React;



var App = require('./App/components/app.js');

var FluxExample = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {

  },
  render: function() {

    return (
      <NavigatorIOS style={styles.container}
      initialRoute={{
        component: App,
        title: 'Movies',
      }}
    />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
AppRegistry.registerComponent('FluxExample', () => FluxExample);

module.exports = FluxExample;
