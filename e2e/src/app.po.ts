import { browser, by, element, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }


  navigateToAddMovie() {
    return browser.get('/addmovie');
  }

  getRouterOutlet(): ElementFinder {
    return element(by.tagName('router-outlet'));
  }}
