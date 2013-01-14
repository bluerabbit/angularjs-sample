'use strict';

describe('ListCtrl', function () {
    var scope, ctrl;

    beforeEach(function () {
        scope = {};
        ctrl = new ListCtrl(scope);
    });

    it('#users', function () {
       expect(scope.users.length).toBe(8);
    });
});

