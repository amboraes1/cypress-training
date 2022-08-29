class IframePage {
  private pageUrl: string;
  private iframeSelector: string;
  private cssPageSelector: string;

  constructor() {
    this.pageUrl = "https://www.w3schools.com/html/html_iframe.asp";
    this.iframeSelector = "[src='default.asp']";
    this.cssPageSelector = "a[title='CSS Tutorial']";
  }

  visit() {
    // visit the test page: https://www.w3schools.com/html/html_iframe.asp
    cy.visit(this.pageUrl);
  }

  // eslint-disable-next-line class-methods-use-this
  getFrameTitle() {
    // get the title of the page in the iframe
    return cy
      .frameLoaded(this.iframeSelector)
      .iframe(this.iframeSelector)
      .find("h1");
  }

  goToCssPageInFrame() {
    // navigate to the css page in the iframe
    cy.iframe(this.iframeSelector).find(this.cssPageSelector).click();
  }
}

export { IframePage };
