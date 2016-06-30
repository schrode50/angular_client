'use strict';

module.exports = function(app) {
  require('./controllers/marvel_controller')(app);
  require('./controllers/dc_controller')(app);
};
