var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', function($scope){

// Nav Buttons for toggling between My Bids and Browse all Bids

	$("#myAccount").removeClass('hidden');

$scope.addBid = function(){
	$("#myBids").removeClass('hidden');
	$("#cancelBid").removeClass('hidden');
	$("#allBids").addClass('hidden');
	console.log("test");
}

$scope.cancelBid = function(){
	$("#myBids").addClass('hidden');
	$("#cancelBid").addClass('hidden');
	$scope.Item.title = '';
	$scope.Item.description = '';
	$scope.Item.price = '';
	// document.getElementById("imageinput").value = '';
}

$scope.myAccount = function(){
	$("#myAccount").removeClass('hidden');
	$("#allBids").addClass('hidden');
}

$scope.allBids = function(){
	$("#myBids").addClass('hidden');
	$("#myAccount").addClass('hidden');
	$("#allBids").removeClass('hidden');
	console.log($scope.entry1);
}

$scope.loginSubmit = function(){
	$("#login").removeClass('hidden');
}

// Function for revealing username and password in navbar
$scope.pressEnter = function($event) {
	if ($event.keyCode == 13) {
	window.location.assign("dash.html");
}
}

// Function for revealing sign up form
$scope.emailEnter = function($event){
	if ($event.keyCode == 13) {
	$event.preventDefault();
	$("#signup").removeClass('hidden');
	}
}

// Function for navigating to Dash page
$scope.pressSignUp = function(){
	window.location.assign("dash.html");
}


$scope.checkFile = function(element){
   console.log('change', $scope)
   $scope.$apply(function() {
        $scope.myFile = element.files[0];
        console.log($scope.myFile.name);
        // var fileRead = new FileReader()
        // fileRead.onLoad = function(){
        //     fileRead.result
        // }
    });
}


// Adding new items to array

$scope.allItems = []
$scope.Item = {}
$scope.oldItems = []

var itemObject = function(title, description, image, price, category, date, username, zipcode){
	this.title = title;
	this.description = description;
	this.image = image;
	this.price = price;
	this.category = category;
	this.username = username;
	this.zipcode = zipcode;
	$scope.oldItems.push(this)

}

$scope.addItem = function(){
	$scope.allItems.push($scope.Item);
	$scope.Item.image = ("assets/" + $scope.myFile.name);
	console.log($scope.allItems);
	console.log("works");
	$scope.Item = {}
}

$scope.entry1 = new itemObject(
	'test1',
	'testy test',
	'assets/imgres.jpg',
	14,
	'ski boots',
	2/8/16,
	'dana_ress',
	80027
)
 
$scope.entry2 = new itemObject(
	'test2',
	'testy entry2',
	'assets/imgres.jpg',
	14,
	'ski boots',
	2/8/16,
	'dana_ress_no',
	80027
)

$scope.entry3 = new itemObject(
	'test3',
	'testy entry3',
	'assets/imgres.jpg',
	14,
	'ski boots',
	2/8/16,
	'dana_ressno',
	80027
)
 
$scope.entry4 = new itemObject(
	'test4',
	'testy entry4',
	'assets/imgres.jpg',
	14,
	'ski boots',
	2/8/16,
	'dana_ress',
	80027
)

// $scope.danasItems = []

function sortTest(){
	$scope.matches = _.filter($scope.oldItems, function(obj){
	return obj.username == 'dana_ress';
})
	// $scope.danasItems.push(matches);
	console.log($scope.matches);
}
sortTest();


	}])