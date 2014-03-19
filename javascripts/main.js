
//angular
function Controller($scope) {
  "use strict";


}

(function (app) {
  'use strict';

  app.controller('Controller', function($scope) {

    $scope.prf = {};
    $scope.wrap = $('article');
    $scope.prf.Geo = "Nationwide";
    $scope.prf.Markets = "none";
    $scope.prf.Owner_Buyer = false,
    $scope.prf.Lender = {};
    $scope.prf.Lender.Structured_Finance = false;
    $scope.prf.Lender.Debt = false;
    $scope.toggleProfile = function toggleProfile(css) {
      if ($scope.prf.Lender.Structured_Finance || $scope.prf.Lender.Debt) {
          $scope.prf.Owner_Buyer = false,
          $scope.wrap.addClass(css);
          $scope.wrap.removeClass('owner');
      } else {
          $scope.wrap.attr("class", 'owner');
          $scope.prf.Owner_Buyer = true;
      }
    };
    $scope.toggleLender = function toggleProfile() {
      if($scope.prf.Owner_Buyer){
        $scope.prf.Lender.Structured_Finance = false;
        $scope.prf.Lender.Debt = false;
        $scope.wrap.attr("class", 'owner');
      }else{
        $scope.wrap.removeClass('owner');
      }
    };
    $scope.geoChange = function geoChange(to_show) {
      $('.geo-dd').hide().filter('#'+to_show).show();
    };

  });

})(angular.module('app', []));
