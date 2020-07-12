// contact constructor
function Contact(name, email, phone, birthDate) {
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.birthDate = birthDate;
}

//UI Constructor
function UI() {}

//add new contact
UI.prototype.addContactToList = function (contact) {
  var list = document.querySelector("#contact-list");
  var tr = document.querySelector(".tr");
  tr.innerHTML = `
    
    <td>${contact.name} </td>
    <td>${contact.email} </td>
    <td>${contact.phone} </td>
    <td>${contact.birthDate} </td>
    <td> <a class="btn btn-floating delete">X</a> </td>
    `;
  list.appendChild(tr);
};

// delete btn
UI.prototype.deleteContactFormList = function (target) {
  if (target.classList.contains("delete")) {
    if (confirm("Are You Sure")) {
      target.parentElement.parentElement.remove();
    }
  }
};
//search
UI.prototype.searchContact = function (search) {
  var allName = document.querySelectorAll("#contact-list tr");
  allName.forEach((rows) => {
    if (rows.children[0].textContent.indexOf(search) != -1) {
      rows.style.display = "table-row";
    } else {
      rows.style.display = "none";
    }
  });
};

UI.prototype.showAlert = function () {};
// after submit clear input field
UI.prototype.clearFields = function (e) {
  document.getElementById("fullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("birth").value = "";
};
/*                             Events                  */
//submit button
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const birthDate = document.getElementById("birth").value;

    const contact = new Contact(name, email, phone, birthDate);

    const ui = new UI();

    if (name == "" || email === "" || phone === "" || birthDate === "") {
      console.log("ERROR");
    } else {
      ui.addContactToList(contact);
      ui.clearFields();
    }
  });

// delete button
document.querySelector("#contact-list").addEventListener("click", function (e) {
  e.preventDefault();
  const ui = new UI();
  ui.deleteContactFormList(e.target);
});

// search event

document.querySelector("#filter").addEventListener("keyup", function (e) {
  const ui = new UI();
  ui.searchContact(e.target.value);
});
