var ReactNativeStore = require('react-native-store');
var _ = require('underscore');

var DBUtils = {
  initializeDB: function() {
    ReactNativeStore.table("ideas").then(function(ideas) {
      ideas.add({
        title: "Ask a girl out",
        level: 10,
        attempted: false
      });
      ideas.add({
        title: "Talk to a stranger",
        level: 1,
        attempted: false
      })l
    })l
  },

  randomIdeaFromLevel: function(level) {
    return ReactNativeStore.table("ideas").then(function(ideas) {
      return _.sample(ideas.where({
        attempted: false,
        level: level
      }).find());
    });
  }
}

module.exports = DBUtils;
