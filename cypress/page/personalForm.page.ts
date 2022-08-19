class PersonalFormPage {
  private formUrl: string;
  private nameInput: string;
  private lastNameInput: string;
  private emailInput: string;
  private genderInput: string;
  private mobileInput: string;
  private hobbiesInput: string;
  private addressInput: string;

  constructor() {
    this.nameInput = "#firstName";
    this.formUrl = "https://demoqa.com/automation-practice-form";
    this.lastNameInput = "input[#lastName]";
    this.emailInput = "input[#userEmail]";
    this.genderInput = "input[#Male]";
    this.mobileInput = "input[value='userNumber]";
    this.addressInput = "textarea[#currentAddress]";
    this.hobbiesInput = "#hobbiesWrapper";
  }

  public visitFormPage(): void {
    cy.visit(this.formUrl);
  }

  // eslint-disable-next-line max-len
  public fillForm(personalInformation: { name: string; lastName: string; email: string; gender: string; mobileNumber: string; hobbies: string[]; currentAddress: string; }): void {
    //cy.get(this.nameInput);
    //cy.get(this.lastNameInput).type("test");
  }
}

// eslint-disable-next-line import/prefer-default-export
export { PersonalFormPage };
