/// <reference types="Cypress" />

import {
  MenuContentPage,
  CartPage,
  PLPPage,
  SigninPage,
  AddressesPage,
  ShippingPage,
  PaymentPage,
  ConfirmPaymentPage,
  OrderConfirmationPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const plpPage = new PLPPage();
const cartPage = new CartPage();
const signinPage = new SigninPage();
const addressesPage = new AddressesPage();
const shippingPage = new ShippingPage();
const paymentPage = new PaymentPage();
const confirmPaymentPage = new ConfirmPaymentPage();
const orderConfirmationPage = new OrderConfirmationPage();

describe("Buy a t-shirt", () => {
  /*
  it("then the t-shirt should be bought", () => {
    cy.visit("http://automationpractice.com/");
    cy.get("#block_top_menu > ul > li:nth-child(3) > a").click();
    cy.get(
      "#center_column a.button.ajax_add_to_cart_button.btn.btn-default",
    ).click();
    cy.get("[style*='display: block;'] .button-container > a").click();
    cy.get(".cart_navigation span").click();

    cy.get("#email").type("tomas.alvarez@perficient.com");
    cy.get("#passwd").type("test123");

    // Debes completar la prueba ... implementa los pasos 8 al 13, del proceso de compra
    cy.get("#SubmitLogin").click();
    cy.get("button[name='processAddress']").click();

    cy.get("#cgv").click();
    cy.get("button[name='processCarrier']").click();

    cy.get(".bankwire").click();

    cy.contains("span", "I confirm my order").click();

    cy.get("#center_column > div > p > strong").should(
      "have.text",
      "Your order on My Store is complete.",
    );
  });
*/
  it.only("then the t-shirt should be bought POM", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    plpPage.addToCartButton();
    plpPage.proceedToCheckoutButton();

    cartPage.proceedToCheckoutButton();

    signinPage.emailAddressInput("tomas.alvarez@perficient.com");
    signinPage.passwordInput("test123");
    signinPage.signInButton();

    addressesPage.proceedToCheckoutButton();

    shippingPage.tandcCheckbox();
    shippingPage.proceedToCheckoutButton();

    paymentPage.bankwireOption();

    confirmPaymentPage.confirmOrderButton();

    orderConfirmationPage.orderPlacedTitle();
  });
});
