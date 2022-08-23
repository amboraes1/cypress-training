/// <reference types="Cypress" />

class AddressesPage {
  public proceedToCheckoutButton(): void {
    cy.contains("button", "Proceed to checkout").click();
  }
}

export { AddressesPage };
