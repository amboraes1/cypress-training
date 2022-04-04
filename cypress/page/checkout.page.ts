/// <reference types="Cypress" />

class CheckoutPage {
    public proceedToCheckoutButton(): void {
        cy.contains("button","Proceed to checkout").click();
    }

    public emailAddressInput(emailAddress: string): void {
        cy.get("#email").type(emailAddress);
    }   
    
    public passwordInput(password: string): void {
        cy.get("#passwd").type(password);
    }

    public signInButton(): void {
        cy.get("#SubmitLogin").click();
    }

    public tandcCheckox(): void {
        cy.get("#cgv").click();
    }

    public bankwireOption(): void {
        cy.get(".bankwire").click();
    }

    public confirmOrderButton(): void {
        cy.contains("span", "I confirm my order").click();
    }

    public orderPlacedTitle(): void {
        cy.get("#center_column > div > p > strong")
      .should("have.text", "Your order on My Store is complete.");
    }

    public proceedToCheckoutButtonSummary(): void {
        cy.get(".cart_navigation span").click();
    }
}

export { CheckoutPage }