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
