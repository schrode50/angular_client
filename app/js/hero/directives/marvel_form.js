module.exports = function(app) {
  app.directive('marvelForm', function() {
    return {
      scope: {
        type: '@',
        hero: '='
      },
      templateUrl: './templates/heros/hero_form.html',
      require: '^^ngController',
      link: function($scope, elem, attr, controller) {
        $scope.deleteMarvel = controller.deleteMarvel;
        $scope.updateMarvel = controller.updateMarvel;
        $scope.submit = $scope.type === 'new' ? controller.addMarvel
        : controller.updateMarvel;
      }
    };
  });
};
