angular.module('libraryMassage')
.directive('reviseInfo', [function () {
	return {
		restrict: 'AE',
		templateUrl:'views/reviseInfo.html',
		transclude:true,
		scope:true
	};
}])