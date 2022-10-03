import BasePage from "../base.page";

class CommonNavItems extends BasePage{
    get commonSectionIndex() {
        return $$(".nav-list>li"); //cssselector
      }
      get commonThree_Dots_Hamburger_Menu(){
        return $("//div[@class='nav-item']"); //xpath
      }
      get commonSearchButton(){
        return $(".global-search-container"); //cssselector
      } 
      get commonOneidContainer(){
        return $$(".oneid-buttons-container>div>a"); //cssselector
      }
}
export default new CommonNavItems();