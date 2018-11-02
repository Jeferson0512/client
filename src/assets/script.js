var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', function($scope){
    $scope.gmail = {
        username = "",
        email = ""
    };
    $scope.onGoogleLogin = function(){
        var params = {
            'clientid': '735948804223-egeham0ppo5orv8p8h1g92rs1fs5ttgj.apps.googleusercontent.com',
            'cookiepolicy': 'single_host_origin',
            'callback': function(result){
                if(result['status']['signed_in']){
                    var request = gapi.client.plus.people.get(
                        {
                            'userId': 'me'
                        }
                    );
                    request.execute(function(resp){
                        $scope.$apply(function(){
                            $scope.gmail.username = resp.displayName;
                            $scope.gmail.email = resp.emails[0].value;
                        });
                    });
                }
            },
            'approvalprompt': 'force',
            'scope': 'https://www.googleapis.com/auth/plus.login https:/www.googleapis.com/auth/plus.profile.emails.read'
        };
        gapi.auth.signIn(params);
    }
}]);