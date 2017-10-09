angular.module('libraryMassage')
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/index');
	$stateProvider
	.state('index',{
		url:'/index',
		views:{
			templateUrl: 'index.html'
		}
	})
	.state('login',{
		url: '/login',
		views:{
			'':{
				templateUrl: 'views/login.html',
				controller: 'loginctrl'
			}
		}	
	})
	.state('login.register',{
		url:'/register',
		views:{
			'loginviews@login':{
				templateUrl: 'views/register.html',
				controller: 'loginctrl'
			}
		}
	})
	.state('borrow',{
		url: '/borrow',
		views:{
			'':{
				templateUrl: 'views/borrow.html',
				controller:'borrowctrl'
			}
		}	
	})
	.state('borrow.booksInfo',{
		url: '/booksInfo',
		views:{
			'booksInfoviews@borrow':{
				templateUrl: 'views/booksInfo.html',
				controller:'booksInfoCtrl'
			}
		},
		params:{
			info:null
		}
	})
	.state('info',{
		url: '/info',
		views:{
			'':{
				templateUrl: 'views/info.html',
				controller:'userInfoCtrl'
			}
		}	
	})
	.state('back',{
		url: '/back',
		views:{
			'':{
				templateUrl: 'views/back.html'
			}
		}	
	})
}])