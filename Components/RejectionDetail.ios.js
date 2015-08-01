'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image,
  Component,
} = React;


var styles = StyleSheet.create({
    container: {
        marginTop: 75,
        alignItems: 'center'
    },
    image: {
        width: 107,
        height: 165,
        padding: 10
    },
    description: {
        padding: 10,
        fontSize: 15,
        color: '#656565'
    }
});

class RejectionDetail extends Component{
  render(){
    var rejection = this.props.rejection;
    var imageURI = (typeof rejection.imageLinks !== 'undefined') ? rejection.imageLinks.thumbnail : '';
    var description = (typeof rejection.body !== 'undefined') ? rejection.body : '';

    return (
      <View style={styles.container}>
      <Image style={styles.image} source={{uri: imageURI}} />
      <Text style={styles.description}>{description}</Text>
      </View>
    );
  }
}

module.exports = RejectionDetail;
