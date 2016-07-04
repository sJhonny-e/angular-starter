class HomeController {
	consutrctor() {

	}
}

HomeController.$inject = [];

const homeComponent = {
	template: require('./home.html'),
	controller: HomeController
};

export default homeComponent;