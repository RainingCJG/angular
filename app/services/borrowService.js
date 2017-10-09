
angular.module('libraryMassage')
.service('borrowService', ['$http', function ($http) {
	this.getData = function(type) {
		return $http.get('booksInfo.json');	
	};
}]);