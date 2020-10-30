import {} from "cypress";
describe("Testing liking on countries", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Like button exists", () => {
    cy.get("button.btn.btn-outline-secondary.btn-sm")
      .should("be.visible")
      .contains("More details")
      .click();
    cy.get("button.btn.btn-outline-secondary.btn-sm")
      .contains("Like")
      .should("be.visible");
  });

  it("Like button works", () => {
    cy.get("button.btn.btn-outline-secondary.btn-sm")
      .should("be.visible")
      .contains("More details")
      .click();
    cy.get("button.btn.btn-outline-secondary.btn-sm")
      .contains("Like")
      .should("be.visible");
    cy.get(".mb-1")
      .invoke("text")
      .then((text1) => {
        text1.substring(7);
        parseInt(text1);

        cy.get("button.btn.btn-outline-secondary.btn-sm")
          .contains("Like")
          .click();

        cy.get(".mb-1")
          .invoke("text")
          .should((text2) => {
            text1.substring(7);
            parseInt(text1);
            expect(text1).to.not.equal(text2);
          });
      });
  });
});
