var movies = angular.module('movies', []);

movies.controller('movieController', function ($scope, $http) {
$scope.movies=[];
$scope.search = '';
$scope.fetchResults= function(){

$http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies.json', {
        params: {
        page_limit: '15',
            page: '1',
            q: $scope.search,
         apikey: '3zzjsgkq6bhqhcwwpppurvqn',
            callback: 'JSON_CALLBACK'
        }
    })
    .success(function (data) {
        $scope.result = data.movies;
    
console.log(data);
    });
};
});