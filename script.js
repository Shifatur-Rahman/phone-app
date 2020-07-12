function Contact(name, email, phone, birthDay) {
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.birthday = birthday;
}
// prototype class
function UI() {}
// add contact
UI.prototype.add = function () {};
// delete contact
UI.prototype.delete = function () {};
// search Contact
UI.prototype.search = function () {};
// clear contact
UI.prototype.clear = function () {
  document.querySelector("#name").value = " ";
  document.querySelector("#email").value = " ";
  document.querySelector("#phone").value = " ";
  document.querySelector("#birth").value = " ";
};

//   Events

document.querySelector(".form-input").addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var phone = document.querySelector("#phone").value;
  var birth = document.querySelector("#birth").value;
  var contactList = document.querySelector(".tableList");
});
