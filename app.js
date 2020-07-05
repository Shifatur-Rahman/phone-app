//OOP apply

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

  // search  => tableList > tr > td
  searchContact(filter) {
    document.querySelectorAll(".tableList tr").forEach((row) => {
      var rowName = row.children[0].textContent;
      if (rowName.indexOf(filter) != -1) {
        row.style.display = "table-row";
      } else {
        row.style.display = "none";
      }
    });
  }

  // clear
  clearContact() {
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#phone").value = "";
    document.querySelector("#birth").value = "";
  }

  //show alert
  showAlert(msg, alertType) {}
}

// Local storage
class store {
  // get store
  static getContact() {
    var contact;
    if (localStorage.getItem("contacts") == null) {
      contact = [];
    } else {
      contact = JSON.parse(localStorage.getItem("contacts"));
    }
    return contact;
  }
  // display store
  static displayContact() {
    var display = store.getContact();
    display.forEach((displayValue) => {
      var ui = new UI();
      ui.addToContact(displayValue);
    });
  }
  // add store
  static addContact(getValue) {
    var contacts = store.getContact();
    contacts.push(getValue);
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }
  // remove store
  static removeStore(phone) {
    const contacts = store.getContact();
    contacts.forEach((contact, index) => {
      if (contact.phone == phone) {
        contacts.splice(index, 1);
      }
    });
    localStorage.setItem("contacts", JSON.stringify(contacts));
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
    store.addContact(contact);
    ui.addToContact(contact);
    ui.clearContact();
  }
});

// delete event
document.querySelector(".tableList").addEventListener("click", function (e) {
  var ui = new UI();
  ui.deleteToContact(e.target);
  store.removeStore(
    e.target.parentElement.parentElement.children[2].textContent
  );
});

// search
document.querySelector("#search").addEventListener("keyup", function (e) {
  var ui = new UI();
  ui.searchContact(e.target.value);
});

// local storage load
document.addEventListener("DOMContentLoaded", store.displayContact());
