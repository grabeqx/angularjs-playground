import coreController from './controllers/coreController';
import headerController from './controllers/headerController';

const core = angular.module('core', [])
    .controller('coreController', function($scope) {
        $scope.test = "asdasd";
    })
    
console.log(core);
export default core;