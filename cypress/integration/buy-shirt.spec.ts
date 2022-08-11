/// <reference types="Cypress" />

// @ts-ignore
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
} from "../page/index.ts";

let menuContentPage: MenuContentPage;
let plpPage: PLPPage;
let cartPage: CartPage;
let signinPage: SigninPage;
let addressesPage: AddressesPage;
let shippingPage: ShippingPage;
let paymentPage: PaymentPage;
let confirmPaymentPage: ConfirmPaymentPage;
let orderConfirmationPage: OrderConfirmationPage;
let userName:string;
let password:string;

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
  before(() => {
    menuContentPage = new MenuContentPage();
    plpPage = new PLPPage();
    cartPage = new CartPage();
    signinPage = new SigninPage();
    addressesPage = new AddressesPage();
    shippingPage = new ShippingPage();
    paymentPage = new PaymentPage();
    confirmPaymentPage = new ConfirmPaymentPage();
    orderConfirmationPage = new OrderConfirmationPage();
    userName = "tomas.alvarez@perficient.com";
    password = "test123";
    menuContentPage.visitMenuContentPage();
  });
  it("then the t-shirt should be bought POM", () => {
    menuContentPage.goToTShirtMenu();

    plpPage.addToCartButton("Faded Short Sleeve T-shirts");
    plpPage.proceedToCheckoutButton();

    cartPage.proceedToCheckoutButton();

    signinPage.signIn(userName, password);

    addressesPage.proceedToCheckoutButton();

    shippingPage.tandcCheckbox();
    shippingPage.proceedToCheckoutButton();

    paymentPage.bankwireOption();

    confirmPaymentPage.confirmOrderButton();

    orderConfirmationPage.orderPlacedTitle();
  });
});
