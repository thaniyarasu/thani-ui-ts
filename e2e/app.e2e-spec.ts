import { ThaniUiPage } from './app.po';

describe('thani-ui App', () => {
  let page: ThaniUiPage;

  beforeEach(() => {
    page = new ThaniUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
