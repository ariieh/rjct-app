var _ = require('underscore');
var DB = require('./DB.js');

var DBUtils = {
  initializeDB: function(cb) {
    DB.ideas.add({
      title: "Ask a girl out",
      level: 10,
      attempted: false
    }, cb);
    // ideas.add({
    //   title: "Talk to a stranger",
    //   level: 1,
    //   attempted: false
    // });
  },

  // randomIdeaFromLevel: function(level) {
  //   return ReactNativeStore.table("ideas").then(function(ideas) {
  //     return _.sample(ideas.where({
  //       attempted: false,
  //       level: level
  //     }).find());
  //   });
  // }
}

module.exports = DBUtils;
