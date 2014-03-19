
//angular
(function (app) {
  'use strict';

  app.controller('Controller', function($scope) {

    $scope.prf = {};
    $scope.wrap = $('article');
    $scope.prf.Geo = {};
    $scope.prf.Geo.Type = "Nationwide";
    $scope.prf.Geo.Country = "United States";
    $scope.prf.Geo.States = {};
    $scope.prf.Geo.States.Selected = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinoi","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montan","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvani","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
    $scope.StatesList = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinoi","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montan","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvani","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
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
      $('.geo-dd').hide().filter('.'+to_show).show();
    };
    $scope.toggleSelection = function toggleSelection(ST) {
      var idx = $scope.prf.Geo.States.Selected.indexOf(ST);
      if (idx > -1) {
        $scope.prf.Geo.States.Selected.splice(idx, 1);
      }
      else {
        $scope.prf.Geo.States.Selected.push(ST);
      }
    };

  });

})(angular.module('app', []));
