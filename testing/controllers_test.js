describe("MainCtrl", function () {

    it("#hello", function () {
        var mainCtrl = new MainCtrl();
        expect(mainCtrl.hello("World")).toEqual("Hello World");
    });

    it("#foo", function () {
        var mainCtrl = new MainCtrl();
        expect(mainCtrl.foo()).toEqual("foo");
    });
});