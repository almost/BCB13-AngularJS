angular.module("barcamp", [])
  .controller("GridController", function ($scope, $http) {
    $http.get("times.json").then(function (res) {
      console.log(res.body);
      $scope.times = res.data;
    });
    $http.get("rooms.json").then(function (res) {
      $scope.rooms = res.data;
    });
    $http.get("sessions.json").then(function (res) {
      $scope.sessions = res.data;
    });

    $scope.editSession = function (roomindex, timeindex) {
      var description = prompt("What do want to talk about?");
      $scope.sessions[roomindex][timeindex].description = description;
      $http.post("/edit-session", {timeindex: timeindex, roomindex: roomindex, description:description});
    };
  });
