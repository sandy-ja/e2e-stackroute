import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('Movie App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should load movie component on base url', () => {
    browser.get('/');
    element(by.linkText('Add Movie')).click();
    expect(browser.getCurrentUrl())
      .toEqual(browser.baseUrl + 'addmovie');
    
  });

  it('should load movie component view on clicking add movie and verify the url', () => {
    browser.get('addmovie');
    element(by.linkText('Add Movie')).click();
    expect(browser.getCurrentUrl())
      .toEqual(browser.baseUrl + 'addmovie');
   
  });

  it('should contain <router-outlet>', () => {
    page.navigateTo();
    expect(page.getRouterOutlet).toBeTruthy('<router-outlet> should exist in app.component.html');
   
  });

  // given empty title to form
  it('should check form if title is empty', async () => {
    page.navigateToAddMovie();
    element(by.css('input[type="text"]')).sendKeys();
    element(by.css('.btn')).click();
    expect(element(by.css('.alert')).getText()).toBe('Title and Story should not be empty!!! Please verify details');
   
  });

  // given empty story to form
  it('should check form if story is empty', async () => {
    page.navigateToAddMovie();
    element(by.css('textarea')).sendKeys();
    element(by.css('.btn')).click();
    expect(element(by.css('.alert')).getText()).toBe('Title and Story should not be empty!!! Please verify details');
   
  });

  // given valid title to form and empty story
  it('should check form is valid or not', async () => {
    page.navigateToAddMovie();
    element(by.css('input[type="text"]')).sendKeys('test');
    element(by.css('.btn')).click();
    expect(element(by.css('.alert')).getText()).toBe('Title and Story should not be empty!!! Please verify details');
   
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
