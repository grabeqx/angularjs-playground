import coreController from './controllers/coreController';
import headerController from './controllers/headerController';

const core = angular.module('core', [])
    .controller('coreController', coreController)
    .controller('headerController', headerController);
    
export default core;