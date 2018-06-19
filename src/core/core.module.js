import coreController from './controllers/coreController';

const core = angular.module('core', [])
    .controller('coreController', coreController);
    
export default core;