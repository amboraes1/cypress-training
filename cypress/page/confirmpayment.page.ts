/// <reference types="Cypress" />

class ConfirmPaymentPage {
  public confirmOrderButton(): void {
    cy.contains("span", "I confirm my order").click();
  }
}

export { ConfirmPaymentPage };
