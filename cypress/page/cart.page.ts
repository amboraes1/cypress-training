/// <reference types="Cypress" />

class CartPage {

  public proceedToCheckoutButton(): void {
    cy.get(".cart_navigation span").click();
  }
}

export { CartPage };
