module.exports = function(app) {
  app.directive('dcList', function() {
    return {
      scope: {
        dc: '='
      },
      templateUrl: './templates/heros/dc_list.html'
    };
  });
};
