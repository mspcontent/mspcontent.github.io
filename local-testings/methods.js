var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.data=[
	{title:"Item1", tags:["Web", "Azure"]},
	{title:"Item2", tags:["Phone"]}
	];
});

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