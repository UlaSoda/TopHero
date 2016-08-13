import { TopHeroPage } from './app.po';

describe('top-hero App', function() {
  let page: TopHeroPage;

  beforeEach(() => {
    page = new TopHeroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
