app.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Top Sellers in Books';
    $scope.promo = 'best books you will find';
    $scope.product = {
        name: 'The Book of Trees',
        price: 19,
        pubdate: new Date('2014', '03', '08')
    };
}]);