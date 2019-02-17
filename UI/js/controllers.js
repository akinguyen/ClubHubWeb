angular
  .module("myApp", [])
  .controller("clubsController", function($http, $scope) {
    $http
      .get("http://clubhubhackuci.herokuapp.com/clubs")
      .then(function(response) {
        var self = $scope;
        self.clubs = response.data;

        console.log(response.data);
      });
  })
  .controller("eventsController", function($http, $scope) {
    $http
      .get("http://clubhubhackuci.herokuapp.com/events")
      .then(function(response) {
        var self = $scope;
        self.events = response.data;

        console.log(response.data);
      });
  });
