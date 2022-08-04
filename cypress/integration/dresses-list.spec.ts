/// <reference types="Cypress" />

// eslint-disable-next-line import/extensions
// @ts-ignore
import { MenuContentPage, DressesListPage } from "../page/index";

describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;
  const dressesName:string[] = [];

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
    dressesName.push("Printed Dress");
    dressesName.push("Printed Dress");
    dressesName.push("Printed Summer Dress");
    dressesName.push("Printed Summer Dress");
    dressesName.push("Printed Chiffon Dress");
    menuContentPage.visitMenuContentPage();
  });

  it("show the available dresses", () => {
    menuContentPage.goToDressMenu();

    dressesListPage.validateItemsNumber(dressesName.length);

    dressesListPage.validateItemsNames(dressesName);
  });
});
