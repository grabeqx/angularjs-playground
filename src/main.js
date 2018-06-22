// @require "./**/*.html" 
import core from './core/core.module';

const modules = [
    core.name
];

const angularModules = [
    'ngMaterial',
    'ui.router',
    'ngMessages'
];

angular.module('playground', [...angularModules, ...modules])
    .config(function($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(true);
    });