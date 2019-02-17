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
    $scope.modalHandler = function(club) {
      $scope.modalEvent = club;
    };
  })
  .controller("clubInfoController", function($http, $scope) {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var clubId = url.searchParams.get("clubId");
    $http
      .get(`http://clubhubhackuci.herokuapp.com/clubs/${clubId}`)
      .then(function(response) {
        $scope.clubInfo = response.data;
        console.log(response.data);
      });
  })
  .controller("clubEventController", function($http, $scope) {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var clubId = url.searchParams.get("clubId");
    $http
      .get(`http://clubhubhackuci.herokuapp.com/clubs/${clubId}/events`)
      .then(function(response) {
        $scope.events = response.data;
        console.log(response.data);
      });
    $scope.modalHandler = function(event) {
      $scope.modalEvent = event;
    };

    $scope.registerEvent = function(clubId, eventId) {
      $http
        .post(
          `http://clubhubhackuci.herokuapp.com/clubs/${clubId}/events/${eventId}/register`,
          { userId: "5c684ceaea2d84376c5db9a7" }
        )
        .then(function(response) {
          //var self = $scope;
          //elf.events = response.data;

          console.log(response.data);
        });
    };
    $scope.unregisterEvent = function(clubId, eventId) {
      $http
        .post(
          `http://clubhubhackuci.herokuapp.com/clubs/${clubId}/events/${eventId}/unregister`,
          { userId: "5c684ceaea2d84376c5db9a7" }
        )
        .then(function(response) {
          //var self = $scope;
          //self.events = response.data;

          console.log(response.data);
        });
    };
  })
  .controller("eventsController", function($http, $scope) {
    $http
      .get("http://clubhubhackuci.herokuapp.com/events")
      .then(function(response) {
        console.log(response.data);
        var self = $scope;
        self.events = response.data;

        console.log(response.data);
      });

    $scope.modalHandler = function(event) {
      $scope.modalEvent = event;
    };

    $scope.registerEvent = function(clubId, eventId) {
      $http
        .post(
          `http://clubhubhackuci.herokuapp.com/clubs/${clubId}/events/${eventId}/register`,
          { userId: "5c684ceaea2d84376c5db9a7" }
        )
        .then(function(response) {
          //var self = $scope;
          //elf.events = response.data;

          console.log(response.data);
        });
    };
    $scope.unregisterEvent = function(clubId, eventId) {
      $http
        .post(
          `http://clubhubhackuci.herokuapp.com/clubs/${clubId}/events/${eventId}/unregister`,
          { userId: "5c684ceaea2d84376c5db9a7" }
        )
        .then(function(response) {
          //var self = $scope;
          //self.events = response.data;

          console.log(response.data);
        });
    };
  });
