class MenuContentPage {
    private tShirtMenu: string;
    private menuContentPageURL: string;
    private dressesMenu: string;

    constructor() {
        this.tShirtMenu = "#block_top_menu > ul > li:nth-child(3) > a";
        this.menuContentPageURL = "http://automationpractice.com/";
        this.dressesMenu = ".sf-menu > :nth-child(2) > .sf-with-ul";
    }

    public visitMenuContentPage(): void {
        cy.visit(this.menuContentPageURL);
    }

    public goToTShirtMenu(): void {
        cy.get(this.tShirtMenu).click();
    }

    public goToDressMenu(): void {
        cy.get(this.dressesMenu).click();
    }

}
export { MenuContentPage }
