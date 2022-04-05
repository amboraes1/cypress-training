/// <reference types="Cypress" />
class PLPPage {

    public addToCartButton(): void {
        cy.get(" div.button-container > a.button.ajax_add_to_cart_button").click();
    }

    public proceedToCheckoutButton(): void {
        cy.get("a[title='Proceed to checkout']").click();
    }
}

export { PLPPage }
