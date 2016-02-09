var myApp = angular.module('myApp', []);

myApp.controller('myController', ['$scope', function($scope){

// Nav Buttons for toggling between My Bids and Browse all Bids

$scope.myBids = function(){
	$("#myBids").removeClass('hidden');
	$("#allBids").addClass('hidden');
	console.log("test");
}

$scope.allBids = function(){
	$("#myBids").addClass('hidden');
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



// Adding new items to array

$scope.allItems = []
$scope.Item = {}

var itemObject = function(title, description, image, price, date, username, zipcode){
	this.title = title;
	this.description = description;
	this.image = image;
	this.price = price;
	this.username = username;
	this.zipcode = zipcode;
}

$scope.addItem = function(){
	$scope.allItems.push($scope.Item);
	console.log($scope.allItems);
	console.log("works");
	$scope.Item = {}
}

$scope.entry1 = new itemObject(
	'test',
	'testy test',
	'imgres.jpg',
	14,
	2/8/16,
	'danaress',
	80027
)

var newDate = function(){
	$scope.entry1.date
}




	}])