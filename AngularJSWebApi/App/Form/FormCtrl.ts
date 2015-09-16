module demo {
    'use strict';

    export class FormCtrl {
        selection = 1; 
        subjects = ['Chemistry', 'Brain surgery', 'Rocket science', 'Art'];

        constructor() {
            var vm = this;
            //vm.status = { isopen: false };
        }
    }
}