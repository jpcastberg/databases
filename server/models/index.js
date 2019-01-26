var db = require('../db');
var connection = require('../db/index.js');
var mysql = require('mysql');

module.exports = {
  messages: {
    get: function (callback) {
      return new Promise((resolve, reject) => {
        connection.query({
          sql: 'SELECT * FROM `messages`',
          timeout: 2000,
        }, (err, data) => {
          if (err) {
            reject(err => console.error(err));
          } else {
            resolve(callback(data));
          }
        });
      });
    },
    // a function which produces all the messages

    post: function () { } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () { },
    post: function () { }
  }
};

