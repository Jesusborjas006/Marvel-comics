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
    cy.get(".search-input");
  });

  it("Should have a container with different comics", () => {
    cy.get(".comics-container").get(".comic-card").should("have.length", 20);
  });

  it("Should have comics with image, title, and price", () => {
    cy.get(".comic-card")
      .eq(3)
      .contains("Marvel Age Spider-Man Vol. 2: Everyday Hero (Digest)");

    cy.get(".comic-card").eq(3).contains("Price: $5.99");

    cy.get(".comic-card").eq(3).get("img").should("have.attr", "src");
  });

  it("Should sort the comics by issue number", () => {
    cy.get(".comics-container")
      .get(".comic-card")
      .first()
      .contains("Marvel Previews (2017)");

    cy.get(".comics-container")
      .get(".comic-card")
      .last()
      .contains("Ant-Man (2003) #2");

    cy.get(".select-input").select("Issue Number");

    cy.get(".comics-container")
      .get(".comic-card")
      .first()
      .contains("Marvel Previews (2017)");

    cy.get(".comics-container")
      .get(".comic-card")
      .last()
      .contains("Official Handbook of the Marvel Universe (2004) #13 (TEAMS)");
  });

  it("Should sort the comics by price (Low to High)", () => {
    cy.get(".comics-container")
      .get(".comic-card")
      .first()
      .contains("Marvel Previews (2017)");

    cy.get(".comics-container")
      .get(".comic-card")
      .last()
      .contains("Ant-Man (2003) #2");

    cy.get(".select-input").select("Price (Low to High)");

    cy.get(".comics-container")
      .get(".comic-card")
      .first()
      .contains("Marvel Previews (2017)");

    cy.get(".comics-container")
      .get(".comic-card")
      .last()
      .contains("X-Men: Days of Future Past (Trade Paperback)");
  });

  it("Should sort the comics by price (High to Low)", () => {
    cy.get(".comics-container")
      .get(".comic-card")
      .first()
      .contains("Marvel Previews (2017)");

    cy.get(".comics-container")
      .get(".comic-card")
      .last()
      .contains("Ant-Man (2003) #2");

    cy.get(".select-input").select("Price (High to Low)");

    cy.get(".comics-container")
      .get(".comic-card")
      .first()
      .contains("Sentry, the (Trade Paperback)");

    cy.get(".comics-container")
      .get(".comic-card")
      .last()
      .contains("Storm (2006)");
  });
});
