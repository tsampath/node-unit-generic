var config = require('config');
var mysql = require('../node_modules_custom/mysql')
var MySqlGenericRepository = require('../libs/mySqlGenericRepository.js');
var MongoGenericRepository = require('../libs/mongoGenericRepository.js');


var mySqlDbConfig = config.get('COMMON.mySqlDbConfig');
var mySqlConnection = mysql.createConnection(mySqlDbConfig);
var mongoConnection = config.get('COMMON.mongoDbConfig');

var studentRepository = new MySqlGenericRepository(mySqlConnection, 'student');

module.exports =  { studentRepository : studentRepository} ;