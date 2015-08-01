'use strict';

var React = require('react-native');
var {
  TabBarIOS,
  StyleSheet,
  Text,
  View
} = React;

var RejectionsTab = require('./RejectionsTab.ios.js');
var SocialTab = require('./SocialTab.ios.js');


class TabBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      selectedTab: "rejectionsTab",
      notifCount: 0
    };
  }

  _renderContent(color, pageText, num){
    return (
      <View style={[styles.tabContent, {backgroundColor: color}]}>
      <Text style={styles.tabText}>{pageText}</Text>
      <Text style={styles.tabText}>{num} re-renders of the {pageText}</Text>
      </View>
    )
  }

  render(){
    return (
      <TabBarIOS
      style={styles.tabBar}

      tintColor="white"
      barTintColor="darkslateblue">

      <TabBarIOS.Item
      title="Rejections"
      systemIcon="most-recent"
      selected={this.state.selectedTab === "rejectionsTab"}
      onPress={() => {
        this.setState({
          selectedTab: "rejectionsTab"
        });
      }}>

      <RejectionsTab />
      </TabBarIOS.Item>

      <TabBarIOS.Item
      systemIcon="history"
      title="Feed"
      selected={this.state.selectedTab === "feedTab"}
      onPress={()=> {
        this.setState({
          selectedTab: "feedTab"
        });
      }}>

      <SocialTab />
      </TabBarIOS.Item>

      </TabBarIOS>
    )
  }
}

var styles = StyleSheet.create({
  tabBar: {


  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

module.exports = TabBar;
