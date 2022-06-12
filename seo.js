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
        var { title, meta, keywords, h1, h2, h3 } = DataSource.page;
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

//character counter filter
seo.filter('count', function(){
    return function(data){ 
        let total = data.split('');
        return total.length;
    }
})
