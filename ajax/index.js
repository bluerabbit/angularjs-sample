var MainCtrl = function ($scope, $http) {
    $scope.getRequest = function () {
        $http({method:'GET', url:'response.json'}).success(function (data, status) {
            $scope.get_response = JSON.parse(data);
        }).error(function (data, status) {
            $scope.get_response = status;
        });
    };

    $scope.postRequest = function () {
        $http({method:'POST', url:'response.json'}).success(function (data, status) {
            $scope.post_response = JSON.parse(data);
        }).error(function (data, status) {
            $scope.post_response =  status;
        });
    };
};
