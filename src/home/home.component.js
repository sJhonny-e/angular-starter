class HomeController {
	/*@ngInject*/
	constructor(ItemsService) {
		this.itemsService = ItemsService;
		this.items = [];
	}

	$onInit() {
		this.itemsService
			.getItems()
			.then((items) => this.items = items);
			// TODO: error handling	
	}
}

const homeComponent = {
	template: require('./home.html'),
	controller: HomeController
};

export default homeComponent;