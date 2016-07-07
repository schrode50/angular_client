module.exports = function(app) {
  app.directive('dcForm', function() {
    return {
      scope: {
        type: '@',
        hero: '='
      },
      templateUrl: './templates/heros/hero_form.html',
      require: '^^ngController',
      link: function($scope, elem, attr, controller) {
        console.log(controller);
        $scope.deleteDc = controller.deleteDc;
        $scope.updateDc = controller.updateDc;
        $scope.submit = $scope.type === 'new' ? controller.addDc
        : controller.updateDc;
      }
    };
  });
};
