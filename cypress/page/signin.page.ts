/// <reference types="Cypress" />

class SigninPage {
  public emailAddressInput(emailAddress: string): void {
    cy.get("#email").type(emailAddress);
  }

  public passwordInput(password: string): void {
    cy.get("#passwd").type(password);
  }

  public signIn(username: string, password: string): void {
    cy.get("#email").type(username);
    cy.get("#passwd").type(password);
    cy.get("#SubmitLogin").click();
  }

  public signInButton(): void {
    cy.get("#SubmitLogin").click();
  }
}
export { SigninPage };
