'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View
} = React;

var styles = StyleSheet.create({
    description: {
        fontSize: 20,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
      <View style={styles.container}>
      <Text style={styles.description}>
      Rejections View
      </Text>
      </View>
    )
  }
}

module.exports = RejectionsTab;
