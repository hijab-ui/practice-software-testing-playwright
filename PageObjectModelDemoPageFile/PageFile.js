
class PageFile{
    constructor(page) {
        this.page = page;
        
       // this.clickSlider = page.getByXPath('//ngx-slider[@class ="ngx-slider animate"]');
       this.ResultsText = page.locator('//span[@data-test ="search-term"]'); 
       this.SearchEditBox = page.locator('//input[@placeholder ="Search"]');
      
    }

    async ClickSlider() {
        await this.clickSlider.click();
    }

    async SearchBox() {
        await this.SearchEditBox.click();
    }

   async fillSearchBox(text) {  
        await this.SearchEditBox.fill(text);
    }

    async pressEvent(element, key) {
        if (element === 'keyboard') {
            await this.page.keyboard.press(key);
        }
    }   
 
}

export default PageFile;