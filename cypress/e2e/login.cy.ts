describe("Login Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("renders login form", () => {
    cy.contains("Login Form").should("be.visible");

    cy.get('input[placeholder="email"]').should("exist");
    cy.get('input[placeholder="password"]').should("exist");
    cy.get('button[type="submit"]').should("exist");
  });

  it("allows user to type and submit the form", () => {
    cy.get('input[placeholder="email"]').type("test@mail.com");
    cy.get('input[placeholder="password"]').type("123456");

    cy.get('button[type="submit"]').click();

    cy.contains("Form Submitted").should("be.visible");
  });
});
