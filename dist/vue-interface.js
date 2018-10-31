(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('moment'), require('popper.js'), require('axios')) :
    typeof define === 'function' && define.amd ? define(['exports', 'moment', 'popper.js', 'axios'], factory) :
    (factory((global.VueInterface = {}),global.moment,global.popper,global.axios));
}(this, (function (exports,moment,Popper,axios) { 'use strict';

    moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;
    Popper = Popper && Popper.hasOwnProperty('default') ? Popper['default'] : Popper;
    axios = axios && axios.hasOwnProperty('default') ? axios['default'] : axios;

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

    var BaseClass =
    /*#__PURE__*/
    function () {
      function BaseClass(attributes) {
        _classCallCheck(this, BaseClass);

        this.setAttribute(attributes);
      }

      _createClass(BaseClass, [{
        key: "getAttribute",
        value: function getAttribute(key) {
          return this.hasOwnProperty(key) ? this[key] : null;
        }
      }, {
        key: "getAttributes",
        value: function getAttributes() {
          var _this = this;

          var attributes = {};
          Object.getOwnPropertyNames(this).forEach(function (key) {
            attributes[key] = _this.getAttribute(key);
          });
          return attributes;
        }
      }, {
        key: "getPublicAttributes",
        value: function getPublicAttributes() {
          var _this2 = this;

          return Object.keys(this.getAttributes()).filter(function (key) {
            return !key.match(/^\$/);
          }).reduce(function (obj, key) {
            obj[key] = _this2.getAttribute(key);
            return obj;
          }, {});
        }
      }, {
        key: "setAttribute",
        value: function setAttribute(key, value) {
          if (isObject(key)) {
            this.setAttributes(key);
          } else {
            this[key] = value;
          }
        }
      }, {
        key: "setAttributes",
        value: function setAttributes(values) {
          for (var i in values) {
            this.setAttribute(i, values[i]);
          }
        }
      }]);

      return BaseClass;
    }();

    var Response =
    /*#__PURE__*/
    function (_BaseClass) {
      _inherits(Response, _BaseClass);

      function Response(data) {
        _classCallCheck(this, Response);

        return _possibleConstructorReturn(this, _getPrototypeOf(Response).call(this, extend({
          date: new Date()
        }, data)));
      }

      _createClass(Response, [{
        key: "data",
        get: function get$$1() {
          return this.$data;
        },
        set: function set(value) {
          this.$data = value;
        }
      }, {
        key: "request",
        get: function get$$1() {
          return this.$request;
        },
        set: function set(value) {
          this.$request = value;
        }
      }, {
        key: "date",
        get: function get$$1() {
          return this.$date;
        },
        set: function set(value) {
          this.$date = value;
        }
      }]);

      return Response;
    }(BaseClass);

    var DEFAULTS = {
      transformRequest: [],
      transformResponse: []
    };

    var Request =
    /*#__PURE__*/
    function (_BaseClass) {
      _inherits(Request, _BaseClass);

      function Request(method, url, attributes) {
        var _this;

        _classCallCheck(this, Request);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(Request).call(this, {
          options: {},
          data: {},
          headers: {},
          params: {},
          url: url,
          method: method
        }));

        if (isObject(attributes)) {
          _this.setAttribute(attributes);
        }

        return _this;
      }

      _createClass(Request, [{
        key: "send",
        value: function send(attributes) {
          var _this2 = this;

          this.sentAt = new Date();
          this.setAttributes(attributes);
          return new Promise(function (resolve, reject) {
            axios(_this2.options).then(function (data) {
              return resolve(_this2.response = new Response(data));
            }, function (errors) {
              return reject(_this2.errors = errors);
            });
          });
        }
      }, {
        key: "cancel",
        set: function set(value) {
          this.$cancel = value;
        },
        get: function get$$1() {
          return this.$cancel || function () {
            throw new Error('The request has not been sent yet.');
          };
        }
      }, {
        key: "options",
        get: function get$$1() {
          var _this3 = this;

          return extend({
            cancelToken: new axios.CancelToken(function (cancel) {
              return _this3.cancel = cancel;
            })
          }, DEFAULTS, this.getPublicAttributes());
        },
        set: function set(attributes) {
          this.setAttribute(attributes);
        }
      }, {
        key: "response",
        get: function get$$1() {
          return this.$response;
        },
        set: function set(value) {
          this.$response = value;
        }
      }, {
        key: "errors",
        get: function get$$1() {
          return this.$errors;
        },
        set: function set(value) {
          this.$errors = value;
        }
      }, {
        key: "passed",
        get: function get$$1() {
          return !!this.response && !this.errors;
        }
      }, {
        key: "failed",
        get: function get$$1() {
          return !!this.response && !!this.$error;
        }
      }], [{
        key: "transformRequest",
        value: function transformRequest(fn) {
          DEFAULTS.transformRequest.push(fn);
        }
      }, {
        key: "transformResponse",
        value: function transformResponse(fn) {
          DEFAULTS.transformResponse.push(fn);
        }
      }, {
        key: "get",
        value: function get$$1(url, attributes) {
          return this.make('get', url).send(attributes);
        }
      }, {
        key: "post",
        value: function post(url, attributes) {
          return this.make('post', url, attributes).send();
        }
      }, {
        key: "put",
        value: function put(url, attributes) {
          return this.make('put', url, attributes).send();
        }
      }, {
        key: "patch",
        value: function patch(url, data, attributes) {
          return this.make('path', url, attributes).send();
        }
      }, {
        key: "delete",
        value: function _delete(url, attributes) {
          return this.make('delete', url, attributes).send();
        }
      }, {
        key: "make",
        value: function make(method, url, attributes) {
          return new this(method, url, attributes);
        }
      }, {
        key: "transform",
        get: function get$$1() {
          return {
            request: this.transformRequest,
            response: this.transformResponse
          };
        }
      }, {
        key: "defaults",
        get: function get$$1() {
          return DEFAULTS;
        },
        set: function set(value) {
          extend(DEFAULTS, value);
        }
      }]);

      return Request;
    }(BaseClass);

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
          var _this5 = this;

          var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.fill(data);
          return new Promise(function (resolve, reject) {
            var data = !_this5.hasFiles() ? _this5.toJSON() : _this5.toFormData();
            var method = !_this5.exists() || _this5.hasFiles() ? 'post' : 'put';
            _this5.$request = _this5.constructor.request(method, config.uri || _this5.uri(), config);

            _this5.$request.send({
              data: data
            }).then(function (response) {
              return resolve(_this5.fill(response));
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
          var _this6 = this;

          var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return new Promise(function (resolve, reject) {
            if (!_this6.exists()) {
              reject(new Error('The model must have a primary key before it can be delete.'));
            }

            _this6.$request = _this6.constructor.request('delete', config.uri || _this6.uri(), config);

            _this6.$request.send().then(function (response) {
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
         * @return Object
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
         * @return Object
         */

      }, {
        key: "toJSON",
        value: function toJSON() {
          var _this7 = this;

          return pickBy(this.$attributes, function (value, key) {
            return !_this7.$properties.length || key === _this7.key() || _this7.$properties.indexOf(key) !== -1;
          });
        }
        /**
         * Convert the model to a string
         *
         * @return String
         */

      }, {
        key: "toString",
        value: function toString() {
          return JSON.stringify(this.toJSON());
        }
        /**
         * Alias for toJSON
         *
         * @return Object
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
          var _this8 = this;
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var model = new this();
          return new Promise(function (resolve, reject) {
            model.$request = _this8.request('get', config.uri || model.uri(), config);
            model.$request.send().then(function (response) {
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
          var _this9 = this;

          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return new Promise(function (resolve, reject) {
            var model = new _this9();
            model.$request = _this9.request('get', config.uri || model.uri(id), config);
            model.$request.send().then(function (response) {
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
        value: function request(method, url) {
          var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          return Request.make(method, url, config);
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
         * Tranform the Response object
         *
         * @property String
         */

      }, {
        key: "transform",
        value: function transform(response) {
          return response.data;
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
                this.loading = true;

                return Request.get(this.url, this.request).then(response => {
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

    exports.default = main;
    exports.Model = Model;
    exports.Request = Request;
    exports.Response = Response;
    exports.Colorable = Colorable;
    exports.FormControlMixin = FormControl;
    exports.HasSlots = HasSlots;
    exports.MergeClasses = MergeClasses;
    exports.Proxy = Proxy$1;
    exports.Screenreaders = Screenreaders;
    exports.Sizeable = Sizeable;
    exports.Triggerable = Triggerable;
    exports.Variant = Variant;
    exports.blob = blob;
    exports.elapsed = elapsed;
    exports.instantiate = instantiate;
    exports.prefix = prefix;
    exports.readFile = readFile;
    exports.script = script;
    exports.scrollTo = scrollTo;
    exports.transition = transition;
    exports.unit = unit;
    exports.uuid = uuid;
    exports.wait = wait;
    exports.modal = modal$1;
    exports.overlay = overlay;
    exports.popover = popover;
    exports.ActivityIndicator = ActivityIndicator;
    exports.Alert = Alert;
    exports.AlertClose = AlertClose;
    exports.AlertHeading = AlertHeading;
    exports.AlertLink = AlertLink;
    exports.Badge = Badge;
    exports.BaseForm = BaseForm;
    exports.Breadcrumb = Breadcrumb;
    exports.BreadcrumbItem = BreadcrumbItem;
    exports.Btn = Btn;
    exports.BtnActivity = BtnActivity;
    exports.BtnFile = BtnFile;
    exports.BtnGroup = BtnGroup;
    exports.BtnGroupToggle = BtnGroupToggle;
    exports.BtnToolbar = BtnToolbar;
    exports.BtnDropdown = BtnDropdown;
    exports.Card = Card;
    exports.CardBody = CardBody;
    exports.CardBtnGroup = CardBtnGroup;
    exports.CardDeck = CardDeck;
    exports.CardFooter = CardFooter;
    exports.CardHeader = CardHeader;
    exports.CardImg = CardImg;
    exports.CardImgTop = CardImgTop;
    exports.CardImgBottom = CardImgBottom;
    exports.CardImgOverlay = CardImgOverlay;
    exports.CardLink = CardLink;
    exports.CardSubtitle = CardSubtitle;
    exports.CardTitle = CardTitle;
    exports.CheckboxField = CheckboxField;
    exports.Container = Container;
    exports.DropdownMenu = DropdownMenu;
    exports.DropdownMenuItem = DropdownMenuItem;
    exports.DropdownMenuHeader = DropdownMenuHeader;
    exports.DropdownMenuDivider = DropdownMenuDivider;
    exports.Dropzone = Dropzone;
    exports.FileField = FileField;
    exports.FilePreview = FilePreview;
    exports.FormControl = FormControl$1;
    exports.FormFeedback = FormFeedback;
    exports.FormGroup = FormGroup;
    exports.FormLabel = FormLabel;
    exports.HelpText = HelpText;
    exports.InfiniteScrolling = InfiniteScrolling;
    exports.InputField = InputField;
    exports.InputGroup = InputGroup;
    exports.InputGroupAppend = InputGroupAppend;
    exports.InputGroupPrepend = InputGroupPrepend;
    exports.InputGroupText = InputGroupText;
    exports.LightSwitchField = LightSwitchField;
    exports.ListGroup = ListGroup;
    exports.ListGroupItem = ListGroupItem;
    exports.Navbar = Navbar;
    exports.NavbarBrand = NavbarBrand;
    exports.NavbarCollapse = NavbarCollapse;
    exports.NavbarNav = NavbarNav;
    exports.NavbarText = NavbarText;
    exports.NavbarToggler = NavbarToggler;
    exports.NavbarTogglerIcon = NavbarTogglerIcon;
    exports.Modal = Modal;
    exports.ModalBackdrop = ModalBackdrop;
    exports.ModalBody = ModalBody;
    exports.ModalContent = ModalContent;
    exports.ModalDialog = ModalDialog;
    exports.ModalFooter = ModalFooter;
    exports.ModalHeader = ModalHeader;
    exports.ModalTitle = ModalTitle;
    exports.Navigation = Navigation;
    exports.NavigationError = NavigationError;
    exports.NavigationItem = NavigationItem;
    exports.NavigationLink = NavigationLink;
    exports.NavigationDropdown = NavigationDropdown;
    exports.Overlay = Overlay;
    exports.Pagination = Pagination;
    exports.Popover = Popover;
    exports.PopoverBody = PopoverBody;
    exports.PopoverHeader = PopoverHeader;
    exports.ProgressBar = ProgressBar;
    exports.RadioField = RadioField;
    exports.SelectField = SelectField;
    exports.SlideDeck = SlideDeck;
    exports.Slides = Slides;
    exports.TableView = TableView;
    exports.TextareaField = TextareaField;
    exports.ThumbnailList = ThumbnailList;
    exports.ThumbnailListItem = ThumbnailListItem;
    exports.UploadField = UploadField;
    exports.Wizard = Wizard;
    exports.WizardButtons = WizardButtons;
    exports.WizardHeader = WizardHeader;
    exports.WizardProgress = WizardProgress;
    exports.WizardStep = WizardStep;
    exports.WizardSuccess = WizardSuccess;
    exports.Autogrow = Autogrow;
    exports.Collapse = Collapse;
    exports.Slug = Slug;
    exports.DateFilter = index;
    exports.MomentFilter = index;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=vue-interface.js.map
