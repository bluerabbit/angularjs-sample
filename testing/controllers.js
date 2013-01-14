var MainCtrl = function ($scope) {
    this.foo = function () {
        return 'foo';
    };
};
MainCtrl.prototype.hello = function (name) {
  return "Hello " + name;
};
