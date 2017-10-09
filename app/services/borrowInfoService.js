angular.module('libraryMassage')
.service('borrowInfoDir', ['$http',function ($http) {
	this.getBorrowInfo = function() {
		return $http.get('borrowInfo.json');
	}
}])