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

$scope.accountNav = function(){
	window.location.assign("dash.html");
	$("#myAccount").removeClass('hidden');
	$("#allBids").addClass('hidden');
}

$scope.dashNav = function(){
	window.location.assign("dash.html");
	$("#myBids").addClass('hidden');
	$("#myAccount").addClass('hidden');
	$("#allBids").removeClass('hidden');
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

$scope.home = function(){
	window.location.assign("index.html");	
}

// Function for revealing username and password in navbar
$scope.pressEnter = function($event) {
	if ($event.keyCode == 13) {
	window.location.assign("test.html");
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
	window.location.assign("test.html");
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

$scope.addDetails = function(){
		$("#details").removeClass('hidden');
}


$scope.moreInfo = function(){
	$("#moreinfo").removeClass('hidden');
}

// Adding new items to array

$scope.modalClick = function($index){
	$('#myModal').modal('show');
	console.log("working");
}

$scope.newerItems = []
$scope.Item = {}
$scope.oldItems = []
$scope.newItems = []



var itemObject = function(title, description, image, price, category, date, username, zipcode){
	this.title = title;
	this.description = description;
	this.image = image;
	this.price = [price];
	this.category = category;
	this.username = username;
	this.zipcode = zipcode;
	$scope.oldItems.push(this)

}

$scope.addItem = function(){
	console.log($scope.Item);
	$scope.newerItems.unshift($scope.Item);
	$scope.Item.image = ("assets/" + $scope.myFile.name);
	sortTest1();
	$scope.Item = {}
}

$scope.submitNewBid = function(oldTest){
	console.log("Working");
	if (oldTest.newPrice > oldTest.price[oldTest.price.length -1]){
	oldTest.price.unshift(oldTest.newPrice);
	oldTest.newPrice = '';
	console.log(oldTest.price[0])
} else {
	window.alert("Please place a bid that is larger than the current bid.");
	oldTest.newPrice = '';
}
}

$scope.test = function(){

}

// $scope.tableRow.diff = ($scope.tableRow.price[0] - $scope.tableRow.price[$scope.tableRow.price.length - 1])


// -------------NEW OBJECTS-------------

var itemObjs = function(title, description, image, price, category, date, username, zipcode, details){
	this.title = title;
	this.description = description;
	this.image = image;
	this.price = [price];
	this.category = category;
	this.date = date;
	this.username = username;
	this.zipcode = zipcode;
	this.details = details;
	$scope.newItems.push(this)
}

$scope.boots1 = new itemObjs(     
	"Used Rossignol Evo Sensor RTL Black & Green Ski Boots Men",
	"These boots were used in a mountain rental program for a few seasons. The boots have a lot of scuffs and scratches as you would expect on a used boot. There are color sized plates from the rental program on the back of the boot. Plates colors vary by size.",
	"http://i.ebayimg.com/images/g/JTsAAOSw~bFWHDLn/s-l1600.jpg",
	59,
	'SkiBoots',
	2/10/16,
	'dana_ress',
	80027,
	{Manufacturer:	"Rossignol",
	Model:	"Evo Sensor RTL",
	Color:	"Black & Green",
	Level:	"Recreational",
	Size: 24.5,
	"Boot Sole Length": 288}
	     )

$scope.boots2 = new itemObjs(         
	"Used Nordica One Easy 5+ Black Ski Boots Men's Size",
	"These boots were used in a large ski shop rental and lease program for a few seasons. The boots have a lot of scuffs and scratches. The logo may be partially worn off on most boots.",
	"http://i.ebayimg.com/images/g/BPIAAOSw5VFWH8Rs/s-l1600.jpg",
	65,
	"SkiBoots",
	2/10/16,
	"matt_ray",
	80301,
	{Manufacturer:	"Nordica",
	Model:	"One Easy 5",
	Color:	"Black",
	Level:	"Intermediate",
	Size: 26,
	"Boot Sole Length": 305}
		)

$scope.boots3 = new itemObjs( 

    "Used Rossignol Evo Sensor RTL Black & Green Ski Boots Men's",     
    "These boots were used in a large ski shop rental and lease program for a few seasons. The boots have a lot of scuffs and scratches. The logo may be partially worn off on most boots.",
	"http://i.ebayimg.com/images/g/BPIAAOSw5VFWH8Rs/s-l1600.jpg",
	49,
	"SkiBoots",
	2/10/16,
	"tom_lovett",
	80302,
	{Manufacturer:	"Dalbello,",
	Model:	"Sport VT Vantage",
	Color:	"Black",
	Level:	"Recreational",
	Size: 25,
	"Boot Sole Length": 290}
	)

$scope.boots4 = new itemObjs(             
	"Used Nordica B Black 4 Buckle Ski Boots for Men & Women",      
	"These boots were used in a mountain ski resortrental program for three seasons. The boots have a lot scuffs and scratches as you would expect on a used boot. They were well used but still have life left. The boots are all half sizes based on the infomation found on the back of the plastic shell. However, the resort has labeled the boots with mondo full sizing on the toe in either permanent ink or engraved numbers. Please see our photo for sample of engraved and ink mondo nummbers. Please note that although the toes are marked with full sizes, the boots are all half sizes.",
	"http://i.ebayimg.com/images/g/lYUAAOSwA4dWJlmq/s-l1600.jpg",
	40,
    "SkiBoots",
	2/10/2016,
	"valentin__",
	80302,
	{Manufacturer:	"Nordica",
	Model:	"Nordica B",
	Color:	"Black",
	Level:	"Intermediate",
	Size: 26.5,
	"Boot Sole Length": 300}
)

$scope.boots5 = new itemObjs(
	"Used Black Salomon Focus Recreational Ski Boots Men's",
	"These boots were used in a mountain ski shop rental program for two seasons. On the back of the boot there are some numbers and letters engraved into the plastic. The boots have lots of scuffs and scratches. Additionally the logos will be partially worn off on most ski boots.",
	"http://i.ebayimg.com/images/g/TvIAAOSwl9BWGxg7/s-l1600.jpg",
	55,
	"SkiBoots",
	2/10/2016,
 	"__fatima",
 	80301,
 	{Manufacturer:	"Salomon",
	Model:	"Focus",
	Color:	"Black",
	Level:	"Recreational",
	Size: 26.5,
	"Boot Sole Length": 307}
)

// SKIS

$scope.skis1 = new itemObjs(
	"Used 12-13 Rossignol Temptation 88 Women Ski with Rossignol Bindings",
	"This ski was used for two seasons in a small ski shop demo and rental program. The tops have heavy scratches and scuff marks of a used ski. The topskin will have small chips and slices that will be up to and slightly over 1/2. Additionally, these skis have a lot of chipping on the end of the tails. There is light p-tex that was done well. The bottoms are smooth and in good shape. The edges are straight. There is engraved number and letters on this ski. We perform a free basic sharpen and hot wax service before shipment to you.",
	"http://i.ebayimg.com/images/g/l6YAAOSwGotWk632/s-l1600.jpg",
	159,
	"Skis",
	2/10/2016,
	"_evan_",
	80301,
	{Manufacturer:	"Rossignol",
	Model:	"Temptation 88",
	Length:	170,
	Type:	"All Mountain",
	Level:	"Advanced"}
	)

$scope.skis2 = new itemObjs(
	"Used 11-12 K2 SuperStitious Womens Ski with Salomon L10 Binding",
	"This ski was used in a small mountain ski shop demo and rental program for two seasons. The topskins have scratches and scuff marks. On the topskin the ski has chips up to 1/2 long. The chips are cosmetic and will not affect the performance. The skis may be missing a jewel embellishment or little weight towards the tops of the ski. There is p-tex that was done well. The bottoms have base scratches but are smooth. The edges are straight. There is a company name and length engraved onto the topsheet tails. We perform free basic sharpen and hot wax service before shipment.",
	"http://i.ebayimg.com/images/g/2E4AAOSwPe1UJiBb/s-l1600.jpg",
	240,
	"Skis",
	2/10/2016,
	"dana_ress",
	80027,
	{Manufacturer:	"K2",
	Model:	"SuperStitious",
	Length:	146,
	Type:	"All Mountain",
	Level:	"Advanced"}
	)

$scope.skis3 = new itemObjs(

	"Used K2 Strike Adult Snow Ski with Marker 9.0 Binding 181cm",
	"This ski was used by a large ski shop rental and lease program for a few seasons. The tops have the moderate scrapes and scratches. Additionally, the topskin will have small chips that should not be larger than 1/2. The chips are cosmetic and will not affect the performance of the skis. There is ptex that was done well. The bottoms are smooth and in good shape. The edges are straight. We perform a free basic sharpen and hot wax service before shipment to you.",
	"http://i.ebayimg.com/images/g/RmgAAOSwd0BVrndS/s-l1600.jpg",
	400,
	"Skis",
	2/10/2016,
	"matt_ray",
	80301,
	{Manufacturer: "K2",
	Model: "Strike",
	Length: 181,
	Type: "All Mountain"}
)

$scope.skis4 = new itemObjs(
	"Used 11-12 K2 Rictor Ski with Salomon Z10 Binding 160cm",
	"This ski was used in a mountain ski shop lease and demo program for two seasons. The topskins have scratches and scuff marks. Additionally, the metal tip protectors will most likely be bent out of shape on most skis. On the topskin the ski has small chips that should be not larger than 1/2 in size or A size chips. The chips are cosmetic and will not affect the performance. There is p-tex that was done well. The based do have base repair or core shot repair. The edges are straight. There is a company name and ski length engaved onto the tail of the skis. We perform a free basic sharpen and wax service before shipment.",
	"http://i.ebayimg.com/images/g/tqUAAOxy6MBST0Zm/s-l1600.jpg",
	199,
	"Skis",
	2/10/2016,
	"tom_lovett",
	80302,
	{Manufacturer:	"K2",
	Model:	"Rictor",
	Length:	160,
	Type: "All Mountain",
	Level:	"Advanced"}
)

// Snowboards

$scope.board1 = new itemObjs(
	"Used Burton Progression Snowboard with Large Burton Custom Binding 157c",
	"This Snowboard was used for a few of seasons in a resort demo and rental program. The tops have scrapes, chips, scratches and scuff marks. The topsheet does have chips and slices that should not be over 1. On the tip and tail edge and base there is chair lift dings. The bottom has scrapes, big scratches, gouges and some p-tex repairs. The bindings have lots of frays and slices on the straps and other parts, but are still very functional. Please see our photo for the extra wear on the bindings. The Ratchet buckles on the bindings are functional. They firmly lock the boot to binding and will open and close. However, the return to ready position feature does not work. The spring does not bring the ratchet back into the closed position. There is a serial number engraved into the topsheet. We perform a free basic sharpen and hot wax service before shipment to you.",
	"http://i.ebayimg.com/images/g/jb8AAOSwQJhUiO6J/s-l1600.jpg",
	180,
	"Snowboard",
	2/10/2016,
	"dana_ress",
	80301,
	{Manufacturer:	"Burton",
	Model:	"Progression",
	Length:	157,
	Type: "All Mountain",
	Level:	"Intermediate",
	Binding: "With Bindings",
	Binding: "Size: Large"}
)

$scope.board2 = new itemObjs(
	"Used K2 Rental Black, Red and White Snowboard with Sonic Large Binding 155cm",
	"This is used K2 Rocker Rental snowboard with K2 Sonic Large Binding. The binding will adjust to fit men's snowboard boots from size 8 to 11. Our photos show the bindings separate from the board. However, the bindings will be shipped attached to the snowboard. The Color is Black, Red and White. This is a great intermediate board for a novice or intermediate.",
	"http://i.ebayimg.com/images/g/N78AAOSwjVVVnRCf/s-l1600.jpg",
	200,
	"Snowboard",
	2/10/2016,
	"evan__",
	80302,
	{Manufacturer:	"K2",
	Model: "Rental",
	Length:	155,
	Type: "All Mountain",
	Level: "Intermediate",
	Binding: "With Bindings",
	"Binding Size": "Large"}
)

$scope.board3 = new itemObjs(
	"New High Society Empire Snowboard with New Ride XL Binding 164cm",
	"This is a used High SocietySnowboard. This board does not come with bindings We do not have any other information on this snowboard. This Snowboard wa used in a high end demo and lease program for a few seasons. This board ha scratches and scuff marks. The topsheet will have small chips and slices. Th base will have base scratches and ptex. The edges have slight edge dings fro use. We could not get a good photo of the slight edge dings. We perform a fre basic sharpen and hot wax service before shipment to you.",
	"http://i.ebayimg.com/images/g/tIYAAOSwPgxVMBDd/s-l1600.jpg",
	350,
	"Snowboard",
	2/10/2016,
	"__fatima",
	80026,
	{Manufacturer:	"High Society",
	Model:	"Empire",
	Length:	164,
	Type: "Freeride",
	Level: "Intermediate",
	Binding: "With Bindings",
	"Binding Size": "Extra Large"}
)

$scope.board4 = new itemObjs(
	"Used Fever Cross Snowboard Only 157cm",
	"This is a used Fever Cross Snowboard Only. This board does not come with bindings. We do not have any other information on this snowboard. This Snowboard was used in a high end demo and lease program for a few seasons. This board has scratches and scuff marks. The topsheet will have small chips and slices. The base will have base scratches and ptex. The edges have slight edge dings from use. We could not get a good photo of the slight edge dings. We perform a free basic sharpen and hot wax service before shipment to you.",
	"http://i.ebayimg.com/images/g/CHYAAOSwPgxVLoOQ/s-l1600.jpg",
	400,
	"Snowboard",
	2/10/2016,
	"matt_ray",
	80027,
	{Manufacturer: "Fever",
	Model: "Fever Cross",
	Length:	157,
	Type: "All Mountain",
	Level: "Intermediate",
	Binding: "Without Bindings",
	"Binding Size": "No Binding"}
)

// Snowboard Boots

$scope.boardBoots1 = new itemObjs(
	"Salomon Used Kamooks Snowboard Boots Men's",
	"This is a Used Salomon Kamooks Snowboard boot. This is a great durable all around boot. It has a simple single lacing system where you pull up on the handle, cinch down the lock and then just tuck the handle and extra laces into the side of the boot. Its a great all around boot at a great price, plus you can skip renting and waiting in long lines. The colors are All Brown or Black or Black Blue. The All Black Boots have different colored pull tabs and trim. The tabs and trim were used by rental programs to distinguish sizes. The various color are Red, Blue, Black, Yellow. etc. We can not take color choice. Your boots will come as a matching set with the different colored trim and pull tabs.",
	"http://i.ebayimg.com/images/g/BWMAAOSwZG9Wl7gc/s-l1600.jpg",
	40,
	"BoardBoots",
	2/10/2016,
	"dana_ress",
	80302,
	{Manufacturer:	"Salomon",
	Model:	"Kamooks",
	Color:	"Brown and Black",
	Level:	"Recreational",
	Size: 25.5}
)

$scope.boardBoots2 = new itemObjs(
	"Used K2 Raider Boa Rental Black Snowboard Boots Men's 10",
	"This is a used K2 Raider Boa Rental Black Mens Snowboard boot. This boot features Boa Coiler lacing system on the outer boot and the inner boot liner has a lacing system where you pull up on the handles, cinch down the locks and then just tuck extra laces into the side of the boot. This gives you a nice tight and snug fit for great control of your board as you hit the moguls and halfpipe.",
	"http://i.ebayimg.com/images/g/xrYAAOSwKIpWDYF8/s-l1600.jpg",
	50,
	"BoardBoots",
	2/10/2016,
	"matt_ray",
	80303,
	{Manufacturer:	"K2",
	Model:	"Raider Boa Rental",
	Color:	"All Black",
	Level:	"Intermediate",
	Size:	28}
)

$scope.boardBoots3 = new itemObjs(
	"Used Burton Lodi Black Snowboard Boots Womens Size 8",
	"This is a used Burton Lodi Womens Snowboard boot. These boots have a two liner system with an outside lacing system and an inside lacing system. The outside laces are a simple tie sytem. The inner lace system works where you pull up on the lace lock, cinch down the locks and then just tuck extra laces into the side of the boot. This gives you a nice tight and snug fit for great control of your board as you hit the moguls and halfpipe.",
	"http://i.ebayimg.com/images/g/AjMAAOSwX~dWsLPG/s-l1600.jpg",
	55,
	"BoardBoots",
	2/10/2016,
	"tom_lovett",
	80027,
	{Manufacturer:	"Burton",
	Model:	"Lodi",
	Color:	"All Black",
	Level:	"Intermediate",
	Size: 25}
)

$scope.boardBoots3 = new itemObjs(
	"K2 Used Raider Boa Rental Black Snowboard Boots Men's 10.5",
	"This is a used K2 Raider Boa Rental Black Men's Snowboard boot. This boot features Boa Coiler lacing system on the outer boot and the inner boot liner has a lacing system where you pull up on the handles, cinch down the locks and then just tuck extra laces into the side of the boot. This gives you a nice tight and snug fit for great control of your board as you hit the moguls and halfpipe. This boot has a K2 flex rating of 6.",
	"http://i.ebayimg.com/images/g/ZCkAAOSwB4NWuj9a/s-l1600.jpg",
	59,
	"BoardBoots",
	2/10/2016,
	"__evan",
	80025,
	{Manufacturer:	"K2",
	Model:	"Raider Boa Rental",
	Color:	"All Black",
	Level:	"Intermediate",
	Size:	28.5}
)

$scope.categoriesList = ["Ski", "Snowboard"];

$scope.updateFilter = function(category) {
	console.log("Works");
	if ($scope.categoriesFilter == category) {
		$scope.categoriesFilter = "";
	} else {
		$scope.categoriesFilter = category;
	}
}
var sorted = "";

$scope.sort = function(){
	console.log("works");
	$scope.sorted = "'price'";
}



// function filtered(){
// 	for (var i=0; i < 1; i++){
// 		if ($scope.check.ski == true){
// 			$("#Skis").removeClass('hidden')
// 		} else if ($scope.check.ski == false){
// 			$("#Skis").addClass('hidden')
// 		}
// 	}
// }

// function filtered2(){
// 	for (var i=0; i < 1; i++){
// 		if ($scope.check.skiboot == true){
// 			$("#SkiBoots").removeClass('hidden')
// 		} else if ($scope.check.ski == false){
// 			$("#SkiBoots").addClass('hidden')
// 		}
// 	}
// }

// function filtered3(){
// 	for (var i=0; i < 1; i++){
// 		if ($scope.check.board == true){
// 			$("#Snowboard").removeClass('hidden')
// 		} else if ($scope.check.ski == false){
// 			$("#Snowboard").addClass('hidden')
// 		}
// 	}
// }

// function filtered4(){
// 	for (var i=0; i < 1; i++){
// 		if ($scope.check.boardboot == true){
// 			$("#BoardBoots").removeClass('hidden')
// 		} else if ($scope.check.ski == false){
// 			$("#BoardBoots").addClass('hidden')
// 		}
// 	}
// }



// $scope.ski = function(){
// 	filtered();
// }
// $scope.skiboot = function(){
// 	filtered2();
// }
// $scope.board = function(){
// 	filtered3();
// }
// $scope.boardboot = function(){
// 	filtered4();
// }

$scope.danasItems = []

function sortTest1(){
	$scope.matches1 = _.filter($scope.newerItems, function(obj){
	return obj.username == 'dana_ress';
})
	// $scope.danasItems.push(matches);
	console.log($scope.matches);
}

function sortTest(){
	$scope.matches = _.filter($scope.newItems, function(obj){
	return obj.username == 'dana_ress';
})
	// $scope.danasItems.push(matches);
	console.log($scope.matches);
}
sortTest();


	}])