function Contact(name, email, phone, birth) {
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.birth = birth;
}
// prototype class
function UI() {}
// add contact
UI.prototype.add = function (contact) {
  var contactList = document.querySelector(".tableList");
  var tr = document.createElement("tr");
  tr.innerHTML = `
  <td class="center-align">${contact.name}</td>
  <td class="center-align">${contact.email}</td>
  <td class="center-align">${contact.phone}</td>
  <td class="center-align">${contact.birth}</td>
  <td class="delete btn teal btn-floating center-align">X</td>
  
  `;
  contactList.appendChild(tr);
};
// delete contact
UI.prototype.delete = function (e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you Sure ?")) {
      e.target.parentElement.remove();
    }
  }
};
// search Contact
UI.prototype.search = function (e) {
  var text = e.target.value;
  console.log(text);
};
// clear contact
UI.prototype.clear = function () {
  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#phone").value = "";
  document.querySelector("#birth").value = "";
};

//   Events
//add
document.querySelector(".form-input").addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var phone = document.querySelector("#phone").value;
  var birth = document.querySelector("#birth").value;

  // instantiate Contact
  var contact = new Contact(name, email, phone, birth);
  // instantiate UI
  var ui = new UI();
  if (name == "" || email == "" || phone == "" || birth == "") {
    console.log("Error");
  } else {
    ui.add(contact);
    ui.clear();
  }
});
// delete
document.querySelector(".tableList").addEventListener("click", function (e) {
  var ui = new UI();
  ui.delete(e);
});

// search
document.querySelector("#search").addEventListener("keyup", function (e) {
  var ui = new UI();
  ui.search(e);
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".datepicker");
  M.Datepicker.init(elems);
});
