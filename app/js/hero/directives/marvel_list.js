module.exports = function(app) {
  app.directive('marvelList', function() {
    return {
      scope: {
        marvels: '='
      },
      templateUrl: './templates/heros/marvel_list.html'
    };
  });
};
