import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  describe('default screen', () => {
    beforeEach(() => {
<<<<<<< HEAD
      page.navigateTo('/Inbox');
    });
    it('should say Inbox', () => {
      expect(page.getParagraphText()).toContain('Inbox');
=======
      page.navigateTo('/dasboard');
    });
    it('should say Inicio', () => {
      expect(page.getParagraphText()).toContain('Info sobre el Coronavirus en Paraguay')
>>>>>>> ec17480f9c8f553f64c29d0d8cc56d7b972cac5f
    });
  });
});
