import SearchPage from '../pageobjects/search-results.page';
describe('Search Page Validation', () => {
    beforeEach(async () => {
        await SearchPage.open();
        await expect(browser).toHaveUrlContaining('search');
   
    });
    it('search page validation', async() => {
        await SearchPage.verifySearchmetadata_Without_Searching();
        
        
    });
});