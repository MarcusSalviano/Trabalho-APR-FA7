
var app = angular.module("AppForecast", ['ngMaterial']);

app.controller("ForecastController", function($scope, $http) {
    $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?id=3399415&APPID=bc260d742ce6d1a6ed3246f79d8886f8&units=metric").
    success(function(data) {
        console.log(data);
        $scope.location = data;
        $scope.weatherImg = "http://openweathermap.org/img/w/" + $scope.location.list[0].weather[0].icon + ".png";
        $scope.days=$scope.location.list;
    });
});

app.controller('HideShowController', function() {
    
    this.showHideForecast = function(location){
        if(location == null) {
            return false;
        } else {
            return true;
        }
    };
});
