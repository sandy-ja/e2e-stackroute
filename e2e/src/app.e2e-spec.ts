import { AppPage } from './app.po';
import { browser, logging, element, by } from 'protractor';

describe('Movie App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should load movie component on base url', () => {
    
  });

  it('should load movie component view on clicking add movie and verify the url', () => {
   
  });

  it('should contain <router-outlet>', () => {
   
  });

  // given empty title to form
  it('should check form if title is empty', async () => {
   
  });

  // given empty story to form
  it('should check form if story is empty', async () => {
   
  });

  // given valid title to form and empty story
  it('should check form is valid or not', async () => {
   
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
