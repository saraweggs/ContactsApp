const app = angular.module('ContactsApp', []);

app.controller('contactsController', ['$http', function ($http) {
  const controller = this;
  this.indexOfShowContact = null;

  this.createContact = function() {
    $http({
      method: 'POST',
      url: '/contacts',
      data: {
        name: this.name,
        address: this.address,
        phone: this.phone,
        email: this.email
      }
    }).then(function(response) {
      this.getContacts();
    }, function() {
      console.log('error');
    })
  }

  this.getContacts = function() {
    $http({
      method: 'GET',
      url: '/contacts',
    }).then(function(response) {
      controller.contacts = response.data;
    }, function() {
      console.log('error');
    })
  }

  this.getContacts();

}]);
