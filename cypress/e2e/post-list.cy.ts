describe("post list page", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://jsonplaceholder.typicode.com/posts*", {
      statusCode: 200,
      body: [
        {
          userId: 1,
          id: 1,
          title: "Post One",
          body: "Post one body",
        },
        {
          userId: 1,
          id: 2,
          title: "Post Two",
          body: "Post two body",
        },
      ],
    }).as("getPost");
    cy.visit("/post");
  });
  it("should display post list after api call", () => {
    cy.wait("@getPost");
    cy.contains("Post List").should("be.visible");
    cy.contains("Post One").should("be.visible");
    cy.contains("Post Two").should("be.visible");
  });
});
