import angular from 'angular';

class ServiceFactory {

  constructor() {
    this.injector = angular.injector(['ng']);
  }

  getService(name) {
    return this.injector.get(name);
  }

}

export default new ServiceFactory();
