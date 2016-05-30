var app = angular.module('myApp', []);
app.controller('myCtrl',['$scope', '$http', function($scope, $http) {
	$http({
		method:"GET",
		url: "data.json"
		}).then(function mySuccess(response) {
			$scope.data=response.data;
		}, function myError(response){
			console.log("error");
		});
		
	}]);

app.filter('filterByTags', function() {
    return function(items, key) {
		var filtered=[];
		
		angular.forEach(items,function(item)
		{
			console.log(item);
			var contains=false;
			angular.forEach(item.tags, function(tag) {
				if(tag.toLowerCase()==key.toLowerCase())
					contains=true;
			});
			if(contains==true)
				filtered.push(item);
		});
        return filtered;
        
    };
});