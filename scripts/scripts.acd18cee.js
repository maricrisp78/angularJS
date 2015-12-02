"use strict";angular.module("angularJsApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ngStorage"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/current",{templateUrl:"views/current.html",controller:"CurrentCtrl",controllerAs:"current"}).when("/directions/:directions",{templateUrl:"views/directions.html",controller:"DirectionsCtrl",controllerAs:"directions"}).when("/savedHikes",{templateUrl:"views/savedhikes.html",controller:"SavedhikesCtrl",controllerAs:"savedHikes"}).when("/savedHikes",{templateUrl:"views/savedhikes.html",controller:"SavedhikesCtrl",controllerAs:"savedHikes"}).otherwise({redirectTo:"/"})}]),angular.module("angularJsApp").controller("MainCtrl",["$scope","hikeSearch","$localStorage",function(a,b,c){a.findHikes=function(){a.hikesFound=b.find({city_cont:a.location})},a.saveCity=function(a){if(c.savedHikes){for(var b=!0,d=0;d<c.savedHikes.length;d++)c.savedHikes[d].unique_id===a.unique_id&&(b=!1);b===!0?c.savedHikes.push(a):console.log("city already saved")}else c.savedHikes=[],c.savedHikes.push(a)}}]),angular.module("angularJsApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("angularJsApp").factory("hikeSearch",["$resource",function(a){return a("https://trailapi-trailapi.p.mashape.com/?q[city_cont]=:city_cont",{},{find:{method:"GET",headers:{"X-Mashape-Key":"zEe48mTpJumshw1QLLrbFi4g6huSp1AoAgBjsnsYqmtxr90Wqm"},params:{city_cont:""}}})}]),angular.module("angularJsApp").controller("SavedhikesCtrl",["$scope","$localStorage",function(a,b){a.storage=b}]),angular.module("angularJsApp").run(["$templateCache",function(a){a.put("views/about.html",'<p class="about"><strong>About Us:</strong> <br> As the nation\'s largest state-based hiking nonprofit organization, Hiking Bliss is the voice for hikers in Washington state. We protect hiking trails and wildlands, take volunteers out to maintain trails, and promote hiking as a healthy, fun way to explore the outdoors. <br> <br> <strong>Our mission:</strong> <br> To preserve, enhance, and promote hiking opportunities in Washington state through collaboration, education, advocacy and volunteer trail maintenance. <br> <br> <strong>We believe:</strong> <br> Hiking trails are our link to wilderness. That people will protect the places they love to hike, from local parks to remote wilderness. It is vitally important for everyone to have the opportunity to access the outdoors, and we are committed to reducing barriers to hiking trails and lands. </p>'),a.put("views/contact.html","<p>contact page. </p>"),a.put("views/main.html",'<div class="jumbotron" ng-controller="MainCtrl"> <h2>Trails in:</h2> <p class="lead"> <div> <p> <label class="Location">Location: <input type="text" name="location" placeholder="Enter City here" minlength="2" ng-model="location"> </label> </p> <p> <button class="btn btn-lg btn-primary" ng-click="findHikes()">Find me some trails to hike!</button> </p> <p> <a href="#/savedHikes" class="savedHikes" id="btn btn-lg btn-primary">Saved Hikes</a> </p> <br> <!-- {{hikesFound.places[0].city}} --> <ul class="hikeresults"> <li ng-animate="\'animate\'" ng-repeat="hike in hikesFound.places | limitTo: 5"> <strong>{{hike.name}}</strong> | {{hike.city}}, {{hike.state}} <br> {{hike.activities[0].description}} {{hike.activities[0].thumbnail}} <br> <!-- {{hike.thumbnail}} --> <img class="thumbnail" src="images/Mt. Si/Mt. Si5.7da07c6a.jpeg" style="width:200px;height:auto"> <br> <button class="savecity" id="btn btn-lg btn-primary" ng-click="saveCity(hike)">Save hike</button> <br> <br> </li> </ul> </div> <div ng-if="searchQuery"> <p class="lead">{{hikesFound.count}} hikes found matching the query: {{searchQuery}}. </p> <dl ng-animate="\'animate\'" ng-repeat="hike in places"> <dt>{{city.name}}</dt> <dd>{{city.place[0].main}} - {{city.place[0].description}}</dd> <dt>Name</dt> <dd>{{city.name.description}} &deg;F</dd> <dd><a ng-href="/#/hikeSearch/{{place.id}}" class="btn btn-lg btn-primary">View Trails</a></dd> </dl> </div> </p> </div>    <div ng-if="storage.savedCities"> <h2>Saved Cities</h2> <ul class="saved-cities-list"> <li ng-repeat="city in storage.savedCities"> <a ng-href="/#/hikeSearch/{{city.id}}" class="btn btn-lg btn-primary">{{city.name}}</a> </li> </ul> </div>'),a.put("views/savedhikes.html",'<p class="saved">SAVED HIKES</p> <div> <ul class="hikeresults"> <li ng-repeat="hike in storage.savedHikes | limitTo: 5"> <strong>{{hike.name}}</strong> | {{hike.city}}, {{hike.state}} <br> {{hike.activities[0].description}} {{hike.activities[0].thumbnail}} <br> <br> <!--      <button class="savecity" id="btn btn-lg btn-primary" ng-click="saveCity(hike)">Save hike</button> --> <br> <br> </li> </ul> </div>')}]);