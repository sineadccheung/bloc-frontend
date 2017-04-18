app.controller("MyCtrl", ["$scope", "firebaseArray", function($scope, $firebaseArray)
{
    var ref = firebase.database().ref();
    var list = $firebaseArray(ref);

    // add an item
    list.$add({ foo: "bar"}).then(...);

    //remove an item
    list.$remove(2).then(...);

    //make the list available in DOM
    $scope.list = list;
  }
]);
