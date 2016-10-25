class NavBarController {

  /*@ngInject*/
  constructor() {

    this.brand = 'Synopsis';

    this.items = [{
      href: 'home',
      label: 'Home'
    }, {
      href: 'about',
      label: 'About'
    }, {
      href: '#',
      label: 'Contact'
    }];

  }
}

const Navbar = {
  template: require('./navbar.html'),
  controller: NavBarController
};

export default Navbar;
