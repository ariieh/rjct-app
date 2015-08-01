'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = React;

var RejectionList = require('./RejectionList.ios.js');

var styles = StyleSheet.create({
    container: {
      flex: 1

    }
});

class RejectionTab extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      rejections: []
    }
  }

  render(){
    return(
      <NavigatorIOS
      style={styles.container}
      initialRoute={{title: "Rejection List", component: RejectionList}}
      />
    )
  }
}

module.exports = RejectionTab;
