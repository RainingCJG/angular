angular.module('libraryMassage')
.directive('userInfo', [function () {
	return {
		restrict: 'AE',
		templateUrl: 'views/userinfo.html',
		transclude: true,
		scope: true,
	};
}])