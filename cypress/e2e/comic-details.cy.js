describe("Comic details page", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://gateway.marvel.com/v1/public/comics/1308", {
      statusCode: 200,
      fixture: "comic.json",
    });
    cy.visit("http://localhost:3000/");
    cy.get(".comics-container").get(".comic-card").eq(3).click();
  });

  it("Should change the url when a comic is clicked", () => {
    cy.url().should("eq", "http://localhost:3000/comicDetails/1308");
  });

  it("Should have an image of the comic", () => {
    cy.get("img").should("be.visible");
  });

  it("Should contain details about the comic book", () => {
    cy.get(".detail-title").contains(
      "Marvel Age Spider-Man Vol. 2: Everyday Hero (Digest)"
    );

    cy.get(".description").contains(
      "The Marvel Age of Comics continues! This time around, Spidey meets his match against such classic villains as Electro and the Lizard, and faces the return of one of his first foes: the Vulture! Plus: Spider-Man vs. the Living Brain, Peter Parker's fight with Flash Thompson, and the wall-crawler tackles the high-flying Human Torch!"
    );

    cy.get(".print-price").contains("Print Price: $5.99");
  });

  it("Should let the user go back to home page with the back button", () => {
    cy.get(".back-btn").click().url().should("eq", "http://localhost:3000/");

    cy.get(".comics-container").should("be.visible")
  });

  it("Should let the user go back to home page with the logo", () => {
    cy.get("h1").click().url().should("eq", "http://localhost:3000/");

    cy.get(".comics-container").should("be.visible")
  });
});
