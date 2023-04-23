describe("template spec", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://gateway.marvel.com/v1/public/comics", {
      statusCode: 200,
      fixture: "comics.json",
    });

    cy.visit("http://localhost:3000/");
  });

  it("Should have a logo", () => {
    cy.get("h1").contains("Marvel Comics");
  });

  it("Should have a sort input", () => {
    cy.get(".select-input").contains("Sort");
  });

  it("Should have a search input", () => {
    cy.get('.search-input')
  })
});
