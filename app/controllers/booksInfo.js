angular.module('libraryMassage')
.controller('booksInfoCtrl', ['$scope','$stateParams', function ($scope,$stateParams) {
	$scope.info = $stateParams.info;
}])