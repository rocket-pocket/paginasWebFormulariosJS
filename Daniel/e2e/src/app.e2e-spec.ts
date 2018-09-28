import { HomePage } from './home.po';

describe('workspace-project App', () => {
  let homePage: HomePage;

  beforeEach(() => {
    homePage = new HomePage();
  });

  it('should display "Angular" in h1', () => {
    homePage.navigateTo();
    expect(homePage.getTitleText()).toContain('Angular');
  });
  it('should display "CAS" in footer', () => {
    homePage.navigateTo();
    expect(homePage.getFooterText()).toContain('CAS');
  });
});
