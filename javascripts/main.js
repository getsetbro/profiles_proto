
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
    $scope.prf.Geo.States.Selected = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];
    $scope.StatesList = ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"];
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
