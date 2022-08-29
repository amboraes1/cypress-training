import { IframePage } from "../page/index.ts";

let iframePage: IframePage;

describe("Iframe Interaction", () => {
  before(() => {
    iframePage = new IframePage();
    Cypress.on("uncaught:exception", () => false);
    iframePage.visit();
  });

  it("Interacting with the Iframe ", () => {
    iframePage.getFrameTitle().should("have.text", "HTML Tutorial");
    iframePage.goToCssPageInFrame();

    iframePage.frameLoaded();
    iframePage.getFrameTitle().should("have.text", "CSS Tutorial");
  });
});
