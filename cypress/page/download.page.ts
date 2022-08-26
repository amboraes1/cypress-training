class DownloadPage {
  private pageUrl: string;
  private inputSelector: string;
  private generateButtonSelector: string;
  private downloadButtonSelector: string;

  constructor() {
    this.pageUrl = "https://demo.automationtesting.in/FileDownload.html";
    this.inputSelector = "#textbox";
    this.generateButtonSelector = "#createTxt";
    this.downloadButtonSelector = "#link-to-download";
  }

  public visitDownloadPage(): void {
    cy.visit(this.pageUrl);
  }

  public downloadFile(text: string): void {
    cy.get(this.inputSelector).type(text);
    cy.get(this.generateButtonSelector).click();
    cy.get(this.downloadButtonSelector).click();
    cy.readFile("cypress/downloads/info.txt").should("eq", text);
  }
}

export { DownloadPage };
