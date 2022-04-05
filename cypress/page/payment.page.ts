/// <reference types="Cypress" />

class PaymentPage {
    public bankwireOption(): void {
        cy.get(".bankwire").click();
    }
}

export { PaymentPage }
