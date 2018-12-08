import HeaderDriver from './Header.driver';
  
describe('initial test', () => {
  let driver;

  beforeEach(() => {
    driver = new HeaderDriver();
  });

  test('fake', () => {
    expect(1).toBe(1);
  })
});
  