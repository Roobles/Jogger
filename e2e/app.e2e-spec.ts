import { JoggerPage } from './app.po';

describe('jogger App', function() {
  let page: JoggerPage;

  beforeEach(() => {
    page = new JoggerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
