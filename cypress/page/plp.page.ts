/// <reference types="Cypress" />
class PLPPage {
  private productItem: string;

  constructor() {
    this.productItem = ".product-container";
  }

  public addToCartButton(name: string): void {
    // cy.get(" div.button-container > a.button.ajax_add_to_cart_button").click();
    this.findProductByName(name).get(" div.button-container > a.button.ajax_add_to_cart_button").click();
  }

  public proceedToCheckoutButton(): void {
    cy.get("a[title='Proceed to checkout']").click();
  }

  findProductByName(name:string) {
    return cy.get(this.productItem).filter(`:contains(${name})`);
  }
}

export { PLPPage };
