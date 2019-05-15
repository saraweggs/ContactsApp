const app = angular.module('ContactsApp', []);

app.controller('contactsController', ['$http',function ($http) {
  this.contact = "Sara and Pooja";
}]);
