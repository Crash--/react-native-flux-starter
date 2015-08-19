'use strict';

var React = require('react-native');
var { 
  AppRegistry, 
  Image, 
  StyleSheet, 
  Text, 
  View, 
  ListView,
} = React;


var FluxWidget = require('./App/components/app-fluxwidget');
var MoviesStore = require('./App/stores/app-movies.js');

function getMoviesState(){
  var allMovies =   MoviesStore.getAll();
  var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  return {
    allMovies : allMovies,
    loaded : MoviesStore.isLoaded(),
    dataSource: ds.cloneWithRows(allMovies)
  }
};


var FluxExample = React.createClass({
  getInitialState: function() { 
    return getMoviesState();
  },
  componentDidMount: function() {   
    MoviesStore.addChangeListener(this._onChange);     
  },  
   _onChange: function() {
   this.setState(getMoviesState());
  },

  render: function() { 
    if(this.state.error) {
      return this.renderErrorView();
    } else if (!this.state.loaded) { 
      return this.renderLoadingView(); 
    }
    
    return ( 
      <View style={styles.container}>
        <ListView 
          dataSource={this.state.dataSource} 
          renderRow={this.renderMovie} 
          style={styles.listView} /> 
      </View>

    );

  },
  renderLoadingView: function() { 
    return ( 
      <View style={styles.container}> 
      <Text> Loading movies... </Text> 
      </View> 
      ); 
  },
  renderErrorView: function() { 
    return ( 
      <View style={styles.container}> 
      <Text> Error: {this.state.error} </Text> 
      </View> 
      ); 
  },
  renderMovie: function(movie) {
    return (
      <View style={styles.container}>
        <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>          
        </View>
        <FluxWidget movie ={{...movie}}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  listView: { 
    paddingTop: 20, 
    backgroundColor: '#F5FCFF', 
  },
  container: { 
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#F5FCFF', 
  },
  fluxwidget: { 
    backgroundColor: 'green',
    //flex: 2, 
    fontSize: 30
  },
  separator: { 
    height: 0.5,
    backgroundColor: '#CCCCCC', 
    marginTop: 10,
  },
  moviesstyle: { 
    flex: 1, 
    flexDirection: 'row',
    textAlign: 'center', 
  },
  rightContainer: { 
    flex: 1, 
  },
  thumbnail: { 
    width: 53, 
    height: 81, 
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
  },
  title: { 
    fontSize: 20, 
    marginBottom: 8, 
    textAlign: 'center', 
  }, 
  year: { 
    textAlign: 'center', 
  },
});

AppRegistry.registerComponent('FluxExample', () => FluxExample);
