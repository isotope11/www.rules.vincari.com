var app = angular.module('autoComplete', []).directive('autoComplete', function () {
	var index = -1;

	return {
		restrict: 'E',
		scope: {
			searchParam: '=ngModel',
			suggestions: '=data',
			onType: '=onType',
			onSelect: '=onSelect',
			autocompleteRequired: '='
		},
		controller: ['$scope', function($scope){
			$scope.selectedIndex = -1;

			$scope.initLock = true;

			$scope.setIndex = function(i){
				$scope.selectedIndex = parseInt(i);
			};

			this.setIndex = function(i){
				$scope.setIndex(i);
				$scope.$apply();
			};

			$scope.getIndex = function(i){
				return $scope.selectedIndex;
			};

			var watching = true;

			$scope.completing = false;

			$scope.$watch('searchParam', function(newValue, oldValue){

				if (oldValue === newValue || (!oldValue && $scope.initLock)) {
					return;
				}

				if(watching && typeof $scope.searchParam !== 'undefined' && $scope.searchParam !== null) {
					$scope.completing = true;
					$scope.searchFilter = $scope.searchParam;
					$scope.selectedIndex = -1;
				}

				if($scope.onType)
					$scope.onType($scope.searchParam);
			});

			this.preSelect = function(suggestion){
				watching = false;
				$scope.$apply();
				watching = true;
			};

			$scope.preSelect = this.preSelect;

			this.preSelectOff = function(){
				watching = true;
			};

			$scope.preSelectOff = this.preSelectOff;

			$scope.select = function(suggestion){
				if(suggestion){
					$scope.searchParam = suggestion;
					$scope.searchFilter = suggestion;
					if($scope.onSelect)
						$scope.onSelect(suggestion);
				}
				watching = false;
				$scope.completing = false;
				setTimeout(function(){watching = true;},1000);
				$scope.setIndex(-1);
			};


		}],
		link: function(scope, element, attrs){

			setTimeout(function() {
				scope.initLock = false;
				scope.$apply();
			}, 250);

			var attr = '';

			scope.attrs = {
				"placeholder": "start typing...",
				"class": "",
				"id": "",
				"inputclass": "",
				"inputid": ""
			};

			for (var a in attrs) {
				attr = a.replace('attr', '').toLowerCase();
				if (a.indexOf('attr') === 0) {
					scope.attrs[attr] = attrs[a];
				}
			}

			if (attrs.clickActivation) {
				element[0].onclick = function(e){
					if(!scope.searchParam){
						setTimeout(function() {
							scope.completing = true;
							scope.$apply();
						}, 200);
					}
				};
			}

			var key = {left: 37, up: 38, right: 39, down: 40 , enter: 13, esc: 27, tab: 9};

			document.addEventListener("keydown", function(e){
				var keycode = e.keyCode || e.which;

				switch (keycode){
					case key.esc:
						scope.select();
						scope.setIndex(-1);
						scope.$apply();
						e.preventDefault();
				}
			}, true);

			document.addEventListener("blur", function(e){
				setTimeout(function() {
					scope.select();
					scope.setIndex(-1);
					scope.$apply();
				}, 150);
			}, true);

			element[0].addEventListener("keydown",function (e){
				var keycode = e.keyCode || e.which;

				var l = angular.element(this).find('li').length;

				if(!scope.completing || l == 0) return;

				switch (keycode){
					case key.up:

						index = scope.getIndex()-1;
						if(index<-1){
							index = l-1;
						} else if (index >= l ){
							index = -1;
							scope.setIndex(index);
							scope.preSelectOff();
							break;
						}
						scope.setIndex(index);

						if(index!==-1)
							scope.preSelect(angular.element(angular.element(this).find('li')[index]).text());

						scope.$apply();

						break;
					case key.down:
						index = scope.getIndex()+1;
						if(index<-1){
							index = l-1;
						} else if (index >= l ){
							index = -1;
							scope.setIndex(index);
							scope.preSelectOff();
							scope.$apply();
							break;
						}
						scope.setIndex(index);

						if(index!==-1)
							scope.preSelect(angular.element(angular.element(this).find('li')[index]).text());

						break;
					case key.left:
						break;
					case key.right:
					case key.enter:
					case key.tab:

						index = scope.getIndex();
						if(index !== -1) {
							scope.select(angular.element(angular.element(this).find('li')[index]).text());
							if(keycode == key.enter) {
								e.preventDefault();
							}
						} else {
							if(keycode == key.enter) {
								scope.select();
							}
						}
						scope.setIndex(-1);
						scope.$apply();

						break;
					case key.esc:
						scope.select();
						scope.setIndex(-1);
						scope.$apply();
						e.preventDefault();
						break;
					default:
						return;
				}

			});
		},
		template: '\
				<div class="autocomplete {{ attrs.class }}" id="{{ attrs.id }}">\
					<input\
						type="text"\
						ng-model="searchParam"\
						placeholder="{{ attrs.placeholder }}"\
						class="{{ attrs.inputclass }}"\
						id="{{ attrs.inputid }}"\
						ng-required="{{ autocompleteRequired }}" />\
					<ul ng-show="completing && (suggestions | filter:searchFilter).length > 0">\
						<li\
							suggestion\
							ng-repeat="suggestion in suggestions | filter:searchFilter | orderBy:\'toString()\' track by $index"\
							index="{{ $index }}"\
							val="{{ suggestion }}"\
							ng-class="{ active: ($index === selectedIndex) }"\
							ng-click="select(suggestion)"\
							ng-bind-html="suggestion | highlight:searchParam"></li>\
					</ul>\
				</div>'
	};
});

