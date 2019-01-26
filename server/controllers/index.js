var models = require('../models');
var cors = require('cors');

module.exports = {
  messages: {
    get: function (req, res) {

      // read all mysql database
      // write it to response
      models.messages.get((data) => {
        console.log('dis the data: ', data);
        res.write(JSON.stringify(data));
        res.status(200);
        res.end();
      });
    },
    post: function (req, res) { },
  },

  users: {
    get: function (req, res) { },
    post: function (req, res) { }
  }
};

