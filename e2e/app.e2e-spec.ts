import { AngularCliQuickstartPage } from './app.po';

describe('angular-cli-quickstart App', () => {
  let page: AngularCliQuickstartPage;

  beforeEach(() => {
    page = new AngularCliQuickstartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
