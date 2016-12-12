import { PaddLogPage } from './app.po';

describe('padd-log App', function() {
  let page: PaddLogPage;

  beforeEach(() => {
    page = new PaddLogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
