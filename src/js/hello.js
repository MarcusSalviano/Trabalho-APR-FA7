
var app = angular.module("AppHello", ['ngMaterial']);

app.controller("HelloController", function($scope, $http) {
    $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?id=3399415&APPID=bc260d742ce6d1a6ed3246f79d8886f8').
    success(function(data) {
        console.log(data);
        $scope.location = data;

        $scope.days=$scope.location.list;

    });







});











