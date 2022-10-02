import personFacade from "./personFacade.js";

function writePersons() {
  personFacade
    .getPersons()
    .then((persons) => {
      const personRows = persons.map(
        (person) => `
        <tr>
            <td scope="row">${person.email}</td>
            <td>${person.firstName}</td>
            <td>${person.lastName}</td>
            <td>${person.phone.phoneNumber}</td>
            <td>${person.hobby.name}</td>
            <td>${person.address.street}</td>
            <td>${person.address.additionalInfo}</td>
        </tr>
        `
      );
      const personRowsAsString = personRows.join("");
      document.getElementById("table__body").innerHTML = personRowsAsString;
      document.getElementById("table__head").innerHTML = `<tr><th scope="col">Email</th><th scope="col">First Name</th><th scope="col">Last Name</th><th scope="col">Phone</th><th scope="col">Hobbies</th><th scope="col">Street Name</th><th scope="col">Street Additional Info</th></tr>`;
    })
    .catch((err) => {
      if (err.status) {
        err.fullError.then((e) => console.log(e.msg));
      } else {
        console.log("Network error");
        console.log(err);
      }
    });
}

writePersons();

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
});
