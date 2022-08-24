import { UploadPage } from "../page/index.ts";

let uploadPage: UploadPage;

describe("Upload file", () => {
  before(() => {
    uploadPage = new UploadPage();
    Cypress.on("uncaught:exception", () => false);
    uploadPage.visitUploadPage();
  });

  it("Upload file", () => {
    uploadPage.uploadFile();

    uploadPage.getTitleAfterUpload();
  });
});
