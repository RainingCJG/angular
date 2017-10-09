angular.module('libraryMassage')
.controller('borrowctrl', ['$scope','$filter','$state','borrowService', function ($scope,$filter,$state,borrowService) {
	$scope.bookData = [];
	$scope.currentPage = 1;
	$scope.maxSize = 5;
	$scope.bookname = "";
	$scope.searchBooks = function() {
		borrowService.getData($scope.bookname)
		.then(function(res) {
			console.log($scope.bookname)
			$scope.bookData = [];
			var arr = $filter('filter')(angular.fromJson(res.data),$scope.bookname);
			$scope.len = arr.length;
			for(var i=0; i<$scope.len; i+=6){
				$scope.bookData.push(arr.slice(i,i+6));
			}
		});
	}
	
	$scope.$watch("bookname",$scope.searchBooks);

	$scope.getDetail = function(data){
		$state.go('borrow.booksInfo',{
			info:data
		})
	}
}])