const app = angular.module('ContactsApp', []);

app.controller('contactsController', ['$http', function ($http) {
  // const controller = this;
  this.indexOfShowContact = null;
  this.createNew = {}
  this.contact = '';
  this.contacts = []

  this.createContact = function() {
    $http({
      method: 'POST',
      url: '/contacts',
      data: this.createNew
    }).then(response => {
      this.contacts.unshift(response.data)
      this.createNew = {}
    }, error => {
      console.log(error);
    })
  }

  this.getContacts = () => {
    $http({
      method: 'GET',
      url: '/contacts'
    }).then(response => {
      this.contacts = response.data
      this.contact = this.contacts[0]
    }, error => {
      console.log(error);
    })
  }

  this.getContacts();

}]);
