import BasePage from "./base.page";
class TopicsPage extends BasePage {
  open() {
    return super.open("topics");
  }
  //locators
  get TopicIndex() {
    return $$("//ol[@class='TagIndex__Cols']/li");
  }
  async validateGMATopicIndex() {
    const actualTopics = [];
    const expectedTopics = [
        "4th of July",
        "Animals",
        "Back to School",
        "Beyonce",
        "Black Friday",
        "Book Club",
        "Breast Cancer",
        "Brightly",
        "Christmas",
        "Climate Change",
        "CMAs",
        "Dancing With the Stars",
        "Debt",
        "Debt Diaries",
        "Disney",
        "Donald Trump",
        "Dressing Room Reveal",
        "Easter",
        "Education",
        "Elections",
        "Emmys",
        "ESPY's",
        "Fathers Day",
        "Flu Season",
        "Furbabies",
        "Golden Globes",
        "Good News",
        "Grammys",
        "Gun Control",
        "Halloween",
        "Herstory Lessons",
        "Hispanic Heritage Month",
        "Holiday Shopping",
        "Infertility",
        "Joe Biden",
        "Justin Bieber",
        "Kanye West",
        "LeBron",
        "Lottery",
        "Marvel",
        "Mental Health",
        "Met Gala",
        "MeToo",
        "Michelle Obama",
        "Miley Cyrus",
        "Miscarriage",
        "Mothers Day",
        "My Morning Routine",
        "Natural Hair",
        "NCAA",
        "New Years",
        "Olympics",
        "On Their Shoulders",
        "Oprah",
        "Oscars",
        "Parenting",
        "Pets",
        "Pride",
        "Queen Elizabeth",
        "Royal Family",
        "SCOTUS",
        "Star Wars",
        "Summer Camp",
        "Super Bowl",
        "Take It From Me",
        "Taylor Swift",
        "Thanksgiving",
        "The Bachelor",
        "The Bachelorette",
        "Twenty-Five Days Of Cookies",
        "Valentines Day",
        "Vaping",
        "Weather",
        "Weddings",
        "Wildfires",
        "Women Who Run",
        "World Cup",
        "Worst Advice I Never Took",
    ];
    const Topics = await this.TopicIndex;
    for (const i of Topics) {
      actualTopics.push(await i.getText());
    }
    await expect(actualTopics).toEqual(expectedTopics);
  }
}
export default new TopicsPage();
