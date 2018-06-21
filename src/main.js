require('./styles/index.scss');

function getModuleName(module) { return module.name || module.default.name; }

const modules = [
    require('./core/core.module')
];

const angularModules = [
    'ngMaterial',
    'ui.router',
    'ngMessages'
];

angular.module('playground', angularModules.concat(modules.map(getModuleName)))
    .config(function($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode(true);
    });

    console.log(angular.module('playground'));