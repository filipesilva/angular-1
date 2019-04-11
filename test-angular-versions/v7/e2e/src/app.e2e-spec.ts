import { browser, logging, element, by } from 'protractor';

describe('workspace-project App', () => {
  it('should display lazy route1', () => {
    browser.get(browser.baseUrl + '/lazy1');
    expect(element(by.css('app-lazy p')).getText()).toEqual('lazy1 works!');
  });

  it('should display lazy route2', () => {
    browser.get(browser.baseUrl + '/lazy2');
    expect(element(by.css('app-lazy p')).getText()).toEqual('lazy2 works!');
  });

  it('should display lazy route3', () => {
    browser.get(browser.baseUrl + '/lazy3');
    expect(element(by.css('app-lazy p')).getText()).toEqual('lazy3 works!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
