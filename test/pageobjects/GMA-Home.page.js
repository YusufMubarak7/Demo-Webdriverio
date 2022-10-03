import BasePage from "./base.page";
import commNavItems from "../pageobjects/components/commNavigation.comp";

class Homepage extends BasePage {
  open() {
    return super.open("");
  }

  //locators
  get HeaderElements() {
    return $$('//div[@class="col-6 col-md footer-column"]/ul/li/a'); //xpath
  }
  get search_InputBox() {
    return $(".global-search-input"); //css
  }
  get doticonexpand() {
    return $("//div[@class='drop-down dditem']"); //xpath
  }

  get scrollingTotheBottom() {
    return browser.execute("window.scrollBy(0,document.body.scrollHeight)"); //java script
  }

  //TestCases
  async Section_index_on_Home_page() {
    const index_on_Homepage = await commNavItems.commonSectionIndex;
    const actualHomepageIndex = [];
    for (const i of index_on_Homepage) {
      actualHomepageIndex.push(await i.getText());
    }
    const expectedHomepageIndex = [
      "VIDEO",
      "SHOP",
      "WELLNESS",
      "FOOD",
      "CULTURE",
      "FAMILY",
      "LIVING",
      "STYLE",
    ];
    await expect(actualHomepageIndex).toEqual(expectedHomepageIndex);
  }

  async Three_dot_HamburgerMenu() {
    const Focusing_on_three_dots = commNavItems.commonThree_Dots_Hamburger_Menu;
    await expect(Focusing_on_three_dots).toExist();
    await Focusing_on_three_dots.moveTo();
    await expect(this.doticonexpand).toExist();
  }

  async searchButton() {
    const search_button = commNavItems.commonSearchButton;
    const btn = await search_button.click();
    await expect(this.search_InputBox).toHaveAttributeContaining(
      "placeholder",
      "Search topics, writers and more"
    );
  }
  async validsearch(value) {
    const search_button = commNavItems.commonSearchButton;
    const btn = await search_button.click();
    const search = await this.search_InputBox.setValue(value);
    await browser.keys("Enter");
  }

  async verifyFooterElements() {
    const scrolling = await this.scrollingTotheBottom;
    const elements = await this.HeaderElements;
    const actualElements = [];
    for (const i of elements) {
      actualElements.push(await i.getText());
    }
    const expectedElements = [
      "Contests",
      "Terms of Use",
      "Privacy Policy",
      "Do Not Sell My Info",
      "Children’s Online Privacy Policy",
      "Advertise with us",
      "Your CA Privacy Rights",
      "Interest-Based Ads",
      "About Nielsen Measurement",
      "Press",
      "Feedback",
      "ABC News",
      "ABC",
      "All Videos",
      "All Topics",
      "Sitemap",
    ];
    await expect(actualElements).toEqual(expectedElements);
  }
}

export default new Homepage();
