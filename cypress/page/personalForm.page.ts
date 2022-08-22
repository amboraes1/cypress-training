class PersonalFormPage {
  private formUrl: string;
  private nameInput: string;
  private lastNameInput: string;
  private emailInput: string;
  private genderInput: string;
  private mobileInput: string;
  private hobbiesInput: string;
  private addressInput: string;
  private submitButton: string;
  private modalInstance: string;
  private stateInput: string;
  private cityInput: string;

  constructor() {
    this.nameInput = "#firstName";
    this.formUrl = "https://demoqa.com/automation-practice-form";
    this.lastNameInput = "#lastName";
    this.emailInput = "#userEmail";
    this.genderInput = "input[name='gender']";
    this.mobileInput = "#userNumber";
    this.addressInput = "#currentAddress";
    this.hobbiesInput = "div.custom-checkbox";
    this.stateInput = "Select State";
    this.cityInput = "Select City";
    this.submitButton = "#submit";
    this.modalInstance = ".table > tbody > tr";
  }

  public visitFormPage(): void {
    cy.visit(this.formUrl);
  }

  private fillHobbies(hobbies: string[]): void {
    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (let hobbie in hobbies) {
      cy.get(this.hobbiesInput)
        .contains("label", hobbies[hobbie])
        .siblings()
        .click({ force: true });
    }
  }

  // eslint-disable-next-line max-len
  public fillForm(personalInformation: {
    name: string;
    lastName: string;
    email: string;
    gender: string;
    mobileNumber: string;
    hobbies: string[];
    currentAddress: string;
    state: string;
    city: string;
  }): void {
    cy.get(this.nameInput).type(personalInformation.name);
    cy.get(this.lastNameInput).type(personalInformation.lastName);
    cy.get(this.emailInput).type(personalInformation.email);
    cy.get(this.genderInput)
      .filter(`input[value=${personalInformation.gender}]`)
      .click({ force: true });
    cy.get(this.mobileInput).type(personalInformation.mobileNumber);

    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    this.fillHobbies(personalInformation.hobbies);
    cy.get(this.addressInput).type(personalInformation.currentAddress);

    cy.contains(this.stateInput)
      .click({ force: true })
      .type(`${personalInformation.state}{enter}`);
    cy.contains(this.cityInput)
      .click({ force: true })
      .type(`${personalInformation.city}{enter}`);

    cy.get(this.submitButton).click({ force: true });
  }

  private getModalTable(inforequested: string) {
    return cy.get(this.modalInstance).contains("td", inforequested).siblings();
  }

  // eslint-disable-next-line class-methods-use-this
  public checkData(personalInformation: {
    name: string;
    lastName: string;
    email: string;
    gender: string;
    mobileNumber: string;
    hobbies: string[];
    currentAddress: string;
    state: string;
    city: string;
  }): void {
    this.getModalTable("Student Name").should(
      "have.text",
      `${personalInformation.name} ${personalInformation.lastName}`
    );
    this.getModalTable("Student Email").should(
      "have.text",
      `${personalInformation.email}`
    );
    this.getModalTable("Gender").should(
      "have.text",
      `${personalInformation.gender}`
    );
    this.getModalTable("Hobbies").should(
      "have.text",
      `${personalInformation.hobbies[0]}, ${personalInformation.hobbies[1]}`
    );
    this.getModalTable("Address").should(
      "have.text",
      `${personalInformation.currentAddress}`
    );
    this.getModalTable("State and City").should(
      "have.text",
      `${personalInformation.state} ${personalInformation.city}`
    );
  }
}

// eslint-disable-next-line import/prefer-default-export
export { PersonalFormPage };
