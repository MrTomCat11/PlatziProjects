import { ProyectOnePage } from './app.po';

describe('proyect-one App', () => {
  let page: ProyectOnePage;

  beforeEach(() => {
    page = new ProyectOnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
