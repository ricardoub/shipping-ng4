import { ShippingNg2Page } from './app.po';

describe('shipping-ng2 App', () => {
  let page: ShippingNg2Page;

  beforeEach(() => {
    page = new ShippingNg2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
