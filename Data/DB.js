var RNDBModel = require('react-native-db-models');

var DB = {
    // "app": new RNDBModel.create_db('app'),
    "ideas": new RNDBModel.create_db('ideas')
};

module.exports = DB;
