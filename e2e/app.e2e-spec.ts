import { DrownPage } from './app.po';

describe('drown App', () => {
  let page: DrownPage;

  beforeEach(() => {
    page = new DrownPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
