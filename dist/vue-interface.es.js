import moment from 'moment';
import Popper from 'popper.js';
import axios from 'axios';

function DateFilter (value, format) {
  if (value) {
    return moment(String(value)).format(format);
  }

  return '';
}

function MomentFilter (value, format) {
  return value ? moment(String(value)) : null;
}

function index (Vue, options) {
  Vue.filter('date', DateFilter);
  Vue.filter('moment', MomentFilter);
}



var filters = /*#__PURE__*/Object.freeze({
    DateFilter: index,
    MomentFilter: index
});

function camelCase(string) {
  string = string.toLowerCase().replace(/(?:(^.)|([-_\s]+.))/g, function (match) {
    return match.charAt(match.length - 1).toUpperCase();
  });
  return string.charAt(0).toLowerCase() + string.substring(1);
}

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

function extend() {
  return Object.assign.apply(Object, arguments);
}

function isNull(value) {
  return value === null;
}

function isArray(value) {
  return Array.isArray(value);
}

function isObject(value) {
  return _typeof(value) === 'object' && !isNull(value) && !isArray(value);
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
*/

function deepExtend(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  if (!sources.length) return target;
  var source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (var key in source) {
      if (isObject(source[key])) {
        if (!target[key]) extend(target, _defineProperty({}, key, {}));
        deepExtend(target[key], source[key]);
      } else {
        extend(target, _defineProperty({}, key, source[key]));
      }
    }
  }

  return deepExtend.apply(void 0, [target].concat(sources));
}

function cloneDeep() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return deepExtend.apply(void 0, [{}].concat(args));
}

function isNumber(value) {
  return typeof value === 'number' || (value && value.toString ? value.toString() === '[object Number]' : false);
}

function isNumeric(value) {
  return isNumber(value) || !!value && !!value.toString().match(/^\-?[\d.,]+$/);
}

function key(value) {
  return isNumeric(value) ? parseFloat(value) : value;
}

function each(subject, fn) {
  for (var i in subject) {
    fn(subject[i], key(i));
  }
}

function first(array) {
  return array && array.length ? array[0] : undefined;
}

function isUndefined(value) {
  return typeof value === 'undefined';
}

function matches(properties) {
  return function (subject) {
    for (var i in properties) {
      if (isObject(properties[i])) {
        return subject[i] ? matches(properties[i])(subject[i]) : false;
      } else if (!subject || subject[i] != properties[i]) {
        return false;
      }
    }

    return true;
  };
}

function isString(value) {
  return typeof value === 'string';
}

function get(object, path) {
  return (isString(path) ? path.split('.') : !isArray(path) ? [path] : path).reduce(function (a, b) {
    return a[b];
  }, object);
}

function property(path) {
  return function (object) {
    return get(object, path);
  };
}

function isFunction$1(value) {
  return value instanceof Function;
}

function matchesProperty(path, value) {
  return function (subject) {
    return get(subject, path) === value;
  };
}

function predicate(value) {
  if (isObject(value)) {
    value = matches(value);
  } else if (isArray(value)) {
    value = matchesProperty(value[0], value[1]);
  } else if (!isFunction$1(value)) {
    value = property(value);
  }

  return value;
}

function find(subject, value) {
  return first(subject.filter(function (object) {
    return predicate(value)(object);
  }));
}

function findIndex(subject, value) {
  for (var i in subject) {
    if (predicate(value)(subject[i])) {
      return key(i);
    }
  }

  return -1;
}

function isBoolean(value) {
  return value === true || value === false;
}

function kebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').replace(/\_/g, '-').toLowerCase();
}

function mapKeys(object, fn) {
  var mapped = {};
  each(object, function (value, key) {
    mapped[fn(value, key)] = value;
  });
  return mapped;
}

function negate(fn) {
  return function () {
    return isFunction$1(fn) ? !fn.apply(void 0, arguments) : !fn;
  };
}

function pickBy(object, match) {
  var subject = {};
  each(object, function (value, key) {
    if (predicate(match)(value)) {
      subject[key] = value;
    }
  });
  return subject;
}

function omitBy(object, fn) {
  return pickBy(object, negate(fn));
}

function remove(array, match) {
  var indexes = [];

  for (var i in array) {
    if (predicate(match)(array[i])) {
      indexes.push(key(i));
    }
  }

  return array.filter(function (value, i) {
    return indexes.indexOf(i) !== -1;
  });
}

function wrap(subject, fn) {
  return function (value) {
    return isFunction$1(fn) ? fn(subject, value) : value;
  };
}

function prefix(subject, prefix) {
  var delimeter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '-';

  var prefixer = function prefixer(value, key) {
    var string = (key || value).replace(new RegExp("^".concat(prefix).concat(delimeter, "?")), '');
    return [prefix, string].filter(function (value) {
      return !!value;
    }).join(delimeter);
  };

  if (isBoolean(subject)) {
    return subject;
  }

  if (isObject(subject)) {
    return mapKeys(subject, prefixer);
  }

  return prefixer(subject);
}

var Variant = {
  props: {
    /**
     * The variant attribute
     *
     * @property String
     */
    variant: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    variantClassPrefix: function variantClassPrefix() {
      return this.$options.name;
    },
    variantClass: function variantClass() {
      return prefix(this.variant, this.variantClassPrefix);
    }
  }
};

var Sizeable = {
  props: {
    /**
     * The size of the form control
     *
     * @property String
     */
    size: {
      type: String,
      default: 'md',
      validate: function validate(value) {
        return ['sm', 'md', 'lg'].indexOf(value) !== -1;
      }
    }
  },
  computed: {
    sizeableClassPrefix: function sizeableClassPrefix() {
      return this.$options.name;
    },
    sizeableClass: function sizeableClass() {
      return prefix(this.size, this.sizeableClassPrefix);
    }
  }
};

var COLORS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white', 'muted'];
var props = {};
each(['border', 'text', 'bg', 'bg-gradient'], function (namespace) {
  each(COLORS, function (color) {
    props[camelCase(prefix(color, namespace))] = Boolean;
  });
});

function classes(instance, namespace) {
  return COLORS.map(function (color) {
    return instance[camelCase(color = prefix(color, namespace))] ? color : null;
  }).filter(function (value) {
    return !!value;
  });
}

var Colorable = {
  props: props,
  methods: {
    textColor: function textColor() {
      return classes(this, 'text');
    },
    bgColor: function bgColor() {
      return classes(this, 'bg');
    },
    borderColor: function borderColor() {
      return classes(this, 'border');
    },
    bgGradientColor: function bgGradientColor() {
      return classes(this, 'bg-gradient');
    }
  },
  computed: {
    textColorClasses: function textColorClasses() {
      return this.textColor().join(' ').trim() || null;
    },
    borderColorClasses: function borderColorClasses() {
      return this.borderColor().join(' ').trim() || null;
    },
    bgColorClasses: function bgColorClasses() {
      return this.bgColor().join(' ').trim() || null;
    },
    bgGradientColorClasses: function bgGradientColorClasses() {
      return this.bgGradientColor().join(' ').trim() || null;
    },
    colorableClasses: function colorableClasses() {
      var classes = {};
      classes[this.textColorClasses] = !!this.textColorClasses;
      classes[this.borderColorClasses] = !!this.borderColorClasses;
      classes[this.bgColorClasses] = !!this.bgColorClasses;
      classes[this.bgGradientColorClasses] = !!this.bgGradientColorClasses;
      return omitBy(classes, function (key, value) {
        return !key || !value;
      });
    }
  }
};

function duration(el) {
  var duration = getComputedStyle(el).transitionDuration;
  var numeric = parseFloat(duration, 10) || 0;
  var unit = duration.match(/m?s/);

  switch (unit[0]) {
    case 's':
      return numeric * 1000;

    case 'ms':
      return numeric;
  }
}

function transition(el) {
  return new Promise(function (resolve, reject) {
    try {
      var delay = duration(el);
      setTimeout(function () {
        resolve(delay);
      }, delay);
    } catch (e) {
      reject(e);
    }
  });
}

var MergeClasses = {
  methods: {
    mergeClasses: function mergeClasses() {
      var classes = {};
      each([].slice.call(arguments), function (arg) {
        if (isObject(arg)) {
          extend(classes, arg);
        } else if (isArray(arg)) {
          classes = (_readOnlyError("classes"), classes.concat(arg));
        } else if (arg) {
          classes[arg] = true;
        }
      });
      return classes;
    }
  }
};

var Btn = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.to)?_c('router-link',{class:_vm.classes,attrs:{"to":_vm.to,"disabled":_vm.disabled,"role":"button"},on:{"click":_vm.onClick}},[_vm._t("default")],2):(_vm.href)?_c('a',{class:_vm.classes,attrs:{"href":_vm.href,"disabled":_vm.disabled,"role":"button"},on:{"click":_vm.onClick}},[_vm._t("default")],2):(_vm.label)?_c('label',{class:_vm.classes,attrs:{"disabled":_vm.disabled,"role":"button"},on:{"click":_vm.onClick}},[_vm._t("default")],2):_c('button',{class:_vm.classes,attrs:{"type":_vm.type,"disabled":_vm.disabled},on:{"click":_vm.onClick}},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'btn',

    mixins: [
        Variant,
        Sizeable,
        Colorable,
        MergeClasses
    ],

    props: {

        /**
         * Display button with active state
         *
         * @property String
         */
        active: Boolean,

        /**
         * Display button with blocked state
         *
         * @property String
         */
        block: Boolean,

        /**
         * Display button with disabled state
         *
         * @property String
         */
        disabled: Boolean,

        /**
         * If an href is passed, button is an router-link element
         *
         * @property Boolean
         */
        href: String,

        /**
         * Should use <label> as the element for the button. Used for inputs
         * wrappers (toggles).
         *
         * @property Boolean
         */
        label: Boolean,

        /**
         * Display as an outline button
         *
         * @property String
         */
        outline: Boolean,

        /**
         * If an to is passed, button is an router-link element
         *
         * @property Boolean
         */
        to: [Object, String],

        /**
         * The type attribute for the button. Not applied if an anchor
         *
         * @property String
         */
        type: String

    },

    methods: {

        onClick(event) {
            this.$emit('click', event);
        }

    },

    computed: {

        variantClassPrefix() {
            return this.$options.name + (this.outline ? '-outline' : '');
        },

        classes() {
            return this.mergeClasses(
                'btn',
                this.variantClass,
                this.sizeableClass,
                this.colorableClasses,
                this.block ? 'btn-block' : '',
                this.active ? 'active' : ''
            );
        }

    }

};

var LOADED_SCRIPTS = {};

function element(url) {
  var script = document.createElement('script');
  script.setAttribute('src', url);
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('charset', 'utf-8');
  return script;
}

function append(script) {
  if (document.querySelector('head')) {
    document.querySelector('head').appendChild(script);
  } else {
    document.querySelector('body').appendChild(script);
  }

  return script;
}

function script(url) {
  if (LOADED_SCRIPTS[url] instanceof Promise) {
    return LOADED_SCRIPTS[url];
  } else if (LOADED_SCRIPTS[url] || document.querySelector("script[src=\"".concat(url, "\"]"))) {
    return new Promise(function (resolve, reject) {
      resolve(LOADED_SCRIPTS[url]);
    });
  }

  return LOADED_SCRIPTS[url] = new Promise(function (resolve, reject) {
    try {
      append(element(url)).addEventListener('load', function (event) {
        resolve(LOADED_SCRIPTS[url] = event);
      });
    } catch (e) {
      reject(e);
    }
  });
}

var VueInstaller = {
  use: use,
  script: script,
  plugin: plugin,
  plugins: plugins,
  filter: filter,
  filters: filters$1,
  component: component,
  components: components,
  directive: directive,
  directives: directives,
  $plugins: {},
  $filters: {},
  $directives: {},
  $components: {}
};
function use(plugin) {
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
  }

  return plugin;
}
function plugin(Vue, name, def) {
  if (!VueInstaller.$plugins[name]) {
    Vue.use(VueInstaller.$plugins[name] = def);
  }
}
function plugins(Vue, plugins) {
  each(plugins, function (def, name) {
    plugin(Vue, name, def);
  });
}
function filter(Vue, name, def) {
  if (!VueInstaller.$filters[name]) {
    Vue.use(VueInstaller.$filters[name] = def);
  }
}
function filters$1(Vue, filters) {
  each(filters, function (def, name) {
    filter(Vue, name, def);
  });
}
function component(Vue, name, def) {
  if (!VueInstaller.$components[name]) {
    Vue.component(name, VueInstaller.$components[name] = def);
  }
}
function components(Vue, components) {
  each(components, function (def, name) {
    component(Vue, name, def);
  });
}
function directive(Vue, name, def) {
  if (!VueInstaller.$directives[name]) {
    if (isFunction$1(def)) {
      Vue.use(VueInstaller.$directives[name] = def);
    } else {
      Vue.directive(name, def);
    }
  }
}
function directives(Vue, directives) {
  each(directives, function (def, name) {
    directive(Vue, name, def);
  });
}

var plugin$1 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Btn: Btn
    });
  }
});

var ModalBody = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-body"},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'modal-body'

};

var ModalDialog = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-dialog",attrs:{"role":"document"}},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'modal-dialog'

};

var ModalTitle = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h5',{staticClass:"modal-title"},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'modal-title'

};

var ModalHeader = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-header"},[_vm._t("title",[_c('modal-title',[_vm._t("default")],2)]),_vm._v(" "),_vm._t("close-button",[(_vm.closeable)?_c('button',{staticClass:"close",attrs:{"type":"button","aria-label":"ariaLabel"},on:{"click":function($event){_vm.$emit('close');}}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])]):_vm._e()])],2)},staticRenderFns: [],

    name: 'modal-header',

    components: {
        ModalTitle
    },

    props: {

        ariaLabel: {
            type: String,
            default: 'Close'
        },

        closeable: {
            type: Boolean,
            default: true
        }

    }

};

var ModalFooter = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-footer"},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'modal-footer'

};

function unit (height) {
  return isFinite(height) ? height + 'px' : height;
}

var BaseType = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"activity-indicator",class:_vm.classes},_vm._l((_vm.nodes),function(i){return _c('div')}))},staticRenderFns: [],

    props: {
        nodes: {
            type: Number,
            default: 3
        },
        size: {
            type: String,
            default: ''
        },
        prefix: {
            type: String,
            default: 'activity-indicator-'
        }
    },

    computed: {
        classes: function() {
            const classes = {};

            classes[this.$options.name] = !!this.$options.name;
            classes[this.prefix + this.size.replace(this.prefix, '')] = !!this.size;

            return classes;
        }
    }

};

var ActivityIndicatorDots = {

    name: 'activity-indicator-dots',

    extends: BaseType
};

var ActivityIndicatorSpinner = {

    name: 'activity-indicator-spinner',

    extends: BaseType,

    props: extend({}, BaseType.props, {
        nodes: {
            type: Number,
            default: 12
        }
    })
};

var ActivityIndicator = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.center)?_c('div',{staticClass:"center-wrapper",class:{'position-relative': _vm.relative, 'position-fixed': _vm.fixed},style:(_vm.style)},[_c('div',{staticClass:"center-content d-flex flex-column align-items-center"},[_c(_vm.component,{tag:"component",attrs:{"size":_vm.size,"prefix":_vm.prefix}}),_vm._v(" "),(_vm.label)?_c('div',{staticClass:"activity-indicator-label",domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()],1)]):_c('div',{staticClass:"d-flex flex-column justify-content-center align-items-center",style:(_vm.style)},[_c(_vm.component,{tag:"component",attrs:{"size":_vm.size,"prefix":_vm.prefix}}),_vm._v(" "),(_vm.label)?_c('div',{staticClass:"activity-indicator-label",domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()],1)},staticRenderFns: [],

    name: 'activity-indicator',

    extends: BaseType,

    props: {

        center: Boolean,

        fixed: Boolean,

        label: String,

        relative: Boolean,

        type: {
            type: String,
            default: 'dots'
        },

        height: [String, Number],

        maxHeight: [String, Number],

        minHeight: [String, Number],

        width: [String, Number],

        maxWidth: [String, Number],

        minWidth: [String, Number]

    },

    components: {
        ActivityIndicatorDots,
        ActivityIndicatorSpinner
    },

    computed: {

        style() {
            return {
                width: unit(this.width),
                maxWidth: unit(this.maxWidth),
                minWidth: unit(this.minWidth),
                height: unit(this.height),
                maxHeight: unit(this.maxHeight),
                minHeight: unit(this.minHeight)
            }
        },

        component() {
            return kebabCase(this.prefix + this.type.replace(this.prefix, ''));
        }
    }

};

var plugin$2 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      ActivityIndicator: ActivityIndicator
    });
  }
});

const convertAnimationDelayToInt = function(delay) {
    const num = parseFloat(delay, 10);
    const matches = delay.match(/m?s/);
    const unit = matches ? matches[0] : false;

    let milliseconds;

    switch (unit) {
        case "s": // seconds
            milliseconds = num * 1000;
            break;
        case "ms":
        default:
            milliseconds = num;
            break;
    }

    return milliseconds || 0;
};

const animated = function(el, callback) {
    const defaultView = (el.ownerDocument || document).defaultView;

    setTimeout(() => {
        callback.apply();
    }, convertAnimationDelayToInt(defaultView.getComputedStyle(el).animationDuration));
};

var BtnActivity = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"btn",class:_vm.classes,attrs:{"type":_vm.type},on:{"click":_vm.onClick}},[(_vm.icon)?_c('i',{class:_vm.icon}):_vm._e(),_vm._v(" "+_vm._s(_vm.label)+" "),_vm._t("default"),_vm._v(" "),_c('activity-indicator',{attrs:{"type":_vm.indicator}})],2)},staticRenderFns: [],

    name: 'activity-button',

    components: {
        ActivityIndicator
    },

    props: {

        /**
         * Make the button appear with the active state.
         *
         * @property {Boolea}n}
         */
        active: Boolean,

        /**
         * Show the activity indicator inside the button.
         *
         * @property {Boolea}n}
         */
        activity: Boolean,

        /**
         * Display the button as block width.
         *
         * @property {Boolea}n}
         */
        block: Boolean,

        /**
         * Make the button appear with the disabled state.
         *
         * @property {Boolea}n}
         */
        disabled: Boolean,

        /**
         * The button label. If not passed as a property, label must be passed
         * inside the element's html.
         *
         * @property {String}
         */
        label: String,

        /**
         * The button icon
         *
         * @property {String}
         */
        icon: String,

        /**
         * The `type` attribute for the button element.
         *
         * @property {String}
         */
        type: String,

        /**
         * The size of the button.
         *
         * @property {String}
         */
        size: {
            type: String,
            default: 'md'
        },

        /**
         * The variant of the button.
         *
         * @property {String}
         */
        variant: {
            type: String,
            default: 'primary'
        },

        /**
         * The type of activity indicator inside the button.
         *
         * @property {String}
         */
        indicator: {
            type: String,
            default: 'spinner'
        },

        /**
         * The orientation of the activity button inside the button.
         *
         * @property {String}
         */
        orientation: {
            type: String,
            default: 'right'
        }
    },

    methods: {

        /**
         * Disable the button.
         *
         * @return void
         */
        disable() {
            this.$el.disabled = true;
        },

        /**
         * Enable the button.
         *
         * @return void
         */
        enable() {
            this.$el.disabled = false;
        },

        /**
         * Show the activity indicator inside the button.
         *
         * @return void
         */
        showActivity() {
            this.disable();

            animated(this.$el, () => {
                this.$el.classList.add('btn-activity');
                this.$emit('activity:show');
            });
        },

        /**
         * Hide the activity indicator inside the button.
         *
         * @return void
         */
        hideActivity() {
            this.$el.classList.add('btn-hide-activity');

            animated(this.$el, () => {
                this.enable();
                this.$el.classList.remove('btn-activity', 'btn-hide-activity');
                this.$emit('activity:hide');
            });
        },

        /**
         * The click callback function
         *
         * @return void
         */
        onClick(event) {
            this.$emit('click', event);
        }

    },

    computed: {

        /**
         * An object of classes to append to the button.
         *
         * @return void
         */
        classes() {
            const classes = {
                'disabled': this.disabled,
                'active': this.active,
                'btn-block': this.block,
                'btn-activity': this.activity
            };

            classes['btn-' + this.size.replace('btn-', '')] = !!this.size;
            classes['btn-' + this.variant.replace('btn-', '')] = !!this.variant;
            classes['btn-activity-' + this.orientation.replace('btn-activity-', '')] = !!this.orientation;
            classes['btn-activity-indicator-' + this.indicator.replace('btn-activity-indicator-', '')] = !!this.indicator;

            return classes;
        }
    },

    watch: {

        activity(value) {
            if(value) {
                this.showActivity();
            }
            else {
                this.hideActivity();
            }
        }

    }

};

var plugin$3 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      BtnActivity: BtnActivity
    });
  }
});

var ModalContent = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-content"},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'modal-content'

};

var ModalBackdrop = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-backdrop",class:{'fade': _vm.fade, 'show': _vm.show}},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'modal-backdrop',

    props: {

        /**
         * Show the modal with a fade effect.
         *
         * @property Boolean
         */
        fade: {
            type: Boolean,
            default: true
        },

        /**
         * Is the modal showing.
         *
         * @property Boolean
         */
        show: {
            type: Boolean,
            default: true
        }

    }

};

var Triggerable = {
  props: {
    /**
     * Show the triggerable element with a animated fade effect.
     *
     * @type {Boolean}
     */
    animation: {
      type: Boolean,
      default: true
    },

    /**
     * Is the triggerable element showing.
     *
     * @property Boolean
     */
    show: {
      type: Boolean,
      defaut: false
    },

    /**
     * The target element used to position the popover.
     *
     * @type {String|Element|Boolean}
     */
    target: {
      type: [String, Element, Boolean],
      default: false
    },

    /**
     * How the modal is triggered - click | hover | focus | manual. You may
     * pass multiple triggers; separate them with a space. `manual` cannot
     * be combined with any other trigger.
     *
     * @type {String}
     */
    trigger: {
      type: [String, Array],
      default: 'click'
    }
  },
  methods: {
    /**
     * Initialize the trigger event for the specified elements
     *
     * @param  {Element} el
     * @return {void}
     */
    initializeTrigger: function initializeTrigger(el) {
      var _this = this;

      each(isString(this.trigger) ? this.trigger.split(' ') : this.trigger, function (trigger) {
        el.addEventListener(trigger, function (event) {
          _this.toggle();
        });
      });
    },

    /**
     * Initialize the event triggers
     *
     * @return void
     */
    initializeTriggers: function initializeTriggers() {
      var _this2 = this;

      if (this.target && this.trigger !== 'manual') {
        if (this.target instanceof Element) {
          this.initializeTrigger(this.target);
        } else {
          document.querySelectorAll(this.target).forEach(function (el) {
            _this2.initializeTrigger(el);
          });
        }
      }

      if (this.show || !this.target) {
        this.$nextTick(function () {
          _this2.isShowing = true;
        });
      }
    },

    /**
     * Focus on the first field in the modal (if exists).
     *
     * @return this
     */
    focus: function focus() {
      var _this3 = this;

      this.$nextTick(function () {
        var el = _this3.$el.querySelector('.form-control, input, select, textarea');

        if (el) {
          el.focus();
        } else {
          _this3.$el.focus();
        }
      });
      return this;
    },

    /**
     * Open the triggereable element
     *
     * @return this
     */
    open: function open() {
      var _this4 = this;

      this.isDisplaying = true;
      this.$nextTick(function () {
        transition(_this4.$el).then(function (delay) {
          _this4.isShowing = true;

          _this4.$emit('open');
        });
      });
      return this;
    },

    /**
     * Close the triggereable element
     *
     * @return this
     */
    close: function close(event) {
      var _this5 = this;

      transition(this.$el).then(function (delay) {
        _this5.isDisplaying = false;

        _this5.$emit('close', event);
      });
      this.isShowing = false;
      return this;
    },

    /**
     * Toggle the triggereable element's open/close method.
     *
     * @return this
     */
    toggle: function toggle() {
      if (!this.isShowing) {
        this.open();
      } else {
        this.close();
      }

      return this;
    }
  },
  computed: {
    triggerableClasses: function triggerableClasses() {
      return {
        'fade': this.animation,
        'show': this.isShowing
      };
    }
  },
  watch: {
    isShowing: function isShowing(value) {
      if (value) {
        this.focus();
      }
    },
    show: function show(value) {
      this.isShowing = value;
    }
  },
  mounted: function mounted() {
    this.initializeTriggers();
  },
  data: function data() {
    return {
      isDisplaying: this.show || !this.target,
      isShowing: false
    };
  }
};

var Modal = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal",class:_vm.triggerableClasses,style:({display: _vm.isDisplaying ? 'block' : 'none'}),attrs:{"tabindex":"-1","role":"dialog"},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }return _vm.cancel($event)}}},[(_vm.backdrop)?_c('modal-backdrop',{ref:"backdrop"}):_vm._e(),_vm._v(" "),_c('modal-dialog',{class:{'modal-dialog-centered': _vm.center}},[_c('modal-content',[_vm._t("header",[(_vm.title)?_c('modal-header',{on:{"close":_vm.cancel}},[_vm._v(_vm._s(_vm.title))]):_vm._e()]),_vm._v(" "),_vm._t("body",[_c(!_vm.flush ? 'modal-body' : 'div',{tag:"component",staticClass:"child-component"},[_vm._t("default")],2)]),_vm._v(" "),_vm._t("footer",[(_vm.type)?_c('modal-footer',[(_vm.type === 'alert')?[_c('btn-activity',{attrs:{"activity":_vm.activity,"variant":"primary"},on:{"click":_vm.confirm}},[_vm._v(_vm._s(_vm.okLabel))])]:[_c('btn',{attrs:{"type":"button","variant":"secondary"},domProps:{"innerHTML":_vm._s(_vm.cancelLabel)},on:{"click":_vm.cancel}}),_vm._v(" "),_c('btn-activity',{attrs:{"activity":_vm.activity,"variant":"primary"},on:{"click":_vm.confirm}},[_vm._v(_vm._s(_vm.okLabel))])]],2):_vm._e()])],2)],1)],1)},staticRenderFns: [],

    name: 'modal',

    components: {
        Btn,
        BtnActivity,
        ModalBody,
        ModalBackdrop,
        ModalContent,
        ModalDialog,
        ModalHeader,
        ModalFooter
    },

    mixins: [
        Triggerable
    ],

    props: {

        /**
         * Show the modal activity indicator.
         *
         * @type {Boolean}
         */
        activity: Boolean,

        /**
         * Show the modal with a backdrop.
         *
         * @type {Boolean}
         */
        backdrop: {
            type: Boolean,
            default: true,
        },

        /**
         * Is the modal centered in the screen.
         *
         * @type {Boolean}
         */
        center: Boolean,

        /**
         * Is the modal content fixed position
         *
         * @type {Boolean}
         */
        closeable: {
            type: Boolean,
            default: true
        },

        /**
         * Is the modal content flush with the modal edges? If true, no modal-body
         * will be used to wrap the content.
         *
         * @type {Boolean}
         */
        flush: Boolean,

        /**
         * The ok label text.
         *
         * @type {String}
         */
        okLabel: {
            type: String,
            default: 'Ok'
        },

        /**
         * The cancel label text.
         *
         * @type {String}
         */
        cancelLabel: {
            type: String,
            default: 'Cancel'
        },

        /**
         * The modal title.
         *
         * @type {String}
         */
        title: String,

        /**
         * Is the modal type.
         *
         * @type {Boolean}
         */
        type: {
            type: [Boolean, String],
            default: false,
            validate(value) {
                return ['alert', 'confirm', 'prompt'].indexOf(value) !== -1;
            }
        }

    },

    methods: {

        /**
         * Mount the backdrop to the document body.
         *
         * @return {void}
        mountBackdrop() {
            if(!this.backdropComponent) {
                this.backdropComponent = this.$refs.backdrop.$mount(
                    document.body.appendChild(document.createElement('div'))
                );
            }
        },
        */

        /**
         * Unmount the backdrop from the document body.
         *
         * @return {void}
        unmountBackdrop() {
            if(this.backdropComponent) {
                this.backdropComponent.$destroy();
                this.backdropComponent.$el.remove();
                this.backdropComponent = null;
            }
        },
        */

        /**
         * Cancel the modal
         *
         * @return {void}
         */
        cancel(event) {
            this.$emit('cancel', event);
            this.close(event);
        },

        /**
         * Confirm the modal
         *
         * @return {void}
         */
        confirm(event) {
            this.$emit('confirm', event);
        },

        /**
         * A callback for the escape function.
         *
         * @return {void}
         */
        onEsc(event) {
            (this.type === 'confirm' || this.type ===  'prompt') ? this.cancel(event) : this.close(event);
        }

    },

    watch: {

        isShowing(value) {
            if(value) {
                document.querySelector('body').classList.add('modal-open');
                //this.mountBackdrop();
            }
            else {
                document.querySelector('body').classList.remove('modal-open');
                //this.unmountBackdrop();
            }

            this.$emit('update:show', value);
        }

    },

    data() {
        return {
            backdropComponent: null,
            isDisplaying: this.show || !this.target,
            isShowing: false
        }
    },

    mounted() {
        this.initializeTriggers();
        /*
        if(this.show || !this.target) {
            this.mountBackdrop();
        }
        */
    },

    beforeRouteLeave(to, from, next) {
        modal.close();
    }

};

var plugin$4 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Modal: Modal
    });
  }
});

function instantiate(Vue, Component, options) {
  if (Component instanceof Vue) {
    return Component;
  }

  if (isObject(Component)) {
    Component = Vue.extend(Component);
  } else if (isString(Component)) {
    var text = Component;
    Component = Vue.extend({
      functional: true,
      render: function render(h, context) {
        return this._v(text);
      }
    });
  }

  return new Component(options);
}

function modal$1 (Vue, options) {
  Vue.prototype.$modal = function (Component, options) {
    if (!isObject(options)) {
      options = {};
    }

    var instance = instantiate(Vue, Modal, options.modal);
    instance.$content = instantiate(Vue, Component, options.content);
    instance.$slots.default = [instance.$content.$mount()._vnode];
    instance.$mount(document.body.appendChild(document.createElement('div')));
    return instance;
  };

  Vue.prototype.$alert = function (title, Component, options) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      var modal = _this.$modal(Component, deepExtend(options, {
        modal: {
          propsData: {
            title: title,
            type: 'alert'
          }
        }
      }));

      modal.$on('confirm', function (event) {
        modal.close();
      });
      modal.$on('close', function (event) {
        resolve(modal);
      });
    });
  };

  Vue.prototype.$confirm = function (title, Component, options) {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      var modal = _this2.$modal(Component || title, deepExtend(options, {
        modal: {
          propsData: {
            title: Component ? title : null,
            type: 'confirm'
          }
        }
      }));

      modal.$on('cancel', function (event) {
        reject(modal);
      });
      modal.$on('confirm', function (event) {
        resolve(modal.close());
      });
    });
  };

  Vue.prototype.$prompt = function (title, Component, options, predicate) {
    var _this3 = this;

    return new Promise(function (resolve, reject) {
      if (isFunction$1(options)) {
        predicate = options;
        options = {};
      } else if (isObject(options) && isFunction$1(options.predicate)) {
        predicate = options.predicate;
      } else if (!isFunction$1(predicate)) {
        predicate = function predicate() {
          return true;
        };
      }

      var modal = _this3.$modal(Component, deepExtend(options, {
        modal: {
          propsData: {
            title: title,
            type: 'prompt'
          }
        }
      }));

      modal.$on('cancel', function (event) {
        reject(modal);
      });
      modal.$on('confirm', function (event) {
        var succeed = function succeed() {
          return resolve(modal.close());
        };

        var fail = function fail() {
          return reject(modal.close());
        };

        if (predicate(modal, succeed, fail) === true) {
          success();
        }
      });
    });
  };
}

var OverlayBody = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"overlay-body"},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'overlay-body'

};

var Container = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'container'

};

var plugin$5 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Container: Container
    });
  }
});

var OverlayContent = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('container',{staticClass:"overlay-content"},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'overlay-content',

    components: {
        Container
    }

};

var Overlay = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"overlay",class:_vm.triggerableClasses,style:({'background': _vm.background, 'display': _vm.isDisplaying ? 'flex' : 'none'}),attrs:{"role":"dialog","tabindex":"-1"},on:{"keydown":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }return _vm.onEsc($event)}}},[(_vm.closeable && !_vm.hideCloseButton)?_c('button',{staticClass:"btn btn-link overlay-close",attrs:{"type":"button"},on:{"click":_vm.onClickClose}},[_c('i',{staticClass:"fa fa-times-circle"})]):_vm._e(),_vm._v(" "),_c('overlay-content',{class:{'overlay-content-fixed': _vm.fixedContent, 'overlay-content-center': _vm.center},style:({minHeight: _vm.minHeight})},[_vm._t("body",[_c('overlay-body',{staticClass:"my-4"},[_vm._t("default")],2)])],2)],1)},staticRenderFns: [],

    name: 'overlay',

    components: {
        OverlayBody,
        OverlayContent
    },

    mixins: [
        Triggerable
    ],

    props: {

        /**
         * The overlay background color.
         *
         * @property String
         */
        background: {
            type: String,
            default: 'rgba(255, 255, 255, .925)'
        },

        /**
         * Is the overlay content fixed position
         *
         * @property Boolean
         */
        closeable: {
            type: Boolean,
            default: true
        },

        /**
         * Center the overlay content on the screen using flex box.
         *
         * @type {Boolean}
         */
        center: {
            type: Boolean,
            default: true
        },

        /**
         * Is the overlay content fixed position
         *
         * @property Boolean
         */
        fixedContent: Boolean,

        /**
         * Is the overlay close button hidden but still closeable.
         *
         * @property Boolean
         */
        hideCloseButton: Boolean,

        /**
         * Is the overlay content minimum height.
         *
         * @property Boolean
         */
        minHeight: [String, Number]

    },

    methods: {

        /**
         * The callback for the `click` event on the close button.
         *
         * @return void
         */
        onClickClose(event) {
            this.$emit('click:close', event);
            this.close();
        },

        onEsc(event) {
            this.closeable && this.close();
        }

    }

};

var plugin$6 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Overlay: Overlay
    });
  }
});

function overlay (Vue, options) {
  Vue.prototype.$overlay = function (target, Component, options) {
    if (!isObject(options)) {
      options = {};
    }

    if (!target.$overlay) {
      target.$overlay = instantiate(Vue, Overlay, deepExtend(options.overlay, {
        propsData: {
          target: target
        }
      }));
      target.$overlay.$mount(document.body.appendChild(document.createElement('div')));
      target.$overlay.$content = instantiate(Vue, Component, options.content);
      target.$overlay.$slots.default = [target.$overlay.$content.$mount()._vnode];
      target.$overlay.$nextTick(function () {
        target.$overlay.open();
      });
    }

    return target.$overlay;
  };
}

var Popover = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isDisplaying),expression:"isDisplaying"}],staticClass:"popover",class:_vm.mergeClasses(_vm.triggerableClasses, _vm.classes),attrs:{"role":"tooltip"}},[_c('div',{staticClass:"arrow"}),_vm._v(" "),(_vm.title)?_c('popover-header',{domProps:{"innerHTML":_vm._s(_vm.title)}}):_vm._e(),_vm._v(" "),_c('popover-body',[_vm._t("default")],2)],1)},staticRenderFns: [],

    name: 'popover',

    mixins: [
        Triggerable,
        MergeClasses
    ],

    props: {

        /**
         * Apply a CSS fade transition to the popover
         *
         * @type {Boolean}
         */
        animation: {
            type: Boolean,
            default: true
        },

        /**
         * Overflow constraint boundary of the popover. Accepts the values of
         * 'viewport', 'window', 'scrollParent', or an HTMLElement reference
         * (JavaScript only). For more information refer to Popper.js's
         * preventOverflow docs.
         *
         * @type {Object}
         */
        boundary: {
            type: [String, Array],
            default: 'scrollParent',
            validate(value) {
                return ['viewport', 'window', 'viewport'].indexOf(value) !== -1;
            }
        },

        /**
         * Appends the popover to a specific element.
         *
         * Example: container: 'body'.
         *
         * This option is particularly useful in that it allows you to position
         * the popover in the flow of the document near the triggering element -
         * which will prevent the popover from floating away from thetriggering
         * element during a window resize.
         *
         * @type {String|Element|Boolean}
         */
        container: {
            type: [String, Element, Boolean],
            default: false
        },

        /**
         * Delay closeing and hiding the popover (ms) - does not apply to manual trigger type
         *
         * If a number is supplied, delay is applied to both open/close
         *
         * Object structure is: delay: { "close": 500, "open": 100 }
         *
         * @type {Number|Object}
         */
        delay: {
            type: [Number, Object],
            default: 0
        },

        /**
         * Allow to specify which position Popper will use on fallback. For more
         * information refer to Popper.js's behavior docs
         *
         * @type {String|Array}
         */
        fallbackPlacement: {
            type: [String, Array],
            default: 'flip'
        },

        /**
         * Offset of the popover relative to its target. For more information
         * refer to Popper.js's offset docs.
         *
         * @type {Number|String}
         */
        offset: {
            type: [Number, String],
            default: 0
        },

        /**
         * How to position the popover - auto | top | bottom | left | right.
         *
         * When auto is specified, it will dynamically reorient the popover.
         *
         * When a function is used to determine the placement, it is called with
         * the popover DOM node as its first argument and the triggering element
         * DOM node as its second. The this context is set to the popover
         * instance.
         *
         * @type {String|Function}
         */
        placement: {
            type: [String, Function],
            default: 'top',
            validate(value) {
                return ['auto', 'top', 'bottom', 'left', 'right'].indexOf(value) !== -1;
            }
        },

        /**
         * If this property is passed, it will force the popover to be visible
         * by default.
         *
         * @type {Boolean}
         */
        show: Boolean,

        /**
         * If a selector is provided, popover objects will be delegated to the
         * specified targets. In practice, this is used to enable dynamic HTML
         * content to have popovers added. See this and an informative example.
         *
         * @type {Boolean|String}
         */
        selector: {
            type: [Boolean, String],
            default: false
        },

        /**
         * The target element used to position the popover.
         *
         * @type {String|Element|Boolean}
         */
        target: {
            type: [String, Element, Boolean],
            default: false
        },

        /**
         * The popover title
         *
         * @type {String}
         */
        title: String,

        /**
         * How popover is triggered - click | hover | focus | manual. You may
         * pass multiple triggers; separate them with a space. `manual` cannot
         * be combined with any other trigger.
         *
         * @type {String}
         */
        trigger: {
            type: [String, Array],
            default: 'click'
        }

    },

    methods: {

        align() {
            each(this.$poppers, el => {
                el.popper.update();
            });
        },

        createPopper(el) {
            return new Popper(el, this.$el, {
                offset: this.offset,
                placement: this.placement,
                modifiers: {
                    flip: {
                        boundariesElement: this.container,
                        behavior: this.fallbackPlacement
                    },
                    offset: {
                        enabled: !!this.offset,
                        offset: this.offset
                    },
                    arrow: {
                        enable: true,
                        element: this.$el.querySelector('.arrow')
                    }
                }
            });
        },

        getArrowElement() {
            return this.$el.querySelector('.arrow');
        },

        /**
         * Initialize the trigger event for the specified elements
         *
         * @param  {Element} el
         * @return {void}
         */
        initializeTrigger(el) {
            this.$poppers[el] = {
                trigger: isString(this.trigger) ? this.trigger.split(' ') : this.trigger,
                popper: this.createPopper(el),
                event: (event) => {
                    this.toggle();
                    this.$poppers[el].popper.update();
                }
            };

            each(this.$poppers[el].trigger, trigger => {
                el.addEventListener(trigger, this.$poppers[el].event);
            });
        }

    },

    watch: {

        isShowing(value) {
            this.$nextTick(() => {
                this.align();

                if(value) {
                    this.focus();
                }
            });
        }

    },

    computed: {

        classes() {
            return prefix({
                'top': this.placement === 'top',
                'bottom': this.placement === 'bottom',
                'left': this.placement === 'left',
                'right': this.placement === 'right'
            }, 'bs-popover');
        }

    },

    beforeCreate() {
        if(!this.$poppers) {
            this.$poppers = {};
        }
    }

};

var PopoverBody = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"popover-body"},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'popover-body'

};

var PopoverHeader = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"popover-header"},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'popover-header',

    props: {

        /**
         * The component HTML element
         *
         * @type {String}
         */
        tag: {
            type: String,
            default: 'h3'
        }

    }

};

var plugin$7 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Popover: Popover,
      PopoverBody: PopoverBody,
      PopoverHeader: PopoverHeader
    });
  }
});

function popover (Vue, options) {
  Vue.prototype.$popover = function (target, Component, options) {
    if (!isObject(options)) {
      options = {};
    }

    if (!target.$popover) {
      target.$popover = instantiate(Vue, Popover, deepExtend(options.popover, {
        propsData: {
          target: target
        }
      }));
      target.$popover.$mount(document.body.appendChild(document.createElement('div')));
      var content = instantiate(Vue, Component, options.content);
      target.$popover.$slots.default = [content.$mount()._vnode];
      target.$popover.$nextTick(function () {
        target.$popover.open();
      });
    }

    return target.$popover;
  };
}



var plugins$1 = /*#__PURE__*/Object.freeze({
    modal: modal$1,
    overlay: overlay,
    popover: popover
});

var AlertClose = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"alert","aria-label":"Close"},on:{"click":_vm.onClick}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])},staticRenderFns: [],

    name: 'alert-close',

    methods: {

        onClick(event) {
            this.$emit('click', event);
        }
        
    }

};

var AlertHeading = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h4',{staticClass:"alert-heading"},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'alert-heading'

};

var ProgressBar = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"progress",style:({'height': _vm.formattedHeight})},[_c('div',{staticClass:"progress-bar",class:_vm.mergeClasses(_vm.progressClasses, _vm.variantClass),style:(_vm.styles),attrs:{"role":"progressbar","aria-valuenow":_vm.offsetValue,"aria-valuemin":_vm.min,"aria-valuemax":_vm.max}},[(!!_vm.label)?_c('span',[(_vm.label !== true)?[_vm._v(_vm._s(_vm.label))]:_vm._e(),_vm._v(" "+_vm._s(_vm.offsetValue)+"%")],2):_c('span',[_vm._t("default")],2)])])},staticRenderFns: [],

    name: 'progress-bar',

    mixins: [
        Variant,
        MergeClasses
    ],

    props: {

        /**
         * A custom color to be applied inline in the styles vs a contextual
         * variant.
         *
         * @property String
         */
        color: String,

        /**
         * The progress bar percentage value
         *
         * @property String
         */
        value: {
            type: Number,
            required: true
        },

        /**
         * The height of the progress bar
         *
         * @property String
         */
        height: [Number, String],

        /**
         * Show the progress bar value as a label inside the bar
         *
         * @property String
         */
        label: [String, Boolean],

        /**
         * Should the progress bar appear with stripes
         *
         * @property String
         */
        striped: Boolean,

        /**
         * Should the progress bar appear with animated stripes
         *
         * @property String
         */
        animated: Boolean,

        /**
         * The minimum value
         *
         * @property String
         */
        min: {
            type: Number,
            default: 0
        },

        /**
         * The max value
         *
         * @property String
         */
        max: {
            type: Number,
            default: 100
        }

    },

    computed: {

        variantClassPrefix() {
            return 'bg';
        },

        offsetValue() {
            return this.value / this.max * 100;
        },

        formattedHeight() {
            return this.height ? unit(this.height) : null;
        },

        progressClasses() {
            return {
                'progress-bar-striped': this.striped,
                'progress-bar-animated': this.animated
            };
        },

        styles() {
            return {
                width: `${this.offsetValue}%`,
                background: `${this.color} !important`
            };
        }

    }

};

var plugin$8 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      ProgressBar: ProgressBar
    });
  }
});

var Alert = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"alert",class:_vm.mergeClasses(_vm.variantClass, {show: _vm.isVisible, fade: _vm.fade}),attrs:{"role":"alert"}},[(_vm.title || _vm.heading)?_c('alert-heading',[_vm._v(_vm._s(_vm.title || _vm.heading))]):_vm._e(),_vm._v(" "),_vm._t("default"),_vm._v(" "),(_vm.dismissible)?_c('alert-close',{on:{"click":function($event){_vm.dismiss();}}}):_vm._e(),_vm._v(" "),(typeof _vm.show === 'number')?_c('progress-bar',{staticClass:"my-3",attrs:{"variant":_vm.variant,"height":5,"value":_vm.dismissCount,"max":_vm.show}}):_vm._e()],2)},staticRenderFns: [],

    name: 'alert',

    components: {
        AlertClose,
        AlertHeading,
        ProgressBar
    },

    mixins: [
        Variant,
        MergeClasses
    ],

    props: {

        /**
         * Is the alert dismissible
         *
         * @property Boolean
         */
        dismissible: Boolean,

        /**
         * The alert's title/heading
         *
         * @property Boolean
         */
        heading: String,

        /**
         * The alert's title/heading
         *
         * @property Boolean
         */
        title: String,

        /**
         * Should the alert fade when hidden
         *
         * @property Boolean
         */
        fade: {
            type: Boolean,
            default: true
        },

        /**
         * Should the alert be visible by default. If passed a number, alert
         * will be shown for the number of seconds that are passed.
         *
         * @property Boolean
         */
        show: {
            type: [Number, Boolean],
            default: true
        }

    },

    methods: {

        dismiss() {
            transition(this.$el).then(delay => {
                this.$emit('dismissed');
            });

            this.$emit('update:visible', this.isVisible = false);
        }

    },

    mounted() {
        if(typeof this.show === 'number') {
            const el = this.$el.querySelector('.progress-bar');

            this.$emit('dismiss-countdown', this.dismissCount = this.show);

            const interval = setInterval(() => {
                this.$emit('dismiss-countdown', this.dismissCount -= 1);

                if(!this.dismissCount) {
                    clearInterval(interval);
                    transition(el).then(delay => this.dismiss());
                }
            }, 1000);
        }
    },

    data() {
        return {
            dismissCount: this.show,
            isVisible: this.show
        }
    }

};

var AlertLink = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"alert-link"},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'alert-link'

};

var plugin$9 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Alert: Alert,
      AlertLink: AlertLink,
      AlertClose: AlertClose,
      AlertHeading: AlertHeading
    });
  }
});

var Badge = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.href)?_c('a',{staticClass:"badge",class:_vm.mergeClasses(_vm.classes, _vm.variantClass),attrs:{"href":_vm.href}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),_c('span',{staticClass:"sr-only",domProps:{"innerHTML":_vm._s(_vm.accessibility)}})],2):_c('span',{staticClass:"badge",class:_vm.mergeClasses(_vm.classes, _vm.variantClass)},[_vm._t("default",[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),_c('span',{staticClass:"sr-only",domProps:{"innerHTML":_vm._s(_vm.accessibility)}})],2)},staticRenderFns: [],

    name: 'badge',

    mixins: [
        Variant,
        MergeClasses
    ],

    props: {

        /**
         * The screen reader accessibility label.
         *
         * @property String
         */
        accessibility: String,

        /**
         * If an href attribute is passed, the badge becomes an anchor.
         *
         * @property String
         */
        href: String,

        /**
         * The badge appear as pill shaped.
         *
         * @property String
         */
        pill: Boolean,

        /**
         * The badge label.
         *
         * @property String
         */
        label: [Number, String],

        /**
         * The badge appear as secondary in size to the parent element.
         *
         * @property String
         */
        secondary: Boolean

    },

    computed: {

        classes() {
            return prefix({
                'pill': this.pill,
                'secondary': this.secondary
            }, this.$options.name);
        }
    }
};

var plugin$a = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Badge: Badge
    });
  }
});

var RequestOptions = {
  // `responseType` indicates the type of data that the server will respond with
  // options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json',
  // default
  // `transformRequest` allows changes to the request data before it is sent to the server
  // This is only applicable for request methods 'PUT', 'POST', and 'PATCH'
  // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
  // FormData or Stream
  // You may modify the headers object.
  transformRequest: [],
  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  transformResponse: []
  /*
  // `url` is the server URL that will be used for the request
   // `method` is the request method to be used when making the request
  method: 'get', // default
   // `baseURL` will be prepended to `url` unless `url` is absolute.
  // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
  // to methods of that instance.
  baseURL: 'https://some-domain.com/api/',
   // `headers` are custom headers to be sent
  headers: {'X-Requested-With': 'XMLHttpRequest'},
   // `params` are the URL parameters to be sent with the request
  // Must be a plain object or a URLSearchParams object
  params: {
      ID: 12345
  },
   // `paramsSerializer` is an optional function in charge of serializing `params`
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function(params) {
      return Qs.stringify(params, {arrayFormat: 'brackets'})
  },
   // `data` is the data to be sent as the request body
  // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
  // When no `transformRequest` is set, must be of one of the following types:
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Browser only: FormData, File, Blob
  // - Node only: Stream, Buffer
  data: {
      firstName: 'Fred'
  },
   // `timeout` specifies the number of milliseconds before the request times out.
  // If the request takes longer than `timeout`, the request will be aborted.
  timeout: 1000,
   // `withCredentials` indicates whether or not cross-site Access-Control requests
  // should be made using credentials
  withCredentials: false, // default
   // `adapter` allows custom handling of requests which makes testing easier.
  // Return a promise and supply a valid response (see lib/adapters/README.md).
  adapter: function (config) {
      //
  },
   // `auth` indicates that HTTP Basic auth should be used, and supplies credentials.
  // This will set an `Authorization` header, overwriting any existing
  // `Authorization` custom headers you have set using `headers`.
  auth: {
      username: 'janedoe',
      password: 's00pers3cret'
  },
   // `responseEncoding` indicates encoding to use for decoding responses
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // default
   // `xsrfCookieName` is the name of the cookie to use as a value for xsrf token
  xsrfCookieName: 'XSRF-TOKEN', // default
   // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: 'X-XSRF-TOKEN', // default
   // `onUploadProgress` allows handling of progress events for uploads
  onUploadProgress: function (progressEvent) {
      // Do whatever you want with the native progress event
  },
   // `onDownloadProgress` allows handling of progress events for downloads
  onDownloadProgress: function (progressEvent) {
      // Do whatever you want with the native progress event
  },
   // `maxContentLength` defines the max size of the http response content in bytes allowed
  maxContentLength: 2000,
   // `validateStatus` defines whether to resolve or reject the promise for a given
  // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
  // or `undefined`), the promise will be resolved; otherwise, the promise will be
  // rejected.
  validateStatus: function (status) {
      return status >= 200 && status < 300; // default
  },
   // `maxRedirects` defines the maximum number of redirects to follow in node.js.
  // If set to 0, no redirects will be followed.
  maxRedirects: 5, // default
   // `socketPath` defines a UNIX Socket to be used in node.js.
  // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
  // Only either `socketPath` or `proxy` can be specified.
  // If both are specified, `socketPath` is used.
  socketPath: null, // default
   // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
  // and https requests, respectively, in node.js. This allows options to be added like
  // `keepAlive` that are not enabled by default.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
   // 'proxy' defines the hostname and port of the proxy server
  // Use `false` to disable proxies, ignoring environment variables.
  // `auth` indicates that HTTP Basic auth should be used to connect to the proxy, and
  // supplies credentials.
  // This will set an `Proxy-Authorization` header, overwriting any existing
  // `Proxy-Authorization` custom headers you have set using `headers`.
  proxy: {
      host: '127.0.0.1',
      port: 9000,
      auth: {
          username: 'mikeymike',
          password: 'rapunz3l'
      }
  },
   // `cancelToken` specifies a cancel token that can be used to cancel the request
  // (see Cancellation section below for details)
  cancelToken: new CancelToken(function (cancel) {
   })
  */

};

function transformRequest(transformer, context) {
  if (!isFunction$1(transformer)) {
    throw new Error('The transformer must be defined as a function with two arguments (data, headers).');
  }

  (context || RequestOptions.transformRequest).push(transformer);
}

function transformResponse(transformer, context) {
  if (!isFunction$1(transformer)) {
    throw new Error('The transformer must be defined as a function (data).');
  }

  (context || RequestOptions.transformResponse).push(transformer);
}

var PROXY_OPTION_PROPERTIES = ['headers', 'params', 'data'];
var PROXY_OPTION_METHODS = {
  get: function get$$1(prop, context) {
    return function () {
      return context[prop];
    };
  },
  set: function set(prop, context) {
    return function (value) {
      context[prop] = value;
    };
  },
  add: function add(prop, context) {
    return function (key, value) {
      context[prop][key] = value;
    };
  },
  remove: function remove$$1(prop, context) {
    return function (key) {
      delete context[prop][key];
    };
  },
  merge: function merge(prop, context) {
    return function (key, values) {
      extend(context[prop], key);
    };
  }
};

var method = function method(action, prop) {
  return camelCase([action, prop].join(' '));
};

var chainable = function chainable(prop) {
  var _this = this;

  return function (key, value) {
    if (key instanceof FormData) {
      _this[method('set', prop)](key);
    } else if (isObject(key)) {
      _this[method('merge', prop)](key);
    } else {
      _this[method('add', prop)](key, value);
    }

    return _this;
  };
};

function merge() {
  var args = [].slice.call(arguments);
  var items = args.splice(1);
  var subject = first(args);

  for (var i in items) {
    subject = mergeWith(subject, items[i], function (subject, value) {
      if (isArray(subject)) {
        return subject.concat(value);
      } else if (isObject(subject)) {
        return extend(subject, value);
      }

      return value;
    });
  }

  return subject;
}

var Request =
/*#__PURE__*/
function () {
  function Request(url) {
    var _this2 = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Request);

    this.$options = merge({
      url: url,
      data: {},
      headers: {},
      params: {}
    }, cloneDeep(RequestOptions), options, {
      cancelToken: new axios.CancelToken(function (cancel) {
        _this2.$cancel = cancel;
      })
    });
    each(PROXY_OPTION_METHODS, function (callback, key) {
      _this2[method(key, 'option')] = bind(callback)('$options', _this2);
    });
    each(PROXY_OPTION_PROPERTIES, function (prop) {
      each(PROXY_OPTION_METHODS, function (callback, key) {
        _this2[method(key, prop)] = bind(callback)(prop, _this2.$options);
      });
      _this2[prop] = bind(chainable, _this2)(prop);
    });
    this.reset();
  }

  _createClass(Request, [{
    key: "reset",
    value: function reset() {
      this.$error = null;
      this.$status = null;
      this.$statusText = null;
      this.$response = null;
      this.$requestSentAt = null;
      this.$responseReceivedAt = null;
    }
  }, {
    key: "hasSent",
    value: function hasSent() {
      return !!this.$requestSentAt;
    }
  }, {
    key: "hasResponse",
    value: function hasResponse() {
      return !!this.$responseReceivedAt;
    }
  }, {
    key: "passed",
    value: function passed() {
      return this.hasResponse() && !this.$error;
    }
  }, {
    key: "failed",
    value: function failed() {
      return this.hasResponse() && !!this.$error;
    }
  }, {
    key: "cancel",
    value: function cancel() {
      !this.$response && this.$cancel();
    }
  }, {
    key: "get",
    value: function get$$1() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.params(params).headers(headers).send('get');
    }
  }, {
    key: "post",
    value: function post() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.data(data).headers(headers).send('post');
    }
  }, {
    key: "put",
    value: function put() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.data(data).headers(headers).send('put');
    }
  }, {
    key: "delete",
    value: function _delete() {
      var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.headers(headers).send('delete');
    }
  }, {
    key: "send",
    value: function send(method) {
      var _this3 = this;

      this.reset();
      this.$requestSentAt = moment();
      this.addOption('method', method);
      return new Promise(function (resolve, reject) {
        axios(_this3.$options).then(function (response) {
          _this3.$response = response;
          _this3.$responseReceivedAt = moment();
          _this3.$status = response.status;
          _this3.$statusText = response.statusText;
          resolve(response.data);
        }, function (error) {
          _this3.$error = error;
          _this3.$response = error.response;
          _this3.$responseReceivedAt = moment();
          _this3.$status = error.response ? error.response.status : null;
          _this3.$statusText = error.response ? error.response.statusText : null;
          reject(error.response || error);
        });
      });
    }
  }, {
    key: "transformRequest",
    value: function transformRequest$$1(transformer) {
      if (!this.$options.transformRequest) {
        this.$options.transformRequest = [];
      }

      transformRequest(transformer, this.$options.transformRequest);
    }
  }, {
    key: "transformResponse",
    value: function transformResponse$$1(transformer) {
      if (this.$options.transformResponse) {
        this.$options.transformResponse = [];
      }

      transformResponse(transformer, this.$options.transformResponse);
    }
  }], [{
    key: "interceptRequest",
    value: function interceptRequest(success, error) {
      this.interceptors().request.use(success, error);
    }
  }, {
    key: "interceptResponse",
    value: function interceptResponse(success, error) {
      this.interceptors().response.use(success, error);
    }
  }, {
    key: "interceptors",
    value: function interceptors() {
      return axios.interceptors;
    }
  }, {
    key: "option",
    value: function option(key, value) {
      if (isObject(key)) {
        merge(RequestOptions, key);
      } else {
        var option = {};
        option[key] = value;
        merge(RequestOptions, option);
      }
    }
  }, {
    key: "make",
    value: function make(url) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new this(url, params);
    }
  }]);

  return Request;
}();

var Model =
/*#__PURE__*/
function () {
  /**
   * Construct the model instance
   *
   * @param data object
   * @return void
   */
  function Model() {
    var _this = this;

    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Model);

    this.$request = null;
    this.$key = this.key();
    this.$files = this.files();
    this.$properties = this.properties();
    each(params, function (value, key) {
      _this[key] = value;
    });
    this.initialize(data);
  }
  /**
   * Initialize the model with the given data without considering the data
   * as "changed".
   *
   * @param data object
   * @return this
   */


  _createClass(Model, [{
    key: "initialize",
    value: function initialize(data) {
      this.$exists = false;
      this.$changed = {};
      this.$attributes = {};
      this.fill(data);
      this.$initialized = true;
      return this;
    }
    /**
     * Define the corresponding API endpoint slug
     *
     * @return string
     */

  }, {
    key: "endpoint",
    value: function endpoint() {} //

    /**
     * Define the corresponding uri schema.
     *
     * @return string
     */

  }, {
    key: "uri",
    value: function uri() {
      return [this.endpoint() || '', this.exists() ? this.id() : null].filter(function (value) {
        return !!value;
      }).concat([].slice.call(arguments)).join('/');
    }
    /**
     * Return the primary key value for the model
     *
     * @return {Number}
     */

  }, {
    key: "id",
    value: function id() {
      return this.get(this.key());
    }
    /**
     * Define a primary key. This is used to determine if the model exists and
     * which endpoint to use.
     *
     * @return string
     */

  }, {
    key: "key",
    value: function key() {
      return 'id';
    }
    /**
     * Return an array of properties that are sent to the API. If no properties
     * are defined, then all the attributes will be included in the request.
     *
     * @return array
     */

  }, {
    key: "properties",
    value: function properties() {
      return [];
    }
    /**
     * Return an array of file properties that are sent to the API. If no fies
     * are defined, then request will always be sent with JSON vs. multipart.
     *
     * @return array
     */

  }, {
    key: "files",
    value: function files() {
      return [];
    }
    /**
     * Set the attributes in the model with the data given.
     *
     * @param data object
     * @return this
     */

  }, {
    key: "fill",
    value: function fill(data) {
      this.setAttributes(data);
      return this;
    }
    /**
     * Get one or more attributes from the model.
     *
     * @param data string|array
     * @return array|mixed
     */

  }, {
    key: "get",
    value: function get$$1(key) {
      if (isArray(key) || isObject(key)) {
        return this.getAttributes().filter(function (value) {
          return data.indexOf(value) !== -1;
        });
      } else {
        return this.getAttribute(key);
      }
    }
    /**
     * Alias for setAttributes() except this method returns `this`. This method
     * also accepts an array of values or key/value pair.
     *
     * @return this
     */

  }, {
    key: "set",
    value: function set(key) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      if (isArray(key) || isObject(key)) {
        this.setAttributes(key);
      } else {
        this.setAttribute(key, value);
      }

      return this;
    }
    /**
     * Get all the defined attributes.
     *
     * @return array
     */

  }, {
    key: "getAttributes",
    value: function getAttributes() {
      return this.$attributes;
    }
    /**
     * Get the changed attributes
     *
     * @return array
     */

  }, {
    key: "getChangedAttributes",
    value: function getChangedAttributes() {
      return Object.keys(this.$changed);
    }
    /**
     * Get the changed attributes
     *
     * @return array
     */

  }, {
    key: "getOriginalValue",
    value: function getOriginalValue(key) {
      return this.$changed[key] || this.$attributes[key];
    }
    /**
     * Get the Request object.
     *
     * @return {mixed}
     */

  }, {
    key: "getRequest",
    value: function getRequest() {
      return this.$request;
    }
    /**
     * Get the unchanged attributes
     *
     * @return array
     */

  }, {
    key: "getUnchangedAttributes",
    value: function getUnchangedAttributes() {
      var _this2 = this;

      return Object.keys(this.$attributes).filter(function (key) {
        return !(key in _this2.$changed);
      });
    }
    /**
     * Get an attribute with a given key. If no key is defined
     *
     * @param key string
     * @param default undefined|mixed
     * @return array
     */

  }, {
    key: "getAttribute",
    value: function getAttribute(key) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      return this.$attributes[key] || value;
    }
    /**
     * Set an array or object of data as attributes.
     *
     * @param attributes array|object
     * @return void
     */

  }, {
    key: "setAttributes",
    value: function setAttributes(data) {
      var _this3 = this;

      if (isArray(data) || isObject(data)) {
        each(data, function (value, key) {
          _this3.setAttribute(key, value);
        });
      }
    }
    /**
     * Set an attribute with a given key/value pair. This will track the changes
     * in the model within the `this.$changed` property. If the primary key
     * is set, it will also change the `this.$exists` property.
     *
     * @param key string
     * @param value mixed
     * @return void
     */

  }, {
    key: "setAttribute",
    value: function setAttribute(key, value) {
      if (this.getAttribute(key) !== value) {
        this.handleAttributeChange(key, value);

        if (isUndefined(value)) {
          delete this.$attributes[key];
        } else {
          this.$attributes[key] = value;
        }
      }
    }
    /**
     * Revert the model to its original state.
     *
     * @return bool
     */

  }, {
    key: "revert",
    value: function revert() {
      var _this4 = this;

      each(this.$changed, function (value, key) {
        if (!isUndefined(value)) {
          _this4.$attributes[key] = value;
        } else {
          delete _this4.$attributes[key];
        }
      });
      this.$changed = {};
    }
    /**
     * Returns if the model has a primary key set.
     *
     * @return bool
     */

  }, {
    key: "exists",
    value: function exists() {
      return !!this.$exists;
    }
    /**
     * Returns the model been changed or not.
     *
     * @return bool
     */

  }, {
    key: "hasChanged",
    value: function hasChanged(key) {
      return !key ? this.getChangedAttributes().length > 0 : !isUndefined(this.$changed[key]);
    }
    /**
     * Does the model have any File objects. If so, need to send as multipart.
     *
     * @return bool
     */

  }, {
    key: "hasFiles",
    value: function hasFiles() {
      function count(files) {
        var total = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return files.reduce(function (carry, value) {
          if (isArray(value)) {
            return carry + count(value, total);
          } else if (value instanceof File || value instanceof FileList) {
            return carry + 1;
          } else {
            return carry;
          }
        }, total);
      }

      return count(this.toJSON()) !== 0;
    }
    /**
     * Handle settings the $changed attributes when an attribute value is set.
     *
     * @param key string
     * @param value mixed
     * @return void
     */

  }, {
    key: "handleAttributeChange",
    value: function handleAttributeChange(key, value) {
      if (this.$initialized) {
        if (this.$changed[key] === value) {
          delete this.$changed[key];
        } else if (!(key in this.$changed)) {
          this.$changed[key] = this.getAttribute(key);
        }
      }

      this.handlePrimaryKeyChange(key, value);
    }
    /**
     * Set an array or object of data as attributes.
     *
     * @param key string
     * @param value mixed
     * @return void
     */

  }, {
    key: "handlePrimaryKeyChange",
    value: function handlePrimaryKeyChange(key, value) {
      if (this.$key === key) {
        this.$exists = !isUndefined(value) && !isNull(value);
      }
    }
    /**
     * Cancel the current request
     *
     * @param data object
     * @return bool
     */

  }, {
    key: "cancel",
    value: function cancel() {
      this.$request && this.$request.cancel();
    }
    /**
     * Save the model to the database
     *
     * @param data object
     * @return bool
     */

  }, {
    key: "save",
    value: function save() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return !this.exists() ? this.create(data, config) : this.update(data, config);
    }
    /**
     * Create a new model
     *
     * @param data object
     * @return bool
     */

  }, {
    key: "create",
    value: function create() {
      var _this5 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.fill(data);
      return new Promise(function (resolve, reject) {
        var data = !_this5.hasFiles() ? _this5.toJson() : _this5.toFormData();
        _this5.$request = _this5.constructor.request(_this5.uri(), Object.assign({}, config));

        _this5.$request.post(data).then(function (response) {
          resolve(_this5.fill(response));
        }, reject);
      });
    }
    /**
     * Update an existing model
     *
     * @param data object
     * @return bool
     */

  }, {
    key: "update",
    value: function update() {
      var _this6 = this;

      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.fill(data);
      return new Promise(function (resolve, reject) {
        var data = !_this6.hasFiles() ? _this6.toJson() : _this6.toFormData();
        _this6.$request = _this6.constructor.request(_this6.uri(), config);

        _this6.$request[_this6.hasFiles() ? 'post' : 'put'](data).then(function (response) {
          resolve(_this6.fill(response));
        }, reject);
      });
    }
    /**
     * Delete an existing model
     *
     * @param  {object} config
     * @return {bool}
     */

  }, {
    key: "delete",
    value: function _delete() {
      var _this7 = this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise(function (resolve, reject) {
        if (!_this7.exists()) {
          reject(new Error('The model must have a primary key before it can be delete.'));
        }

        _this7.$request = _this7.constructor.request(_this7.uri(), config);

        _this7.$request.delete().then(function (response) {
          resolve(response);
        }, reject);
      });
    }
    /**
     * Cancel the current HTTP request if one exists.
     *
     * @return {self}
     */

  }, {
    key: "cancel",
    value: function cancel() {
      if (this.$request) {
        this.$request.cancel();
      }

      return this;
    }
    /**
     * Convert the Model instance to a FormData instance
     *
     * @return object
     */

  }, {
    key: "toFormData",
    value: function toFormData() {
      var form = new FormData();
      each(this.toJSON(), function (value, key) {
        if (isArray(value)) {
          each(value, function (item) {
            if (!(item instanceof File) && (isObject(item) || isArray(item))) {
              item = JSON.stringify(item);
            }

            form.append(key.replace(/(.+)(\[.+\]?)$/, '$1') + '[]', item);
          });
        } else if (!(value instanceof File) && isObject(value)) {
          form.append(key, JSON.stringify(value));
        } else if (!isNull(value)) {
          form.append(key, value);
        }
      });
      return form;
    }
    /**
     * Convert the instance to JSON payload
     *
     * @return object
     */

  }, {
    key: "toJSON",
    value: function toJSON() {
      var _this8 = this;

      return pickBy(this.$attributes, function (value, key) {
        return !_this8.$properties.length || key === _this8.key() || _this8.$properties.indexOf(key) !== -1;
      });
    }
    /**
     * Alias for toJSON
     *
     * @return object
     */

  }, {
    key: "toJson",
    value: function toJson() {
      return this.toJSON();
    }
    /**
     * Search for a collection of models
     *
     * @param data object
     * @return bool
     */

  }], [{
    key: "search",
    value: function search() {
      var _this9 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var model = new this();
      return new Promise(function (resolve, reject) {
        model.$request = _this9.request(config.uri || model.uri(), config);
        model.$request.get(params).then(function (response) {
          response.data = response.data.map(function (data) {
            return new _this9(data);
          });
          resolve(response);
        }, function (errors) {
          reject(errors);
        });
      });
    }
    /**
     * Find an existing model by id
     *
     * @param data object
     * @return bool
     */

  }, {
    key: "find",
    value: function find$$1(id) {
      var _this10 = this;

      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Promise(function (resolve, reject) {
        var model = new _this10();
        model.$request = _this10.request(model.uri(id), config);
        model.$request.get().then(function (response) {
          resolve(model.initialize(response));
        }, function (error) {
          reject(error);
        });
      });
    }
    /**
     * Create a request from the model data
     *
     * @param data object
     * @return bool
     */

  }, {
    key: "request",
    value: function request(url) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Request(url, config);
    }
  }]);

  return Model;
}();

var BaseForm = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{class:{'form-inline': _vm.inline},attrs:{"novalidate":_vm.novalidate},on:{"submit":function($event){$event.preventDefault();return _vm.onSubmit($event)}}},[_vm._t("default")],2)},staticRenderFns: [],

    props: {

        /**
         * The Model method used to send the request.
         *
         * @property Boolean
         */
        method: {
            type: String,
            default: 'save',
            validate(value) {
                return this.model && isFunction$1(this.model[value]);
            }
        },

        /**
         * An object of form data
         *
         * @property Object
         */
        data: {
            type: Object,
            default: () => {
                return {};
            }
        },

        /**
         * A JSON object of request headers
         *
         * @property Object
         */
        headers: Object,

        /**
         * Display the form fields inline
         *
         * @property Object
         */
        model: {
            type: Object,
            validate(value) {
                return value instanceof Model;
            }
        },

        /**
         * Display the form fields inline
         *
         * @property Boolean
         */
        inline: Boolean,

        /**
         * A callback function for the `submit` event
         *
         * @property Boolean
         */
        novalidate: {
            type: Boolean,
            default: true
        },

        /**
         * A JSON object of key/value pairs to build the query string.
         *
         * @property Object
         */
        query: Object,

        /**
         * A URI or URL used to redirect user after form submits successfully.
         *
         * @property Function|String
         */
        redirect: [Object, String, Function],

        /**
         * A callback function for the `submit` event
         *
         * @property Function
         */
        onSubmit: {
            type: Function,
            default(event) {
                this.model && this.submit(event);
            }
        },

        /**
         * A callback function for the `submit:success` event
         *
         * @property Function
         */
        onSubmitSuccess: {
            type: Function,
            default(event, data) {
                this.$emit('submit:success', event, data);
                this.$emit('submit:complete', event, true, data);

                if(this.redirect && isFunction$1(this.redirect)) {
                    this.redirect(this);
                }
                else if(this.redirect && this.$router) {
                    this.$router.push(this.redirect);
                }
            }
        },

        /**
         * A callback function for the `submit:success` event
         *
         * @property Function
         */
        onSubmitFailed: {
            type: Function,
            default(event, errors) {
                this.$emit('submit:failed', event, errors);
                this.$emit('submit:complete', event, false, errors);
            }
        }

    },

    methods: {

        submit(event) {
            this.$emit('submit', event);

            return this.model[this.method](this.data, {
                query: this.query,
                headers: this.headers,
                onUploadProgress: event => {
                    this.$emit('submit:progress', event);
                }
            }).then((data) => {
                this.onSubmitSuccess(event, data);
            }, (errors) => {
                this.onSubmitFailed(event, errors);
            });
        }

    },

    data() {
        return {
            errors: {}
        }
    }

};

var plugin$b = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      BaseForm: BaseForm
    });
  }
});

var BreadcrumbItem = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"breadcrumb-item",class:{'active': _vm.active},attrs:{"aria-current":_vm.active ? 'page' : false}},[(!_vm.active && _vm.href)?_c('a',{attrs:{"href":_vm.href}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2):(!_vm.active && _vm.to)?_c('router-link',{attrs:{"to":_vm.to}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2):[_vm._t("default",[_vm._v(_vm._s(_vm.label))])]],2)},staticRenderFns: [],

    name: 'breadcrumb-item',

    props: {

        /**
         * Is the item active?
         *
         * @prop {Boolean}
         */
        active: Boolean,

        /**
         * An href attribute
         *
         * @prop {String}
         */
        href: String,

        /**
         * An breadcrumb label
         *
         * @prop {String}
         */
        label: String,

        /**
         * The to attribute which is passed to the <router-link> component.
         *
         * @prop {Object}
         */
        to: [String, Object]

    }

};

var Breadcrumb = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{attrs:{"aria-label":"breadcrumb"}},[_c('ol',{staticClass:"breadcrumb"},[_vm._l((_vm.items),function(item,i){return (_vm.items.length)?_c('breadcrumb-item',_vm._b({key:i,attrs:{"current":i === item.length - 1}},'breadcrumb-item',item,false)):_vm._e()}),_vm._v(" "),_vm._t("default")],2)])},staticRenderFns: [],

    name: 'breadcrumb',

    components: {
        BreadcrumbItem
    },

    props: {

        /**
         * An array of breadcrumbs
         *
         * @prop {Array}
         */
        items: Array

    }

};

var plugin$c = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Breadcrumb: Breadcrumb,
      BreadcrumbItem: BreadcrumbItem
    });
  }
});

var Screenreaders = {
  props: {
    /**
     * Should show only for screenreaders
     *
     * @property Boolean
     */
    srOnly: Boolean,

    /**
     * Should be focusable for screenreaders
     *
     * @property Boolean
     */
    srOnlyFocusable: Boolean
  },
  computed: {
    screenreaderClasses: function screenreaderClasses() {
      return {
        'sr-only': this.srOnly,
        'sr-only-focusable': this.srOnlyFocusable
      };
    }
  }
};

var HelpText = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('small',{staticClass:"form-text",class:_vm.classes},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'help-text',

    mixins: [
        Colorable,
        Screenreaders
    ],

    computed: {
        classes() {
            return extend({}, this.screenreaderClasses, this.colorableClasses);
        }
    }

};

var plugin$d = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      HelpText: HelpText
    });
  }
});

var FormGroup = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-group"},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'form-group'
    
};

var plugin$e = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      FormGroup: FormGroup
    });
  }
});

var FormLabel = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:_vm.classes},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'form-label',

    mixins: [
        Colorable,
        Screenreaders
    ],

    computed: {
        classes() {
            return extend({}, this.screenreaderClasses, this.colorableClasses);
        }
    }

};

var plugin$f = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      FormLabel: FormLabel
    });
  }
});

var FormFeedback = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{'invalid-feedback': _vm.invalid, 'valid-feedback': _vm.valid && !_vm.invalid}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2)},staticRenderFns: [],

    name: 'form-feedback',

    mixins: [
        Colorable
    ],

    props: {

        /**
         * The value of label element. If no value, no label will appear.
         *
         * @property String
         */
        label: String,

        /**
         * Should the feedback marked as invalid
         *
         * @property String
         */
        invalid: Boolean,

        /**
         * Should the feedback marked as invalid
         *
         * @property String
         */
        valid: Boolean

    }

};

var plugin$g = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      FormFeedback: FormFeedback
    });
  }
});

var FormControl = {
  props: {
    /**
     * The autocomplete attribute value.
     *
     * @property String
     */
    autocomplete: String,

    /**
     * The field id attribute value.
     *
     * @property String
     */
    id: [Number, String],

    /**
     * The value of label element. If no value, no label will appear.
     *
     * @property String
     */
    label: [Number, String],

    /**
     * The field name attribute value.
     *
     * @property String
     */
    name: String,

    /**
     * The field id attribute value.
     *
     * @property String
     */
    value: {
      default: null
    },

    /**
     * The placeholder attribute value.
     *
     * @property String
     */
    placeholder: String,

    /**
     * Is the field required.
     *
     * @property String
     */
    required: Boolean,

    /**
     * Add form-group wrapper to input
     *
     * @property String
     */
    group: {
      type: Boolean,
      value: true
    },

    /**
     * The regex pattern for validation.
     *
     * @property String
     */
    pattern: String,

    /**
     * An inline field validation error.
     *
     * @property String|Boolean
     */
    error: String,

    /**
     * An inline field validation errors passed as object with key/value
     * pairs. If errors passed as an object, the form name will be used for
     * the key.
     *
     * @property Object|Boolean
     */
    errors: {
      type: Object,
      default: function _default() {
        return {};
      }
    },

    /**
     * Some feedback to add to the field once the field is successfully
     * valid.
     *
     * @property String
     */
    feedback: [String, Array],

    /**
     * An array of event names that correlate with callback functions
     *
     * @property Function
     */
    bindEvents: {
      type: Array,
      default: function _default() {
        return ['focus', 'blur', 'change', 'click', 'keyup', 'keydown', 'progress', 'paste'];
      }
    },

    /**
     * The default class name assigned to the control element
     *
     * @property String
     */
    defaultControlClass: {
      type: String,
      default: 'form-control'
    },

    /**
     * Hide the label for browsers, but leave it for screen readers.
     *
     * @property String
     */
    hideLabel: Boolean,

    /**
     * Additional margin/padding classes for fine control of spacing
     *
     * @property String
     */
    spacing: String,

    /**
     * The size of the form control
     *
     * @property String
     */
    size: {
      type: String,
      default: 'md',
      validate: function validate(value) {
        return ['sm', 'md', 'lg'].indexOf(value) !== -1;
      }
    },

    /**
     * Display the form field inline
     *
     * @property String
     */
    inline: Boolean,

    /**
     * If the form control is readonly, display only as text?
     *
     * @property String
     */
    plaintext: Boolean,

    /**
     * Is the form control readonly?
     *
     * @property String
     */
    readonly: Boolean,

    /**
     * Is the form control disabled?
     *
     * @property String
     */
    disabled: Boolean,

    /**
     * Some instructions to appear under the field label
     *
     * @property String
     */
    helpText: [Number, String],

    /**
     * The maxlength attribute
     *
     * @property String
     */
    maxlength: [Number, String]
  },
  directives: {
    bindEvents: {
      bind: function bind(el, binding, vnode) {
        var events = binding.value || vnode.context.bindEvents;
        each(events, function (name) {
          el.addEventListener(name, function (event) {
            vnode.context.$emit(name, event);
          });
        });
      }
    }
  },
  methods: {
    blur: function blur() {
      if (this.getInputField()) {
        this.getInputField().blur();
      }
    },
    focus: function focus() {
      if (this.getInputField()) {
        this.getInputField().focus();
      }
    },
    getInputField: function getInputField() {
      return this.$el.querySelector('.form-control, input, select, textarea');
    },
    getFieldErrors: function getFieldErrors() {
      var errors = this.error || this.errors;

      if (isObject(this.errors)) {
        errors = this.errors[this.name || this.id];
      }

      return !errors || isArray(errors) || isObject(errors) ? errors : [errors];
    }
  },
  computed: {
    callbacks: function callbacks() {
      var _this = this;

      return this.bindEvents.map(function (event) {
        return {
          name: event,
          callback: _this[camelCase(['on', event].join(' '))]
        };
      }).filter(function (event) {
        return !isUndefined(event.callback);
      });
    },
    invalidFeedback: function invalidFeedback() {
      if (this.error) {
        return this.error;
      }

      var errors = this.getFieldErrors();
      return isArray(errors) ? errors.join('<br>') : errors;
    },
    validFeedback: function validFeedback() {
      return isArray(this.feedback) ? this.feedback.join('<br>') : this.feedback;
    },
    controlClass: function controlClass() {
      return this.defaultControlClass + (this.plaintext ? '-plaintext' : '');
    },
    controlSizeClass: function controlSizeClass() {
      return prefix(this.size, this.controlClass);
    },
    controlClasses: function controlClasses() {
      return [this.controlClass, this.controlSizeClass, this.spacing || '', this.invalidFeedback ? 'is-invalid' : ''].join(' ');
    },
    hasDefaultSlot: function hasDefaultSlot() {
      return !!this.$slots.default;
    }
  }
};

var InputField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',{staticClass:"input-field",class:{'has-activity': _vm.activity}},[_vm._t("label",[(_vm.label || _vm.hasDefaultSlot)?_c('form-label',{ref:"label",attrs:{"for":_vm.id},domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"position-relative"},[_vm._t("control",[_c('input',{directives:[{name:"bind-events",rawName:"v-bind-events",value:(_vm.bindEvents),expression:"bindEvents"}],ref:"control",class:_vm.mergeClasses(_vm.controlClasses, _vm.colorableClasses),attrs:{"id":_vm.id,"type":_vm.type,"name":_vm.name,"pattern":_vm.pattern,"readonly":_vm.readonly,"required":_vm.required,"maxlength":_vm.maxlength,"placeholder":_vm.placeholder,"disabled":_vm.disabled || _vm.readonly,"aria-label":_vm.label,"aria-describedby":_vm.id,"autocomplete":_vm.autocomplete},domProps:{"value":_vm.value},on:{"input":function($event){_vm.$emit('input', $event.target.value);}}})]),_vm._v(" "),_vm._t("activity",[_c('transition',{attrs:{"name":"slide-fade"}},[(_vm.activity)?_c('activity-indicator',{key:"test",ref:"activity",attrs:{"type":"dots","size":_vm.size}}):_vm._e()],1)]),_vm._v(" "),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{ref:"feedback",attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):(_vm.invalidFeedback)?_c('form-feedback',{ref:"feedback",attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2),_vm._v(" "),_vm._t("help",[(_vm.helpText)?_c('help-text',{ref:"help",domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()])],2)},staticRenderFns: [],

    name: 'input-field',

    mixins: [
        Colorable,
        FormControl,
        MergeClasses
    ],

    components: {
        HelpText,
        FormGroup,
        FormLabel,
        FormFeedback,
        ActivityIndicator
    },

    props: {

        /**
         * Show type activity indicator.
         *
         * @property Boolean
         */
        activity: {
            type: Boolean,
            default: false
        },

        /**
         * The type attribute
         *
         * @property String
         */
        type: {
            type: String,
            default: 'text'
        }

    }

};

var plugin$h = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      InputField: InputField
    });
  }
});

var FileField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',[_vm._t("label",[(_vm.label || _vm.hasDefaultSlot)?_c('form-label',{attrs:{"for":_vm.id}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"custom-file"},[_vm._t("placeholder",[_c('form-label',{class:_vm.mergeClasses(_vm.colorableClasses, 'custom-file-label'),attrs:{"for":_vm.id},domProps:{"innerHTML":_vm._s(_vm.placeholder || 'Choose file')}})]),_vm._v(" "),_c('input',{directives:[{name:"bind-events",rawName:"v-bind-events"}],class:_vm.controlClasses,attrs:{"type":"file","id":_vm.id,"width":_vm.width,"height":_vm.height,"required":_vm.required,"multiple":_vm.multiple,"readonly":_vm.readonly},on:{"change":function($event){_vm.$emit('change', $event.target.files);}}}),_vm._v(" "),_vm._t("help",[(_vm.helpText)?_c('help-text',{domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()]),_vm._v(" "),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),_vm._v(" "),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2)],2)},staticRenderFns: [],

    name: 'file-field',

    extends: InputField,

    components: {
        HelpText,
        FormGroup,
        FormLabel,
        FormFeedback,
        MergeClasses
    },

    model: {
        event: 'change'
    },

    props: {

        /**
         * An array of event names that correlate with callback functions
         *
         * @property Function
         */
        bindEvents: {
            type: Array,
            default() {
                return ['focus', 'blur', 'input', 'click', 'keyup', 'keydown', 'progress'];
            }
        },

        /**
         * The class name assigned to the control element
         *
         * @property String
         */
        defaultControlClass: {
            type: String,
            default: 'custom-file-input'
        },

        /**
         * An array of valid extensions
         *
         * @property String
         */
        extensions: Array,

        /**
         * The type attribute
         *
         * @property String
         */
        multiple: Boolean,

        /**
         * The height attribute for the control element
         *
         * @property String
         */
        height: [Number, String],

        /**
         * The width attribute for the control element
         *
         * @property String
         */
        width: [Number, String]

    }

};

var plugin$i = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      FileField: FileField
    });
  }
});

var BtnFile = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('btn',{staticClass:"btn-file",attrs:{"type":_vm.type,"variant":_vm.variant,"block":_vm.block,"size":_vm.size,"disabled":_vm.disabled,"active":_vm.active}},[_vm._t("default"),_vm._v(" "),_c('input',{directives:[{name:"bind-events",rawName:"v-bind-events"}],class:_vm.controlClasses,attrs:{"type":"file","id":_vm.id,"width":_vm.width,"height":_vm.height,"required":_vm.required,"multiple":_vm.multiple,"readonly":_vm.readonly},on:{"change":function($event){_vm.$emit('change', _vm.multiple ? $event.target.files : $event.target.files[0]);}}})],2)},staticRenderFns: [],

    name: 'btn-file',

    mixins: [
        FileField
    ],

    components: {
        Btn,
        FileField
    },

    model: {
        event: 'change'
    },

    props: {

        /**
         * The type attribute for the button. Not applied if an anchor
         *
         * @property String
         */
        type: {
            type: String,
            default: 'button'
        }

    }

};

var plugin$j = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      BtnFile: BtnFile
    });
  }
});

var BtnGroup = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.classes,attrs:{"data-toggle":_vm.toggle ? 'buttons' : false,"role":"group"}},[_vm._l((_vm.buttons),function(button,i){return (_vm.buttons)?_c('btn',_vm._b({key:i},'btn',button,false)):_vm._e()}),_vm._v(" "),_vm._t("default")],2)},staticRenderFns: [],

    name: 'btn-group',

    components: {
        Btn
    },

    mixins: [
        Colorable,
        MergeClasses
    ],

    props: {

        /**
         * An array of buttons
         *
         * @type {Array}
         */
        buttons: Array,

        /**
         * Denote the button group as toggle buttons
         *
         * @type {Boolean}
         */
        toggle: Boolean,

        /**
         * Display the buttons vertically
         *
         * @type {Boolean}
         */
        vertical: Boolean

    },

    computed: {

        classes() {
            return this.mergeClasses(
                this.colorableClasses, {
                    'btn-group': !this.vertical,
                    'btn-group-toggle': this.toggle,
                    'btn-group-vertical': this.vertical
                }
            );
        }

    }

};

var BtnGroupToggle = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"btn-group-toggle",attrs:{"data-toggle":"buttons"}},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'btn-group-toggle'

};

var BtnToolbar = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"btn-toolbar",attrs:{"role":"toolbar"}},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'btn-toolbar'

};

var plugin$k = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      BtnGroup: BtnGroup,
      BtnGroupToggle: BtnGroupToggle,
      BtnToolbar: BtnToolbar
    });
  }
});

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

var Proxy$1 = {
  methods: {
    proxy: function proxy(callback, event) {
      if (isFunction$1(callback)) {
        callback.apply(this, [].slice.call(arguments).splice(1));
        event.preventDefault();
      }
    }
  }
};

var DropdownMenuItem = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.component,{tag:"component",staticClass:"dropdown-item",class:{'active': _vm.active},attrs:{"href":_vm.href || (_vm.component === 'a' ? '#' : false),"type":_vm.component === 'button' ? 'button' : false},on:{"click":_vm.onClick}},[(_vm.icon)?_c('i',{class:_vm.icon}):_vm._e(),_vm._v(" "),_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2)},staticRenderFns: [],

    mixins: [
        Proxy$1
    ],

    props: {

        /**
         * Is the menu item active.
         *
         * @property Object
         */
        active: Boolean,

        /**
         * Is the menu item a button
         *
         * @property Object
         */
        button: Boolean,

        /**
         * The `element` attribute.
         *
         * @property Object
         */
        element: String,

        /**
         * The `href` attribute.
         *
         * @property Object
         */
        href: String,

        /**
         * The icon of the dropdown menu item.
         *
         * @property Object
         */
        icon: String,

        /**
         * The label of the dropdown menu item.
         *
         * @property Object
         */
        label: String

    },

    computed: {

        component() {
            return this.element || (this.button ? 'button' : 'a');
        }

    },

    methods: {

        /**
         * A callback function for the `click` event.
         *
         * @property Object
         */
        onClick(event) {
            this.$emit('click', event);
        }

    }

};

var DropdownMenuHeader = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h5',{staticClass:"dropdown-header"},[_vm._t("default",[_vm._v(_vm._s(_vm.header))])],2)},staticRenderFns: [],

    name: 'dropdown-menu-header',

    props: {

        /**
         * The value of the header
         *
         * @property Object
         */
        header: String

    }

};

var DropdownMenuDivider = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dropdown-divider"})},staticRenderFns: [],

    name: 'dropdown-menu-divider'

};

var DropdownMenu = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dropdown-menu",class:{'dropdown-menu-right': _vm.align === 'right', 'show': _vm.show},attrs:{"aria-labelledby":_vm.id,"tabindex":"-1"},on:{"click":_vm.onClick}},[_vm._l((_vm.items),function(item){return [_c(_vm.prefix(item.type || 'item', 'dropdown-menu'),_vm._b({tag:"component"},'component',item,false))]}),_vm._v(" "),_vm._t("default")],2)},staticRenderFns: [],

    components: {
        DropdownMenuItem,
        DropdownMenuHeader,
        DropdownMenuDivider
    },

    props: {

        /**
         * The `id` attribute on the toggle button and aria label. If no `id` is
         * defined, then a UUID will be generated instead.
         *
         * @property Object
         */
        id: {
            type: String,
            default: uuid
        },

        /**
         * Display the dropdown menu aligned left or right
         *
         * @property String
         */
        align: {
            type: String,
            default: 'left',
            validate(value) {
                return ['left', 'right'].indexOf(value.toLowerCase()) !== -1;
            }
        },

        /**
         * The default visibility of the dropdown menu.
         *
         * @property Object
         */
        show: Boolean,

        /**
         * An array of dropdown items. If an key/value pair isn't defined, the
         * default value will be used. If no items are defined, then the slot
         * named "items" can be used to define the options with HTML.
         *
         * [{
         *      type: 'item', // String [item|header|divider]
         *      href: '#', // String
         *      label: 'Some label', // String
         *      onClick: (event) => {} // Function
         * }]
         *
         * @property Array
         */
        items: Array

    },

    methods: {

        prefix: prefix,

        /**
         * A callback function for the `click` event.
         *
         * @param Object event
         * @param Object item
         * @return void
         */
        onClick(event) {
            this.$emit('click', event);
        },

        /**
         * A callback function for the `click` event.
         *
         * @param Object event
         * @param Object item
         * @return void
         */
        onItemClick(event, item) {
            this.$emit('item:click', event, item);
        }

    },

    mounted() {
        each(this.$children, child => {
            child.$on('click', event => {
                this.onItemClick(event, child);
            });
        });
    }

};

var plugin$l = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      DropdownMenu: DropdownMenu,
      DropdownMenuDivider: DropdownMenuDivider,
      DropdownMenuHeader: DropdownMenuHeader,
      DropdownMenuItem: DropdownMenuItem
    });
  }
});

const TAB_KEYCODE = 9;
const LEFT_ARROW_KEYCODE = 37;
const RIGHT_ARROW_KEYCODE = 39;
const UP_ARROW_KEYCODE = 38;
const DOWN_ARROW_KEYCODE = 40;

let ignoreBlurEvent = false;

var BtnDropdown = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.split)?_c('btn-group',[(!_vm.dropleft)?[(_vm.href)?_c('a',{class:_vm.actionClasses,attrs:{"href":_vm.href},on:{"click":_vm.onClick}},[_vm._t("label",[(_vm.icon)?_c('i',{class:_vm.icon}):_vm._e(),_vm._v(" "+_vm._s(_vm.label))])],2):_c('button',{class:_vm.actionClasses,attrs:{"type":_vm.type},on:{"click":_vm.onClick}},[_vm._t("label-wrapper",[(_vm.icon)?_c('i',{class:_vm.icon}):_vm._e(),_vm._v(" "),_vm._t("label",[_vm._v(_vm._s(_vm.label))])])],2)]:_vm._e(),_vm._v(" "),_c('btn-group',{class:{'dropup': _vm.dropup, 'dropright': _vm.dropright, 'dropleft': _vm.dropleft}},[_c('button',{class:_vm.toggleClasses,attrs:{"type":"button","aria-haspopup":"true","aria-expanded":_vm.isDropdownShowing,"id":_vm.id},on:{"click":function($event){$event.preventDefault();!_vm.isDropdownShowing ? _vm.show() : _vm.hide();},"blur":_vm.onBlur}}),_vm._v(" "),_c('dropdown-menu',{attrs:{"id":_vm.id,"align":_vm.align,"show":_vm.isDropdownShowing},on:{"update:show":function($event){_vm.isDropdownShowing=$event;},"click":_vm.onMenuClick,"item:click":_vm.onItemClick}},[_vm._t("default")],2)],1),_vm._v(" "),(_vm.dropleft)?[(_vm.href)?_c('a',{class:_vm.actionClasses,attrs:{"href":_vm.href},on:{"click":_vm.onClick}},[_vm._t("label",[(_vm.icon)?_c('i',{class:_vm.icon}):_vm._e(),_vm._v(" "+_vm._s(_vm.label))])],2):_c('button',{class:_vm.actionClasses,attrs:{"type":_vm.type},on:{"click":_vm.onClick}},[_vm._t("label-wrapper",[(_vm.icon)?_c('i',{class:_vm.icon}):_vm._e(),_vm._v(" "),_vm._t("label",[_vm._v(_vm._s(_vm.label))])])],2)]:_vm._e()],2):_c('btn-group',{class:{'dropup': _vm.dropup, 'dropright': _vm.dropright, 'dropleft': _vm.dropleft},on:{"click":_vm.onClick}},[_c('button',{class:_vm.toggleClasses,attrs:{"aria-haspopup":"true","aria-expanded":_vm.isDropdownShowing,"type":_vm.type,"id":_vm.id},on:{"click":function($event){$event.preventDefault();!_vm.isDropdownShowing ? _vm.show() : _vm.hide();},"blur":_vm.onBlur}},[_vm._t("label",[(_vm.icon)?_c('i',{class:_vm.icon}):_vm._e(),_vm._v(" "+_vm._s(_vm.label))])],2),_vm._v(" "),_c('dropdown-menu',{attrs:{"id":_vm.id,"align":_vm.align,"show":_vm.isDropdownShowing},on:{"update:show":function($event){_vm.isDropdownShowing=$event;},"click":_vm.onMenuClick,"item:click":_vm.onItemClick}},[_vm._t("default")],2)],1)},staticRenderFns: [],

    name: 'btn-dropdown',

    extends: Btn,

    components: {
        BtnGroup,
        DropdownMenu
    },

    props: {

        /**
         * The button icon that appears before the label.
         *
         * @property String
         */
        autoclose: Boolean,

        /**
         * The button icon that appears before the label.
         *
         * @property String
         */
        icon: String,

        /**
         * The toggle button's label. If not defined as an attribute,
         * you can override with the component's slot (inner html).
         *
         * @property String
         */
        label: String,

        /**
         * The `id` attribute on the toggle button and aria label. If no `id` is
         * defined, then a UUID will be generated instead.
         *
         * @property String
         */
        id: {
            type: String,
            default: uuid
        },

        /**
         * The button type attribute.
         *
         * @property String
         */
        type: {
            type: String,
            default: 'button'
        },

        /**
         * Display the dropdown menu aligned left or right
         *
         * @property String
         */
        align: {
            type: String,
            default: 'left',
            validate(value) {
                return ['left', 'right'].indexOf(value.toLowerCase()) !== -1;
            }
        },

        /**
         * Display the dropdown button with a split toggle button.
         *
         * @property Boolean
         */
        split: {
            type: Boolean,
            default: false
        },

        /**
         * Display as a dropup instead of a dropdown.
         *
         * @property Boolean
         */
        dropup: {
            type: Boolean,
            default: false
        },

        /**
         * Display as a dropright instead of a dropdown.
         *
         * @property Boolean
         */
        dropright: {
            type: Boolean,
            default: false
        },

        /**
         * Display as a dropleft instead of a dropdown.
         *
         * @property Boolean
         */
        dropleft: {
            type: Boolean,
            default: false
        }

    },

    methods: {

        /**
         * Focus on the the dropdown toggle button
         *
         * @return void
         */
        focus() {
            this.$el.querySelector('.dropdown-toggle').focus();
        },

        /**
         * Focus on the the dropdown toggle button
         *
         * @return void
         */
        queryFocusable() {
            return this.$el.querySelector('.dropdown-menu').querySelectorAll('label, input, select, textarea, [tabindex]:not([tabindex="-1"])');
        },

        /**
         * Method to check if the given element is focusable.
         *
         * @return void
         */
        isFocusable(element) {
            const nodes = this.queryFocusable();

            for(let i in nodes) {
                if(element === nodes[i]) {
                    return true;
                }
            }

            return false;
        },

        /**
         * Toggle the dropdown menu
         *
         * @return void
         */
        toggle() {
            !this.isDropdownShowing ? this.show() : this.hide();
        },

        /**
         * Show the dropdown menu
         *
         * @return void
         */
        show() {
            this.isDropdownShowing = true;

            this.$nextTick(() => {
                let side = 'bottom';

                if(this.dropup) {
                    side = 'top';
                }
                else if(this.dropleft) {
                    side = 'left';
                }
                else if(this.dropright) {
                    side = 'right';
                }

                const menu = this.$el.querySelector('.dropdown-menu');
                const toggle = this.$el.querySelector('.dropdown-toggle');
                const position = [side, this.align === 'left' ? 'start' : 'end'];

                new Popper(toggle, menu, {
                    placement: position.join('-')
                });

                if(this.queryFocusable().item(0)) {
                    this.$el.querySelector('input, select, textarea').focus();
                }

                this.$emit('show');
            });
        },

        /**
         * Hide the dropdown menu
         *
         * @return void
         */
        hide() {
            this.$emit('toggle', this.isDropdownShowing = false);
            this.$emit('hide');
        },

        /**
         * A callback function for the `click` event for the action button
         *
         * @return void
         */
        onClick(event) {
            this.hide();
            this.$emit('click', event);
        },

        /**
         * A callback function for the `blur` event for the action button
         *
         * @return void
         */
        onBlur(event) {
            if(!this.$el.contains(event.relatedTarget)) {
                this.hide();
            }
        },

        /**
         * A callback function for the `item:click` event for the action button
         *
         * @return void
         */
        onMenuClick(event, item) {
            if(event.target === this.$el.querySelector('.dropdown-menu')) {
                this.focus();
            }
        },

        /**
         * A callback function for the `item:click` event for the action button
         *
         * @return void
         */
        onItemClick(event, item) {
            if(!this.isFocusable(event.target)) {
                this.hide();
            }

            this.$emit('item:click', event, item);
        }

    },

    computed: {

        variantClassPrefix() {
            return 'btn' + (this.outline ? '-outline' : '');
        },

        sizeableClassPrefix() {
            return 'btn';
        },

        actionClasses() {
            return [
                'btn',
                prefix(this.size, 'btn'),
                prefix(this.variant, 'btn')
            ].join(' ');
        },

        toggleClasses() {
            return [
                'btn',
                'dropdown-toggle',
                this.variantClass,
                this.sizeableClass,
                this.active ? 'active' : '',
                this.block ? 'btn-block' : '',
                (this.split ? 'dropdown-toggle-split' : ''),
            ].join(' ');
        }
    },

    data() {
        return {
            isDropdownShowing: false
        };
    },

    mounted() {
        each(this.$el.querySelectorAll('[type=submit], input, select, textarea, [tabindex]:not([tabindex="-1"]'), el => {
            const keydown = event => {
                const ignore = [
                    LEFT_ARROW_KEYCODE,
                    RIGHT_ARROW_KEYCODE,
                    UP_ARROW_KEYCODE,
                    DOWN_ARROW_KEYCODE,
                    TAB_KEYCODE
                ];

                if(ignore.indexOf(event.keyCode) !== -1) {
                    ignoreBlurEvent = true;
                }
            };

            const blur = event => {
                if(!ignoreBlurEvent) {
                    this.focus();
                }

                ignoreBlurEvent = false;
            };

            const focus = event => {
                ignoreBlurEvent = false;
            };

            const mousedown = event => {
                ignoreBlurEvent = true;
            };

            el.addEventListener('blur', blur);
            el.addEventListener('focus', focus);
            el.addEventListener('keydown', keydown);
            el.addEventListener('mousedown', mousedown);
        });
    }

};

var plugin$m = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      BtnDropdown: BtnDropdown
    });
  }
});

var HasSlots = {
  methods: {
    getSlot: function getSlot(slot) {
      return this.$slots[slot];
    },
    hasSlot: function hasSlot(slot) {
      return !!this.$slots[slot];
    },
    hasSlots: function hasSlots(slots) {
      for (var i in slots) {
        if (!this.hasSlot(slots[i])) {
          return false;
        }
      }
    }
  },
  computed: {
    hasDefaultSlot: function hasDefaultSlot() {
      return this.hasSlot('default');
    }
  }
};

var Card = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.mergeClasses(_vm.className, _vm.colorableClasses)},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'card',

    mixins: [
        HasSlots,
        Colorable,
        MergeClasses
    ],

    computed: {

        className() {
            return this.$options.name
        }

    }

};

var CardBody = {

    name: 'card-body',

    extends: Card

};

var CardBtnGroup = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('btn-group',{staticClass:"card-btn-group"},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'card-btn-group',

    extends: Card

};

var CardDeck = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-deck"},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'card-deck'

};

var CardHeader = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",class:_vm.mergeClasses(_vm.className, _vm.colorableClasses)},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'card-header',

    extends: Card,

    mixins: [
        MergeClasses
    ],

    props: {

        /**
         * The component's HTML tag name
         *
         * @property String
         */
        tag: {
            type: String,
            default: 'h5'
        }

    }

};

var CardFooter = {

    name: 'card-footer',

    extends: CardHeader,

    props: {

        /**
         * The component's HTML tag name
         *
         * @property String
         */
        tag: {
            type: String,
            default: 'div'
        }

    }

};

var CardImg = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"d-flex justify-content-center align-items-center",class:_vm.mergeClasses(_vm.className),style:({height: _vm.unit(_vm.height)})},[(_vm.background)?_c('div',{staticClass:"card-img-bg",style:({background: _vm.background ? `url(${this.src})` : null, overflow: _vm.blur ? 'hidden' : 'inherit', filter: _vm.blur ? `blur(${_vm.unit(_vm.blur)})` : null})}):_vm._e(),_vm._v(" "),(!_vm.background && _vm.src)?_c('img',{staticClass:"img-fluid",attrs:{"src":_vm.src,"alt":_vm.alt}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"card-img-content",class:{'text-truncate': _vm.textTruncate}},[_vm._t("default")],2)])},staticRenderFns: [],

    name: 'card-img',

    extends: Card,

    mixins: [
        MergeClasses
    ],

    props: {

        /**
         * The alt attribute
         *
         * @property String
         */
        alt: String,

        /**
         * Display the image as a background image fit with CSS cover.
         *
         * @property String
         */
        background: Boolean,

        /**
         * The amount to blur the background image.
         *
         * @property String
         */
        blur: [Number, String],

        /**
         * The height attribute
         *
         * @property String
         */
        height: [Number, String],

        /**
         * Truncate the text in the content
         *
         * @property String
         */
        textTruncate: Boolean,

        /**
         * The src attribute
         *
         * @property String
         */
        src: String

    },

    methods: {

        unit(value) {
            return unit(value);
        }

    }

};

var CardImgTop = {

    name: 'card-img-top',

    extends: CardImg
};

var CardImgBottom = {

    name: 'card-img-bottom',

    extends: CardImg

};

var CardImgOverlay = {

    name: 'card-img-overlay',

    extends: Card

};

var CardLink = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('router-link',{class:_vm.mergeClasses(_vm.className, _vm.colorableClasses),attrs:{"to":_vm.href},on:{"click":_vm.onClick}},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'card-link',

    extends: Card,

    mixins: [
        MergeClasses
    ],

    props: {

        /**
         * The alt attribute
         *
         * @property String
         */
        alt: String,

        /**
         * The href attribute
         *
         * @property String
         */
        href: String,

        /**
         * The to attribute
         *
         * @property String
         */
        to: [Object, String]

    },

    methods: {

        onClick(event) {
            this.$emit('click', event);
        }

    }

};

var CardSubtitle = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h6',{class:_vm.mergeClasses(_vm.className, _vm.colorableClasses)},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'card-subtitle',

    extends: Card,

    mixins: [
        MergeClasses
    ]

};

var CardTitle = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h5',{class:_vm.mergeClasses(_vm.className, _vm.colorableClasses)},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'card-title',

    mixins: [
        Card,
        MergeClasses
    ]

};

var plugin$n = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Card: Card,
      CardBody: CardBody,
      CardBtnGroup: CardBtnGroup,
      CardDeck: CardDeck,
      CardFooter: CardFooter,
      CardHeader: CardHeader,
      CardImg: CardImg,
      CardImgTop: CardImgTop,
      CardImgBottom: CardImgBottom,
      CardImgOverlay: CardImgOverlay,
      CardLink: CardLink,
      CardSubtitle: CardSubtitle,
      CardTitle: CardTitle
    });
  }
});

var RadioField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.mergeClasses(_vm.controlClass, _vm.customControlClass, _vm.sizeableClass, _vm.inline ? _vm.inlineClass : '')},[(_vm.custom && _vm.id)?[_c('input',{directives:[{name:"bind-events",rawName:"v-bind-events"}],class:_vm.mergeClasses(_vm.inputClass, (_vm.invalidFeedback ? 'is-invalid' : '')),attrs:{"type":"radio","name":_vm.name,"id":_vm.id,"required":_vm.required,"disabled":_vm.disabled || _vm.readonly,"readonly":_vm.readonly,"pattern":_vm.pattern},domProps:{"value":_vm.value,"checked":_vm.checkedValue === _vm.value || _vm.checked},on:{"change":function($event){_vm.$emit('change', $event.target.value);}}}),_vm._v(" "),_c('label',{class:_vm.mergeClasses(_vm.labelClass, _vm.colorableClasses),attrs:{"for":_vm.id}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),_vm._v(" "),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2)]:[_c('label',{class:_vm.mergeClasses(_vm.labelClass, _vm.colorableClasses),attrs:{"for":_vm.id}},[_c('input',{directives:[{name:"bind-events",rawName:"v-bind-events"}],class:_vm.mergeClasses(_vm.inputClass, (_vm.invalidFeedback ? 'is-invalid' : '')),attrs:{"type":"radio","name":_vm.name,"id":_vm.id,"required":_vm.required,"disabled":_vm.disabled || _vm.readonly,"readonly":_vm.readonly,"pattern":_vm.pattern},domProps:{"value":_vm.value,"checked":_vm.checkedValue === _vm.value || _vm.checked},on:{"change":function($event){_vm.$emit('change', $event.target.value);}}}),_vm._v(" "),_vm._t("default",[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),_vm._v(" "),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2)],_vm._v(" "),_vm._t("help",[(_vm.helpText)?_c('help-text',{domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()])],2)},staticRenderFns: [],

    name: 'radio-field',

    components: {
        HelpText,
        FormFeedback
    },

    mixins: [
        Colorable,
        FormControl,
        MergeClasses
    ],

    model: {
        event: 'change',
        prop: 'checkedValue'
    },

    props: {

        /**
         * An array of event names that correlate with callback functions
         *
         * @property Function
         */
        bindEvents: {
            type: Array,
            default() {
                return ['focus', 'blur', 'input', 'click', 'keyup', 'keydown', 'progress'];
            }
        },

        /**
         * Is this a custom element
         *
         * @property String
         */
        custom: Boolean,

        /**
         * Display the form field and label inline
         *
         * @property Function
         */
        inline: Boolean,

        /**
         * The checked values
         *
         * @property String
         */
        checked: Boolean,

        /**
         * The checked value
         *
         * @property String
         */
        checkedValue: [Boolean, Number, String, Object],

        /**
         * The class name assigned to the control element
         *
         * @property String
         */
        defaultControlClass: {
            type: String,
            default: 'form-check'
        }

    },

    computed: {

        labelClass() {
            return prefix('label', this.controlClass);
        },

        inputClass() {
            return prefix('input', this.controlClass);
        },

        inlineClass() {
            return prefix('inline', this.controlClass);
        },

        controlClass() {
            return this.custom ? 'custom-control' : this.defaultControlClass;
        },

        customControlClass() {
            return this.custom ? prefix(this.$options.name.replace('-field', ''), 'custom') : '';
        },

        sizeableClass() {
            return prefix(this.size, 'form-control');
        }

    }

};

var plugin$o = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      RadioField: RadioField
    });
  }
});

var CheckboxField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.mergeClasses(_vm.controlClass, _vm.customControlClass, _vm.sizeableClass, _vm.inline ? _vm.inlineClass : '')},[(_vm.custom && _vm.id)?[_c('input',{directives:[{name:"bind-events",rawName:"v-bind-events"}],class:_vm.mergeClasses(_vm.inputClass, (_vm.invalidFeedback ? 'is-invalid' : '')),attrs:{"type":"checkbox","name":_vm.name,"id":_vm.id,"required":_vm.required,"disabled":_vm.disabled || _vm.readonly,"readonly":_vm.readonly,"pattern":_vm.pattern},domProps:{"value":_vm.value,"checked":_vm.checkedValues.indexOf(_vm.value) !== -1 || _vm.checked},on:{"change":function($event){_vm.update($event.target.value);}}}),_vm._v(" "),_c('label',{class:_vm.mergeClasses(_vm.labelClass, _vm.colorableClasses),attrs:{"for":_vm.id}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),_vm._v(" "),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2)]:[_c('label',{class:_vm.mergeClasses(_vm.labelClass, _vm.colorableClasses),attrs:{"for":_vm.id}},[_c('input',{directives:[{name:"bind-events",rawName:"v-bind-events"}],class:_vm.mergeClasses(_vm.inputClass, (_vm.invalidFeedback ? 'is-invalid' : '')),attrs:{"type":"checkbox","name":_vm.name,"id":_vm.id,"required":_vm.required,"disabled":_vm.disabled || _vm.readonly,"readonly":_vm.readonly,"pattern":_vm.pattern},domProps:{"value":_vm.value,"checked":_vm.checkedValues.indexOf(_vm.value) !== -1 || _vm.checked},on:{"change":function($event){_vm.update($event.target.value);}}}),_vm._v(" "),_vm._t("default",[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),_vm._v(" "),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2)],_vm._v(" "),_vm._t("help",[(_vm.helpText)?_c('help-text',{domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()])],2)},staticRenderFns: [],

    name: 'checkbox-field',

    extends: RadioField,

    mixins: [
        MergeClasses
    ],

    model: {
        event: 'change',
        prop: 'checkedValues'
    },

    props: {

        /**
         * The checked values
         *
         * @property String
         */
        checkedValues: {
            type: Array,
            default() {
                return [];
            }
        }

    },

    methods: {

        update(value) {
            const checked = this.checkedValues.slice(0);
            const index = this.checkedValues.indexOf(value);

            if(index === -1) {
                checked.push(value);
            }
            else {
                checked.splice(index, 1);
            }

            this.$emit('change', checked);
        }

    }
};

var plugin$p = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      CheckboxField: CheckboxField
    });
  }
});

var Dropzone = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dropzone",class:{'is-dragging': _vm.isDragging},on:{"drop":function($event){$event.preventDefault();return _vm.onDrop($event)},"dragover":function($event){$event.preventDefault();return _vm.onDragover($event)},"dragenter":function($event){$event.preventDefault();return _vm.onDragenter($event)},"dragleave":function($event){$event.preventDefault();return _vm.onDragleave($event)}}},[_vm._t("placeholder",[_c('div',{staticClass:"dropzone-placeholder text-center"},[_c('card',[_c('card-body',[_c('h1',{staticClass:"mt-4"},[_vm._v("Drag & Drop")]),_vm._v(" "),_c('p',[_vm._v("Drag and drop your files here to upload them!")]),_vm._v(" "),_c('div',{staticClass:"mt-3"},[_c('i',{staticClass:"fa fa-image"})])])],1)],1)]),_vm._v(" "),_vm._t("default")],2)},staticRenderFns: [],

    name: 'dropzone',

    components: {
        Card,
        CardBody
    },

    methods: {

        onDrop(event) {
            this.isDragging = false;
            this.$emit('drop', event);
        },

        onDragover(event) {
            this.isDragging = true;
            this.$emit('dragover', event);
        },

        onDragenter(event) {
            this.isDragging = true;
            this.$emit('dragenter', event);
            this.onDragover(event);
        },

        onDragleave(event) {
            this.isDragging = false;
            this.$emit('dragleave', event);
        }

    },

    data() {
        return {
            files: null,
            isDragging: false
        }
    }

};

var plugin$q = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Dropzone: Dropzone
    });
  }
});

function readFile(file, progress) {
  if (!(file instanceof File)) {
    throw new Error('The first argument be an instance of File object.');
  }

  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    if (isFunction$1(progress)) {
      reader.onprogress = function (e) {
        return progress(e, reader);
      };
    }

    reader.onload = function (e) {
      return resolve(e);
    };

    reader.onerror = function (e) {
      return reject(e);
    };

    reader.onabort = function (e) {
      return reject(e);
    };

    reader.readAsDataURL(file);
  });
}

var FilePreview = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"file-preview",class:{'has-image': !!_vm.image}},[_c('div',{staticClass:"file-preview-inner"},[(!_vm.hideClose)?_c('a',{staticClass:"file-preview-close",attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();_vm.$emit('close', _vm.file);}}},[_c('i',{staticClass:"fa fa-times-circle"})]):_vm._e(),_vm._v(" "),(!!_vm.poster || _vm.isImage)?_c('div',{staticClass:"file-preview-image"},[(!!_vm.poster || !!_vm.image)?_c('img',{staticClass:"file-preview-thumbnail",attrs:{"src":_vm.poster || _vm.image},on:{"load":_vm.onLoad}}):_vm._e()]):_c('div',{directives:[{name:"ready",rawName:"v-ready",value:(() => this.$emit('loaded')),expression:"() => this.$emit('loaded')"}],staticClass:"file-preview-icon"},[_c('i',{staticClass:"fa",class:{'fa-file-video-o': _vm.isVideo, 'fa-file-o': !_vm.isVideo}})]),_vm._v(" "),(_vm.progress || _vm.isImage && _vm.loaded !== false)?_c('progress-bar',{directives:[{name:"ready",rawName:"v-ready",value:(_vm.readFile),expression:"readFile"}],staticClass:"mt-3",attrs:{"value":_vm.progress || _vm.loaded || 0,"height":10}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"file-preview-filename",domProps:{"innerHTML":_vm._s(_vm.name)}}),_vm._v(" "),_c('div',{staticClass:"file-preview-filesize"},[_vm._v("("+_vm._s(_vm.size)+")")]),_vm._v(" "),_c('div')],1)])},staticRenderFns: [],

    name: 'file-preview',

    components: {
        ProgressBar
    },

    directives: {
        ready: {
            inserted(el, binding, vnode) {
                if(isFunction$1(binding.value)) {
                    vnode.context.$nextTick(binding.value);
                }
            }
        }
    },

    props: {

        /**
         * Hide the close button for the preview
         *
         * @property Object
         */
        hideClose: Boolean,

        /**
         * The uploaded File object
         *
         * @property Object
         */
        file: {
            type: [Object, File],
            required: true
        },

        /**
         * An image URL to instead of using the file reader.
         * @property {String}
         */
        poster: String,

        /**
         * Progress that can be passed from a parent comparent, for instance
         * use to show an ajax request with a single progress bar. If a progress
         * value is passed, even a 0, the progress bar will not be used to show
         * the progress of the file reader.
         * @property {Number}
         */
        progress: {
            type: Number,
            default: undefined
        }

    },

    computed: {

        /**
         * Get the file name
         *
         * @property String
         */
        name() {
            return this.file instanceof File ? this.file.name : this.file.orig_filename;
        },

        /**
         * Get the file extension
         *
         * @property String
         */
        extension() {
            return this.file instanceof File ? this.file.name.split('.').pop().toLowerCase() : this.file.extension;
        },

        /**
         * Get the file formatted size
         *
         * @property String
         */
        size() {
            return this.bytesToSize(this.file.size);
        },

        /**
         * Get the file type
         *
         * @property String
         */
        type() {
            return this.file instanceof File ? this.file.type : this.file.mime;
        },

        /**
         * Check to see if the file is an image.
         *
         * @property String
         */
        isImage() {
            return !!this.type.match(/^image/);
        },

        /**
         * Check to see if the file is a video.
         *
         * @property String
         */
        isVideo() {
            return !!this.type.match(/^video/);
        },

        /**
         * Get the last time the file was modified (as timestamp)
         *
         * @property String
         */
        lastModified() {
            return this.file instanceof File ? this.file.lastModified : null;
        },

        /**
         * Get the last time the file was modified (as Date)
         *
         * @property String
         */
        lastModifiedDate() {
            return this.file instanceof File ? this.file.lastModifiedDate : null;
        }

    },

    methods: {

        readFile() {
            if(this.file instanceof File) {
                const start = moment();

                this.loaded = 0;

                this.$nextTick(() => {
                    readFile(this.file, e => {
                        if(e.lengthComputable) {
                            this.$emit('progress', this.loaded = parseInt((e.loaded / e.total) * 100, 10));
                        }
                    }).then(event => {
                        this.$emit('read', event);

                        setTimeout(() => {
                            this.image = event.target.result;
                            this.$nextTick(() => {
                                this.loaded = false;
                            });
                        }, 500 - moment().diff(start));
                    }, error => {
                        this.$emit('error', error);
                    });
                });
            }
        },

    	bytesToSize: function(bytes) {
    		var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    		if (bytes == 0) return '0 Byte';
    		var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    		return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    	},

        onLoad(event) {
            this.$emit('loaded');
        }

    },

    data() {
        return {
            image: this.file.url,
            loaded: this.file instanceof File ? 0 : false,
        };
    }

};

var plugin$r = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      FilePreview: FilePreview
    });
  }
});

var FormControl$1 = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(!_vm.select ? 'input' : 'select',{directives:[{name:"bind-events",rawName:"v-bind-events",value:(_vm.bindEvents),expression:"bindEvents"}],tag:"component",class:_vm.mergeClasses(_vm.controlClasses, _vm.colorableClasses),attrs:{"name":_vm.name,"id":_vm.id,"type":!_vm.select ? _vm.type : false,"value":_vm.value,"pattern":_vm.pattern,"required":_vm.required,"readonly":_vm.readonly,"placeholder":_vm.placeholder,"disabled":_vm.disabled || _vm.readonly,"aria-label":_vm.label,"aria-describedby":_vm.id}})},staticRenderFns: [],

    name: 'form-control',

    mixins: [
        Colorable,
        FormControl,
        MergeClasses
    ],

    props: {

        /**
         * Is the element a select?
         *
         * @property String
         */
        select: Boolean,

        /**
         * The type attribute
         *
         * @property String
         */
        type: {
            type: String,
            default: 'text'
        }

    }

};

var plugin$s = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      FormControl: FormControl$1
    });
  }
});

/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the W3C SOFTWARE AND DOCUMENT NOTICE AND LICENSE.
 *
 *  https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 */

(function(window, document) {


// Exits early if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.
if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype) {

  // Minimal polyfill for Edge 15's lack of `isIntersecting`
  // See: https://github.com/w3c/IntersectionObserver/issues/211
  if (!('isIntersecting' in window.IntersectionObserverEntry.prototype)) {
    Object.defineProperty(window.IntersectionObserverEntry.prototype,
      'isIntersecting', {
      get: function () {
        return this.intersectionRatio > 0;
      }
    });
  }
  return;
}


/**
 * Creates the global IntersectionObserverEntry constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-entry
 * @param {Object} entry A dictionary of instance properties.
 * @constructor
 */
function IntersectionObserverEntry(entry) {
  this.time = entry.time;
  this.target = entry.target;
  this.rootBounds = entry.rootBounds;
  this.boundingClientRect = entry.boundingClientRect;
  this.intersectionRect = entry.intersectionRect || getEmptyRect();
  this.isIntersecting = !!entry.intersectionRect;

  // Calculates the intersection ratio.
  var targetRect = this.boundingClientRect;
  var targetArea = targetRect.width * targetRect.height;
  var intersectionRect = this.intersectionRect;
  var intersectionArea = intersectionRect.width * intersectionRect.height;

  // Sets intersection ratio.
  if (targetArea) {
    // Round the intersection ratio to avoid floating point math issues:
    // https://github.com/w3c/IntersectionObserver/issues/324
    this.intersectionRatio = Number((intersectionArea / targetArea).toFixed(4));
  } else {
    // If area is zero and is intersecting, sets to 1, otherwise to 0
    this.intersectionRatio = this.isIntersecting ? 1 : 0;
  }
}


/**
 * Creates the global IntersectionObserver constructor.
 * https://w3c.github.io/IntersectionObserver/#intersection-observer-interface
 * @param {Function} callback The function to be invoked after intersection
 *     changes have queued. The function is not invoked if the queue has
 *     been emptied by calling the `takeRecords` method.
 * @param {Object=} opt_options Optional configuration options.
 * @constructor
 */
function IntersectionObserver(callback, opt_options) {

  var options = opt_options || {};

  if (typeof callback != 'function') {
    throw new Error('callback must be a function');
  }

  if (options.root && options.root.nodeType != 1) {
    throw new Error('root must be an Element');
  }

  // Binds and throttles `this._checkForIntersections`.
  this._checkForIntersections = throttle(
      this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT);

  // Private properties.
  this._callback = callback;
  this._observationTargets = [];
  this._queuedEntries = [];
  this._rootMarginValues = this._parseRootMargin(options.rootMargin);

  // Public properties.
  this.thresholds = this._initThresholds(options.threshold);
  this.root = options.root || null;
  this.rootMargin = this._rootMarginValues.map(function(margin) {
    return margin.value + margin.unit;
  }).join(' ');
}


/**
 * The minimum interval within which the document will be checked for
 * intersection changes.
 */
IntersectionObserver.prototype.THROTTLE_TIMEOUT = 100;


/**
 * The frequency in which the polyfill polls for intersection changes.
 * this can be updated on a per instance basis and must be set prior to
 * calling `observe` on the first target.
 */
IntersectionObserver.prototype.POLL_INTERVAL = null;

/**
 * Use a mutation observer on the root element
 * to detect intersection changes.
 */
IntersectionObserver.prototype.USE_MUTATION_OBSERVER = true;


/**
 * Starts observing a target element for intersection changes based on
 * the thresholds values.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.observe = function(target) {
  var isTargetAlreadyObserved = this._observationTargets.some(function(item) {
    return item.element == target;
  });

  if (isTargetAlreadyObserved) {
    return;
  }

  if (!(target && target.nodeType == 1)) {
    throw new Error('target must be an Element');
  }

  this._registerInstance();
  this._observationTargets.push({element: target, entry: null});
  this._monitorIntersections();
  this._checkForIntersections();
};


/**
 * Stops observing a target element for intersection changes.
 * @param {Element} target The DOM element to observe.
 */
IntersectionObserver.prototype.unobserve = function(target) {
  this._observationTargets =
      this._observationTargets.filter(function(item) {

    return item.element != target;
  });
  if (!this._observationTargets.length) {
    this._unmonitorIntersections();
    this._unregisterInstance();
  }
};


/**
 * Stops observing all target elements for intersection changes.
 */
IntersectionObserver.prototype.disconnect = function() {
  this._observationTargets = [];
  this._unmonitorIntersections();
  this._unregisterInstance();
};


/**
 * Returns any queue entries that have not yet been reported to the
 * callback and clears the queue. This can be used in conjunction with the
 * callback to obtain the absolute most up-to-date intersection information.
 * @return {Array} The currently queued entries.
 */
IntersectionObserver.prototype.takeRecords = function() {
  var records = this._queuedEntries.slice();
  this._queuedEntries = [];
  return records;
};


/**
 * Accepts the threshold value from the user configuration object and
 * returns a sorted array of unique threshold values. If a value is not
 * between 0 and 1 and error is thrown.
 * @private
 * @param {Array|number=} opt_threshold An optional threshold value or
 *     a list of threshold values, defaulting to [0].
 * @return {Array} A sorted list of unique and valid threshold values.
 */
IntersectionObserver.prototype._initThresholds = function(opt_threshold) {
  var threshold = opt_threshold || [0];
  if (!Array.isArray(threshold)) threshold = [threshold];

  return threshold.sort().filter(function(t, i, a) {
    if (typeof t != 'number' || isNaN(t) || t < 0 || t > 1) {
      throw new Error('threshold must be a number between 0 and 1 inclusively');
    }
    return t !== a[i - 1];
  });
};


/**
 * Accepts the rootMargin value from the user configuration object
 * and returns an array of the four margin values as an object containing
 * the value and unit properties. If any of the values are not properly
 * formatted or use a unit other than px or %, and error is thrown.
 * @private
 * @param {string=} opt_rootMargin An optional rootMargin value,
 *     defaulting to '0px'.
 * @return {Array<Object>} An array of margin objects with the keys
 *     value and unit.
 */
IntersectionObserver.prototype._parseRootMargin = function(opt_rootMargin) {
  var marginString = opt_rootMargin || '0px';
  var margins = marginString.split(/\s+/).map(function(margin) {
    var parts = /^(-?\d*\.?\d+)(px|%)$/.exec(margin);
    if (!parts) {
      throw new Error('rootMargin must be specified in pixels or percent');
    }
    return {value: parseFloat(parts[1]), unit: parts[2]};
  });

  // Handles shorthand.
  margins[1] = margins[1] || margins[0];
  margins[2] = margins[2] || margins[0];
  margins[3] = margins[3] || margins[1];

  return margins;
};


/**
 * Starts polling for intersection changes if the polling is not already
 * happening, and if the page's visibility state is visible.
 * @private
 */
IntersectionObserver.prototype._monitorIntersections = function() {
  if (!this._monitoringIntersections) {
    this._monitoringIntersections = true;

    // If a poll interval is set, use polling instead of listening to
    // resize and scroll events or DOM mutations.
    if (this.POLL_INTERVAL) {
      this._monitoringInterval = setInterval(
          this._checkForIntersections, this.POLL_INTERVAL);
    }
    else {
      addEvent(window, 'resize', this._checkForIntersections, true);
      addEvent(document, 'scroll', this._checkForIntersections, true);

      if (this.USE_MUTATION_OBSERVER && 'MutationObserver' in window) {
        this._domObserver = new MutationObserver(this._checkForIntersections);
        this._domObserver.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      }
    }
  }
};


/**
 * Stops polling for intersection changes.
 * @private
 */
IntersectionObserver.prototype._unmonitorIntersections = function() {
  if (this._monitoringIntersections) {
    this._monitoringIntersections = false;

    clearInterval(this._monitoringInterval);
    this._monitoringInterval = null;

    removeEvent(window, 'resize', this._checkForIntersections, true);
    removeEvent(document, 'scroll', this._checkForIntersections, true);

    if (this._domObserver) {
      this._domObserver.disconnect();
      this._domObserver = null;
    }
  }
};


/**
 * Scans each observation target for intersection changes and adds them
 * to the internal entries queue. If new entries are found, it
 * schedules the callback to be invoked.
 * @private
 */
IntersectionObserver.prototype._checkForIntersections = function() {
  var rootIsInDom = this._rootIsInDom();
  var rootRect = rootIsInDom ? this._getRootRect() : getEmptyRect();

  this._observationTargets.forEach(function(item) {
    var target = item.element;
    var targetRect = getBoundingClientRect(target);
    var rootContainsTarget = this._rootContainsTarget(target);
    var oldEntry = item.entry;
    var intersectionRect = rootIsInDom && rootContainsTarget &&
        this._computeTargetAndRootIntersection(target, rootRect);

    var newEntry = item.entry = new IntersectionObserverEntry({
      time: now(),
      target: target,
      boundingClientRect: targetRect,
      rootBounds: rootRect,
      intersectionRect: intersectionRect
    });

    if (!oldEntry) {
      this._queuedEntries.push(newEntry);
    } else if (rootIsInDom && rootContainsTarget) {
      // If the new entry intersection ratio has crossed any of the
      // thresholds, add a new entry.
      if (this._hasCrossedThreshold(oldEntry, newEntry)) {
        this._queuedEntries.push(newEntry);
      }
    } else {
      // If the root is not in the DOM or target is not contained within
      // root but the previous entry for this target had an intersection,
      // add a new record indicating removal.
      if (oldEntry && oldEntry.isIntersecting) {
        this._queuedEntries.push(newEntry);
      }
    }
  }, this);

  if (this._queuedEntries.length) {
    this._callback(this.takeRecords(), this);
  }
};


/**
 * Accepts a target and root rect computes the intersection between then
 * following the algorithm in the spec.
 * TODO(philipwalton): at this time clip-path is not considered.
 * https://w3c.github.io/IntersectionObserver/#calculate-intersection-rect-algo
 * @param {Element} target The target DOM element
 * @param {Object} rootRect The bounding rect of the root after being
 *     expanded by the rootMargin value.
 * @return {?Object} The final intersection rect object or undefined if no
 *     intersection is found.
 * @private
 */
IntersectionObserver.prototype._computeTargetAndRootIntersection =
    function(target, rootRect) {

  // If the element isn't displayed, an intersection can't happen.
  if (window.getComputedStyle(target).display == 'none') return;

  var targetRect = getBoundingClientRect(target);
  var intersectionRect = targetRect;
  var parent = getParentNode(target);
  var atRoot = false;

  while (!atRoot) {
    var parentRect = null;
    var parentComputedStyle = parent.nodeType == 1 ?
        window.getComputedStyle(parent) : {};

    // If the parent isn't displayed, an intersection can't happen.
    if (parentComputedStyle.display == 'none') return;

    if (parent == this.root || parent == document) {
      atRoot = true;
      parentRect = rootRect;
    } else {
      // If the element has a non-visible overflow, and it's not the <body>
      // or <html> element, update the intersection rect.
      // Note: <body> and <html> cannot be clipped to a rect that's not also
      // the document rect, so no need to compute a new intersection.
      if (parent != document.body &&
          parent != document.documentElement &&
          parentComputedStyle.overflow != 'visible') {
        parentRect = getBoundingClientRect(parent);
      }
    }

    // If either of the above conditionals set a new parentRect,
    // calculate new intersection data.
    if (parentRect) {
      intersectionRect = computeRectIntersection(parentRect, intersectionRect);

      if (!intersectionRect) break;
    }
    parent = getParentNode(parent);
  }
  return intersectionRect;
};


/**
 * Returns the root rect after being expanded by the rootMargin value.
 * @return {Object} The expanded root rect.
 * @private
 */
IntersectionObserver.prototype._getRootRect = function() {
  var rootRect;
  if (this.root) {
    rootRect = getBoundingClientRect(this.root);
  } else {
    // Use <html>/<body> instead of window since scroll bars affect size.
    var html = document.documentElement;
    var body = document.body;
    rootRect = {
      top: 0,
      left: 0,
      right: html.clientWidth || body.clientWidth,
      width: html.clientWidth || body.clientWidth,
      bottom: html.clientHeight || body.clientHeight,
      height: html.clientHeight || body.clientHeight
    };
  }
  return this._expandRectByRootMargin(rootRect);
};


/**
 * Accepts a rect and expands it by the rootMargin value.
 * @param {Object} rect The rect object to expand.
 * @return {Object} The expanded rect.
 * @private
 */
IntersectionObserver.prototype._expandRectByRootMargin = function(rect) {
  var margins = this._rootMarginValues.map(function(margin, i) {
    return margin.unit == 'px' ? margin.value :
        margin.value * (i % 2 ? rect.width : rect.height) / 100;
  });
  var newRect = {
    top: rect.top - margins[0],
    right: rect.right + margins[1],
    bottom: rect.bottom + margins[2],
    left: rect.left - margins[3]
  };
  newRect.width = newRect.right - newRect.left;
  newRect.height = newRect.bottom - newRect.top;

  return newRect;
};


/**
 * Accepts an old and new entry and returns true if at least one of the
 * threshold values has been crossed.
 * @param {?IntersectionObserverEntry} oldEntry The previous entry for a
 *    particular target element or null if no previous entry exists.
 * @param {IntersectionObserverEntry} newEntry The current entry for a
 *    particular target element.
 * @return {boolean} Returns true if a any threshold has been crossed.
 * @private
 */
IntersectionObserver.prototype._hasCrossedThreshold =
    function(oldEntry, newEntry) {

  // To make comparing easier, an entry that has a ratio of 0
  // but does not actually intersect is given a value of -1
  var oldRatio = oldEntry && oldEntry.isIntersecting ?
      oldEntry.intersectionRatio || 0 : -1;
  var newRatio = newEntry.isIntersecting ?
      newEntry.intersectionRatio || 0 : -1;

  // Ignore unchanged ratios
  if (oldRatio === newRatio) return;

  for (var i = 0; i < this.thresholds.length; i++) {
    var threshold = this.thresholds[i];

    // Return true if an entry matches a threshold or if the new ratio
    // and the old ratio are on the opposite sides of a threshold.
    if (threshold == oldRatio || threshold == newRatio ||
        threshold < oldRatio !== threshold < newRatio) {
      return true;
    }
  }
};


/**
 * Returns whether or not the root element is an element and is in the DOM.
 * @return {boolean} True if the root element is an element and is in the DOM.
 * @private
 */
IntersectionObserver.prototype._rootIsInDom = function() {
  return !this.root || containsDeep(document, this.root);
};


/**
 * Returns whether or not the target element is a child of root.
 * @param {Element} target The target element to check.
 * @return {boolean} True if the target element is a child of root.
 * @private
 */
IntersectionObserver.prototype._rootContainsTarget = function(target) {
  return containsDeep(this.root || document, target);
};


/**
 * Adds the instance to the global IntersectionObserver registry if it isn't
 * already present.
 * @private
 */
IntersectionObserver.prototype._registerInstance = function() {
};


/**
 * Removes the instance from the global IntersectionObserver registry.
 * @private
 */
IntersectionObserver.prototype._unregisterInstance = function() {
};


/**
 * Returns the result of the performance.now() method or null in browsers
 * that don't support the API.
 * @return {number} The elapsed time since the page was requested.
 */
function now() {
  return window.performance && performance.now && performance.now();
}


/**
 * Throttles a function and delays its execution, so it's only called at most
 * once within a given time period.
 * @param {Function} fn The function to throttle.
 * @param {number} timeout The amount of time that must pass before the
 *     function can be called again.
 * @return {Function} The throttled function.
 */
function throttle(fn, timeout) {
  var timer = null;
  return function () {
    if (!timer) {
      timer = setTimeout(function() {
        fn();
        timer = null;
      }, timeout);
    }
  };
}


/**
 * Adds an event handler to a DOM node ensuring cross-browser compatibility.
 * @param {Node} node The DOM node to add the event handler to.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to add.
 * @param {boolean} opt_useCapture Optionally adds the even to the capture
 *     phase. Note: this only works in modern browsers.
 */
function addEvent(node, event, fn, opt_useCapture) {
  if (typeof node.addEventListener == 'function') {
    node.addEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.attachEvent == 'function') {
    node.attachEvent('on' + event, fn);
  }
}


/**
 * Removes a previously added event handler from a DOM node.
 * @param {Node} node The DOM node to remove the event handler from.
 * @param {string} event The event name.
 * @param {Function} fn The event handler to remove.
 * @param {boolean} opt_useCapture If the event handler was added with this
 *     flag set to true, it should be set to true here in order to remove it.
 */
function removeEvent(node, event, fn, opt_useCapture) {
  if (typeof node.removeEventListener == 'function') {
    node.removeEventListener(event, fn, opt_useCapture || false);
  }
  else if (typeof node.detatchEvent == 'function') {
    node.detatchEvent('on' + event, fn);
  }
}


/**
 * Returns the intersection between two rect objects.
 * @param {Object} rect1 The first rect.
 * @param {Object} rect2 The second rect.
 * @return {?Object} The intersection rect or undefined if no intersection
 *     is found.
 */
function computeRectIntersection(rect1, rect2) {
  var top = Math.max(rect1.top, rect2.top);
  var bottom = Math.min(rect1.bottom, rect2.bottom);
  var left = Math.max(rect1.left, rect2.left);
  var right = Math.min(rect1.right, rect2.right);
  var width = right - left;
  var height = bottom - top;

  return (width >= 0 && height >= 0) && {
    top: top,
    bottom: bottom,
    left: left,
    right: right,
    width: width,
    height: height
  };
}


/**
 * Shims the native getBoundingClientRect for compatibility with older IE.
 * @param {Element} el The element whose bounding rect to get.
 * @return {Object} The (possibly shimmed) rect of the element.
 */
function getBoundingClientRect(el) {
  var rect;

  try {
    rect = el.getBoundingClientRect();
  } catch (err) {
    // Ignore Windows 7 IE11 "Unspecified error"
    // https://github.com/w3c/IntersectionObserver/pull/205
  }

  if (!rect) return getEmptyRect();

  // Older IE
  if (!(rect.width && rect.height)) {
    rect = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
      width: rect.right - rect.left,
      height: rect.bottom - rect.top
    };
  }
  return rect;
}


/**
 * Returns an empty rect object. An empty rect is returned when an element
 * is not in the DOM.
 * @return {Object} The empty rect.
 */
function getEmptyRect() {
  return {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: 0,
    height: 0
  };
}

/**
 * Checks to see if a parent element contains a child element (including inside
 * shadow DOM).
 * @param {Node} parent The parent element.
 * @param {Node} child The child element.
 * @return {boolean} True if the parent node contains the child node.
 */
function containsDeep(parent, child) {
  var node = child;
  while (node) {
    if (node == parent) return true;

    node = getParentNode(node);
  }
  return false;
}


/**
 * Gets the parent node of an element or its host element if the parent node
 * is a shadow root.
 * @param {Node} node The node whose parent to get.
 * @return {Node|null} The parent node or null if no parent exists.
 */
function getParentNode(node) {
  var parent = node.parentNode;

  if (parent && parent.nodeType == 11 && parent.host) {
    // If the parent is a shadow root, return the host element.
    return parent.host;
  }
  return parent;
}


// Exposes the constructors globally.
window.IntersectionObserver = IntersectionObserver;
window.IntersectionObserverEntry = IntersectionObserverEntry;

}(window, document));

var InfiniteScrolling = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"infinite-scrolling",style:({height: _vm.heightUnit, background: _vm.background})},[(_vm.activity)?_c('activity-indicator',{attrs:{"size":_vm.size,"type":_vm.type,"center":""}}):_vm._e()],1)},staticRenderFns: [],

    name: 'infinite-scrolling',

    components: {
        ActivityIndicator
    },

    props: {

        /**
         * Is the activity indicator showing
         *
         * @property String
         */
        activity: Boolean,

        /**
         * The activity indicator background style
         *
         * @property String
         */
        background: String,

        /**
         * The activity indicator size
         *
         * @property String
         */
        height: {
            type: Number,
            default: 100
        },

        /**
         * The activity indicator size
         *
         * @property String
         */
        size: String,

        /**
         * The activity indicator type
         *
         * @property String
         */
        type: String,

        /**
         * The scroll observer threshold for when an element is considered
         * into view. Must be a validate between 0 and 1, and is a percentage.
         *
         * @property Number
         */
        threshold: {
            type: Number,
            default: .75,
            validate(value) {
                return value >= 0 && value <= 1;
            }
        }

    },

    methods: {

        scrollIntoViewport(entry) {
            this.$emit('scroll:in', entry);

            if(!this.activity) {
                this.$emit('load', entry);
            }
        },

        scrollOutViewport(entry) {
            this.$emit('scroll:out', entry);
        }

    },

    computed: {

        heightUnit() {
            return unit(this.height);
        }

    },

    mounted() {
        this.$nextTick(() => {
            new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting && !this.hasScrolledIntoViewport) {
                        this.scrollIntoViewport(entry, observer);
                        this.hasScrolledIntoViewport = true;
                    }
                    else if(this.hasScrolledIntoViewport) {
                        this.scrollOutViewport(entry, observer);
                        this.hasScrolledIntoViewport = false;
                    }
                });
            }, {
                threshold: this.threshold
            }).observe(this.$el);
        });
    },

    data() {
        return {
            hasScrolledIntoViewport: false
        }
    }

};

var InputGroupText = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"input-group-text",attrs:{"id":_vm.id}},[_vm._t("default",[_vm._v(_vm._s(_vm.text))])],2)},staticRenderFns: [],

    name: 'input-group-text',

    props: {

        /**
         * The id attribute
         *
         * @property String
         */
        id: String,

        /**
         * The type attribute
         *
         * @property String
         */
        text: [Array, Number, String]

    }

};

var InputGroupAppend = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input-group-append"},[(_vm.text)?_c('input-group-text',[_vm._t("default")],2):_vm._t("default")],2)},staticRenderFns: [],

    name: 'input-group-append',

    props: {

        /**
         * The type attribute
         *
         * @property String
         */
        text: Boolean

    }

};

var InputGroupPrepend = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input-group-prepend"},[(_vm.text)?_c('input-group-text',[_vm._t("default")],2):_vm._t("default")],2)},staticRenderFns: [],

    name: 'input-group-prepend',

    props: {

        /**
         * The type attribute
         *
         * @property String
         */
        text: Boolean

    }

};

var InputGroup = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"input-group",class:_vm.mergeClasses(_vm.colorableClasses, _vm.sizeableClass)},[_vm._t("prepend",[(_vm.prepend instanceof Array)?[_c('input-group-prepend',_vm._l((_vm.prepend),function(value){return _c('input-group-text',{attrs:{"text":value}})}))]:(_vm.prepend)?[_c('input-group-prepend',{attrs:{"text":""}},[_vm._v(_vm._s(_vm.prepend))])]:_vm._e()]),_vm._v(" "),_vm._t("default"),_vm._v(" "),_vm._t("append",[(_vm.append instanceof Array)?[_c('input-group-append',_vm._l((_vm.append),function(value){return _c('input-group-text',{attrs:{"text":value}})}))]:(_vm.append)?[_c('input-group-append',{attrs:{"text":""}},[_vm._v(_vm._s(_vm.append))])]:_vm._e()])],2)},staticRenderFns: [],

    name: 'input-group',

    components: {
        InputGroupText,
        InputGroupAppend,
        InputGroupPrepend
    },

    mixins: [
        HasSlots,
        Sizeable,
        Colorable,
        MergeClasses
    ],

    props: {

        append: [Array, Number, String],

        prepend: [Array, Number, String]

    }

};

var plugin$t = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      InputGroup: InputGroup,
      InputGroupAppend: InputGroupAppend,
      InputGroupPrepend: InputGroupPrepend,
      InputGroupText: InputGroupText
    });
  }
});

var LightSwitchField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',[_vm._t("label",[(_vm.label)?_c('form-label',{attrs:{"for":_vm.id},domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()]),_vm._v(" "),_c('div',{class:_vm.controlClasses,attrs:{"tabindex":"0"},on:{"click":function($event){_vm.toggle();},"keyup":[function($event){if(!('button' in $event)&&$event.keyCode!==32){ return null; }_vm.toggle();},function($event){if(!('button' in $event)&&$event.keyCode!==37){ return null; }_vm.toggle(_vm.offValue);},function($event){if(!('button' in $event)&&$event.keyCode!==39){ return null; }_vm.toggle(_vm.onValue);}]}},[_c('div',{staticClass:"light-switch-handle"}),_vm._v(" "),_c('div',{staticClass:"light-switch-container"},[_c('div',{staticClass:"light-switch-label on-value"}),_vm._v(" "),_c('div',{staticClass:"light-switch-label off-value"})])]),_vm._v(" "),_c('form-control',{staticClass:"d-none",attrs:{"name":_vm.name,"value":_vm.value,"id":_vm.id}}),_vm._v(" "),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),_vm._v(" "),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()]),_vm._v(" "),_vm._t("help",[(_vm.helpText)?_c('help-text',{domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()])],2)},staticRenderFns: [],

    name: 'light-switch-field',

    components: {
        HelpText,
        FormGroup,
        FormLabel,
        FormControl: FormControl$1,
        FormFeedback
    },

    mixins: [
        FormControl
    ],

    props: {

        /**
         * The class name assigned to the control element
         *
         * @property String
         */
        defaultControlClass: {
            type: String,
            default: 'form-control light-switch'
        },

        /**
         * The class name assigned to the control element
         *
         * @property String
         */
        activeClass: {
            type: String,
            default: 'on'
        },

        /**
         * The class name assigned to the control element
         *
         * @property String
         */
        onValue: {
            default: 1
        },

        /**
         * The class name assigned to the control element
         *
         * @property String
         */
        offValue: {
            default: 0
        }

    },

    computed: {

        isActive: function() {
            return this.value === this.onValue;
        },

        controlClasses() {
            return [
                this.controlClass,
                this.controlSizeClass,
                (this.spacing || ''),
                (this.invalidFeedback ? 'is-invalid' : ''),
                (this.dragging ? 'is-dragging' : ''),
                (this.isActive ? 'is-active' : '')
            ].join(' ');
        }

    },

    methods: {

        getTransitionInMilliseconds() {
            const duration = getComputedStyle(this.$el.querySelector('.light-switch-handle')).transitionDuration;
            const numeric = parseFloat(duration, 10);
            const unit = duration.match(/m?s/);

            switch (unit[0]) {
                case 's':
                    return numeric * 1000;
                case 'ms':
                    return numeric;

            }

            throw new Error(`"${unit[0]}" is not a valid unit of measure. Unit must be "s" (seconds) or "ms" (milliseconds).`);
        },

        toggle(value) {
            this.$emit('input', !isUndefined(value) ? value : (this.isActive ? this.offValue : this.onValue));
        }

    },

    watch: {
        value() {
            this.dragging = true;

            setTimeout(() => {
                this.dragging = false;
            }, this.getTransitionInMilliseconds());
        }
    },

    data() {
        return {
            dragging: false
        };
    }

};

var plugin$u = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      LightSwitchField: LightSwitchField
    });
  }
});

var ListGroupItem = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.to)?_c('router-link',{class:_vm.classes,attrs:{"to":_vm.to},on:{"click":function($event){_vm.$emit('click', $event);}}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),(_vm.badge)?_c('badge',_vm._b({},'badge',_vm.badgeOptions,false)):_vm._e()],2):(_vm.action)?_c('button',{class:_vm.classes,attrs:{"type":"button"},on:{"click":function($event){$event.preventDefault();_vm.$emit('click', $event);}}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),(_vm.badge)?_c('badge',_vm._b({},'badge',_vm.badgeOptions,false)):_vm._e()],2):_c('div',{class:_vm.classes,on:{"click":function($event){_vm.$emit('click', $event);}}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),(_vm.badge)?_c('badge',_vm._b({},'badge',_vm.badgeOptions,false)):_vm._e()],2)},staticRenderFns: [],

    components: {
        Badge
    },

    props: {

        /**
         * The badge label (if number or string) or object of options to pass to
         * the component.
         *
         * @property String|Object
         */
        badge: [Number, String, Object],

        /**
         * The list group item href attribute.
         *
         * @property String
         */
        href: String,

        /**
         * The list group item variant.
         *
         * @property String
         */
        variant: String,

        /**
         * Optionally pass the item as a object to use programmatically later.
         *
         * @property String
         */
        item: Object,

        /**
         * The list group item an action, or clickable item.
         *
         * @property Boolean
         */
        action: {
            type: Boolean,
            default: false
        },

        /**
         * The list group item active.
         *
         * @property Boolean
         */
        active: {
            type: Boolean,
            default: false
        },

        /**
         * The list group item disabled.
         *
         * @property Boolean
         */
        disabled: {
            type: Boolean,
            default: false
        },

        /**
         * The list item label.
         *
         * @property Object
         */
        label: {
            type: [Number, String],
            value: null
        },

        /**
         * The to attribute to be passed to a <router-link> component.
         *
         * @property String
         */
        to: [String, Object]

    },

    computed: {

        classes() {
            const classes = prefix({
                'action': this.action,
            }, 'list-group-item');

            classes['list-group-item'] = true;
            classes['active'] = this.active;
            classes['disabled'] = this.disabled;

            if(this.variant) {
                classes[prefix(this.variant, 'list-group-item')] = true;
            }

            return classes;
        },

        badgeOptions() {
            return isObject(this.badge) ? this.badge : {
                label: this.badge
            };
        }

    },

    watch: {

        active(value, prevValue) {
            this.$emit('toggle', value);
            this.$emit(!!value ? 'activate' : 'deactivate');
        }

    },


};

var ListGroup = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"list-group",class:_vm.classes},[_vm._t("default")],2)},staticRenderFns: [],

    components: {
        ListGroupItem
    },

    props: {

        /**
         * The list group appear flush (without some borders).
         *
         * @property Boolean
         */
        flush: {
            type: Boolean,
            default: false
        },

        /**
         * Can activate multiple list items
         *
         * @property Boolean
         */
        multiple: {
            type: Boolean,
            default: false
        }

    },

    computed: {
        classes() {
            return prefix({
                'flush': this.flush
            }, 'list-group');
        }
    },

    methods: {

        bindEventsToChildren() {
            each(this.$children, child => {
                child.$off('click', event => this.onClickItem(event, child));
                child.$on('click', event => this.onClickItem(event, child));
            });
        },

        /**
         * The callback function for the `click` event.
         *
         * @return void
         */
        onClick(event) {
            this.$emit('click', event);
        },

        /**
         * The callback function for the child `click` events.
         *
         * @return void
         */
        onClickItem(event, child) {
            this.$emit('item:click', event, child);
        },

    },

    mounted() {
        this.bindEventsToChildren();
    },

    updated() {
        this.bindEventsToChildren();
    }

};

var plugin$v = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      ListGroup: ListGroup
    });
  }
});

var NavbarBrand = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.component,{tag:"component",staticClass:"navbar-brand",class:{'h1': _vm.h1},attrs:{"to":_vm.to,"href":_vm.href || _vm.to ? '#' : null}},[(_vm.src)?_c('img',{staticClass:"d-inline-block align-center",attrs:{"src":_vm.src,"width":_vm.unit(_vm.width),"height":_vm.unit(_vm.height),"alt":_vm.alt}}):_vm._e(),_vm._v(" "),_vm._t("default")],2)},staticRenderFns: [],

    props: {

        /**
         * The img `alt` attribute. `src` must be define before this prop has
         * any affect.
         *
         * @property Object
         */
        alt: String,

        /**
         * The HTML wrapping tag.
         *
         * @property Object
         */
        tag: String,

        /**
         * The img `width` attribute. `src` must be define before this prop has
         * any affect.
         *
         * @property Object
         */
        width: [Number, String],

        /**
         * The img `height` attribute. `src` must be define before this prop has
         * any affect.
         *
         * @property Object
         */
        height: [Number, String],

        /**
         * The `to` attribute that is passed to the component.
         *
         * @property Object
         */
        to: [Object, String],

        /**
         * The `href` attribute that is passed to the component.
         *
         * @property Object
         */
        href: String,

        /**
         * Append the `h1` class to increase the display size
         *
         * @property Object
         */
        h1: Boolean,

        /**
         * If a `src` attribute is passed, then use it to add an img tag
         *
         * @property Object
         */
        src: String,

    },

    computed: {

        component() {
            return this.tag || (this.to ? 'router-link' : (this.href ? 'a' : 'span'));
        }

    },

    methods: {
        unit(value) {
            return unit(value);
        }
    }

};

var NavbarCollapse = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navbar-collapse",class:{'collapse': _vm.collapse},attrs:{"id":"navbarCollapse"}},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'navbar-collapse',

    props: {

        collapse: {
            type: Boolean,
            default: true
        }

    }

};

var NavbarText = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"navbar-text"},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'navbar-text'

};

var NavbarTogglerIcon = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"navbar-toggler-icon"},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'navbar-toggler-icon'

};

var NavbarToggler = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"navbar-toggler",attrs:{"type":"button","data-toggle":"collapse","data-target":_vm.target,"aria-controls":_vm.target,"aria-expanded":_vm.expanded,"aria-label":_vm.label},on:{"click":_vm.onClick}},[_vm._t("default",[_c('navbar-toggler-icon')])],2)},staticRenderFns: [],

    name: 'navbar-toggler',

    components: {
        NavbarTogglerIcon
    },

    props: {

        expanded: Boolean,

        label: {
            type: String,
            default: 'Toggle navigation'
        },

        target: {
            type: String,
            default: '.navbar-collapse'
        }

    },

    methods: {

        onClick(event) {
            this.$emit('click', event);
        }

    }

};

var Navbar = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{class:_vm.classes},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'navbar',

    components: {
        NavbarBrand,
        NavbarCollapse,
        NavbarText,
        NavbarToggler,
        NavbarTogglerIcon
    },

    mixins: [
        Variant,
        Colorable,
        MergeClasses
    ],

    props: {

        /**
         * Expand the navbar. If true, applies to all size, otherwise pass a string.
         *
         * @property Object
         */
        expand: {
            type: [Boolean, String],
            default: 'lg',
            validate(value) {
            }
        },

        /**
         * The should the navbar be fixed at the top.
         *
         * @property String
         */
        fixed: {
            type: [String, Boolean],
            validate(value) {
            }
        },

        /**
         * The should the navbar be stickied at the top.
         *
         * @property String
         */
        sticky: {
            type: [String, Boolean],
            validate(value) {
            }
        },

        /**
         * The variant attribute
         *
         * @property String
         */
        variant: {
            type: String,
            default: 'light',
            validate(value) {
                return ['light', 'dark'].indexOf(value) !== -1;
            }
        }

    },

    computed: {

        expandedClass() {
            if(isBoolean(this.expand)) {
                return this.expand;
            }

            return prefix(prefix(this.expand, 'expand'), 'navbar');
        },

        classes() {
            return this.mergeClasses(
                'navbar',
                prefix(this.sticky === true ? 'top' : this.sticky, 'sticky'),
                prefix(this.fixed === true ? 'top' : this.fixed, 'fixed'),
                this.expandedClass,
                this.variantClass,
                this.colorableClasses
            );
        }
    },

    data() {
        return {}
    }

};

var NavigationError = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"navigation-error fa-stack fa-md",attrs:{"title":_vm.error}},[_c('i',{staticClass:"fa fa-stack-2x fa-certificate"}),_vm._v(" "),_c('i',{staticClass:"fa fa-stack-1x fa-exclamation fa-inverse"})])},staticRenderFns: [],

    name: 'navigation-error',

    props: {

        error: {
            type: String,
            required: true
        }

    }

};

var NavigationLink = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.component,{tag:"component",class:_vm.classes,attrs:{"href":_vm.href || (_vm.to ? '#' : null),"to":_vm.to},on:{"click":function($event){_vm.$emit('click', $event);}}},[_vm._t("default"),_vm._v(" "),(_vm.error)?_c('navigation-error',{attrs:{"error":_vm.error}}):_vm._e()],2)},staticRenderFns: [],

    name: 'navigation-link',

    components: {
        NavigationError
    },

    props: {

        /**
         * Is the navigation item active
         *
         * @prop {Boolean}
         */
        active: Boolean,

        /**
         * Is the navigation item disabled
         *
         * @prop {Boolean}
         */
        disabled: Boolean,

        /**
         * The error string.
         *
         * @prop {String}
         */
        error: String,

        /**
         * The href attribute
         *
         * @prop {String}
         */
        href: String,

        /**
         * The component HTML tag
         *
         * @prop {String}
         */
        tag: String,

        /**
         * The to attribute, will be passed to router-link.
         *
         * @prop {String}
         */
        to: [Object, String],

        /**
         * Add the nav-item class to the link
         *
         * @prop {Boolean}
         */
        item: {
            type: Boolean,
            default: true
        }

    },

    computed: {

        component() {
            return this.tag || (this.to ? 'router-link' : 'a');
        },

        classes() {
            this.$nextTick(() => {
                if(!this.isItem) {
                    this.isItem = !this.$parent.$el.classList.contains('nav-item');
                }
            });

            return {
                'nav-link': !!this.href || !!this.to,
                'nav-item': !!this.item,
                'active': this.active,
                'disabled': this.disabled
            }
        }

    }

};

var NavigationItem = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.component,{tag:"component",class:_vm.classes,on:{"click":function($event){_vm.$emit('click', $event);}}},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'navigation-item',

    extends: NavigationLink,

    props: {

        /**
         * The HTML element
         *
         * @prop {String}
         */
        element: String,

        /**
         * Is the component a list element
         *
         * @prop {Boolean}
         */
        list: Boolean,

        /**
         * Add the nav-item class to the link
         *
         * @prop {Boolean}
         */
        item: {
            type: Boolean,
            default: true
        }

    },


    computed: {

        component() {
            if(this.element) {
                return this.element;
            }
            else if(this.href) {
                return 'a';
            }
            else if(this.list) {
                return 'li';
            }

            return 'div';
        }

    }

};

var Navigation = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"nav",class:_vm.classes,attrs:{"role":_vm.role}},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'navigation',

    components: {
        NavigationItem
    },

    mixins: [
        Colorable,
        MergeClasses
    ],

    props: {

        /**
         * Helper to add the justify-content-X class.
         *
         * @prop {Array}
         */
        align: String,

        /**
         * An array of buttons
         *
         * @prop {Array}
         */
        buttons: Array,

        /**
         * The navigation inside a card
         *
         * @prop {Boolean}
         */
        card: Boolean,

        /**
         * Justify nav items to fill the width equally (using flex).
         *
         * @prop {Array}
         */
        fill: Boolean,

        /**
         * Add `nav-justified` class to the component.
         *
         * @prop {Array}
         */
        justified: Boolean,

        /**
         * Display items as pill shapes
         *
         * @prop {Array}
         */
        pills: Boolean,

        /**
         * Display items as tab shapes
         *
         * @prop {Array}
         */
        tabs: Boolean,

        /**
         * Display the buttons vertically
         *
         * @prop {Boolean}
         */
        vertical: Boolean,

        /**
         * The role attribute
         *
         * @prop {String}
         */
        role: String

    },

    computed: {

        classes() {
            this.$nextTick(() => {
                if(!this.isCard) {
                    this.isCard = this.$parent.$el.classList.contains('card-header');
                }
            });

            return this.mergeClasses(
                prefix(this.align, 'justify-content'),
                this.colorableClasses, {
                    'card-header-tabs': this.isCard && this.tabs,
                    'card-header-pills': this.isCard && this.pills,
                    'nav-justified': this.justified,
                    'nav-fill': this.fill,
                    'nav-pills': this.pills,
                    'nav-tabs': this.tabs,
                    'flex-column': this.vertical
                }
            );
        }

    },

    data() {
        return {
            isCard: this.card
        };
    }

};

var NavigationDropdown = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('navigation-item',{staticClass:"dropdown"},[_vm._t("toggle-button",[_c('navigation-link',{staticClass:"dropdown-toggle",attrs:{"href":"#","data-toggle":"dropdown","role":"button","aria-haspopup":"true","aria-expanded":_vm.isDropdownShowing},on:{"blur":_vm.onBlur},nativeOn:{"click":function($event){$event.preventDefault();_vm.toggle();}}},[_vm._v(" "+_vm._s(_vm.label)+" ")])]),_vm._v(" "),_vm._t("dropdown-menu",[_c('dropdown-menu',{attrs:{"id":_vm.id,"items":_vm.items,"align":_vm.align,"show":_vm.isDropdownShowing},on:{"update:show":function($event){_vm.isDropdownShowing=$event;},"item:click":_vm.onItemClick}},[_vm._t("default")],2)])],2)},staticRenderFns: [],

    name: 'navigation-dropdown',

    extends: BtnDropdown,

    components: {
        BtnDropdown,
        DropdownMenu,
        NavigationItem,
        NavigationLink
    }

};

var plugin$w = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Navigation: Navigation,
      NavigationError: NavigationError,
      NavigationItem: NavigationItem,
      NavigationLink: NavigationLink,
      NavigationDropdown: NavigationDropdown
    });
  }
});

var NavbarNav = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"navbar-nav",class:_vm.classes,attrs:{"role":_vm.role}},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'navbar-nav',

    components: {
        Navigation
    }

};

var plugin$x = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Navbar: Navbar,
      NavbarBrand: NavbarBrand,
      NavbarCollapse: NavbarCollapse,
      NavbarNav: NavbarNav,
      NavbarText: NavbarText,
      NavbarToggler: NavbarToggler,
      NavbarTogglerIcon: NavbarTogglerIcon
    });
  }
});

var Pagination = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{attrs:{"aria-label":"Page navigation example"}},[_c('ul',{staticClass:"pagination",class:_vm.classes},[_c('li',{staticClass:"page-item",class:{'disabled': _vm.currentPage === 1}},[_c('a',{staticClass:"page-link",attrs:{"href":"#","aria-label":"Previous"},on:{"click":function($event){$event.preventDefault();_vm.prev($event);}}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("«")])])]),_vm._v(" "),_vm._l((_vm.pages),function(item){return _c('li',{staticClass:"page-item",class:{'active': item.page === _vm.currentPage, 'disabled': !!item.divider},attrs:{"data-page":item.page}},[_vm._t("default",[(item.divider)?_c('a',{staticClass:"page-link"},[_vm._v("…")]):_c('a',{staticClass:"page-link",class:item.class,attrs:{"href":"#","data-label":item.label},on:{"click":function($event){$event.preventDefault();_vm.paginate(item.page, $event);}}},[(item.label)?_c('span',{attrs:{"aria-hidden":"true"},domProps:{"innerHTML":_vm._s(item.label)}}):_vm._e(),_vm._v(" "),(item.page)?_c('span',{attrs:{"aria-hidden":"true"},domProps:{"innerHTML":_vm._s(item.page)}}):_vm._e()])],{item:item})],2)}),_vm._v(" "),_c('li',{staticClass:"page-item",class:{'disabled': _vm.currentPage >= _vm.totalPages}},[_c('a',{staticClass:"page-link",attrs:{"href":"#","aria-label":"Next"},on:{"click":function($event){$event.preventDefault();_vm.next($event);}}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("»")])])])],2)])},staticRenderFns: [],

    name: 'pagination',

    props: {
        /**
         * The alignment of the pagination component.
         *
         * @prop String
         */
        align: {
            type: String,
            validate: value => {
                return ['start', 'end', 'center'].indexOf(value) !== -1;
            }
        },

        /**
         * The page on which the paginator should start.
         *
         * @prop String
         */
        page: {
            type: Number,
            default: 1
        },

        /**
         * The total number of pages in the paginator.
         *
         * @prop String
         */
        totalPages: {
            type: Number,
            default: 1
        },

        /**
         * The number of pages to show when the total number of pages is
         * greater than the number of pages that should be shown.
         *
         * @prop String
         */
        showPages: {
            type: Number,
            default: 6
        }
        
    },

    methods: {

        next(event) {
            this.paginate(this.currentPage >= this.totalPages ? this.currentPage : this.currentPage + 1, event);
        },

        prev(event) {
            this.paginate(this.currentPage <= 1 ? this.currentPage : this.currentPage - 1, event);
        },

        paginate(page, event) {
            if(event.currentTarget.parentNode.classList.contains('disabled')) {
                return;
            }

			this.setActivePage(page);

            this.$emit('paginate', page, event);
        },

		setActivePage(page) {
			if(this.currentPage !== page) {
				this.currentPage = page;
			}
		},

        generate() {
            const pages = [];
            const showPages = this.showPages % 2 ? this.showPages + 1: this.showPages;

            let startPage = (this.currentPage >= showPages) ? this.currentPage - (showPages / 2) : 1;
            const startOffset = showPages + startPage;
            const endPage = (this.totalPages < startOffset) ? this.totalPages : startOffset;
            const diff = startPage - endPage + showPages;

            startPage -= (startPage - diff > 0) ? diff : 0;

            if (startPage > 1) {
                pages.push({page: 1});
            }

            if(startPage > 2) {
                pages.push({divider: true});
            }

            for(let i = startPage; i < endPage; i++) {
                pages.push({page: i});
            }

            if (endPage <= this.totalPages) {
                if(this.totalPages - 1 > endPage) {
                    pages.push({divider: true});
                }

                pages.push({page: this.totalPages});
            }

            return pages;
        }

    },

    computed: {

        pages() {
            return this.generate();
        },

        classes() {
            const classes = {};

            classes['justify-content-' + this.align] = true;

            return classes;
        }

    },

    data() {
        return  {
            currentPage: this.page
        };
    }

};

var plugin$y = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Pagination: Pagination
    });
  }
});

const CUSTOM_SELECT_PREFIX = 'custom-select-';

var SelectField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',[_vm._t("label",[(_vm.label)?_c('form-label',{attrs:{"for":_vm.id},domProps:{"innerHTML":_vm._s(_vm.label)}}):_vm._e()]),_vm._v(" "),_vm._t("control",[_c('select',{class:_vm.mergeClasses(_vm.controlClasses, _vm.colorableClasses),attrs:{"id":_vm.id,"name":_vm.name,"required":_vm.required,"disabled":_vm.disabled || _vm.readonly,"readonly":_vm.readonly,"pattern":_vm.pattern},domProps:{"value":_vm.value},on:{"input":function($event){_vm.$emit('input', $event.target.value);}}},[_vm._t("default")],2)]),_vm._v(" "),_vm._t("help",[(_vm.helpText)?_c('help-text',{domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()]),_vm._v(" "),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),_vm._v(" "),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2)},staticRenderFns: [],

    name: 'select-field',

    components: {
        HelpText,
        FormGroup,
        FormLabel,
        FormFeedback
    },

    extends: FormControl,

    mixins: [
        Colorable,
        FormControl,
        MergeClasses
    ],

    props: {

        /**
         * Add `custom-select` to the form control if true.
         *
         * @property String
         */
        custom: Boolean

    },

    computed: {

        controlClass() {
            const controlClass = this.custom ? 'custom-select' : this.defaultControlClass;
            return this.plaintext ? `${controlClass}-plaintext` : controlClass;
        },

        customSelectClasses() {
            return [
                CUSTOM_SELECT_PREFIX.replace(/\-$/, '') + (this.plaintext ? '-plaintext' : ''),
                this.customSelectSizeClass,
                (this.spacing || '')
            ].join(' ');
        }
    }

};

var plugin$z = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      SelectField: SelectField
    });
  }
});

var Slides = {

    name: 'slides',

    props: {

        /**
         * The active slide index or key.
         *
         * @type {String|Number}
         */

        active: {
            type: [String, Number],
            default: 0
        }

    },

    watch: {

        active(value, oldValue) {
            this.lastSlide = oldValue;
            this.currentSlide = value;
        }

    },

    methods: {

        /**
         * Get the HTML nodes from the default slots (exluding children without tags).
         *
         * @return {Array}
         */
        slides() {
            return this.$slots.default
                .filter((vnode, i) => {
                    return !!vnode.tag;
                })
                .map((vnode, i) => {
                    if(!vnode.key || !vnode.data && !vnode.data.key) {
                        vnode.data = extend(vnode.data, {
                            key: vnode.key = i
                        });
                    }

                    return vnode;
                });
        },

        /**
         * Get a slide by index.
         *
         * @return {Array}
         */
        slide(index) {
            return this.findSlideByKey(index) || this.findSlideByIndex(index) || this.findSlideByIndex(0);
        },

        /**
         * Find a slide by a given key or return null if non found.
         *
         * @param  {Number|String} key
         * @return {VNode|null}
         */
        findSlideByKey(key) {
            return first(this.slides().filter((vnode, i) => {
                if(vnode.key === key) {
                    return vnode;
                }
                else if(vnode.data && vnode.data.key === key) {
                    return vnode;
                }

                return null;
            }))
        },

        /**
         * Find a slide by a given index or return null if non found.
         *
         * @param  {Number|String} key
         * @return {VNode|null}
         */
        findSlideByIndex(index) {
            return this.slides()[index] || null;
        },

        /**
         * Get the slide index for a give slide object or key
         *
         * @param  {Number|String} slide
         * @return {VNode|null}
         */
        getSlideIndex(slide) {
            const key = !isUndefined(slide.data) ? slide.data.key : slide.key || slide;

            return findIndex(this.slides(), (vnode, i) => {
                if(slide === vnode) {
                    return true;
                }
                else if(vnode.data && vnode.data.key === key) {
                    return true;
                }
                else if(vnode.key && vnode.key === key) {
                    return true;
                }
                else if(i === slide) {
                    return true;
                }

                return false;
            });
        }

    },

    data() {
        return {
            lastSlide: null,
            currentSlide: this.active
        }
    },

    render(h) {
        return this.slide(this.currentSlide);
    }

};

var SlideDeckControls = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slide-deck-controls"},_vm._l((_vm.slides),function(slide){return _c('a',{staticClass:"slide-deck-control-icon",class:{'is-active': (slide.data ? slide.data.key : slide.key) === _vm.active},attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();_vm.onClick($event, slide);}}},[_c('i',{staticClass:"fa fa-circle"})])}))},staticRenderFns: [],

    name: 'slide-deck-controls',

    props: {

        /**
         * The slide key or index that should show.
         *
         * @type {Number}
         */
        active: {
            type: [String, Number],
            default: 0
        },

        /**
         * An array of slide vnodes
         *
         * @type {Number}
         */
        slides: {
            type: Array,
            required: true
        }

    },

    methods: {

        onClick(event, slide) {
            this.$emit('click', event, slide);
        }

    },

    computed: {

    },

    data() {
        return {}
    }

};

var SlideDeck = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slide-deck",class:{'slide-deck-flex': _vm.center}},[_c('div',{ref:"content",staticClass:"slide-deck-content",style:({width: _vm.width, height: _vm.height})},[_c('keep-alive',[_c('transition',{attrs:{"name":`slide-${_vm.direction}`},on:{"after-enter":_vm.onSlideAfterEnter,"before-enter":_vm.onSlideBeforeEnter,"enter":_vm.onSlideEnter,"after-leave":_vm.onSlideAfterLeave,"before-leave":_vm.onSlideBeforeLeave,"leave":_vm.onSlideLeave}},[_c('slides',{key:_vm.currentSlide,ref:"slides",attrs:{"active":_vm.currentSlide}},[_vm._t("default")],2)],1)],1)],1),_vm._v(" "),_vm._t("controls",[(_vm.controls)?_c('slide-deck-controls',{ref:"controls",attrs:{"slides":_vm.slides(),"active":_vm.currentSlide},on:{"click":_vm.onClickControl}}):_vm._e()])],2)},staticRenderFns: [],

    name: 'slide-deck',

    components: {
        Slides,
        SlideDeckControls
    },

    props: {

        /**
         * The slide key or index that should show.
         *
         * @type {Number}
         */
        active: {
            type: [String, Number],
            default: 0
        },

        /**
         * Center the slide-deck.
         *
         * @type Boolean
         */
        center: {
            type: Boolean,
            default: true
        },

        /**
         * Show the slide-deck controls to change the slide.
         *
         * @type Boolean
         */
        controls: Boolean,

        /**
         * Flex the content within the popover.
         *
         * @type Boolean
         */
        flex: {
            type: Boolean,
            default: true
        },

        /**
         * Give a selector or Element to use apply a hidden overflow. If false,
         * no overflow will be applied. Defaults to the slide deck's container.
         *
         * @type {String|Element|Boolean}
         */
        overflow: {
            type: [Object, String, Element, Boolean],
            default: true
        },

        /**
         * The mode determines how the popover content will flex based on the
         * varying heights of the slides.
         *
         * @type Boolean
         */
        resizeMode: {
            type: [Function, Boolean, String],
            default: 'auto',
            validate(value) {
                return ['auto', 'initial', 'inherit'].indexOf(value) !== 1;
            }
        }

    },

    watch: {

        active(value, oldValue) {
            this.lastSlide = oldValue;
            this.currentSlide = value;
        },

        currentSlide(value, oldValue) {
            this.direction = this.$refs.slides.getSlideIndex(oldValue) > this.$refs.slides.getSlideIndex(value) ? 'backward' : 'forward';
        }

    },

    methods: {

        resize(el) {
            if(isFunction$1(this.resizeMode)) {
                this.resizeMode.call(this, el || this.$el);
            }
            else {
                const style = getComputedStyle(el);

                if(!el.style.width) {
                    el.width = el.style.width = `calc(${style.width} + ${style.marginLeft} + ${style.marginRight})`;
                }

                if(!el.style.height) {
                    el.height = el.style.height = `calc(${style.height} + ${style.marginTop} + ${style.marginBottom})`;
                }
            }
        },

        slide(index) {
            return this.$refs.slides ? this.$refs.slides.slide(index || this.active) : null;
        },

        slides() {
            return this.$refs.slides ? this.$refs.slides.slides() : [];
        },

        onClickControl(event, vnode) {
            this.currentSlide = vnode.data ? vnode.data.key : vnode.key;
        },

        onSlideAfterEnter(el) {
            if(el.width) {
                el.width = el.style.width = null;
            }

            if(el.height) {
                el.height = el.style.height = null;
            }

            this.width = null;
            this.height = null;
            this.$emit(
                'after-enter', this.$refs.slides.slide(this.currentSlide), this.$refs.slides.slide(this.lastSlide)
            );
        },

        onSlideBeforeEnter(el) {
            this.$emit(
                'before-enter', this.$refs.slides.slide(this.currentSlide), this.$refs.slides.slide(this.lastSlide)
            );
        },

        onSlideEnter(el, done) {
            this.resize(el);
            this.width = el.style.width;
            this.height = el.style.height;

            transition(el).then(delay => {
                this.$nextTick(done);
            });

            this.$emit(
                'enter', this.$refs.slides.slide(this.currentSlide), this.$refs.slides.slide(this.lastSlide)
            );
        },

        onSlideAfterLeave(el) {
            if(el.width) {
                el.width = el.style.width = null;
            }

            if(el.height) {
                el.height = el.style.height = null;
            }

            this.$nextTick(() => {
                this.$emit(
                    'after-leave', this.$refs.slides.slide(this.lastSlide), this.$refs.slides.slide(this.currentSlide)
                );
            });
        },

        onSlideBeforeLeave(el) {
            this.resize(el);
            this.$emit(
                'before-leave', this.$refs.slides.slide(this.lastSlide), this.$refs.slides.slide(this.currentSlide)
            );
        },

        onSlideLeave(el, done) {
            transition(el).then(delay => {
                this.$nextTick(done);
            });

            this.$emit(
                'leave', this.$refs.slides.slide(this.lastSlide), this.$refs.slides.slide(this.currentSlide)
            );
        }

    },

    computed: {

        overflowElement() {
            if(this.overflow === true) {
                return this.$el;
            }
            else if(this.overflow instanceof Element) {
                return this.overflow;
            }
            else if(this.overflow && this.overflow.elm) {
                return this.overflow.elm;
            }
            else if(this.overflow) {
                return document.querySelector(this.overflow)
            }

            return null;
        },

        nodes() {
            return this.$slots.default;
        }

    },

    mounted() {
        if(this.overflowElement) {
            this.overflowElement.style.overflow = 'hidden';
        }
    },

    data() {
        return {
            height: null,
            width: null,
            lastSlide: null,
            currentSlide: this.active,
            direction: 'forward'
        }
    }

};

var plugin$A = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Slides: Slides,
      SlideDeck: SlideDeck
    });
  }
});

var TableViewHeader = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('th',{attrs:{"scope":"col"}},[(_vm.id && _vm.request)?[_c('a',{staticClass:"sort",attrs:{"href":"#","data-id":_vm.id},on:{"click":function($event){$event.preventDefault();_vm.$emit('order', _vm.id);}}},[(!_vm.$slots.default)?[_vm._v(" "+_vm._s(_vm.label || _vm.name || _vm.id)+" ")]:_vm._e(),_vm._v(" "),_vm._t("default")],2),_vm._v(" "),(_vm.request.params.order === _vm.id && _vm.request.params.sort === 'asc')?_c('i',{staticClass:"sort-icon fa fa-sort-asc"}):_vm._e(),_vm._v(" "),(_vm.request.params.order === _vm.id && _vm.request.params.sort === 'desc')?_c('i',{staticClass:"sort-icon fa fa-sort-desc"}):_vm._e()]:[(!_vm.$slots.default)?[_vm._v(" "+_vm._s(_vm.label || _vm.name || _vm.id)+" ")]:_vm._e(),_vm._v(" "),_vm._t("default")]],2)},staticRenderFns: [],

    name: 'table-view-header',

    props: {

        id: [Number, String],

        label: [Number, String],

        name: [Number, String],

        request: Object

    }

};

var DataTable = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('table',{staticClass:"table",class:{'table-hover': _vm.hover && !_vm.loading && _vm.data.length}},[_c('thead',{attrs:{"slot":"thead"},slot:"thead"},[(_vm.columns.length || _vm.$slots.columns)?_c('tr',{attrs:{"slot":"columns"},slot:"columns"},_vm._l((_vm.tableColumns),function(column,key){return _c('table-view-header',_vm._g(_vm._b({key:key,attrs:{"request":_vm.request},on:{"order":id => _vm.$emit('order', id)}},'table-view-header',column.props || column,false),column.events))})):_vm._e()]),_vm._v(" "),_c('tbody',[(_vm.loading)?_c('tr',[_c('td',{staticClass:"position-relative",style:({'height': _vm.height(_vm.minHeight)}),attrs:{"colspan":_vm.tableColumns.length}},[_c('activity-indicator',{attrs:{"center":true}})],1)]):(!_vm.data.length)?_c('tr',[_c('td',{staticClass:"position-relative",attrs:{"colspan":_vm.tableColumns.length}},[_c('alert',{staticClass:"my-3",attrs:{"variant":"warning"}},[_c('i',{staticClass:"fa fa-warning"}),_vm._v(" There are no results found. ")])],1)]):_vm._t("default",_vm._l((_vm.data),function(row,i){return _c('tr',_vm._l((_vm.tableColumns),function(column){return _c('td',{domProps:{"innerHTML":_vm._s(row[column.id] || row[column.name])}})}))}),{data:_vm.data,columns:_vm.tableColumns})],2),_vm._v(" "),_vm._t("tfoot",[(_vm.paginate && _vm.response)?_c('tfoot',[_c('td',{staticClass:"table-view-footer",attrs:{"colspan":_vm.tableColumns.length || 1}},[_vm._t("pagination",[_c('pagination',{attrs:{"align":"center","page":_vm.response.current_page,"total-pages":_vm.response.last_page},on:{"paginate":function($event){_vm.$emit('paginate');}}})])],2)]):_vm._e()])],2)},staticRenderFns: [],

    components: {
        Alert,
        Pagination,
        TableViewHeader,
        ActivityIndicator
    },

    props: {

        // (array) An array of table column
        // [{id: 'database_id', name: 'Database id', width: '20%'}]
        columns: {
            type: Array,
            default: () => { return []; }
        },

        data: {
            type: Array,
            required: true
        },

        // (string) Add table-hover to the table element
        hover: {
            type: Boolean,
            default: true
        },

        loading: Boolean,

        // (integer) The minimum height of the row when loading data
        minHeight: {
            type: Number,
            default: 400
        },

        // (bool) Should show the pagination for this table
        paginate: {
            type: Boolean,
            default: true
        }

    },

    methods: {

        height(min) {
            const elements = [
                // this.$el.querySelector('thead'),
                this.$el.querySelector('tbody')
            ];

            let height = 0;

            each(elements, el => {
                height += el.getBoundingClientRect().height;
            });

            return unit(Math.max(min, height));
        }

    },

    computed: {
        tableColumns() {
            let columns = this.columns;

            if(!columns || !columns.length) {
                columns = Object.keys(this.data[0]);
            }

            return columns.map(column => {
                return isObject(column) ? column : {
                    name: column
                };
            });
        }
    }

};

var Transformer =
/*#__PURE__*/
function () {
  /**
   * Initialize the transformer instance using an HTTP response object.
   *
   * @param data object
   * @return void
   */
  function Transformer(response) {
    _classCallCheck(this, Transformer);

    if (!isObject(this.$originalResponse = response)) {
      throw new Error('The transformer must be instantiated with a response object.');
    }

    if (!isArray(this.$required = this.required()) || !this.$required.length) {
      throw new Error('A transformer must have at least one required property.');
    }

    this.$transformedResponse = this.transform(response);
    this.validate();
    this.initialize();
  }
  /**
   * A method to override to perform logic to finished initializing.
   *
   * @return void
   */


  _createClass(Transformer, [{
    key: "initialize",
    value: function initialize() {} //

    /**
     * Define an array of required properties with at least one value.
     *
     * @return void
     */

  }, {
    key: "required",
    value: function required() {} //

    /**
     * Tranform the response object
     *
     * @property String
     */

  }, {
    key: "transform",
    value: function transform(response) {
      return response;
    }
    /**
     * Get the tranformed response
     *
     * @property String
     */

  }, {
    key: "response",
    value: function response() {
      return this.$transformedResponse;
    }
    /**
     * Validate the tranformed response.
     *
     * @return void
     */

  }, {
    key: "validate",
    value: function validate() {
      var _this = this;

      if (!isObject(this.$transformedResponse)) {
        throw new Error('The transformed response must be an object.');
      }

      each(this.$required, function (key) {
        if (!(key in _this.$transformedResponse)) {
          throw new Error("\"".concat(key, "\" is a required property and does not exist in the tranformed response."));
        }
      });
    }
  }]);

  return Transformer;
}();

var TableViewTransformer =
/*#__PURE__*/
function (_Transformer) {
  _inherits(TableViewTransformer, _Transformer);

  function TableViewTransformer() {
    _classCallCheck(this, TableViewTransformer);

    return _possibleConstructorReturn(this, _getPrototypeOf(TableViewTransformer).apply(this, arguments));
  }

  _createClass(TableViewTransformer, [{
    key: "required",
    value: function required() {
      return [// The end of the count of the paginated list.
      'to', // The start of the count of the paginated list.
      'from', // The total number of items (not just included in the pagination)
      'total', // The number of items per page
      'per_page', // The last page number (or total pages)
      'last_page', // The current page number
      'current_page', // The actual response data to appear in the table
      'data'];
    }
  }, {
    key: "data",
    value: function data() {
      return this.$transformedResponse.data;
    }
  }, {
    key: "initialize",
    value: function initialize() {
      if (!isArray(this.data())) {
        throw new Error('The data property must be an array.');
      }
    }
  }]);

  return TableViewTransformer;
}(Transformer);

var TableView = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"table-view"},[(_vm.heading || _vm.description || _vm.$slots.buttons)?_c('div',{staticClass:"d-flex justify-content-between align-items-center"},[_vm._t("heading",[(_vm.heading)?_c('h2',{domProps:{"innerHTML":_vm._s(_vm.heading)}}):_vm._e()]),_vm._v(" "),_vm._t("description",[(_vm.description)?_c('p',{domProps:{"innerHTML":_vm._s(_vm.description)}}):_vm._e()]),_vm._v(" "),(_vm.$slots.buttons)?_c('div',{staticClass:"ml-auto my-3"},[_vm._t("buttons")],2):_vm._e()],2):_vm._e(),_vm._v(" "),(_vm.card)?_c('card',[_c('data-table',{attrs:{"columns":_vm.columns,"data":_vm.data,"hover":_vm.hover,"loading":_vm.loading,"min-height":_vm.minHeight,"paginate":_vm.paginate},on:{"paginate":_vm.onPaginate,"order":id => _vm.orderBy(id)}},[_vm._t("default",null,{data:_vm.data,columns:_vm.columns})],2)],1):_c('data-table',{attrs:{"columns":_vm.columns,"data":_vm.data,"hover":_vm.hover,"loading":_vm.loading,"min-height":_vm.minHeight,"paginate":_vm.paginate},on:{"paginate":_vm.onPaginate,"order":id => _vm.orderBy(id)}},[_vm._t("default",null,{data:_vm.data,columns:_vm.columns})],2)],1)},staticRenderFns: [],
    name: 'table-view',

    mixins: [Proxy$1],

    components: {
        Card,
        DataTable,
        TableViewHeader
    },

    props: {

        // (boolean) Show the table in a card.
        card: Boolean,

        // (string) A relative or absolute endpoint URL used to fetch data
        url: {
            type: String,
            required: true
        },

        // (integer) The starting page of the table
        page: {
            type: Number,
            default: 1
        },

        // (integer) The total number of results per page
        limit: {
            type: Number,
            default: 20
        },

        // (string) The column used to order the data
        order: String,

        // (string) The sort direction (asc|desc)
        sort: {
            type: String,
            validate: (value) => {
                return ['asc', 'desc'].indexOf(value) !== -1;
            }
        },

        // (integer) The minimum height of the row when loading data
        minHeight: {
            type: Number,
            default: 400
        },

        // (array) An array of button objects
        // [{href: 'test-123', label: 'Test 123'}]
        buttons: {
            type: Array,
            default: () => { return []; }
        },

        // (array) An array of table column
        // [{id: 'database_id', name: 'Database id', width: '20%'}]
        columns: {
            type: Array,
            default: () => { return []; }
        },

        // (string) The table heading
        heading: String,

        // (string) Add table-hover to the table element
        hover: {
            type: Boolean,
            default: true
        },

        // (string) The table description
        description: String,

        // (bool) Should show the pagination for this table
        paginate: {
            type: Boolean,
            default: true
        },

        // (object) The HTTP response transformer instance
        transformer: {
            type: Object,
            validate: (value) => {
                return value instanceof TableViewTransformer;
            }
        }
    },

    methods: {

        orderBy(order) {
            const defaultSort = 'desc';
            const currentSort = this.getRequestParam('sort');
            const currentOrder = this.getRequestParam('order');

            this.addRequestParam('order', order);
            this.addRequestParam('sort',
                currentOrder !== order || !currentSort ? defaultSort : (
                    currentSort === defaultSort ? 'asc' : null
                )
            );

            this.fetch();
        },

        getRequestHeader(key, value) {
            return this.request.headers[key] || value
        },

        addRequestHeader(key, value) {
            if(!this.request.headers) {
                this.request.headers = {};
            }

            this.request.headers[key] = value;
        },

        getRequestParam(key, value) {
            return this.request.params[key] || value
        },

        addRequestParam(key, value) {
            if(!this.request.params) {
                this.request.params = {};
            }

            this.request.params[key] = value;
        },

        fetch() {
            const request = new Request(this.url, this.request);

            this.loading = true;

            return request.get().then(response => {
                const transformer = this.transformer || new TableViewTransformer(response);
                this.response = transformer.response();
                this.data = transformer.data();
                this.loading = false;
            }, errors => {
                this.loading = false;
            });
        },

        onPaginate(page, event) {
            if(!this.request.params) {
                this.request.params = {};
            }

            this.request.params.page = page;
            this.fetch();
        }
    },

    data() {
        return {
            // (array) The dataset for the table
            data: this.$attrs.data || [],

            // (bool) Is the table currently loading data
            loading: false,

            // (null|object) The response object
            response: null,

            // (object) The HTTP request object
            request: extend({
                headers: {},
                params: {
                    page: this.page,
                    limit: this.limit,
                    order: this.order,
                    sort: this.sort
                }
            }, this.$attrs.request)
        };
    },

    mounted() {
        this.fetch();
    },

    beforeDestroy() {
        this.$off();
    }
};

var plugin$B = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      TableView: TableView
    });
  }
});

var TextareaField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',[_vm._t("label",[(_vm.label || _vm.hasDefaultSlot)?_c('form-label',{attrs:{"for":_vm.id}},[_vm._t("default",[_vm._v(_vm._s(_vm.label))])],2):_vm._e()]),_vm._v(" "),_vm._t("control",[_c('div',{staticClass:"position-relative"},[_c('textarea',{directives:[{name:"bind-events",rawName:"v-bind-events",value:(_vm.bindEvents),expression:"bindEvents"}],class:_vm.mergeClasses(_vm.controlClasses, _vm.colorableClasses),attrs:{"id":_vm.id,"rows":_vm.rows,"errors":_vm.errors,"pattern":_vm.pattern,"readonly":_vm.readonly,"required":_vm.required,"maxlength":_vm.maxlength,"placeholder":_vm.placeholder,"disabled":_vm.disabled || _vm.readonly},domProps:{"value":_vm.value},on:{"input":function($event){_vm.$emit('input', $event.target.value);}}}),_vm._v(" "),_vm._t("feedback",[(_vm.validFeedback)?_c('form-feedback',{attrs:{"valid":""},domProps:{"innerHTML":_vm._s(_vm.validFeedback)}}):_vm._e(),_vm._v(" "),(_vm.invalidFeedback)?_c('form-feedback',{attrs:{"invalid":""},domProps:{"innerHTML":_vm._s(_vm.invalidFeedback)}}):_vm._e()])],2)]),_vm._v(" "),_vm._t("help",[(_vm.helpText)?_c('help-text',{domProps:{"innerHTML":_vm._s(_vm.helpText)}}):_vm._e()])],2)},staticRenderFns: [],

    name: 'textarea-field',

    components: {
        HelpText,
        FormGroup,
        FormLabel,
        FormFeedback
    },

    mixins: [
        Colorable,
        FormControl,
        MergeClasses
    ],

    props: {
        /**
         * The type attribute
         *
         * @property String
         */
        type: {
            type: String,
            default: 'text'
        },

        /**
         * The rows attribute
         *
         * @property String
         */
        rows: [Number, String]
    }

};

var plugin$C = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      TextareaField: TextareaField
    });
  }
});

var ThumbnailListItem = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"thumbnail-list-item",style:({height: _vm.unit(_vm.height), width: _vm.unit(_vm.width), minHeight: _vm.unit(_vm.minHeight), maxHeight: _vm.unit(_vm.maxHeight), minWidth: _vm.unit(_vm.minWidth), maxWidth: _vm.unit(_vm.maxWidth)})},[(_vm.src)?_c('img',{class:{'img-fluid': _vm.fluid},attrs:{"src":_vm.src,"alt":_vm.alt}}):_vm._e(),_vm._v(" "),_vm._t("default")],2)},staticRenderFns: [],

    props: {

        alt: String,

        src: String,

        width: [String, Number],

        height: [String, Number],

        minHeight: [String, Number],

        maxHeight: [String, Number],

        minWidth: [String, Number],

        maxWidth: [String, Number],

        fluid: {
            type: Boolean,
            default: true
        }

    },

    methods: {

        unit: unit

    }

};

var ThumbnailList = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"thumbnail-list",class:_vm.classes},[_vm._l((_vm.images),function(image){return (!!_vm.images)?_c('thumbnail-list-item',{attrs:{"src":image,"width":_vm.width}}):_vm._e()}),_vm._v(" "),_vm._t("default")],2)},staticRenderFns: [],

    components: {
        ThumbnailListItem
    },

    props: {

        fill: Boolean,

        flex: Boolean,

        noFlex: Boolean,

        grid: Boolean,

        wrap: Boolean,

        images: Array,

        width: {
            type: [String, Number],
            default: 75
        }

    },

    computed: {

        classes() {
            return {
                'thumbnail-list-fill': this.fill,
                'thumbnail-list-flex': this.flex,
                'thumbnail-list-noflex': this.noFlex,
                'thumbnail-list-grid': this.grid,
                'thumbnail-list-wrap': this.wrap
            }
        }

    }

};

var plugin$D = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      ThumbnailList: ThumbnailList
    });
  }
});

var UploadField = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form-group',{staticClass:"upload-field",class:{'enable-dropzone': _vm.dropzone, 'enable-multiple': _vm.multiple}},[_c('dropzone',{on:{"drop":_vm.onDrop}},[(_vm.multiple && (!_vm.maxUploads || _vm.maxUploads > _vm.value.length) || !_vm.multiple && !_vm.value)?_c('file-field',{attrs:{"name":_vm.name,"label":_vm.label,"placeholder":_vm.placeholder,"help-text":_vm.helpText,"multiple":_vm.multiple,"errors":_vm.errors},on:{"change":_vm.onChange}}):_vm._e(),_vm._v(" "),(_vm.files && _vm.files.length)?_c('thumbnail-list',{staticClass:"mt-4",attrs:{"wrap":""}},_vm._l((_vm.files),function(file,key){return _c('thumbnail-list-item',{key:file.lastModified + '-' + file.lastModifiedDate + '-' + file.size + '-' + file.type + '-' + file.name,class:{'uploading': !!_vm.progressBars[key]},attrs:{"width":_vm.width,"min-width":_vm.minWidth,"max-width":_vm.maxWidth,"height":_vm.height,"min-height":_vm.minHeight,"max-height":_vm.maxHeight}},[_c('file-preview',{attrs:{"file":file,"progress":_vm.progressBars[key] || 0},on:{"loaded":_vm.onLoadedPreview,"close":function($event){_vm.removeFile(file);}}}),_vm._v(" "),_vm._t("default",null,{file:file}),_vm._v(" "),_c('thumbnail-list-item')],2)})):_vm._e(),_vm._v(" "),(_vm.showDropElement)?_c('div',{staticClass:"upload-field-dropzone",style:({'min-height': _vm.dropzoneMinHeight}),on:{"drop":function($event){$event.preventDefault();return _vm.onDrop($event)}}},[_c('i',{staticClass:"fa fa-cloud-upload"}),_vm._v(" "),_c('div',[_vm._v("Drag and drop files to upload")])]):_vm._e()],1)],1)},staticRenderFns: [],

    name: 'upload-field',

    mixins: [FormControl],

    components: {
        Dropzone,
        FormGroup,
        FileField,
        FilePreview,
        ThumbnailList,
        ThumbnailListItem
    },

    model: {
        prop: 'value',
        event: 'change'
    },

    props: {

        /**
         * Can user upload multiple files
         *
         * @property String
         */
        multiple: Boolean,

        /**
         * The maximum number of files that a user can upload
         *
         * @property String
         */
        maxUploads: Number,

        /**
         * The height attribute for the control element
         *
         * @property String
         */
        height: [Number, String],

        /**
         * The minimum height attribute for the control element
         *
         * @property String
         */
        minHeight: [Number, String],

        /**
         * The maximum height attribute for the control element
         *
         * @property String
         */
        maxHeight: [Number, String],

        /**
         * The width attribute for the control element
         *
         * @property String
         */
        width: [Number, String],

        /**
         * The minimum width attribute for the control element
         *
         * @property String
         */
        minWidth: [Number, String],

        /**
         * The maximum width attribute for the control element
         *
         * @property String
         */
        maxWidth: [Number, String],

        /**
         * Can user drag/drop files into browser to upload them.
         *
         * @property String
         */
        dropzoneMinHeight: [Number, String],

        /**
         * Is the user dragging a file over the dropzone
         *
         * @property String
         */
        dragging: {
            type: [String, Boolean],
            default() {
                return undefined;
            }
        },

        /**
         * Can user drag/drop files into browser to upload them.
         *
         * @property String
         */
        dropzone: {
            type: Boolean,
            default: true
        },

        /**
         * The data attribute
         *
         * @property File|FileList|Array
         */
        value: {
            type: [Object, File, FileList, Array],
            default() {
                return !this.multiple ? null : [];
            }
        },

        /**
         * An HTTP Model used to send the request
         *
         * @type Model
         */
        model: [Model, Function],

        request: Object

    },

    methods: {

        removeFile(data) {

            if(this.multiple) {
                const files = isArray(this.value) ? this.value.slice(0) : [];

                if(data instanceof File) {
                    if(data.request && data.request.cancel) {
                        data.request.cancel();
                    }

                    remove(files, {
                        name: data.name,
                        size: data.size,
                        lastModified: data.lastModified
                    });
                }
                else {
                    remove(files, data);
                }

                this.$emit('change', files);
            }
            else {
                if(data.request && data.request.cancel) {
                    data.request.cancel();
                }

                this.$emit('change', null);
            }
        },

        addFile(file, subject) {
            const data = {
                name: file.name,
                lastModified: file.lastModified,
                lastModifiedDate: file.lastModifiedDate,
                size: file.size,
                type: file.type
            };

            if(this.multiple) {
                const files = subject || (isArray(this.value) ? this.value.slice(0) : []);

                if((!this.maxUploads || this.maxUploads > files.length) && files.indexOf(data) === -1) {
                    files.push(file);

                    this.$emit('change', files);
                    this.upload(file);
                }
            }
            else {
                this.$emit('change', file);
                this.upload(file);
            }
        },

        addFiles(files) {
            const subject = isArray(this.value) ? this.value.slice(0) : [];

            each(files, file => {
                this.addFile(file, subject);
            });

            event.target.value = null;
        },

        /**
         * Upload function that handles auto-uploading fields asynchronously.
         * This is designed to work with REST API's and replace the file Object
         * with the RESTful returned by the server.
         *
         * @type Object
         */
        upload(file) {
            // Stop upload silently if no model is defined.
            if(!this.model) {
                return Promise.resolve();
            }

            let model = this.model;

            if(!(this.model instanceof Model)) {
                model = new this.model;
            }

            model.set(this.name, file);

            this.$emit('uploading', model);
            this.$set(this.progressBars, this.multiple ? (this.value ? this.value.length : 0) : 0, 0);

            return model.save(null, extend({
                onUploadProgress: e => {
                    if(!file.index) {
                        file.index = this.files.indexOf(file);
                    }

                    if(!file.request) {
                        file.request = model.getRequest();
                    }

                    this.$set(this.progressBars, file.index, parseInt((e.loaded / e.total) * 100, 10));
                    this.$emit('progress', model, this.progressBars[file.index]);
                }
            }, this.request))
            .then(response => {
                this.$nextTick(() => {
                    this.$emit('upload', model);
                    this.progressBars[file.index] = false;
                });

                return response;
            });
        },

        /**
         * The `drop` event callback.
         *
         * @type Object
         */
        onDrop(event) {
            this.onChange(event.dataTransfer.files);
        },

        /**
         * The `change` event callback.
         *
         * @type Object
         */
        onChange(files) {
            if(files instanceof FileList) {
                this.addFiles(files);
            }
            else {
                this.addFile(files);
            }
        },

        /**
         * The `dragover` event callback.
         *
         * @type Object
         */
        onDragOver(event) {
            this.isDraggingInside = true;
            this.$emit('update:dragging', true);
            this.$emit('drag:over', event);
        },

        /**
         * The `dragover` event callback.
         *
         * @type Object
         */
        onDragEnter(event) {
            this.isDraggingInside = true;
            this.$emit('update:dragging', true);
            this.$emit('drag:enter', event);
        },

        /**
         * The `dragleave` event callback.
         *
         * @type Object
         */
        onDragLeave(event) {
            this.isDraggingInside = false;
            this.$emit('update:dragging', false);
            this.$emit('drag:leave', event);
        },

        /**
         * The `drop` event callback.
         *
         * @property String
         */
        onDrop(event) {
            this.isDraggingInside = false;
            this.addFiles(event.dataTransfer.files);
            this.$emit('update:dragging', false);
            this.$emit('drop', event);
        },

        /**
         * The `loaded` event callback.
         *
         * @type Object
         */
        onLoadedPreview(event) {
            this.$emit('loaded', event);
        }
    },

    computed: {

        files() {
            return this.multiple ? this.value : (this.value ? [this.value] : []);
        },

        showDropElement() {
            return !isUndefined(this.dragging) ? this.dragging : this.isDraggingInside
        }

    },

    data() {
        return {
            progressBars: {},
            isDraggingInside: false
        };
    }

};

var plugin$E = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      UploadField: UploadField
    });
  }
});

var WizardButtons = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wizard-buttons"},[_c('btn-group',{ref:"left",staticClass:"wizard-buttons-left"},[_vm._t("buttons-left"),_vm._v(" "),_c('btn',{ref:"back",attrs:{"type":"button","variant":"secondary","disabled":_vm.backButton === false || (_vm.active === 0 && _vm.backButton !== true),"size":_vm.sizeableClass},on:{"click":_vm.onClickBack}},[_c('i',{staticClass:"fa fa-long-arrow-left"}),_vm._v(" Back ")])],2),_vm._v(" "),_c('btn-group',{ref:"right",staticClass:"wizard-buttons-right"},[_vm._t("buttons-right"),_vm._v(" "),(_vm.active === _vm.steps.length - 1)?_c('btn-activity',{ref:"finish",attrs:{"activity":_vm.activity,"size":_vm.sizeableClass,"disabled":_vm.finishButton === false,"type":"button","variant":"success"},on:{"click":_vm.onClickFinish}},[_vm._v(" Finish ")]):_vm._e(),_vm._v(" "),(_vm.active < _vm.steps.length - 1)?_c('btn-activity',{ref:"next",attrs:{"activity":_vm.activity,"size":_vm.sizeableClass,"disabled":_vm.nextButton === false,"type":"button","variant":"primary"},on:{"click":_vm.onClickNext}},[_vm._v(" Next "),_c('i',{staticClass:"fa fa-long-arrow-right"})]):_vm._e()],2)],1)},staticRenderFns: [],

    name: 'wizard-buttons',

    mixins: [
        Sizeable
    ],

    components: {
        Btn,
        BtnGroup,
        BtnActivity
    },

    props: {

        /**
         * The index or key of the active step.
         *
         * @type {String|Number}
         */
        active: {
            type: [String, Number],
            default: 0
        },

        /**
         * Show the activity indicator in the next or finish button.
         *
         * @type {Boolean}
         */
        activity: Boolean,

        /**
         * Show should the "Back" button.
         *
         * @type {Boolean}
         */
        backButton: Boolean,

        /**
         * Show should the "Finish" button.
         *
         * @type {Boolean}
         */
        finishButton: Boolean,

        /**
         * Show should the "Next" button.
         *
         * @type {Boolean}
         */
        nextButton: Boolean,

        /**
         * An array of steps passed from the parent.
         *
         * @type {Array}
         */
        steps: {
            type: Array,
            required: true
        }

    },

    computed: {

        /**
         * Override the class prefix with an empty string...
         * @return {String}
         */
        sizeableClassPrefix() {
            return '';
        }

    },

    methods: {

        onClickBack(event) {
            if(this.backButton !== false) {
                this.$emit('click:back', event);
            }
        },

        onClickFinish(event) {
            if(this.finishButton !== false) {
                this.$emit('click:finish', event);
            }
        },

        onClickNext(event) {
            if(this.nextButton !== false) {
                this.$emit('click:next', event);
            }
        }

    }

};

var WizardStep = {

    name: 'wizard-step',

    props: {

        /**
         * The parent wizard component instance.
         *
         * @type {String}
        wizard: {
            //required: true,
            type: Object
        },
        */

        /**
         * The step's label in the progress bar.
         *
         * @type {String}
         */
        label: String,

        /**
         * A predicate function to determine if the back button should show.
         * Can also be a boolean value.
         *
         * @type {Function|Boolean}
         */
        backButton: {
            type: [Function, Boolean],
            default() {
                return null
            }
        },

        /**
         * Validate if the data input for the step is valid. Required Boolean
         * or a predicate function.
         *
         * @type {Function|Boolean}
         */
        validate: {
            type: [Function, Boolean],
            default() {
                return true;
            }
        }

    },

    methods: {

        checkValidity(prop) {
            // Validate the property for the step first.
            if(isFunction$1(this[prop]) ? this[prop](this) === false : this[prop] === false) {
                return false
            }

            // Then validate the property of the wizard, this is the global validator
            if(this.$refs.wizard) {
                if( isFunction$1(this.$refs.wizard[prop]) ?
                    this.$refs.wizard[prop](this) === false :
                    this.$refs.wizard[prop] === false) {
                    return false;
                }
            }

            return true;
        },

        performValidityChecks() {
            if(this.$refs.wizard) {
                this.checkValidity('validate') ? this.enable() : this.disable();
                this.checkValidity('backButton') ? this.$refs.wizard.enableBackButton() : this.$refs.wizard.disableBackButton();
            }
        },

        disable() {
            if(this.$refs.wizard) {
                this.$refs.wizard.disableNextButton();
                this.$refs.wizard.disableFinishButton();
            }
        },

        enable() {
            if(this.$refs.wizard) {
                this.$refs.wizard.enableNextButton();
                this.$refs.wizard.enableFinishButton();
            }
        }

    },

    updated() {
        this.performValidityChecks();
    },

    mounted() {
        this.$nextTick(this.performValidityChecks);
    },

    render(h) {
        if(this.$slots.default.length !== 1) {
            throw new Error('The <wizard-slot> must contain a single parent DOM node.');
        }

        return this.$slots.default[0];
    }

};

var WizardError = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wizard-error"},[(_vm.icon)?_c('div',{staticClass:"wizard-error-icon"},[_c('i',{class:_vm.icon})]):_vm._e(),_vm._v(" "),(_vm.title)?_c('h3',{staticClass:"wizard-error-title",domProps:{"innerHTML":_vm._s(_vm.title)}}):_vm._e(),_vm._v(" "),_vm._t("default"),_vm._v(" "),_c('div',{staticClass:"row justify-content-center"},[_c('div',{staticClass:"col-sm-6"},[(_vm.errors)?_c('div',{staticClass:"my-5"},[_c('ul',{staticClass:"mb-0 text-left"},_vm._l((_vm.errors),function(error,i){return _c('li',{key:i},[_vm._v(" "+_vm._s(error[0])+" ")])}))]):_vm._e(),_vm._v(" "),_c('btn',{attrs:{"size":"lg","variant":"danger","block":""},on:{"click":function($event){_vm.$emit('back');}}},[_c('i',{staticClass:"fa fa-long-arrow-left"}),_vm._v(" Go Back ")])],1)])],2)},staticRenderFns: [],

    name: 'wizard-error',

    extends: WizardStep,

    components: {
        Btn
    },

    props: {

        icon: {
            type: String,
            default: 'fa fa-3x fa-check'
        },

        title: {
            type: String,
            default: 'Error!'
        },

        errors: [Array, Object]

    }

};

var WizardHeader = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",staticClass:"wizard-header",class:{'text-center': _vm.center}},[_vm._t("default")],2)},staticRenderFns: [],

    name: 'wizard-header',

    props: {

        center: {
            type: Boolean,
            default: true
        },

        /**
         * The HTML tag
         *
         * @type {String}
         */
        tag: {
            type: String,
            default: 'h2'
        }

    }

};

var WizardProgress = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wizard-progress"},_vm._l((_vm.steps),function(step,i){return _c('a',{staticClass:"wizard-step",class:{'active': i === _vm.active, 'disabled': i > _vm.highestStep, 'complete': i + 1 <= _vm.highestStep},style:({width: `${100 / _vm.steps.length}%`}),attrs:{"href":"#","data-step":i,"title":step.label || step.title},on:{"click":function($event){$event.preventDefault();_vm.onClick($event, step);}}},[(step.componentOptions && step.componentOptions.propsData.label)?_c('span',{staticClass:"wizard-step-label",domProps:{"innerHTML":_vm._s(step.componentOptions.propsData.label)}}):(step.componentOptions && step.componentOptions.propsData.title)?_c('span',{staticClass:"wizard-step-label",domProps:{"innerHTML":_vm._s(step.componentOptions.propsData.title)}}):_vm._e()])}))},staticRenderFns: [],

    name: 'wizard-progress',

    props: {

        /**
         * The index or key of the active step.
         *
         * @type {String|Number}
         */
        active: {
            type: [String, Number],
            default: 0
        },

        /**
         * The wizard highest available to the user.
         *
         * @type {Array}
         */
        highestStep: {
            type: Number,
            required: true,
        },

        /**
         * The wizard steps
         *
         * @type {Array}
         */
        steps: {
            type: Array,
            required: true
        }

    },

    methods: {

        onClick(event, step) {
            if(!event.target.classList.contains('disabled')) {
                this.$emit('click', event, step);
            }
        }

    },

    data() {
        return {
            isActive: false
        }
    }

};

var WizardSuccess = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wizard-success"},[(_vm.icon)?_c('div',{staticClass:"wizard-success-icon"},[_c('i',{class:_vm.icon})]):_vm._e(),_vm._v(" "),(_vm.title)?_c('h3',{staticClass:"wizard-success-title",domProps:{"innerHTML":_vm._s(_vm.title)}}):_vm._e(),_vm._v(" "),_vm._t("default")],2)},staticRenderFns: [],

    name: 'wizard-success',

    extends: WizardStep,

    props: {

        icon: {
            type: String,
            default: 'fa fa-check'
        },

        title: {
            type: String,
            default: 'Success!'
        },

    }

};

var Wizard = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wizard"},[(_vm.header && !_vm.isFinished)?_c('wizard-header',{ref:"header",domProps:{"innerHTML":_vm._s(_vm.header)}}):_vm._e(),_vm._v(" "),(!_vm.isFinished)?_c('wizard-progress',{ref:"progress",attrs:{"active":_vm.currentStep,"highest-step":_vm.highestStep,"steps":_vm.steps},on:{"click":_vm.onProgressClick}}):_vm._e(),_vm._v(" "),_c('div',{ref:"content",staticClass:"wizard-content"},[(!_vm.isFinished)?_vm._t("content"):_vm._e(),_vm._v(" "),(!_vm.isFinished)?_c('slide-deck',{ref:"slideDeck",attrs:{"active":_vm.currentStep,"resize-model":_vm.resizeMode},on:{"before-enter":_vm.onBeforeEnter,"enter":_vm.onEnter,"leave":_vm.onLeave}},[_vm._t("default")],2):(_vm.isFinished && !_vm.hasFailed)?_vm._t("success",[_c('wizard-success',{ref:"success"})]):(_vm.isFinished && _vm.hasFailed)?_vm._t("error",[_c('wizard-error',{ref:"error",attrs:{"errors":_vm.errors},on:{"back":_vm.onClickTest}})]):_vm._e()],2),_vm._v(" "),(!_vm.isFinished)?_vm._t("buttons",[_c('hr'),_vm._v(" "),_c('wizard-buttons',{ref:"buttons",attrs:{"size":"lg","steps":_vm.steps,"active":_vm.currentStep,"activity":_vm.activity,"back-button":!_vm.isBackButtonDisabled,"next-button":!_vm.isNextButtonDisabled,"finish-button":!_vm.isFinishButtonDisabled},on:{"click:back":_vm.onClickBack,"click:finish":_vm.onClickFinish,"click:next":_vm.onClickNext}})]):_vm._e()],2)},staticRenderFns: [],

    name: 'wizard',

    components: {
        SlideDeck,
        WizardButtons,
        WizardError,
        WizardHeader,
        WizardProgress,
        WizardSuccess
    },

    props: {

        /**
         * The index or key of the active step.
         *
         * @type {String|Number}
         */
        active: {
            type: [String, Number],
            default: 0
        },

        /**
         * The the index or key of the max completed step.
         *
         * @type {String|Number}
         */
        completed: [String, Number],

        /**
         * Show the activity indicator in the next or finish button.
         *
         * @type {Boolean}
         */
        activity: Boolean,

        /**
         * Show should the "Back" button.
         *
         * @type {Boolean}
         */
        backButton: {
            type: [Function, Boolean],
            default() {
                return this.currentStep > 0;
            }
        },

        /**
         * Show should the "Finish" button.
         *
         * @type {Boolean}
         */
        finishButton: {
            type: Boolean,
            default: true
        },

        /**
         * Pass a header as a string.
         *
         * @type {String}
         */
        header: String,

        /**
         * Show should the "Next" button.
         *
         * @type {Boolean}
         */
        nextButton: {
            type: Boolean,
            default: true
        },

        /**
         * The mode determines how the popover content will flex based on the
         * varying heights of the slides.
         *
         * @type Boolean
         */
        resizeMode: {
            type: [Function, Boolean, String],
            default: 'auto',
            validate(value) {
                return ['auto', 'initial', 'inherit'].indexOf(value) !== 1;
            }
        },

        /**
         * Validate if the data input for the step is valid. Required Boolean
         * or a predicate function.
         *
         * @type {Function|Boolean}
         */
        validate: {
            type: [Function, Boolean],
            default() {
                return true;
            }
        }

    },

    watch: {

        active() {
            this.currentStep = this.index();
        }

    },

    methods: {

        back() {
            this.$emit('update:step', this.currentStep = Math.max(this.currentStep - 1, 0));
        },

        disableButtons() {
            this.isBackButtonDisabled = true;
            this.isFinishButtonDisabled = true;
            this.isNextButtonDisabled = true;
        },

        disableBackButton() {
            this.isBackButtonDisabled = true;
        },

        disableFinishButton() {
            this.isFinishButtonDisabled = true;
        },

        disableNextButton() {
            this.isNextButtonDisabled = true;
        },

        emitBubbleEvent(key, ...args) {
            this.$refs.slideDeck.slide(this.currentStep).componentInstance.$emit.apply(
                this.$refs.slideDeck.slide(this.currentStep).componentInstance, args = [key].concat(args)
            );

            this.$emit.apply(this, args);
        },

        enableButtons() {
            this.isBackButtonDisabled = false;
            this.isFinishButtonDisabled = false;
            this.isNextButtonDisabled = false;
        },

        enableBackButton() {
            this.isBackButtonDisabled = false;
        },

        enableFinishButton() {
            this.isFinishButtonDisabled = false;
        },

        enableNextButton() {
            this.isNextButtonDisabled = false;
        },

        finish(status, errors = null) {
            this.errors = errors;
            this.hasFailed = status === false;
            this.isFinished = true;
        },

        index(key = null) {
            return Math.max(0, this.$slots.default.indexOf(
                find(this.$slots.default, ['key', key || this.active]) || this.$slots.default[key || this.active]
            ));
        },

        next() {
            this.$emit('update:step', this.currentStep = Math.min(this.currentStep + 1, this.$refs.slideDeck.slides().length - 1));
        },

        onBeforeEnter(slide, prev) {
            slide.context.$emit('before-enter', slide, prev);
            this.$emit('before-enter', slide, prev);
        },

        onClickTest(event) {
            this.isFinished = false;
        },

        onClickBack(event) {
            this.emitBubbleEvent('back', event);

            if(event.defaultPrevented !== true) {
                this.back();
            }
        },

        onClickFinish(event) {
            this.emitBubbleEvent('finish', event);

            if(event.defaultPrevented !== true) {
                this.finish(true);
            }
        },

        onClickNext(event) {
            this.emitBubbleEvent('next', event);

            if(event.defaultPrevented !== true) {
                this.next();
            }
        },

        onEnter(slide, prev) {
            this.highestStep = Math.max(this.highestStep, this.$refs.slideDeck.$refs.slides.getSlideIndex(slide));
            slide.componentInstance.$refs.wizard = this;
            slide.context.$emit('enter', slide, prev);
            this.$emit('enter', slide, prev);
        },

        onLeave(slide, prev) {
            slide.context.$emit('leave', slide, prev);
            this.$emit('leave', slide, prev);
        },

        onProgressClick(event, slide) {
            if(this.$refs.slideDeck) {
                this.currentStep = this.$refs.slideDeck.$refs.slides.getSlideIndex(slide);
            }
            else {
                this.isFinished = false;
                this.currentStep = this.index(slide.key);
            }
        }

    },

    mounted() {
        const slide = this.$refs.slideDeck.slide(this.currentStep);

        if(slide) {
            (slide.componentInstance || slide.context).$refs.wizard = this;
            (slide.componentInstance || slide.context).$emit('enter');
            this.$emit('enter', slide);
        }

        this.steps = this.$refs.slideDeck.slides();
    },

    data() {
        return {
            steps: [],
            errors: null,
            hasFailed: false,
            isFinished: false,
            currentStep: this.index(),
            highestStep: this.index(this.completed),
            isBackButtonDisabled: this.backButton === false,
            isNextButtonDisabled: this.nextButton === false,
            isFinishButtonDisabled: this.finishButton === false
        };
    }

};

var plugin$F = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Wizard: Wizard,
      WizardButtons: WizardButtons,
      WizardHeader: WizardHeader,
      WizardProgress: WizardProgress,
      WizardStep: WizardStep,
      WizardSuccess: WizardSuccess,
      WizardError: WizardError
    });
  }
});



var components$1 = /*#__PURE__*/Object.freeze({
    ActivityIndicator: ActivityIndicator,
    Alert: Alert,
    AlertClose: AlertClose,
    AlertHeading: AlertHeading,
    AlertLink: AlertLink,
    Badge: Badge,
    BaseForm: BaseForm,
    Breadcrumb: Breadcrumb,
    BreadcrumbItem: BreadcrumbItem,
    Btn: Btn,
    BtnActivity: BtnActivity,
    BtnFile: BtnFile,
    BtnGroup: BtnGroup,
    BtnGroupToggle: BtnGroupToggle,
    BtnToolbar: BtnToolbar,
    BtnDropdown: BtnDropdown,
    Card: Card,
    CardBody: CardBody,
    CardBtnGroup: CardBtnGroup,
    CardDeck: CardDeck,
    CardFooter: CardFooter,
    CardHeader: CardHeader,
    CardImg: CardImg,
    CardImgTop: CardImgTop,
    CardImgBottom: CardImgBottom,
    CardImgOverlay: CardImgOverlay,
    CardLink: CardLink,
    CardSubtitle: CardSubtitle,
    CardTitle: CardTitle,
    CheckboxField: CheckboxField,
    Container: Container,
    DropdownMenu: DropdownMenu,
    DropdownMenuItem: DropdownMenuItem,
    DropdownMenuHeader: DropdownMenuHeader,
    DropdownMenuDivider: DropdownMenuDivider,
    Dropzone: Dropzone,
    FileField: FileField,
    FilePreview: FilePreview,
    FormControl: FormControl$1,
    FormFeedback: FormFeedback,
    FormGroup: FormGroup,
    FormLabel: FormLabel,
    HelpText: HelpText,
    InfiniteScrolling: InfiniteScrolling,
    InputField: InputField,
    InputGroup: InputGroup,
    InputGroupAppend: InputGroupAppend,
    InputGroupPrepend: InputGroupPrepend,
    InputGroupText: InputGroupText,
    LightSwitchField: LightSwitchField,
    ListGroup: ListGroup,
    ListGroupItem: ListGroupItem,
    Navbar: Navbar,
    NavbarBrand: NavbarBrand,
    NavbarCollapse: NavbarCollapse,
    NavbarNav: NavbarNav,
    NavbarText: NavbarText,
    NavbarToggler: NavbarToggler,
    NavbarTogglerIcon: NavbarTogglerIcon,
    Modal: Modal,
    ModalBackdrop: ModalBackdrop,
    ModalBody: ModalBody,
    ModalContent: ModalContent,
    ModalDialog: ModalDialog,
    ModalFooter: ModalFooter,
    ModalHeader: ModalHeader,
    ModalTitle: ModalTitle,
    Navigation: Navigation,
    NavigationError: NavigationError,
    NavigationItem: NavigationItem,
    NavigationLink: NavigationLink,
    NavigationDropdown: NavigationDropdown,
    Overlay: Overlay,
    Pagination: Pagination,
    Popover: Popover,
    PopoverBody: PopoverBody,
    PopoverHeader: PopoverHeader,
    ProgressBar: ProgressBar,
    RadioField: RadioField,
    SelectField: SelectField,
    SlideDeck: SlideDeck,
    Slides: Slides,
    TableView: TableView,
    TextareaField: TextareaField,
    ThumbnailList: ThumbnailList,
    ThumbnailListItem: ThumbnailListItem,
    UploadField: UploadField,
    Wizard: Wizard,
    WizardButtons: WizardButtons,
    WizardHeader: WizardHeader,
    WizardProgress: WizardProgress,
    WizardStep: WizardStep,
    WizardSuccess: WizardSuccess
});

var STYLE_ATTRIBUTES = ['font', 'fontFamily', 'fontKerning', 'fontSize', 'fontStretch', 'fontStyle', 'fontVariant', 'fontVariantLigatures', 'fontVariantCaps', 'fontVariantNumeric', 'fontVariantEastAsian', 'fontWeight', 'lineHeight', 'letterSpacing', 'padding', 'margin', 'textAlign', 'textAlignLast', 'textDecoration', 'textDecorationLine', 'textDecorationStyle', 'textDecorationColor', 'textDecorationSkipInk', 'textDecorationPosition', 'textIndent', 'textRendering', 'textShadow', 'textSizeAdjust', 'textOverflow', 'textTransform', 'width', 'wordBreak', 'wordSpacing', 'wordWrap'];

function int(str) {
  if (typeof str === "number") {
    return str;
  } else if (!str || !str.replace) {
    return 0;
  }

  return parseInt(str.replace(/[^\d.]+/g, ''));
}

function input(div, el) {
  div.innerHTML = el.value.replace(/(?:\r\n|\r|\n)/g, '<br />');
}

function height(el) {
  return int(el.getBoundingClientRect().height);
}

function style(el, attr) {
  return window.getComputedStyle(el)[attr];
}

function resize(target, div, minHeight, maxHeight) {
  var dynamicHeight = Math.max(height(div) + int(style(div, 'lineHeight')), minHeight);
  target.style.height = (!maxHeight || dynamicHeight < maxHeight ? dynamicHeight : maxHeight) + 'px';
}

function mimic(el) {
  var div = document.createElement('div');
  var styles = window.getComputedStyle(el);

  for (var i in STYLE_ATTRIBUTES) {
    var key = STYLE_ATTRIBUTES[i];
    div.style[key] = styles[key];
  }

  div.style.position = 'absolute';
  div.style.bottom = '100%';
  div.style.zIndex = -1;
  div.style.visibility = 'hidden';
  return div;
}

function init(el, maxHeight) {
  var div = mimic(el);
  var minHeight = height(el);
  el.addEventListener('input', function (event) {
    input(div, event.target);
    resize(el, div, minHeight, maxHeight);
  });
  document.body.appendChild(div);
  input(div, el);
  resize(el, div, minHeight, maxHeight);
}

var Autogrow = {
  inserted: function inserted(el, binding, vnode) {
    if (el.tagName.toLowerCase() !== 'textarea') {
      el = el.querySelector('textarea');
    }

    if (!el) {
      throw new Error('A textarea is required for the v-autogrow directive.');
    }

    init(el, binding.value);
  }
};

function show(el, target, vnode) {
  target.classList.remove('collapse');
  target.classList.add('show');
  target.$collapsedHeight = getComputedStyle(target).height;
  target.classList.add('collapsing');
  vnode.context.$nextTick(function () {
    target.style.height = target.$collapsedHeight;
  });
  transition(target).then(function (delay) {
    target.style.height = null;
    target.classList.add('collapse');
    target.classList.remove('collapsing');
    el.classList.remove('collapsed');
  });
}

function hide(el, target, vnode) {
  target.style.height = target.$collapsedHeight;
  target.classList.add('collapsing');
  target.classList.remove('collapse');
  vnode.context.$nextTick(function () {
    target.style.height = 0;
  });
  transition(target).then(function (delay) {
    target.style.height = null;
    target.classList.add('collapse');
    target.classList.remove('show', 'collapsing');
    el.classList.add('collapsed');
  });
}

var Collapse = {
  inserted: function inserted(el, binding, vnode) {
    if (isUndefined(binding.value) || binding.value === true) {
      el.classList.add('collapsed');
      el.setAttribute('data-toggle', 'collapse');
      var target = el.getAttribute('data-target') || el.getAttribute('href');
      var elements = document.querySelectorAll(target);
      el.addEventListener('click', function (event) {
        elements.forEach(function (element) {
          if (!element.classList.contains('show')) {
            show(el, element, vnode);
          } else {
            hide(el, element, vnode);
          }
        });
        event.preventDefault();
      });
      elements.forEach(function (element) {
        /*
        if(!element.$collapsedHeight) {
            element.$collapsedHeight = getComputedStyle(element).height;
        }
        */
        if (!element.classList.contains('collapse')) {
          element.classList.add('collapse');
        }
      });
    }
  }
};

var Slug = {
  inserted: function inserted(el, binding, vnode) {
    var input = el.querySelector('input, textarea') || el;
    var value = get(vnode.context, binding.expression);
    var editable = !input.value;

    var update = function update(value) {
      if (editable) {
        input.value = kebabCase(value);
        input.dispatchEvent(new Event('input'));
      }
    };

    vnode.context.$watch(binding.expression, update);
    input.addEventListener('keyup', function (event) {
      input.value = kebabCase(event.target.value) + (event.target.value.match(/\s$/) ? ' ' : '');
    });
    input.addEventListener('input', function (event) {
      if (event instanceof InputEvent) {
        editable = !event.target.value;
      }
    });
    input.addEventListener('blur', function (event) {
      input.value = kebabCase(event.target.value || binding.expression.split('.').reduce(function (o, i) {
        return o[i];
      }, vnode.context));
      input.dispatchEvent(new Event('input'));
    });
    !input.value && update(value);
  }
};



var directives$1 = /*#__PURE__*/Object.freeze({
    Autogrow: Autogrow,
    Collapse: Collapse,
    Slug: Slug
});

function blob(url, progress) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';

    if (isFunction(progress)) {
      xhr.onprogress = function (e) {
        return progress(e, xhr);
      };
    }

    xhr.onerror = function (e) {
      return reject(e);
    };

    xhr.onabort = function (e) {
      return reject(e);
    };

    xhr.onload = function (e) {
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(e);
      }
    };

    xhr.send();
  });
}

function elapsed(milliseconds, callback, elapsedCallback) {
  var hasElapsed = false;

  function start() {
    return setTimeout(function () {
      hasElapsed = true;

      if (isFunction$1(elapsedCallback)) {
        elapsedCallback();
      }
    }, milliseconds);
  }

  function stop() {
    clearTimeout(interval);
  }

  var interval = start(),
      promise = new Promise(function (resolve, reject) {
    function resolver(resolver, response) {
      return resolver(response || hasElapsed);
    }
    callback(wrap(resolve, resolver), wrap(reject, resolver));
  });
  return promise.finally(stop, stop);
}

var easings = {
  linear: function linear(t) {
    return t;
  },
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },
  easeInOutQuad: function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },
  easeInOutCubic: function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },
  easeInOutQuart: function easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },
  easeInOutQuint: function easeInOutQuint(t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }
};
function scrollTo(destination) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  var easing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'easeInQuad';
  var viewport = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!viewport) {
    viewport = document.querySelector('body');
  }

  var viewportBounds = viewport.getBoundingClientRect();
  var destinationBounds = destination.getBoundingClientRect();
  var destinationOffsetToScroll = Math.ceil(destinationBounds.top + document.documentElement.scrollTop);

  function isScrollBottom() {
    return document.documentElement.scrollTop >= Math.floor(viewportBounds.height) - window.innerHeight;
  }

  return new Promise(function (resolve, reject) {
    var startTime = performance.now();
    var isStartingBottom = isScrollBottom();

    function scroll() {
      var start = document.documentElement.scrollTop;
      var time = Math.min(1, (performance.now() - startTime) / duration);
      var timeFunction = easings[easing](time);
      window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

      if (document.documentElement.scrollTop === destinationOffsetToScroll || isScrollBottom() && !isStartingBottom) {
        resolve();
        return;
      }

      requestAnimationFrame(scroll);
    }

    scroll();
  });
}

var CALLBACKS = {};

function id$1(callback) {
  return findIndex(CALLBACKS, function (compare) {
    return callback.toString() == compare.toString();
  });
}

function restart(callback, milliseconds) {
  stop(id$1(callback));
  start(callback, milliseconds);
}

function stop(id) {
  clearTimeout(id);
  delete CALLBACKS[id];
}

function start(callback, milliseconds) {
  return CALLBACKS[setTimeout(callback, milliseconds)] = callback;
}

function wait(milliseconds, callback) {
  return new Promise(function (resolve, reject) {
    function resolver(resolver, response) {
      return resolver(response);
    }
    restart(wrap(callback, function (callback) {
      return callback(wrap(resolve, resolver), wrap(reject, resolver));
    }), milliseconds);
  });
  return promise.finally(stop, stop);
}
/*
import { wrap } from '../Functions';
import { isFunction } from '../Functions';

export default function elapsed(delay, callback, elapsedCallback) {
    let hasElapsed = false;

    function start() {
        return setInterval(() => {
            hasElapsed = true;

            if(isFunction(elapsedCallback)) {
                elapsedCallback();
            }
        }, delay)
    }

    function stop() {
        clearInterval(interval);
    }

    const interval = start(), promise = new Promise((resolve, reject) => {
        function resolver(resolver, response) {
            return resolver(response || hasElapsed);
        };

        callback(wrap(resolve, resolver), wrap(reject, resolver));
    });

    return promise.finally(stop, stop);
}

 */

var main = VueInstaller.use({
  install: function install(Vue) {
    VueInstaller.plugins(Vue, plugins$1);
    VueInstaller.filters(Vue, filters);
    VueInstaller.directives(Vue, directives$1);
    VueInstaller.components(Vue, components$1);
  }
});

export default main;
export { Model, Request, RequestOptions, transformRequest, transformResponse, Colorable, FormControl as FormControlMixin, HasSlots, MergeClasses, Proxy$1 as Proxy, Screenreaders, Sizeable, Triggerable, Variant, blob, elapsed, instantiate, prefix, readFile, script, scrollTo, transition, unit, uuid, wait, modal$1 as modal, overlay, popover, ActivityIndicator, Alert, AlertClose, AlertHeading, AlertLink, Badge, BaseForm, Breadcrumb, BreadcrumbItem, Btn, BtnActivity, BtnFile, BtnGroup, BtnGroupToggle, BtnToolbar, BtnDropdown, Card, CardBody, CardBtnGroup, CardDeck, CardFooter, CardHeader, CardImg, CardImgTop, CardImgBottom, CardImgOverlay, CardLink, CardSubtitle, CardTitle, CheckboxField, Container, DropdownMenu, DropdownMenuItem, DropdownMenuHeader, DropdownMenuDivider, Dropzone, FileField, FilePreview, FormControl$1 as FormControl, FormFeedback, FormGroup, FormLabel, HelpText, InfiniteScrolling, InputField, InputGroup, InputGroupAppend, InputGroupPrepend, InputGroupText, LightSwitchField, ListGroup, ListGroupItem, Navbar, NavbarBrand, NavbarCollapse, NavbarNav, NavbarText, NavbarToggler, NavbarTogglerIcon, Modal, ModalBackdrop, ModalBody, ModalContent, ModalDialog, ModalFooter, ModalHeader, ModalTitle, Navigation, NavigationError, NavigationItem, NavigationLink, NavigationDropdown, Overlay, Pagination, Popover, PopoverBody, PopoverHeader, ProgressBar, RadioField, SelectField, SlideDeck, Slides, TableView, TextareaField, ThumbnailList, ThumbnailListItem, UploadField, Wizard, WizardButtons, WizardHeader, WizardProgress, WizardStep, WizardSuccess, Autogrow, Collapse, Slug, index as DateFilter, index as MomentFilter };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLWludGVyZmFjZS5lcy5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL0ZpbHRlcnMvRGF0ZS9EYXRlRmlsdGVyLmpzIiwiLi4vc3JjL0ZpbHRlcnMvRGF0ZS9Nb21lbnRGaWx0ZXIuanMiLCIuLi9zcmMvRmlsdGVycy9EYXRlL2luZGV4LmpzIiwiLi4vc3JjL0hlbHBlcnMvRnVuY3Rpb25zL2NhbWVsQ2FzZS5qcyIsIi4uL3NyYy9IZWxwZXJzL0Z1bmN0aW9ucy9leHRlbmQuanMiLCIuLi9zcmMvSGVscGVycy9GdW5jdGlvbnMvaXNOdWxsLmpzIiwiLi4vc3JjL0hlbHBlcnMvRnVuY3Rpb25zL2lzQXJyYXkuanMiLCIuLi9zcmMvSGVscGVycy9GdW5jdGlvbnMvaXNPYmplY3QuanMiLCIuLi9zcmMvSGVscGVycy9GdW5jdGlvbnMvZGVlcEV4dGVuZC5qcyIsIi4uL3NyYy9IZWxwZXJzL0Z1bmN0aW9ucy9jbG9uZURlZXAuanMiLCIuLi9zcmMvSGVscGVycy9GdW5jdGlvbnMvaXNOdW1iZXIuanMiLCIuLi9zcmMvSGVscGVycy9GdW5jdGlvbnMvaXNOdW1lcmljLmpzIiwiLi4vc3JjL0hlbHBlcnMvRnVuY3Rpb25zL2tleS5qcyIsIi4uL3NyYy9IZWxwZXJzL0Z1bmN0aW9ucy9lYWNoLmpzIiwiLi4vc3JjL0hlbHBlcnMvRnVuY3Rpb25zL2ZpcnN0LmpzIiwiLi4vc3JjL0hlbHBlcnMvRnVuY3Rpb25zL2lzVW5kZWZpbmVkLmpzIiwiLi4vc3JjL0hlbHBlcnMvRnVuY3Rpb25zL21hdGNoZXMuanMiLCIuLi9zcmMvSGVscGVycy9GdW5jdGlvbnMvaXNTdHJpbmcuanMiLCIuLi9zcmMvSGVscGVycy9GdW5jdGlvbnMvZ2V0LmpzIiwiLi4vc3JjL0hlbHBlcnMvRnVuY3Rpb25zL3Byb3BlcnR5LmpzIiwiLi4vc3JjL0hlbHBlcnMvRnVuY3Rpb25zL2lzRnVuY3Rpb24uanMiLCIuLi9zcmMvSGVscGVycy9GdW5jdGlvbnMvbWF0Y2hlc1Byb3BlcnR5LmpzIiwiLi4vc3JjL0hlbHBlcnMvRnVuY3Rpb25zL3ByZWRpY2F0ZS5qcyIsIi4uL3NyYy9IZWxwZXJzL0Z1bmN0aW9ucy9maW5kLmpzIiwiLi4vc3JjL0hlbHBlcnMvRnVuY3Rpb25zL2ZpbmRJbmRleC5qcyIsIi4uL3NyYy9IZWxwZXJzL0Z1bmN0aW9ucy9pc0Jvb2xlYW4uanMiLCIuLi9zcmMvSGVscGVycy9GdW5jdGlvbnMva2ViYWJDYXNlLmpzIiwiLi4vc3JjL0hlbHBlcnMvRnVuY3Rpb25zL21hcEtleXMuanMiLCIuLi9zcmMvSGVscGVycy9GdW5jdGlvbnMvbmVnYXRlLmpzIiwiLi4vc3JjL0hlbHBlcnMvRnVuY3Rpb25zL3BpY2tCeS5qcyIsIi4uL3NyYy9IZWxwZXJzL0Z1bmN0aW9ucy9vbWl0QnkuanMiLCIuLi9zcmMvSGVscGVycy9GdW5jdGlvbnMvcmVtb3ZlLmpzIiwiLi4vc3JjL0hlbHBlcnMvRnVuY3Rpb25zL3dyYXAuanMiLCIuLi9zcmMvSGVscGVycy9QcmVmaXgvUHJlZml4LmpzIiwiLi4vc3JjL01peGlucy9WYXJpYW50L1ZhcmlhbnQuanMiLCIuLi9zcmMvTWl4aW5zL1NpemVhYmxlL1NpemVhYmxlLmpzIiwiLi4vc3JjL01peGlucy9Db2xvcmFibGUvQ29sb3JhYmxlLmpzIiwiLi4vc3JjL0hlbHBlcnMvVHJhbnNpdGlvbi9UcmFuc2l0aW9uLmpzIiwiLi4vc3JjL01peGlucy9NZXJnZUNsYXNzZXMvTWVyZ2VDbGFzc2VzLmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvQnRuL0J0bi52dWUiLCIuLi9zcmMvSGVscGVycy9TY3JpcHQvU2NyaXB0LmpzIiwiLi4vc3JjL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlci5qcyIsIi4uL3NyYy9Db21wb25lbnRzL0J0bi9pbmRleC5qcyIsIi4uL3NyYy9Db21wb25lbnRzL01vZGFsL01vZGFsQm9keS52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9Nb2RhbC9Nb2RhbERpYWxvZy52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9Nb2RhbC9Nb2RhbFRpdGxlLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL01vZGFsL01vZGFsSGVhZGVyLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL01vZGFsL01vZGFsRm9vdGVyLnZ1ZSIsIi4uL3NyYy9IZWxwZXJzL1VuaXQvVW5pdC5qcyIsIi4uL3NyYy9Db21wb25lbnRzL0FjdGl2aXR5SW5kaWNhdG9yL1R5cGVzL0Jhc2VUeXBlLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0FjdGl2aXR5SW5kaWNhdG9yL1R5cGVzL0RvdHMudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvQWN0aXZpdHlJbmRpY2F0b3IvVHlwZXMvU3Bpbm5lci52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9BY3Rpdml0eUluZGljYXRvci9BY3Rpdml0eUluZGljYXRvci52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9BY3Rpdml0eUluZGljYXRvci9pbmRleC5qcyIsIi4uL3NyYy9Db21wb25lbnRzL0J0bkFjdGl2aXR5L0J0bkFjdGl2aXR5LnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0J0bkFjdGl2aXR5L2luZGV4LmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvTW9kYWwvTW9kYWxDb250ZW50LnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL01vZGFsL01vZGFsQmFja2Ryb3AudnVlIiwiLi4vc3JjL01peGlucy9UcmlnZ2VyYWJsZS9UcmlnZ2VyYWJsZS5qcyIsIi4uL3NyYy9Db21wb25lbnRzL01vZGFsL01vZGFsLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL01vZGFsL2luZGV4LmpzIiwiLi4vc3JjL0hlbHBlcnMvSW5zdGFudGlhdGUvSW5zdGFudGlhdGUuanMiLCIuLi9zcmMvUGx1Z2lucy9Nb2RhbC9Nb2RhbC5qcyIsIi4uL3NyYy9Db21wb25lbnRzL092ZXJsYXkvT3ZlcmxheUJvZHkudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvQ29udGFpbmVyL0NvbnRhaW5lci52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9Db250YWluZXIvaW5kZXguanMiLCIuLi9zcmMvQ29tcG9uZW50cy9PdmVybGF5L092ZXJsYXlDb250ZW50LnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL092ZXJsYXkvT3ZlcmxheS52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9PdmVybGF5L2luZGV4LmpzIiwiLi4vc3JjL1BsdWdpbnMvT3ZlcmxheS9PdmVybGF5LmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvUG9wb3Zlci9Qb3BvdmVyLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL1BvcG92ZXIvUG9wb3ZlckJvZHkudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvUG9wb3Zlci9Qb3BvdmVySGVhZGVyLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL1BvcG92ZXIvaW5kZXguanMiLCIuLi9zcmMvUGx1Z2lucy9Qb3BvdmVyL1BvcG92ZXIuanMiLCIuLi9zcmMvQ29tcG9uZW50cy9BbGVydC9BbGVydENsb3NlLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0FsZXJ0L0FsZXJ0SGVhZGluZy52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9Qcm9ncmVzc0Jhci9Qcm9ncmVzc0Jhci52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9Qcm9ncmVzc0Jhci9pbmRleC5qcyIsIi4uL3NyYy9Db21wb25lbnRzL0FsZXJ0L0FsZXJ0LnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0FsZXJ0L0FsZXJ0TGluay52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9BbGVydC9pbmRleC5qcyIsIi4uL3NyYy9Db21wb25lbnRzL0JhZGdlL0JhZGdlLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0JhZGdlL2luZGV4LmpzIiwiLi4vc3JjL0h0dHAvUmVxdWVzdC9SZXF1ZXN0T3B0aW9ucy5qcyIsIi4uL3NyYy9IdHRwL1JlcXVlc3QvVHJhbnNmb3JtUmVxdWVzdC5qcyIsIi4uL3NyYy9IdHRwL1JlcXVlc3QvVHJhbnNmb3JtUmVzcG9uc2UuanMiLCIuLi9zcmMvSHR0cC9SZXF1ZXN0L1JlcXVlc3QuanMiLCIuLi9zcmMvSHR0cC9Nb2RlbC9Nb2RlbC5qcyIsIi4uL3NyYy9Db21wb25lbnRzL0Jhc2VGb3JtL0Jhc2VGb3JtLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0Jhc2VGb3JtL2luZGV4LmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvQnJlYWRjcnVtYi9CcmVhZGNydW1iSXRlbS52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9CcmVhZGNydW1iL0JyZWFkY3J1bWIudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvQnJlYWRjcnVtYi9pbmRleC5qcyIsIi4uL3NyYy9NaXhpbnMvU2NyZWVucmVhZGVycy9TY3JlZW5yZWFkZXJzLmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvSGVscFRleHQvSGVscFRleHQudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvSGVscFRleHQvaW5kZXguanMiLCIuLi9zcmMvQ29tcG9uZW50cy9Gb3JtR3JvdXAvRm9ybUdyb3VwLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0Zvcm1Hcm91cC9pbmRleC5qcyIsIi4uL3NyYy9Db21wb25lbnRzL0Zvcm1MYWJlbC9Gb3JtTGFiZWwudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvRm9ybUxhYmVsL2luZGV4LmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvRm9ybUZlZWRiYWNrL0Zvcm1GZWVkYmFjay52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9Gb3JtRmVlZGJhY2svaW5kZXguanMiLCIuLi9zcmMvTWl4aW5zL0Zvcm1Db250cm9sL0Zvcm1Db250cm9sLmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvSW5wdXRGaWVsZC9JbnB1dEZpZWxkLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0lucHV0RmllbGQvaW5kZXguanMiLCIuLi9zcmMvQ29tcG9uZW50cy9GaWxlRmllbGQvRmlsZUZpZWxkLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0ZpbGVGaWVsZC9pbmRleC5qcyIsIi4uL3NyYy9Db21wb25lbnRzL0J0bkZpbGUvQnRuRmlsZS52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9CdG5GaWxlL2luZGV4LmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvQnRuR3JvdXAvQnRuR3JvdXAudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvQnRuR3JvdXAvQnRuR3JvdXBUb2dnbGUudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvQnRuR3JvdXAvQnRuVG9vbGJhci52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9CdG5Hcm91cC9pbmRleC5qcyIsIi4uL3NyYy9IZWxwZXJzL1V1aWQvVXVpZC5qcyIsIi4uL3NyYy9NaXhpbnMvUHJveHkvUHJveHkuanMiLCIuLi9zcmMvQ29tcG9uZW50cy9Ecm9wZG93bk1lbnUvRHJvcGRvd25NZW51SXRlbS52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9Ecm9wZG93bk1lbnUvRHJvcGRvd25NZW51SGVhZGVyLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0Ryb3Bkb3duTWVudS9Ecm9wZG93bk1lbnVEaXZpZGVyLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0Ryb3Bkb3duTWVudS9Ecm9wZG93bk1lbnUudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvRHJvcGRvd25NZW51L2luZGV4LmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvQnRuRHJvcGRvd24vQnRuRHJvcGRvd24udnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvQnRuRHJvcGRvd24vaW5kZXguanMiLCIuLi9zcmMvTWl4aW5zL0hhc1Nsb3RzL0hhc1Nsb3RzLmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvQ2FyZC9DYXJkLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0NhcmQvQ2FyZEJvZHkudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvQ2FyZC9DYXJkQnRuR3JvdXAudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvQ2FyZC9DYXJkRGVjay52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9DYXJkL0NhcmRIZWFkZXIudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvQ2FyZC9DYXJkRm9vdGVyLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0NhcmQvQ2FyZEltZy52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9DYXJkL0NhcmRJbWdUb3AudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvQ2FyZC9DYXJkSW1nQm90dG9tLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0NhcmQvQ2FyZEltZ092ZXJsYXkudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvQ2FyZC9DYXJkTGluay52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9DYXJkL0NhcmRTdWJ0aXRsZS52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9DYXJkL0NhcmRUaXRsZS52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9DYXJkL2luZGV4LmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvUmFkaW9GaWVsZC9SYWRpb0ZpZWxkLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL1JhZGlvRmllbGQvaW5kZXguanMiLCIuLi9zcmMvQ29tcG9uZW50cy9DaGVja2JveEZpZWxkL0NoZWNrYm94RmllbGQudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvQ2hlY2tib3hGaWVsZC9pbmRleC5qcyIsIi4uL3NyYy9Db21wb25lbnRzL0Ryb3B6b25lL0Ryb3B6b25lLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0Ryb3B6b25lL2luZGV4LmpzIiwiLi4vc3JjL0hlbHBlcnMvUmVhZEZpbGUvUmVhZEZpbGUuanMiLCIuLi9zcmMvQ29tcG9uZW50cy9GaWxlUHJldmlldy9GaWxlUHJldmlldy52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9GaWxlUHJldmlldy9pbmRleC5qcyIsIi4uL3NyYy9Db21wb25lbnRzL0Zvcm1Db250cm9sL0Zvcm1Db250cm9sLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0Zvcm1Db250cm9sL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2ludGVyc2VjdGlvbi1vYnNlcnZlci9pbnRlcnNlY3Rpb24tb2JzZXJ2ZXIuanMiLCIuLi9zcmMvQ29tcG9uZW50cy9JbmZpbml0ZVNjcm9sbGluZy9JbmZpbml0ZVNjcm9sbGluZy52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9JbnB1dEdyb3VwL0lucHV0R3JvdXBUZXh0LnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0lucHV0R3JvdXAvSW5wdXRHcm91cEFwcGVuZC52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9JbnB1dEdyb3VwL0lucHV0R3JvdXBQcmVwZW5kLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0lucHV0R3JvdXAvSW5wdXRHcm91cC52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9JbnB1dEdyb3VwL2luZGV4LmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvTGlnaHRTd2l0Y2hGaWVsZC9MaWdodFN3aXRjaEZpZWxkLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0xpZ2h0U3dpdGNoRmllbGQvaW5kZXguanMiLCIuLi9zcmMvQ29tcG9uZW50cy9MaXN0R3JvdXAvTGlzdEdyb3VwSXRlbS52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9MaXN0R3JvdXAvTGlzdEdyb3VwLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0xpc3RHcm91cC9pbmRleC5qcyIsIi4uL3NyYy9Db21wb25lbnRzL05hdmJhci9OYXZiYXJCcmFuZC52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9OYXZiYXIvTmF2YmFyQ29sbGFwc2UudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvTmF2YmFyL05hdmJhclRleHQudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvTmF2YmFyL05hdmJhclRvZ2dsZXJJY29uLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL05hdmJhci9OYXZiYXJUb2dnbGVyLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL05hdmJhci9OYXZiYXIudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uRXJyb3IudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uTGluay52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb25JdGVtLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL05hdmlnYXRpb24vTmF2aWdhdGlvbi52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9OYXZpZ2F0aW9uL05hdmlnYXRpb25Ecm9wZG93bi52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9OYXZpZ2F0aW9uL2luZGV4LmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvTmF2YmFyL05hdmJhck5hdi52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9OYXZiYXIvaW5kZXguanMiLCIuLi9zcmMvQ29tcG9uZW50cy9QYWdpbmF0aW9uL1BhZ2luYXRpb24udnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvUGFnaW5hdGlvbi9pbmRleC5qcyIsIi4uL3NyYy9Db21wb25lbnRzL1NlbGVjdEZpZWxkL1NlbGVjdEZpZWxkLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL1NlbGVjdEZpZWxkL2luZGV4LmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvU2xpZGVEZWNrL1NsaWRlcy52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9TbGlkZURlY2svU2xpZGVEZWNrQ29udHJvbHMudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvU2xpZGVEZWNrL1NsaWRlRGVjay52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9TbGlkZURlY2svaW5kZXguanMiLCIuLi9zcmMvQ29tcG9uZW50cy9UYWJsZVZpZXcvVGFibGVWaWV3SGVhZGVyLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL1RhYmxlVmlldy9UYWJsZS52dWUiLCIuLi9zcmMvSHR0cC9UcmFuc2Zvcm1lci9UcmFuc2Zvcm1lci5qcyIsIi4uL3NyYy9IdHRwL1RhYmxlVmlld1RyYW5zZm9ybWVyL1RhYmxlVmlld1RyYW5zZm9ybWVyLmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvVGFibGVWaWV3L1RhYmxlVmlldy52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9UYWJsZVZpZXcvaW5kZXguanMiLCIuLi9zcmMvQ29tcG9uZW50cy9UZXh0YXJlYUZpZWxkL1RleHRhcmVhRmllbGQudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvVGV4dGFyZWFGaWVsZC9pbmRleC5qcyIsIi4uL3NyYy9Db21wb25lbnRzL1RodW1ibmFpbExpc3QvVGh1bWJuYWlsTGlzdEl0ZW0udnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvVGh1bWJuYWlsTGlzdC9UaHVtYm5haWxMaXN0LnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL1RodW1ibmFpbExpc3QvaW5kZXguanMiLCIuLi9zcmMvQ29tcG9uZW50cy9VcGxvYWRGaWVsZC9VcGxvYWRGaWVsZC52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9VcGxvYWRGaWVsZC9pbmRleC5qcyIsIi4uL3NyYy9Db21wb25lbnRzL1dpemFyZC9XaXphcmRCdXR0b25zLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL1dpemFyZC9XaXphcmRTdGVwLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL1dpemFyZC9XaXphcmRFcnJvci52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9XaXphcmQvV2l6YXJkSGVhZGVyLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL1dpemFyZC9XaXphcmRQcm9ncmVzcy52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9XaXphcmQvV2l6YXJkU3VjY2Vzcy52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9XaXphcmQvV2l6YXJkLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL1dpemFyZC9pbmRleC5qcyIsIi4uL3NyYy9EaXJlY3RpdmVzL0F1dG9ncm93L0F1dG9ncm93LmpzIiwiLi4vc3JjL0RpcmVjdGl2ZXMvQ29sbGFwc2UvQ29sbGFwc2UuanMiLCIuLi9zcmMvRGlyZWN0aXZlcy9TbHVnL1NsdWcuanMiLCIuLi9zcmMvSGVscGVycy9CbG9iL0Jsb2IuanMiLCIuLi9zcmMvSGVscGVycy9FbGFwc2VkL0VsYXBzZWQuanMiLCIuLi9zcmMvSGVscGVycy9TY3JvbGxUby9TY3JvbGxUby5qcyIsIi4uL3NyYy9IZWxwZXJzL1dhaXQvV2FpdC5qcyIsIi4uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24odmFsdWUsIGZvcm1hdCkge1xuICAgIGlmKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBtb21lbnQoU3RyaW5nKHZhbHVlKSkuZm9ybWF0KGZvcm1hdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xufVxuIiwiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbih2YWx1ZSwgZm9ybWF0KSB7XG4gICAgcmV0dXJuIHZhbHVlID8gbW9tZW50KFN0cmluZyh2YWx1ZSkpIDogbnVsbDtcbn1cbiIsImltcG9ydCBEYXRlRmlsdGVyIGZyb20gJy4vRGF0ZUZpbHRlcic7XG5pbXBvcnQgTW9tZW50RmlsdGVyIGZyb20gJy4vTW9tZW50RmlsdGVyJztcblxuZXhwb3J0IHtcbiAgICBEYXRlRmlsdGVyLFxuICAgIE1vbWVudEZpbHRlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oVnVlLCBvcHRpb25zKSB7XG4gICAgVnVlLmZpbHRlcignZGF0ZScsIERhdGVGaWx0ZXIpO1xuICAgIFZ1ZS5maWx0ZXIoJ21vbWVudCcsIE1vbWVudEZpbHRlcik7XG59O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FtZWxDYXNlKHN0cmluZykge1xuICAgIHN0cmluZyA9IHN0cmluZy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyg/OiheLil8KFstX1xcc10rLikpL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgIHJldHVybiBtYXRjaC5jaGFyQXQobWF0Y2gubGVuZ3RoLTEpLnRvVXBwZXJDYXNlKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b0xvd2VyQ2FzZSgpICsgc3RyaW5nLnN1YnN0cmluZygxKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4dGVuZCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oLi4uYXJncyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc051bGwodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGw7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpO1xufVxuIiwiaW1wb3J0IGlzTnVsbCBmcm9tICcuL2lzTnVsbCc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JykgJiYgIWlzTnVsbCh2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpO1xufVxuIiwiaW1wb3J0IGV4dGVuZCBmcm9tICcuL2V4dGVuZCc7XG5pbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdCc7XG5cbi8qKlxuICogRGVlcCBtZXJnZSB0d28gb2JqZWN0cy5cbiAqIEBwYXJhbSB0YXJnZXRcbiAqIEBwYXJhbSAuLi5zb3VyY2VzXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVlcEV4dGVuZCh0YXJnZXQsIC4uLnNvdXJjZXMpIHtcbiAgICBpZiAoIXNvdXJjZXMubGVuZ3RoKSByZXR1cm4gdGFyZ2V0O1xuICAgIGNvbnN0IHNvdXJjZSA9IHNvdXJjZXMuc2hpZnQoKTtcblxuICAgIGlmIChpc09iamVjdCh0YXJnZXQpICYmIGlzT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkgZXh0ZW5kKHRhcmdldCwgeyBba2V5XToge30gfSk7XG4gICAgICAgICAgICAgICAgZGVlcEV4dGVuZCh0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHRlbmQodGFyZ2V0LCB7W2tleV06IHNvdXJjZVtrZXldfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZGVlcEV4dGVuZCh0YXJnZXQsIC4uLnNvdXJjZXMpO1xufVxuIiwiaW1wb3J0IGRlZXBFeHRlbmQgZnJvbSAnLi9kZWVwRXh0ZW5kJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvbmVEZWVwKC4uLmFyZ3MpIHtcbiAgICByZXR1cm4gZGVlcEV4dGVuZCh7fSwgLi4uYXJncyk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykgfHwgKFxuICAgICAgICB2YWx1ZSAmJiB2YWx1ZS50b1N0cmluZyA/IHZhbHVlLnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IE51bWJlcl0nIDogZmFsc2VcbiAgICApO1xufVxuIiwiaW1wb3J0IGlzTnVtYmVyIGZyb20gJy4vaXNOdW1iZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc051bWVyaWModmFsdWUpIHtcbiAgICByZXR1cm4gaXNOdW1iZXIodmFsdWUpIHx8ICEhdmFsdWUgJiYgISF2YWx1ZS50b1N0cmluZygpLm1hdGNoKC9eXFwtP1tcXGQuLF0rJC8pO1xufVxuIiwiaW1wb3J0IGlzTnVtZXJpYyBmcm9tICcuL2lzTnVtZXJpYyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGtleSh2YWx1ZSkge1xuICAgIHJldHVybiBpc051bWVyaWModmFsdWUpID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiB2YWx1ZTtcbn1cbiIsImltcG9ydCBrZXkgZnJvbSAnLi9rZXknO1xuaW1wb3J0IGlzTnVtZXJpYyBmcm9tICcuL2lzTnVtZXJpYyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVhY2goc3ViamVjdCwgZm4pIHtcbiAgICBmb3IoY29uc3QgaSBpbiBzdWJqZWN0KSB7XG4gICAgICAgIGZuKHN1YmplY3RbaV0sIGtleShpKSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHtcbiAgICByZXR1cm4gKGFycmF5ICYmIGFycmF5Lmxlbmd0aCkgPyBhcnJheVswXSA6IHVuZGVmaW5lZDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG59XG4iLCJpbXBvcnQgaXNPYmplY3QgZnJvbSAnLi9pc09iamVjdCc7XG5pbXBvcnQgaXNVbmRlZmluZWQgZnJvbSAnLi9pc1VuZGVmaW5lZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1hdGNoZXMocHJvcGVydGllcykge1xuICAgIHJldHVybiBzdWJqZWN0ID0+IHtcbiAgICAgICAgZm9yKGNvbnN0IGkgaW4gcHJvcGVydGllcykge1xuICAgICAgICAgICAgaWYoaXNPYmplY3QocHJvcGVydGllc1tpXSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3ViamVjdFtpXSA/IG1hdGNoZXMocHJvcGVydGllc1tpXSkoc3ViamVjdFtpXSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoIXN1YmplY3QgfHwgc3ViamVjdFtpXSAhPSBwcm9wZXJ0aWVzW2ldKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn1cbiIsImltcG9ydCBpc0FycmF5IGZyb20gJy4vaXNBcnJheSc7XG5pbXBvcnQgaXNTdHJpbmcgZnJvbSAnLi9pc1N0cmluZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldChvYmplY3QsIHBhdGgpIHtcbiAgICByZXR1cm4gKGlzU3RyaW5nKHBhdGgpID8gcGF0aC5zcGxpdCgnLicpIDogKCFpc0FycmF5KHBhdGgpID8gW3BhdGhdIDogcGF0aCkpLnJlZHVjZSgoYSwgYikgPT4gYVtiXSwgb2JqZWN0KTtcbn1cbiIsImltcG9ydCBnZXQgZnJvbSAnLi9nZXQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9wZXJ0eShwYXRoKSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PiB7XG4gICAgICAgIHJldHVybiBnZXQob2JqZWN0LCBwYXRoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb247XG59XG4iLCJpbXBvcnQgZ2V0IGZyb20gJy4vZ2V0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWF0Y2hlc1Byb3BlcnR5KHBhdGgsIHZhbHVlKSB7XG4gICAgcmV0dXJuIHN1YmplY3QgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0KHN1YmplY3QsIHBhdGgpID09PSB2YWx1ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXknO1xuaW1wb3J0IG1hdGNoZXMgZnJvbSAnLi9tYXRjaGVzJztcbmltcG9ydCBpc09iamVjdCBmcm9tICcuL2lzT2JqZWN0JztcbmltcG9ydCBwcm9wZXJ0eSBmcm9tICcuL3Byb3BlcnR5JztcbmltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbic7XG5pbXBvcnQgbWF0Y2hlc1Byb3BlcnR5IGZyb20gJy4vbWF0Y2hlc1Byb3BlcnR5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlZGljYXRlKHZhbHVlKSB7XG4gICAgaWYoaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gbWF0Y2hlcyh2YWx1ZSk7XG4gICAgfVxuICAgIGVsc2UgaWYoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSBtYXRjaGVzUHJvcGVydHkodmFsdWVbMF0sIHZhbHVlWzFdKTtcbiAgICB9XG4gICAgZWxzZSBpZighaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSBwcm9wZXJ0eSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuIiwiaW1wb3J0IGZpcnN0IGZyb20gJy4vZmlyc3QnO1xuaW1wb3J0IHByZWRpY2F0ZSBmcm9tICcuL3ByZWRpY2F0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmQoc3ViamVjdCwgdmFsdWUpIHtcbiAgICByZXR1cm4gZmlyc3Qoc3ViamVjdC5maWx0ZXIob2JqZWN0ID0+IHByZWRpY2F0ZSh2YWx1ZSkob2JqZWN0KSkpO1xufVxuIiwiaW1wb3J0IGtleSBmcm9tICcuL2tleSc7XG5pbXBvcnQgcHJlZGljYXRlIGZyb20gJy4vcHJlZGljYXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluZEluZGV4KHN1YmplY3QsIHZhbHVlKSB7XG4gICAgZm9yKGNvbnN0IGkgaW4gc3ViamVjdCkge1xuICAgICAgICBpZihwcmVkaWNhdGUodmFsdWUpKHN1YmplY3RbaV0pKSB7XG4gICAgICAgICAgICByZXR1cm4ga2V5KGkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB0cnVlIHx8IHZhbHVlID09PSBmYWxzZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGtlYmFiQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMS0kMicpXG4gICAgICAgIC5yZXBsYWNlKC9cXHMrL2csICctJylcbiAgICAgICAgLnJlcGxhY2UoL1xcXy9nLCAnLScpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xufVxuIiwiaW1wb3J0IGVhY2ggZnJvbSAnLi9lYWNoJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFwS2V5cyhvYmplY3QsIGZuKSB7XG4gICAgY29uc3QgbWFwcGVkID0ge307XG5cbiAgICBlYWNoKG9iamVjdCwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgbWFwcGVkW2ZuKHZhbHVlLCBrZXkpXSA9IHZhbHVlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hcHBlZDtcbn1cbiIsImltcG9ydCBpc0Z1bmN0aW9uIGZyb20gJy4vaXNGdW5jdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5lZ2F0ZShmbikge1xuICAgIHJldHVybiAoLi4uYXJncykgPT4gaXNGdW5jdGlvbihmbikgPyAhZm4oLi4uYXJncykgOiAhZm47XG59XG4iLCJpbXBvcnQgZWFjaCBmcm9tICcuL2VhY2gnO1xuaW1wb3J0IHByZWRpY2F0ZSBmcm9tICcuL3ByZWRpY2F0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBpY2tCeShvYmplY3QsIG1hdGNoKSB7XG4gICAgY29uc3Qgc3ViamVjdCA9IHt9O1xuXG4gICAgZWFjaChvYmplY3QsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGlmKHByZWRpY2F0ZShtYXRjaCkodmFsdWUpKSB7XG4gICAgICAgICAgICBzdWJqZWN0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YmplY3Q7XG59XG4iLCJpbXBvcnQgbmVnYXRlIGZyb20gJy4vbmVnYXRlJztcbmltcG9ydCBwaWNrQnkgZnJvbSAnLi9waWNrQnknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvbWl0Qnkob2JqZWN0LCBmbikge1xuICAgIHJldHVybiBwaWNrQnkob2JqZWN0LCBuZWdhdGUoZm4pKTtcbn1cbiIsImltcG9ydCBrZXkgZnJvbSAnLi9rZXknO1xuaW1wb3J0IHByZWRpY2F0ZSBmcm9tICcuL3ByZWRpY2F0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbW92ZShhcnJheSwgbWF0Y2gpIHtcbiAgICBjb25zdCBpbmRleGVzID0gW107XG5cbiAgICBmb3IoY29uc3QgaSBpbiBhcnJheSkge1xuICAgICAgICBpZihwcmVkaWNhdGUobWF0Y2gpKGFycmF5W2ldKSkge1xuICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGtleShpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKCh2YWx1ZSwgaSkgPT4ge1xuICAgICAgICByZXR1cm4gaW5kZXhlcy5pbmRleE9mKGkpICE9PSAtMTtcbiAgICB9KVxufVxuIiwiaW1wb3J0IGlzRnVuY3Rpb24gZnJvbSAnLi9pc0Z1bmN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd3JhcChzdWJqZWN0LCBmbikge1xuICAgIHJldHVybiB2YWx1ZSA9PiB7XG4gICAgICAgIHJldHVybiBpc0Z1bmN0aW9uKGZuKSA/IGZuKHN1YmplY3QsIHZhbHVlKSA6IHZhbHVlO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyBpc051bGwgfSBmcm9tICcuLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgbWFwS2V5cyB9IGZyb20gJy4uL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc0Jvb2xlYW4gfSBmcm9tICcuLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNVbmRlZmluZWQgfSBmcm9tICcuLi9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVmaXgoc3ViamVjdCwgcHJlZml4LCBkZWxpbWV0ZXIgPSAnLScpIHtcbiAgICBjb25zdCBwcmVmaXhlciA9ICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmluZyA9IChrZXkgfHwgdmFsdWUpXG4gICAgICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKGBeJHtwcmVmaXh9JHtkZWxpbWV0ZXJ9P2ApLCAnJyk7XG5cbiAgICAgICAgcmV0dXJuIFtwcmVmaXgsIHN0cmluZ10uZmlsdGVyKHZhbHVlID0+ICEhdmFsdWUpLmpvaW4oZGVsaW1ldGVyKTtcbiAgICB9XG5cbiAgICBpZihpc0Jvb2xlYW4oc3ViamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIHN1YmplY3Q7XG4gICAgfVxuXG4gICAgaWYoaXNPYmplY3Qoc3ViamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIG1hcEtleXMoc3ViamVjdCwgcHJlZml4ZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVmaXhlcihzdWJqZWN0KTtcbn1cbiIsImltcG9ydCBwcmVmaXggZnJvbSAnLi4vLi4vSGVscGVycy9QcmVmaXgvUHJlZml4JztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHZhcmlhbnQgYXR0cmlidXRlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHZhcmlhbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdwcmltYXJ5J1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICB2YXJpYW50Q2xhc3NQcmVmaXgoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kb3B0aW9ucy5uYW1lO1xuICAgICAgICB9LFxuXG4gICAgICAgIHZhcmlhbnRDbGFzcygpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmVmaXgodGhpcy52YXJpYW50LCB0aGlzLnZhcmlhbnRDbGFzc1ByZWZpeCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIiwiaW1wb3J0IHByZWZpeCBmcm9tICcuLi8uLi9IZWxwZXJzL1ByZWZpeC9QcmVmaXgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2l6ZSBvZiB0aGUgZm9ybSBjb250cm9sXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdtZCcsXG4gICAgICAgICAgICB2YWxpZGF0ZTogdmFsdWUgPT4gWydzbScsICdtZCcsICdsZyddLmluZGV4T2YodmFsdWUpICE9PSAtMVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICBzaXplYWJsZUNsYXNzUHJlZml4KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJG9wdGlvbnMubmFtZTtcbiAgICAgICAgfSxcblxuICAgICAgICBzaXplYWJsZUNsYXNzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCh0aGlzLnNpemUsIHRoaXMuc2l6ZWFibGVDbGFzc1ByZWZpeCk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIiwiaW1wb3J0IHByZWZpeCBmcm9tICcuLi8uLi9IZWxwZXJzL1ByZWZpeCc7XG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgb21pdEJ5IH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgY2FtZWxDYXNlIH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5jb25zdCBDT0xPUlMgPSBbXG4gICAgJ3ByaW1hcnknLFxuICAgICdzZWNvbmRhcnknLFxuICAgICdzdWNjZXNzJyxcbiAgICAnZGFuZ2VyJyxcbiAgICAnd2FybmluZycsXG4gICAgJ2luZm8nLFxuICAgICdsaWdodCcsXG4gICAgJ2RhcmsnLFxuICAgICd3aGl0ZScsXG4gICAgJ211dGVkJ1xuXTtcblxuY29uc3QgcHJvcHMgPSB7fTtcblxuZWFjaChbJ2JvcmRlcicsICd0ZXh0JywgJ2JnJywgJ2JnLWdyYWRpZW50J10sIG5hbWVzcGFjZSA9PiB7XG4gICAgZWFjaChDT0xPUlMsIGNvbG9yID0+IHtcbiAgICAgICAgcHJvcHNbY2FtZWxDYXNlKHByZWZpeChjb2xvciwgbmFtZXNwYWNlKSldID0gQm9vbGVhbjtcbiAgICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBjbGFzc2VzKGluc3RhbmNlLCBuYW1lc3BhY2UpIHtcbiAgICByZXR1cm4gQ09MT1JTLm1hcChjb2xvciA9PiB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZVtjYW1lbENhc2UoY29sb3IgPSBwcmVmaXgoY29sb3IsIG5hbWVzcGFjZSkpXSA/IGNvbG9yIDogbnVsbDtcbiAgICB9KVxuICAgIC5maWx0ZXIodmFsdWUgPT4gISF2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIHByb3BzOiBwcm9wcyxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICB0ZXh0Q29sb3IoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xhc3Nlcyh0aGlzLCAndGV4dCcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGJnQ29sb3IoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xhc3Nlcyh0aGlzLCAnYmcnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBib3JkZXJDb2xvcigpIHtcbiAgICAgICAgICAgIHJldHVybiBjbGFzc2VzKHRoaXMsICdib3JkZXInKTtcbiAgICAgICAgfSxcblxuICAgICAgICBiZ0dyYWRpZW50Q29sb3IoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xhc3Nlcyh0aGlzLCAnYmctZ3JhZGllbnQnKTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgdGV4dENvbG9yQ2xhc3NlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHRDb2xvcigpLmpvaW4oJyAnKS50cmltKCkgfHwgbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICBib3JkZXJDb2xvckNsYXNzZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib3JkZXJDb2xvcigpLmpvaW4oJyAnKS50cmltKCkgfHwgbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICBiZ0NvbG9yQ2xhc3NlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJnQ29sb3IoKS5qb2luKCcgJykudHJpbSgpIHx8IG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmdHcmFkaWVudENvbG9yQ2xhc3NlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJnR3JhZGllbnRDb2xvcigpLmpvaW4oJyAnKS50cmltKCkgfHwgbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICBjb2xvcmFibGVDbGFzc2VzKCkge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IHt9O1xuXG4gICAgICAgICAgICBjbGFzc2VzW3RoaXMudGV4dENvbG9yQ2xhc3Nlc10gPSAhIXRoaXMudGV4dENvbG9yQ2xhc3NlcztcbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy5ib3JkZXJDb2xvckNsYXNzZXNdID0gISF0aGlzLmJvcmRlckNvbG9yQ2xhc3NlcztcbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy5iZ0NvbG9yQ2xhc3Nlc10gPSAhIXRoaXMuYmdDb2xvckNsYXNzZXM7XG4gICAgICAgICAgICBjbGFzc2VzW3RoaXMuYmdHcmFkaWVudENvbG9yQ2xhc3Nlc10gPSAhIXRoaXMuYmdHcmFkaWVudENvbG9yQ2xhc3NlcztcblxuICAgICAgICAgICAgcmV0dXJuIG9taXRCeShjbGFzc2VzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAha2V5IHx8ICF2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiIsImZ1bmN0aW9uIGR1cmF0aW9uKGVsKSB7XG4gICAgY29uc3QgZHVyYXRpb24gPSBnZXRDb21wdXRlZFN0eWxlKGVsKS50cmFuc2l0aW9uRHVyYXRpb247XG4gICAgY29uc3QgbnVtZXJpYyA9IHBhcnNlRmxvYXQoZHVyYXRpb24sIDEwKSB8fCAwO1xuICAgIGNvbnN0IHVuaXQgPSBkdXJhdGlvbi5tYXRjaCgvbT9zLyk7XG5cbiAgICBzd2l0Y2ggKHVuaXRbMF0pIHtcbiAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICByZXR1cm4gbnVtZXJpYyAqIDEwMDA7XG4gICAgICAgIGNhc2UgJ21zJzpcbiAgICAgICAgICAgIHJldHVybiBudW1lcmljO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdHJhbnNpdGlvbihlbCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBkZWxheSA9IGR1cmF0aW9uKGVsKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShkZWxheSlcbiAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICBtZXJnZUNsYXNzZXMoKSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc2VzID0ge307XG5cbiAgICAgICAgICAgIGVhY2goW10uc2xpY2UuY2FsbChhcmd1bWVudHMpLCBhcmcgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGlzT2JqZWN0KGFyZykpIHtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5kKGNsYXNzZXMsIGFyZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYoaXNBcnJheShhcmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXMgPSBjbGFzc2VzLmNvbmNhdChhcmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKGFyZykge1xuICAgICAgICAgICAgICAgICAgICBjbGFzc2VzW2FyZ10gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gY2xhc3NlcztcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iLCI8dGVtcGxhdGU+XG4gICAgPHJvdXRlci1saW5rIHYtaWY9XCJ0b1wiIDp0bz1cInRvXCIgOmRpc2FibGVkPVwiZGlzYWJsZWRcIiA6Y2xhc3M9XCJjbGFzc2VzXCIgQGNsaWNrPVwib25DbGlja1wiIHJvbGU9XCJidXR0b25cIj5cbiAgICAgICAgPHNsb3QvPlxuICAgIDwvcm91dGVyLWxpbms+XG4gICAgPGEgdi1lbHNlLWlmPVwiaHJlZlwiIDpocmVmPVwiaHJlZlwiIDpkaXNhYmxlZD1cImRpc2FibGVkXCIgOmNsYXNzPVwiY2xhc3Nlc1wiIEBjbGljaz1cIm9uQ2xpY2tcIiByb2xlPVwiYnV0dG9uXCI+XG4gICAgICAgIDxzbG90Lz5cbiAgICA8L2E+XG4gICAgPGxhYmVsIHYtZWxzZS1pZj1cImxhYmVsXCIgOmRpc2FibGVkPVwiZGlzYWJsZWRcIiA6Y2xhc3M9XCJjbGFzc2VzXCIgQGNsaWNrPVwib25DbGlja1wiIHJvbGU9XCJidXR0b25cIj5cbiAgICAgICAgPHNsb3QvPlxuICAgIDwvbGFiZWw+XG4gICAgPGJ1dHRvbiB2LWVsc2UgOnR5cGU9XCJ0eXBlXCIgOmRpc2FibGVkPVwiZGlzYWJsZWRcIiA6Y2xhc3M9XCJjbGFzc2VzXCIgQGNsaWNrPVwib25DbGlja1wiPlxuICAgICAgICA8c2xvdC8+XG4gICAgPC9idXR0b24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFZhcmlhbnQgZnJvbSAnLi4vLi4vTWl4aW5zL1ZhcmlhbnQnO1xuaW1wb3J0IFNpemVhYmxlIGZyb20gJy4uLy4uL01peGlucy9TaXplYWJsZSc7XG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL01peGlucy9Db2xvcmFibGUnO1xuaW1wb3J0IHRyYW5zaXRpb24gZnJvbSAnLi4vLi4vSGVscGVycy9UcmFuc2l0aW9uJztcbmltcG9ydCBNZXJnZUNsYXNzZXMgZnJvbSAnLi4vLi4vTWl4aW5zL01lcmdlQ2xhc3Nlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdidG4nLFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIFZhcmlhbnQsXG4gICAgICAgIFNpemVhYmxlLFxuICAgICAgICBDb2xvcmFibGUsXG4gICAgICAgIE1lcmdlQ2xhc3Nlc1xuICAgIF0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNwbGF5IGJ1dHRvbiB3aXRoIGFjdGl2ZSBzdGF0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmU6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc3BsYXkgYnV0dG9uIHdpdGggYmxvY2tlZCBzdGF0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBibG9jazogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGxheSBidXR0b24gd2l0aCBkaXNhYmxlZCBzdGF0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYW4gaHJlZiBpcyBwYXNzZWQsIGJ1dHRvbiBpcyBhbiByb3V0ZXItbGluayBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBocmVmOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3VsZCB1c2UgPGxhYmVsPiBhcyB0aGUgZWxlbWVudCBmb3IgdGhlIGJ1dHRvbi4gVXNlZCBmb3IgaW5wdXRzXG4gICAgICAgICAqIHdyYXBwZXJzICh0b2dnbGVzKS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGxhYmVsOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNwbGF5IGFzIGFuIG91dGxpbmUgYnV0dG9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIG91dGxpbmU6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGFuIHRvIGlzIHBhc3NlZCwgYnV0dG9uIGlzIGFuIHJvdXRlci1saW5rIGVsZW1lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIHRvOiBbT2JqZWN0LCBTdHJpbmddLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHlwZSBhdHRyaWJ1dGUgZm9yIHRoZSBidXR0b24uIE5vdCBhcHBsaWVkIGlmIGFuIGFuY2hvclxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiBTdHJpbmdcblxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgb25DbGljayhldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBldmVudCk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIHZhcmlhbnRDbGFzc1ByZWZpeCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRvcHRpb25zLm5hbWUgKyAodGhpcy5vdXRsaW5lID8gJy1vdXRsaW5lJyA6ICcnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjbGFzc2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVyZ2VDbGFzc2VzKFxuICAgICAgICAgICAgICAgICdidG4nLFxuICAgICAgICAgICAgICAgIHRoaXMudmFyaWFudENsYXNzLFxuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZWFibGVDbGFzcyxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yYWJsZUNsYXNzZXMsXG4gICAgICAgICAgICAgICAgdGhpcy5ibG9jayA/ICdidG4tYmxvY2snIDogJycsXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUgPyAnYWN0aXZlJyA6ICcnXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbkBpbXBvcnQgJy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy5zY3NzJztcbkBpbXBvcnQgJy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucy5zY3NzJztcbkBpbXBvcnQgJy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcblxuQG1peGluIGJ1dHRvbi1ibG9jaygkc2l6ZSkge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oeHMpIHtcbiAgICAuYnRuLXhzLWJsb2NrIHtcbiAgICAgICAgQGluY2x1ZGUgYnV0dG9uLWJsb2NrKHhzKTtcblxuICAgICAgICArIC5idG4teHMtYmxvY2sge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogJGJ0bi1ibG9jay1zcGFjaW5nLXk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihzbSkge1xuICAgIC5idG4tc20tYmxvY2sge1xuICAgICAgICBAaW5jbHVkZSBidXR0b24tYmxvY2soc20pO1xuXG4gICAgICAgICsgLmJ0bi14cy1ibG9jayxcbiAgICAgICAgKyAuYnRuLXNtLWJsb2NrIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6ICRidG4tYmxvY2stc3BhY2luZy15O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obWQpIHtcbiAgICAuYnRuLW1kLWJsb2NrIHtcbiAgICAgICAgQGluY2x1ZGUgYnV0dG9uLWJsb2NrKG1kKTtcblxuICAgICAgICArIC5idG4teHMtYmxvY2ssXG4gICAgICAgICsgLmJ0bi1zbS1ibG9jayxcbiAgICAgICAgKyAuYnRuLW1kLWJsb2NrIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6ICRidG4tYmxvY2stc3BhY2luZy15O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obGcpIHtcbiAgICAuYnRuLWxnLWJsb2NrIHtcbiAgICAgICAgQGluY2x1ZGUgYnV0dG9uLWJsb2NrKGxnKTtcblxuICAgICAgICArIC5idG4teHMtYmxvY2ssXG4gICAgICAgICsgLmJ0bi1zbS1ibG9jayxcbiAgICAgICAgKyAuYnRuLW1kLWJsb2NrLFxuICAgICAgICArIC5idG4tbGctYmxvY2sge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogJGJ0bi1ibG9jay1zcGFjaW5nLXk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bih4bCkge1xuICAgIC5idG4teGwtYmxvY2sge1xuICAgICAgICBAaW5jbHVkZSBidXR0b24tYmxvY2soeGwpO1xuXG4gICAgICAgICsgLmJ0bi14cy1ibG9jayxcbiAgICAgICAgKyAuYnRuLXNtLWJsb2NrLFxuICAgICAgICArIC5idG4tbWQtYmxvY2ssXG4gICAgICAgICsgLmJ0bi1sZy1ibG9jayxcbiAgICAgICAgKyAuYnRuLXhsLWJsb2NrIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6ICRidG4tYmxvY2stc3BhY2luZy15O1xuICAgICAgICB9XG4gICAgfVxufVxuXG48L3N0eWxlPlxuIiwiY29uc3QgTE9BREVEX1NDUklQVFMgPSB7fTtcblxuZnVuY3Rpb24gZWxlbWVudCh1cmwpIHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCB1cmwpO1xuICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9qYXZhc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZSgnY2hhcnNldCcsICd1dGYtOCcpO1xuICAgIHJldHVybiBzY3JpcHQ7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZChzY3JpcHQpIHtcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJykpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2NyaXB0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzY3JpcHQodXJsKSB7XG4gICAgaWYoTE9BREVEX1NDUklQVFNbdXJsXSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIExPQURFRF9TQ1JJUFRTW3VybF07XG4gICAgfVxuICAgIGVsc2UgaWYoTE9BREVEX1NDUklQVFNbdXJsXSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjPVwiJHt1cmx9XCJdYCkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUoTE9BREVEX1NDUklQVFNbdXJsXSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBMT0FERURfU0NSSVBUU1t1cmxdID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXBwZW5kKGVsZW1lbnQodXJsKSkuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKExPQURFRF9TQ1JJUFRTW3VybF0gPSBldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uL0Z1bmN0aW9ucyc7XG5pbXBvcnQgc2NyaXB0IGZyb20gJy4uL1NjcmlwdCc7XG5cbmNvbnN0IFZ1ZUluc3RhbGxlciA9IHtcbiAgICB1c2UsXG4gICAgc2NyaXB0LFxuICAgIHBsdWdpbixcbiAgICBwbHVnaW5zLFxuICAgIGZpbHRlcixcbiAgICBmaWx0ZXJzLFxuICAgIGNvbXBvbmVudCxcbiAgICBjb21wb25lbnRzLFxuICAgIGRpcmVjdGl2ZSxcbiAgICBkaXJlY3RpdmVzLFxuICAgICRwbHVnaW5zOiB7fSxcbiAgICAkZmlsdGVyczoge30sXG4gICAgJGRpcmVjdGl2ZXM6IHt9LFxuICAgICRjb21wb25lbnRzOiB7fSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2UocGx1Z2luKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcbiAgICAgICAgd2luZG93LlZ1ZS51c2UocGx1Z2luKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGx1Z2luO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGx1Z2luKFZ1ZSwgbmFtZSwgZGVmKSB7XG4gICAgaWYoIVZ1ZUluc3RhbGxlci4kcGx1Z2luc1tuYW1lXSkge1xuICAgICAgICBWdWUudXNlKFZ1ZUluc3RhbGxlci4kcGx1Z2luc1tuYW1lXSA9IGRlZik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGx1Z2lucyhWdWUsIHBsdWdpbnMpIHtcbiAgICBlYWNoKHBsdWdpbnMsIChkZWYsIG5hbWUpID0+IHtcbiAgICAgICAgcGx1Z2luKFZ1ZSwgbmFtZSwgZGVmKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihWdWUsIG5hbWUsIGRlZikge1xuICAgIGlmKCFWdWVJbnN0YWxsZXIuJGZpbHRlcnNbbmFtZV0pIHtcbiAgICAgICAgVnVlLnVzZShWdWVJbnN0YWxsZXIuJGZpbHRlcnNbbmFtZV0gPSBkZWYpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcnMoVnVlLCBmaWx0ZXJzKSB7XG4gICAgZWFjaChmaWx0ZXJzLCAoZGVmLCBuYW1lKSA9PiB7XG4gICAgICAgIGZpbHRlcihWdWUsIG5hbWUsIGRlZik7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnQoVnVlLCBuYW1lLCBkZWYpIHtcbiAgICBpZighVnVlSW5zdGFsbGVyLiRjb21wb25lbnRzW25hbWVdKSB7XG4gICAgICAgIFZ1ZS5jb21wb25lbnQobmFtZSwgVnVlSW5zdGFsbGVyLiRjb21wb25lbnRzW25hbWVdID0gZGVmKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRzKFZ1ZSwgY29tcG9uZW50cykge1xuICAgIGVhY2goY29tcG9uZW50cywgKGRlZiwgbmFtZSkgPT4ge1xuICAgICAgICBjb21wb25lbnQoVnVlLCBuYW1lLCBkZWYpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlKFZ1ZSwgbmFtZSwgZGVmKSB7XG4gICAgaWYoIVZ1ZUluc3RhbGxlci4kZGlyZWN0aXZlc1tuYW1lXSkge1xuICAgICAgICBpZihpc0Z1bmN0aW9uKGRlZikpIHtcbiAgICAgICAgICAgIFZ1ZS51c2UoVnVlSW5zdGFsbGVyLiRkaXJlY3RpdmVzW25hbWVdID0gZGVmKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIFZ1ZS5kaXJlY3RpdmUobmFtZSwgZGVmKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZXMoVnVlLCBkaXJlY3RpdmVzKSB7XG4gICAgZWFjaChkaXJlY3RpdmVzLCAoZGVmLCBuYW1lKSA9PiB7XG4gICAgICAgIGRpcmVjdGl2ZShWdWUsIG5hbWUsIGRlZik7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZ1ZUluc3RhbGxlcjtcbiIsImltcG9ydCBCdG4gZnJvbSAnLi9CdG4nO1xuaW1wb3J0IFZ1ZUluc3RhbGxlciBmcm9tICcuLi8uLi9IZWxwZXJzL1Z1ZUluc3RhbGxlci9WdWVJbnN0YWxsZXInO1xuXG5jb25zdCBwbHVnaW4gPSBWdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIEJ0blxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBCdG47XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj48c2xvdC8+PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ21vZGFsLWJvZHknXG5cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIiByb2xlPVwiZG9jdW1lbnRcIj48c2xvdC8+PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ21vZGFsLWRpYWxvZydcblxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGg1IGNsYXNzPVwibW9kYWwtdGl0bGVcIj48c2xvdC8+PC9oNT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnbW9kYWwtdGl0bGUnXG5cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgPHNsb3QgbmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICA8bW9kYWwtdGl0bGU+PHNsb3QvPjwvbW9kYWwtdGl0bGU+XG4gICAgICAgIDwvc2xvdD5cblxuICAgICAgICA8c2xvdCBuYW1lPVwiY2xvc2UtYnV0dG9uXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHYtaWY9XCJjbG9zZWFibGVcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGFyaWEtbGFiZWw9XCJhcmlhTGFiZWxcIiBAY2xpY2s9XCIkZW1pdCgnY2xvc2UnKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9zbG90PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNb2RhbFRpdGxlIGZyb20gJy4vTW9kYWxUaXRsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdtb2RhbC1oZWFkZXInLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBNb2RhbFRpdGxlXG4gICAgfSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgYXJpYUxhYmVsOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnQ2xvc2UnXG4gICAgICAgIH0sXG5cbiAgICAgICAgY2xvc2VhYmxlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj48c2xvdC8+PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ21vZGFsLWZvb3RlcidcblxufVxuPC9zY3JpcHQ+XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihoZWlnaHQpIHtcbiAgICByZXR1cm4gaXNGaW5pdGUoaGVpZ2h0KSA/IGhlaWdodCArICdweCcgOiBoZWlnaHQ7XG59XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImFjdGl2aXR5LWluZGljYXRvclwiIDpjbGFzcz1cImNsYXNzZXNcIj5cbiAgICAgICAgPGRpdiB2LWZvcj1cImkgaW4gbm9kZXNcIj48L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBwcm9wczoge1xuICAgICAgICBub2Rlczoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogM1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9LFxuICAgICAgICBwcmVmaXg6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdhY3Rpdml0eS1pbmRpY2F0b3ItJ1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGNsYXNzZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IHt9O1xuXG4gICAgICAgICAgICBjbGFzc2VzW3RoaXMuJG9wdGlvbnMubmFtZV0gPSAhIXRoaXMuJG9wdGlvbnMubmFtZTtcbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy5wcmVmaXggKyB0aGlzLnNpemUucmVwbGFjZSh0aGlzLnByZWZpeCwgJycpXSA9ICEhdGhpcy5zaXplO1xuXG4gICAgICAgICAgICByZXR1cm4gY2xhc3NlcztcbiAgICAgICAgfVxuICAgIH1cblxufVxuPC9zY3JpcHQ+XG4iLCI8c2NyaXB0PlxuaW1wb3J0IEJhc2VUeXBlIGZyb20gJy4vQmFzZVR5cGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMnLFxuXG4gICAgZXh0ZW5kczogQmFzZVR5cGVcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbkBpbXBvcnQgJy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucy5zY3NzJztcbkBpbXBvcnQgJy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcblxuJGFjdGl2aXR5LWluZGljYXRvci1kb3Qtc2l6ZTogLjZyZW07XG5cbi5hY3Rpdml0eS1pbmRpY2F0b3ItZG90cyB7XG5cbiAgICAmID4gZGl2IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS05MDA7XG4gICAgICAgIHdpZHRoOiAkYWN0aXZpdHktaW5kaWNhdG9yLWRvdC1zaXplO1xuICAgICAgICBoZWlnaHQ6ICRhY3Rpdml0eS1pbmRpY2F0b3ItZG90LXNpemU7XG4gICAgICAgIGFuaW1hdGlvbjogYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xuICAgIH1cblxuICAgICYgPiBkaXY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogJGFjdGl2aXR5LWluZGljYXRvci1kb3Qtc2l6ZSAqIC4zMztcbiAgICB9XG5cbiAgICAmLmFjdGl2aXR5LWluZGljYXRvci14cyA+IGRpdiB7XG4gICAgICAgIHdpZHRoOiAkYWN0aXZpdHktaW5kaWNhdG9yLWRvdC1zaXplICogLjU7XG4gICAgICAgIGhlaWdodDogJGFjdGl2aXR5LWluZGljYXRvci1kb3Qtc2l6ZSAqIC41O1xuICAgIH1cblxuICAgICYuYWN0aXZpdHktaW5kaWNhdG9yLXNtID4gZGl2IHtcbiAgICAgICAgd2lkdGg6ICRhY3Rpdml0eS1pbmRpY2F0b3ItZG90LXNpemUgKiAuNzU7XG4gICAgICAgIGhlaWdodDogJGFjdGl2aXR5LWluZGljYXRvci1kb3Qtc2l6ZSAqIC43NTtcbiAgICB9XG5cbiAgICAmLmFjdGl2aXR5LWluZGljYXRvci1tZCA+IGRpdiB7XG4gICAgICAgIHdpZHRoOiAkYWN0aXZpdHktaW5kaWNhdG9yLWRvdC1zaXplICogMTtcbiAgICAgICAgaGVpZ2h0OiAkYWN0aXZpdHktaW5kaWNhdG9yLWRvdC1zaXplICogMTtcbiAgICB9XG5cbiAgICAmLmFjdGl2aXR5LWluZGljYXRvci1sZyA+IGRpdiB7XG4gICAgICAgIHdpZHRoOiAkYWN0aXZpdHktaW5kaWNhdG9yLWRvdC1zaXplICogMS41O1xuICAgICAgICBoZWlnaHQ6ICRhY3Rpdml0eS1pbmRpY2F0b3ItZG90LXNpemUgKiAxLjU7XG4gICAgfVxuXG4gICAgJi5hY3Rpdml0eS1pbmRpY2F0b3IteGwgPiBkaXYge1xuICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1kb3Qtc2l6ZSAqIDI7XG4gICAgICAgIGhlaWdodDogJGFjdGl2aXR5LWluZGljYXRvci1kb3Qtc2l6ZSAqIDI7XG4gICAgfVxuXG4gICAgQGZvciAkaSBmcm9tIDAgdGhyb3VnaCAxMiB7XG4gICAgICAgICYgPiBkaXY6bnRoLWNoaWxkKCN7JGkgKyAxfSkge1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAkaSAqIC4xNnM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGFjdGl2aXR5LWluZGljYXRvci1kb3RzIHtcbiAgICAgICAgMCUsIDgwJSwgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB9IDQwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMge1xuICAgICY6bm90KC5idG4td2FybmluZykgLmFjdGl2aXR5LWluZGljYXRvci1kb3RzID4gZGl2IHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgfVxufVxuXG48L3N0eWxlPlxuIiwiPHNjcmlwdD5cbmltcG9ydCBCYXNlVHlwZSBmcm9tICcuL0Jhc2VUeXBlJztcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uLy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2FjdGl2aXR5LWluZGljYXRvci1zcGlubmVyJyxcblxuICAgIGV4dGVuZHM6IEJhc2VUeXBlLFxuXG4gICAgcHJvcHM6IGV4dGVuZCh7fSwgQmFzZVR5cGUucHJvcHMsIHtcbiAgICAgICAgbm9kZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEyXG4gICAgICAgIH1cbiAgICB9KVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCAnLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zLnNjc3MnO1xuQGltcG9ydCAnLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xuXG4kYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMi4yNTtcbiRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci13aWR0aDogMTAlO1xuJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLWhlaWdodDogMzAlO1xuJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLWRlbGF5OiAxcztcblxuQG1peGluIHNwaW5uZXItcm90YXRlLXNlbGVjdG9ycygkc3RhcnQ6MSwgJGVuZDoxNiwgJGRlbGF5OjEuMnMpIHtcbiAgICBAZm9yICRpIGZyb20gJHN0YXJ0IHRocm91Z2ggJGVuZCB7XG4gICAgICAgICYgPiBkaXY6Zmlyc3QtY2hpbGQ6bnRoLWxhc3QtY2hpbGQoI3skaX0pLFxuICAgICAgICAmID4gZGl2OmZpcnN0LWNoaWxkOm50aC1sYXN0LWNoaWxkKCN7JGl9KSB+IGRpdiB7XG4gICAgICAgICAgICBAaW5jbHVkZSBzcGlubmVyLXJvdGF0ZS10cmFuc2Zvcm0oJGksICRkZWxheSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiBzcGlubmVyLXJvdGF0ZS10cmFuc2Zvcm0oJHRvdGFsLCAkZGVsYXk6MS4ycykge1xuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJHRvdGFsIHtcbiAgICAgICAgJjpudGgtY2hpbGQoI3skaX0pIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKCN7MzYwIC8gJHRvdGFsICogJGl9ZGVnKTtcblxuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLSN7JGRlbGF5IC0gKCRkZWxheSAvICR0b3RhbCAqICgkaSAtIDEpKX07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItc2l6ZTtcbiAgICBoZWlnaHQ6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1zaXplO1xuXG4gICAgJiA+IGRpdiAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcblxuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS05MDA7XG4gICAgICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXdpZHRoO1xuICAgICAgICAgICAgaGVpZ2h0OiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItaGVpZ2h0O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItZGVsYXkgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuYWN0aXZpdHktaW5kaWNhdG9yLXhzIHtcbiAgICAgICAgd2lkdGg6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1zaXplICogLjU7XG4gICAgICAgIGhlaWdodDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXNpemUgKiAuNTtcbiAgICB9XG4gICAgJi5hY3Rpdml0eS1pbmRpY2F0b3Itc20ge1xuICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXNpemUgKiAuNzU7XG4gICAgICAgIGhlaWdodDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXNpemUgKiAuNzU7XG4gICAgfVxuICAgICYuYWN0aXZpdHktaW5kaWNhdG9yLW1kIHtcbiAgICAgICAgd2lkdGg6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1zaXplICogMTtcbiAgICAgICAgaGVpZ2h0OiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItc2l6ZSAqIDE7XG4gICAgfVxuICAgICYuYWN0aXZpdHktaW5kaWNhdG9yLWxnIHtcbiAgICAgICAgd2lkdGg6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1zaXplICogMS41O1xuICAgICAgICBoZWlnaHQ6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1zaXplICogMS41O1xuICAgIH1cbiAgICAmLmFjdGl2aXR5LWluZGljYXRvci14bCB7XG4gICAgICAgIHdpZHRoOiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItc2l6ZSAqIDI7XG4gICAgICAgIGhlaWdodDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXNpemUgKiAyO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHNwaW5uZXItcm90YXRlLXNlbGVjdG9ycygxLCAxMiwgJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLWRlbGF5KTtcblxuICAgIEBrZXlmcmFtZXMgYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXIge1xuICAgICAgICAwJSwgMzklLCAxMDAlIHsgb3BhY2l0eTogMDsgfVxuICAgICAgICA0MCUgeyBvcGFjaXR5OiAxOyB9XG4gICAgfVxufVxuXG4uYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAmOm5vdCguYnRuLXdhcm5pbmcpIC5hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciA+IGRpdjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG59XG5cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiB2LWlmPVwiY2VudGVyXCIgY2xhc3M9XCJjZW50ZXItd3JhcHBlclwiIDpjbGFzcz1cInsncG9zaXRpb24tcmVsYXRpdmUnOiByZWxhdGl2ZSwgJ3Bvc2l0aW9uLWZpeGVkJzogZml4ZWR9XCIgOnN0eWxlPVwic3R5bGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlci1jb250ZW50IGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxjb21wb25lbnQgOmlzPVwiY29tcG9uZW50XCIgOnNpemU9XCJzaXplXCIgOnByZWZpeD1cInByZWZpeFwiLz5cbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImxhYmVsXCIgdi1odG1sPVwibGFiZWxcIiBjbGFzcz1cImFjdGl2aXR5LWluZGljYXRvci1sYWJlbFwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4ganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIiA6c3R5bGU9XCJzdHlsZVwiPlxuICAgICAgICA8Y29tcG9uZW50IDppcz1cImNvbXBvbmVudFwiIDpzaXplPVwic2l6ZVwiIDpwcmVmaXg9XCJwcmVmaXhcIi8+XG4gICAgICAgIDxkaXYgdi1pZj1cImxhYmVsXCIgdi1odG1sPVwibGFiZWxcIiBjbGFzcz1cImFjdGl2aXR5LWluZGljYXRvci1sYWJlbFwiLz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgdW5pdCBmcm9tICcuLi8uLi9IZWxwZXJzL1VuaXQnO1xuaW1wb3J0IEJhc2VUeXBlIGZyb20gJy4vVHlwZXMvQmFzZVR5cGUnO1xuaW1wb3J0IEFjdGl2aXR5SW5kaWNhdG9yRG90cyBmcm9tICcuL1R5cGVzL0RvdHMnO1xuaW1wb3J0IHsga2ViYWJDYXNlIH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IEFjdGl2aXR5SW5kaWNhdG9yU3Bpbm5lciBmcm9tICcuL1R5cGVzL1NwaW5uZXInO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnYWN0aXZpdHktaW5kaWNhdG9yJyxcblxuICAgIGV4dGVuZHM6IEJhc2VUeXBlLFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICBjZW50ZXI6IEJvb2xlYW4sXG5cbiAgICAgICAgZml4ZWQ6IEJvb2xlYW4sXG5cbiAgICAgICAgbGFiZWw6IFN0cmluZyxcblxuICAgICAgICByZWxhdGl2ZTogQm9vbGVhbixcblxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnZG90cydcbiAgICAgICAgfSxcblxuICAgICAgICBoZWlnaHQ6IFtTdHJpbmcsIE51bWJlcl0sXG5cbiAgICAgICAgbWF4SGVpZ2h0OiBbU3RyaW5nLCBOdW1iZXJdLFxuXG4gICAgICAgIG1pbkhlaWdodDogW1N0cmluZywgTnVtYmVyXSxcblxuICAgICAgICB3aWR0aDogW1N0cmluZywgTnVtYmVyXSxcblxuICAgICAgICBtYXhXaWR0aDogW1N0cmluZywgTnVtYmVyXSxcblxuICAgICAgICBtaW5XaWR0aDogW1N0cmluZywgTnVtYmVyXVxuXG4gICAgfSxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgQWN0aXZpdHlJbmRpY2F0b3JEb3RzLFxuICAgICAgICBBY3Rpdml0eUluZGljYXRvclNwaW5uZXJcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICBzdHlsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHVuaXQodGhpcy53aWR0aCksXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6IHVuaXQodGhpcy5tYXhXaWR0aCksXG4gICAgICAgICAgICAgICAgbWluV2lkdGg6IHVuaXQodGhpcy5taW5XaWR0aCksXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB1bml0KHRoaXMuaGVpZ2h0KSxcbiAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IHVuaXQodGhpcy5tYXhIZWlnaHQpLFxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogdW5pdCh0aGlzLm1pbkhlaWdodClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wb25lbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4ga2ViYWJDYXNlKHRoaXMucHJlZml4ICsgdGhpcy50eXBlLnJlcGxhY2UodGhpcy5wcmVmaXgsICcnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5jZW50ZXItd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5jZW50ZXItY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IC01MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSlcbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgQWN0aXZpdHlJbmRpY2F0b3IgZnJvbSAnLi9BY3Rpdml0eUluZGljYXRvcic7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJy4uLy4uL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgQWN0aXZpdHlJbmRpY2F0b3JcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aXZpdHlJbmRpY2F0b3I7XG4iLCI8dGVtcGxhdGU+XG4gICAgPGJ1dHRvbiA6dHlwZT1cInR5cGVcIiBjbGFzcz1cImJ0blwiIDpjbGFzcz1cImNsYXNzZXNcIiBAY2xpY2s9XCJvbkNsaWNrXCI+XG4gICAgICAgIDxpIHYtaWY9XCJpY29uXCIgOmNsYXNzPVwiaWNvblwiLz4ge3tsYWJlbH19XG4gICAgICAgIDxzbG90Lz5cbiAgICAgICAgPGFjdGl2aXR5LWluZGljYXRvciA6dHlwZT1cImluZGljYXRvclwiIC8+XG4gICAgPC9idXR0b24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEFjdGl2aXR5SW5kaWNhdG9yIGZyb20gJy4uL0FjdGl2aXR5SW5kaWNhdG9yJztcblxuY29uc3QgY29udmVydEFuaW1hdGlvbkRlbGF5VG9JbnQgPSBmdW5jdGlvbihkZWxheSkge1xuICAgIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQoZGVsYXksIDEwKTtcbiAgICBjb25zdCBtYXRjaGVzID0gZGVsYXkubWF0Y2goL20/cy8pO1xuICAgIGNvbnN0IHVuaXQgPSBtYXRjaGVzID8gbWF0Y2hlc1swXSA6IGZhbHNlO1xuXG4gICAgbGV0IG1pbGxpc2Vjb25kcztcblxuICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICBjYXNlIFwic1wiOiAvLyBzZWNvbmRzXG4gICAgICAgICAgICBtaWxsaXNlY29uZHMgPSBudW0gKiAxMDAwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJtc1wiOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbWlsbGlzZWNvbmRzID0gbnVtO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pbGxpc2Vjb25kcyB8fCAwO1xufTtcblxuY29uc3QgYW5pbWF0ZWQgPSBmdW5jdGlvbihlbCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBkZWZhdWx0VmlldyA9IChlbC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50KS5kZWZhdWx0VmlldztcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjYWxsYmFjay5hcHBseSgpO1xuICAgIH0sIGNvbnZlcnRBbmltYXRpb25EZWxheVRvSW50KGRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoZWwpLmFuaW1hdGlvbkR1cmF0aW9uKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnYWN0aXZpdHktYnV0dG9uJyxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgQWN0aXZpdHlJbmRpY2F0b3JcbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFrZSB0aGUgYnV0dG9uIGFwcGVhciB3aXRoIHRoZSBhY3RpdmUgc3RhdGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhfW59XG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmU6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3cgdGhlIGFjdGl2aXR5IGluZGljYXRvciBpbnNpZGUgdGhlIGJ1dHRvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IHtCb29sZWF9bn1cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2aXR5OiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNwbGF5IHRoZSBidXR0b24gYXMgYmxvY2sgd2lkdGguXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhfW59XG4gICAgICAgICAqL1xuICAgICAgICBibG9jazogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFrZSB0aGUgYnV0dG9uIGFwcGVhciB3aXRoIHRoZSBkaXNhYmxlZCBzdGF0ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IHtCb29sZWF9bn1cbiAgICAgICAgICovXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYnV0dG9uIGxhYmVsLiBJZiBub3QgcGFzc2VkIGFzIGEgcHJvcGVydHksIGxhYmVsIG11c3QgYmUgcGFzc2VkXG4gICAgICAgICAqIGluc2lkZSB0aGUgZWxlbWVudCdzIGh0bWwuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7U3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgbGFiZWw6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGJ1dHRvbiBpY29uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7U3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgaWNvbjogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYHR5cGVgIGF0dHJpYnV0ZSBmb3IgdGhlIGJ1dHRvbiBlbGVtZW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkge1N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHR5cGU6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHNpemUgb2YgdGhlIGJ1dHRvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IHtTdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnbWQnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2YXJpYW50IG9mIHRoZSBidXR0b24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7U3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyaWFudDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ3ByaW1hcnknXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0eXBlIG9mIGFjdGl2aXR5IGluZGljYXRvciBpbnNpZGUgdGhlIGJ1dHRvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IHtTdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICBpbmRpY2F0b3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdzcGlubmVyJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgb3JpZW50YXRpb24gb2YgdGhlIGFjdGl2aXR5IGJ1dHRvbiBpbnNpZGUgdGhlIGJ1dHRvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IHtTdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICBvcmllbnRhdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ3JpZ2h0J1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzYWJsZSB0aGUgYnV0dG9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGRpc2FibGUoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuYWJsZSB0aGUgYnV0dG9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGVuYWJsZSgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3cgdGhlIGFjdGl2aXR5IGluZGljYXRvciBpbnNpZGUgdGhlIGJ1dHRvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBzaG93QWN0aXZpdHkoKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcblxuICAgICAgICAgICAgYW5pbWF0ZWQodGhpcy4kZWwsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbC5jbGFzc0xpc3QuYWRkKCdidG4tYWN0aXZpdHknKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdhY3Rpdml0eTpzaG93Jyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSGlkZSB0aGUgYWN0aXZpdHkgaW5kaWNhdG9yIGluc2lkZSB0aGUgYnV0dG9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGhpZGVBY3Rpdml0eSgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVsLmNsYXNzTGlzdC5hZGQoJ2J0bi1oaWRlLWFjdGl2aXR5Jyk7XG5cbiAgICAgICAgICAgIGFuaW1hdGVkKHRoaXMuJGVsLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZpdHknLCAnYnRuLWhpZGUtYWN0aXZpdHknKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdhY3Rpdml0eTpoaWRlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNsaWNrIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgb25DbGljayhldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBldmVudCk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBvYmplY3Qgb2YgY2xhc3NlcyB0byBhcHBlbmQgdG8gdGhlIGJ1dHRvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc2VzKCkge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICAgICAgICAgICAnZGlzYWJsZWQnOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICdhY3RpdmUnOiB0aGlzLmFjdGl2ZSxcbiAgICAgICAgICAgICAgICAnYnRuLWJsb2NrJzogdGhpcy5ibG9jayxcbiAgICAgICAgICAgICAgICAnYnRuLWFjdGl2aXR5JzogdGhpcy5hY3Rpdml0eVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY2xhc3Nlc1snYnRuLScgKyB0aGlzLnNpemUucmVwbGFjZSgnYnRuLScsICcnKV0gPSAhIXRoaXMuc2l6ZTtcbiAgICAgICAgICAgIGNsYXNzZXNbJ2J0bi0nICsgdGhpcy52YXJpYW50LnJlcGxhY2UoJ2J0bi0nLCAnJyldID0gISF0aGlzLnZhcmlhbnQ7XG4gICAgICAgICAgICBjbGFzc2VzWydidG4tYWN0aXZpdHktJyArIHRoaXMub3JpZW50YXRpb24ucmVwbGFjZSgnYnRuLWFjdGl2aXR5LScsICcnKV0gPSAhIXRoaXMub3JpZW50YXRpb247XG4gICAgICAgICAgICBjbGFzc2VzWydidG4tYWN0aXZpdHktaW5kaWNhdG9yLScgKyB0aGlzLmluZGljYXRvci5yZXBsYWNlKCdidG4tYWN0aXZpdHktaW5kaWNhdG9yLScsICcnKV0gPSAhIXRoaXMuaW5kaWNhdG9yO1xuXG4gICAgICAgICAgICByZXR1cm4gY2xhc3NlcztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuXG4gICAgICAgIGFjdGl2aXR5KHZhbHVlKSB7XG4gICAgICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0FjdGl2aXR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVBY3Rpdml0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbkBpbXBvcnQgJy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucy5zY3NzJztcbkBpbXBvcnQgJy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcblxuLy8gQWN0aXZpdHkgSW5kaWNhdG9yIHZhcmlhYmxlc1xuJGFjdGl2aXR5LWluZGljYXRvci1hbmltYXRlZC1kZWxheS1pbjogMzMzbXM7XG4kYWN0aXZpdHktaW5kaWNhdG9yLWFuaW1hdGVkLWRlbGF5LW91dDogMzMzbXM7XG5cbiRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAyLjI1O1xuJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXdpZHRoOiAxMCU7XG4kYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItaGVpZ2h0OiAzMCU7XG4kYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItZGVsYXk6IDFzO1xuXG5Aa2V5ZnJhbWVzIGJ0bi1hY3Rpdml0eS1pbiB7XG4gICAgMCUsIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH0gMzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOTgpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBidG4tYWN0aXZpdHktb3V0IHtcbiAgICAwJSwgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfSA3MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC45OCk7XG4gICAgfVxufVxuXG4vLyBBY3Rpdml0eSBJbmRpY2F0b3IgQnV0dG9uXG4uYnRuLWFjdGl2aXR5LXRvcCxcbi5idG4tYWN0aXZpdHktYm90dG9tLFxuLmJ0bi1hY3Rpdml0eS1sZWZ0LFxuLmJ0bi1hY3Rpdml0eS1yaWdodCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IHBhZGRpbmcgKCRhY3Rpdml0eS1pbmRpY2F0b3ItYW5pbWF0ZWQtZGVsYXktaW4gLyAyKSBlYXNlLWluO1xuXG4gICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJGFjdGl2aXR5LWluZGljYXRvci1hbmltYXRlZC1kZWxheS1vdXQgZWFzZS1pbjtcbiAgICB9XG59XG5cbi5idG4tYWN0aXZpdHktdG9wIC5hY3Rpdml0eS1pbmRpY2F0b3IsXG4uYnRuLWFjdGl2aXR5LWJvdHRvbSAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbi5idG4tYWN0aXZpdHktbGVmdCAuYWN0aXZpdHktaW5kaWNhdG9yLFxuLmJ0bi1hY3Rpdml0eS1yaWdodCAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICB0b3A6IDUwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAtNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmJ0bi1hY3Rpdml0eTpub3QoLmJ0bi1saW5rKSB7XG4gICAgYW5pbWF0aW9uOiBidG4tYWN0aXZpdHktaW4gJGFjdGl2aXR5LWluZGljYXRvci1hbmltYXRlZC1kZWxheS1pbjtcbn1cbi5idG4taGlkZS1hY3Rpdml0eTpub3QoLmJ0bi1saW5rKSB7XG4gICAgYW5pbWF0aW9uOiBidG4tYWN0aXZpdHktb3V0ICRhY3Rpdml0eS1pbmRpY2F0b3ItYW5pbWF0ZWQtZGVsYXktb3V0O1xufVxuXG4uYnRuLWFjdGl2aXR5IHtcblxuICAgICYuYnRuLWhpZGUtYWN0aXZpdHkgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cblxuICAgICYuYnRuLW91dGxpbmUtcHJpbWFyeS5idG4tYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXIgLmFjdGl2aXR5LWluZGljYXRvciA+IGRpdjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbiAgICB9XG4gICAgJi5idG4tb3V0bGluZS1zZWNvbmRhcnkuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIC5hY3Rpdml0eS1pbmRpY2F0b3IgPiBkaXY6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHN1Y2Nlc3M7XG4gICAgfVxuICAgICYuYnRuLW91dGxpbmUtZGFuZ2VyLmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciAuYWN0aXZpdHktaW5kaWNhdG9yID4gZGl2OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYW5nZXI7XG4gICAgfVxuICAgICYuYnRuLW91dGxpbmUtc3VjY2Vzcy5idG4tYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXIgLmFjdGl2aXR5LWluZGljYXRvciA+IGRpdjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VjY2VzcztcbiAgICB9XG4gICAgJi5idG4tb3V0bGluZS13YXJuaW5nLmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciAuYWN0aXZpdHktaW5kaWNhdG9yID4gZGl2OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3YXJuaW5nO1xuICAgIH1cbiAgICAmLmJ0bi1vdXRsaW5lLWluZm8uYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIC5hY3Rpdml0eS1pbmRpY2F0b3IgPiBkaXY6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGluZm87XG4gICAgfVxuICAgICYuYnRuLW91dGxpbmUtbGluay5idG4tYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXIgLmFjdGl2aXR5LWluZGljYXRvciA+IGRpdjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGluay1jb2xvcjtcbiAgICB9XG5cbiAgICAmLmJ0bi14cyB7XG4gICAgICAgICYuYnRuLWFjdGl2aXR5LXRvcC5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6ICRmb250LXNpemUtYmFzZSAqIDEuMjU7XG5cbiAgICAgICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgdG9wOiAkZm9udC1zaXplLWJhc2UgKiAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LWJvdHRvbS5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206ICRmb250LXNpemUtYmFzZSAqIDEuMjU7XG5cbiAgICAgICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAkZm9udC1zaXplLWJhc2UgKiAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LWxlZnQuYnRuLWFjdGl2aXR5LWluZGljYXRvci1kb3RzIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogJGZvbnQtc2l6ZS1iYXNlICogMi4zMztcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAkZm9udC1zaXplLWJhc2UgKiAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LXJpZ2h0LmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3ItZG90cyB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAkZm9udC1zaXplLWJhc2UgKiAyLjMzO1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAkZm9udC1zaXplLWJhc2UgKiAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LWluZGljYXRvci1kb3RzIC5hY3Rpdml0eS1pbmRpY2F0b3IgPiBkaXYsXG4gICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvci1kb3RzID4gZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiAkZm9udC1zaXplLWJhc2UgLyAzO1xuICAgICAgICAgICAgaGVpZ2h0OiAkZm9udC1zaXplLWJhc2UgLyAzO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktdG9wLmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogJGZvbnQtc2l6ZS1iYXNlICogMS42NjtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICB0b3A6ICRmb250LXNpemUtYmFzZSAqIC4yNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LWJvdHRvbS5idG4tYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXIge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206ICRmb250LXNpemUtYmFzZSAqIDEuNjY7XG5cbiAgICAgICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAkZm9udC1zaXplLWJhc2UgKiAuMjU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1hY3Rpdml0eS1sZWZ0LmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6ICRmb250LXNpemUtYmFzZSAqIDEuNjY7XG5cbiAgICAgICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgbGVmdDogJGZvbnQtc2l6ZS1iYXNlICogLjI1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktcmlnaHQuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6ICRmb250LXNpemUtYmFzZSAqIDEuNjY7XG5cbiAgICAgICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6ICRmb250LXNpemUtYmFzZSAqIC4yNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIC5hY3Rpdml0eS1pbmRpY2F0b3IsXG4gICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAkZm9udC1zaXplLWJhc2UgKiAxO1xuICAgICAgICAgICAgaGVpZ2h0OiAkZm9udC1zaXplLWJhc2UgKiAxO1xuXG4gICAgICAgICAgICAmID4gZGl2OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgLy93aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXdpZHRoICogLjYzO1xuICAgICAgICAgICAgICAgIC8vaGVpZ2h0OiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItaGVpZ2h0ICogLjY2O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItd2lkdGggKiAuODQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItaGVpZ2h0ICogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuYnRuLXNtIHtcbiAgICAgICAgJi5idG4tYWN0aXZpdHktdG9wLmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3ItZG90cyB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogJGZvbnQtc2l6ZS1iYXNlICogMS43NTtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICB0b3A6ICRmb250LXNpemUtYmFzZSAqIC41O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktYm90dG9tLmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3ItZG90cyB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJGZvbnQtc2l6ZS1iYXNlICogMS43NTtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICBib3R0b206ICRmb250LXNpemUtYmFzZSAqIC41O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktbGVmdC5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAkZm9udC1zaXplLWJhc2UgKiAzO1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIGxlZnQ6ICRmb250LXNpemUtYmFzZSAqIC41O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktcmlnaHQuYnRuLWFjdGl2aXR5LWluZGljYXRvci1kb3RzIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6ICRmb250LXNpemUtYmFzZSAqIDM7XG5cbiAgICAgICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6ICRmb250LXNpemUtYmFzZSAqIC41O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMgLmFjdGl2aXR5LWluZGljYXRvciA+IGRpdixcbiAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMgPiBkaXYge1xuICAgICAgICAgICAgd2lkdGg6ICRmb250LXNpemUtYmFzZSAvIDI7XG4gICAgICAgICAgICBoZWlnaHQ6ICRmb250LXNpemUtYmFzZSAvIDI7XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1hY3Rpdml0eS10b3AuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAkZm9udC1zaXplLWJhc2UgKiAyO1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIHRvcDogJGZvbnQtc2l6ZS1iYXNlICogLjMzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktYm90dG9tLmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJGZvbnQtc2l6ZS1iYXNlICogMjtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICBib3R0b206ICRmb250LXNpemUtYmFzZSAqIC4zMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LWxlZnQuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogJGZvbnQtc2l6ZS1iYXNlICogMi41O1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIGxlZnQ6ICRmb250LXNpemUtYmFzZSAqIC41O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktcmlnaHQuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6ICRmb250LXNpemUtYmFzZSAqIDIuNTtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICByaWdodDogJGZvbnQtc2l6ZS1iYXNlICogLjU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciAuYWN0aXZpdHktaW5kaWNhdG9yLFxuICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciB7XG4gICAgICAgICAgICB3aWR0aDogJGZvbnQtc2l6ZS1iYXNlICogMS41O1xuICAgICAgICAgICAgaGVpZ2h0OiAkZm9udC1zaXplLWJhc2UgKiAxLjU7XG5cbiAgICAgICAgICAgICYgPiBkaXY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXdpZHRoICogLjU2O1xuICAgICAgICAgICAgICAgIGhlaWdodDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLWhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5idG4teHMpOm5vdCguYnRuLXNtKTpub3QoLmJ0bi1tZCk6bm90KC5idG4tbGcpOm5vdCguYnRuLXhsKSxcbiAgICAmLmJ0bi1tZCB7XG4gICAgICAgICYuYnRuLWFjdGl2aXR5LXRvcC5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6ICRmb250LXNpemUtYmFzZSAqIDI7XG5cbiAgICAgICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgdG9wOiAkZm9udC1zaXplLWJhc2UgKiAuNjY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1hY3Rpdml0eS1ib3R0b20uYnRuLWFjdGl2aXR5LWluZGljYXRvci1kb3RzIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAkZm9udC1zaXplLWJhc2UgKiAyO1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIGJvdHRvbTogJGZvbnQtc2l6ZS1iYXNlICogLjY2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktbGVmdC5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAkZm9udC1zaXplLWJhc2UgKiA0O1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIGxlZnQ6ICRmb250LXNpemUtYmFzZSAqIC41O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktcmlnaHQuYnRuLWFjdGl2aXR5LWluZGljYXRvci1kb3RzIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6ICRmb250LXNpemUtYmFzZSAqIDQ7XG5cbiAgICAgICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6ICRmb250LXNpemUtYmFzZSAqIC41O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMgLmFjdGl2aXR5LWluZGljYXRvciA+IGRpdixcbiAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMgPiBkaXYge1xuICAgICAgICAgICAgd2lkdGg6ICRmb250LXNpemUtYmFzZSAvIDEuMjU7XG4gICAgICAgICAgICBoZWlnaHQ6ICRmb250LXNpemUtYmFzZSAvIDEuMjU7XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1hY3Rpdml0eS10b3AuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAkZm9udC1zaXplLWJhc2UgKiAyLjc1O1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIHRvcDogJGZvbnQtc2l6ZS1iYXNlICogLjMzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktYm90dG9tLmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJGZvbnQtc2l6ZS1iYXNlICogMi43NTtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICBib3R0b206ICRmb250LXNpemUtYmFzZSAqIC4zMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LWxlZnQuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogJGZvbnQtc2l6ZS1iYXNlICogMi43NTtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAkZm9udC1zaXplLWJhc2UgKiAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LXJpZ2h0LmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAkZm9udC1zaXplLWJhc2UgKiAyLjc1O1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAkZm9udC1zaXplLWJhc2UgKiAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIC5hY3Rpdml0eS1pbmRpY2F0b3IsXG4gICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAkZm9udC1zaXplLWJhc2UgKiAxLjc1O1xuICAgICAgICAgICAgaGVpZ2h0OiAkZm9udC1zaXplLWJhc2UgKiAxLjc1O1xuXG4gICAgICAgICAgICAmID4gZGl2OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci13aWR0aCAqIC42NjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmJ0bi1sZyB7XG4gICAgICAgICYuYnRuLWFjdGl2aXR5LXRvcC5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6ICRmb250LXNpemUtYmFzZSAqIDIuNzU7XG5cbiAgICAgICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgdG9wOiAkZm9udC1zaXplLWJhc2UgKiAuNjY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1hY3Rpdml0eS1ib3R0b20uYnRuLWFjdGl2aXR5LWluZGljYXRvci1kb3RzIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAkZm9udC1zaXplLWJhc2UgKiAyLjc1O1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIGJvdHRvbTogJGZvbnQtc2l6ZS1iYXNlICogLjY2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktbGVmdC5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAkZm9udC1zaXplLWJhc2UgKiA1O1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIGxlZnQ6ICRmb250LXNpemUtYmFzZSAqIC41O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktcmlnaHQuYnRuLWFjdGl2aXR5LWluZGljYXRvci1kb3RzIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6ICRmb250LXNpemUtYmFzZSAqIDU7XG5cbiAgICAgICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6ICRmb250LXNpemUtYmFzZSAqIC41O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMgLmFjdGl2aXR5LWluZGljYXRvciA+IGRpdixcbiAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMgPiBkaXYge1xuICAgICAgICAgICAgd2lkdGg6ICRmb250LXNpemUtYmFzZSAqIDEuMTtcbiAgICAgICAgICAgIGhlaWdodDogJGZvbnQtc2l6ZS1iYXNlICogMS4xO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktdG9wLmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogJGZvbnQtc2l6ZS1iYXNlICogMy41O1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIHRvcDogJGZvbnQtc2l6ZS1iYXNlICogLjU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1hY3Rpdml0eS1ib3R0b20uYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAkZm9udC1zaXplLWJhc2UgKiAzLjU7XG5cbiAgICAgICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAkZm9udC1zaXplLWJhc2UgKiAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LWxlZnQuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogJGZvbnQtc2l6ZS1iYXNlICogMy4yNTtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAkZm9udC1zaXplLWJhc2UgKiAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LXJpZ2h0LmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAkZm9udC1zaXplLWJhc2UgKiAzLjI1O1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAkZm9udC1zaXplLWJhc2UgKiAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIC5hY3Rpdml0eS1pbmRpY2F0b3IsXG4gICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAkZm9udC1zaXplLWJhc2UgKiAyLjE1O1xuICAgICAgICAgICAgaGVpZ2h0OiAkZm9udC1zaXplLWJhc2UgKiAyLjE1O1xuXG4gICAgICAgICAgICAmID4gZGl2OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci13aWR0aCAqIC43NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuYnRuLXhsIHtcbiAgICAgICAgJi5idG4tYWN0aXZpdHktdG9wLmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3ItZG90cyB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogJGZvbnQtc2l6ZS1iYXNlICogMy43NTtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICB0b3A6ICRmb250LXNpemUtYmFzZSAqIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1hY3Rpdml0eS1ib3R0b20uYnRuLWFjdGl2aXR5LWluZGljYXRvci1kb3RzIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAkZm9udC1zaXplLWJhc2UgKiAzLjc1O1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIGJvdHRvbTogJGZvbnQtc2l6ZS1iYXNlICogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LWxlZnQuYnRuLWFjdGl2aXR5LWluZGljYXRvci1kb3RzIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogJGZvbnQtc2l6ZS1iYXNlICogNjtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAkZm9udC1zaXplLWJhc2UgKiAuNzU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1hY3Rpdml0eS1yaWdodC5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogJGZvbnQtc2l6ZS1iYXNlICogNjtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICByaWdodDogJGZvbnQtc2l6ZS1iYXNlICogLjc1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMgLmFjdGl2aXR5LWluZGljYXRvciA+IGRpdixcbiAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMgPiBkaXYge1xuICAgICAgICAgICAgd2lkdGg6ICRmb250LXNpemUtYmFzZSAqIDEuMjU7XG4gICAgICAgICAgICBoZWlnaHQ6ICRmb250LXNpemUtYmFzZSAqIDEuMjU7XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1hY3Rpdml0eS10b3AuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAkZm9udC1zaXplLWJhc2UgKiA0LjI1O1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIHRvcDogJGZvbnQtc2l6ZS1iYXNlICogLjY2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktYm90dG9tLmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJGZvbnQtc2l6ZS1iYXNlICogNC4yNTtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICBib3R0b206ICRmb250LXNpemUtYmFzZSAqIC42NjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LWxlZnQuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogJGZvbnQtc2l6ZS1iYXNlICogNDtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAkZm9udC1zaXplLWJhc2UgKiAuNzU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1hY3Rpdml0eS1yaWdodC5idG4tYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXIge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogJGZvbnQtc2l6ZS1iYXNlICogNDtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICByaWdodDogJGZvbnQtc2l6ZS1iYXNlICogLjc1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXIgLmFjdGl2aXR5LWluZGljYXRvcixcbiAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXIge1xuICAgICAgICAgICAgd2lkdGg6ICRmb250LXNpemUtYmFzZSAqIDIuNTtcbiAgICAgICAgICAgIGhlaWdodDogJGZvbnQtc2l6ZS1iYXNlICogMi41O1xuXG4gICAgICAgICAgICAmID4gZGl2OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci13aWR0aCAqIC43NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuPC9zdHlsZT5cbiIsImltcG9ydCBCdG5BY3Rpdml0eSBmcm9tICcuL0J0bkFjdGl2aXR5JztcbmltcG9ydCBWdWVJbnN0YWxsZXIgZnJvbSAnLi4vLi4vSGVscGVycy9WdWVJbnN0YWxsZXIvVnVlSW5zdGFsbGVyJztcblxuY29uc3QgcGx1Z2luID0gVnVlSW5zdGFsbGVyLnVzZSh7XG5cbiAgICBpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWVJbnN0YWxsZXIuY29tcG9uZW50cyh7XG4gICAgICAgICAgICBCdG5BY3Rpdml0eVxuICAgICAgICB9KVxuICAgIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEJ0bkFjdGl2aXR5O1xuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+PHNsb3QvPjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdtb2RhbC1jb250ZW50J1xuXG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYmFja2Ryb3BcIiA6Y2xhc3M9XCJ7J2ZhZGUnOiBmYWRlLCAnc2hvdyc6IHNob3d9XCI+XG4gICAgICAgIDxzbG90Lz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnbW9kYWwtYmFja2Ryb3AnLFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdyB0aGUgbW9kYWwgd2l0aCBhIGZhZGUgZWZmZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgQm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgZmFkZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSXMgdGhlIG1vZGFsIHNob3dpbmcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBzaG93OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IHRyYW5zaXRpb24gZnJvbSAnLi4vLi4vSGVscGVycy9UcmFuc2l0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdyB0aGUgdHJpZ2dlcmFibGUgZWxlbWVudCB3aXRoIGEgYW5pbWF0ZWQgZmFkZSBlZmZlY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyB0aGUgdHJpZ2dlcmFibGUgZWxlbWVudCBzaG93aW5nLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgQm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgc2hvdzoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1dDogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRhcmdldCBlbGVtZW50IHVzZWQgdG8gcG9zaXRpb24gdGhlIHBvcG92ZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtTdHJpbmd8RWxlbWVudHxCb29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBFbGVtZW50LCBCb29sZWFuXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhvdyB0aGUgbW9kYWwgaXMgdHJpZ2dlcmVkIC0gY2xpY2sgfCBob3ZlciB8IGZvY3VzIHwgbWFudWFsLiBZb3UgbWF5XG4gICAgICAgICAqIHBhc3MgbXVsdGlwbGUgdHJpZ2dlcnM7IHNlcGFyYXRlIHRoZW0gd2l0aCBhIHNwYWNlLiBgbWFudWFsYCBjYW5ub3RcbiAgICAgICAgICogYmUgY29tYmluZWQgd2l0aCBhbnkgb3RoZXIgdHJpZ2dlci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHRyaWdnZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5XSxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdjbGljaydcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW5pdGlhbGl6ZSB0aGUgdHJpZ2dlciBldmVudCBmb3IgdGhlIHNwZWNpZmllZCBlbGVtZW50c1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gIHtFbGVtZW50fSBlbFxuICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAgICAgKi9cbiAgICAgICAgaW5pdGlhbGl6ZVRyaWdnZXIoZWwpIHtcbiAgICAgICAgICAgIGVhY2goaXNTdHJpbmcodGhpcy50cmlnZ2VyKSA/IHRoaXMudHJpZ2dlci5zcGxpdCgnICcpIDogdGhpcy50cmlnZ2VyLCB0cmlnZ2VyID0+IHtcbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHRyaWdnZXIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbml0aWFsaXplIHRoZSBldmVudCB0cmlnZ2Vyc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGluaXRpYWxpemVUcmlnZ2VycygpIHtcbiAgICAgICAgICAgIGlmKHRoaXMudGFyZ2V0ICYmIHRoaXMudHJpZ2dlciAhPT0gJ21hbnVhbCcpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplVHJpZ2dlcih0aGlzLnRhcmdldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMudGFyZ2V0KS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVRyaWdnZXIoZWwpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMuc2hvdyB8fCAhdGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRm9jdXMgb24gdGhlIGZpcnN0IGZpZWxkIGluIHRoZSBtb2RhbCAoaWYgZXhpc3RzKS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICBmb2N1cygpIHtcbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRyb2wsIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhJyk7XG5cbiAgICAgICAgICAgICAgICBpZihlbCkge1xuICAgICAgICAgICAgICAgICAgICBlbC5mb2N1cygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZWwuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9wZW4gdGhlIHRyaWdnZXJlYWJsZSBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgb3BlbigpIHtcbiAgICAgICAgICAgIHRoaXMuaXNEaXNwbGF5aW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb24odGhpcy4kZWwpLnRoZW4oZGVsYXkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzU2hvd2luZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2xvc2UgdGhlIHRyaWdnZXJlYWJsZSBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gdGhpc1xuICAgICAgICAgKi9cbiAgICAgICAgY2xvc2UoZXZlbnQpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb24odGhpcy4kZWwpLnRoZW4oZGVsYXkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNEaXNwbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnLCBldmVudCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5pc1Nob3dpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRvZ2dsZSB0aGUgdHJpZ2dlcmVhYmxlIGVsZW1lbnQncyBvcGVuL2Nsb3NlIG1ldGhvZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB0aGlzXG4gICAgICAgICAqL1xuICAgICAgICB0b2dnbGUoKSB7XG4gICAgICAgICAgICBpZighdGhpcy5pc1Nob3dpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIHRyaWdnZXJhYmxlQ2xhc3NlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgJ2ZhZGUnOiB0aGlzLmFuaW1hdGlvbixcbiAgICAgICAgICAgICAgICAnc2hvdyc6IHRoaXMuaXNTaG93aW5nXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcblxuICAgICAgICBpc1Nob3dpbmcodmFsdWUpIHtcbiAgICAgICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHNob3codmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaXNTaG93aW5nID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVUcmlnZ2VycygpO1xuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNEaXNwbGF5aW5nOiB0aGlzLnNob3cgfHwgIXRoaXMudGFyZ2V0LFxuICAgICAgICAgICAgaXNTaG93aW5nOiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIiA6Y2xhc3M9XCJ0cmlnZ2VyYWJsZUNsYXNzZXNcIiA6c3R5bGU9XCJ7ZGlzcGxheTogaXNEaXNwbGF5aW5nID8gJ2Jsb2NrJyA6ICdub25lJ31cIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIEBrZXlkb3duLmVzYz1cImNhbmNlbFwiPlxuXG4gICAgICAgIDxtb2RhbC1iYWNrZHJvcCB2LWlmPVwiYmFja2Ryb3BcIiByZWY9XCJiYWNrZHJvcFwiLz5cblxuICAgICAgICA8bW9kYWwtZGlhbG9nIDpjbGFzcz1cInsnbW9kYWwtZGlhbG9nLWNlbnRlcmVkJzogY2VudGVyfVwiPlxuXG4gICAgICAgICAgICA8bW9kYWwtY29udGVudD5cblxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1vZGFsLWhlYWRlciB2LWlmPVwidGl0bGVcIiBAY2xvc2U9XCJjYW5jZWxcIj57e3RpdGxlfX08L21vZGFsLWhlYWRlcj5cbiAgICAgICAgICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8Y29tcG9uZW50IDppcz1cIiFmbHVzaCA/ICdtb2RhbC1ib2R5JyA6ICdkaXYnXCIgY2xhc3M9XCJjaGlsZC1jb21wb25lbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90Lz5cbiAgICAgICAgICAgICAgICAgICAgPC9jb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgPC9zbG90PlxuXG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8bW9kYWwtZm9vdGVyIHYtaWY9XCJ0eXBlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInR5cGUgPT09ICdhbGVydCdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnRuLWFjdGl2aXR5IDphY3Rpdml0eT1cImFjdGl2aXR5XCIgdmFyaWFudD1cInByaW1hcnlcIiBAY2xpY2s9XCJjb25maXJtXCI+e3tva0xhYmVsfX08L2J0bi1hY3Rpdml0eT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidG4gdHlwZT1cImJ1dHRvblwiIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIiBAY2xpY2s9XCJjYW5jZWxcIiB2LWh0bWw9XCJjYW5jZWxMYWJlbFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnRuLWFjdGl2aXR5IDphY3Rpdml0eT1cImFjdGl2aXR5XCIgdmFyaWFudD1cInByaW1hcnlcIiBAY2xpY2s9XCJjb25maXJtXCI+e3tva0xhYmVsfX08L2J0bi1hY3Rpdml0eT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgIDwvbW9kYWwtZm9vdGVyPlxuICAgICAgICAgICAgICAgIDwvc2xvdD5cblxuICAgICAgICAgICAgPC9tb2RhbC1jb250ZW50PlxuXG4gICAgICAgIDwvbW9kYWwtZGlhbG9nPlxuXG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQnRuIGZyb20gJy4uL0J0bic7XG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IE1vZGFsQm9keSBmcm9tICcuL01vZGFsQm9keSc7XG5pbXBvcnQgeyBpc1N0cmluZyB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCBNb2RhbERpYWxvZyBmcm9tICcuL01vZGFsRGlhbG9nJztcbmltcG9ydCBNb2RhbEhlYWRlciBmcm9tICcuL01vZGFsSGVhZGVyJztcbmltcG9ydCBNb2RhbEZvb3RlciBmcm9tICcuL01vZGFsRm9vdGVyJztcbmltcG9ydCBCdG5BY3Rpdml0eSBmcm9tICcuLi9CdG5BY3Rpdml0eSc7XG5pbXBvcnQgTW9kYWxDb250ZW50IGZyb20gJy4vTW9kYWxDb250ZW50JztcbmltcG9ydCBNb2RhbEJhY2tkcm9wIGZyb20gJy4vTW9kYWxCYWNrZHJvcCc7XG5pbXBvcnQgVHJpZ2dlcmFibGUgZnJvbSAnLi4vLi4vTWl4aW5zL1RyaWdnZXJhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ21vZGFsJyxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgQnRuLFxuICAgICAgICBCdG5BY3Rpdml0eSxcbiAgICAgICAgTW9kYWxCb2R5LFxuICAgICAgICBNb2RhbEJhY2tkcm9wLFxuICAgICAgICBNb2RhbENvbnRlbnQsXG4gICAgICAgIE1vZGFsRGlhbG9nLFxuICAgICAgICBNb2RhbEhlYWRlcixcbiAgICAgICAgTW9kYWxGb290ZXJcbiAgICB9LFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIFRyaWdnZXJhYmxlXG4gICAgXSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3cgdGhlIG1vZGFsIGFjdGl2aXR5IGluZGljYXRvci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpdml0eTogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdyB0aGUgbW9kYWwgd2l0aCBhIGJhY2tkcm9wLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIGJhY2tkcm9wOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSXMgdGhlIG1vZGFsIGNlbnRlcmVkIGluIHRoZSBzY3JlZW4uXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgY2VudGVyOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyB0aGUgbW9kYWwgY29udGVudCBmaXhlZCBwb3NpdGlvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIGNsb3NlYWJsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSXMgdGhlIG1vZGFsIGNvbnRlbnQgZmx1c2ggd2l0aCB0aGUgbW9kYWwgZWRnZXM/IElmIHRydWUsIG5vIG1vZGFsLWJvZHlcbiAgICAgICAgICogd2lsbCBiZSB1c2VkIHRvIHdyYXAgdGhlIGNvbnRlbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgZmx1c2g6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBvayBsYWJlbCB0ZXh0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgb2tMYWJlbDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ09rJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY2FuY2VsIGxhYmVsIHRleHQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICBjYW5jZWxMYWJlbDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ0NhbmNlbCdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1vZGFsIHRpdGxlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdGl0bGU6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSXMgdGhlIG1vZGFsIHR5cGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkYXRlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsnYWxlcnQnLCAnY29uZmlybScsICdwcm9tcHQnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vdW50IHRoZSBiYWNrZHJvcCB0byB0aGUgZG9jdW1lbnQgYm9keS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgICAgbW91bnRCYWNrZHJvcCgpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLmJhY2tkcm9wQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrZHJvcENvbXBvbmVudCA9IHRoaXMuJHJlZnMuYmFja2Ryb3AuJG1vdW50KFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFVubW91bnQgdGhlIGJhY2tkcm9wIGZyb20gdGhlIGRvY3VtZW50IGJvZHkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICAgIHVubW91bnRCYWNrZHJvcCgpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuYmFja2Ryb3BDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhY2tkcm9wQ29tcG9uZW50LiRkZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrZHJvcENvbXBvbmVudC4kZWwucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrZHJvcENvbXBvbmVudCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbmNlbCB0aGUgbW9kYWxcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgICAgICovXG4gICAgICAgIGNhbmNlbChldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2FuY2VsJywgZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5jbG9zZShldmVudCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbmZpcm0gdGhlIG1vZGFsXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICAgICAqL1xuICAgICAgICBjb25maXJtKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjb25maXJtJywgZXZlbnQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGNhbGxiYWNrIGZvciB0aGUgZXNjYXBlIGZ1bmN0aW9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAgICAgKi9cbiAgICAgICAgb25Fc2MoZXZlbnQpIHtcbiAgICAgICAgICAgICh0aGlzLnR5cGUgPT09ICdjb25maXJtJyB8fCB0aGlzLnR5cGUgPT09ICAncHJvbXB0JykgPyB0aGlzLmNhbmNlbChldmVudCkgOiB0aGlzLmNsb3NlKGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG5cbiAgICAgICAgaXNTaG93aW5nKHZhbHVlKSB7XG4gICAgICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgICAgICAgICAgLy90aGlzLm1vdW50QmFja2Ryb3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuJyk7XG4gICAgICAgICAgICAgICAgLy90aGlzLnVubW91bnRCYWNrZHJvcCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6c2hvdycsIHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBiYWNrZHJvcENvbXBvbmVudDogbnVsbCxcbiAgICAgICAgICAgIGlzRGlzcGxheWluZzogdGhpcy5zaG93IHx8ICF0aGlzLnRhcmdldCxcbiAgICAgICAgICAgIGlzU2hvd2luZzogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVUcmlnZ2VycygpO1xuICAgICAgICAvKlxuICAgICAgICBpZih0aGlzLnNob3cgfHwgIXRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLm1vdW50QmFja2Ryb3AoKTtcbiAgICAgICAgfVxuICAgICAgICAqL1xuICAgIH0sXG5cbiAgICBiZWZvcmVSb3V0ZUxlYXZlKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgfVxuXG59XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5tb2RhbCB7XG4gICAgLm1vZGFsLWJhY2tkcm9wICsgLm1vZGFsLWRpYWxvZyB7XG4gICAgICAgIHotaW5kZXg6IDEwNTA7XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsImltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsJztcbmltcG9ydCBNb2RhbEJhY2tkcm9wIGZyb20gJy4vTW9kYWxCYWNrZHJvcCc7XG5pbXBvcnQgTW9kYWxCb2R5IGZyb20gJy4vTW9kYWxCb2R5JztcbmltcG9ydCBNb2RhbENvbnRlbnQgZnJvbSAnLi9Nb2RhbENvbnRlbnQnO1xuaW1wb3J0IE1vZGFsRGlhbG9nIGZyb20gJy4vTW9kYWxEaWFsb2cnO1xuaW1wb3J0IE1vZGFsRm9vdGVyIGZyb20gJy4vTW9kYWxGb290ZXInO1xuaW1wb3J0IE1vZGFsSGVhZGVyIGZyb20gJy4vTW9kYWxIZWFkZXInO1xuaW1wb3J0IFZ1ZUluc3RhbGxlciBmcm9tICcuLi8uLi9IZWxwZXJzL1Z1ZUluc3RhbGxlci9WdWVJbnN0YWxsZXInO1xuXG5jb25zdCBwbHVnaW4gPSBWdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIE1vZGFsXG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbmV4cG9ydCB7XG4gICAgTW9kYWxCYWNrZHJvcCxcbiAgICBNb2RhbEJvZHksXG4gICAgTW9kYWxDb250ZW50LFxuICAgIE1vZGFsRGlhbG9nLFxuICAgIE1vZGFsRm9vdGVyLFxuICAgIE1vZGFsSGVhZGVyXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIiwiaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnN0YW50aWF0ZShWdWUsIENvbXBvbmVudCwgb3B0aW9ucykge1xuICAgIGlmKENvbXBvbmVudCBpbnN0YW5jZW9mIFZ1ZSkge1xuICAgICAgICByZXR1cm4gQ29tcG9uZW50O1xuICAgIH1cblxuICAgIGlmKGlzT2JqZWN0KENvbXBvbmVudCkpIHtcbiAgICAgICAgQ29tcG9uZW50ID0gVnVlLmV4dGVuZChDb21wb25lbnQpO1xuICAgIH1cbiAgICBlbHNlIGlmKGlzU3RyaW5nKENvbXBvbmVudCkpIHtcbiAgICAgICAgY29uc3QgdGV4dCA9IENvbXBvbmVudDtcblxuICAgICAgICBDb21wb25lbnQgPSBWdWUuZXh0ZW5kKHtcblxuICAgICAgICAgICAgZnVuY3Rpb25hbDogdHJ1ZSxcblxuICAgICAgICAgICAgcmVuZGVyKGgsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdih0ZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IENvbXBvbmVudChvcHRpb25zKTtcbn1cbiIsImltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCB7IGRlZXBFeHRlbmQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9Nb2RhbCc7XG5pbXBvcnQgaW5zdGFudGlhdGUgZnJvbSAnLi4vLi4vSGVscGVycy9JbnN0YW50aWF0ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKFZ1ZSwgb3B0aW9ucykge1xuXG4gICAgVnVlLnByb3RvdHlwZS4kbW9kYWwgPSBmdW5jdGlvbihDb21wb25lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYoIWlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGluc3RhbnRpYXRlKFZ1ZSwgTW9kYWwsIG9wdGlvbnMubW9kYWwpO1xuXG4gICAgICAgIGluc3RhbmNlLiRjb250ZW50ID0gaW5zdGFudGlhdGUoVnVlLCBDb21wb25lbnQsIG9wdGlvbnMuY29udGVudCk7XG4gICAgICAgIGluc3RhbmNlLiRzbG90cy5kZWZhdWx0ID0gW2luc3RhbmNlLiRjb250ZW50LiRtb3VudCgpLl92bm9kZV07XG4gICAgICAgIGluc3RhbmNlLiRtb3VudChcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG5cbiAgICBWdWUucHJvdG90eXBlLiRhbGVydCA9IGZ1bmN0aW9uKHRpdGxlLCBDb21wb25lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gdGhpcy4kbW9kYWwoQ29tcG9uZW50LCBkZWVwRXh0ZW5kKG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBtb2RhbDoge1xuICAgICAgICAgICAgICAgICAgICBwcm9wc0RhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhbGVydCdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgbW9kYWwuJG9uKCdjb25maXJtJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIG1vZGFsLmNsb3NlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbW9kYWwuJG9uKCdjbG9zZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKG1vZGFsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgVnVlLnByb3RvdHlwZS4kY29uZmlybSA9IGZ1bmN0aW9uKHRpdGxlLCBDb21wb25lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gdGhpcy4kbW9kYWwoQ29tcG9uZW50IHx8IHRpdGxlLCBkZWVwRXh0ZW5kKG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBtb2RhbDoge1xuICAgICAgICAgICAgICAgICAgICBwcm9wc0RhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBDb21wb25lbnQgPyB0aXRsZSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY29uZmlybSdcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgbW9kYWwuJG9uKCdjYW5jZWwnLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG1vZGFsKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtb2RhbC4kb24oJ2NvbmZpcm0nLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShtb2RhbC5jbG9zZSgpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgVnVlLnByb3RvdHlwZS4kcHJvbXB0ID0gZnVuY3Rpb24odGl0bGUsIENvbXBvbmVudCwgb3B0aW9ucywgcHJlZGljYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBpZihpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgcHJlZGljYXRlID0gb3B0aW9ucztcbiAgICAgICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGlzT2JqZWN0KG9wdGlvbnMpICYmIGlzRnVuY3Rpb24ob3B0aW9ucy5wcmVkaWNhdGUpKSB7XG4gICAgICAgICAgICAgICAgcHJlZGljYXRlID0gb3B0aW9ucy5wcmVkaWNhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKCFpc0Z1bmN0aW9uKHByZWRpY2F0ZSkpIHtcbiAgICAgICAgICAgICAgICBwcmVkaWNhdGUgPSAoKSA9PiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBtb2RhbCA9IHRoaXMuJG1vZGFsKENvbXBvbmVudCwgZGVlcEV4dGVuZChvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgbW9kYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncHJvbXB0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICBtb2RhbC4kb24oJ2NhbmNlbCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QobW9kYWwpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1vZGFsLiRvbignY29uZmlybScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWNjZWVkID0gKCkgPT4gcmVzb2x2ZShtb2RhbC5jbG9zZSgpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmYWlsID0gKCkgPT4gcmVqZWN0KG1vZGFsLmNsb3NlKCkpO1xuXG4gICAgICAgICAgICAgICAgaWYocHJlZGljYXRlKG1vZGFsLCBzdWNjZWVkLCBmYWlsKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheS1ib2R5XCI+PHNsb3QvPjwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdvdmVybGF5LWJvZHknXG5cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPjxzbG90Lz48L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnY29udGFpbmVyJ1xuXG59XG5cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lcic7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJy4uLy4uL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgQ29udGFpbmVyXG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjtcbiIsIjx0ZW1wbGF0ZT5cbiAgICA8Y29udGFpbmVyIGNsYXNzPVwib3ZlcmxheS1jb250ZW50XCI+XG4gICAgICAgIDxzbG90Lz5cbiAgICA8L2NvbnRhaW5lcj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uL0NvbnRhaW5lcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdvdmVybGF5LWNvbnRlbnQnLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBDb250YWluZXJcbiAgICB9XG5cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbkBpbXBvcnQgJy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucy5zY3NzJztcbkBpbXBvcnQgJy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcblxuLm92ZXJsYXktY29udGVudCB7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAvKlxuICAgICYub3ZlcmxheS1jb250ZW50LWNlbnRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC5vdmVybGF5LWJvZHkge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAqL1xuXG4gICAgJi5vdmVybGF5LWNvbnRlbnQtZml4ZWQge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgfVxuXG4gICAgLm92ZXJsYXktY29udHJvbHMge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiA0cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAkZm9udC1zaXplLWJhc2U7XG5cbiAgICAgICAgJi5sZWZ0IHtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICAgICAgJi5yaWdodCB7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgICYgKyAqIHtcbiAgICAgICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheVwiIDpjbGFzcz1cInRyaWdnZXJhYmxlQ2xhc3Nlc1wiIDpzdHlsZT1cInsnYmFja2dyb3VuZCc6IGJhY2tncm91bmQsICdkaXNwbGF5JzogaXNEaXNwbGF5aW5nID8gJ2ZsZXgnIDogJ25vbmUnfVwiIHJvbGU9XCJkaWFsb2dcIiB0YWJpbmRleD1cIi0xXCIgQGtleWRvd24uZXNjPVwib25Fc2NcIj5cbiAgICAgICAgPGJ1dHRvbiB2LWlmPVwiY2xvc2VhYmxlICYmICFoaWRlQ2xvc2VCdXR0b25cIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWxpbmsgb3ZlcmxheS1jbG9zZVwiIEBjbGljaz1cIm9uQ2xpY2tDbG9zZVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lcy1jaXJjbGVcIj48L2k+XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIDxvdmVybGF5LWNvbnRlbnQgOmNsYXNzPVwieydvdmVybGF5LWNvbnRlbnQtZml4ZWQnOiBmaXhlZENvbnRlbnQsICdvdmVybGF5LWNvbnRlbnQtY2VudGVyJzogY2VudGVyfVwiIDpzdHlsZT1cInttaW5IZWlnaHQ6IG1pbkhlaWdodH1cIj5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgPG92ZXJsYXktYm9keSBjbGFzcz1cIm15LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNsb3QvPlxuICAgICAgICAgICAgICAgIDwvb3ZlcmxheS1ib2R5PlxuICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICA8L292ZXJsYXktY29udGVudD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgT3ZlcmxheUJvZHkgZnJvbSAnLi9PdmVybGF5Qm9keSc7XG5pbXBvcnQgT3ZlcmxheUNvbnRlbnQgZnJvbSAnLi9PdmVybGF5Q29udGVudCc7XG5pbXBvcnQgVHJpZ2dlcmFibGUgZnJvbSAnLi4vLi4vTWl4aW5zL1RyaWdnZXJhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ292ZXJsYXknLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBPdmVybGF5Qm9keSxcbiAgICAgICAgT3ZlcmxheUNvbnRlbnRcbiAgICB9LFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIFRyaWdnZXJhYmxlXG4gICAgXSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBvdmVybGF5IGJhY2tncm91bmQgY29sb3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIC45MjUpJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyB0aGUgb3ZlcmxheSBjb250ZW50IGZpeGVkIHBvc2l0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBjbG9zZWFibGU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENlbnRlciB0aGUgb3ZlcmxheSBjb250ZW50IG9uIHRoZSBzY3JlZW4gdXNpbmcgZmxleCBib3guXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgY2VudGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyB0aGUgb3ZlcmxheSBjb250ZW50IGZpeGVkIHBvc2l0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBmaXhlZENvbnRlbnQ6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIHRoZSBvdmVybGF5IGNsb3NlIGJ1dHRvbiBoaWRkZW4gYnV0IHN0aWxsIGNsb3NlYWJsZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGhpZGVDbG9zZUJ1dHRvbjogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogSXMgdGhlIG92ZXJsYXkgY29udGVudCBtaW5pbXVtIGhlaWdodC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIG1pbkhlaWdodDogW1N0cmluZywgTnVtYmVyXVxuXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNhbGxiYWNrIGZvciB0aGUgYGNsaWNrYCBldmVudCBvbiB0aGUgY2xvc2UgYnV0dG9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIG9uQ2xpY2tDbG9zZShldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2s6Y2xvc2UnLCBldmVudCk7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25Fc2MoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2VhYmxlICYmIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbkBpbXBvcnQgJy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucy5zY3NzJztcbkBpbXBvcnQgJy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcblxuLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogLTE7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICYuZmFkZSB7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzMzbXMgZWFzZS1vdXQ7XG4gICAgfVxuXG4gICAgJi5zaG93IHtcbiAgICAgICAgei1pbmRleDogMTAzMDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbiAgICAub3ZlcmxheS1jb250ZW50IHtcbiAgICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAub3ZlcmxheS1oZWFkZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAkZm9udC1zaXplLWJhc2UgKiAxLjU7XG4gICAgfVxuXG4gICAgLm92ZXJsYXktY2xvc2Uge1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuMjU7XG4gICAgICAgIGNvbG9yOiAkZ3JheS03MDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAkZm9udC1zaXplLWJhc2U7XG4gICAgICAgIHJpZ2h0OiAkZm9udC1zaXplLWJhc2U7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsImltcG9ydCBPdmVybGF5IGZyb20gJy4vT3ZlcmxheSc7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJy4uLy4uL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgT3ZlcmxheVxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBPdmVybGF5O1xuIiwiaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBkZWVwRXh0ZW5kIH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IGluc3RhbnRpYXRlIGZyb20gJy4uLy4uL0hlbHBlcnMvSW5zdGFudGlhdGUnO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi4vLi4vQ29tcG9uZW50cy9PdmVybGF5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oVnVlLCBvcHRpb25zKSB7XG4gICAgVnVlLnByb3RvdHlwZS4kb3ZlcmxheSA9IGZ1bmN0aW9uKHRhcmdldCwgQ29tcG9uZW50LCBvcHRpb25zKSB7XG4gICAgICAgIGlmKCFpc09iamVjdChvcHRpb25zKSkge1xuICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIXRhcmdldC4kb3ZlcmxheSkge1xuICAgICAgICAgICAgdGFyZ2V0LiRvdmVybGF5ID0gaW5zdGFudGlhdGUoVnVlLCBPdmVybGF5LCBkZWVwRXh0ZW5kKG9wdGlvbnMub3ZlcmxheSwge1xuICAgICAgICAgICAgICAgIHByb3BzRGF0YToge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgdGFyZ2V0LiRvdmVybGF5LiRtb3VudChcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGFyZ2V0LiRvdmVybGF5LiRjb250ZW50ID0gaW5zdGFudGlhdGUoVnVlLCBDb21wb25lbnQsIG9wdGlvbnMuY29udGVudCk7XG4gICAgICAgICAgICB0YXJnZXQuJG92ZXJsYXkuJHNsb3RzLmRlZmF1bHQgPSBbdGFyZ2V0LiRvdmVybGF5LiRjb250ZW50LiRtb3VudCgpLl92bm9kZV07XG4gICAgICAgICAgICB0YXJnZXQuJG92ZXJsYXkuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuJG92ZXJsYXkub3BlbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0LiRvdmVybGF5O1xuICAgIH07XG59XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiB2LXNob3c9XCJpc0Rpc3BsYXlpbmdcIiBjbGFzcz1cInBvcG92ZXJcIiA6Y2xhc3M9XCJtZXJnZUNsYXNzZXModHJpZ2dlcmFibGVDbGFzc2VzLCBjbGFzc2VzKVwiIHJvbGU9XCJ0b29sdGlwXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhcnJvd1wiPjwvZGl2PlxuICAgICAgICA8cG9wb3Zlci1oZWFkZXIgdi1pZj1cInRpdGxlXCIgdi1odG1sPVwidGl0bGVcIi8+XG4gICAgICAgIDxwb3BvdmVyLWJvZHk+XG4gICAgICAgICAgICA8c2xvdC8+XG4gICAgICAgIDwvcG9wb3Zlci1ib2R5PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8qXG5FdmVudHNcbkV2ZW50IFR5cGVcdERlc2NyaXB0aW9uXG5jbG9zZS5icy5wb3BvdmVyXHRUaGlzIGV2ZW50IGZpcmVzIGltbWVkaWF0ZWx5IHdoZW4gdGhlIGNsb3NlIGluc3RhbmNlIG1ldGhvZCBpcyBjYWxsZWQuXG5jbG9zZW4uYnMucG9wb3Zlclx0VGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBwb3BvdmVyIGhhcyBiZWVuIG1hZGUgdmlzaWJsZSB0byB0aGUgdXNlciAod2lsbCB3YWl0IGZvciBDU1MgdHJhbnNpdGlvbnMgdG8gY29tcGxldGUpLlxub3Blbi5icy5wb3BvdmVyXHRUaGlzIGV2ZW50IGlzIGZpcmVkIGltbWVkaWF0ZWx5IHdoZW4gdGhlIG9wZW4gaW5zdGFuY2UgbWV0aG9kIGhhcyBiZWVuIGNhbGxlZC5cbmhpZGRlbi5icy5wb3BvdmVyXHRUaGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHBvcG92ZXIgaGFzIGZpbmlzaGVkIGJlaW5nIGhpZGRlbiBmcm9tIHRoZSB1c2VyICh3aWxsIHdhaXQgZm9yIENTUyB0cmFuc2l0aW9ucyB0byBjb21wbGV0ZSkuXG5pbnNlcnRlZC5icy5wb3BvdmVyXHRUaGlzIGV2ZW50IGlzIGZpcmVkIGFmdGVyIHRoZSBjbG9zZS5icy5wb3BvdmVyIGV2ZW50IHdoZW4gdGhlIHBvcG92ZXIgdGVtcGxhdGUgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIERPTS5cbiQoJyNteVBvcG92ZXInKS5vbignaGlkZGVuLmJzLnBvcG92ZXInLCBmdW5jdGlvbiAoKSB7XG4gIC8vIGRvIHNvbWV0aGluZ+KAplxufSlcbiovXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgUG9wcGVyIGZyb20gJ3BvcHBlci5qcyc7XG5pbXBvcnQgcHJlZml4IGZyb20gJy4uLy4uL0hlbHBlcnMvUHJlZml4JztcbmltcG9ydCBUcmlnZ2VyYWJsZSBmcm9tICcuLi8uLi9NaXhpbnMvVHJpZ2dlcmFibGUnO1xuaW1wb3J0IE1lcmdlQ2xhc3NlcyBmcm9tICcuLi8uLi9NaXhpbnMvTWVyZ2VDbGFzc2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ3BvcG92ZXInLFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIFRyaWdnZXJhYmxlLFxuICAgICAgICBNZXJnZUNsYXNzZXNcbiAgICBdLFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQXBwbHkgYSBDU1MgZmFkZSB0cmFuc2l0aW9uIHRvIHRoZSBwb3BvdmVyXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPdmVyZmxvdyBjb25zdHJhaW50IGJvdW5kYXJ5IG9mIHRoZSBwb3BvdmVyLiBBY2NlcHRzIHRoZSB2YWx1ZXMgb2ZcbiAgICAgICAgICogJ3ZpZXdwb3J0JywgJ3dpbmRvdycsICdzY3JvbGxQYXJlbnQnLCBvciBhbiBIVE1MRWxlbWVudCByZWZlcmVuY2VcbiAgICAgICAgICogKEphdmFTY3JpcHQgb25seSkuIEZvciBtb3JlIGluZm9ybWF0aW9uIHJlZmVyIHRvIFBvcHBlci5qcydzXG4gICAgICAgICAqIHByZXZlbnRPdmVyZmxvdyBkb2NzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgYm91bmRhcnk6IHtcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5XSxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdzY3JvbGxQYXJlbnQnLFxuICAgICAgICAgICAgdmFsaWRhdGUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWyd2aWV3cG9ydCcsICd3aW5kb3cnLCAndmlld3BvcnQnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFwcGVuZHMgdGhlIHBvcG92ZXIgdG8gYSBzcGVjaWZpYyBlbGVtZW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBFeGFtcGxlOiBjb250YWluZXI6ICdib2R5Jy5cbiAgICAgICAgICpcbiAgICAgICAgICogVGhpcyBvcHRpb24gaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBpbiB0aGF0IGl0IGFsbG93cyB5b3UgdG8gcG9zaXRpb25cbiAgICAgICAgICogdGhlIHBvcG92ZXIgaW4gdGhlIGZsb3cgb2YgdGhlIGRvY3VtZW50IG5lYXIgdGhlIHRyaWdnZXJpbmcgZWxlbWVudCAtXG4gICAgICAgICAqIHdoaWNoIHdpbGwgcHJldmVudCB0aGUgcG9wb3ZlciBmcm9tIGZsb2F0aW5nIGF3YXkgZnJvbSB0aGV0cmlnZ2VyaW5nXG4gICAgICAgICAqIGVsZW1lbnQgZHVyaW5nIGEgd2luZG93IHJlc2l6ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge1N0cmluZ3xFbGVtZW50fEJvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBjb250YWluZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIEVsZW1lbnQsIEJvb2xlYW5dLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVsYXkgY2xvc2VpbmcgYW5kIGhpZGluZyB0aGUgcG9wb3ZlciAobXMpIC0gZG9lcyBub3QgYXBwbHkgdG8gbWFudWFsIHRyaWdnZXIgdHlwZVxuICAgICAgICAgKlxuICAgICAgICAgKiBJZiBhIG51bWJlciBpcyBzdXBwbGllZCwgZGVsYXkgaXMgYXBwbGllZCB0byBib3RoIG9wZW4vY2xvc2VcbiAgICAgICAgICpcbiAgICAgICAgICogT2JqZWN0IHN0cnVjdHVyZSBpczogZGVsYXk6IHsgXCJjbG9zZVwiOiA1MDAsIFwib3BlblwiOiAxMDAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7TnVtYmVyfE9iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIGRlbGF5OiB7XG4gICAgICAgICAgICB0eXBlOiBbTnVtYmVyLCBPYmplY3RdLFxuICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbGxvdyB0byBzcGVjaWZ5IHdoaWNoIHBvc2l0aW9uIFBvcHBlciB3aWxsIHVzZSBvbiBmYWxsYmFjay4gRm9yIG1vcmVcbiAgICAgICAgICogaW5mb3JtYXRpb24gcmVmZXIgdG8gUG9wcGVyLmpzJ3MgYmVoYXZpb3IgZG9jc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfEFycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgZmFsbGJhY2tQbGFjZW1lbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIEFycmF5XSxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdmbGlwJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPZmZzZXQgb2YgdGhlIHBvcG92ZXIgcmVsYXRpdmUgdG8gaXRzIHRhcmdldC4gRm9yIG1vcmUgaW5mb3JtYXRpb25cbiAgICAgICAgICogcmVmZXIgdG8gUG9wcGVyLmpzJ3Mgb2Zmc2V0IGRvY3MuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtOdW1iZXJ8U3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIb3cgdG8gcG9zaXRpb24gdGhlIHBvcG92ZXIgLSBhdXRvIHwgdG9wIHwgYm90dG9tIHwgbGVmdCB8IHJpZ2h0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBXaGVuIGF1dG8gaXMgc3BlY2lmaWVkLCBpdCB3aWxsIGR5bmFtaWNhbGx5IHJlb3JpZW50IHRoZSBwb3BvdmVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBXaGVuIGEgZnVuY3Rpb24gaXMgdXNlZCB0byBkZXRlcm1pbmUgdGhlIHBsYWNlbWVudCwgaXQgaXMgY2FsbGVkIHdpdGhcbiAgICAgICAgICogdGhlIHBvcG92ZXIgRE9NIG5vZGUgYXMgaXRzIGZpcnN0IGFyZ3VtZW50IGFuZCB0aGUgdHJpZ2dlcmluZyBlbGVtZW50XG4gICAgICAgICAqIERPTSBub2RlIGFzIGl0cyBzZWNvbmQuIFRoZSB0aGlzIGNvbnRleHQgaXMgc2V0IHRvIHRoZSBwb3BvdmVyXG4gICAgICAgICAqIGluc3RhbmNlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfEZ1bmN0aW9ufVxuICAgICAgICAgKi9cbiAgICAgICAgcGxhY2VtZW50OiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBGdW5jdGlvbl0sXG4gICAgICAgICAgICBkZWZhdWx0OiAndG9wJyxcbiAgICAgICAgICAgIHZhbGlkYXRlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsnYXV0bycsICd0b3AnLCAnYm90dG9tJywgJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHRoaXMgcHJvcGVydHkgaXMgcGFzc2VkLCBpdCB3aWxsIGZvcmNlIHRoZSBwb3BvdmVyIHRvIGJlIHZpc2libGVcbiAgICAgICAgICogYnkgZGVmYXVsdC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBzaG93OiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBhIHNlbGVjdG9yIGlzIHByb3ZpZGVkLCBwb3BvdmVyIG9iamVjdHMgd2lsbCBiZSBkZWxlZ2F0ZWQgdG8gdGhlXG4gICAgICAgICAqIHNwZWNpZmllZCB0YXJnZXRzLiBJbiBwcmFjdGljZSwgdGhpcyBpcyB1c2VkIHRvIGVuYWJsZSBkeW5hbWljIEhUTUxcbiAgICAgICAgICogY29udGVudCB0byBoYXZlIHBvcG92ZXJzIGFkZGVkLiBTZWUgdGhpcyBhbmQgYW4gaW5mb3JtYXRpdmUgZXhhbXBsZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0Jvb2xlYW58U3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0b3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRhcmdldCBlbGVtZW50IHVzZWQgdG8gcG9zaXRpb24gdGhlIHBvcG92ZXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtTdHJpbmd8RWxlbWVudHxCb29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBFbGVtZW50LCBCb29sZWFuXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwb3BvdmVyIHRpdGxlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB0aXRsZTogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIb3cgcG9wb3ZlciBpcyB0cmlnZ2VyZWQgLSBjbGljayB8IGhvdmVyIHwgZm9jdXMgfCBtYW51YWwuIFlvdSBtYXlcbiAgICAgICAgICogcGFzcyBtdWx0aXBsZSB0cmlnZ2Vyczsgc2VwYXJhdGUgdGhlbSB3aXRoIGEgc3BhY2UuIGBtYW51YWxgIGNhbm5vdFxuICAgICAgICAgKiBiZSBjb21iaW5lZCB3aXRoIGFueSBvdGhlciB0cmlnZ2VyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdHJpZ2dlcjoge1xuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgQXJyYXldLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2NsaWNrJ1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAgIGFsaWduKCkge1xuICAgICAgICAgICAgZWFjaCh0aGlzLiRwb3BwZXJzLCBlbCA9PiB7XG4gICAgICAgICAgICAgICAgZWwucG9wcGVyLnVwZGF0ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlUG9wcGVyKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFBvcHBlcihlbCwgdGhpcy4kZWwsIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgICAgICAgICAgIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGZsaXA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdW5kYXJpZXNFbGVtZW50OiB0aGlzLmNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiB0aGlzLmZhbGxiYWNrUGxhY2VtZW50XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogISF0aGlzLm9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXJyb3c6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJy5hcnJvdycpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRBcnJvd0VsZW1lbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kZWwucXVlcnlTZWxlY3RvcignLmFycm93Jyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEluaXRpYWxpemUgdGhlIHRyaWdnZXIgZXZlbnQgZm9yIHRoZSBzcGVjaWZpZWQgZWxlbWVudHNcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtICB7RWxlbWVudH0gZWxcbiAgICAgICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgICAgICovXG4gICAgICAgIGluaXRpYWxpemVUcmlnZ2VyKGVsKSB7XG4gICAgICAgICAgICB0aGlzLiRwb3BwZXJzW2VsXSA9IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBpc1N0cmluZyh0aGlzLnRyaWdnZXIpID8gdGhpcy50cmlnZ2VyLnNwbGl0KCcgJykgOiB0aGlzLnRyaWdnZXIsXG4gICAgICAgICAgICAgICAgcG9wcGVyOiB0aGlzLmNyZWF0ZVBvcHBlcihlbCksXG4gICAgICAgICAgICAgICAgZXZlbnQ6IChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRwb3BwZXJzW2VsXS5wb3BwZXIudXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZWFjaCh0aGlzLiRwb3BwZXJzW2VsXS50cmlnZ2VyLCB0cmlnZ2VyID0+IHtcbiAgICAgICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKHRyaWdnZXIsIHRoaXMuJHBvcHBlcnNbZWxdLmV2ZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcblxuICAgICAgICBpc1Nob3dpbmcodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsaWduKCk7XG5cbiAgICAgICAgICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIGNsYXNzZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4KHtcbiAgICAgICAgICAgICAgICAndG9wJzogdGhpcy5wbGFjZW1lbnQgPT09ICd0b3AnLFxuICAgICAgICAgICAgICAgICdib3R0b20nOiB0aGlzLnBsYWNlbWVudCA9PT0gJ2JvdHRvbScsXG4gICAgICAgICAgICAgICAgJ2xlZnQnOiB0aGlzLnBsYWNlbWVudCA9PT0gJ2xlZnQnLFxuICAgICAgICAgICAgICAgICdyaWdodCc6IHRoaXMucGxhY2VtZW50ID09PSAncmlnaHQnXG4gICAgICAgICAgICB9LCAnYnMtcG9wb3ZlcicpO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgYmVmb3JlQ3JlYXRlKCkge1xuICAgICAgICBpZighdGhpcy4kcG9wcGVycykge1xuICAgICAgICAgICAgdGhpcy4kcG9wcGVycyA9IHt9O1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInBvcG92ZXItYm9keVwiPlxuICAgICAgICA8c2xvdC8+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ3BvcG92ZXItYm9keSdcblxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxjb21wb25lbnQgOmlzPVwidGFnXCIgY2xhc3M9XCJwb3BvdmVyLWhlYWRlclwiPlxuICAgICAgICA8c2xvdC8+XG4gICAgPC9jb21wb25lbnQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ3BvcG92ZXItaGVhZGVyJyxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjb21wb25lbnQgSFRNTCBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB0YWc6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdoMydcbiAgICAgICAgfVxuXG4gICAgfVxuXG59O1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgUG9wb3ZlciBmcm9tICcuL1BvcG92ZXInO1xuaW1wb3J0IFBvcG92ZXJCb2R5IGZyb20gJy4vUG9wb3ZlckJvZHknO1xuaW1wb3J0IFBvcG92ZXJIZWFkZXIgZnJvbSAnLi9Qb3BvdmVySGVhZGVyJztcbmltcG9ydCBWdWVJbnN0YWxsZXIgZnJvbSAnLi4vLi4vSGVscGVycy9WdWVJbnN0YWxsZXIvVnVlSW5zdGFsbGVyJztcblxuY29uc3QgcGx1Z2luID0gVnVlSW5zdGFsbGVyLnVzZSh7XG5cbiAgICBpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWVJbnN0YWxsZXIuY29tcG9uZW50cyh7XG4gICAgICAgICAgICBQb3BvdmVyLFxuICAgICAgICAgICAgUG9wb3ZlckJvZHksXG4gICAgICAgICAgICBQb3BvdmVySGVhZGVyXG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXI7XG4iLCJpbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCB7IGRlZXBFeHRlbmQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgaW5zdGFudGlhdGUgZnJvbSAnLi4vLi4vSGVscGVycy9JbnN0YW50aWF0ZSc7XG5pbXBvcnQgUG9wb3ZlciBmcm9tICcuLi8uLi9Db21wb25lbnRzL1BvcG92ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihWdWUsIG9wdGlvbnMpIHtcbiAgICBWdWUucHJvdG90eXBlLiRwb3BvdmVyID0gZnVuY3Rpb24odGFyZ2V0LCBDb21wb25lbnQsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYoIWlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZighdGFyZ2V0LiRwb3BvdmVyKSB7XG4gICAgICAgICAgICB0YXJnZXQuJHBvcG92ZXIgPSBpbnN0YW50aWF0ZShWdWUsIFBvcG92ZXIsIGRlZXBFeHRlbmQob3B0aW9ucy5wb3BvdmVyLCB7XG4gICAgICAgICAgICAgICAgcHJvcHNEYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICB0YXJnZXQuJHBvcG92ZXIuJG1vdW50KFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gaW5zdGFudGlhdGUoVnVlLCBDb21wb25lbnQsIG9wdGlvbnMuY29udGVudCk7XG5cbiAgICAgICAgICAgIHRhcmdldC4kcG9wb3Zlci4kc2xvdHMuZGVmYXVsdCA9IFtjb250ZW50LiRtb3VudCgpLl92bm9kZV07XG4gICAgICAgICAgICB0YXJnZXQuJHBvcG92ZXIuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuJHBvcG92ZXIub3BlbigpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0LiRwb3BvdmVyO1xuICAgIH07XG59XG4iLCI8dGVtcGxhdGU+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgQGNsaWNrPVwib25DbGlja1wiPlxuICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdhbGVydC1jbG9zZScsXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgb25DbGljayhldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8aDQgY2xhc3M9XCJhbGVydC1oZWFkaW5nXCI+PHNsb3QvPjwvaDQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2FsZXJ0LWhlYWRpbmcnXG5cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiIDpzdHlsZT1cInsnaGVpZ2h0JzogZm9ybWF0dGVkSGVpZ2h0fVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgOnN0eWxlPVwic3R5bGVzXCIgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKHByb2dyZXNzQ2xhc3NlcywgdmFyaWFudENsYXNzKVwiIDphcmlhLXZhbHVlbm93PVwib2Zmc2V0VmFsdWVcIiA6YXJpYS12YWx1ZW1pbj1cIm1pblwiIDphcmlhLXZhbHVlbWF4PVwibWF4XCI+XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwiISFsYWJlbFwiPjx0ZW1wbGF0ZSB2LWlmPVwibGFiZWwgIT09IHRydWVcIj57e2xhYmVsfX08L3RlbXBsYXRlPiB7e29mZnNldFZhbHVlfX0lPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gdi1lbHNlPjxzbG90Lz48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB1bml0IGZyb20gJy4uLy4uL0hlbHBlcnMvVW5pdCc7XG5pbXBvcnQgVmFyaWFudCBmcm9tICcuLi8uLi9NaXhpbnMvVmFyaWFudCc7XG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCBNZXJnZUNsYXNzZXMgZnJvbSAnLi4vLi4vTWl4aW5zL01lcmdlQ2xhc3Nlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdwcm9ncmVzcy1iYXInLFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIFZhcmlhbnQsXG4gICAgICAgIE1lcmdlQ2xhc3Nlc1xuICAgIF0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGN1c3RvbSBjb2xvciB0byBiZSBhcHBsaWVkIGlubGluZSBpbiB0aGUgc3R5bGVzIHZzIGEgY29udGV4dHVhbFxuICAgICAgICAgKiB2YXJpYW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBjb2xvcjogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcHJvZ3Jlc3MgYmFyIHBlcmNlbnRhZ2UgdmFsdWVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBoZWlnaHQgb2YgdGhlIHByb2dyZXNzIGJhclxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBoZWlnaHQ6IFtOdW1iZXIsIFN0cmluZ10sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3cgdGhlIHByb2dyZXNzIGJhciB2YWx1ZSBhcyBhIGxhYmVsIGluc2lkZSB0aGUgYmFyXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGxhYmVsOiBbU3RyaW5nLCBCb29sZWFuXSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdWxkIHRoZSBwcm9ncmVzcyBiYXIgYXBwZWFyIHdpdGggc3RyaXBlc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBzdHJpcGVkOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG91bGQgdGhlIHByb2dyZXNzIGJhciBhcHBlYXIgd2l0aCBhbmltYXRlZCBzdHJpcGVzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGFuaW1hdGVkOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbWluaW11bSB2YWx1ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBtaW46IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1heCB2YWx1ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBtYXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEwMFxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICB2YXJpYW50Q2xhc3NQcmVmaXgoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2JnJztcbiAgICAgICAgfSxcblxuICAgICAgICBvZmZzZXRWYWx1ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlIC8gdGhpcy5tYXggKiAxMDA7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZm9ybWF0dGVkSGVpZ2h0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0ID8gdW5pdCh0aGlzLmhlaWdodCkgOiBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIHByb2dyZXNzQ2xhc3NlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgJ3Byb2dyZXNzLWJhci1zdHJpcGVkJzogdGhpcy5zdHJpcGVkLFxuICAgICAgICAgICAgICAgICdwcm9ncmVzcy1iYXItYW5pbWF0ZWQnOiB0aGlzLmFuaW1hdGVkXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIHN0eWxlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGAke3RoaXMub2Zmc2V0VmFsdWV9JWAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogYCR7dGhpcy5jb2xvcn0gIWltcG9ydGFudGBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG48L3NjcmlwdD5cbiIsImltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuL1Byb2dyZXNzQmFyJztcbmltcG9ydCBWdWVJbnN0YWxsZXIgZnJvbSAnLi4vLi4vSGVscGVycy9WdWVJbnN0YWxsZXIvVnVlSW5zdGFsbGVyJztcblxuY29uc3QgcGx1Z2luID0gVnVlSW5zdGFsbGVyLnVzZSh7XG5cbiAgICBpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWVJbnN0YWxsZXIuY29tcG9uZW50cyh7XG4gICAgICAgICAgICBQcm9ncmVzc0JhclxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYWxlcnRcIiA6Y2xhc3M9XCJtZXJnZUNsYXNzZXModmFyaWFudENsYXNzLCB7c2hvdzogaXNWaXNpYmxlLCBmYWRlOiBmYWRlfSlcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgPGFsZXJ0LWhlYWRpbmcgdi1pZj1cInRpdGxlIHx8IGhlYWRpbmdcIj57eyB0aXRsZSB8fCBoZWFkaW5nIH19PC9hbGVydC1oZWFkaW5nPlxuICAgICAgICA8c2xvdC8+XG4gICAgICAgIDxhbGVydC1jbG9zZSB2LWlmPVwiZGlzbWlzc2libGVcIiBAY2xpY2s9XCJkaXNtaXNzKClcIi8+XG4gICAgICAgIDxwcm9ncmVzcy1iYXIgdi1pZj1cInR5cGVvZiBzaG93ID09PSAnbnVtYmVyJ1wiIDp2YXJpYW50PVwidmFyaWFudFwiIDpoZWlnaHQ9XCI1XCIgOnZhbHVlPVwiZGlzbWlzc0NvdW50XCIgOm1heD1cInNob3dcIiBjbGFzcz1cIm15LTNcIi8+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEFsZXJ0Q2xvc2UgZnJvbSAnLi9BbGVydENsb3NlJztcbmltcG9ydCBBbGVydEhlYWRpbmcgZnJvbSAnLi9BbGVydEhlYWRpbmcnO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uL1Byb2dyZXNzQmFyJztcbmltcG9ydCBWYXJpYW50IGZyb20gJy4uLy4uL01peGlucy9WYXJpYW50JztcbmltcG9ydCB0cmFuc2l0aW9uIGZyb20gJy4uLy4uL0hlbHBlcnMvVHJhbnNpdGlvbic7XG5pbXBvcnQgTWVyZ2VDbGFzc2VzIGZyb20gJy4uLy4uL01peGlucy9NZXJnZUNsYXNzZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnYWxlcnQnLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBBbGVydENsb3NlLFxuICAgICAgICBBbGVydEhlYWRpbmcsXG4gICAgICAgIFByb2dyZXNzQmFyXG4gICAgfSxcblxuICAgIG1peGluczogW1xuICAgICAgICBWYXJpYW50LFxuICAgICAgICBNZXJnZUNsYXNzZXNcbiAgICBdLFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSXMgdGhlIGFsZXJ0IGRpc21pc3NpYmxlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBkaXNtaXNzaWJsZTogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGFsZXJ0J3MgdGl0bGUvaGVhZGluZ1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgQm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgaGVhZGluZzogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYWxlcnQncyB0aXRsZS9oZWFkaW5nXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICB0aXRsZTogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG91bGQgdGhlIGFsZXJ0IGZhZGUgd2hlbiBoaWRkZW5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGZhZGU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3VsZCB0aGUgYWxlcnQgYmUgdmlzaWJsZSBieSBkZWZhdWx0LiBJZiBwYXNzZWQgYSBudW1iZXIsIGFsZXJ0XG4gICAgICAgICAqIHdpbGwgYmUgc2hvd24gZm9yIHRoZSBudW1iZXIgb2Ygc2Vjb25kcyB0aGF0IGFyZSBwYXNzZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBzaG93OiB7XG4gICAgICAgICAgICB0eXBlOiBbTnVtYmVyLCBCb29sZWFuXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICBkaXNtaXNzKCkge1xuICAgICAgICAgICAgdHJhbnNpdGlvbih0aGlzLiRlbCkudGhlbihkZWxheSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnZGlzbWlzc2VkJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOnZpc2libGUnLCB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGlmKHR5cGVvZiB0aGlzLnNob3cgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJy5wcm9ncmVzcy1iYXInKTtcblxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZGlzbWlzcy1jb3VudGRvd24nLCB0aGlzLmRpc21pc3NDb3VudCA9IHRoaXMuc2hvdyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Rpc21pc3MtY291bnRkb3duJywgdGhpcy5kaXNtaXNzQ291bnQgLT0gMSk7XG5cbiAgICAgICAgICAgICAgICBpZighdGhpcy5kaXNtaXNzQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24oZWwpLnRoZW4oZGVsYXkgPT4gdGhpcy5kaXNtaXNzKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkaXNtaXNzQ291bnQ6IHRoaXMuc2hvdyxcbiAgICAgICAgICAgIGlzVmlzaWJsZTogdGhpcy5zaG93XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxhIGNsYXNzPVwiYWxlcnQtbGlua1wiPjxzbG90Lz48L2E+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2FsZXJ0LWxpbmsnXG5cbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IEFsZXJ0IGZyb20gJy4vQWxlcnQnO1xuaW1wb3J0IEFsZXJ0TGluayBmcm9tICcuL0FsZXJ0TGluayc7XG5pbXBvcnQgQWxlcnRDbG9zZSBmcm9tICcuL0FsZXJ0Q2xvc2UnO1xuaW1wb3J0IEFsZXJ0SGVhZGluZyBmcm9tICcuL0FsZXJ0SGVhZGluZyc7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJy4uLy4uL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgQWxlcnQsXG4gICAgICAgICAgICBBbGVydExpbmssXG4gICAgICAgICAgICBBbGVydENsb3NlLFxuICAgICAgICAgICAgQWxlcnRIZWFkaW5nXG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbmV4cG9ydCAqIGZyb20gJy4vQWxlcnRMaW5rJztcbmV4cG9ydCAqIGZyb20gJy4vQWxlcnRDbG9zZSc7XG5leHBvcnQgKiBmcm9tICcuL0FsZXJ0SGVhZGluZyc7XG5leHBvcnQgZGVmYXVsdCBBbGVydDtcbiIsIjx0ZW1wbGF0ZT5cbiAgICA8YSB2LWlmPVwiaHJlZlwiIDpocmVmPVwiaHJlZlwiIGNsYXNzPVwiYmFkZ2VcIiA6Y2xhc3M9XCJtZXJnZUNsYXNzZXMoY2xhc3NlcywgdmFyaWFudENsYXNzKVwiPlxuICAgICAgICA8c2xvdD57e2xhYmVsfX08L3Nsb3Q+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiIHYtaHRtbD1cImFjY2Vzc2liaWxpdHlcIi8+XG4gICAgPC9hPlxuICAgIDxzcGFuIHYtZWxzZSBjbGFzcz1cImJhZGdlXCIgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKGNsYXNzZXMsIHZhcmlhbnRDbGFzcylcIj5cbiAgICAgICAgPHNsb3Q+e3tsYWJlbH19PC9zbG90PlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIiB2LWh0bWw9XCJhY2Nlc3NpYmlsaXR5XCIvPlxuICAgIDwvc3Bhbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgcHJlZml4IGZyb20gJy4uLy4uL0hlbHBlcnMvUHJlZml4JztcbmltcG9ydCBWYXJpYW50IGZyb20gJy4uLy4uL01peGlucy9WYXJpYW50JztcbmltcG9ydCBNZXJnZUNsYXNzZXMgZnJvbSAnLi4vLi4vTWl4aW5zL01lcmdlQ2xhc3Nlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdiYWRnZScsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgVmFyaWFudCxcbiAgICAgICAgTWVyZ2VDbGFzc2VzXG4gICAgXSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBzY3JlZW4gcmVhZGVyIGFjY2Vzc2liaWxpdHkgbGFiZWwuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGFjY2Vzc2liaWxpdHk6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYW4gaHJlZiBhdHRyaWJ1dGUgaXMgcGFzc2VkLCB0aGUgYmFkZ2UgYmVjb21lcyBhbiBhbmNob3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGhyZWY6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGJhZGdlIGFwcGVhciBhcyBwaWxsIHNoYXBlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgcGlsbDogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGJhZGdlIGxhYmVsLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBsYWJlbDogW051bWJlciwgU3RyaW5nXSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGJhZGdlIGFwcGVhciBhcyBzZWNvbmRhcnkgaW4gc2l6ZSB0byB0aGUgcGFyZW50IGVsZW1lbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHNlY29uZGFyeTogQm9vbGVhblxuXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgY2xhc3NlcygpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmVmaXgoe1xuICAgICAgICAgICAgICAgICdwaWxsJzogdGhpcy5waWxsLFxuICAgICAgICAgICAgICAgICdzZWNvbmRhcnknOiB0aGlzLnNlY29uZGFyeVxuICAgICAgICAgICAgfSwgdGhpcy4kb3B0aW9ucy5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgQmFkZ2UgZnJvbSAnLi9CYWRnZSc7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJy4uLy4uL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgQmFkZ2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQmFkZ2U7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG5cbiAgICAvLyBgcmVzcG9uc2VUeXBlYCBpbmRpY2F0ZXMgdGhlIHR5cGUgb2YgZGF0YSB0aGF0IHRoZSBzZXJ2ZXIgd2lsbCByZXNwb25kIHdpdGhcbiAgICAvLyBvcHRpb25zIGFyZSAnYXJyYXlidWZmZXInLCAnYmxvYicsICdkb2N1bWVudCcsICdqc29uJywgJ3RleHQnLCAnc3RyZWFtJ1xuICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLCAvLyBkZWZhdWx0XG5cbiAgICAvLyBgdHJhbnNmb3JtUmVxdWVzdGAgYWxsb3dzIGNoYW5nZXMgdG8gdGhlIHJlcXVlc3QgZGF0YSBiZWZvcmUgaXQgaXMgc2VudCB0byB0aGUgc2VydmVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGFwcGxpY2FibGUgZm9yIHJlcXVlc3QgbWV0aG9kcyAnUFVUJywgJ1BPU1QnLCBhbmQgJ1BBVENIJ1xuICAgIC8vIFRoZSBsYXN0IGZ1bmN0aW9uIGluIHRoZSBhcnJheSBtdXN0IHJldHVybiBhIHN0cmluZyBvciBhbiBpbnN0YW5jZSBvZiBCdWZmZXIsIEFycmF5QnVmZmVyLFxuICAgIC8vIEZvcm1EYXRhIG9yIFN0cmVhbVxuICAgIC8vIFlvdSBtYXkgbW9kaWZ5IHRoZSBoZWFkZXJzIG9iamVjdC5cbiAgICB0cmFuc2Zvcm1SZXF1ZXN0OiBbXSxcblxuICAgIC8vIGB0cmFuc2Zvcm1SZXNwb25zZWAgYWxsb3dzIGNoYW5nZXMgdG8gdGhlIHJlc3BvbnNlIGRhdGEgdG8gYmUgbWFkZSBiZWZvcmVcbiAgICAvLyBpdCBpcyBwYXNzZWQgdG8gdGhlbi9jYXRjaFxuICAgIHRyYW5zZm9ybVJlc3BvbnNlOiBbXVxuXG4gICAgLypcbiAgICAvLyBgdXJsYCBpcyB0aGUgc2VydmVyIFVSTCB0aGF0IHdpbGwgYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcblxuICAgIC8vIGBtZXRob2RgIGlzIHRoZSByZXF1ZXN0IG1ldGhvZCB0byBiZSB1c2VkIHdoZW4gbWFraW5nIHRoZSByZXF1ZXN0XG4gICAgbWV0aG9kOiAnZ2V0JywgLy8gZGVmYXVsdFxuXG4gICAgLy8gYGJhc2VVUkxgIHdpbGwgYmUgcHJlcGVuZGVkIHRvIGB1cmxgIHVubGVzcyBgdXJsYCBpcyBhYnNvbHV0ZS5cbiAgICAvLyBJdCBjYW4gYmUgY29udmVuaWVudCB0byBzZXQgYGJhc2VVUkxgIGZvciBhbiBpbnN0YW5jZSBvZiBheGlvcyB0byBwYXNzIHJlbGF0aXZlIFVSTHNcbiAgICAvLyB0byBtZXRob2RzIG9mIHRoYXQgaW5zdGFuY2UuXG4gICAgYmFzZVVSTDogJ2h0dHBzOi8vc29tZS1kb21haW4uY29tL2FwaS8nLFxuXG4gICAgLy8gYGhlYWRlcnNgIGFyZSBjdXN0b20gaGVhZGVycyB0byBiZSBzZW50XG4gICAgaGVhZGVyczogeydYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J30sXG5cbiAgICAvLyBgcGFyYW1zYCBhcmUgdGhlIFVSTCBwYXJhbWV0ZXJzIHRvIGJlIHNlbnQgd2l0aCB0aGUgcmVxdWVzdFxuICAgIC8vIE11c3QgYmUgYSBwbGFpbiBvYmplY3Qgb3IgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gICAgcGFyYW1zOiB7XG4gICAgICAgIElEOiAxMjM0NVxuICAgIH0sXG5cbiAgICAvLyBgcGFyYW1zU2VyaWFsaXplcmAgaXMgYW4gb3B0aW9uYWwgZnVuY3Rpb24gaW4gY2hhcmdlIG9mIHNlcmlhbGl6aW5nIGBwYXJhbXNgXG4gICAgLy8gKGUuZy4gaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvcXMsIGh0dHA6Ly9hcGkuanF1ZXJ5LmNvbS9qcXVlcnkucGFyYW0vKVxuICAgIHBhcmFtc1NlcmlhbGl6ZXI6IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gUXMuc3RyaW5naWZ5KHBhcmFtcywge2FycmF5Rm9ybWF0OiAnYnJhY2tldHMnfSlcbiAgICB9LFxuXG4gICAgLy8gYGRhdGFgIGlzIHRoZSBkYXRhIHRvIGJlIHNlbnQgYXMgdGhlIHJlcXVlc3QgYm9keVxuICAgIC8vIE9ubHkgYXBwbGljYWJsZSBmb3IgcmVxdWVzdCBtZXRob2RzICdQVVQnLCAnUE9TVCcsIGFuZCAnUEFUQ0gnXG4gICAgLy8gV2hlbiBubyBgdHJhbnNmb3JtUmVxdWVzdGAgaXMgc2V0LCBtdXN0IGJlIG9mIG9uZSBvZiB0aGUgZm9sbG93aW5nIHR5cGVzOlxuICAgIC8vIC0gc3RyaW5nLCBwbGFpbiBvYmplY3QsIEFycmF5QnVmZmVyLCBBcnJheUJ1ZmZlclZpZXcsIFVSTFNlYXJjaFBhcmFtc1xuICAgIC8vIC0gQnJvd3NlciBvbmx5OiBGb3JtRGF0YSwgRmlsZSwgQmxvYlxuICAgIC8vIC0gTm9kZSBvbmx5OiBTdHJlYW0sIEJ1ZmZlclxuICAgIGRhdGE6IHtcbiAgICAgICAgZmlyc3ROYW1lOiAnRnJlZCdcbiAgICB9LFxuXG4gICAgLy8gYHRpbWVvdXRgIHNwZWNpZmllcyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZWZvcmUgdGhlIHJlcXVlc3QgdGltZXMgb3V0LlxuICAgIC8vIElmIHRoZSByZXF1ZXN0IHRha2VzIGxvbmdlciB0aGFuIGB0aW1lb3V0YCwgdGhlIHJlcXVlc3Qgd2lsbCBiZSBhYm9ydGVkLlxuICAgIHRpbWVvdXQ6IDEwMDAsXG5cbiAgICAvLyBgd2l0aENyZWRlbnRpYWxzYCBpbmRpY2F0ZXMgd2hldGhlciBvciBub3QgY3Jvc3Mtc2l0ZSBBY2Nlc3MtQ29udHJvbCByZXF1ZXN0c1xuICAgIC8vIHNob3VsZCBiZSBtYWRlIHVzaW5nIGNyZWRlbnRpYWxzXG4gICAgd2l0aENyZWRlbnRpYWxzOiBmYWxzZSwgLy8gZGVmYXVsdFxuXG4gICAgLy8gYGFkYXB0ZXJgIGFsbG93cyBjdXN0b20gaGFuZGxpbmcgb2YgcmVxdWVzdHMgd2hpY2ggbWFrZXMgdGVzdGluZyBlYXNpZXIuXG4gICAgLy8gUmV0dXJuIGEgcHJvbWlzZSBhbmQgc3VwcGx5IGEgdmFsaWQgcmVzcG9uc2UgKHNlZSBsaWIvYWRhcHRlcnMvUkVBRE1FLm1kKS5cbiAgICBhZGFwdGVyOiBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIC8vXG4gICAgfSxcblxuICAgIC8vIGBhdXRoYCBpbmRpY2F0ZXMgdGhhdCBIVFRQIEJhc2ljIGF1dGggc2hvdWxkIGJlIHVzZWQsIGFuZCBzdXBwbGllcyBjcmVkZW50aWFscy5cbiAgICAvLyBUaGlzIHdpbGwgc2V0IGFuIGBBdXRob3JpemF0aW9uYCBoZWFkZXIsIG92ZXJ3cml0aW5nIGFueSBleGlzdGluZ1xuICAgIC8vIGBBdXRob3JpemF0aW9uYCBjdXN0b20gaGVhZGVycyB5b3UgaGF2ZSBzZXQgdXNpbmcgYGhlYWRlcnNgLlxuICAgIGF1dGg6IHtcbiAgICAgICAgdXNlcm5hbWU6ICdqYW5lZG9lJyxcbiAgICAgICAgcGFzc3dvcmQ6ICdzMDBwZXJzM2NyZXQnXG4gICAgfSxcblxuICAgIC8vIGByZXNwb25zZUVuY29kaW5nYCBpbmRpY2F0ZXMgZW5jb2RpbmcgdG8gdXNlIGZvciBkZWNvZGluZyByZXNwb25zZXNcbiAgICAvLyBOb3RlOiBJZ25vcmVkIGZvciBgcmVzcG9uc2VUeXBlYCBvZiAnc3RyZWFtJyBvciBjbGllbnQtc2lkZSByZXF1ZXN0c1xuICAgIHJlc3BvbnNlRW5jb2Rpbmc6ICd1dGY4JywgLy8gZGVmYXVsdFxuXG4gICAgLy8gYHhzcmZDb29raWVOYW1lYCBpcyB0aGUgbmFtZSBvZiB0aGUgY29va2llIHRvIHVzZSBhcyBhIHZhbHVlIGZvciB4c3JmIHRva2VuXG4gICAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJywgLy8gZGVmYXVsdFxuXG4gICAgLy8gYHhzcmZIZWFkZXJOYW1lYCBpcyB0aGUgbmFtZSBvZiB0aGUgaHR0cCBoZWFkZXIgdGhhdCBjYXJyaWVzIHRoZSB4c3JmIHRva2VuIHZhbHVlXG4gICAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLCAvLyBkZWZhdWx0XG5cbiAgICAvLyBgb25VcGxvYWRQcm9ncmVzc2AgYWxsb3dzIGhhbmRsaW5nIG9mIHByb2dyZXNzIGV2ZW50cyBmb3IgdXBsb2Fkc1xuICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IGZ1bmN0aW9uIChwcm9ncmVzc0V2ZW50KSB7XG4gICAgICAgIC8vIERvIHdoYXRldmVyIHlvdSB3YW50IHdpdGggdGhlIG5hdGl2ZSBwcm9ncmVzcyBldmVudFxuICAgIH0sXG5cbiAgICAvLyBgb25Eb3dubG9hZFByb2dyZXNzYCBhbGxvd3MgaGFuZGxpbmcgb2YgcHJvZ3Jlc3MgZXZlbnRzIGZvciBkb3dubG9hZHNcbiAgICBvbkRvd25sb2FkUHJvZ3Jlc3M6IGZ1bmN0aW9uIChwcm9ncmVzc0V2ZW50KSB7XG4gICAgICAgIC8vIERvIHdoYXRldmVyIHlvdSB3YW50IHdpdGggdGhlIG5hdGl2ZSBwcm9ncmVzcyBldmVudFxuICAgIH0sXG5cbiAgICAvLyBgbWF4Q29udGVudExlbmd0aGAgZGVmaW5lcyB0aGUgbWF4IHNpemUgb2YgdGhlIGh0dHAgcmVzcG9uc2UgY29udGVudCBpbiBieXRlcyBhbGxvd2VkXG4gICAgbWF4Q29udGVudExlbmd0aDogMjAwMCxcblxuICAgIC8vIGB2YWxpZGF0ZVN0YXR1c2AgZGVmaW5lcyB3aGV0aGVyIHRvIHJlc29sdmUgb3IgcmVqZWN0IHRoZSBwcm9taXNlIGZvciBhIGdpdmVuXG4gICAgLy8gSFRUUCByZXNwb25zZSBzdGF0dXMgY29kZS4gSWYgYHZhbGlkYXRlU3RhdHVzYCByZXR1cm5zIGB0cnVlYCAob3IgaXMgc2V0IHRvIGBudWxsYFxuICAgIC8vIG9yIGB1bmRlZmluZWRgKSwgdGhlIHByb21pc2Ugd2lsbCBiZSByZXNvbHZlZDsgb3RoZXJ3aXNlLCB0aGUgcHJvbWlzZSB3aWxsIGJlXG4gICAgLy8gcmVqZWN0ZWQuXG4gICAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwOyAvLyBkZWZhdWx0XG4gICAgfSxcblxuICAgIC8vIGBtYXhSZWRpcmVjdHNgIGRlZmluZXMgdGhlIG1heGltdW0gbnVtYmVyIG9mIHJlZGlyZWN0cyB0byBmb2xsb3cgaW4gbm9kZS5qcy5cbiAgICAvLyBJZiBzZXQgdG8gMCwgbm8gcmVkaXJlY3RzIHdpbGwgYmUgZm9sbG93ZWQuXG4gICAgbWF4UmVkaXJlY3RzOiA1LCAvLyBkZWZhdWx0XG5cbiAgICAvLyBgc29ja2V0UGF0aGAgZGVmaW5lcyBhIFVOSVggU29ja2V0IHRvIGJlIHVzZWQgaW4gbm9kZS5qcy5cbiAgICAvLyBlLmcuICcvdmFyL3J1bi9kb2NrZXIuc29jaycgdG8gc2VuZCByZXF1ZXN0cyB0byB0aGUgZG9ja2VyIGRhZW1vbi5cbiAgICAvLyBPbmx5IGVpdGhlciBgc29ja2V0UGF0aGAgb3IgYHByb3h5YCBjYW4gYmUgc3BlY2lmaWVkLlxuICAgIC8vIElmIGJvdGggYXJlIHNwZWNpZmllZCwgYHNvY2tldFBhdGhgIGlzIHVzZWQuXG4gICAgc29ja2V0UGF0aDogbnVsbCwgLy8gZGVmYXVsdFxuXG4gICAgLy8gYGh0dHBBZ2VudGAgYW5kIGBodHRwc0FnZW50YCBkZWZpbmUgYSBjdXN0b20gYWdlbnQgdG8gYmUgdXNlZCB3aGVuIHBlcmZvcm1pbmcgaHR0cFxuICAgIC8vIGFuZCBodHRwcyByZXF1ZXN0cywgcmVzcGVjdGl2ZWx5LCBpbiBub2RlLmpzLiBUaGlzIGFsbG93cyBvcHRpb25zIHRvIGJlIGFkZGVkIGxpa2VcbiAgICAvLyBga2VlcEFsaXZlYCB0aGF0IGFyZSBub3QgZW5hYmxlZCBieSBkZWZhdWx0LlxuICAgIGh0dHBBZ2VudDogbmV3IGh0dHAuQWdlbnQoeyBrZWVwQWxpdmU6IHRydWUgfSksXG4gICAgaHR0cHNBZ2VudDogbmV3IGh0dHBzLkFnZW50KHsga2VlcEFsaXZlOiB0cnVlIH0pLFxuXG4gICAgLy8gJ3Byb3h5JyBkZWZpbmVzIHRoZSBob3N0bmFtZSBhbmQgcG9ydCBvZiB0aGUgcHJveHkgc2VydmVyXG4gICAgLy8gVXNlIGBmYWxzZWAgdG8gZGlzYWJsZSBwcm94aWVzLCBpZ25vcmluZyBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXG4gICAgLy8gYGF1dGhgIGluZGljYXRlcyB0aGF0IEhUVFAgQmFzaWMgYXV0aCBzaG91bGQgYmUgdXNlZCB0byBjb25uZWN0IHRvIHRoZSBwcm94eSwgYW5kXG4gICAgLy8gc3VwcGxpZXMgY3JlZGVudGlhbHMuXG4gICAgLy8gVGhpcyB3aWxsIHNldCBhbiBgUHJveHktQXV0aG9yaXphdGlvbmAgaGVhZGVyLCBvdmVyd3JpdGluZyBhbnkgZXhpc3RpbmdcbiAgICAvLyBgUHJveHktQXV0aG9yaXphdGlvbmAgY3VzdG9tIGhlYWRlcnMgeW91IGhhdmUgc2V0IHVzaW5nIGBoZWFkZXJzYC5cbiAgICBwcm94eToge1xuICAgICAgICBob3N0OiAnMTI3LjAuMC4xJyxcbiAgICAgICAgcG9ydDogOTAwMCxcbiAgICAgICAgYXV0aDoge1xuICAgICAgICAgICAgdXNlcm5hbWU6ICdtaWtleW1pa2UnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICdyYXB1bnozbCdcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBgY2FuY2VsVG9rZW5gIHNwZWNpZmllcyBhIGNhbmNlbCB0b2tlbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGNhbmNlbCB0aGUgcmVxdWVzdFxuICAgIC8vIChzZWUgQ2FuY2VsbGF0aW9uIHNlY3Rpb24gYmVsb3cgZm9yIGRldGFpbHMpXG4gICAgY2FuY2VsVG9rZW46IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiAoY2FuY2VsKSB7XG5cbiAgICB9KVxuICAgICovXG5cbn07XG4iLCJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IFJlcXVlc3RPcHRpb25zIGZyb20gJy4vUmVxdWVzdE9wdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KHRyYW5zZm9ybWVyLCBjb250ZXh0KSB7XG4gICAgaWYoIWlzRnVuY3Rpb24odHJhbnNmb3JtZXIpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHRyYW5zZm9ybWVyIG11c3QgYmUgZGVmaW5lZCBhcyBhIGZ1bmN0aW9uIHdpdGggdHdvIGFyZ3VtZW50cyAoZGF0YSwgaGVhZGVycykuJyk7XG4gICAgfVxuXG4gICAgKGNvbnRleHQgfHwgUmVxdWVzdE9wdGlvbnMudHJhbnNmb3JtUmVxdWVzdCkucHVzaCh0cmFuc2Zvcm1lcik7XG59XG4iLCJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IFJlcXVlc3RPcHRpb25zIGZyb20gJy4vUmVxdWVzdE9wdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZSh0cmFuc2Zvcm1lciwgY29udGV4dCkge1xuICAgIGlmKCFpc0Z1bmN0aW9uKHRyYW5zZm9ybWVyKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSB0cmFuc2Zvcm1lciBtdXN0IGJlIGRlZmluZWQgYXMgYSBmdW5jdGlvbiAoZGF0YSkuJyk7XG4gICAgfVxuXG4gICAgKGNvbnRleHQgfHwgUmVxdWVzdE9wdGlvbnMudHJhbnNmb3JtUmVzcG9uc2UpLnB1c2godHJhbnNmb3JtZXIpO1xufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50Jztcbi8vIGltcG9ydCB7IGJpbmQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgZmlyc3QgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBjbG9uZURlZXAgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBjYW1lbENhc2UgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG4vL2ltcG9ydCB7IG1lcmdlV2l0aCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCBSZXF1ZXN0T3B0aW9ucyBmcm9tICcuL1JlcXVlc3RPcHRpb25zJztcbmltcG9ydCB0cmFuc2Zvcm1SZXF1ZXN0IGZyb20gJy4vVHJhbnNmb3JtUmVxdWVzdCc7XG5pbXBvcnQgdHJhbnNmb3JtUmVzcG9uc2UgZnJvbSAnLi9UcmFuc2Zvcm1SZXNwb25zZSc7XG5cbmNvbnN0IFBST1hZX09QVElPTl9QUk9QRVJUSUVTID0gW1xuICAgICdoZWFkZXJzJyxcbiAgICAncGFyYW1zJyxcbiAgICAnZGF0YSdcbl07XG5cbmNvbnN0IFBST1hZX09QVElPTl9NRVRIT0RTID0ge1xuICAgIGdldChwcm9wLCBjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY29udGV4dFtwcm9wXTtcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIHNldChwcm9wLCBjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnRleHRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGFkZChwcm9wLCBjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29udGV4dFtwcm9wXVtrZXldID0gdmFsdWU7XG4gICAgICAgIH07XG4gICAgfSxcbiAgICByZW1vdmUocHJvcCwgY29udGV4dCkge1xuICAgICAgICByZXR1cm4gKGtleSkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIGNvbnRleHRbcHJvcF1ba2V5XTtcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1lcmdlKHByb3AsIGNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIChrZXksIHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgZXh0ZW5kKGNvbnRleHRbcHJvcF0sIGtleSk7XG4gICAgICAgIH07XG4gICAgfVxufTtcblxuY29uc3QgbWV0aG9kID0gZnVuY3Rpb24oYWN0aW9uLCBwcm9wKSB7XG4gICAgcmV0dXJuIGNhbWVsQ2FzZShbYWN0aW9uLCBwcm9wXS5qb2luKCcgJykpO1xufTtcblxuY29uc3QgY2hhaW5hYmxlID0gZnVuY3Rpb24ocHJvcCkge1xuICAgIHJldHVybiAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZihrZXkgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgICAgICAgdGhpc1ttZXRob2QoJ3NldCcsIHByb3ApXShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoaXNPYmplY3Qoa2V5KSkge1xuICAgICAgICAgICAgdGhpc1ttZXRob2QoJ21lcmdlJywgcHJvcCldKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzW21ldGhvZCgnYWRkJywgcHJvcCldKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIG1lcmdlKCkge1xuICAgIGNvbnN0IGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgY29uc3QgaXRlbXMgPSBhcmdzLnNwbGljZSgxKTtcbiAgICBsZXQgc3ViamVjdCA9IGZpcnN0KGFyZ3MpO1xuXG4gICAgZm9yKGxldCBpIGluIGl0ZW1zKSB7XG4gICAgICAgIHN1YmplY3QgPSBtZXJnZVdpdGgoc3ViamVjdCwgaXRlbXNbaV0sIChzdWJqZWN0LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYoaXNBcnJheShzdWJqZWN0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdWJqZWN0LmNvbmNhdCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGlzT2JqZWN0KHN1YmplY3QpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4dGVuZChzdWJqZWN0LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YmplY3Q7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcXVlc3Qge1xuXG4gICAgY29uc3RydWN0b3IodXJsLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgdGhpcy4kb3B0aW9ucyA9IG1lcmdlKHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgZGF0YToge30sXG4gICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgIH0sIGNsb25lRGVlcChSZXF1ZXN0T3B0aW9ucyksIG9wdGlvbnMsIHtcbiAgICAgICAgICAgIGNhbmNlbFRva2VuOiBuZXcgYXhpb3MuQ2FuY2VsVG9rZW4oY2FuY2VsID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRjYW5jZWwgPSBjYW5jZWw7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICBlYWNoKFBST1hZX09QVElPTl9NRVRIT0RTLCAoY2FsbGJhY2ssIGtleSkgPT4ge1xuICAgICAgICAgICAgdGhpc1ttZXRob2Qoa2V5LCAnb3B0aW9uJyldID0gYmluZChjYWxsYmFjaykoJyRvcHRpb25zJywgdGhpcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGVhY2goUFJPWFlfT1BUSU9OX1BST1BFUlRJRVMsIChwcm9wKSA9PiB7XG4gICAgICAgICAgICBlYWNoKFBST1hZX09QVElPTl9NRVRIT0RTLCAoY2FsbGJhY2ssIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXNbbWV0aG9kKGtleSwgcHJvcCldID0gYmluZChjYWxsYmFjaykocHJvcCwgdGhpcy4kb3B0aW9ucyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpc1twcm9wXSA9IGJpbmQoY2hhaW5hYmxlLCB0aGlzKShwcm9wKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgIH1cblxuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLiRlcnJvciA9IG51bGw7XG4gICAgICAgIHRoaXMuJHN0YXR1cyA9IG51bGw7XG4gICAgICAgIHRoaXMuJHN0YXR1c1RleHQgPSBudWxsO1xuICAgICAgICB0aGlzLiRyZXNwb25zZSA9IG51bGw7XG4gICAgICAgIHRoaXMuJHJlcXVlc3RTZW50QXQgPSBudWxsO1xuICAgICAgICB0aGlzLiRyZXNwb25zZVJlY2VpdmVkQXQgPSBudWxsO1xuICAgIH1cblxuICAgIGhhc1NlbnQoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuJHJlcXVlc3RTZW50QXQ7XG4gICAgfVxuXG4gICAgaGFzUmVzcG9uc2UoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuJHJlc3BvbnNlUmVjZWl2ZWRBdDtcbiAgICB9XG5cbiAgICBwYXNzZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc1Jlc3BvbnNlKCkgJiYgIXRoaXMuJGVycm9yO1xuICAgIH1cblxuICAgIGZhaWxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzUmVzcG9uc2UoKSAmJiAhIXRoaXMuJGVycm9yO1xuICAgIH1cblxuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgIXRoaXMuJHJlc3BvbnNlICYmIHRoaXMuJGNhbmNlbCgpO1xuICAgIH1cblxuICAgIGdldChwYXJhbXMgPSB7fSwgaGVhZGVycyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmFtcyhwYXJhbXMpLmhlYWRlcnMoaGVhZGVycykuc2VuZCgnZ2V0Jyk7XG4gICAgfVxuXG4gICAgcG9zdChkYXRhID0ge30sIGhlYWRlcnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhKGRhdGEpLmhlYWRlcnMoaGVhZGVycykuc2VuZCgncG9zdCcpO1xuICAgIH1cblxuICAgIHB1dChkYXRhID0ge30sIGhlYWRlcnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhKGRhdGEpLmhlYWRlcnMoaGVhZGVycykuc2VuZCgncHV0Jyk7XG4gICAgfVxuXG4gICAgZGVsZXRlKGhlYWRlcnMgPSB7fSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXJzKGhlYWRlcnMpLnNlbmQoJ2RlbGV0ZScpO1xuICAgIH1cblxuICAgIHNlbmQobWV0aG9kKSB7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgdGhpcy4kcmVxdWVzdFNlbnRBdCA9IG1vbWVudCgpO1xuICAgICAgICB0aGlzLmFkZE9wdGlvbignbWV0aG9kJywgbWV0aG9kKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgYXhpb3ModGhpcy4kb3B0aW9ucykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZXNwb25zZVJlY2VpdmVkQXQgPSBtb21lbnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdGF0dXMgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RhdHVzVGV4dCA9IHJlc3BvbnNlLnN0YXR1c1RleHQ7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVzcG9uc2UgPSBlcnJvci5yZXNwb25zZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZXNwb25zZVJlY2VpdmVkQXQgPSBtb21lbnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdGF0dXMgPSBlcnJvci5yZXNwb25zZSA/IGVycm9yLnJlc3BvbnNlLnN0YXR1cyA6IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RhdHVzVGV4dCA9IGVycm9yLnJlc3BvbnNlID8gZXJyb3IucmVzcG9uc2Uuc3RhdHVzVGV4dCA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UgfHwgZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHRyYW5zZm9ybVJlcXVlc3QodHJhbnNmb3JtZXIpIHtcbiAgICAgICAgaWYoIXRoaXMuJG9wdGlvbnMudHJhbnNmb3JtUmVxdWVzdCkge1xuICAgICAgICAgICAgdGhpcy4kb3B0aW9ucy50cmFuc2Zvcm1SZXF1ZXN0ID0gW107XG4gICAgICAgIH1cblxuICAgICAgICB0cmFuc2Zvcm1SZXF1ZXN0KHRyYW5zZm9ybWVyLCB0aGlzLiRvcHRpb25zLnRyYW5zZm9ybVJlcXVlc3QpO1xuICAgIH1cblxuICAgIHRyYW5zZm9ybVJlc3BvbnNlKHRyYW5zZm9ybWVyKSB7XG4gICAgICAgIGlmKHRoaXMuJG9wdGlvbnMudHJhbnNmb3JtUmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHRoaXMuJG9wdGlvbnMudHJhbnNmb3JtUmVzcG9uc2UgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyYW5zZm9ybVJlc3BvbnNlKHRyYW5zZm9ybWVyLCB0aGlzLiRvcHRpb25zLnRyYW5zZm9ybVJlc3BvbnNlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW50ZXJjZXB0UmVxdWVzdChzdWNjZXNzLCBlcnJvcikge1xuICAgICAgICB0aGlzLmludGVyY2VwdG9ycygpLnJlcXVlc3QudXNlKHN1Y2Nlc3MsIGVycm9yKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaW50ZXJjZXB0UmVzcG9uc2Uoc3VjY2VzcywgZXJyb3IpIHtcbiAgICAgICAgdGhpcy5pbnRlcmNlcHRvcnMoKS5yZXNwb25zZS51c2Uoc3VjY2VzcywgZXJyb3IpO1xuICAgIH1cblxuICAgIHN0YXRpYyBpbnRlcmNlcHRvcnMoKSB7XG4gICAgICAgIHJldHVybiBheGlvcy5pbnRlcmNlcHRvcnM7XG4gICAgfVxuXG4gICAgc3RhdGljIG9wdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmKGlzT2JqZWN0KGtleSkpIHtcbiAgICAgICAgICAgIG1lcmdlKFJlcXVlc3RPcHRpb25zLCBrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0ge307XG4gICAgICAgICAgICBvcHRpb25ba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgbWVyZ2UoUmVxdWVzdE9wdGlvbnMsIG9wdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgbWFrZSh1cmwsIHBhcmFtcyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcyh1cmwsIHBhcmFtcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi4vUmVxdWVzdCc7XG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNOdWxsIH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgcGlja0J5IH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNVbmRlZmluZWQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGVsIHtcblxuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdCB0aGUgbW9kZWwgaW5zdGFuY2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhIG9iamVjdFxuICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRhdGEgPSB7fSwgcGFyYW1zID0ge30pIHtcbiAgICAgICAgdGhpcy4kcmVxdWVzdCA9IG51bGw7XG4gICAgICAgIHRoaXMuJGtleSA9IHRoaXMua2V5KCk7XG4gICAgICAgIHRoaXMuJGZpbGVzID0gdGhpcy5maWxlcygpO1xuICAgICAgICB0aGlzLiRwcm9wZXJ0aWVzID0gdGhpcy5wcm9wZXJ0aWVzKCk7XG5cbiAgICAgICAgZWFjaChwYXJhbXMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICB0aGlzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgdGhlIG1vZGVsIHdpdGggdGhlIGdpdmVuIGRhdGEgd2l0aG91dCBjb25zaWRlcmluZyB0aGUgZGF0YVxuICAgICAqIGFzIFwiY2hhbmdlZFwiLlxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgb2JqZWN0XG4gICAgICogQHJldHVybiB0aGlzXG4gICAgICovXG4gICAgaW5pdGlhbGl6ZShkYXRhKSB7XG4gICAgICAgIHRoaXMuJGV4aXN0cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLiRjaGFuZ2VkID0ge307XG4gICAgICAgIHRoaXMuJGF0dHJpYnV0ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5maWxsKGRhdGEpO1xuICAgICAgICB0aGlzLiRpbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lIHRoZSBjb3JyZXNwb25kaW5nIEFQSSBlbmRwb2ludCBzbHVnXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIGVuZHBvaW50KCkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZSB0aGUgY29ycmVzcG9uZGluZyB1cmkgc2NoZW1hLlxuICAgICAqXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICB1cmkoKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAodGhpcy5lbmRwb2ludCgpIHx8ICcnKSxcbiAgICAgICAgICAgICh0aGlzLmV4aXN0cygpID8gdGhpcy5pZCgpIDogbnVsbClcbiAgICAgICAgXVxuICAgICAgICAuZmlsdGVyKHZhbHVlID0+ICEhdmFsdWUpXG4gICAgICAgIC5jb25jYXQoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAuam9pbignLycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGUgcHJpbWFyeSBrZXkgdmFsdWUgZm9yIHRoZSBtb2RlbFxuICAgICAqXG4gICAgICogQHJldHVybiB7TnVtYmVyfVxuICAgICAqL1xuICAgIGlkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQodGhpcy5rZXkoKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lIGEgcHJpbWFyeSBrZXkuIFRoaXMgaXMgdXNlZCB0byBkZXRlcm1pbmUgaWYgdGhlIG1vZGVsIGV4aXN0cyBhbmRcbiAgICAgKiB3aGljaCBlbmRwb2ludCB0byB1c2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHN0cmluZ1xuICAgICAqL1xuICAgIGtleSgpIHtcbiAgICAgICAgcmV0dXJuICdpZCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFuIGFycmF5IG9mIHByb3BlcnRpZXMgdGhhdCBhcmUgc2VudCB0byB0aGUgQVBJLiBJZiBubyBwcm9wZXJ0aWVzXG4gICAgICogYXJlIGRlZmluZWQsIHRoZW4gYWxsIHRoZSBhdHRyaWJ1dGVzIHdpbGwgYmUgaW5jbHVkZWQgaW4gdGhlIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIGFycmF5XG4gICAgICovXG4gICAgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBhbiBhcnJheSBvZiBmaWxlIHByb3BlcnRpZXMgdGhhdCBhcmUgc2VudCB0byB0aGUgQVBJLiBJZiBubyBmaWVzXG4gICAgICogYXJlIGRlZmluZWQsIHRoZW4gcmVxdWVzdCB3aWxsIGFsd2F5cyBiZSBzZW50IHdpdGggSlNPTiB2cy4gbXVsdGlwYXJ0LlxuICAgICAqXG4gICAgICogQHJldHVybiBhcnJheVxuICAgICAqL1xuICAgIGZpbGVzKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBhdHRyaWJ1dGVzIGluIHRoZSBtb2RlbCB3aXRoIHRoZSBkYXRhIGdpdmVuLlxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgb2JqZWN0XG4gICAgICogQHJldHVybiB0aGlzXG4gICAgICovXG4gICAgZmlsbChkYXRhKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlcyhkYXRhKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgb25lIG9yIG1vcmUgYXR0cmlidXRlcyBmcm9tIHRoZSBtb2RlbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhIHN0cmluZ3xhcnJheVxuICAgICAqIEByZXR1cm4gYXJyYXl8bWl4ZWRcbiAgICAgKi9cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIGlmKGlzQXJyYXkoa2V5KSB8fCBpc09iamVjdChrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGVzKCkuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3Igc2V0QXR0cmlidXRlcygpIGV4Y2VwdCB0aGlzIG1ldGhvZCByZXR1cm5zIGB0aGlzYC4gVGhpcyBtZXRob2RcbiAgICAgKiBhbHNvIGFjY2VwdHMgYW4gYXJyYXkgb2YgdmFsdWVzIG9yIGtleS92YWx1ZSBwYWlyLlxuICAgICAqXG4gICAgICogQHJldHVybiB0aGlzXG4gICAgICovXG4gICAgc2V0KGtleSwgdmFsdWUgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYoaXNBcnJheShrZXkpIHx8IGlzT2JqZWN0KGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlcyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIHRoZSBkZWZpbmVkIGF0dHJpYnV0ZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIGFycmF5XG4gICAgICovXG4gICAgZ2V0QXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGF0dHJpYnV0ZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjaGFuZ2VkIGF0dHJpYnV0ZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4gYXJyYXlcbiAgICAgKi9cbiAgICBnZXRDaGFuZ2VkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuJGNoYW5nZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgY2hhbmdlZCBhdHRyaWJ1dGVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIGFycmF5XG4gICAgICovXG4gICAgZ2V0T3JpZ2luYWxWYWx1ZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGNoYW5nZWRba2V5XSB8fCB0aGlzLiRhdHRyaWJ1dGVzW2tleV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBSZXF1ZXN0IG9iamVjdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge21peGVkfVxuICAgICAqL1xuICAgIGdldFJlcXVlc3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRyZXF1ZXN0O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdW5jaGFuZ2VkIGF0dHJpYnV0ZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4gYXJyYXlcbiAgICAgKi9cbiAgICBnZXRVbmNoYW5nZWRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy4kYXR0cmlidXRlcykuZmlsdGVyKGtleSA9PiAhKGtleSBpbiB0aGlzLiRjaGFuZ2VkKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGFuIGF0dHJpYnV0ZSB3aXRoIGEgZ2l2ZW4ga2V5LiBJZiBubyBrZXkgaXMgZGVmaW5lZFxuICAgICAqXG4gICAgICogQHBhcmFtIGtleSBzdHJpbmdcbiAgICAgKiBAcGFyYW0gZGVmYXVsdCB1bmRlZmluZWR8bWl4ZWRcbiAgICAgKiBAcmV0dXJuIGFycmF5XG4gICAgICovXG4gICAgZ2V0QXR0cmlidXRlKGtleSwgdmFsdWUgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGF0dHJpYnV0ZXNba2V5XSB8fCB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYW4gYXJyYXkgb3Igb2JqZWN0IG9mIGRhdGEgYXMgYXR0cmlidXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBhdHRyaWJ1dGVzIGFycmF5fG9iamVjdFxuICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAqL1xuICAgIHNldEF0dHJpYnV0ZXMoZGF0YSkge1xuICAgICAgICBpZihpc0FycmF5KGRhdGEpIHx8IGlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICAgICAgICBlYWNoKGRhdGEsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBhbiBhdHRyaWJ1dGUgd2l0aCBhIGdpdmVuIGtleS92YWx1ZSBwYWlyLiBUaGlzIHdpbGwgdHJhY2sgdGhlIGNoYW5nZXNcbiAgICAgKiBpbiB0aGUgbW9kZWwgd2l0aGluIHRoZSBgdGhpcy4kY2hhbmdlZGAgcHJvcGVydHkuIElmIHRoZSBwcmltYXJ5IGtleVxuICAgICAqIGlzIHNldCwgaXQgd2lsbCBhbHNvIGNoYW5nZSB0aGUgYHRoaXMuJGV4aXN0c2AgcHJvcGVydHkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ga2V5IHN0cmluZ1xuICAgICAqIEBwYXJhbSB2YWx1ZSBtaXhlZFxuICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAqL1xuICAgIHNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmKHRoaXMuZ2V0QXR0cmlidXRlKGtleSkgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUF0dHJpYnV0ZUNoYW5nZShrZXksIHZhbHVlKTtcblxuICAgICAgICAgICAgaWYoaXNVbmRlZmluZWQodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuJGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJGF0dHJpYnV0ZXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV2ZXJ0IHRoZSBtb2RlbCB0byBpdHMgb3JpZ2luYWwgc3RhdGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIGJvb2xcbiAgICAgKi9cbiAgICByZXZlcnQoKSB7XG4gICAgICAgIGVhY2godGhpcy4kY2hhbmdlZCwgKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGlmKCFpc1VuZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRhdHRyaWJ1dGVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLiRhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJGNoYW5nZWQgPSB7fTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGlmIHRoZSBtb2RlbCBoYXMgYSBwcmltYXJ5IGtleSBzZXQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIGJvb2xcbiAgICAgKi9cbiAgICBleGlzdHMoKSB7XG4gICAgICAgIHJldHVybiAhIXRoaXMuJGV4aXN0cztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtb2RlbCBiZWVuIGNoYW5nZWQgb3Igbm90LlxuICAgICAqXG4gICAgICogQHJldHVybiBib29sXG4gICAgICovXG4gICAgaGFzQ2hhbmdlZChrZXkpIHtcbiAgICAgICAgcmV0dXJuICFrZXkgPyB0aGlzLmdldENoYW5nZWRBdHRyaWJ1dGVzKCkubGVuZ3RoID4gMCA6ICFpc1VuZGVmaW5lZCh0aGlzLiRjaGFuZ2VkW2tleV0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERvZXMgdGhlIG1vZGVsIGhhdmUgYW55IEZpbGUgb2JqZWN0cy4gSWYgc28sIG5lZWQgdG8gc2VuZCBhcyBtdWx0aXBhcnQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIGJvb2xcbiAgICAgKi9cbiAgICBoYXNGaWxlcygpIHtcbiAgICAgICAgZnVuY3Rpb24gY291bnQoZmlsZXMsIHRvdGFsID0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZpbGVzLnJlZHVjZSgoY2FycnksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhcnJ5ICsgY291bnQodmFsdWUsIHRvdGFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZih2YWx1ZSBpbnN0YW5jZW9mIEZpbGUgfHwgdmFsdWUgaW5zdGFuY2VvZiBGaWxlTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FycnkgKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhcnJ5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRvdGFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb3VudCh0aGlzLnRvSlNPTigpKSAhPT0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgc2V0dGluZ3MgdGhlICRjaGFuZ2VkIGF0dHJpYnV0ZXMgd2hlbiBhbiBhdHRyaWJ1dGUgdmFsdWUgaXMgc2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIGtleSBzdHJpbmdcbiAgICAgKiBAcGFyYW0gdmFsdWUgbWl4ZWRcbiAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgKi9cbiAgICBoYW5kbGVBdHRyaWJ1dGVDaGFuZ2Uoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZih0aGlzLiRpbml0aWFsaXplZCkge1xuICAgICAgICAgICAgaWYodGhpcy4kY2hhbmdlZFtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLiRjaGFuZ2VkW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKCEoa2V5IGluIHRoaXMuJGNoYW5nZWQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY2hhbmdlZFtrZXldID0gdGhpcy5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGFuZGxlUHJpbWFyeUtleUNoYW5nZShrZXksIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYW4gYXJyYXkgb3Igb2JqZWN0IG9mIGRhdGEgYXMgYXR0cmlidXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBrZXkgc3RyaW5nXG4gICAgICogQHBhcmFtIHZhbHVlIG1peGVkXG4gICAgICogQHJldHVybiB2b2lkXG4gICAgICovXG4gICAgaGFuZGxlUHJpbWFyeUtleUNoYW5nZShrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmKHRoaXMuJGtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICB0aGlzLiRleGlzdHMgPSAhaXNVbmRlZmluZWQodmFsdWUpICYmICFpc051bGwodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FuY2VsIHRoZSBjdXJyZW50IHJlcXVlc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhIG9iamVjdFxuICAgICAqIEByZXR1cm4gYm9vbFxuICAgICAqL1xuICAgIGNhbmNlbCgpIHtcbiAgICAgICAgdGhpcy4kcmVxdWVzdCAmJiB0aGlzLiRyZXF1ZXN0LmNhbmNlbCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNhdmUgdGhlIG1vZGVsIHRvIHRoZSBkYXRhYmFzZVxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgb2JqZWN0XG4gICAgICogQHJldHVybiBib29sXG4gICAgICovXG4gICAgc2F2ZShkYXRhID0ge30sIGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5leGlzdHMoKSA/IHRoaXMuY3JlYXRlKGRhdGEsIGNvbmZpZykgOiB0aGlzLnVwZGF0ZShkYXRhLCBjb25maWcpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBtb2RlbFxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgb2JqZWN0XG4gICAgICogQHJldHVybiBib29sXG4gICAgICovXG4gICAgY3JlYXRlKGRhdGEgPSB7fSwgY29uZmlnID0ge30pIHtcbiAgICAgICAgdGhpcy5maWxsKGRhdGEpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gIXRoaXMuaGFzRmlsZXMoKSA/IHRoaXMudG9Kc29uKCkgOiB0aGlzLnRvRm9ybURhdGEoKTtcblxuICAgICAgICAgICAgdGhpcy4kcmVxdWVzdCA9IHRoaXMuY29uc3RydWN0b3IucmVxdWVzdCh0aGlzLnVyaSgpLCBPYmplY3QuYXNzaWduKHt9LCBjb25maWcpKTtcbiAgICAgICAgICAgIHRoaXMuJHJlcXVlc3QucG9zdChkYXRhKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMuZmlsbChyZXNwb25zZSkpO1xuICAgICAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGFuIGV4aXN0aW5nIG1vZGVsXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSBvYmplY3RcbiAgICAgKiBAcmV0dXJuIGJvb2xcbiAgICAgKi9cbiAgICB1cGRhdGUoZGF0YSA9IHt9LCBjb25maWcgPSB7fSkge1xuICAgICAgICB0aGlzLmZpbGwoZGF0YSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSAhdGhpcy5oYXNGaWxlcygpID8gdGhpcy50b0pzb24oKSA6IHRoaXMudG9Gb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICB0aGlzLiRyZXF1ZXN0ID0gdGhpcy5jb25zdHJ1Y3Rvci5yZXF1ZXN0KHRoaXMudXJpKCksIGNvbmZpZyk7XG4gICAgICAgICAgICB0aGlzLiRyZXF1ZXN0Wyh0aGlzLmhhc0ZpbGVzKCkgPyAncG9zdCcgOiAncHV0JyldKGRhdGEpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5maWxsKHJlc3BvbnNlKSk7XG4gICAgICAgICAgICB9LCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGUgYW4gZXhpc3RpbmcgbW9kZWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSAge29iamVjdH0gY29uZmlnXG4gICAgICogQHJldHVybiB7Ym9vbH1cbiAgICAgKi9cbiAgICBkZWxldGUoY29uZmlnID0ge30pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmKCF0aGlzLmV4aXN0cygpKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignVGhlIG1vZGVsIG11c3QgaGF2ZSBhIHByaW1hcnkga2V5IGJlZm9yZSBpdCBjYW4gYmUgZGVsZXRlLicpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4kcmVxdWVzdCA9IHRoaXMuY29uc3RydWN0b3IucmVxdWVzdCh0aGlzLnVyaSgpLCBjb25maWcpO1xuICAgICAgICAgICAgdGhpcy4kcmVxdWVzdC5kZWxldGUoKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0sIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbmNlbCB0aGUgY3VycmVudCBIVFRQIHJlcXVlc3QgaWYgb25lIGV4aXN0cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3NlbGZ9XG4gICAgICovXG4gICAgY2FuY2VsKCkge1xuICAgICAgICBpZih0aGlzLiRyZXF1ZXN0KSB7XG4gICAgICAgICAgICB0aGlzLiRyZXF1ZXN0LmNhbmNlbCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCB0aGUgTW9kZWwgaW5zdGFuY2UgdG8gYSBGb3JtRGF0YSBpbnN0YW5jZVxuICAgICAqXG4gICAgICogQHJldHVybiBvYmplY3RcbiAgICAgKi9cbiAgICB0b0Zvcm1EYXRhKCkge1xuICAgICAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgZWFjaCh0aGlzLnRvSlNPTigpLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBlYWNoKHZhbHVlLCBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIShpdGVtIGluc3RhbmNlb2YgRmlsZSkgJiYgKGlzT2JqZWN0KGl0ZW0pIHx8IGlzQXJyYXkoaXRlbSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0gSlNPTi5zdHJpbmdpZnkoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBmb3JtLmFwcGVuZChrZXkucmVwbGFjZSgvKC4rKShcXFsuK1xcXT8pJC8sICckMScpKydbXScsIGl0ZW0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZighKHZhbHVlIGluc3RhbmNlb2YgRmlsZSkgJiYgaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZighaXNOdWxsKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZm9ybTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IHRoZSBpbnN0YW5jZSB0byBKU09OIHBheWxvYWRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gb2JqZWN0XG4gICAgICovXG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gcGlja0J5KHRoaXMuJGF0dHJpYnV0ZXMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuJHByb3BlcnRpZXMubGVuZ3RoIHx8IChcbiAgICAgICAgICAgICAgICBrZXkgPT09IHRoaXMua2V5KCkgfHwgdGhpcy4kcHJvcGVydGllcy5pbmRleE9mKGtleSkgIT09IC0xXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgdG9KU09OXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIG9iamVjdFxuICAgICAqL1xuICAgIHRvSnNvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9KU09OKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2VhcmNoIGZvciBhIGNvbGxlY3Rpb24gb2YgbW9kZWxzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSBvYmplY3RcbiAgICAgKiBAcmV0dXJuIGJvb2xcbiAgICAgKi9cbiAgICBzdGF0aWMgc2VhcmNoKHBhcmFtcyA9IHt9LCBjb25maWcgPSB7fSkge1xuICAgICAgICBjb25zdCBtb2RlbCA9IG5ldyB0aGlzO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBtb2RlbC4kcmVxdWVzdCA9IHRoaXMucmVxdWVzdChjb25maWcudXJpIHx8IG1vZGVsLnVyaSgpLCBjb25maWcpO1xuICAgICAgICAgICAgbW9kZWwuJHJlcXVlc3QuZ2V0KHBhcmFtcykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZGF0YSA9IHJlc3BvbnNlLmRhdGEubWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHRoaXMoZGF0YSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0sIGVycm9ycyA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9ycyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCBhbiBleGlzdGluZyBtb2RlbCBieSBpZFxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgb2JqZWN0XG4gICAgICogQHJldHVybiBib29sXG4gICAgICovXG4gICAgc3RhdGljIGZpbmQoaWQsIGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtb2RlbCA9IG5ldyB0aGlzO1xuICAgICAgICAgICAgbW9kZWwuJHJlcXVlc3QgPSB0aGlzLnJlcXVlc3QobW9kZWwudXJpKGlkKSwgY29uZmlnKTtcbiAgICAgICAgICAgIG1vZGVsLiRyZXF1ZXN0LmdldCgpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUobW9kZWwuaW5pdGlhbGl6ZShyZXNwb25zZSkpO1xuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgcmVxdWVzdCBmcm9tIHRoZSBtb2RlbCBkYXRhXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSBvYmplY3RcbiAgICAgKiBAcmV0dXJuIGJvb2xcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVxdWVzdCh1cmwsIGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVxdWVzdCh1cmwsIGNvbmZpZyk7XG4gICAgfVxuXG59XG4iLCI8dGVtcGxhdGU+XG4gICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwib25TdWJtaXRcIiA6Y2xhc3M9XCJ7J2Zvcm0taW5saW5lJzogaW5saW5lfVwiIDpub3ZhbGlkYXRlPVwibm92YWxpZGF0ZVwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9mb3JtPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBNb2RlbCBmcm9tICcuLi8uLi9IdHRwL01vZGVsL01vZGVsJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBNb2RlbCBtZXRob2QgdXNlZCB0byBzZW5kIHRoZSByZXF1ZXN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgQm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgbWV0aG9kOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnc2F2ZScsXG4gICAgICAgICAgICB2YWxpZGF0ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsICYmIGlzRnVuY3Rpb24odGhpcy5tb2RlbFt2YWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBvYmplY3Qgb2YgZm9ybSBkYXRhXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBPYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgSlNPTiBvYmplY3Qgb2YgcmVxdWVzdCBoZWFkZXJzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBPYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIGhlYWRlcnM6IE9iamVjdCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGxheSB0aGUgZm9ybSBmaWVsZHMgaW5saW5lXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBPYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICB2YWxpZGF0ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIE1vZGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNwbGF5IHRoZSBmb3JtIGZpZWxkcyBpbmxpbmVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGlubGluZTogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgdGhlIGBzdWJtaXRgIGV2ZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBub3ZhbGlkYXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIEpTT04gb2JqZWN0IG9mIGtleS92YWx1ZSBwYWlycyB0byBidWlsZCB0aGUgcXVlcnkgc3RyaW5nLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgT2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBxdWVyeTogT2JqZWN0LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIFVSSSBvciBVUkwgdXNlZCB0byByZWRpcmVjdCB1c2VyIGFmdGVyIGZvcm0gc3VibWl0cyBzdWNjZXNzZnVsbHkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBGdW5jdGlvbnxTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHJlZGlyZWN0OiBbT2JqZWN0LCBTdHJpbmcsIEZ1bmN0aW9uXSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgdGhlIGBzdWJtaXRgIGV2ZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBGdW5jdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgb25TdWJtaXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgZGVmYXVsdChldmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwgJiYgdGhpcy5zdWJtaXQoZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciB0aGUgYHN1Ym1pdDpzdWNjZXNzYCBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgRnVuY3Rpb25cbiAgICAgICAgICovXG4gICAgICAgIG9uU3VibWl0U3VjY2Vzczoge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBkZWZhdWx0KGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc3VibWl0OnN1Y2Nlc3MnLCBldmVudCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc3VibWl0OmNvbXBsZXRlJywgZXZlbnQsIHRydWUsIGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5yZWRpcmVjdCAmJiBpc0Z1bmN0aW9uKHRoaXMucmVkaXJlY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3QodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYodGhpcy5yZWRpcmVjdCAmJiB0aGlzLiRyb3V0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2godGhpcy5yZWRpcmVjdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciB0aGUgYHN1Ym1pdDpzdWNjZXNzYCBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgRnVuY3Rpb25cbiAgICAgICAgICovXG4gICAgICAgIG9uU3VibWl0RmFpbGVkOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGRlZmF1bHQoZXZlbnQsIGVycm9ycykge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3N1Ym1pdDpmYWlsZWQnLCBldmVudCwgZXJyb3JzKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzdWJtaXQ6Y29tcGxldGUnLCBldmVudCwgZmFsc2UsIGVycm9ycyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgc3VibWl0KGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzdWJtaXQnLCBldmVudCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsW3RoaXMubWV0aG9kXSh0aGlzLmRhdGEsIHtcbiAgICAgICAgICAgICAgICBxdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgICAgICAgICAgb25VcGxvYWRQcm9ncmVzczogZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzdWJtaXQ6cHJvZ3Jlc3MnLCBldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25TdWJtaXRTdWNjZXNzKGV2ZW50LCBkYXRhKTtcbiAgICAgICAgICAgIH0sIChlcnJvcnMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3VibWl0RmFpbGVkKGV2ZW50LCBlcnJvcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXJyb3JzOiB7fVxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IEJhc2VGb3JtIGZyb20gJy4vQmFzZUZvcm0nO1xuaW1wb3J0IFZ1ZUluc3RhbGxlciBmcm9tICcuLi8uLi9IZWxwZXJzL1Z1ZUluc3RhbGxlci9WdWVJbnN0YWxsZXInO1xuXG5jb25zdCBwbHVnaW4gPSBWdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIEJhc2VGb3JtXG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VGb3JtO1xuIiwiPHRlbXBsYXRlPlxuICAgIDxsaSBjbGFzcz1cImJyZWFkY3J1bWItaXRlbVwiIDpjbGFzcz1cInsnYWN0aXZlJzogYWN0aXZlfVwiIDphcmlhLWN1cnJlbnQ9XCJhY3RpdmUgPyAncGFnZScgOiBmYWxzZVwiPlxuICAgICAgICA8YSB2LWlmPVwiIWFjdGl2ZSAmJiBocmVmXCIgOmhyZWY9XCJocmVmXCI+XG4gICAgICAgICAgICA8c2xvdD57e2xhYmVsfX08L3Nsb3Q+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPHJvdXRlci1saW5rIHYtZWxzZS1pZj1cIiFhY3RpdmUgJiYgdG9cIiA6dG89XCJ0b1wiPlxuICAgICAgICAgICAgPHNsb3Q+e3tsYWJlbH19PC9zbG90PlxuICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgPHNsb3Q+e3tsYWJlbH19PC9zbG90PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgIDwvbGk+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2JyZWFkY3J1bWItaXRlbScsXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyB0aGUgaXRlbSBhY3RpdmU/XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wIHtCb29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZlOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBocmVmIGF0dHJpYnV0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcCB7U3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgaHJlZjogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBicmVhZGNydW1iIGxhYmVsXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wIHtTdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICBsYWJlbDogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdG8gYXR0cmlidXRlIHdoaWNoIGlzIHBhc3NlZCB0byB0aGUgPHJvdXRlci1saW5rPiBjb21wb25lbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICB0bzogW1N0cmluZywgT2JqZWN0XVxuXG4gICAgfVxuXG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8bmF2IGFyaWEtbGFiZWw9XCJicmVhZGNydW1iXCI+XG4gICAgICAgIDxvbCBjbGFzcz1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgICAgIDxicmVhZGNydW1iLWl0ZW1cbiAgICAgICAgICAgICAgICB2LWlmPVwiaXRlbXMubGVuZ3RoXCJcbiAgICAgICAgICAgICAgICB2LWZvcj1cIihpdGVtLCBpKSBpbiBpdGVtc1wiXG4gICAgICAgICAgICAgICAgdi1iaW5kPVwiaXRlbVwiXG4gICAgICAgICAgICAgICAgOmtleT1cImlcIlxuICAgICAgICAgICAgICAgIDpjdXJyZW50PVwiaSA9PT0gaXRlbS5sZW5ndGggLSAxXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c2xvdC8+XG4gICAgICAgIDwvb2w+XG4gICAgPC9uYXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEJyZWFkY3J1bWJJdGVtIGZyb20gJy4vQnJlYWRjcnVtYkl0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnYnJlYWRjcnVtYicsXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEJyZWFkY3J1bWJJdGVtXG4gICAgfSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IG9mIGJyZWFkY3J1bWJzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBBcnJheVxuXG4gICAgfVxuXG59XG48L3NjcmlwdD5cbiIsImltcG9ydCBCcmVhZGNydW1iIGZyb20gJy4vQnJlYWRjcnVtYic7XG5pbXBvcnQgQnJlYWRjcnVtYkl0ZW0gZnJvbSAnLi9CcmVhZGNydW1iSXRlbSc7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJy4uLy4uL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgQnJlYWRjcnVtYixcbiAgICAgICAgICAgIEJyZWFkY3J1bWJJdGVtXG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEJyZWFkY3J1bWI7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG91bGQgc2hvdyBvbmx5IGZvciBzY3JlZW5yZWFkZXJzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBzck9ubHk6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3VsZCBiZSBmb2N1c2FibGUgZm9yIHNjcmVlbnJlYWRlcnNcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIHNyT25seUZvY3VzYWJsZTogQm9vbGVhblxuXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHNjcmVlbnJlYWRlckNsYXNzZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICdzci1vbmx5JzogdGhpcy5zck9ubHksXG4gICAgICAgICAgICAgICAgJ3NyLW9ubHktZm9jdXNhYmxlJzogdGhpcy5zck9ubHlGb2N1c2FibGUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHRcIiA6Y2xhc3M9XCJjbGFzc2VzXCI+PHNsb3QgLz48L3NtYWxsPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL01peGlucy9Db2xvcmFibGUvQ29sb3JhYmxlJztcbmltcG9ydCBTY3JlZW5yZWFkZXJzIGZyb20gJy4uLy4uL01peGlucy9TY3JlZW5yZWFkZXJzL1NjcmVlbnJlYWRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnaGVscC10ZXh0JyxcblxuICAgIG1peGluczogW1xuICAgICAgICBDb2xvcmFibGUsXG4gICAgICAgIFNjcmVlbnJlYWRlcnNcbiAgICBdLFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgY2xhc3NlcygpIHtcbiAgICAgICAgICAgIHJldHVybiBleHRlbmQoe30sIHRoaXMuc2NyZWVucmVhZGVyQ2xhc3NlcywgdGhpcy5jb2xvcmFibGVDbGFzc2VzKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG48L3NjcmlwdD5cbiIsImltcG9ydCBIZWxwVGV4dCBmcm9tICcuL0hlbHBUZXh0JztcbmltcG9ydCBWdWVJbnN0YWxsZXIgZnJvbSAnLi4vLi4vSGVscGVycy9WdWVJbnN0YWxsZXIvVnVlSW5zdGFsbGVyJztcblxuY29uc3QgcGx1Z2luID0gVnVlSW5zdGFsbGVyLnVzZSh7XG5cbiAgICBpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWVJbnN0YWxsZXIuY29tcG9uZW50cyh7XG4gICAgICAgICAgICBIZWxwVGV4dFxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBIZWxwVGV4dDtcbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+PHNsb3QvPjwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdmb3JtLWdyb3VwJ1xuICAgIFxufVxuXG48L3NjcmlwdD5cbiIsImltcG9ydCBGb3JtR3JvdXAgZnJvbSAnLi9Gb3JtR3JvdXAnO1xuaW1wb3J0IFZ1ZUluc3RhbGxlciBmcm9tICcuLi8uLi9IZWxwZXJzL1Z1ZUluc3RhbGxlci9WdWVJbnN0YWxsZXInO1xuXG5jb25zdCBwbHVnaW4gPSBWdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIEZvcm1Hcm91cFxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtR3JvdXA7XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8bGFiZWwgOmNsYXNzPVwiY2xhc3Nlc1wiPjxzbG90Lz48L2xhYmVsPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL01peGlucy9Db2xvcmFibGUvQ29sb3JhYmxlJztcbmltcG9ydCBTY3JlZW5yZWFkZXJzIGZyb20gJy4uLy4uL01peGlucy9TY3JlZW5yZWFkZXJzL1NjcmVlbnJlYWRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnZm9ybS1sYWJlbCcsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgQ29sb3JhYmxlLFxuICAgICAgICBTY3JlZW5yZWFkZXJzXG4gICAgXSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGNsYXNzZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5kKHt9LCB0aGlzLnNjcmVlbnJlYWRlckNsYXNzZXMsIHRoaXMuY29sb3JhYmxlQ2xhc3Nlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgRm9ybUxhYmVsIGZyb20gJy4vRm9ybUxhYmVsJztcbmltcG9ydCBWdWVJbnN0YWxsZXIgZnJvbSAnLi4vLi4vSGVscGVycy9WdWVJbnN0YWxsZXIvVnVlSW5zdGFsbGVyJztcblxuY29uc3QgcGx1Z2luID0gVnVlSW5zdGFsbGVyLnVzZSh7XG5cbiAgICBpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWVJbnN0YWxsZXIuY29tcG9uZW50cyh7XG4gICAgICAgICAgICBGb3JtTGFiZWxcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybUxhYmVsO1xuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiA6Y2xhc3M9XCJ7J2ludmFsaWQtZmVlZGJhY2snOiBpbnZhbGlkLCAndmFsaWQtZmVlZGJhY2snOiB2YWxpZCAmJiAhaW52YWxpZH1cIj5cbiAgICAgICAgPHNsb3Q+e3tsYWJlbH19PC9zbG90PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL01peGlucy9Db2xvcmFibGUvQ29sb3JhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2Zvcm0tZmVlZGJhY2snLFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIENvbG9yYWJsZVxuICAgIF0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmFsdWUgb2YgbGFiZWwgZWxlbWVudC4gSWYgbm8gdmFsdWUsIG5vIGxhYmVsIHdpbGwgYXBwZWFyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBsYWJlbDogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG91bGQgdGhlIGZlZWRiYWNrIG1hcmtlZCBhcyBpbnZhbGlkXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGludmFsaWQ6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3VsZCB0aGUgZmVlZGJhY2sgbWFya2VkIGFzIGludmFsaWRcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdmFsaWQ6IEJvb2xlYW5cblxuICAgIH1cblxufVxuXG48L3NjcmlwdD5cbiIsImltcG9ydCBGb3JtRmVlZGJhY2sgZnJvbSAnLi9Gb3JtRmVlZGJhY2snO1xuaW1wb3J0IFZ1ZUluc3RhbGxlciBmcm9tICcuLi8uLi9IZWxwZXJzL1Z1ZUluc3RhbGxlci9WdWVJbnN0YWxsZXInO1xuXG5jb25zdCBwbHVnaW4gPSBWdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIEZvcm1GZWVkYmFja1xuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtRmVlZGJhY2s7XG4iLCJpbXBvcnQgcHJlZml4IGZyb20gJy4uLy4uL0hlbHBlcnMvUHJlZml4JztcbmltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBjYW1lbENhc2UgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc1VuZGVmaW5lZCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGF1dG9jb21wbGV0ZSBhdHRyaWJ1dGUgdmFsdWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGF1dG9jb21wbGV0ZTogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZmllbGQgaWQgYXR0cmlidXRlIHZhbHVlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBpZDogW051bWJlciwgU3RyaW5nXSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHZhbHVlIG9mIGxhYmVsIGVsZW1lbnQuIElmIG5vIHZhbHVlLCBubyBsYWJlbCB3aWxsIGFwcGVhci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgbGFiZWw6IFtOdW1iZXIsIFN0cmluZ10sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBmaWVsZCBuYW1lIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgbmFtZTogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZmllbGQgaWQgYXR0cmlidXRlIHZhbHVlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcGxhY2Vob2xkZXIgYXR0cmlidXRlIHZhbHVlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBwbGFjZWhvbGRlcjogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyB0aGUgZmllbGQgcmVxdWlyZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHJlcXVpcmVkOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgZm9ybS1ncm91cCB3cmFwcGVyIHRvIGlucHV0XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGdyb3VwOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJlZ2V4IHBhdHRlcm4gZm9yIHZhbGlkYXRpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHBhdHRlcm46IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gaW5saW5lIGZpZWxkIHZhbGlkYXRpb24gZXJyb3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmd8Qm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgZXJyb3I6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gaW5saW5lIGZpZWxkIHZhbGlkYXRpb24gZXJyb3JzIHBhc3NlZCBhcyBvYmplY3Qgd2l0aCBrZXkvdmFsdWVcbiAgICAgICAgICogcGFpcnMuIElmIGVycm9ycyBwYXNzZWQgYXMgYW4gb2JqZWN0LCB0aGUgZm9ybSBuYW1lIHdpbGwgYmUgdXNlZCBmb3JcbiAgICAgICAgICogdGhlIGtleS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IE9iamVjdHxCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBlcnJvcnM6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNvbWUgZmVlZGJhY2sgdG8gYWRkIHRvIHRoZSBmaWVsZCBvbmNlIHRoZSBmaWVsZCBpcyBzdWNjZXNzZnVsbHlcbiAgICAgICAgICogdmFsaWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGZlZWRiYWNrOiBbU3RyaW5nLCBBcnJheV0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IG9mIGV2ZW50IG5hbWVzIHRoYXQgY29ycmVsYXRlIHdpdGggY2FsbGJhY2sgZnVuY3Rpb25zXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBGdW5jdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgYmluZEV2ZW50czoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICBkZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbJ2ZvY3VzJywgJ2JsdXInLCAnY2hhbmdlJywgJ2NsaWNrJywgJ2tleXVwJywgJ2tleWRvd24nLCAncHJvZ3Jlc3MnLCAncGFzdGUnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGRlZmF1bHQgY2xhc3MgbmFtZSBhc3NpZ25lZCB0byB0aGUgY29udHJvbCBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGRlZmF1bHRDb250cm9sQ2xhc3M6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdmb3JtLWNvbnRyb2wnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhpZGUgdGhlIGxhYmVsIGZvciBicm93c2VycywgYnV0IGxlYXZlIGl0IGZvciBzY3JlZW4gcmVhZGVycy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgaGlkZUxhYmVsOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGRpdGlvbmFsIG1hcmdpbi9wYWRkaW5nIGNsYXNzZXMgZm9yIGZpbmUgY29udHJvbCBvZiBzcGFjaW5nXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHNwYWNpbmc6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHNpemUgb2YgdGhlIGZvcm0gY29udHJvbFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnbWQnLFxuICAgICAgICAgICAgdmFsaWRhdGU6IHZhbHVlID0+IFsnc20nLCAnbWQnLCAnbGcnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTFcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGxheSB0aGUgZm9ybSBmaWVsZCBpbmxpbmVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgaW5saW5lOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiB0aGUgZm9ybSBjb250cm9sIGlzIHJlYWRvbmx5LCBkaXNwbGF5IG9ubHkgYXMgdGV4dD9cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgcGxhaW50ZXh0OiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyB0aGUgZm9ybSBjb250cm9sIHJlYWRvbmx5P1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICByZWFkb25seTogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogSXMgdGhlIGZvcm0gY29udHJvbCBkaXNhYmxlZD9cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNvbWUgaW5zdHJ1Y3Rpb25zIHRvIGFwcGVhciB1bmRlciB0aGUgZmllbGQgbGFiZWxcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgaGVscFRleHQ6IFtOdW1iZXIsIFN0cmluZ10sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtYXhsZW5ndGggYXR0cmlidXRlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIG1heGxlbmd0aDogW051bWJlciwgU3RyaW5nXVxuXG4gICAgfSxcblxuICAgIGRpcmVjdGl2ZXM6IHtcbiAgICAgICAgYmluZEV2ZW50czoge1xuICAgICAgICAgICAgYmluZChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudHMgPSBiaW5kaW5nLnZhbHVlIHx8IHZub2RlLmNvbnRleHQuYmluZEV2ZW50cztcblxuICAgICAgICAgICAgICAgIGVhY2goZXZlbnRzLCBuYW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bm9kZS5jb250ZXh0LiRlbWl0KG5hbWUsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAgIGJsdXIoKSB7XG4gICAgICAgICAgICBpZih0aGlzLmdldElucHV0RmllbGQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5wdXRGaWVsZCgpLmJsdXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBmb2N1cygpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuZ2V0SW5wdXRGaWVsZCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbnB1dEZpZWxkKCkuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBnZXRJbnB1dEZpZWxkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWNvbnRyb2wsIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0RmllbGRFcnJvcnMoKSB7XG4gICAgICAgICAgICBsZXQgZXJyb3JzID0gdGhpcy5lcnJvciB8fCB0aGlzLmVycm9ycztcblxuICAgICAgICAgICAgaWYoaXNPYmplY3QodGhpcy5lcnJvcnMpKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JzID0gdGhpcy5lcnJvcnNbdGhpcy5uYW1lIHx8IHRoaXMuaWRdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gIWVycm9ycyB8fCBpc0FycmF5KGVycm9ycykgfHwgaXNPYmplY3QoZXJyb3JzKSA/IGVycm9ycyA6IFtlcnJvcnNdO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICBjYWxsYmFja3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iaW5kRXZlbnRzLm1hcChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiB0aGlzW2NhbWVsQ2FzZShbJ29uJywgZXZlbnRdLmpvaW4oJyAnKSldXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuZmlsdGVyKGV2ZW50ID0+ICFpc1VuZGVmaW5lZChldmVudC5jYWxsYmFjaykpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGludmFsaWRGZWVkYmFjaygpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5nZXRGaWVsZEVycm9ycygpO1xuXG4gICAgICAgICAgICByZXR1cm4gaXNBcnJheShlcnJvcnMpID8gZXJyb3JzLmpvaW4oJzxicj4nKSA6IGVycm9ycztcbiAgICAgICAgfSxcblxuICAgICAgICB2YWxpZEZlZWRiYWNrKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzQXJyYXkodGhpcy5mZWVkYmFjaykgPyB0aGlzLmZlZWRiYWNrLmpvaW4oJzxicj4nKSA6IHRoaXMuZmVlZGJhY2s7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29udHJvbENsYXNzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdENvbnRyb2xDbGFzcyArICh0aGlzLnBsYWludGV4dCA/ICctcGxhaW50ZXh0JyA6ICcnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjb250cm9sU2l6ZUNsYXNzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCh0aGlzLnNpemUsIHRoaXMuY29udHJvbENsYXNzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjb250cm9sQ2xhc3NlcygpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sQ2xhc3MsXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sU2l6ZUNsYXNzLFxuICAgICAgICAgICAgICAgICh0aGlzLnNwYWNpbmcgfHwgJycpLFxuICAgICAgICAgICAgICAgICh0aGlzLmludmFsaWRGZWVkYmFjayA/ICdpcy1pbnZhbGlkJyA6ICcnKVxuICAgICAgICAgICAgXS5qb2luKCcgJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFzRGVmYXVsdFNsb3QgKCkge1xuICAgICAgICAgICAgcmV0dXJuICEhdGhpcy4kc2xvdHMuZGVmYXVsdFxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxmb3JtLWdyb3VwIGNsYXNzPVwiaW5wdXQtZmllbGRcIiA6Y2xhc3M9XCJ7J2hhcy1hY3Rpdml0eSc6IGFjdGl2aXR5fVwiPlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJsYWJlbFwiPlxuICAgICAgICAgICAgPGZvcm0tbGFiZWwgcmVmPVwibGFiZWxcIiB2LWlmPVwibGFiZWwgfHwgaGFzRGVmYXVsdFNsb3RcIiA6Zm9yPVwiaWRcIiB2LWh0bWw9XCJsYWJlbFwiLz5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcmVmPVwiY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgIDppZD1cImlkXCJcbiAgICAgICAgICAgICAgICAgICAgOnR5cGU9XCJ0eXBlXCJcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICA6cGF0dGVybj1cInBhdHRlcm5cIlxuICAgICAgICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgIDpyZXF1aXJlZD1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgOm1heGxlbmd0aD1cIm1heGxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWQgfHwgcmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJtZXJnZUNsYXNzZXMoY29udHJvbENsYXNzZXMsIGNvbG9yYWJsZUNsYXNzZXMpXCJcbiAgICAgICAgICAgICAgICAgICAgOmFyaWEtbGFiZWw9XCJsYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgIDphcmlhLWRlc2NyaWJlZGJ5PVwiaWRcIlxuICAgICAgICAgICAgICAgICAgICA6YXV0b2NvbXBsZXRlPVwiYXV0b2NvbXBsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgdi1iaW5kLWV2ZW50cz1cImJpbmRFdmVudHNcIlxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCIkZW1pdCgnaW5wdXQnLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc2xvdD5cblxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImFjdGl2aXR5XCI+XG4gICAgICAgICAgICAgICAgPHRyYW5zaXRpb24gbmFtZT1cInNsaWRlLWZhZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFjdGl2aXR5LWluZGljYXRvciBrZXk9XCJ0ZXN0XCIgdi1pZj1cImFjdGl2aXR5XCIgcmVmPVwiYWN0aXZpdHlcIiB0eXBlPVwiZG90c1wiIDpzaXplPVwic2l6ZVwiLz5cbiAgICAgICAgICAgICAgICA8L3RyYW5zaXRpb24+XG4gICAgICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJmZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgIDxmb3JtLWZlZWRiYWNrIHYtaWY9XCJ2YWxpZEZlZWRiYWNrXCIgcmVmPVwiZmVlZGJhY2tcIiB2LWh0bWw9XCJ2YWxpZEZlZWRiYWNrXCIgdmFsaWQgLz5cbiAgICAgICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWVsc2UtaWY9XCJpbnZhbGlkRmVlZGJhY2tcIiByZWY9XCJmZWVkYmFja1wiIHYtaHRtbD1cImludmFsaWRGZWVkYmFja1wiIGludmFsaWQgLz5cbiAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImhlbHBcIj5cbiAgICAgICAgICAgIDxoZWxwLXRleHQgdi1pZj1cImhlbHBUZXh0XCIgcmVmPVwiaGVscFwiIHYtaHRtbD1cImhlbHBUZXh0XCIgLz5cbiAgICAgICAgPC9zbG90PlxuICAgICAgICBcbiAgICA8L2Zvcm0tZ3JvdXA+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBIZWxwVGV4dCBmcm9tICcuLi9IZWxwVGV4dCc7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJy4uL0Zvcm1Hcm91cCc7XG5pbXBvcnQgRm9ybUxhYmVsIGZyb20gJy4uL0Zvcm1MYWJlbCc7XG5pbXBvcnQgRm9ybUZlZWRiYWNrIGZyb20gJy4uL0Zvcm1GZWVkYmFjayc7XG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL01peGlucy9Db2xvcmFibGUnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJy4uLy4uL01peGlucy9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgTWVyZ2VDbGFzc2VzIGZyb20gJy4uLy4uL01peGlucy9NZXJnZUNsYXNzZXMnO1xuaW1wb3J0IEFjdGl2aXR5SW5kaWNhdG9yIGZyb20gJy4uL0FjdGl2aXR5SW5kaWNhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2lucHV0LWZpZWxkJyxcblxuICAgIG1peGluczogW1xuICAgICAgICBDb2xvcmFibGUsXG4gICAgICAgIEZvcm1Db250cm9sLFxuICAgICAgICBNZXJnZUNsYXNzZXNcbiAgICBdLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBIZWxwVGV4dCxcbiAgICAgICAgRm9ybUdyb3VwLFxuICAgICAgICBGb3JtTGFiZWwsXG4gICAgICAgIEZvcm1GZWVkYmFjayxcbiAgICAgICAgQWN0aXZpdHlJbmRpY2F0b3JcbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdyB0eXBlIGFjdGl2aXR5IGluZGljYXRvci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2aXR5OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHR5cGUgYXR0cmlidXRlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICd0ZXh0J1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLmlucHV0LWZpZWxkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcmVtLCAtNTAlKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1pbjtcbiAgICB9XG5cbiAgICAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICB9XG5cbiAgICAuc2xpZGUtZmFkZS1lbnRlciB7XG4gICAgfVxuXG4gICAgLnNsaWRlLWZhZGUtZW50ZXItYWN0aXZlIHtcbiAgICB9XG5cbiAgICAuc2xpZGUtZmFkZS1sZWF2ZS1hY3RpdmUge1xuXG4gICAgfVxuXG4gICAgLnNsaWRlLWZhZGUtZW50ZXIsXG4gICAgLnNsaWRlLWZhZGUtbGVhdmUtdG8ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgyNSUsIC01MCUpO1xuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgSW5wdXRGaWVsZCBmcm9tICcuL0lucHV0RmllbGQnO1xuaW1wb3J0IFZ1ZUluc3RhbGxlciBmcm9tICcuLi8uLi9IZWxwZXJzL1Z1ZUluc3RhbGxlci9WdWVJbnN0YWxsZXInO1xuXG5jb25zdCBwbHVnaW4gPSBWdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIElucHV0RmllbGRcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRGaWVsZDtcbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxmb3JtLWdyb3VwPlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJsYWJlbFwiPlxuICAgICAgICAgICAgPGZvcm0tbGFiZWwgdi1pZj1cImxhYmVsIHx8IGhhc0RlZmF1bHRTbG90XCIgOmZvcj1cImlkXCI+XG4gICAgICAgICAgICAgICAgPHNsb3Q+e3tsYWJlbH19PC9zbG90PlxuICAgICAgICAgICAgPC9mb3JtLWxhYmVsPlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1maWxlXCI+XG5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJwbGFjZWhvbGRlclwiPlxuICAgICAgICAgICAgICAgIDxmb3JtLWxhYmVsIDpjbGFzcz1cIm1lcmdlQ2xhc3Nlcyhjb2xvcmFibGVDbGFzc2VzLCAnY3VzdG9tLWZpbGUtbGFiZWwnKVwiIDpmb3I9XCJpZFwiIHYtaHRtbD1cInBsYWNlaG9sZGVyIHx8ICdDaG9vc2UgZmlsZSdcIiAvPlxuICAgICAgICAgICAgPC9zbG90PlxuXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB2LWJpbmQtZXZlbnRzXG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cImNvbnRyb2xDbGFzc2VzXCJcbiAgICAgICAgICAgICAgICA6aWQ9XCJpZFwiXG4gICAgICAgICAgICAgICAgOndpZHRoPVwid2lkdGhcIlxuICAgICAgICAgICAgICAgIDpoZWlnaHQ9XCJoZWlnaHRcIlxuICAgICAgICAgICAgICAgIDpyZXF1aXJlZD1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICA6bXVsdGlwbGU9XCJtdWx0aXBsZVwiXG4gICAgICAgICAgICAgICAgOnJlYWRvbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCIkZW1pdCgnY2hhbmdlJywgJGV2ZW50LnRhcmdldC5maWxlcylcIj5cblxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImhlbHBcIj5cbiAgICAgICAgICAgICAgICA8aGVscC10ZXh0IHYtaWY9XCJoZWxwVGV4dFwiIHYtaHRtbD1cImhlbHBUZXh0XCIgLz5cbiAgICAgICAgICAgIDwvc2xvdD5cblxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0tZmVlZGJhY2sgdi1pZj1cInZhbGlkRmVlZGJhY2tcIiB2LWh0bWw9XCJ2YWxpZEZlZWRiYWNrXCIgdmFsaWQgLz5cbiAgICAgICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwiaW52YWxpZEZlZWRiYWNrXCIgdi1odG1sPVwiaW52YWxpZEZlZWRiYWNrXCIgaW52YWxpZCAvPlxuICAgICAgICAgICAgPC9zbG90PlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgPC9mb3JtLWdyb3VwPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEhlbHBUZXh0IGZyb20gJy4uL0hlbHBUZXh0JztcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnLi4vRm9ybUdyb3VwJztcbmltcG9ydCBGb3JtTGFiZWwgZnJvbSAnLi4vRm9ybUxhYmVsJztcbmltcG9ydCBGb3JtRmVlZGJhY2sgZnJvbSAnLi4vRm9ybUZlZWRiYWNrJztcbmltcG9ydCBJbnB1dEZpZWxkIGZyb20gJy4uL0lucHV0RmllbGQnO1xuaW1wb3J0IE1lcmdlQ2xhc3NlcyBmcm9tICcuLi8uLi9NaXhpbnMvTWVyZ2VDbGFzc2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2ZpbGUtZmllbGQnLFxuXG4gICAgZXh0ZW5kczogSW5wdXRGaWVsZCxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgSGVscFRleHQsXG4gICAgICAgIEZvcm1Hcm91cCxcbiAgICAgICAgRm9ybUxhYmVsLFxuICAgICAgICBGb3JtRmVlZGJhY2ssXG4gICAgICAgIE1lcmdlQ2xhc3Nlc1xuICAgIH0sXG5cbiAgICBtb2RlbDoge1xuICAgICAgICBldmVudDogJ2NoYW5nZSdcbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gYXJyYXkgb2YgZXZlbnQgbmFtZXMgdGhhdCBjb3JyZWxhdGUgd2l0aCBjYWxsYmFjayBmdW5jdGlvbnNcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEZ1bmN0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBiaW5kRXZlbnRzOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsnZm9jdXMnLCAnYmx1cicsICdpbnB1dCcsICdjbGljaycsICdrZXl1cCcsICdrZXlkb3duJywgJ3Byb2dyZXNzJ107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjbGFzcyBuYW1lIGFzc2lnbmVkIHRvIHRoZSBjb250cm9sIGVsZW1lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgZGVmYXVsdENvbnRyb2xDbGFzczoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2N1c3RvbS1maWxlLWlucHV0J1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBhcnJheSBvZiB2YWxpZCBleHRlbnNpb25zXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGV4dGVuc2lvbnM6IEFycmF5LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHlwZSBhdHRyaWJ1dGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgbXVsdGlwbGU6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBoZWlnaHQgYXR0cmlidXRlIGZvciB0aGUgY29udHJvbCBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGhlaWdodDogW051bWJlciwgU3RyaW5nXSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHdpZHRoIGF0dHJpYnV0ZSBmb3IgdGhlIGNvbnRyb2wgZWxlbWVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICB3aWR0aDogW051bWJlciwgU3RyaW5nXVxuXG4gICAgfVxuXG59XG5cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IEZpbGVGaWVsZCBmcm9tICcuL0ZpbGVGaWVsZCc7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJy4uLy4uL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgRmlsZUZpZWxkXG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVGaWVsZDtcbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxidG4gY2xhc3M9XCJidG4tZmlsZVwiIDp0eXBlPVwidHlwZVwiIDp2YXJpYW50PVwidmFyaWFudFwiIDpibG9jaz1cImJsb2NrXCIgOnNpemU9XCJzaXplXCIgOmRpc2FibGVkPVwiZGlzYWJsZWRcIiA6YWN0aXZlPVwiYWN0aXZlXCI+XG4gICAgICAgIDxzbG90Lz5cblxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHYtYmluZC1ldmVudHNcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIDpjbGFzcz1cImNvbnRyb2xDbGFzc2VzXCJcbiAgICAgICAgICAgIDppZD1cImlkXCJcbiAgICAgICAgICAgIDp3aWR0aD1cIndpZHRoXCJcbiAgICAgICAgICAgIDpoZWlnaHQ9XCJoZWlnaHRcIlxuICAgICAgICAgICAgOnJlcXVpcmVkPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgOm11bHRpcGxlPVwibXVsdGlwbGVcIlxuICAgICAgICAgICAgOnJlYWRvbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgdi1vbjpjaGFuZ2U9XCIkZW1pdCgnY2hhbmdlJywgbXVsdGlwbGUgPyAkZXZlbnQudGFyZ2V0LmZpbGVzIDogJGV2ZW50LnRhcmdldC5maWxlc1swXSlcIj5cbiAgICA8L2J0bj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBCdG4gZnJvbSAnLi4vQnRuJztcbmltcG9ydCBGaWxlRmllbGQgZnJvbSAnLi4vRmlsZUZpZWxkJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2J0bi1maWxlJyxcblxuICAgIG1peGluczogW1xuICAgICAgICBGaWxlRmllbGRcbiAgICBdLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBCdG4sXG4gICAgICAgIEZpbGVGaWVsZFxuICAgIH0sXG5cbiAgICBtb2RlbDoge1xuICAgICAgICBldmVudDogJ2NoYW5nZSdcbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHR5cGUgYXR0cmlidXRlIGZvciB0aGUgYnV0dG9uLiBOb3QgYXBwbGllZCBpZiBhbiBhbmNob3JcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2J1dHRvbidcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5idG4tZmlsZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIGlucHV0IHtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsImltcG9ydCBCdG5GaWxlIGZyb20gJy4vQnRuRmlsZSc7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJy4uLy4uL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgQnRuRmlsZVxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBCdG5GaWxlO1xuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgOmNsYXNzPVwiY2xhc3Nlc1wiIDpkYXRhLXRvZ2dsZT1cInRvZ2dsZSA/ICdidXR0b25zJyA6IGZhbHNlXCIgcm9sZT1cImdyb3VwXCI+XG4gICAgICAgIDxidG4gdi1pZj1cImJ1dHRvbnNcIiB2LWZvcj1cIihidXR0b24sIGkpIGluIGJ1dHRvbnNcIiA6a2V5PVwiaVwiIHYtYmluZD1cImJ1dHRvblwiIC8+XG4gICAgICAgIDxzbG90Lz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQnRuIGZyb20gJy4uL0J0bic7XG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL01peGlucy9Db2xvcmFibGUnO1xuaW1wb3J0IE1lcmdlQ2xhc3NlcyBmcm9tICcuLi8uLi9NaXhpbnMvTWVyZ2VDbGFzc2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2J0bi1ncm91cCcsXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEJ0blxuICAgIH0sXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgQ29sb3JhYmxlLFxuICAgICAgICBNZXJnZUNsYXNzZXNcbiAgICBdLFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gYXJyYXkgb2YgYnV0dG9uc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBidXR0b25zOiBBcnJheSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVub3RlIHRoZSBidXR0b24gZ3JvdXAgYXMgdG9nZ2xlIGJ1dHRvbnNcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB0b2dnbGU6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc3BsYXkgdGhlIGJ1dHRvbnMgdmVydGljYWxseVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHZlcnRpY2FsOiBCb29sZWFuXG5cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICBjbGFzc2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVyZ2VDbGFzc2VzKFxuICAgICAgICAgICAgICAgIHRoaXMuY29sb3JhYmxlQ2xhc3Nlcywge1xuICAgICAgICAgICAgICAgICAgICAnYnRuLWdyb3VwJzogIXRoaXMudmVydGljYWwsXG4gICAgICAgICAgICAgICAgICAgICdidG4tZ3JvdXAtdG9nZ2xlJzogdGhpcy50b2dnbGUsXG4gICAgICAgICAgICAgICAgICAgICdidG4tZ3JvdXAtdmVydGljYWwnOiB0aGlzLnZlcnRpY2FsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwLXRvZ2dsZVwiIGRhdGEtdG9nZ2xlPVwiYnV0dG9uc1wiPlxuICAgICAgICA8c2xvdC8+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2J0bi1ncm91cC10b2dnbGUnXG5cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJidG4tdG9vbGJhclwiIHJvbGU9XCJ0b29sYmFyXCI+XG4gICAgICAgIDxzbG90Lz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnYnRuLXRvb2xiYXInXG5cbn1cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IEJ0bkdyb3VwIGZyb20gJy4vQnRuR3JvdXAudnVlJztcbmltcG9ydCBCdG5Hcm91cFRvZ2dsZSBmcm9tICcuL0J0bkdyb3VwVG9nZ2xlJztcbmltcG9ydCBCdG5Ub29sYmFyIGZyb20gJy4vQnRuVG9vbGJhcic7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJy4uLy4uL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgQnRuR3JvdXAsXG4gICAgICAgICAgICBCdG5Hcm91cFRvZ2dsZSxcbiAgICAgICAgICAgIEJ0blRvb2xiYXJcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQnRuR3JvdXA7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1dWlkKCkge1xuICAgIHJldHVybiAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGMgPT4ge1xuICAgICAgICB2YXIgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XG4gICAgICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgcHJveHkoY2FsbGJhY2ssIGV2ZW50KSB7XG4gICAgICAgICAgICBpZihpc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5zcGxpY2UoMSkpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8Y29tcG9uZW50XG4gICAgICAgIDppcz1cImNvbXBvbmVudFwiXG4gICAgICAgIDpocmVmPVwiaHJlZiB8fCAoY29tcG9uZW50ID09PSAnYScgPyAnIycgOiBmYWxzZSlcIlxuICAgICAgICBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIlxuICAgICAgICA6Y2xhc3M9XCJ7J2FjdGl2ZSc6IGFjdGl2ZX1cIlxuICAgICAgICA6dHlwZT1cImNvbXBvbmVudCA9PT0gJ2J1dHRvbicgPyAnYnV0dG9uJyA6IGZhbHNlXCJcbiAgICAgICAgQGNsaWNrPVwib25DbGlja1wiPlxuICAgICAgICA8aSB2LWlmPVwiaWNvblwiIDpjbGFzcz1cImljb25cIi8+XG4gICAgICAgIDxzbG90Pnt7bGFiZWx9fTwvc2xvdD5cbiAgICA8L2NvbXBvbmVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgUHJveHkgZnJvbSAnLi4vLi4vTWl4aW5zL1Byb3h5L1Byb3h5JztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIFByb3h5XG4gICAgXSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIHRoZSBtZW51IGl0ZW0gYWN0aXZlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgT2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmU6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIHRoZSBtZW51IGl0ZW0gYSBidXR0b25cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IE9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgYnV0dG9uOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYGVsZW1lbnRgIGF0dHJpYnV0ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IE9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgZWxlbWVudDogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYGhyZWZgIGF0dHJpYnV0ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IE9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgaHJlZjogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaWNvbiBvZiB0aGUgZHJvcGRvd24gbWVudSBpdGVtLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgT2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBpY29uOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBsYWJlbCBvZiB0aGUgZHJvcGRvd24gbWVudSBpdGVtLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgT2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBsYWJlbDogU3RyaW5nXG5cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICBjb21wb25lbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50IHx8ICh0aGlzLmJ1dHRvbiA/ICdidXR0b24nIDogJ2EnKTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgdGhlIGBjbGlja2AgZXZlbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBPYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGg1IGNsYXNzPVwiZHJvcGRvd24taGVhZGVyXCI+XG4gICAgICAgIDxzbG90Pnt7aGVhZGVyfX08L3Nsb3Q+XG4gICAgPC9oNT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdkcm9wZG93bi1tZW51LWhlYWRlcicsXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmFsdWUgb2YgdGhlIGhlYWRlclxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgT2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBoZWFkZXI6IFN0cmluZ1xuXG4gICAgfVxuXG59XG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnZHJvcGRvd24tbWVudS1kaXZpZGVyJ1xuXG59XG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgOmNsYXNzPVwieydkcm9wZG93bi1tZW51LXJpZ2h0JzogYWxpZ24gPT09ICdyaWdodCcsICdzaG93Jzogc2hvd31cIiA6YXJpYS1sYWJlbGxlZGJ5PVwiaWRcIiB0YWJpbmRleD1cIi0xXCIgQGNsaWNrPVwib25DbGlja1wiPlxuICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJpdGVtIGluIGl0ZW1zXCI+XG4gICAgICAgICAgICA8Y29tcG9uZW50IDppcz1cInByZWZpeChpdGVtLnR5cGUgfHwgJ2l0ZW0nLCAnZHJvcGRvd24tbWVudScpXCIgdi1iaW5kPVwiaXRlbVwiLz5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPHNsb3QvPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB1dWlkIGZyb20gJy4uLy4uL0hlbHBlcnMvVXVpZCc7XG5pbXBvcnQgcHJlZml4IGZyb20gJy4uLy4uL0hlbHBlcnMvUHJlZml4JztcbmltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgRHJvcGRvd25NZW51SXRlbSBmcm9tICcuL0Ryb3Bkb3duTWVudUl0ZW0nO1xuaW1wb3J0IERyb3Bkb3duTWVudUhlYWRlciBmcm9tICcuL0Ryb3Bkb3duTWVudUhlYWRlcic7XG5pbXBvcnQgRHJvcGRvd25NZW51RGl2aWRlciBmcm9tICcuL0Ryb3Bkb3duTWVudURpdmlkZXInO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIERyb3Bkb3duTWVudUl0ZW0sXG4gICAgICAgIERyb3Bkb3duTWVudUhlYWRlcixcbiAgICAgICAgRHJvcGRvd25NZW51RGl2aWRlclxuICAgIH0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYGlkYCBhdHRyaWJ1dGUgb24gdGhlIHRvZ2dsZSBidXR0b24gYW5kIGFyaWEgbGFiZWwuIElmIG5vIGBpZGAgaXNcbiAgICAgICAgICogZGVmaW5lZCwgdGhlbiBhIFVVSUQgd2lsbCBiZSBnZW5lcmF0ZWQgaW5zdGVhZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IE9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHV1aWRcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGxheSB0aGUgZHJvcGRvd24gbWVudSBhbGlnbmVkIGxlZnQgb3IgcmlnaHRcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgYWxpZ246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdsZWZ0JyxcbiAgICAgICAgICAgIHZhbGlkYXRlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsnbGVmdCcsICdyaWdodCddLmluZGV4T2YodmFsdWUudG9Mb3dlckNhc2UoKSkgIT09IC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGVmYXVsdCB2aXNpYmlsaXR5IG9mIHRoZSBkcm9wZG93biBtZW51LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgT2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBzaG93OiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBhcnJheSBvZiBkcm9wZG93biBpdGVtcy4gSWYgYW4ga2V5L3ZhbHVlIHBhaXIgaXNuJ3QgZGVmaW5lZCwgdGhlXG4gICAgICAgICAqIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkLiBJZiBubyBpdGVtcyBhcmUgZGVmaW5lZCwgdGhlbiB0aGUgc2xvdFxuICAgICAgICAgKiBuYW1lZCBcIml0ZW1zXCIgY2FuIGJlIHVzZWQgdG8gZGVmaW5lIHRoZSBvcHRpb25zIHdpdGggSFRNTC5cbiAgICAgICAgICpcbiAgICAgICAgICogW3tcbiAgICAgICAgICogICAgICB0eXBlOiAnaXRlbScsIC8vIFN0cmluZyBbaXRlbXxoZWFkZXJ8ZGl2aWRlcl1cbiAgICAgICAgICogICAgICBocmVmOiAnIycsIC8vIFN0cmluZ1xuICAgICAgICAgKiAgICAgIGxhYmVsOiAnU29tZSBsYWJlbCcsIC8vIFN0cmluZ1xuICAgICAgICAgKiAgICAgIG9uQ2xpY2s6IChldmVudCkgPT4ge30gLy8gRnVuY3Rpb25cbiAgICAgICAgICogfV1cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEFycmF5XG4gICAgICAgICAqL1xuICAgICAgICBpdGVtczogQXJyYXlcblxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgcHJlZml4OiBwcmVmaXgsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIHRoZSBgY2xpY2tgIGV2ZW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gT2JqZWN0IGV2ZW50XG4gICAgICAgICAqIEBwYXJhbSBPYmplY3QgaXRlbVxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZXZlbnQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciB0aGUgYGNsaWNrYCBldmVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIE9iamVjdCBldmVudFxuICAgICAgICAgKiBAcGFyYW0gT2JqZWN0IGl0ZW1cbiAgICAgICAgICogQHJldHVybiB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBvbkl0ZW1DbGljayhldmVudCwgaXRlbSkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnaXRlbTpjbGljaycsIGV2ZW50LCBpdGVtKTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGVhY2godGhpcy4kY2hpbGRyZW4sIGNoaWxkID0+IHtcbiAgICAgICAgICAgIGNoaWxkLiRvbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkl0ZW1DbGljayhldmVudCwgY2hpbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG48L3NjcmlwdD5cbiIsImltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAnLi9Ecm9wZG93bk1lbnUnO1xuaW1wb3J0IERyb3Bkb3duTWVudURpdmlkZXIgZnJvbSAnLi9Ecm9wZG93bk1lbnVEaXZpZGVyJztcbmltcG9ydCBEcm9wZG93bk1lbnVIZWFkZXIgZnJvbSAnLi9Ecm9wZG93bk1lbnVIZWFkZXInO1xuaW1wb3J0IERyb3Bkb3duTWVudUl0ZW0gZnJvbSAnLi9Ecm9wZG93bk1lbnVJdGVtJztcbmltcG9ydCBWdWVJbnN0YWxsZXIgZnJvbSAnLi4vLi4vSGVscGVycy9WdWVJbnN0YWxsZXIvVnVlSW5zdGFsbGVyJztcblxuY29uc3QgcGx1Z2luID0gVnVlSW5zdGFsbGVyLnVzZSh7XG5cbiAgICBpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWVJbnN0YWxsZXIuY29tcG9uZW50cyh7XG4gICAgICAgICAgICBEcm9wZG93bk1lbnUsXG4gICAgICAgICAgICBEcm9wZG93bk1lbnVEaXZpZGVyLFxuICAgICAgICAgICAgRHJvcGRvd25NZW51SGVhZGVyLFxuICAgICAgICAgICAgRHJvcGRvd25NZW51SXRlbVxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgKiBmcm9tICcuL0Ryb3Bkb3duTWVudURpdmlkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9Ecm9wZG93bk1lbnVIZWFkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9Ecm9wZG93bk1lbnVJdGVtJztcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duTWVudTtcbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxidG4tZ3JvdXAgdi1pZj1cInNwbGl0XCI+XG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiIWRyb3BsZWZ0XCI+XG4gICAgICAgICAgICA8YSB2LWlmPVwiaHJlZlwiIDpocmVmPVwiaHJlZlwiIDpjbGFzcz1cImFjdGlvbkNsYXNzZXNcIiBAY2xpY2s9XCJvbkNsaWNrXCI+XG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImxhYmVsXCI+PGkgdi1pZj1cImljb25cIiA6Y2xhc3M9XCJpY29uXCI+PC9pPiB7e2xhYmVsfX08L3Nsb3Q+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YnV0dG9uIHYtZWxzZSA6dHlwZT1cInR5cGVcIiA6Y2xhc3M9XCJhY3Rpb25DbGFzc2VzXCIgQGNsaWNrPVwib25DbGlja1wiPlxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJsYWJlbC13cmFwcGVyXCI+PGkgdi1pZj1cImljb25cIiA6Y2xhc3M9XCJpY29uXCI+PC9pPiA8c2xvdCBuYW1lPVwibGFiZWxcIj57e2xhYmVsfX08L3Nsb3Q+PC9zbG90PlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDxidG4tZ3JvdXAgOmNsYXNzPVwieydkcm9wdXAnOiBkcm9wdXAsICdkcm9wcmlnaHQnOiBkcm9wcmlnaHQsICdkcm9wbGVmdCc6IGRyb3BsZWZ0fVwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiA6YXJpYS1leHBhbmRlZD1cImlzRHJvcGRvd25TaG93aW5nXCIgOmlkPVwiaWRcIiA6Y2xhc3M9XCJ0b2dnbGVDbGFzc2VzXCIgQGNsaWNrLnByZXZlbnQ9XCIhaXNEcm9wZG93blNob3dpbmcgPyBzaG93KCkgOiBoaWRlKClcIiBAYmx1cj1cIm9uQmx1clwiPjwvYnV0dG9uPlxuICAgICAgICAgICAgPGRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgICAgICA6aWQ9XCJpZFwiXG4gICAgICAgICAgICAgICAgOmFsaWduPVwiYWxpZ25cIlxuICAgICAgICAgICAgICAgIDpzaG93LnN5bmM9XCJpc0Ryb3Bkb3duU2hvd2luZ1wiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwib25NZW51Q2xpY2tcIlxuICAgICAgICAgICAgICAgIEBpdGVtOmNsaWNrPVwib25JdGVtQ2xpY2tcIj5cbiAgICAgICAgICAgICAgICA8c2xvdC8+XG4gICAgICAgICAgICA8L2Ryb3Bkb3duLW1lbnU+XG4gICAgICAgIDwvYnRuLWdyb3VwPlxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImRyb3BsZWZ0XCI+XG4gICAgICAgICAgICA8YSB2LWlmPVwiaHJlZlwiIDpocmVmPVwiaHJlZlwiIDpjbGFzcz1cImFjdGlvbkNsYXNzZXNcIiBAY2xpY2s9XCJvbkNsaWNrXCI+XG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImxhYmVsXCI+PGkgdi1pZj1cImljb25cIiA6Y2xhc3M9XCJpY29uXCI+PC9pPiB7e2xhYmVsfX08L3Nsb3Q+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YnV0dG9uIHYtZWxzZSA6dHlwZT1cInR5cGVcIiA6Y2xhc3M9XCJhY3Rpb25DbGFzc2VzXCIgQGNsaWNrPVwib25DbGlja1wiPlxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJsYWJlbC13cmFwcGVyXCI+PGkgdi1pZj1cImljb25cIiA6Y2xhc3M9XCJpY29uXCI+PC9pPiA8c2xvdCBuYW1lPVwibGFiZWxcIj57e2xhYmVsfX08L3Nsb3Q+PC9zbG90PlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9idG4tZ3JvdXA+XG5cbiAgICA8YnRuLWdyb3VwIHYtZWxzZSA6Y2xhc3M9XCJ7J2Ryb3B1cCc6IGRyb3B1cCwgJ2Ryb3ByaWdodCc6IGRyb3ByaWdodCwgJ2Ryb3BsZWZ0JzogZHJvcGxlZnR9XCIgQGNsaWNrPVwib25DbGlja1wiPlxuICAgICAgICA8YnV0dG9uIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCIgOmFyaWEtZXhwYW5kZWQ9XCJpc0Ryb3Bkb3duU2hvd2luZ1wiIDp0eXBlPVwidHlwZVwiIDppZD1cImlkXCIgOmNsYXNzPVwidG9nZ2xlQ2xhc3Nlc1wiIEBjbGljay5wcmV2ZW50PVwiIWlzRHJvcGRvd25TaG93aW5nID8gc2hvdygpIDogaGlkZSgpXCIgQGJsdXI9XCJvbkJsdXJcIj5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJsYWJlbFwiPjxpIHYtaWY9XCJpY29uXCIgOmNsYXNzPVwiaWNvblwiPjwvaT4ge3tsYWJlbH19PC9zbG90PlxuICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICA8ZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgOmlkPVwiaWRcIlxuICAgICAgICAgICAgOmFsaWduPVwiYWxpZ25cIlxuICAgICAgICAgICAgOnNob3cuc3luYz1cImlzRHJvcGRvd25TaG93aW5nXCJcbiAgICAgICAgICAgIEBjbGljaz1cIm9uTWVudUNsaWNrXCJcbiAgICAgICAgICAgIEBpdGVtOmNsaWNrPVwib25JdGVtQ2xpY2tcIj5cbiAgICAgICAgICAgIDxzbG90Lz5cbiAgICAgICAgPC9kcm9wZG93bi1tZW51PlxuICAgIDwvYnRuLWdyb3VwPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEJ0biBmcm9tICcuLi9CdG4nO1xuaW1wb3J0IFBvcHBlciBmcm9tICdwb3BwZXIuanMnO1xuaW1wb3J0IEJ0bkdyb3VwIGZyb20gJy4uL0J0bkdyb3VwJztcbmltcG9ydCB1dWlkIGZyb20gJy4uLy4uL0hlbHBlcnMvVXVpZCc7XG5pbXBvcnQgcHJlZml4IGZyb20gJy4uLy4uL0hlbHBlcnMvUHJlZml4JztcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAnLi4vRHJvcGRvd25NZW51JztcbmltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmNvbnN0IFRBQl9LRVlDT0RFID0gOTtcbmNvbnN0IExFRlRfQVJST1dfS0VZQ09ERSA9IDM3O1xuY29uc3QgUklHSFRfQVJST1dfS0VZQ09ERSA9IDM5O1xuY29uc3QgVVBfQVJST1dfS0VZQ09ERSA9IDM4O1xuY29uc3QgRE9XTl9BUlJPV19LRVlDT0RFID0gNDA7XG5cbmxldCBpZ25vcmVCbHVyRXZlbnQgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2J0bi1kcm9wZG93bicsXG5cbiAgICBleHRlbmRzOiBCdG4sXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEJ0bkdyb3VwLFxuICAgICAgICBEcm9wZG93bk1lbnVcbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGJ1dHRvbiBpY29uIHRoYXQgYXBwZWFycyBiZWZvcmUgdGhlIGxhYmVsLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBhdXRvY2xvc2U6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBidXR0b24gaWNvbiB0aGF0IGFwcGVhcnMgYmVmb3JlIHRoZSBsYWJlbC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgaWNvbjogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdG9nZ2xlIGJ1dHRvbidzIGxhYmVsLiBJZiBub3QgZGVmaW5lZCBhcyBhbiBhdHRyaWJ1dGUsXG4gICAgICAgICAqIHlvdSBjYW4gb3ZlcnJpZGUgd2l0aCB0aGUgY29tcG9uZW50J3Mgc2xvdCAoaW5uZXIgaHRtbCkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGxhYmVsOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBgaWRgIGF0dHJpYnV0ZSBvbiB0aGUgdG9nZ2xlIGJ1dHRvbiBhbmQgYXJpYSBsYWJlbC4gSWYgbm8gYGlkYCBpc1xuICAgICAgICAgKiBkZWZpbmVkLCB0aGVuIGEgVVVJRCB3aWxsIGJlIGdlbmVyYXRlZCBpbnN0ZWFkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBpZDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogdXVpZFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYnV0dG9uIHR5cGUgYXR0cmlidXRlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnYnV0dG9uJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNwbGF5IHRoZSBkcm9wZG93biBtZW51IGFsaWduZWQgbGVmdCBvciByaWdodFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBhbGlnbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2xlZnQnLFxuICAgICAgICAgICAgdmFsaWRhdGUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZih2YWx1ZS50b0xvd2VyQ2FzZSgpKSAhPT0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc3BsYXkgdGhlIGRyb3Bkb3duIGJ1dHRvbiB3aXRoIGEgc3BsaXQgdG9nZ2xlIGJ1dHRvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIHNwbGl0OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGxheSBhcyBhIGRyb3B1cCBpbnN0ZWFkIG9mIGEgZHJvcGRvd24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBkcm9wdXA6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNwbGF5IGFzIGEgZHJvcHJpZ2h0IGluc3RlYWQgb2YgYSBkcm9wZG93bi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGRyb3ByaWdodDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc3BsYXkgYXMgYSBkcm9wbGVmdCBpbnN0ZWFkIG9mIGEgZHJvcGRvd24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBkcm9wbGVmdDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvY3VzIG9uIHRoZSB0aGUgZHJvcGRvd24gdG9nZ2xlIGJ1dHRvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZvY3VzKCkge1xuICAgICAgICAgICAgdGhpcy4kZWwucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLXRvZ2dsZScpLmZvY3VzKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvY3VzIG9uIHRoZSB0aGUgZHJvcGRvd24gdG9nZ2xlIGJ1dHRvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHF1ZXJ5Rm9jdXNhYmxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1tZW51JykucXVlcnlTZWxlY3RvckFsbCgnbGFiZWwsIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhLCBbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSknKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogTWV0aG9kIHRvIGNoZWNrIGlmIHRoZSBnaXZlbiBlbGVtZW50IGlzIGZvY3VzYWJsZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBpc0ZvY3VzYWJsZShlbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBub2RlcyA9IHRoaXMucXVlcnlGb2N1c2FibGUoKTtcblxuICAgICAgICAgICAgZm9yKGxldCBpIGluIG5vZGVzKSB7XG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudCA9PT0gbm9kZXNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRvZ2dsZSB0aGUgZHJvcGRvd24gbWVudVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgICAgICF0aGlzLmlzRHJvcGRvd25TaG93aW5nID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdyB0aGUgZHJvcGRvd24gbWVudVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHNob3coKSB7XG4gICAgICAgICAgICB0aGlzLmlzRHJvcGRvd25TaG93aW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzaWRlID0gJ2JvdHRvbSc7XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLmRyb3B1cCkge1xuICAgICAgICAgICAgICAgICAgICBzaWRlID0gJ3RvcCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZih0aGlzLmRyb3BsZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNpZGUgPSAnbGVmdCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZih0aGlzLmRyb3ByaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBzaWRlID0gJ3JpZ2h0JztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBtZW51ID0gdGhpcy4kZWwucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLW1lbnUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2dnbGUgPSB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tdG9nZ2xlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBbc2lkZSwgdGhpcy5hbGlnbiA9PT0gJ2xlZnQnID8gJ3N0YXJ0JyA6ICdlbmQnXTtcblxuICAgICAgICAgICAgICAgIG5ldyBQb3BwZXIodG9nZ2xlLCBtZW51LCB7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogcG9zaXRpb24uam9pbignLScpXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLnF1ZXJ5Rm9jdXNhYmxlKCkuaXRlbSgwKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2hvdycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhpZGUgdGhlIGRyb3Bkb3duIG1lbnVcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBoaWRlKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgndG9nZ2xlJywgdGhpcy5pc0Ryb3Bkb3duU2hvd2luZyA9IGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2hpZGUnKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgdGhlIGBjbGlja2AgZXZlbnQgZm9yIHRoZSBhY3Rpb24gYnV0dG9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgb25DbGljayhldmVudCkge1xuICAgICAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGV2ZW50KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgdGhlIGBibHVyYCBldmVudCBmb3IgdGhlIGFjdGlvbiBidXR0b25cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBvbkJsdXIoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLiRlbC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciB0aGUgYGl0ZW06Y2xpY2tgIGV2ZW50IGZvciB0aGUgYWN0aW9uIGJ1dHRvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIG9uTWVudUNsaWNrKGV2ZW50LCBpdGVtKSB7XG4gICAgICAgICAgICBpZihldmVudC50YXJnZXQgPT09IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1tZW51JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIHRoZSBgaXRlbTpjbGlja2AgZXZlbnQgZm9yIHRoZSBhY3Rpb24gYnV0dG9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgb25JdGVtQ2xpY2soZXZlbnQsIGl0ZW0pIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLmlzRm9jdXNhYmxlKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnaXRlbTpjbGljaycsIGV2ZW50LCBpdGVtKTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgdmFyaWFudENsYXNzUHJlZml4KCkge1xuICAgICAgICAgICAgcmV0dXJuICdidG4nICsgKHRoaXMub3V0bGluZSA/ICctb3V0bGluZScgOiAnJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2l6ZWFibGVDbGFzc1ByZWZpeCgpIHtcbiAgICAgICAgICAgIHJldHVybiAnYnRuJztcbiAgICAgICAgfSxcblxuICAgICAgICBhY3Rpb25DbGFzc2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAnYnRuJyxcbiAgICAgICAgICAgICAgICBwcmVmaXgodGhpcy5zaXplLCAnYnRuJyksXG4gICAgICAgICAgICAgICAgcHJlZml4KHRoaXMudmFyaWFudCwgJ2J0bicpXG4gICAgICAgICAgICBdLmpvaW4oJyAnKTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b2dnbGVDbGFzc2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAnYnRuJyxcbiAgICAgICAgICAgICAgICAnZHJvcGRvd24tdG9nZ2xlJyxcbiAgICAgICAgICAgICAgICB0aGlzLnZhcmlhbnRDbGFzcyxcbiAgICAgICAgICAgICAgICB0aGlzLnNpemVhYmxlQ2xhc3MsXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUgPyAnYWN0aXZlJyA6ICcnLFxuICAgICAgICAgICAgICAgIHRoaXMuYmxvY2sgPyAnYnRuLWJsb2NrJyA6ICcnLFxuICAgICAgICAgICAgICAgICh0aGlzLnNwbGl0ID8gJ2Ryb3Bkb3duLXRvZ2dsZS1zcGxpdCcgOiAnJyksXG4gICAgICAgICAgICBdLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNEcm9wZG93blNob3dpbmc6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGVhY2godGhpcy4kZWwucXVlcnlTZWxlY3RvckFsbCgnW3R5cGU9c3VibWl0XSwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIFt0YWJpbmRleF06bm90KFt0YWJpbmRleD1cIi0xXCJdJyksIGVsID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGtleWRvd24gPSBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWdub3JlID0gW1xuICAgICAgICAgICAgICAgICAgICBMRUZUX0FSUk9XX0tFWUNPREUsXG4gICAgICAgICAgICAgICAgICAgIFJJR0hUX0FSUk9XX0tFWUNPREUsXG4gICAgICAgICAgICAgICAgICAgIFVQX0FSUk9XX0tFWUNPREUsXG4gICAgICAgICAgICAgICAgICAgIERPV05fQVJST1dfS0VZQ09ERSxcbiAgICAgICAgICAgICAgICAgICAgVEFCX0tFWUNPREVcbiAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgaWYoaWdub3JlLmluZGV4T2YoZXZlbnQua2V5Q29kZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGlnbm9yZUJsdXJFdmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgYmx1ciA9IGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZighaWdub3JlQmx1ckV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZ25vcmVCbHVyRXZlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGZvY3VzID0gZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlnbm9yZUJsdXJFdmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgbW91c2Vkb3duID0gZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGlnbm9yZUJsdXJFdmVudCA9IHRydWU7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgYmx1cik7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZvY3VzKTtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlkb3duKTtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlZG93bik7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG48L3NjcmlwdD5cbiIsImltcG9ydCBCdG5Ecm9wZG93biBmcm9tICcuL0J0bkRyb3Bkb3duJztcbmltcG9ydCBWdWVJbnN0YWxsZXIgZnJvbSAnLi4vLi4vSGVscGVycy9WdWVJbnN0YWxsZXIvVnVlSW5zdGFsbGVyJztcblxuY29uc3QgcGx1Z2luID0gVnVlSW5zdGFsbGVyLnVzZSh7XG5cbiAgICBpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWVJbnN0YWxsZXIuY29tcG9uZW50cyh7XG4gICAgICAgICAgICBCdG5Ecm9wZG93blxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBCdG5Ecm9wZG93bjtcbiIsImV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICBnZXRTbG90KHNsb3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRzbG90c1tzbG90XTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYXNTbG90KHNsb3QpIHtcbiAgICAgICAgICAgIHJldHVybiAhIXRoaXMuJHNsb3RzW3Nsb3RdO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhc1Nsb3RzKHNsb3RzKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgaW4gc2xvdHMpIHtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5oYXNTbG90KHNsb3RzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICBoYXNEZWZhdWx0U2xvdCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhc1Nsb3QoJ2RlZmF1bHQnKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IDpjbGFzcz1cIm1lcmdlQ2xhc3NlcyhjbGFzc05hbWUsIGNvbG9yYWJsZUNsYXNzZXMpXCI+XG4gICAgICAgIDxzbG90Lz5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBIYXNTbG90cyBmcm9tICcuLi8uLi9NaXhpbnMvSGFzU2xvdHMnO1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9NaXhpbnMvQ29sb3JhYmxlJztcbmltcG9ydCBNZXJnZUNsYXNzZXMgZnJvbSAnLi4vLi4vTWl4aW5zL01lcmdlQ2xhc3Nlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdjYXJkJyxcblxuICAgIG1peGluczogW1xuICAgICAgICBIYXNTbG90cyxcbiAgICAgICAgQ29sb3JhYmxlLFxuICAgICAgICBNZXJnZUNsYXNzZXNcbiAgICBdLFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICBjbGFzc05hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kb3B0aW9ucy5uYW1lXG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG48L3NjcmlwdD5cbiIsIjxzY3JpcHQ+XG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnY2FyZC1ib2R5JyxcblxuICAgIGV4dGVuZHM6IENhcmRcblxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8YnRuLWdyb3VwIGNsYXNzPVwiY2FyZC1idG4tZ3JvdXBcIj5cbiAgICAgICAgPHNsb3QvPlxuICAgIDwvYnRuLWdyb3VwPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2NhcmQtYnRuLWdyb3VwJyxcblxuICAgIGV4dGVuZHM6IENhcmRcblxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCAnLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zLnNjc3MnO1xuQGltcG9ydCAnLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xuXG4uY2FyZCB7XG4gICAgLmNhcmQtYnRuLWdyb3VwLFxuICAgIC5idG4tZ3JvdXAuY2FyZC1idG4tZ3JvdXAge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgJiA+IC5idG4ge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcblxuICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpOjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICRmb250LXNpemUtYmFzZTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGNhcmQtYm9yZGVyLWNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWRlY2tcIj5cbiAgICAgICAgPHNsb3QvPlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2NhcmQtZGVjaydcblxufVxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8Y29tcG9uZW50IDppcz1cInRhZ1wiIDpjbGFzcz1cIm1lcmdlQ2xhc3NlcyhjbGFzc05hbWUsIGNvbG9yYWJsZUNsYXNzZXMpXCI+XG4gICAgICAgIDxzbG90Lz5cbiAgICA8L2NvbXBvbmVudD5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCc7XG5pbXBvcnQgTWVyZ2VDbGFzc2VzIGZyb20gJy4uLy4uL01peGlucy9NZXJnZUNsYXNzZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnY2FyZC1oZWFkZXInLFxuXG4gICAgZXh0ZW5kczogQ2FyZCxcblxuICAgIG1peGluczogW1xuICAgICAgICBNZXJnZUNsYXNzZXNcbiAgICBdLFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNvbXBvbmVudCdzIEhUTUwgdGFnIG5hbWVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdGFnOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnaDUnXG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG48L3NjcmlwdD5cbiIsIjxzY3JpcHQ+XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICcuL0NhcmRIZWFkZXInO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnY2FyZC1mb290ZXInLFxuXG4gICAgZXh0ZW5kczogQ2FyZEhlYWRlcixcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjb21wb25lbnQncyBIVE1MIHRhZyBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHRhZzoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2RpdidcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiA6Y2xhc3M9XCJtZXJnZUNsYXNzZXMoY2xhc3NOYW1lKVwiIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyXCIgOnN0eWxlPVwie2hlaWdodDogdW5pdChoZWlnaHQpfVwiPlxuICAgICAgICA8ZGl2IHYtaWY9XCJiYWNrZ3JvdW5kXCIgY2xhc3M9XCJjYXJkLWltZy1iZ1wiIDpzdHlsZT1cIntiYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kID8gYHVybCgke3RoaXMuc3JjfSlgIDogbnVsbCwgb3ZlcmZsb3c6IGJsdXIgPyAnaGlkZGVuJyA6ICdpbmhlcml0JywgZmlsdGVyOiBibHVyID8gYGJsdXIoJHt1bml0KGJsdXIpfSlgIDogbnVsbH1cIi8+XG4gICAgICAgIDxpbWcgdi1pZj1cIiFiYWNrZ3JvdW5kICYmIHNyY1wiIDpzcmM9XCJzcmNcIiA6YWx0PVwiYWx0XCIgY2xhc3M9XCJpbWctZmx1aWRcIi8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWltZy1jb250ZW50XCIgOmNsYXNzPVwieyd0ZXh0LXRydW5jYXRlJzogdGV4dFRydW5jYXRlfVwiPlxuICAgICAgICAgICAgPHNsb3QvPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCc7XG5pbXBvcnQgdW5pdCBmcm9tICcuLi8uLi9IZWxwZXJzL1VuaXQnO1xuaW1wb3J0IE1lcmdlQ2xhc3NlcyBmcm9tICcuLi8uLi9NaXhpbnMvTWVyZ2VDbGFzc2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2NhcmQtaW1nJyxcblxuICAgIGV4dGVuZHM6IENhcmQsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgTWVyZ2VDbGFzc2VzXG4gICAgXSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBhbHQgYXR0cmlidXRlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGFsdDogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNwbGF5IHRoZSBpbWFnZSBhcyBhIGJhY2tncm91bmQgaW1hZ2UgZml0IHdpdGggQ1NTIGNvdmVyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBiYWNrZ3JvdW5kOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYW1vdW50IHRvIGJsdXIgdGhlIGJhY2tncm91bmQgaW1hZ2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGJsdXI6IFtOdW1iZXIsIFN0cmluZ10sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBoZWlnaHQgYXR0cmlidXRlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGhlaWdodDogW051bWJlciwgU3RyaW5nXSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVHJ1bmNhdGUgdGhlIHRleHQgaW4gdGhlIGNvbnRlbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdGV4dFRydW5jYXRlOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc3JjIGF0dHJpYnV0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBzcmM6IFN0cmluZ1xuXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICB1bml0KHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5pdCh2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLmNhcmQtaW1nLFxuLmNhcmQtaW1nLXRvcCxcbi5jYXJkLWltZy1ib3R0b20ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgLjUpO1xuXG4gICAgLmNhcmQtaW1nLWJnIHtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcblxuICAgICAgICAmID4gaW1nOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkLWltZy1jb250ZW50IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgIC8qXG4gICAgJiA+IDpub3QoaW1nKSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG4gICAgKi9cbn1cbjwvc3R5bGU+XG4iLCI8c2NyaXB0PlxuaW1wb3J0IENhcmRJbWcgZnJvbSAnLi9DYXJkSW1nJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2NhcmQtaW1nLXRvcCcsXG5cbiAgICBleHRlbmRzOiBDYXJkSW1nXG59XG5cbjwvc2NyaXB0PlxuIiwiPHNjcmlwdD5cbmltcG9ydCBDYXJkSW1nIGZyb20gJy4vQ2FyZEltZyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdjYXJkLWltZy1ib3R0b20nLFxuXG4gICAgZXh0ZW5kczogQ2FyZEltZ1xuXG59XG48L3NjcmlwdD5cbiIsIjxzY3JpcHQ+XG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnY2FyZC1pbWctb3ZlcmxheScsXG5cbiAgICBleHRlbmRzOiBDYXJkXG5cbn1cblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8cm91dGVyLWxpbmsgOnRvPVwiaHJlZlwiIDpjbGFzcz1cIm1lcmdlQ2xhc3NlcyhjbGFzc05hbWUsIGNvbG9yYWJsZUNsYXNzZXMpXCIgQGNsaWNrPVwib25DbGlja1wiPlxuICAgICAgICA8c2xvdC8+XG4gICAgPC9yb3V0ZXItbGluaz5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCc7XG5pbXBvcnQgTWVyZ2VDbGFzc2VzIGZyb20gJy4uLy4uL01peGlucy9NZXJnZUNsYXNzZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnY2FyZC1saW5rJyxcblxuICAgIGV4dGVuZHM6IENhcmQsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgTWVyZ2VDbGFzc2VzXG4gICAgXSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBhbHQgYXR0cmlidXRlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGFsdDogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaHJlZiBhdHRyaWJ1dGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgaHJlZjogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdG8gYXR0cmlidXRlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHRvOiBbT2JqZWN0LCBTdHJpbmddXG5cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAgIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8aDYgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKGNsYXNzTmFtZSwgY29sb3JhYmxlQ2xhc3NlcylcIj5cbiAgICAgICAgPHNsb3QvPlxuICAgIDwvaDY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnO1xuaW1wb3J0IE1lcmdlQ2xhc3NlcyBmcm9tICcuLi8uLi9NaXhpbnMvTWVyZ2VDbGFzc2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2NhcmQtc3VidGl0bGUnLFxuXG4gICAgZXh0ZW5kczogQ2FyZCxcblxuICAgIG1peGluczogW1xuICAgICAgICBNZXJnZUNsYXNzZXNcbiAgICBdXG5cbn1cblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8aDUgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKGNsYXNzTmFtZSwgY29sb3JhYmxlQ2xhc3NlcylcIj5cbiAgICAgICAgPHNsb3QvPlxuICAgIDwvaDU+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnO1xuaW1wb3J0IE1lcmdlQ2xhc3NlcyBmcm9tICcuLi8uLi9NaXhpbnMvTWVyZ2VDbGFzc2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2NhcmQtdGl0bGUnLFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIENhcmQsXG4gICAgICAgIE1lcmdlQ2xhc3Nlc1xuICAgIF1cblxufVxuXG48L3NjcmlwdD5cbiIsImltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCc7XG5pbXBvcnQgQ2FyZEJvZHkgZnJvbSAnLi9DYXJkQm9keSc7XG5pbXBvcnQgQ2FyZEJ0bkdyb3VwIGZyb20gJy4vQ2FyZEJ0bkdyb3VwJztcbmltcG9ydCBDYXJkRGVjayBmcm9tICcuL0NhcmREZWNrJztcbmltcG9ydCBDYXJkRm9vdGVyIGZyb20gJy4vQ2FyZEZvb3Rlcic7XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICcuL0NhcmRIZWFkZXInO1xuaW1wb3J0IENhcmRJbWcgZnJvbSAnLi9DYXJkSW1nJztcbmltcG9ydCBDYXJkSW1nVG9wIGZyb20gJy4vQ2FyZEltZ1RvcCc7XG5pbXBvcnQgQ2FyZEltZ0JvdHRvbSBmcm9tICcuL0NhcmRJbWdCb3R0b20nO1xuaW1wb3J0IENhcmRJbWdPdmVybGF5IGZyb20gJy4vQ2FyZEltZ092ZXJsYXknO1xuaW1wb3J0IENhcmRMaW5rIGZyb20gJy4vQ2FyZExpbmsnO1xuaW1wb3J0IENhcmRTdWJ0aXRsZSBmcm9tICcuL0NhcmRTdWJ0aXRsZSc7XG5pbXBvcnQgQ2FyZFRpdGxlIGZyb20gJy4vQ2FyZFRpdGxlJztcbmltcG9ydCBWdWVJbnN0YWxsZXIgZnJvbSAnLi4vLi4vSGVscGVycy9WdWVJbnN0YWxsZXIvVnVlSW5zdGFsbGVyJztcblxuY29uc3QgcGx1Z2luID0gVnVlSW5zdGFsbGVyLnVzZSh7XG5cbiAgICBpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWVJbnN0YWxsZXIuY29tcG9uZW50cyh7XG4gICAgICAgICAgICBDYXJkLFxuICAgICAgICAgICAgQ2FyZEJvZHksXG4gICAgICAgICAgICBDYXJkQnRuR3JvdXAsXG4gICAgICAgICAgICBDYXJkRGVjayxcbiAgICAgICAgICAgIENhcmRGb290ZXIsXG4gICAgICAgICAgICBDYXJkSGVhZGVyLFxuICAgICAgICAgICAgQ2FyZEltZyxcbiAgICAgICAgICAgIENhcmRJbWdUb3AsXG4gICAgICAgICAgICBDYXJkSW1nQm90dG9tLFxuICAgICAgICAgICAgQ2FyZEltZ092ZXJsYXksXG4gICAgICAgICAgICBDYXJkTGluayxcbiAgICAgICAgICAgIENhcmRTdWJ0aXRsZSxcbiAgICAgICAgICAgIENhcmRUaXRsZVxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgKiBmcm9tICcuL0NhcmRCb2R5JztcbmV4cG9ydCAqIGZyb20gJy4vQ2FyZEJ0bkdyb3VwJztcbmV4cG9ydCAqIGZyb20gJy4vQ2FyZERlY2snO1xuZXhwb3J0ICogZnJvbSAnLi9DYXJkRm9vdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vQ2FyZEhlYWRlcic7XG5leHBvcnQgKiBmcm9tICcuL0NhcmRJbWcnO1xuZXhwb3J0ICogZnJvbSAnLi9DYXJkSW1nVG9wJztcbmV4cG9ydCAqIGZyb20gJy4vQ2FyZEltZ0JvdHRvbSc7XG5leHBvcnQgKiBmcm9tICcuL0NhcmRJbWdPdmVybGF5JztcbmV4cG9ydCAqIGZyb20gJy4vQ2FyZExpbmsnO1xuZXhwb3J0ICogZnJvbSAnLi9DYXJkU3VidGl0bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9DYXJkVGl0bGUnO1xuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKGNvbnRyb2xDbGFzcywgY3VzdG9tQ29udHJvbENsYXNzLCBzaXplYWJsZUNsYXNzLCBpbmxpbmUgPyBpbmxpbmVDbGFzcyA6ICcnKVwiPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiY3VzdG9tICYmIGlkXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB2LWJpbmQtZXZlbnRzXG4gICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICA6bmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIDppZD1cImlkXCJcbiAgICAgICAgICAgICAgICA6dmFsdWU9XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgOnJlcXVpcmVkPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkIHx8IHJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgICAgOnBhdHRlcm49XCJwYXR0ZXJuXCJcbiAgICAgICAgICAgICAgICA6Y2hlY2tlZD1cImNoZWNrZWRWYWx1ZSA9PT0gdmFsdWUgfHwgY2hlY2tlZFwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKGlucHV0Q2xhc3MsIChpbnZhbGlkRmVlZGJhY2sgPyAnaXMtaW52YWxpZCcgOiAnJykpXCJcbiAgICAgICAgICAgICAgICBAY2hhbmdlPVwiJGVtaXQoJ2NoYW5nZScsICRldmVudC50YXJnZXQudmFsdWUpXCI+XG5cbiAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiaWRcIiA6Y2xhc3M9XCJtZXJnZUNsYXNzZXMobGFiZWxDbGFzcywgY29sb3JhYmxlQ2xhc3NlcylcIj5cbiAgICAgICAgICAgICAgICA8c2xvdD57e2xhYmVsfX08L3Nsb3Q+XG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtLWZlZWRiYWNrIHYtaWY9XCJ2YWxpZEZlZWRiYWNrXCIgdi1odG1sPVwidmFsaWRGZWVkYmFja1wiIHZhbGlkIC8+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtLWZlZWRiYWNrIHYtaWY9XCJpbnZhbGlkRmVlZGJhY2tcIiB2LWh0bWw9XCJpbnZhbGlkRmVlZGJhY2tcIiBpbnZhbGlkIC8+XG4gICAgICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJpZFwiIDpjbGFzcz1cIm1lcmdlQ2xhc3NlcyhsYWJlbENsYXNzLCBjb2xvcmFibGVDbGFzc2VzKVwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB2LWJpbmQtZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIDpuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIDppZD1cImlkXCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICA6cmVxdWlyZWQ9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkIHx8IHJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgOnJlYWRvbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICA6cGF0dGVybj1cInBhdHRlcm5cIlxuICAgICAgICAgICAgICAgICAgICA6Y2hlY2tlZD1cImNoZWNrZWRWYWx1ZSA9PT0gdmFsdWUgfHwgY2hlY2tlZFwiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIm1lcmdlQ2xhc3NlcyhpbnB1dENsYXNzLCAoaW52YWxpZEZlZWRiYWNrID8gJ2lzLWludmFsaWQnIDogJycpKVwiXG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCIkZW1pdCgnY2hhbmdlJywgJGV2ZW50LnRhcmdldC52YWx1ZSlcIj5cblxuICAgICAgICAgICAgICAgIDxzbG90Pnt7bGFiZWx9fTwvc2xvdD5cblxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJmZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwidmFsaWRGZWVkYmFja1wiIHYtaHRtbD1cInZhbGlkRmVlZGJhY2tcIiB2YWxpZCAvPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwiaW52YWxpZEZlZWRiYWNrXCIgdi1odG1sPVwiaW52YWxpZEZlZWRiYWNrXCIgaW52YWxpZCAvPlxuICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImhlbHBcIj5cbiAgICAgICAgICAgIDxoZWxwLXRleHQgdi1pZj1cImhlbHBUZXh0XCIgdi1odG1sPVwiaGVscFRleHRcIiAvPlxuICAgICAgICA8L3Nsb3Q+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgSGVscFRleHQgZnJvbSAnLi4vSGVscFRleHQnO1xuaW1wb3J0IEZvcm1GZWVkYmFjayBmcm9tICcuLi9Gb3JtRmVlZGJhY2snO1xuaW1wb3J0IHByZWZpeCBmcm9tICcuLi8uLi9IZWxwZXJzL1ByZWZpeCc7XG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJy4uLy4uL01peGlucy9Db2xvcmFibGUnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJy4uLy4uL01peGlucy9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgTWVyZ2VDbGFzc2VzIGZyb20gJy4uLy4uL01peGlucy9NZXJnZUNsYXNzZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAncmFkaW8tZmllbGQnLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBIZWxwVGV4dCxcbiAgICAgICAgRm9ybUZlZWRiYWNrXG4gICAgfSxcblxuICAgIG1peGluczogW1xuICAgICAgICBDb2xvcmFibGUsXG4gICAgICAgIEZvcm1Db250cm9sLFxuICAgICAgICBNZXJnZUNsYXNzZXNcbiAgICBdLFxuXG4gICAgbW9kZWw6IHtcbiAgICAgICAgZXZlbnQ6ICdjaGFuZ2UnLFxuICAgICAgICBwcm9wOiAnY2hlY2tlZFZhbHVlJ1xuICAgIH0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBhcnJheSBvZiBldmVudCBuYW1lcyB0aGF0IGNvcnJlbGF0ZSB3aXRoIGNhbGxiYWNrIGZ1bmN0aW9uc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgRnVuY3Rpb25cbiAgICAgICAgICovXG4gICAgICAgIGJpbmRFdmVudHM6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWydmb2N1cycsICdibHVyJywgJ2lucHV0JywgJ2NsaWNrJywgJ2tleXVwJywgJ2tleWRvd24nLCAncHJvZ3Jlc3MnXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSXMgdGhpcyBhIGN1c3RvbSBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGN1c3RvbTogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGxheSB0aGUgZm9ybSBmaWVsZCBhbmQgbGFiZWwgaW5saW5lXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBGdW5jdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgaW5saW5lOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY2hlY2tlZCB2YWx1ZXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgY2hlY2tlZDogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNoZWNrZWQgdmFsdWVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgY2hlY2tlZFZhbHVlOiBbQm9vbGVhbiwgTnVtYmVyLCBTdHJpbmcsIE9iamVjdF0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjbGFzcyBuYW1lIGFzc2lnbmVkIHRvIHRoZSBjb250cm9sIGVsZW1lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgZGVmYXVsdENvbnRyb2xDbGFzczoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2Zvcm0tY2hlY2snXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIGxhYmVsQ2xhc3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4KCdsYWJlbCcsIHRoaXMuY29udHJvbENsYXNzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbnB1dENsYXNzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCgnaW5wdXQnLCB0aGlzLmNvbnRyb2xDbGFzcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5saW5lQ2xhc3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4KCdpbmxpbmUnLCB0aGlzLmNvbnRyb2xDbGFzcyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29udHJvbENsYXNzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tID8gJ2N1c3RvbS1jb250cm9sJyA6IHRoaXMuZGVmYXVsdENvbnRyb2xDbGFzcztcbiAgICAgICAgfSxcblxuICAgICAgICBjdXN0b21Db250cm9sQ2xhc3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jdXN0b20gPyBwcmVmaXgodGhpcy4kb3B0aW9ucy5uYW1lLnJlcGxhY2UoJy1maWVsZCcsICcnKSwgJ2N1c3RvbScpIDogJyc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2l6ZWFibGVDbGFzcygpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmVmaXgodGhpcy5zaXplLCAnZm9ybS1jb250cm9sJyk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG48L3NjcmlwdD5cbiIsImltcG9ydCBSYWRpb0ZpZWxkIGZyb20gJy4vUmFkaW9GaWVsZCc7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJy4uLy4uL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgUmFkaW9GaWVsZFxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBSYWRpb0ZpZWxkO1xuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiA6Y2xhc3M9XCJtZXJnZUNsYXNzZXMoY29udHJvbENsYXNzLCBjdXN0b21Db250cm9sQ2xhc3MsIHNpemVhYmxlQ2xhc3MsIGlubGluZSA/IGlubGluZUNsYXNzIDogJycpXCI+XG5cbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJjdXN0b20gJiYgaWRcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHYtYmluZC1ldmVudHNcbiAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgIDpuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgOmlkPVwiaWRcIlxuICAgICAgICAgICAgICAgIDp2YWx1ZT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICA6cmVxdWlyZWQ9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWQgfHwgcmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgIDpyZWFkb25seT1cInJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICA6cGF0dGVybj1cInBhdHRlcm5cIlxuICAgICAgICAgICAgICAgIDpjaGVja2VkPVwiY2hlY2tlZFZhbHVlcy5pbmRleE9mKHZhbHVlKSAhPT0gLTEgfHwgY2hlY2tlZFwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKGlucHV0Q2xhc3MsIChpbnZhbGlkRmVlZGJhY2sgPyAnaXMtaW52YWxpZCcgOiAnJykpXCJcbiAgICAgICAgICAgICAgICBAY2hhbmdlPVwidXBkYXRlKCRldmVudC50YXJnZXQudmFsdWUpXCI+XG5cbiAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiaWRcIiA6Y2xhc3M9XCJtZXJnZUNsYXNzZXMobGFiZWxDbGFzcywgY29sb3JhYmxlQ2xhc3NlcylcIj5cbiAgICAgICAgICAgICAgICA8c2xvdD57e2xhYmVsfX08L3Nsb3Q+XG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtLWZlZWRiYWNrIHYtaWY9XCJ2YWxpZEZlZWRiYWNrXCIgdi1odG1sPVwidmFsaWRGZWVkYmFja1wiIHZhbGlkIC8+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtLWZlZWRiYWNrIHYtaWY9XCJpbnZhbGlkRmVlZGJhY2tcIiB2LWh0bWw9XCJpbnZhbGlkRmVlZGJhY2tcIiBpbnZhbGlkIC8+XG4gICAgICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImlkXCIgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKGxhYmVsQ2xhc3MsIGNvbG9yYWJsZUNsYXNzZXMpXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHYtYmluZC1ldmVudHNcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgOmlkPVwiaWRcIlxuICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIDpyZXF1aXJlZD1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWQgfHwgcmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgIDpwYXR0ZXJuPVwicGF0dGVyblwiXG4gICAgICAgICAgICAgICAgICAgIDpjaGVja2VkPVwiY2hlY2tlZFZhbHVlcy5pbmRleE9mKHZhbHVlKSAhPT0gLTEgfHwgY2hlY2tlZFwiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIm1lcmdlQ2xhc3NlcyhpbnB1dENsYXNzLCAoaW52YWxpZEZlZWRiYWNrID8gJ2lzLWludmFsaWQnIDogJycpKVwiXG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJ1cGRhdGUoJGV2ZW50LnRhcmdldC52YWx1ZSlcIj5cblxuICAgICAgICAgICAgICAgIDxzbG90Pnt7bGFiZWx9fTwvc2xvdD5cblxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJmZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwidmFsaWRGZWVkYmFja1wiIHYtaHRtbD1cInZhbGlkRmVlZGJhY2tcIiB2YWxpZCAvPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwiaW52YWxpZEZlZWRiYWNrXCIgdi1odG1sPVwiaW52YWxpZEZlZWRiYWNrXCIgaW52YWxpZCAvPlxuICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImhlbHBcIj5cbiAgICAgICAgICAgIDxoZWxwLXRleHQgdi1pZj1cImhlbHBUZXh0XCIgdi1odG1sPVwiaGVscFRleHRcIiAvPlxuICAgICAgICA8L3Nsb3Q+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgUmFkaW9GaWVsZCBmcm9tICcuLi9SYWRpb0ZpZWxkJztcbmltcG9ydCBNZXJnZUNsYXNzZXMgZnJvbSAnLi4vLi4vTWl4aW5zL01lcmdlQ2xhc3Nlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdjaGVja2JveC1maWVsZCcsXG5cbiAgICBleHRlbmRzOiBSYWRpb0ZpZWxkLFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIE1lcmdlQ2xhc3Nlc1xuICAgIF0sXG5cbiAgICBtb2RlbDoge1xuICAgICAgICBldmVudDogJ2NoYW5nZScsXG4gICAgICAgIHByb3A6ICdjaGVja2VkVmFsdWVzJ1xuICAgIH0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY2hlY2tlZCB2YWx1ZXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgY2hlY2tlZFZhbHVlczoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICBkZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICB1cGRhdGUodmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSB0aGlzLmNoZWNrZWRWYWx1ZXMuc2xpY2UoMCk7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY2hlY2tlZFZhbHVlcy5pbmRleE9mKHZhbHVlKTtcblxuICAgICAgICAgICAgaWYoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZC5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoZWNrZWQuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgY2hlY2tlZCk7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgQ2hlY2tib3hGaWVsZCBmcm9tICcuL0NoZWNrYm94RmllbGQnO1xuaW1wb3J0IFZ1ZUluc3RhbGxlciBmcm9tICcuLi8uLi9IZWxwZXJzL1Z1ZUluc3RhbGxlci9WdWVJbnN0YWxsZXInO1xuXG5jb25zdCBwbHVnaW4gPSBWdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIENoZWNrYm94RmllbGRcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3hGaWVsZDtcbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJkcm9wem9uZVwiIDpjbGFzcz1cInsnaXMtZHJhZ2dpbmcnOiBpc0RyYWdnaW5nfVwiIEBkcm9wLnByZXZlbnQ9XCJvbkRyb3BcIiBAZHJhZ292ZXIucHJldmVudD1cIm9uRHJhZ292ZXJcIiBAZHJhZ2VudGVyLnByZXZlbnQ9XCJvbkRyYWdlbnRlclwiIEBkcmFnbGVhdmUucHJldmVudD1cIm9uRHJhZ2xlYXZlXCI+XG4gICAgICAgIDxzbG90IG5hbWU9XCJwbGFjZWhvbGRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRyb3B6b25lLXBsYWNlaG9sZGVyIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxjYXJkLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3M9XCJtdC00XCI+RHJhZyAmIERyb3A8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RHJhZyBhbmQgZHJvcCB5b3VyIGZpbGVzIGhlcmUgdG8gdXBsb2FkIHRoZW0hPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10LTNcIj48aSBjbGFzcz1cImZhIGZhLWltYWdlXCIvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2NhcmQtYm9keT5cbiAgICAgICAgICAgICAgICA8L2NhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zbG90PlxuICAgICAgICA8c2xvdC8+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9DYXJkJztcbmltcG9ydCBDYXJkQm9keSBmcm9tICcuLi9DYXJkL0NhcmRCb2R5JztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2Ryb3B6b25lJyxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgQ2FyZCxcbiAgICAgICAgQ2FyZEJvZHlcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAgIG9uRHJvcChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdkcm9wJywgZXZlbnQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9uRHJhZ292ZXIoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdkcmFnb3ZlcicsIGV2ZW50KTtcbiAgICAgICAgfSxcblxuICAgICAgICBvbkRyYWdlbnRlcihldmVudCkge1xuICAgICAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2RyYWdlbnRlcicsIGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMub25EcmFnb3ZlcihldmVudCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25EcmFnbGVhdmUoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZHJhZ2xlYXZlJywgZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGZpbGVzOiBudWxsLFxuICAgICAgICAgICAgaXNEcmFnZ2luZzogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLmRyb3B6b25lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cblxuICAgIC5mYS1pbWFnZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgfVxuXG4gICAgLmRyb3B6b25lLXBsYWNlaG9sZGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIH1cblxuICAgICYuaXMtZHJhZ2dpbmcgLmRyb3B6b25lLXBsYWNlaG9sZGVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsImltcG9ydCBEcm9wem9uZSBmcm9tICcuL0Ryb3B6b25lJztcbmltcG9ydCBWdWVJbnN0YWxsZXIgZnJvbSAnLi4vLi4vSGVscGVycy9WdWVJbnN0YWxsZXIvVnVlSW5zdGFsbGVyJztcblxuY29uc3QgcGx1Z2luID0gVnVlSW5zdGFsbGVyLnVzZSh7XG5cbiAgICBpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWVJbnN0YWxsZXIuY29tcG9uZW50cyh7XG4gICAgICAgICAgICBEcm9wem9uZVxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBEcm9wem9uZTtcbiIsImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWFkRmlsZShmaWxlLCBwcm9ncmVzcykge1xuICAgIGlmKCEoZmlsZSBpbnN0YW5jZW9mIEZpbGUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGZpcnN0IGFyZ3VtZW50IGJlIGFuIGluc3RhbmNlIG9mIEZpbGUgb2JqZWN0LicpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyO1xuXG4gICAgICAgIGlmKGlzRnVuY3Rpb24ocHJvZ3Jlc3MpKSB7XG4gICAgICAgICAgICByZWFkZXIub25wcm9ncmVzcyA9IGUgPT4gcHJvZ3Jlc3MoZSwgcmVhZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBlID0+IHJlc29sdmUoZSk7XG4gICAgICAgIHJlYWRlci5vbmVycm9yID0gZSA9PiByZWplY3QoZSk7XG4gICAgICAgIHJlYWRlci5vbmFib3J0ID0gZSA9PiByZWplY3QoZSk7XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH0pO1xufVxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cImZpbGUtcHJldmlld1wiIDpjbGFzcz1cInsnaGFzLWltYWdlJzogISFpbWFnZX1cIj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1wcmV2aWV3LWlubmVyXCI+XG5cbiAgICAgICAgICAgIDxhIHYtaWY9XCIhaGlkZUNsb3NlXCIgaHJlZj1cIiNcIiBjbGFzcz1cImZpbGUtcHJldmlldy1jbG9zZVwiIEBjbGljay5wcmV2ZW50PVwiJGVtaXQoJ2Nsb3NlJywgZmlsZSlcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzLWNpcmNsZVwiPjwvaT5cbiAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiISFwb3N0ZXIgfHwgaXNJbWFnZVwiIGNsYXNzPVwiZmlsZS1wcmV2aWV3LWltYWdlXCI+XG4gICAgICAgICAgICAgICAgPGltZyB2LWlmPVwiISFwb3N0ZXIgfHwgISFpbWFnZVwiIDpzcmM9XCJwb3N0ZXIgfHwgaW1hZ2VcIiBjbGFzcz1cImZpbGUtcHJldmlldy10aHVtYm5haWxcIiBAbG9hZD1cIm9uTG9hZFwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IHYtZWxzZSB2LXJlYWR5PVwiKCkgPT4gdGhpcy4kZW1pdCgnbG9hZGVkJylcIiBjbGFzcz1cImZpbGUtcHJldmlldy1pY29uXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYVwiIDpjbGFzcz1cInsnZmEtZmlsZS12aWRlby1vJzogaXNWaWRlbywgJ2ZhLWZpbGUtbyc6ICFpc1ZpZGVvfVwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8cHJvZ3Jlc3MtYmFyXG4gICAgICAgICAgICAgICAgdi1pZj1cInByb2dyZXNzIHx8IGlzSW1hZ2UgJiYgbG9hZGVkICE9PSBmYWxzZVwiXG4gICAgICAgICAgICAgICAgdi1yZWFkeT1cInJlYWRGaWxlXCJcbiAgICAgICAgICAgICAgICA6dmFsdWU9XCJwcm9ncmVzcyB8fCBsb2FkZWQgfHwgMFwiXG4gICAgICAgICAgICAgICAgOmhlaWdodD1cIjEwXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cIm10LTNcIi8+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLXByZXZpZXctZmlsZW5hbWVcIiB2LWh0bWw9XCJuYW1lXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS1wcmV2aWV3LWZpbGVzaXplXCI+KHt7c2l6ZX19KTwvZGl2PlxuICAgICAgICA8ZGl2PlxuXG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCByZWFkRmlsZSBmcm9tICcuLi8uLi9IZWxwZXJzL1JlYWRGaWxlL1JlYWRGaWxlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2ZpbGUtcHJldmlldycsXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIFByb2dyZXNzQmFyXG4gICAgfSxcblxuICAgIGRpcmVjdGl2ZXM6IHtcbiAgICAgICAgcmVhZHk6IHtcbiAgICAgICAgICAgIGluc2VydGVkKGVsLCBiaW5kaW5nLCB2bm9kZSkge1xuICAgICAgICAgICAgICAgIGlmKGlzRnVuY3Rpb24oYmluZGluZy52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdm5vZGUuY29udGV4dC4kbmV4dFRpY2soYmluZGluZy52YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhpZGUgdGhlIGNsb3NlIGJ1dHRvbiBmb3IgdGhlIHByZXZpZXdcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IE9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgaGlkZUNsb3NlOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdXBsb2FkZWQgRmlsZSBvYmplY3RcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IE9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgZmlsZToge1xuICAgICAgICAgICAgdHlwZTogW09iamVjdCwgRmlsZV0sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBpbWFnZSBVUkwgdG8gaW5zdGVhZCBvZiB1c2luZyB0aGUgZmlsZSByZWFkZXIuXG4gICAgICAgICAqIEBwcm9wZXJ0eSB7U3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgcG9zdGVyOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFByb2dyZXNzIHRoYXQgY2FuIGJlIHBhc3NlZCBmcm9tIGEgcGFyZW50IGNvbXBhcmVudCwgZm9yIGluc3RhbmNlXG4gICAgICAgICAqIHVzZSB0byBzaG93IGFuIGFqYXggcmVxdWVzdCB3aXRoIGEgc2luZ2xlIHByb2dyZXNzIGJhci4gSWYgYSBwcm9ncmVzc1xuICAgICAgICAgKiB2YWx1ZSBpcyBwYXNzZWQsIGV2ZW4gYSAwLCB0aGUgcHJvZ3Jlc3MgYmFyIHdpbGwgbm90IGJlIHVzZWQgdG8gc2hvd1xuICAgICAgICAgKiB0aGUgcHJvZ3Jlc3Mgb2YgdGhlIGZpbGUgcmVhZGVyLlxuICAgICAgICAgKiBAcHJvcGVydHkge051bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHByb2dyZXNzOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiB1bmRlZmluZWRcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgZmlsZSBuYW1lXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIG5hbWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maWxlIGluc3RhbmNlb2YgRmlsZSA/IHRoaXMuZmlsZS5uYW1lIDogdGhpcy5maWxlLm9yaWdfZmlsZW5hbWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgZmlsZSBleHRlbnNpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgZXh0ZW5zaW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlsZSBpbnN0YW5jZW9mIEZpbGUgPyB0aGlzLmZpbGUubmFtZS5zcGxpdCgnLicpLnBvcCgpLnRvTG93ZXJDYXNlKCkgOiB0aGlzLmZpbGUuZXh0ZW5zaW9uO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIGZpbGUgZm9ybWF0dGVkIHNpemVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgc2l6ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ5dGVzVG9TaXplKHRoaXMuZmlsZS5zaXplKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBmaWxlIHR5cGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdHlwZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbGUgaW5zdGFuY2VvZiBGaWxlID8gdGhpcy5maWxlLnR5cGUgOiB0aGlzLmZpbGUubWltZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgdG8gc2VlIGlmIHRoZSBmaWxlIGlzIGFuIGltYWdlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBpc0ltYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuICEhdGhpcy50eXBlLm1hdGNoKC9eaW1hZ2UvKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgdG8gc2VlIGlmIHRoZSBmaWxlIGlzIGEgdmlkZW8uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGlzVmlkZW8oKSB7XG4gICAgICAgICAgICByZXR1cm4gISF0aGlzLnR5cGUubWF0Y2goL152aWRlby8pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIGxhc3QgdGltZSB0aGUgZmlsZSB3YXMgbW9kaWZpZWQgKGFzIHRpbWVzdGFtcClcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgbGFzdE1vZGlmaWVkKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlsZSBpbnN0YW5jZW9mIEZpbGUgPyB0aGlzLmZpbGUubGFzdE1vZGlmaWVkIDogbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBsYXN0IHRpbWUgdGhlIGZpbGUgd2FzIG1vZGlmaWVkIChhcyBEYXRlKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBsYXN0TW9kaWZpZWREYXRlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlsZSBpbnN0YW5jZW9mIEZpbGUgPyB0aGlzLmZpbGUubGFzdE1vZGlmaWVkRGF0ZSA6IG51bGw7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgcmVhZEZpbGUoKSB7XG4gICAgICAgICAgICBpZih0aGlzLmZpbGUgaW5zdGFuY2VvZiBGaWxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBtb21lbnQoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkID0gMDtcblxuICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVhZEZpbGUodGhpcy5maWxlLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGUubGVuZ3RoQ29tcHV0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3Byb2dyZXNzJywgdGhpcy5sb2FkZWQgPSBwYXJzZUludCgoZS5sb2FkZWQgLyBlLnRvdGFsKSAqIDEwMCwgMTApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdyZWFkJywgZXZlbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCA1MDAgLSBtb21lbnQoKS5kaWZmKHN0YXJ0KSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgIFx0Ynl0ZXNUb1NpemU6IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gICAgXHRcdHZhciBzaXplcyA9IFsnQnl0ZXMnLCAnS0InLCAnTUInLCAnR0InLCAnVEInXTtcbiAgICBcdFx0aWYgKGJ5dGVzID09IDApIHJldHVybiAnMCBCeXRlJztcbiAgICBcdFx0dmFyIGkgPSBwYXJzZUludChNYXRoLmZsb29yKE1hdGgubG9nKGJ5dGVzKSAvIE1hdGgubG9nKDEwMjQpKSk7XG4gICAgXHRcdHJldHVybiBNYXRoLnJvdW5kKGJ5dGVzIC8gTWF0aC5wb3coMTAyNCwgaSksIDIpICsgJyAnICsgc2l6ZXNbaV07XG4gICAgXHR9LFxuXG4gICAgICAgIG9uTG9hZChldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnbG9hZGVkJyk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW1hZ2U6IHRoaXMuZmlsZS51cmwsXG4gICAgICAgICAgICBsb2FkZWQ6IHRoaXMuZmlsZSBpbnN0YW5jZW9mIEZpbGUgPyAwIDogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuXG59XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbiRmaWxlLXByZXZpZXctY2xvc2Utd2lkdGg6IDFyZW0gKiAyO1xuJGZpbGUtcHJldmlldy1jbG9zZS1oZWlnaHQ6IDFyZW0gKiAyO1xuXG4uZmlsZS1wcmV2aWV3IHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5maWxlLXByZXZpZXctaW5uZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuXG4gICAgLmZpbGUtcHJldmlldy1jbG9zZSB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMzJSwgLTMzJSk7XG5cbiAgICAgICAgaSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZmlsZS1wcmV2aWV3LWljb24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG5cbiAgICAuZmlsZS1wcmV2aWV3LXRodW1ibmFpbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmZpbGUtcHJldmlldy1maWxlbmFtZSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuXG4gICAgLmZpbGUtcHJldmlldy1maWxlbmFtZSxcbiAgICAuZmlsZS1wcmV2aWV3LWZpbGVzaXplIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxufVxuXG48L3N0eWxlPlxuIiwiaW1wb3J0IEZpbGVQcmV2aWV3IGZyb20gJy4vRmlsZVByZXZpZXcnO1xuaW1wb3J0IFZ1ZUluc3RhbGxlciBmcm9tICcuLi8uLi9IZWxwZXJzL1Z1ZUluc3RhbGxlci9WdWVJbnN0YWxsZXInO1xuXG5jb25zdCBwbHVnaW4gPSBWdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIEZpbGVQcmV2aWV3XG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVQcmV2aWV3O1xuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGNvbXBvbmVudFxuICAgICAgICA6bmFtZT1cIm5hbWVcIlxuICAgICAgICA6aWQ9XCJpZFwiXG4gICAgICAgIDppcz1cIiFzZWxlY3QgPyAnaW5wdXQnIDogJ3NlbGVjdCdcIlxuICAgICAgICA6dHlwZT1cIiFzZWxlY3QgPyB0eXBlIDogZmFsc2VcIlxuICAgICAgICA6dmFsdWU9XCJ2YWx1ZVwiXG4gICAgICAgIDpwYXR0ZXJuPVwicGF0dGVyblwiXG4gICAgICAgIDpyZXF1aXJlZD1cInJlcXVpcmVkXCJcbiAgICAgICAgOnJlYWRvbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICA6cGxhY2Vob2xkZXI9XCJwbGFjZWhvbGRlclwiXG4gICAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkIHx8IHJlYWRvbmx5XCJcbiAgICAgICAgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKGNvbnRyb2xDbGFzc2VzLCBjb2xvcmFibGVDbGFzc2VzKVwiXG4gICAgICAgIDphcmlhLWxhYmVsPVwibGFiZWxcIlxuICAgICAgICA6YXJpYS1kZXNjcmliZWRieT1cImlkXCJcbiAgICAgICAgdi1iaW5kLWV2ZW50cz1cImJpbmRFdmVudHNcIi8+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vTWl4aW5zL0NvbG9yYWJsZSc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnLi4vLi4vTWl4aW5zL0Zvcm1Db250cm9sJztcbmltcG9ydCBNZXJnZUNsYXNzZXMgZnJvbSAnLi4vLi4vTWl4aW5zL01lcmdlQ2xhc3Nlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdmb3JtLWNvbnRyb2wnLFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIENvbG9yYWJsZSxcbiAgICAgICAgRm9ybUNvbnRyb2wsXG4gICAgICAgIE1lcmdlQ2xhc3Nlc1xuICAgIF0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyB0aGUgZWxlbWVudCBhIHNlbGVjdD9cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgc2VsZWN0OiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHlwZSBhdHRyaWJ1dGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ3RleHQnXG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG48L3NjcmlwdD5cbiIsImltcG9ydCBGb3JtQ29udHJvbCBmcm9tICcuL0Zvcm1Db250cm9sJztcbmltcG9ydCBWdWVJbnN0YWxsZXIgZnJvbSAnLi4vLi4vSGVscGVycy9WdWVJbnN0YWxsZXIvVnVlSW5zdGFsbGVyJztcblxuY29uc3QgcGx1Z2luID0gVnVlSW5zdGFsbGVyLnVzZSh7XG5cbiAgICBpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWVJbnN0YWxsZXIuY29tcG9uZW50cyh7XG4gICAgICAgICAgICBGb3JtQ29udHJvbFxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtQ29udHJvbDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTYgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgVzNDIFNPRlRXQVJFIEFORCBET0NVTUVOVCBOT1RJQ0UgQU5EIExJQ0VOU0UuXG4gKlxuICogIGh0dHBzOi8vd3d3LnczLm9yZy9Db25zb3J0aXVtL0xlZ2FsLzIwMTUvY29weXJpZ2h0LXNvZnR3YXJlLWFuZC1kb2N1bWVudFxuICpcbiAqL1xuXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCkge1xuJ3VzZSBzdHJpY3QnO1xuXG5cbi8vIEV4aXRzIGVhcmx5IGlmIGFsbCBJbnRlcnNlY3Rpb25PYnNlcnZlciBhbmQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeVxuLy8gZmVhdHVyZXMgYXJlIG5hdGl2ZWx5IHN1cHBvcnRlZC5cbmlmICgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdyAmJlxuICAgICdJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5JyBpbiB3aW5kb3cgJiZcbiAgICAnaW50ZXJzZWN0aW9uUmF0aW8nIGluIHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5LnByb3RvdHlwZSkge1xuXG4gIC8vIE1pbmltYWwgcG9seWZpbGwgZm9yIEVkZ2UgMTUncyBsYWNrIG9mIGBpc0ludGVyc2VjdGluZ2BcbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdzNjL0ludGVyc2VjdGlvbk9ic2VydmVyL2lzc3Vlcy8yMTFcbiAgaWYgKCEoJ2lzSW50ZXJzZWN0aW5nJyBpbiB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeS5wcm90b3R5cGUpKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5LnByb3RvdHlwZSxcbiAgICAgICdpc0ludGVyc2VjdGluZycsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuO1xufVxuXG5cbi8qKlxuICogQW4gSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgcmVnaXN0cnkuIFRoaXMgcmVnaXN0cnkgZXhpc3RzIHRvIGhvbGQgYSBzdHJvbmdcbiAqIHJlZmVyZW5jZSB0byBJbnRlcnNlY3Rpb25PYnNlcnZlciBpbnN0YW5jZXMgY3VycmVudGx5IG9ic2VydmluZyBhIHRhcmdldFxuICogZWxlbWVudC4gV2l0aG91dCB0aGlzIHJlZ2lzdHJ5LCBpbnN0YW5jZXMgd2l0aG91dCBhbm90aGVyIHJlZmVyZW5jZSBtYXkgYmVcbiAqIGdhcmJhZ2UgY29sbGVjdGVkLlxuICovXG52YXIgcmVnaXN0cnkgPSBbXTtcblxuXG4vKipcbiAqIENyZWF0ZXMgdGhlIGdsb2JhbCBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5IGNvbnN0cnVjdG9yLlxuICogaHR0cHM6Ly93M2MuZ2l0aHViLmlvL0ludGVyc2VjdGlvbk9ic2VydmVyLyNpbnRlcnNlY3Rpb24tb2JzZXJ2ZXItZW50cnlcbiAqIEBwYXJhbSB7T2JqZWN0fSBlbnRyeSBBIGRpY3Rpb25hcnkgb2YgaW5zdGFuY2UgcHJvcGVydGllcy5cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5KGVudHJ5KSB7XG4gIHRoaXMudGltZSA9IGVudHJ5LnRpbWU7XG4gIHRoaXMudGFyZ2V0ID0gZW50cnkudGFyZ2V0O1xuICB0aGlzLnJvb3RCb3VuZHMgPSBlbnRyeS5yb290Qm91bmRzO1xuICB0aGlzLmJvdW5kaW5nQ2xpZW50UmVjdCA9IGVudHJ5LmJvdW5kaW5nQ2xpZW50UmVjdDtcbiAgdGhpcy5pbnRlcnNlY3Rpb25SZWN0ID0gZW50cnkuaW50ZXJzZWN0aW9uUmVjdCB8fCBnZXRFbXB0eVJlY3QoKTtcbiAgdGhpcy5pc0ludGVyc2VjdGluZyA9ICEhZW50cnkuaW50ZXJzZWN0aW9uUmVjdDtcblxuICAvLyBDYWxjdWxhdGVzIHRoZSBpbnRlcnNlY3Rpb24gcmF0aW8uXG4gIHZhciB0YXJnZXRSZWN0ID0gdGhpcy5ib3VuZGluZ0NsaWVudFJlY3Q7XG4gIHZhciB0YXJnZXRBcmVhID0gdGFyZ2V0UmVjdC53aWR0aCAqIHRhcmdldFJlY3QuaGVpZ2h0O1xuICB2YXIgaW50ZXJzZWN0aW9uUmVjdCA9IHRoaXMuaW50ZXJzZWN0aW9uUmVjdDtcbiAgdmFyIGludGVyc2VjdGlvbkFyZWEgPSBpbnRlcnNlY3Rpb25SZWN0LndpZHRoICogaW50ZXJzZWN0aW9uUmVjdC5oZWlnaHQ7XG5cbiAgLy8gU2V0cyBpbnRlcnNlY3Rpb24gcmF0aW8uXG4gIGlmICh0YXJnZXRBcmVhKSB7XG4gICAgLy8gUm91bmQgdGhlIGludGVyc2VjdGlvbiByYXRpbyB0byBhdm9pZCBmbG9hdGluZyBwb2ludCBtYXRoIGlzc3VlczpcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdzNjL0ludGVyc2VjdGlvbk9ic2VydmVyL2lzc3Vlcy8zMjRcbiAgICB0aGlzLmludGVyc2VjdGlvblJhdGlvID0gTnVtYmVyKChpbnRlcnNlY3Rpb25BcmVhIC8gdGFyZ2V0QXJlYSkudG9GaXhlZCg0KSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgYXJlYSBpcyB6ZXJvIGFuZCBpcyBpbnRlcnNlY3RpbmcsIHNldHMgdG8gMSwgb3RoZXJ3aXNlIHRvIDBcbiAgICB0aGlzLmludGVyc2VjdGlvblJhdGlvID0gdGhpcy5pc0ludGVyc2VjdGluZyA/IDEgOiAwO1xuICB9XG59XG5cblxuLyoqXG4gKiBDcmVhdGVzIHRoZSBnbG9iYWwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgY29uc3RydWN0b3IuXG4gKiBodHRwczovL3czYy5naXRodWIuaW8vSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvI2ludGVyc2VjdGlvbi1vYnNlcnZlci1pbnRlcmZhY2VcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIGludGVyc2VjdGlvblxuICogICAgIGNoYW5nZXMgaGF2ZSBxdWV1ZWQuIFRoZSBmdW5jdGlvbiBpcyBub3QgaW52b2tlZCBpZiB0aGUgcXVldWUgaGFzXG4gKiAgICAgYmVlbiBlbXB0aWVkIGJ5IGNhbGxpbmcgdGhlIGB0YWtlUmVjb3Jkc2AgbWV0aG9kLlxuICogQHBhcmFtIHtPYmplY3Q9fSBvcHRfb3B0aW9ucyBPcHRpb25hbCBjb25maWd1cmF0aW9uIG9wdGlvbnMuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2ssIG9wdF9vcHRpb25zKSB7XG5cbiAgdmFyIG9wdGlvbnMgPSBvcHRfb3B0aW9ucyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NhbGxiYWNrIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMucm9vdCAmJiBvcHRpb25zLnJvb3Qubm9kZVR5cGUgIT0gMSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncm9vdCBtdXN0IGJlIGFuIEVsZW1lbnQnKTtcbiAgfVxuXG4gIC8vIEJpbmRzIGFuZCB0aHJvdHRsZXMgYHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9uc2AuXG4gIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucyA9IHRocm90dGxlKFxuICAgICAgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zLmJpbmQodGhpcyksIHRoaXMuVEhST1RUTEVfVElNRU9VVCk7XG5cbiAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzLlxuICB0aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xuICB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMgPSBbXTtcbiAgdGhpcy5fcXVldWVkRW50cmllcyA9IFtdO1xuICB0aGlzLl9yb290TWFyZ2luVmFsdWVzID0gdGhpcy5fcGFyc2VSb290TWFyZ2luKG9wdGlvbnMucm9vdE1hcmdpbik7XG5cbiAgLy8gUHVibGljIHByb3BlcnRpZXMuXG4gIHRoaXMudGhyZXNob2xkcyA9IHRoaXMuX2luaXRUaHJlc2hvbGRzKG9wdGlvbnMudGhyZXNob2xkKTtcbiAgdGhpcy5yb290ID0gb3B0aW9ucy5yb290IHx8IG51bGw7XG4gIHRoaXMucm9vdE1hcmdpbiA9IHRoaXMuX3Jvb3RNYXJnaW5WYWx1ZXMubWFwKGZ1bmN0aW9uKG1hcmdpbikge1xuICAgIHJldHVybiBtYXJnaW4udmFsdWUgKyBtYXJnaW4udW5pdDtcbiAgfSkuam9pbignICcpO1xufVxuXG5cbi8qKlxuICogVGhlIG1pbmltdW0gaW50ZXJ2YWwgd2l0aGluIHdoaWNoIHRoZSBkb2N1bWVudCB3aWxsIGJlIGNoZWNrZWQgZm9yXG4gKiBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLlRIUk9UVExFX1RJTUVPVVQgPSAxMDA7XG5cblxuLyoqXG4gKiBUaGUgZnJlcXVlbmN5IGluIHdoaWNoIHRoZSBwb2x5ZmlsbCBwb2xscyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gKiB0aGlzIGNhbiBiZSB1cGRhdGVkIG9uIGEgcGVyIGluc3RhbmNlIGJhc2lzIGFuZCBtdXN0IGJlIHNldCBwcmlvciB0b1xuICogY2FsbGluZyBgb2JzZXJ2ZWAgb24gdGhlIGZpcnN0IHRhcmdldC5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLlBPTExfSU5URVJWQUwgPSBudWxsO1xuXG4vKipcbiAqIFVzZSBhIG11dGF0aW9uIG9ic2VydmVyIG9uIHRoZSByb290IGVsZW1lbnRcbiAqIHRvIGRldGVjdCBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLlVTRV9NVVRBVElPTl9PQlNFUlZFUiA9IHRydWU7XG5cblxuLyoqXG4gKiBTdGFydHMgb2JzZXJ2aW5nIGEgdGFyZ2V0IGVsZW1lbnQgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzIGJhc2VkIG9uXG4gKiB0aGUgdGhyZXNob2xkcyB2YWx1ZXMuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHRhcmdldCBUaGUgRE9NIGVsZW1lbnQgdG8gb2JzZXJ2ZS5cbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgdmFyIGlzVGFyZ2V0QWxyZWFkeU9ic2VydmVkID0gdGhpcy5fb2JzZXJ2YXRpb25UYXJnZXRzLnNvbWUoZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiBpdGVtLmVsZW1lbnQgPT0gdGFyZ2V0O1xuICB9KTtcblxuICBpZiAoaXNUYXJnZXRBbHJlYWR5T2JzZXJ2ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoISh0YXJnZXQgJiYgdGFyZ2V0Lm5vZGVUeXBlID09IDEpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd0YXJnZXQgbXVzdCBiZSBhbiBFbGVtZW50Jyk7XG4gIH1cblxuICB0aGlzLl9yZWdpc3Rlckluc3RhbmNlKCk7XG4gIHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5wdXNoKHtlbGVtZW50OiB0YXJnZXQsIGVudHJ5OiBudWxsfSk7XG4gIHRoaXMuX21vbml0b3JJbnRlcnNlY3Rpb25zKCk7XG4gIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucygpO1xufTtcblxuXG4vKipcbiAqIFN0b3BzIG9ic2VydmluZyBhIHRhcmdldCBlbGVtZW50IGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcy5cbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IFRoZSBET00gZWxlbWVudCB0byBvYnNlcnZlLlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUudW5vYnNlcnZlID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cyA9XG4gICAgICB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMuZmlsdGVyKGZ1bmN0aW9uKGl0ZW0pIHtcblxuICAgIHJldHVybiBpdGVtLmVsZW1lbnQgIT0gdGFyZ2V0O1xuICB9KTtcbiAgaWYgKCF0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMubGVuZ3RoKSB7XG4gICAgdGhpcy5fdW5tb25pdG9ySW50ZXJzZWN0aW9ucygpO1xuICAgIHRoaXMuX3VucmVnaXN0ZXJJbnN0YW5jZSgpO1xuICB9XG59O1xuXG5cbi8qKlxuICogU3RvcHMgb2JzZXJ2aW5nIGFsbCB0YXJnZXQgZWxlbWVudHMgZm9yIGludGVyc2VjdGlvbiBjaGFuZ2VzLlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuZGlzY29ubmVjdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl9vYnNlcnZhdGlvblRhcmdldHMgPSBbXTtcbiAgdGhpcy5fdW5tb25pdG9ySW50ZXJzZWN0aW9ucygpO1xuICB0aGlzLl91bnJlZ2lzdGVySW5zdGFuY2UoKTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIGFueSBxdWV1ZSBlbnRyaWVzIHRoYXQgaGF2ZSBub3QgeWV0IGJlZW4gcmVwb3J0ZWQgdG8gdGhlXG4gKiBjYWxsYmFjayBhbmQgY2xlYXJzIHRoZSBxdWV1ZS4gVGhpcyBjYW4gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZVxuICogY2FsbGJhY2sgdG8gb2J0YWluIHRoZSBhYnNvbHV0ZSBtb3N0IHVwLXRvLWRhdGUgaW50ZXJzZWN0aW9uIGluZm9ybWF0aW9uLlxuICogQHJldHVybiB7QXJyYXl9IFRoZSBjdXJyZW50bHkgcXVldWVkIGVudHJpZXMuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS50YWtlUmVjb3JkcyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcmVjb3JkcyA9IHRoaXMuX3F1ZXVlZEVudHJpZXMuc2xpY2UoKTtcbiAgdGhpcy5fcXVldWVkRW50cmllcyA9IFtdO1xuICByZXR1cm4gcmVjb3Jkcztcbn07XG5cblxuLyoqXG4gKiBBY2NlcHRzIHRoZSB0aHJlc2hvbGQgdmFsdWUgZnJvbSB0aGUgdXNlciBjb25maWd1cmF0aW9uIG9iamVjdCBhbmRcbiAqIHJldHVybnMgYSBzb3J0ZWQgYXJyYXkgb2YgdW5pcXVlIHRocmVzaG9sZCB2YWx1ZXMuIElmIGEgdmFsdWUgaXMgbm90XG4gKiBiZXR3ZWVuIDAgYW5kIDEgYW5kIGVycm9yIGlzIHRocm93bi5cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fG51bWJlcj19IG9wdF90aHJlc2hvbGQgQW4gb3B0aW9uYWwgdGhyZXNob2xkIHZhbHVlIG9yXG4gKiAgICAgYSBsaXN0IG9mIHRocmVzaG9sZCB2YWx1ZXMsIGRlZmF1bHRpbmcgdG8gWzBdLlxuICogQHJldHVybiB7QXJyYXl9IEEgc29ydGVkIGxpc3Qgb2YgdW5pcXVlIGFuZCB2YWxpZCB0aHJlc2hvbGQgdmFsdWVzLlxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2luaXRUaHJlc2hvbGRzID0gZnVuY3Rpb24ob3B0X3RocmVzaG9sZCkge1xuICB2YXIgdGhyZXNob2xkID0gb3B0X3RocmVzaG9sZCB8fCBbMF07XG4gIGlmICghQXJyYXkuaXNBcnJheSh0aHJlc2hvbGQpKSB0aHJlc2hvbGQgPSBbdGhyZXNob2xkXTtcblxuICByZXR1cm4gdGhyZXNob2xkLnNvcnQoKS5maWx0ZXIoZnVuY3Rpb24odCwgaSwgYSkge1xuICAgIGlmICh0eXBlb2YgdCAhPSAnbnVtYmVyJyB8fCBpc05hTih0KSB8fCB0IDwgMCB8fCB0ID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd0aHJlc2hvbGQgbXVzdCBiZSBhIG51bWJlciBiZXR3ZWVuIDAgYW5kIDEgaW5jbHVzaXZlbHknKTtcbiAgICB9XG4gICAgcmV0dXJuIHQgIT09IGFbaSAtIDFdO1xuICB9KTtcbn07XG5cblxuLyoqXG4gKiBBY2NlcHRzIHRoZSByb290TWFyZ2luIHZhbHVlIGZyb20gdGhlIHVzZXIgY29uZmlndXJhdGlvbiBvYmplY3RcbiAqIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBmb3VyIG1hcmdpbiB2YWx1ZXMgYXMgYW4gb2JqZWN0IGNvbnRhaW5pbmdcbiAqIHRoZSB2YWx1ZSBhbmQgdW5pdCBwcm9wZXJ0aWVzLiBJZiBhbnkgb2YgdGhlIHZhbHVlcyBhcmUgbm90IHByb3Blcmx5XG4gKiBmb3JtYXR0ZWQgb3IgdXNlIGEgdW5pdCBvdGhlciB0aGFuIHB4IG9yICUsIGFuZCBlcnJvciBpcyB0aHJvd24uXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmc9fSBvcHRfcm9vdE1hcmdpbiBBbiBvcHRpb25hbCByb290TWFyZ2luIHZhbHVlLFxuICogICAgIGRlZmF1bHRpbmcgdG8gJzBweCcuXG4gKiBAcmV0dXJuIHtBcnJheTxPYmplY3Q+fSBBbiBhcnJheSBvZiBtYXJnaW4gb2JqZWN0cyB3aXRoIHRoZSBrZXlzXG4gKiAgICAgdmFsdWUgYW5kIHVuaXQuXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fcGFyc2VSb290TWFyZ2luID0gZnVuY3Rpb24ob3B0X3Jvb3RNYXJnaW4pIHtcbiAgdmFyIG1hcmdpblN0cmluZyA9IG9wdF9yb290TWFyZ2luIHx8ICcwcHgnO1xuICB2YXIgbWFyZ2lucyA9IG1hcmdpblN0cmluZy5zcGxpdCgvXFxzKy8pLm1hcChmdW5jdGlvbihtYXJnaW4pIHtcbiAgICB2YXIgcGFydHMgPSAvXigtP1xcZCpcXC4/XFxkKykocHh8JSkkLy5leGVjKG1hcmdpbik7XG4gICAgaWYgKCFwYXJ0cykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdyb290TWFyZ2luIG11c3QgYmUgc3BlY2lmaWVkIGluIHBpeGVscyBvciBwZXJjZW50Jyk7XG4gICAgfVxuICAgIHJldHVybiB7dmFsdWU6IHBhcnNlRmxvYXQocGFydHNbMV0pLCB1bml0OiBwYXJ0c1syXX07XG4gIH0pO1xuXG4gIC8vIEhhbmRsZXMgc2hvcnRoYW5kLlxuICBtYXJnaW5zWzFdID0gbWFyZ2luc1sxXSB8fCBtYXJnaW5zWzBdO1xuICBtYXJnaW5zWzJdID0gbWFyZ2luc1syXSB8fCBtYXJnaW5zWzBdO1xuICBtYXJnaW5zWzNdID0gbWFyZ2luc1szXSB8fCBtYXJnaW5zWzFdO1xuXG4gIHJldHVybiBtYXJnaW5zO1xufTtcblxuXG4vKipcbiAqIFN0YXJ0cyBwb2xsaW5nIGZvciBpbnRlcnNlY3Rpb24gY2hhbmdlcyBpZiB0aGUgcG9sbGluZyBpcyBub3QgYWxyZWFkeVxuICogaGFwcGVuaW5nLCBhbmQgaWYgdGhlIHBhZ2UncyB2aXNpYmlsaXR5IHN0YXRlIGlzIHZpc2libGUuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX21vbml0b3JJbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gIGlmICghdGhpcy5fbW9uaXRvcmluZ0ludGVyc2VjdGlvbnMpIHtcbiAgICB0aGlzLl9tb25pdG9yaW5nSW50ZXJzZWN0aW9ucyA9IHRydWU7XG5cbiAgICAvLyBJZiBhIHBvbGwgaW50ZXJ2YWwgaXMgc2V0LCB1c2UgcG9sbGluZyBpbnN0ZWFkIG9mIGxpc3RlbmluZyB0b1xuICAgIC8vIHJlc2l6ZSBhbmQgc2Nyb2xsIGV2ZW50cyBvciBET00gbXV0YXRpb25zLlxuICAgIGlmICh0aGlzLlBPTExfSU5URVJWQUwpIHtcbiAgICAgIHRoaXMuX21vbml0b3JpbmdJbnRlcnZhbCA9IHNldEludGVydmFsKFxuICAgICAgICAgIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucywgdGhpcy5QT0xMX0lOVEVSVkFMKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBhZGRFdmVudCh3aW5kb3csICdyZXNpemUnLCB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMsIHRydWUpO1xuICAgICAgYWRkRXZlbnQoZG9jdW1lbnQsICdzY3JvbGwnLCB0aGlzLl9jaGVja0ZvckludGVyc2VjdGlvbnMsIHRydWUpO1xuXG4gICAgICBpZiAodGhpcy5VU0VfTVVUQVRJT05fT0JTRVJWRVIgJiYgJ011dGF0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xuICAgICAgICB0aGlzLl9kb21PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucyk7XG4gICAgICAgIHRoaXMuX2RvbU9ic2VydmVyLm9ic2VydmUoZG9jdW1lbnQsIHtcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICBjaGFyYWN0ZXJEYXRhOiB0cnVlLFxuICAgICAgICAgIHN1YnRyZWU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5cbi8qKlxuICogU3RvcHMgcG9sbGluZyBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX3VubW9uaXRvckludGVyc2VjdGlvbnMgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuX21vbml0b3JpbmdJbnRlcnNlY3Rpb25zKSB7XG4gICAgdGhpcy5fbW9uaXRvcmluZ0ludGVyc2VjdGlvbnMgPSBmYWxzZTtcblxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fbW9uaXRvcmluZ0ludGVydmFsKTtcbiAgICB0aGlzLl9tb25pdG9yaW5nSW50ZXJ2YWwgPSBudWxsO1xuXG4gICAgcmVtb3ZlRXZlbnQod2luZG93LCAncmVzaXplJywgdGhpcy5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zLCB0cnVlKTtcbiAgICByZW1vdmVFdmVudChkb2N1bWVudCwgJ3Njcm9sbCcsIHRoaXMuX2NoZWNrRm9ySW50ZXJzZWN0aW9ucywgdHJ1ZSk7XG5cbiAgICBpZiAodGhpcy5fZG9tT2JzZXJ2ZXIpIHtcbiAgICAgIHRoaXMuX2RvbU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgIHRoaXMuX2RvbU9ic2VydmVyID0gbnVsbDtcbiAgICB9XG4gIH1cbn07XG5cblxuLyoqXG4gKiBTY2FucyBlYWNoIG9ic2VydmF0aW9uIHRhcmdldCBmb3IgaW50ZXJzZWN0aW9uIGNoYW5nZXMgYW5kIGFkZHMgdGhlbVxuICogdG8gdGhlIGludGVybmFsIGVudHJpZXMgcXVldWUuIElmIG5ldyBlbnRyaWVzIGFyZSBmb3VuZCwgaXRcbiAqIHNjaGVkdWxlcyB0aGUgY2FsbGJhY2sgdG8gYmUgaW52b2tlZC5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fY2hlY2tGb3JJbnRlcnNlY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gIHZhciByb290SXNJbkRvbSA9IHRoaXMuX3Jvb3RJc0luRG9tKCk7XG4gIHZhciByb290UmVjdCA9IHJvb3RJc0luRG9tID8gdGhpcy5fZ2V0Um9vdFJlY3QoKSA6IGdldEVtcHR5UmVjdCgpO1xuXG4gIHRoaXMuX29ic2VydmF0aW9uVGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICB2YXIgdGFyZ2V0ID0gaXRlbS5lbGVtZW50O1xuICAgIHZhciB0YXJnZXRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHRhcmdldCk7XG4gICAgdmFyIHJvb3RDb250YWluc1RhcmdldCA9IHRoaXMuX3Jvb3RDb250YWluc1RhcmdldCh0YXJnZXQpO1xuICAgIHZhciBvbGRFbnRyeSA9IGl0ZW0uZW50cnk7XG4gICAgdmFyIGludGVyc2VjdGlvblJlY3QgPSByb290SXNJbkRvbSAmJiByb290Q29udGFpbnNUYXJnZXQgJiZcbiAgICAgICAgdGhpcy5fY29tcHV0ZVRhcmdldEFuZFJvb3RJbnRlcnNlY3Rpb24odGFyZ2V0LCByb290UmVjdCk7XG5cbiAgICB2YXIgbmV3RW50cnkgPSBpdGVtLmVudHJ5ID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyRW50cnkoe1xuICAgICAgdGltZTogbm93KCksXG4gICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgIGJvdW5kaW5nQ2xpZW50UmVjdDogdGFyZ2V0UmVjdCxcbiAgICAgIHJvb3RCb3VuZHM6IHJvb3RSZWN0LFxuICAgICAgaW50ZXJzZWN0aW9uUmVjdDogaW50ZXJzZWN0aW9uUmVjdFxuICAgIH0pO1xuXG4gICAgaWYgKCFvbGRFbnRyeSkge1xuICAgICAgdGhpcy5fcXVldWVkRW50cmllcy5wdXNoKG5ld0VudHJ5KTtcbiAgICB9IGVsc2UgaWYgKHJvb3RJc0luRG9tICYmIHJvb3RDb250YWluc1RhcmdldCkge1xuICAgICAgLy8gSWYgdGhlIG5ldyBlbnRyeSBpbnRlcnNlY3Rpb24gcmF0aW8gaGFzIGNyb3NzZWQgYW55IG9mIHRoZVxuICAgICAgLy8gdGhyZXNob2xkcywgYWRkIGEgbmV3IGVudHJ5LlxuICAgICAgaWYgKHRoaXMuX2hhc0Nyb3NzZWRUaHJlc2hvbGQob2xkRW50cnksIG5ld0VudHJ5KSkge1xuICAgICAgICB0aGlzLl9xdWV1ZWRFbnRyaWVzLnB1c2gobmV3RW50cnkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgcm9vdCBpcyBub3QgaW4gdGhlIERPTSBvciB0YXJnZXQgaXMgbm90IGNvbnRhaW5lZCB3aXRoaW5cbiAgICAgIC8vIHJvb3QgYnV0IHRoZSBwcmV2aW91cyBlbnRyeSBmb3IgdGhpcyB0YXJnZXQgaGFkIGFuIGludGVyc2VjdGlvbixcbiAgICAgIC8vIGFkZCBhIG5ldyByZWNvcmQgaW5kaWNhdGluZyByZW1vdmFsLlxuICAgICAgaWYgKG9sZEVudHJ5ICYmIG9sZEVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgIHRoaXMuX3F1ZXVlZEVudHJpZXMucHVzaChuZXdFbnRyeSk7XG4gICAgICB9XG4gICAgfVxuICB9LCB0aGlzKTtcblxuICBpZiAodGhpcy5fcXVldWVkRW50cmllcy5sZW5ndGgpIHtcbiAgICB0aGlzLl9jYWxsYmFjayh0aGlzLnRha2VSZWNvcmRzKCksIHRoaXMpO1xuICB9XG59O1xuXG5cbi8qKlxuICogQWNjZXB0cyBhIHRhcmdldCBhbmQgcm9vdCByZWN0IGNvbXB1dGVzIHRoZSBpbnRlcnNlY3Rpb24gYmV0d2VlbiB0aGVuXG4gKiBmb2xsb3dpbmcgdGhlIGFsZ29yaXRobSBpbiB0aGUgc3BlYy5cbiAqIFRPRE8ocGhpbGlwd2FsdG9uKTogYXQgdGhpcyB0aW1lIGNsaXAtcGF0aCBpcyBub3QgY29uc2lkZXJlZC5cbiAqIGh0dHBzOi8vdzNjLmdpdGh1Yi5pby9JbnRlcnNlY3Rpb25PYnNlcnZlci8jY2FsY3VsYXRlLWludGVyc2VjdGlvbi1yZWN0LWFsZ29cbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IFRoZSB0YXJnZXQgRE9NIGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSByb290UmVjdCBUaGUgYm91bmRpbmcgcmVjdCBvZiB0aGUgcm9vdCBhZnRlciBiZWluZ1xuICogICAgIGV4cGFuZGVkIGJ5IHRoZSByb290TWFyZ2luIHZhbHVlLlxuICogQHJldHVybiB7P09iamVjdH0gVGhlIGZpbmFsIGludGVyc2VjdGlvbiByZWN0IG9iamVjdCBvciB1bmRlZmluZWQgaWYgbm9cbiAqICAgICBpbnRlcnNlY3Rpb24gaXMgZm91bmQuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2NvbXB1dGVUYXJnZXRBbmRSb290SW50ZXJzZWN0aW9uID1cbiAgICBmdW5jdGlvbih0YXJnZXQsIHJvb3RSZWN0KSB7XG5cbiAgLy8gSWYgdGhlIGVsZW1lbnQgaXNuJ3QgZGlzcGxheWVkLCBhbiBpbnRlcnNlY3Rpb24gY2FuJ3QgaGFwcGVuLlxuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0KS5kaXNwbGF5ID09ICdub25lJykgcmV0dXJuO1xuXG4gIHZhciB0YXJnZXRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHRhcmdldCk7XG4gIHZhciBpbnRlcnNlY3Rpb25SZWN0ID0gdGFyZ2V0UmVjdDtcbiAgdmFyIHBhcmVudCA9IGdldFBhcmVudE5vZGUodGFyZ2V0KTtcbiAgdmFyIGF0Um9vdCA9IGZhbHNlO1xuXG4gIHdoaWxlICghYXRSb290KSB7XG4gICAgdmFyIHBhcmVudFJlY3QgPSBudWxsO1xuICAgIHZhciBwYXJlbnRDb21wdXRlZFN0eWxlID0gcGFyZW50Lm5vZGVUeXBlID09IDEgP1xuICAgICAgICB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnQpIDoge307XG5cbiAgICAvLyBJZiB0aGUgcGFyZW50IGlzbid0IGRpc3BsYXllZCwgYW4gaW50ZXJzZWN0aW9uIGNhbid0IGhhcHBlbi5cbiAgICBpZiAocGFyZW50Q29tcHV0ZWRTdHlsZS5kaXNwbGF5ID09ICdub25lJykgcmV0dXJuO1xuXG4gICAgaWYgKHBhcmVudCA9PSB0aGlzLnJvb3QgfHwgcGFyZW50ID09IGRvY3VtZW50KSB7XG4gICAgICBhdFJvb3QgPSB0cnVlO1xuICAgICAgcGFyZW50UmVjdCA9IHJvb3RSZWN0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgZWxlbWVudCBoYXMgYSBub24tdmlzaWJsZSBvdmVyZmxvdywgYW5kIGl0J3Mgbm90IHRoZSA8Ym9keT5cbiAgICAgIC8vIG9yIDxodG1sPiBlbGVtZW50LCB1cGRhdGUgdGhlIGludGVyc2VjdGlvbiByZWN0LlxuICAgICAgLy8gTm90ZTogPGJvZHk+IGFuZCA8aHRtbD4gY2Fubm90IGJlIGNsaXBwZWQgdG8gYSByZWN0IHRoYXQncyBub3QgYWxzb1xuICAgICAgLy8gdGhlIGRvY3VtZW50IHJlY3QsIHNvIG5vIG5lZWQgdG8gY29tcHV0ZSBhIG5ldyBpbnRlcnNlY3Rpb24uXG4gICAgICBpZiAocGFyZW50ICE9IGRvY3VtZW50LmJvZHkgJiZcbiAgICAgICAgICBwYXJlbnQgIT0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICYmXG4gICAgICAgICAgcGFyZW50Q29tcHV0ZWRTdHlsZS5vdmVyZmxvdyAhPSAndmlzaWJsZScpIHtcbiAgICAgICAgcGFyZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChwYXJlbnQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIElmIGVpdGhlciBvZiB0aGUgYWJvdmUgY29uZGl0aW9uYWxzIHNldCBhIG5ldyBwYXJlbnRSZWN0LFxuICAgIC8vIGNhbGN1bGF0ZSBuZXcgaW50ZXJzZWN0aW9uIGRhdGEuXG4gICAgaWYgKHBhcmVudFJlY3QpIHtcbiAgICAgIGludGVyc2VjdGlvblJlY3QgPSBjb21wdXRlUmVjdEludGVyc2VjdGlvbihwYXJlbnRSZWN0LCBpbnRlcnNlY3Rpb25SZWN0KTtcblxuICAgICAgaWYgKCFpbnRlcnNlY3Rpb25SZWN0KSBicmVhaztcbiAgICB9XG4gICAgcGFyZW50ID0gZ2V0UGFyZW50Tm9kZShwYXJlbnQpO1xuICB9XG4gIHJldHVybiBpbnRlcnNlY3Rpb25SZWN0O1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIHJvb3QgcmVjdCBhZnRlciBiZWluZyBleHBhbmRlZCBieSB0aGUgcm9vdE1hcmdpbiB2YWx1ZS5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGV4cGFuZGVkIHJvb3QgcmVjdC5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fZ2V0Um9vdFJlY3QgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHJvb3RSZWN0O1xuICBpZiAodGhpcy5yb290KSB7XG4gICAgcm9vdFJlY3QgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QodGhpcy5yb290KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBVc2UgPGh0bWw+Lzxib2R5PiBpbnN0ZWFkIG9mIHdpbmRvdyBzaW5jZSBzY3JvbGwgYmFycyBhZmZlY3Qgc2l6ZS5cbiAgICB2YXIgaHRtbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgcm9vdFJlY3QgPSB7XG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgcmlnaHQ6IGh0bWwuY2xpZW50V2lkdGggfHwgYm9keS5jbGllbnRXaWR0aCxcbiAgICAgIHdpZHRoOiBodG1sLmNsaWVudFdpZHRoIHx8IGJvZHkuY2xpZW50V2lkdGgsXG4gICAgICBib3R0b206IGh0bWwuY2xpZW50SGVpZ2h0IHx8IGJvZHkuY2xpZW50SGVpZ2h0LFxuICAgICAgaGVpZ2h0OiBodG1sLmNsaWVudEhlaWdodCB8fCBib2R5LmNsaWVudEhlaWdodFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHRoaXMuX2V4cGFuZFJlY3RCeVJvb3RNYXJnaW4ocm9vdFJlY3QpO1xufTtcblxuXG4vKipcbiAqIEFjY2VwdHMgYSByZWN0IGFuZCBleHBhbmRzIGl0IGJ5IHRoZSByb290TWFyZ2luIHZhbHVlLlxuICogQHBhcmFtIHtPYmplY3R9IHJlY3QgVGhlIHJlY3Qgb2JqZWN0IHRvIGV4cGFuZC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIGV4cGFuZGVkIHJlY3QuXG4gKiBAcHJpdmF0ZVxuICovXG5JbnRlcnNlY3Rpb25PYnNlcnZlci5wcm90b3R5cGUuX2V4cGFuZFJlY3RCeVJvb3RNYXJnaW4gPSBmdW5jdGlvbihyZWN0KSB7XG4gIHZhciBtYXJnaW5zID0gdGhpcy5fcm9vdE1hcmdpblZhbHVlcy5tYXAoZnVuY3Rpb24obWFyZ2luLCBpKSB7XG4gICAgcmV0dXJuIG1hcmdpbi51bml0ID09ICdweCcgPyBtYXJnaW4udmFsdWUgOlxuICAgICAgICBtYXJnaW4udmFsdWUgKiAoaSAlIDIgPyByZWN0LndpZHRoIDogcmVjdC5oZWlnaHQpIC8gMTAwO1xuICB9KTtcbiAgdmFyIG5ld1JlY3QgPSB7XG4gICAgdG9wOiByZWN0LnRvcCAtIG1hcmdpbnNbMF0sXG4gICAgcmlnaHQ6IHJlY3QucmlnaHQgKyBtYXJnaW5zWzFdLFxuICAgIGJvdHRvbTogcmVjdC5ib3R0b20gKyBtYXJnaW5zWzJdLFxuICAgIGxlZnQ6IHJlY3QubGVmdCAtIG1hcmdpbnNbM11cbiAgfTtcbiAgbmV3UmVjdC53aWR0aCA9IG5ld1JlY3QucmlnaHQgLSBuZXdSZWN0LmxlZnQ7XG4gIG5ld1JlY3QuaGVpZ2h0ID0gbmV3UmVjdC5ib3R0b20gLSBuZXdSZWN0LnRvcDtcblxuICByZXR1cm4gbmV3UmVjdDtcbn07XG5cblxuLyoqXG4gKiBBY2NlcHRzIGFuIG9sZCBhbmQgbmV3IGVudHJ5IGFuZCByZXR1cm5zIHRydWUgaWYgYXQgbGVhc3Qgb25lIG9mIHRoZVxuICogdGhyZXNob2xkIHZhbHVlcyBoYXMgYmVlbiBjcm9zc2VkLlxuICogQHBhcmFtIHs/SW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeX0gb2xkRW50cnkgVGhlIHByZXZpb3VzIGVudHJ5IGZvciBhXG4gKiAgICBwYXJ0aWN1bGFyIHRhcmdldCBlbGVtZW50IG9yIG51bGwgaWYgbm8gcHJldmlvdXMgZW50cnkgZXhpc3RzLlxuICogQHBhcmFtIHtJbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5fSBuZXdFbnRyeSBUaGUgY3VycmVudCBlbnRyeSBmb3IgYVxuICogICAgcGFydGljdWxhciB0YXJnZXQgZWxlbWVudC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBhIGFueSB0aHJlc2hvbGQgaGFzIGJlZW4gY3Jvc3NlZC5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5faGFzQ3Jvc3NlZFRocmVzaG9sZCA9XG4gICAgZnVuY3Rpb24ob2xkRW50cnksIG5ld0VudHJ5KSB7XG5cbiAgLy8gVG8gbWFrZSBjb21wYXJpbmcgZWFzaWVyLCBhbiBlbnRyeSB0aGF0IGhhcyBhIHJhdGlvIG9mIDBcbiAgLy8gYnV0IGRvZXMgbm90IGFjdHVhbGx5IGludGVyc2VjdCBpcyBnaXZlbiBhIHZhbHVlIG9mIC0xXG4gIHZhciBvbGRSYXRpbyA9IG9sZEVudHJ5ICYmIG9sZEVudHJ5LmlzSW50ZXJzZWN0aW5nID9cbiAgICAgIG9sZEVudHJ5LmludGVyc2VjdGlvblJhdGlvIHx8IDAgOiAtMTtcbiAgdmFyIG5ld1JhdGlvID0gbmV3RW50cnkuaXNJbnRlcnNlY3RpbmcgP1xuICAgICAgbmV3RW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gfHwgMCA6IC0xO1xuXG4gIC8vIElnbm9yZSB1bmNoYW5nZWQgcmF0aW9zXG4gIGlmIChvbGRSYXRpbyA9PT0gbmV3UmF0aW8pIHJldHVybjtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGhyZXNob2xkcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciB0aHJlc2hvbGQgPSB0aGlzLnRocmVzaG9sZHNbaV07XG5cbiAgICAvLyBSZXR1cm4gdHJ1ZSBpZiBhbiBlbnRyeSBtYXRjaGVzIGEgdGhyZXNob2xkIG9yIGlmIHRoZSBuZXcgcmF0aW9cbiAgICAvLyBhbmQgdGhlIG9sZCByYXRpbyBhcmUgb24gdGhlIG9wcG9zaXRlIHNpZGVzIG9mIGEgdGhyZXNob2xkLlxuICAgIGlmICh0aHJlc2hvbGQgPT0gb2xkUmF0aW8gfHwgdGhyZXNob2xkID09IG5ld1JhdGlvIHx8XG4gICAgICAgIHRocmVzaG9sZCA8IG9sZFJhdGlvICE9PSB0aHJlc2hvbGQgPCBuZXdSYXRpbykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59O1xuXG5cbi8qKlxuICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgcm9vdCBlbGVtZW50IGlzIGFuIGVsZW1lbnQgYW5kIGlzIGluIHRoZSBET00uXG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSByb290IGVsZW1lbnQgaXMgYW4gZWxlbWVudCBhbmQgaXMgaW4gdGhlIERPTS5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fcm9vdElzSW5Eb20gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICF0aGlzLnJvb3QgfHwgY29udGFpbnNEZWVwKGRvY3VtZW50LCB0aGlzLnJvb3QpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHRhcmdldCBlbGVtZW50IGlzIGEgY2hpbGQgb2Ygcm9vdC5cbiAqIEBwYXJhbSB7RWxlbWVudH0gdGFyZ2V0IFRoZSB0YXJnZXQgZWxlbWVudCB0byBjaGVjay5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHRhcmdldCBlbGVtZW50IGlzIGEgY2hpbGQgb2Ygcm9vdC5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fcm9vdENvbnRhaW5zVGFyZ2V0ID0gZnVuY3Rpb24odGFyZ2V0KSB7XG4gIHJldHVybiBjb250YWluc0RlZXAodGhpcy5yb290IHx8IGRvY3VtZW50LCB0YXJnZXQpO1xufTtcblxuXG4vKipcbiAqIEFkZHMgdGhlIGluc3RhbmNlIHRvIHRoZSBnbG9iYWwgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgcmVnaXN0cnkgaWYgaXQgaXNuJ3RcbiAqIGFscmVhZHkgcHJlc2VudC5cbiAqIEBwcml2YXRlXG4gKi9cbkludGVyc2VjdGlvbk9ic2VydmVyLnByb3RvdHlwZS5fcmVnaXN0ZXJJbnN0YW5jZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocmVnaXN0cnkuaW5kZXhPZih0aGlzKSA8IDApIHtcbiAgICByZWdpc3RyeS5wdXNoKHRoaXMpO1xuICB9XG59O1xuXG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgaW5zdGFuY2UgZnJvbSB0aGUgZ2xvYmFsIEludGVyc2VjdGlvbk9ic2VydmVyIHJlZ2lzdHJ5LlxuICogQHByaXZhdGVcbiAqL1xuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIucHJvdG90eXBlLl91bnJlZ2lzdGVySW5zdGFuY2UgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGluZGV4ID0gcmVnaXN0cnkuaW5kZXhPZih0aGlzKTtcbiAgaWYgKGluZGV4ICE9IC0xKSByZWdpc3RyeS5zcGxpY2UoaW5kZXgsIDEpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgcGVyZm9ybWFuY2Uubm93KCkgbWV0aG9kIG9yIG51bGwgaW4gYnJvd3NlcnNcbiAqIHRoYXQgZG9uJ3Qgc3VwcG9ydCB0aGUgQVBJLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgZWxhcHNlZCB0aW1lIHNpbmNlIHRoZSBwYWdlIHdhcyByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIG5vdygpIHtcbiAgcmV0dXJuIHdpbmRvdy5wZXJmb3JtYW5jZSAmJiBwZXJmb3JtYW5jZS5ub3cgJiYgcGVyZm9ybWFuY2Uubm93KCk7XG59XG5cblxuLyoqXG4gKiBUaHJvdHRsZXMgYSBmdW5jdGlvbiBhbmQgZGVsYXlzIGl0cyBleGVjdXRpb24sIHNvIGl0J3Mgb25seSBjYWxsZWQgYXQgbW9zdFxuICogb25jZSB3aXRoaW4gYSBnaXZlbiB0aW1lIHBlcmlvZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byB0aHJvdHRsZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lb3V0IFRoZSBhbW91bnQgb2YgdGltZSB0aGF0IG11c3QgcGFzcyBiZWZvcmUgdGhlXG4gKiAgICAgZnVuY3Rpb24gY2FuIGJlIGNhbGxlZCBhZ2Fpbi5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgdGhyb3R0bGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmbiwgdGltZW91dCkge1xuICB2YXIgdGltZXIgPSBudWxsO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGltZXIpIHtcbiAgICAgIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZm4oKTtcbiAgICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgfSwgdGltZW91dCk7XG4gICAgfVxuICB9O1xufVxuXG5cbi8qKlxuICogQWRkcyBhbiBldmVudCBoYW5kbGVyIHRvIGEgRE9NIG5vZGUgZW5zdXJpbmcgY3Jvc3MtYnJvd3NlciBjb21wYXRpYmlsaXR5LlxuICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBET00gbm9kZSB0byBhZGQgdGhlIGV2ZW50IGhhbmRsZXIgdG8uXG4gKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZXZlbnQgaGFuZGxlciB0byBhZGQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdF91c2VDYXB0dXJlIE9wdGlvbmFsbHkgYWRkcyB0aGUgZXZlbiB0byB0aGUgY2FwdHVyZVxuICogICAgIHBoYXNlLiBOb3RlOiB0aGlzIG9ubHkgd29ya3MgaW4gbW9kZXJuIGJyb3dzZXJzLlxuICovXG5mdW5jdGlvbiBhZGRFdmVudChub2RlLCBldmVudCwgZm4sIG9wdF91c2VDYXB0dXJlKSB7XG4gIGlmICh0eXBlb2Ygbm9kZS5hZGRFdmVudExpc3RlbmVyID09ICdmdW5jdGlvbicpIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZuLCBvcHRfdXNlQ2FwdHVyZSB8fCBmYWxzZSk7XG4gIH1cbiAgZWxzZSBpZiAodHlwZW9mIG5vZGUuYXR0YWNoRXZlbnQgPT0gJ2Z1bmN0aW9uJykge1xuICAgIG5vZGUuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBmbik7XG4gIH1cbn1cblxuXG4vKipcbiAqIFJlbW92ZXMgYSBwcmV2aW91c2x5IGFkZGVkIGV2ZW50IGhhbmRsZXIgZnJvbSBhIERPTSBub2RlLlxuICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBET00gbm9kZSB0byByZW1vdmUgdGhlIGV2ZW50IGhhbmRsZXIgZnJvbS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBldmVudCBoYW5kbGVyIHRvIHJlbW92ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0X3VzZUNhcHR1cmUgSWYgdGhlIGV2ZW50IGhhbmRsZXIgd2FzIGFkZGVkIHdpdGggdGhpc1xuICogICAgIGZsYWcgc2V0IHRvIHRydWUsIGl0IHNob3VsZCBiZSBzZXQgdG8gdHJ1ZSBoZXJlIGluIG9yZGVyIHRvIHJlbW92ZSBpdC5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlRXZlbnQobm9kZSwgZXZlbnQsIGZuLCBvcHRfdXNlQ2FwdHVyZSkge1xuICBpZiAodHlwZW9mIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9PSAnZnVuY3Rpb24nKSB7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBmbiwgb3B0X3VzZUNhcHR1cmUgfHwgZmFsc2UpO1xuICB9XG4gIGVsc2UgaWYgKHR5cGVvZiBub2RlLmRldGF0Y2hFdmVudCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgbm9kZS5kZXRhdGNoRXZlbnQoJ29uJyArIGV2ZW50LCBmbik7XG4gIH1cbn1cblxuXG4vKipcbiAqIFJldHVybnMgdGhlIGludGVyc2VjdGlvbiBiZXR3ZWVuIHR3byByZWN0IG9iamVjdHMuXG4gKiBAcGFyYW0ge09iamVjdH0gcmVjdDEgVGhlIGZpcnN0IHJlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gcmVjdDIgVGhlIHNlY29uZCByZWN0LlxuICogQHJldHVybiB7P09iamVjdH0gVGhlIGludGVyc2VjdGlvbiByZWN0IG9yIHVuZGVmaW5lZCBpZiBubyBpbnRlcnNlY3Rpb25cbiAqICAgICBpcyBmb3VuZC5cbiAqL1xuZnVuY3Rpb24gY29tcHV0ZVJlY3RJbnRlcnNlY3Rpb24ocmVjdDEsIHJlY3QyKSB7XG4gIHZhciB0b3AgPSBNYXRoLm1heChyZWN0MS50b3AsIHJlY3QyLnRvcCk7XG4gIHZhciBib3R0b20gPSBNYXRoLm1pbihyZWN0MS5ib3R0b20sIHJlY3QyLmJvdHRvbSk7XG4gIHZhciBsZWZ0ID0gTWF0aC5tYXgocmVjdDEubGVmdCwgcmVjdDIubGVmdCk7XG4gIHZhciByaWdodCA9IE1hdGgubWluKHJlY3QxLnJpZ2h0LCByZWN0Mi5yaWdodCk7XG4gIHZhciB3aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgdmFyIGhlaWdodCA9IGJvdHRvbSAtIHRvcDtcblxuICByZXR1cm4gKHdpZHRoID49IDAgJiYgaGVpZ2h0ID49IDApICYmIHtcbiAgICB0b3A6IHRvcCxcbiAgICBib3R0b206IGJvdHRvbSxcbiAgICBsZWZ0OiBsZWZ0LFxuICAgIHJpZ2h0OiByaWdodCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHRcbiAgfTtcbn1cblxuXG4vKipcbiAqIFNoaW1zIHRoZSBuYXRpdmUgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGZvciBjb21wYXRpYmlsaXR5IHdpdGggb2xkZXIgSUUuXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsIFRoZSBlbGVtZW50IHdob3NlIGJvdW5kaW5nIHJlY3QgdG8gZ2V0LlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgKHBvc3NpYmx5IHNoaW1tZWQpIHJlY3Qgb2YgdGhlIGVsZW1lbnQuXG4gKi9cbmZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbCkge1xuICB2YXIgcmVjdDtcblxuICB0cnkge1xuICAgIHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gSWdub3JlIFdpbmRvd3MgNyBJRTExIFwiVW5zcGVjaWZpZWQgZXJyb3JcIlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93M2MvSW50ZXJzZWN0aW9uT2JzZXJ2ZXIvcHVsbC8yMDVcbiAgfVxuXG4gIGlmICghcmVjdCkgcmV0dXJuIGdldEVtcHR5UmVjdCgpO1xuXG4gIC8vIE9sZGVyIElFXG4gIGlmICghKHJlY3Qud2lkdGggJiYgcmVjdC5oZWlnaHQpKSB7XG4gICAgcmVjdCA9IHtcbiAgICAgIHRvcDogcmVjdC50b3AsXG4gICAgICByaWdodDogcmVjdC5yaWdodCxcbiAgICAgIGJvdHRvbTogcmVjdC5ib3R0b20sXG4gICAgICBsZWZ0OiByZWN0LmxlZnQsXG4gICAgICB3aWR0aDogcmVjdC5yaWdodCAtIHJlY3QubGVmdCxcbiAgICAgIGhlaWdodDogcmVjdC5ib3R0b20gLSByZWN0LnRvcFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJlY3Q7XG59XG5cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGVtcHR5IHJlY3Qgb2JqZWN0LiBBbiBlbXB0eSByZWN0IGlzIHJldHVybmVkIHdoZW4gYW4gZWxlbWVudFxuICogaXMgbm90IGluIHRoZSBET00uXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBlbXB0eSByZWN0LlxuICovXG5mdW5jdGlvbiBnZXRFbXB0eVJlY3QoKSB7XG4gIHJldHVybiB7XG4gICAgdG9wOiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxuICB9O1xufVxuXG4vKipcbiAqIENoZWNrcyB0byBzZWUgaWYgYSBwYXJlbnQgZWxlbWVudCBjb250YWlucyBhIGNoaWxkIGVsZW1lbnQgKGluY2x1ZGluZyBpbnNpZGVcbiAqIHNoYWRvdyBET00pLlxuICogQHBhcmFtIHtOb2RlfSBwYXJlbnQgVGhlIHBhcmVudCBlbGVtZW50LlxuICogQHBhcmFtIHtOb2RlfSBjaGlsZCBUaGUgY2hpbGQgZWxlbWVudC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHBhcmVudCBub2RlIGNvbnRhaW5zIHRoZSBjaGlsZCBub2RlLlxuICovXG5mdW5jdGlvbiBjb250YWluc0RlZXAocGFyZW50LCBjaGlsZCkge1xuICB2YXIgbm9kZSA9IGNoaWxkO1xuICB3aGlsZSAobm9kZSkge1xuICAgIGlmIChub2RlID09IHBhcmVudCkgcmV0dXJuIHRydWU7XG5cbiAgICBub2RlID0gZ2V0UGFyZW50Tm9kZShub2RlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cblxuLyoqXG4gKiBHZXRzIHRoZSBwYXJlbnQgbm9kZSBvZiBhbiBlbGVtZW50IG9yIGl0cyBob3N0IGVsZW1lbnQgaWYgdGhlIHBhcmVudCBub2RlXG4gKiBpcyBhIHNoYWRvdyByb290LlxuICogQHBhcmFtIHtOb2RlfSBub2RlIFRoZSBub2RlIHdob3NlIHBhcmVudCB0byBnZXQuXG4gKiBAcmV0dXJuIHtOb2RlfG51bGx9IFRoZSBwYXJlbnQgbm9kZSBvciBudWxsIGlmIG5vIHBhcmVudCBleGlzdHMuXG4gKi9cbmZ1bmN0aW9uIGdldFBhcmVudE5vZGUobm9kZSkge1xuICB2YXIgcGFyZW50ID0gbm9kZS5wYXJlbnROb2RlO1xuXG4gIGlmIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVUeXBlID09IDExICYmIHBhcmVudC5ob3N0KSB7XG4gICAgLy8gSWYgdGhlIHBhcmVudCBpcyBhIHNoYWRvdyByb290LCByZXR1cm4gdGhlIGhvc3QgZWxlbWVudC5cbiAgICByZXR1cm4gcGFyZW50Lmhvc3Q7XG4gIH1cbiAgcmV0dXJuIHBhcmVudDtcbn1cblxuXG4vLyBFeHBvc2VzIHRoZSBjb25zdHJ1Y3RvcnMgZ2xvYmFsbHkuXG53aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSBJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbndpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlckVudHJ5ID0gSW50ZXJzZWN0aW9uT2JzZXJ2ZXJFbnRyeTtcblxufSh3aW5kb3csIGRvY3VtZW50KSk7XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImluZmluaXRlLXNjcm9sbGluZ1wiIDpzdHlsZT1cIntoZWlnaHQ6IGhlaWdodFVuaXQsIGJhY2tncm91bmQ6IGJhY2tncm91bmR9XCI+XG4gICAgICAgIDxhY3Rpdml0eS1pbmRpY2F0b3Igdi1pZj1cImFjdGl2aXR5XCIgOnNpemU9XCJzaXplXCIgOnR5cGU9XCJ0eXBlXCIgY2VudGVyLz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgJ2ludGVyc2VjdGlvbi1vYnNlcnZlcic7XG5pbXBvcnQgdW5pdCBmcm9tICcuLi8uLi9IZWxwZXJzL1VuaXQnO1xuaW1wb3J0IEFjdGl2aXR5SW5kaWNhdG9yIGZyb20gJy4uL0FjdGl2aXR5SW5kaWNhdG9yJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2luZmluaXRlLXNjcm9sbGluZycsXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEFjdGl2aXR5SW5kaWNhdG9yXG4gICAgfSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIHRoZSBhY3Rpdml0eSBpbmRpY2F0b3Igc2hvd2luZ1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpdml0eTogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGFjdGl2aXR5IGluZGljYXRvciBiYWNrZ3JvdW5kIHN0eWxlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGJhY2tncm91bmQ6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGFjdGl2aXR5IGluZGljYXRvciBzaXplXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGhlaWdodDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogMTAwXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBhY3Rpdml0eSBpbmRpY2F0b3Igc2l6ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBzaXplOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBhY3Rpdml0eSBpbmRpY2F0b3IgdHlwZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBzY3JvbGwgb2JzZXJ2ZXIgdGhyZXNob2xkIGZvciB3aGVuIGFuIGVsZW1lbnQgaXMgY29uc2lkZXJlZFxuICAgICAgICAgKiBpbnRvIHZpZXcuIE11c3QgYmUgYSB2YWxpZGF0ZSBiZXR3ZWVuIDAgYW5kIDEsIGFuZCBpcyBhIHBlcmNlbnRhZ2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBOdW1iZXJcbiAgICAgICAgICovXG4gICAgICAgIHRocmVzaG9sZDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogLjc1LFxuICAgICAgICAgICAgdmFsaWRhdGUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAgIHNjcm9sbEludG9WaWV3cG9ydChlbnRyeSkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2Nyb2xsOmluJywgZW50cnkpO1xuXG4gICAgICAgICAgICBpZighdGhpcy5hY3Rpdml0eSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2xvYWQnLCBlbnRyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2Nyb2xsT3V0Vmlld3BvcnQoZW50cnkpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3Njcm9sbDpvdXQnLCBlbnRyeSk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIGhlaWdodFVuaXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5pdCh0aGlzLmhlaWdodCk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgIXRoaXMuaGFzU2Nyb2xsZWRJbnRvVmlld3BvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXdwb3J0KGVudHJ5LCBvYnNlcnZlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc1Njcm9sbGVkSW50b1ZpZXdwb3J0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmKHRoaXMuaGFzU2Nyb2xsZWRJbnRvVmlld3BvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsT3V0Vmlld3BvcnQoZW50cnksIG9ic2VydmVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzU2Nyb2xsZWRJbnRvVmlld3BvcnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIHRocmVzaG9sZDogdGhpcy50aHJlc2hvbGRcbiAgICAgICAgICAgIH0pLm9ic2VydmUodGhpcy4kZWwpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhhc1Njcm9sbGVkSW50b1ZpZXdwb3J0OiBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuXG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4uaW5maW5pdGUtc2Nyb2xsaW5nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIiA6aWQ9XCJpZFwiPlxuICAgICAgICA8c2xvdD57eyB0ZXh0IH19PC9zbG90PlxuICAgIDwvc3Bhbj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2lucHV0LWdyb3VwLXRleHQnLFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGlkIGF0dHJpYnV0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBpZDogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdHlwZSBhdHRyaWJ1dGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdGV4dDogW0FycmF5LCBOdW1iZXIsIFN0cmluZ11cblxuICAgIH1cblxufVxuXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgPGlucHV0LWdyb3VwLXRleHQgdi1pZj1cInRleHRcIj5cbiAgICAgICAgICAgIDxzbG90Lz5cbiAgICAgICAgPC9pbnB1dC1ncm91cC10ZXh0PlxuICAgICAgICA8c2xvdCB2LWVsc2UvPlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnaW5wdXQtZ3JvdXAtYXBwZW5kJyxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0eXBlIGF0dHJpYnV0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICB0ZXh0OiBCb29sZWFuXG5cbiAgICB9XG5cbn1cblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICA8aW5wdXQtZ3JvdXAtdGV4dCB2LWlmPVwidGV4dFwiPlxuICAgICAgICAgICAgPHNsb3QvPlxuICAgICAgICA8L2lucHV0LWdyb3VwLXRleHQ+XG4gICAgICAgIDxzbG90IHYtZWxzZS8+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdpbnB1dC1ncm91cC1wcmVwZW5kJyxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0eXBlIGF0dHJpYnV0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICB0ZXh0OiBCb29sZWFuXG5cbiAgICB9XG5cbn1cblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXBcIiA6Y2xhc3M9XCJtZXJnZUNsYXNzZXMoY29sb3JhYmxlQ2xhc3Nlcywgc2l6ZWFibGVDbGFzcylcIj5cblxuICAgICAgICA8c2xvdCBuYW1lPVwicHJlcGVuZFwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJwcmVwZW5kIGluc3RhbmNlb2YgQXJyYXlcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQtZ3JvdXAtcHJlcGVuZD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0LWdyb3VwLXRleHQgdi1mb3I9XCJ2YWx1ZSBpbiBwcmVwZW5kXCIgOnRleHQ9XCJ2YWx1ZVwiLz5cbiAgICAgICAgICAgICAgICA8L2lucHV0LWdyb3VwLXByZXBlbmQ+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cInByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQtZ3JvdXAtcHJlcGVuZCB0ZXh0Pnt7cHJlcGVuZH19PC9pbnB1dC1ncm91cC1wcmVwZW5kPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgICAgIDxzbG90Lz5cblxuICAgICAgICA8c2xvdCBuYW1lPVwiYXBwZW5kXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImFwcGVuZCBpbnN0YW5jZW9mIEFycmF5XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0LWdyb3VwLWFwcGVuZD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0LWdyb3VwLXRleHQgdi1mb3I9XCJ2YWx1ZSBpbiBhcHBlbmRcIiA6dGV4dD1cInZhbHVlXCIvPlxuICAgICAgICAgICAgICAgIDwvaW5wdXQtZ3JvdXAtYXBwZW5kPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2UtaWY9XCJhcHBlbmRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQtZ3JvdXAtYXBwZW5kIHRleHQ+e3thcHBlbmR9fTwvaW5wdXQtZ3JvdXAtYXBwZW5kPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9zbG90PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEhhc1Nsb3RzIGZyb20gJy4uLy4uL01peGlucy9IYXNTbG90cyc7XG5pbXBvcnQgU2l6ZWFibGUgZnJvbSAnLi4vLi4vTWl4aW5zL1NpemVhYmxlJztcbmltcG9ydCBJbnB1dEdyb3VwVGV4dCBmcm9tICcuL0lucHV0R3JvdXBUZXh0JztcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vTWl4aW5zL0NvbG9yYWJsZSc7XG5pbXBvcnQgSW5wdXRHcm91cEFwcGVuZCBmcm9tICcuL0lucHV0R3JvdXBBcHBlbmQnO1xuaW1wb3J0IElucHV0R3JvdXBQcmVwZW5kIGZyb20gJy4vSW5wdXRHcm91cFByZXBlbmQnO1xuaW1wb3J0IE1lcmdlQ2xhc3NlcyBmcm9tICcuLi8uLi9NaXhpbnMvTWVyZ2VDbGFzc2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2lucHV0LWdyb3VwJyxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgSW5wdXRHcm91cFRleHQsXG4gICAgICAgIElucHV0R3JvdXBBcHBlbmQsXG4gICAgICAgIElucHV0R3JvdXBQcmVwZW5kXG4gICAgfSxcblxuICAgIG1peGluczogW1xuICAgICAgICBIYXNTbG90cyxcbiAgICAgICAgU2l6ZWFibGUsXG4gICAgICAgIENvbG9yYWJsZSxcbiAgICAgICAgTWVyZ2VDbGFzc2VzXG4gICAgXSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgYXBwZW5kOiBbQXJyYXksIE51bWJlciwgU3RyaW5nXSxcblxuICAgICAgICBwcmVwZW5kOiBbQXJyYXksIE51bWJlciwgU3RyaW5nXVxuXG4gICAgfVxuXG59XG5cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IElucHV0R3JvdXAgZnJvbSAnLi9JbnB1dEdyb3VwJztcbmltcG9ydCBJbnB1dEdyb3VwQXBwZW5kIGZyb20gJy4vSW5wdXRHcm91cEFwcGVuZCc7XG5pbXBvcnQgSW5wdXRHcm91cFByZXBlbmQgZnJvbSAnLi9JbnB1dEdyb3VwUHJlcGVuZCc7XG5pbXBvcnQgSW5wdXRHcm91cFRleHQgZnJvbSAnLi9JbnB1dEdyb3VwVGV4dCc7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJy4uLy4uL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgSW5wdXRHcm91cCxcbiAgICAgICAgICAgIElucHV0R3JvdXBBcHBlbmQsXG4gICAgICAgICAgICBJbnB1dEdyb3VwUHJlcGVuZCxcbiAgICAgICAgICAgIElucHV0R3JvdXBUZXh0XG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbmV4cG9ydCAqIGZyb20gJy4vSW5wdXRHcm91cEFwcGVuZCc7XG5leHBvcnQgKiBmcm9tICcuL0lucHV0R3JvdXBQcmVwZW5kJztcbmV4cG9ydCAqIGZyb20gJy4vSW5wdXRHcm91cFRleHQnO1xuZXhwb3J0IGRlZmF1bHQgSW5wdXRHcm91cDtcbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxmb3JtLWdyb3VwPlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJsYWJlbFwiPlxuICAgICAgICAgICAgPGZvcm0tbGFiZWwgdi1pZj1cImxhYmVsXCIgOmZvcj1cImlkXCIgdi1odG1sPVwibGFiZWxcIiAvPlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgPGRpdiA6Y2xhc3M9XCJjb250cm9sQ2xhc3Nlc1wiIHRhYmluZGV4PVwiMFwiIEBjbGljaz1cInRvZ2dsZSgpXCIgQGtleXVwLjMyPVwidG9nZ2xlKClcIiBAa2V5dXAuMzc9XCJ0b2dnbGUob2ZmVmFsdWUpXCIgQGtleXVwLjM5PVwidG9nZ2xlKG9uVmFsdWUpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlnaHQtc3dpdGNoLWhhbmRsZVwiPjwvZGl2PlxuICAgICAgICBcdDxkaXYgY2xhc3M9XCJsaWdodC1zd2l0Y2gtY29udGFpbmVyXCI+XG4gICAgICAgIFx0XHQ8ZGl2IGNsYXNzPVwibGlnaHQtc3dpdGNoLWxhYmVsIG9uLXZhbHVlXCI+PC9kaXY+XG4gICAgICAgIFx0XHQ8ZGl2IGNsYXNzPVwibGlnaHQtc3dpdGNoLWxhYmVsIG9mZi12YWx1ZVwiPjwvZGl2PlxuICAgICAgICBcdDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Zm9ybS1jb250cm9sIDpuYW1lPVwibmFtZVwiIDp2YWx1ZT1cInZhbHVlXCIgOmlkPVwiaWRcIiBjbGFzcz1cImQtbm9uZVwiLz5cblxuICAgICAgICA8c2xvdCBuYW1lPVwiZmVlZGJhY2tcIj5cbiAgICAgICAgICAgIDxmb3JtLWZlZWRiYWNrIHYtaWY9XCJ2YWxpZEZlZWRiYWNrXCIgdi1odG1sPVwidmFsaWRGZWVkYmFja1wiIHZhbGlkIC8+XG4gICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwiaW52YWxpZEZlZWRiYWNrXCIgdi1odG1sPVwiaW52YWxpZEZlZWRiYWNrXCIgaW52YWxpZCAvPlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImhlbHBcIj5cbiAgICAgICAgICAgIDxoZWxwLXRleHQgdi1pZj1cImhlbHBUZXh0XCIgdi1odG1sPVwiaGVscFRleHRcIiAvPlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICA8L2Zvcm0tZ3JvdXA+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgSGVscFRleHQgZnJvbSAnLi4vSGVscFRleHQnO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tICcuLi9Gb3JtR3JvdXAnO1xuaW1wb3J0IEZvcm1MYWJlbCBmcm9tICcuLi9Gb3JtTGFiZWwnO1xuaW1wb3J0IEZvcm1GZWVkYmFjayBmcm9tICcuLi9Gb3JtRmVlZGJhY2snO1xuaW1wb3J0IHsgaXNVbmRlZmluZWQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnLi4vRm9ybUNvbnRyb2wnO1xuaW1wb3J0IEZvcm1Db250cm9sTWl4aW4gZnJvbSAnLi4vLi4vTWl4aW5zL0Zvcm1Db250cm9sJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2xpZ2h0LXN3aXRjaC1maWVsZCcsXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEhlbHBUZXh0LFxuICAgICAgICBGb3JtR3JvdXAsXG4gICAgICAgIEZvcm1MYWJlbCxcbiAgICAgICAgRm9ybUNvbnRyb2wsXG4gICAgICAgIEZvcm1GZWVkYmFja1xuICAgIH0sXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgRm9ybUNvbnRyb2xNaXhpblxuICAgIF0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY2xhc3MgbmFtZSBhc3NpZ25lZCB0byB0aGUgY29udHJvbCBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGRlZmF1bHRDb250cm9sQ2xhc3M6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdmb3JtLWNvbnRyb2wgbGlnaHQtc3dpdGNoJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY2xhc3MgbmFtZSBhc3NpZ25lZCB0byB0aGUgY29udHJvbCBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2ZUNsYXNzOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnb24nXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjbGFzcyBuYW1lIGFzc2lnbmVkIHRvIHRoZSBjb250cm9sIGVsZW1lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgb25WYWx1ZToge1xuICAgICAgICAgICAgZGVmYXVsdDogMVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY2xhc3MgbmFtZSBhc3NpZ25lZCB0byB0aGUgY29udHJvbCBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIG9mZlZhbHVlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAwXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIGlzQWN0aXZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlID09PSB0aGlzLm9uVmFsdWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29udHJvbENsYXNzZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbENsYXNzLFxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbFNpemVDbGFzcyxcbiAgICAgICAgICAgICAgICAodGhpcy5zcGFjaW5nIHx8ICcnKSxcbiAgICAgICAgICAgICAgICAodGhpcy5pbnZhbGlkRmVlZGJhY2sgPyAnaXMtaW52YWxpZCcgOiAnJyksXG4gICAgICAgICAgICAgICAgKHRoaXMuZHJhZ2dpbmcgPyAnaXMtZHJhZ2dpbmcnIDogJycpLFxuICAgICAgICAgICAgICAgICh0aGlzLmlzQWN0aXZlID8gJ2lzLWFjdGl2ZScgOiAnJylcbiAgICAgICAgICAgIF0uam9pbignICcpO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAgIGdldFRyYW5zaXRpb25Jbk1pbGxpc2Vjb25kcygpIHtcbiAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCcubGlnaHQtc3dpdGNoLWhhbmRsZScpKS50cmFuc2l0aW9uRHVyYXRpb247XG4gICAgICAgICAgICBjb25zdCBudW1lcmljID0gcGFyc2VGbG9hdChkdXJhdGlvbiwgMTApO1xuICAgICAgICAgICAgY29uc3QgdW5pdCA9IGR1cmF0aW9uLm1hdGNoKC9tP3MvKTtcblxuICAgICAgICAgICAgc3dpdGNoICh1bml0WzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncyc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudW1lcmljICogMTAwMDtcbiAgICAgICAgICAgICAgICBjYXNlICdtcyc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudW1lcmljO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgXCIke3VuaXRbMF19XCIgaXMgbm90IGEgdmFsaWQgdW5pdCBvZiBtZWFzdXJlLiBVbml0IG11c3QgYmUgXCJzXCIgKHNlY29uZHMpIG9yIFwibXNcIiAobWlsbGlzZWNvbmRzKS5gKTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b2dnbGUodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgIWlzVW5kZWZpbmVkKHZhbHVlKSA/IHZhbHVlIDogKHRoaXMuaXNBY3RpdmUgPyB0aGlzLm9mZlZhbHVlIDogdGhpcy5vblZhbHVlKSk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgICB2YWx1ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9LCB0aGlzLmdldFRyYW5zaXRpb25Jbk1pbGxpc2Vjb25kcygpKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZHJhZ2dpbmc6IGZhbHNlXG4gICAgICAgIH07XG4gICAgfVxuXG59XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbkBpbXBvcnQgJy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9ucy5zY3NzJztcbkBpbXBvcnQgJy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlcy5zY3NzJztcbkBpbXBvcnQgJy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy5zY3NzJztcblxuJGxpZ2h0LXN3aXRjaC1hbmltYXRpb24tZWFzaW5nOiBlYXNlO1xuJGxpZ2h0LXN3aXRjaC1hbmltYXRpb24tbGVuZ3RoOiAxcyAvIDM7XG4kbGlnaHQtc3dpdGNoLWhhbmRsZS13aWR0aDogJGZvbnQtc2l6ZS1iYXNlICogMjtcbiRsaWdodC1zd2l0Y2gtaGFuZGxlLWhlaWdodDogJGxpZ2h0LXN3aXRjaC1oYW5kbGUtd2lkdGg7XG4kbGlnaHQtc3dpdGNoLXNpemUtd2lkdGg6ICRsaWdodC1zd2l0Y2gtaGFuZGxlLXdpZHRoICogMS41O1xuJGxpZ2h0LXN3aXRjaC1zaXplLWhlaWdodDogJGxpZ2h0LXN3aXRjaC1oYW5kbGUtaGVpZ2h0O1xuJGxpZ2h0LXN3aXRjaC1sYWJlbC13aWR0aDogJGxpZ2h0LXN3aXRjaC1oYW5kbGUtd2lkdGg7XG4kbGlnaHQtc3dpdGNoLWxhYmVsLWhlaWdodDogJGxpZ2h0LXN3aXRjaC1oYW5kbGUtaGVpZ2h0O1xuXG5AbWl4aW4gbGlnaHQtc3dpdGNoLXNpemUoJHNpemUsICRtb2RpZmllcikge1xuICAgICRoYW5kbGUtd2lkdGg6ICRsaWdodC1zd2l0Y2gtaGFuZGxlLXdpZHRoICogJG1vZGlmaWVyO1xuICAgICRoYW5kbGUtaGVpZ2h0OiAkaGFuZGxlLXdpZHRoO1xuICAgICRzaXplLXdpZHRoOiAkaGFuZGxlLXdpZHRoICogMS41O1xuICAgICRzaXplLWhlaWdodDogJGhhbmRsZS1oZWlnaHQ7XG4gICAgJGxhYmVsLXdpZHRoOiAkaGFuZGxlLXdpZHRoO1xuICAgICRsYWJlbC1oZWlnaHQ6ICRoYW5kbGUtaGVpZ2h0O1xuXG4gICAgJi5saWdodC1zd2l0Y2gtI3skc2l6ZX0ge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIFx0d2lkdGg6ICRzaXplLXdpZHRoO1xuICAgIFx0aGVpZ2h0OiAkaGFuZGxlLWhlaWdodDtcbiAgICBcdGJvcmRlci1yYWRpdXM6ICRoYW5kbGUtd2lkdGg7XG5cbiAgICAgICAgLmxpZ2h0LXN3aXRjaC1oYW5kbGUge1xuICAgICAgICAgICAgd2lkdGg6ICRoYW5kbGUtd2lkdGg7XG4gICAgICAgICAgICBoZWlnaHQ6ICRoYW5kbGUtaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpZ2h0LXN3aXRjaC1jb250YWluZXIge1xuICAgICAgICAgICAgbGVmdDogLSRoYW5kbGUtd2lkdGggLyAyO1xuICAgICAgICAgICAgd2lkdGg6ICRsYWJlbC13aWR0aCAqIDI7XG4gICAgICAgICAgICBoZWlnaHQ6ICRsYWJlbC1oZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLmlzLWFjdGl2ZSB7XG4gICAgICAgICAgICAubGlnaHQtc3dpdGNoLWhhbmRsZSB7XG4gICAgICAgICAgICAgICAgbGVmdDogJGhhbmRsZS13aWR0aCAvIDI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubGlnaHQtc3dpdGNoLWxhYmVsIHtcbiAgICAgICAgICAgIHdpZHRoOiAkbGFiZWwtd2lkdGg7XG4gICAgICAgICAgICBoZWlnaHQ6ICRsYWJlbC1oZWlnaHQ7XG5cbiAgICAgICAgICAgICYub24tdmFsdWUge1xuICAgICAgICAgICAgICAgIC8vYm9yZGVyLXJhZGl1czogJGhhbmRsZS13aWR0aCAwIDAgJGhhbmRsZS13aWR0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5vZmYtdmFsdWUge1xuICAgICAgICAgICAgICAgIC8vYm9yZGVyLXJhZGl1czogMCAkaGFuZGxlLXdpZHRoICRoYW5kbGUtd2lkdGggMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxpZ2h0LXN3aXRjaCB7XG4gICAgcGFkZGluZzogMDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRib3JkZXI6IG5vbmU7XG5cdHdpZHRoOiAkbGlnaHQtc3dpdGNoLXNpemUtd2lkdGg7XG5cdGhlaWdodDogJGxpZ2h0LXN3aXRjaC1oYW5kbGUtaGVpZ2h0O1xuXHRib3JkZXItcmFkaXVzOiAkbGlnaHQtc3dpdGNoLWhhbmRsZS13aWR0aDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuXHQtbW96LXVzZXItc2VsZWN0OiBub25lO1xuXHQtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBAaW5jbHVkZSBsaWdodC1zd2l0Y2gtc2l6ZSgneHMnLCAuNSk7XG4gICAgQGluY2x1ZGUgbGlnaHQtc3dpdGNoLXNpemUoJ3NtJywgLjc1KTtcbiAgICBAaW5jbHVkZSBsaWdodC1zd2l0Y2gtc2l6ZSgnbWQnLCAxKTtcbiAgICBAaW5jbHVkZSBsaWdodC1zd2l0Y2gtc2l6ZSgnbGcnLCAxLjUpO1xuICAgIEBpbmNsdWRlIGxpZ2h0LXN3aXRjaC1zaXplKCd4bCcsIDIpO1xuXG4gICAgQGluY2x1ZGUgZm9ybS12YWxpZGF0aW9uLXN0YXRlKFwidmFsaWRcIiwgJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IpO1xuICAgIEBpbmNsdWRlIGZvcm0tdmFsaWRhdGlvbi1zdGF0ZShcImludmFsaWRcIiwgJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcik7XG5cbiAgICAmLmlzLWludmFsaWQge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yO1xuXG4gICAgICAgICYgLmxpZ2h0LXN3aXRjaC1oYW5kbGUge1xuXG5cbiAgICAgICAgfVxuXG4gICAgICAgICY6bm90KC5pcy1hY3RpdmUpIC5saWdodC1zd2l0Y2gtaGFuZGxlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I7XG4gICAgICAgIH1cblxuICAgICAgICAubGlnaHQtc3dpdGNoLWxhYmVsIHtcbiAgICAgICAgICAgICYub24tdmFsdWUge1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLm9mZi12YWx1ZSB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubGlnaHQtc3dpdGNoLWhhbmRsZSB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0ICRsaWdodC1zd2l0Y2gtYW5pbWF0aW9uLWxlbmd0aCAkbGlnaHQtc3dpdGNoLWFuaW1hdGlvbi1lYXNpbmc7XG4gICAgICAgIHdpZHRoOiAkbGlnaHQtc3dpdGNoLWhhbmRsZS13aWR0aDtcbiAgICAgICAgaGVpZ2h0OiAkbGlnaHQtc3dpdGNoLWhhbmRsZS1oZWlnaHQ7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQod2hpdGUsIHJnYigyNTAsIDI1MCwgMjUwKSA1MCUsIHdoaXRlIDc1JSk7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgfVxuXG4gICAgLmxpZ2h0LXN3aXRjaC1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IC0kbGlnaHQtc3dpdGNoLWhhbmRsZS13aWR0aCAvIDI7XG4gICAgICAgIHRvcDogKCRsaWdodC1zd2l0Y2gtaGFuZGxlLWhlaWdodCAtICAkbGlnaHQtc3dpdGNoLWxhYmVsLWhlaWdodCkgLyAyO1xuICAgICAgICB3aWR0aDogJGxpZ2h0LXN3aXRjaC1sYWJlbC13aWR0aCAqIDI7XG4gICAgICAgIGhlaWdodDogJGxpZ2h0LXN3aXRjaC1sYWJlbC1oZWlnaHQ7XG4gICAgICAgIHRyYW5zaXRpb246IGxlZnQgJGxpZ2h0LXN3aXRjaC1hbmltYXRpb24tbGVuZ3RoICRsaWdodC1zd2l0Y2gtYW5pbWF0aW9uLWVhc2luZztcbiAgICB9XG5cbiAgICAmOm5vdCguaXMtYWN0aXZlKSB7XG4gICAgICAgICY6bm90KC5pcy1kcmFnZ2luZykgLm9uLXZhbHVlIHtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuaXMtYWN0aXZlIHtcbiAgICAgICAgJjpub3QoLmlzLWRyYWdnaW5nKSAub2ZmLXZhbHVlIHtcbiAgICAgICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saWdodC1zd2l0Y2gtaGFuZGxlIHtcbiAgICAgICAgICAgIGxlZnQ6ICRsaWdodC1zd2l0Y2gtaGFuZGxlLXdpZHRoIC8gMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saWdodC1zd2l0Y2gtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubGlnaHQtc3dpdGNoLWxhYmVsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogJGxpZ2h0LXN3aXRjaC1sYWJlbC13aWR0aDtcbiAgICAgICAgaGVpZ2h0OiAkbGlnaHQtc3dpdGNoLWxhYmVsLWhlaWdodDtcbiAgICAgICAgLy9ib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG4gICAgICAgICYub24tdmFsdWUge1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMGIwMDc7XG4gICAgICAgICAgICAvL2JvcmRlci1yYWRpdXM6ICRsaWdodC1zd2l0Y2gtaGFuZGxlLXdpZHRoIDAgMCAkbGlnaHQtc3dpdGNoLWhhbmRsZS13aWR0aDtcbiAgICAgICAgfVxuXG4gICAgICAgICYub2ZmLXZhbHVlIHtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ViZWRlZjtcbiAgICAgICAgICAgIC8vYm9yZGVyLXJhZGl1czogMCAkbGlnaHQtc3dpdGNoLWhhbmRsZS13aWR0aCAkbGlnaHQtc3dpdGNoLWhhbmRsZS13aWR0aCAwO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuPC9zdHlsZT5cbiIsImltcG9ydCBMaWdodFN3aXRjaEZpZWxkIGZyb20gJy4vTGlnaHRTd2l0Y2hGaWVsZCc7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJy4uLy4uL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgTGlnaHRTd2l0Y2hGaWVsZFxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBMaWdodFN3aXRjaEZpZWxkO1xuIiwiPHRlbXBsYXRlPlxuICAgIDxyb3V0ZXItbGluayB2LWlmPVwidG9cIiA6dG89XCJ0b1wiIDpjbGFzcz1cImNsYXNzZXNcIiBAY2xpY2s9XCIkZW1pdCgnY2xpY2snLCAkZXZlbnQpXCI+XG4gICAgICAgIDxzbG90Pnt7bGFiZWx9fTwvc2xvdD4gPGJhZGdlIHYtaWY9XCJiYWRnZVwiIHYtYmluZD1cImJhZGdlT3B0aW9uc1wiPjwvYmFkZ2U+XG4gICAgPC9yb3V0ZXItbGluaz5cbiAgICA8YSB2LWVsc2VpZj1cImhyZWZcIiA6aHJlZj1cImhyZWZcIiA6Y2xhc3M9XCJjbGFzc2VzXCIgQGNsaWNrPVwiJGVtaXQoJ2NsaWNrJywgJGV2ZW50KVwiPlxuICAgICAgICA8c2xvdD57e2xhYmVsfX08L3Nsb3Q+IDxiYWRnZSB2LWlmPVwiYmFkZ2VcIiB2LWJpbmQ9XCJiYWRnZU9wdGlvbnNcIj48L2JhZGdlPlxuICAgIDwvYT5cbiAgICA8YnV0dG9uIHYtZWxzZS1pZj1cImFjdGlvblwiIHR5cGU9XCJidXR0b25cIiA6Y2xhc3M9XCJjbGFzc2VzXCIgQGNsaWNrLnByZXZlbnQ9XCIkZW1pdCgnY2xpY2snLCAkZXZlbnQpXCI+XG4gICAgICAgIDxzbG90Pnt7bGFiZWx9fTwvc2xvdD4gPGJhZGdlIHYtaWY9XCJiYWRnZVwiIHYtYmluZD1cImJhZGdlT3B0aW9uc1wiPjwvYmFkZ2U+XG4gICAgPC9idXR0b24+XG4gICAgPGRpdiB2LWVsc2UgOmNsYXNzPVwiY2xhc3Nlc1wiIEBjbGljaz1cIiRlbWl0KCdjbGljaycsICRldmVudClcIj5cbiAgICAgICAgPHNsb3Q+e3tsYWJlbH19PC9zbG90PiA8YmFkZ2Ugdi1pZj1cImJhZGdlXCIgdi1iaW5kPVwiYmFkZ2VPcHRpb25zXCI+PC9iYWRnZT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IEJhZGdlIGZyb20gJy4uL0JhZGdlJztcbmltcG9ydCBwcmVmaXggZnJvbSAnLi4vLi4vSGVscGVycy9QcmVmaXgvUHJlZml4JztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBCYWRnZVxuICAgIH0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYmFkZ2UgbGFiZWwgKGlmIG51bWJlciBvciBzdHJpbmcpIG9yIG9iamVjdCBvZiBvcHRpb25zIHRvIHBhc3MgdG9cbiAgICAgICAgICogdGhlIGNvbXBvbmVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ3xPYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIGJhZGdlOiBbTnVtYmVyLCBTdHJpbmcsIE9iamVjdF0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBsaXN0IGdyb3VwIGl0ZW0gaHJlZiBhdHRyaWJ1dGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGhyZWY6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGxpc3QgZ3JvdXAgaXRlbSB2YXJpYW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICB2YXJpYW50OiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE9wdGlvbmFsbHkgcGFzcyB0aGUgaXRlbSBhcyBhIG9iamVjdCB0byB1c2UgcHJvZ3JhbW1hdGljYWxseSBsYXRlci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgaXRlbTogT2JqZWN0LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbGlzdCBncm91cCBpdGVtIGFuIGFjdGlvbiwgb3IgY2xpY2thYmxlIGl0ZW0uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpb246IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbGlzdCBncm91cCBpdGVtIGFjdGl2ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBsaXN0IGdyb3VwIGl0ZW0gZGlzYWJsZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBsaXN0IGl0ZW0gbGFiZWwuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBPYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRvIGF0dHJpYnV0ZSB0byBiZSBwYXNzZWQgdG8gYSA8cm91dGVyLWxpbms+IGNvbXBvbmVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdG86IFtTdHJpbmcsIE9iamVjdF1cblxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIGNsYXNzZXMoKSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gcHJlZml4KHtcbiAgICAgICAgICAgICAgICAnYWN0aW9uJzogdGhpcy5hY3Rpb24sXG4gICAgICAgICAgICB9LCAnbGlzdC1ncm91cC1pdGVtJyk7XG5cbiAgICAgICAgICAgIGNsYXNzZXNbJ2xpc3QtZ3JvdXAtaXRlbSddID0gdHJ1ZTtcbiAgICAgICAgICAgIGNsYXNzZXNbJ2FjdGl2ZSddID0gdGhpcy5hY3RpdmU7XG4gICAgICAgICAgICBjbGFzc2VzWydkaXNhYmxlZCddID0gdGhpcy5kaXNhYmxlZDtcblxuICAgICAgICAgICAgaWYodGhpcy52YXJpYW50KSB7XG4gICAgICAgICAgICAgICAgY2xhc3Nlc1twcmVmaXgodGhpcy52YXJpYW50LCAnbGlzdC1ncm91cC1pdGVtJyldID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmFkZ2VPcHRpb25zKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuYmFkZ2UpID8gdGhpcy5iYWRnZSA6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5iYWRnZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG5cbiAgICAgICAgYWN0aXZlKHZhbHVlLCBwcmV2VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RvZ2dsZScsIHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoISF2YWx1ZSA/ICdhY3RpdmF0ZScgOiAnZGVhY3RpdmF0ZScpO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG5cbn1cblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImxpc3QtZ3JvdXBcIiA6Y2xhc3M9XCJjbGFzc2VzXCI+XG4gICAgICAgIDxzbG90Lz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgTGlzdEdyb3VwSXRlbSBmcm9tICcuL0xpc3RHcm91cEl0ZW0nO1xuaW1wb3J0IHByZWZpeCBmcm9tICcuLi8uLi9IZWxwZXJzL1ByZWZpeC9QcmVmaXgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIExpc3RHcm91cEl0ZW1cbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGxpc3QgZ3JvdXAgYXBwZWFyIGZsdXNoICh3aXRob3V0IHNvbWUgYm9yZGVycykuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBmbHVzaDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbiBhY3RpdmF0ZSBtdWx0aXBsZSBsaXN0IGl0ZW1zXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBtdWx0aXBsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBjbGFzc2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCh7XG4gICAgICAgICAgICAgICAgJ2ZsdXNoJzogdGhpcy5mbHVzaFxuICAgICAgICAgICAgfSwgJ2xpc3QtZ3JvdXAnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgYmluZEV2ZW50c1RvQ2hpbGRyZW4oKSB7XG4gICAgICAgICAgICBlYWNoKHRoaXMuJGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgY2hpbGQuJG9mZignY2xpY2snLCBldmVudCA9PiB0aGlzLm9uQ2xpY2tJdGVtKGV2ZW50LCBjaGlsZCkpO1xuICAgICAgICAgICAgICAgIGNoaWxkLiRvbignY2xpY2snLCBldmVudCA9PiB0aGlzLm9uQ2xpY2tJdGVtKGV2ZW50LCBjaGlsZCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgdGhlIGBjbGlja2AgZXZlbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgb25DbGljayhldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBldmVudCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgdGhlIGNoaWxkIGBjbGlja2AgZXZlbnRzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIG9uQ2xpY2tJdGVtKGV2ZW50LCBjaGlsZCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnaXRlbTpjbGljaycsIGV2ZW50LCBjaGlsZCk7XG4gICAgICAgIH0sXG5cbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzVG9DaGlsZHJlbigpO1xuICAgIH0sXG5cbiAgICB1cGRhdGVkKCkge1xuICAgICAgICB0aGlzLmJpbmRFdmVudHNUb0NoaWxkcmVuKCk7XG4gICAgfVxuXG59XG5cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IExpc3RHcm91cCBmcm9tICcuL0xpc3RHcm91cCc7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJy4uLy4uL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgTGlzdEdyb3VwXG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RHcm91cDtcbiIsIjx0ZW1wbGF0ZT5cbiAgICA8Y29tcG9uZW50IGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgOmNsYXNzPVwieydoMSc6IGgxfVwiIDppcz1cImNvbXBvbmVudFwiIDp0bz1cInRvXCIgOmhyZWY9XCJocmVmIHx8IHRvID8gJyMnIDogbnVsbFwiPlxuICAgICAgICA8aW1nIHYtaWY9XCJzcmNcIiBjbGFzcz1cImQtaW5saW5lLWJsb2NrIGFsaWduLWNlbnRlclwiIDpzcmM9XCJzcmNcIiA6d2lkdGg9XCJ1bml0KHdpZHRoKVwiIDpoZWlnaHQ9XCJ1bml0KGhlaWdodClcIiA6YWx0PVwiYWx0XCIvPlxuICAgICAgICA8c2xvdC8+XG4gICAgPC9jb21wb25lbnQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHVuaXQgZnJvbSAnLi4vLi4vSGVscGVycy9Vbml0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGltZyBgYWx0YCBhdHRyaWJ1dGUuIGBzcmNgIG11c3QgYmUgZGVmaW5lIGJlZm9yZSB0aGlzIHByb3AgaGFzXG4gICAgICAgICAqIGFueSBhZmZlY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBPYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIGFsdDogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgSFRNTCB3cmFwcGluZyB0YWcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBPYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIHRhZzogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgaW1nIGB3aWR0aGAgYXR0cmlidXRlLiBgc3JjYCBtdXN0IGJlIGRlZmluZSBiZWZvcmUgdGhpcyBwcm9wIGhhc1xuICAgICAgICAgKiBhbnkgYWZmZWN0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgT2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICB3aWR0aDogW051bWJlciwgU3RyaW5nXSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGltZyBgaGVpZ2h0YCBhdHRyaWJ1dGUuIGBzcmNgIG11c3QgYmUgZGVmaW5lIGJlZm9yZSB0aGlzIHByb3AgaGFzXG4gICAgICAgICAqIGFueSBhZmZlY3QuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBPYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIGhlaWdodDogW051bWJlciwgU3RyaW5nXSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGB0b2AgYXR0cmlidXRlIHRoYXQgaXMgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBPYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIHRvOiBbT2JqZWN0LCBTdHJpbmddLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYGhyZWZgIGF0dHJpYnV0ZSB0aGF0IGlzIHBhc3NlZCB0byB0aGUgY29tcG9uZW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgT2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBocmVmOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFwcGVuZCB0aGUgYGgxYCBjbGFzcyB0byBpbmNyZWFzZSB0aGUgZGlzcGxheSBzaXplXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBPYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIGgxOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBhIGBzcmNgIGF0dHJpYnV0ZSBpcyBwYXNzZWQsIHRoZW4gdXNlIGl0IHRvIGFkZCBhbiBpbWcgdGFnXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBPYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIHNyYzogU3RyaW5nLFxuXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgY29tcG9uZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFnIHx8ICh0aGlzLnRvID8gJ3JvdXRlci1saW5rJyA6ICh0aGlzLmhyZWYgPyAnYScgOiAnc3BhbicpKTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdW5pdCh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuaXQodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhckNvbGxhcHNlXCIgOmNsYXNzPVwieydjb2xsYXBzZSc6IGNvbGxhcHNlfVwiPlxuICAgICAgICA8c2xvdC8+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ25hdmJhci1jb2xsYXBzZScsXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIGNvbGxhcHNlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRleHRcIj5cbiAgICAgICAgPHNsb3QvPlxuICAgIDwvc3Bhbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnbmF2YmFyLXRleHQnXG5cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxzcGFuIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPlxuICAgICAgICA8c2xvdC8+XG4gICAgPC9zcGFuPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICduYXZiYXItdG9nZ2xlci1pY29uJ1xuXG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzcz1cIm5hdmJhci10b2dnbGVyXCJcbiAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgIDpkYXRhLXRhcmdldD1cInRhcmdldFwiXG4gICAgICAgIDphcmlhLWNvbnRyb2xzPVwidGFyZ2V0XCJcbiAgICAgICAgOmFyaWEtZXhwYW5kZWQ9XCJleHBhbmRlZFwiXG4gICAgICAgIDphcmlhLWxhYmVsPVwibGFiZWxcIlxuICAgICAgICBAY2xpY2s9XCJvbkNsaWNrXCI+XG4gICAgICAgIDxzbG90PjxuYXZiYXItdG9nZ2xlci1pY29uLz48L3Nsb3Q+XG4gICAgPC9idXR0b24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE5hdmJhclRvZ2dsZXJJY29uIGZyb20gJy4vTmF2YmFyVG9nZ2xlckljb24nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnbmF2YmFyLXRvZ2dsZXInLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBOYXZiYXJUb2dnbGVySWNvblxuICAgIH0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIGV4cGFuZGVkOiBCb29sZWFuLFxuXG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnVG9nZ2xlIG5hdmlnYXRpb24nXG4gICAgICAgIH0sXG5cbiAgICAgICAgdGFyZ2V0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnLm5hdmJhci1jb2xsYXBzZSdcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxuYXYgOmNsYXNzPVwiY2xhc3Nlc1wiPlxuICAgICAgICA8c2xvdC8+XG4gICAgPC9uYXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzQm9vbGVhbiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCBwcmVmaXggZnJvbSAnLi4vLi4vSGVscGVycy9QcmVmaXgnO1xuaW1wb3J0IFZhcmlhbnQgZnJvbSAnLi4vLi4vTWl4aW5zL1ZhcmlhbnQnO1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9NaXhpbnMvQ29sb3JhYmxlJztcbmltcG9ydCBOYXZiYXJCcmFuZCBmcm9tICcuL05hdmJhckJyYW5kJztcbmltcG9ydCBOYXZiYXJDb2xsYXBzZSBmcm9tICcuL05hdmJhckNvbGxhcHNlJztcbmltcG9ydCBOYXZiYXJUZXh0IGZyb20gJy4vTmF2YmFyVGV4dCc7XG5pbXBvcnQgTmF2YmFyVG9nZ2xlciBmcm9tICcuL05hdmJhclRvZ2dsZXInO1xuaW1wb3J0IE5hdmJhclRvZ2dsZXJJY29uIGZyb20gJy4vTmF2YmFyVG9nZ2xlckljb24nO1xuaW1wb3J0IE1lcmdlQ2xhc3NlcyBmcm9tICcuLi8uLi9NaXhpbnMvTWVyZ2VDbGFzc2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ25hdmJhcicsXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIE5hdmJhckJyYW5kLFxuICAgICAgICBOYXZiYXJDb2xsYXBzZSxcbiAgICAgICAgTmF2YmFyVGV4dCxcbiAgICAgICAgTmF2YmFyVG9nZ2xlcixcbiAgICAgICAgTmF2YmFyVG9nZ2xlckljb25cbiAgICB9LFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIFZhcmlhbnQsXG4gICAgICAgIENvbG9yYWJsZSxcbiAgICAgICAgTWVyZ2VDbGFzc2VzXG4gICAgXSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEV4cGFuZCB0aGUgbmF2YmFyLiBJZiB0cnVlLCBhcHBsaWVzIHRvIGFsbCBzaXplLCBvdGhlcndpc2UgcGFzcyBhIHN0cmluZy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IE9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgZXhwYW5kOiB7XG4gICAgICAgICAgICB0eXBlOiBbQm9vbGVhbiwgU3RyaW5nXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdsZycsXG4gICAgICAgICAgICB2YWxpZGF0ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIFsneHMnLCAnc20nLCAnbWQnLCAnbGcnLCAneGwnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTEgfHwgaXNCb29sZWFuKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHNob3VsZCB0aGUgbmF2YmFyIGJlIGZpeGVkIGF0IHRoZSB0b3AuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGZpeGVkOiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcbiAgICAgICAgICAgIHZhbGlkYXRlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZih2YWx1ZSkgIT09IC0xIHx8IGlzQm9vbGVhbih2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBzaG91bGQgdGhlIG5hdmJhciBiZSBzdGlja2llZCBhdCB0aGUgdG9wLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBzdGlja3k6IHtcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxuICAgICAgICAgICAgdmFsaWRhdGUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHZhbHVlKSAhPT0gLTEgfHwgaXNCb29sZWFuKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHZhcmlhbnQgYXR0cmlidXRlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHZhcmlhbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdsaWdodCcsXG4gICAgICAgICAgICB2YWxpZGF0ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbJ2xpZ2h0JywgJ2RhcmsnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIGV4cGFuZGVkQ2xhc3MoKSB7XG4gICAgICAgICAgICBpZihpc0Jvb2xlYW4odGhpcy5leHBhbmQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwYW5kO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcHJlZml4KHByZWZpeCh0aGlzLmV4cGFuZCwgJ2V4cGFuZCcpLCAnbmF2YmFyJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2xhc3NlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1lcmdlQ2xhc3NlcyhcbiAgICAgICAgICAgICAgICAnbmF2YmFyJyxcbiAgICAgICAgICAgICAgICBwcmVmaXgodGhpcy5zdGlja3kgPT09IHRydWUgPyAndG9wJyA6IHRoaXMuc3RpY2t5LCAnc3RpY2t5JyksXG4gICAgICAgICAgICAgICAgcHJlZml4KHRoaXMuZml4ZWQgPT09IHRydWUgPyAndG9wJyA6IHRoaXMuZml4ZWQsICdmaXhlZCcpLFxuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kZWRDbGFzcyxcbiAgICAgICAgICAgICAgICB0aGlzLnZhcmlhbnRDbGFzcyxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yYWJsZUNsYXNzZXNcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgfVxuXG59XG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxzcGFuIGNsYXNzPVwibmF2aWdhdGlvbi1lcnJvciBmYS1zdGFjayBmYS1tZFwiIDp0aXRsZT1cImVycm9yXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc3RhY2stMnggZmEtY2VydGlmaWNhdGVcIi8+XG4gICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc3RhY2stMXggZmEtZXhjbGFtYXRpb24gZmEtaW52ZXJzZVwiLz5cbiAgICA8L3NwYW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ25hdmlnYXRpb24tZXJyb3InLFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5AaW1wb3J0ICcuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fZnVuY3Rpb25zLnNjc3MnO1xuQGltcG9ydCAnLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX3ZhcmlhYmxlcy5zY3NzJztcblxuLm5hdmlnYXRpb24tZXJyb3Ige1xuICAgIGNvbG9yOiAkZGFuZ2VyO1xufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8Y29tcG9uZW50IDppcz1cImNvbXBvbmVudFwiIDpocmVmPVwiaHJlZiB8fCAodG8gPyAnIycgOiBudWxsKVwiIDp0bz1cInRvXCIgOmNsYXNzPVwiY2xhc3Nlc1wiIEBjbGljaz1cIiRlbWl0KCdjbGljaycsICRldmVudClcIj5cbiAgICAgICAgPHNsb3QgLz5cbiAgICAgICAgPG5hdmlnYXRpb24tZXJyb3Igdi1pZj1cImVycm9yXCIgOmVycm9yPVwiZXJyb3JcIi8+XG4gICAgPC9jb21wb25lbnQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE5hdmlnYXRpb25FcnJvciBmcm9tICcuL05hdmlnYXRpb25FcnJvcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICduYXZpZ2F0aW9uLWxpbmsnLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBOYXZpZ2F0aW9uRXJyb3JcbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSXMgdGhlIG5hdmlnYXRpb24gaXRlbSBhY3RpdmVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3Age0Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmU6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIHRoZSBuYXZpZ2F0aW9uIGl0ZW0gZGlzYWJsZWRcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3Age0Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGVycm9yIHN0cmluZy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3Age1N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIGVycm9yOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBocmVmIGF0dHJpYnV0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcCB7U3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgaHJlZjogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY29tcG9uZW50IEhUTUwgdGFnXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wIHtTdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB0YWc6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRvIGF0dHJpYnV0ZSwgd2lsbCBiZSBwYXNzZWQgdG8gcm91dGVyLWxpbmsuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wIHtTdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICB0bzogW09iamVjdCwgU3RyaW5nXSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIHRoZSBuYXYtaXRlbSBjbGFzcyB0byB0aGUgbGlua1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcCB7Qm9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIGl0ZW06IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIGNvbXBvbmVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRhZyB8fCAodGhpcy50byA/ICdyb3V0ZXItbGluaycgOiAnYScpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNsYXNzZXMoKSB7XG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoIXRoaXMuaXNJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNJdGVtID0gIXRoaXMuJHBhcmVudC4kZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXYtaXRlbScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICduYXYtbGluayc6ICEhdGhpcy5ocmVmIHx8ICEhdGhpcy50byxcbiAgICAgICAgICAgICAgICAnbmF2LWl0ZW0nOiAhIXRoaXMuaXRlbSxcbiAgICAgICAgICAgICAgICAnYWN0aXZlJzogdGhpcy5hY3RpdmUsXG4gICAgICAgICAgICAgICAgJ2Rpc2FibGVkJzogdGhpcy5kaXNhYmxlZFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxjb21wb25lbnQgOmlzPVwiY29tcG9uZW50XCIgOmNsYXNzPVwiY2xhc3Nlc1wiIEBjbGljaz1cIiRlbWl0KCdjbGljaycsICRldmVudClcIj5cbiAgICAgICAgPHNsb3QgLz5cbiAgICA8L2NvbXBvbmVudD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTmF2aWdhdGlvbkxpbmsgZnJvbSAnLi9OYXZpZ2F0aW9uTGluayc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICduYXZpZ2F0aW9uLWl0ZW0nLFxuXG4gICAgZXh0ZW5kczogTmF2aWdhdGlvbkxpbmssXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgSFRNTCBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wIHtTdHJpbmd9XG4gICAgICAgICAqL1xuICAgICAgICBlbGVtZW50OiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIHRoZSBjb21wb25lbnQgYSBsaXN0IGVsZW1lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3Age0Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBsaXN0OiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgdGhlIG5hdi1pdGVtIGNsYXNzIHRvIHRoZSBsaW5rXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wIHtCb29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgICAgfVxuXG4gICAgfSxcblxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICBjb21wb25lbnQoKSB7XG4gICAgICAgICAgICBpZih0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLmhyZWYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2EnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLmxpc3QpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2xpJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuICdkaXYnO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxuYXYgY2xhc3M9XCJuYXZcIiA6Y2xhc3M9XCJjbGFzc2VzXCIgOnJvbGU9XCJyb2xlXCI+XG4gICAgICAgIDxzbG90Lz5cbiAgICA8L25hdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTmF2aWdhdGlvbkl0ZW0gZnJvbSAnLi9OYXZpZ2F0aW9uSXRlbSc7XG5pbXBvcnQgcHJlZml4IGZyb20gJy4uLy4uL0hlbHBlcnMvUHJlZml4JztcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vTWl4aW5zL0NvbG9yYWJsZSc7XG5pbXBvcnQgTWVyZ2VDbGFzc2VzIGZyb20gJy4uLy4uL01peGlucy9NZXJnZUNsYXNzZXMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnbmF2aWdhdGlvbicsXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIE5hdmlnYXRpb25JdGVtXG4gICAgfSxcblxuICAgIG1peGluczogW1xuICAgICAgICBDb2xvcmFibGUsXG4gICAgICAgIE1lcmdlQ2xhc3Nlc1xuICAgIF0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIZWxwZXIgdG8gYWRkIHRoZSBqdXN0aWZ5LWNvbnRlbnQtWCBjbGFzcy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3Age0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgYWxpZ246IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gYXJyYXkgb2YgYnV0dG9uc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcCB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBidXR0b25zOiBBcnJheSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG5hdmlnYXRpb24gaW5zaWRlIGEgY2FyZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcCB7Qm9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIGNhcmQ6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEp1c3RpZnkgbmF2IGl0ZW1zIHRvIGZpbGwgdGhlIHdpZHRoIGVxdWFsbHkgKHVzaW5nIGZsZXgpLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcCB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBmaWxsOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgYG5hdi1qdXN0aWZpZWRgIGNsYXNzIHRvIHRoZSBjb21wb25lbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIGp1c3RpZmllZDogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGxheSBpdGVtcyBhcyBwaWxsIHNoYXBlc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcCB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBwaWxsczogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGxheSBpdGVtcyBhcyB0YWIgc2hhcGVzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIHRhYnM6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc3BsYXkgdGhlIGJ1dHRvbnMgdmVydGljYWxseVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcCB7Qm9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIHZlcnRpY2FsOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcm9sZSBhdHRyaWJ1dGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3Age1N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHJvbGU6IFN0cmluZ1xuXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgY2xhc3NlcygpIHtcbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZighdGhpcy5pc0NhcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0NhcmQgPSB0aGlzLiRwYXJlbnQuJGVsLmNsYXNzTGlzdC5jb250YWlucygnY2FyZC1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWVyZ2VDbGFzc2VzKFxuICAgICAgICAgICAgICAgIHByZWZpeCh0aGlzLmFsaWduLCAnanVzdGlmeS1jb250ZW50JyksXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvcmFibGVDbGFzc2VzLCB7XG4gICAgICAgICAgICAgICAgICAgICdjYXJkLWhlYWRlci10YWJzJzogdGhpcy5pc0NhcmQgJiYgdGhpcy50YWJzLFxuICAgICAgICAgICAgICAgICAgICAnY2FyZC1oZWFkZXItcGlsbHMnOiB0aGlzLmlzQ2FyZCAmJiB0aGlzLnBpbGxzLFxuICAgICAgICAgICAgICAgICAgICAnbmF2LWp1c3RpZmllZCc6IHRoaXMuanVzdGlmaWVkLFxuICAgICAgICAgICAgICAgICAgICAnbmF2LWZpbGwnOiB0aGlzLmZpbGwsXG4gICAgICAgICAgICAgICAgICAgICduYXYtcGlsbHMnOiB0aGlzLnBpbGxzLFxuICAgICAgICAgICAgICAgICAgICAnbmF2LXRhYnMnOiB0aGlzLnRhYnMsXG4gICAgICAgICAgICAgICAgICAgICdmbGV4LWNvbHVtbic6IHRoaXMudmVydGljYWxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzQ2FyZDogdGhpcy5jYXJkXG4gICAgICAgIH07XG4gICAgfVxuXG59XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxuYXZpZ2F0aW9uLWl0ZW0gY2xhc3M9XCJkcm9wZG93blwiPlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJ0b2dnbGUtYnV0dG9uXCI+XG4gICAgICAgICAgICA8bmF2aWdhdGlvbi1saW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24tdG9nZ2xlXCJcbiAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgOmFyaWEtZXhwYW5kZWQ9XCJpc0Ryb3Bkb3duU2hvd2luZ1wiXG4gICAgICAgICAgICAgICAgQGNsaWNrLm5hdGl2ZS5wcmV2ZW50PVwidG9nZ2xlKClcIlxuICAgICAgICAgICAgICAgIEBibHVyPVwib25CbHVyXCI+XG4gICAgICAgICAgICAgICAge3tsYWJlbH19XG4gICAgICAgICAgICA8L25hdmlnYXRpb24tbGluaz5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICA8ZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICAgIDppZD1cImlkXCJcbiAgICAgICAgICAgICAgICA6aXRlbXM9XCJpdGVtc1wiXG4gICAgICAgICAgICAgICAgOmFsaWduPVwiYWxpZ25cIlxuICAgICAgICAgICAgICAgIDpzaG93LnN5bmM9XCJpc0Ryb3Bkb3duU2hvd2luZ1wiXG4gICAgICAgICAgICAgICAgQGl0ZW06Y2xpY2s9XCJvbkl0ZW1DbGlja1wiPlxuICAgICAgICAgICAgICAgIDxzbG90Lz5cbiAgICAgICAgICAgIDwvZHJvcGRvd24tbWVudT5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgPC9uYXZpZ2F0aW9uLWl0ZW0+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgTmF2aWdhdGlvbkl0ZW0gZnJvbSAnLi9OYXZpZ2F0aW9uSXRlbSc7XG5pbXBvcnQgTmF2aWdhdGlvbkxpbmsgZnJvbSAnLi9OYXZpZ2F0aW9uTGluayc7XG5pbXBvcnQgRHJvcGRvd25NZW51IGZyb20gJy4uL0Ryb3Bkb3duTWVudSc7XG5pbXBvcnQgQnRuRHJvcGRvd24gZnJvbSAnLi4vQnRuRHJvcGRvd24nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnbmF2aWdhdGlvbi1kcm9wZG93bicsXG5cbiAgICBleHRlbmRzOiBCdG5Ecm9wZG93bixcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgQnRuRHJvcGRvd24sXG4gICAgICAgIERyb3Bkb3duTWVudSxcbiAgICAgICAgTmF2aWdhdGlvbkl0ZW0sXG4gICAgICAgIE5hdmlnYXRpb25MaW5rXG4gICAgfVxuXG59XG48L3NjcmlwdD5cbiIsImltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4vTmF2aWdhdGlvbic7XG5pbXBvcnQgTmF2aWdhdGlvbkVycm9yIGZyb20gJy4vTmF2aWdhdGlvbkVycm9yJztcbmltcG9ydCBOYXZpZ2F0aW9uSXRlbSBmcm9tICcuL05hdmlnYXRpb25JdGVtJztcbmltcG9ydCBOYXZpZ2F0aW9uTGluayBmcm9tICcuL05hdmlnYXRpb25MaW5rJztcbmltcG9ydCBOYXZpZ2F0aW9uRHJvcGRvd24gZnJvbSAnLi9OYXZpZ2F0aW9uRHJvcGRvd24nO1xuaW1wb3J0IFZ1ZUluc3RhbGxlciBmcm9tICcuLi8uLi9IZWxwZXJzL1Z1ZUluc3RhbGxlci9WdWVJbnN0YWxsZXInO1xuXG5jb25zdCBwbHVnaW4gPSBWdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIE5hdmlnYXRpb24sXG4gICAgICAgICAgICBOYXZpZ2F0aW9uRXJyb3IsXG4gICAgICAgICAgICBOYXZpZ2F0aW9uSXRlbSxcbiAgICAgICAgICAgIE5hdmlnYXRpb25MaW5rLFxuICAgICAgICAgICAgTmF2aWdhdGlvbkRyb3Bkb3duXG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG4iLCI8dGVtcGxhdGU+XG4gICAgPHVsIGNsYXNzPVwibmF2YmFyLW5hdlwiIDpjbGFzcz1cImNsYXNzZXNcIiA6cm9sZT1cInJvbGVcIj5cbiAgICAgICAgPHNsb3QvPlxuICAgIDwvdWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi4vTmF2aWdhdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICduYXZiYXItbmF2JyxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgTmF2aWdhdGlvblxuICAgIH1cblxufVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJztcbmltcG9ydCBOYXZiYXJCcmFuZCBmcm9tICcuL05hdmJhckJyYW5kJztcbmltcG9ydCBOYXZiYXJDb2xsYXBzZSBmcm9tICcuL05hdmJhckNvbGxhcHNlJztcbmltcG9ydCBOYXZiYXJOYXYgZnJvbSAnLi9OYXZiYXJOYXYnO1xuaW1wb3J0IE5hdmJhclRleHQgZnJvbSAnLi9OYXZiYXJUZXh0JztcbmltcG9ydCBOYXZiYXJUb2dnbGVyIGZyb20gJy4vTmF2YmFyVG9nZ2xlcic7XG5pbXBvcnQgTmF2YmFyVG9nZ2xlckljb24gZnJvbSAnLi9OYXZiYXJUb2dnbGVySWNvbic7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJy4uLy4uL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgTmF2YmFyLFxuICAgICAgICAgICAgTmF2YmFyQnJhbmQsXG4gICAgICAgICAgICBOYXZiYXJDb2xsYXBzZSxcbiAgICAgICAgICAgIE5hdmJhck5hdixcbiAgICAgICAgICAgIE5hdmJhclRleHQsXG4gICAgICAgICAgICBOYXZiYXJUb2dnbGVyLFxuICAgICAgICAgICAgTmF2YmFyVG9nZ2xlckljb25cbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiPHRlbXBsYXRlPlxuICAgIDxuYXYgYXJpYS1sYWJlbD1cIlBhZ2UgbmF2aWdhdGlvbiBleGFtcGxlXCI+XG4gICAgICAgIDx1bCBjbGFzcz1cInBhZ2luYXRpb25cIiA6Y2xhc3M9XCJjbGFzc2VzXCI+XG4gICAgICAgIFx0PGxpIGNsYXNzPVwicGFnZS1pdGVtXCIgOmNsYXNzPVwieydkaXNhYmxlZCc6IGN1cnJlbnRQYWdlID09PSAxfVwiPlxuICAgICAgICBcdFx0PGEgaHJlZj1cIiNcIiBjbGFzcz1cInBhZ2UtbGlua1wiIGFyaWEtbGFiZWw9XCJQcmV2aW91c1wiIEBjbGljay5wcmV2ZW50PVwicHJldigkZXZlbnQpXCI+XG4gICAgICAgIFx0XHRcdDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZsYXF1bzs8L3NwYW4+XG4gICAgICAgIFx0XHQ8L2E+XG4gICAgICAgIFx0PC9saT5cbiAgICAgICAgICAgIDxsaSB2LWZvcj1cIml0ZW0gaW4gcGFnZXNcIiA6ZGF0YS1wYWdlPVwiaXRlbS5wYWdlXCIgY2xhc3M9XCJwYWdlLWl0ZW1cIiA6Y2xhc3M9XCJ7J2FjdGl2ZSc6IGl0ZW0ucGFnZSA9PT0gY3VycmVudFBhZ2UsICdkaXNhYmxlZCc6ICEhaXRlbS5kaXZpZGVyfVwiPlxuICAgICAgICAgICAgICAgIDxzbG90IDppdGVtPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8YSB2LWlmPVwiaXRlbS5kaXZpZGVyXCIgY2xhc3M9XCJwYWdlLWxpbmtcIj4maGVsbGlwOzwvYT5cbiAgICAgICAgICAgICAgICBcdDxhIHYtZWxzZSBocmVmPVwiI1wiIGNsYXNzPVwicGFnZS1saW5rXCIgOmNsYXNzPVwiaXRlbS5jbGFzc1wiIDpkYXRhLWxhYmVsPVwiaXRlbS5sYWJlbFwiIEBjbGljay5wcmV2ZW50PVwicGFnaW5hdGUoaXRlbS5wYWdlLCAkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgXHRcdDxzcGFuIHYtaWY9XCJpdGVtLmxhYmVsXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdi1odG1sPVwiaXRlbS5sYWJlbFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICBcdFx0PHNwYW4gdi1pZj1cIml0ZW0ucGFnZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHYtaHRtbD1cIml0ZW0ucGFnZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICBcdDwvYT5cbiAgICAgICAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICBcdDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiIDpjbGFzcz1cInsnZGlzYWJsZWQnOiBjdXJyZW50UGFnZSA+PSB0b3RhbFBhZ2VzfVwiPlxuICAgICAgICBcdFx0PGEgaHJlZj1cIiNcIiBjbGFzcz1cInBhZ2UtbGlua1wiIGFyaWEtbGFiZWw9XCJOZXh0XCIgQGNsaWNrLnByZXZlbnQ9XCJuZXh0KCRldmVudClcIj5cbiAgICAgICAgXHRcdFx0PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnJhcXVvOzwvc3Bhbj5cbiAgICAgICAgXHRcdDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAncGFnaW5hdGlvbicsXG5cbiAgICBwcm9wczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGFsaWdubWVudCBvZiB0aGUgcGFnaW5hdGlvbiBjb21wb25lbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wIFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgYWxpZ246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiB2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsnc3RhcnQnLCAnZW5kJywgJ2NlbnRlciddLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHBhZ2Ugb24gd2hpY2ggdGhlIHBhZ2luYXRvciBzaG91bGQgc3RhcnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wIFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgcGFnZToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogMVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzIGluIHRoZSBwYWdpbmF0b3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wIFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdG90YWxQYWdlczoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogMVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbnVtYmVyIG9mIHBhZ2VzIHRvIHNob3cgd2hlbiB0aGUgdG90YWwgbnVtYmVyIG9mIHBhZ2VzIGlzXG4gICAgICAgICAqIGdyZWF0ZXIgdGhhbiB0aGUgbnVtYmVyIG9mIHBhZ2VzIHRoYXQgc2hvdWxkIGJlIHNob3duLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcCBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHNob3dQYWdlczoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogNlxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgbmV4dChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5wYWdpbmF0ZSh0aGlzLmN1cnJlbnRQYWdlID49IHRoaXMudG90YWxQYWdlcyA/IHRoaXMuY3VycmVudFBhZ2UgOiB0aGlzLmN1cnJlbnRQYWdlICsgMSwgZXZlbnQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHByZXYoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGUodGhpcy5jdXJyZW50UGFnZSA8PSAxID8gdGhpcy5jdXJyZW50UGFnZSA6IHRoaXMuY3VycmVudFBhZ2UgLSAxLCBldmVudCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFnaW5hdGUocGFnZSwgZXZlbnQpIHtcbiAgICAgICAgICAgIGlmKGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cblx0XHRcdHRoaXMuc2V0QWN0aXZlUGFnZShwYWdlKTtcblxuICAgICAgICAgICAgdGhpcy4kZW1pdCgncGFnaW5hdGUnLCBwYWdlLCBldmVudCk7XG4gICAgICAgIH0sXG5cblx0XHRzZXRBY3RpdmVQYWdlKHBhZ2UpIHtcblx0XHRcdGlmKHRoaXMuY3VycmVudFBhZ2UgIT09IHBhZ2UpIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50UGFnZSA9IHBhZ2U7XG5cdFx0XHR9XG5cdFx0fSxcblxuICAgICAgICBnZW5lcmF0ZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VzID0gW107XG4gICAgICAgICAgICBjb25zdCBzaG93UGFnZXMgPSB0aGlzLnNob3dQYWdlcyAlIDIgPyB0aGlzLnNob3dQYWdlcyArIDE6IHRoaXMuc2hvd1BhZ2VzO1xuXG4gICAgICAgICAgICBsZXQgc3RhcnRQYWdlID0gKHRoaXMuY3VycmVudFBhZ2UgPj0gc2hvd1BhZ2VzKSA/IHRoaXMuY3VycmVudFBhZ2UgLSAoc2hvd1BhZ2VzIC8gMikgOiAxO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRPZmZzZXQgPSBzaG93UGFnZXMgKyBzdGFydFBhZ2U7XG4gICAgICAgICAgICBjb25zdCBlbmRQYWdlID0gKHRoaXMudG90YWxQYWdlcyA8IHN0YXJ0T2Zmc2V0KSA/IHRoaXMudG90YWxQYWdlcyA6IHN0YXJ0T2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgZGlmZiA9IHN0YXJ0UGFnZSAtIGVuZFBhZ2UgKyBzaG93UGFnZXM7XG5cbiAgICAgICAgICAgIHN0YXJ0UGFnZSAtPSAoc3RhcnRQYWdlIC0gZGlmZiA+IDApID8gZGlmZiA6IDA7XG5cbiAgICAgICAgICAgIGlmIChzdGFydFBhZ2UgPiAxKSB7XG4gICAgICAgICAgICAgICAgcGFnZXMucHVzaCh7cGFnZTogMX0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihzdGFydFBhZ2UgPiAyKSB7XG4gICAgICAgICAgICAgICAgcGFnZXMucHVzaCh7ZGl2aWRlcjogdHJ1ZX0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSBzdGFydFBhZ2U7IGkgPCBlbmRQYWdlOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwYWdlcy5wdXNoKHtwYWdlOiBpfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbmRQYWdlIDw9IHRoaXMudG90YWxQYWdlcykge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMudG90YWxQYWdlcyAtIDEgPiBlbmRQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VzLnB1c2goe2RpdmlkZXI6IHRydWV9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwYWdlcy5wdXNoKHtwYWdlOiB0aGlzLnRvdGFsUGFnZXN9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhZ2VzO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICBwYWdlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2xhc3NlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSB7fTtcblxuICAgICAgICAgICAgY2xhc3Nlc1snanVzdGlmeS1jb250ZW50LScgKyB0aGlzLmFsaWduXSA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuICB7XG4gICAgICAgICAgICBjdXJyZW50UGFnZTogdGhpcy5wYWdlXG4gICAgICAgIH07XG4gICAgfVxuXG59O1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL1BhZ2luYXRpb24nO1xuaW1wb3J0IFZ1ZUluc3RhbGxlciBmcm9tICcuLi8uLi9IZWxwZXJzL1Z1ZUluc3RhbGxlci9WdWVJbnN0YWxsZXInO1xuXG5jb25zdCBwbHVnaW4gPSBWdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIFBhZ2luYXRpb25cbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxmb3JtLWdyb3VwPlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJsYWJlbFwiPlxuICAgICAgICAgICAgPGZvcm0tbGFiZWwgdi1pZj1cImxhYmVsXCIgOmZvcj1cImlkXCIgdi1odG1sPVwibGFiZWxcIi8+XG4gICAgICAgIDwvc2xvdD5cblxuICAgICAgICA8c2xvdCBuYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgIDppZD1cImlkXCJcbiAgICAgICAgICAgICAgICA6bmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIDp2YWx1ZT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICA6cmVxdWlyZWQ9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWQgfHwgcmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgIDpyZWFkb25seT1cInJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICA6cGF0dGVybj1cInBhdHRlcm5cIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIm1lcmdlQ2xhc3Nlcyhjb250cm9sQ2xhc3NlcywgY29sb3JhYmxlQ2xhc3NlcylcIlxuICAgICAgICAgICAgICAgIEBpbnB1dD1cIiRlbWl0KCdpbnB1dCcsICRldmVudC50YXJnZXQudmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgPHNsb3QgLz5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImhlbHBcIj5cbiAgICAgICAgICAgIDxoZWxwLXRleHQgdi1pZj1cImhlbHBUZXh0XCIgdi1odG1sPVwiaGVscFRleHRcIiAvPlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImZlZWRiYWNrXCI+XG4gICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwidmFsaWRGZWVkYmFja1wiIHYtaHRtbD1cInZhbGlkRmVlZGJhY2tcIiB2YWxpZCAvPlxuICAgICAgICAgICAgPGZvcm0tZmVlZGJhY2sgdi1pZj1cImludmFsaWRGZWVkYmFja1wiIHYtaHRtbD1cImludmFsaWRGZWVkYmFja1wiIGludmFsaWQgLz5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgPC9mb3JtLWdyb3VwPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IEhlbHBUZXh0IGZyb20gJy4uL0hlbHBUZXh0JztcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnLi4vRm9ybUdyb3VwJztcbmltcG9ydCBGb3JtTGFiZWwgZnJvbSAnLi4vRm9ybUxhYmVsJztcbmltcG9ydCBGb3JtRmVlZGJhY2sgZnJvbSAnLi4vRm9ybUZlZWRiYWNrJztcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnLi4vLi4vTWl4aW5zL0NvbG9yYWJsZSc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnLi4vLi4vTWl4aW5zL0Zvcm1Db250cm9sJztcbmltcG9ydCBNZXJnZUNsYXNzZXMgZnJvbSAnLi4vLi4vTWl4aW5zL01lcmdlQ2xhc3Nlcyc7XG5cbmNvbnN0IENVU1RPTV9TRUxFQ1RfUFJFRklYID0gJ2N1c3RvbS1zZWxlY3QtJ1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnc2VsZWN0LWZpZWxkJyxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgSGVscFRleHQsXG4gICAgICAgIEZvcm1Hcm91cCxcbiAgICAgICAgRm9ybUxhYmVsLFxuICAgICAgICBGb3JtRmVlZGJhY2tcbiAgICB9LFxuXG4gICAgZXh0ZW5kczogRm9ybUNvbnRyb2wsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgQ29sb3JhYmxlLFxuICAgICAgICBGb3JtQ29udHJvbCxcbiAgICAgICAgTWVyZ2VDbGFzc2VzXG4gICAgXSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBgY3VzdG9tLXNlbGVjdGAgdG8gdGhlIGZvcm0gY29udHJvbCBpZiB0cnVlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBjdXN0b206IEJvb2xlYW5cblxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIGNvbnRyb2xDbGFzcygpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xDbGFzcyA9IHRoaXMuY3VzdG9tID8gJ2N1c3RvbS1zZWxlY3QnIDogdGhpcy5kZWZhdWx0Q29udHJvbENsYXNzO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxhaW50ZXh0ID8gYCR7Y29udHJvbENsYXNzfS1wbGFpbnRleHRgIDogY29udHJvbENsYXNzO1xuICAgICAgICB9LFxuXG4gICAgICAgIGN1c3RvbVNlbGVjdENsYXNzZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIENVU1RPTV9TRUxFQ1RfUFJFRklYLnJlcGxhY2UoL1xcLSQvLCAnJykgKyAodGhpcy5wbGFpbnRleHQgPyAnLXBsYWludGV4dCcgOiAnJyksXG4gICAgICAgICAgICAgICAgdGhpcy5jdXN0b21TZWxlY3RTaXplQ2xhc3MsXG4gICAgICAgICAgICAgICAgKHRoaXMuc3BhY2luZyB8fCAnJylcbiAgICAgICAgICAgIF0uam9pbignICcpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG48L3NjcmlwdD5cbiIsImltcG9ydCBTZWxlY3RGaWVsZCBmcm9tICcuL1NlbGVjdEZpZWxkJztcbmltcG9ydCBWdWVJbnN0YWxsZXIgZnJvbSAnLi4vLi4vSGVscGVycy9WdWVJbnN0YWxsZXIvVnVlSW5zdGFsbGVyJztcblxuY29uc3QgcGx1Z2luID0gVnVlSW5zdGFsbGVyLnVzZSh7XG5cbiAgICBpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWVJbnN0YWxsZXIuY29tcG9uZW50cyh7XG4gICAgICAgICAgICBTZWxlY3RGaWVsZFxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RGaWVsZDtcbiIsIjxzY3JpcHQ+XG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCB7IGZpbmRJbmRleCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzVW5kZWZpbmVkIH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnc2xpZGVzJyxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBhY3RpdmUgc2xpZGUgaW5kZXggb3Iga2V5LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfE51bWJlcn1cbiAgICAgICAgICovXG5cbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcblxuICAgICAgICBhY3RpdmUodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RTbGlkZSA9IG9sZFZhbHVlO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50U2xpZGUgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBIVE1MIG5vZGVzIGZyb20gdGhlIGRlZmF1bHQgc2xvdHMgKGV4bHVkaW5nIGNoaWxkcmVuIHdpdGhvdXQgdGFncykuXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgc2xpZGVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHNsb3RzLmRlZmF1bHRcbiAgICAgICAgICAgICAgICAuZmlsdGVyKCh2bm9kZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gISF2bm9kZS50YWc7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKCh2bm9kZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZighdm5vZGUua2V5IHx8ICF2bm9kZS5kYXRhICYmICF2bm9kZS5kYXRhLmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm5vZGUuZGF0YSA9IGV4dGVuZCh2bm9kZS5kYXRhLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB2bm9kZS5rZXkgPSBpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2bm9kZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IGEgc2xpZGUgYnkgaW5kZXguXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4ge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgc2xpZGUoaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbmRTbGlkZUJ5S2V5KGluZGV4KSB8fCB0aGlzLmZpbmRTbGlkZUJ5SW5kZXgoaW5kZXgpIHx8IHRoaXMuZmluZFNsaWRlQnlJbmRleCgwKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRmluZCBhIHNsaWRlIGJ5IGEgZ2l2ZW4ga2V5IG9yIHJldHVybiBudWxsIGlmIG5vbiBmb3VuZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtICB7TnVtYmVyfFN0cmluZ30ga2V5XG4gICAgICAgICAqIEByZXR1cm4ge1ZOb2RlfG51bGx9XG4gICAgICAgICAqL1xuICAgICAgICBmaW5kU2xpZGVCeUtleShrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBmaXJzdCh0aGlzLnNsaWRlcygpLmZpbHRlcigodm5vZGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZih2bm9kZS5rZXkgPT09IGtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdm5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYodm5vZGUuZGF0YSAmJiB2bm9kZS5kYXRhLmtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2bm9kZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGaW5kIGEgc2xpZGUgYnkgYSBnaXZlbiBpbmRleCBvciByZXR1cm4gbnVsbCBpZiBub24gZm91bmQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSAge051bWJlcnxTdHJpbmd9IGtleVxuICAgICAgICAgKiBAcmV0dXJuIHtWTm9kZXxudWxsfVxuICAgICAgICAgKi9cbiAgICAgICAgZmluZFNsaWRlQnlJbmRleChpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2xpZGVzKClbaW5kZXhdIHx8IG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgc2xpZGUgaW5kZXggZm9yIGEgZ2l2ZSBzbGlkZSBvYmplY3Qgb3Iga2V5XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSAge051bWJlcnxTdHJpbmd9IHNsaWRlXG4gICAgICAgICAqIEByZXR1cm4ge1ZOb2RlfG51bGx9XG4gICAgICAgICAqL1xuICAgICAgICBnZXRTbGlkZUluZGV4KHNsaWRlKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSAhaXNVbmRlZmluZWQoc2xpZGUuZGF0YSkgPyBzbGlkZS5kYXRhLmtleSA6IHNsaWRlLmtleSB8fCBzbGlkZTtcblxuICAgICAgICAgICAgcmV0dXJuIGZpbmRJbmRleCh0aGlzLnNsaWRlcygpLCAodm5vZGUsIGkpID0+IHtcbiAgICAgICAgICAgICAgICBpZihzbGlkZSA9PT0gdm5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYodm5vZGUuZGF0YSAmJiB2bm9kZS5kYXRhLmtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmKHZub2RlLmtleSAmJiB2bm9kZS5rZXkgPT09IGtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihpID09PSBzbGlkZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsYXN0U2xpZGU6IG51bGwsXG4gICAgICAgICAgICBjdXJyZW50U2xpZGU6IHRoaXMuYWN0aXZlXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmVuZGVyKGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2xpZGUodGhpcy5jdXJyZW50U2xpZGUpO1xuICAgIH1cblxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDwhLS0gVE9ETzogQWRkIHRvb2x0aXAgd2l0aCBzbGlkZSBuYW1lL2tleSB0byB0aGUgY29udHJvbCBvbmNlIHRoZSB0b29sdGlwIGRpcmVjdGl2ZSBoYXMgYmVlbiB3cml0dGVuLiAtLT5cbiAgICA8ZGl2IGNsYXNzPVwic2xpZGUtZGVjay1jb250cm9sc1wiPlxuICAgICAgICA8YSB2LWZvcj1cInNsaWRlIGluIHNsaWRlc1wiIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCJvbkNsaWNrKCRldmVudCwgc2xpZGUpXCIgY2xhc3M9XCJzbGlkZS1kZWNrLWNvbnRyb2wtaWNvblwiIDpjbGFzcz1cInsnaXMtYWN0aXZlJzogKHNsaWRlLmRhdGEgPyBzbGlkZS5kYXRhLmtleSA6IHNsaWRlLmtleSkgPT09IGFjdGl2ZX1cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtY2lyY2xlXCIvPlxuICAgICAgICA8L2E+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ3NsaWRlLWRlY2stY29udHJvbHMnLFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHNsaWRlIGtleSBvciBpbmRleCB0aGF0IHNob3VsZCBzaG93LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBhcnJheSBvZiBzbGlkZSB2bm9kZXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge051bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIHNsaWRlczoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAgIG9uQ2xpY2soZXZlbnQsIHNsaWRlKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGV2ZW50LCBzbGlkZSlcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG5cbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgfVxuXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCAnLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zLnNjc3MnO1xuQGltcG9ydCAnLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xuXG4uc2xpZGUtZGVjay1jb250cm9scyB7XG4gICAgLnNsaWRlLWRlY2stY29udHJvbC1pY29uIHtcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XG5cbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogJGZvbnQtc2l6ZS1iYXNlIC8gMjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zbGlkZS1kZWNrLWNvbnRyb2wtaWNvbi5pcy1hY3RpdmUge1xuICAgICAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwic2xpZGUtZGVja1wiIDpjbGFzcz1cInsnc2xpZGUtZGVjay1mbGV4JzogY2VudGVyfVwiPlxuICAgICAgICA8ZGl2IHJlZj1cImNvbnRlbnRcIiBjbGFzcz1cInNsaWRlLWRlY2stY29udGVudFwiIDpzdHlsZT1cInt3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0fVwiPlxuICAgICAgICAgICAgPGtlZXAtYWxpdmU+XG4gICAgICAgICAgICAgICAgPHRyYW5zaXRpb25cbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJgc2xpZGUtJHtkaXJlY3Rpb259YFwiXG4gICAgICAgICAgICAgICAgICAgIEBhZnRlci1lbnRlcj1cIm9uU2xpZGVBZnRlckVudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgQGJlZm9yZS1lbnRlcj1cIm9uU2xpZGVCZWZvcmVFbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIEBlbnRlcj1cIm9uU2xpZGVFbnRlclwiXG4gICAgICAgICAgICAgICAgICAgIEBhZnRlci1sZWF2ZT1cIm9uU2xpZGVBZnRlckxlYXZlXCJcbiAgICAgICAgICAgICAgICAgICAgQGJlZm9yZS1sZWF2ZT1cIm9uU2xpZGVCZWZvcmVMZWF2ZVwiXG4gICAgICAgICAgICAgICAgICAgIEBsZWF2ZT1cIm9uU2xpZGVMZWF2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c2xpZGVzIHJlZj1cInNsaWRlc1wiIDprZXk9XCJjdXJyZW50U2xpZGVcIiA6YWN0aXZlPVwiY3VycmVudFNsaWRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2xvdC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc2xpZGVzPlxuICAgICAgICAgICAgICAgIDwvdHJhbnNpdGlvbj5cbiAgICAgICAgICAgIDwva2VlcC1hbGl2ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzbG90IG5hbWU9XCJjb250cm9sc1wiPlxuICAgICAgICAgICAgPHNsaWRlLWRlY2stY29udHJvbHMgdi1pZj1cImNvbnRyb2xzXCIgcmVmPVwiY29udHJvbHNcIiA6c2xpZGVzPVwic2xpZGVzKClcIiA6YWN0aXZlPVwiY3VycmVudFNsaWRlXCIgQGNsaWNrPVwib25DbGlja0NvbnRyb2xcIiAvPlxuICAgICAgICA8L3Nsb3Q+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCB1bml0IGZyb20gJy4uLy4uL0hlbHBlcnMvVW5pdCc7XG5pbXBvcnQgdHJhbnNpdGlvbiBmcm9tICcuLi8uLi9IZWxwZXJzL1RyYW5zaXRpb24nO1xuaW1wb3J0IFNsaWRlcyBmcm9tICcuL1NsaWRlcyc7XG5pbXBvcnQgU2xpZGVEZWNrQ29udHJvbHMgZnJvbSAnLi9TbGlkZURlY2tDb250cm9scyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdzbGlkZS1kZWNrJyxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgU2xpZGVzLFxuICAgICAgICBTbGlkZURlY2tDb250cm9sc1xuICAgIH0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2xpZGUga2V5IG9yIGluZGV4IHRoYXQgc2hvdWxkIHNob3cuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmU6IHtcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgICAgICBkZWZhdWx0OiAwXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENlbnRlciB0aGUgc2xpZGUtZGVjay5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgQm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgY2VudGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG93IHRoZSBzbGlkZS1kZWNrIGNvbnRyb2xzIHRvIGNoYW5nZSB0aGUgc2xpZGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGNvbnRyb2xzOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBGbGV4IHRoZSBjb250ZW50IHdpdGhpbiB0aGUgcG9wb3Zlci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgQm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgZmxleDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2l2ZSBhIHNlbGVjdG9yIG9yIEVsZW1lbnQgdG8gdXNlIGFwcGx5IGEgaGlkZGVuIG92ZXJmbG93LiBJZiBmYWxzZSxcbiAgICAgICAgICogbm8gb3ZlcmZsb3cgd2lsbCBiZSBhcHBsaWVkLiBEZWZhdWx0cyB0byB0aGUgc2xpZGUgZGVjaydzIGNvbnRhaW5lci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge1N0cmluZ3xFbGVtZW50fEJvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBvdmVyZmxvdzoge1xuICAgICAgICAgICAgdHlwZTogW09iamVjdCwgU3RyaW5nLCBFbGVtZW50LCBCb29sZWFuXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1vZGUgZGV0ZXJtaW5lcyBob3cgdGhlIHBvcG92ZXIgY29udGVudCB3aWxsIGZsZXggYmFzZWQgb24gdGhlXG4gICAgICAgICAqIHZhcnlpbmcgaGVpZ2h0cyBvZiB0aGUgc2xpZGVzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICByZXNpemVNb2RlOiB7XG4gICAgICAgICAgICB0eXBlOiBbRnVuY3Rpb24sIEJvb2xlYW4sIFN0cmluZ10sXG4gICAgICAgICAgICBkZWZhdWx0OiAnYXV0bycsXG4gICAgICAgICAgICB2YWxpZGF0ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbJ2F1dG8nLCAnaW5pdGlhbCcsICdpbmhlcml0J10uaW5kZXhPZih2YWx1ZSkgIT09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuXG4gICAgICAgIGFjdGl2ZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdFNsaWRlID0gb2xkVmFsdWU7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IHZhbHVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGN1cnJlbnRTbGlkZSh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy4kcmVmcy5zbGlkZXMuZ2V0U2xpZGVJbmRleChvbGRWYWx1ZSkgPiB0aGlzLiRyZWZzLnNsaWRlcy5nZXRTbGlkZUluZGV4KHZhbHVlKSA/ICdiYWNrd2FyZCcgOiAnZm9yd2FyZCc7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgcmVzaXplKGVsKSB7XG4gICAgICAgICAgICBpZihpc0Z1bmN0aW9uKHRoaXMucmVzaXplTW9kZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZU1vZGUuY2FsbCh0aGlzLCBlbCB8fCB0aGlzLiRlbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuXG4gICAgICAgICAgICAgICAgaWYoIWVsLnN0eWxlLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLndpZHRoID0gZWwuc3R5bGUud2lkdGggPSBgY2FsYygke3N0eWxlLndpZHRofSArICR7c3R5bGUubWFyZ2luTGVmdH0gKyAke3N0eWxlLm1hcmdpblJpZ2h0fSlgO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKCFlbC5zdHlsZS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwuaGVpZ2h0ID0gZWwuc3R5bGUuaGVpZ2h0ID0gYGNhbGMoJHtzdHlsZS5oZWlnaHR9ICsgJHtzdHlsZS5tYXJnaW5Ub3B9ICsgJHtzdHlsZS5tYXJnaW5Cb3R0b219KWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHNsaWRlKGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kcmVmcy5zbGlkZXMgPyB0aGlzLiRyZWZzLnNsaWRlcy5zbGlkZShpbmRleCB8fCB0aGlzLmFjdGl2ZSkgOiBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNsaWRlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRyZWZzLnNsaWRlcyA/IHRoaXMuJHJlZnMuc2xpZGVzLnNsaWRlcygpIDogW107XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25DbGlja0NvbnRyb2woZXZlbnQsIHZub2RlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IHZub2RlLmRhdGEgPyB2bm9kZS5kYXRhLmtleSA6IHZub2RlLmtleTtcbiAgICAgICAgfSxcblxuICAgICAgICBvblNsaWRlQWZ0ZXJFbnRlcihlbCkge1xuICAgICAgICAgICAgaWYoZWwud2lkdGgpIHtcbiAgICAgICAgICAgICAgICBlbC53aWR0aCA9IGVsLnN0eWxlLndpZHRoID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoZWwuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgZWwuaGVpZ2h0ID0gZWwuc3R5bGUuaGVpZ2h0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy53aWR0aCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KFxuICAgICAgICAgICAgICAgICdhZnRlci1lbnRlcicsIHRoaXMuJHJlZnMuc2xpZGVzLnNsaWRlKHRoaXMuY3VycmVudFNsaWRlKSwgdGhpcy4kcmVmcy5zbGlkZXMuc2xpZGUodGhpcy5sYXN0U2xpZGUpXG4gICAgICAgICAgICApO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9uU2xpZGVCZWZvcmVFbnRlcihlbCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdChcbiAgICAgICAgICAgICAgICAnYmVmb3JlLWVudGVyJywgdGhpcy4kcmVmcy5zbGlkZXMuc2xpZGUodGhpcy5jdXJyZW50U2xpZGUpLCB0aGlzLiRyZWZzLnNsaWRlcy5zbGlkZSh0aGlzLmxhc3RTbGlkZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25TbGlkZUVudGVyKGVsLCBkb25lKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZShlbCk7XG4gICAgICAgICAgICB0aGlzLndpZHRoID0gZWwuc3R5bGUud2lkdGg7XG4gICAgICAgICAgICB0aGlzLmhlaWdodCA9IGVsLnN0eWxlLmhlaWdodDtcblxuICAgICAgICAgICAgdHJhbnNpdGlvbihlbCkudGhlbihkZWxheSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soZG9uZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy4kZW1pdChcbiAgICAgICAgICAgICAgICAnZW50ZXInLCB0aGlzLiRyZWZzLnNsaWRlcy5zbGlkZSh0aGlzLmN1cnJlbnRTbGlkZSksIHRoaXMuJHJlZnMuc2xpZGVzLnNsaWRlKHRoaXMubGFzdFNsaWRlKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSxcblxuICAgICAgICBvblNsaWRlQWZ0ZXJMZWF2ZShlbCkge1xuICAgICAgICAgICAgaWYoZWwud2lkdGgpIHtcbiAgICAgICAgICAgICAgICBlbC53aWR0aCA9IGVsLnN0eWxlLndpZHRoID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoZWwuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgZWwuaGVpZ2h0ID0gZWwuc3R5bGUuaGVpZ2h0ID0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXG4gICAgICAgICAgICAgICAgICAgICdhZnRlci1sZWF2ZScsIHRoaXMuJHJlZnMuc2xpZGVzLnNsaWRlKHRoaXMubGFzdFNsaWRlKSwgdGhpcy4kcmVmcy5zbGlkZXMuc2xpZGUodGhpcy5jdXJyZW50U2xpZGUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9uU2xpZGVCZWZvcmVMZWF2ZShlbCkge1xuICAgICAgICAgICAgdGhpcy5yZXNpemUoZWwpO1xuICAgICAgICAgICAgdGhpcy4kZW1pdChcbiAgICAgICAgICAgICAgICAnYmVmb3JlLWxlYXZlJywgdGhpcy4kcmVmcy5zbGlkZXMuc2xpZGUodGhpcy5sYXN0U2xpZGUpLCB0aGlzLiRyZWZzLnNsaWRlcy5zbGlkZSh0aGlzLmN1cnJlbnRTbGlkZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25TbGlkZUxlYXZlKGVsLCBkb25lKSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uKGVsKS50aGVuKGRlbGF5ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRuZXh0VGljayhkb25lKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLiRlbWl0KFxuICAgICAgICAgICAgICAgICdsZWF2ZScsIHRoaXMuJHJlZnMuc2xpZGVzLnNsaWRlKHRoaXMubGFzdFNsaWRlKSwgdGhpcy4kcmVmcy5zbGlkZXMuc2xpZGUodGhpcy5jdXJyZW50U2xpZGUpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICBvdmVyZmxvd0VsZW1lbnQoKSB7XG4gICAgICAgICAgICBpZih0aGlzLm92ZXJmbG93ID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLm92ZXJmbG93IGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm92ZXJmbG93O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLm92ZXJmbG93ICYmIHRoaXMub3ZlcmZsb3cuZWxtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3ZlcmZsb3cuZWxtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLm92ZXJmbG93KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5vdmVyZmxvdylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbm9kZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc2xvdHMuZGVmYXVsdDtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGlmKHRoaXMub3ZlcmZsb3dFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLm92ZXJmbG93RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZWlnaHQ6IG51bGwsXG4gICAgICAgICAgICB3aWR0aDogbnVsbCxcbiAgICAgICAgICAgIGxhc3RTbGlkZTogbnVsbCxcbiAgICAgICAgICAgIGN1cnJlbnRTbGlkZTogdGhpcy5hY3RpdmUsXG4gICAgICAgICAgICBkaXJlY3Rpb246ICdmb3J3YXJkJ1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLnNsaWRlLWRlY2sge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmLnNsaWRlLWRlY2stZmxleCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIC5zbGlkZS1kZWNrLWNvbnRlbnQge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zbGlkZS1kZWNrLWNvbnRlbnQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMzMzcyBlYXNlO1xuICAgIH1cblxuICAgIC8qXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICovXG5cbiAgICAuc2xpZGUtZGVjay1jb250cm9scyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBib3R0b206IDFyZW07XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB9XG5cbiAgICAuc2xpZGUtZm9yd2FyZC1lbnRlci1hY3RpdmUsXG4gICAgLnNsaWRlLWZvcndhcmQtbGVhdmUtYWN0aXZlLFxuICAgIC5zbGlkZS1iYWNrd2FyZC1lbnRlci1hY3RpdmUsXG4gICAgLnNsaWRlLWJhY2t3YXJkLWxlYXZlLWFjdGl2ZSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuMzMzcyBlYXNlLW91dDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgfVxuXG4gICAgLnNsaWRlLWZvcndhcmQtZW50ZXItYWN0aXZlLFxuICAgIC5zbGlkZS1iYWNrd2FyZC1lbnRlci1hY3RpdmUge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjMzM3MgZWFzZS1vdXQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5zbGlkZS1mb3J3YXJkLWVudGVyLWFjdGl2ZSB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLnNsaWRlLWJhY2t3YXJkLWVudGVyLWFjdGl2ZSB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cblxuICAgIC5zbGlkZS1mb3J3YXJkLWVudGVyLWFjdGl2ZSxcbiAgICAuc2xpZGUtYmFja3dhcmQtbGVhdmUtdG8ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTE1JSk7XG4gICAgfVxuXG4gICAgLnNsaWRlLWZvcndhcmQtbGVhdmUtdG8sXG4gICAgLnNsaWRlLWJhY2t3YXJkLWVudGVyLWFjdGl2ZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTE1JSk7XG4gICAgfVxuXG4gICAgLnNsaWRlLWZvcndhcmQtZW50ZXItdG8sXG4gICAgLnNsaWRlLWJhY2t3YXJkLWVudGVyLXRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIH1cblxufVxuPC9zdHlsZT5cbiIsImltcG9ydCBTbGlkZXMgZnJvbSAnLi9TbGlkZXMnO1xuaW1wb3J0IFNsaWRlRGVjayBmcm9tICcuL1NsaWRlRGVjayc7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJy4uLy4uL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgU2xpZGVzLFxuICAgICAgICAgICAgU2xpZGVEZWNrXG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFNsaWRlRGVjaztcbiIsIjx0ZW1wbGF0ZT5cblxuXHQ8dGggc2NvcGU9XCJjb2xcIj5cblx0ICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaWQgJiYgcmVxdWVzdFwiPlxuXHRcdFx0PGEgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwic29ydFwiXG4gICAgICAgICAgICAgICAgOmRhdGEtaWQ9XCJpZFwiXG4gICAgICAgICAgICAgICAgQGNsaWNrLnByZXZlbnQ9XCIkZW1pdCgnb3JkZXInLCBpZClcIj5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIiEkc2xvdHMuZGVmYXVsdFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBsYWJlbCB8fCBuYW1lIHx8IGlkIH19XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8c2xvdC8+XG4gICAgICAgICAgICA8L2E+XG5cdFx0XHQ8aSB2LWlmPVwicmVxdWVzdC5wYXJhbXMub3JkZXIgPT09IGlkICYmIHJlcXVlc3QucGFyYW1zLnNvcnQgPT09ICdhc2MnXCIgY2xhc3M9XCJzb3J0LWljb24gZmEgZmEtc29ydC1hc2NcIi8+XG5cdFx0XHQ8aSB2LWlmPVwicmVxdWVzdC5wYXJhbXMub3JkZXIgPT09IGlkICYmIHJlcXVlc3QucGFyYW1zLnNvcnQgPT09ICdkZXNjJ1wiIGNsYXNzPVwic29ydC1pY29uIGZhIGZhLXNvcnQtZGVzY1wiLz5cblx0XHQ8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCIhJHNsb3RzLmRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICB7eyBsYWJlbCB8fCBuYW1lIHx8IGlkIH19XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHNsb3QvPlxuICAgICAgICA8L3RlbXBsYXRlPlxuXHQ8L3RoPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAndGFibGUtdmlldy1oZWFkZXInLFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICBpZDogW051bWJlciwgU3RyaW5nXSxcblxuICAgICAgICBsYWJlbDogW051bWJlciwgU3RyaW5nXSxcblxuICAgICAgICBuYW1lOiBbTnVtYmVyLCBTdHJpbmddLFxuXG4gICAgICAgIHJlcXVlc3Q6IE9iamVjdFxuXG4gICAgfVxuXG59XG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPHRhYmxlIGNsYXNzPVwidGFibGVcIiA6Y2xhc3M9XCJ7J3RhYmxlLWhvdmVyJzogaG92ZXIgJiYgIWxvYWRpbmcgJiYgZGF0YS5sZW5ndGh9XCI+XG5cbiAgICAgICAgPHRoZWFkIHNsb3Q9XCJ0aGVhZFwiPlxuICAgICAgICAgICAgPHRyIHYtaWY9XCJjb2x1bW5zLmxlbmd0aCB8fCAkc2xvdHMuY29sdW1uc1wiIHNsb3Q9XCJjb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlLXZpZXctaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKGNvbHVtbiwga2V5KSBpbiB0YWJsZUNvbHVtbnNcIlxuICAgICAgICAgICAgICAgICAgICB2LWJpbmQ9XCJjb2x1bW4ucHJvcHMgfHwgY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgdi1vbj1cImNvbHVtbi5ldmVudHNcIlxuICAgICAgICAgICAgICAgICAgICA6cmVxdWVzdD1cInJlcXVlc3RcIlxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwia2V5XCJcbiAgICAgICAgICAgICAgICAgICAgQG9yZGVyPVwiaWQgPT4gJGVtaXQoJ29yZGVyJywgaWQpXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cblxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICA8dHIgdi1pZj1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICA8dGQgOmNvbHNwYW49XCJ0YWJsZUNvbHVtbnMubGVuZ3RoXCIgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiIDpzdHlsZT1cInsnaGVpZ2h0JzogaGVpZ2h0KG1pbkhlaWdodCl9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhY3Rpdml0eS1pbmRpY2F0b3IgOmNlbnRlcj1cInRydWVcIj48L2FjdGl2aXR5LWluZGljYXRvcj5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgPHRyIHYtZWxzZS1pZj1cIiFkYXRhLmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgIDx0ZCA6Y29sc3Bhbj1cInRhYmxlQ29sdW1ucy5sZW5ndGhcIiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhbGVydCB2YXJpYW50PVwid2FybmluZ1wiIGNsYXNzPVwibXktM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS13YXJuaW5nXCIvPiBUaGVyZSBhcmUgbm8gcmVzdWx0cyBmb3VuZC5cbiAgICAgICAgICAgICAgICAgICAgPC9hbGVydD5cbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cblxuICAgICAgICAgICAgPHNsb3Qgdi1lbHNlIDpkYXRhPVwiZGF0YVwiIDpjb2x1bW5zPVwidGFibGVDb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwiKHJvdywgaSkgaW4gZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQgdi1mb3I9XCJjb2x1bW4gaW4gdGFibGVDb2x1bW5zXCIgdi1odG1sPVwicm93W2NvbHVtbi5pZF0gfHwgcm93W2NvbHVtbi5uYW1lXVwiPjwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgPC90Ym9keT5cblxuICAgICAgICA8c2xvdCBuYW1lPVwidGZvb3RcIj5cbiAgICAgICAgICAgIDx0Zm9vdCB2LWlmPVwicGFnaW5hdGUgJiYgcmVzcG9uc2VcIj5cbiAgICAgICAgICAgICAgICA8dGQgOmNvbHNwYW49XCJ0YWJsZUNvbHVtbnMubGVuZ3RoIHx8IDFcIiBjbGFzcz1cInRhYmxlLXZpZXctZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJwYWdpbmF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cGFnaW5hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGFnZT1cInJlc3BvbnNlLmN1cnJlbnRfcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRvdGFsLXBhZ2VzPVwicmVzcG9uc2UubGFzdF9wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAcGFnaW5hdGU9XCIkZW1pdCgncGFnaW5hdGUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdGZvb3Q+XG4gICAgICAgIDwvc2xvdD5cblxuICAgIDwvdGFibGU+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQWxlcnQgZnJvbSAnLi4vQWxlcnQnO1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IHVuaXQgZnJvbSAnLi4vLi4vSGVscGVycy9Vbml0JztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL1BhZ2luYXRpb24nO1xuaW1wb3J0IFRhYmxlVmlld0hlYWRlciBmcm9tICcuL1RhYmxlVmlld0hlYWRlcic7XG5pbXBvcnQgQWN0aXZpdHlJbmRpY2F0b3IgZnJvbSAnLi4vQWN0aXZpdHlJbmRpY2F0b3InO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEFsZXJ0LFxuICAgICAgICBQYWdpbmF0aW9uLFxuICAgICAgICBUYWJsZVZpZXdIZWFkZXIsXG4gICAgICAgIEFjdGl2aXR5SW5kaWNhdG9yXG4gICAgfSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLy8gKGFycmF5KSBBbiBhcnJheSBvZiB0YWJsZSBjb2x1bW5cbiAgICAgICAgLy8gW3tpZDogJ2RhdGFiYXNlX2lkJywgbmFtZTogJ0RhdGFiYXNlIGlkJywgd2lkdGg6ICcyMCUnfV1cbiAgICAgICAgY29sdW1uczoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7IHJldHVybiBbXTsgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvLyAoc3RyaW5nKSBBZGQgdGFibGUtaG92ZXIgdG8gdGhlIHRhYmxlIGVsZW1lbnRcbiAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgbG9hZGluZzogQm9vbGVhbixcblxuICAgICAgICAvLyAoaW50ZWdlcikgVGhlIG1pbmltdW0gaGVpZ2h0IG9mIHRoZSByb3cgd2hlbiBsb2FkaW5nIGRhdGFcbiAgICAgICAgbWluSGVpZ2h0OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiA0MDBcbiAgICAgICAgfSxcblxuICAgICAgICAvLyAoYm9vbCkgU2hvdWxkIHNob3cgdGhlIHBhZ2luYXRpb24gZm9yIHRoaXMgdGFibGVcbiAgICAgICAgcGFnaW5hdGU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgaGVpZ2h0KG1pbikge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBbXG4gICAgICAgICAgICAgICAgLy8gdGhpcy4kZWwucXVlcnlTZWxlY3RvcigndGhlYWQnKSxcbiAgICAgICAgICAgICAgICB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCd0Ym9keScpXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBsZXQgaGVpZ2h0ID0gMDtcblxuICAgICAgICAgICAgZWFjaChlbGVtZW50cywgZWwgPT4ge1xuICAgICAgICAgICAgICAgIGhlaWdodCArPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHVuaXQoTWF0aC5tYXgobWluLCBoZWlnaHQpKTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHRhYmxlQ29sdW1ucygpIHtcbiAgICAgICAgICAgIGxldCBjb2x1bW5zID0gdGhpcy5jb2x1bW5zO1xuXG4gICAgICAgICAgICBpZighY29sdW1ucyB8fCAhY29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW5zID0gT2JqZWN0LmtleXModGhpcy5kYXRhWzBdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnMubWFwKGNvbHVtbiA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGlzT2JqZWN0KGNvbHVtbikgPyBjb2x1bW4gOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGNvbHVtblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG48L3NjcmlwdD5cbiIsImltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zZm9ybWVyIHtcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgdGhlIHRyYW5zZm9ybWVyIGluc3RhbmNlIHVzaW5nIGFuIEhUVFAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgb2JqZWN0XG4gICAgICogQHJldHVybiB2b2lkXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVzcG9uc2UpIHtcbiAgICAgICAgaWYoIWlzT2JqZWN0KHRoaXMuJG9yaWdpbmFsUmVzcG9uc2UgPSByZXNwb25zZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHRyYW5zZm9ybWVyIG11c3QgYmUgaW5zdGFudGlhdGVkIHdpdGggYSByZXNwb25zZSBvYmplY3QuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighaXNBcnJheSh0aGlzLiRyZXF1aXJlZCA9IHRoaXMucmVxdWlyZWQoKSkgfHwgIXRoaXMuJHJlcXVpcmVkLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIHRyYW5zZm9ybWVyIG11c3QgaGF2ZSBhdCBsZWFzdCBvbmUgcmVxdWlyZWQgcHJvcGVydHkuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiR0cmFuc2Zvcm1lZFJlc3BvbnNlID0gdGhpcy50cmFuc2Zvcm0ocmVzcG9uc2UpO1xuICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEEgbWV0aG9kIHRvIG92ZXJyaWRlIHRvIHBlcmZvcm0gbG9naWMgdG8gZmluaXNoZWQgaW5pdGlhbGl6aW5nLlxuICAgICAqXG4gICAgICogQHJldHVybiB2b2lkXG4gICAgICovXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmUgYW4gYXJyYXkgb2YgcmVxdWlyZWQgcHJvcGVydGllcyB3aXRoIGF0IGxlYXN0IG9uZSB2YWx1ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAqL1xuICAgIHJlcXVpcmVkKCkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyYW5mb3JtIHRoZSByZXNwb25zZSBvYmplY3RcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgKi9cbiAgICB0cmFuc2Zvcm0ocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgdHJhbmZvcm1lZCByZXNwb25zZVxuICAgICAqXG4gICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAqL1xuICAgIHJlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdHJhbnNmb3JtZWRSZXNwb25zZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSB0aGUgdHJhbmZvcm1lZCByZXNwb25zZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAqL1xuICAgIHZhbGlkYXRlKCkge1xuICAgICAgICBpZighaXNPYmplY3QodGhpcy4kdHJhbnNmb3JtZWRSZXNwb25zZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHRyYW5zZm9ybWVkIHJlc3BvbnNlIG11c3QgYmUgYW4gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWFjaCh0aGlzLiRyZXF1aXJlZCwga2V5ID0+IHtcbiAgICAgICAgICAgIGlmKCEoa2V5IGluIHRoaXMuJHRyYW5zZm9ybWVkUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBcIiR7a2V5fVwiIGlzIGEgcmVxdWlyZWQgcHJvcGVydHkgYW5kIGRvZXMgbm90IGV4aXN0IGluIHRoZSB0cmFuZm9ybWVkIHJlc3BvbnNlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgVHJhbnNmb3JtZXIgZnJvbSAnLi4vVHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJsZVZpZXdUcmFuc2Zvcm1lciBleHRlbmRzIFRyYW5zZm9ybWVyIHtcblxuICAgIHJlcXVpcmVkKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgLy8gVGhlIGVuZCBvZiB0aGUgY291bnQgb2YgdGhlIHBhZ2luYXRlZCBsaXN0LlxuICAgICAgICAgICAgJ3RvJyxcblxuICAgICAgICAgICAgLy8gVGhlIHN0YXJ0IG9mIHRoZSBjb3VudCBvZiB0aGUgcGFnaW5hdGVkIGxpc3QuXG4gICAgICAgICAgICAnZnJvbScsXG5cbiAgICAgICAgICAgIC8vIFRoZSB0b3RhbCBudW1iZXIgb2YgaXRlbXMgKG5vdCBqdXN0IGluY2x1ZGVkIGluIHRoZSBwYWdpbmF0aW9uKVxuICAgICAgICAgICAgJ3RvdGFsJyxcblxuICAgICAgICAgICAgLy8gVGhlIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZVxuICAgICAgICAgICAgJ3Blcl9wYWdlJyxcblxuICAgICAgICAgICAgLy8gVGhlIGxhc3QgcGFnZSBudW1iZXIgKG9yIHRvdGFsIHBhZ2VzKVxuICAgICAgICAgICAgJ2xhc3RfcGFnZScsXG5cbiAgICAgICAgICAgIC8vIFRoZSBjdXJyZW50IHBhZ2UgbnVtYmVyXG4gICAgICAgICAgICAnY3VycmVudF9wYWdlJyxcblxuICAgICAgICAgICAgLy8gVGhlIGFjdHVhbCByZXNwb25zZSBkYXRhIHRvIGFwcGVhciBpbiB0aGUgdGFibGVcbiAgICAgICAgICAgICdkYXRhJ1xuICAgICAgICBdO1xuICAgIH1cblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR0cmFuc2Zvcm1lZFJlc3BvbnNlLmRhdGE7XG4gICAgfVxuXG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYoIWlzQXJyYXkodGhpcy5kYXRhKCkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBkYXRhIHByb3BlcnR5IG11c3QgYmUgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS12aWV3XCI+XG5cbiAgICAgICAgPGRpdiB2LWlmPVwiaGVhZGluZyB8fCBkZXNjcmlwdGlvbiB8fCAkc2xvdHMuYnV0dG9uc1wiIGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImhlYWRpbmdcIj48aDIgdi1pZj1cImhlYWRpbmdcIiB2LWh0bWw9XCJoZWFkaW5nXCIvPjwvc2xvdD5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJkZXNjcmlwdGlvblwiPjxwIHYtaWY9XCJkZXNjcmlwdGlvblwiIHYtaHRtbD1cImRlc2NyaXB0aW9uXCIvPjwvc2xvdD5cblxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiJHNsb3RzLmJ1dHRvbnNcIiBjbGFzcz1cIm1sLWF1dG8gbXktM1wiPlxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJidXR0b25zXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxjYXJkIHYtaWY9XCJjYXJkXCI+XG4gICAgICAgICAgICA8ZGF0YS10YWJsZVxuICAgICAgICAgICAgICAgIDpjb2x1bW5zPVwiY29sdW1uc1wiXG4gICAgICAgICAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgICAgICAgICA6aG92ZXI9XCJob3ZlclwiXG4gICAgICAgICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgICAgICA6bWluLWhlaWdodD1cIm1pbkhlaWdodFwiXG4gICAgICAgICAgICAgICAgOnBhZ2luYXRlPVwicGFnaW5hdGVcIlxuICAgICAgICAgICAgICAgIEBwYWdpbmF0ZT1cIm9uUGFnaW5hdGVcIlxuICAgICAgICAgICAgICAgIEBvcmRlcj1cImlkID0+IG9yZGVyQnkoaWQpXCI+XG4gICAgICAgICAgICAgICAgPHNsb3QgOmRhdGE9XCJkYXRhXCIgOmNvbHVtbnM9XCJjb2x1bW5zXCIvPlxuICAgICAgICAgICAgPC9kYXRhLXRhYmxlLz5cbiAgICAgICAgPC9jYXJkPlxuICAgICAgICA8ZGF0YS10YWJsZVxuICAgICAgICAgICAgdi1lbHNlXG4gICAgICAgICAgICA6Y29sdW1ucz1cImNvbHVtbnNcIlxuICAgICAgICAgICAgOmRhdGE9XCJkYXRhXCJcbiAgICAgICAgICAgIDpob3Zlcj1cImhvdmVyXCJcbiAgICAgICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXG4gICAgICAgICAgICA6bWluLWhlaWdodD1cIm1pbkhlaWdodFwiXG4gICAgICAgICAgICA6cGFnaW5hdGU9XCJwYWdpbmF0ZVwiXG4gICAgICAgICAgICBAcGFnaW5hdGU9XCJvblBhZ2luYXRlXCJcbiAgICAgICAgICAgIEBvcmRlcj1cImlkID0+IG9yZGVyQnkoaWQpXCI+XG4gICAgICAgICAgICA8c2xvdCA6ZGF0YT1cImRhdGFcIiA6Y29sdW1ucz1cImNvbHVtbnNcIi8+XG4gICAgICAgIDwvZGF0YS10YWJsZS8+XG5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBDYXJkIGZyb20gJy4uL0NhcmQnO1xuaW1wb3J0IERhdGFUYWJsZSBmcm9tICcuL1RhYmxlJztcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCBQcm94eSBmcm9tICcuLi8uLi9NaXhpbnMvUHJveHknO1xuaW1wb3J0IFJlcXVlc3QgZnJvbSAnLi4vLi4vSHR0cC9SZXF1ZXN0JztcbmltcG9ydCBUYWJsZVZpZXdIZWFkZXIgZnJvbSAnLi9UYWJsZVZpZXdIZWFkZXInO1xuaW1wb3J0IFRhYmxlVmlld1RyYW5zZm9ybWVyIGZyb20gJy4uLy4uL0h0dHAvVGFibGVWaWV3VHJhbnNmb3JtZXInO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ3RhYmxlLXZpZXcnLFxuXG4gICAgbWl4aW5zOiBbUHJveHldLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBDYXJkLFxuICAgICAgICBEYXRhVGFibGUsXG4gICAgICAgIFRhYmxlVmlld0hlYWRlclxuICAgIH0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8vIChib29sZWFuKSBTaG93IHRoZSB0YWJsZSBpbiBhIGNhcmQuXG4gICAgICAgIGNhcmQ6IEJvb2xlYW4sXG5cbiAgICAgICAgLy8gKHN0cmluZykgQSByZWxhdGl2ZSBvciBhYnNvbHV0ZSBlbmRwb2ludCBVUkwgdXNlZCB0byBmZXRjaCBkYXRhXG4gICAgICAgIHVybDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvLyAoaW50ZWdlcikgVGhlIHN0YXJ0aW5nIHBhZ2Ugb2YgdGhlIHRhYmxlXG4gICAgICAgIHBhZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDFcbiAgICAgICAgfSxcblxuICAgICAgICAvLyAoaW50ZWdlcikgVGhlIHRvdGFsIG51bWJlciBvZiByZXN1bHRzIHBlciBwYWdlXG4gICAgICAgIGxpbWl0OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAyMFxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIChzdHJpbmcpIFRoZSBjb2x1bW4gdXNlZCB0byBvcmRlciB0aGUgZGF0YVxuICAgICAgICBvcmRlcjogU3RyaW5nLFxuXG4gICAgICAgIC8vIChzdHJpbmcpIFRoZSBzb3J0IGRpcmVjdGlvbiAoYXNjfGRlc2MpXG4gICAgICAgIHNvcnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWydhc2MnLCAnZGVzYyddLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyAoaW50ZWdlcikgVGhlIG1pbmltdW0gaGVpZ2h0IG9mIHRoZSByb3cgd2hlbiBsb2FkaW5nIGRhdGFcbiAgICAgICAgbWluSGVpZ2h0OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiA0MDBcbiAgICAgICAgfSxcblxuICAgICAgICAvLyAoYXJyYXkpIEFuIGFycmF5IG9mIGJ1dHRvbiBvYmplY3RzXG4gICAgICAgIC8vIFt7aHJlZjogJ3Rlc3QtMTIzJywgbGFiZWw6ICdUZXN0IDEyMyd9XVxuICAgICAgICBidXR0b25zOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICgpID0+IHsgcmV0dXJuIFtdOyB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gKGFycmF5KSBBbiBhcnJheSBvZiB0YWJsZSBjb2x1bW5cbiAgICAgICAgLy8gW3tpZDogJ2RhdGFiYXNlX2lkJywgbmFtZTogJ0RhdGFiYXNlIGlkJywgd2lkdGg6ICcyMCUnfV1cbiAgICAgICAgY29sdW1uczoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7IHJldHVybiBbXTsgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIChzdHJpbmcpIFRoZSB0YWJsZSBoZWFkaW5nXG4gICAgICAgIGhlYWRpbmc6IFN0cmluZyxcblxuICAgICAgICAvLyAoc3RyaW5nKSBBZGQgdGFibGUtaG92ZXIgdG8gdGhlIHRhYmxlIGVsZW1lbnRcbiAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gKHN0cmluZykgVGhlIHRhYmxlIGRlc2NyaXB0aW9uXG4gICAgICAgIGRlc2NyaXB0aW9uOiBTdHJpbmcsXG5cbiAgICAgICAgLy8gKGJvb2wpIFNob3VsZCBzaG93IHRoZSBwYWdpbmF0aW9uIGZvciB0aGlzIHRhYmxlXG4gICAgICAgIHBhZ2luYXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIChvYmplY3QpIFRoZSBIVFRQIHJlc3BvbnNlIHRyYW5zZm9ybWVyIGluc3RhbmNlXG4gICAgICAgIHRyYW5zZm9ybWVyOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGFibGVWaWV3VHJhbnNmb3JtZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAgIG9yZGVyQnkob3JkZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRTb3J0ID0gJ2Rlc2MnO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFNvcnQgPSB0aGlzLmdldFJlcXVlc3RQYXJhbSgnc29ydCcpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE9yZGVyID0gdGhpcy5nZXRSZXF1ZXN0UGFyYW0oJ29yZGVyJyk7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkUmVxdWVzdFBhcmFtKCdvcmRlcicsIG9yZGVyKTtcbiAgICAgICAgICAgIHRoaXMuYWRkUmVxdWVzdFBhcmFtKCdzb3J0JyxcbiAgICAgICAgICAgICAgICBjdXJyZW50T3JkZXIgIT09IG9yZGVyIHx8ICFjdXJyZW50U29ydCA/IGRlZmF1bHRTb3J0IDogKFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U29ydCA9PT0gZGVmYXVsdFNvcnQgPyAnYXNjJyA6IG51bGxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB0aGlzLmZldGNoKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LmhlYWRlcnNba2V5XSB8fCB2YWx1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIGFkZFJlcXVlc3RIZWFkZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYoIXRoaXMucmVxdWVzdC5oZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0LmhlYWRlcnMgPSB7fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0LmhlYWRlcnNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldFJlcXVlc3RQYXJhbShrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LnBhcmFtc1trZXldIHx8IHZhbHVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkUmVxdWVzdFBhcmFtKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLnJlcXVlc3QucGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0LnBhcmFtcyA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QucGFyYW1zW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBmZXRjaCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCh0aGlzLnVybCwgdGhpcy5yZXF1ZXN0KTtcblxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QuZ2V0KCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtZXIgPSB0aGlzLnRyYW5zZm9ybWVyIHx8IG5ldyBUYWJsZVZpZXdUcmFuc2Zvcm1lcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZSA9IHRyYW5zZm9ybWVyLnJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gdHJhbnNmb3JtZXIuZGF0YSgpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSwgZXJyb3JzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9uUGFnaW5hdGUocGFnZSwgZXZlbnQpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLnJlcXVlc3QucGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0LnBhcmFtcyA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QucGFyYW1zLnBhZ2UgPSBwYWdlO1xuICAgICAgICAgICAgdGhpcy5mZXRjaCgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyAoYXJyYXkpIFRoZSBkYXRhc2V0IGZvciB0aGUgdGFibGVcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuJGF0dHJzLmRhdGEgfHwgW10sXG5cbiAgICAgICAgICAgIC8vIChib29sKSBJcyB0aGUgdGFibGUgY3VycmVudGx5IGxvYWRpbmcgZGF0YVxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG5cbiAgICAgICAgICAgIC8vIChudWxsfG9iamVjdCkgVGhlIHJlc3BvbnNlIG9iamVjdFxuICAgICAgICAgICAgcmVzcG9uc2U6IG51bGwsXG5cbiAgICAgICAgICAgIC8vIChvYmplY3QpIFRoZSBIVFRQIHJlcXVlc3Qgb2JqZWN0XG4gICAgICAgICAgICByZXF1ZXN0OiBleHRlbmQoe1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmxpbWl0LFxuICAgICAgICAgICAgICAgICAgICBvcmRlcjogdGhpcy5vcmRlcixcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdGhpcy5zb3J0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcy4kYXR0cnMucmVxdWVzdClcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5mZXRjaCgpO1xuICAgIH0sXG5cbiAgICBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgICB0aGlzLiRvZmYoKTtcbiAgICB9XG59XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi5jYXJkID4gLnRhYmxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgdGhlYWQgdGgge1xuICAgICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAwO1xuICAgIH1cblxuICAgIHRmb290IC5wYWdpbmF0aW9uIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IFRhYmxlVmlldyBmcm9tICcuL1RhYmxlVmlldyc7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJy4uLy4uL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgVGFibGVWaWV3XG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlVmlldztcbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxmb3JtLWdyb3VwPlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJsYWJlbFwiPlxuICAgICAgICAgICAgPGZvcm0tbGFiZWwgdi1pZj1cImxhYmVsIHx8IGhhc0RlZmF1bHRTbG90XCIgOmZvcj1cImlkXCI+XG4gICAgICAgICAgICAgICAgPHNsb3Q+e3tsYWJlbH19PC9zbG90PlxuICAgICAgICAgICAgPC9mb3JtLWxhYmVsPlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICA6aWQ9XCJpZFwiXG4gICAgICAgICAgICAgICAgICAgIDpyb3dzPVwicm93c1wiXG4gICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgOmVycm9ycz1cImVycm9yc1wiXG4gICAgICAgICAgICAgICAgICAgIDpwYXR0ZXJuPVwicGF0dGVyblwiXG4gICAgICAgICAgICAgICAgICAgIDpyZWFkb25seT1cInJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICAgICAgOnJlcXVpcmVkPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgICAgICA6bWF4bGVuZ3RoPVwibWF4bGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZCB8fCByZWFkb25seVwiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cIm1lcmdlQ2xhc3Nlcyhjb250cm9sQ2xhc3NlcywgY29sb3JhYmxlQ2xhc3NlcylcIlxuICAgICAgICAgICAgICAgICAgICB2LWJpbmQtZXZlbnRzPVwiYmluZEV2ZW50c1wiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cIiRlbWl0KCdpbnB1dCcsICRldmVudC50YXJnZXQudmFsdWUpXCI+XG4gICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cblxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJmZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwidmFsaWRGZWVkYmFja1wiIHYtaHRtbD1cInZhbGlkRmVlZGJhY2tcIiB2YWxpZCAvPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwiaW52YWxpZEZlZWRiYWNrXCIgdi1odG1sPVwiaW52YWxpZEZlZWRiYWNrXCIgaW52YWxpZCAvPlxuICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImhlbHBcIj5cbiAgICAgICAgICAgIDxoZWxwLXRleHQgdi1pZj1cImhlbHBUZXh0XCIgdi1odG1sPVwiaGVscFRleHRcIiAvPlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICA8L2Zvcm0tZ3JvdXA+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgSGVscFRleHQgZnJvbSAnLi4vSGVscFRleHQnO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tICcuLi9Gb3JtR3JvdXAnO1xuaW1wb3J0IEZvcm1MYWJlbCBmcm9tICcuLi9Gb3JtTGFiZWwnO1xuaW1wb3J0IEZvcm1GZWVkYmFjayBmcm9tICcuLi9Gb3JtRmVlZGJhY2snO1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICcuLi8uLi9NaXhpbnMvQ29sb3JhYmxlJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICcuLi8uLi9NaXhpbnMvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IE1lcmdlQ2xhc3NlcyBmcm9tICcuLi8uLi9NaXhpbnMvTWVyZ2VDbGFzc2VzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ3RleHRhcmVhLWZpZWxkJyxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgSGVscFRleHQsXG4gICAgICAgIEZvcm1Hcm91cCxcbiAgICAgICAgRm9ybUxhYmVsLFxuICAgICAgICBGb3JtRmVlZGJhY2tcbiAgICB9LFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIENvbG9yYWJsZSxcbiAgICAgICAgRm9ybUNvbnRyb2wsXG4gICAgICAgIE1lcmdlQ2xhc3Nlc1xuICAgIF0sXG5cbiAgICBwcm9wczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHR5cGUgYXR0cmlidXRlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICd0ZXh0J1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgcm93cyBhdHRyaWJ1dGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgcm93czogW051bWJlciwgU3RyaW5nXVxuICAgIH1cblxufVxuXG48L3NjcmlwdD5cbiIsImltcG9ydCBUZXh0YXJlYUZpZWxkIGZyb20gJy4vVGV4dGFyZWFGaWVsZCc7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJy4uLy4uL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgVGV4dGFyZWFGaWVsZFxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYUZpZWxkO1xuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJ0aHVtYm5haWwtbGlzdC1pdGVtXCIgOnN0eWxlPVwie2hlaWdodDogdW5pdChoZWlnaHQpLCB3aWR0aDogdW5pdCh3aWR0aCksIG1pbkhlaWdodDogdW5pdChtaW5IZWlnaHQpLCBtYXhIZWlnaHQ6IHVuaXQobWF4SGVpZ2h0KSwgbWluV2lkdGg6IHVuaXQobWluV2lkdGgpLCBtYXhXaWR0aDogdW5pdChtYXhXaWR0aCl9XCI+XG4gICAgICAgIDxpbWcgdi1pZj1cInNyY1wiIDpzcmM9XCJzcmNcIiA6YWx0PVwiYWx0XCIgOmNsYXNzPVwieydpbWctZmx1aWQnOiBmbHVpZH1cIiAvPlxuICAgICAgICA8c2xvdC8+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHVuaXQgZnJvbSAnLi4vLi4vSGVscGVycy9Vbml0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICBhbHQ6IFN0cmluZyxcblxuICAgICAgICBzcmM6IFN0cmluZyxcblxuICAgICAgICB3aWR0aDogW1N0cmluZywgTnVtYmVyXSxcblxuICAgICAgICBoZWlnaHQ6IFtTdHJpbmcsIE51bWJlcl0sXG5cbiAgICAgICAgbWluSGVpZ2h0OiBbU3RyaW5nLCBOdW1iZXJdLFxuXG4gICAgICAgIG1heEhlaWdodDogW1N0cmluZywgTnVtYmVyXSxcblxuICAgICAgICBtaW5XaWR0aDogW1N0cmluZywgTnVtYmVyXSxcblxuICAgICAgICBtYXhXaWR0aDogW1N0cmluZywgTnVtYmVyXSxcblxuICAgICAgICBmbHVpZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICB1bml0OiB1bml0XG5cbiAgICB9XG5cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbi50aHVtYm5haWwtbGlzdC1pdGVtIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcblxuICAgICYgPiBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgJi5pbWctZmx1aWQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICY6bm90KDpvbmx5LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAmOm50aC1jaGlsZCgybikge1xuICAgICAgICBvcGFjaXR5OiAuMjU7XG4gICAgfVxuICAgICovXG59XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJ0aHVtYm5haWwtbGlzdFwiIDpjbGFzcz1cImNsYXNzZXNcIj5cbiAgICAgICAgPHRodW1ibmFpbC1saXN0LWl0ZW0gdi1pZj1cIiEhaW1hZ2VzXCIgdi1mb3I9XCJpbWFnZSBpbiBpbWFnZXNcIiA6c3JjPVwiaW1hZ2VcIiA6d2lkdGg9XCJ3aWR0aFwiIC8+XG4gICAgICAgIDxzbG90Lz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgVGh1bWJuYWlsTGlzdEl0ZW0gZnJvbSAnLi9UaHVtYm5haWxMaXN0SXRlbSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgVGh1bWJuYWlsTGlzdEl0ZW1cbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICBmaWxsOiBCb29sZWFuLFxuXG4gICAgICAgIGZsZXg6IEJvb2xlYW4sXG5cbiAgICAgICAgbm9GbGV4OiBCb29sZWFuLFxuXG4gICAgICAgIGdyaWQ6IEJvb2xlYW4sXG5cbiAgICAgICAgd3JhcDogQm9vbGVhbixcblxuICAgICAgICBpbWFnZXM6IEFycmF5LFxuXG4gICAgICAgIHdpZHRoOiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICAgICAgZGVmYXVsdDogNzVcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgY2xhc3NlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgJ3RodW1ibmFpbC1saXN0LWZpbGwnOiB0aGlzLmZpbGwsXG4gICAgICAgICAgICAgICAgJ3RodW1ibmFpbC1saXN0LWZsZXgnOiB0aGlzLmZsZXgsXG4gICAgICAgICAgICAgICAgJ3RodW1ibmFpbC1saXN0LW5vZmxleCc6IHRoaXMubm9GbGV4LFxuICAgICAgICAgICAgICAgICd0aHVtYm5haWwtbGlzdC1ncmlkJzogdGhpcy5ncmlkLFxuICAgICAgICAgICAgICAgICd0aHVtYm5haWwtbGlzdC13cmFwJzogdGhpcy53cmFwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLnRodW1ibmFpbC1saXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgJjpub3QoLnRodW1ibmFpbC1saXN0LWdyaWQpID4gKjpub3Qge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICAmOm5vdCgudGh1bWJuYWlsLWxpc3QtZ3JpZCkgPiAqOmZpcnN0LWNoaWxkOmxhc3QtY2hpbGQge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgICYudGh1bWJuYWlsLWxpc3QtZmlsbCxcbiAgICAmLnRodW1ibmFpbC1saXN0LXdyYXAge1xuICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIH1cblxuICAgICYudGh1bWJuYWlsLWxpc3Qtbm9mbGV4ID4gKiB7XG4gICAgICAgIGZsZXg6IDA7XG4gICAgfVxuXG4gICAgJi50aHVtYm5haWwtbGlzdC1maWxsID4gKiB7XG4gICAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgIH1cblxuICAgICYudGh1bWJuYWlsLWxpc3Qtd3JhcCA+ICoge1xuICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB9XG5cbiAgICAmLnRodW1ibmFpbC1saXN0LWZsZXggPiAqIHtcbiAgICAgICAgZmxleDogMTtcbiAgICB9XG5cbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgVGh1bWJuYWlsTGlzdCBmcm9tICcuL1RodW1ibmFpbExpc3QnO1xuaW1wb3J0IFRodW1ibmFpbExpc3RJdGVtIGZyb20gJy4vVGh1bWJuYWlsTGlzdEl0ZW0nO1xuaW1wb3J0IFZ1ZUluc3RhbGxlciBmcm9tICcuLi8uLi9IZWxwZXJzL1Z1ZUluc3RhbGxlci9WdWVJbnN0YWxsZXInO1xuXG5jb25zdCBwbHVnaW4gPSBWdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIFRodW1ibmFpbExpc3RcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IHtcbiAgICBUaHVtYm5haWxMaXN0SXRlbVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGh1bWJuYWlsTGlzdDtcbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxmb3JtLWdyb3VwIGNsYXNzPVwidXBsb2FkLWZpZWxkXCIgOmNsYXNzPVwieydlbmFibGUtZHJvcHpvbmUnOiBkcm9wem9uZSwgJ2VuYWJsZS1tdWx0aXBsZSc6IG11bHRpcGxlfVwiPlxuXG4gICAgICAgIDxkcm9wem9uZSBAZHJvcD1cIm9uRHJvcFwiPlxuXG4gICAgICAgICAgICA8ZmlsZS1maWVsZFxuICAgICAgICAgICAgICAgIHYtaWY9XCJtdWx0aXBsZSAmJiAoIW1heFVwbG9hZHMgfHwgbWF4VXBsb2FkcyA+IHZhbHVlLmxlbmd0aCkgfHwgIW11bHRpcGxlICYmICF2YWx1ZVwiXG4gICAgICAgICAgICAgICAgOm5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICA6bGFiZWw9XCJsYWJlbFwiXG4gICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgIDpoZWxwLXRleHQ9XCJoZWxwVGV4dFwiXG4gICAgICAgICAgICAgICAgOm11bHRpcGxlPVwibXVsdGlwbGVcIlxuICAgICAgICAgICAgICAgIDplcnJvcnM9XCJlcnJvcnNcIlxuICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJvbkNoYW5nZVwiXG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8dGh1bWJuYWlsLWxpc3Qgdi1pZj1cImZpbGVzICYmIGZpbGVzLmxlbmd0aFwiIGNsYXNzPVwibXQtNFwiIHdyYXA+XG4gICAgICAgICAgICAgICAgPHRodW1ibmFpbC1saXN0LWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIoZmlsZSwga2V5KSBpbiBmaWxlc1wiXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWxlLmxhc3RNb2RpZmllZCArICctJyArIGZpbGUubGFzdE1vZGlmaWVkRGF0ZSArICctJyArIGZpbGUuc2l6ZSArICctJyArIGZpbGUudHlwZSArICctJyArIGZpbGUubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIDp3aWR0aD1cIndpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgOm1pbi13aWR0aD1cIm1pbldpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgOm1heC13aWR0aD1cIm1heFdpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgOmhlaWdodD1cImhlaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIDptaW4taGVpZ2h0PVwibWluSGVpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgOm1heC1oZWlnaHQ9XCJtYXhIZWlnaHRcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7J3VwbG9hZGluZyc6ICEhcHJvZ3Jlc3NCYXJzW2tleV19XCI+XG4gICAgICAgICAgICAgICAgICAgIDxmaWxlLXByZXZpZXcgOmZpbGU9XCJmaWxlXCIgOnByb2dyZXNzPVwicHJvZ3Jlc3NCYXJzW2tleV0gfHwgMFwiIEBsb2FkZWQ9XCJvbkxvYWRlZFByZXZpZXdcIiBAY2xvc2U9XCJyZW1vdmVGaWxlKGZpbGUpXCIvPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdCA6ZmlsZT1cImZpbGVcIi8+XG4gICAgICAgICAgICAgICAgPHRodW1ibmFpbC1saXN0LWl0ZW0+XG4gICAgICAgICAgICA8L3RodW1ibmFpbC1saXN0PlxuXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJzaG93RHJvcEVsZW1lbnRcIiBjbGFzcz1cInVwbG9hZC1maWVsZC1kcm9wem9uZVwiIDpzdHlsZT1cInsnbWluLWhlaWdodCc6IGRyb3B6b25lTWluSGVpZ2h0fVwiIEBkcm9wLnByZXZlbnQ9XCJvbkRyb3BcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNsb3VkLXVwbG9hZFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8ZGl2PkRyYWcgYW5kIGRyb3AgZmlsZXMgdG8gdXBsb2FkPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Ryb3B6b25lPlxuXG4gICAgPC9mb3JtLWdyb3VwPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZWFjaCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCB7IHJlbW92ZSB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBpc1VuZGVmaW5lZCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAnLi4vRm9ybUdyb3VwJztcbmltcG9ydCBNb2RlbCBmcm9tICcuLi8uLi9IdHRwL01vZGVsJztcbmltcG9ydCBEcm9wem9uZSBmcm9tICcuLi9Ecm9wem9uZS9Ecm9wem9uZSc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnLi4vLi4vTWl4aW5zL0Zvcm1Db250cm9sL0Zvcm1Db250cm9sJztcbmltcG9ydCBGaWxlRmllbGQgZnJvbSAnLi4vRmlsZUZpZWxkL0ZpbGVGaWVsZCc7XG5pbXBvcnQgRmlsZVByZXZpZXcgZnJvbSAnLi4vRmlsZVByZXZpZXcvRmlsZVByZXZpZXcnO1xuaW1wb3J0IFRodW1ibmFpbExpc3QgZnJvbSAnLi4vVGh1bWJuYWlsTGlzdC9UaHVtYm5haWxMaXN0JztcbmltcG9ydCBUaHVtYm5haWxMaXN0SXRlbSBmcm9tICcuLi9UaHVtYm5haWxMaXN0L1RodW1ibmFpbExpc3RJdGVtJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ3VwbG9hZC1maWVsZCcsXG5cbiAgICBtaXhpbnM6IFtGb3JtQ29udHJvbF0sXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIERyb3B6b25lLFxuICAgICAgICBGb3JtR3JvdXAsXG4gICAgICAgIEZpbGVGaWVsZCxcbiAgICAgICAgRmlsZVByZXZpZXcsXG4gICAgICAgIFRodW1ibmFpbExpc3QsXG4gICAgICAgIFRodW1ibmFpbExpc3RJdGVtXG4gICAgfSxcblxuICAgIG1vZGVsOiB7XG4gICAgICAgIHByb3A6ICd2YWx1ZScsXG4gICAgICAgIGV2ZW50OiAnY2hhbmdlJ1xuICAgIH0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYW4gdXNlciB1cGxvYWQgbXVsdGlwbGUgZmlsZXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgbXVsdGlwbGU6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBmaWxlcyB0aGF0IGEgdXNlciBjYW4gdXBsb2FkXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIG1heFVwbG9hZHM6IE51bWJlcixcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGhlaWdodCBhdHRyaWJ1dGUgZm9yIHRoZSBjb250cm9sIGVsZW1lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgaGVpZ2h0OiBbTnVtYmVyLCBTdHJpbmddLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbWluaW11bSBoZWlnaHQgYXR0cmlidXRlIGZvciB0aGUgY29udHJvbCBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIG1pbkhlaWdodDogW051bWJlciwgU3RyaW5nXSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1heGltdW0gaGVpZ2h0IGF0dHJpYnV0ZSBmb3IgdGhlIGNvbnRyb2wgZWxlbWVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBtYXhIZWlnaHQ6IFtOdW1iZXIsIFN0cmluZ10sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB3aWR0aCBhdHRyaWJ1dGUgZm9yIHRoZSBjb250cm9sIGVsZW1lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgd2lkdGg6IFtOdW1iZXIsIFN0cmluZ10sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtaW5pbXVtIHdpZHRoIGF0dHJpYnV0ZSBmb3IgdGhlIGNvbnRyb2wgZWxlbWVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBtaW5XaWR0aDogW051bWJlciwgU3RyaW5nXSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1heGltdW0gd2lkdGggYXR0cmlidXRlIGZvciB0aGUgY29udHJvbCBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIG1heFdpZHRoOiBbTnVtYmVyLCBTdHJpbmddLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYW4gdXNlciBkcmFnL2Ryb3AgZmlsZXMgaW50byBicm93c2VyIHRvIHVwbG9hZCB0aGVtLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBkcm9wem9uZU1pbkhlaWdodDogW051bWJlciwgU3RyaW5nXSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSXMgdGhlIHVzZXIgZHJhZ2dpbmcgYSBmaWxlIG92ZXIgdGhlIGRyb3B6b25lXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGRyYWdnaW5nOiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcbiAgICAgICAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FuIHVzZXIgZHJhZy9kcm9wIGZpbGVzIGludG8gYnJvd3NlciB0byB1cGxvYWQgdGhlbS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgZHJvcHpvbmU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkYXRhIGF0dHJpYnV0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgRmlsZXxGaWxlTGlzdHxBcnJheVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFtPYmplY3QsIEZpbGUsIEZpbGVMaXN0LCBBcnJheV0sXG4gICAgICAgICAgICBkZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5tdWx0aXBsZSA/IG51bGwgOiBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gSFRUUCBNb2RlbCB1c2VkIHRvIHNlbmQgdGhlIHJlcXVlc3RcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgTW9kZWxcbiAgICAgICAgICovXG4gICAgICAgIG1vZGVsOiBbTW9kZWwsIEZ1bmN0aW9uXSxcblxuICAgICAgICByZXF1ZXN0OiBPYmplY3RcblxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgcmVtb3ZlRmlsZShkYXRhKSB7XG5cbiAgICAgICAgICAgIGlmKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlcyA9IGlzQXJyYXkodGhpcy52YWx1ZSkgPyB0aGlzLnZhbHVlLnNsaWNlKDApIDogW107XG5cbiAgICAgICAgICAgICAgICBpZihkYXRhIGluc3RhbmNlb2YgRmlsZSkge1xuICAgICAgICAgICAgICAgICAgICBpZihkYXRhLnJlcXVlc3QgJiYgZGF0YS5yZXF1ZXN0LmNhbmNlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5yZXF1ZXN0LmNhbmNlbCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlKGZpbGVzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBkYXRhLnNpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0TW9kaWZpZWQ6IGRhdGEubGFzdE1vZGlmaWVkXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlKGZpbGVzLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBmaWxlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihkYXRhLnJlcXVlc3QgJiYgZGF0YS5yZXF1ZXN0LmNhbmNlbCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnJlcXVlc3QuY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkRmlsZShmaWxlLCBzdWJqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0TW9kaWZpZWQ6IGZpbGUubGFzdE1vZGlmaWVkLFxuICAgICAgICAgICAgICAgIGxhc3RNb2RpZmllZERhdGU6IGZpbGUubGFzdE1vZGlmaWVkRGF0ZSxcbiAgICAgICAgICAgICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICAgICAgICAgICAgdHlwZTogZmlsZS50eXBlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlcyA9IHN1YmplY3QgfHwgKGlzQXJyYXkodGhpcy52YWx1ZSkgPyB0aGlzLnZhbHVlLnNsaWNlKDApIDogW10pO1xuXG4gICAgICAgICAgICAgICAgaWYoKCF0aGlzLm1heFVwbG9hZHMgfHwgdGhpcy5tYXhVcGxvYWRzID4gZmlsZXMubGVuZ3RoKSAmJiBmaWxlcy5pbmRleE9mKGRhdGEpID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBmaWxlcy5wdXNoKGZpbGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGZpbGVzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWQoZmlsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZmlsZSk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGxvYWQoZmlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkRmlsZXMoZmlsZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YmplY3QgPSBpc0FycmF5KHRoaXMudmFsdWUpID8gdGhpcy52YWx1ZS5zbGljZSgwKSA6IFtdO1xuXG4gICAgICAgICAgICBlYWNoKGZpbGVzLCBmaWxlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEZpbGUoZmlsZSwgc3ViamVjdCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVXBsb2FkIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyBhdXRvLXVwbG9hZGluZyBmaWVsZHMgYXN5bmNocm9ub3VzbHkuXG4gICAgICAgICAqIFRoaXMgaXMgZGVzaWduZWQgdG8gd29yayB3aXRoIFJFU1QgQVBJJ3MgYW5kIHJlcGxhY2UgdGhlIGZpbGUgT2JqZWN0XG4gICAgICAgICAqIHdpdGggdGhlIFJFU1RmdWwgcmV0dXJuZWQgYnkgdGhlIHNlcnZlci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgT2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICB1cGxvYWQoZmlsZSkge1xuICAgICAgICAgICAgLy8gU3RvcCB1cGxvYWQgc2lsZW50bHkgaWYgbm8gbW9kZWwgaXMgZGVmaW5lZC5cbiAgICAgICAgICAgIGlmKCF0aGlzLm1vZGVsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLm1vZGVsO1xuXG4gICAgICAgICAgICBpZighKHRoaXMubW9kZWwgaW5zdGFuY2VvZiBNb2RlbCkpIHtcbiAgICAgICAgICAgICAgICBtb2RlbCA9IG5ldyB0aGlzLm1vZGVsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb2RlbC5zZXQodGhpcy5uYW1lLCBmaWxlKTtcblxuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBsb2FkaW5nJywgbW9kZWwpO1xuICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucHJvZ3Jlc3NCYXJzLCB0aGlzLm11bHRpcGxlID8gKHRoaXMudmFsdWUgPyB0aGlzLnZhbHVlLmxlbmd0aCA6IDApIDogMCwgMCk7XG5cbiAgICAgICAgICAgIHJldHVybiBtb2RlbC5zYXZlKG51bGwsIGV4dGVuZCh7XG4gICAgICAgICAgICAgICAgb25VcGxvYWRQcm9ncmVzczogZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCFmaWxlLmluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlLmluZGV4ID0gdGhpcy5maWxlcy5pbmRleE9mKGZpbGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoIWZpbGUucmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS5yZXF1ZXN0ID0gbW9kZWwuZ2V0UmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMucHJvZ3Jlc3NCYXJzLCBmaWxlLmluZGV4LCBwYXJzZUludCgoZS5sb2FkZWQgLyBlLnRvdGFsKSAqIDEwMCwgMTApKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgncHJvZ3Jlc3MnLCBtb2RlbCwgdGhpcy5wcm9ncmVzc0JhcnNbZmlsZS5pbmRleF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRoaXMucmVxdWVzdCkpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGxvYWQnLCBtb2RlbCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXJzW2ZpbGUuaW5kZXhdID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGBkcm9wYCBldmVudCBjYWxsYmFjay5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgT2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBvbkRyb3AoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGBjaGFuZ2VgIGV2ZW50IGNhbGxiYWNrLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSBPYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIG9uQ2hhbmdlKGZpbGVzKSB7XG4gICAgICAgICAgICBpZihmaWxlcyBpbnN0YW5jZW9mIEZpbGVMaXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRGaWxlcyhmaWxlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEZpbGUoZmlsZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYGRyYWdvdmVyYCBldmVudCBjYWxsYmFjay5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgT2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBvbkRyYWdPdmVyKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmdJbnNpZGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOmRyYWdnaW5nJywgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdkcmFnOm92ZXInLCBldmVudCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBgZHJhZ292ZXJgIGV2ZW50IGNhbGxiYWNrLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSBPYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIG9uRHJhZ0VudGVyKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmdJbnNpZGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOmRyYWdnaW5nJywgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdkcmFnOmVudGVyJywgZXZlbnQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYGRyYWdsZWF2ZWAgZXZlbnQgY2FsbGJhY2suXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIE9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgb25EcmFnTGVhdmUoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNEcmFnZ2luZ0luc2lkZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOmRyYWdnaW5nJywgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZHJhZzpsZWF2ZScsIGV2ZW50KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGBkcm9wYCBldmVudCBjYWxsYmFjay5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgb25Ecm9wKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmdJbnNpZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYWRkRmlsZXMoZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTpkcmFnZ2luZycsIGZhbHNlKTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Ryb3AnLCBldmVudCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBgbG9hZGVkYCBldmVudCBjYWxsYmFjay5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUgT2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBvbkxvYWRlZFByZXZpZXcoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2xvYWRlZCcsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIGZpbGVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubXVsdGlwbGUgPyB0aGlzLnZhbHVlIDogKHRoaXMudmFsdWUgPyBbdGhpcy52YWx1ZV0gOiBbXSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2hvd0Ryb3BFbGVtZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuICFpc1VuZGVmaW5lZCh0aGlzLmRyYWdnaW5nKSA/IHRoaXMuZHJhZ2dpbmcgOiB0aGlzLmlzRHJhZ2dpbmdJbnNpZGVcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9ncmVzc0JhcnM6IHt9LFxuICAgICAgICAgICAgaXNEcmFnZ2luZ0luc2lkZTogZmFsc2VcbiAgICAgICAgfTtcbiAgICB9XG5cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cblxuLnVwbG9hZC1maWVsZCB7XG4gICAgIC5maWxlLXByZXZpZXcge1xuICAgICAgICBtaW4td2lkdGg6IDEwMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcblxuICAgICAgICAudXBsb2FkaW5nIC5maWxlLXByZXZpZXcge1xuICAgICAgICAgICAgb3BhY2l0eTogLjU7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IFVwbG9hZEZpZWxkIGZyb20gJy4vVXBsb2FkRmllbGQnO1xuaW1wb3J0IFZ1ZUluc3RhbGxlciBmcm9tICcuLi8uLi9IZWxwZXJzL1Z1ZUluc3RhbGxlci9WdWVJbnN0YWxsZXInO1xuXG5jb25zdCBwbHVnaW4gPSBWdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIFVwbG9hZEZpZWxkXG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEZpZWxkO1xuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJ3aXphcmQtYnV0dG9uc1wiPlxuICAgICAgICA8YnRuLWdyb3VwIHJlZj1cImxlZnRcIiBjbGFzcz1cIndpemFyZC1idXR0b25zLWxlZnRcIj5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJidXR0b25zLWxlZnRcIi8+XG4gICAgICAgICAgICA8YnRuIHR5cGU9XCJidXR0b25cIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgcmVmPVwiYmFja1wiIDpkaXNhYmxlZD1cImJhY2tCdXR0b24gPT09IGZhbHNlIHx8IChhY3RpdmUgPT09IDAgJiYgYmFja0J1dHRvbiAhPT0gdHJ1ZSlcIiA6c2l6ZT1cInNpemVhYmxlQ2xhc3NcIiBAY2xpY2s9XCJvbkNsaWNrQmFja1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbG9uZy1hcnJvdy1sZWZ0XCIvPiBCYWNrXG4gICAgICAgICAgICA8L2J0bj5cbiAgICAgICAgPC9idG4tZ3JvdXA+XG4gICAgICAgIDxidG4tZ3JvdXAgcmVmPVwicmlnaHRcIiBjbGFzcz1cIndpemFyZC1idXR0b25zLXJpZ2h0XCI+XG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwiYnV0dG9ucy1yaWdodFwiLz5cbiAgICAgICAgICAgIDxidG4tYWN0aXZpdHkgdi1pZj1cImFjdGl2ZSA9PT0gc3RlcHMubGVuZ3RoIC0gMVwiIHJlZj1cImZpbmlzaFwiIDphY3Rpdml0eT1cImFjdGl2aXR5XCIgOnNpemU9XCJzaXplYWJsZUNsYXNzXCIgOmRpc2FibGVkPVwiZmluaXNoQnV0dG9uID09PSBmYWxzZVwiIHR5cGU9XCJidXR0b25cIiB2YXJpYW50PVwic3VjY2Vzc1wiIEBjbGljaz1cIm9uQ2xpY2tGaW5pc2hcIj5cbiAgICAgICAgICAgICAgICBGaW5pc2hcbiAgICAgICAgICAgIDwvYnRuLWFjdGl2aXR5PlxuICAgICAgICAgICAgPGJ0bi1hY3Rpdml0eSB2LWlmPVwiYWN0aXZlIDwgc3RlcHMubGVuZ3RoIC0gMVwiIHJlZj1cIm5leHRcIiA6YWN0aXZpdHk9XCJhY3Rpdml0eVwiIDpzaXplPVwic2l6ZWFibGVDbGFzc1wiIDpkaXNhYmxlZD1cIm5leHRCdXR0b24gPT09IGZhbHNlXCIgdHlwZT1cImJ1dHRvblwiIHZhcmlhbnQ9XCJwcmltYXJ5XCIgQGNsaWNrPVwib25DbGlja05leHRcIj5cbiAgICAgICAgICAgICAgICBOZXh0IDxpIGNsYXNzPVwiZmEgZmEtbG9uZy1hcnJvdy1yaWdodFwiLz5cbiAgICAgICAgICAgIDwvYnRuLWFjdGl2aXR5PlxuICAgICAgICA8L2J0bi1ncm91cD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgQnRuIGZyb20gJy4uL0J0bic7XG5pbXBvcnQgQnRuR3JvdXAgZnJvbSAnLi4vQnRuR3JvdXAnO1xuaW1wb3J0IEJ0bkFjdGl2aXR5IGZyb20gJy4uL0J0bkFjdGl2aXR5JztcbmltcG9ydCBTaXplYWJsZSBmcm9tICcuLi8uLi9NaXhpbnMvU2l6ZWFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnd2l6YXJkLWJ1dHRvbnMnLFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIFNpemVhYmxlXG4gICAgXSxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgQnRuLFxuICAgICAgICBCdG5Hcm91cCxcbiAgICAgICAgQnRuQWN0aXZpdHlcbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGluZGV4IG9yIGtleSBvZiB0aGUgYWN0aXZlIHN0ZXAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtTdHJpbmd8TnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG93IHRoZSBhY3Rpdml0eSBpbmRpY2F0b3IgaW4gdGhlIG5leHQgb3IgZmluaXNoIGJ1dHRvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpdml0eTogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdyBzaG91bGQgdGhlIFwiQmFja1wiIGJ1dHRvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBiYWNrQnV0dG9uOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG93IHNob3VsZCB0aGUgXCJGaW5pc2hcIiBidXR0b24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgZmluaXNoQnV0dG9uOiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG93IHNob3VsZCB0aGUgXCJOZXh0XCIgYnV0dG9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgICAgICovXG4gICAgICAgIG5leHRCdXR0b246IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IG9mIHN0ZXBzIHBhc3NlZCBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIHN0ZXBzOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBPdmVycmlkZSB0aGUgY2xhc3MgcHJlZml4IHdpdGggYW4gZW1wdHkgc3RyaW5nLi4uXG4gICAgICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHNpemVhYmxlQ2xhc3NQcmVmaXgoKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgb25DbGlja0JhY2soZXZlbnQpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuYmFja0J1dHRvbiAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljazpiYWNrJywgZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG9uQ2xpY2tGaW5pc2goZXZlbnQpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuZmluaXNoQnV0dG9uICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrOmZpbmlzaCcsIGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBvbkNsaWNrTmV4dChldmVudCkge1xuICAgICAgICAgICAgaWYodGhpcy5uZXh0QnV0dG9uICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrOm5leHQnLCBldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLndpemFyZC1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjwvc3R5bGU+XG4iLCI8c2NyaXB0PlxuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ3dpemFyZC1zdGVwJyxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwYXJlbnQgd2l6YXJkIGNvbXBvbmVudCBpbnN0YW5jZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgICAgd2l6YXJkOiB7XG4gICAgICAgICAgICAvL3JlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogT2JqZWN0XG4gICAgICAgIH0sXG4gICAgICAgICovXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBzdGVwJ3MgbGFiZWwgaW4gdGhlIHByb2dyZXNzIGJhci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIGxhYmVsOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgcHJlZGljYXRlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBpZiB0aGUgYmFjayBidXR0b24gc2hvdWxkIHNob3cuXG4gICAgICAgICAqIENhbiBhbHNvIGJlIGEgYm9vbGVhbiB2YWx1ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0Z1bmN0aW9ufEJvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBiYWNrQnV0dG9uOiB7XG4gICAgICAgICAgICB0eXBlOiBbRnVuY3Rpb24sIEJvb2xlYW5dLFxuICAgICAgICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWxpZGF0ZSBpZiB0aGUgZGF0YSBpbnB1dCBmb3IgdGhlIHN0ZXAgaXMgdmFsaWQuIFJlcXVpcmVkIEJvb2xlYW5cbiAgICAgICAgICogb3IgYSBwcmVkaWNhdGUgZnVuY3Rpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtGdW5jdGlvbnxCb29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdmFsaWRhdGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFtGdW5jdGlvbiwgQm9vbGVhbl0sXG4gICAgICAgICAgICBkZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAgIGNoZWNrVmFsaWRpdHkocHJvcCkge1xuICAgICAgICAgICAgLy8gVmFsaWRhdGUgdGhlIHByb3BlcnR5IGZvciB0aGUgc3RlcCBmaXJzdC5cbiAgICAgICAgICAgIGlmKGlzRnVuY3Rpb24odGhpc1twcm9wXSkgPyB0aGlzW3Byb3BdKHRoaXMpID09PSBmYWxzZSA6IHRoaXNbcHJvcF0gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRoZW4gdmFsaWRhdGUgdGhlIHByb3BlcnR5IG9mIHRoZSB3aXphcmQsIHRoaXMgaXMgdGhlIGdsb2JhbCB2YWxpZGF0b3JcbiAgICAgICAgICAgIGlmKHRoaXMuJHJlZnMud2l6YXJkKSB7XG4gICAgICAgICAgICAgICAgaWYoIGlzRnVuY3Rpb24odGhpcy4kcmVmcy53aXphcmRbcHJvcF0pID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy53aXphcmRbcHJvcF0odGhpcykgPT09IGZhbHNlIDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcmVmcy53aXphcmRbcHJvcF0gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIHBlcmZvcm1WYWxpZGl0eUNoZWNrcygpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuJHJlZnMud2l6YXJkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja1ZhbGlkaXR5KCd2YWxpZGF0ZScpID8gdGhpcy5lbmFibGUoKSA6IHRoaXMuZGlzYWJsZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tWYWxpZGl0eSgnYmFja0J1dHRvbicpID8gdGhpcy4kcmVmcy53aXphcmQuZW5hYmxlQmFja0J1dHRvbigpIDogdGhpcy4kcmVmcy53aXphcmQuZGlzYWJsZUJhY2tCdXR0b24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkaXNhYmxlKCkge1xuICAgICAgICAgICAgaWYodGhpcy4kcmVmcy53aXphcmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLndpemFyZC5kaXNhYmxlTmV4dEJ1dHRvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMud2l6YXJkLmRpc2FibGVGaW5pc2hCdXR0b24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBlbmFibGUoKSB7XG4gICAgICAgICAgICBpZih0aGlzLiRyZWZzLndpemFyZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHJlZnMud2l6YXJkLmVuYWJsZU5leHRCdXR0b24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLndpemFyZC5lbmFibGVGaW5pc2hCdXR0b24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIHVwZGF0ZWQoKSB7XG4gICAgICAgIHRoaXMucGVyZm9ybVZhbGlkaXR5Q2hlY2tzKCk7XG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuJG5leHRUaWNrKHRoaXMucGVyZm9ybVZhbGlkaXR5Q2hlY2tzKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyKGgpIHtcbiAgICAgICAgaWYodGhpcy4kc2xvdHMuZGVmYXVsdC5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIDx3aXphcmQtc2xvdD4gbXVzdCBjb250YWluIGEgc2luZ2xlIHBhcmVudCBET00gbm9kZS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLiRzbG90cy5kZWZhdWx0WzBdO1xuICAgIH1cblxufTtcbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJ3aXphcmQtZXJyb3JcIj5cbiAgICAgICAgPGRpdiB2LWlmPVwiaWNvblwiIGNsYXNzPVwid2l6YXJkLWVycm9yLWljb25cIj5cbiAgICAgICAgICAgIDxpIDpjbGFzcz1cImljb25cIi8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxoMyB2LWlmPVwidGl0bGVcIiBjbGFzcz1cIndpemFyZC1lcnJvci10aXRsZVwiIHYtaHRtbD1cInRpdGxlXCIvPlxuXG4gICAgICAgIDxzbG90Lz5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImVycm9yc1wiIGNsYXNzPVwibXktNVwiPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJtYi0wIHRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiKGVycm9yLCBpKSBpbiBlcnJvcnNcIiA6a2V5PVwiaVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGVycm9yWzBdIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGJ0biBzaXplPVwibGdcIiB2YXJpYW50PVwiZGFuZ2VyXCIgYmxvY2sgQGNsaWNrPVwiJGVtaXQoJ2JhY2snKVwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWxvbmctYXJyb3ctbGVmdFwiLz4gR28gQmFja1xuICAgICAgICAgICAgICAgIDwvYnRuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBCdG4gZnJvbSAnLi4vQnRuJztcbmltcG9ydCBXaXphcmRTdGVwIGZyb20gJy4vV2l6YXJkU3RlcCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICd3aXphcmQtZXJyb3InLFxuXG4gICAgZXh0ZW5kczogV2l6YXJkU3RlcCxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgQnRuXG4gICAgfSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2ZhIGZhLTN4IGZhLWNoZWNrJ1xuICAgICAgICB9LFxuXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnRXJyb3IhJ1xuICAgICAgICB9LFxuXG4gICAgICAgIGVycm9yczogW0FycmF5LCBPYmplY3RdXG5cbiAgICB9XG5cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5AaW1wb3J0ICcuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMuc2Nzcyc7XG5AaW1wb3J0ICcuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XG5cbiR3aXphcmQtZXJyb3ItY29sb3I6ICNiMTA4MDU7XG5cbi53aXphcmQtZXJyb3Ige1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtbGc7XG4gICAgcGFkZGluZzogJGZvbnQtc2l6ZS1sZyAqIDQgJGZvbnQtc2l6ZS1sZztcblxuICAgIC53aXphcmQtZXJyb3ItdGl0bGUge1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtbGcgKiAxLjU7XG4gICAgICAgIGNvbG9yOiAkd2l6YXJkLWVycm9yLWNvbG9yO1xuICAgIH1cblxuICAgIC53aXphcmQtZXJyb3ItaWNvbiB7XG4gICAgICAgIGNvbG9yOiAkd2l6YXJkLWVycm9yLWNvbG9yO1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtbGc7XG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICR3aXphcmQtZXJyb3ItY29sb3I7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6ICRmb250LXNpemUtbGcgKiA2O1xuICAgICAgICBoZWlnaHQ6ICRmb250LXNpemUtbGcgKiA2O1xuICAgICAgICBtYXJnaW46ICRmb250LXNpemUtbGcgYXV0bztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIGkge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGNvbXBvbmVudCA6aXM9XCJ0YWdcIiBjbGFzcz1cIndpemFyZC1oZWFkZXJcIiA6Y2xhc3M9XCJ7J3RleHQtY2VudGVyJzogY2VudGVyfVwiPlxuICAgICAgICA8c2xvdC8+XG4gICAgPC9jb21wb25lbnQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ3dpemFyZC1oZWFkZXInLFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICBjZW50ZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBIVE1MIHRhZ1xuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdGFnOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnaDInXG4gICAgICAgIH1cblxuICAgIH1cblxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuLmNhcmQgPiAud2l6YXJkIHtcbiAgICAud2l6YXJkLWhlYWRlciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwid2l6YXJkLXByb2dyZXNzXCI+XG4gICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICB2LWZvcj1cIihzdGVwLCBpKSBpbiBzdGVwc1wiXG4gICAgICAgICAgICBjbGFzcz1cIndpemFyZC1zdGVwXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsnYWN0aXZlJzogaSA9PT0gYWN0aXZlLCAnZGlzYWJsZWQnOiBpID4gaGlnaGVzdFN0ZXAsICdjb21wbGV0ZSc6IGkgKyAxIDw9IGhpZ2hlc3RTdGVwfVwiXG4gICAgICAgICAgICA6ZGF0YS1zdGVwPVwiaVwiXG4gICAgICAgICAgICA6dGl0bGU9XCJzdGVwLmxhYmVsIHx8IHN0ZXAudGl0bGVcIlxuICAgICAgICAgICAgOnN0eWxlPVwie3dpZHRoOiBgJHsxMDAgLyBzdGVwcy5sZW5ndGh9JWB9XCJcbiAgICAgICAgICAgIEBjbGljay5wcmV2ZW50PVwib25DbGljaygkZXZlbnQsIHN0ZXApXCI+XG4gICAgICAgICAgICA8c3BhbiB2LWlmPVwic3RlcC5jb21wb25lbnRPcHRpb25zICYmIHN0ZXAuY29tcG9uZW50T3B0aW9ucy5wcm9wc0RhdGEubGFiZWxcIiBjbGFzcz1cIndpemFyZC1zdGVwLWxhYmVsXCIgdi1odG1sPVwic3RlcC5jb21wb25lbnRPcHRpb25zLnByb3BzRGF0YS5sYWJlbFwiLz5cbiAgICAgICAgICAgIDxzcGFuIHYtZWxzZS1pZj1cInN0ZXAuY29tcG9uZW50T3B0aW9ucyAmJiBzdGVwLmNvbXBvbmVudE9wdGlvbnMucHJvcHNEYXRhLnRpdGxlXCIgY2xhc3M9XCJ3aXphcmQtc3RlcC1sYWJlbFwiIHYtaHRtbD1cInN0ZXAuY29tcG9uZW50T3B0aW9ucy5wcm9wc0RhdGEudGl0bGVcIi8+XG4gICAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnd2l6YXJkLXByb2dyZXNzJyxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpbmRleCBvciBrZXkgb2YgdGhlIGFjdGl2ZSBzdGVwLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfE51bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHdpemFyZCBoaWdoZXN0IGF2YWlsYWJsZSB0byB0aGUgdXNlci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0FycmF5fVxuICAgICAgICAgKi9cbiAgICAgICAgaGlnaGVzdFN0ZXA6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgd2l6YXJkIHN0ZXBzXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtBcnJheX1cbiAgICAgICAgICovXG4gICAgICAgIHN0ZXBzOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgb25DbGljayhldmVudCwgc3RlcCkge1xuICAgICAgICAgICAgaWYoIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGV2ZW50LCBzdGVwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2VcbiAgICAgICAgfVxuICAgIH1cblxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCAnLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zLnNjc3MnO1xuQGltcG9ydCAnLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xuXG4ud2l6YXJkLXByb2dyZXNzIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgY291bnRlci1yZXNldDogc3RlcDtcbn1cblxuLypcbi53aXphcmQtcHJvZ3Jlc3Mtd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMzBweCAwO1xuXG4gICAgJjphZnRlciB7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMDtcbiAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgfVxufVxuKi9cblxuLndpemFyZC1zdGVwIHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGNvbnRlbnQ6IGNvdW50ZXIoc3RlcCk7XG4gICAgICAgIGNvdW50ZXItaW5jcmVtZW50OiBzdGVwO1xuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDAgYXV0byAxMHB4IGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzAwOGNjMDtcbiAgICAgICAgY29sb3I6ICMwMDhjYzA7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdkN2Q3ZDtcbiAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICBsZWZ0OiAtNTAlO1xuICAgIH1cblxuICAgICY6Zmlyc3QtY2hpbGQ6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBub25lO1xuICAgIH1cblxuICAgICYsICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzdkN2Q3ZDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAgICY6bm90KC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLndpemFyZC1zdGVwLWxhYmVsIHtcbiAgICAgICBjb2xvcjogIzAwOGNjMDtcbiAgICB9XG5cbiAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjN2Q3ZDdkO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjN2Q3ZDdkO1xuICAgICAgICB9XG5cbiAgICAgICAgLndpemFyZC1zdGVwLWxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiAjN2Q3ZDdkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5jb21wbGV0ZSB7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzU1Yjc3NjtcbiAgICAgICAgICAgIGNvbG9yOiAjNTViNzc2O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgICAgICAgICAgY29udGVudDogXCJcXGYwMGNcIjtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJiArIC53aXphcmQtc3RlcDphZnRlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTViNzc2O1xuICAgICAgICB9XG5cbiAgICAgICAgLndpemFyZC1zdGVwLWxhYmVsIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNTViNzc2O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNiMTA4MDU7XG4gICAgICAgICAgICBjb2xvcjogI2IxMDgwNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53aXphcmQtc3RlcC1sYWJlbCB7XG4gICAgICAgICAgICBjb2xvcjogI2IxMDgwNTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC53aXphcmQ6bm90KC53aXphcmQtZmluaXNoZWQpICYuYWN0aXZlOmhvdmVyOmJlZm9yZSxcbiAgICAud2l6YXJkOm5vdCgud2l6YXJkLWZpbmlzaGVkKSAmLmNvbXBsZXRlOmhvdmVyOmJlZm9yZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2IxMDgwNTtcbiAgICAgICAgY29sb3I6ICNiMTA4MDU7XG4gICAgfVxuXG4gICAgLndpemFyZDpub3QoLndpemFyZC1maW5pc2hlZCkgJi5jb21wbGV0ZTpob3ZlciArIC53aXphcmQtc3RlcDphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiMTA4MDU7XG4gICAgfVxufVxuXG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJ3aXphcmQtc3VjY2Vzc1wiPlxuICAgICAgICA8ZGl2IHYtaWY9XCJpY29uXCIgY2xhc3M9XCJ3aXphcmQtc3VjY2Vzcy1pY29uXCI+XG4gICAgICAgICAgICA8aSA6Y2xhc3M9XCJpY29uXCIvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aDMgdi1pZj1cInRpdGxlXCIgY2xhc3M9XCJ3aXphcmQtc3VjY2Vzcy10aXRsZVwiIHYtaHRtbD1cInRpdGxlXCIvPlxuXG4gICAgICAgIDxzbG90Lz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgV2l6YXJkU3RlcCBmcm9tICcuL1dpemFyZFN0ZXAnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnd2l6YXJkLXN1Y2Nlc3MnLFxuXG4gICAgZXh0ZW5kczogV2l6YXJkU3RlcCxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2ZhIGZhLWNoZWNrJ1xuICAgICAgICB9LFxuXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnU3VjY2VzcyEnXG4gICAgICAgIH0sXG5cbiAgICB9XG5cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5AaW1wb3J0ICcuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnMuc2Nzcyc7XG5AaW1wb3J0ICcuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXMuc2Nzcyc7XG5cbiR3aXphcmQtc3VjY2Vzcy1jb2xvcjogIzU1Yjc3NjtcblxuLndpemFyZC1zdWNjZXNzIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLWxnO1xuICAgIHBhZGRpbmc6ICRmb250LXNpemUtbGcgKiA0ICRmb250LXNpemUtbGc7XG5cbiAgICAud2l6YXJkLXN1Y2Nlc3MtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtbGcgKiAxLjU7XG4gICAgICAgIGNvbG9yOiAkd2l6YXJkLXN1Y2Nlc3MtY29sb3I7XG4gICAgfVxuXG4gICAgLndpemFyZC1zdWNjZXNzLWljb24ge1xuICAgICAgICBjb2xvcjogJHdpemFyZC1zdWNjZXNzLWNvbG9yO1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtbGcgKiAyLjU7XG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkICR3aXphcmQtc3VjY2Vzcy1jb2xvcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogJGZvbnQtc2l6ZS1sZyAqIDY7XG4gICAgICAgIGhlaWdodDogJGZvbnQtc2l6ZS1sZyAqIDY7XG4gICAgICAgIG1hcmdpbjogJGZvbnQtc2l6ZS1sZyBhdXRvO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgaSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwid2l6YXJkXCI+XG5cbiAgICAgICAgPHdpemFyZC1oZWFkZXIgdi1pZj1cImhlYWRlciAmJiAhaXNGaW5pc2hlZFwiIHJlZj1cImhlYWRlclwiIHYtaHRtbD1cImhlYWRlclwiLz5cblxuICAgICAgICA8d2l6YXJkLXByb2dyZXNzXG4gICAgICAgICAgICB2LWlmPVwiIWlzRmluaXNoZWRcIlxuICAgICAgICAgICAgcmVmPVwicHJvZ3Jlc3NcIlxuICAgICAgICAgICAgOmFjdGl2ZT1cImN1cnJlbnRTdGVwXCJcbiAgICAgICAgICAgIDpoaWdoZXN0LXN0ZXA9XCJoaWdoZXN0U3RlcFwiXG4gICAgICAgICAgICA6c3RlcHM9XCJzdGVwc1wiXG4gICAgICAgICAgICBAY2xpY2s9XCJvblByb2dyZXNzQ2xpY2tcIlxuICAgICAgICAvPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3aXphcmQtY29udGVudFwiIHJlZj1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxzbG90IHYtaWY9XCIhaXNGaW5pc2hlZFwiIG5hbWU9XCJjb250ZW50XCIvPlxuXG4gICAgICAgICAgICA8c2xpZGUtZGVja1xuICAgICAgICAgICAgICAgIHYtaWY9XCIhaXNGaW5pc2hlZFwiXG4gICAgICAgICAgICAgICAgcmVmPVwic2xpZGVEZWNrXCJcbiAgICAgICAgICAgICAgICA6YWN0aXZlPVwiY3VycmVudFN0ZXBcIlxuICAgICAgICAgICAgICAgIDpyZXNpemUtbW9kZWw9XCJyZXNpemVNb2RlXCJcbiAgICAgICAgICAgICAgICBAYmVmb3JlLWVudGVyPVwib25CZWZvcmVFbnRlclwiXG4gICAgICAgICAgICAgICAgQGVudGVyPVwib25FbnRlclwiXG4gICAgICAgICAgICAgICAgQGxlYXZlPVwib25MZWF2ZVwiPlxuICAgICAgICAgICAgICAgIDxzbG90IC8+XG4gICAgICAgICAgICA8L3NsaWRlLWRlY2s+XG5cbiAgICAgICAgICAgIDxzbG90IHYtZWxzZS1pZj1cImlzRmluaXNoZWQgJiYgIWhhc0ZhaWxlZFwiIG5hbWU9XCJzdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgPHdpemFyZC1zdWNjZXNzIHJlZj1cInN1Y2Nlc3NcIi8+XG4gICAgICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgICAgIDxzbG90IHYtZWxzZS1pZj1cImlzRmluaXNoZWQgJiYgaGFzRmFpbGVkXCIgbmFtZT1cImVycm9yXCI+XG4gICAgICAgICAgICAgICAgPHdpemFyZC1lcnJvciByZWY9XCJlcnJvclwiIDplcnJvcnM9XCJlcnJvcnNcIiBAYmFjaz1cIm9uQ2xpY2tUZXN0XCIvPlxuICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c2xvdCB2LWlmPVwiIWlzRmluaXNoZWRcIiBuYW1lPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgPGhyPlxuXG4gICAgICAgICAgICA8d2l6YXJkLWJ1dHRvbnNcbiAgICAgICAgICAgICAgICByZWY9XCJidXR0b25zXCJcbiAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxuICAgICAgICAgICAgICAgIDpzdGVwcz1cInN0ZXBzXCJcbiAgICAgICAgICAgICAgICA6YWN0aXZlPVwiY3VycmVudFN0ZXBcIlxuICAgICAgICAgICAgICAgIDphY3Rpdml0eT1cImFjdGl2aXR5XCJcbiAgICAgICAgICAgICAgICA6YmFjay1idXR0b249XCIhaXNCYWNrQnV0dG9uRGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgIDpuZXh0LWJ1dHRvbj1cIiFpc05leHRCdXR0b25EaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgOmZpbmlzaC1idXR0b249XCIhaXNGaW5pc2hCdXR0b25EaXNhYmxlZFwiXG4gICAgICAgICAgICAgICAgQGNsaWNrOmJhY2s9XCJvbkNsaWNrQmFja1wiXG4gICAgICAgICAgICAgICAgQGNsaWNrOmZpbmlzaD1cIm9uQ2xpY2tGaW5pc2hcIlxuICAgICAgICAgICAgICAgIEBjbGljazpuZXh0PVwib25DbGlja05leHRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9zbG90PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGVhY2ggfSBmcm9tICcuLi8uLi9IZWxwZXJzL0Z1bmN0aW9ucyc7XG5pbXBvcnQgeyBmaW5kIH0gZnJvbSAnLi4vLi4vSGVscGVycy9GdW5jdGlvbnMnO1xuaW1wb3J0IFNsaWRlRGVjayBmcm9tICcuLi9TbGlkZURlY2snO1xuaW1wb3J0IFdpemFyZEJ1dHRvbnMgZnJvbSAnLi9XaXphcmRCdXR0b25zJztcbmltcG9ydCBXaXphcmRFcnJvciBmcm9tICcuL1dpemFyZEVycm9yJztcbmltcG9ydCBXaXphcmRIZWFkZXIgZnJvbSAnLi9XaXphcmRIZWFkZXInO1xuaW1wb3J0IFdpemFyZFByb2dyZXNzIGZyb20gJy4vV2l6YXJkUHJvZ3Jlc3MnO1xuaW1wb3J0IFdpemFyZFN1Y2Nlc3MgZnJvbSAnLi9XaXphcmRTdWNjZXNzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ3dpemFyZCcsXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIFNsaWRlRGVjayxcbiAgICAgICAgV2l6YXJkQnV0dG9ucyxcbiAgICAgICAgV2l6YXJkRXJyb3IsXG4gICAgICAgIFdpemFyZEhlYWRlcixcbiAgICAgICAgV2l6YXJkUHJvZ3Jlc3MsXG4gICAgICAgIFdpemFyZFN1Y2Nlc3NcbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGluZGV4IG9yIGtleSBvZiB0aGUgYWN0aXZlIHN0ZXAuXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtTdHJpbmd8TnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZlOiB7XG4gICAgICAgICAgICB0eXBlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdGhlIGluZGV4IG9yIGtleSBvZiB0aGUgbWF4IGNvbXBsZXRlZCBzdGVwLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfE51bWJlcn1cbiAgICAgICAgICovXG4gICAgICAgIGNvbXBsZXRlZDogW1N0cmluZywgTnVtYmVyXSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdyB0aGUgYWN0aXZpdHkgaW5kaWNhdG9yIGluIHRoZSBuZXh0IG9yIGZpbmlzaCBidXR0b24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZpdHk6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3cgc2hvdWxkIHRoZSBcIkJhY2tcIiBidXR0b24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgYmFja0J1dHRvbjoge1xuICAgICAgICAgICAgdHlwZTogW0Z1bmN0aW9uLCBCb29sZWFuXSxcbiAgICAgICAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFN0ZXAgPiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG93IHNob3VsZCB0aGUgXCJGaW5pc2hcIiBidXR0b24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgZmluaXNoQnV0dG9uOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYXNzIGEgaGVhZGVyIGFzIGEgc3RyaW5nLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgaGVhZGVyOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3cgc2hvdWxkIHRoZSBcIk5leHRcIiBidXR0b24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtCb29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgbmV4dEJ1dHRvbjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG1vZGUgZGV0ZXJtaW5lcyBob3cgdGhlIHBvcG92ZXIgY29udGVudCB3aWxsIGZsZXggYmFzZWQgb24gdGhlXG4gICAgICAgICAqIHZhcnlpbmcgaGVpZ2h0cyBvZiB0aGUgc2xpZGVzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICByZXNpemVNb2RlOiB7XG4gICAgICAgICAgICB0eXBlOiBbRnVuY3Rpb24sIEJvb2xlYW4sIFN0cmluZ10sXG4gICAgICAgICAgICBkZWZhdWx0OiAnYXV0bycsXG4gICAgICAgICAgICB2YWxpZGF0ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbJ2F1dG8nLCAnaW5pdGlhbCcsICdpbmhlcml0J10uaW5kZXhPZih2YWx1ZSkgIT09IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbGlkYXRlIGlmIHRoZSBkYXRhIGlucHV0IGZvciB0aGUgc3RlcCBpcyB2YWxpZC4gUmVxdWlyZWQgQm9vbGVhblxuICAgICAgICAgKiBvciBhIHByZWRpY2F0ZSBmdW5jdGlvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge0Z1bmN0aW9ufEJvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICB2YWxpZGF0ZToge1xuICAgICAgICAgICAgdHlwZTogW0Z1bmN0aW9uLCBCb29sZWFuXSxcbiAgICAgICAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuXG4gICAgICAgIGFjdGl2ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0ZXAgPSB0aGlzLmluZGV4KCk7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgYmFjaygpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTpzdGVwJywgdGhpcy5jdXJyZW50U3RlcCA9IE1hdGgubWF4KHRoaXMuY3VycmVudFN0ZXAgLSAxLCAwKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGlzYWJsZUJ1dHRvbnMoKSB7XG4gICAgICAgICAgICB0aGlzLmlzQmFja0J1dHRvbkRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaXNGaW5pc2hCdXR0b25EaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzTmV4dEJ1dHRvbkRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBkaXNhYmxlQmFja0J1dHRvbigpIHtcbiAgICAgICAgICAgIHRoaXMuaXNCYWNrQnV0dG9uRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRpc2FibGVGaW5pc2hCdXR0b24oKSB7XG4gICAgICAgICAgICB0aGlzLmlzRmluaXNoQnV0dG9uRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRpc2FibGVOZXh0QnV0dG9uKCkge1xuICAgICAgICAgICAgdGhpcy5pc05leHRCdXR0b25EaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZW1pdEJ1YmJsZUV2ZW50KGtleSwgLi4uYXJncykge1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5zbGlkZURlY2suc2xpZGUodGhpcy5jdXJyZW50U3RlcCkuY29tcG9uZW50SW5zdGFuY2UuJGVtaXQuYXBwbHkoXG4gICAgICAgICAgICAgICAgdGhpcy4kcmVmcy5zbGlkZURlY2suc2xpZGUodGhpcy5jdXJyZW50U3RlcCkuY29tcG9uZW50SW5zdGFuY2UsIGFyZ3MgPSBba2V5XS5jb25jYXQoYXJncylcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHRoaXMuJGVtaXQuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZW5hYmxlQnV0dG9ucygpIHtcbiAgICAgICAgICAgIHRoaXMuaXNCYWNrQnV0dG9uRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNGaW5pc2hCdXR0b25EaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5pc05leHRCdXR0b25EaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGVuYWJsZUJhY2tCdXR0b24oKSB7XG4gICAgICAgICAgICB0aGlzLmlzQmFja0J1dHRvbkRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZW5hYmxlRmluaXNoQnV0dG9uKCkge1xuICAgICAgICAgICAgdGhpcy5pc0ZpbmlzaEJ1dHRvbkRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZW5hYmxlTmV4dEJ1dHRvbigpIHtcbiAgICAgICAgICAgIHRoaXMuaXNOZXh0QnV0dG9uRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSxcblxuICAgICAgICBmaW5pc2goc3RhdHVzLCBlcnJvcnMgPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICAgICAgICAgIHRoaXMuaGFzRmFpbGVkID0gc3RhdHVzID09PSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuaXNGaW5pc2hlZCA9IHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5kZXgoa2V5ID0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIHRoaXMuJHNsb3RzLmRlZmF1bHQuaW5kZXhPZihcbiAgICAgICAgICAgICAgICBmaW5kKHRoaXMuJHNsb3RzLmRlZmF1bHQsIFsna2V5Jywga2V5IHx8IHRoaXMuYWN0aXZlXSkgfHwgdGhpcy4kc2xvdHMuZGVmYXVsdFtrZXkgfHwgdGhpcy5hY3RpdmVdXG4gICAgICAgICAgICApKTtcbiAgICAgICAgfSxcblxuICAgICAgICBuZXh0KCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOnN0ZXAnLCB0aGlzLmN1cnJlbnRTdGVwID0gTWF0aC5taW4odGhpcy5jdXJyZW50U3RlcCArIDEsIHRoaXMuJHJlZnMuc2xpZGVEZWNrLnNsaWRlcygpLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBvbkJlZm9yZUVudGVyKHNsaWRlLCBwcmV2KSB7XG4gICAgICAgICAgICBzbGlkZS5jb250ZXh0LiRlbWl0KCdiZWZvcmUtZW50ZXInLCBzbGlkZSwgcHJldik7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdiZWZvcmUtZW50ZXInLCBzbGlkZSwgcHJldik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25DbGlja1Rlc3QoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNGaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9uQ2xpY2tCYWNrKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRCdWJibGVFdmVudCgnYmFjaycsIGV2ZW50KTtcblxuICAgICAgICAgICAgaWYoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG9uQ2xpY2tGaW5pc2goZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdEJ1YmJsZUV2ZW50KCdmaW5pc2gnLCBldmVudCk7XG5cbiAgICAgICAgICAgIGlmKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmlzaCh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBvbkNsaWNrTmV4dChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0QnViYmxlRXZlbnQoJ25leHQnLCBldmVudCk7XG5cbiAgICAgICAgICAgIGlmKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBvbkVudGVyKHNsaWRlLCBwcmV2KSB7XG4gICAgICAgICAgICB0aGlzLmhpZ2hlc3RTdGVwID0gTWF0aC5tYXgodGhpcy5oaWdoZXN0U3RlcCwgdGhpcy4kcmVmcy5zbGlkZURlY2suJHJlZnMuc2xpZGVzLmdldFNsaWRlSW5kZXgoc2xpZGUpKTtcbiAgICAgICAgICAgIHNsaWRlLmNvbXBvbmVudEluc3RhbmNlLiRyZWZzLndpemFyZCA9IHRoaXM7XG4gICAgICAgICAgICBzbGlkZS5jb250ZXh0LiRlbWl0KCdlbnRlcicsIHNsaWRlLCBwcmV2KTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2VudGVyJywgc2xpZGUsIHByZXYpO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9uTGVhdmUoc2xpZGUsIHByZXYpIHtcbiAgICAgICAgICAgIHNsaWRlLmNvbnRleHQuJGVtaXQoJ2xlYXZlJywgc2xpZGUsIHByZXYpO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnbGVhdmUnLCBzbGlkZSwgcHJldik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25Qcm9ncmVzc0NsaWNrKGV2ZW50LCBzbGlkZSkge1xuICAgICAgICAgICAgaWYodGhpcy4kcmVmcy5zbGlkZURlY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gdGhpcy4kcmVmcy5zbGlkZURlY2suJHJlZnMuc2xpZGVzLmdldFNsaWRlSW5kZXgoc2xpZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZpbmlzaGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IHRoaXMuaW5kZXgoc2xpZGUua2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGNvbnN0IHNsaWRlID0gdGhpcy4kcmVmcy5zbGlkZURlY2suc2xpZGUodGhpcy5jdXJyZW50U3RlcCk7XG5cbiAgICAgICAgaWYoc2xpZGUpIHtcbiAgICAgICAgICAgIChzbGlkZS5jb21wb25lbnRJbnN0YW5jZSB8fCBzbGlkZS5jb250ZXh0KS4kcmVmcy53aXphcmQgPSB0aGlzO1xuICAgICAgICAgICAgKHNsaWRlLmNvbXBvbmVudEluc3RhbmNlIHx8IHNsaWRlLmNvbnRleHQpLiRlbWl0KCdlbnRlcicpO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZW50ZXInLCBzbGlkZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0ZXBzID0gdGhpcy4kcmVmcy5zbGlkZURlY2suc2xpZGVzKCk7XG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzdGVwczogW10sXG4gICAgICAgICAgICBlcnJvcnM6IG51bGwsXG4gICAgICAgICAgICBoYXNGYWlsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNGaW5pc2hlZDogZmFsc2UsXG4gICAgICAgICAgICBjdXJyZW50U3RlcDogdGhpcy5pbmRleCgpLFxuICAgICAgICAgICAgaGlnaGVzdFN0ZXA6IHRoaXMuaW5kZXgodGhpcy5jb21wbGV0ZWQpLFxuICAgICAgICAgICAgaXNCYWNrQnV0dG9uRGlzYWJsZWQ6IHRoaXMuYmFja0J1dHRvbiA9PT0gZmFsc2UsXG4gICAgICAgICAgICBpc05leHRCdXR0b25EaXNhYmxlZDogdGhpcy5uZXh0QnV0dG9uID09PSBmYWxzZSxcbiAgICAgICAgICAgIGlzRmluaXNoQnV0dG9uRGlzYWJsZWQ6IHRoaXMuZmluaXNoQnV0dG9uID09PSBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCAnLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zLnNjc3MnO1xuQGltcG9ydCAnLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzLnNjc3MnO1xuXG4ud2l6YXJkIHtcbiAgICAuc2xpZGUtZGVjay1jb250ZW50IHtcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgIH1cblxuICAgIC53aXphcmQtY29udGVudCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmc6IC41cmVtO1xuXG4gICAgICAgICYgKyBociB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLndpemFyZC1idXR0b25zIHtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG59XG5cbjwvc3R5bGU+XG4iLCJpbXBvcnQgV2l6YXJkIGZyb20gJy4vV2l6YXJkJztcbmltcG9ydCBXaXphcmRCdXR0b25zIGZyb20gJy4vV2l6YXJkQnV0dG9ucyc7XG5pbXBvcnQgV2l6YXJkSGVhZGVyIGZyb20gJy4vV2l6YXJkSGVhZGVyJztcbmltcG9ydCBXaXphcmRQcm9ncmVzcyBmcm9tICcuL1dpemFyZFByb2dyZXNzJztcbmltcG9ydCBXaXphcmRTdGVwIGZyb20gJy4vV2l6YXJkU3RlcCc7XG5pbXBvcnQgV2l6YXJkU3VjY2VzcyBmcm9tICcuL1dpemFyZFN1Y2Nlc3MnO1xuaW1wb3J0IFdpemFyZEVycm9yIGZyb20gJy4vV2l6YXJkRXJyb3InO1xuaW1wb3J0IFZ1ZUluc3RhbGxlciBmcm9tICcuLi8uLi9IZWxwZXJzL1Z1ZUluc3RhbGxlci9WdWVJbnN0YWxsZXInO1xuXG5jb25zdCBwbHVnaW4gPSBWdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIFdpemFyZCxcbiAgICAgICAgICAgIFdpemFyZEJ1dHRvbnMsXG4gICAgICAgICAgICBXaXphcmRIZWFkZXIsXG4gICAgICAgICAgICBXaXphcmRQcm9ncmVzcyxcbiAgICAgICAgICAgIFdpemFyZFN0ZXAsXG4gICAgICAgICAgICBXaXphcmRTdWNjZXNzLFxuICAgICAgICAgICAgV2l6YXJkRXJyb3JcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgV2l6YXJkO1xuIiwiY29uc3QgU1RZTEVfQVRUUklCVVRFUyA9IFtcbiAgICAnZm9udCcsXG4gICAgJ2ZvbnRGYW1pbHknLFxuICAgICdmb250S2VybmluZycsXG4gICAgJ2ZvbnRTaXplJyxcbiAgICAnZm9udFN0cmV0Y2gnLFxuICAgICdmb250U3R5bGUnLFxuICAgICdmb250VmFyaWFudCcsXG4gICAgJ2ZvbnRWYXJpYW50TGlnYXR1cmVzJyxcbiAgICAnZm9udFZhcmlhbnRDYXBzJyxcbiAgICAnZm9udFZhcmlhbnROdW1lcmljJyxcbiAgICAnZm9udFZhcmlhbnRFYXN0QXNpYW4nLFxuICAgICdmb250V2VpZ2h0JyxcbiAgICAnbGluZUhlaWdodCcsXG4gICAgJ2xldHRlclNwYWNpbmcnLFxuICAgICdwYWRkaW5nJyxcbiAgICAnbWFyZ2luJyxcbiAgICAndGV4dEFsaWduJyxcbiAgICAndGV4dEFsaWduTGFzdCcsXG4gICAgJ3RleHREZWNvcmF0aW9uJyxcbiAgICAndGV4dERlY29yYXRpb25MaW5lJyxcbiAgICAndGV4dERlY29yYXRpb25TdHlsZScsXG4gICAgJ3RleHREZWNvcmF0aW9uQ29sb3InLFxuICAgICd0ZXh0RGVjb3JhdGlvblNraXBJbmsnLFxuICAgICd0ZXh0RGVjb3JhdGlvblBvc2l0aW9uJyxcbiAgICAndGV4dEluZGVudCcsXG4gICAgJ3RleHRSZW5kZXJpbmcnLFxuICAgICd0ZXh0U2hhZG93JyxcbiAgICAndGV4dFNpemVBZGp1c3QnLFxuICAgICd0ZXh0T3ZlcmZsb3cnLFxuICAgICd0ZXh0VHJhbnNmb3JtJyxcbiAgICAnd2lkdGgnLFxuICAgICd3b3JkQnJlYWsnLFxuICAgICd3b3JkU3BhY2luZycsXG4gICAgJ3dvcmRXcmFwJ1xuXTtcblxuXG5mdW5jdGlvbiBpbnQoc3RyKSB7XG4gICAgaWYodHlwZW9mIHN0ciA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgICBlbHNlIGlmKCFzdHIgfHwgIXN0ci5yZXBsYWNlKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZUludChzdHIucmVwbGFjZSgvW15cXGQuXSsvZywgJycpKTtcbn1cblxuZnVuY3Rpb24gaW5wdXQoZGl2LCBlbCkge1xuICAgIGRpdi5pbm5lckhUTUwgPSBlbC52YWx1ZS5yZXBsYWNlKC8oPzpcXHJcXG58XFxyfFxcbikvZywgJzxiciAvPicpO1xufVxuXG5mdW5jdGlvbiBoZWlnaHQoZWwpIHtcbiAgICByZXR1cm4gaW50KGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCk7XG59XG5cbmZ1bmN0aW9uIHN0eWxlKGVsLCBhdHRyKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVthdHRyXTtcbn1cblxuZnVuY3Rpb24gcmVzaXplKHRhcmdldCwgZGl2LCBtaW5IZWlnaHQsIG1heEhlaWdodCkge1xuICAgIGNvbnN0IGR5bmFtaWNIZWlnaHQgPSBNYXRoLm1heChoZWlnaHQoZGl2KSArIGludChzdHlsZShkaXYsICdsaW5lSGVpZ2h0JykpLCBtaW5IZWlnaHQpO1xuICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSAoKCFtYXhIZWlnaHQgfHwgZHluYW1pY0hlaWdodCA8IG1heEhlaWdodCkgPyBkeW5hbWljSGVpZ2h0IDogbWF4SGVpZ2h0KSArICdweCc7XG59XG5cbmZ1bmN0aW9uIHNldE1pbkhlaWdodChkaXYsIGVsKSB7XG4gICAgZGl2LnN0eWxlLm1pbkhlaWdodCA9IGhlaWdodChlbCkgKyAncHgnO1xufVxuXG5mdW5jdGlvbiBtaW1pYyhlbCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcblxuICAgIGZvcihsZXQgaSBpbiBTVFlMRV9BVFRSSUJVVEVTKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IFNUWUxFX0FUVFJJQlVURVNbaV07XG5cbiAgICAgICAgZGl2LnN0eWxlW2tleV0gPSBzdHlsZXNba2V5XTtcbiAgICB9XG5cbiAgICBkaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIGRpdi5zdHlsZS5ib3R0b20gPSAnMTAwJSc7XG4gICAgZGl2LnN0eWxlLnpJbmRleCA9IC0xO1xuICAgIGRpdi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cbiAgICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBpbml0KGVsLCBtYXhIZWlnaHQpIHtcbiAgICBjb25zdCBkaXYgPSBtaW1pYyhlbCk7XG4gICAgY29uc3QgbWluSGVpZ2h0ID0gaGVpZ2h0KGVsKTtcblxuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZXZlbnQgPT4ge1xuICAgICAgICBpbnB1dChkaXYsIGV2ZW50LnRhcmdldCk7XG4gICAgICAgIHJlc2l6ZShlbCwgZGl2LCBtaW5IZWlnaHQsIG1heEhlaWdodCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG5cbiAgICBpbnB1dChkaXYsIGVsKTtcbiAgICByZXNpemUoZWwsIGRpdiwgbWluSGVpZ2h0LCBtYXhIZWlnaHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBpbnNlcnRlZChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICAgICAgaWYoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAndGV4dGFyZWEnKSB7XG4gICAgICAgICAgICBlbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZighZWwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSB0ZXh0YXJlYSBpcyByZXF1aXJlZCBmb3IgdGhlIHYtYXV0b2dyb3cgZGlyZWN0aXZlLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5pdChlbCwgYmluZGluZy52YWx1ZSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBpc1VuZGVmaW5lZCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCB0cmFuc2l0aW9uIGZyb20gJy4uLy4uL0hlbHBlcnMvVHJhbnNpdGlvbic7XG5cbmZ1bmN0aW9uIHNob3coZWwsIHRhcmdldCwgdm5vZGUpIHtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY29sbGFwc2UnKTtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgIHRhcmdldC4kY29sbGFwc2VkSGVpZ2h0ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXQpLmhlaWdodDtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2luZycpO1xuXG4gICAgdm5vZGUuY29udGV4dC4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gdGFyZ2V0LiRjb2xsYXBzZWRIZWlnaHQ7XG4gICAgfSk7XG5cbiAgICB0cmFuc2l0aW9uKHRhcmdldCkudGhlbihkZWxheSA9PiB7XG4gICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBudWxsO1xuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKTtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNpbmcnKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnY29sbGFwc2VkJyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhpZGUoZWwsIHRhcmdldCwgdm5vZGUpIHtcbiAgICB0YXJnZXQuc3R5bGUuaGVpZ2h0ID0gdGFyZ2V0LiRjb2xsYXBzZWRIZWlnaHQ7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNpbmcnKTtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnY29sbGFwc2UnKTtcblxuICAgIHZub2RlLmNvbnRleHQuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmhlaWdodCA9IDA7XG4gICAgfSk7XG5cbiAgICB0cmFuc2l0aW9uKHRhcmdldCkudGhlbihkZWxheSA9PiB7XG4gICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPSBudWxsO1xuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2UnKTtcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnLCAnY29sbGFwc2luZycpO1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZWQnKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgaW5zZXJ0ZWQoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgICAgIGlmKGlzVW5kZWZpbmVkKGJpbmRpbmcudmFsdWUpIHx8IGJpbmRpbmcudmFsdWUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlZCcpO1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdjb2xsYXBzZScpO1xuXG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0JykgfHwgZWwuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGFyZ2V0KTtcblxuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3coZWwsIGVsZW1lbnQsIHZub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUoZWwsIGVsZW1lbnQsIHZub2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgaWYoIWVsZW1lbnQuJGNvbGxhcHNlZEhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LiRjb2xsYXBzZWRIZWlnaHQgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgICAgIGlmKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY29sbGFwc2UnKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IGdldCB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcbmltcG9ydCB7IGtlYmFiQ2FzZSB9IGZyb20gJy4uLy4uL0hlbHBlcnMvRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgaW5zZXJ0ZWQoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gZWwucXVlcnlTZWxlY3RvcignaW5wdXQsIHRleHRhcmVhJykgfHwgZWw7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZ2V0KHZub2RlLmNvbnRleHQsIGJpbmRpbmcuZXhwcmVzc2lvbik7XG5cbiAgICAgICAgbGV0IGVkaXRhYmxlID0gIWlucHV0LnZhbHVlO1xuXG4gICAgICAgIGNvbnN0IHVwZGF0ZSA9IHZhbHVlID0+IHtcbiAgICAgICAgICAgIGlmKGVkaXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBrZWJhYkNhc2UodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB2bm9kZS5jb250ZXh0LiR3YXRjaChiaW5kaW5nLmV4cHJlc3Npb24sIHVwZGF0ZSk7XG5cbiAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGtlYmFiQ2FzZShldmVudC50YXJnZXQudmFsdWUpICsgKFxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZS5tYXRjaCgvXFxzJC8pID8gJyAnIDogJydcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYoZXZlbnQgaW5zdGFuY2VvZiBJbnB1dEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZWRpdGFibGUgPSAhZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBrZWJhYkNhc2UoZXZlbnQudGFyZ2V0LnZhbHVlIHx8IGJpbmRpbmcuZXhwcmVzc2lvbi5zcGxpdCgnLicpLnJlZHVjZSgobyxpKT0+b1tpXSwgdm5vZGUuY29udGV4dCkpO1xuICAgICAgICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JykpO1xuICAgICAgICB9KTtcblxuICAgICAgICAhaW5wdXQudmFsdWUgJiYgdXBkYXRlKHZhbHVlKTtcbiAgICB9XG5cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJsb2IodXJsLCBwcm9ncmVzcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xuXG4gICAgICAgIGlmKGlzRnVuY3Rpb24ocHJvZ3Jlc3MpKSB7XG4gICAgICAgICAgICB4aHIub25wcm9ncmVzcyA9IGUgPT4gcHJvZ3Jlc3MoZSwgeGhyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHhoci5vbmVycm9yID0gZSA9PiByZWplY3QoZSk7XG4gICAgICAgIHhoci5vbmFib3J0ID0gZSA9PiByZWplY3QoZSk7XG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5yZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IHdyYXAgfSBmcm9tICcuLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uL0Z1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVsYXBzZWQobWlsbGlzZWNvbmRzLCBjYWxsYmFjaywgZWxhcHNlZENhbGxiYWNrKSB7XG4gICAgbGV0IGhhc0VsYXBzZWQgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBoYXNFbGFwc2VkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYoaXNGdW5jdGlvbihlbGFwc2VkQ2FsbGJhY2spKSB7XG4gICAgICAgICAgICAgICAgZWxhcHNlZENhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIG1pbGxpc2Vjb25kcylcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQoaW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIGNvbnN0IGludGVydmFsID0gc3RhcnQoKSwgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZXIocmVzb2x2ZXIsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZXIocmVzcG9uc2UgfHwgaGFzRWxhcHNlZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgY2FsbGJhY2sod3JhcChyZXNvbHZlLCByZXNvbHZlciksIHdyYXAocmVqZWN0LCByZXNvbHZlcikpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb21pc2UuZmluYWxseShzdG9wLCBzdG9wKTtcbn1cbiIsImNvbnN0IGVhc2luZ3MgPSB7XG4gICAgbGluZWFyKHQpIHtcbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfSxcbiAgICBlYXNlSW5RdWFkKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgKiB0O1xuICAgIH0sXG4gICAgZWFzZU91dFF1YWQodCkge1xuICAgICAgICByZXR1cm4gdCAqICgyIC0gdCk7XG4gICAgfSxcbiAgICBlYXNlSW5PdXRRdWFkKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgPCAwLjUgPyAyICogdCAqIHQgOiAtMSArICg0IC0gMiAqIHQpICogdDtcbiAgICB9LFxuICAgIGVhc2VJbkN1YmljKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgKiB0ICogdDtcbiAgICB9LFxuICAgIGVhc2VPdXRDdWJpYyh0KSB7XG4gICAgICAgIHJldHVybiAoLS10KSAqIHQgKiB0ICsgMTtcbiAgICB9LFxuICAgIGVhc2VJbk91dEN1YmljKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgPCAwLjUgPyA0ICogdCAqIHQgKiB0IDogKHQgLSAxKSAqICgyICogdCAtIDIpICogKDIgKiB0IC0gMikgKyAxO1xuICAgIH0sXG4gICAgZWFzZUluUXVhcnQodCkge1xuICAgICAgICByZXR1cm4gdCAqIHQgKiB0ICogdDtcbiAgICB9LFxuICAgIGVhc2VPdXRRdWFydCh0KSB7XG4gICAgICAgIHJldHVybiAxIC0gKC0tdCkgKiB0ICogdCAqIHQ7XG4gICAgfSxcbiAgICBlYXNlSW5PdXRRdWFydCh0KSB7XG4gICAgICAgIHJldHVybiB0IDwgMC41ID8gOCAqIHQgKiB0ICogdCAqIHQgOiAxIC0gOCAqICgtLXQpICogdCAqIHQgKiB0O1xuICAgIH0sXG4gICAgZWFzZUluUXVpbnQodCkge1xuICAgICAgICByZXR1cm4gdCAqIHQgKiB0ICogdCAqIHQ7XG4gICAgfSxcbiAgICBlYXNlT3V0UXVpbnQodCkge1xuICAgICAgICByZXR1cm4gMSArICgtLXQpICogdCAqIHQgKiB0ICogdDtcbiAgICB9LFxuICAgIGVhc2VJbk91dFF1aW50KHQpIHtcbiAgICAgICAgcmV0dXJuIHQgPCAwLjUgPyAxNiAqIHQgKiB0ICogdCAqIHQgKiB0IDogMSArIDE2ICogKC0tdCkgKiB0ICogdCAqIHQgKiB0O1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNjcm9sbFRvKGRlc3RpbmF0aW9uLCBkdXJhdGlvbiA9IDEwMDAsIGVhc2luZyA9ICdlYXNlSW5RdWFkJywgdmlld3BvcnQgPSBmYWxzZSkge1xuICAgIGlmKCF2aWV3cG9ydCkge1xuICAgICAgICB2aWV3cG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICB9XG5cbiAgICBjb25zdCB2aWV3cG9ydEJvdW5kcyA9IHZpZXdwb3J0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uQm91bmRzID0gZGVzdGluYXRpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgZGVzdGluYXRpb25PZmZzZXRUb1Njcm9sbCA9IE1hdGguY2VpbChkZXN0aW5hdGlvbkJvdW5kcy50b3AgKyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wKTtcblxuICAgIGZ1bmN0aW9uIGlzU2Nyb2xsQm90dG9tKCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA+PSBNYXRoLmZsb29yKHZpZXdwb3J0Qm91bmRzLmhlaWdodCkgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgICAgIGNvbnN0IGlzU3RhcnRpbmdCb3R0b20gPSBpc1Njcm9sbEJvdHRvbSgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHNjcm9sbCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICAgIGNvbnN0IHRpbWUgPSBNYXRoLm1pbigxLCAoKHBlcmZvcm1hbmNlLm5vdygpIC0gc3RhcnRUaW1lKSAvIGR1cmF0aW9uKSk7XG4gICAgICAgICAgICBjb25zdCB0aW1lRnVuY3Rpb24gPSBlYXNpbmdzW2Vhc2luZ10odGltZSk7XG5cbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGwoMCwgTWF0aC5jZWlsKCh0aW1lRnVuY3Rpb24gKiAoZGVzdGluYXRpb25PZmZzZXRUb1Njcm9sbCAtIHN0YXJ0KSkgKyBzdGFydCkpO1xuXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9PT0gZGVzdGluYXRpb25PZmZzZXRUb1Njcm9sbCB8fCBpc1Njcm9sbEJvdHRvbSgpICYmICFpc1N0YXJ0aW5nQm90dG9tKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjcm9sbCk7XG4gICAgICAgIH1cblxuICAgICAgICBzY3JvbGwoKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IHdyYXAgfSBmcm9tICcuLi9GdW5jdGlvbnMnO1xuaW1wb3J0IHsgZmluZEtleSB9IGZyb20gJy4uL0Z1bmN0aW9ucyc7XG5cbmNvbnN0IENBTExCQUNLUyA9IHt9O1xuXG5mdW5jdGlvbiBpZChjYWxsYmFjaykge1xuICAgIHJldHVybiBmaW5kS2V5KENBTExCQUNLUywgY29tcGFyZSA9PiB7XG4gICAgICAgIHJldHVybiBjYWxsYmFjay50b1N0cmluZygpID09IGNvbXBhcmUudG9TdHJpbmcoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVzdGFydChjYWxsYmFjaywgbWlsbGlzZWNvbmRzKSB7XG4gICAgc3RvcChpZChjYWxsYmFjaykpO1xuICAgIHN0YXJ0KGNhbGxiYWNrLCBtaWxsaXNlY29uZHMpO1xufVxuXG5mdW5jdGlvbiBzdG9wKGlkKSB7XG4gICAgY2xlYXJUaW1lb3V0KGlkKTtcbiAgICBkZWxldGUgQ0FMTEJBQ0tTW2lkXTtcbn1cblxuZnVuY3Rpb24gc3RhcnQoY2FsbGJhY2ssIG1pbGxpc2Vjb25kcykge1xuICAgIHJldHVybiBDQUxMQkFDS1Nbc2V0VGltZW91dChjYWxsYmFjaywgbWlsbGlzZWNvbmRzKV0gPSBjYWxsYmFjaztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2FpdChtaWxsaXNlY29uZHMsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZXIocmVzb2x2ZXIsIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZXIocmVzcG9uc2UpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlc3RhcnQod3JhcChjYWxsYmFjaywgY2FsbGJhY2sgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHdyYXAocmVzb2x2ZSwgcmVzb2x2ZXIpLCB3cmFwKHJlamVjdCwgcmVzb2x2ZXIpKTtcbiAgICAgICAgfSksIG1pbGxpc2Vjb25kcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvbWlzZS5maW5hbGx5KHN0b3AsIHN0b3ApO1xufVxuXG5cbi8qXG5pbXBvcnQgeyB3cmFwIH0gZnJvbSAnLi4vRnVuY3Rpb25zJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi9GdW5jdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbGFwc2VkKGRlbGF5LCBjYWxsYmFjaywgZWxhcHNlZENhbGxiYWNrKSB7XG4gICAgbGV0IGhhc0VsYXBzZWQgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgICAgICByZXR1cm4gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaGFzRWxhcHNlZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmKGlzRnVuY3Rpb24oZWxhcHNlZENhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgIGVsYXBzZWRDYWxsYmFjaygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBkZWxheSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbnRlcnZhbCA9IHN0YXJ0KCksIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGZ1bmN0aW9uIHJlc29sdmVyKHJlc29sdmVyLCByZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmVyKHJlc3BvbnNlIHx8IGhhc0VsYXBzZWQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNhbGxiYWNrKHdyYXAocmVzb2x2ZSwgcmVzb2x2ZXIpLCB3cmFwKHJlamVjdCwgcmVzb2x2ZXIpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlLmZpbmFsbHkoc3RvcCwgc3RvcCk7XG59XG5cbiAqL1xuIiwiaW1wb3J0ICogYXMgZmlsdGVycyBmcm9tICcuL0ZpbHRlcnMnO1xuaW1wb3J0ICogYXMgcGx1Z2lucyBmcm9tICcuL1BsdWdpbnMnO1xuaW1wb3J0ICogYXMgY29tcG9uZW50cyBmcm9tICcuL0NvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgZGlyZWN0aXZlcyBmcm9tICcuL0RpcmVjdGl2ZXMnO1xuaW1wb3J0IFZ1ZUluc3RhbGxlciBmcm9tICcuL0hlbHBlcnMvVnVlSW5zdGFsbGVyJztcblxuZXhwb3J0ICogZnJvbSAnLi9IdHRwJztcbmV4cG9ydCAqIGZyb20gJy4vTWl4aW5zJztcbmV4cG9ydCAqIGZyb20gJy4vSGVscGVycyc7XG5leHBvcnQgKiBmcm9tICcuL1BsdWdpbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9Db21wb25lbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vRGlyZWN0aXZlcyc7XG5leHBvcnQgKiBmcm9tICcuL0ZpbHRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBWdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5wbHVnaW5zKFZ1ZSwgcGx1Z2lucyk7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5maWx0ZXJzKFZ1ZSwgZmlsdGVycyk7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5kaXJlY3RpdmVzKFZ1ZSwgZGlyZWN0aXZlcyk7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKFZ1ZSwgY29tcG9uZW50cyk7XG4gICAgfVxuXG59KTtcbiJdLCJuYW1lcyI6WyJ2YWx1ZSIsImZvcm1hdCIsIm1vbWVudCIsIlN0cmluZyIsIlZ1ZSIsIm9wdGlvbnMiLCJmaWx0ZXIiLCJEYXRlRmlsdGVyIiwiTW9tZW50RmlsdGVyIiwiY2FtZWxDYXNlIiwic3RyaW5nIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlIiwibWF0Y2giLCJjaGFyQXQiLCJsZW5ndGgiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsImV4dGVuZCIsIk9iamVjdCIsImFzc2lnbiIsImlzTnVsbCIsImlzQXJyYXkiLCJBcnJheSIsImlzT2JqZWN0IiwiZGVlcEV4dGVuZCIsInRhcmdldCIsInNvdXJjZXMiLCJzb3VyY2UiLCJzaGlmdCIsImtleSIsImNsb25lRGVlcCIsImFyZ3MiLCJpc051bWJlciIsInRvU3RyaW5nIiwiaXNOdW1lcmljIiwicGFyc2VGbG9hdCIsImVhY2giLCJzdWJqZWN0IiwiZm4iLCJpIiwiZmlyc3QiLCJhcnJheSIsInVuZGVmaW5lZCIsImlzVW5kZWZpbmVkIiwibWF0Y2hlcyIsInByb3BlcnRpZXMiLCJpc1N0cmluZyIsImdldCIsIm9iamVjdCIsInBhdGgiLCJzcGxpdCIsInJlZHVjZSIsImEiLCJiIiwicHJvcGVydHkiLCJpc0Z1bmN0aW9uIiwiRnVuY3Rpb24iLCJtYXRjaGVzUHJvcGVydHkiLCJwcmVkaWNhdGUiLCJmaW5kIiwiZmluZEluZGV4IiwiaXNCb29sZWFuIiwia2ViYWJDYXNlIiwic3RyIiwibWFwS2V5cyIsIm1hcHBlZCIsIm5lZ2F0ZSIsInBpY2tCeSIsIm9taXRCeSIsInJlbW92ZSIsImluZGV4ZXMiLCJwdXNoIiwiaW5kZXhPZiIsIndyYXAiLCJwcmVmaXgiLCJkZWxpbWV0ZXIiLCJwcmVmaXhlciIsIlJlZ0V4cCIsImpvaW4iLCJwcm9wcyIsInZhcmlhbnQiLCJ0eXBlIiwiZGVmYXVsdCIsImNvbXB1dGVkIiwidmFyaWFudENsYXNzUHJlZml4IiwiJG9wdGlvbnMiLCJuYW1lIiwidmFyaWFudENsYXNzIiwic2l6ZSIsInZhbGlkYXRlIiwic2l6ZWFibGVDbGFzc1ByZWZpeCIsInNpemVhYmxlQ2xhc3MiLCJDT0xPUlMiLCJuYW1lc3BhY2UiLCJjb2xvciIsIkJvb2xlYW4iLCJjbGFzc2VzIiwiaW5zdGFuY2UiLCJtYXAiLCJtZXRob2RzIiwidGV4dENvbG9yIiwiYmdDb2xvciIsImJvcmRlckNvbG9yIiwiYmdHcmFkaWVudENvbG9yIiwidGV4dENvbG9yQ2xhc3NlcyIsInRyaW0iLCJib3JkZXJDb2xvckNsYXNzZXMiLCJiZ0NvbG9yQ2xhc3NlcyIsImJnR3JhZGllbnRDb2xvckNsYXNzZXMiLCJjb2xvcmFibGVDbGFzc2VzIiwiZHVyYXRpb24iLCJlbCIsImdldENvbXB1dGVkU3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJudW1lcmljIiwidW5pdCIsInRyYW5zaXRpb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImRlbGF5Iiwic2V0VGltZW91dCIsImUiLCJtZXJnZUNsYXNzZXMiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJhcmciLCJjb25jYXQiLCJMT0FERURfU0NSSVBUUyIsImVsZW1lbnQiLCJ1cmwiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmQiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJWdWVJbnN0YWxsZXIiLCJ1c2UiLCJwbHVnaW4iLCJwbHVnaW5zIiwiZmlsdGVycyIsImNvbXBvbmVudCIsImNvbXBvbmVudHMiLCJkaXJlY3RpdmUiLCJkaXJlY3RpdmVzIiwiJHBsdWdpbnMiLCIkZmlsdGVycyIsIiRkaXJlY3RpdmVzIiwiJGNvbXBvbmVudHMiLCJ3aW5kb3ciLCJkZWYiLCJpbnN0YWxsIiwiQnRuIiwiaGVpZ2h0IiwiaXNGaW5pdGUiLCJBY3Rpdml0eUluZGljYXRvciIsIkJ0bkFjdGl2aXR5IiwiYW5pbWF0aW9uIiwic2hvdyIsImRlZmF1dCIsIkVsZW1lbnQiLCJ0cmlnZ2VyIiwiaW5pdGlhbGl6ZVRyaWdnZXIiLCJ0b2dnbGUiLCJpbml0aWFsaXplVHJpZ2dlcnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIiRuZXh0VGljayIsImlzU2hvd2luZyIsImZvY3VzIiwiJGVsIiwib3BlbiIsImlzRGlzcGxheWluZyIsInRoZW4iLCIkZW1pdCIsImNsb3NlIiwidHJpZ2dlcmFibGVDbGFzc2VzIiwid2F0Y2giLCJtb3VudGVkIiwiZGF0YSIsIk1vZGFsIiwiaW5zdGFudGlhdGUiLCJDb21wb25lbnQiLCJ0ZXh0IiwiZnVuY3Rpb25hbCIsInJlbmRlciIsImgiLCJjb250ZXh0IiwiX3YiLCJwcm90b3R5cGUiLCIkbW9kYWwiLCJtb2RhbCIsIiRjb250ZW50IiwiY29udGVudCIsIiRzbG90cyIsIiRtb3VudCIsIl92bm9kZSIsImJvZHkiLCIkYWxlcnQiLCJ0aXRsZSIsInByb3BzRGF0YSIsIiRvbiIsIiRjb25maXJtIiwiJHByb21wdCIsInN1Y2NlZWQiLCJmYWlsIiwic3VjY2VzcyIsIkNvbnRhaW5lciIsIk92ZXJsYXkiLCIkb3ZlcmxheSIsIm92ZXJsYXkiLCJQb3BvdmVyIiwiUG9wb3ZlckJvZHkiLCJQb3BvdmVySGVhZGVyIiwiJHBvcG92ZXIiLCJwb3BvdmVyIiwiUHJvZ3Jlc3NCYXIiLCJBbGVydCIsIkFsZXJ0TGluayIsIkFsZXJ0Q2xvc2UiLCJBbGVydEhlYWRpbmciLCJCYWRnZSIsInJlc3BvbnNlVHlwZSIsInRyYW5zZm9ybVJlcXVlc3QiLCJ0cmFuc2Zvcm1SZXNwb25zZSIsInRyYW5zZm9ybWVyIiwiRXJyb3IiLCJSZXF1ZXN0T3B0aW9ucyIsIlBST1hZX09QVElPTl9QUk9QRVJUSUVTIiwiUFJPWFlfT1BUSU9OX01FVEhPRFMiLCJwcm9wIiwic2V0IiwiYWRkIiwibWVyZ2UiLCJ2YWx1ZXMiLCJtZXRob2QiLCJhY3Rpb24iLCJjaGFpbmFibGUiLCJGb3JtRGF0YSIsIml0ZW1zIiwic3BsaWNlIiwibWVyZ2VXaXRoIiwiUmVxdWVzdCIsImhlYWRlcnMiLCJwYXJhbXMiLCJjYW5jZWxUb2tlbiIsImF4aW9zIiwiQ2FuY2VsVG9rZW4iLCJjYW5jZWwiLCIkY2FuY2VsIiwiY2FsbGJhY2siLCJiaW5kIiwicmVzZXQiLCIkZXJyb3IiLCIkc3RhdHVzIiwiJHN0YXR1c1RleHQiLCIkcmVzcG9uc2UiLCIkcmVxdWVzdFNlbnRBdCIsIiRyZXNwb25zZVJlY2VpdmVkQXQiLCJoYXNSZXNwb25zZSIsInNlbmQiLCJhZGRPcHRpb24iLCJyZXNwb25zZSIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJlcnJvciIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJvcHRpb24iLCJNb2RlbCIsIiRyZXF1ZXN0IiwiJGtleSIsIiRmaWxlcyIsImZpbGVzIiwiJHByb3BlcnRpZXMiLCJpbml0aWFsaXplIiwiJGV4aXN0cyIsIiRjaGFuZ2VkIiwiJGF0dHJpYnV0ZXMiLCJmaWxsIiwiJGluaXRpYWxpemVkIiwiZW5kcG9pbnQiLCJleGlzdHMiLCJpZCIsInNldEF0dHJpYnV0ZXMiLCJnZXRBdHRyaWJ1dGVzIiwiZ2V0QXR0cmlidXRlIiwia2V5cyIsImhhbmRsZUF0dHJpYnV0ZUNoYW5nZSIsImdldENoYW5nZWRBdHRyaWJ1dGVzIiwiY291bnQiLCJ0b3RhbCIsImNhcnJ5IiwiRmlsZSIsIkZpbGVMaXN0IiwidG9KU09OIiwiaGFuZGxlUHJpbWFyeUtleUNoYW5nZSIsImNvbmZpZyIsImNyZWF0ZSIsInVwZGF0ZSIsImhhc0ZpbGVzIiwidG9Kc29uIiwidG9Gb3JtRGF0YSIsImNvbnN0cnVjdG9yIiwidXJpIiwicG9zdCIsImRlbGV0ZSIsImZvcm0iLCJpdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIm1vZGVsIiwiZXJyb3JzIiwiQmFzZUZvcm0iLCJCcmVhZGNydW1iIiwiQnJlYWRjcnVtYkl0ZW0iLCJzck9ubHkiLCJzck9ubHlGb2N1c2FibGUiLCJzY3JlZW5yZWFkZXJDbGFzc2VzIiwiSGVscFRleHQiLCJGb3JtR3JvdXAiLCJGb3JtTGFiZWwiLCJGb3JtRmVlZGJhY2siLCJhdXRvY29tcGxldGUiLCJOdW1iZXIiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJncm91cCIsInBhdHRlcm4iLCJmZWVkYmFjayIsImJpbmRFdmVudHMiLCJkZWZhdWx0Q29udHJvbENsYXNzIiwiaGlkZUxhYmVsIiwic3BhY2luZyIsImlubGluZSIsInBsYWludGV4dCIsInJlYWRvbmx5IiwiZGlzYWJsZWQiLCJoZWxwVGV4dCIsIm1heGxlbmd0aCIsImJpbmRpbmciLCJ2bm9kZSIsImV2ZW50cyIsImJsdXIiLCJnZXRJbnB1dEZpZWxkIiwiZ2V0RmllbGRFcnJvcnMiLCJjYWxsYmFja3MiLCJpbnZhbGlkRmVlZGJhY2siLCJ2YWxpZEZlZWRiYWNrIiwiY29udHJvbENsYXNzIiwiY29udHJvbFNpemVDbGFzcyIsImNvbnRyb2xDbGFzc2VzIiwiaGFzRGVmYXVsdFNsb3QiLCJJbnB1dEZpZWxkIiwiRmlsZUZpZWxkIiwiQnRuRmlsZSIsIkJ0bkdyb3VwIiwiQnRuR3JvdXBUb2dnbGUiLCJCdG5Ub29sYmFyIiwidXVpZCIsImMiLCJyIiwiTWF0aCIsInJhbmRvbSIsInYiLCJwcm94eSIsImFwcGx5IiwicHJldmVudERlZmF1bHQiLCJQcm94eSIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duTWVudURpdmlkZXIiLCJEcm9wZG93bk1lbnVIZWFkZXIiLCJEcm9wZG93bk1lbnVJdGVtIiwiQnRuRHJvcGRvd24iLCJnZXRTbG90Iiwic2xvdCIsImhhc1Nsb3QiLCJoYXNTbG90cyIsInNsb3RzIiwiQ2FyZCIsIkNhcmRCb2R5IiwiQ2FyZEJ0bkdyb3VwIiwiQ2FyZERlY2siLCJDYXJkRm9vdGVyIiwiQ2FyZEhlYWRlciIsIkNhcmRJbWciLCJDYXJkSW1nVG9wIiwiQ2FyZEltZ0JvdHRvbSIsIkNhcmRJbWdPdmVybGF5IiwiQ2FyZExpbmsiLCJDYXJkU3VidGl0bGUiLCJDYXJkVGl0bGUiLCJSYWRpb0ZpZWxkIiwiQ2hlY2tib3hGaWVsZCIsIkRyb3B6b25lIiwicmVhZEZpbGUiLCJmaWxlIiwicHJvZ3Jlc3MiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25wcm9ncmVzcyIsIm9ubG9hZCIsIm9uZXJyb3IiLCJvbmFib3J0IiwicmVhZEFzRGF0YVVSTCIsIkZpbGVQcmV2aWV3IiwiRm9ybUNvbnRyb2wiLCJJbnB1dEdyb3VwIiwiSW5wdXRHcm91cEFwcGVuZCIsIklucHV0R3JvdXBQcmVwZW5kIiwiSW5wdXRHcm91cFRleHQiLCJGb3JtQ29udHJvbE1peGluIiwiTGlnaHRTd2l0Y2hGaWVsZCIsIkxpc3RHcm91cCIsIk5hdmlnYXRpb24iLCJOYXZpZ2F0aW9uRXJyb3IiLCJOYXZpZ2F0aW9uSXRlbSIsIk5hdmlnYXRpb25MaW5rIiwiTmF2aWdhdGlvbkRyb3Bkb3duIiwiTmF2YmFyIiwiTmF2YmFyQnJhbmQiLCJOYXZiYXJDb2xsYXBzZSIsIk5hdmJhck5hdiIsIk5hdmJhclRleHQiLCJOYXZiYXJUb2dnbGVyIiwiTmF2YmFyVG9nZ2xlckljb24iLCJQYWdpbmF0aW9uIiwiU2VsZWN0RmllbGQiLCJTbGlkZXMiLCJTbGlkZURlY2siLCJUcmFuc2Zvcm1lciIsIiRvcmlnaW5hbFJlc3BvbnNlIiwiJHJlcXVpcmVkIiwiJHRyYW5zZm9ybWVkUmVzcG9uc2UiLCJ0cmFuc2Zvcm0iLCJUYWJsZVZpZXdUcmFuc2Zvcm1lciIsIlRhYmxlVmlldyIsIlRleHRhcmVhRmllbGQiLCJUaHVtYm5haWxMaXN0IiwiVXBsb2FkRmllbGQiLCJXaXphcmQiLCJXaXphcmRCdXR0b25zIiwiV2l6YXJkSGVhZGVyIiwiV2l6YXJkUHJvZ3Jlc3MiLCJXaXphcmRTdGVwIiwiV2l6YXJkU3VjY2VzcyIsIldpemFyZEVycm9yIiwiU1RZTEVfQVRUUklCVVRFUyIsImludCIsInBhcnNlSW50IiwiaW5wdXQiLCJkaXYiLCJpbm5lckhUTUwiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJzdHlsZSIsImF0dHIiLCJyZXNpemUiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJkeW5hbWljSGVpZ2h0IiwibWF4IiwibWltaWMiLCJzdHlsZXMiLCJwb3NpdGlvbiIsImJvdHRvbSIsInpJbmRleCIsInZpc2liaWxpdHkiLCJpbml0IiwiaW5zZXJ0ZWQiLCJ0YWdOYW1lIiwiY2xhc3NMaXN0IiwiJGNvbGxhcHNlZEhlaWdodCIsImhpZGUiLCJlbGVtZW50cyIsImNvbnRhaW5zIiwiZXhwcmVzc2lvbiIsImVkaXRhYmxlIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwiJHdhdGNoIiwiSW5wdXRFdmVudCIsIm8iLCJibG9iIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJlbGFwc2VkIiwibWlsbGlzZWNvbmRzIiwiZWxhcHNlZENhbGxiYWNrIiwiaGFzRWxhcHNlZCIsInN0YXJ0Iiwic3RvcCIsImNsZWFyVGltZW91dCIsImludGVydmFsIiwicHJvbWlzZSIsInJlc29sdmVyIiwiZmluYWxseSIsImVhc2luZ3MiLCJsaW5lYXIiLCJ0IiwiZWFzZUluUXVhZCIsImVhc2VPdXRRdWFkIiwiZWFzZUluT3V0UXVhZCIsImVhc2VJbkN1YmljIiwiZWFzZU91dEN1YmljIiwiZWFzZUluT3V0Q3ViaWMiLCJlYXNlSW5RdWFydCIsImVhc2VPdXRRdWFydCIsImVhc2VJbk91dFF1YXJ0IiwiZWFzZUluUXVpbnQiLCJlYXNlT3V0UXVpbnQiLCJlYXNlSW5PdXRRdWludCIsInNjcm9sbFRvIiwiZGVzdGluYXRpb24iLCJlYXNpbmciLCJ2aWV3cG9ydCIsInZpZXdwb3J0Qm91bmRzIiwiZGVzdGluYXRpb25Cb3VuZHMiLCJkZXN0aW5hdGlvbk9mZnNldFRvU2Nyb2xsIiwiY2VpbCIsInRvcCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImlzU2Nyb2xsQm90dG9tIiwiZmxvb3IiLCJpbm5lckhlaWdodCIsInN0YXJ0VGltZSIsInBlcmZvcm1hbmNlIiwibm93IiwiaXNTdGFydGluZ0JvdHRvbSIsInNjcm9sbCIsInRpbWUiLCJtaW4iLCJ0aW1lRnVuY3Rpb24iLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJDQUxMQkFDS1MiLCJmaW5kS2V5IiwiY29tcGFyZSIsInJlc3RhcnQiLCJ3YWl0Il0sIm1hcHBpbmdzIjoiOzs7O0FBRWUscUJBQVNBLEtBQVQsRUFBZ0JDLE1BQWhCLEVBQXdCO01BQ2hDRCxLQUFILEVBQVU7V0FDQ0UsTUFBTSxDQUFDQyxNQUFNLENBQUNILEtBQUQsQ0FBUCxDQUFOLENBQXNCQyxNQUF0QixDQUE2QkEsTUFBN0IsQ0FBUDs7O1NBR0csRUFBUDs7O0FDTFcsdUJBQVNELEtBQVQsRUFBZ0JDLE1BQWhCLEVBQXdCO1NBQzVCRCxLQUFLLEdBQUdFLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDSCxLQUFELENBQVAsQ0FBVCxHQUEyQixJQUF2Qzs7O0FDS1csZ0JBQVNJLEdBQVQsRUFBY0MsT0FBZCxFQUF1QjtFQUNsQ0QsR0FBRyxDQUFDRSxNQUFKLENBQVcsTUFBWCxFQUFtQkMsVUFBbkI7RUFDQUgsR0FBRyxDQUFDRSxNQUFKLENBQVcsUUFBWCxFQUFxQkUsWUFBckI7Ozs7Ozs7Ozs7QUNWVyxTQUFTQyxTQUFULENBQW1CQyxNQUFuQixFQUEyQjtFQUN0Q0EsTUFBTSxHQUFHQSxNQUFNLENBQUNDLFdBQVAsR0FBcUJDLE9BQXJCLENBQTZCLHNCQUE3QixFQUFxRCxVQUFTQyxLQUFULEVBQWdCO1dBQ25FQSxLQUFLLENBQUNDLE1BQU4sQ0FBYUQsS0FBSyxDQUFDRSxNQUFOLEdBQWEsQ0FBMUIsRUFBNkJDLFdBQTdCLEVBQVA7R0FESyxDQUFUO1NBSU9OLE1BQU0sQ0FBQ0ksTUFBUCxDQUFjLENBQWQsRUFBaUJILFdBQWpCLEtBQWlDRCxNQUFNLENBQUNPLFNBQVAsQ0FBaUIsQ0FBakIsQ0FBeEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xXLFNBQVNDLE1BQVQsR0FBeUI7U0FDN0JDLE1B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
