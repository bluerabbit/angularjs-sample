describe('MainCtrl', function () {
    var scope, ctrl;

    beforeEach(function () {
        scope = {};
        ctrl = new MainCtrl(scope);
    });

    it('#hello', function () {
        expect(ctrl.hello('World')).toBe('Hello World');
    });

    it('#foo', function () {
        expect(ctrl.foo()).toBe('foo');
    });
});