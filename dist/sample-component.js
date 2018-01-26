(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.SampleComponent = factory());
}(this, (function () { 'use strict';

var _sPO = Object.setPrototypeOf || function _sPO(o, p) {
  o.__proto__ = p;
  return o;
};

var _construct = typeof Reflect === "object" && Reflect.construct || function _construct(Parent, args, Class) {
  var Constructor,
      a = [null];
  a.push.apply(a, args);
  Constructor = Parent.bind.apply(Parent, a);
  return _sPO(new Constructor(), Class.prototype);
};

var SampleComponent$1 = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', [_c('span', {
      staticClass: "message",
      domProps: {
        "innerHTML": _vm._s(_vm.message)
      }
    })]);
  },
  staticRenderFns: [],
  name: "sample-component",
  props: {
    message: {
      type: String,
      required: true
    }
  }
};

return SampleComponent$1;

})));
//# sourceMappingURL=sample-component.js.map
