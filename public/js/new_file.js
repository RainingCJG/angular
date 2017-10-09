//使用mock进行ajax拦截及数据生成
var data = Mock.mock('new_file.json',{
	'items|10': [{
		'id|+1':1,
		'price':/[1-9]{4}/,
		'name':/(iPhone|三星|蓝莓|小米)[0-9]/,
		'img':"@DataImage(100x100,phone)",
		'saled':/[1-9]{4}/,
		'better':/[1-9]{4}/
	}]
})
console.log(JSON.stringify(data,nll,4))
var m = angular.module("hd",[]);
m.controller('ctrl',['$scope','$http',function($scope,$http){
//	$http({
//		method:"get",
//		url:"http://www.baidu.com",
//		async:true
//	}).success(function(res){
//		console.log(res)
//	}).error(function(res){
//		
//	})
}]);

