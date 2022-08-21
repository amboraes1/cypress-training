import { PersonalFormPage } from "../page/index.ts";

let formPage: PersonalFormPage;

// eslint-disable-next-line no-unused-vars
const personalInformation = {
  name: "Holmes",
  lastName: "Salazar",
  email: "hibarras@email.com",
  gender: "Male",
  mobileNumber: "3656589156",
  hobbies: ["Music", "Reading"],
  currentAddress: "Av siempreViva # 123",
  state: "NCR",
  city: "Delhi",
};

describe("Fill form page", () => {
  before(() => {
    formPage = new PersonalFormPage();
    Cypress.on("uncaught:exception", () => false);
    formPage.visitFormPage();
  });
  it("the form should be filled", () => {
    formPage.fillForm(personalInformation);

    formPage.checkData(personalInformation);
  });
});
