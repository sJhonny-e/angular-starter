import NavBar from './navbar';

describe('Navbar Component Tests', () => {

  let controller;

  beforeEach(() => {
    controller = NavBar.controller();
  });

  it('should have the Synopsis brand', () => {
    expect(controller.brand).toEqual('Synopsis');
  });

  it('should have 3 menu items', () => {
    expect(controller.items.length).toEqual(3);
  });

  it('should select the clicked item', () => {

    var itemToClick = controller.items[2];
    expect(itemToClick.isActive).toEqual(false);

    controller.onItemClicked(itemToClick);
    expect(itemToClick.isActive).toEqual(true);

  });

});
