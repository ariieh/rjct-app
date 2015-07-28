'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = React;

var Intro = require('./Components/Intro.ios.js');

class RJCT extends React.Component{
  render() {
    return (
      <Intro />
    );
  }
}

AppRegistry.registerComponent('RJCT', () => RJCT);

