//oop
// contact constructor

class Contact {
  constructor(name, email, phone, birthday) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.birthday = birthday;
  }
}
//    prototype class
class UI {
  //add
  addToContact(contact) {
    var table = document.querySelector(".tableList");
    var row = document.createElement("tr");
    row.innerHTML = `
    <td>${contact.name}</td>
    <td>${contact.email}</td>
    <td>${contact.phone}</td>
    <td>${contact.birthday}</td>
    <td><a class="btn btn-floating delete">X</a></td>
    `;
    table.appendChild(row);
  }

  // delete
  deleteToContact(cut) {
    if (cut.classList.contains("delete")) {
      if (confirm("Are you Sure")) {
        cut.parentElement.parentElement.remove();
      }
    }
  }

  // search
  searchContact(filter) {
    
  }

  // clear
  clearContact() {
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#phone").value = "";
    document.querySelector("#birth").value = "";
  }
}

//   All Events

//add event
document.querySelector(".form-input").addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var phone = document.querySelector("#phone").value;
  var birthday = document.querySelector("#birth").value;
  var contact = new Contact(name, email, phone, birthday);
  if (name == "" || email == "" || phone == "" || birthday == "") {
    console.log("Error");
  } else {
    var ui = new UI();
    ui.addToContact(contact);
    ui.clearContact();
  }
});

// delete event
document.querySelector(".tableList").addEventListener("click", function (e) {
  var ui = new UI();
  ui.deleteToContact(e.target);
});

// search
document.querySelector("#search").addEventListener("keyup", function (e) {
  var ui = new UI();
  ui.searchContact(e.target.value);
});
