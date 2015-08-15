'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = React;

// var Intro = require('./Components/Intro.ios.js');
var TabBar = require('./Components/TabBar.ios.js');
var DBUtils = require('./Data/utils.js');

class RJCT extends React.Component{
  constructor(props){
    super(props);
    DBUtils.initializeDB(function(results){console.log(results)});
    this.state = {
      user: null
    };
  }

  render() {
    // if (this.state.user){
      return (
        <TabBar />
      );
    // } else {
    //   return (
    //     <Intro />
    //   )
    // }
  }
}

AppRegistry.registerComponent('RJCT', () => RJCT);
