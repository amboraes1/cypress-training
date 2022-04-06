/// <reference types="Cypress" />

class ShippingPage {
    public tandcCheckbox(): void {
        cy.get("#cgv").click();
    }

    public proceedToCheckoutButton(): void {
        cy.contains("button","Proceed to checkout").click();
    } 
}

export { ShippingPage }
