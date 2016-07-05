import '../index';  // import the module under test

describe('Navbar Component', () => {

  beforeEach(window.module('components.module')); 

  let $componentController;
  beforeEach(window.inject((_$componentController_) => {
    $componentController = _$componentController_;
  }));

  it('has the Synopsis brand', () => {
    let component = $componentController('navbar', null, {});
    expect(component.brand).toEqual('Synopsis');
  });

  it('has 3 menu items', () => {
    let component = $componentController('navbar', null, {});
    expect(component.items.length).toEqual(3);
  });


  describe('#onItemClicked', () => {
    it('selects the clicked item', () => {
      let component = $componentController('navbar', null, {});

      var itemToClick = component.items[2];
      expect(itemToClick.isActive).toBe(false);

      component.onItemClicked(itemToClick);
      expect(itemToClick.isActive).toBe(true);
    });
  });

});
