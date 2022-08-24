class UploadPage {
  private pageUrl: string;
  private input: string;
  private fileName: string;

  constructor() {
    this.pageUrl = "https://demo.automationtesting.in/FileUpload.html";
    this.input = "#input-4";
    this.fileName = "profile.json";
  }

  public visitUploadPage(): void {
    cy.visit(this.pageUrl);
  }

  public uploadFile(): void {
    cy.get(this.input).attachFile(this.fileName);
  }

  public getTitleAfterUpload() {
    return cy.get(".file-footer-caption");
  }
}

export { UploadPage };
