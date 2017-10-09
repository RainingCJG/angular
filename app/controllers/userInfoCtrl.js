angular.module('libraryMassage')
.controller('userInfoCtrl', ['$scope','borrowInfoDir', function ($scope,borrowInfoDir) {
	$scope.link = 1;
	// 测试数据
	$scope.userInfo = {
		name: '张三',
		age: '20',
		sex: '男',
		username: '12131313',
		email: '31232142@qq.com',
		birthDay: '1995年10月14号',
		id: '440825199510142131',
		address: '深圳大学',
		phone: '12321321321'
	};
	borrowInfoDir.getBorrowInfo().then(
		function(res) {
			$scope.borrowInfo = angular.fromJson(res.data);
		}
	);
}])