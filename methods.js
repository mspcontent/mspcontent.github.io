var app = angular.module('myApp', []);
app.filter('filterByTags', function () {
    return function (items, key) {
        var filtered = [];

        angular.forEach(items, function (item) {

            var contains = false;
            angular.forEach(item.tags, function (tag) {
                if (tag.toLowerCase() == key.toLowerCase())
                    contains = true;
            });
            if (contains == true)
                filtered.push(item);
        });

        return filtered;

    };
});
app.filter('filterByDifficulty', function () {
    return function (items, key) {
        var filtered = [];

        angular.forEach(items, function (item) {
            if (item.difficulty == key)
                filtered.push(item);
        });
        return filtered;

    };
});


app.controller('myCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.tag = "ALL";
    $http({
        method: "GET",
        url: "./data.json"
    }).then(function mySuccess(response) {
        $scope.data = response.data;
    }, function myError(response) {
        console.log("error");
    });
	$scope.difficulty = ['very easy', 'easy', 'medium', 'hard', 'very hard'];
	}]);

