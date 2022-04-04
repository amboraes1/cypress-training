/// <reference types="Cypress" />

class OrderConfirmationPage {

    public orderPlacedTitle(): void {
        cy.get("#center_column > div > p > strong")
      .should("have.text", "Your order on My Store is complete.");
    }

}

export { OrderConfirmationPage }