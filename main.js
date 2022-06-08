import { AppComponent } from "./AppComponent/AppComponent.js";
import { MenuComponent } from "./MenuComponent/MenuComponent.js";

/**
 * SEO FLOW Chrome extension for various tools to help with SEO for designers
 * This utility is strictly developed for SEO professionals
 * @const seoFlow angular module
 */
const seoFlow = angular.module('seo.flow', ['ngRoute'])

/**
 * @var default_route home default route
 */
seoFlow.config(function($routeProvider, $locationProvider){
    /**
     *@param $locationProvider modes for routing
     */
    $locationProvider.html5Mode({requireBase: false}).hashPrefix('');

    /**
     * @const default_route this sets the init route for the router provider
     */
    const default_route = location.replace('#/menu');

    /**
     * configure routes by components
     */
    $routeProvider.when('/home', { template:"<app-component></app-component>" })
    $routeProvider.when('/menu', { template:"<menu-component></menu-component>" })
})

/**
 * @const componentInit angular.module
 * @description registeres all imported class components
 * @param string(custom element)
 * @param class component 
 */
const componentInit = seoFlow;

componentInit.component('appComponent', new AppComponent() );
componentInit.component('menuComponent', new MenuComponent() );


 