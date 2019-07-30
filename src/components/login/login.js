import tem from './login.html';
import loginCtrl from './login';
import './login.less'


export default angular.module('login', [])
    .component('login', {
        loginlate: tem,
        controller: loginCtrl,
        controllerAs: 'ctrl'
    })
    .name;