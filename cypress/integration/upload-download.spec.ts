import { UploadPage, DownloadPage } from "../page/index.ts";

let uploadPage: UploadPage;
let downloadPage: DownloadPage;
let textToDownload: string;

describe("Upload file", () => {
  before(() => {
    uploadPage = new UploadPage();
    downloadPage = new DownloadPage();
    textToDownload =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dui lacus, ullamcorper at aliquet ac, porttitor in lectus. Mauris vel rutrum nisi, id ornare arcu. In lacinia lectus a augue luctus pulvinar. Vivamus vel sapien purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum interdum est ac sodales porttitor. Proin metus ante, cursus vel tortor et, ullamcorper ornare mauris. Nunc consectetur placerat neque, et pellentesque ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean porta egestas elit tempor volutpat. Nulla feugiat eget enim id elementum. ";
    Cypress.on("uncaught:exception", () => false);
  });

  it("Upload file", () => {
    uploadPage.visitUploadPage();
    uploadPage.uploadFile();
    uploadPage.getTitleAfterUpload().should("contain.text", "profile.json");
  });

  it("Download File", () => {
    downloadPage.visitDownloadPage();
    downloadPage.downloadFile(textToDownload);
  });
});
