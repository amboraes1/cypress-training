import {
  PersonalFormPage,
} from "../page/index.ts";

let formPage : PersonalFormPage;

// eslint-disable-next-line no-unused-vars
const personalInformation = {
  name: "Holmes",
  lastName: "Salazar",
  email: "hibarras@email.com",
  gender: "Male",
  mobileNumber: "3656589156",
  hobbies: ["Music", "Reading"],
  currentAddress: "Av siempreViva # 123",
};

describe("Fill form page", () => {
  before(() => {
    formPage = new PersonalFormPage();
  });
  it("the form should be filled", () => {
    formPage.visitFormPage();
    // console.log("antes del fill form");
    formPage.fillForm(personalInformation);
  });
});
