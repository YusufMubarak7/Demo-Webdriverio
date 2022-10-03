import Homepage from "../pageobjects/GMA-Home.page";
describe("Validating Homepage Elements", () => {
  beforeEach(async () => {
    await Homepage.open();
    await browser.maximizeWindow();
  });


  it("validate Section index on Home page", async () => {
    await Homepage.Section_index_on_Home_page();
  });

  it("Three_Dots_Hamburger_Menu validation", async () => {
    await Homepage.Three_dot_HamburgerMenu();
  });

  it("Search index icon", async () => {
    await Homepage.searchButton();
  });

  it("valid search", async () => {
    await Homepage.validsearch("abc");
    await browser.pause(3000);
  });

  it("validate Homepage footer elements", async () => {
    await Homepage.verifyFooterElements();
  });
  
});
