class PageFile {
  constructor(page) {
    this.page = page;

    // Static elements ONLY
    this.ResultsText = page.locator('span[data-test="search-term"]');
    this.SearchEditBox = page.locator('input[placeholder="Search"]');
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

  // ✅ Dynamic logic goes here
  async selectNestedCheckbox(parentText, childText) {

    // 1️⃣ Scope to correct fieldset
    const categoryFieldset = this.page
      .locator('fieldset')
      .filter({ hasText: parentText });

    await categoryFieldset.first().waitFor({ state: 'visible' });

    // 2️⃣ Parent checkbox
    const parentCheckbox = categoryFieldset
      .locator('label', { hasText: parentText })
      .locator('input[type="checkbox"]');

    await parentCheckbox.check();

    // 3️⃣ Child checkbox inside same fieldset
    const childCheckbox = categoryFieldset
      .locator('label', { hasText: childText })
      .locator('input[type="checkbox"]');

    await childCheckbox.check();
  }
}

export default PageFile;
