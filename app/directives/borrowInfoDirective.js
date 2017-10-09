angular.module('libraryMassage')
.directive('borrowInfo', [function () {
	return {
		restrict: 'AE',
		templateUrl:'views/borrowInfo.html',
		scope:true,
		transclude:true
	};
}])