var models = require('../models');
var cors = require('cors');

module.exports = {
  messages: {
    get: function (req, res) {

      models.messages.get((data) => {
        var results = { results: data };
        res.write(JSON.stringify(results));
        res.status(200);
        res.end();
      });
    },
    post: function (req, res) {
      models.messages.post(req.body, (data) => {
        console.log('Data from post request: ', data);
        res.write(JSON.stringify(data));
        res.status(201);
        res.end();
      });
    },
  },

  users: {
    get: function (req, res) { },
    post: function (req, res) { }
  }
};

