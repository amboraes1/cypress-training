/// <reference types="Cypress" />

class SigninPage {
    public emailAddressInput(emailAddress: string): void {
        cy.get("#email").type(emailAddress);
    }   
    
    public passwordInput(password: string): void {
        cy.get("#passwd").type(password);
    }

    public signInButton(): void {
        cy.get("#SubmitLogin").click();
    }
}
export { SigninPage }
