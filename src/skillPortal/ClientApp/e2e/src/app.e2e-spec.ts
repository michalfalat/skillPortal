import { AppPage } from './app.po';

describe('SkillPortal App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display application title: Quick Application', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('Quick Application');
  });
});
