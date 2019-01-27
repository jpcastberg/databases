var db = require('../db');
var connection = require('../db/index.js');
var mysql = require('mysql');

module.exports = {
  // a function which produces all the messages
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

    // a function which can be used to insert a message into the database
    post: function (message, callback) {
      return new Promise((resolve, reject) => {
        connection.query({
          sql: 'INSERT INTO messages (username, text, roomname) VALUES ("' + message.username + '", "' + message.text + '", "' + message.roomname + '")',
          timeout: 2000
        }, (err, data) => {
          if (err) {
            reject(err.stack);
          } else {
            resolve(data);
          }
        });
      })
        .then((data) => {
          connection.query({
            sql: 'SELECT * FROM `messages` WHERE objectId = ' + data.insertId,
            timeout: 2000,
          }, (data) => callback(data));
        })
        .catch(err =>
          console.error(err)
        );
    }

  },
  // (data) => {
  //   return new Promise((resolve, reject) => {

  // });
  // }
  users: {
    // Ditto as above.
    get: function () { },
    post: function () { }
  }
};

// `INSERT INTO messages (username, text, roomname) VALUES (${message.username}, 'hello from the bobverse', 'b(l)obby')`