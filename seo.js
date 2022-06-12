/**
 * imports
 */
import "./vendor/angular.js";
import "./vendor/angular-route.js";
/**
 * @var const seo application module for the results page
 */
const seo = angular.module("seo", ['ngRoute']).config(($routeProvider, $locationProvider)=>{
    /**
     * @const locationConfiguration configures the html mode
     */
    const locationConfiguration = { requireBase: false };
    /**
     * @var const hashToken sets the token to `'`
     */
    const hashToken = '';
    /**
     * init the location provider 
     */
    $locationProvider.html5Mode(locationConfiguration).hashPrefix(hashToken);
    /**
     * @const defaultRoute sets the default route view for the controller and template view
     */
    const defaultRoute = location.replace('#/landing');
    /**
     * @const landing route
     */
    $routeProvider.when('/landing', {
        templateUrl: "views/summary.html", 
        controller: 'ViewController'
        //controllerAs: 'Landing'
    });
})

seo.controller('ViewController', function($scope) { 
    async function getPageDetails() { 
        var DataSource = await chrome.storage.local.get('page');
        
        //get the values from the data source 
        var { title, meta, keywords, h1, h2, h3, allLinks, allImgs } = DataSource.page;
        $scope.title = title;
        $scope.meta = meta;
        $scope.keywords = keywords;
        $scope.h1 = h1;
        $scope.h2 = h2;
        $scope.h3 = h3;

        //update scope
        $scope.$apply()
    }
    getPageDetails();
})

class Utils {
    constructor() { }

    static range([min, max], str, callback) {
        if (isNaN(min)) {
            console.error({ message: "ERROR_MIN_IS_NOT_A_NUMBER", code: NaN });
            return;
        }
        if (isNaN(max)) {
            console.error({ message: "ERROR_MAX_IS_NOT_A_NUMBER", code: NaN });
            return;
        }
        /**
         * @var min starting pos
         */
        var min = typeof min === 'number' ? min : 0;
        /**
         * @var max end pos
         */
        var max = typeof max === 'number' ? max : 0;
        /**
         * @var str integer length of string
         */
        var str = typeof str === 'string' ? str.split('').length : ''; //store int
        /**
         * @var countArray [] 
         */
        var countArray = [];
        /**
         * @var i iterator between min, max, increments i by 1
         */
        for (var i = min; i < max + 1; i++) {
            /**
             * stacking countArray with incremental values of 1
             */
            countArray.push(i);
        }
        /**
         * @var result
         * @returns boolean
         */
        var result = !isNaN(str) ? countArray.includes(str, 0) : 0;

        if (callback) {
            return callback(result);
        }
        return result;
    }
}

//character counter filter
seo.filter('count', function(){
    return function(data){ 
        let total = typeof data === 'string' ? data.split(''): '';
        return total.length;
    }
})

//filter title of the page 
seo.filter('titleFilter', function () {
    return function (arg) {
        return Utils.range([40, 60], arg);
    }
});

//filter title of the page 
seo.filter('metaFilter', function () {
    return function (arg) {
        return Utils.range([50, 155], arg);
    }
});




