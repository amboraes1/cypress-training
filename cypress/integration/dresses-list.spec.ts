/// <reference types="Cypress" />

// eslint-disable-next-line import/extensions
import { MenuContentPage, DressesListPage } from "../page/index";

describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
  });

  it("show the available dresses", () => {
    // ... realiza la prueba

  });
});
