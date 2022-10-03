import BasePage from "./base.page";
import Homepage from "./GMA-Home.page"

class SearchPage extends BasePage{
    open(){
        return super.open('search');
    }
    //locators
    get searchHeading(){
        return $("//h1[@class='search-page-title page-title']");
    }
    get searchInputBox(){
        return $("//div[@class='col-12 col-md']");
    }
    get searchButton(){
        return $$('.icon-search');

    }
    get searchInput(){
        return $('#search-term');
    }
    get searchMetadata(){
        return $('.search-results-meta');
    }
    get searchResultsCount(){
        return $('.search-results-meta>span');
    }
    get searchFilters(){
        return $$('.search-results-meta-filters>div');
    }
    async verifySearchmetadata_Without_Searching(){
        await expect(this.searchHeading).toBeExisting();
        await expect(this.searchInputBox).toBeExisting();
        await expect(this.searchButton).toBeExisting();
        await expect(this.searchMetadata).toBeExisting();
        const searchcount = await (await this.searchResultsCount).isDisplayed();
        await expect(searchcount).toEqual(false);
        await expect(this.searchFilters).toBeExisting();
    }

}
export default new SearchPage();