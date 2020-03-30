import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  describe('default screen', () => {
    beforeEach(() => {
      page.navigateTo('/dasboard');
    });
    it('should say Inicio', () => {
      expect(page.getParagraphText()).toContain('Info sobre el Coronavirus en Paraguay')
    });
  });
});
