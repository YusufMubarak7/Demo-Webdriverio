import TopicsPage from "../pageobjects/topics.page"
describe('validating Topics Page Elements', () => {
    beforeEach( async () => {
        await TopicsPage.open();
        await expect(browser).toHaveUrlContaining('topics');
        
    });
    it('Verify GMA Topic Index', async() => {
        await TopicsPage.validateGMATopicIndex();
        
    });
});