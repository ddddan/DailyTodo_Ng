(function () {
    var app = angular.module('dailyTodo', ['ui.bootstrap']);

    app.controller("TodoController", ['$scope', '$http', function ($scope, $http) {
        $scope.myData = {};
        $http.get('{INSECURE}').success(function (data, status, headers, config) {
            $scope.myData = data.data;
            $scope.clients = data.clients;
            // Create header list from first row
            $scope.headers = data.filtered_columns;

        }).error(function (data, status, headers, config) {
            // TODO: Handle errors
        });

    }]);
})();
