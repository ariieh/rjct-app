'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} = React;

var RejectionsList = require('./RejectionsList.ios.js');

var styles = StyleSheet.create({
    container: {
      flex: 1

    }
});

class RejectionsTab extends React.Component{

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
      initialRoute={{title: "Rejections List", component: RejectionsList}}
      />
    )
  }
}

module.exports = RejectionsTab;
