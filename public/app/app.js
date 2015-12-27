angular.module('MyApp', ['appRoutes','mainCtrl','authService','userCtrl','storyCtrl','storyService','reverseDirective'])

.config(function($httpProvider){

	$httpProvider.interceptors.push('AuthInterceptor');

})


