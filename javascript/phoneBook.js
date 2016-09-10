/*
filename: phoneBook.js
author:   ben silbernagel
created:  9-8-2016
project:  simple contact phone book
class:    codecademy
*/

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/

search = function(lastName) {
  var contactsLength = contacts.length;
  
  for(var i = 0; i < contactsLength; i++) {
    if(lastName === contacts[i].lastName) {
        printPerson(contacts[i]);
    }
  }
}

add = function(firstName, lastName, email, phoneNumber) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.email = email,
    this.phoneNumber = phoneNumber
}
steve = new add('Steve', 'Job', 'steve.job@email.com', '(204) 345-5432');

contacts[2] = steve;
list('Steve');