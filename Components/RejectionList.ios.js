'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableHighlight,
  Component,
  ActivityIndicatorIOS
} = React;

var RejectionDetail = require('./RejectionDetail.ios.js');


var FAKE_REJECTION_DATA = [
  {rejectionInfo: {date: "6/10/15", title: "Best rejection evar!", description: "Awesome rejection!", imageLinks: {thumbnail: "http://dgicdplf3pvka.cloudfront.net/images/dogbreeds/large/Welsh-Corgi-Pembroke.jpg"}}}
];

var CORGI_URI =  "http://dgicdplf3pvka.cloudfront.net/images/dogbreeds/large/Welsh-Corgi-Pembroke.jpg";

var REQUEST_URL = "https://rjct.herokuapp.com/rjcts?startIndex=0&endIndex=10";

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  thumbnail: {
    width: 53,
    height: 81,
    marginRight: 10
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8
  },
  description: {
    color: '#656565'
  },
  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
  listView: {
    backgroundColor: '#F5FCFF'
   },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
   }
});

class RejectionList extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    /* var rejections = FAKE_REJECTION_DATA;
       this.setState({
       dataSource: this.state.dataSource.cloneWithRows(rejections),
       isLoading: false
       }); */

    fetch(REQUEST_URL)
           .then((response) => response.json())
           .then((responseData) => {
             this.setState({
               dataSource: this.state.dataSource.cloneWithRows(responseData),
               isLoading: false
             });
           })
           .done();
  }

  showRejectionDetail(rejection){
    this.props.navigator.push({
      title: rejection.title,
      component: RejectionDetail,
      passProps: {rejection}
    })
  }

  renderRejection(rejection){
    return (
      <TouchableHighlight onPress={() => this.showRejectionDetail(rejection)} underlayColor="#dddddd">
      <View>

      <View style={styles.container}>
      <Image source={{uri: rejection.imageLinks !== undefined ? rejection.imageLinks.thumbnail : CORGI_URI }}
      style={styles.thumbnail} />
      <View style={styles.rightContainer}>
      <Text style={styles.title}>{rejection.title}</Text>
      <Text style={styles.description}>{rejection.body}</Text>
      </View>
      </View>

      <View style={styles.separator} />
      </View>
      </TouchableHighlight>
    );
  }

  renderLoadingView(){
    return(
      <View style={styles.loading}>
      <ActivityIndicatorIOS
      size='large'/>
      <Text>
      Loading rejections...
      </Text>
      </View>
    )
  }

  render(){
    if(this.state.isLoading){
      return this.renderLoadingView();
    }

    return (
      <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderRejection.bind(this)}
      style={styles.listView}
      />
    );
  }
}

module.exports = RejectionList;
