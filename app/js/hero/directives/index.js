module.exports = function(app) {
  require('./dc_form')(app);
  require('./dc_list')(app);
  require('./marvel_form')(app);
  require('./marvel_list')(app);
};
