const app = angular.module('ContactsApp', []);

app.controller('contactsController', ['$http', function ($http) {
  // const controller = this;
  this.indexOfShowContact = null;
  this.indexOfEditFormToShow = null;
  this.createNew = {}
  this.contact = '';
  this.contacts = []

  this.deleteContact = function (id) {
      console.log('delete me ' + id);
      $http({
          method:'DELETE',
          url: '/contacts/' + id
      }).then(response => {
        console.log(response.data);
        const removeByIndex = this.contacts.findIndex(contact => contact._id === id)
        this.contacts.splice(removeByIndex, 1);
      }).catch(error => {
        console.log(error);
      })
  }

  this.updateContact = function(contact) {
    console.log("update me" + contact);
      $http({
        method: 'PUT',
        url: '/contacts/' + contact._id,
        data: {
          address: this.updatedAddress,
          phone: this.updatedPhone,
          email: this.updatedEmail
        }
      }).then(response => {
        console.log(response.data);

      }, error => {
        console.log(error.message)
      })
    }

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
