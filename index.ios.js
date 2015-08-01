'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = React;

var Intro = require('./Components/Intro.ios.js');
var TabBar = require('./Components/TabBar.ios.js');


class RJCT extends React.Component{
  render() {
    return (
      <TabBar />
    );
  }
}

AppRegistry.registerComponent('RJCT', () => RJCT);
