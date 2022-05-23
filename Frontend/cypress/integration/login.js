import "cypress-localstorage-commands";

it("should log in", () => {
  cy.setLocalStorage("login", "test login");
  cy.setLocalStorage("password", "test password");

  cy.visit("http://localhost:3000");
});

it.only("should log in then be logout because clear localStorage", () => {
  cy.setLocalStorage("login", "test login");
  cy.setLocalStorage("password", "test password");

  cy.visit("http://localhost:3000");
  cy.url().should("equal", "http://localhost:3000/");

  cy.wait(2000);

  cy.removeLocalStorage("login");
  cy.removeLocalStorage("password");

  cy.visit("http://localhost:3000");
  cy.url().should("equal", "http://localhost:3000/login");
});

// it("should log in", () => {
//   cy.reuqest("POST", "http://localhost:3000/login", {
//     body: {
//       email: "a@a.pl",
//       password: "123",
//     },
//   }).then((res) => cy.log(res
// ));
// });
