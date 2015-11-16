"use strict";angular.module("angularJsApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ngStorage"]).config(function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/current",{templateUrl:"views/current.html",controller:"CurrentCtrl",controllerAs:"current"}).when("/directions/:directions",{templateUrl:"views/directions.html",controller:"DirectionsCtrl",controllerAs:"directions"}).otherwise({redirectTo:"/"})}),angular.module("angularJsApp").controller("MainCtrl",function(a,b,c){a.findHikes=function(){a.hikesFound=b.find({city_eq:a.location})},a.saveCity=function(a){if(c.savedCities){for(var b=!0,d=0;d<c.savedCities.length;d++)c.savedCities[d].id===a.id&&(b=!1);b?c.savedCities.push(a):console.log("city already saved")}else c.savedCities=[],c.savedCities.push(a)}}),$(document).ready(function(){var a={username:" guest"};$("#login-form").on("click",function(){$("#login-form").hide(),$(".user-info").show(),$(".username").text(a.username),$(".submit").on("click",function(){$(".submit").show(),$("#login-form").hide(),$(".user-info").hide()++})})}),angular.module("angularJsApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularJsApp").factory("hikeSearch",function(a){return a("https://outdoor-data-api.herokuapp.com/api.json?api_key=3d915e7fea908a3df09ece5462427d44&city_eq=:city_eq",{},{find:{method:"JSONP",params:{city_eq:"",callback:"JSON_CALLBACK"}}})}),angular.module("angularJsApp").run(["$templateCache",function(a){a.put("views/about.html",'<p class="about"><strong>About Us:</strong> <br> As the nation\'s largest state-based hiking nonprofit organization, Washington Trails Association is the voice for hikers in Washington state. We protect hiking trails and wildlands, take volunteers out to maintain trails, and promote hiking as a healthy, fun way to explore the outdoors. <br> <br> <strong>Our mission:</strong> <br> To preserve, enhance, and promote hiking opportunities in Washington state through collaboration, education, advocacy and volunteer trail maintenance. <br> <br> <strong>We believe:</strong> <br> Hiking trails are our link to wilderness. That people will protect the places they love to hike, from local parks to remote wilderness. It is vitally important for everyone to have the opportunity to access the outdoors, and we are committed to reducing barriers to hiking trails and lands. </p>'),a.put("views/contact.html","<p>contact page. </p>"),a.put("views/directions.html",'<h1>Click here for directions {{hikesData.city.name}} {{hikesData.city.country}}</h1> <div ng-model="hikeData">{{hikeData}}</div> <dl ng-repeat="directions is hikesData.list" class="directions"> {{hike.name.directions}} <p><a ng-href="/#/current/{{city_eq}}" class="btn btn-lg btn-primary">Click here for directions</a></p></dl>'),a.put("views/main.html",'<div class="jumbotron" ng-controller="MainCtrl"> <h2>Trails in:</h2> <p class="lead"> <div> <p> <label class="Location">Location: <input type="text" name="Location" placeholder="Enter City here" minlength="2" ng-model="location"> </label> </p> <p> <button class="btn btn-lg btn-primary" ng-click="findHikes()">Find me some trails to hike!</button> </p> <p> <button class="directions" id="btn btn-lg btn-primary" ng-click="directions()">Saved Hikes</button> </p> <br> <!-- {{hikesFound.places[0].city}} --> <ul class="hikeresults"> <li ng-animate="\'animate\'" ng-repeat="hike in hikesFound.places | limitTo: 5"> <strong>{{hike.name}}</strong> | {{hike.city}}, {{hike.state}} <br> {{hike.activities[0].description}} {{hike.activities[0].thumbnail}} <br> {{hike.thumbnail}} <img class="thumbnail" src="images/Mt. Si/Mt. Si5.7da07c6a.jpeg" style="width:200px;height:auto"> <br> <button class="directions" id="btn btn-lg btn-primary" ng-click="directions()">Click here for directions</button> <button class="savecity" id="btn btn-lg btn-primary" ng-click="saveCity(hike)">Save hike</button> <br> <br> </li> </ul> </div> <div ng-if="searchQuery"> <p class="lead">{{hikesFound.count}} hikes found matching the query: {{searchQuery}}. </p> <dl ng-animate="\'animate\'" ng-repeat="hike in places"> <dt>{{city.name}}</dt> <dd>{{city.place[0].main}} - {{city.place[0].description}}</dd> <dt>Name</dt> <dd>{{city.name.description}} &deg;F</dd> <dd><a ng-href="/#/hikeSearch/{{place.id}}" class="btn btn-lg btn-primary">View Trails</a></dd> </dl> </div> </p> </div>    <div ng-if="storage.savedCities"> <h2>Saved Cities</h2> <ul class="saved-cities-list"> <li ng-repeat="city in storage.savedCities"> <a ng-href="/#/hikeSearch/{{city.id}}" class="btn btn-lg btn-primary">{{city.name}}</a> </li> </ul> </div>')}]);