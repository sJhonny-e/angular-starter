import './index';	//import the module under test

describe('Home component', () => {
	let $componentController, $q, $rootScope;
	let mockItemsService;

	beforeEach(window.module('home.module'));	

	beforeEach(() => {
		mockItemsService = jasmine.createSpyObj('Items service', ['getItems']);
		
		// provide the DI mechanism with a mock object to inject as the items service
		window.module(($provide) => {
			$provide.value('ItemsService', mockItemsService);
		});
	});

	beforeEach(window.inject((_$componentController_, _$q_, _$rootScope_) => {
		$componentController = _$componentController_;
		$q = _$q_;
		$rootScope = _$rootScope_;
	}));

	describe("#$onInit", () => {
		it('gets items from the service', () => {
			let component = $componentController('home', null, {});
			const items = [{id: 1, title: 'kuku', img: 'img'}, {id: 31, title: 'blah', img: 'img2'}];
			mockItemsService.getItems.and.returnValue($q.resolve(items));
			
			component.$onInit();
			$rootScope.$apply();	// call $apply so that $q would resolve 

			expect(mockItemsService.getItems).toHaveBeenCalled();
			expect(component.items).toBe(items);
		});
	});
});