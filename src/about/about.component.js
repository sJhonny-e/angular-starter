class controller {
  /*@ngInject*/
  constructor() {
    this.title = 'About Us';
  }
}

export default {
  template: require('./about.html'),
  controllerAs: 'AboutCtrl',
  controller
}
