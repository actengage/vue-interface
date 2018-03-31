import axios from 'axios';
import moment from 'moment';

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

var asyncTag = '[object AsyncFunction]';
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;
var objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty = defineProperty;

function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty) {
    _defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$2.call(object, key) && eq_1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue;

function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}

var _copyObject = copyObject;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply;

var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

var _overRest = overRest;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant;

var baseSetToString = !_defineProperty ? identity_1 : function(func, string) {
  return _defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800;
var HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut;

var setToString = _shortOut(_baseSetToString);

var _setToString = setToString;

function baseRest(func, start) {
  return _setToString(_overRest(func, start, identity_1), func + '');
}

var _baseRest = baseRest;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength;

function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike_1(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq_1(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall;

function createAssigner(assigner) {
  return _baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

var _createAssigner = createAssigner;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$4.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$3.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

var argsTag$1 = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var funcTag$1 = '[object Function]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag = '[object Object]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$4.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$6;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

var _nativeKeysIn = nativeKeysIn;

var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject_1(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$5.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

var _baseKeysIn = baseKeysIn;

function keysIn(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

var keysIn_1 = keysIn;

var assignIn = _createAssigner(function(object, source) {
  _copyObject(source, keysIn_1(source), object);
});

var assignIn_1 = assignIn;

var extend = assignIn_1;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

var Map$1 = _getNative(_root, 'Map');

var _Map = Map$1;

var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$6.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$7.call(data, key);
}

var _hashHas = hashHas;

var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;

function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

var _Stack = Stack;

function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq_1(object[key], value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignMergeValue = assignMergeValue;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor;

var baseFor = _createBaseFor();

var _baseFor = baseFor;

var _cloneBuffer = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
});

var Uint8Array = _root.Uint8Array;

var _Uint8Array = Uint8Array;

function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer;

function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray;

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray;

var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject_1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

var _baseCreate = baseCreate;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

var getPrototype = _overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype;

function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !_isPrototype(object))
    ? _baseCreate(_getPrototype(object))
    : {};
}

var _initCloneObject = initCloneObject;

function isArrayLikeObject(value) {
  return isObjectLike_1(value) && isArrayLike_1(value);
}

var isArrayLikeObject_1 = isArrayLikeObject;

var objectTag$1 = '[object Object]';

/** Used for built-in method references. */
var funcProto$2 = Function.prototype;
var objectProto$10 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$10.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString$2.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag$1) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$8.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString$2.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject;

/**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  return key == '__proto__'
    ? undefined
    : object[key];
}

var _safeGet = safeGet;

function toPlainObject(value) {
  return _copyObject(value, keysIn_1(value));
}

var toPlainObject_1 = toPlainObject;

function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = _safeGet(object, key),
      srcValue = _safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    _assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray_1(srcValue),
        isBuff = !isArr && isBuffer_1(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray_1(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray_1(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject_1(objValue)) {
        newValue = _copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = _cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = _cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject_1(srcValue) || isArguments_1(srcValue)) {
      newValue = objValue;
      if (isArguments_1(objValue)) {
        newValue = toPlainObject_1(objValue);
      }
      else if (!isObject_1(objValue) || (srcIndex && isFunction_1(objValue))) {
        newValue = _initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  _assignMergeValue(object, key, newValue);
}

var _baseMergeDeep = baseMergeDeep;

function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  _baseFor(source, function(srcValue, key) {
    if (isObject_1(srcValue)) {
      stack || (stack = new _Stack);
      _baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(_safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      _assignMergeValue(object, key, newValue);
    }
  }, keysIn_1);
}

var _baseMerge = baseMerge;

var merge = _createAssigner(function(object, source, srcIndex) {
  _baseMerge(object, source, srcIndex);
});

var merge_1 = merge;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

var _arrayEach = arrayEach;

var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

var objectProto$11 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$11.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$9.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, keys_1);
}

var _baseForOwn = baseForOwn;

function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_1(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

var _createBaseEach = createBaseEach;

var baseEach = _createBaseEach(_baseForOwn);

var _baseEach = baseEach;

function castFunction(value) {
  return typeof value == 'function' ? value : identity_1;
}

var _castFunction = castFunction;

function forEach(collection, iteratee) {
  var func = isArray_1(collection) ? _arrayEach : _baseEach;
  return func(collection, _castFunction(iteratee));
}

var forEach_1 = forEach;

var each = forEach_1;

function MergeClasses (Vue, options) {
  Vue.prototype.mergeClasses = function () {
    var classes = {};

    each([].slice.call(arguments), function (arg) {
      if (isObject_1(arg)) {
        extend(classes, arg);
      } else if (isArray_1(arg)) {
        merge_1(classes, arg);
      } else if (arg) {
        classes[arg] = true;
      }
    });

    return classes;
  };
}



var plugins = Object.freeze({
	MergeClasses: MergeClasses
});

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

var _arrayReduce = arrayReduce;

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

var _basePropertyOf = basePropertyOf;

var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = _basePropertyOf(deburredLetters);

var _deburrLetter = deburrLetter;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined;
var symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString;

function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f';
var reComboHalfMarksRange = '\\ufe20-\\ufe2f';
var rsComboSymbolsRange = '\\u20d0-\\u20ff';
var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString_1(string);
  return string && string.replace(reLatin, _deburrLetter).replace(reComboMark, '');
}

var deburr_1 = deburr;

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

var _asciiWords = asciiWords;

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

var _hasUnicodeWord = hasUnicodeWord;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff';
var rsComboMarksRange$1 = '\\u0300-\\u036f';
var reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f';
var rsComboSymbolsRange$1 = '\\u20d0-\\u20ff';
var rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1;
var rsDingbatRange = '\\u2700-\\u27bf';
var rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff';
var rsMathOpRange = '\\xac\\xb1\\xd7\\xf7';
var rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf';
var rsPunctuationRange = '\\u2000-\\u206f';
var rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000';
var rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde';
var rsVarRange = '\\ufe0e\\ufe0f';
var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";
var rsBreak = '[' + rsBreakRange + ']';
var rsCombo$1 = '[' + rsComboRange$1 + ']';
var rsDigits = '\\d+';
var rsDingbat = '[' + rsDingbatRange + ']';
var rsLower = '[' + rsLowerRange + ']';
var rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']';
var rsFitz = '\\ud83c[\\udffb-\\udfff]';
var rsModifier = '(?:' + rsCombo$1 + '|' + rsFitz + ')';
var rsNonAstral = '[^' + rsAstralRange + ']';
var rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
var rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
var rsUpper = '[' + rsUpperRange + ']';
var rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')';
var rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')';
var rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?';
var rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?';
var reOptMod = rsModifier + '?';
var rsOptVar = '[' + rsVarRange + ']?';
var rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*';
var rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])';
var rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])';
var rsSeq = rsOptVar + reOptMod + rsOptJoin;
var rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

var _unicodeWords = unicodeWords;

function words(string, pattern, guard) {
  string = toString_1(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return _hasUnicodeWord(string) ? _unicodeWords(string) : _asciiWords(string);
  }
  return string.match(pattern) || [];
}

var words_1 = words;

var rsApos$1 = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos$1, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return _arrayReduce(words_1(deburr_1(string).replace(reApos, '')), callback, '');
  };
}

var _createCompounder = createCompounder;

var kebabCase = _createCompounder(function(result, word, index) {
  return result + (index ? '-' : '') + word.toLowerCase();
});

var kebabCase_1 = kebabCase;

var BaseType = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "activity-indicator",
      class: _vm.classes
    }, _vm._l(_vm.nodes, function (i) {
      return _c('div');
    }));
  },
  staticRenderFns: [],
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
    classes: function classes() {
      var classes = {};
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

var ActivityIndicator = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _vm.center ? _c('div', {
      staticClass: "center-wrapper"
    }, [_c('div', {
      staticClass: "center-content"
    }, [_c(_vm.component, {
      tag: "component",
      attrs: {
        "size": _vm.size,
        "prefix": _vm.prefix
      }
    })], 1)]) : _c(_vm.component, {
      tag: "component",
      attrs: {
        "size": _vm.size,
        "prefix": _vm.prefix
      }
    });
  },
  staticRenderFns: [],
  name: 'activity-indicator',
  extends: BaseType,
  props: {
    center: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'dots'
    }
  },
  components: {
    ActivityIndicatorDots: ActivityIndicatorDots,
    ActivityIndicatorSpinner: ActivityIndicatorSpinner
  },
  computed: {
    component: function component() {
      return kebabCase_1(this.prefix + this.type.replace(this.prefix, ''));
    }
  }
};

var VueInstaller = {
  use: use,
  plugin: plugin,
  plugins: plugins$1,
  component: component,
  components: components,
  directive: directive,
  directives: directives,
  $plugins: {},
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
function plugins$1(Vue, plugins) {
  each(plugins, function (def, name) {
    plugin(Vue, name, def);
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
    Vue.directive(name, VueInstaller.$directives[name] = def);
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
      ActivityIndicator: ActivityIndicator
    });
  }
});

var convertAnimationDelayToInt = function convertAnimationDelayToInt(delay) {
  var num = parseFloat(delay, 10);
  var matches = delay.match(/m?s/);
  var unit = matches ? matches[0] : false;
  var milliseconds;

  switch (unit) {
    case "s":
      // seconds
      milliseconds = num * 1000;
      break;

    case "ms":
    default:
      milliseconds = num;
      break;
  }

  return milliseconds || 0;
};

var animated = function animated(el, callback) {
  var defaultView = (el.ownerDocument || document).defaultView;
  setTimeout(function () {
    callback.apply();
  }, convertAnimationDelayToInt(defaultView.getComputedStyle(el).animationDuration));
};

var ActivityButton = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('button', {
      staticClass: "btn",
      class: _vm.classes,
      attrs: {
        "type": _vm.type
      },
      on: {
        "click": _vm.onClick
      }
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _c('activity-indicator', {
      attrs: {
        "type": _vm.indicator
      }
    })], 2);
  },
  staticRenderFns: [],
  name: 'activity-button',
  components: {
    ActivityIndicator: ActivityIndicator
  },
  props: {
    /**
     * Should show the activity indicator inside the button.
     *
     * @property Boolean
     */
    activity: {
      type: Boolean,
      default: false
    },

    /**
     * Should show the button as disabled.
     *
     * @property Boolean
     */
    disabled: {
      type: Boolean,
      default: false
    },

    /**
     * Display the button as block width.
     *
     * @property Boolean
     */
    block: {
      type: Boolean,
      default: false
    },

    /**
     * The size of the button.
     *
     * @property String
     */
    size: {
      type: String,
      default: 'md'
    },

    /**
     * The bootstrap variant of the button.
     *
     * @property String
     */
    variant: {
      type: String,
      default: 'primary'
    },

    /**
     * The `type` attribute for the button.
     *
     * @property String
     */
    type: {
      type: String,
      default: 'button'
    },

    /**
     * The type of activity indicator inside the button.
     *
     * @property String
     */
    indicator: {
      type: String,
      default: 'spinner'
    },

    /**
     * The orientation of the activity button inside the button.
     *
     * @property String
     */
    orientation: {
      type: String,
      default: 'right'
    },

    /**
     * The button label. If not passed as a property, label must be passed
     * inside the element's html.
     *
     * @property String
     */
    label: {
      type: String
    }
  },
  methods: {
    /**
     * Disable the button.
     *
     * @return void
     */
    disable: function disable() {
      this.$el.disabled = true;
    },

    /**
     * Enable the button.
     *
     * @return void
     */
    enable: function enable() {
      this.$el.disabled = false;
    },

    /**
     * Show the activity indicator inside the button.
     *
     * @return void
     */
    showActivity: function showActivity() {
      var _this = this;

      this.disable();
      animated(this.$el, function () {
        _this.$el.classList.add('btn-activity');

        _this.$emit('activity:show');
      });
    },

    /**
     * Hide the activity indicator inside the button.
     *
     * @return void
     */
    hideActivity: function hideActivity() {
      var _this2 = this;

      this.$el.classList.add('btn-hide-activity');
      animated(this.$el, function () {
        _this2.enable();

        _this2.$el.classList.remove('btn-activity', 'btn-hide-activity');

        _this2.$emit('activity:hide');
      });
    },

    /**
     * Disable the button.
     *
     * @return void
     */
    onClick: function onClick(event) {
      this.$emit('click', event, this);
    }
  },
  computed: {
    /**
     * An object of classes to append to the button.
     *
     * @return void
     */
    classes: function classes() {
      var classes = {
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
    activity: function activity(value) {
      if (value) {
        this.showActivity();
      } else {
        this.hideActivity();
      }
    }
  }
};

var plugin$2 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      ActivityButton: ActivityButton
    });
  }
});

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);
  return this;
}

var _setCacheAdd = setCacheAdd;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas;

function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

var _SetCache = SetCache;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas;

var COMPARE_PARTIAL_FLAG = 1;
var COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!_arraySome(other, function(othValue, othIndex) {
            if (!_cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray;

var COMPARE_PARTIAL_FLAG$1 = 1;
var COMPARE_UNORDERED_FLAG$1 = 2;

/** `Object#toString` result references. */
var boolTag$1 = '[object Boolean]';
var dateTag$1 = '[object Date]';
var errorTag$1 = '[object Error]';
var mapTag$1 = '[object Map]';
var numberTag$1 = '[object Number]';
var regexpTag$1 = '[object RegExp]';
var setTag$1 = '[object Set]';
var stringTag$1 = '[object String]';
var symbolTag$1 = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]';
var dataViewTag$1 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined;
var symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$1:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$1:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq_1(+object, +other);

    case errorTag$1:
      return object.name == other.name && object.message == other.message;

    case regexpTag$1:
    case stringTag$1:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$1:
      var convert = _mapToArray;

    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$1;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag$1:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;

function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var stubArray_1 = stubArray;

var objectProto$12 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$12.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray_1 : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};

var _getSymbols = getSymbols;

function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}

var _getAllKeys = getAllKeys;

var COMPARE_PARTIAL_FLAG$2 = 1;

/** Used for built-in method references. */
var objectProto$13 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$10 = objectProto$13.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2,
      objProps = _getAllKeys(object),
      objLength = objProps.length,
      othProps = _getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$10.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects;

var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;

var Promise$1 = _getNative(_root, 'Promise');

var _Promise = Promise$1;

var Set = _getNative(_root, 'Set');

var _Set = Set;

var WeakMap = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap;

var mapTag$2 = '[object Map]';
var objectTag$2 = '[object Object]';
var promiseTag = '[object Promise]';
var setTag$2 = '[object Set]';
var weakMapTag$1 = '[object WeakMap]';

var dataViewTag$2 = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView);
var mapCtorString = _toSource(_Map);
var promiseCtorString = _toSource(_Promise);
var setCtorString = _toSource(_Set);
var weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$2) ||
    (_Map && getTag(new _Map) != mapTag$2) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set && getTag(new _Set) != setTag$2) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag$1)) {
  getTag = function(value) {
    var result = _baseGetTag(value),
        Ctor = result == objectTag$2 ? value.constructor : undefined,
        ctorString = Ctor ? _toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag$2;
        case mapCtorString: return mapTag$2;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag$2;
        case weakMapCtorString: return weakMapTag$1;
      }
    }
    return result;
  };
}

var _getTag = getTag;

var COMPARE_PARTIAL_FLAG$3 = 1;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]';
var arrayTag$1 = '[object Array]';
var objectTag$3 = '[object Object]';

/** Used for built-in method references. */
var objectProto$14 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$11 = objectProto$14.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray_1(object),
      othIsArr = isArray_1(other),
      objTag = objIsArr ? arrayTag$1 : _getTag(object),
      othTag = othIsArr ? arrayTag$1 : _getTag(other);

  objTag = objTag == argsTag$2 ? objectTag$3 : objTag;
  othTag = othTag == argsTag$2 ? objectTag$3 : othTag;

  var objIsObj = objTag == objectTag$3,
      othIsObj = othTag == objectTag$3,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer_1(object)) {
    if (!isBuffer_1(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack);
    return (objIsArr || isTypedArray_1(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$3)) {
    var objIsWrapped = objIsObj && hasOwnProperty$11.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$11.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep;

function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike_1(value) && !isObjectLike_1(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

var _baseIsEqual = baseIsEqual;

var COMPARE_PARTIAL_FLAG$4 = 1;
var COMPARE_UNORDERED_FLAG$2 = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$4 | COMPARE_UNORDERED_FLAG$2, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch = baseIsMatch;

function isStrictComparable(value) {
  return value === value && !isObject_1(value);
}

var _isStrictComparable = isStrictComparable;

function getMatchData(object) {
  var result = keys_1(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, _isStrictComparable(value)];
  }
  return result;
}

var _getMatchData = getMatchData;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

var _matchesStrictComparable = matchesStrictComparable;

function baseMatches(source) {
  var matchData = _getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches;

var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey;

var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;

var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath;

function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _toKey = toKey;

function baseGet(object, path) {
  path = _castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet;

function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn;

function hasPath(object, path, hasFunc) {
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = _toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength_1(length) && _isIndex(key, length) &&
    (isArray_1(object) || isArguments_1(object));
}

var _hasPath = hasPath;

function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}

var hasIn_1 = hasIn;

var COMPARE_PARTIAL_FLAG$5 = 1;
var COMPARE_UNORDERED_FLAG$3 = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (_isKey(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(_toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get_1(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn_1(object, path)
      : _baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$5 | COMPARE_UNORDERED_FLAG$3);
  };
}

var _baseMatchesProperty = baseMatchesProperty;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty;

function basePropertyDeep(path) {
  return function(object) {
    return _baseGet(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep;

function property(path) {
  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
}

var property_1 = property;

function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity_1;
  }
  if (typeof value == 'object') {
    return isArray_1(value)
      ? _baseMatchesProperty(value[0], value[1])
      : _baseMatches(value);
  }
  return property_1(value);
}

var _baseIteratee = baseIteratee;

function mapKeys(object, iteratee) {
  var result = {};
  iteratee = _baseIteratee(iteratee, 3);

  _baseForOwn(object, function(value, key, object) {
    _baseAssignValue(result, iteratee(value, key, object), value);
  });
  return result;
}

var mapKeys_1 = mapKeys;

function prefix(subject, prefix) {
  var delimeter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '-';

  var prefixer = function prefixer(value, key) {
    var string = key || value;
    return [prefix, string.replace(new RegExp("^".concat(prefix).concat(delimeter, "?")), '')].join(delimeter);
  };

  if (isObject_1(subject)) {
    return mapKeys_1(subject, prefixer);
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
    variantClass: function variantClass() {
      return prefix(this.variant, this.$options.name);
    }
  }
};

var Badge = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _vm.href ? _c('a', {
      staticClass: "badge",
      class: _vm.mergeClasses(_vm.classes, _vm.variantClass),
      attrs: {
        "href": _vm.href
      }
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _c('span', {
      staticClass: "sr-only",
      domProps: {
        "innerHTML": _vm._s(_vm.accessibility)
      }
    })], 2) : _c('span', {
      staticClass: "badge",
      class: _vm.mergeClasses(_vm.classes, _vm.variantClass)
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _c('span', {
      staticClass: "sr-only",
      domProps: {
        "innerHTML": _vm._s(_vm.accessibility)
      }
    })], 2);
  },
  staticRenderFns: [],
  name: 'badge',
  mixins: [Variant],
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
    classes: function classes() {
      return prefix({
        'pill': this.pill,
        'secondary': this.secondary
      }, this.$options.name);
    }
  }
};

var plugin$3 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Badge: Badge
    });
  }
});

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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
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

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

var isUndefined_1 = isUndefined;

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

var _baseReduce = baseReduce;

function reduce(collection, iteratee, accumulator) {
  var func = isArray_1(collection) ? _arrayReduce : _baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, _baseIteratee(iteratee, 4), accumulator, initAccum, _baseEach);
}

var reduce_1 = reduce;

function baseSet(object, path, value, customizer) {
  if (!isObject_1(object)) {
    return object;
  }
  path = _castPath(path, object);

  var index = -1,
      length = path.length,
      lastIndex = length - 1,
      nested = object;

  while (nested != null && ++index < length) {
    var key = _toKey(path[index]),
        newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;
      if (newValue === undefined) {
        newValue = isObject_1(objValue)
          ? objValue
          : (_isIndex(path[index + 1]) ? [] : {});
      }
    }
    _assignValue(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}

var _baseSet = baseSet;

function basePickBy(object, paths, predicate) {
  var index = -1,
      length = paths.length,
      result = {};

  while (++index < length) {
    var path = paths[index],
        value = _baseGet(object, path);

    if (predicate(value, path)) {
      _baseSet(result, _castPath(path, object), value);
    }
  }
  return result;
}

var _basePickBy = basePickBy;

var nativeGetSymbols$1 = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols$1 ? stubArray_1 : function(object) {
  var result = [];
  while (object) {
    _arrayPush(result, _getSymbols(object));
    object = _getPrototype(object);
  }
  return result;
};

var _getSymbolsIn = getSymbolsIn;

function getAllKeysIn(object) {
  return _baseGetAllKeys(object, keysIn_1, _getSymbolsIn);
}

var _getAllKeysIn = getAllKeysIn;

function pickBy(object, predicate) {
  if (object == null) {
    return {};
  }
  var props = _arrayMap(_getAllKeysIn(object), function(prop) {
    return [prop];
  });
  predicate = _baseIteratee(predicate);
  return _basePickBy(object, props, function(value, path) {
    return predicate(value, path[0]);
  });
}

var pickBy_1 = pickBy;

/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

var isNull_1 = isNull;

function baseFilter(collection, predicate) {
  var result = [];
  _baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

var _baseFilter = baseFilter;

function filter(collection, predicate) {
  var func = isArray_1(collection) ? _arrayFilter : _baseFilter;
  return func(collection, _baseIteratee(predicate, 3));
}

var filter_1 = filter;

var stringTag$2 = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray_1(value) && isObjectLike_1(value) && _baseGetTag(value) == stringTag$2);
}

var isString_1 = isString;

var asciiSize = _baseProperty('length');

var _asciiSize = asciiSize;

/** Used to compose unicode character classes. */
var rsAstralRange$1 = '\\ud800-\\udfff';
var rsComboMarksRange$2 = '\\u0300-\\u036f';
var reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f';
var rsComboSymbolsRange$2 = '\\u20d0-\\u20ff';
var rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2;
var rsVarRange$1 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ$1 = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ$1 + rsAstralRange$1  + rsComboRange$2 + rsVarRange$1 + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

var _hasUnicode = hasUnicode;

/** Used to compose unicode character classes. */
var rsAstralRange$2 = '\\ud800-\\udfff';
var rsComboMarksRange$3 = '\\u0300-\\u036f';
var reComboHalfMarksRange$3 = '\\ufe20-\\ufe2f';
var rsComboSymbolsRange$3 = '\\u20d0-\\u20ff';
var rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3;
var rsVarRange$2 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange$2 + ']';
var rsCombo$2 = '[' + rsComboRange$3 + ']';
var rsFitz$1 = '\\ud83c[\\udffb-\\udfff]';
var rsModifier$1 = '(?:' + rsCombo$2 + '|' + rsFitz$1 + ')';
var rsNonAstral$1 = '[^' + rsAstralRange$2 + ']';
var rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}';
var rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]';
var rsZWJ$2 = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod$1 = rsModifier$1 + '?';
var rsOptVar$1 = '[' + rsVarRange$2 + ']?';
var rsOptJoin$1 = '(?:' + rsZWJ$2 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*';
var rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1;
var rsSymbol = '(?:' + [rsNonAstral$1 + rsCombo$2 + '?', rsCombo$2, rsRegional$1, rsSurrPair$1, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz$1 + '(?=' + rsFitz$1 + ')|' + rsSymbol + rsSeq$1, 'g');

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}

var _unicodeSize = unicodeSize;

function stringSize(string) {
  return _hasUnicode(string)
    ? _unicodeSize(string)
    : _asciiSize(string);
}

var _stringSize = stringSize;

var mapTag$3 = '[object Map]';
var setTag$3 = '[object Set]';

/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * _.size([1, 2, 3]);
 * // => 3
 *
 * _.size({ 'a': 1, 'b': 2 });
 * // => 2
 *
 * _.size('pebbles');
 * // => 7
 */
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if (isArrayLike_1(collection)) {
    return isString_1(collection) ? _stringSize(collection) : collection.length;
  }
  var tag = _getTag(collection);
  if (tag == mapTag$3 || tag == setTag$3) {
    return collection.size;
  }
  return _baseKeys(collection).length;
}

var size_1 = size;

function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike_1(collection) ? Array(collection.length) : [];

  _baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

var _baseMap = baseMap;

function map(collection, iteratee) {
  var func = isArray_1(collection) ? _arrayMap : _baseMap;
  return func(collection, _baseIteratee(iteratee, 3));
}

var map_1 = map;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

var _baseSlice = baseSlice;

function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : _baseSlice(array, start, end);
}

var _castSlice = castSlice;

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

var _asciiToArray = asciiToArray;

/** Used to compose unicode character classes. */
var rsAstralRange$3 = '\\ud800-\\udfff';
var rsComboMarksRange$4 = '\\u0300-\\u036f';
var reComboHalfMarksRange$4 = '\\ufe20-\\ufe2f';
var rsComboSymbolsRange$4 = '\\u20d0-\\u20ff';
var rsComboRange$4 = rsComboMarksRange$4 + reComboHalfMarksRange$4 + rsComboSymbolsRange$4;
var rsVarRange$3 = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral$1 = '[' + rsAstralRange$3 + ']';
var rsCombo$3 = '[' + rsComboRange$4 + ']';
var rsFitz$2 = '\\ud83c[\\udffb-\\udfff]';
var rsModifier$2 = '(?:' + rsCombo$3 + '|' + rsFitz$2 + ')';
var rsNonAstral$2 = '[^' + rsAstralRange$3 + ']';
var rsRegional$2 = '(?:\\ud83c[\\udde6-\\uddff]){2}';
var rsSurrPair$2 = '[\\ud800-\\udbff][\\udc00-\\udfff]';
var rsZWJ$3 = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod$2 = rsModifier$2 + '?';
var rsOptVar$2 = '[' + rsVarRange$3 + ']?';
var rsOptJoin$2 = '(?:' + rsZWJ$3 + '(?:' + [rsNonAstral$2, rsRegional$2, rsSurrPair$2].join('|') + ')' + rsOptVar$2 + reOptMod$2 + ')*';
var rsSeq$2 = rsOptVar$2 + reOptMod$2 + rsOptJoin$2;
var rsSymbol$1 = '(?:' + [rsNonAstral$2 + rsCombo$3 + '?', rsCombo$3, rsRegional$2, rsSurrPair$2, rsAstral$1].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode$1 = RegExp(rsFitz$2 + '(?=' + rsFitz$2 + ')|' + rsSymbol$1 + rsSeq$2, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode$1) || [];
}

var _unicodeToArray = unicodeToArray;

function stringToArray(string) {
  return _hasUnicode(string)
    ? _unicodeToArray(string)
    : _asciiToArray(string);
}

var _stringToArray = stringToArray;

function createCaseFirst(methodName) {
  return function(string) {
    string = toString_1(string);

    var strSymbols = _hasUnicode(string)
      ? _stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? _castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

var _createCaseFirst = createCaseFirst;

var upperFirst = _createCaseFirst('toUpperCase');

var upperFirst_1 = upperFirst;

function capitalize(string) {
  return upperFirst_1(toString_1(string).toLowerCase());
}

var capitalize_1 = capitalize;

var camelCase = _createCompounder(function(result, word, index) {
  word = word.toLowerCase();
  return result + (index ? capitalize_1(word) : word);
});

var camelCase_1 = camelCase;

var metaMap = _WeakMap && new _WeakMap;

var _metaMap = metaMap;

var baseSetData = !_metaMap ? identity_1 : function(func, data) {
  _metaMap.set(func, data);
  return func;
};

var _baseSetData = baseSetData;

function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = _baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject_1(result) ? result : thisBinding;
  };
}

var _createCtor = createCtor;

var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = _createCtor(func);

  function wrapper() {
    var fn = (this && this !== _root && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

var _createBind = createBind;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max;

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax$1(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

var _composeArgs = composeArgs;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$2 = Math.max;

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax$2(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

var _composeArgsRight = composeArgsRight;

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      ++result;
    }
  }
  return result;
}

var _countHolders = countHolders;

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

var _baseLodash = baseLodash;

var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = _baseCreate(_baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

var _LazyWrapper = LazyWrapper;

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

var noop_1 = noop;

var getData = !_metaMap ? noop_1 : function(func) {
  return _metaMap.get(func);
};

var _getData = getData;

/** Used to lookup unminified function names. */
var realNames = {};

var _realNames = realNames;

var objectProto$15 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$12 = objectProto$15.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = (func.name + ''),
      array = _realNames[result],
      length = hasOwnProperty$12.call(_realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

var _getFuncName = getFuncName;

function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = _baseCreate(_baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

var _LodashWrapper = LodashWrapper;

function wrapperClone(wrapper) {
  if (wrapper instanceof _LazyWrapper) {
    return wrapper.clone();
  }
  var result = new _LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = _copyArray(wrapper.__actions__);
  result.__index__  = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

var _wrapperClone = wrapperClone;

var objectProto$16 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$13 = objectProto$16.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike_1(value) && !isArray_1(value) && !(value instanceof _LazyWrapper)) {
    if (value instanceof _LodashWrapper) {
      return value;
    }
    if (hasOwnProperty$13.call(value, '__wrapped__')) {
      return _wrapperClone(value);
    }
  }
  return new _LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = _baseLodash.prototype;
lodash.prototype.constructor = lodash;

var wrapperLodash = lodash;

function isLaziable(func) {
  var funcName = _getFuncName(func),
      other = wrapperLodash[funcName];

  if (typeof other != 'function' || !(funcName in _LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = _getData(other);
  return !!data && func === data[0];
}

var _isLaziable = isLaziable;

var setData = _shortOut(_baseSetData);

var _setData = setData;

/** Used to match wrap detail comments. */
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/;
var reSplitDetails = /,? & /;

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

var _getWrapDetails = getWrapDetails;

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

var _insertWrapDetails = insertWrapDetails;

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

var _baseFindIndex = baseFindIndex;

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

var _baseIsNaN = baseIsNaN;

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

var _strictIndexOf = strictIndexOf;

function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? _strictIndexOf(array, value, fromIndex)
    : _baseFindIndex(array, _baseIsNaN, fromIndex);
}

var _baseIndexOf = baseIndexOf;

function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && _baseIndexOf(array, value, 0) > -1;
}

var _arrayIncludes = arrayIncludes;

var WRAP_BIND_FLAG$1 = 1;
var WRAP_BIND_KEY_FLAG = 2;
var WRAP_CURRY_FLAG = 8;
var WRAP_CURRY_RIGHT_FLAG = 16;
var WRAP_PARTIAL_FLAG = 32;
var WRAP_PARTIAL_RIGHT_FLAG = 64;
var WRAP_ARY_FLAG = 128;
var WRAP_REARG_FLAG = 256;
var WRAP_FLIP_FLAG = 512;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [
  ['ary', WRAP_ARY_FLAG],
  ['bind', WRAP_BIND_FLAG$1],
  ['bindKey', WRAP_BIND_KEY_FLAG],
  ['curry', WRAP_CURRY_FLAG],
  ['curryRight', WRAP_CURRY_RIGHT_FLAG],
  ['flip', WRAP_FLIP_FLAG],
  ['partial', WRAP_PARTIAL_FLAG],
  ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
  ['rearg', WRAP_REARG_FLAG]
];

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  _arrayEach(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !_arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

var _updateWrapDetails = updateWrapDetails;

function setWrapToString(wrapper, reference, bitmask) {
  var source = (reference + '');
  return _setToString(wrapper, _insertWrapDetails(source, _updateWrapDetails(_getWrapDetails(source), bitmask)));
}

var _setWrapToString = setWrapToString;

var WRAP_BIND_FLAG$2 = 1;
var WRAP_BIND_KEY_FLAG$1 = 2;
var WRAP_CURRY_BOUND_FLAG = 4;
var WRAP_CURRY_FLAG$1 = 8;
var WRAP_PARTIAL_FLAG$1 = 32;
var WRAP_PARTIAL_RIGHT_FLAG$1 = 64;

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & WRAP_CURRY_FLAG$1,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= (isCurry ? WRAP_PARTIAL_FLAG$1 : WRAP_PARTIAL_RIGHT_FLAG$1);
  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG$1 : WRAP_PARTIAL_FLAG$1);

  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
    bitmask &= ~(WRAP_BIND_FLAG$2 | WRAP_BIND_KEY_FLAG$1);
  }
  var newData = [
    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
    newHoldersRight, argPos, ary, arity
  ];

  var result = wrapFunc.apply(undefined, newData);
  if (_isLaziable(func)) {
    _setData(result, newData);
  }
  result.placeholder = placeholder;
  return _setWrapToString(result, func, bitmask);
}

var _createRecurry = createRecurry;

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

var _getHolder = getHolder;

var nativeMin = Math.min;

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = _copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = _isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

var _reorder = reorder;

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

var _replaceHolders = replaceHolders;

var WRAP_BIND_FLAG$3 = 1;
var WRAP_BIND_KEY_FLAG$2 = 2;
var WRAP_CURRY_FLAG$2 = 8;
var WRAP_CURRY_RIGHT_FLAG$1 = 16;
var WRAP_ARY_FLAG$1 = 128;
var WRAP_FLIP_FLAG$1 = 512;

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & WRAP_ARY_FLAG$1,
      isBind = bitmask & WRAP_BIND_FLAG$3,
      isBindKey = bitmask & WRAP_BIND_KEY_FLAG$2,
      isCurried = bitmask & (WRAP_CURRY_FLAG$2 | WRAP_CURRY_RIGHT_FLAG$1),
      isFlip = bitmask & WRAP_FLIP_FLAG$1,
      Ctor = isBindKey ? undefined : _createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = _getHolder(wrapper),
          holdersCount = _countHolders(args, placeholder);
    }
    if (partials) {
      args = _composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = _composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = _replaceHolders(args, placeholder);
      return _createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = _reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== _root && this instanceof wrapper) {
      fn = Ctor || _createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

var _createHybrid = createHybrid;

function createCurry(func, bitmask, arity) {
  var Ctor = _createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = _getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : _replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return _createRecurry(
        func, bitmask, _createHybrid, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== _root && this instanceof wrapper) ? Ctor : func;
    return _apply(fn, this, args);
  }
  return wrapper;
}

var _createCurry = createCurry;

var WRAP_BIND_FLAG$4 = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG$4,
      Ctor = _createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== _root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return _apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

var _createPartial = createPartial;

var PLACEHOLDER$1 = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG$5 = 1;
var WRAP_BIND_KEY_FLAG$3 = 2;
var WRAP_CURRY_BOUND_FLAG$1 = 4;
var WRAP_CURRY_FLAG$3 = 8;
var WRAP_ARY_FLAG$2 = 128;
var WRAP_REARG_FLAG$1 = 256;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin$1 = Math.min;

/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */
function mergeData(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon = newBitmask < (WRAP_BIND_FLAG$5 | WRAP_BIND_KEY_FLAG$3 | WRAP_ARY_FLAG$2);

  var isCombo =
    ((srcBitmask == WRAP_ARY_FLAG$2) && (bitmask == WRAP_CURRY_FLAG$3)) ||
    ((srcBitmask == WRAP_ARY_FLAG$2) && (bitmask == WRAP_REARG_FLAG$1) && (data[7].length <= source[8])) ||
    ((srcBitmask == (WRAP_ARY_FLAG$2 | WRAP_REARG_FLAG$1)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG$3));

  // Exit early if metadata can't be merged.
  if (!(isCommon || isCombo)) {
    return data;
  }
  // Use source `thisArg` if available.
  if (srcBitmask & WRAP_BIND_FLAG$5) {
    data[2] = source[2];
    // Set when currying a bound function.
    newBitmask |= bitmask & WRAP_BIND_FLAG$5 ? 0 : WRAP_CURRY_BOUND_FLAG$1;
  }
  // Compose partial arguments.
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? _composeArgs(partials, value, source[4]) : value;
    data[4] = partials ? _replaceHolders(data[3], PLACEHOLDER$1) : source[4];
  }
  // Compose partial right arguments.
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? _composeArgsRight(partials, value, source[6]) : value;
    data[6] = partials ? _replaceHolders(data[5], PLACEHOLDER$1) : source[6];
  }
  // Use source `argPos` if available.
  value = source[7];
  if (value) {
    data[7] = value;
  }
  // Use source `ary` if it's smaller.
  if (srcBitmask & WRAP_ARY_FLAG$2) {
    data[8] = data[8] == null ? source[8] : nativeMin$1(data[8], source[8]);
  }
  // Use source `arity` if one is not provided.
  if (data[9] == null) {
    data[9] = source[9];
  }
  // Use source `func` and merge bitmasks.
  data[0] = source[0];
  data[1] = newBitmask;

  return data;
}

var _mergeData = mergeData;

var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber;

var INFINITY$2 = 1 / 0;
var MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber_1(value);
  if (value === INFINITY$2 || value === -INFINITY$2) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

var toFinite_1 = toFinite;

function toInteger(value) {
  var result = toFinite_1(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

var toInteger_1 = toInteger;

var FUNC_ERROR_TEXT$1 = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG$6 = 1;
var WRAP_BIND_KEY_FLAG$4 = 2;
var WRAP_CURRY_FLAG$4 = 8;
var WRAP_CURRY_RIGHT_FLAG$2 = 16;
var WRAP_PARTIAL_FLAG$2 = 32;
var WRAP_PARTIAL_RIGHT_FLAG$2 = 64;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$3 = Math.max;

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *    1 - `_.bind`
 *    2 - `_.bindKey`
 *    4 - `_.curry` or `_.curryRight` of a bound function
 *    8 - `_.curry`
 *   16 - `_.curryRight`
 *   32 - `_.partial`
 *   64 - `_.partialRight`
 *  128 - `_.rearg`
 *  256 - `_.ary`
 *  512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG$4;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(WRAP_PARTIAL_FLAG$2 | WRAP_PARTIAL_RIGHT_FLAG$2);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax$3(toInteger_1(ary), 0);
  arity = arity === undefined ? arity : toInteger_1(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG$2) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }
  var data = isBindKey ? undefined : _getData(func);

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  if (data) {
    _mergeData(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === undefined
    ? (isBindKey ? 0 : func.length)
    : nativeMax$3(newData[9] - length, 0);

  if (!arity && bitmask & (WRAP_CURRY_FLAG$4 | WRAP_CURRY_RIGHT_FLAG$2)) {
    bitmask &= ~(WRAP_CURRY_FLAG$4 | WRAP_CURRY_RIGHT_FLAG$2);
  }
  if (!bitmask || bitmask == WRAP_BIND_FLAG$6) {
    var result = _createBind(func, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG$4 || bitmask == WRAP_CURRY_RIGHT_FLAG$2) {
    result = _createCurry(func, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG$2 || bitmask == (WRAP_BIND_FLAG$6 | WRAP_PARTIAL_FLAG$2)) && !holders.length) {
    result = _createPartial(func, bitmask, thisArg, partials);
  } else {
    result = _createHybrid.apply(undefined, newData);
  }
  var setter = data ? _baseSetData : _setData;
  return _setWrapToString(setter(result, newData), func, bitmask);
}

var _createWrap = createWrap;

var WRAP_BIND_FLAG$7 = 1;
var WRAP_PARTIAL_FLAG$3 = 32;

/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */
var bind = _baseRest(function(func, thisArg, partials) {
  var bitmask = WRAP_BIND_FLAG$7;
  if (partials.length) {
    var holders = _replaceHolders(partials, _getHolder(bind));
    bitmask |= WRAP_PARTIAL_FLAG$3;
  }
  return _createWrap(func, bitmask, thisArg, partials, holders);
});

// Assign default placeholders.
bind.placeholder = {};

var bind_1 = bind;

var PROXY_CONFIG_PROPERTIES = ['headers', 'params', 'data'];
var PROXY_CONFIG_METHODS = {
  get: function get(prop, context) {
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
  remove: function remove(prop, context) {
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
  return camelCase_1([action, prop].join(' '));
};

var chainable = function chainable(prop) {
  var _this = this;

  return function (key, value) {
    if (key instanceof FormData) {
      _this[method('set', prop)](key);
    } else if (isObject_1(key)) {
      _this[method('merge', prop)](key);
    } else {
      _this[method('add', prop)](key, value);
    }

    return _this;
  };
};

var Request =
/*#__PURE__*/
function () {
  function Request(url) {
    var _this2 = this;

    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Request);

    this.$config = extend({
      url: url,
      headers: {},
      params: {},
      data: {}
    }, config);

    each(PROXY_CONFIG_METHODS, function (callback, key) {
      _this2[method(key, 'config')] = bind_1(callback)('$config', _this2);
    });

    this['config'] = bind_1(chainable, this)('config');

    each(PROXY_CONFIG_PROPERTIES, function (prop) {
      each(PROXY_CONFIG_METHODS, function (callback, key) {
        _this2[method(key, prop)] = bind_1(callback)(prop, _this2.$config);
      });

      _this2[prop] = bind_1(chainable, _this2)(prop);
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
    key: "getUrl",
    value: function getUrl() {
      return this.$url;
    }
  }, {
    key: "setUrl",
    value: function setUrl(url) {
      this.$url = url;
    }
  }, {
    key: "get",
    value: function get() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.params(params).headers(headers).request('get');
    }
  }, {
    key: "post",
    value: function post() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.data(data).headers(headers).request('post');
    }
  }, {
    key: "put",
    value: function put() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.data(data).headers(headers).request('put');
    }
  }, {
    key: "delete",
    value: function _delete() {
      var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.headers(headers).request('delete');
    }
  }, {
    key: "request",
    value: function request(method) {
      var _this3 = this;

      this.reset();
      this.$requestSentAt = moment();
      this.addConfig('method', method);
      var promise = new Promise(function (resolve, reject) {
        axios.request(_this3.$config).then(function (response) {
          _this3.$response = response;
          _this3.$responseReceivedAt = moment();
          _this3.$status = response.status;
          _this3.$statusText = response.statusText;
          resolve(response.data);
        }, function (error) {
          _this3.$error = error;
          _this3.$response = error.response;
          _this3.$responseReceivedAt = moment();
          _this3.$status = error.response.status;
          _this3.$statusText = error.response.statusText;
          reject(error.response.data.errors);
        });
      });
      return promise;
    }
  }]);

  return Request;
}();

var Model =
/*#__PURE__*/
function () {
  /**
   * Initialize the model instance
   *
   * @param data object
   * @return void
   */
  function Model() {
    var _this = this;

    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Model);

    this.$changed = {};
    this.$exists = false;
    this.$attributes = {};
    this.$key = this.key();
    this.$files = this.files();
    this.$table = this.table();
    this.$properties = this.properties();
    this.initialize(data);

    each(params, function (value, key) {
      _this[key] = value;
    });

    if (!this.$table) {
      throw new Error('A table must be defined for every model.');
    }

    this.$initialized = true;
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
      this.$initialized = false;
      this.fill(data);
      this.$initialized = true;
      return this;
    }
    /**
     * Define the corresponding database table (aka API endpoint slug).
     *
     * @return string
     */

  }, {
    key: "table",
    value: function table() {} //

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
    value: function get(key) {
      if (isArray_1(key) || isObject_1(key)) {
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

      if (isArray_1(key) || isObject_1(key)) {
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
      return keys_1(this.$changed);
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
     * Get the unchanged attributes
     *
     * @return array
     */

  }, {
    key: "getUnchangedAttributes",
    value: function getUnchangedAttributes() {
      var _this2 = this;

      return filter_1(keys_1(this.$attributes), function (key) {
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

      if (!isArray_1(data) && !isObject_1(data)) {
        throw new Error('Attributes must be set with an array or object.');
      }

      each(data, function (value, key) {
        _this3.setAttribute(key, value);
      });
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

        if (isUndefined_1(value)) {
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
        if (!isUndefined_1(value)) {
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
      return !key ? size_1(this.$changed) > 0 : !isUndefined_1(this.$changed[key]);
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
        return reduce_1(files, function (carry, value) {
          if (isArray_1(value)) {
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
        this.$exists = !isUndefined_1(value) && !isNull_1(value);
      }
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
      return this.exists() ? this.create(data, config) : this.update(data, config);
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
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (this.exists()) {
        return this.update(data, config);
      }

      this.fill(data);
      return this.request("/api/".concat(this.table()), extend({
        data: !this.hasFiles() ? this.toJson() : this.toFormData()
      }, config)).post();
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
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!this.exists()) {
        return this.create(data, config);
      }

      var method = this.hasFiles() ? 'post' : 'put';
      this.fill(data);
      return this.request("/api/".concat(this.table(), "/").concat(this.get(this.key())), extend({
        data: !this.hasFiles() ? this.toJson() : this.toFormData()
      }, config))[method]();
    }
    /**
     * Delete an existing model
     *
     * @param data object
     * @return bool
     */

  }, {
    key: "delete",
    value: function _delete() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!this.exists()) {
        throw new Error('The model must have a primary key before it can be delete.');
      }

      this.fill(data);
      return this.request("/api/".concat(this.table(), "/").concat(this.get(this.key())), config).delete();
    }
    /**
     * Find an existing model by id
     *
     * @param data object
     * @return bool
     */

  }, {
    key: "search",
    value: function search() {
      var _this5 = this;

      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Promise(function (resolve, reject) {
        _this5.request("/api/".concat(_this5.table()), extend({
          params: params
        }, config)).get().then(function (response) {
          resolve(map_1(response.data, function (data) {
            return new _this5.constructor(data);
          }));
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
    value: function find(id) {
      var _this6 = this;

      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new Promise(function (resolve, reject) {
        _this6.request("/api/".concat(_this6.table(), "/").concat(id), config).get().then(function (response) {
          resolve(_this6.initialize(response));
        }, function (errors) {
          reject(errors);
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
        if (isArray_1(value)) {
          each(value, function (item) {
            form.append(key.replace(/(.+)(\[.+\]?)$/, '$1') + '[]', item);
          });
        } else {
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
      var _this7 = this;

      return pickBy_1(this.$attributes, function (value, key) {
        return !_this7.$properties.length || key === _this7.key() || _this7.$properties.indexOf(key) !== -1;
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
  }]);

  return Model;
}();

var BaseForm = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('form', {
      class: {
        'form-inline': _vm.inline
      },
      attrs: {
        "novalidate": _vm.novalidate
      },
      on: {
        "submit": function submit($event) {
          $event.preventDefault();
          return _vm.onSubmit($event);
        }
      }
    }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  props: {
    /**
     * An object of form data
     *
     * @property Object
     */
    data: {
      type: Object,
      default: function _default() {
        return {};
      }
    },

    /**
     * Display the form fields inline
     *
     * @property Object
     */
    model: {
      type: Object,
      validate: function validate(value) {
        return value instanceof Model;
      }
    },

    /**
     * Display the form fields inline
     *
     * @property Boolean
     */
    inline: {
      type: Boolean,
      default: false
    },

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
     * A URI or URL used to redirect user after form submits successfully.
     *
     * @property Function|String
     */
    redirect: [String, Function],

    /**
     * A callback function for the `submit` event
     *
     * @property Function
     */
    onSubmit: {
      type: Function,
      default: function _default(event) {
        var _this = this;

        this.$emit('submit', event);

        if (this.model) {
          this.model.save(this.data, {
            onUploadProgress: function onUploadProgress(event) {
              _this.$emit('submit:progress', event);
            }
          }).then(function (data) {
            _this.onSubmitSuccess(event, data);
          }, function (errors) {
            _this.onSubmitFailed(event, errors);
          });
        }
      }
    },

    /**
     * A callback function for the `submit:success` event
     *
     * @property Function
     */
    onSubmitSuccess: {
      type: Function,
      default: function _default(event, data) {
        this.$emit('submit:success', event, data);
        this.$emit('submit:complete', event, true, data);

        if (this.redirect && isFunction_1(this.redirect)) {
          this.redirect(this);
        } else if (this.redirect) {
          window.location = this.redirect;
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
      default: function _default(event, errors) {
        this.$emit('submit:failed', event, errors);
        this.$emit('submit:complete', event, false, errors);
      }
    }
  },
  data: function data() {
    return {
      errors: {}
    };
  }
};

var plugin$4 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      BaseForm: BaseForm
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

var Proxy = {
  methods: {
    proxy: function proxy(callback, event) {
      if (isFunction_1(callback)) {
        callback.apply(this, [].slice.call(arguments).splice(1));
        event.preventDefault();
      }
    }
  }
};

var DropdownMenuItem = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('a', {
      staticClass: "dropdown-item",
      class: {
        'active': _vm.active
      },
      attrs: {
        "href": _vm.href || '#'
      },
      on: {
        "click": function click($event) {
          _vm.proxy(_vm.onClick, $event);

          _vm.onClicked($event);
        }
      }
    }, [_vm.icon ? _c('i', {
      class: _vm.icon
    }) : _vm._e(), _vm._v(" "), _vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2);
  },
  staticRenderFns: [],
  mixins: [Proxy],
  props: {
    /**
     * Is the menu item active.
     *
     * @property Object
     */
    active: Boolean,

    /**
     * The `href` attribute.
     *
     * @property Object
     */
    href: String,

    /**
     * The label of the dropdown menu item.
     *
     * @property Object
     */
    label: String,

    /**
     * The icon of the dropdown menu item.
     *
     * @property Object
     */
    icon: String,

    /**
     * A callback function for the `click` event.
     *
     * @property Object
     */
    onClick: Function
  },
  methods: {
    /**
     * A callback function for the `click` event.
     *
     * @property Object
     */
    onClicked: function onClicked(event) {
      if (!this.href) {
        event.preventDefault();
      }

      this.$emit('click', event);
    }
  }
};

var DropdownMenuHeader = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('h5', {
      staticClass: "dropdown-header"
    }, [_vm._v(" " + _vm._s(_vm.header) + " "), _vm._t("default")], 2);
  },
  staticRenderFns: [],
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

var DropdownMenuDivider = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "dropdown-divider"
    });
  },
  staticRenderFns: [],
  name: 'dropdown-menu-divider'
};

var DropdownMenu = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "dropdown-menu",
      class: {
        'dropdown-menu-right': _vm.align === 'right',
        'show': _vm.show
      },
      attrs: {
        "aria-labelledby": _vm.id
      }
    }, [_vm._t("default", [_vm._l(_vm.items, function (item) {
      return [_c(_vm.prefix(item.type || 'item', 'dropdown-menu'), _vm._b({
        tag: "component",
        on: {
          "click": function click($event) {
            _vm.onClick($event, item);
          }
        }
      }, 'component', item, false))];
    })])], 2);
  },
  staticRenderFns: [],
  components: {
    DropdownMenuItem: DropdownMenuItem,
    DropdownMenuHeader: DropdownMenuHeader,
    DropdownMenuDivider: DropdownMenuDivider
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
      validate: function validate(value) {
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
    onClick: function onClick(event, item) {
      this.$emit('item:click', event, item);
      this.$emit('update:show', false);
    }
  }
};

var plugin$5 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      DropdownMenu: DropdownMenu,
      DropdownMenuDivider: DropdownMenuDivider,
      DropdownMenuHeader: DropdownMenuHeader
    });
  }
});

var ButtonDropdown = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "btn-group",
      class: {
        'dropup': _vm.dropup,
        'dropright': _vm.dropright,
        'dropleft': _vm.dropleft
      }
    }, [_vm._t("button", [_vm.split ? [_vm.href ? _c('a', {
      class: _vm.actionClasses,
      attrs: {
        "href": _vm.href
      },
      on: {
        "click": _vm.onClick
      }
    }, [_vm._t("label-wrapper", [_vm.icon ? _c('i', {
      class: _vm.icon
    }) : _vm._e(), _vm._v(" "), _vm._t("label", [_vm._v(_vm._s(_vm.label))])])], 2) : _c('button', {
      class: _vm.actionClasses,
      attrs: {
        "type": _vm.type
      },
      on: {
        "click": _vm.onClick
      }
    }, [_vm._t("label-wrapper", [_vm.icon ? _c('i', {
      class: _vm.icon
    }) : _vm._e(), _vm._v(" "), _vm._t("label", [_vm._v(_vm._s(_vm.label))])])], 2), _vm._v(" "), _c('button', {
      class: _vm.toggleClasses,
      attrs: {
        "type": "button",
        "aria-haspopup": "true",
        "aria-expanded": _vm.isDropdownShowing,
        "id": _vm.id
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          !_vm.isDropdownShowing ? _vm.showDropdown() : _vm.hideDropdown();
        },
        "blur": _vm.onBlur
      }
    })] : [_c('button', {
      class: _vm.toggleClasses,
      attrs: {
        "aria-haspopup": "true",
        "aria-expanded": _vm.isDropdownShowing,
        "type": _vm.type,
        "id": _vm.id
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          !_vm.isDropdownShowing ? _vm.showDropdown() : _vm.hideDropdown();
        },
        "blur": _vm.onBlur
      }
    }, [_vm._t("label-wrapper", [_vm.icon ? _c('i', {
      class: _vm.icon
    }) : _vm._e(), _vm._v(" "), _vm._t("label", [_vm._v(_vm._s(_vm.label))])])], 2)]]), _vm._v(" "), _vm._t("dropdown-menu", [_c('dropdown-menu', {
      directives: [{
        name: "transform-position",
        rawName: "v-transform-position"
      }],
      attrs: {
        "id": _vm.id,
        "items": _vm.items,
        "align": _vm.align,
        "show": _vm.isDropdownShowing
      },
      on: {
        "update:show": function updateShow($event) {
          _vm.isDropdownShowing = $event;
        },
        "item:click": _vm.onItemClick
      }
    }, [_vm._t("default")], 2)])], 2);
  },
  staticRenderFns: [],
  name: 'button-dropdown',
  components: {
    DropdownMenu: DropdownMenu
  },
  directives: {
    transformPosition: {
      update: function update(el, binding, vnode) {
        var top = null,
            bottom = null,
            left = null,
            right = null,
            x = 0,
            y = 0;
        var offsetElement = getComputedStyle(vnode.context.$el.querySelector(vnode.context.split ? '.btn:not(.dropdown-toggle)' : '.btn.dropdown-toggle')); //if(vnode.context.split) {

        if (vnode.context.split && vnode.context.align === 'left') {
          x = offsetElement.width;
        } else {
          right = 0;
          left = null;
        } //}


        el.style.left = left === null ? 'auto' : left;
        el.style.right = right === null ? 'auto' : right;
        el.style.transform = "translate(".concat(x, ", ").concat(y, ")");
      }
    }
  },
  props: {
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
    items: Array,

    /**
     * The `href` attribute on the action button (if a split button).
     *
     * @property String
     */
    href: String,

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
     * The `type` attribute on the toggle button
     *
     * @property String
     */
    type: {
      type: String,
      default: 'button'
    },

    /**
     * The size class of the toggle button
     *
     * @property String
     */
    size: {
      type: String,
      default: 'md'
    },

    /**
     * The toggle button's variant class.
     *
     * @property String
     */
    variant: {
      type: String,
      default: 'primary'
    },

    /**
     * Display the dropdown menu aligned left or right
     *
     * @property String
     */
    align: {
      type: String,
      default: 'left',
      validate: function validate(value) {
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
     * Show the dropdown menu
     *
     * @return void
     */
    showDropdown: function showDropdown() {
      this.$emit('toggle', this.isDropdownShowing = true);
      this.$emit('show');
    },

    /**
     * Hide the dropdown menu
     *
     * @return void
     */
    hideDropdown: function hideDropdown() {
      this.$emit('toggle', this.isDropdownShowing = false);
      this.$emit('hide');
    },

    /**
     * A callback function for the `click` event for the action button
     *
     * @return void
     */
    onClick: function onClick(event) {
      this.hideDropdown();
      this.$emit('click', event);
    },

    /**
     * A callback function for the `blur` event for the action button
     *
     * @return void
     */
    onBlur: function onBlur(event) {
      if (!this.$el.contains(event.relatedTarget)) {
        this.hideDropdown();
      }
    },

    /**
     * A callback function for the `item:click` event for the action button
     *
     * @return void
     */
    onItemClick: function onItemClick(event, child) {
      this.$emit('item:click', event, child);
    }
  },
  computed: {
    actionClasses: function actionClasses() {
      return ['btn', prefix(this.size, 'btn'), prefix(this.variant, 'btn')].join(' ');
    },
    toggleClasses: function toggleClasses() {
      return ['btn', 'dropdown-toggle', prefix(this.size, 'btn'), prefix(this.variant, 'btn'), this.split ? 'dropdown-toggle-split' : ''].join(' ');
    }
  },
  data: function data() {
    return {
      isDropdownShowing: false
    };
  }
};

var plugin$6 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      ButtonDropdown: ButtonDropdown
    });
  }
});

/** Error message constants. */
var FUNC_ERROR_TEXT$2 = 'Expected a function';

/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 *
 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
 * // => [1, 3, 5]
 */
function negate(predicate) {
  if (typeof predicate != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT$2);
  }
  return function() {
    var args = arguments;
    switch (args.length) {
      case 0: return !predicate.call(this);
      case 1: return !predicate.call(this, args[0]);
      case 2: return !predicate.call(this, args[0], args[1]);
      case 3: return !predicate.call(this, args[0], args[1], args[2]);
    }
    return !predicate.apply(this, args);
  };
}

var negate_1 = negate;

function omitBy(object, predicate) {
  return pickBy_1(object, negate_1(_baseIteratee(predicate)));
}

var omitBy_1 = omitBy;

var COLORS = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'white'];
var props = {};

each(['text', 'bg', 'bg-gradient'], function (namespace) {
  each(COLORS, function (color) {
    props[camelCase_1(prefix(color, namespace))] = Boolean;
  });
});

function classes(instance, namespace) {
  return filter_1(map_1(COLORS, function (color) {
    return instance[camelCase_1(color = prefix(color, namespace))] ? color : null;
  }));
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
    bgGradientColor: function bgGradientColor() {
      return classes(this, 'bg-gradient');
    }
  },
  computed: {
    textColorClasses: function textColorClasses() {
      return this.textColor().join(' ').trim() || null;
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
      classes[this.bgColorClasses] = !!this.bgColorClasses;
      classes[this.bgGradientColorClasses] = !!this.bgGradientColorClasses;
      return omitBy_1(classes, function (key, value) {
        return !key || !value;
      });
    }
  }
};

var FormControl = {
  props: {
    /**
     * The field id attribute value.
     *
     * @property String
     */
    id: String,

    /**
     * The value of label element. If no value, no label will appear.
     *
     * @property String
     */
    label: String,

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
    errors: [Object, Array],

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
        return ['focus', 'blur', 'change', 'click', 'keyup', 'keydown', 'progress'];
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
    helpText: String
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
    getInputField: function getInputField() {
      return this.$el.querySelector('.form-control, input, select, textarea');
    },
    getFieldErrors: function getFieldErrors() {
      var errors = this.error || this.errors;

      if (isObject_1(this.errors)) {
        errors = this.errors[this.name || this.id];
      }

      return !errors || isArray_1(errors) || isObject_1(errors) ? errors : [errors];
    },
    updated: function updated(value, event) {
      this.$emit(event || 'input', value);
    }
  },
  computed: {
    callbacks: function callbacks() {
      var _this = this;

      return this.bindEvents.map(function (event) {
        return {
          name: event,
          callback: _this[camelCase_1(['on', event].join(' '))]
        };
      }).filter(function (event) {
        return !isUndefined_1(event.callback);
      });
    },
    invalidFeedback: function invalidFeedback() {
      if (this.error) {
        return this.error;
      }

      var errors = this.getFieldErrors();
      return isArray_1(errors) ? errors.join('<br>') : errors;
    },
    validFeedback: function validFeedback() {
      return isArray_1(this.feedback) ? this.feedback.join('<br>') : this.feedback;
    },
    controlClass: function controlClass() {
      return this.defaultControlClass + (this.plaintext ? '-plaintext' : '');
    },
    controlSizeClass: function controlSizeClass() {
      return prefix(this.size, this.controlClass);
    },
    controlClasses: function controlClasses() {
      return [this.controlClass, this.controlSizeClass, this.spacing || '', this.invalidFeedback ? 'is-invalid' : ''].join(' ');
    }
  }
};

var RadioField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "form-check",
      class: _vm.mergeClasses({
        'form-check-inline': _vm.inline
      }, _vm.controlSizeClass)
    }, [_c('label', {
      class: _vm.mergeClasses('form-check-label', _vm.colorableClasses),
      attrs: {
        "for": _vm.id
      }
    }, [_c('input', {
      directives: [{
        name: "bind-events",
        rawName: "v-bind-events",
        value: _vm.bindEvents,
        expression: "bindEvents"
      }],
      class: _vm.mergeClasses(_vm.controlClass, _vm.invalidFeedback ? 'is-invalid' : '', !(_vm.label ? 'position-static' : '')),
      attrs: {
        "type": "radio",
        "name": _vm.name,
        "id": _vm.id,
        "required": _vm.required,
        "disabled": _vm.disabled || _vm.readonly,
        "readonly": _vm.readonly,
        "pattern": _vm.pattern
      },
      domProps: {
        "value": _vm.value,
        "checked": _vm.value === _vm.checked
      },
      on: {
        "change": function change($event) {
          _vm.updated($event.target.value, 'change');
        }
      }
    }), _vm._v(" "), _vm._t("default", [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _vm._t("feedback", [_vm.validFeedback ? _c('form-feedback', {
      attrs: {
        "valid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.validFeedback)
      }
    }) : _vm._e(), _vm._v(" "), _vm.invalidFeedback ? _c('form-feedback', {
      attrs: {
        "invalid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.invalidFeedback)
      }
    }) : _vm._e()])], 2), _vm._v(" "), _vm._t("help", [_vm.helpText ? _c('help-text', {
      domProps: {
        "innerHTML": _vm._s(_vm.helpText)
      }
    }) : _vm._e()])], 2);
  },
  staticRenderFns: [],
  name: 'radio-field',
  mixins: [Colorable, FormControl],
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    /**
     * Add form-group to the wrapping element
     *
     * @property String
     */
    group: {
      type: Boolean,
      default: false
    },

    /**
     * Display the form field and label inline
     *
     * @property Function
     */
    inline: {
      type: Boolean,
      default: false
    },

    /**
     * The checked values
     *
     * @property String
     */
    checked: [Number, String, Object],

    /**
     * The class name assigned to the control element
     *
     * @property String
     */
    defaultControlClass: {
      type: String,
      default: 'form-check-input'
    }
  },
  computed: {
    controlClass: function controlClass() {
      return this.defaultControlClass;
    },
    controlSizeClass: function controlSizeClass() {
      return prefix(this.size, 'form-control');
    }
  }
};

var CheckboxField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "form-check",
      class: _vm.mergeClasses({
        'form-check-inline': _vm.inline
      }, _vm.controlSizeClass)
    }, [_c('label', {
      class: _vm.mergeClasses('form-check-label', _vm.colorableClasses),
      attrs: {
        "for": _vm.id
      }
    }, [_c('input', {
      directives: [{
        name: "bind-events",
        rawName: "v-bind-events",
        value: _vm.bindEvents,
        expression: "bindEvents"
      }],
      class: _vm.mergeClasses(_vm.controlClass, _vm.invalidFeedback ? 'is-invalid' : '', !(_vm.label ? 'position-static' : '')),
      attrs: {
        "type": "checkbox",
        "name": _vm.name,
        "id": _vm.id,
        "required": _vm.required,
        "disabled": _vm.disabled || _vm.readonly,
        "readonly": _vm.readonly,
        "pattern": _vm.pattern
      },
      domProps: {
        "value": _vm.value,
        "checked": _vm.checked.indexOf(_vm.value) !== -1
      },
      on: {
        "change": function change($event) {
          _vm.updated($event.target.value, 'change');
        }
      }
    }), _vm._v(" "), _vm._t("default", [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _vm._t("feedback", [_vm.validFeedback ? _c('form-feedback', {
      attrs: {
        "valid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.validFeedback)
      }
    }) : _vm._e(), _vm._v(" "), _vm.invalidFeedback ? _c('form-feedback', {
      attrs: {
        "invalid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.invalidFeedback)
      }
    }) : _vm._e()])], 2), _vm._v(" "), _vm._t("help", [_vm.helpText ? _c('help-text', {
      domProps: {
        "innerHTML": _vm._s(_vm.helpText)
      }
    }) : _vm._e()])], 2);
  },
  staticRenderFns: [],
  name: 'checkbox-field',
  extends: RadioField,
  props: {
    /**
     * The checked values
     *
     * @property String
     */
    checked: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  methods: {
    updated: function updated(value) {
      var checked = this.checked.slice(0);
      var index = this.checked.indexOf(value);

      if (index === -1) {
        checked.push(value);
      } else {
        checked.splice(index, 1);
      }

      this.$emit('change', checked);
    }
  }
};

var plugin$7 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      CheckboxField: CheckboxField
    });
  }
});

var Container = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "container"
    }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  name: 'container'
};

var plugin$8 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Container: Container
    });
  }
});

var InputField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('form-group', [_vm._t("label", [_vm.label ? _c('form-label', {
      attrs: {
        "for": _vm.id
      },
      domProps: {
        "innerHTML": _vm._s(_vm.label)
      }
    }) : _vm._e()]), _vm._v(" "), _vm._t("control", [_c('input', {
      directives: [{
        name: "bind-events",
        rawName: "v-bind-events",
        value: _vm.bindEvents,
        expression: "bindEvents"
      }],
      class: _vm.mergeClasses(_vm.controlClasses, _vm.colorableClasses),
      attrs: {
        "type": _vm.type,
        "id": _vm.id,
        "placeholder": _vm.placeholder,
        "required": _vm.required,
        "disabled": _vm.disabled || _vm.readonly,
        "readonly": _vm.readonly,
        "pattern": _vm.pattern
      },
      domProps: {
        "value": _vm.value
      },
      on: {
        "input": function input($event) {
          _vm.updated($event.target.value);
        }
      }
    })]), _vm._v(" "), _vm._t("help", [_vm.helpText ? _c('help-text', {
      domProps: {
        "innerHTML": _vm._s(_vm.helpText)
      }
    }) : _vm._e()]), _vm._v(" "), _vm._t("feedback", [_vm.validFeedback ? _c('form-feedback', {
      attrs: {
        "valid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.validFeedback)
      }
    }) : _vm._e(), _vm._v(" "), _vm.invalidFeedback ? _c('form-feedback', {
      attrs: {
        "invalid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.invalidFeedback)
      }
    }) : _vm._e()])], 2);
  },
  staticRenderFns: [],
  name: 'input-field',
  mixins: [Colorable, FormControl],
  props: {
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

var FileField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('form-group', [_vm._t("label", [_vm.label ? _c('form-label', {
      attrs: {
        "for": _vm.id
      },
      domProps: {
        "innerHTML": _vm._s(_vm.label)
      }
    }) : _vm._e()]), _vm._v(" "), _c('div', {
      staticClass: "custom-file"
    }, [_vm._t("label", [_vm.label ? _c('form-label', {
      class: _vm.mergeClasses(_vm.colorableClasses, 'custom-file-label'),
      attrs: {
        "for": _vm.id
      },
      domProps: {
        "innerHTML": _vm._s(_vm.label || 'Choose file')
      }
    }) : _vm._e()]), _vm._v(" "), _c('input', {
      directives: [{
        name: "bind-events",
        rawName: "v-bind-events"
      }],
      class: _vm.controlClasses,
      attrs: {
        "type": "file",
        "id": _vm.id,
        "placeholder": _vm.placeholder,
        "width": _vm.width,
        "height": _vm.height,
        "required": _vm.required,
        "multiple": _vm.multiple,
        "readonly": _vm.readonly
      },
      on: {
        "change": function change($event) {
          _vm.updated($event.target.files);
        }
      }
    }), _vm._v(" "), _vm._t("help", [_vm.helpText ? _c('help-text', {
      domProps: {
        "innerHTML": _vm._s(_vm.helpText)
      }
    }) : _vm._e()]), _vm._v(" "), _vm._t("feedback", [_vm.validFeedback ? _c('form-feedback', {
      attrs: {
        "valid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.validFeedback)
      }
    }) : _vm._e(), _vm._v(" "), _vm.invalidFeedback ? _c('form-feedback', {
      attrs: {
        "invalid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.invalidFeedback)
      }
    }) : _vm._e()])], 2)], 2);
  },
  staticRenderFns: [],
  name: 'file-field',
  extends: InputField,
  model: {
    event: 'change'
  },
  props: {
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

var plugin$9 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      FileField: FileField
    });
  }
});

function readFile(file, progress) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();

    reader.onload = function (e) {
      return resolve(e);
    };

    reader.onerror = function (e) {
      return reject(e);
    };

    reader.onabort = function (e) {
      return reject(e);
    };

    reader.onprogress = function (e) {
      if (e.lengthComputable && isFunction_1(progress)) {
        progress(parseInt(e.loaded / e.total * 100, 10));
      }
    };

    reader.readAsDataURL(file);
  });
}

var numberTag$2 = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike_1(value) && _baseGetTag(value) == numberTag$2);
}

var isNumber_1 = isNumber;

var ProgressBar = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "progress",
      style: {
        'height': _vm.formattedHeight
      }
    }, [_c('div', {
      staticClass: "progress-bar",
      class: _vm.mergeClasses(_vm.progressClasses, _vm.colorableClasses),
      style: {
        'width': _vm.progress + '%'
      },
      attrs: {
        "role": "progressbar",
        "aria-valuenow": _vm.progress,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }
    }, [_vm.label ? _c('span', [_vm._v(_vm._s(_vm.progress) + "%")]) : _vm._e()])]);
  },
  staticRenderFns: [],
  name: 'progress-bar',
  mixins: [Colorable],
  props: {
    /**
     * The progress bar percentage value
     *
     * @property String
     */
    progress: {
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
    label: Boolean,

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
    animated: Boolean
  },
  computed: {
    formattedHeight: function formattedHeight() {
      return !this.height ? null : isNumber_1(this.height) ? this.height + 'px' : this.height;
    },
    progressClasses: function progressClasses() {
      return {
        'progress-bar-striped': this.striped,
        'progress-bar-animated': this.animated
      };
    }
  }
};

var FilePreview = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "file-preview",
      class: {
        'is-image': _vm.isImage
      }
    }, [!_vm.isImage || _vm.image ? _c('a', {
      staticClass: "file-preview-close",
      attrs: {
        "href": "#"
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();

          _vm.$emit('close', _vm.file);
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-times-circle"
    })]) : _vm._e(), _vm._v(" "), _vm.isImage ? _c('div', {
      staticClass: "file-preview-image"
    }, [_vm.image ? _c('img', {
      staticClass: "file-preview-thumbnail",
      attrs: {
        "src": _vm.image
      }
    }) : _c('progress-bar', {
      directives: [{
        name: "ready",
        rawName: "v-ready",
        value: _vm.readFile,
        expression: "readFile"
      }],
      attrs: {
        "progress": _vm.loaded,
        "height": 10
      }
    })], 1) : _c('div', {
      staticClass: "file-preview-icon"
    }, [_c('i', {
      staticClass: "fa fa-file-o"
    })]), _vm._v(" "), _c('div', {
      staticClass: "file-preview-filename",
      domProps: {
        "innerHTML": _vm._s(_vm.name)
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "file-preview-filesize"
    }, [_vm._v("(" + _vm._s(_vm.size) + ")")])]);
  },
  staticRenderFns: [],
  name: 'file-preview',
  components: {
    ProgressBar: ProgressBar
  },
  directives: {
    ready: {
      inserted: function inserted(el, binding) {
        setTimeout(function () {
          if (isFunction_1(binding.value)) {
            binding.value();
          }
        }, 50);
      }
    }
  },
  props: {
    /**
     * The uploaded File object
     *
     * @property Object
     */
    file: {
      type: File,
      required: true
    },

    /**
     * An array of mime types that should be used to determine if the
     * file is an image.
     *
     * @property Array
     */
    imageMimes: {
      type: Array,
      default: function _default() {
        return ['image/gif', 'image/png', 'image/jpeg', 'image/bmp', 'image/webp'];
      }
    }
  },
  computed: {
    /**
     * Get the file name
     *
     * @property String
     */
    name: function name() {
      return this.file.name;
    },

    /**
     * Get the file extension
     *
     * @property String
     */
    extension: function extension() {
      return this.file.name.split('.').pop().toLowerCase();
    },

    /**
     * Get the file formatted size
     *
     * @property String
     */
    size: function size() {
      return this.bytesToSize(this.file.size);
    },

    /**
     * Get the file type
     *
     * @property String
     */
    type: function type() {
      return this.file.type;
    },

    /**
     * If the file an image?
     *
     * @property String
     */
    isImage: function isImage() {
      return this.imageMimes.indexOf(this.type) !== -1;
    },

    /**
     * Get the last time the file was modified (as timestamp)
     *
     * @property String
     */
    lastModified: function lastModified() {
      return this.file.lastModified;
    },

    /**
     * Get the last time the file was modified (as Date)
     *
     * @property String
     */
    lastModifiedDate: function lastModifiedDate() {
      return this.file.lastModifiedDate;
    }
  },
  methods: {
    readFile: function readFile$$1() {
      var _this = this;

      var start = moment();

      readFile(this.file, function (e) {
        if (e.lengthComputable) {
          _this.loaded = parseInt(e.loaded / e.total * 100, 10);
        }
      }).then(function (e) {
        setTimeout(function () {
          _this.image = e.target.result;
        }, 600 - moment().diff(start));
      });
    },
    bytesToSize: function bytesToSize(bytes) {
      var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes == 0) return '0 Byte';
      var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }
  },
  data: function data() {
    return {
      loaded: 0,
      image: null
    };
  }
};

var plugin$10 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      FilePreview: FilePreview
    });
  }
});

var FormFeedback = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      class: {
        'invalid-feedback': _vm.invalid,
        'valid-feedback': _vm.valid && !_vm.invalid
      }
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))])], 2);
  },
  staticRenderFns: [],
  name: 'form-feedback',
  mixins: [Colorable],
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

var plugin$11 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      FormFeedback: FormFeedback
    });
  }
});

var FormGroup = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "form-group"
    }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  name: 'form-group'
};

var plugin$12 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      FormGroup: FormGroup
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

var FormLabel = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('label', {
      class: _vm.classes
    }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  name: 'form-label',
  mixins: [Colorable, Screenreaders],
  computed: {
    classes: function classes() {
      return extend({}, this.screenreaderClasses, this.colorableClasses);
    }
  }
};

var plugin$13 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      FormLabel: FormLabel
    });
  }
});

var HelpText = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('small', {
      staticClass: "form-text",
      class: _vm.classes
    }, [_vm._t("default")], 2);
  },
  staticRenderFns: [],
  name: 'help-text',
  mixins: [Colorable, Screenreaders],
  computed: {
    classes: function classes() {
      return extend({}, this.screenreaderClasses, this.colorableClasses);
    }
  }
};

var plugin$14 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      HelpText: HelpText
    });
  }
});

var plugin$15 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      InputField: InputField
    });
  }
});

var LightSwitchField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('form-group', [_vm._t("label", [_vm.label ? _c('form-label', {
      attrs: {
        "for": _vm.id
      },
      domProps: {
        "innerHTML": _vm._s(_vm.label)
      }
    }) : _vm._e()]), _vm._v(" "), _c('div', {
      class: _vm.controlClasses,
      attrs: {
        "tabindex": "0"
      },
      on: {
        "click": function click($event) {
          _vm.toggle();
        },
        "keyup": [function ($event) {
          if (!('button' in $event) && $event.keyCode !== 32) {
            return null;
          }

          _vm.toggle();
        }, function ($event) {
          if (!('button' in $event) && $event.keyCode !== 37) {
            return null;
          }

          _vm.toggle(_vm.offValue);
        }, function ($event) {
          if (!('button' in $event) && $event.keyCode !== 39) {
            return null;
          }

          _vm.toggle(_vm.onValue);
        }]
      }
    }, [_c('div', {
      staticClass: "light-switch-handle"
    }), _vm._v(" "), _c('div', {
      staticClass: "light-switch-container"
    }, [_c('div', {
      staticClass: "light-switch-label on-value"
    }), _vm._v(" "), _c('div', {
      staticClass: "light-switch-label off-value"
    })])]), _vm._v(" "), _c('input', {
      staticClass: "form-control d-none",
      attrs: {
        "type": "text",
        "name": _vm.name,
        "id": _vm.id
      },
      domProps: {
        "value": _vm.value
      }
    }), _vm._v(" "), _vm._t("feedback", [_vm.validFeedback ? _c('form-feedback', {
      attrs: {
        "valid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.validFeedback)
      }
    }) : _vm._e(), _vm._v(" "), _vm.invalidFeedback ? _c('form-feedback', {
      attrs: {
        "invalid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.invalidFeedback)
      }
    }) : _vm._e()]), _vm._v(" "), _vm._t("help", [_vm.helpText ? _c('help-text', {
      domProps: {
        "innerHTML": _vm._s(_vm.helpText)
      }
    }) : _vm._e()])], 2);
  },
  staticRenderFns: [],
  name: 'light-switch-field',
  mixins: [FormControl],
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
    isActive: function isActive() {
      return this.value === this.onValue;
    },
    controlClasses: function controlClasses() {
      return [this.controlClass, this.controlSizeClass, this.spacing || '', this.invalidFeedback ? 'is-invalid' : '', this.dragging ? 'is-dragging' : '', this.isActive ? 'is-active' : ''].join(' ');
    }
  },
  methods: {
    getTransitionInMilliseconds: function getTransitionInMilliseconds() {
      var duration = getComputedStyle(this.$el.querySelector('.light-switch-handle')).transitionDuration;
      var numeric = parseFloat(duration, 10);
      var unit = duration.match(/m?s/);

      switch (unit[0]) {
        case 's':
          return numeric * 1000;

        case 'ms':
          return numeric;
      }

      throw new Error("\"".concat(unit[0], "\" is not a valid unit of measure. Unit must be \"s\" (seconds) or \"ms\" (milliseconds)."));
    },
    toggle: function toggle(value) {
      this.$emit('input', !isUndefined_1(value) ? value : this.isActive ? this.offValue : this.onValue);
    }
  },
  watch: {
    value: function value() {
      var _this = this;

      this.dragging = true;
      setTimeout(function () {
        _this.dragging = false;
      }, this.getTransitionInMilliseconds());
    }
  },
  data: function data() {
    return {
      dragging: false
    };
  }
};

var plugin$16 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      LightSwitchField: LightSwitchField
    });
  }
});

var ListGroupItem = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _vm.href ? _c('a', {
      staticClass: "list-group-item",
      class: _vm.classes,
      attrs: {
        "href": _vm.href
      },
      on: {
        "click": _vm.onClick
      }
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _vm.badge ? _c('badge', _vm._b({}, 'badge', _vm.badgeOptions, false)) : _vm._e()], 2) : _vm.action ? _c('a', {
      staticClass: "list-group-item",
      class: _vm.classes,
      attrs: {
        "href": "#"
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();
          return _vm.onClick($event);
        }
      }
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _vm.badge ? _c('badge', _vm._b({}, 'badge', _vm.badgeOptions, false)) : _vm._e()], 2) : _c('div', {
      staticClass: "list-group-item",
      class: _vm.classes,
      on: {
        "click": _vm.onClick
      }
    }, [_vm._t("default", [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _vm.badge ? _c('badge', _vm._b({}, 'badge', _vm.badgeOptions, false)) : _vm._e()], 2);
  },
  staticRenderFns: [],
  components: {
    Badge: Badge
  },
  props: {
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
     * The list group item variant.
     *
     * @property String
     */
    variant: String,

    /**
     * The list group item href attribute.
     *
     * @property String
     */
    href: String,

    /**
     * The badge label (if number or string) or object of options to pass to
     * the component.
     *
     * @property String|Object
     */
    badge: [Number, String, Object]
  },
  computed: {
    classes: function classes() {
      var classes = prefix({
        'action': this.action
      }, 'list-group-item');
      classes['active'] = this.isActive;
      classes['disabled'] = this.isDisabled;

      if (this.variant) {
        classes[prefix(this.variant, 'list-group-item')] = true;
      }

      return classes;
    },
    badgeOptions: function badgeOptions() {
      return isObject_1(this.badge) ? this.badge : {
        label: this.badge
      };
    }
  },
  methods: {
    /**
     * Toggle the list item's active class.
     *
     * @return void
     */
    toggle: function toggle() {
      this.isActive = !this.isActive;
    },

    /**
     * Activate the list item.
     *
     * @return void
     */
    activate: function activate() {
      this.isActive = true;
    },

    /**
     * Deactivate the list item.
     *
     * @return void
     */
    deactivate: function deactivate() {
      this.isActive = false;
    },

    /**
     * Activate the list item.
     *
     * @return void
     */
    disable: function disable() {
      this.isDisabled = false;
    },

    /**
     * Deactivate the list item.
     *
     * @return void
     */
    enable: function enable() {
      this.isDisabled = false;
    },

    /**
     * The callback function for the `click` event.
     *
     * @return void
     */
    onClick: function onClick(event) {
      this.$emit('click', event, this);
    }
  },
  watch: {
    isActive: function isActive(value, prevValue) {
      this.$emit('update:active', this.isActive);
      this.$emit('toggle', this.isActive, this);
      this.$emit(value ? 'activate' : 'deactivate', this);
    }
  },
  data: function data() {
    return {
      isActive: this.active,
      isDisabled: this.disabled
    };
  }
};

var ListGroup = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "list-group",
      class: _vm.classes
    }, [_vm._t("default", _vm._l(_vm.items, function (item, key) {
      return _c('list-group-item', _vm._b({
        key: key
      }, 'list-group-item', item, false));
    }))], 2);
  },
  staticRenderFns: [],
  components: {
    ListGroupItem: ListGroupItem
  },
  props: {
    /**
     * An array of list item objects.
     *
     * [{label: 'Some Label', badge: 1}]
     *
     * @property Object
     */
    items: Array,

    /**
     * Can the list items be activated.
     *
     * @property Boolean
     */
    activateable: {
      type: Boolean,
      default: false
    },

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
    classes: function classes() {
      return prefix({
        'flush': this.flush
      }, 'list-group');
    }
  },
  methods: {
    bindEventsToChildren: function bindEventsToChildren() {
      var _this = this;

      each(this.$children, function (child) {
        child.$off('click', _this.onClickChild);
        child.$on('click', _this.onClickChild);
        child.$off('activate', _this.onActivate);
        child.$on('activate', _this.onActivate);
        child.$off('deactivate', _this.onDeactivate);
        child.$on('deactivate', _this.onDeactivate);
      });
    },
    onClickChild: function onClickChild(event, child) {
      if (this.activateable) {
        child.toggle();
      }

      this.$emit('click:child', event, child);
    },
    onActivate: function onActivate(item) {
      if (!this.multiple && this.activeItem !== item) {
        if (this.activeItem) {
          this.activeItem.deactivate();
        }

        this.activeItem = item;
      }
    },
    onDeactivate: function onDeactivate(item) {
      if (!this.multiple && this.activeItem === item) {
        this.activeItem = null;
      }
    }
  },
  data: function data() {
    return {
      activeItem: null
    };
  },
  mounted: function mounted() {
    this.bindEventsToChildren();
  },
  updated: function updated() {
    this.bindEventsToChildren();
  }
};

var plugin$17 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      ListGroup: ListGroup
    });
  }
});

var Overlay = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "overlay",
      class: {
        'show': _vm.visible
      },
      style: {
        background: _vm.background
      },
      on: {
        "keyup": function keyup($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27, $event.key, "Escape")) {
            return null;
          }

          return _vm.hide($event);
        }
      }
    }, [_c('button', {
      staticClass: "btn btn-link overlay-close",
      attrs: {
        "type": "button"
      },
      on: {
        "click": _vm.onClickClose
      }
    }, [_c('i', {
      staticClass: "fa fa-times-circle"
    })]), _vm._v(" "), _c('div', {
      staticClass: "overlay-content container"
    }, [_vm._t("default")], 2)]);
  },
  staticRenderFns: [],
  name: 'overlay',
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
     * Is the overlay showing.
     *
     * @property Boolean
     */
    visible: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    visible: function visible(value) {
      if (value) {
        this.focus();
      }
    }
  },
  methods: {
    focus: function focus() {
      var el = this.$el.querySelector('.form-control, input, select, textarea');

      if (el) {
        el.focus();
      }
    },

    /**
     * Show the overlay
     *
     * @return void
     */
    show: function show() {
      this.$mount(document.body.appendChild(document.createElement('div')));
      this.$emit('show');
      this.$emit('update:visible', true);
    },

    /**
     * Hide the overlay
     *
     * @return void
     */
    hide: function hide() {
      this.$emit('hide');
      this.$emit('update:visible', false);
    },

    /**
     * The callback for the `click` event on the close button.
     *
     * @return void
     */
    onClickClose: function onClickClose() {
      this.$emit('click:close');
      this.hide();
    }
  },
  mounted: function mounted() {
    if (this.visible) {
      this.focus();
    }
  }
};

var plugin$18 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Overlay: Overlay
    });
  }
});

var Pagination = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('nav', {
      attrs: {
        "aria-label": "Page navigation example"
      }
    }, [_c('ul', {
      staticClass: "pagination",
      class: _vm.classes
    }, [_c('li', {
      staticClass: "page-item",
      class: {
        'disabled': _vm.currentPage === 1
      }
    }, [_c('a', {
      staticClass: "page-link",
      attrs: {
        "href": "#",
        "aria-label": "Previous"
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();

          _vm.prev($event);
        }
      }
    }, [_c('span', {
      attrs: {
        "aria-hidden": "true"
      }
    }, [_vm._v("«")])])]), _vm._v(" "), _vm._l(_vm.pages, function (item) {
      return _c('li', {
        staticClass: "page-item",
        class: {
          'active': item.page === _vm.currentPage,
          'disabled': !!item.divider
        },
        attrs: {
          "data-page": item.page
        }
      }, [_vm._t("default", [item.divider ? _c('a', {
        staticClass: "page-link"
      }, [_vm._v("…")]) : _c('a', {
        staticClass: "page-link",
        class: item.class,
        attrs: {
          "href": "#",
          "data-label": item.label
        },
        on: {
          "click": function click($event) {
            $event.preventDefault();

            _vm.paginate(item.page, $event);
          }
        }
      }, [item.label ? _c('span', {
        attrs: {
          "aria-hidden": "true"
        },
        domProps: {
          "innerHTML": _vm._s(item.label)
        }
      }) : _vm._e(), _vm._v(" "), item.page ? _c('span', {
        attrs: {
          "aria-hidden": "true"
        },
        domProps: {
          "innerHTML": _vm._s(item.page)
        }
      }) : _vm._e()])], {
        item: item
      })], 2);
    }), _vm._v(" "), _c('li', {
      staticClass: "page-item",
      class: {
        'disabled': _vm.currentPage >= _vm.totalPages
      }
    }, [_c('a', {
      staticClass: "page-link",
      attrs: {
        "href": "#",
        "aria-label": "Next"
      },
      on: {
        "click": function click($event) {
          $event.preventDefault();

          _vm.next($event);
        }
      }
    }, [_c('span', {
      attrs: {
        "aria-hidden": "true"
      }
    }, [_vm._v("»")])])])], 2)]);
  },
  staticRenderFns: [],
  name: 'pagination',
  props: {
    /**
     * The alignment of the pagination component.
     *
     * @prop String
     */
    align: {
      type: String,
      validate: function validate(value) {
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
    },
    onPaginate: Function
  },
  methods: {
    next: function next(event) {
      this.paginate(this.currentPage >= this.totalPages ? this.currentPage : this.currentPage + 1, event);
    },
    prev: function prev(event) {
      this.paginate(this.currentPage <= 1 ? this.currentPage : this.currentPage - 1, event);
    },
    paginate: function paginate(page, event) {
      if (event.currentTarget.parentNode.classList.contains('disabled')) {
        return;
      }

      this.setActivePage(page);

      if (this.onPaginate) {
        this.onPaginate(page, event);
      }

      this.$emit('paginate', page, event);
    },
    setActivePage: function setActivePage(page) {
      if (this.currentPage !== page) {
        this.currentPage = page;
      }
    },
    generate: function generate() {
      var pages = [];
      var showPages = this.showPages % 2 ? this.showPages + 1 : this.showPages;
      var startPage = this.currentPage >= showPages ? this.currentPage - showPages / 2 : 1;
      var startOffset = showPages + startPage;
      var endPage = this.totalPages < startOffset ? this.totalPages : startOffset;
      var diff = startPage - endPage + showPages;
      startPage -= startPage - diff > 0 ? diff : 0;

      if (startPage > 1) {
        pages.push({
          page: 1
        });
      }

      if (startPage > 2) {
        pages.push({
          divider: true
        });
      }

      for (var i = startPage; i < endPage; i++) {
        pages.push({
          page: i
        });
      }

      if (endPage <= this.totalPages) {
        if (this.totalPages - 1 > endPage) {
          pages.push({
            divider: true
          });
        }

        pages.push({
          page: this.totalPages
        });
      }

      return pages;
    }
  },
  computed: {
    pages: function pages() {
      return this.generate();
    },
    classes: function classes() {
      var classes = {};
      classes['justify-content-' + this.align] = true;
      return classes;
    }
  },
  data: function data() {
    return {
      currentPage: this.page
    };
  }
};

var plugin$19 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      Pagination: Pagination
    });
  }
});

var plugin$20 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      ProgressBar: ProgressBar
    });
  }
});

var plugin$21 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      RadioField: RadioField
    });
  }
});

//import BaseField from './BaseField';
var CUSTOM_SELECT_PREFIX = 'custom-select-';
var SelectField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('form-group', [_vm._t("label", [_vm.label ? _c('form-label', {
      attrs: {
        "for": _vm.id
      },
      domProps: {
        "innerHTML": _vm._s(_vm.label)
      }
    }) : _vm._e()]), _vm._v(" "), _vm._t("control", [_c('select', {
      class: _vm.mergeClasses(_vm.controlClasses, _vm.colorableClasses),
      attrs: {
        "id": _vm.id,
        "required": _vm.required,
        "disabled": _vm.disabled || _vm.readonly,
        "readonly": _vm.readonly,
        "pattern": _vm.pattern
      },
      domProps: {
        "value": _vm.value
      },
      on: {
        "input": function input($event) {
          _vm.updated($event.target.value);
        }
      }
    }, [_vm._t("default")], 2)]), _vm._v(" "), _vm._t("help", [_vm.helpText ? _c('help-text', {
      domProps: {
        "innerHTML": _vm._s(_vm.helpText)
      }
    }) : _vm._e()]), _vm._v(" "), _vm._t("feedback", [_vm.validFeedback ? _c('form-feedback', {
      attrs: {
        "valid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.validFeedback)
      }
    }) : _vm._e(), _vm._v(" "), _vm.invalidFeedback ? _c('form-feedback', {
      attrs: {
        "invalid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.invalidFeedback)
      }
    }) : _vm._e()])], 2);
  },
  staticRenderFns: [],
  name: 'select-field',
  extends: FormControl,
  mixins: [FormControl, Colorable],
  props: {
    /**
     * Add `custom-select` to the form control if true.
     *
     * @property String
     */
    custom: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    controlClass: function controlClass() {
      var controlClass = this.custom ? 'custom-select' : this.defaultControlClass;
      return this.plaintext ? "".concat(controlClass, "-plaintext") : controlClass;
    },
    customSelectClasses: function customSelectClasses() {
      return [CUSTOM_SELECT_PREFIX.replace(/\-$/, '') + (this.plaintext ? '-plaintext' : ''), this.customSelectSizeClass, this.spacing || ''].join(' ');
    }
  }
};

var plugin$22 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      SelectField: SelectField
    });
  }
});

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

    if (!isObject_1(this.$originalResponse = response)) {
      throw new Error('The transformer must be instantiated with a response object.');
    }

    if (!isArray_1(this.$required = this.required()) || !this.$required.length) {
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
     * Define an array of required propertie with at least one value.
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

      if (!isObject_1(this.$transformedResponse)) {
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

    return _possibleConstructorReturn(this, (TableViewTransformer.__proto__ || Object.getPrototypeOf(TableViewTransformer)).apply(this, arguments));
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
      if (!isArray_1(this.data())) {
        throw new Error('The data property must be an array.');
      }
    }
  }]);

  return TableViewTransformer;
}(Transformer);

var TableView = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "table-view"
    }, [_c('div', {
      staticClass: "d-flex justify-content-between align-items-center"
    }, [_vm._t("header", [_c('div', {
      staticClass: "table-view-header"
    }, [_vm._t("heading", [_vm.heading ? _c('h3', {
      domProps: {
        "innerHTML": _vm._s(_vm.heading)
      }
    }) : _vm._e()]), _vm._v(" "), _vm._t("description", [_vm.description ? _c('p', {
      domProps: {
        "innerHTML": _vm._s(_vm.description)
      }
    }) : _vm._e()])], 2)]), _vm._v(" "), _vm._t("buttons", [_vm.buttons.length ? _c('div', {
      staticClass: "buttons-wrapper my-3"
    }, [_c('span', _vm._l(_vm.buttons, function (button, key) {
      return _c('a', {
        class: button.className || 'btn btn-primary',
        attrs: {
          "href": button.href || '#'
        },
        on: {
          "click": function click($event) {
            _vm.proxy(button.onClick, $event);
          }
        }
      }, [button.icon ? _c('i', {
        class: button.icon
      }) : _vm._e(), _vm._v(" "), _c('span', {
        domProps: {
          "innerHTML": _vm._s(button.label)
        }
      })]);
    }))]) : _vm._e()])], 2), _vm._v(" "), _c('table', {
      staticClass: "table",
      class: {
        'table-hover': !_vm.loading
      }
    }, [_vm._t("thead", [_c('thead', [_c('tr', _vm._l(_vm.tableColumns, function (column) {
      return _c('th', {
        attrs: {
          "scope": "col",
          "width": column.width
        }
      }, [column.id ? _c('div', [_c('a', {
        staticClass: "sort",
        attrs: {
          "href": "#",
          "data-id": column.id
        },
        domProps: {
          "innerHTML": _vm._s(column.name || column.id)
        },
        on: {
          "click": function click($event) {
            $event.preventDefault();

            _vm.orderBy(column.id);
          }
        }
      }), _vm._v(" "), _vm.request.params.order === column.id && _vm.request.params.sort === 'asc' ? _c('i', {
        staticClass: "sort-icon fa fa-sort-asc"
      }) : _vm._e(), _vm._v(" "), _vm.request.params.order === column.id && _vm.request.params.sort === 'desc' ? _c('i', {
        staticClass: "sort-icon fa fa-sort-desc"
      }) : _vm._e()]) : _c('div', {
        domProps: {
          "innerHTML": _vm._s(column.name)
        }
      })]);
    }))])]), _vm._v(" "), _vm._t("tbody", [_c('tbody', [_vm.loading ? _c('tr', [_c('td', {
      staticClass: "position-relative",
      style: {
        'height': _vm.height(_vm.minHeight)
      },
      attrs: {
        "colspan": _vm.tableColumns.length
      }
    }, [_c('activity-indicator', {
      attrs: {
        "center": true
      }
    })], 1)]) : _vm._t("default", _vm._l(_vm.data, function (row, i) {
      return _c('tr', _vm._l(_vm.tableColumns, function (column) {
        return _c('td', {
          domProps: {
            "innerHTML": _vm._s(row[column.id] || row[column.name])
          }
        });
      }));
    }), {
      data: _vm.data,
      columns: _vm.tableColumns
    })], 2)]), _vm._v(" "), _vm._t("tfoot", [_c('tfoot', [_c('td', {
      staticClass: "table-view-footer",
      attrs: {
        "colspan": _vm.tableColumns.length
      }
    }, [_vm._t("pagination", [_vm.paginate && _vm.response ? _c('pagination', {
      attrs: {
        "align": "center",
        "page": _vm.response.current_page,
        "total-pages": _vm.response.last_page,
        "on-paginate": _vm.onPaginate
      }
    }) : _vm._e()])], 2)])])], 2)]);
  },
  staticRenderFns: [],
  name: 'table-view',
  mixins: [Proxy],
  components: {
    Pagination: Pagination,
    ActivityIndicator: ActivityIndicator
  },
  props: {
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
      validate: function validate(value) {
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
      default: function _default() {
        return [];
      }
    },
    // (array) An array of table column
    // [{id: 'database_id', name: 'Database id', width: '20%'}]
    columns: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    // (string) The table heading
    heading: String,
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
      validate: function validate(value) {
        return value instanceof TableViewTransformer;
      }
    }
  },
  computed: {
    tableColumns: function tableColumns() {
      var columns = this.columns;

      if (!columns || !columns.length) {
        columns = keys_1(this.data[0]);
      }

      return columns.map(function (column) {
        return isObject_1(column) ? column : {
          name: column
        };
      });
    }
  },
  methods: {
    orderBy: function orderBy(order) {
      var defaultSort = 'desc';
      var currentSort = this.getRequestParam('sort');
      var currentOrder = this.getRequestParam('order');
      this.addRequestParam('order', order);
      this.addRequestParam('sort', currentOrder !== order || !currentSort ? defaultSort : currentSort === defaultSort ? 'asc' : null);
      this.fetch();
    },
    getRequestHeader: function getRequestHeader(key, value) {
      return this.request.headers[key] || value;
    },
    addRequestHeader: function addRequestHeader(key, value) {
      if (!this.request.headers) {
        this.request.headers = {};
      }

      this.request.headers[key] = value;
    },
    getRequestParam: function getRequestParam(key, value) {
      return this.request.params[key] || value;
    },
    addRequestParam: function addRequestParam(key, value) {
      if (!this.request.params) {
        this.request.params = {};
      }

      this.request.params[key] = value;
    },
    fetch: function fetch() {
      var _this = this;

      var request = new Request(this.url, this.request);
      this.loading = true;
      return request.get().then(function (response) {
        var transformer = _this.transformer || new TableViewTransformer(response);
        _this.response = transformer.response();
        _this.data = transformer.data();
        _this.loading = false;
      }, function (errors) {
        _this.loading = false;
      });
    },
    height: function height(min) {
      var elements = [// this.$el.querySelector('thead'),
      this.$el.querySelector('tbody')];
      var height = 0;

      each(elements, function (el) {
        height += el.getBoundingClientRect().height;
      });

      return Math.max(min, height) + 'px';
    },
    onPaginate: function onPaginate(page, event) {
      if (!this.request.params) {
        this.request.params = {};
      }

      this.request.params.page = page;
      this.fetch();
    }
  },
  data: function data() {
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
  mounted: function mounted() {
    this.fetch();
  },

  /*
  data() {
      return extend({
          buttons: [],
           columns: [],
           header: false,
           description: false,
           // (bool) Should show the pagination for this table
          paginate: true,
           // (bool) Is the table currently loading data
          loading: false,
           // (object) An object with key/value pairs for components used in the template
          components: {
              // (string) The name of the component used for the table header
              header: 'table-view-header',
               // (string) The name of the component used for the table row
              row: 'table-view-row',
               // (string) The name of the component used for the table row
              footer: 'table-view-footer'
          },
           // (int) The starting page
          // page: 1,
           // (string) The order of the date being returned
          // order: null,
           // (string) Either asc or desc sorting order
          // sort: null,
           // (int) The numbers of rows per page
          // limit: 20,
           // (bool) Fetch the data when table is shown
          // fetchOnRender: true,
           // (array) An array of headers appended to the request
          // requestHeaders: [],
           // (array) The default options used to generate the query string
          // defaultRequestDataOptions: [
          //    'page',
          //    'limit',
          //    'order',
          //    'sort'
          // ],
           // (object) An option to pass an object with request data
          // requestData: {},
           // (array) Additional options used to generate the query string
          // requestDataOptions: [],
           // (object) The body view options object
          // bodyViewOptions: false,
           // (object) The pagination view class
          // footerView: 'pagination',
           // (object) The pagination view options object
          // footerViewOptions: false,
           // (string) The table footer class name
          // footerClassName: 'table-header',
           // (string) The table header
          // header: false,
           // (string) The table header tag name
          // headerTagName: 'h3',
           // (string) The table header class name
          // headerClassName: 'table-header',
           // (object) The header view class
          // headerView: false,
           // (object) The header view options object
          // headerViewOptions: false,
           // (string) The table description
          // description: false,
           // (string) The table description tag
          // descriptionTag: 'p',
           // (string) The table description tag
          // descriptionClassName: 'description row col-sm-6',
           // (string) The table class name
          // tableClassName: 'table',
           // (string) The loading class name
          // loadingClassName: 'loading',
           // (string) The name of the property in the model storing the columns
          // childViewColumnsProperty: 'columns',
           // (object) The activity indicator options
          // indicatorOptions: {
          //     indicator: 'small'
          // },
           // (string) The message to display if there are no table rows
          // emptyMessage: 'No rows found',
           // (string) The name of the class appended to the buttons
          // buttonClassName: 'btn btn-default',
      }, this.$attrs);
  },
  */
  beforeDestroy: function beforeDestroy() {
    this.$off();
  }
};

var plugin$23 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      TableView: TableView
    });
  }
});

var TextareaField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('form-group', [_vm._t("label", [_vm.label ? _c('form-label', {
      attrs: {
        "for": _vm.id
      },
      domProps: {
        "innerHTML": _vm._s(_vm.label)
      }
    }) : _vm._e()]), _vm._v(" "), _vm._t("control", [_c('textarea', {
      directives: [{
        name: "bind-events",
        rawName: "v-bind-events",
        value: _vm.bindEvents,
        expression: "bindEvents"
      }],
      class: _vm.mergeClasses(_vm.controlClasses, _vm.colorableClasses),
      attrs: {
        "id": _vm.id,
        "placeholder": _vm.placeholder,
        "required": _vm.required,
        "disabled": _vm.disabled || _vm.readonly,
        "readonly": _vm.readonly,
        "pattern": _vm.pattern
      },
      domProps: {
        "value": _vm.value
      },
      on: {
        "input": function input($event) {
          _vm.updated($event.target.value);
        }
      }
    })]), _vm._v(" "), _vm._t("help", [_vm.helpText ? _c('help-text', {
      domProps: {
        "innerHTML": _vm._s(_vm.helpText)
      }
    }) : _vm._e()]), _vm._v(" "), _vm._t("feedback", [_vm.validFeedback ? _c('form-feedback', {
      attrs: {
        "valid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.validFeedback)
      }
    }) : _vm._e(), _vm._v(" "), _vm.invalidFeedback ? _c('form-feedback', {
      attrs: {
        "invalid": ""
      },
      domProps: {
        "innerHTML": _vm._s(_vm.invalidFeedback)
      }
    }) : _vm._e()])], 2);
  },
  staticRenderFns: [],
  name: 'textarea-field',
  mixins: [Colorable, FormControl],
  props: {
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

var plugin$24 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      TextareaField: TextareaField
    });
  }
});

var nativeMax$4 = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger_1(fromIndex);
  if (index < 0) {
    index = nativeMax$4(length + index, 0);
  }
  return _baseFindIndex(array, _baseIteratee(predicate, 3), index);
}

var findIndex_1 = findIndex;

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

var last_1 = last;

function parent(object, path) {
  return path.length < 2 ? object : _baseGet(object, _baseSlice(path, 0, -1));
}

var _parent = parent;

function baseUnset(object, path) {
  path = _castPath(path, object);
  object = _parent(object, path);
  return object == null || delete object[_toKey(last_1(path))];
}

var _baseUnset = baseUnset;

var arrayProto$1 = Array.prototype;

/** Built-in value references. */
var splice$1 = arrayProto$1.splice;

/**
 * The base implementation of `_.pullAt` without support for individual
 * indexes or capturing the removed elements.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {number[]} indexes The indexes of elements to remove.
 * @returns {Array} Returns `array`.
 */
function basePullAt(array, indexes) {
  var length = array ? indexes.length : 0,
      lastIndex = length - 1;

  while (length--) {
    var index = indexes[length];
    if (length == lastIndex || index !== previous) {
      var previous = index;
      if (_isIndex(index)) {
        splice$1.call(array, index, 1);
      } else {
        _baseUnset(array, index);
      }
    }
  }
  return array;
}

var _basePullAt = basePullAt;

function remove(array, predicate) {
  var result = [];
  if (!(array && array.length)) {
    return result;
  }
  var index = -1,
      indexes = [],
      length = array.length;

  predicate = _baseIteratee(predicate, 3);
  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result.push(value);
      indexes.push(index);
    }
  }
  _basePullAt(array, indexes);
  return result;
}

var remove_1 = remove;

var UploadField = {
  render: function render() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      staticClass: "upload-field",
      class: {
        'form-group': _vm.group,
        'enable-dropzone': _vm.dropzone
      },
      on: {
        "dragenter": function dragenter($event) {
          $event.preventDefault();
          return _vm.onDragEnter($event);
        },
        "dragover": function dragover($event) {
          $event.preventDefault();
          return _vm.onDragOver($event);
        },
        "dragleave": function dragleave($event) {
          $event.preventDefault();
          return _vm.onDragLeave($event);
        }
      }
    }, [_vm.multiple && (!_vm.maxUploads || _vm.maxUploads > _vm.data.length) || !_vm.multiple && !_vm.data ? _c('file-field', {
      attrs: {
        "name": _vm.name,
        "label": _vm.label,
        "help-text": _vm.helpText,
        "multiple": _vm.multiple,
        "width": _vm.width,
        "height": _vm.height,
        "errors": _vm.errors
      },
      on: {
        "change": function change($event) {
          _vm.multiple ? _vm.addFiles($event.target.files) : _vm.addFile($event.target.files[0]);
        }
      }
    }) : _vm._e(), _vm._v(" "), _vm.multiple ? _c('div', {
      staticClass: "upload-field-preview mt-4"
    }, _vm._l(_vm.data, function (file, key) {
      return _c('file-preview', {
        key: [file.name, file.lastModified, file.size].join(''),
        attrs: {
          "file": file
        },
        on: {
          "close": function close($event) {
            _vm.removeFile(file);
          }
        }
      });
    })) : !_vm.multiple && _vm.data ? _c('div', {
      staticClass: "upload-field-preview mt-4"
    }, [_c('file-preview', {
      attrs: {
        "file": _vm.data
      },
      on: {
        "close": function close($event) {
          _vm.removeFile(_vm.data);
        }
      }
    })], 1) : _vm._e(), _vm._v(" "), _vm.showDropElement ? _c('div', {
      staticClass: "upload-field-dropzone",
      style: {
        'min-height': _vm.dropzoneMinHeight
      },
      on: {
        "drop": function drop($event) {
          $event.preventDefault();
          return _vm.onDrop($event);
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-cloud-upload"
    }), _vm._v(" "), _c('div', [_vm._v("Drag and drop files to upload")])]) : _vm._e()], 1);
  },
  staticRenderFns: [],
  name: 'upload-field',
  mixins: [FormControl],
  components: {
    FileField: FileField,
    FilePreview: FilePreview
  },
  model: {
    prop: 'data',
    event: 'change'
  },
  props: {
    /**
     * Is the user dragging a file over the dropzone
     *
     * @property String
     */
    dragging: {
      type: [String, Boolean],
      default: function _default() {
        return undefined;
      }
    },

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
     * The width attribute for the control element
     *
     * @property String
     */
    width: [Number, String],

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
     * Can user drag/drop files into browser to upload them.
     *
     * @property String
     */
    dropzoneMinHeight: [Number, String],

    /**
     * Can user upload multiple files
     *
     * @property String
     */
    multiple: {
      type: Boolean,
      default: false
    },

    /**
     * The data attribute
     *
     * @property File|FileList|Array
     */
    data: {
      type: [File, FileList, Array],
      default: function _default() {
        return !this.multiple ? null : [];
      }
    }
  },
  methods: {
    removeFile: function removeFile(data) {
      if (this.multiple) {
        var files = this.data.slice(0);

        remove_1(files, {
          name: data.name,
          size: data.size,
          lastModified: data.lastModified
        });

        this.$emit('change', files);
      } else {
        this.$emit('change', null);
      }
    },
    addFile: function addFile(file, subject) {
      var data = {
        name: file.name,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate,
        size: file.size,
        type: file.type
      };

      if (this.multiple) {
        var files = subject || this.data.slice(0);

        if (!this.maxUploads || this.maxUploads > files.length) {
          if (findIndex_1(files, data) === -1) {
            files.push(file);
          }

          this.$emit('change', files);
        }
      } else {
        this.$emit('change', file);
      }
    },
    addFiles: function addFiles(files) {
      var _this = this;

      var subject = this.data.slice(0);

      each(files, function (file) {
        _this.addFile(file, subject);
      });

      event.target.value = null;
    },

    /**
     * The `dragover` event callback.
     *
     * @property String
     */
    onDragOver: function onDragOver(event) {
      this.isDraggingInside = true;
      this.$emit('update:dragging', true);
      this.$emit('drag:over', event);
    },

    /**
     * The `dragover` event callback.
     *
     * @property String
     */
    onDragEnter: function onDragEnter(event) {
      this.isDraggingInside = true;
      this.$emit('update:dragging', true);
      this.$emit('drag:enter', event);
    },

    /**
     * The `dragleave` event callback.
     *
     * @property String
     */
    onDragLeave: function onDragLeave(event) {
      this.isDraggingInside = false;
      this.$emit('update:dragging', false);
      this.$emit('drag:leave', event);
    },

    /**
     * The `drop` event callback.
     *
     * @property String
     */
    onDrop: function onDrop(event) {
      this.isDraggingInside = false;
      this.addFiles(event.dataTransfer.files);
      this.$emit('update:dragging', false);
      this.$emit('drop', event);
    }
  },
  computed: {
    showDropElement: function showDropElement() {
      return !isUndefined_1(this.dragging) ? this.dragging : this.isDraggingInside;
    }
  },
  data: function data() {
    return {
      isDraggingInside: false
    };
  }
};

var plugin$25 = VueInstaller.use({
  install: function install(Vue, options) {
    VueInstaller.components({
      UploadField: UploadField
    });
  }
});



var components$1 = Object.freeze({
	ActivityButton: ActivityButton,
	ActivityIndicator: ActivityIndicator,
	Badge: Badge,
	BaseForm: BaseForm,
	ButtonDropdown: ButtonDropdown,
	CheckboxField: CheckboxField,
	Container: Container,
	DropdownMenu: DropdownMenu,
	DropdownMenuItem: DropdownMenuItem,
	DropdownMenuHeader: DropdownMenuHeader,
	DropdownMenuDivider: DropdownMenuDivider,
	FileField: FileField,
	FilePreview: FilePreview,
	FormFeedback: FormFeedback,
	FormGroup: FormGroup,
	FormLabel: FormLabel,
	HelpText: HelpText,
	InputField: InputField,
	LightSwitchField: LightSwitchField,
	ListGroup: ListGroup,
	ListGroupItem: ListGroupItem,
	Overlay: Overlay,
	Pagination: Pagination,
	ProgressBar: ProgressBar,
	RadioField: RadioField,
	SelectField: SelectField,
	TableView: TableView,
	TextareaField: TextareaField,
	UploadField: UploadField
});

var ResponseTransformer = function ResponseTransformer(response) {
  _classCallCheck(this, ResponseTransformer);

  this.$response = response;
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
    sizeableClass: function sizeableClass() {
      return prefix(this.size, this.$options.name);
    }
  }
};

var main = VueInstaller.use({
  install: function install(Vue) {
    VueInstaller.plugins(Vue, plugins);
    VueInstaller.components(Vue, components$1); //VueInstaller.directives(Vue, directives);
  }
});

export default main;
export { Model, Request, ResponseTransformer, TableViewTransformer, Transformer, Colorable, FormControl, Proxy, Screenreaders, Sizeable, Variant, MergeClasses, ActivityButton, ActivityIndicator, Badge, BaseForm, ButtonDropdown, CheckboxField, Container, DropdownMenu, DropdownMenuItem, DropdownMenuHeader, DropdownMenuDivider, FileField, FilePreview, FormFeedback, FormGroup, FormLabel, HelpText, InputField, LightSwitchField, ListGroup, ListGroupItem, Overlay, Pagination, ProgressBar, RadioField, SelectField, TableView, TextareaField, UploadField };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnVlLXRvb2xib3guZXMuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNPYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFJhd1RhZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX29iamVjdFRvU3RyaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldFRhZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNGdW5jdGlvbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcmVKc0RhdGEuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc01hc2tlZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RvU291cmNlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VmFsdWUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXROYXRpdmUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19kZWZpbmVQcm9wZXJ0eS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VBc3NpZ25WYWx1ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZXEuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25WYWx1ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvcHlPYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lkZW50aXR5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXBwbHkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vdmVyUmVzdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvY29uc3RhbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlU2V0VG9TdHJpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zaG9ydE91dC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldFRvU3RyaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVJlc3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzTGVuZ3RoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5TGlrZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzSW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0l0ZXJhdGVlQ2FsbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUFzc2lnbmVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNBcmd1bWVudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdHViRmFsc2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQnVmZmVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzVHlwZWRBcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbmFyeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX25vZGVVdGlsLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1R5cGVkQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUxpa2VLZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19uYXRpdmVLZXlzSW4uanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlS2V5c0luLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzSW4uanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2Fzc2lnbkluLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9leHRlbmQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVDbGVhci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUdldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUhhcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX0xpc3RDYWNoZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrQ2xlYXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0RlbGV0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RhY2tIYXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXAuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoQ2xlYXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoRGVsZXRlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hIYXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoU2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fSGFzaC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlQ2xlYXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0tleWFibGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVEZWxldGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUdldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwQ2FjaGVTZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19NYXBDYWNoZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrU2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU3RhY2suanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hc3NpZ25NZXJnZVZhbHVlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQmFzZUZvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGb3IuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZUJ1ZmZlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1VpbnQ4QXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jbG9uZUFycmF5QnVmZmVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2xvbmVUeXBlZEFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29weUFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUNyZWF0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX292ZXJBcmcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRQcm90b3R5cGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pbml0Q2xvbmVPYmplY3QuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXlMaWtlT2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1BsYWluT2JqZWN0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2FmZUdldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9QbGFpbk9iamVjdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNZXJnZURlZXAuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlTWVyZ2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL21lcmdlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlFYWNoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUZvck93bi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUJhc2VFYWNoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUVhY2guanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYXN0RnVuY3Rpb24uanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2ZvckVhY2guanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2VhY2guanMiLCIuLi9zcmMvUGx1Z2lucy9NZXJnZUNsYXNzZXMvTWVyZ2VDbGFzc2VzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlSZWR1Y2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlUHJvcGVydHlPZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2RlYnVyckxldHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TWFwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc1N5bWJvbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9TdHJpbmcuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2RlYnVyci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FzY2lpV29yZHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNVbmljb2RlV29yZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3VuaWNvZGVXb3Jkcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvd29yZHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVDb21wb3VuZGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9rZWJhYkNhc2UuanMiLCIuLi9zcmMvQ29tcG9uZW50cy9BY3Rpdml0eUluZGljYXRvci9UeXBlcy9CYXNlVHlwZS52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9BY3Rpdml0eUluZGljYXRvci9UeXBlcy9Eb3RzLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0FjdGl2aXR5SW5kaWNhdG9yL1R5cGVzL1NwaW5uZXIudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvQWN0aXZpdHlJbmRpY2F0b3IvQWN0aXZpdHlJbmRpY2F0b3IudnVlIiwiLi4vc3JjL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlci5qcyIsIi4uL3NyYy9Db21wb25lbnRzL0FjdGl2aXR5SW5kaWNhdG9yL2luZGV4LmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvQWN0aXZpdHlCdXR0b24vQWN0aXZpdHlCdXR0b24udnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvQWN0aXZpdHlCdXR0b24vaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRDYWNoZUFkZC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldENhY2hlSGFzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU2V0Q2FjaGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheVNvbWUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYWNoZUhhcy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWFwVG9BcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldFRvQXJyYXkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19lcXVhbEJ5VGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlQdXNoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldEFsbEtleXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheUZpbHRlci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvc3R1YkFycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0U3ltYm9scy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldEFsbEtleXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19lcXVhbE9iamVjdHMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19EYXRhVmlldy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1Byb21pc2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19TZXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19XZWFrTWFwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VGFnLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWxEZWVwLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzRXF1YWwuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNNYXRjaC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2lzU3RyaWN0Q29tcGFyYWJsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE1hdGNoRGF0YS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZU1hdGNoZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0tleS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbWVtb2l6ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21lbW9pemVDYXBwZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpbmdUb1BhdGguanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYXN0UGF0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RvS2V5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUdldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZ2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUhhc0luLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzUGF0aC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaGFzSW4uanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlTWF0Y2hlc1Byb3BlcnR5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVByb3BlcnR5RGVlcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvcHJvcGVydHkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXRlcmF0ZWUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL21hcEtleXMuanMiLCIuLi9zcmMvSGVscGVycy9QcmVmaXgvUHJlZml4LmpzIiwiLi4vc3JjL01peGlucy9WYXJpYW50L1ZhcmlhbnQuanMiLCIuLi9zcmMvQ29tcG9uZW50cy9CYWRnZS9CYWRnZS52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9CYWRnZS9pbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNVbmRlZmluZWQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlUmVkdWNlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9yZWR1Y2UuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlU2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVBpY2tCeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFN5bWJvbHNJbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldEFsbEtleXNJbi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvcGlja0J5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc051bGwuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRmlsdGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9maWx0ZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3RyaW5nLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNjaWlTaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzVW5pY29kZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3VuaWNvZGVTaXplLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaW5nU2l6ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvc2l6ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNYXAuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL21hcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VTbGljZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Nhc3RTbGljZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FzY2lpVG9BcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3VuaWNvZGVUb0FycmF5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc3RyaW5nVG9BcnJheS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUNhc2VGaXJzdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdXBwZXJGaXJzdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvY2FwaXRhbGl6ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvY2FtZWxDYXNlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWV0YU1hcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VTZXREYXRhLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQ3Rvci5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUJpbmQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb21wb3NlQXJncy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NvbXBvc2VBcmdzUmlnaHQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jb3VudEhvbGRlcnMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlTG9kYXNoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTGF6eVdyYXBwZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL25vb3AuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXREYXRhLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcmVhbE5hbWVzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0RnVuY05hbWUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19Mb2Rhc2hXcmFwcGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fd3JhcHBlckNsb25lLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC93cmFwcGVyTG9kYXNoLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNMYXppYWJsZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldERhdGEuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRXcmFwRGV0YWlscy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2luc2VydFdyYXBEZXRhaWxzLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUZpbmRJbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc05hTi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0cmljdEluZGV4T2YuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSW5kZXhPZi5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5SW5jbHVkZXMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL191cGRhdGVXcmFwRGV0YWlscy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3NldFdyYXBUb1N0cmluZy5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZVJlY3VycnkuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRIb2xkZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yZW9yZGVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcmVwbGFjZUhvbGRlcnMuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVIeWJyaWQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVDdXJyeS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZVBhcnRpYWwuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tZXJnZURhdGEuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvTnVtYmVyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b0Zpbml0ZS5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9JbnRlZ2VyLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlV3JhcC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvYmluZC5qcyIsIi4uL3NyYy9IdHRwL1JlcXVlc3QvUmVxdWVzdC5qcyIsIi4uL3NyYy9IdHRwL01vZGVsL01vZGVsLmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvQmFzZUZvcm0vQmFzZUZvcm0udnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvQmFzZUZvcm0vaW5kZXguanMiLCIuLi9zcmMvSGVscGVycy9VdWlkL1V1aWQuanMiLCIuLi9zcmMvTWl4aW5zL1Byb3h5L1Byb3h5LmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvRHJvcGRvd25NZW51L0Ryb3Bkb3duTWVudUl0ZW0udnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvRHJvcGRvd25NZW51L0Ryb3Bkb3duTWVudUhlYWRlci52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9Ecm9wZG93bk1lbnUvRHJvcGRvd25NZW51RGl2aWRlci52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9Ecm9wZG93bk1lbnUvRHJvcGRvd25NZW51LnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0Ryb3Bkb3duTWVudS9pbmRleC5qcyIsIi4uL3NyYy9Db21wb25lbnRzL0J1dHRvbkRyb3Bkb3duL0J1dHRvbkRyb3Bkb3duLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0J1dHRvbkRyb3Bkb3duL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9uZWdhdGUuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL29taXRCeS5qcyIsIi4uL3NyYy9NaXhpbnMvQ29sb3JhYmxlL0NvbG9yYWJsZS5qcyIsIi4uL3NyYy9NaXhpbnMvRm9ybUNvbnRyb2wvRm9ybUNvbnRyb2wuanMiLCIuLi9zcmMvQ29tcG9uZW50cy9SYWRpb0ZpZWxkL1JhZGlvRmllbGQudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvQ2hlY2tib3hGaWVsZC9DaGVja2JveEZpZWxkLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0NoZWNrYm94RmllbGQvaW5kZXguanMiLCIuLi9zcmMvQ29tcG9uZW50cy9Db250YWluZXIvQ29udGFpbmVyLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0NvbnRhaW5lci9pbmRleC5qcyIsIi4uL3NyYy9Db21wb25lbnRzL0lucHV0RmllbGQvSW5wdXRGaWVsZC52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9GaWxlRmllbGQvRmlsZUZpZWxkLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0ZpbGVGaWVsZC9pbmRleC5qcyIsIi4uL3NyYy9IZWxwZXJzL1JlYWRGaWxlL1JlYWRGaWxlLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc051bWJlci5qcyIsIi4uL3NyYy9Db21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0ZpbGVQcmV2aWV3L0ZpbGVQcmV2aWV3LnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0ZpbGVQcmV2aWV3L2luZGV4LmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvRm9ybUZlZWRiYWNrL0Zvcm1GZWVkYmFjay52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9Gb3JtRmVlZGJhY2svaW5kZXguanMiLCIuLi9zcmMvQ29tcG9uZW50cy9Gb3JtR3JvdXAvRm9ybUdyb3VwLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0Zvcm1Hcm91cC9pbmRleC5qcyIsIi4uL3NyYy9NaXhpbnMvU2NyZWVucmVhZGVycy9TY3JlZW5yZWFkZXJzLmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvRm9ybUxhYmVsL0Zvcm1MYWJlbC52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9Gb3JtTGFiZWwvaW5kZXguanMiLCIuLi9zcmMvQ29tcG9uZW50cy9IZWxwVGV4dC9IZWxwVGV4dC52dWUiLCIuLi9zcmMvQ29tcG9uZW50cy9IZWxwVGV4dC9pbmRleC5qcyIsIi4uL3NyYy9Db21wb25lbnRzL0lucHV0RmllbGQvaW5kZXguanMiLCIuLi9zcmMvQ29tcG9uZW50cy9MaWdodFN3aXRjaEZpZWxkL0xpZ2h0U3dpdGNoRmllbGQudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvTGlnaHRTd2l0Y2hGaWVsZC9pbmRleC5qcyIsIi4uL3NyYy9Db21wb25lbnRzL0xpc3RHcm91cC9MaXN0R3JvdXBJdGVtLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL0xpc3RHcm91cC9MaXN0R3JvdXAudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvTGlzdEdyb3VwL2luZGV4LmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvT3ZlcmxheS9PdmVybGF5LnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL092ZXJsYXkvaW5kZXguanMiLCIuLi9zcmMvQ29tcG9uZW50cy9QYWdpbmF0aW9uL1BhZ2luYXRpb24udnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvUGFnaW5hdGlvbi9pbmRleC5qcyIsIi4uL3NyYy9Db21wb25lbnRzL1Byb2dyZXNzQmFyL2luZGV4LmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvUmFkaW9GaWVsZC9pbmRleC5qcyIsIi4uL3NyYy9Db21wb25lbnRzL1NlbGVjdEZpZWxkL1NlbGVjdEZpZWxkLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL1NlbGVjdEZpZWxkL2luZGV4LmpzIiwiLi4vc3JjL0h0dHAvVHJhbnNmb3JtZXIvVHJhbnNmb3JtZXIuanMiLCIuLi9zcmMvSHR0cC9UYWJsZVZpZXdUcmFuc2Zvcm1lci9UYWJsZVZpZXdUcmFuc2Zvcm1lci5qcyIsIi4uL3NyYy9Db21wb25lbnRzL1RhYmxlVmlldy9UYWJsZVZpZXcudnVlIiwiLi4vc3JjL0NvbXBvbmVudHMvVGFibGVWaWV3L2luZGV4LmpzIiwiLi4vc3JjL0NvbXBvbmVudHMvVGV4dGFyZWFGaWVsZC9UZXh0YXJlYUZpZWxkLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL1RleHRhcmVhRmllbGQvaW5kZXguanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL2ZpbmRJbmRleC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbGFzdC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3BhcmVudC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VVbnNldC5qcyIsIi4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VQdWxsQXQuanMiLCIuLi9ub2RlX21vZHVsZXMvbG9kYXNoL3JlbW92ZS5qcyIsIi4uL3NyYy9Db21wb25lbnRzL1VwbG9hZEZpZWxkL1VwbG9hZEZpZWxkLnZ1ZSIsIi4uL3NyYy9Db21wb25lbnRzL1VwbG9hZEZpZWxkL2luZGV4LmpzIiwiLi4vc3JjL0h0dHAvUmVzcG9uc2VUcmFuc2Zvcm1lci9SZXNwb25zZVRyYW5zZm9ybWVyLmpzIiwiLi4vc3JjL01peGlucy9TaXplYWJsZS9TaXplYWJsZS5qcyIsIi4uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcbiIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbm1vZHVsZS5leHBvcnRzID0gZnJlZUdsb2JhbDtcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvYmplY3RUb1N0cmluZztcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBnZXRSYXdUYWcgPSByZXF1aXJlKCcuL19nZXRSYXdUYWcnKSxcbiAgICBvYmplY3RUb1N0cmluZyA9IHJlcXVpcmUoJy4vX29iamVjdFRvU3RyaW5nJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXRUYWc7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcbiIsInZhciBjb3JlSnNEYXRhID0gcmVxdWlyZSgnLi9fY29yZUpzRGF0YScpO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgbWV0aG9kcyBtYXNxdWVyYWRpbmcgYXMgbmF0aXZlLiAqL1xudmFyIG1hc2tTcmNLZXkgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciB1aWQgPSAvW14uXSskLy5leGVjKGNvcmVKc0RhdGEgJiYgY29yZUpzRGF0YS5rZXlzICYmIGNvcmVKc0RhdGEua2V5cy5JRV9QUk9UTyB8fCAnJyk7XG4gIHJldHVybiB1aWQgPyAoJ1N5bWJvbChzcmMpXzEuJyArIHVpZCkgOiAnJztcbn0oKSk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBmdW5jYCBoYXMgaXRzIHNvdXJjZSBtYXNrZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBpcyBtYXNrZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNNYXNrZWQoZnVuYykge1xuICByZXR1cm4gISFtYXNrU3JjS2V5ICYmIChtYXNrU3JjS2V5IGluIGZ1bmMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTWFza2VkO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgZnVuY2AgdG8gaXRzIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc291cmNlIGNvZGUuXG4gKi9cbmZ1bmN0aW9uIHRvU291cmNlKGZ1bmMpIHtcbiAgaWYgKGZ1bmMgIT0gbnVsbCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZnVuY1RvU3RyaW5nLmNhbGwoZnVuYyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICB0cnkge1xuICAgICAgcmV0dXJuIChmdW5jICsgJycpO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gIH1cbiAgcmV0dXJuICcnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvU291cmNlO1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc01hc2tlZCA9IHJlcXVpcmUoJy4vX2lzTWFza2VkJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9Tb3VyY2UgPSByZXF1aXJlKCcuL190b1NvdXJjZScpO1xuXG4vKipcbiAqIFVzZWQgdG8gbWF0Y2ggYFJlZ0V4cGBcbiAqIFtzeW50YXggY2hhcmFjdGVyc10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcGF0dGVybnMpLlxuICovXG52YXIgcmVSZWdFeHBDaGFyID0gL1tcXFxcXiQuKis/KClbXFxde318XS9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgaG9zdCBjb25zdHJ1Y3RvcnMgKFNhZmFyaSkuICovXG52YXIgcmVJc0hvc3RDdG9yID0gL15cXFtvYmplY3QgLis/Q29uc3RydWN0b3JcXF0kLztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNQcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZSxcbiAgICBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIHJlc29sdmUgdGhlIGRlY29tcGlsZWQgc291cmNlIG9mIGZ1bmN0aW9ucy4gKi9cbnZhciBmdW5jVG9TdHJpbmcgPSBmdW5jUHJvdG8udG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmdW5jVG9TdHJpbmcuY2FsbChoYXNPd25Qcm9wZXJ0eSkucmVwbGFjZShyZVJlZ0V4cENoYXIsICdcXFxcJCYnKVxuICAucmVwbGFjZSgvaGFzT3duUHJvcGVydHl8KGZ1bmN0aW9uKS4qPyg/PVxcXFxcXCgpfCBmb3IgLis/KD89XFxcXFxcXSkvZywgJyQxLio/JykgKyAnJCdcbik7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNOYXRpdmVgIHdpdGhvdXQgYmFkIHNoaW0gY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTmF0aXZlKHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3QodmFsdWUpIHx8IGlzTWFza2VkKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcGF0dGVybiA9IGlzRnVuY3Rpb24odmFsdWUpID8gcmVJc05hdGl2ZSA6IHJlSXNIb3N0Q3RvcjtcbiAgcmV0dXJuIHBhdHRlcm4udGVzdCh0b1NvdXJjZSh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc05hdGl2ZTtcbiIsIi8qKlxuICogR2V0cyB0aGUgdmFsdWUgYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFZhbHVlO1xuIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyk7XG5cbnZhciBkZWZpbmVQcm9wZXJ0eSA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgZnVuYyA9IGdldE5hdGl2ZShPYmplY3QsICdkZWZpbmVQcm9wZXJ0eScpO1xuICAgIGZ1bmMoe30sICcnLCB7fSk7XG4gICAgcmV0dXJuIGZ1bmM7XG4gIH0gY2F0Y2ggKGUpIHt9XG59KCkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmluZVByb3BlcnR5O1xuIiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fZGVmaW5lUHJvcGVydHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYXNzaWduVmFsdWVgIGFuZCBgYXNzaWduTWVyZ2VWYWx1ZWAgd2l0aG91dFxuICogdmFsdWUgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSA9PSAnX19wcm90b19fJyAmJiBkZWZpbmVQcm9wZXJ0eSkge1xuICAgIGRlZmluZVByb3BlcnR5KG9iamVjdCwga2V5LCB7XG4gICAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAgICdlbnVtZXJhYmxlJzogdHJ1ZSxcbiAgICAgICd2YWx1ZSc6IHZhbHVlLFxuICAgICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQXNzaWduVmFsdWU7XG4iLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcbiIsInZhciBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBc3NpZ25zIGB2YWx1ZWAgdG8gYGtleWAgb2YgYG9iamVjdGAgaWYgdGhlIGV4aXN0aW5nIHZhbHVlIGlzIG5vdCBlcXVpdmFsZW50XG4gKiB1c2luZyBbYFNhbWVWYWx1ZVplcm9gXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1zYW1ldmFsdWV6ZXJvKVxuICogZm9yIGVxdWFsaXR5IGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgaWYgKCEoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYgZXEob2JqVmFsdWUsIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25WYWx1ZTtcbiIsInZhciBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgYmFzZUFzc2lnblZhbHVlID0gcmVxdWlyZSgnLi9fYmFzZUFzc2lnblZhbHVlJyk7XG5cbi8qKlxuICogQ29waWVzIHByb3BlcnRpZXMgb2YgYHNvdXJjZWAgdG8gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbS5cbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BzIFRoZSBwcm9wZXJ0eSBpZGVudGlmaWVycyB0byBjb3B5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3Q9e31dIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIHRvLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29waWVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvcHlPYmplY3Qoc291cmNlLCBwcm9wcywgb2JqZWN0LCBjdXN0b21pemVyKSB7XG4gIHZhciBpc05ldyA9ICFvYmplY3Q7XG4gIG9iamVjdCB8fCAob2JqZWN0ID0ge30pO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcblxuICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgID8gY3VzdG9taXplcihvYmplY3Rba2V5XSwgc291cmNlW2tleV0sIGtleSwgb2JqZWN0LCBzb3VyY2UpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBuZXdWYWx1ZSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICBpZiAoaXNOZXcpIHtcbiAgICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlPYmplY3Q7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuIiwiLyoqXG4gKiBBIGZhc3RlciBhbHRlcm5hdGl2ZSB0byBgRnVuY3Rpb24jYXBwbHlgLCB0aGlzIGZ1bmN0aW9uIGludm9rZXMgYGZ1bmNgXG4gKiB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2AgYW5kIHRoZSBhcmd1bWVudHMgb2YgYGFyZ3NgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IGFyZ3MgVGhlIGFyZ3VtZW50cyB0byBpbnZva2UgYGZ1bmNgIHdpdGguXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGBmdW5jYC5cbiAqL1xuZnVuY3Rpb24gYXBwbHkoZnVuYywgdGhpc0FyZywgYXJncykge1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcpO1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICB9XG4gIHJldHVybiBmdW5jLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcGx5O1xuIiwidmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9fYXBwbHknKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVJlc3RgIHdoaWNoIHRyYW5zZm9ybXMgdGhlIHJlc3QgYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIHJlc3QgYXJyYXkgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCB0cmFuc2Zvcm0pIHtcbiAgc3RhcnQgPSBuYXRpdmVNYXgoc3RhcnQgPT09IHVuZGVmaW5lZCA/IChmdW5jLmxlbmd0aCAtIDEpIDogc3RhcnQsIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgYXJyYXkgPSBBcnJheShsZW5ndGgpO1xuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGFycmF5W2luZGV4XSA9IGFyZ3Nbc3RhcnQgKyBpbmRleF07XG4gICAgfVxuICAgIGluZGV4ID0gLTE7XG4gICAgdmFyIG90aGVyQXJncyA9IEFycmF5KHN0YXJ0ICsgMSk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gdHJhbnNmb3JtKGFycmF5KTtcbiAgICByZXR1cm4gYXBwbHkoZnVuYywgdGhpcywgb3RoZXJBcmdzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBvdmVyUmVzdDtcbiIsIi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBgdmFsdWVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZXR1cm4gZnJvbSB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29uc3RhbnQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gXy50aW1lcygyLCBfLmNvbnN0YW50KHsgJ2EnOiAxIH0pKTtcbiAqXG4gKiBjb25zb2xlLmxvZyhvYmplY3RzKTtcbiAqIC8vID0+IFt7ICdhJzogMSB9LCB7ICdhJzogMSB9XVxuICpcbiAqIGNvbnNvbGUubG9nKG9iamVjdHNbMF0gPT09IG9iamVjdHNbMV0pO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBjb25zdGFudCh2YWx1ZSkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnN0YW50O1xuIiwidmFyIGNvbnN0YW50ID0gcmVxdWlyZSgnLi9jb25zdGFudCcpLFxuICAgIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fZGVmaW5lUHJvcGVydHknKSxcbiAgICBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgc2V0VG9TdHJpbmdgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaG90IGxvb3Agc2hvcnRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZyBUaGUgYHRvU3RyaW5nYCByZXN1bHQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGZ1bmNgLlxuICovXG52YXIgYmFzZVNldFRvU3RyaW5nID0gIWRlZmluZVByb3BlcnR5ID8gaWRlbnRpdHkgOiBmdW5jdGlvbihmdW5jLCBzdHJpbmcpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGZ1bmMsICd0b1N0cmluZycsIHtcbiAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcbiAgICAnZW51bWVyYWJsZSc6IGZhbHNlLFxuICAgICd2YWx1ZSc6IGNvbnN0YW50KHN0cmluZyksXG4gICAgJ3dyaXRhYmxlJzogdHJ1ZVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNldFRvU3RyaW5nO1xuIiwiLyoqIFVzZWQgdG8gZGV0ZWN0IGhvdCBmdW5jdGlvbnMgYnkgbnVtYmVyIG9mIGNhbGxzIHdpdGhpbiBhIHNwYW4gb2YgbWlsbGlzZWNvbmRzLiAqL1xudmFyIEhPVF9DT1VOVCA9IDgwMCxcbiAgICBIT1RfU1BBTiA9IDE2O1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTm93ID0gRGF0ZS5ub3c7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQnbGwgc2hvcnQgb3V0IGFuZCBpbnZva2UgYGlkZW50aXR5YCBpbnN0ZWFkXG4gKiBvZiBgZnVuY2Agd2hlbiBpdCdzIGNhbGxlZCBgSE9UX0NPVU5UYCBvciBtb3JlIHRpbWVzIGluIGBIT1RfU1BBTmBcbiAqIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gcmVzdHJpY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzaG9ydGFibGUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHNob3J0T3V0KGZ1bmMpIHtcbiAgdmFyIGNvdW50ID0gMCxcbiAgICAgIGxhc3RDYWxsZWQgPSAwO1xuXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RhbXAgPSBuYXRpdmVOb3coKSxcbiAgICAgICAgcmVtYWluaW5nID0gSE9UX1NQQU4gLSAoc3RhbXAgLSBsYXN0Q2FsbGVkKTtcblxuICAgIGxhc3RDYWxsZWQgPSBzdGFtcDtcbiAgICBpZiAocmVtYWluaW5nID4gMCkge1xuICAgICAgaWYgKCsrY291bnQgPj0gSE9UX0NPVU5UKSB7XG4gICAgICAgIHJldHVybiBhcmd1bWVudHNbMF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3J0T3V0O1xuIiwidmFyIGJhc2VTZXRUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VTZXRUb1N0cmluZycpLFxuICAgIHNob3J0T3V0ID0gcmVxdWlyZSgnLi9fc2hvcnRPdXQnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBgdG9TdHJpbmdgIG1ldGhvZCBvZiBgZnVuY2AgdG8gcmV0dXJuIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzdHJpbmcgVGhlIGB0b1N0cmluZ2AgcmVzdWx0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIHNldFRvU3RyaW5nID0gc2hvcnRPdXQoYmFzZVNldFRvU3RyaW5nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb1N0cmluZztcbiIsInZhciBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKSxcbiAgICBvdmVyUmVzdCA9IHJlcXVpcmUoJy4vX292ZXJSZXN0JyksXG4gICAgc2V0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19zZXRUb1N0cmluZycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlc3RgIHdoaWNoIGRvZXNuJ3QgdmFsaWRhdGUgb3IgY29lcmNlIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUmVzdChmdW5jLCBzdGFydCkge1xuICByZXR1cm4gc2V0VG9TdHJpbmcob3ZlclJlc3QoZnVuYywgc3RhcnQsIGlkZW50aXR5KSwgZnVuYyArICcnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUmVzdDtcbiIsIi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9MZW5ndGhgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2xlbmd0aCkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBsZW5ndGgsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0xlbmd0aCgzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTGVuZ3RoKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0xlbmd0aCgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNMZW5ndGgodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJlxuICAgIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcbiIsInZhciBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYXJyYXktbGlrZS4gQSB2YWx1ZSBpcyBjb25zaWRlcmVkIGFycmF5LWxpa2UgaWYgaXQnc1xuICogbm90IGEgZnVuY3Rpb24gYW5kIGhhcyBhIGB2YWx1ZS5sZW5ndGhgIHRoYXQncyBhbiBpbnRlZ2VyIGdyZWF0ZXIgdGhhbiBvclxuICogZXF1YWwgdG8gYDBgIGFuZCBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gYE51bWJlci5NQVhfU0FGRV9JTlRFR0VSYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlKGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoJ2FiYycpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgIWlzRnVuY3Rpb24odmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlO1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCB1bnNpZ25lZCBpbnRlZ2VyIHZhbHVlcy4gKi9cbnZhciByZUlzVWludCA9IC9eKD86MHxbMS05XVxcZCopJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoPU1BWF9TQUZFX0lOVEVHRVJdIFRoZSB1cHBlciBib3VuZHMgb2YgYSB2YWxpZCBpbmRleC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgaW5kZXgsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJbmRleCh2YWx1ZSwgbGVuZ3RoKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG5cbiAgcmV0dXJuICEhbGVuZ3RoICYmXG4gICAgKHR5cGUgPT0gJ251bWJlcicgfHxcbiAgICAgICh0eXBlICE9ICdzeW1ib2wnICYmIHJlSXNVaW50LnRlc3QodmFsdWUpKSkgJiZcbiAgICAgICAgKHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPCBsZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG4iLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgdmFsdWUgYXJndW1lbnQuXG4gKiBAcGFyYW0geyp9IGluZGV4IFRoZSBwb3RlbnRpYWwgaXRlcmF0ZWUgaW5kZXggb3Iga2V5IGFyZ3VtZW50LlxuICogQHBhcmFtIHsqfSBvYmplY3QgVGhlIHBvdGVudGlhbCBpdGVyYXRlZSBvYmplY3QgYXJndW1lbnQuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFyZ3VtZW50cyBhcmUgZnJvbSBhbiBpdGVyYXRlZSBjYWxsLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNJdGVyYXRlZUNhbGwodmFsdWUsIGluZGV4LCBvYmplY3QpIHtcbiAgaWYgKCFpc09iamVjdChvYmplY3QpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIGluZGV4O1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJ1xuICAgICAgICA/IChpc0FycmF5TGlrZShvYmplY3QpICYmIGlzSW5kZXgoaW5kZXgsIG9iamVjdC5sZW5ndGgpKVxuICAgICAgICA6ICh0eXBlID09ICdzdHJpbmcnICYmIGluZGV4IGluIG9iamVjdClcbiAgICAgICkge1xuICAgIHJldHVybiBlcShvYmplY3RbaW5kZXhdLCB2YWx1ZSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSXRlcmF0ZWVDYWxsO1xuIiwidmFyIGJhc2VSZXN0ID0gcmVxdWlyZSgnLi9fYmFzZVJlc3QnKSxcbiAgICBpc0l0ZXJhdGVlQ2FsbCA9IHJlcXVpcmUoJy4vX2lzSXRlcmF0ZWVDYWxsJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8uYXNzaWduYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gYXNzaWduZXIgVGhlIGZ1bmN0aW9uIHRvIGFzc2lnbiB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhc3NpZ25lciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQXNzaWduZXIoYXNzaWduZXIpIHtcbiAgcmV0dXJuIGJhc2VSZXN0KGZ1bmN0aW9uKG9iamVjdCwgc291cmNlcykge1xuICAgIHZhciBpbmRleCA9IC0xLFxuICAgICAgICBsZW5ndGggPSBzb3VyY2VzLmxlbmd0aCxcbiAgICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA+IDEgPyBzb3VyY2VzW2xlbmd0aCAtIDFdIDogdW5kZWZpbmVkLFxuICAgICAgICBndWFyZCA9IGxlbmd0aCA+IDIgPyBzb3VyY2VzWzJdIDogdW5kZWZpbmVkO1xuXG4gICAgY3VzdG9taXplciA9IChhc3NpZ25lci5sZW5ndGggPiAzICYmIHR5cGVvZiBjdXN0b21pemVyID09ICdmdW5jdGlvbicpXG4gICAgICA/IChsZW5ndGgtLSwgY3VzdG9taXplcilcbiAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKGd1YXJkICYmIGlzSXRlcmF0ZWVDYWxsKHNvdXJjZXNbMF0sIHNvdXJjZXNbMV0sIGd1YXJkKSkge1xuICAgICAgY3VzdG9taXplciA9IGxlbmd0aCA8IDMgPyB1bmRlZmluZWQgOiBjdXN0b21pemVyO1xuICAgICAgbGVuZ3RoID0gMTtcbiAgICB9XG4gICAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzW2luZGV4XTtcbiAgICAgIGlmIChzb3VyY2UpIHtcbiAgICAgICAgYXNzaWduZXIob2JqZWN0LCBzb3VyY2UsIGluZGV4LCBjdXN0b21pemVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQXNzaWduZXI7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNBcmd1bWVudHNgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqL1xuZnVuY3Rpb24gYmFzZUlzQXJndW1lbnRzKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IGFyZ3NUYWc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzQXJndW1lbnRzO1xuIiwidmFyIGJhc2VJc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vX2Jhc2VJc0FyZ3VtZW50cycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGFuIGBhcmd1bWVudHNgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBgYXJndW1lbnRzYCBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FyZ3VtZW50cyA9IGJhc2VJc0FyZ3VtZW50cyhmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA/IGJhc2VJc0FyZ3VtZW50cyA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsICdjYWxsZWUnKSAmJlxuICAgICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJndW1lbnRzO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGBmYWxzZWAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEzLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8uc3R1YkZhbHNlKTtcbiAqIC8vID0+IFtmYWxzZSwgZmFsc2VdXG4gKi9cbmZ1bmN0aW9uIHN0dWJGYWxzZSgpIHtcbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0dWJGYWxzZTtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpLFxuICAgIHN0dWJGYWxzZSA9IHJlcXVpcmUoJy4vc3R1YkZhbHNlJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZXhwb3J0c2AuICovXG52YXIgZnJlZUV4cG9ydHMgPSB0eXBlb2YgZXhwb3J0cyA9PSAnb2JqZWN0JyAmJiBleHBvcnRzICYmICFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgbW9kdWxlYC4gKi9cbnZhciBmcmVlTW9kdWxlID0gZnJlZUV4cG9ydHMgJiYgdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiYgIW1vZHVsZS5ub2RlVHlwZSAmJiBtb2R1bGU7XG5cbi8qKiBEZXRlY3QgdGhlIHBvcHVsYXIgQ29tbW9uSlMgZXh0ZW5zaW9uIGBtb2R1bGUuZXhwb3J0c2AuICovXG52YXIgbW9kdWxlRXhwb3J0cyA9IGZyZWVNb2R1bGUgJiYgZnJlZU1vZHVsZS5leHBvcnRzID09PSBmcmVlRXhwb3J0cztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgQnVmZmVyID0gbW9kdWxlRXhwb3J0cyA/IHJvb3QuQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNCdWZmZXIgPSBCdWZmZXIgPyBCdWZmZXIuaXNCdWZmZXIgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjMuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBidWZmZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgQnVmZmVyKDIpKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQnVmZmVyKG5ldyBVaW50OEFycmF5KDIpKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0J1ZmZlciA9IG5hdGl2ZUlzQnVmZmVyIHx8IHN0dWJGYWxzZTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0J1ZmZlcjtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgZnVuY1RhZyA9ICdbb2JqZWN0IEZ1bmN0aW9uXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgd2Vha01hcFRhZyA9ICdbb2JqZWN0IFdlYWtNYXBdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XScsXG4gICAgZmxvYXQzMlRhZyA9ICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgIGZsb2F0NjRUYWcgPSAnW29iamVjdCBGbG9hdDY0QXJyYXldJyxcbiAgICBpbnQ4VGFnID0gJ1tvYmplY3QgSW50OEFycmF5XScsXG4gICAgaW50MTZUYWcgPSAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgaW50MzJUYWcgPSAnW29iamVjdCBJbnQzMkFycmF5XScsXG4gICAgdWludDhUYWcgPSAnW29iamVjdCBVaW50OEFycmF5XScsXG4gICAgdWludDhDbGFtcGVkVGFnID0gJ1tvYmplY3QgVWludDhDbGFtcGVkQXJyYXldJyxcbiAgICB1aW50MTZUYWcgPSAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgIHVpbnQzMlRhZyA9ICdbb2JqZWN0IFVpbnQzMkFycmF5XSc7XG5cbi8qKiBVc2VkIHRvIGlkZW50aWZ5IGB0b1N0cmluZ1RhZ2AgdmFsdWVzIG9mIHR5cGVkIGFycmF5cy4gKi9cbnZhciB0eXBlZEFycmF5VGFncyA9IHt9O1xudHlwZWRBcnJheVRhZ3NbZmxvYXQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1tmbG9hdDY0VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQ4VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2ludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1tpbnQzMlRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50OFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDhDbGFtcGVkVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbdWludDMyVGFnXSA9IHRydWU7XG50eXBlZEFycmF5VGFnc1thcmdzVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2FycmF5VGFnXSA9XG50eXBlZEFycmF5VGFnc1thcnJheUJ1ZmZlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tib29sVGFnXSA9XG50eXBlZEFycmF5VGFnc1tkYXRhVmlld1RhZ10gPSB0eXBlZEFycmF5VGFnc1tkYXRlVGFnXSA9XG50eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPSB0eXBlZEFycmF5VGFnc1tmdW5jVGFnXSA9XG50eXBlZEFycmF5VGFnc1ttYXBUYWddID0gdHlwZWRBcnJheVRhZ3NbbnVtYmVyVGFnXSA9XG50eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID0gdHlwZWRBcnJheVRhZ3NbcmVnZXhwVGFnXSA9XG50eXBlZEFycmF5VGFnc1tzZXRUYWddID0gdHlwZWRBcnJheVRhZ3Nbc3RyaW5nVGFnXSA9XG50eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzVHlwZWRBcnJheWAgd2l0aG91dCBOb2RlLmpzIG9wdGltaXphdGlvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmXG4gICAgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW2Jhc2VHZXRUYWcodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNUeXBlZEFycmF5O1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy51bmFyeWAgd2l0aG91dCBzdXBwb3J0IGZvciBzdG9yaW5nIG1ldGFkYXRhLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjYXAgYXJndW1lbnRzIGZvci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVVuYXJ5KGZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmModmFsdWUpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VVbmFyeTtcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgcHJvY2Vzc2AgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVQcm9jZXNzID0gbW9kdWxlRXhwb3J0cyAmJiBmcmVlR2xvYmFsLnByb2Nlc3M7XG5cbi8qKiBVc2VkIHRvIGFjY2VzcyBmYXN0ZXIgTm9kZS5qcyBoZWxwZXJzLiAqL1xudmFyIG5vZGVVdGlsID0gKGZ1bmN0aW9uKCkge1xuICB0cnkge1xuICAgIHJldHVybiBmcmVlUHJvY2VzcyAmJiBmcmVlUHJvY2Vzcy5iaW5kaW5nICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcoJ3V0aWwnKTtcbiAgfSBjYXRjaCAoZSkge31cbn0oKSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbm9kZVV0aWw7XG4iLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcbiIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcbiIsIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlXG4gKiBbYE9iamVjdC5rZXlzYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBleGNlcHQgdGhhdCBpdCBpbmNsdWRlcyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBuYXRpdmVLZXlzSW4ob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKG9iamVjdCAhPSBudWxsKSB7XG4gICAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXNJbjtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5c0luID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5c0luJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ua2V5c0luYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzSW4ob2JqZWN0KSB7XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzSW4ob2JqZWN0KTtcbiAgfVxuICB2YXIgaXNQcm90byA9IGlzUHJvdG90eXBlKG9iamVjdCksXG4gICAgICByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKCEoa2V5ID09ICdjb25zdHJ1Y3RvcicgJiYgKGlzUHJvdG8gfHwgIWhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXNJbjtcbiIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzSW4gPSByZXF1aXJlKCcuL19iYXNlS2V5c0luJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXNJbihuZXcgRm9vKTtcbiAqIC8vID0+IFsnYScsICdiJywgJ2MnXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiBrZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpID8gYXJyYXlMaWtlS2V5cyhvYmplY3QsIHRydWUpIDogYmFzZUtleXNJbihvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNJbjtcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGNyZWF0ZUFzc2lnbmVyID0gcmVxdWlyZSgnLi9fY3JlYXRlQXNzaWduZXInKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uYXNzaWduYCBleGNlcHQgdGhhdCBpdCBpdGVyYXRlcyBvdmVyIG93biBhbmRcbiAqIGluaGVyaXRlZCBzb3VyY2UgcHJvcGVydGllcy5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgbXV0YXRlcyBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAYWxpYXMgZXh0ZW5kXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0gey4uLk9iamVjdH0gW3NvdXJjZXNdIFRoZSBzb3VyY2Ugb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAc2VlIF8uYXNzaWduXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBmdW5jdGlvbiBCYXIoKSB7XG4gKiAgIHRoaXMuYyA9IDM7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5iID0gMjtcbiAqIEJhci5wcm90b3R5cGUuZCA9IDQ7XG4gKlxuICogXy5hc3NpZ25Jbih7ICdhJzogMCB9LCBuZXcgRm9vLCBuZXcgQmFyKTtcbiAqIC8vID0+IHsgJ2EnOiAxLCAnYic6IDIsICdjJzogMywgJ2QnOiA0IH1cbiAqL1xudmFyIGFzc2lnbkluID0gY3JlYXRlQXNzaWduZXIoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgY29weU9iamVjdChzb3VyY2UsIGtleXNJbihzb3VyY2UpLCBvYmplY3QpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduSW47XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vYXNzaWduSW4nKTtcbiIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcbiIsInZhciBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgYGtleWAgaXMgZm91bmQgaW4gYGFycmF5YCBvZiBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSBrZXkgVGhlIGtleSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYXNzb2NJbmRleE9mKGFycmF5LCBrZXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGVxKGFycmF5W2xlbmd0aF1bMF0sIGtleSkpIHtcbiAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NvY0luZGV4T2Y7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlRGVsZXRlKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGRhdGEubGVuZ3RoIC0gMTtcbiAgaWYgKGluZGV4ID09IGxhc3RJbmRleCkge1xuICAgIGRhdGEucG9wKCk7XG4gIH0gZWxzZSB7XG4gICAgc3BsaWNlLmNhbGwoZGF0YSwgaW5kZXgsIDEpO1xuICB9XG4gIC0tdGhpcy5zaXplO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVEZWxldGU7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgZW50cnkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGxpc3RDYWNoZUdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICByZXR1cm4gaW5kZXggPCAwID8gdW5kZWZpbmVkIDogZGF0YVtpbmRleF1bMV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGlzdENhY2hlR2V0O1xuIiwidmFyIGFzc29jSW5kZXhPZiA9IHJlcXVpcmUoJy4vX2Fzc29jSW5kZXhPZicpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBhIGxpc3QgY2FjaGUgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlSGFzKGtleSkge1xuICByZXR1cm4gYXNzb2NJbmRleE9mKHRoaXMuX19kYXRhX18sIGtleSkgPiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVIYXM7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlzdCBjYWNoZSBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbGlzdCBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgaW5kZXggPSBhc3NvY0luZGV4T2YoZGF0YSwga2V5KTtcblxuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgKyt0aGlzLnNpemU7XG4gICAgZGF0YS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0YVtpbmRleF1bMV0gPSB2YWx1ZTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVTZXQ7XG4iLCJ2YXIgbGlzdENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19saXN0Q2FjaGVDbGVhcicpLFxuICAgIGxpc3RDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZURlbGV0ZScpLFxuICAgIGxpc3RDYWNoZUdldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUdldCcpLFxuICAgIGxpc3RDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUhhcycpLFxuICAgIGxpc3RDYWNoZVNldCA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gbGlzdCBjYWNoZSBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIExpc3RDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBMaXN0Q2FjaGVgLlxuTGlzdENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGxpc3RDYWNoZUNsZWFyO1xuTGlzdENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBsaXN0Q2FjaGVEZWxldGU7XG5MaXN0Q2FjaGUucHJvdG90eXBlLmdldCA9IGxpc3RDYWNoZUdldDtcbkxpc3RDYWNoZS5wcm90b3R5cGUuaGFzID0gbGlzdENhY2hlSGFzO1xuTGlzdENhY2hlLnByb3RvdHlwZS5zZXQgPSBsaXN0Q2FjaGVTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gTGlzdENhY2hlO1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrQ2xlYXI7XG4iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tEZWxldGU7XG4iLCIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tHZXQ7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrSGFzO1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBNYXAgPSBnZXROYXRpdmUocm9vdCwgJ01hcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcDtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVDcmVhdGU7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKi9cbmZ1bmN0aW9uIGhhc2hDbGVhcigpIHtcbiAgdGhpcy5fX2RhdGFfXyA9IG5hdGl2ZUNyZWF0ZSA/IG5hdGl2ZUNyZWF0ZShudWxsKSA6IHt9O1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hDbGVhcjtcbiIsIi8qKlxuICogUmVtb3ZlcyBga2V5YCBhbmQgaXRzIHZhbHVlIGZyb20gdGhlIGhhc2guXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7T2JqZWN0fSBoYXNoIFRoZSBoYXNoIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoRGVsZXRlKGtleSkge1xuICB2YXIgcmVzdWx0ID0gdGhpcy5oYXMoa2V5KSAmJiBkZWxldGUgdGhpcy5fX2RhdGFfX1trZXldO1xuICB0aGlzLnNpemUgLT0gcmVzdWx0ID8gMSA6IDA7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaERlbGV0ZTtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgdG8gc3RhbmQtaW4gZm9yIGB1bmRlZmluZWRgIGhhc2ggdmFsdWVzLiAqL1xudmFyIEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEdldHMgdGhlIGhhc2ggdmFsdWUgZm9yIGBrZXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBnZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gaGFzaEdldChrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICBpZiAobmF0aXZlQ3JlYXRlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGRhdGFba2V5XTtcbiAgICByZXR1cm4gcmVzdWx0ID09PSBIQVNIX1VOREVGSU5FRCA/IHVuZGVmaW5lZCA6IHJlc3VsdDtcbiAgfVxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpID8gZGF0YVtrZXldIDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hHZXQ7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgaGFzaCB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzaEhhcyhrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fO1xuICByZXR1cm4gbmF0aXZlQ3JlYXRlID8gKGRhdGFba2V5XSAhPT0gdW5kZWZpbmVkKSA6IGhhc093blByb3BlcnR5LmNhbGwoZGF0YSwga2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoSGFzO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogU2V0cyB0aGUgaGFzaCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBIYXNoXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHNldC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNldC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGhhc2ggaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIGhhc2hTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHRoaXMuc2l6ZSArPSB0aGlzLmhhcyhrZXkpID8gMCA6IDE7XG4gIGRhdGFba2V5XSA9IChuYXRpdmVDcmVhdGUgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgPyBIQVNIX1VOREVGSU5FRCA6IHZhbHVlO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoU2V0O1xuIiwidmFyIGhhc2hDbGVhciA9IHJlcXVpcmUoJy4vX2hhc2hDbGVhcicpLFxuICAgIGhhc2hEZWxldGUgPSByZXF1aXJlKCcuL19oYXNoRGVsZXRlJyksXG4gICAgaGFzaEdldCA9IHJlcXVpcmUoJy4vX2hhc2hHZXQnKSxcbiAgICBoYXNoSGFzID0gcmVxdWlyZSgnLi9faGFzaEhhcycpLFxuICAgIGhhc2hTZXQgPSByZXF1aXJlKCcuL19oYXNoU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGhhc2ggb2JqZWN0LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBIYXNoKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYEhhc2hgLlxuSGFzaC5wcm90b3R5cGUuY2xlYXIgPSBoYXNoQ2xlYXI7XG5IYXNoLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBoYXNoRGVsZXRlO1xuSGFzaC5wcm90b3R5cGUuZ2V0ID0gaGFzaEdldDtcbkhhc2gucHJvdG90eXBlLmhhcyA9IGhhc2hIYXM7XG5IYXNoLnByb3RvdHlwZS5zZXQgPSBoYXNoU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG4iLCJ2YXIgSGFzaCA9IHJlcXVpcmUoJy4vX0hhc2gnKSxcbiAgICBMaXN0Q2FjaGUgPSByZXF1aXJlKCcuL19MaXN0Q2FjaGUnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGNsZWFyXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVDbGVhcigpIHtcbiAgdGhpcy5zaXplID0gMDtcbiAgdGhpcy5fX2RhdGFfXyA9IHtcbiAgICAnaGFzaCc6IG5ldyBIYXNoLFxuICAgICdtYXAnOiBuZXcgKE1hcCB8fCBMaXN0Q2FjaGUpLFxuICAgICdzdHJpbmcnOiBuZXcgSGFzaFxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcENhY2hlQ2xlYXI7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciB1c2UgYXMgdW5pcXVlIG9iamVjdCBrZXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXlhYmxlKHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gKHR5cGUgPT0gJ3N0cmluZycgfHwgdHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nKVxuICAgID8gKHZhbHVlICE9PSAnX19wcm90b19fJylcbiAgICA6ICh2YWx1ZSA9PT0gbnVsbCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNLZXlhYmxlO1xuIiwidmFyIGlzS2V5YWJsZSA9IHJlcXVpcmUoJy4vX2lzS2V5YWJsZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIGRhdGEgZm9yIGBtYXBgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSByZWZlcmVuY2Uga2V5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1hcCBkYXRhLlxuICovXG5mdW5jdGlvbiBnZXRNYXBEYXRhKG1hcCwga2V5KSB7XG4gIHZhciBkYXRhID0gbWFwLl9fZGF0YV9fO1xuICByZXR1cm4gaXNLZXlhYmxlKGtleSlcbiAgICA/IGRhdGFbdHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/ICdzdHJpbmcnIDogJ2hhc2gnXVxuICAgIDogZGF0YS5tYXA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWFwRGF0YTtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG4iLCJ2YXIgbWFwQ2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX21hcENhY2hlQ2xlYXInKSxcbiAgICBtYXBDYWNoZURlbGV0ZSA9IHJlcXVpcmUoJy4vX21hcENhY2hlRGVsZXRlJyksXG4gICAgbWFwQ2FjaGVHZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZUdldCcpLFxuICAgIG1hcENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVIYXMnKSxcbiAgICBtYXBDYWNoZVNldCA9IHJlcXVpcmUoJy4vX21hcENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG1hcCBjYWNoZSBvYmplY3QgdG8gc3RvcmUga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBNYXBDYWNoZShlbnRyaWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gZW50cmllcyA9PSBudWxsID8gMCA6IGVudHJpZXMubGVuZ3RoO1xuXG4gIHRoaXMuY2xlYXIoKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2luZGV4XTtcbiAgICB0aGlzLnNldChlbnRyeVswXSwgZW50cnlbMV0pO1xuICB9XG59XG5cbi8vIEFkZCBtZXRob2RzIHRvIGBNYXBDYWNoZWAuXG5NYXBDYWNoZS5wcm90b3R5cGUuY2xlYXIgPSBtYXBDYWNoZUNsZWFyO1xuTWFwQ2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IG1hcENhY2hlRGVsZXRlO1xuTWFwQ2FjaGUucHJvdG90eXBlLmdldCA9IG1hcENhY2hlR2V0O1xuTWFwQ2FjaGUucHJvdG90eXBlLmhhcyA9IG1hcENhY2hlSGFzO1xuTWFwQ2FjaGUucHJvdG90eXBlLnNldCA9IG1hcENhY2hlU2V0O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1hcENhY2hlO1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tTZXQ7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgc3RhY2tDbGVhciA9IHJlcXVpcmUoJy4vX3N0YWNrQ2xlYXInKSxcbiAgICBzdGFja0RlbGV0ZSA9IHJlcXVpcmUoJy4vX3N0YWNrRGVsZXRlJyksXG4gICAgc3RhY2tHZXQgPSByZXF1aXJlKCcuL19zdGFja0dldCcpLFxuICAgIHN0YWNrSGFzID0gcmVxdWlyZSgnLi9fc3RhY2tIYXMnKSxcbiAgICBzdGFja1NldCA9IHJlcXVpcmUoJy4vX3N0YWNrU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcbiIsInZhciBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKSxcbiAgICBlcSA9IHJlcXVpcmUoJy4vZXEnKTtcblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGxpa2UgYGFzc2lnblZhbHVlYCBleGNlcHQgdGhhdCBpdCBkb2Vzbid0IGFzc2lnblxuICogYHVuZGVmaW5lZGAgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBhc3NpZ24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBhc3NpZ24uXG4gKi9cbmZ1bmN0aW9uIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGlmICgodmFsdWUgIT09IHVuZGVmaW5lZCAmJiAhZXEob2JqZWN0W2tleV0sIHZhbHVlKSkgfHxcbiAgICAgICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpKSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhc3NpZ25NZXJnZVZhbHVlO1xuIiwiLyoqXG4gKiBDcmVhdGVzIGEgYmFzZSBmdW5jdGlvbiBmb3IgbWV0aG9kcyBsaWtlIGBfLmZvckluYCBhbmQgYF8uZm9yT3duYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRm9yKGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0LCBpdGVyYXRlZSwga2V5c0Z1bmMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgaXRlcmFibGUgPSBPYmplY3Qob2JqZWN0KSxcbiAgICAgICAgcHJvcHMgPSBrZXlzRnVuYyhvYmplY3QpLFxuICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wc1tmcm9tUmlnaHQgPyBsZW5ndGggOiArK2luZGV4XTtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQmFzZUZvcjtcbiIsInZhciBjcmVhdGVCYXNlRm9yID0gcmVxdWlyZSgnLi9fY3JlYXRlQmFzZUZvcicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlcyBvdmVyIGBvYmplY3RgXG4gKiBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgYW5kIGludm9rZXMgYGl0ZXJhdGVlYCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseSByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xudmFyIGJhc2VGb3IgPSBjcmVhdGVCYXNlRm9yKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvcjtcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZCxcbiAgICBhbGxvY1Vuc2FmZSA9IEJ1ZmZlciA/IEJ1ZmZlci5hbGxvY1Vuc2FmZSA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgY2xvbmUgb2YgIGBidWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0J1ZmZlcn0gYnVmZmVyIFRoZSBidWZmZXIgdG8gY2xvbmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0RlZXBdIFNwZWNpZnkgYSBkZWVwIGNsb25lLlxuICogQHJldHVybnMge0J1ZmZlcn0gUmV0dXJucyB0aGUgY2xvbmVkIGJ1ZmZlci5cbiAqL1xuZnVuY3Rpb24gY2xvbmVCdWZmZXIoYnVmZmVyLCBpc0RlZXApIHtcbiAgaWYgKGlzRGVlcCkge1xuICAgIHJldHVybiBidWZmZXIuc2xpY2UoKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gYnVmZmVyLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGFsbG9jVW5zYWZlID8gYWxsb2NVbnNhZmUobGVuZ3RoKSA6IG5ldyBidWZmZXIuY29uc3RydWN0b3IobGVuZ3RoKTtcblxuICBidWZmZXIuY29weShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lQnVmZmVyO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFVpbnQ4QXJyYXkgPSByb290LlVpbnQ4QXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gVWludDhBcnJheTtcbiIsInZhciBVaW50OEFycmF5ID0gcmVxdWlyZSgnLi9fVWludDhBcnJheScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgYXJyYXlCdWZmZXJgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5QnVmZmVyfSBhcnJheUJ1ZmZlciBUaGUgYXJyYXkgYnVmZmVyIHRvIGNsb25lLlxuICogQHJldHVybnMge0FycmF5QnVmZmVyfSBSZXR1cm5zIHRoZSBjbG9uZWQgYXJyYXkgYnVmZmVyLlxuICovXG5mdW5jdGlvbiBjbG9uZUFycmF5QnVmZmVyKGFycmF5QnVmZmVyKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgYXJyYXlCdWZmZXIuY29uc3RydWN0b3IoYXJyYXlCdWZmZXIuYnl0ZUxlbmd0aCk7XG4gIG5ldyBVaW50OEFycmF5KHJlc3VsdCkuc2V0KG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyKSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2xvbmVBcnJheUJ1ZmZlcjtcbiIsInZhciBjbG9uZUFycmF5QnVmZmVyID0gcmVxdWlyZSgnLi9fY2xvbmVBcnJheUJ1ZmZlcicpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgdHlwZWRBcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlZEFycmF5IFRoZSB0eXBlZCBhcnJheSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNsb25lVHlwZWRBcnJheSh0eXBlZEFycmF5LCBpc0RlZXApIHtcbiAgdmFyIGJ1ZmZlciA9IGlzRGVlcCA/IGNsb25lQXJyYXlCdWZmZXIodHlwZWRBcnJheS5idWZmZXIpIDogdHlwZWRBcnJheS5idWZmZXI7XG4gIHJldHVybiBuZXcgdHlwZWRBcnJheS5jb25zdHJ1Y3RvcihidWZmZXIsIHR5cGVkQXJyYXkuYnl0ZU9mZnNldCwgdHlwZWRBcnJheS5sZW5ndGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsb25lVHlwZWRBcnJheTtcbiIsIi8qKlxuICogQ29waWVzIHRoZSB2YWx1ZXMgb2YgYHNvdXJjZWAgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBhcnJheSB0byBjb3B5IHZhbHVlcyBmcm9tLlxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5PVtdXSBUaGUgYXJyYXkgdG8gY29weSB2YWx1ZXMgdG8uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gY29weUFycmF5KHNvdXJjZSwgYXJyYXkpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuXG4gIGFycmF5IHx8IChhcnJheSA9IEFycmF5KGxlbmd0aCkpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W2luZGV4XSA9IHNvdXJjZVtpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvcHlBcnJheTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5jcmVhdGVgIHdpdGhvdXQgc3VwcG9ydCBmb3IgYXNzaWduaW5nXG4gKiBwcm9wZXJ0aWVzIHRvIHRoZSBjcmVhdGVkIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3RvIFRoZSBvYmplY3QgdG8gaW5oZXJpdCBmcm9tLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xudmFyIGJhc2VDcmVhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIG9iamVjdCgpIHt9XG4gIHJldHVybiBmdW5jdGlvbihwcm90bykge1xuICAgIGlmICghaXNPYmplY3QocHJvdG8pKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIGlmIChvYmplY3RDcmVhdGUpIHtcbiAgICAgIHJldHVybiBvYmplY3RDcmVhdGUocHJvdG8pO1xuICAgIH1cbiAgICBvYmplY3QucHJvdG90eXBlID0gcHJvdG87XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBvYmplY3Q7XG4gICAgb2JqZWN0LnByb3RvdHlwZSA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlQ3JlYXRlO1xuIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcbiIsInZhciBvdmVyQXJnID0gcmVxdWlyZSgnLi9fb3ZlckFyZycpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBnZXRQcm90b3R5cGUgPSBvdmVyQXJnKE9iamVjdC5nZXRQcm90b3R5cGVPZiwgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRQcm90b3R5cGU7XG4iLCJ2YXIgYmFzZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX2Jhc2VDcmVhdGUnKSxcbiAgICBnZXRQcm90b3R5cGUgPSByZXF1aXJlKCcuL19nZXRQcm90b3R5cGUnKSxcbiAgICBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyk7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgYW4gb2JqZWN0IGNsb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBpbml0aWFsaXplZCBjbG9uZS5cbiAqL1xuZnVuY3Rpb24gaW5pdENsb25lT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gKHR5cGVvZiBvYmplY3QuY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNQcm90b3R5cGUob2JqZWN0KSlcbiAgICA/IGJhc2VDcmVhdGUoZ2V0UHJvdG90eXBlKG9iamVjdCkpXG4gICAgOiB7fTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbml0Q2xvbmVPYmplY3Q7XG4iLCJ2YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXktbGlrZSBvYmplY3QsXG4gKiAgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5TGlrZU9iamVjdChfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2VPYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXlMaWtlT2JqZWN0O1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGF0IGlzLCBhbiBvYmplY3QgY3JlYXRlZCBieSB0aGVcbiAqIGBPYmplY3RgIGNvbnN0cnVjdG9yIG9yIG9uZSB3aXRoIGEgYFtbUHJvdG90eXBlXV1gIG9mIGBudWxsYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuOC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSB8fCBiYXNlR2V0VGFnKHZhbHVlKSAhPSBvYmplY3RUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvID0gZ2V0UHJvdG90eXBlKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiZcbiAgICBmdW5jVG9TdHJpbmcuY2FsbChDdG9yKSA9PSBvYmplY3RDdG9yU3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUGxhaW5PYmplY3Q7XG4iLCIvKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBrZXlgLCB1bmxlc3MgYGtleWAgaXMgXCJfX3Byb3RvX19cIi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIHNhZmVHZXQob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIGtleSA9PSAnX19wcm90b19fJ1xuICAgID8gdW5kZWZpbmVkXG4gICAgOiBvYmplY3Rba2V5XTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzYWZlR2V0O1xuIiwidmFyIGNvcHlPYmplY3QgPSByZXF1aXJlKCcuL19jb3B5T2JqZWN0JyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgcGxhaW4gb2JqZWN0IGZsYXR0ZW5pbmcgaW5oZXJpdGVkIGVudW1lcmFibGUgc3RyaW5nXG4gKiBrZXllZCBwcm9wZXJ0aWVzIG9mIGB2YWx1ZWAgdG8gb3duIHByb3BlcnRpZXMgb2YgdGhlIHBsYWluIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBwbGFpbiBvYmplY3QuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8uYXNzaWduKHsgJ2EnOiAxIH0sIG5ldyBGb28pO1xuICogLy8gPT4geyAnYSc6IDEsICdiJzogMiB9XG4gKlxuICogXy5hc3NpZ24oeyAnYSc6IDEgfSwgXy50b1BsYWluT2JqZWN0KG5ldyBGb28pKTtcbiAqIC8vID0+IHsgJ2EnOiAxLCAnYic6IDIsICdjJzogMyB9XG4gKi9cbmZ1bmN0aW9uIHRvUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgcmV0dXJuIGNvcHlPYmplY3QodmFsdWUsIGtleXNJbih2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvUGxhaW5PYmplY3Q7XG4iLCJ2YXIgYXNzaWduTWVyZ2VWYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnbk1lcmdlVmFsdWUnKSxcbiAgICBjbG9uZUJ1ZmZlciA9IHJlcXVpcmUoJy4vX2Nsb25lQnVmZmVyJyksXG4gICAgY2xvbmVUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9fY2xvbmVUeXBlZEFycmF5JyksXG4gICAgY29weUFycmF5ID0gcmVxdWlyZSgnLi9fY29weUFycmF5JyksXG4gICAgaW5pdENsb25lT2JqZWN0ID0gcmVxdWlyZSgnLi9faW5pdENsb25lT2JqZWN0JyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzQXJyYXlMaWtlT2JqZWN0ID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZU9iamVjdCcpLFxuICAgIGlzQnVmZmVyID0gcmVxdWlyZSgnLi9pc0J1ZmZlcicpLFxuICAgIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1BsYWluT2JqZWN0ID0gcmVxdWlyZSgnLi9pc1BsYWluT2JqZWN0JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKSxcbiAgICBzYWZlR2V0ID0gcmVxdWlyZSgnLi9fc2FmZUdldCcpLFxuICAgIHRvUGxhaW5PYmplY3QgPSByZXF1aXJlKCcuL3RvUGxhaW5PYmplY3QnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VNZXJnZWAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBtZXJnZXMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgbWVyZ2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBtZXJnZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzcmNJbmRleCBUaGUgaW5kZXggb2YgYHNvdXJjZWAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBtZXJnZUZ1bmMgVGhlIGZ1bmN0aW9uIHRvIG1lcmdlIHZhbHVlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGFzc2lnbmVkIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgc291cmNlIHZhbHVlcyBhbmQgdGhlaXIgbWVyZ2VkXG4gKiAgY291bnRlcnBhcnRzLlxuICovXG5mdW5jdGlvbiBiYXNlTWVyZ2VEZWVwKG9iamVjdCwgc291cmNlLCBrZXksIHNyY0luZGV4LCBtZXJnZUZ1bmMsIGN1c3RvbWl6ZXIsIHN0YWNrKSB7XG4gIHZhciBvYmpWYWx1ZSA9IHNhZmVHZXQob2JqZWN0LCBrZXkpLFxuICAgICAgc3JjVmFsdWUgPSBzYWZlR2V0KHNvdXJjZSwga2V5KSxcbiAgICAgIHN0YWNrZWQgPSBzdGFjay5nZXQoc3JjVmFsdWUpO1xuXG4gIGlmIChzdGFja2VkKSB7XG4gICAgYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgc3RhY2tlZCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICA/IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCAoa2V5ICsgJycpLCBvYmplY3QsIHNvdXJjZSwgc3RhY2spXG4gICAgOiB1bmRlZmluZWQ7XG5cbiAgdmFyIGlzQ29tbW9uID0gbmV3VmFsdWUgPT09IHVuZGVmaW5lZDtcblxuICBpZiAoaXNDb21tb24pIHtcbiAgICB2YXIgaXNBcnIgPSBpc0FycmF5KHNyY1ZhbHVlKSxcbiAgICAgICAgaXNCdWZmID0gIWlzQXJyICYmIGlzQnVmZmVyKHNyY1ZhbHVlKSxcbiAgICAgICAgaXNUeXBlZCA9ICFpc0FyciAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheShzcmNWYWx1ZSk7XG5cbiAgICBuZXdWYWx1ZSA9IHNyY1ZhbHVlO1xuICAgIGlmIChpc0FyciB8fCBpc0J1ZmYgfHwgaXNUeXBlZCkge1xuICAgICAgaWYgKGlzQXJyYXkob2JqVmFsdWUpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gb2JqVmFsdWU7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpc0FycmF5TGlrZU9iamVjdChvYmpWYWx1ZSkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBjb3B5QXJyYXkob2JqVmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNCdWZmKSB7XG4gICAgICAgIGlzQ29tbW9uID0gZmFsc2U7XG4gICAgICAgIG5ld1ZhbHVlID0gY2xvbmVCdWZmZXIoc3JjVmFsdWUsIHRydWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoaXNUeXBlZCkge1xuICAgICAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgICAgICBuZXdWYWx1ZSA9IGNsb25lVHlwZWRBcnJheShzcmNWYWx1ZSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbmV3VmFsdWUgPSBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNQbGFpbk9iamVjdChzcmNWYWx1ZSkgfHwgaXNBcmd1bWVudHMoc3JjVmFsdWUpKSB7XG4gICAgICBuZXdWYWx1ZSA9IG9ialZhbHVlO1xuICAgICAgaWYgKGlzQXJndW1lbnRzKG9ialZhbHVlKSkge1xuICAgICAgICBuZXdWYWx1ZSA9IHRvUGxhaW5PYmplY3Qob2JqVmFsdWUpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIWlzT2JqZWN0KG9ialZhbHVlKSB8fCAoc3JjSW5kZXggJiYgaXNGdW5jdGlvbihvYmpWYWx1ZSkpKSB7XG4gICAgICAgIG5ld1ZhbHVlID0gaW5pdENsb25lT2JqZWN0KHNyY1ZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpc0NvbW1vbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBpZiAoaXNDb21tb24pIHtcbiAgICAvLyBSZWN1cnNpdmVseSBtZXJnZSBvYmplY3RzIGFuZCBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBzdGFjay5zZXQoc3JjVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICBtZXJnZUZ1bmMobmV3VmFsdWUsIHNyY1ZhbHVlLCBzcmNJbmRleCwgY3VzdG9taXplciwgc3RhY2spO1xuICAgIHN0YWNrWydkZWxldGUnXShzcmNWYWx1ZSk7XG4gIH1cbiAgYXNzaWduTWVyZ2VWYWx1ZShvYmplY3QsIGtleSwgbmV3VmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNZXJnZURlZXA7XG4iLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGFzc2lnbk1lcmdlVmFsdWUgPSByZXF1aXJlKCcuL19hc3NpZ25NZXJnZVZhbHVlJyksXG4gICAgYmFzZUZvciA9IHJlcXVpcmUoJy4vX2Jhc2VGb3InKSxcbiAgICBiYXNlTWVyZ2VEZWVwID0gcmVxdWlyZSgnLi9fYmFzZU1lcmdlRGVlcCcpLFxuICAgIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4va2V5c0luJyksXG4gICAgc2FmZUdldCA9IHJlcXVpcmUoJy4vX3NhZmVHZXQnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tZXJnZWAgd2l0aG91dCBzdXBwb3J0IGZvciBtdWx0aXBsZSBzb3VyY2VzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHBhcmFtIHtudW1iZXJ9IHNyY0luZGV4IFRoZSBpbmRleCBvZiBgc291cmNlYC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIG1lcmdlZCB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIHNvdXJjZSB2YWx1ZXMgYW5kIHRoZWlyIG1lcmdlZFxuICogIGNvdW50ZXJwYXJ0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZU1lcmdlKG9iamVjdCwgc291cmNlLCBzcmNJbmRleCwgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKG9iamVjdCA9PT0gc291cmNlKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGJhc2VGb3Ioc291cmNlLCBmdW5jdGlvbihzcmNWYWx1ZSwga2V5KSB7XG4gICAgaWYgKGlzT2JqZWN0KHNyY1ZhbHVlKSkge1xuICAgICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICAgIGJhc2VNZXJnZURlZXAob2JqZWN0LCBzb3VyY2UsIGtleSwgc3JjSW5kZXgsIGJhc2VNZXJnZSwgY3VzdG9taXplciwgc3RhY2spO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IGN1c3RvbWl6ZXJcbiAgICAgICAgPyBjdXN0b21pemVyKHNhZmVHZXQob2JqZWN0LCBrZXkpLCBzcmNWYWx1ZSwgKGtleSArICcnKSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKVxuICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBzcmNWYWx1ZTtcbiAgICAgIH1cbiAgICAgIGFzc2lnbk1lcmdlVmFsdWUob2JqZWN0LCBrZXksIG5ld1ZhbHVlKTtcbiAgICB9XG4gIH0sIGtleXNJbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1lcmdlO1xuIiwidmFyIGJhc2VNZXJnZSA9IHJlcXVpcmUoJy4vX2Jhc2VNZXJnZScpLFxuICAgIGNyZWF0ZUFzc2lnbmVyID0gcmVxdWlyZSgnLi9fY3JlYXRlQXNzaWduZXInKTtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmFzc2lnbmAgZXhjZXB0IHRoYXQgaXQgcmVjdXJzaXZlbHkgbWVyZ2VzIG93biBhbmRcbiAqIGluaGVyaXRlZCBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0aWVzIG9mIHNvdXJjZSBvYmplY3RzIGludG8gdGhlXG4gKiBkZXN0aW5hdGlvbiBvYmplY3QuIFNvdXJjZSBwcm9wZXJ0aWVzIHRoYXQgcmVzb2x2ZSB0byBgdW5kZWZpbmVkYCBhcmVcbiAqIHNraXBwZWQgaWYgYSBkZXN0aW5hdGlvbiB2YWx1ZSBleGlzdHMuIEFycmF5IGFuZCBwbGFpbiBvYmplY3QgcHJvcGVydGllc1xuICogYXJlIG1lcmdlZCByZWN1cnNpdmVseS4gT3RoZXIgb2JqZWN0cyBhbmQgdmFsdWUgdHlwZXMgYXJlIG92ZXJyaWRkZW4gYnlcbiAqIGFzc2lnbm1lbnQuIFNvdXJjZSBvYmplY3RzIGFyZSBhcHBsaWVkIGZyb20gbGVmdCB0byByaWdodC4gU3Vic2VxdWVudFxuICogc291cmNlcyBvdmVyd3JpdGUgcHJvcGVydHkgYXNzaWdubWVudHMgb2YgcHJldmlvdXMgc291cmNlcy5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgbXV0YXRlcyBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuNS4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0gey4uLk9iamVjdH0gW3NvdXJjZXNdIFRoZSBzb3VyY2Ugb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7XG4gKiAgICdhJzogW3sgJ2InOiAyIH0sIHsgJ2QnOiA0IH1dXG4gKiB9O1xuICpcbiAqIHZhciBvdGhlciA9IHtcbiAqICAgJ2EnOiBbeyAnYyc6IDMgfSwgeyAnZSc6IDUgfV1cbiAqIH07XG4gKlxuICogXy5tZXJnZShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IHsgJ2EnOiBbeyAnYic6IDIsICdjJzogMyB9LCB7ICdkJzogNCwgJ2UnOiA1IH1dIH1cbiAqL1xudmFyIG1lcmdlID0gY3JlYXRlQXNzaWduZXIoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2UsIHNyY0luZGV4KSB7XG4gIGJhc2VNZXJnZShvYmplY3QsIHNvdXJjZSwgc3JjSW5kZXgpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gbWVyZ2U7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlFYWNoKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuIiwidmFyIG92ZXJBcmcgPSByZXF1aXJlKCcuL19vdmVyQXJnJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVLZXlzID0gb3ZlckFyZyhPYmplY3Qua2V5cywgT2JqZWN0KTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVLZXlzO1xuIiwidmFyIGlzUHJvdG90eXBlID0gcmVxdWlyZSgnLi9faXNQcm90b3R5cGUnKSxcbiAgICBuYXRpdmVLZXlzID0gcmVxdWlyZSgnLi9fbmF0aXZlS2V5cycpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmtleXNgIHdoaWNoIGRvZXNuJ3QgdHJlYXQgc3BhcnNlIGFycmF5cyBhcyBkZW5zZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gYmFzZUtleXMob2JqZWN0KSB7XG4gIGlmICghaXNQcm90b3R5cGUob2JqZWN0KSkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKG9iamVjdCk7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gT2JqZWN0KG9iamVjdCkpIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIGtleSkgJiYga2V5ICE9ICdjb25zdHJ1Y3RvcicpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUtleXM7XG4iLCJ2YXIgYXJyYXlMaWtlS2V5cyA9IHJlcXVpcmUoJy4vX2FycmF5TGlrZUtleXMnKSxcbiAgICBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogICB0aGlzLmIgPSAyO1xuICogfVxuICpcbiAqIEZvby5wcm90b3R5cGUuYyA9IDM7XG4gKlxuICogXy5rZXlzKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InXSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICpcbiAqIF8ua2V5cygnaGknKTtcbiAqIC8vID0+IFsnMCcsICcxJ11cbiAqL1xuZnVuY3Rpb24ga2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGlzQXJyYXlMaWtlKG9iamVjdCkgPyBhcnJheUxpa2VLZXlzKG9iamVjdCkgOiBiYXNlS2V5cyhvYmplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXM7XG4iLCJ2YXIgYmFzZUZvciA9IHJlcXVpcmUoJy4vX2Jhc2VGb3InKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZm9yT3duYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZvck93bihvYmplY3QsIGl0ZXJhdGVlKSB7XG4gIHJldHVybiBvYmplY3QgJiYgYmFzZUZvcihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRm9yT3duO1xuIiwidmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBgYmFzZUVhY2hgIG9yIGBiYXNlRWFjaFJpZ2h0YCBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZWFjaEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3ZlciBhIGNvbGxlY3Rpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGJhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VFYWNoKGVhY2hGdW5jLCBmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gICAgaWYgKGNvbGxlY3Rpb24gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgfVxuICAgIGlmICghaXNBcnJheUxpa2UoY29sbGVjdGlvbikpIHtcbiAgICAgIHJldHVybiBlYWNoRnVuYyhjb2xsZWN0aW9uLCBpdGVyYXRlZSk7XG4gICAgfVxuICAgIHZhciBsZW5ndGggPSBjb2xsZWN0aW9uLmxlbmd0aCxcbiAgICAgICAgaW5kZXggPSBmcm9tUmlnaHQgPyBsZW5ndGggOiAtMSxcbiAgICAgICAgaXRlcmFibGUgPSBPYmplY3QoY29sbGVjdGlvbik7XG5cbiAgICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgICAgaWYgKGl0ZXJhdGVlKGl0ZXJhYmxlW2luZGV4XSwgaW5kZXgsIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJhc2VFYWNoO1xuIiwidmFyIGJhc2VGb3JPd24gPSByZXF1aXJlKCcuL19iYXNlRm9yT3duJyksXG4gICAgY3JlYXRlQmFzZUVhY2ggPSByZXF1aXJlKCcuL19jcmVhdGVCYXNlRWFjaCcpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvckVhY2hgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheXxPYmplY3R9IFJldHVybnMgYGNvbGxlY3Rpb25gLlxuICovXG52YXIgYmFzZUVhY2ggPSBjcmVhdGVCYXNlRWFjaChiYXNlRm9yT3duKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRWFjaDtcbiIsInZhciBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKTtcblxuLyoqXG4gKiBDYXN0cyBgdmFsdWVgIHRvIGBpZGVudGl0eWAgaWYgaXQncyBub3QgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBjYXN0IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjYXN0RnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nID8gdmFsdWUgOiBpZGVudGl0eTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXN0RnVuY3Rpb247XG4iLCJ2YXIgYXJyYXlFYWNoID0gcmVxdWlyZSgnLi9fYXJyYXlFYWNoJyksXG4gICAgYmFzZUVhY2ggPSByZXF1aXJlKCcuL19iYXNlRWFjaCcpLFxuICAgIGNhc3RGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2Nhc3RGdW5jdGlvbicpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBJdGVyYXRlcyBvdmVyIGVsZW1lbnRzIG9mIGBjb2xsZWN0aW9uYCBhbmQgaW52b2tlcyBgaXRlcmF0ZWVgIGZvciBlYWNoIGVsZW1lbnQuXG4gKiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIHRocmVlIGFyZ3VtZW50czogKHZhbHVlLCBpbmRleHxrZXksIGNvbGxlY3Rpb24pLlxuICogSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5IHJldHVybmluZyBgZmFsc2VgLlxuICpcbiAqICoqTm90ZToqKiBBcyB3aXRoIG90aGVyIFwiQ29sbGVjdGlvbnNcIiBtZXRob2RzLCBvYmplY3RzIHdpdGggYSBcImxlbmd0aFwiXG4gKiBwcm9wZXJ0eSBhcmUgaXRlcmF0ZWQgbGlrZSBhcnJheXMuIFRvIGF2b2lkIHRoaXMgYmVoYXZpb3IgdXNlIGBfLmZvckluYFxuICogb3IgYF8uZm9yT3duYCBmb3Igb2JqZWN0IGl0ZXJhdGlvbi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAYWxpYXMgZWFjaFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fE9iamVjdH0gUmV0dXJucyBgY29sbGVjdGlvbmAuXG4gKiBAc2VlIF8uZm9yRWFjaFJpZ2h0XG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZm9yRWFjaChbMSwgMl0sIGZ1bmN0aW9uKHZhbHVlKSB7XG4gKiAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAqIH0pO1xuICogLy8gPT4gTG9ncyBgMWAgdGhlbiBgMmAuXG4gKlxuICogXy5mb3JFYWNoKHsgJ2EnOiAxLCAnYic6IDIgfSwgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICogICBjb25zb2xlLmxvZyhrZXkpO1xuICogfSk7XG4gKiAvLyA9PiBMb2dzICdhJyB0aGVuICdiJyAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKS5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICB2YXIgZnVuYyA9IGlzQXJyYXkoY29sbGVjdGlvbikgPyBhcnJheUVhY2ggOiBiYXNlRWFjaDtcbiAgcmV0dXJuIGZ1bmMoY29sbGVjdGlvbiwgY2FzdEZ1bmN0aW9uKGl0ZXJhdGVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZm9yRWFjaDtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mb3JFYWNoJyk7XG4iLCJpbXBvcnQgeyBlYWNoIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHNpemUgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihWdWUsIG9wdGlvbnMpIHtcblxuICAgIFZ1ZS5wcm90b3R5cGUubWVyZ2VDbGFzc2VzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGNsYXNzZXMgPSB7fTtcblxuICAgICAgICBlYWNoKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSwgYXJnID0+IHtcbiAgICAgICAgICAgIGlmKGlzT2JqZWN0KGFyZykpIHtcbiAgICAgICAgICAgICAgICBleHRlbmQoY2xhc3NlcywgYXJnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoaXNBcnJheShhcmcpKSB7XG4gICAgICAgICAgICAgICAgbWVyZ2UoY2xhc3NlcywgYXJnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoYXJnKSB7XG4gICAgICAgICAgICAgICAgY2xhc3Nlc1thcmddID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgfTtcblxufVxuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ucmVkdWNlYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3JcbiAqIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFthcnJheV0gVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbml0QWNjdW1dIFNwZWNpZnkgdXNpbmcgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYGFycmF5YCBhc1xuICogIHRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBhcnJheVJlZHVjZShhcnJheSwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0pIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcblxuICBpZiAoaW5pdEFjY3VtICYmIGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gYXJyYXlbKytpbmRleF07XG4gIH1cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGl0ZXJhdGVlKGFjY3VtdWxhdG9yLCBhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gIH1cbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UmVkdWNlO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eU9mYCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHlPZihvYmplY3QpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGtleSkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eU9mO1xuIiwidmFyIGJhc2VQcm9wZXJ0eU9mID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5T2YnKTtcblxuLyoqIFVzZWQgdG8gbWFwIExhdGluIFVuaWNvZGUgbGV0dGVycyB0byBiYXNpYyBMYXRpbiBsZXR0ZXJzLiAqL1xudmFyIGRlYnVycmVkTGV0dGVycyA9IHtcbiAgLy8gTGF0aW4tMSBTdXBwbGVtZW50IGJsb2NrLlxuICAnXFx4YzAnOiAnQScsICAnXFx4YzEnOiAnQScsICdcXHhjMic6ICdBJywgJ1xceGMzJzogJ0EnLCAnXFx4YzQnOiAnQScsICdcXHhjNSc6ICdBJyxcbiAgJ1xceGUwJzogJ2EnLCAgJ1xceGUxJzogJ2EnLCAnXFx4ZTInOiAnYScsICdcXHhlMyc6ICdhJywgJ1xceGU0JzogJ2EnLCAnXFx4ZTUnOiAnYScsXG4gICdcXHhjNyc6ICdDJywgICdcXHhlNyc6ICdjJyxcbiAgJ1xceGQwJzogJ0QnLCAgJ1xceGYwJzogJ2QnLFxuICAnXFx4YzgnOiAnRScsICAnXFx4YzknOiAnRScsICdcXHhjYSc6ICdFJywgJ1xceGNiJzogJ0UnLFxuICAnXFx4ZTgnOiAnZScsICAnXFx4ZTknOiAnZScsICdcXHhlYSc6ICdlJywgJ1xceGViJzogJ2UnLFxuICAnXFx4Y2MnOiAnSScsICAnXFx4Y2QnOiAnSScsICdcXHhjZSc6ICdJJywgJ1xceGNmJzogJ0knLFxuICAnXFx4ZWMnOiAnaScsICAnXFx4ZWQnOiAnaScsICdcXHhlZSc6ICdpJywgJ1xceGVmJzogJ2knLFxuICAnXFx4ZDEnOiAnTicsICAnXFx4ZjEnOiAnbicsXG4gICdcXHhkMic6ICdPJywgICdcXHhkMyc6ICdPJywgJ1xceGQ0JzogJ08nLCAnXFx4ZDUnOiAnTycsICdcXHhkNic6ICdPJywgJ1xceGQ4JzogJ08nLFxuICAnXFx4ZjInOiAnbycsICAnXFx4ZjMnOiAnbycsICdcXHhmNCc6ICdvJywgJ1xceGY1JzogJ28nLCAnXFx4ZjYnOiAnbycsICdcXHhmOCc6ICdvJyxcbiAgJ1xceGQ5JzogJ1UnLCAgJ1xceGRhJzogJ1UnLCAnXFx4ZGInOiAnVScsICdcXHhkYyc6ICdVJyxcbiAgJ1xceGY5JzogJ3UnLCAgJ1xceGZhJzogJ3UnLCAnXFx4ZmInOiAndScsICdcXHhmYyc6ICd1JyxcbiAgJ1xceGRkJzogJ1knLCAgJ1xceGZkJzogJ3knLCAnXFx4ZmYnOiAneScsXG4gICdcXHhjNic6ICdBZScsICdcXHhlNic6ICdhZScsXG4gICdcXHhkZSc6ICdUaCcsICdcXHhmZSc6ICd0aCcsXG4gICdcXHhkZic6ICdzcycsXG4gIC8vIExhdGluIEV4dGVuZGVkLUEgYmxvY2suXG4gICdcXHUwMTAwJzogJ0EnLCAgJ1xcdTAxMDInOiAnQScsICdcXHUwMTA0JzogJ0EnLFxuICAnXFx1MDEwMSc6ICdhJywgICdcXHUwMTAzJzogJ2EnLCAnXFx1MDEwNSc6ICdhJyxcbiAgJ1xcdTAxMDYnOiAnQycsICAnXFx1MDEwOCc6ICdDJywgJ1xcdTAxMGEnOiAnQycsICdcXHUwMTBjJzogJ0MnLFxuICAnXFx1MDEwNyc6ICdjJywgICdcXHUwMTA5JzogJ2MnLCAnXFx1MDEwYic6ICdjJywgJ1xcdTAxMGQnOiAnYycsXG4gICdcXHUwMTBlJzogJ0QnLCAgJ1xcdTAxMTAnOiAnRCcsICdcXHUwMTBmJzogJ2QnLCAnXFx1MDExMSc6ICdkJyxcbiAgJ1xcdTAxMTInOiAnRScsICAnXFx1MDExNCc6ICdFJywgJ1xcdTAxMTYnOiAnRScsICdcXHUwMTE4JzogJ0UnLCAnXFx1MDExYSc6ICdFJyxcbiAgJ1xcdTAxMTMnOiAnZScsICAnXFx1MDExNSc6ICdlJywgJ1xcdTAxMTcnOiAnZScsICdcXHUwMTE5JzogJ2UnLCAnXFx1MDExYic6ICdlJyxcbiAgJ1xcdTAxMWMnOiAnRycsICAnXFx1MDExZSc6ICdHJywgJ1xcdTAxMjAnOiAnRycsICdcXHUwMTIyJzogJ0cnLFxuICAnXFx1MDExZCc6ICdnJywgICdcXHUwMTFmJzogJ2cnLCAnXFx1MDEyMSc6ICdnJywgJ1xcdTAxMjMnOiAnZycsXG4gICdcXHUwMTI0JzogJ0gnLCAgJ1xcdTAxMjYnOiAnSCcsICdcXHUwMTI1JzogJ2gnLCAnXFx1MDEyNyc6ICdoJyxcbiAgJ1xcdTAxMjgnOiAnSScsICAnXFx1MDEyYSc6ICdJJywgJ1xcdTAxMmMnOiAnSScsICdcXHUwMTJlJzogJ0knLCAnXFx1MDEzMCc6ICdJJyxcbiAgJ1xcdTAxMjknOiAnaScsICAnXFx1MDEyYic6ICdpJywgJ1xcdTAxMmQnOiAnaScsICdcXHUwMTJmJzogJ2knLCAnXFx1MDEzMSc6ICdpJyxcbiAgJ1xcdTAxMzQnOiAnSicsICAnXFx1MDEzNSc6ICdqJyxcbiAgJ1xcdTAxMzYnOiAnSycsICAnXFx1MDEzNyc6ICdrJywgJ1xcdTAxMzgnOiAnaycsXG4gICdcXHUwMTM5JzogJ0wnLCAgJ1xcdTAxM2InOiAnTCcsICdcXHUwMTNkJzogJ0wnLCAnXFx1MDEzZic6ICdMJywgJ1xcdTAxNDEnOiAnTCcsXG4gICdcXHUwMTNhJzogJ2wnLCAgJ1xcdTAxM2MnOiAnbCcsICdcXHUwMTNlJzogJ2wnLCAnXFx1MDE0MCc6ICdsJywgJ1xcdTAxNDInOiAnbCcsXG4gICdcXHUwMTQzJzogJ04nLCAgJ1xcdTAxNDUnOiAnTicsICdcXHUwMTQ3JzogJ04nLCAnXFx1MDE0YSc6ICdOJyxcbiAgJ1xcdTAxNDQnOiAnbicsICAnXFx1MDE0Nic6ICduJywgJ1xcdTAxNDgnOiAnbicsICdcXHUwMTRiJzogJ24nLFxuICAnXFx1MDE0Yyc6ICdPJywgICdcXHUwMTRlJzogJ08nLCAnXFx1MDE1MCc6ICdPJyxcbiAgJ1xcdTAxNGQnOiAnbycsICAnXFx1MDE0Zic6ICdvJywgJ1xcdTAxNTEnOiAnbycsXG4gICdcXHUwMTU0JzogJ1InLCAgJ1xcdTAxNTYnOiAnUicsICdcXHUwMTU4JzogJ1InLFxuICAnXFx1MDE1NSc6ICdyJywgICdcXHUwMTU3JzogJ3InLCAnXFx1MDE1OSc6ICdyJyxcbiAgJ1xcdTAxNWEnOiAnUycsICAnXFx1MDE1Yyc6ICdTJywgJ1xcdTAxNWUnOiAnUycsICdcXHUwMTYwJzogJ1MnLFxuICAnXFx1MDE1Yic6ICdzJywgICdcXHUwMTVkJzogJ3MnLCAnXFx1MDE1Zic6ICdzJywgJ1xcdTAxNjEnOiAncycsXG4gICdcXHUwMTYyJzogJ1QnLCAgJ1xcdTAxNjQnOiAnVCcsICdcXHUwMTY2JzogJ1QnLFxuICAnXFx1MDE2Myc6ICd0JywgICdcXHUwMTY1JzogJ3QnLCAnXFx1MDE2Nyc6ICd0JyxcbiAgJ1xcdTAxNjgnOiAnVScsICAnXFx1MDE2YSc6ICdVJywgJ1xcdTAxNmMnOiAnVScsICdcXHUwMTZlJzogJ1UnLCAnXFx1MDE3MCc6ICdVJywgJ1xcdTAxNzInOiAnVScsXG4gICdcXHUwMTY5JzogJ3UnLCAgJ1xcdTAxNmInOiAndScsICdcXHUwMTZkJzogJ3UnLCAnXFx1MDE2Zic6ICd1JywgJ1xcdTAxNzEnOiAndScsICdcXHUwMTczJzogJ3UnLFxuICAnXFx1MDE3NCc6ICdXJywgICdcXHUwMTc1JzogJ3cnLFxuICAnXFx1MDE3Nic6ICdZJywgICdcXHUwMTc3JzogJ3knLCAnXFx1MDE3OCc6ICdZJyxcbiAgJ1xcdTAxNzknOiAnWicsICAnXFx1MDE3Yic6ICdaJywgJ1xcdTAxN2QnOiAnWicsXG4gICdcXHUwMTdhJzogJ3onLCAgJ1xcdTAxN2MnOiAneicsICdcXHUwMTdlJzogJ3onLFxuICAnXFx1MDEzMic6ICdJSicsICdcXHUwMTMzJzogJ2lqJyxcbiAgJ1xcdTAxNTInOiAnT2UnLCAnXFx1MDE1Myc6ICdvZScsXG4gICdcXHUwMTQ5JzogXCInblwiLCAnXFx1MDE3Zic6ICdzJ1xufTtcblxuLyoqXG4gKiBVc2VkIGJ5IGBfLmRlYnVycmAgdG8gY29udmVydCBMYXRpbi0xIFN1cHBsZW1lbnQgYW5kIExhdGluIEV4dGVuZGVkLUFcbiAqIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGxldHRlciBUaGUgbWF0Y2hlZCBsZXR0ZXIgdG8gZGVidXJyLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgZGVidXJyZWQgbGV0dGVyLlxuICovXG52YXIgZGVidXJyTGV0dGVyID0gYmFzZVByb3BlcnR5T2YoZGVidXJyZWRMZXR0ZXJzKTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWJ1cnJMZXR0ZXI7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TWFwO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB2YWx1ZXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIGJhc2VUb1N0cmluZykgKyAnJztcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VUb1N0cmluZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9TdHJpbmc7XG4iLCJ2YXIgZGVidXJyTGV0dGVyID0gcmVxdWlyZSgnLi9fZGVidXJyTGV0dGVyJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIExhdGluIFVuaWNvZGUgbGV0dGVycyAoZXhjbHVkaW5nIG1hdGhlbWF0aWNhbCBvcGVyYXRvcnMpLiAqL1xudmFyIHJlTGF0aW4gPSAvW1xceGMwLVxceGQ2XFx4ZDgtXFx4ZjZcXHhmOC1cXHhmZlxcdTAxMDAtXFx1MDE3Zl0vZztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQ29tYm8gPSAnWycgKyByc0NvbWJvUmFuZ2UgKyAnXSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBbY29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db21iaW5pbmdfRGlhY3JpdGljYWxfTWFya3MpIGFuZFxuICogW2NvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrcyBmb3Igc3ltYm9sc10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29tYmluaW5nX0RpYWNyaXRpY2FsX01hcmtzX2Zvcl9TeW1ib2xzKS5cbiAqL1xudmFyIHJlQ29tYm9NYXJrID0gUmVnRXhwKHJzQ29tYm8sICdnJyk7XG5cbi8qKlxuICogRGVidXJycyBgc3RyaW5nYCBieSBjb252ZXJ0aW5nXG4gKiBbTGF0aW4tMSBTdXBwbGVtZW50XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MYXRpbi0xX1N1cHBsZW1lbnRfKFVuaWNvZGVfYmxvY2spI0NoYXJhY3Rlcl90YWJsZSlcbiAqIGFuZCBbTGF0aW4gRXh0ZW5kZWQtQV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGF0aW5fRXh0ZW5kZWQtQSlcbiAqIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycyBhbmQgcmVtb3ZpbmdcbiAqIFtjb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3NdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmluZ19EaWFjcml0aWNhbF9NYXJrcykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gZGVidXJyLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgZGVidXJyZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlYnVycignZMOpasOgIHZ1Jyk7XG4gKiAvLyA9PiAnZGVqYSB2dSdcbiAqL1xuZnVuY3Rpb24gZGVidXJyKHN0cmluZykge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuICByZXR1cm4gc3RyaW5nICYmIHN0cmluZy5yZXBsYWNlKHJlTGF0aW4sIGRlYnVyckxldHRlcikucmVwbGFjZShyZUNvbWJvTWFyaywgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYnVycjtcbiIsIi8qKiBVc2VkIHRvIG1hdGNoIHdvcmRzIGNvbXBvc2VkIG9mIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLiAqL1xudmFyIHJlQXNjaWlXb3JkID0gL1teXFx4MDAtXFx4MmZcXHgzYS1cXHg0MFxceDViLVxceDYwXFx4N2ItXFx4N2ZdKy9nO1xuXG4vKipcbiAqIFNwbGl0cyBhbiBBU0NJSSBgc3RyaW5nYCBpbnRvIGFuIGFycmF5IG9mIGl0cyB3b3Jkcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKi9cbmZ1bmN0aW9uIGFzY2lpV29yZHMoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocmVBc2NpaVdvcmQpIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzY2lpV29yZHM7XG4iLCIvKiogVXNlZCB0byBkZXRlY3Qgc3RyaW5ncyB0aGF0IG5lZWQgYSBtb3JlIHJvYnVzdCByZWdleHAgdG8gbWF0Y2ggd29yZHMuICovXG52YXIgcmVIYXNVbmljb2RlV29yZCA9IC9bYS16XVtBLVpdfFtBLVpdezIsfVthLXpdfFswLTldW2EtekEtWl18W2EtekEtWl1bMC05XXxbXmEtekEtWjAtOSBdLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHN0cmluZ2AgY29udGFpbnMgYSB3b3JkIGNvbXBvc2VkIG9mIFVuaWNvZGUgc3ltYm9scy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYSB3b3JkIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1VuaWNvZGVXb3JkKHN0cmluZykge1xuICByZXR1cm4gcmVIYXNVbmljb2RlV29yZC50ZXN0KHN0cmluZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzVW5pY29kZVdvcmQ7XG4iLCIvKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNBc3RyYWxSYW5nZSA9ICdcXFxcdWQ4MDAtXFxcXHVkZmZmJyxcbiAgICByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmJyxcbiAgICByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgPSAnXFxcXHVmZTIwLVxcXFx1ZmUyZicsXG4gICAgcnNDb21ib1N5bWJvbHNSYW5nZSA9ICdcXFxcdTIwZDAtXFxcXHUyMGZmJyxcbiAgICByc0NvbWJvUmFuZ2UgPSByc0NvbWJvTWFya3NSYW5nZSArIHJlQ29tYm9IYWxmTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UsXG4gICAgcnNEaW5nYmF0UmFuZ2UgPSAnXFxcXHUyNzAwLVxcXFx1MjdiZicsXG4gICAgcnNMb3dlclJhbmdlID0gJ2EtelxcXFx4ZGYtXFxcXHhmNlxcXFx4ZjgtXFxcXHhmZicsXG4gICAgcnNNYXRoT3BSYW5nZSA9ICdcXFxceGFjXFxcXHhiMVxcXFx4ZDdcXFxceGY3JyxcbiAgICByc05vbkNoYXJSYW5nZSA9ICdcXFxceDAwLVxcXFx4MmZcXFxceDNhLVxcXFx4NDBcXFxceDViLVxcXFx4NjBcXFxceDdiLVxcXFx4YmYnLFxuICAgIHJzUHVuY3R1YXRpb25SYW5nZSA9ICdcXFxcdTIwMDAtXFxcXHUyMDZmJyxcbiAgICByc1NwYWNlUmFuZ2UgPSAnIFxcXFx0XFxcXHgwYlxcXFxmXFxcXHhhMFxcXFx1ZmVmZlxcXFxuXFxcXHJcXFxcdTIwMjhcXFxcdTIwMjlcXFxcdTE2ODBcXFxcdTE4MGVcXFxcdTIwMDBcXFxcdTIwMDFcXFxcdTIwMDJcXFxcdTIwMDNcXFxcdTIwMDRcXFxcdTIwMDVcXFxcdTIwMDZcXFxcdTIwMDdcXFxcdTIwMDhcXFxcdTIwMDlcXFxcdTIwMGFcXFxcdTIwMmZcXFxcdTIwNWZcXFxcdTMwMDAnLFxuICAgIHJzVXBwZXJSYW5nZSA9ICdBLVpcXFxceGMwLVxcXFx4ZDZcXFxceGQ4LVxcXFx4ZGUnLFxuICAgIHJzVmFyUmFuZ2UgPSAnXFxcXHVmZTBlXFxcXHVmZTBmJyxcbiAgICByc0JyZWFrUmFuZ2UgPSByc01hdGhPcFJhbmdlICsgcnNOb25DaGFyUmFuZ2UgKyByc1B1bmN0dWF0aW9uUmFuZ2UgKyByc1NwYWNlUmFuZ2U7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0Fwb3MgPSBcIlsnXFx1MjAxOV1cIixcbiAgICByc0JyZWFrID0gJ1snICsgcnNCcmVha1JhbmdlICsgJ10nLFxuICAgIHJzQ29tYm8gPSAnWycgKyByc0NvbWJvUmFuZ2UgKyAnXScsXG4gICAgcnNEaWdpdHMgPSAnXFxcXGQrJyxcbiAgICByc0RpbmdiYXQgPSAnWycgKyByc0RpbmdiYXRSYW5nZSArICddJyxcbiAgICByc0xvd2VyID0gJ1snICsgcnNMb3dlclJhbmdlICsgJ10nLFxuICAgIHJzTWlzYyA9ICdbXicgKyByc0FzdHJhbFJhbmdlICsgcnNCcmVha1JhbmdlICsgcnNEaWdpdHMgKyByc0RpbmdiYXRSYW5nZSArIHJzTG93ZXJSYW5nZSArIHJzVXBwZXJSYW5nZSArICddJyxcbiAgICByc0ZpdHogPSAnXFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdJyxcbiAgICByc01vZGlmaWVyID0gJyg/OicgKyByc0NvbWJvICsgJ3wnICsgcnNGaXR6ICsgJyknLFxuICAgIHJzTm9uQXN0cmFsID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNSZWdpb25hbCA9ICcoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9JyxcbiAgICByc1N1cnJQYWlyID0gJ1tcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXScsXG4gICAgcnNVcHBlciA9ICdbJyArIHJzVXBwZXJSYW5nZSArICddJyxcbiAgICByc1pXSiA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgcmVnZXhlcy4gKi9cbnZhciByc01pc2NMb3dlciA9ICcoPzonICsgcnNMb3dlciArICd8JyArIHJzTWlzYyArICcpJyxcbiAgICByc01pc2NVcHBlciA9ICcoPzonICsgcnNVcHBlciArICd8JyArIHJzTWlzYyArICcpJyxcbiAgICByc09wdENvbnRyTG93ZXIgPSAnKD86JyArIHJzQXBvcyArICcoPzpkfGxsfG18cmV8c3x0fHZlKSk/JyxcbiAgICByc09wdENvbnRyVXBwZXIgPSAnKD86JyArIHJzQXBvcyArICcoPzpEfExMfE18UkV8U3xUfFZFKSk/JyxcbiAgICByZU9wdE1vZCA9IHJzTW9kaWZpZXIgKyAnPycsXG4gICAgcnNPcHRWYXIgPSAnWycgKyByc1ZhclJhbmdlICsgJ10/JyxcbiAgICByc09wdEpvaW4gPSAnKD86JyArIHJzWldKICsgJyg/OicgKyBbcnNOb25Bc3RyYWwsIHJzUmVnaW9uYWwsIHJzU3VyclBhaXJdLmpvaW4oJ3wnKSArICcpJyArIHJzT3B0VmFyICsgcmVPcHRNb2QgKyAnKSonLFxuICAgIHJzT3JkTG93ZXIgPSAnXFxcXGQqKD86MXN0fDJuZHwzcmR8KD8hWzEyM10pXFxcXGR0aCkoPz1cXFxcYnxbQS1aX10pJyxcbiAgICByc09yZFVwcGVyID0gJ1xcXFxkKig/OjFTVHwyTkR8M1JEfCg/IVsxMjNdKVxcXFxkVEgpKD89XFxcXGJ8W2Etel9dKScsXG4gICAgcnNTZXEgPSByc09wdFZhciArIHJlT3B0TW9kICsgcnNPcHRKb2luLFxuICAgIHJzRW1vamkgPSAnKD86JyArIFtyc0RpbmdiYXQsIHJzUmVnaW9uYWwsIHJzU3VyclBhaXJdLmpvaW4oJ3wnKSArICcpJyArIHJzU2VxO1xuXG4vKiogVXNlZCB0byBtYXRjaCBjb21wbGV4IG9yIGNvbXBvdW5kIHdvcmRzLiAqL1xudmFyIHJlVW5pY29kZVdvcmQgPSBSZWdFeHAoW1xuICByc1VwcGVyICsgJz8nICsgcnNMb3dlciArICcrJyArIHJzT3B0Q29udHJMb3dlciArICcoPz0nICsgW3JzQnJlYWssIHJzVXBwZXIsICckJ10uam9pbignfCcpICsgJyknLFxuICByc01pc2NVcHBlciArICcrJyArIHJzT3B0Q29udHJVcHBlciArICcoPz0nICsgW3JzQnJlYWssIHJzVXBwZXIgKyByc01pc2NMb3dlciwgJyQnXS5qb2luKCd8JykgKyAnKScsXG4gIHJzVXBwZXIgKyAnPycgKyByc01pc2NMb3dlciArICcrJyArIHJzT3B0Q29udHJMb3dlcixcbiAgcnNVcHBlciArICcrJyArIHJzT3B0Q29udHJVcHBlcixcbiAgcnNPcmRVcHBlcixcbiAgcnNPcmRMb3dlcixcbiAgcnNEaWdpdHMsXG4gIHJzRW1vamlcbl0uam9pbignfCcpLCAnZycpO1xuXG4vKipcbiAqIFNwbGl0cyBhIFVuaWNvZGUgYHN0cmluZ2AgaW50byBhbiBhcnJheSBvZiBpdHMgd29yZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHdvcmRzIG9mIGBzdHJpbmdgLlxuICovXG5mdW5jdGlvbiB1bmljb2RlV29yZHMoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocmVVbmljb2RlV29yZCkgfHwgW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pY29kZVdvcmRzO1xuIiwidmFyIGFzY2lpV29yZHMgPSByZXF1aXJlKCcuL19hc2NpaVdvcmRzJyksXG4gICAgaGFzVW5pY29kZVdvcmQgPSByZXF1aXJlKCcuL19oYXNVbmljb2RlV29yZCcpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpLFxuICAgIHVuaWNvZGVXb3JkcyA9IHJlcXVpcmUoJy4vX3VuaWNvZGVXb3JkcycpO1xuXG4vKipcbiAqIFNwbGl0cyBgc3RyaW5nYCBpbnRvIGFuIGFycmF5IG9mIGl0cyB3b3Jkcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtSZWdFeHB8c3RyaW5nfSBbcGF0dGVybl0gVGhlIHBhdHRlcm4gdG8gbWF0Y2ggd29yZHMuXG4gKiBAcGFyYW0tIHtPYmplY3R9IFtndWFyZF0gRW5hYmxlcyB1c2UgYXMgYW4gaXRlcmF0ZWUgZm9yIG1ldGhvZHMgbGlrZSBgXy5tYXBgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB3b3JkcyBvZiBgc3RyaW5nYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy53b3JkcygnZnJlZCwgYmFybmV5LCAmIHBlYmJsZXMnKTtcbiAqIC8vID0+IFsnZnJlZCcsICdiYXJuZXknLCAncGViYmxlcyddXG4gKlxuICogXy53b3JkcygnZnJlZCwgYmFybmV5LCAmIHBlYmJsZXMnLCAvW14sIF0rL2cpO1xuICogLy8gPT4gWydmcmVkJywgJ2Jhcm5leScsICcmJywgJ3BlYmJsZXMnXVxuICovXG5mdW5jdGlvbiB3b3JkcyhzdHJpbmcsIHBhdHRlcm4sIGd1YXJkKSB7XG4gIHN0cmluZyA9IHRvU3RyaW5nKHN0cmluZyk7XG4gIHBhdHRlcm4gPSBndWFyZCA/IHVuZGVmaW5lZCA6IHBhdHRlcm47XG5cbiAgaWYgKHBhdHRlcm4gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBoYXNVbmljb2RlV29yZChzdHJpbmcpID8gdW5pY29kZVdvcmRzKHN0cmluZykgOiBhc2NpaVdvcmRzKHN0cmluZyk7XG4gIH1cbiAgcmV0dXJuIHN0cmluZy5tYXRjaChwYXR0ZXJuKSB8fCBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3b3JkcztcbiIsInZhciBhcnJheVJlZHVjZSA9IHJlcXVpcmUoJy4vX2FycmF5UmVkdWNlJyksXG4gICAgZGVidXJyID0gcmVxdWlyZSgnLi9kZWJ1cnInKSxcbiAgICB3b3JkcyA9IHJlcXVpcmUoJy4vd29yZHMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQXBvcyA9IFwiWydcXHUyMDE5XVwiO1xuXG4vKiogVXNlZCB0byBtYXRjaCBhcG9zdHJvcGhlcy4gKi9cbnZhciByZUFwb3MgPSBSZWdFeHAocnNBcG9zLCAnZycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmNhbWVsQ2FzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0byBjb21iaW5lIGVhY2ggd29yZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNvbXBvdW5kZXIgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNvbXBvdW5kZXIoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHN0cmluZykge1xuICAgIHJldHVybiBhcnJheVJlZHVjZSh3b3JkcyhkZWJ1cnIoc3RyaW5nKS5yZXBsYWNlKHJlQXBvcywgJycpKSwgY2FsbGJhY2ssICcnKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVDb21wb3VuZGVyO1xuIiwidmFyIGNyZWF0ZUNvbXBvdW5kZXIgPSByZXF1aXJlKCcuL19jcmVhdGVDb21wb3VuZGVyJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG9cbiAqIFtrZWJhYiBjYXNlXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MZXR0ZXJfY2FzZSNTcGVjaWFsX2Nhc2Vfc3R5bGVzKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUga2ViYWIgY2FzZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmtlYmFiQ2FzZSgnRm9vIEJhcicpO1xuICogLy8gPT4gJ2Zvby1iYXInXG4gKlxuICogXy5rZWJhYkNhc2UoJ2Zvb0JhcicpO1xuICogLy8gPT4gJ2Zvby1iYXInXG4gKlxuICogXy5rZWJhYkNhc2UoJ19fRk9PX0JBUl9fJyk7XG4gKiAvLyA9PiAnZm9vLWJhcidcbiAqL1xudmFyIGtlYmFiQ2FzZSA9IGNyZWF0ZUNvbXBvdW5kZXIoZnVuY3Rpb24ocmVzdWx0LCB3b3JkLCBpbmRleCkge1xuICByZXR1cm4gcmVzdWx0ICsgKGluZGV4ID8gJy0nIDogJycpICsgd29yZC50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0ga2ViYWJDYXNlO1xuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJhY3Rpdml0eS1pbmRpY2F0b3JcIiA6Y2xhc3M9XCJjbGFzc2VzXCI+XG4gICAgICAgIDxkaXYgdi1mb3I9XCJpIGluIG5vZGVzXCI+PC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgbm9kZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDNcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZml4OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnYWN0aXZpdHktaW5kaWNhdG9yLSdcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBjbGFzc2VzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSB7fTtcblxuICAgICAgICAgICAgY2xhc3Nlc1t0aGlzLiRvcHRpb25zLm5hbWVdID0gISF0aGlzLiRvcHRpb25zLm5hbWU7XG4gICAgICAgICAgICBjbGFzc2VzW3RoaXMucHJlZml4ICsgdGhpcy5zaXplLnJlcGxhY2UodGhpcy5wcmVmaXgsICcnKV0gPSAhIXRoaXMuc2l6ZTtcblxuICAgICAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbjwvc2NyaXB0PlxuIiwiPHNjcmlwdD5cbmltcG9ydCBCYXNlVHlwZSBmcm9tICcuL0Jhc2VUeXBlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2FjdGl2aXR5LWluZGljYXRvci1kb3RzJyxcblxuICAgIGV4dGVuZHM6IEJhc2VUeXBlXG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5AaW1wb3J0ICcuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9ib290c3RyYXAuc2Nzcyc7XG5cbiRhY3Rpdml0eS1pbmRpY2F0b3ItZG90LXNpemU6IC42cmVtO1xuXG4uYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMge1xuXG4gICAgJiA+IGRpdiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktOTAwO1xuICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1kb3Qtc2l6ZTtcbiAgICAgICAgaGVpZ2h0OiAkYWN0aXZpdHktaW5kaWNhdG9yLWRvdC1zaXplO1xuICAgICAgICBhbmltYXRpb246IGFjdGl2aXR5LWluZGljYXRvci1kb3RzIDEuNHMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcbiAgICB9XG5cbiAgICAmID4gZGl2Om5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRhY3Rpdml0eS1pbmRpY2F0b3ItZG90LXNpemUgKiAuMzM7XG4gICAgfVxuXG4gICAgJi5hY3Rpdml0eS1pbmRpY2F0b3IteHMgPiBkaXYge1xuICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1kb3Qtc2l6ZSAqIC41O1xuICAgICAgICBoZWlnaHQ6ICRhY3Rpdml0eS1pbmRpY2F0b3ItZG90LXNpemUgKiAuNTtcbiAgICB9XG5cbiAgICAmLmFjdGl2aXR5LWluZGljYXRvci1zbSA+IGRpdiB7XG4gICAgICAgIHdpZHRoOiAkYWN0aXZpdHktaW5kaWNhdG9yLWRvdC1zaXplICogLjc1O1xuICAgICAgICBoZWlnaHQ6ICRhY3Rpdml0eS1pbmRpY2F0b3ItZG90LXNpemUgKiAuNzU7XG4gICAgfVxuXG4gICAgJi5hY3Rpdml0eS1pbmRpY2F0b3ItbWQgPiBkaXYge1xuICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1kb3Qtc2l6ZSAqIDE7XG4gICAgICAgIGhlaWdodDogJGFjdGl2aXR5LWluZGljYXRvci1kb3Qtc2l6ZSAqIDE7XG4gICAgfVxuXG4gICAgJi5hY3Rpdml0eS1pbmRpY2F0b3ItbGcgPiBkaXYge1xuICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1kb3Qtc2l6ZSAqIDEuNTtcbiAgICAgICAgaGVpZ2h0OiAkYWN0aXZpdHktaW5kaWNhdG9yLWRvdC1zaXplICogMS41O1xuICAgIH1cblxuICAgICYuYWN0aXZpdHktaW5kaWNhdG9yLXhsID4gZGl2IHtcbiAgICAgICAgd2lkdGg6ICRhY3Rpdml0eS1pbmRpY2F0b3ItZG90LXNpemUgKiAyO1xuICAgICAgICBoZWlnaHQ6ICRhY3Rpdml0eS1pbmRpY2F0b3ItZG90LXNpemUgKiAyO1xuICAgIH1cblxuICAgIEBmb3IgJGkgZnJvbSAwIHRocm91Z2ggMTIge1xuICAgICAgICAmID4gZGl2Om50aC1jaGlsZCgjeyRpICsgMX0pIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogJGkgKiAuMTZzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBhY3Rpdml0eS1pbmRpY2F0b3ItZG90cyB7XG4gICAgICAgIDAlLCA4MCUsIDEwMCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgfSA0MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYnRuLWFjdGl2aXR5LWluZGljYXRvci1kb3RzIHtcbiAgICAmOm5vdCguYnRuLXdhcm5pbmcpIC5hY3Rpdml0eS1pbmRpY2F0b3ItZG90cyA+IGRpdiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIH1cbn1cblxuPC9zdHlsZT5cbiIsIjxzY3JpcHQ+XG5pbXBvcnQgQmFzZVR5cGUgZnJvbSAnLi9CYXNlVHlwZSc7XG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXInLFxuXG4gICAgZXh0ZW5kczogQmFzZVR5cGUsXG5cbiAgICBwcm9wczogZXh0ZW5kKHt9LCBCYXNlVHlwZS5wcm9wcywge1xuICAgICAgICBub2Rlczoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogMTJcbiAgICAgICAgfVxuICAgIH0pXG59XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5AaW1wb3J0ICcuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9ib290c3RyYXAuc2Nzcyc7XG5cbiRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAyLjI1O1xuJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXdpZHRoOiAxMCU7XG4kYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItaGVpZ2h0OiAzMCU7XG4kYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItZGVsYXk6IDFzO1xuXG5AbWl4aW4gc3Bpbm5lci1yb3RhdGUtc2VsZWN0b3JzKCRzdGFydDoxLCAkZW5kOjE2LCAkZGVsYXk6MS4ycykge1xuICAgIEBmb3IgJGkgZnJvbSAkc3RhcnQgdGhyb3VnaCAkZW5kIHtcbiAgICAgICAgJiA+IGRpdjpmaXJzdC1jaGlsZDpudGgtbGFzdC1jaGlsZCgjeyRpfSksXG4gICAgICAgICYgPiBkaXY6Zmlyc3QtY2hpbGQ6bnRoLWxhc3QtY2hpbGQoI3skaX0pIH4gZGl2IHtcbiAgICAgICAgICAgIEBpbmNsdWRlIHNwaW5uZXItcm90YXRlLXRyYW5zZm9ybSgkaSwgJGRlbGF5KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHNwaW5uZXItcm90YXRlLXRyYW5zZm9ybSgkdG90YWwsICRkZWxheToxLjJzKSB7XG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkdG90YWwge1xuICAgICAgICAmOm50aC1jaGlsZCgjeyRpfSkge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoI3szNjAgLyAkdG90YWwgKiAkaX1kZWcpO1xuXG4gICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtI3skZGVsYXkgLSAoJGRlbGF5IC8gJHRvdGFsICogKCRpIC0gMSkpfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1zaXplO1xuICAgIGhlaWdodDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXNpemU7XG5cbiAgICAmID4gZGl2ICB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LTkwMDtcbiAgICAgICAgICAgIHdpZHRoOiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItd2lkdGg7XG4gICAgICAgICAgICBoZWlnaHQ6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1oZWlnaHQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBhbmltYXRpb246IGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1kZWxheSBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5hY3Rpdml0eS1pbmRpY2F0b3IteHMge1xuICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXNpemUgKiAuNTtcbiAgICAgICAgaGVpZ2h0OiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItc2l6ZSAqIC41O1xuICAgIH1cbiAgICAmLmFjdGl2aXR5LWluZGljYXRvci1zbSB7XG4gICAgICAgIHdpZHRoOiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItc2l6ZSAqIC43NTtcbiAgICAgICAgaGVpZ2h0OiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItc2l6ZSAqIC43NTtcbiAgICB9XG4gICAgJi5hY3Rpdml0eS1pbmRpY2F0b3ItbWQge1xuICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXNpemUgKiAxO1xuICAgICAgICBoZWlnaHQ6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1zaXplICogMTtcbiAgICB9XG4gICAgJi5hY3Rpdml0eS1pbmRpY2F0b3ItbGcge1xuICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXNpemUgKiAxLjU7XG4gICAgICAgIGhlaWdodDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXNpemUgKiAxLjU7XG4gICAgfVxuICAgICYuYWN0aXZpdHktaW5kaWNhdG9yLXhsIHtcbiAgICAgICAgd2lkdGg6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1zaXplICogMjtcbiAgICAgICAgaGVpZ2h0OiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItc2l6ZSAqIDI7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgc3Bpbm5lci1yb3RhdGUtc2VsZWN0b3JzKDEsIDEyLCAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItZGVsYXkpO1xuXG4gICAgQGtleWZyYW1lcyBhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciB7XG4gICAgICAgIDAlLCAzOSUsIDEwMCUgeyBvcGFjaXR5OiAwOyB9XG4gICAgICAgIDQwJSB7IG9wYWNpdHk6IDE7IH1cbiAgICB9XG59XG5cbi5idG4tYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXIge1xuICAgICY6bm90KC5idG4td2FybmluZykgLmFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyID4gZGl2OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cbn1cblxuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IHYtaWY9XCJjZW50ZXJcIiBjbGFzcz1cImNlbnRlci13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXItY29udGVudFwiPlxuICAgICAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJjb21wb25lbnRcIiA6c2l6ZT1cInNpemVcIiA6cHJlZml4PVwicHJlZml4XCI+PC9jb21wb25lbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxjb21wb25lbnQgdi1lbHNlIDppcz1cImNvbXBvbmVudFwiIDpzaXplPVwic2l6ZVwiICA6cHJlZml4PVwicHJlZml4XCI+PC9jb21wb25lbnQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGtlYmFiQ2FzZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgQmFzZVR5cGUgZnJvbSAnLi9UeXBlcy9CYXNlVHlwZSc7XG5pbXBvcnQgQWN0aXZpdHlJbmRpY2F0b3JEb3RzIGZyb20gJy4vVHlwZXMvRG90cyc7XG5pbXBvcnQgQWN0aXZpdHlJbmRpY2F0b3JTcGlubmVyIGZyb20gJy4vVHlwZXMvU3Bpbm5lcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdhY3Rpdml0eS1pbmRpY2F0b3InLFxuXG4gICAgZXh0ZW5kczogQmFzZVR5cGUsXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIGNlbnRlcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2RvdHMnXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEFjdGl2aXR5SW5kaWNhdG9yRG90cyxcbiAgICAgICAgQWN0aXZpdHlJbmRpY2F0b3JTcGlubmVyXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGNvbXBvbmVudDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4ga2ViYWJDYXNlKHRoaXMucHJlZml4ICsgdGhpcy50eXBlLnJlcGxhY2UodGhpcy5wcmVmaXgsICcnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbkBpbXBvcnQgJy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Jvb3RzdHJhcC5zY3NzJztcblxuLy8gQWN0aXZpdHlJbmRpY2F0b3JzIE1peGluc1xuXG5AbWl4aW4gc3Bpbm5lci1jb2xvcigkY29sb3IpIHtcblxufVxuXG5Aa2V5ZnJhbWVzIGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAwJSwgMzklLCAxMDAlIHsgb3BhY2l0eTogMDsgfVxuICAgIDQwJSB7IG9wYWNpdHk6IDE7IH1cbn1cblxuLy8gQ29udGVudCBQb3NpdGlvbmluZyBIZWxwZXJzXG4uY2VudGVyLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uY2VudGVyLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpXG59XG5cbjwvc3R5bGU+XG4iLCJpbXBvcnQgeyBlYWNoIH0gZnJvbSAnbG9kYXNoJztcblxuY29uc3QgVnVlSW5zdGFsbGVyID0ge1xuICAgIHVzZSxcbiAgICBwbHVnaW4sXG4gICAgcGx1Z2lucyxcbiAgICBjb21wb25lbnQsXG4gICAgY29tcG9uZW50cyxcbiAgICBkaXJlY3RpdmUsXG4gICAgZGlyZWN0aXZlcyxcbiAgICAkcGx1Z2luczoge30sXG4gICAgJGRpcmVjdGl2ZXM6IHt9LFxuICAgICRjb21wb25lbnRzOiB7fSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2UocGx1Z2luKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5WdWUpIHtcbiAgICAgICAgd2luZG93LlZ1ZS51c2UocGx1Z2luKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGx1Z2luO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGx1Z2luKFZ1ZSwgbmFtZSwgZGVmKSB7XG4gICAgaWYoIVZ1ZUluc3RhbGxlci4kcGx1Z2luc1tuYW1lXSkge1xuICAgICAgICBWdWUudXNlKFZ1ZUluc3RhbGxlci4kcGx1Z2luc1tuYW1lXSA9IGRlZik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGx1Z2lucyhWdWUsIHBsdWdpbnMpIHtcbiAgICBlYWNoKHBsdWdpbnMsIChkZWYsIG5hbWUpID0+IHtcbiAgICAgICAgcGx1Z2luKFZ1ZSwgbmFtZSwgZGVmKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudChWdWUsIG5hbWUsIGRlZikge1xuICAgIGlmKCFWdWVJbnN0YWxsZXIuJGNvbXBvbmVudHNbbmFtZV0pIHtcbiAgICAgICAgVnVlLmNvbXBvbmVudChuYW1lLCBWdWVJbnN0YWxsZXIuJGNvbXBvbmVudHNbbmFtZV0gPSBkZWYpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudHMoVnVlLCBjb21wb25lbnRzKSB7XG4gICAgZWFjaChjb21wb25lbnRzLCAoZGVmLCBuYW1lKSA9PiB7XG4gICAgICAgIGNvbXBvbmVudChWdWUsIG5hbWUsIGRlZik7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RpdmUoVnVlLCBuYW1lLCBkZWYpIHtcbiAgICBpZighVnVlSW5zdGFsbGVyLiRkaXJlY3RpdmVzW25hbWVdKSB7XG4gICAgICAgIFZ1ZS5kaXJlY3RpdmUobmFtZSwgVnVlSW5zdGFsbGVyLiRkaXJlY3RpdmVzW25hbWVdID0gZGVmKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RpdmVzKFZ1ZSwgZGlyZWN0aXZlcykge1xuICAgIGVhY2goZGlyZWN0aXZlcywgKGRlZiwgbmFtZSkgPT4ge1xuICAgICAgICBkaXJlY3RpdmUoVnVlLCBuYW1lLCBkZWYpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBWdWVJbnN0YWxsZXI7XG4iLCJpbXBvcnQgQWN0aXZpdHlJbmRpY2F0b3IgZnJvbSAnLi9BY3Rpdml0eUluZGljYXRvcic7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJ0AvSGVscGVycy9WdWVJbnN0YWxsZXIvVnVlSW5zdGFsbGVyJztcblxuY29uc3QgcGx1Z2luID0gVnVlSW5zdGFsbGVyLnVzZSh7XG5cbiAgICBpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWVJbnN0YWxsZXIuY29tcG9uZW50cyh7XG4gICAgICAgICAgICBBY3Rpdml0eUluZGljYXRvclxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBY3Rpdml0eUluZGljYXRvcjtcbiIsIjx0ZW1wbGF0ZT5cbiAgICA8YnV0dG9uIDp0eXBlPVwidHlwZVwiIGNsYXNzPVwiYnRuXCIgOmNsYXNzPVwiY2xhc3Nlc1wiIEBjbGljaz1cIm9uQ2xpY2tcIj5cbiAgICAgICAgPHNsb3Q+e3tsYWJlbH19PC9zbG90PlxuICAgICAgICA8YWN0aXZpdHktaW5kaWNhdG9yIDp0eXBlPVwiaW5kaWNhdG9yXCIgLz5cbiAgICA8L2J1dHRvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IEFjdGl2aXR5SW5kaWNhdG9yIGZyb20gJy4uL0FjdGl2aXR5SW5kaWNhdG9yJztcblxuY29uc3QgY29udmVydEFuaW1hdGlvbkRlbGF5VG9JbnQgPSBmdW5jdGlvbihkZWxheSkge1xuICAgIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQoZGVsYXksIDEwKTtcbiAgICBjb25zdCBtYXRjaGVzID0gZGVsYXkubWF0Y2goL20/cy8pO1xuICAgIGNvbnN0IHVuaXQgPSBtYXRjaGVzID8gbWF0Y2hlc1swXSA6IGZhbHNlO1xuXG4gICAgbGV0IG1pbGxpc2Vjb25kcztcblxuICAgIHN3aXRjaCAodW5pdCkge1xuICAgICAgICBjYXNlIFwic1wiOiAvLyBzZWNvbmRzXG4gICAgICAgICAgICBtaWxsaXNlY29uZHMgPSBudW0gKiAxMDAwO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJtc1wiOlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbWlsbGlzZWNvbmRzID0gbnVtO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pbGxpc2Vjb25kcyB8fCAwO1xufTtcblxuY29uc3QgYW5pbWF0ZWQgPSBmdW5jdGlvbihlbCwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBkZWZhdWx0VmlldyA9IChlbC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50KS5kZWZhdWx0VmlldztcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjYWxsYmFjay5hcHBseSgpO1xuICAgIH0sIGNvbnZlcnRBbmltYXRpb25EZWxheVRvSW50KGRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUoZWwpLmFuaW1hdGlvbkR1cmF0aW9uKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnYWN0aXZpdHktYnV0dG9uJyxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgQWN0aXZpdHlJbmRpY2F0b3JcbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdWxkIHNob3cgdGhlIGFjdGl2aXR5IGluZGljYXRvciBpbnNpZGUgdGhlIGJ1dHRvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2aXR5OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdWxkIHNob3cgdGhlIGJ1dHRvbiBhcyBkaXNhYmxlZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGxheSB0aGUgYnV0dG9uIGFzIGJsb2NrIHdpZHRoLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgQm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgYmxvY2s6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2l6ZSBvZiB0aGUgYnV0dG9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnbWQnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBib290c3RyYXAgdmFyaWFudCBvZiB0aGUgYnV0dG9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICB2YXJpYW50OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAncHJpbWFyeSdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGB0eXBlYCBhdHRyaWJ1dGUgZm9yIHRoZSBidXR0b24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdidXR0b24nXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0eXBlIG9mIGFjdGl2aXR5IGluZGljYXRvciBpbnNpZGUgdGhlIGJ1dHRvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgaW5kaWNhdG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnc3Bpbm5lcidcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG9yaWVudGF0aW9uIG9mIHRoZSBhY3Rpdml0eSBidXR0b24gaW5zaWRlIHRoZSBidXR0b24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIG9yaWVudGF0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAncmlnaHQnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBidXR0b24gbGFiZWwuIElmIG5vdCBwYXNzZWQgYXMgYSBwcm9wZXJ0eSwgbGFiZWwgbXVzdCBiZSBwYXNzZWRcbiAgICAgICAgICogaW5zaWRlIHRoZSBlbGVtZW50J3MgaHRtbC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzYWJsZSB0aGUgYnV0dG9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGRpc2FibGUoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEVuYWJsZSB0aGUgYnV0dG9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGVuYWJsZSgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVsLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3cgdGhlIGFjdGl2aXR5IGluZGljYXRvciBpbnNpZGUgdGhlIGJ1dHRvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBzaG93QWN0aXZpdHkoKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcblxuICAgICAgICAgICAgYW5pbWF0ZWQodGhpcy4kZWwsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbC5jbGFzc0xpc3QuYWRkKCdidG4tYWN0aXZpdHknKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdhY3Rpdml0eTpzaG93Jyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSGlkZSB0aGUgYWN0aXZpdHkgaW5kaWNhdG9yIGluc2lkZSB0aGUgYnV0dG9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGhpZGVBY3Rpdml0eSgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVsLmNsYXNzTGlzdC5hZGQoJ2J0bi1oaWRlLWFjdGl2aXR5Jyk7XG5cbiAgICAgICAgICAgIGFuaW1hdGVkKHRoaXMuJGVsLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbC5jbGFzc0xpc3QucmVtb3ZlKCdidG4tYWN0aXZpdHknLCAnYnRuLWhpZGUtYWN0aXZpdHknKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdhY3Rpdml0eTpoaWRlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzYWJsZSB0aGUgYnV0dG9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZXZlbnQsIHRoaXMpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBbiBvYmplY3Qgb2YgY2xhc3NlcyB0byBhcHBlbmQgdG8gdGhlIGJ1dHRvbi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBjbGFzc2VzKCkge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICAgICAgICAgICAnYnRuLWJsb2NrJzogdGhpcy5ibG9jayxcbiAgICAgICAgICAgICAgICAnYnRuLWFjdGl2aXR5JzogdGhpcy5hY3Rpdml0eVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY2xhc3Nlc1snYnRuLScgKyB0aGlzLnNpemUucmVwbGFjZSgnYnRuLScsICcnKV0gPSAhIXRoaXMuc2l6ZTtcbiAgICAgICAgICAgIGNsYXNzZXNbJ2J0bi0nICsgdGhpcy52YXJpYW50LnJlcGxhY2UoJ2J0bi0nLCAnJyldID0gISF0aGlzLnZhcmlhbnQ7XG4gICAgICAgICAgICBjbGFzc2VzWydidG4tYWN0aXZpdHktJyArIHRoaXMub3JpZW50YXRpb24ucmVwbGFjZSgnYnRuLWFjdGl2aXR5LScsICcnKV0gPSAhIXRoaXMub3JpZW50YXRpb247XG4gICAgICAgICAgICBjbGFzc2VzWydidG4tYWN0aXZpdHktaW5kaWNhdG9yLScgKyB0aGlzLmluZGljYXRvci5yZXBsYWNlKCdidG4tYWN0aXZpdHktaW5kaWNhdG9yLScsICcnKV0gPSAhIXRoaXMuaW5kaWNhdG9yO1xuXG4gICAgICAgICAgICByZXR1cm4gY2xhc3NlcztcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuXG4gICAgICAgIGFjdGl2aXR5KHZhbHVlKSB7XG4gICAgICAgICAgICBpZih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0FjdGl2aXR5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGVBY3Rpdml0eSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbkBpbXBvcnQgJy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Jvb3RzdHJhcC5zY3NzJztcblxuLy8gQWN0aXZpdHkgSW5kaWNhdG9yIHZhcmlhYmxlc1xuJGFjdGl2aXR5LWluZGljYXRvci1hbmltYXRlZC1kZWxheS1pbjogMzMzbXM7XG4kYWN0aXZpdHktaW5kaWNhdG9yLWFuaW1hdGVkLWRlbGF5LW91dDogMzMzbXM7XG5cbiRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAyLjI1O1xuJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXdpZHRoOiAxMCU7XG4kYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItaGVpZ2h0OiAzMCU7XG4kYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItZGVsYXk6IDFzO1xuXG5Aa2V5ZnJhbWVzIGJ0bi1hY3Rpdml0eS1pbiB7XG4gICAgMCUsIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH0gMzAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOTgpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBidG4tYWN0aXZpdHktb3V0IHtcbiAgICAwJSwgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfSA3MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC45OCk7XG4gICAgfVxufVxuXG4vLyBBY3Rpdml0eSBJbmRpY2F0b3IgQnV0dG9uXG4uYnRuLWFjdGl2aXR5LXRvcCxcbi5idG4tYWN0aXZpdHktYm90dG9tLFxuLmJ0bi1hY3Rpdml0eS1sZWZ0LFxuLmJ0bi1hY3Rpdml0eS1yaWdodCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IHBhZGRpbmcgKCRhY3Rpdml0eS1pbmRpY2F0b3ItYW5pbWF0ZWQtZGVsYXktaW4gLyAyKSBlYXNlLWluO1xuXG4gICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJGFjdGl2aXR5LWluZGljYXRvci1hbmltYXRlZC1kZWxheS1vdXQgZWFzZS1pbjtcbiAgICB9XG59XG5cbi5idG4tYWN0aXZpdHktdG9wIC5hY3Rpdml0eS1pbmRpY2F0b3IsXG4uYnRuLWFjdGl2aXR5LWJvdHRvbSAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbi5idG4tYWN0aXZpdHktbGVmdCAuYWN0aXZpdHktaW5kaWNhdG9yLFxuLmJ0bi1hY3Rpdml0eS1yaWdodCAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICB0b3A6IDUwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAtNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmJ0bi1hY3Rpdml0eTpub3QoLmJ0bi1saW5rKSB7XG4gICAgYW5pbWF0aW9uOiBidG4tYWN0aXZpdHktaW4gJGFjdGl2aXR5LWluZGljYXRvci1hbmltYXRlZC1kZWxheS1pbjtcbn1cbi5idG4taGlkZS1hY3Rpdml0eTpub3QoLmJ0bi1saW5rKSB7XG4gICAgYW5pbWF0aW9uOiBidG4tYWN0aXZpdHktb3V0ICRhY3Rpdml0eS1pbmRpY2F0b3ItYW5pbWF0ZWQtZGVsYXktb3V0O1xufVxuXG4uYnRuLWFjdGl2aXR5IHtcblxuICAgICYuYnRuLWhpZGUtYWN0aXZpdHkgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cblxuICAgICYuYnRuLW91dGxpbmUtcHJpbWFyeS5idG4tYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXIgLmFjdGl2aXR5LWluZGljYXRvciA+IGRpdjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbiAgICB9XG4gICAgJi5idG4tb3V0bGluZS1zZWNvbmRhcnkuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIC5hY3Rpdml0eS1pbmRpY2F0b3IgPiBkaXY6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHN1Y2Nlc3M7XG4gICAgfVxuICAgICYuYnRuLW91dGxpbmUtZGFuZ2VyLmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciAuYWN0aXZpdHktaW5kaWNhdG9yID4gZGl2OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYW5nZXI7XG4gICAgfVxuICAgICYuYnRuLW91dGxpbmUtc3VjY2Vzcy5idG4tYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXIgLmFjdGl2aXR5LWluZGljYXRvciA+IGRpdjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VjY2VzcztcbiAgICB9XG4gICAgJi5idG4tb3V0bGluZS13YXJuaW5nLmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciAuYWN0aXZpdHktaW5kaWNhdG9yID4gZGl2OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3YXJuaW5nO1xuICAgIH1cbiAgICAmLmJ0bi1vdXRsaW5lLWluZm8uYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIC5hY3Rpdml0eS1pbmRpY2F0b3IgPiBkaXY6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGluZm87XG4gICAgfVxuICAgICYuYnRuLW91dGxpbmUtbGluay5idG4tYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXIgLmFjdGl2aXR5LWluZGljYXRvciA+IGRpdjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGluay1jb2xvcjtcbiAgICB9XG5cbiAgICAmLmJ0bi14cyB7XG4gICAgICAgICYuYnRuLWFjdGl2aXR5LXRvcC5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6ICRmb250LXNpemUtYmFzZSAqIDEuMjU7XG5cbiAgICAgICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgdG9wOiAkZm9udC1zaXplLWJhc2UgKiAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LWJvdHRvbS5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206ICRmb250LXNpemUtYmFzZSAqIDEuMjU7XG5cbiAgICAgICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAkZm9udC1zaXplLWJhc2UgKiAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LWxlZnQuYnRuLWFjdGl2aXR5LWluZGljYXRvci1kb3RzIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogJGZvbnQtc2l6ZS1iYXNlICogMi4zMztcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAkZm9udC1zaXplLWJhc2UgKiAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LXJpZ2h0LmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3ItZG90cyB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAkZm9udC1zaXplLWJhc2UgKiAyLjMzO1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAkZm9udC1zaXplLWJhc2UgKiAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LWluZGljYXRvci1kb3RzIC5hY3Rpdml0eS1pbmRpY2F0b3IgPiBkaXYsXG4gICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvci1kb3RzID4gZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiAkZm9udC1zaXplLWJhc2UgLyAzO1xuICAgICAgICAgICAgaGVpZ2h0OiAkZm9udC1zaXplLWJhc2UgLyAzO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktdG9wLmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogJGZvbnQtc2l6ZS1iYXNlICogMS42NjtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICB0b3A6ICRmb250LXNpemUtYmFzZSAqIC4yNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LWJvdHRvbS5idG4tYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXIge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206ICRmb250LXNpemUtYmFzZSAqIDEuNjY7XG5cbiAgICAgICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAkZm9udC1zaXplLWJhc2UgKiAuMjU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1hY3Rpdml0eS1sZWZ0LmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6ICRmb250LXNpemUtYmFzZSAqIDEuNjY7XG5cbiAgICAgICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgbGVmdDogJGZvbnQtc2l6ZS1iYXNlICogLjI1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktcmlnaHQuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6ICRmb250LXNpemUtYmFzZSAqIDEuNjY7XG5cbiAgICAgICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6ICRmb250LXNpemUtYmFzZSAqIC4yNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIC5hY3Rpdml0eS1pbmRpY2F0b3IsXG4gICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAkZm9udC1zaXplLWJhc2UgKiAxO1xuICAgICAgICAgICAgaGVpZ2h0OiAkZm9udC1zaXplLWJhc2UgKiAxO1xuXG4gICAgICAgICAgICAmID4gZGl2OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgLy93aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXdpZHRoICogLjYzO1xuICAgICAgICAgICAgICAgIC8vaGVpZ2h0OiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItaGVpZ2h0ICogLjY2O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItd2lkdGggKiAuODQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAkYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXItaGVpZ2h0ICogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuYnRuLXNtIHtcbiAgICAgICAgJi5idG4tYWN0aXZpdHktdG9wLmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3ItZG90cyB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogJGZvbnQtc2l6ZS1iYXNlICogMS43NTtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICB0b3A6ICRmb250LXNpemUtYmFzZSAqIC41O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktYm90dG9tLmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3ItZG90cyB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJGZvbnQtc2l6ZS1iYXNlICogMS43NTtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICBib3R0b206ICRmb250LXNpemUtYmFzZSAqIC41O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktbGVmdC5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAkZm9udC1zaXplLWJhc2UgKiAzO1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIGxlZnQ6ICRmb250LXNpemUtYmFzZSAqIC41O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktcmlnaHQuYnRuLWFjdGl2aXR5LWluZGljYXRvci1kb3RzIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6ICRmb250LXNpemUtYmFzZSAqIDM7XG5cbiAgICAgICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6ICRmb250LXNpemUtYmFzZSAqIC41O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMgLmFjdGl2aXR5LWluZGljYXRvciA+IGRpdixcbiAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMgPiBkaXYge1xuICAgICAgICAgICAgd2lkdGg6ICRmb250LXNpemUtYmFzZSAvIDI7XG4gICAgICAgICAgICBoZWlnaHQ6ICRmb250LXNpemUtYmFzZSAvIDI7XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1hY3Rpdml0eS10b3AuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAkZm9udC1zaXplLWJhc2UgKiAyO1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIHRvcDogJGZvbnQtc2l6ZS1iYXNlICogLjMzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktYm90dG9tLmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJGZvbnQtc2l6ZS1iYXNlICogMjtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICBib3R0b206ICRmb250LXNpemUtYmFzZSAqIC4zMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LWxlZnQuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogJGZvbnQtc2l6ZS1iYXNlICogMi41O1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIGxlZnQ6ICRmb250LXNpemUtYmFzZSAqIC41O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktcmlnaHQuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6ICRmb250LXNpemUtYmFzZSAqIDIuNTtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICByaWdodDogJGZvbnQtc2l6ZS1iYXNlICogLjU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciAuYWN0aXZpdHktaW5kaWNhdG9yLFxuICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciB7XG4gICAgICAgICAgICB3aWR0aDogJGZvbnQtc2l6ZS1iYXNlICogMS41O1xuICAgICAgICAgICAgaGVpZ2h0OiAkZm9udC1zaXplLWJhc2UgKiAxLjU7XG5cbiAgICAgICAgICAgICYgPiBkaXY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLXdpZHRoICogLjU2O1xuICAgICAgICAgICAgICAgIGhlaWdodDogJGFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyLWhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5idG4teHMpOm5vdCguYnRuLXNtKTpub3QoLmJ0bi1tZCk6bm90KC5idG4tbGcpOm5vdCguYnRuLXhsKSxcbiAgICAmLmJ0bi1tZCB7XG4gICAgICAgICYuYnRuLWFjdGl2aXR5LXRvcC5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6ICRmb250LXNpemUtYmFzZSAqIDI7XG5cbiAgICAgICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgdG9wOiAkZm9udC1zaXplLWJhc2UgKiAuNjY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1hY3Rpdml0eS1ib3R0b20uYnRuLWFjdGl2aXR5LWluZGljYXRvci1kb3RzIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAkZm9udC1zaXplLWJhc2UgKiAyO1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIGJvdHRvbTogJGZvbnQtc2l6ZS1iYXNlICogLjY2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktbGVmdC5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAkZm9udC1zaXplLWJhc2UgKiA0O1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIGxlZnQ6ICRmb250LXNpemUtYmFzZSAqIC41O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktcmlnaHQuYnRuLWFjdGl2aXR5LWluZGljYXRvci1kb3RzIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6ICRmb250LXNpemUtYmFzZSAqIDQ7XG5cbiAgICAgICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6ICRmb250LXNpemUtYmFzZSAqIC41O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMgLmFjdGl2aXR5LWluZGljYXRvciA+IGRpdixcbiAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMgPiBkaXYge1xuICAgICAgICAgICAgd2lkdGg6ICRmb250LXNpemUtYmFzZSAvIDEuMjU7XG4gICAgICAgICAgICBoZWlnaHQ6ICRmb250LXNpemUtYmFzZSAvIDEuMjU7XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1hY3Rpdml0eS10b3AuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAkZm9udC1zaXplLWJhc2UgKiAyLjc1O1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIHRvcDogJGZvbnQtc2l6ZS1iYXNlICogLjMzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktYm90dG9tLmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJGZvbnQtc2l6ZS1iYXNlICogMi43NTtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICBib3R0b206ICRmb250LXNpemUtYmFzZSAqIC4zMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LWxlZnQuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogJGZvbnQtc2l6ZS1iYXNlICogMi43NTtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAkZm9udC1zaXplLWJhc2UgKiAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LXJpZ2h0LmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAkZm9udC1zaXplLWJhc2UgKiAyLjc1O1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAkZm9udC1zaXplLWJhc2UgKiAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIC5hY3Rpdml0eS1pbmRpY2F0b3IsXG4gICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAkZm9udC1zaXplLWJhc2UgKiAxLjc1O1xuICAgICAgICAgICAgaGVpZ2h0OiAkZm9udC1zaXplLWJhc2UgKiAxLjc1O1xuXG4gICAgICAgICAgICAmID4gZGl2OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci13aWR0aCAqIC42NjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci1oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmJ0bi1sZyB7XG4gICAgICAgICYuYnRuLWFjdGl2aXR5LXRvcC5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6ICRmb250LXNpemUtYmFzZSAqIDIuNzU7XG5cbiAgICAgICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgdG9wOiAkZm9udC1zaXplLWJhc2UgKiAuNjY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1hY3Rpdml0eS1ib3R0b20uYnRuLWFjdGl2aXR5LWluZGljYXRvci1kb3RzIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAkZm9udC1zaXplLWJhc2UgKiAyLjc1O1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIGJvdHRvbTogJGZvbnQtc2l6ZS1iYXNlICogLjY2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktbGVmdC5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAkZm9udC1zaXplLWJhc2UgKiA1O1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIGxlZnQ6ICRmb250LXNpemUtYmFzZSAqIC41O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktcmlnaHQuYnRuLWFjdGl2aXR5LWluZGljYXRvci1kb3RzIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6ICRmb250LXNpemUtYmFzZSAqIDU7XG5cbiAgICAgICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6ICRmb250LXNpemUtYmFzZSAqIC41O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMgLmFjdGl2aXR5LWluZGljYXRvciA+IGRpdixcbiAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMgPiBkaXYge1xuICAgICAgICAgICAgd2lkdGg6ICRmb250LXNpemUtYmFzZSAqIDEuMTtcbiAgICAgICAgICAgIGhlaWdodDogJGZvbnQtc2l6ZS1iYXNlICogMS4xO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktdG9wLmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogJGZvbnQtc2l6ZS1iYXNlICogMy41O1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIHRvcDogJGZvbnQtc2l6ZS1iYXNlICogLjU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1hY3Rpdml0eS1ib3R0b20uYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAkZm9udC1zaXplLWJhc2UgKiAzLjU7XG5cbiAgICAgICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvciB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAkZm9udC1zaXplLWJhc2UgKiAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LWxlZnQuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogJGZvbnQtc2l6ZS1iYXNlICogMy4yNTtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAkZm9udC1zaXplLWJhc2UgKiAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LXJpZ2h0LmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAkZm9udC1zaXplLWJhc2UgKiAzLjI1O1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAkZm9udC1zaXplLWJhc2UgKiAuNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIC5hY3Rpdml0eS1pbmRpY2F0b3IsXG4gICAgICAgICYgLmFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAkZm9udC1zaXplLWJhc2UgKiAyLjE1O1xuICAgICAgICAgICAgaGVpZ2h0OiAkZm9udC1zaXplLWJhc2UgKiAyLjE1O1xuXG4gICAgICAgICAgICAmID4gZGl2OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci13aWR0aCAqIC43NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuYnRuLXhsIHtcbiAgICAgICAgJi5idG4tYWN0aXZpdHktdG9wLmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3ItZG90cyB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogJGZvbnQtc2l6ZS1iYXNlICogMy43NTtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICB0b3A6ICRmb250LXNpemUtYmFzZSAqIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1hY3Rpdml0eS1ib3R0b20uYnRuLWFjdGl2aXR5LWluZGljYXRvci1kb3RzIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAkZm9udC1zaXplLWJhc2UgKiAzLjc1O1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIGJvdHRvbTogJGZvbnQtc2l6ZS1iYXNlICogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LWxlZnQuYnRuLWFjdGl2aXR5LWluZGljYXRvci1kb3RzIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogJGZvbnQtc2l6ZS1iYXNlICogNjtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAkZm9udC1zaXplLWJhc2UgKiAuNzU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1hY3Rpdml0eS1yaWdodC5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogJGZvbnQtc2l6ZS1iYXNlICogNjtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICByaWdodDogJGZvbnQtc2l6ZS1iYXNlICogLjc1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMgLmFjdGl2aXR5LWluZGljYXRvciA+IGRpdixcbiAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yLWRvdHMgPiBkaXYge1xuICAgICAgICAgICAgd2lkdGg6ICRmb250LXNpemUtYmFzZSAqIDEuMjU7XG4gICAgICAgICAgICBoZWlnaHQ6ICRmb250LXNpemUtYmFzZSAqIDEuMjU7XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1hY3Rpdml0eS10b3AuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAkZm9udC1zaXplLWJhc2UgKiA0LjI1O1xuXG4gICAgICAgICAgICAmIC5hY3Rpdml0eS1pbmRpY2F0b3Ige1xuICAgICAgICAgICAgICAgIHRvcDogJGZvbnQtc2l6ZS1iYXNlICogLjY2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktYm90dG9tLmJ0bi1hY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogJGZvbnQtc2l6ZS1iYXNlICogNC4yNTtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICBib3R0b206ICRmb250LXNpemUtYmFzZSAqIC42NjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLWFjdGl2aXR5LWxlZnQuYnRuLWFjdGl2aXR5LWluZGljYXRvci1zcGlubmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogJGZvbnQtc2l6ZS1iYXNlICogNDtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAkZm9udC1zaXplLWJhc2UgKiAuNzU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmLmJ0bi1hY3Rpdml0eS1yaWdodC5idG4tYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXIge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogJGZvbnQtc2l6ZS1iYXNlICogNDtcblxuICAgICAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yIHtcbiAgICAgICAgICAgICAgICByaWdodDogJGZvbnQtc2l6ZS1iYXNlICogLjc1O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5idG4tYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXIgLmFjdGl2aXR5LWluZGljYXRvcixcbiAgICAgICAgJiAuYWN0aXZpdHktaW5kaWNhdG9yLXNwaW5uZXIge1xuICAgICAgICAgICAgd2lkdGg6ICRmb250LXNpemUtYmFzZSAqIDIuNTtcbiAgICAgICAgICAgIGhlaWdodDogJGZvbnQtc2l6ZS1iYXNlICogMi41O1xuXG4gICAgICAgICAgICAmID4gZGl2OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6ICRhY3Rpdml0eS1pbmRpY2F0b3Itc3Bpbm5lci13aWR0aCAqIC43NTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufVxuPC9zdHlsZT5cbiIsImltcG9ydCBBY3Rpdml0eUJ1dHRvbiBmcm9tICcuL0FjdGl2aXR5QnV0dG9uJztcbmltcG9ydCBWdWVJbnN0YWxsZXIgZnJvbSAnQC9IZWxwZXJzL1Z1ZUluc3RhbGxlci9WdWVJbnN0YWxsZXInO1xuXG5jb25zdCBwbHVnaW4gPSBWdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIEFjdGl2aXR5QnV0dG9uXG4gICAgICAgIH0pXG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQWN0aXZpdHlCdXR0b247XG4iLCIvKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKlxuICogQWRkcyBgdmFsdWVgIHRvIHRoZSBhcnJheSBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgYWRkXG4gKiBAbWVtYmVyT2YgU2V0Q2FjaGVcbiAqIEBhbGlhcyBwdXNoXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjYWNoZS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUFkZCh2YWx1ZSkge1xuICB0aGlzLl9fZGF0YV9fLnNldCh2YWx1ZSwgSEFTSF9VTkRFRklORUQpO1xuICByZXR1cm4gdGhpcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUFkZDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgaW4gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc2V0Q2FjaGVIYXModmFsdWUpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uaGFzKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRDYWNoZUhhcztcbiIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyksXG4gICAgc2V0Q2FjaGVBZGQgPSByZXF1aXJlKCcuL19zZXRDYWNoZUFkZCcpLFxuICAgIHNldENhY2hlSGFzID0gcmVxdWlyZSgnLi9fc2V0Q2FjaGVIYXMnKTtcblxuLyoqXG4gKlxuICogQ3JlYXRlcyBhbiBhcnJheSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICovXG5mdW5jdGlvbiBTZXRDYWNoZSh2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMgPT0gbnVsbCA/IDAgOiB2YWx1ZXMubGVuZ3RoO1xuXG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGU7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYFNldENhY2hlYC5cblNldENhY2hlLnByb3RvdHlwZS5hZGQgPSBTZXRDYWNoZS5wcm90b3R5cGUucHVzaCA9IHNldENhY2hlQWRkO1xuU2V0Q2FjaGUucHJvdG90eXBlLmhhcyA9IHNldENhY2hlSGFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldENhY2hlO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc29tZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5U29tZShhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVNvbWU7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBhIGBjYWNoZWAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhY2hlIFRoZSBjYWNoZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBjYWNoZUhhcyhjYWNoZSwga2V5KSB7XG4gIHJldHVybiBjYWNoZS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYWNoZUhhcztcbiIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vX1NldENhY2hlJyksXG4gICAgYXJyYXlTb21lID0gcmVxdWlyZSgnLi9fYXJyYXlTb21lJyksXG4gICAgY2FjaGVIYXMgPSByZXF1aXJlKCcuL19jYWNoZUhhcycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBhcnJheXMgd2l0aCBzdXBwb3J0IGZvclxuICogcGFydGlhbCBkZWVwIGNvbXBhcmlzb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7QXJyYXl9IG90aGVyIFRoZSBvdGhlciBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgYXJyYXlgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGFycmF5cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEFycmF5cyhhcnJheSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRyxcbiAgICAgIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIG90aExlbmd0aCA9IG90aGVyLmxlbmd0aDtcblxuICBpZiAoYXJyTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhKGlzUGFydGlhbCAmJiBvdGhMZW5ndGggPiBhcnJMZW5ndGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgdmFyIHN0YWNrZWQgPSBzdGFjay5nZXQoYXJyYXkpO1xuICBpZiAoc3RhY2tlZCAmJiBzdGFjay5nZXQob3RoZXIpKSB7XG4gICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gIH1cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSB0cnVlLFxuICAgICAgc2VlbiA9IChiaXRtYXNrICYgQ09NUEFSRV9VTk9SREVSRURfRkxBRykgPyBuZXcgU2V0Q2FjaGUgOiB1bmRlZmluZWQ7XG5cbiAgc3RhY2suc2V0KGFycmF5LCBvdGhlcik7XG4gIHN0YWNrLnNldChvdGhlciwgYXJyYXkpO1xuXG4gIC8vIElnbm9yZSBub24taW5kZXggcHJvcGVydGllcy5cbiAgd2hpbGUgKCsraW5kZXggPCBhcnJMZW5ndGgpIHtcbiAgICB2YXIgYXJyVmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJbaW5kZXhdO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIGFyclZhbHVlLCBpbmRleCwgb3RoZXIsIGFycmF5LCBzdGFjaylcbiAgICAgICAgOiBjdXN0b21pemVyKGFyclZhbHVlLCBvdGhWYWx1ZSwgaW5kZXgsIGFycmF5LCBvdGhlciwgc3RhY2spO1xuICAgIH1cbiAgICBpZiAoY29tcGFyZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKGNvbXBhcmVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoc2Vlbikge1xuICAgICAgaWYgKCFhcnJheVNvbWUob3RoZXIsIGZ1bmN0aW9uKG90aFZhbHVlLCBvdGhJbmRleCkge1xuICAgICAgICAgICAgaWYgKCFjYWNoZUhhcyhzZWVuLCBvdGhJbmRleCkgJiZcbiAgICAgICAgICAgICAgICAoYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHNlZW4ucHVzaChvdGhJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIShcbiAgICAgICAgICBhcnJWYWx1ZSA9PT0gb3RoVmFsdWUgfHxcbiAgICAgICAgICAgIGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10oYXJyYXkpO1xuICBzdGFja1snZGVsZXRlJ10ob3RoZXIpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQXJyYXlzO1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgbWFwYCB0byBpdHMga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gbWFwIFRoZSBtYXAgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUga2V5LXZhbHVlIHBhaXJzLlxuICovXG5mdW5jdGlvbiBtYXBUb0FycmF5KG1hcCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KG1hcC5zaXplKTtcblxuICBtYXAuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gW2tleSwgdmFsdWVdO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBUb0FycmF5O1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIFVpbnQ4QXJyYXkgPSByZXF1aXJlKCcuL19VaW50OEFycmF5JyksXG4gICAgZXEgPSByZXF1aXJlKCcuL2VxJyksXG4gICAgZXF1YWxBcnJheXMgPSByZXF1aXJlKCcuL19lcXVhbEFycmF5cycpLFxuICAgIG1hcFRvQXJyYXkgPSByZXF1aXJlKCcuL19tYXBUb0FycmF5JyksXG4gICAgc2V0VG9BcnJheSA9IHJlcXVpcmUoJy4vX3NldFRvQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxudmFyIGFycmF5QnVmZmVyVGFnID0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJyxcbiAgICBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xWYWx1ZU9mID0gc3ltYm9sUHJvdG8gPyBzeW1ib2xQcm90by52YWx1ZU9mIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgY29tcGFyaW5nIG9iamVjdHMgb2ZcbiAqIHRoZSBzYW1lIGB0b1N0cmluZ1RhZ2AuXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBjb21wYXJpbmcgdmFsdWVzIHdpdGggdGFncyBvZlxuICogYEJvb2xlYW5gLCBgRGF0ZWAsIGBFcnJvcmAsIGBOdW1iZXJgLCBgUmVnRXhwYCwgb3IgYFN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0YWcgVGhlIGB0b1N0cmluZ1RhZ2Agb2YgdGhlIG9iamVjdHMgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIHRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICBzd2l0Y2ggKHRhZykge1xuICAgIGNhc2UgZGF0YVZpZXdUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgKG9iamVjdC5ieXRlT2Zmc2V0ICE9IG90aGVyLmJ5dGVPZmZzZXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIG9iamVjdCA9IG9iamVjdC5idWZmZXI7XG4gICAgICBvdGhlciA9IG90aGVyLmJ1ZmZlcjtcblxuICAgIGNhc2UgYXJyYXlCdWZmZXJUYWc6XG4gICAgICBpZiAoKG9iamVjdC5ieXRlTGVuZ3RoICE9IG90aGVyLmJ5dGVMZW5ndGgpIHx8XG4gICAgICAgICAgIWVxdWFsRnVuYyhuZXcgVWludDhBcnJheShvYmplY3QpLCBuZXcgVWludDhBcnJheShvdGhlcikpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIENvZXJjZSBib29sZWFucyB0byBgMWAgb3IgYDBgIGFuZCBkYXRlcyB0byBtaWxsaXNlY29uZHMuXG4gICAgICAvLyBJbnZhbGlkIGRhdGVzIGFyZSBjb2VyY2VkIHRvIGBOYU5gLlxuICAgICAgcmV0dXJuIGVxKCtvYmplY3QsICtvdGhlcik7XG5cbiAgICBjYXNlIGVycm9yVGFnOlxuICAgICAgcmV0dXJuIG9iamVjdC5uYW1lID09IG90aGVyLm5hbWUgJiYgb2JqZWN0Lm1lc3NhZ2UgPT0gb3RoZXIubWVzc2FnZTtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncywgcHJpbWl0aXZlcyBhbmQgb2JqZWN0cyxcbiAgICAgIC8vIGFzIGVxdWFsLiBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXJlZ2V4cC5wcm90b3R5cGUudG9zdHJpbmdcbiAgICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgICByZXR1cm4gb2JqZWN0ID09IChvdGhlciArICcnKTtcblxuICAgIGNhc2UgbWFwVGFnOlxuICAgICAgdmFyIGNvbnZlcnQgPSBtYXBUb0FycmF5O1xuXG4gICAgY2FzZSBzZXRUYWc6XG4gICAgICB2YXIgaXNQYXJ0aWFsID0gYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHO1xuICAgICAgY29udmVydCB8fCAoY29udmVydCA9IHNldFRvQXJyYXkpO1xuXG4gICAgICBpZiAob2JqZWN0LnNpemUgIT0gb3RoZXIuc2l6ZSAmJiAhaXNQYXJ0aWFsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgICAgIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gICAgICBpZiAoc3RhY2tlZCkge1xuICAgICAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgICAgIH1cbiAgICAgIGJpdG1hc2sgfD0gQ09NUEFSRV9VTk9SREVSRURfRkxBRztcblxuICAgICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICBzdGFjay5zZXQob2JqZWN0LCBvdGhlcik7XG4gICAgICB2YXIgcmVzdWx0ID0gZXF1YWxBcnJheXMoY29udmVydChvYmplY3QpLCBjb252ZXJ0KG90aGVyKSwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gICAgICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG5cbiAgICBjYXNlIHN5bWJvbFRhZzpcbiAgICAgIGlmIChzeW1ib2xWYWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiBzeW1ib2xWYWx1ZU9mLmNhbGwob2JqZWN0KSA9PSBzeW1ib2xWYWx1ZU9mLmNhbGwob3RoZXIpO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEJ5VGFnO1xuIiwiLyoqXG4gKiBBcHBlbmRzIHRoZSBlbGVtZW50cyBvZiBgdmFsdWVzYCB0byBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtBcnJheX0gdmFsdWVzIFRoZSB2YWx1ZXMgdG8gYXBwZW5kLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UHVzaChhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aCxcbiAgICAgIG9mZnNldCA9IGFycmF5Lmxlbmd0aDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFycmF5W29mZnNldCArIGluZGV4XSA9IHZhbHVlc1tpbmRleF07XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5UHVzaDtcbiIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL19hcnJheVB1c2gnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldEFsbEtleXNgIGFuZCBgZ2V0QWxsS2V5c0luYCB3aGljaCB1c2VzXG4gKiBga2V5c0Z1bmNgIGFuZCBgc3ltYm9sc0Z1bmNgIHRvIGdldCB0aGUgZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmRcbiAqIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzeW1ib2xzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldEFsbEtleXMob2JqZWN0LCBrZXlzRnVuYywgc3ltYm9sc0Z1bmMpIHtcbiAgdmFyIHJlc3VsdCA9IGtleXNGdW5jKG9iamVjdCk7XG4gIHJldHVybiBpc0FycmF5KG9iamVjdCkgPyByZXN1bHQgOiBhcnJheVB1c2gocmVzdWx0LCBzeW1ib2xzRnVuYyhvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0QWxsS2V5cztcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xuIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IG9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBzeW1ib2xzLlxuICovXG52YXIgZ2V0U3ltYm9scyA9ICFuYXRpdmVHZXRTeW1ib2xzID8gc3R1YkFycmF5IDogZnVuY3Rpb24ob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgcmV0dXJuIGFycmF5RmlsdGVyKG5hdGl2ZUdldFN5bWJvbHMob2JqZWN0KSwgZnVuY3Rpb24oc3ltYm9sKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCBzeW1ib2wpO1xuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0U3ltYm9scztcbiIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcyBhbmQgc3ltYm9scy5cbiAqL1xuZnVuY3Rpb24gZ2V0QWxsS2V5cyhvYmplY3QpIHtcbiAgcmV0dXJuIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5cywgZ2V0U3ltYm9scyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QWxsS2V5cztcbiIsInZhciBnZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5cycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBvYmplY3RzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBvYmpQcm9wcyA9IGdldEFsbEtleXMob2JqZWN0KSxcbiAgICAgIG9iakxlbmd0aCA9IG9ialByb3BzLmxlbmd0aCxcbiAgICAgIG90aFByb3BzID0gZ2V0QWxsS2V5cyhvdGhlciksXG4gICAgICBvdGhMZW5ndGggPSBvdGhQcm9wcy5sZW5ndGg7XG5cbiAgaWYgKG9iakxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIWlzUGFydGlhbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgaW5kZXggPSBvYmpMZW5ndGg7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICBpZiAoIShpc1BhcnRpYWwgPyBrZXkgaW4gb3RoZXIgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCBrZXkpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIG9iamVjdCk7XG5cbiAgdmFyIHNraXBDdG9yID0gaXNQYXJ0aWFsO1xuICB3aGlsZSAoKytpbmRleCA8IG9iakxlbmd0aCkge1xuICAgIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltrZXldO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIG9ialZhbHVlLCBrZXksIG90aGVyLCBvYmplY3QsIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIob2JqVmFsdWUsIG90aFZhbHVlLCBrZXksIG9iamVjdCwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKCEoY29tcGFyZWQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gKG9ialZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMob2JqVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpXG4gICAgICAgICAgOiBjb21wYXJlZFxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBza2lwQ3RvciB8fCAoc2tpcEN0b3IgPSBrZXkgPT0gJ2NvbnN0cnVjdG9yJyk7XG4gIH1cbiAgaWYgKHJlc3VsdCAmJiAhc2tpcEN0b3IpIHtcbiAgICB2YXIgb2JqQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgb3RoQ3RvciA9IG90aGVyLmNvbnN0cnVjdG9yO1xuXG4gICAgLy8gTm9uIGBPYmplY3RgIG9iamVjdCBpbnN0YW5jZXMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1YWwuXG4gICAgaWYgKG9iakN0b3IgIT0gb3RoQ3RvciAmJlxuICAgICAgICAoJ2NvbnN0cnVjdG9yJyBpbiBvYmplY3QgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvdGhlcikgJiZcbiAgICAgICAgISh0eXBlb2Ygb2JqQ3RvciA9PSAnZnVuY3Rpb24nICYmIG9iakN0b3IgaW5zdGFuY2VvZiBvYmpDdG9yICYmXG4gICAgICAgICAgdHlwZW9mIG90aEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvdGhDdG9yIGluc3RhbmNlb2Ygb3RoQ3RvcikpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbE9iamVjdHM7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIERhdGFWaWV3ID0gZ2V0TmF0aXZlKHJvb3QsICdEYXRhVmlldycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERhdGFWaWV3O1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBQcm9taXNlID0gZ2V0TmF0aXZlKHJvb3QsICdQcm9taXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgU2V0ID0gZ2V0TmF0aXZlKHJvb3QsICdTZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXQ7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFdlYWtNYXAgPSBnZXROYXRpdmUocm9vdCwgJ1dlYWtNYXAnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBXZWFrTWFwO1xuIiwidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBlcXVhbEFycmF5cyA9IHJlcXVpcmUoJy4vX2VxdWFsQXJyYXlzJyksXG4gICAgZXF1YWxCeVRhZyA9IHJlcXVpcmUoJy4vX2VxdWFsQnlUYWcnKSxcbiAgICBlcXVhbE9iamVjdHMgPSByZXF1aXJlKCcuL19lcXVhbE9iamVjdHMnKSxcbiAgICBnZXRUYWcgPSByZXF1aXJlKCcuL19nZXRUYWcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsYCBmb3IgYXJyYXlzIGFuZCBvYmplY3RzIHdoaWNoIHBlcmZvcm1zXG4gKiBkZWVwIGNvbXBhcmlzb25zIGFuZCB0cmFja3MgdHJhdmVyc2VkIG9iamVjdHMgZW5hYmxpbmcgb2JqZWN0cyB3aXRoIGNpcmN1bGFyXG4gKiByZWZlcmVuY2VzIHRvIGJlIGNvbXBhcmVkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYG9iamVjdGAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgb2JqZWN0cyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbERlZXAob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjaykge1xuICB2YXIgb2JqSXNBcnIgPSBpc0FycmF5KG9iamVjdCksXG4gICAgICBvdGhJc0FyciA9IGlzQXJyYXkob3RoZXIpLFxuICAgICAgb2JqVGFnID0gb2JqSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvYmplY3QpLFxuICAgICAgb3RoVGFnID0gb3RoSXNBcnIgPyBhcnJheVRhZyA6IGdldFRhZyhvdGhlcik7XG5cbiAgb2JqVGFnID0gb2JqVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvYmpUYWc7XG4gIG90aFRhZyA9IG90aFRhZyA9PSBhcmdzVGFnID8gb2JqZWN0VGFnIDogb3RoVGFnO1xuXG4gIHZhciBvYmpJc09iaiA9IG9ialRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBvdGhJc09iaiA9IG90aFRhZyA9PSBvYmplY3RUYWcsXG4gICAgICBpc1NhbWVUYWcgPSBvYmpUYWcgPT0gb3RoVGFnO1xuXG4gIGlmIChpc1NhbWVUYWcgJiYgaXNCdWZmZXIob2JqZWN0KSkge1xuICAgIGlmICghaXNCdWZmZXIob3RoZXIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9iaklzQXJyID0gdHJ1ZTtcbiAgICBvYmpJc09iaiA9IGZhbHNlO1xuICB9XG4gIGlmIChpc1NhbWVUYWcgJiYgIW9iaklzT2JqKSB7XG4gICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICByZXR1cm4gKG9iaklzQXJyIHx8IGlzVHlwZWRBcnJheShvYmplY3QpKVxuICAgICAgPyBlcXVhbEFycmF5cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKVxuICAgICAgOiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZywgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG4gIH1cbiAgaWYgKCEoYml0bWFzayAmIENPTVBBUkVfUEFSVElBTF9GTEFHKSkge1xuICAgIHZhciBvYmpJc1dyYXBwZWQgPSBvYmpJc09iaiAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ19fd3JhcHBlZF9fJyksXG4gICAgICAgIG90aElzV3JhcHBlZCA9IG90aElzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob3RoZXIsICdfX3dyYXBwZWRfXycpO1xuXG4gICAgaWYgKG9iaklzV3JhcHBlZCB8fCBvdGhJc1dyYXBwZWQpIHtcbiAgICAgIHZhciBvYmpVbndyYXBwZWQgPSBvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCxcbiAgICAgICAgICBvdGhVbndyYXBwZWQgPSBvdGhJc1dyYXBwZWQgPyBvdGhlci52YWx1ZSgpIDogb3RoZXI7XG5cbiAgICAgIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gICAgICByZXR1cm4gZXF1YWxGdW5jKG9ialVud3JhcHBlZCwgb3RoVW53cmFwcGVkLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjayk7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0YWNrIHx8IChzdGFjayA9IG5ldyBTdGFjayk7XG4gIHJldHVybiBlcXVhbE9iamVjdHMob2JqZWN0LCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgZXF1YWxGdW5jLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWxEZWVwO1xuIiwidmFyIGJhc2VJc0VxdWFsRGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsRGVlcCcpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNFcXVhbGAgd2hpY2ggc3VwcG9ydHMgcGFydGlhbCBjb21wYXJpc29uc1xuICogYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIFVub3JkZXJlZCBjb21wYXJpc29uXG4gKiAgMiAtIFBhcnRpYWwgY29tcGFyaXNvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsIHx8IG90aGVyID09IG51bGwgfHwgKCFpc09iamVjdExpa2UodmFsdWUpICYmICFpc09iamVjdExpa2Uob3RoZXIpKSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyO1xuICB9XG4gIHJldHVybiBiYXNlSXNFcXVhbERlZXAodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBiYXNlSXNFcXVhbCwgc3RhY2spO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsO1xuIiwidmFyIFN0YWNrID0gcmVxdWlyZSgnLi9fU3RhY2snKSxcbiAgICBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vX2Jhc2VJc0VxdWFsJyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc01hdGNoYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7QXJyYXl9IG1hdGNoRGF0YSBUaGUgcHJvcGVydHkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3MgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgb2JqZWN0YCBpcyBhIG1hdGNoLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEsIGN1c3RvbWl6ZXIpIHtcbiAgdmFyIGluZGV4ID0gbWF0Y2hEYXRhLmxlbmd0aCxcbiAgICAgIGxlbmd0aCA9IGluZGV4LFxuICAgICAgbm9DdXN0b21pemVyID0gIWN1c3RvbWl6ZXI7XG5cbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuICFsZW5ndGg7XG4gIH1cbiAgb2JqZWN0ID0gT2JqZWN0KG9iamVjdCk7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIGlmICgobm9DdXN0b21pemVyICYmIGRhdGFbMl0pXG4gICAgICAgICAgPyBkYXRhWzFdICE9PSBvYmplY3RbZGF0YVswXV1cbiAgICAgICAgICA6ICEoZGF0YVswXSBpbiBvYmplY3QpXG4gICAgICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIHZhciBrZXkgPSBkYXRhWzBdLFxuICAgICAgICBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBzcmNWYWx1ZSA9IGRhdGFbMV07XG5cbiAgICBpZiAobm9DdXN0b21pemVyICYmIGRhdGFbMl0pIHtcbiAgICAgIGlmIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc3RhY2sgPSBuZXcgU3RhY2s7XG4gICAgICBpZiAoY3VzdG9taXplcikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gY3VzdG9taXplcihvYmpWYWx1ZSwgc3JjVmFsdWUsIGtleSwgb2JqZWN0LCBzb3VyY2UsIHN0YWNrKTtcbiAgICAgIH1cbiAgICAgIGlmICghKHJlc3VsdCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IGJhc2VJc0VxdWFsKHNyY1ZhbHVlLCBvYmpWYWx1ZSwgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgfCBDT01QQVJFX1VOT1JERVJFRF9GTEFHLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgICAgIDogcmVzdWx0XG4gICAgICAgICAgKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc01hdGNoO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9pc09iamVjdCcpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHN1aXRhYmxlIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaWYgc3VpdGFibGUgZm9yIHN0cmljdFxuICogIGVxdWFsaXR5IGNvbXBhcmlzb25zLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlICYmICFpc09iamVjdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTdHJpY3RDb21wYXJhYmxlO1xuIiwidmFyIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBtYXRjaCBkYXRhIG9mIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBnZXRNYXRjaERhdGEob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBrZXlzKG9iamVjdCksXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIHZhciBrZXkgPSByZXN1bHRbbGVuZ3RoXSxcbiAgICAgICAgdmFsdWUgPSBvYmplY3Rba2V5XTtcblxuICAgIHJlc3VsdFtsZW5ndGhdID0gW2tleSwgdmFsdWUsIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWF0Y2hEYXRhO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYG1hdGNoZXNQcm9wZXJ0eWAgZm9yIHNvdXJjZSB2YWx1ZXMgc3VpdGFibGVcbiAqIGZvciBzdHJpY3QgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGkuZS4gYD09PWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBzcmNWYWx1ZSBUaGUgdmFsdWUgdG8gbWF0Y2guXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBzcGVjIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZShrZXksIHNyY1ZhbHVlKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdFtrZXldID09PSBzcmNWYWx1ZSAmJlxuICAgICAgKHNyY1ZhbHVlICE9PSB1bmRlZmluZWQgfHwgKGtleSBpbiBPYmplY3Qob2JqZWN0KSkpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlO1xuIiwidmFyIGJhc2VJc01hdGNoID0gcmVxdWlyZSgnLi9fYmFzZUlzTWF0Y2gnKSxcbiAgICBnZXRNYXRjaERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXRjaERhdGEnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc2Agd2hpY2ggZG9lc24ndCBjbG9uZSBgc291cmNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzKHNvdXJjZSkge1xuICB2YXIgbWF0Y2hEYXRhID0gZ2V0TWF0Y2hEYXRhKHNvdXJjZSk7XG4gIGlmIChtYXRjaERhdGEubGVuZ3RoID09IDEgJiYgbWF0Y2hEYXRhWzBdWzJdKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKG1hdGNoRGF0YVswXVswXSwgbWF0Y2hEYXRhWzBdWzFdKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PT0gc291cmNlIHx8IGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXRjaGVzO1xuIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlSXNEZWVwUHJvcCA9IC9cXC58XFxbKD86W15bXFxdXSp8KFtcIiddKSg/Oig/IVxcMSlbXlxcXFxdfFxcXFwuKSo/XFwxKVxcXS8sXG4gICAgcmVJc1BsYWluUHJvcCA9IC9eXFx3KiQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSBhbmQgbm90IGEgcHJvcGVydHkgcGF0aC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeSBrZXlzIG9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzS2V5KHZhbHVlLCBvYmplY3QpIHtcbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdzeW1ib2wnIHx8IHR5cGUgPT0gJ2Jvb2xlYW4nIHx8XG4gICAgICB2YWx1ZSA9PSBudWxsIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiByZUlzUGxhaW5Qcm9wLnRlc3QodmFsdWUpIHx8ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSkgfHxcbiAgICAob2JqZWN0ICE9IG51bGwgJiYgdmFsdWUgaW4gT2JqZWN0KG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5O1xuIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBtZW1vaXplcyB0aGUgcmVzdWx0IG9mIGBmdW5jYC4gSWYgYHJlc29sdmVyYCBpc1xuICogcHJvdmlkZWQsIGl0IGRldGVybWluZXMgdGhlIGNhY2hlIGtleSBmb3Igc3RvcmluZyB0aGUgcmVzdWx0IGJhc2VkIG9uIHRoZVxuICogYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgbWFwIGNhY2hlIGtleS4gVGhlIGBmdW5jYFxuICogaXMgaW52b2tlZCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKlxuICogKipOb3RlOioqIFRoZSBjYWNoZSBpcyBleHBvc2VkIGFzIHRoZSBgY2FjaGVgIHByb3BlcnR5IG9uIHRoZSBtZW1vaXplZFxuICogZnVuY3Rpb24uIEl0cyBjcmVhdGlvbiBtYXkgYmUgY3VzdG9taXplZCBieSByZXBsYWNpbmcgdGhlIGBfLm1lbW9pemUuQ2FjaGVgXG4gKiBjb25zdHJ1Y3RvciB3aXRoIG9uZSB3aG9zZSBpbnN0YW5jZXMgaW1wbGVtZW50IHRoZVxuICogW2BNYXBgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wcm9wZXJ0aWVzLW9mLXRoZS1tYXAtcHJvdG90eXBlLW9iamVjdClcbiAqIG1ldGhvZCBpbnRlcmZhY2Ugb2YgYGNsZWFyYCwgYGRlbGV0ZWAsIGBnZXRgLCBgaGFzYCwgYW5kIGBzZXRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Jlc29sdmVyXSBUaGUgZnVuY3Rpb24gdG8gcmVzb2x2ZSB0aGUgY2FjaGUga2V5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSwgJ2InOiAyIH07XG4gKiB2YXIgb3RoZXIgPSB7ICdjJzogMywgJ2QnOiA0IH07XG4gKlxuICogdmFyIHZhbHVlcyA9IF8ubWVtb2l6ZShfLnZhbHVlcyk7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIHZhbHVlcyhvdGhlcik7XG4gKiAvLyA9PiBbMywgNF1cbiAqXG4gKiBvYmplY3QuYSA9IDI7XG4gKiB2YWx1ZXMob2JqZWN0KTtcbiAqIC8vID0+IFsxLCAyXVxuICpcbiAqIC8vIE1vZGlmeSB0aGUgcmVzdWx0IGNhY2hlLlxuICogdmFsdWVzLmNhY2hlLnNldChvYmplY3QsIFsnYScsICdiJ10pO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddXG4gKlxuICogLy8gUmVwbGFjZSBgXy5tZW1vaXplLkNhY2hlYC5cbiAqIF8ubWVtb2l6ZS5DYWNoZSA9IFdlYWtNYXA7XG4gKi9cbmZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9ICdmdW5jdGlvbicgfHwgKHJlc29sdmVyICE9IG51bGwgJiYgdHlwZW9mIHJlc29sdmVyICE9ICdmdW5jdGlvbicpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHZhciBtZW1vaXplZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXSxcbiAgICAgICAgY2FjaGUgPSBtZW1vaXplZC5jYWNoZTtcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpO1xuICAgIH1cbiAgICB2YXIgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCkgfHwgY2FjaGU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwQ2FjaGUpO1xuICByZXR1cm4gbWVtb2l6ZWQ7XG59XG5cbi8vIEV4cG9zZSBgTWFwQ2FjaGVgLlxubWVtb2l6ZS5DYWNoZSA9IE1hcENhY2hlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lbW9pemU7XG4iLCJ2YXIgbWVtb2l6ZSA9IHJlcXVpcmUoJy4vbWVtb2l6ZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgbWF4aW11bSBtZW1vaXplIGNhY2hlIHNpemUuICovXG52YXIgTUFYX01FTU9JWkVfU0laRSA9IDUwMDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWVtb2l6ZWAgd2hpY2ggY2xlYXJzIHRoZSBtZW1vaXplZCBmdW5jdGlvbidzXG4gKiBjYWNoZSB3aGVuIGl0IGV4Y2VlZHMgYE1BWF9NRU1PSVpFX1NJWkVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZUNhcHBlZChmdW5jKSB7XG4gIHZhciByZXN1bHQgPSBtZW1vaXplKGZ1bmMsIGZ1bmN0aW9uKGtleSkge1xuICAgIGlmIChjYWNoZS5zaXplID09PSBNQVhfTUVNT0laRV9TSVpFKSB7XG4gICAgICBjYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9KTtcblxuICB2YXIgY2FjaGUgPSByZXN1bHQuY2FjaGU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZUNhcHBlZDtcbiIsInZhciBtZW1vaXplQ2FwcGVkID0gcmVxdWlyZSgnLi9fbWVtb2l6ZUNhcHBlZCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVQcm9wTmFtZSA9IC9bXi5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwkKSkvZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKlxuICogQ29udmVydHMgYHN0cmluZ2AgdG8gYSBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xudmFyIHN0cmluZ1RvUGF0aCA9IG1lbW9pemVDYXBwZWQoZnVuY3Rpb24oc3RyaW5nKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgaWYgKHN0cmluZy5jaGFyQ29kZUF0KDApID09PSA0NiAvKiAuICovKSB7XG4gICAgcmVzdWx0LnB1c2goJycpO1xuICB9XG4gIHN0cmluZy5yZXBsYWNlKHJlUHJvcE5hbWUsIGZ1bmN0aW9uKG1hdGNoLCBudW1iZXIsIHF1b3RlLCBzdWJTdHJpbmcpIHtcbiAgICByZXN1bHQucHVzaChxdW90ZSA/IHN1YlN0cmluZy5yZXBsYWNlKHJlRXNjYXBlQ2hhciwgJyQxJykgOiAobnVtYmVyIHx8IG1hdGNoKSk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaW5nVG9QYXRoO1xuIiwidmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgc3RyaW5nVG9QYXRoID0gcmVxdWlyZSgnLi9fc3RyaW5nVG9QYXRoJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKlxuICogQ2FzdHMgYHZhbHVlYCB0byBhIHBhdGggYXJyYXkgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY2FzdCBwcm9wZXJ0eSBwYXRoIGFycmF5LlxuICovXG5mdW5jdGlvbiBjYXN0UGF0aCh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICByZXR1cm4gaXNLZXkodmFsdWUsIG9iamVjdCkgPyBbdmFsdWVdIDogc3RyaW5nVG9QYXRoKHRvU3RyaW5nKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FzdFBhdGg7XG4iLCJ2YXIgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyBrZXkgaWYgaXQncyBub3QgYSBzdHJpbmcgb3Igc3ltYm9sLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge3N0cmluZ3xzeW1ib2x9IFJldHVybnMgdGhlIGtleS5cbiAqL1xuZnVuY3Rpb24gdG9LZXkodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvS2V5O1xuIiwidmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZ2V0YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZmF1bHQgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0KG9iamVjdCwgcGF0aCkge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KTtcblxuICB2YXIgaW5kZXggPSAwLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGg7XG5cbiAgd2hpbGUgKG9iamVjdCAhPSBudWxsICYmIGluZGV4IDwgbGVuZ3RoKSB7XG4gICAgb2JqZWN0ID0gb2JqZWN0W3RvS2V5KHBhdGhbaW5kZXgrK10pXTtcbiAgfVxuICByZXR1cm4gKGluZGV4ICYmIGluZGV4ID09IGxlbmd0aCkgPyBvYmplY3QgOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldDtcbiIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgdGhlIHJlc29sdmVkIHZhbHVlIGlzXG4gKiBgdW5kZWZpbmVkYCwgdGhlIGBkZWZhdWx0VmFsdWVgIGlzIHJldHVybmVkIGluIGl0cyBwbGFjZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXSBUaGUgdmFsdWUgcmV0dXJuZWQgZm9yIGB1bmRlZmluZWRgIHJlc29sdmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLmdldChvYmplY3QsICdhWzBdLmIuYycpO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgWydhJywgJzAnLCAnYicsICdjJ10pO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2EuYi5jJywgJ2RlZmF1bHQnKTtcbiAqIC8vID0+ICdkZWZhdWx0J1xuICovXG5mdW5jdGlvbiBnZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0O1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5oYXNJbmAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBrZXkgVGhlIGtleSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUhhc0luKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBrZXkgaW4gT2JqZWN0KG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUhhc0luO1xuIiwidmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKSxcbiAgICB0b0tleSA9IHJlcXVpcmUoJy4vX3RvS2V5Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBleGlzdHMgb24gYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIGNoZWNrLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFzRnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hlY2sgcHJvcGVydGllcy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBoYXNGdW5jKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBmYWxzZTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBrZXkgPSB0b0tleShwYXRoW2luZGV4XSk7XG4gICAgaWYgKCEocmVzdWx0ID0gb2JqZWN0ICE9IG51bGwgJiYgaGFzRnVuYyhvYmplY3QsIGtleSkpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgb2JqZWN0ID0gb2JqZWN0W2tleV07XG4gIH1cbiAgaWYgKHJlc3VsdCB8fCArK2luZGV4ICE9IGxlbmd0aCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgbGVuZ3RoID0gb2JqZWN0ID09IG51bGwgPyAwIDogb2JqZWN0Lmxlbmd0aDtcbiAgcmV0dXJuICEhbGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiYgaXNJbmRleChrZXksIGxlbmd0aCkgJiZcbiAgICAoaXNBcnJheShvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1BhdGg7XG4iLCJ2YXIgYmFzZUhhc0luID0gcmVxdWlyZSgnLi9fYmFzZUhhc0luJyksXG4gICAgaGFzUGF0aCA9IHJlcXVpcmUoJy4vX2hhc1BhdGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGlzIGEgZGlyZWN0IG9yIGluaGVyaXRlZCBwcm9wZXJ0eSBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgcGF0aGAgZXhpc3RzLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSBfLmNyZWF0ZSh7ICdhJzogXy5jcmVhdGUoeyAnYic6IDIgfSkgfSk7XG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdhLmInKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmhhc0luKG9iamVjdCwgWydhJywgJ2InXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsICdiJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBoYXNJbihvYmplY3QsIHBhdGgpIHtcbiAgcmV0dXJuIG9iamVjdCAhPSBudWxsICYmIGhhc1BhdGgob2JqZWN0LCBwYXRoLCBiYXNlSGFzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc0luO1xuIiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKSxcbiAgICBnZXQgPSByZXF1aXJlKCcuL2dldCcpLFxuICAgIGhhc0luID0gcmVxdWlyZSgnLi9oYXNJbicpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc1Byb3BlcnR5YCB3aGljaCBkb2Vzbid0IGNsb25lIGBzcmNWYWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzUHJvcGVydHkocGF0aCwgc3JjVmFsdWUpIHtcbiAgaWYgKGlzS2V5KHBhdGgpICYmIGlzU3RyaWN0Q29tcGFyYWJsZShzcmNWYWx1ZSkpIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUodG9LZXkocGF0aCksIHNyY1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIG9ialZhbHVlID0gZ2V0KG9iamVjdCwgcGF0aCk7XG4gICAgcmV0dXJuIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIG9ialZhbHVlID09PSBzcmNWYWx1ZSlcbiAgICAgID8gaGFzSW4ob2JqZWN0LCBwYXRoKVxuICAgICAgOiBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXNQcm9wZXJ0eTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5O1xuIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUHJvcGVydHlgIHdoaWNoIHN1cHBvcnRzIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5RGVlcChwYXRoKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eURlZXA7XG4iLCJ2YXIgYmFzZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9fYmFzZVByb3BlcnR5JyksXG4gICAgYmFzZVByb3BlcnR5RGVlcCA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eURlZXAnKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vX2lzS2V5JyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBhIGdpdmVuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFjY2Vzc29yIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFtcbiAqICAgeyAnYSc6IHsgJ2InOiAyIH0gfSxcbiAqICAgeyAnYSc6IHsgJ2InOiAxIH0gfVxuICogXTtcbiAqXG4gKiBfLm1hcChvYmplY3RzLCBfLnByb3BlcnR5KCdhLmInKSk7XG4gKiAvLyA9PiBbMiwgMV1cbiAqXG4gKiBfLm1hcChfLnNvcnRCeShvYmplY3RzLCBfLnByb3BlcnR5KFsnYScsICdiJ10pKSwgJ2EuYicpO1xuICogLy8gPT4gWzEsIDJdXG4gKi9cbmZ1bmN0aW9uIHByb3BlcnR5KHBhdGgpIHtcbiAgcmV0dXJuIGlzS2V5KHBhdGgpID8gYmFzZVByb3BlcnR5KHRvS2V5KHBhdGgpKSA6IGJhc2VQcm9wZXJ0eURlZXAocGF0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJvcGVydHk7XG4iLCJ2YXIgYmFzZU1hdGNoZXMgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlcycpLFxuICAgIGJhc2VNYXRjaGVzUHJvcGVydHkgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlc1Byb3BlcnR5JyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5JyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIHByb3BlcnR5ID0gcmVxdWlyZSgnLi9wcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLml0ZXJhdGVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSBbdmFsdWU9Xy5pZGVudGl0eV0gVGhlIHZhbHVlIHRvIGNvbnZlcnQgdG8gYW4gaXRlcmF0ZWUuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIGl0ZXJhdGVlLlxuICovXG5mdW5jdGlvbiBiYXNlSXRlcmF0ZWUodmFsdWUpIHtcbiAgLy8gRG9uJ3Qgc3RvcmUgdGhlIGB0eXBlb2ZgIHJlc3VsdCBpbiBhIHZhcmlhYmxlIHRvIGF2b2lkIGEgSklUIGJ1ZyBpbiBTYWZhcmkgOS5cbiAgLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTYwMzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gaXNBcnJheSh2YWx1ZSlcbiAgICAgID8gYmFzZU1hdGNoZXNQcm9wZXJ0eSh2YWx1ZVswXSwgdmFsdWVbMV0pXG4gICAgICA6IGJhc2VNYXRjaGVzKHZhbHVlKTtcbiAgfVxuICByZXR1cm4gcHJvcGVydHkodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJdGVyYXRlZTtcbiIsInZhciBiYXNlQXNzaWduVmFsdWUgPSByZXF1aXJlKCcuL19iYXNlQXNzaWduVmFsdWUnKSxcbiAgICBiYXNlRm9yT3duID0gcmVxdWlyZSgnLi9fYmFzZUZvck93bicpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpO1xuXG4vKipcbiAqIFRoZSBvcHBvc2l0ZSBvZiBgXy5tYXBWYWx1ZXNgOyB0aGlzIG1ldGhvZCBjcmVhdGVzIGFuIG9iamVjdCB3aXRoIHRoZVxuICogc2FtZSB2YWx1ZXMgYXMgYG9iamVjdGAgYW5kIGtleXMgZ2VuZXJhdGVkIGJ5IHJ1bm5pbmcgZWFjaCBvd24gZW51bWVyYWJsZVxuICogc3RyaW5nIGtleWVkIHByb3BlcnR5IG9mIGBvYmplY3RgIHRocnUgYGl0ZXJhdGVlYC4gVGhlIGl0ZXJhdGVlIGlzIGludm9rZWRcbiAqIHdpdGggdGhyZWUgYXJndW1lbnRzOiAodmFsdWUsIGtleSwgb2JqZWN0KS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuOC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIG9iamVjdC5cbiAqIEBzZWUgXy5tYXBWYWx1ZXNcbiAqIEBleGFtcGxlXG4gKlxuICogXy5tYXBLZXlzKHsgJ2EnOiAxLCAnYic6IDIgfSwgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICogICByZXR1cm4ga2V5ICsgdmFsdWU7XG4gKiB9KTtcbiAqIC8vID0+IHsgJ2ExJzogMSwgJ2IyJzogMiB9XG4gKi9cbmZ1bmN0aW9uIG1hcEtleXMob2JqZWN0LCBpdGVyYXRlZSkge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGl0ZXJhdGVlID0gYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCAzKTtcblxuICBiYXNlRm9yT3duKG9iamVjdCwgZnVuY3Rpb24odmFsdWUsIGtleSwgb2JqZWN0KSB7XG4gICAgYmFzZUFzc2lnblZhbHVlKHJlc3VsdCwgaXRlcmF0ZWUodmFsdWUsIGtleSwgb2JqZWN0KSwgdmFsdWUpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBLZXlzO1xuIiwiaW1wb3J0IHsgbWFwS2V5cyB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZWZpeChzdWJqZWN0LCBwcmVmaXgsIGRlbGltZXRlciA9ICctJykge1xuICAgIGNvbnN0IHByZWZpeGVyID0gKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgc3RyaW5nID0ga2V5IHx8IHZhbHVlO1xuXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBwcmVmaXgsXG4gICAgICAgICAgICBzdHJpbmcucmVwbGFjZShuZXcgUmVnRXhwKGBeJHtwcmVmaXh9JHtkZWxpbWV0ZXJ9P2ApLCAnJylcbiAgICAgICAgXS5qb2luKGRlbGltZXRlcik7XG4gICAgfVxuXG4gICAgaWYoaXNPYmplY3Qoc3ViamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIG1hcEtleXMoc3ViamVjdCwgcHJlZml4ZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVmaXhlcihzdWJqZWN0KTtcbn1cbiIsImltcG9ydCBwcmVmaXggZnJvbSAnQC9IZWxwZXJzL1ByZWZpeC9QcmVmaXgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmFyaWFudCBhdHRyaWJ1dGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdmFyaWFudDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ3ByaW1hcnknXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICB2YXJpYW50Q2xhc3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4KHRoaXMudmFyaWFudCwgdGhpcy4kb3B0aW9ucy5uYW1lKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG4iLCI8dGVtcGxhdGU+XG4gICAgPGEgdi1pZj1cImhyZWZcIiA6aHJlZj1cImhyZWZcIiBjbGFzcz1cImJhZGdlXCIgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKGNsYXNzZXMsIHZhcmlhbnRDbGFzcylcIj5cbiAgICAgICAgPHNsb3Q+e3tsYWJlbH19PC9zbG90PlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIiB2LWh0bWw9XCJhY2Nlc3NpYmlsaXR5XCIvPlxuICAgIDwvYT5cbiAgICA8c3BhbiB2LWVsc2UgY2xhc3M9XCJiYWRnZVwiIDpjbGFzcz1cIm1lcmdlQ2xhc3NlcyhjbGFzc2VzLCB2YXJpYW50Q2xhc3MpXCI+XG4gICAgICAgIDxzbG90Pnt7bGFiZWx9fTwvc2xvdD5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCIgdi1odG1sPVwiYWNjZXNzaWJpbGl0eVwiLz5cbiAgICA8L3NwYW4+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgcHJlZml4IGZyb20gJ0AvSGVscGVycy9QcmVmaXgvUHJlZml4JztcbmltcG9ydCBWYXJpYW50IGZyb20gJ0AvTWl4aW5zL1ZhcmlhbnQvVmFyaWFudCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdiYWRnZScsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgVmFyaWFudFxuICAgIF0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2NyZWVuIHJlYWRlciBhY2Nlc3NpYmlsaXR5IGxhYmVsLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBhY2Nlc3NpYmlsaXR5OiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGFuIGhyZWYgYXR0cmlidXRlIGlzIHBhc3NlZCwgdGhlIGJhZGdlIGJlY29tZXMgYW4gYW5jaG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBocmVmOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBiYWRnZSBhcHBlYXIgYXMgcGlsbCBzaGFwZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHBpbGw6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBiYWRnZSBsYWJlbC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgbGFiZWw6IFtOdW1iZXIsIFN0cmluZ10sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBiYWRnZSBhcHBlYXIgYXMgc2Vjb25kYXJ5IGluIHNpemUgdG8gdGhlIHBhcmVudCBlbGVtZW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBzZWNvbmRhcnk6IEJvb2xlYW5cblxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuXG4gICAgICAgIGNsYXNzZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJlZml4KHtcbiAgICAgICAgICAgICAgICAncGlsbCc6IHRoaXMucGlsbCxcbiAgICAgICAgICAgICAgICAnc2Vjb25kYXJ5JzogdGhpcy5zZWNvbmRhcnlcbiAgICAgICAgICAgIH0sIHRoaXMuJG9wdGlvbnMubmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IEJhZGdlIGZyb20gJy4vQmFkZ2UnO1xuaW1wb3J0IFZ1ZUluc3RhbGxlciBmcm9tICdAL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgQmFkZ2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQmFkZ2U7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGB1bmRlZmluZWRgLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNVbmRlZmluZWQodm9pZCAwKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVW5kZWZpbmVkKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNVbmRlZmluZWQ7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlZHVjZWAgYW5kIGBfLnJlZHVjZVJpZ2h0YCwgd2l0aG91dCBzdXBwb3J0XG4gKiBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcywgd2hpY2ggaXRlcmF0ZXMgb3ZlciBgY29sbGVjdGlvbmAgdXNpbmcgYGVhY2hGdW5jYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gYWNjdW11bGF0b3IgVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaXRBY2N1bSBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBvciBsYXN0IGVsZW1lbnQgb2ZcbiAqICBgY29sbGVjdGlvbmAgYXMgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlYWNoRnVuYyBUaGUgZnVuY3Rpb24gdG8gaXRlcmF0ZSBvdmVyIGBjb2xsZWN0aW9uYC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlZHVjZShjb2xsZWN0aW9uLCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRBY2N1bSwgZWFjaEZ1bmMpIHtcbiAgZWFjaEZ1bmMoY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpbml0QWNjdW1cbiAgICAgID8gKGluaXRBY2N1bSA9IGZhbHNlLCB2YWx1ZSlcbiAgICAgIDogaXRlcmF0ZWUoYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gIH0pO1xuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVJlZHVjZTtcbiIsInZhciBhcnJheVJlZHVjZSA9IHJlcXVpcmUoJy4vX2FycmF5UmVkdWNlJyksXG4gICAgYmFzZUVhY2ggPSByZXF1aXJlKCcuL19iYXNlRWFjaCcpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGJhc2VSZWR1Y2UgPSByZXF1aXJlKCcuL19iYXNlUmVkdWNlJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIFJlZHVjZXMgYGNvbGxlY3Rpb25gIHRvIGEgdmFsdWUgd2hpY2ggaXMgdGhlIGFjY3VtdWxhdGVkIHJlc3VsdCBvZiBydW5uaW5nXG4gKiBlYWNoIGVsZW1lbnQgaW4gYGNvbGxlY3Rpb25gIHRocnUgYGl0ZXJhdGVlYCwgd2hlcmUgZWFjaCBzdWNjZXNzaXZlXG4gKiBpbnZvY2F0aW9uIGlzIHN1cHBsaWVkIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIHByZXZpb3VzLiBJZiBgYWNjdW11bGF0b3JgXG4gKiBpcyBub3QgZ2l2ZW4sIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBjb2xsZWN0aW9uYCBpcyB1c2VkIGFzIHRoZSBpbml0aWFsXG4gKiB2YWx1ZS4gVGhlIGl0ZXJhdGVlIGlzIGludm9rZWQgd2l0aCBmb3VyIGFyZ3VtZW50czpcbiAqIChhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4fGtleSwgY29sbGVjdGlvbikuXG4gKlxuICogTWFueSBsb2Rhc2ggbWV0aG9kcyBhcmUgZ3VhcmRlZCB0byB3b3JrIGFzIGl0ZXJhdGVlcyBmb3IgbWV0aG9kcyBsaWtlXG4gKiBgXy5yZWR1Y2VgLCBgXy5yZWR1Y2VSaWdodGAsIGFuZCBgXy50cmFuc2Zvcm1gLlxuICpcbiAqIFRoZSBndWFyZGVkIG1ldGhvZHMgYXJlOlxuICogYGFzc2lnbmAsIGBkZWZhdWx0c2AsIGBkZWZhdWx0c0RlZXBgLCBgaW5jbHVkZXNgLCBgbWVyZ2VgLCBgb3JkZXJCeWAsXG4gKiBhbmQgYHNvcnRCeWBcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAc2VlIF8ucmVkdWNlUmlnaHRcbiAqIEBleGFtcGxlXG4gKlxuICogXy5yZWR1Y2UoWzEsIDJdLCBmdW5jdGlvbihzdW0sIG4pIHtcbiAqICAgcmV0dXJuIHN1bSArIG47XG4gKiB9LCAwKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLnJlZHVjZSh7ICdhJzogMSwgJ2InOiAyLCAnYyc6IDEgfSwgZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gKiAgIChyZXN1bHRbdmFsdWVdIHx8IChyZXN1bHRbdmFsdWVdID0gW10pKS5wdXNoKGtleSk7XG4gKiAgIHJldHVybiByZXN1bHQ7XG4gKiB9LCB7fSk7XG4gKiAvLyA9PiB7ICcxJzogWydhJywgJ2MnXSwgJzInOiBbJ2InXSB9IChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIHJlZHVjZShjb2xsZWN0aW9uLCBpdGVyYXRlZSwgYWNjdW11bGF0b3IpIHtcbiAgdmFyIGZ1bmMgPSBpc0FycmF5KGNvbGxlY3Rpb24pID8gYXJyYXlSZWR1Y2UgOiBiYXNlUmVkdWNlLFxuICAgICAgaW5pdEFjY3VtID0gYXJndW1lbnRzLmxlbmd0aCA8IDM7XG5cbiAgcmV0dXJuIGZ1bmMoY29sbGVjdGlvbiwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCA0KSwgYWNjdW11bGF0b3IsIGluaXRBY2N1bSwgYmFzZUVhY2gpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjZTtcbiIsInZhciBhc3NpZ25WYWx1ZSA9IHJlcXVpcmUoJy4vX2Fzc2lnblZhbHVlJyksXG4gICAgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4JyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnNldGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgcGF0aCBjcmVhdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VTZXQob2JqZWN0LCBwYXRoLCB2YWx1ZSwgY3VzdG9taXplcikge1xuICBpZiAoIWlzT2JqZWN0KG9iamVjdCkpIHtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcGF0aC5sZW5ndGgsXG4gICAgICBsYXN0SW5kZXggPSBsZW5ndGggLSAxLFxuICAgICAgbmVzdGVkID0gb2JqZWN0O1xuXG4gIHdoaWxlIChuZXN0ZWQgIT0gbnVsbCAmJiArK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHRvS2V5KHBhdGhbaW5kZXhdKSxcbiAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmIChpbmRleCAhPSBsYXN0SW5kZXgpIHtcbiAgICAgIHZhciBvYmpWYWx1ZSA9IG5lc3RlZFtrZXldO1xuICAgICAgbmV3VmFsdWUgPSBjdXN0b21pemVyID8gY3VzdG9taXplcihvYmpWYWx1ZSwga2V5LCBuZXN0ZWQpIDogdW5kZWZpbmVkO1xuICAgICAgaWYgKG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbmV3VmFsdWUgPSBpc09iamVjdChvYmpWYWx1ZSlcbiAgICAgICAgICA/IG9ialZhbHVlXG4gICAgICAgICAgOiAoaXNJbmRleChwYXRoW2luZGV4ICsgMV0pID8gW10gOiB7fSk7XG4gICAgICB9XG4gICAgfVxuICAgIGFzc2lnblZhbHVlKG5lc3RlZCwga2V5LCBuZXdWYWx1ZSk7XG4gICAgbmVzdGVkID0gbmVzdGVkW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlU2V0O1xuIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0JyksXG4gICAgYmFzZVNldCA9IHJlcXVpcmUoJy4vX2Jhc2VTZXQnKSxcbiAgICBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgIGBfLnBpY2tCeWAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmdbXX0gcGF0aHMgVGhlIHByb3BlcnR5IHBhdGhzIHRvIHBpY2suXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIHByb3BlcnR5LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gYmFzZVBpY2tCeShvYmplY3QsIHBhdGhzLCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwYXRocy5sZW5ndGgsXG4gICAgICByZXN1bHQgPSB7fTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBwYXRoID0gcGF0aHNbaW5kZXhdLFxuICAgICAgICB2YWx1ZSA9IGJhc2VHZXQob2JqZWN0LCBwYXRoKTtcblxuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIHBhdGgpKSB7XG4gICAgICBiYXNlU2V0KHJlc3VsdCwgY2FzdFBhdGgocGF0aCwgb2JqZWN0KSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQaWNrQnk7XG4iLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgZ2V0U3ltYm9scyA9IHJlcXVpcmUoJy4vX2dldFN5bWJvbHMnKSxcbiAgICBzdHViQXJyYXkgPSByZXF1aXJlKCcuL3N0dWJBcnJheScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlR2V0U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGFuZCBpbmhlcml0ZWQgZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzSW4gPSAhbmF0aXZlR2V0U3ltYm9scyA/IHN0dWJBcnJheSA6IGZ1bmN0aW9uKG9iamVjdCkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHdoaWxlIChvYmplY3QpIHtcbiAgICBhcnJheVB1c2gocmVzdWx0LCBnZXRTeW1ib2xzKG9iamVjdCkpO1xuICAgIG9iamVjdCA9IGdldFByb3RvdHlwZShvYmplY3QpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFN5bWJvbHNJbjtcbiIsInZhciBiYXNlR2V0QWxsS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRBbGxLZXlzJyksXG4gICAgZ2V0U3ltYm9sc0luID0gcmVxdWlyZSgnLi9fZ2V0U3ltYm9sc0luJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi9rZXlzSW4nKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzSW4ob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXNJbiwgZ2V0U3ltYm9sc0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRBbGxLZXlzSW47XG4iLCJ2YXIgYXJyYXlNYXAgPSByZXF1aXJlKCcuL19hcnJheU1hcCcpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGJhc2VQaWNrQnkgPSByZXF1aXJlKCcuL19iYXNlUGlja0J5JyksXG4gICAgZ2V0QWxsS2V5c0luID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5c0luJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgY29tcG9zZWQgb2YgdGhlIGBvYmplY3RgIHByb3BlcnRpZXMgYHByZWRpY2F0ZWAgcmV0dXJuc1xuICogdHJ1dGh5IGZvci4gVGhlIHByZWRpY2F0ZSBpcyBpbnZva2VkIHdpdGggdHdvIGFyZ3VtZW50czogKHZhbHVlLCBrZXkpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIHNvdXJjZSBvYmplY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJlZGljYXRlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBwcm9wZXJ0eS5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSwgJ2InOiAnMicsICdjJzogMyB9O1xuICpcbiAqIF8ucGlja0J5KG9iamVjdCwgXy5pc051bWJlcik7XG4gKiAvLyA9PiB7ICdhJzogMSwgJ2MnOiAzIH1cbiAqL1xuZnVuY3Rpb24gcGlja0J5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICB2YXIgcHJvcHMgPSBhcnJheU1hcChnZXRBbGxLZXlzSW4ob2JqZWN0KSwgZnVuY3Rpb24ocHJvcCkge1xuICAgIHJldHVybiBbcHJvcF07XG4gIH0pO1xuICBwcmVkaWNhdGUgPSBiYXNlSXRlcmF0ZWUocHJlZGljYXRlKTtcbiAgcmV0dXJuIGJhc2VQaWNrQnkob2JqZWN0LCBwcm9wcywgZnVuY3Rpb24odmFsdWUsIHBhdGgpIHtcbiAgICByZXR1cm4gcHJlZGljYXRlKHZhbHVlLCBwYXRoWzBdKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGlja0J5O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBgbnVsbGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYG51bGxgLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNOdWxsKG51bGwpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOdWxsKHZvaWQgMCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bGwodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTnVsbDtcbiIsInZhciBiYXNlRWFjaCA9IHJlcXVpcmUoJy4vX2Jhc2VFYWNoJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmlsdGVyYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGaWx0ZXIoY29sbGVjdGlvbiwgcHJlZGljYXRlKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pKSB7XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmlsdGVyO1xuIiwidmFyIGFycmF5RmlsdGVyID0gcmVxdWlyZSgnLi9fYXJyYXlGaWx0ZXInKSxcbiAgICBiYXNlRmlsdGVyID0gcmVxdWlyZSgnLi9fYmFzZUZpbHRlcicpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBJdGVyYXRlcyBvdmVyIGVsZW1lbnRzIG9mIGBjb2xsZWN0aW9uYCwgcmV0dXJuaW5nIGFuIGFycmF5IG9mIGFsbCBlbGVtZW50c1xuICogYHByZWRpY2F0ZWAgcmV0dXJucyB0cnV0aHkgZm9yLiBUaGUgcHJlZGljYXRlIGlzIGludm9rZWQgd2l0aCB0aHJlZVxuICogYXJndW1lbnRzOiAodmFsdWUsIGluZGV4fGtleSwgY29sbGVjdGlvbikuXG4gKlxuICogKipOb3RlOioqIFVubGlrZSBgXy5yZW1vdmVgLCB0aGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJlZGljYXRlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqIEBzZWUgXy5yZWplY3RcbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScsICdhZ2UnOiAzNiwgJ2FjdGl2ZSc6IHRydWUgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJywgICAnYWdlJzogNDAsICdhY3RpdmUnOiBmYWxzZSB9XG4gKiBdO1xuICpcbiAqIF8uZmlsdGVyKHVzZXJzLCBmdW5jdGlvbihvKSB7IHJldHVybiAhby5hY3RpdmU7IH0pO1xuICogLy8gPT4gb2JqZWN0cyBmb3IgWydmcmVkJ11cbiAqXG4gKiAvLyBUaGUgYF8ubWF0Y2hlc2AgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5maWx0ZXIodXNlcnMsIHsgJ2FnZSc6IDM2LCAnYWN0aXZlJzogdHJ1ZSB9KTtcbiAqIC8vID0+IG9iamVjdHMgZm9yIFsnYmFybmV5J11cbiAqXG4gKiAvLyBUaGUgYF8ubWF0Y2hlc1Byb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLmZpbHRlcih1c2VycywgWydhY3RpdmUnLCBmYWxzZV0pO1xuICogLy8gPT4gb2JqZWN0cyBmb3IgWydmcmVkJ11cbiAqXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmlsdGVyKHVzZXJzLCAnYWN0aXZlJyk7XG4gKiAvLyA9PiBvYmplY3RzIGZvciBbJ2Jhcm5leSddXG4gKi9cbmZ1bmN0aW9uIGZpbHRlcihjb2xsZWN0aW9uLCBwcmVkaWNhdGUpIHtcbiAgdmFyIGZ1bmMgPSBpc0FycmF5KGNvbGxlY3Rpb24pID8gYXJyYXlGaWx0ZXIgOiBiYXNlRmlsdGVyO1xuICByZXR1cm4gZnVuYyhjb2xsZWN0aW9uLCBiYXNlSXRlcmF0ZWUocHJlZGljYXRlLCAzKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmlsdGVyO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN0cmluZ2AgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN0cmluZywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3RyaW5nKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3RyaW5nKDEpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fFxuICAgICghaXNBcnJheSh2YWx1ZSkgJiYgaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzdHJpbmdUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaW5nO1xuIiwidmFyIGJhc2VQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eScpO1xuXG4vKipcbiAqIEdldHMgdGhlIHNpemUgb2YgYW4gQVNDSUkgYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyBpbnNwZWN0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgc3RyaW5nIHNpemUuXG4gKi9cbnZhciBhc2NpaVNpemUgPSBiYXNlUHJvcGVydHkoJ2xlbmd0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFzY2lpU2l6ZTtcbiIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZic7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc1pXSiA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgc3RyaW5ncyB3aXRoIFt6ZXJvLXdpZHRoIGpvaW5lcnMgb3IgY29kZSBwb2ludHMgZnJvbSB0aGUgYXN0cmFsIHBsYW5lc10oaHR0cDovL2Vldi5lZS9ibG9nLzIwMTUvMDkvMTIvZGFyay1jb3JuZXJzLW9mLXVuaWNvZGUvKS4gKi9cbnZhciByZUhhc1VuaWNvZGUgPSBSZWdFeHAoJ1snICsgcnNaV0ogKyByc0FzdHJhbFJhbmdlICArIHJzQ29tYm9SYW5nZSArIHJzVmFyUmFuZ2UgKyAnXScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgc3RyaW5nYCBjb250YWlucyBVbmljb2RlIHN5bWJvbHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGEgc3ltYm9sIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1VuaWNvZGUoc3RyaW5nKSB7XG4gIHJldHVybiByZUhhc1VuaWNvZGUudGVzdChzdHJpbmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1VuaWNvZGU7XG4iLCIvKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNBc3RyYWxSYW5nZSA9ICdcXFxcdWQ4MDAtXFxcXHVkZmZmJyxcbiAgICByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmJyxcbiAgICByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgPSAnXFxcXHVmZTIwLVxcXFx1ZmUyZicsXG4gICAgcnNDb21ib1N5bWJvbHNSYW5nZSA9ICdcXFxcdTIwZDAtXFxcXHUyMGZmJyxcbiAgICByc0NvbWJvUmFuZ2UgPSByc0NvbWJvTWFya3NSYW5nZSArIHJlQ29tYm9IYWxmTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNBc3RyYWwgPSAnWycgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzQ29tYm8gPSAnWycgKyByc0NvbWJvUmFuZ2UgKyAnXScsXG4gICAgcnNGaXR6ID0gJ1xcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXScsXG4gICAgcnNNb2RpZmllciA9ICcoPzonICsgcnNDb21ibyArICd8JyArIHJzRml0eiArICcpJyxcbiAgICByc05vbkFzdHJhbCA9ICdbXicgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzUmVnaW9uYWwgPSAnKD86XFxcXHVkODNjW1xcXFx1ZGRlNi1cXFxcdWRkZmZdKXsyfScsXG4gICAgcnNTdXJyUGFpciA9ICdbXFxcXHVkODAwLVxcXFx1ZGJmZl1bXFxcXHVkYzAwLVxcXFx1ZGZmZl0nLFxuICAgIHJzWldKID0gJ1xcXFx1MjAwZCc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSByZWdleGVzLiAqL1xudmFyIHJlT3B0TW9kID0gcnNNb2RpZmllciArICc/JyxcbiAgICByc09wdFZhciA9ICdbJyArIHJzVmFyUmFuZ2UgKyAnXT8nLFxuICAgIHJzT3B0Sm9pbiA9ICcoPzonICsgcnNaV0ogKyAnKD86JyArIFtyc05vbkFzdHJhbCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNPcHRWYXIgKyByZU9wdE1vZCArICcpKicsXG4gICAgcnNTZXEgPSByc09wdFZhciArIHJlT3B0TW9kICsgcnNPcHRKb2luLFxuICAgIHJzU3ltYm9sID0gJyg/OicgKyBbcnNOb25Bc3RyYWwgKyByc0NvbWJvICsgJz8nLCByc0NvbWJvLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyLCByc0FzdHJhbF0uam9pbignfCcpICsgJyknO1xuXG4vKiogVXNlZCB0byBtYXRjaCBbc3RyaW5nIHN5bWJvbHNdKGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LXVuaWNvZGUpLiAqL1xudmFyIHJlVW5pY29kZSA9IFJlZ0V4cChyc0ZpdHogKyAnKD89JyArIHJzRml0eiArICcpfCcgKyByc1N5bWJvbCArIHJzU2VxLCAnZycpO1xuXG4vKipcbiAqIEdldHMgdGhlIHNpemUgb2YgYSBVbmljb2RlIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHN0cmluZyBzaXplLlxuICovXG5mdW5jdGlvbiB1bmljb2RlU2l6ZShzdHJpbmcpIHtcbiAgdmFyIHJlc3VsdCA9IHJlVW5pY29kZS5sYXN0SW5kZXggPSAwO1xuICB3aGlsZSAocmVVbmljb2RlLnRlc3Qoc3RyaW5nKSkge1xuICAgICsrcmVzdWx0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pY29kZVNpemU7XG4iLCJ2YXIgYXNjaWlTaXplID0gcmVxdWlyZSgnLi9fYXNjaWlTaXplJyksXG4gICAgaGFzVW5pY29kZSA9IHJlcXVpcmUoJy4vX2hhc1VuaWNvZGUnKSxcbiAgICB1bmljb2RlU2l6ZSA9IHJlcXVpcmUoJy4vX3VuaWNvZGVTaXplJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbnVtYmVyIG9mIHN5bWJvbHMgaW4gYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgc3RyaW5nIHNpemUuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1NpemUoc3RyaW5nKSB7XG4gIHJldHVybiBoYXNVbmljb2RlKHN0cmluZylcbiAgICA/IHVuaWNvZGVTaXplKHN0cmluZylcbiAgICA6IGFzY2lpU2l6ZShzdHJpbmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1NpemU7XG4iLCJ2YXIgYmFzZUtleXMgPSByZXF1aXJlKCcuL19iYXNlS2V5cycpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGlzU3RyaW5nID0gcmVxdWlyZSgnLi9pc1N0cmluZycpLFxuICAgIHN0cmluZ1NpemUgPSByZXF1aXJlKCcuL19zdHJpbmdTaXplJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJztcblxuLyoqXG4gKiBHZXRzIHRoZSBzaXplIG9mIGBjb2xsZWN0aW9uYCBieSByZXR1cm5pbmcgaXRzIGxlbmd0aCBmb3IgYXJyYXktbGlrZVxuICogdmFsdWVzIG9yIHRoZSBudW1iZXIgb2Ygb3duIGVudW1lcmFibGUgc3RyaW5nIGtleWVkIHByb3BlcnRpZXMgZm9yIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpbnNwZWN0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgY29sbGVjdGlvbiBzaXplLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnNpemUoWzEsIDIsIDNdKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLnNpemUoeyAnYSc6IDEsICdiJzogMiB9KTtcbiAqIC8vID0+IDJcbiAqXG4gKiBfLnNpemUoJ3BlYmJsZXMnKTtcbiAqIC8vID0+IDdcbiAqL1xuZnVuY3Rpb24gc2l6ZShjb2xsZWN0aW9uKSB7XG4gIGlmIChjb2xsZWN0aW9uID09IG51bGwpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBpZiAoaXNBcnJheUxpa2UoY29sbGVjdGlvbikpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcoY29sbGVjdGlvbikgPyBzdHJpbmdTaXplKGNvbGxlY3Rpb24pIDogY29sbGVjdGlvbi5sZW5ndGg7XG4gIH1cbiAgdmFyIHRhZyA9IGdldFRhZyhjb2xsZWN0aW9uKTtcbiAgaWYgKHRhZyA9PSBtYXBUYWcgfHwgdGFnID09IHNldFRhZykge1xuICAgIHJldHVybiBjb2xsZWN0aW9uLnNpemU7XG4gIH1cbiAgcmV0dXJuIGJhc2VLZXlzKGNvbGxlY3Rpb24pLmxlbmd0aDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaXplO1xuIiwidmFyIGJhc2VFYWNoID0gcmVxdWlyZSgnLi9fYmFzZUVhY2gnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXBgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYmFzZU1hcChjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IGlzQXJyYXlMaWtlKGNvbGxlY3Rpb24pID8gQXJyYXkoY29sbGVjdGlvbi5sZW5ndGgpIDogW107XG5cbiAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGtleSwgY29sbGVjdGlvbikge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IGl0ZXJhdGVlKHZhbHVlLCBrZXksIGNvbGxlY3Rpb24pO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWFwO1xuIiwidmFyIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBiYXNlTWFwID0gcmVxdWlyZSgnLi9fYmFzZU1hcCcpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHZhbHVlcyBieSBydW5uaW5nIGVhY2ggZWxlbWVudCBpbiBgY29sbGVjdGlvbmAgdGhydVxuICogYGl0ZXJhdGVlYC4gVGhlIGl0ZXJhdGVlIGlzIGludm9rZWQgd2l0aCB0aHJlZSBhcmd1bWVudHM6XG4gKiAodmFsdWUsIGluZGV4fGtleSwgY29sbGVjdGlvbikuXG4gKlxuICogTWFueSBsb2Rhc2ggbWV0aG9kcyBhcmUgZ3VhcmRlZCB0byB3b3JrIGFzIGl0ZXJhdGVlcyBmb3IgbWV0aG9kcyBsaWtlXG4gKiBgXy5ldmVyeWAsIGBfLmZpbHRlcmAsIGBfLm1hcGAsIGBfLm1hcFZhbHVlc2AsIGBfLnJlamVjdGAsIGFuZCBgXy5zb21lYC5cbiAqXG4gKiBUaGUgZ3VhcmRlZCBtZXRob2RzIGFyZTpcbiAqIGBhcnlgLCBgY2h1bmtgLCBgY3VycnlgLCBgY3VycnlSaWdodGAsIGBkcm9wYCwgYGRyb3BSaWdodGAsIGBldmVyeWAsXG4gKiBgZmlsbGAsIGBpbnZlcnRgLCBgcGFyc2VJbnRgLCBgcmFuZG9tYCwgYHJhbmdlYCwgYHJhbmdlUmlnaHRgLCBgcmVwZWF0YCxcbiAqIGBzYW1wbGVTaXplYCwgYHNsaWNlYCwgYHNvbWVgLCBgc29ydEJ5YCwgYHNwbGl0YCwgYHRha2VgLCBgdGFrZVJpZ2h0YCxcbiAqIGB0ZW1wbGF0ZWAsIGB0cmltYCwgYHRyaW1FbmRgLCBgdHJpbVN0YXJ0YCwgYW5kIGB3b3Jkc2BcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBtYXBwZWQgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIHNxdWFyZShuKSB7XG4gKiAgIHJldHVybiBuICogbjtcbiAqIH1cbiAqXG4gKiBfLm1hcChbNCwgOF0sIHNxdWFyZSk7XG4gKiAvLyA9PiBbMTYsIDY0XVxuICpcbiAqIF8ubWFwKHsgJ2EnOiA0LCAnYic6IDggfSwgc3F1YXJlKTtcbiAqIC8vID0+IFsxNiwgNjRdIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogdmFyIHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJyB9XG4gKiBdO1xuICpcbiAqIC8vIFRoZSBgXy5wcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5tYXAodXNlcnMsICd1c2VyJyk7XG4gKiAvLyA9PiBbJ2Jhcm5leScsICdmcmVkJ11cbiAqL1xuZnVuY3Rpb24gbWFwKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gIHZhciBmdW5jID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IGFycmF5TWFwIDogYmFzZU1hcDtcbiAgcmV0dXJuIGZ1bmMoY29sbGVjdGlvbiwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCAzKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5zbGljZWAgd2l0aG91dCBhbiBpdGVyYXRlZSBjYWxsIGd1YXJkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2xpY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIFRoZSBzdGFydCBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kPWFycmF5Lmxlbmd0aF0gVGhlIGVuZCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgc2xpY2Ugb2YgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYmFzZVNsaWNlKGFycmF5LCBzdGFydCwgZW5kKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChzdGFydCA8IDApIHtcbiAgICBzdGFydCA9IC1zdGFydCA+IGxlbmd0aCA/IDAgOiAobGVuZ3RoICsgc3RhcnQpO1xuICB9XG4gIGVuZCA9IGVuZCA+IGxlbmd0aCA/IGxlbmd0aCA6IGVuZDtcbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuZ3RoO1xuICB9XG4gIGxlbmd0aCA9IHN0YXJ0ID4gZW5kID8gMCA6ICgoZW5kIC0gc3RhcnQpID4+PiAwKTtcbiAgc3RhcnQgPj4+PSAwO1xuXG4gIHZhciByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBhcnJheVtpbmRleCArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTbGljZTtcbiIsInZhciBiYXNlU2xpY2UgPSByZXF1aXJlKCcuL19iYXNlU2xpY2UnKTtcblxuLyoqXG4gKiBDYXN0cyBgYXJyYXlgIHRvIGEgc2xpY2UgaWYgaXQncyBuZWVkZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IFRoZSBzdGFydCBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kPWFycmF5Lmxlbmd0aF0gVGhlIGVuZCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY2FzdCBzbGljZS5cbiAqL1xuZnVuY3Rpb24gY2FzdFNsaWNlKGFycmF5LCBzdGFydCwgZW5kKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogZW5kO1xuICByZXR1cm4gKCFzdGFydCAmJiBlbmQgPj0gbGVuZ3RoKSA/IGFycmF5IDogYmFzZVNsaWNlKGFycmF5LCBzdGFydCwgZW5kKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYXN0U2xpY2U7XG4iLCIvKipcbiAqIENvbnZlcnRzIGFuIEFTQ0lJIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhc2NpaVRvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuc3BsaXQoJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzY2lpVG9BcnJheTtcbiIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZic7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0FzdHJhbCA9ICdbJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNDb21ibyA9ICdbJyArIHJzQ29tYm9SYW5nZSArICddJyxcbiAgICByc0ZpdHogPSAnXFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdJyxcbiAgICByc01vZGlmaWVyID0gJyg/OicgKyByc0NvbWJvICsgJ3wnICsgcnNGaXR6ICsgJyknLFxuICAgIHJzTm9uQXN0cmFsID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNSZWdpb25hbCA9ICcoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9JyxcbiAgICByc1N1cnJQYWlyID0gJ1tcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXScsXG4gICAgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIHJlZ2V4ZXMuICovXG52YXIgcmVPcHRNb2QgPSByc01vZGlmaWVyICsgJz8nLFxuICAgIHJzT3B0VmFyID0gJ1snICsgcnNWYXJSYW5nZSArICddPycsXG4gICAgcnNPcHRKb2luID0gJyg/OicgKyByc1pXSiArICcoPzonICsgW3JzTm9uQXN0cmFsLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc09wdFZhciArIHJlT3B0TW9kICsgJykqJyxcbiAgICByc1NlcSA9IHJzT3B0VmFyICsgcmVPcHRNb2QgKyByc09wdEpvaW4sXG4gICAgcnNTeW1ib2wgPSAnKD86JyArIFtyc05vbkFzdHJhbCArIHJzQ29tYm8gKyAnPycsIHJzQ29tYm8sIHJzUmVnaW9uYWwsIHJzU3VyclBhaXIsIHJzQXN0cmFsXS5qb2luKCd8JykgKyAnKSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIFtzdHJpbmcgc3ltYm9sc10oaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtdW5pY29kZSkuICovXG52YXIgcmVVbmljb2RlID0gUmVnRXhwKHJzRml0eiArICcoPz0nICsgcnNGaXR6ICsgJyl8JyArIHJzU3ltYm9sICsgcnNTZXEsICdnJyk7XG5cbi8qKlxuICogQ29udmVydHMgYSBVbmljb2RlIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiB1bmljb2RlVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZVVuaWNvZGUpIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaWNvZGVUb0FycmF5O1xuIiwidmFyIGFzY2lpVG9BcnJheSA9IHJlcXVpcmUoJy4vX2FzY2lpVG9BcnJheScpLFxuICAgIGhhc1VuaWNvZGUgPSByZXF1aXJlKCcuL19oYXNVbmljb2RlJyksXG4gICAgdW5pY29kZVRvQXJyYXkgPSByZXF1aXJlKCcuL191bmljb2RlVG9BcnJheScpO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gaGFzVW5pY29kZShzdHJpbmcpXG4gICAgPyB1bmljb2RlVG9BcnJheShzdHJpbmcpXG4gICAgOiBhc2NpaVRvQXJyYXkoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdUb0FycmF5O1xuIiwidmFyIGNhc3RTbGljZSA9IHJlcXVpcmUoJy4vX2Nhc3RTbGljZScpLFxuICAgIGhhc1VuaWNvZGUgPSByZXF1aXJlKCcuL19oYXNVbmljb2RlJyksXG4gICAgc3RyaW5nVG9BcnJheSA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvQXJyYXknKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5sb3dlckZpcnN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWUgVGhlIG5hbWUgb2YgdGhlIGBTdHJpbmdgIGNhc2UgbWV0aG9kIHRvIHVzZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhc2VGaXJzdChtZXRob2ROYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuXG4gICAgdmFyIHN0clN5bWJvbHMgPSBoYXNVbmljb2RlKHN0cmluZylcbiAgICAgID8gc3RyaW5nVG9BcnJheShzdHJpbmcpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIHZhciBjaHIgPSBzdHJTeW1ib2xzXG4gICAgICA/IHN0clN5bWJvbHNbMF1cbiAgICAgIDogc3RyaW5nLmNoYXJBdCgwKTtcblxuICAgIHZhciB0cmFpbGluZyA9IHN0clN5bWJvbHNcbiAgICAgID8gY2FzdFNsaWNlKHN0clN5bWJvbHMsIDEpLmpvaW4oJycpXG4gICAgICA6IHN0cmluZy5zbGljZSgxKTtcblxuICAgIHJldHVybiBjaHJbbWV0aG9kTmFtZV0oKSArIHRyYWlsaW5nO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNhc2VGaXJzdDtcbiIsInZhciBjcmVhdGVDYXNlRmlyc3QgPSByZXF1aXJlKCcuL19jcmVhdGVDYXNlRmlyc3QnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGBzdHJpbmdgIHRvIHVwcGVyIGNhc2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udXBwZXJGaXJzdCgnZnJlZCcpO1xuICogLy8gPT4gJ0ZyZWQnXG4gKlxuICogXy51cHBlckZpcnN0KCdGUkVEJyk7XG4gKiAvLyA9PiAnRlJFRCdcbiAqL1xudmFyIHVwcGVyRmlyc3QgPSBjcmVhdGVDYXNlRmlyc3QoJ3RvVXBwZXJDYXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdXBwZXJGaXJzdDtcbiIsInZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKSxcbiAgICB1cHBlckZpcnN0ID0gcmVxdWlyZSgnLi91cHBlckZpcnN0Jyk7XG5cbi8qKlxuICogQ29udmVydHMgdGhlIGZpcnN0IGNoYXJhY3RlciBvZiBgc3RyaW5nYCB0byB1cHBlciBjYXNlIGFuZCB0aGUgcmVtYWluaW5nXG4gKiB0byBsb3dlciBjYXNlLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGNhcGl0YWxpemUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjYXBpdGFsaXplZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uY2FwaXRhbGl6ZSgnRlJFRCcpO1xuICogLy8gPT4gJ0ZyZWQnXG4gKi9cbmZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiB1cHBlckZpcnN0KHRvU3RyaW5nKHN0cmluZykudG9Mb3dlckNhc2UoKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FwaXRhbGl6ZTtcbiIsInZhciBjYXBpdGFsaXplID0gcmVxdWlyZSgnLi9jYXBpdGFsaXplJyksXG4gICAgY3JlYXRlQ29tcG91bmRlciA9IHJlcXVpcmUoJy4vX2NyZWF0ZUNvbXBvdW5kZXInKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBbY2FtZWwgY2FzZV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ2FtZWxDYXNlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gW3N0cmluZz0nJ10gVGhlIHN0cmluZyB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY2FtZWwgY2FzZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmNhbWVsQ2FzZSgnRm9vIEJhcicpO1xuICogLy8gPT4gJ2Zvb0JhcidcbiAqXG4gKiBfLmNhbWVsQ2FzZSgnLS1mb28tYmFyLS0nKTtcbiAqIC8vID0+ICdmb29CYXInXG4gKlxuICogXy5jYW1lbENhc2UoJ19fRk9PX0JBUl9fJyk7XG4gKiAvLyA9PiAnZm9vQmFyJ1xuICovXG52YXIgY2FtZWxDYXNlID0gY3JlYXRlQ29tcG91bmRlcihmdW5jdGlvbihyZXN1bHQsIHdvcmQsIGluZGV4KSB7XG4gIHdvcmQgPSB3b3JkLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiByZXN1bHQgKyAoaW5kZXggPyBjYXBpdGFsaXplKHdvcmQpIDogd29yZCk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBjYW1lbENhc2U7XG4iLCJ2YXIgV2Vha01hcCA9IHJlcXVpcmUoJy4vX1dlYWtNYXAnKTtcblxuLyoqIFVzZWQgdG8gc3RvcmUgZnVuY3Rpb24gbWV0YWRhdGEuICovXG52YXIgbWV0YU1hcCA9IFdlYWtNYXAgJiYgbmV3IFdlYWtNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gbWV0YU1hcDtcbiIsInZhciBpZGVudGl0eSA9IHJlcXVpcmUoJy4vaWRlbnRpdHknKSxcbiAgICBtZXRhTWFwID0gcmVxdWlyZSgnLi9fbWV0YU1hcCcpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBzZXREYXRhYCB3aXRob3V0IHN1cHBvcnQgZm9yIGhvdCBsb29wIHNob3J0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBhc3NvY2lhdGUgbWV0YWRhdGEgd2l0aC5cbiAqIEBwYXJhbSB7Kn0gZGF0YSBUaGUgbWV0YWRhdGEuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGZ1bmNgLlxuICovXG52YXIgYmFzZVNldERhdGEgPSAhbWV0YU1hcCA/IGlkZW50aXR5IDogZnVuY3Rpb24oZnVuYywgZGF0YSkge1xuICBtZXRhTWFwLnNldChmdW5jLCBkYXRhKTtcbiAgcmV0dXJuIGZ1bmM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTZXREYXRhO1xuIiwidmFyIGJhc2VDcmVhdGUgPSByZXF1aXJlKCcuL19iYXNlQ3JlYXRlJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgYW4gaW5zdGFuY2Ugb2YgYEN0b3JgIHJlZ2FyZGxlc3Mgb2ZcbiAqIHdoZXRoZXIgaXQgd2FzIGludm9rZWQgYXMgcGFydCBvZiBhIGBuZXdgIGV4cHJlc3Npb24gb3IgYnkgYGNhbGxgIG9yIGBhcHBseWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IEN0b3IgVGhlIGNvbnN0cnVjdG9yIHRvIHdyYXAuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB3cmFwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVDdG9yKEN0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIC8vIFVzZSBhIGBzd2l0Y2hgIHN0YXRlbWVudCB0byB3b3JrIHdpdGggY2xhc3MgY29uc3RydWN0b3JzLiBTZWVcbiAgICAvLyBodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWZ1bmN0aW9uLW9iamVjdHMtY2FsbC10aGlzYXJndW1lbnQtYXJndW1lbnRzbGlzdFxuICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEN0b3I7XG4gICAgICBjYXNlIDE6IHJldHVybiBuZXcgQ3RvcihhcmdzWzBdKTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDdG9yKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgY2FzZSAzOiByZXR1cm4gbmV3IEN0b3IoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICBjYXNlIDQ6IHJldHVybiBuZXcgQ3RvcihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgICAgIGNhc2UgNTogcmV0dXJuIG5ldyBDdG9yKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10sIGFyZ3NbNF0pO1xuICAgICAgY2FzZSA2OiByZXR1cm4gbmV3IEN0b3IoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSwgYXJnc1s0XSwgYXJnc1s1XSk7XG4gICAgICBjYXNlIDc6IHJldHVybiBuZXcgQ3RvcihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdLCBhcmdzWzRdLCBhcmdzWzVdLCBhcmdzWzZdKTtcbiAgICB9XG4gICAgdmFyIHRoaXNCaW5kaW5nID0gYmFzZUNyZWF0ZShDdG9yLnByb3RvdHlwZSksXG4gICAgICAgIHJlc3VsdCA9IEN0b3IuYXBwbHkodGhpc0JpbmRpbmcsIGFyZ3MpO1xuXG4gICAgLy8gTWltaWMgdGhlIGNvbnN0cnVjdG9yJ3MgYHJldHVybmAgYmVoYXZpb3IuXG4gICAgLy8gU2VlIGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDEzLjIuMiBmb3IgbW9yZSBkZXRhaWxzLlxuICAgIHJldHVybiBpc09iamVjdChyZXN1bHQpID8gcmVzdWx0IDogdGhpc0JpbmRpbmc7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ3RvcjtcbiIsInZhciBjcmVhdGVDdG9yID0gcmVxdWlyZSgnLi9fY3JlYXRlQ3RvcicpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGZ1bmN0aW9uIG1ldGFkYXRhLiAqL1xudmFyIFdSQVBfQklORF9GTEFHID0gMTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3cmFwcyBgZnVuY2AgdG8gaW52b2tlIGl0IHdpdGggdGhlIG9wdGlvbmFsIGB0aGlzYFxuICogYmluZGluZyBvZiBgdGhpc0FyZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBjcmVhdGVXcmFwYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHdyYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJpbmQoZnVuYywgYml0bWFzaywgdGhpc0FyZykge1xuICB2YXIgaXNCaW5kID0gYml0bWFzayAmIFdSQVBfQklORF9GTEFHLFxuICAgICAgQ3RvciA9IGNyZWF0ZUN0b3IoZnVuYyk7XG5cbiAgZnVuY3Rpb24gd3JhcHBlcigpIHtcbiAgICB2YXIgZm4gPSAodGhpcyAmJiB0aGlzICE9PSByb290ICYmIHRoaXMgaW5zdGFuY2VvZiB3cmFwcGVyKSA/IEN0b3IgOiBmdW5jO1xuICAgIHJldHVybiBmbi5hcHBseShpc0JpbmQgPyB0aGlzQXJnIDogdGhpcywgYXJndW1lbnRzKTtcbiAgfVxuICByZXR1cm4gd3JhcHBlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCaW5kO1xuIiwiLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgdGhhdCBpcyB0aGUgY29tcG9zaXRpb24gb2YgcGFydGlhbGx5IGFwcGxpZWQgYXJndW1lbnRzLFxuICogcGxhY2Vob2xkZXJzLCBhbmQgcHJvdmlkZWQgYXJndW1lbnRzIGludG8gYSBzaW5nbGUgYXJyYXkgb2YgYXJndW1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRoZSBwcm92aWRlZCBhcmd1bWVudHMuXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJ0aWFscyBUaGUgYXJndW1lbnRzIHRvIHByZXBlbmQgdG8gdGhvc2UgcHJvdmlkZWQuXG4gKiBAcGFyYW0ge0FycmF5fSBob2xkZXJzIFRoZSBgcGFydGlhbHNgIHBsYWNlaG9sZGVyIGluZGV4ZXMuXG4gKiBAcGFyYW1zIHtib29sZWFufSBbaXNDdXJyaWVkXSBTcGVjaWZ5IGNvbXBvc2luZyBmb3IgYSBjdXJyaWVkIGZ1bmN0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgY29tcG9zZWQgYXJndW1lbnRzLlxuICovXG5mdW5jdGlvbiBjb21wb3NlQXJncyhhcmdzLCBwYXJ0aWFscywgaG9sZGVycywgaXNDdXJyaWVkKSB7XG4gIHZhciBhcmdzSW5kZXggPSAtMSxcbiAgICAgIGFyZ3NMZW5ndGggPSBhcmdzLmxlbmd0aCxcbiAgICAgIGhvbGRlcnNMZW5ndGggPSBob2xkZXJzLmxlbmd0aCxcbiAgICAgIGxlZnRJbmRleCA9IC0xLFxuICAgICAgbGVmdExlbmd0aCA9IHBhcnRpYWxzLmxlbmd0aCxcbiAgICAgIHJhbmdlTGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3NMZW5ndGggLSBob2xkZXJzTGVuZ3RoLCAwKSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlZnRMZW5ndGggKyByYW5nZUxlbmd0aCksXG4gICAgICBpc1VuY3VycmllZCA9ICFpc0N1cnJpZWQ7XG5cbiAgd2hpbGUgKCsrbGVmdEluZGV4IDwgbGVmdExlbmd0aCkge1xuICAgIHJlc3VsdFtsZWZ0SW5kZXhdID0gcGFydGlhbHNbbGVmdEluZGV4XTtcbiAgfVxuICB3aGlsZSAoKythcmdzSW5kZXggPCBob2xkZXJzTGVuZ3RoKSB7XG4gICAgaWYgKGlzVW5jdXJyaWVkIHx8IGFyZ3NJbmRleCA8IGFyZ3NMZW5ndGgpIHtcbiAgICAgIHJlc3VsdFtob2xkZXJzW2FyZ3NJbmRleF1dID0gYXJnc1thcmdzSW5kZXhdO1xuICAgIH1cbiAgfVxuICB3aGlsZSAocmFuZ2VMZW5ndGgtLSkge1xuICAgIHJlc3VsdFtsZWZ0SW5kZXgrK10gPSBhcmdzW2FyZ3NJbmRleCsrXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbXBvc2VBcmdzO1xuIiwiLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgY29tcG9zZUFyZ3NgIGV4Y2VwdCB0aGF0IHRoZSBhcmd1bWVudHMgY29tcG9zaXRpb25cbiAqIGlzIHRhaWxvcmVkIGZvciBgXy5wYXJ0aWFsUmlnaHRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzIFRoZSBwcm92aWRlZCBhcmd1bWVudHMuXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJ0aWFscyBUaGUgYXJndW1lbnRzIHRvIGFwcGVuZCB0byB0aG9zZSBwcm92aWRlZC5cbiAqIEBwYXJhbSB7QXJyYXl9IGhvbGRlcnMgVGhlIGBwYXJ0aWFsc2AgcGxhY2Vob2xkZXIgaW5kZXhlcy5cbiAqIEBwYXJhbXMge2Jvb2xlYW59IFtpc0N1cnJpZWRdIFNwZWNpZnkgY29tcG9zaW5nIGZvciBhIGN1cnJpZWQgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiBjb21wb3NlZCBhcmd1bWVudHMuXG4gKi9cbmZ1bmN0aW9uIGNvbXBvc2VBcmdzUmlnaHQoYXJncywgcGFydGlhbHMsIGhvbGRlcnMsIGlzQ3VycmllZCkge1xuICB2YXIgYXJnc0luZGV4ID0gLTEsXG4gICAgICBhcmdzTGVuZ3RoID0gYXJncy5sZW5ndGgsXG4gICAgICBob2xkZXJzSW5kZXggPSAtMSxcbiAgICAgIGhvbGRlcnNMZW5ndGggPSBob2xkZXJzLmxlbmd0aCxcbiAgICAgIHJpZ2h0SW5kZXggPSAtMSxcbiAgICAgIHJpZ2h0TGVuZ3RoID0gcGFydGlhbHMubGVuZ3RoLFxuICAgICAgcmFuZ2VMZW5ndGggPSBuYXRpdmVNYXgoYXJnc0xlbmd0aCAtIGhvbGRlcnNMZW5ndGgsIDApLFxuICAgICAgcmVzdWx0ID0gQXJyYXkocmFuZ2VMZW5ndGggKyByaWdodExlbmd0aCksXG4gICAgICBpc1VuY3VycmllZCA9ICFpc0N1cnJpZWQ7XG5cbiAgd2hpbGUgKCsrYXJnc0luZGV4IDwgcmFuZ2VMZW5ndGgpIHtcbiAgICByZXN1bHRbYXJnc0luZGV4XSA9IGFyZ3NbYXJnc0luZGV4XTtcbiAgfVxuICB2YXIgb2Zmc2V0ID0gYXJnc0luZGV4O1xuICB3aGlsZSAoKytyaWdodEluZGV4IDwgcmlnaHRMZW5ndGgpIHtcbiAgICByZXN1bHRbb2Zmc2V0ICsgcmlnaHRJbmRleF0gPSBwYXJ0aWFsc1tyaWdodEluZGV4XTtcbiAgfVxuICB3aGlsZSAoKytob2xkZXJzSW5kZXggPCBob2xkZXJzTGVuZ3RoKSB7XG4gICAgaWYgKGlzVW5jdXJyaWVkIHx8IGFyZ3NJbmRleCA8IGFyZ3NMZW5ndGgpIHtcbiAgICAgIHJlc3VsdFtvZmZzZXQgKyBob2xkZXJzW2hvbGRlcnNJbmRleF1dID0gYXJnc1thcmdzSW5kZXgrK107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29tcG9zZUFyZ3NSaWdodDtcbiIsIi8qKlxuICogR2V0cyB0aGUgbnVtYmVyIG9mIGBwbGFjZWhvbGRlcmAgb2NjdXJyZW5jZXMgaW4gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHBsYWNlaG9sZGVyIFRoZSBwbGFjZWhvbGRlciB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgcGxhY2Vob2xkZXIgY291bnQuXG4gKi9cbmZ1bmN0aW9uIGNvdW50SG9sZGVycyhhcnJheSwgcGxhY2Vob2xkZXIpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IDA7XG5cbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKGFycmF5W2xlbmd0aF0gPT09IHBsYWNlaG9sZGVyKSB7XG4gICAgICArK3Jlc3VsdDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb3VudEhvbGRlcnM7XG4iLCIvKipcbiAqIFRoZSBmdW5jdGlvbiB3aG9zZSBwcm90b3R5cGUgY2hhaW4gc2VxdWVuY2Ugd3JhcHBlcnMgaW5oZXJpdCBmcm9tLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGJhc2VMb2Rhc2goKSB7XG4gIC8vIE5vIG9wZXJhdGlvbiBwZXJmb3JtZWQuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUxvZGFzaDtcbiIsInZhciBiYXNlQ3JlYXRlID0gcmVxdWlyZSgnLi9fYmFzZUNyZWF0ZScpLFxuICAgIGJhc2VMb2Rhc2ggPSByZXF1aXJlKCcuL19iYXNlTG9kYXNoJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHRoZSBtYXhpbXVtIGxlbmd0aCBhbmQgaW5kZXggb2YgYW4gYXJyYXkuICovXG52YXIgTUFYX0FSUkFZX0xFTkdUSCA9IDQyOTQ5NjcyOTU7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGxhenkgd3JhcHBlciBvYmplY3Qgd2hpY2ggd3JhcHMgYHZhbHVlYCB0byBlbmFibGUgbGF6eSBldmFsdWF0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHdyYXAuXG4gKi9cbmZ1bmN0aW9uIExhenlXcmFwcGVyKHZhbHVlKSB7XG4gIHRoaXMuX193cmFwcGVkX18gPSB2YWx1ZTtcbiAgdGhpcy5fX2FjdGlvbnNfXyA9IFtdO1xuICB0aGlzLl9fZGlyX18gPSAxO1xuICB0aGlzLl9fZmlsdGVyZWRfXyA9IGZhbHNlO1xuICB0aGlzLl9faXRlcmF0ZWVzX18gPSBbXTtcbiAgdGhpcy5fX3Rha2VDb3VudF9fID0gTUFYX0FSUkFZX0xFTkdUSDtcbiAgdGhpcy5fX3ZpZXdzX18gPSBbXTtcbn1cblxuLy8gRW5zdXJlIGBMYXp5V3JhcHBlcmAgaXMgYW4gaW5zdGFuY2Ugb2YgYGJhc2VMb2Rhc2hgLlxuTGF6eVdyYXBwZXIucHJvdG90eXBlID0gYmFzZUNyZWF0ZShiYXNlTG9kYXNoLnByb3RvdHlwZSk7XG5MYXp5V3JhcHBlci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBMYXp5V3JhcHBlcjtcblxubW9kdWxlLmV4cG9ydHMgPSBMYXp5V3JhcHBlcjtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8ubm9vcCk7XG4gKiAvLyA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gKi9cbmZ1bmN0aW9uIG5vb3AoKSB7XG4gIC8vIE5vIG9wZXJhdGlvbiBwZXJmb3JtZWQuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbm9vcDtcbiIsInZhciBtZXRhTWFwID0gcmVxdWlyZSgnLi9fbWV0YU1hcCcpLFxuICAgIG5vb3AgPSByZXF1aXJlKCcuL25vb3AnKTtcblxuLyoqXG4gKiBHZXRzIG1ldGFkYXRhIGZvciBgZnVuY2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHF1ZXJ5LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIG1ldGFkYXRhIGZvciBgZnVuY2AuXG4gKi9cbnZhciBnZXREYXRhID0gIW1ldGFNYXAgPyBub29wIDogZnVuY3Rpb24oZnVuYykge1xuICByZXR1cm4gbWV0YU1hcC5nZXQoZnVuYyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldERhdGE7XG4iLCIvKiogVXNlZCB0byBsb29rdXAgdW5taW5pZmllZCBmdW5jdGlvbiBuYW1lcy4gKi9cbnZhciByZWFsTmFtZXMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSByZWFsTmFtZXM7XG4iLCJ2YXIgcmVhbE5hbWVzID0gcmVxdWlyZSgnLi9fcmVhbE5hbWVzJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgbmFtZSBvZiBgZnVuY2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgZnVuY3Rpb24gbmFtZS5cbiAqL1xuZnVuY3Rpb24gZ2V0RnVuY05hbWUoZnVuYykge1xuICB2YXIgcmVzdWx0ID0gKGZ1bmMubmFtZSArICcnKSxcbiAgICAgIGFycmF5ID0gcmVhbE5hbWVzW3Jlc3VsdF0sXG4gICAgICBsZW5ndGggPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHJlYWxOYW1lcywgcmVzdWx0KSA/IGFycmF5Lmxlbmd0aCA6IDA7XG5cbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgdmFyIGRhdGEgPSBhcnJheVtsZW5ndGhdLFxuICAgICAgICBvdGhlckZ1bmMgPSBkYXRhLmZ1bmM7XG4gICAgaWYgKG90aGVyRnVuYyA9PSBudWxsIHx8IG90aGVyRnVuYyA9PSBmdW5jKSB7XG4gICAgICByZXR1cm4gZGF0YS5uYW1lO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEZ1bmNOYW1lO1xuIiwidmFyIGJhc2VDcmVhdGUgPSByZXF1aXJlKCcuL19iYXNlQ3JlYXRlJyksXG4gICAgYmFzZUxvZGFzaCA9IHJlcXVpcmUoJy4vX2Jhc2VMb2Rhc2gnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBjb25zdHJ1Y3RvciBmb3IgY3JlYXRpbmcgYGxvZGFzaGAgd3JhcHBlciBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB3cmFwLlxuICogQHBhcmFtIHtib29sZWFufSBbY2hhaW5BbGxdIEVuYWJsZSBleHBsaWNpdCBtZXRob2QgY2hhaW4gc2VxdWVuY2VzLlxuICovXG5mdW5jdGlvbiBMb2Rhc2hXcmFwcGVyKHZhbHVlLCBjaGFpbkFsbCkge1xuICB0aGlzLl9fd3JhcHBlZF9fID0gdmFsdWU7XG4gIHRoaXMuX19hY3Rpb25zX18gPSBbXTtcbiAgdGhpcy5fX2NoYWluX18gPSAhIWNoYWluQWxsO1xuICB0aGlzLl9faW5kZXhfXyA9IDA7XG4gIHRoaXMuX192YWx1ZXNfXyA9IHVuZGVmaW5lZDtcbn1cblxuTG9kYXNoV3JhcHBlci5wcm90b3R5cGUgPSBiYXNlQ3JlYXRlKGJhc2VMb2Rhc2gucHJvdG90eXBlKTtcbkxvZGFzaFdyYXBwZXIucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTG9kYXNoV3JhcHBlcjtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2Rhc2hXcmFwcGVyO1xuIiwidmFyIExhenlXcmFwcGVyID0gcmVxdWlyZSgnLi9fTGF6eVdyYXBwZXInKSxcbiAgICBMb2Rhc2hXcmFwcGVyID0gcmVxdWlyZSgnLi9fTG9kYXNoV3JhcHBlcicpLFxuICAgIGNvcHlBcnJheSA9IHJlcXVpcmUoJy4vX2NvcHlBcnJheScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgd3JhcHBlcmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB3cmFwcGVyIFRoZSB3cmFwcGVyIHRvIGNsb25lLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2xvbmVkIHdyYXBwZXIuXG4gKi9cbmZ1bmN0aW9uIHdyYXBwZXJDbG9uZSh3cmFwcGVyKSB7XG4gIGlmICh3cmFwcGVyIGluc3RhbmNlb2YgTGF6eVdyYXBwZXIpIHtcbiAgICByZXR1cm4gd3JhcHBlci5jbG9uZSgpO1xuICB9XG4gIHZhciByZXN1bHQgPSBuZXcgTG9kYXNoV3JhcHBlcih3cmFwcGVyLl9fd3JhcHBlZF9fLCB3cmFwcGVyLl9fY2hhaW5fXyk7XG4gIHJlc3VsdC5fX2FjdGlvbnNfXyA9IGNvcHlBcnJheSh3cmFwcGVyLl9fYWN0aW9uc19fKTtcbiAgcmVzdWx0Ll9faW5kZXhfXyAgPSB3cmFwcGVyLl9faW5kZXhfXztcbiAgcmVzdWx0Ll9fdmFsdWVzX18gPSB3cmFwcGVyLl9fdmFsdWVzX187XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd3JhcHBlckNsb25lO1xuIiwidmFyIExhenlXcmFwcGVyID0gcmVxdWlyZSgnLi9fTGF6eVdyYXBwZXInKSxcbiAgICBMb2Rhc2hXcmFwcGVyID0gcmVxdWlyZSgnLi9fTG9kYXNoV3JhcHBlcicpLFxuICAgIGJhc2VMb2Rhc2ggPSByZXF1aXJlKCcuL19iYXNlTG9kYXNoJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyksXG4gICAgd3JhcHBlckNsb25lID0gcmVxdWlyZSgnLi9fd3JhcHBlckNsb25lJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGBsb2Rhc2hgIG9iamVjdCB3aGljaCB3cmFwcyBgdmFsdWVgIHRvIGVuYWJsZSBpbXBsaWNpdCBtZXRob2RcbiAqIGNoYWluIHNlcXVlbmNlcy4gTWV0aG9kcyB0aGF0IG9wZXJhdGUgb24gYW5kIHJldHVybiBhcnJheXMsIGNvbGxlY3Rpb25zLFxuICogYW5kIGZ1bmN0aW9ucyBjYW4gYmUgY2hhaW5lZCB0b2dldGhlci4gTWV0aG9kcyB0aGF0IHJldHJpZXZlIGEgc2luZ2xlIHZhbHVlXG4gKiBvciBtYXkgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlIHdpbGwgYXV0b21hdGljYWxseSBlbmQgdGhlIGNoYWluIHNlcXVlbmNlXG4gKiBhbmQgcmV0dXJuIHRoZSB1bndyYXBwZWQgdmFsdWUuIE90aGVyd2lzZSwgdGhlIHZhbHVlIG11c3QgYmUgdW53cmFwcGVkXG4gKiB3aXRoIGBfI3ZhbHVlYC5cbiAqXG4gKiBFeHBsaWNpdCBjaGFpbiBzZXF1ZW5jZXMsIHdoaWNoIG11c3QgYmUgdW53cmFwcGVkIHdpdGggYF8jdmFsdWVgLCBtYXkgYmVcbiAqIGVuYWJsZWQgdXNpbmcgYF8uY2hhaW5gLlxuICpcbiAqIFRoZSBleGVjdXRpb24gb2YgY2hhaW5lZCBtZXRob2RzIGlzIGxhenksIHRoYXQgaXMsIGl0J3MgZGVmZXJyZWQgdW50aWxcbiAqIGBfI3ZhbHVlYCBpcyBpbXBsaWNpdGx5IG9yIGV4cGxpY2l0bHkgY2FsbGVkLlxuICpcbiAqIExhenkgZXZhbHVhdGlvbiBhbGxvd3Mgc2V2ZXJhbCBtZXRob2RzIHRvIHN1cHBvcnQgc2hvcnRjdXQgZnVzaW9uLlxuICogU2hvcnRjdXQgZnVzaW9uIGlzIGFuIG9wdGltaXphdGlvbiB0byBtZXJnZSBpdGVyYXRlZSBjYWxsczsgdGhpcyBhdm9pZHNcbiAqIHRoZSBjcmVhdGlvbiBvZiBpbnRlcm1lZGlhdGUgYXJyYXlzIGFuZCBjYW4gZ3JlYXRseSByZWR1Y2UgdGhlIG51bWJlciBvZlxuICogaXRlcmF0ZWUgZXhlY3V0aW9ucy4gU2VjdGlvbnMgb2YgYSBjaGFpbiBzZXF1ZW5jZSBxdWFsaWZ5IGZvciBzaG9ydGN1dFxuICogZnVzaW9uIGlmIHRoZSBzZWN0aW9uIGlzIGFwcGxpZWQgdG8gYW4gYXJyYXkgYW5kIGl0ZXJhdGVlcyBhY2NlcHQgb25seVxuICogb25lIGFyZ3VtZW50LiBUaGUgaGV1cmlzdGljIGZvciB3aGV0aGVyIGEgc2VjdGlvbiBxdWFsaWZpZXMgZm9yIHNob3J0Y3V0XG4gKiBmdXNpb24gaXMgc3ViamVjdCB0byBjaGFuZ2UuXG4gKlxuICogQ2hhaW5pbmcgaXMgc3VwcG9ydGVkIGluIGN1c3RvbSBidWlsZHMgYXMgbG9uZyBhcyB0aGUgYF8jdmFsdWVgIG1ldGhvZCBpc1xuICogZGlyZWN0bHkgb3IgaW5kaXJlY3RseSBpbmNsdWRlZCBpbiB0aGUgYnVpbGQuXG4gKlxuICogSW4gYWRkaXRpb24gdG8gbG9kYXNoIG1ldGhvZHMsIHdyYXBwZXJzIGhhdmUgYEFycmF5YCBhbmQgYFN0cmluZ2AgbWV0aG9kcy5cbiAqXG4gKiBUaGUgd3JhcHBlciBgQXJyYXlgIG1ldGhvZHMgYXJlOlxuICogYGNvbmNhdGAsIGBqb2luYCwgYHBvcGAsIGBwdXNoYCwgYHNoaWZ0YCwgYHNvcnRgLCBgc3BsaWNlYCwgYW5kIGB1bnNoaWZ0YFxuICpcbiAqIFRoZSB3cmFwcGVyIGBTdHJpbmdgIG1ldGhvZHMgYXJlOlxuICogYHJlcGxhY2VgIGFuZCBgc3BsaXRgXG4gKlxuICogVGhlIHdyYXBwZXIgbWV0aG9kcyB0aGF0IHN1cHBvcnQgc2hvcnRjdXQgZnVzaW9uIGFyZTpcbiAqIGBhdGAsIGBjb21wYWN0YCwgYGRyb3BgLCBgZHJvcFJpZ2h0YCwgYGRyb3BXaGlsZWAsIGBmaWx0ZXJgLCBgZmluZGAsXG4gKiBgZmluZExhc3RgLCBgaGVhZGAsIGBpbml0aWFsYCwgYGxhc3RgLCBgbWFwYCwgYHJlamVjdGAsIGByZXZlcnNlYCwgYHNsaWNlYCxcbiAqIGB0YWlsYCwgYHRha2VgLCBgdGFrZVJpZ2h0YCwgYHRha2VSaWdodFdoaWxlYCwgYHRha2VXaGlsZWAsIGFuZCBgdG9BcnJheWBcbiAqXG4gKiBUaGUgY2hhaW5hYmxlIHdyYXBwZXIgbWV0aG9kcyBhcmU6XG4gKiBgYWZ0ZXJgLCBgYXJ5YCwgYGFzc2lnbmAsIGBhc3NpZ25JbmAsIGBhc3NpZ25JbldpdGhgLCBgYXNzaWduV2l0aGAsIGBhdGAsXG4gKiBgYmVmb3JlYCwgYGJpbmRgLCBgYmluZEFsbGAsIGBiaW5kS2V5YCwgYGNhc3RBcnJheWAsIGBjaGFpbmAsIGBjaHVua2AsXG4gKiBgY29tbWl0YCwgYGNvbXBhY3RgLCBgY29uY2F0YCwgYGNvbmZvcm1zYCwgYGNvbnN0YW50YCwgYGNvdW50QnlgLCBgY3JlYXRlYCxcbiAqIGBjdXJyeWAsIGBkZWJvdW5jZWAsIGBkZWZhdWx0c2AsIGBkZWZhdWx0c0RlZXBgLCBgZGVmZXJgLCBgZGVsYXlgLFxuICogYGRpZmZlcmVuY2VgLCBgZGlmZmVyZW5jZUJ5YCwgYGRpZmZlcmVuY2VXaXRoYCwgYGRyb3BgLCBgZHJvcFJpZ2h0YCxcbiAqIGBkcm9wUmlnaHRXaGlsZWAsIGBkcm9wV2hpbGVgLCBgZXh0ZW5kYCwgYGV4dGVuZFdpdGhgLCBgZmlsbGAsIGBmaWx0ZXJgLFxuICogYGZsYXRNYXBgLCBgZmxhdE1hcERlZXBgLCBgZmxhdE1hcERlcHRoYCwgYGZsYXR0ZW5gLCBgZmxhdHRlbkRlZXBgLFxuICogYGZsYXR0ZW5EZXB0aGAsIGBmbGlwYCwgYGZsb3dgLCBgZmxvd1JpZ2h0YCwgYGZyb21QYWlyc2AsIGBmdW5jdGlvbnNgLFxuICogYGZ1bmN0aW9uc0luYCwgYGdyb3VwQnlgLCBgaW5pdGlhbGAsIGBpbnRlcnNlY3Rpb25gLCBgaW50ZXJzZWN0aW9uQnlgLFxuICogYGludGVyc2VjdGlvbldpdGhgLCBgaW52ZXJ0YCwgYGludmVydEJ5YCwgYGludm9rZU1hcGAsIGBpdGVyYXRlZWAsIGBrZXlCeWAsXG4gKiBga2V5c2AsIGBrZXlzSW5gLCBgbWFwYCwgYG1hcEtleXNgLCBgbWFwVmFsdWVzYCwgYG1hdGNoZXNgLCBgbWF0Y2hlc1Byb3BlcnR5YCxcbiAqIGBtZW1vaXplYCwgYG1lcmdlYCwgYG1lcmdlV2l0aGAsIGBtZXRob2RgLCBgbWV0aG9kT2ZgLCBgbWl4aW5gLCBgbmVnYXRlYCxcbiAqIGBudGhBcmdgLCBgb21pdGAsIGBvbWl0QnlgLCBgb25jZWAsIGBvcmRlckJ5YCwgYG92ZXJgLCBgb3ZlckFyZ3NgLFxuICogYG92ZXJFdmVyeWAsIGBvdmVyU29tZWAsIGBwYXJ0aWFsYCwgYHBhcnRpYWxSaWdodGAsIGBwYXJ0aXRpb25gLCBgcGlja2AsXG4gKiBgcGlja0J5YCwgYHBsYW50YCwgYHByb3BlcnR5YCwgYHByb3BlcnR5T2ZgLCBgcHVsbGAsIGBwdWxsQWxsYCwgYHB1bGxBbGxCeWAsXG4gKiBgcHVsbEFsbFdpdGhgLCBgcHVsbEF0YCwgYHB1c2hgLCBgcmFuZ2VgLCBgcmFuZ2VSaWdodGAsIGByZWFyZ2AsIGByZWplY3RgLFxuICogYHJlbW92ZWAsIGByZXN0YCwgYHJldmVyc2VgLCBgc2FtcGxlU2l6ZWAsIGBzZXRgLCBgc2V0V2l0aGAsIGBzaHVmZmxlYCxcbiAqIGBzbGljZWAsIGBzb3J0YCwgYHNvcnRCeWAsIGBzcGxpY2VgLCBgc3ByZWFkYCwgYHRhaWxgLCBgdGFrZWAsIGB0YWtlUmlnaHRgLFxuICogYHRha2VSaWdodFdoaWxlYCwgYHRha2VXaGlsZWAsIGB0YXBgLCBgdGhyb3R0bGVgLCBgdGhydWAsIGB0b0FycmF5YCxcbiAqIGB0b1BhaXJzYCwgYHRvUGFpcnNJbmAsIGB0b1BhdGhgLCBgdG9QbGFpbk9iamVjdGAsIGB0cmFuc2Zvcm1gLCBgdW5hcnlgLFxuICogYHVuaW9uYCwgYHVuaW9uQnlgLCBgdW5pb25XaXRoYCwgYHVuaXFgLCBgdW5pcUJ5YCwgYHVuaXFXaXRoYCwgYHVuc2V0YCxcbiAqIGB1bnNoaWZ0YCwgYHVuemlwYCwgYHVuemlwV2l0aGAsIGB1cGRhdGVgLCBgdXBkYXRlV2l0aGAsIGB2YWx1ZXNgLFxuICogYHZhbHVlc0luYCwgYHdpdGhvdXRgLCBgd3JhcGAsIGB4b3JgLCBgeG9yQnlgLCBgeG9yV2l0aGAsIGB6aXBgLFxuICogYHppcE9iamVjdGAsIGB6aXBPYmplY3REZWVwYCwgYW5kIGB6aXBXaXRoYFxuICpcbiAqIFRoZSB3cmFwcGVyIG1ldGhvZHMgdGhhdCBhcmUgKipub3QqKiBjaGFpbmFibGUgYnkgZGVmYXVsdCBhcmU6XG4gKiBgYWRkYCwgYGF0dGVtcHRgLCBgY2FtZWxDYXNlYCwgYGNhcGl0YWxpemVgLCBgY2VpbGAsIGBjbGFtcGAsIGBjbG9uZWAsXG4gKiBgY2xvbmVEZWVwYCwgYGNsb25lRGVlcFdpdGhgLCBgY2xvbmVXaXRoYCwgYGNvbmZvcm1zVG9gLCBgZGVidXJyYCxcbiAqIGBkZWZhdWx0VG9gLCBgZGl2aWRlYCwgYGVhY2hgLCBgZWFjaFJpZ2h0YCwgYGVuZHNXaXRoYCwgYGVxYCwgYGVzY2FwZWAsXG4gKiBgZXNjYXBlUmVnRXhwYCwgYGV2ZXJ5YCwgYGZpbmRgLCBgZmluZEluZGV4YCwgYGZpbmRLZXlgLCBgZmluZExhc3RgLFxuICogYGZpbmRMYXN0SW5kZXhgLCBgZmluZExhc3RLZXlgLCBgZmlyc3RgLCBgZmxvb3JgLCBgZm9yRWFjaGAsIGBmb3JFYWNoUmlnaHRgLFxuICogYGZvckluYCwgYGZvckluUmlnaHRgLCBgZm9yT3duYCwgYGZvck93blJpZ2h0YCwgYGdldGAsIGBndGAsIGBndGVgLCBgaGFzYCxcbiAqIGBoYXNJbmAsIGBoZWFkYCwgYGlkZW50aXR5YCwgYGluY2x1ZGVzYCwgYGluZGV4T2ZgLCBgaW5SYW5nZWAsIGBpbnZva2VgLFxuICogYGlzQXJndW1lbnRzYCwgYGlzQXJyYXlgLCBgaXNBcnJheUJ1ZmZlcmAsIGBpc0FycmF5TGlrZWAsIGBpc0FycmF5TGlrZU9iamVjdGAsXG4gKiBgaXNCb29sZWFuYCwgYGlzQnVmZmVyYCwgYGlzRGF0ZWAsIGBpc0VsZW1lbnRgLCBgaXNFbXB0eWAsIGBpc0VxdWFsYCxcbiAqIGBpc0VxdWFsV2l0aGAsIGBpc0Vycm9yYCwgYGlzRmluaXRlYCwgYGlzRnVuY3Rpb25gLCBgaXNJbnRlZ2VyYCwgYGlzTGVuZ3RoYCxcbiAqIGBpc01hcGAsIGBpc01hdGNoYCwgYGlzTWF0Y2hXaXRoYCwgYGlzTmFOYCwgYGlzTmF0aXZlYCwgYGlzTmlsYCwgYGlzTnVsbGAsXG4gKiBgaXNOdW1iZXJgLCBgaXNPYmplY3RgLCBgaXNPYmplY3RMaWtlYCwgYGlzUGxhaW5PYmplY3RgLCBgaXNSZWdFeHBgLFxuICogYGlzU2FmZUludGVnZXJgLCBgaXNTZXRgLCBgaXNTdHJpbmdgLCBgaXNVbmRlZmluZWRgLCBgaXNUeXBlZEFycmF5YCxcbiAqIGBpc1dlYWtNYXBgLCBgaXNXZWFrU2V0YCwgYGpvaW5gLCBga2ViYWJDYXNlYCwgYGxhc3RgLCBgbGFzdEluZGV4T2ZgLFxuICogYGxvd2VyQ2FzZWAsIGBsb3dlckZpcnN0YCwgYGx0YCwgYGx0ZWAsIGBtYXhgLCBgbWF4QnlgLCBgbWVhbmAsIGBtZWFuQnlgLFxuICogYG1pbmAsIGBtaW5CeWAsIGBtdWx0aXBseWAsIGBub0NvbmZsaWN0YCwgYG5vb3BgLCBgbm93YCwgYG50aGAsIGBwYWRgLFxuICogYHBhZEVuZGAsIGBwYWRTdGFydGAsIGBwYXJzZUludGAsIGBwb3BgLCBgcmFuZG9tYCwgYHJlZHVjZWAsIGByZWR1Y2VSaWdodGAsXG4gKiBgcmVwZWF0YCwgYHJlc3VsdGAsIGByb3VuZGAsIGBydW5JbkNvbnRleHRgLCBgc2FtcGxlYCwgYHNoaWZ0YCwgYHNpemVgLFxuICogYHNuYWtlQ2FzZWAsIGBzb21lYCwgYHNvcnRlZEluZGV4YCwgYHNvcnRlZEluZGV4QnlgLCBgc29ydGVkTGFzdEluZGV4YCxcbiAqIGBzb3J0ZWRMYXN0SW5kZXhCeWAsIGBzdGFydENhc2VgLCBgc3RhcnRzV2l0aGAsIGBzdHViQXJyYXlgLCBgc3R1YkZhbHNlYCxcbiAqIGBzdHViT2JqZWN0YCwgYHN0dWJTdHJpbmdgLCBgc3R1YlRydWVgLCBgc3VidHJhY3RgLCBgc3VtYCwgYHN1bUJ5YCxcbiAqIGB0ZW1wbGF0ZWAsIGB0aW1lc2AsIGB0b0Zpbml0ZWAsIGB0b0ludGVnZXJgLCBgdG9KU09OYCwgYHRvTGVuZ3RoYCxcbiAqIGB0b0xvd2VyYCwgYHRvTnVtYmVyYCwgYHRvU2FmZUludGVnZXJgLCBgdG9TdHJpbmdgLCBgdG9VcHBlcmAsIGB0cmltYCxcbiAqIGB0cmltRW5kYCwgYHRyaW1TdGFydGAsIGB0cnVuY2F0ZWAsIGB1bmVzY2FwZWAsIGB1bmlxdWVJZGAsIGB1cHBlckNhc2VgLFxuICogYHVwcGVyRmlyc3RgLCBgdmFsdWVgLCBhbmQgYHdvcmRzYFxuICpcbiAqIEBuYW1lIF9cbiAqIEBjb25zdHJ1Y3RvclxuICogQGNhdGVnb3J5IFNlcVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gd3JhcCBpbiBhIGBsb2Rhc2hgIGluc3RhbmNlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IGBsb2Rhc2hgIHdyYXBwZXIgaW5zdGFuY2UuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIHNxdWFyZShuKSB7XG4gKiAgIHJldHVybiBuICogbjtcbiAqIH1cbiAqXG4gKiB2YXIgd3JhcHBlZCA9IF8oWzEsIDIsIDNdKTtcbiAqXG4gKiAvLyBSZXR1cm5zIGFuIHVud3JhcHBlZCB2YWx1ZS5cbiAqIHdyYXBwZWQucmVkdWNlKF8uYWRkKTtcbiAqIC8vID0+IDZcbiAqXG4gKiAvLyBSZXR1cm5zIGEgd3JhcHBlZCB2YWx1ZS5cbiAqIHZhciBzcXVhcmVzID0gd3JhcHBlZC5tYXAoc3F1YXJlKTtcbiAqXG4gKiBfLmlzQXJyYXkoc3F1YXJlcyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNBcnJheShzcXVhcmVzLnZhbHVlKCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBsb2Rhc2godmFsdWUpIHtcbiAgaWYgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgIWlzQXJyYXkodmFsdWUpICYmICEodmFsdWUgaW5zdGFuY2VvZiBMYXp5V3JhcHBlcikpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBMb2Rhc2hXcmFwcGVyKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCAnX193cmFwcGVkX18nKSkge1xuICAgICAgcmV0dXJuIHdyYXBwZXJDbG9uZSh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBuZXcgTG9kYXNoV3JhcHBlcih2YWx1ZSk7XG59XG5cbi8vIEVuc3VyZSB3cmFwcGVycyBhcmUgaW5zdGFuY2VzIG9mIGBiYXNlTG9kYXNoYC5cbmxvZGFzaC5wcm90b3R5cGUgPSBiYXNlTG9kYXNoLnByb3RvdHlwZTtcbmxvZGFzaC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBsb2Rhc2g7XG5cbm1vZHVsZS5leHBvcnRzID0gbG9kYXNoO1xuIiwidmFyIExhenlXcmFwcGVyID0gcmVxdWlyZSgnLi9fTGF6eVdyYXBwZXInKSxcbiAgICBnZXREYXRhID0gcmVxdWlyZSgnLi9fZ2V0RGF0YScpLFxuICAgIGdldEZ1bmNOYW1lID0gcmVxdWlyZSgnLi9fZ2V0RnVuY05hbWUnKSxcbiAgICBsb2Rhc2ggPSByZXF1aXJlKCcuL3dyYXBwZXJMb2Rhc2gnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYGZ1bmNgIGhhcyBhIGxhenkgY291bnRlcnBhcnQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBmdW5jYCBoYXMgYSBsYXp5IGNvdW50ZXJwYXJ0LFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNMYXppYWJsZShmdW5jKSB7XG4gIHZhciBmdW5jTmFtZSA9IGdldEZ1bmNOYW1lKGZ1bmMpLFxuICAgICAgb3RoZXIgPSBsb2Rhc2hbZnVuY05hbWVdO1xuXG4gIGlmICh0eXBlb2Ygb3RoZXIgIT0gJ2Z1bmN0aW9uJyB8fCAhKGZ1bmNOYW1lIGluIExhenlXcmFwcGVyLnByb3RvdHlwZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGZ1bmMgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIGRhdGEgPSBnZXREYXRhKG90aGVyKTtcbiAgcmV0dXJuICEhZGF0YSAmJiBmdW5jID09PSBkYXRhWzBdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGF6aWFibGU7XG4iLCJ2YXIgYmFzZVNldERhdGEgPSByZXF1aXJlKCcuL19iYXNlU2V0RGF0YScpLFxuICAgIHNob3J0T3V0ID0gcmVxdWlyZSgnLi9fc2hvcnRPdXQnKTtcblxuLyoqXG4gKiBTZXRzIG1ldGFkYXRhIGZvciBgZnVuY2AuXG4gKlxuICogKipOb3RlOioqIElmIHRoaXMgZnVuY3Rpb24gYmVjb21lcyBob3QsIGkuZS4gaXMgaW52b2tlZCBhIGxvdCBpbiBhIHNob3J0XG4gKiBwZXJpb2Qgb2YgdGltZSwgaXQgd2lsbCB0cmlwIGl0cyBicmVha2VyIGFuZCB0cmFuc2l0aW9uIHRvIGFuIGlkZW50aXR5XG4gKiBmdW5jdGlvbiB0byBhdm9pZCBnYXJiYWdlIGNvbGxlY3Rpb24gcGF1c2VzIGluIFY4LiBTZWVcbiAqIFtWOCBpc3N1ZSAyMDcwXShodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0yMDcwKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXNzb2NpYXRlIG1ldGFkYXRhIHdpdGguXG4gKiBAcGFyYW0geyp9IGRhdGEgVGhlIG1ldGFkYXRhLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIGBmdW5jYC5cbiAqL1xudmFyIHNldERhdGEgPSBzaG9ydE91dChiYXNlU2V0RGF0YSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0RGF0YTtcbiIsIi8qKiBVc2VkIHRvIG1hdGNoIHdyYXAgZGV0YWlsIGNvbW1lbnRzLiAqL1xudmFyIHJlV3JhcERldGFpbHMgPSAvXFx7XFxuXFwvXFwqIFxcW3dyYXBwZWQgd2l0aCAoLispXFxdIFxcKi8sXG4gICAgcmVTcGxpdERldGFpbHMgPSAvLD8gJiAvO1xuXG4vKipcbiAqIEV4dHJhY3RzIHdyYXBwZXIgZGV0YWlscyBmcm9tIHRoZSBgc291cmNlYCBib2R5IGNvbW1lbnQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgVGhlIHNvdXJjZSB0byBpbnNwZWN0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB3cmFwcGVyIGRldGFpbHMuXG4gKi9cbmZ1bmN0aW9uIGdldFdyYXBEZXRhaWxzKHNvdXJjZSkge1xuICB2YXIgbWF0Y2ggPSBzb3VyY2UubWF0Y2gocmVXcmFwRGV0YWlscyk7XG4gIHJldHVybiBtYXRjaCA/IG1hdGNoWzFdLnNwbGl0KHJlU3BsaXREZXRhaWxzKSA6IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldFdyYXBEZXRhaWxzO1xuIiwiLyoqIFVzZWQgdG8gbWF0Y2ggd3JhcCBkZXRhaWwgY29tbWVudHMuICovXG52YXIgcmVXcmFwQ29tbWVudCA9IC9cXHsoPzpcXG5cXC9cXCogXFxbd3JhcHBlZCB3aXRoIC4rXFxdIFxcKlxcLyk/XFxuPy87XG5cbi8qKlxuICogSW5zZXJ0cyB3cmFwcGVyIGBkZXRhaWxzYCBpbiBhIGNvbW1lbnQgYXQgdGhlIHRvcCBvZiB0aGUgYHNvdXJjZWAgYm9keS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZSBUaGUgc291cmNlIHRvIG1vZGlmeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gZGV0YWlscyBUaGUgZGV0YWlscyB0byBpbnNlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBtb2RpZmllZCBzb3VyY2UuXG4gKi9cbmZ1bmN0aW9uIGluc2VydFdyYXBEZXRhaWxzKHNvdXJjZSwgZGV0YWlscykge1xuICB2YXIgbGVuZ3RoID0gZGV0YWlscy5sZW5ndGg7XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHNvdXJjZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gbGVuZ3RoIC0gMTtcbiAgZGV0YWlsc1tsYXN0SW5kZXhdID0gKGxlbmd0aCA+IDEgPyAnJiAnIDogJycpICsgZGV0YWlsc1tsYXN0SW5kZXhdO1xuICBkZXRhaWxzID0gZGV0YWlscy5qb2luKGxlbmd0aCA+IDIgPyAnLCAnIDogJyAnKTtcbiAgcmV0dXJuIHNvdXJjZS5yZXBsYWNlKHJlV3JhcENvbW1lbnQsICd7XFxuLyogW3dyYXBwZWQgd2l0aCAnICsgZGV0YWlscyArICddICovXFxuJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0V3JhcERldGFpbHM7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZpbmRJbmRleGAgYW5kIGBfLmZpbmRMYXN0SW5kZXhgIHdpdGhvdXRcbiAqIHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1hdGNoZWQgdmFsdWUsIGVsc2UgYC0xYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tSW5kZXgsIGZyb21SaWdodCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgaW5kZXggPSBmcm9tSW5kZXggKyAoZnJvbVJpZ2h0ID8gMSA6IC0xKTtcblxuICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmluZEluZGV4O1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hTmAgd2l0aG91dCBzdXBwb3J0IGZvciBudW1iZXIgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBgTmFOYCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNOYU47XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmRleE9mYCB3aGljaCBwZXJmb3JtcyBzdHJpY3QgZXF1YWxpdHlcbiAqIGNvbXBhcmlzb25zIG9mIHZhbHVlcywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBzdHJpY3RJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBpbmRleCA9IGZyb21JbmRleCAtIDEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoYXJyYXlbaW5kZXhdID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RyaWN0SW5kZXhPZjtcbiIsInZhciBiYXNlRmluZEluZGV4ID0gcmVxdWlyZSgnLi9fYmFzZUZpbmRJbmRleCcpLFxuICAgIGJhc2VJc05hTiA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hTicpLFxuICAgIHN0cmljdEluZGV4T2YgPSByZXF1aXJlKCcuL19zdHJpY3RJbmRleE9mJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaW5kZXhPZmAgd2l0aG91dCBgZnJvbUluZGV4YCBib3VuZHMgY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWVcbiAgICA/IHN0cmljdEluZGV4T2YoYXJyYXksIHZhbHVlLCBmcm9tSW5kZXgpXG4gICAgOiBiYXNlRmluZEluZGV4KGFycmF5LCBiYXNlSXNOYU4sIGZyb21JbmRleCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUluZGV4T2Y7XG4iLCJ2YXIgYmFzZUluZGV4T2YgPSByZXF1aXJlKCcuL19iYXNlSW5kZXhPZicpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5pbmNsdWRlc2AgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBzcGVjaWZ5aW5nIGFuIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHRhcmdldGAgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlJbmNsdWRlcyhhcnJheSwgdmFsdWUpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiYgYmFzZUluZGV4T2YoYXJyYXksIHZhbHVlLCAwKSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5SW5jbHVkZXM7XG4iLCJ2YXIgYXJyYXlFYWNoID0gcmVxdWlyZSgnLi9fYXJyYXlFYWNoJyksXG4gICAgYXJyYXlJbmNsdWRlcyA9IHJlcXVpcmUoJy4vX2FycmF5SW5jbHVkZXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgZnVuY3Rpb24gbWV0YWRhdGEuICovXG52YXIgV1JBUF9CSU5EX0ZMQUcgPSAxLFxuICAgIFdSQVBfQklORF9LRVlfRkxBRyA9IDIsXG4gICAgV1JBUF9DVVJSWV9GTEFHID0gOCxcbiAgICBXUkFQX0NVUlJZX1JJR0hUX0ZMQUcgPSAxNixcbiAgICBXUkFQX1BBUlRJQUxfRkxBRyA9IDMyLFxuICAgIFdSQVBfUEFSVElBTF9SSUdIVF9GTEFHID0gNjQsXG4gICAgV1JBUF9BUllfRkxBRyA9IDEyOCxcbiAgICBXUkFQX1JFQVJHX0ZMQUcgPSAyNTYsXG4gICAgV1JBUF9GTElQX0ZMQUcgPSA1MTI7XG5cbi8qKiBVc2VkIHRvIGFzc29jaWF0ZSB3cmFwIG1ldGhvZHMgd2l0aCB0aGVpciBiaXQgZmxhZ3MuICovXG52YXIgd3JhcEZsYWdzID0gW1xuICBbJ2FyeScsIFdSQVBfQVJZX0ZMQUddLFxuICBbJ2JpbmQnLCBXUkFQX0JJTkRfRkxBR10sXG4gIFsnYmluZEtleScsIFdSQVBfQklORF9LRVlfRkxBR10sXG4gIFsnY3VycnknLCBXUkFQX0NVUlJZX0ZMQUddLFxuICBbJ2N1cnJ5UmlnaHQnLCBXUkFQX0NVUlJZX1JJR0hUX0ZMQUddLFxuICBbJ2ZsaXAnLCBXUkFQX0ZMSVBfRkxBR10sXG4gIFsncGFydGlhbCcsIFdSQVBfUEFSVElBTF9GTEFHXSxcbiAgWydwYXJ0aWFsUmlnaHQnLCBXUkFQX1BBUlRJQUxfUklHSFRfRkxBR10sXG4gIFsncmVhcmcnLCBXUkFQX1JFQVJHX0ZMQUddXG5dO1xuXG4vKipcbiAqIFVwZGF0ZXMgd3JhcHBlciBgZGV0YWlsc2AgYmFzZWQgb24gYGJpdG1hc2tgIGZsYWdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcmV0dXJucyB7QXJyYXl9IGRldGFpbHMgVGhlIGRldGFpbHMgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgY3JlYXRlV3JhcGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgZGV0YWlsc2AuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZVdyYXBEZXRhaWxzKGRldGFpbHMsIGJpdG1hc2spIHtcbiAgYXJyYXlFYWNoKHdyYXBGbGFncywgZnVuY3Rpb24ocGFpcikge1xuICAgIHZhciB2YWx1ZSA9ICdfLicgKyBwYWlyWzBdO1xuICAgIGlmICgoYml0bWFzayAmIHBhaXJbMV0pICYmICFhcnJheUluY2x1ZGVzKGRldGFpbHMsIHZhbHVlKSkge1xuICAgICAgZGV0YWlscy5wdXNoKHZhbHVlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZGV0YWlscy5zb3J0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdXBkYXRlV3JhcERldGFpbHM7XG4iLCJ2YXIgZ2V0V3JhcERldGFpbHMgPSByZXF1aXJlKCcuL19nZXRXcmFwRGV0YWlscycpLFxuICAgIGluc2VydFdyYXBEZXRhaWxzID0gcmVxdWlyZSgnLi9faW5zZXJ0V3JhcERldGFpbHMnKSxcbiAgICBzZXRUb1N0cmluZyA9IHJlcXVpcmUoJy4vX3NldFRvU3RyaW5nJyksXG4gICAgdXBkYXRlV3JhcERldGFpbHMgPSByZXF1aXJlKCcuL191cGRhdGVXcmFwRGV0YWlscycpO1xuXG4vKipcbiAqIFNldHMgdGhlIGB0b1N0cmluZ2AgbWV0aG9kIG9mIGB3cmFwcGVyYCB0byBtaW1pYyB0aGUgc291cmNlIG9mIGByZWZlcmVuY2VgXG4gKiB3aXRoIHdyYXBwZXIgZGV0YWlscyBpbiBhIGNvbW1lbnQgYXQgdGhlIHRvcCBvZiB0aGUgc291cmNlIGJvZHkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHdyYXBwZXIgVGhlIGZ1bmN0aW9uIHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlZmVyZW5jZSBUaGUgcmVmZXJlbmNlIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgY3JlYXRlV3JhcGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyBgd3JhcHBlcmAuXG4gKi9cbmZ1bmN0aW9uIHNldFdyYXBUb1N0cmluZyh3cmFwcGVyLCByZWZlcmVuY2UsIGJpdG1hc2spIHtcbiAgdmFyIHNvdXJjZSA9IChyZWZlcmVuY2UgKyAnJyk7XG4gIHJldHVybiBzZXRUb1N0cmluZyh3cmFwcGVyLCBpbnNlcnRXcmFwRGV0YWlscyhzb3VyY2UsIHVwZGF0ZVdyYXBEZXRhaWxzKGdldFdyYXBEZXRhaWxzKHNvdXJjZSksIGJpdG1hc2spKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0V3JhcFRvU3RyaW5nO1xuIiwidmFyIGlzTGF6aWFibGUgPSByZXF1aXJlKCcuL19pc0xhemlhYmxlJyksXG4gICAgc2V0RGF0YSA9IHJlcXVpcmUoJy4vX3NldERhdGEnKSxcbiAgICBzZXRXcmFwVG9TdHJpbmcgPSByZXF1aXJlKCcuL19zZXRXcmFwVG9TdHJpbmcnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgZnVuY3Rpb24gbWV0YWRhdGEuICovXG52YXIgV1JBUF9CSU5EX0ZMQUcgPSAxLFxuICAgIFdSQVBfQklORF9LRVlfRkxBRyA9IDIsXG4gICAgV1JBUF9DVVJSWV9CT1VORF9GTEFHID0gNCxcbiAgICBXUkFQX0NVUlJZX0ZMQUcgPSA4LFxuICAgIFdSQVBfUEFSVElBTF9GTEFHID0gMzIsXG4gICAgV1JBUF9QQVJUSUFMX1JJR0hUX0ZMQUcgPSA2NDtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3cmFwcyBgZnVuY2AgdG8gY29udGludWUgY3VycnlpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBjcmVhdGVXcmFwYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gd3JhcEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNyZWF0ZSB0aGUgYGZ1bmNgIHdyYXBwZXIuXG4gKiBAcGFyYW0geyp9IHBsYWNlaG9sZGVyIFRoZSBwbGFjZWhvbGRlciB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge0FycmF5fSBbcGFydGlhbHNdIFRoZSBhcmd1bWVudHMgdG8gcHJlcGVuZCB0byB0aG9zZSBwcm92aWRlZCB0b1xuICogIHRoZSBuZXcgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0FycmF5fSBbaG9sZGVyc10gVGhlIGBwYXJ0aWFsc2AgcGxhY2Vob2xkZXIgaW5kZXhlcy5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcmdQb3NdIFRoZSBhcmd1bWVudCBwb3NpdGlvbnMgb2YgdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbYXJ5XSBUaGUgYXJpdHkgY2FwIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbYXJpdHldIFRoZSBhcml0eSBvZiBgZnVuY2AuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB3cmFwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVSZWN1cnJ5KGZ1bmMsIGJpdG1hc2ssIHdyYXBGdW5jLCBwbGFjZWhvbGRlciwgdGhpc0FyZywgcGFydGlhbHMsIGhvbGRlcnMsIGFyZ1BvcywgYXJ5LCBhcml0eSkge1xuICB2YXIgaXNDdXJyeSA9IGJpdG1hc2sgJiBXUkFQX0NVUlJZX0ZMQUcsXG4gICAgICBuZXdIb2xkZXJzID0gaXNDdXJyeSA/IGhvbGRlcnMgOiB1bmRlZmluZWQsXG4gICAgICBuZXdIb2xkZXJzUmlnaHQgPSBpc0N1cnJ5ID8gdW5kZWZpbmVkIDogaG9sZGVycyxcbiAgICAgIG5ld1BhcnRpYWxzID0gaXNDdXJyeSA/IHBhcnRpYWxzIDogdW5kZWZpbmVkLFxuICAgICAgbmV3UGFydGlhbHNSaWdodCA9IGlzQ3VycnkgPyB1bmRlZmluZWQgOiBwYXJ0aWFscztcblxuICBiaXRtYXNrIHw9IChpc0N1cnJ5ID8gV1JBUF9QQVJUSUFMX0ZMQUcgOiBXUkFQX1BBUlRJQUxfUklHSFRfRkxBRyk7XG4gIGJpdG1hc2sgJj0gfihpc0N1cnJ5ID8gV1JBUF9QQVJUSUFMX1JJR0hUX0ZMQUcgOiBXUkFQX1BBUlRJQUxfRkxBRyk7XG5cbiAgaWYgKCEoYml0bWFzayAmIFdSQVBfQ1VSUllfQk9VTkRfRkxBRykpIHtcbiAgICBiaXRtYXNrICY9IH4oV1JBUF9CSU5EX0ZMQUcgfCBXUkFQX0JJTkRfS0VZX0ZMQUcpO1xuICB9XG4gIHZhciBuZXdEYXRhID0gW1xuICAgIGZ1bmMsIGJpdG1hc2ssIHRoaXNBcmcsIG5ld1BhcnRpYWxzLCBuZXdIb2xkZXJzLCBuZXdQYXJ0aWFsc1JpZ2h0LFxuICAgIG5ld0hvbGRlcnNSaWdodCwgYXJnUG9zLCBhcnksIGFyaXR5XG4gIF07XG5cbiAgdmFyIHJlc3VsdCA9IHdyYXBGdW5jLmFwcGx5KHVuZGVmaW5lZCwgbmV3RGF0YSk7XG4gIGlmIChpc0xhemlhYmxlKGZ1bmMpKSB7XG4gICAgc2V0RGF0YShyZXN1bHQsIG5ld0RhdGEpO1xuICB9XG4gIHJlc3VsdC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICByZXR1cm4gc2V0V3JhcFRvU3RyaW5nKHJlc3VsdCwgZnVuYywgYml0bWFzayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlUmVjdXJyeTtcbiIsIi8qKlxuICogR2V0cyB0aGUgYXJndW1lbnQgcGxhY2Vob2xkZXIgdmFsdWUgZm9yIGBmdW5jYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwbGFjZWhvbGRlciB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0SG9sZGVyKGZ1bmMpIHtcbiAgdmFyIG9iamVjdCA9IGZ1bmM7XG4gIHJldHVybiBvYmplY3QucGxhY2Vob2xkZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0SG9sZGVyO1xuIiwidmFyIGNvcHlBcnJheSA9IHJlcXVpcmUoJy4vX2NvcHlBcnJheScpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBSZW9yZGVyIGBhcnJheWAgYWNjb3JkaW5nIHRvIHRoZSBzcGVjaWZpZWQgaW5kZXhlcyB3aGVyZSB0aGUgZWxlbWVudCBhdFxuICogdGhlIGZpcnN0IGluZGV4IGlzIGFzc2lnbmVkIGFzIHRoZSBmaXJzdCBlbGVtZW50LCB0aGUgZWxlbWVudCBhdFxuICogdGhlIHNlY29uZCBpbmRleCBpcyBhc3NpZ25lZCBhcyB0aGUgc2Vjb25kIGVsZW1lbnQsIGFuZCBzbyBvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHJlb3JkZXIuXG4gKiBAcGFyYW0ge0FycmF5fSBpbmRleGVzIFRoZSBhcnJhbmdlZCBhcnJheSBpbmRleGVzLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIHJlb3JkZXIoYXJyYXksIGluZGV4ZXMpIHtcbiAgdmFyIGFyckxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGxlbmd0aCA9IG5hdGl2ZU1pbihpbmRleGVzLmxlbmd0aCwgYXJyTGVuZ3RoKSxcbiAgICAgIG9sZEFycmF5ID0gY29weUFycmF5KGFycmF5KTtcblxuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICB2YXIgaW5kZXggPSBpbmRleGVzW2xlbmd0aF07XG4gICAgYXJyYXlbbGVuZ3RoXSA9IGlzSW5kZXgoaW5kZXgsIGFyckxlbmd0aCkgPyBvbGRBcnJheVtpbmRleF0gOiB1bmRlZmluZWQ7XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlb3JkZXI7XG4iLCIvKiogVXNlZCBhcyB0aGUgaW50ZXJuYWwgYXJndW1lbnQgcGxhY2Vob2xkZXIuICovXG52YXIgUExBQ0VIT0xERVIgPSAnX19sb2Rhc2hfcGxhY2Vob2xkZXJfXyc7XG5cbi8qKlxuICogUmVwbGFjZXMgYWxsIGBwbGFjZWhvbGRlcmAgZWxlbWVudHMgaW4gYGFycmF5YCB3aXRoIGFuIGludGVybmFsIHBsYWNlaG9sZGVyXG4gKiBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiB0aGVpciBpbmRleGVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHsqfSBwbGFjZWhvbGRlciBUaGUgcGxhY2Vob2xkZXIgdG8gcmVwbGFjZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIHBsYWNlaG9sZGVyIGluZGV4ZXMuXG4gKi9cbmZ1bmN0aW9uIHJlcGxhY2VIb2xkZXJzKGFycmF5LCBwbGFjZWhvbGRlcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gMCxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmICh2YWx1ZSA9PT0gcGxhY2Vob2xkZXIgfHwgdmFsdWUgPT09IFBMQUNFSE9MREVSKSB7XG4gICAgICBhcnJheVtpbmRleF0gPSBQTEFDRUhPTERFUjtcbiAgICAgIHJlc3VsdFtyZXNJbmRleCsrXSA9IGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcGxhY2VIb2xkZXJzO1xuIiwidmFyIGNvbXBvc2VBcmdzID0gcmVxdWlyZSgnLi9fY29tcG9zZUFyZ3MnKSxcbiAgICBjb21wb3NlQXJnc1JpZ2h0ID0gcmVxdWlyZSgnLi9fY29tcG9zZUFyZ3NSaWdodCcpLFxuICAgIGNvdW50SG9sZGVycyA9IHJlcXVpcmUoJy4vX2NvdW50SG9sZGVycycpLFxuICAgIGNyZWF0ZUN0b3IgPSByZXF1aXJlKCcuL19jcmVhdGVDdG9yJyksXG4gICAgY3JlYXRlUmVjdXJyeSA9IHJlcXVpcmUoJy4vX2NyZWF0ZVJlY3VycnknKSxcbiAgICBnZXRIb2xkZXIgPSByZXF1aXJlKCcuL19nZXRIb2xkZXInKSxcbiAgICByZW9yZGVyID0gcmVxdWlyZSgnLi9fcmVvcmRlcicpLFxuICAgIHJlcGxhY2VIb2xkZXJzID0gcmVxdWlyZSgnLi9fcmVwbGFjZUhvbGRlcnMnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBmdW5jdGlvbiBtZXRhZGF0YS4gKi9cbnZhciBXUkFQX0JJTkRfRkxBRyA9IDEsXG4gICAgV1JBUF9CSU5EX0tFWV9GTEFHID0gMixcbiAgICBXUkFQX0NVUlJZX0ZMQUcgPSA4LFxuICAgIFdSQVBfQ1VSUllfUklHSFRfRkxBRyA9IDE2LFxuICAgIFdSQVBfQVJZX0ZMQUcgPSAxMjgsXG4gICAgV1JBUF9GTElQX0ZMQUcgPSA1MTI7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd3JhcHMgYGZ1bmNgIHRvIGludm9rZSBpdCB3aXRoIG9wdGlvbmFsIGB0aGlzYFxuICogYmluZGluZyBvZiBgdGhpc0FyZ2AsIHBhcnRpYWwgYXBwbGljYXRpb24sIGFuZCBjdXJyeWluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbnxzdHJpbmd9IGZ1bmMgVGhlIGZ1bmN0aW9uIG9yIG1ldGhvZCBuYW1lIHRvIHdyYXAuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBjcmVhdGVXcmFwYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IFtwYXJ0aWFsc10gVGhlIGFyZ3VtZW50cyB0byBwcmVwZW5kIHRvIHRob3NlIHByb3ZpZGVkIHRvXG4gKiAgdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7QXJyYXl9IFtob2xkZXJzXSBUaGUgYHBhcnRpYWxzYCBwbGFjZWhvbGRlciBpbmRleGVzLlxuICogQHBhcmFtIHtBcnJheX0gW3BhcnRpYWxzUmlnaHRdIFRoZSBhcmd1bWVudHMgdG8gYXBwZW5kIHRvIHRob3NlIHByb3ZpZGVkXG4gKiAgdG8gdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7QXJyYXl9IFtob2xkZXJzUmlnaHRdIFRoZSBgcGFydGlhbHNSaWdodGAgcGxhY2Vob2xkZXIgaW5kZXhlcy5cbiAqIEBwYXJhbSB7QXJyYXl9IFthcmdQb3NdIFRoZSBhcmd1bWVudCBwb3NpdGlvbnMgb2YgdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbYXJ5XSBUaGUgYXJpdHkgY2FwIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbYXJpdHldIFRoZSBhcml0eSBvZiBgZnVuY2AuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB3cmFwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVIeWJyaWQoZnVuYywgYml0bWFzaywgdGhpc0FyZywgcGFydGlhbHMsIGhvbGRlcnMsIHBhcnRpYWxzUmlnaHQsIGhvbGRlcnNSaWdodCwgYXJnUG9zLCBhcnksIGFyaXR5KSB7XG4gIHZhciBpc0FyeSA9IGJpdG1hc2sgJiBXUkFQX0FSWV9GTEFHLFxuICAgICAgaXNCaW5kID0gYml0bWFzayAmIFdSQVBfQklORF9GTEFHLFxuICAgICAgaXNCaW5kS2V5ID0gYml0bWFzayAmIFdSQVBfQklORF9LRVlfRkxBRyxcbiAgICAgIGlzQ3VycmllZCA9IGJpdG1hc2sgJiAoV1JBUF9DVVJSWV9GTEFHIHwgV1JBUF9DVVJSWV9SSUdIVF9GTEFHKSxcbiAgICAgIGlzRmxpcCA9IGJpdG1hc2sgJiBXUkFQX0ZMSVBfRkxBRyxcbiAgICAgIEN0b3IgPSBpc0JpbmRLZXkgPyB1bmRlZmluZWQgOiBjcmVhdGVDdG9yKGZ1bmMpO1xuXG4gIGZ1bmN0aW9uIHdyYXBwZXIoKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgIGFyZ3MgPSBBcnJheShsZW5ndGgpLFxuICAgICAgICBpbmRleCA9IGxlbmd0aDtcblxuICAgIHdoaWxlIChpbmRleC0tKSB7XG4gICAgICBhcmdzW2luZGV4XSA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgfVxuICAgIGlmIChpc0N1cnJpZWQpIHtcbiAgICAgIHZhciBwbGFjZWhvbGRlciA9IGdldEhvbGRlcih3cmFwcGVyKSxcbiAgICAgICAgICBob2xkZXJzQ291bnQgPSBjb3VudEhvbGRlcnMoYXJncywgcGxhY2Vob2xkZXIpO1xuICAgIH1cbiAgICBpZiAocGFydGlhbHMpIHtcbiAgICAgIGFyZ3MgPSBjb21wb3NlQXJncyhhcmdzLCBwYXJ0aWFscywgaG9sZGVycywgaXNDdXJyaWVkKTtcbiAgICB9XG4gICAgaWYgKHBhcnRpYWxzUmlnaHQpIHtcbiAgICAgIGFyZ3MgPSBjb21wb3NlQXJnc1JpZ2h0KGFyZ3MsIHBhcnRpYWxzUmlnaHQsIGhvbGRlcnNSaWdodCwgaXNDdXJyaWVkKTtcbiAgICB9XG4gICAgbGVuZ3RoIC09IGhvbGRlcnNDb3VudDtcbiAgICBpZiAoaXNDdXJyaWVkICYmIGxlbmd0aCA8IGFyaXR5KSB7XG4gICAgICB2YXIgbmV3SG9sZGVycyA9IHJlcGxhY2VIb2xkZXJzKGFyZ3MsIHBsYWNlaG9sZGVyKTtcbiAgICAgIHJldHVybiBjcmVhdGVSZWN1cnJ5KFxuICAgICAgICBmdW5jLCBiaXRtYXNrLCBjcmVhdGVIeWJyaWQsIHdyYXBwZXIucGxhY2Vob2xkZXIsIHRoaXNBcmcsXG4gICAgICAgIGFyZ3MsIG5ld0hvbGRlcnMsIGFyZ1BvcywgYXJ5LCBhcml0eSAtIGxlbmd0aFxuICAgICAgKTtcbiAgICB9XG4gICAgdmFyIHRoaXNCaW5kaW5nID0gaXNCaW5kID8gdGhpc0FyZyA6IHRoaXMsXG4gICAgICAgIGZuID0gaXNCaW5kS2V5ID8gdGhpc0JpbmRpbmdbZnVuY10gOiBmdW5jO1xuXG4gICAgbGVuZ3RoID0gYXJncy5sZW5ndGg7XG4gICAgaWYgKGFyZ1Bvcykge1xuICAgICAgYXJncyA9IHJlb3JkZXIoYXJncywgYXJnUG9zKTtcbiAgICB9IGVsc2UgaWYgKGlzRmxpcCAmJiBsZW5ndGggPiAxKSB7XG4gICAgICBhcmdzLnJldmVyc2UoKTtcbiAgICB9XG4gICAgaWYgKGlzQXJ5ICYmIGFyeSA8IGxlbmd0aCkge1xuICAgICAgYXJncy5sZW5ndGggPSBhcnk7XG4gICAgfVxuICAgIGlmICh0aGlzICYmIHRoaXMgIT09IHJvb3QgJiYgdGhpcyBpbnN0YW5jZW9mIHdyYXBwZXIpIHtcbiAgICAgIGZuID0gQ3RvciB8fCBjcmVhdGVDdG9yKGZuKTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNCaW5kaW5nLCBhcmdzKTtcbiAgfVxuICByZXR1cm4gd3JhcHBlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVIeWJyaWQ7XG4iLCJ2YXIgYXBwbHkgPSByZXF1aXJlKCcuL19hcHBseScpLFxuICAgIGNyZWF0ZUN0b3IgPSByZXF1aXJlKCcuL19jcmVhdGVDdG9yJyksXG4gICAgY3JlYXRlSHlicmlkID0gcmVxdWlyZSgnLi9fY3JlYXRlSHlicmlkJyksXG4gICAgY3JlYXRlUmVjdXJyeSA9IHJlcXVpcmUoJy4vX2NyZWF0ZVJlY3VycnknKSxcbiAgICBnZXRIb2xkZXIgPSByZXF1aXJlKCcuL19nZXRIb2xkZXInKSxcbiAgICByZXBsYWNlSG9sZGVycyA9IHJlcXVpcmUoJy4vX3JlcGxhY2VIb2xkZXJzJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3cmFwcyBgZnVuY2AgdG8gZW5hYmxlIGN1cnJ5aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgY3JlYXRlV3JhcGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBhcml0eSBUaGUgYXJpdHkgb2YgYGZ1bmNgLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgd3JhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ3VycnkoZnVuYywgYml0bWFzaywgYXJpdHkpIHtcbiAgdmFyIEN0b3IgPSBjcmVhdGVDdG9yKGZ1bmMpO1xuXG4gIGZ1bmN0aW9uIHdyYXBwZXIoKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgIGFyZ3MgPSBBcnJheShsZW5ndGgpLFxuICAgICAgICBpbmRleCA9IGxlbmd0aCxcbiAgICAgICAgcGxhY2Vob2xkZXIgPSBnZXRIb2xkZXIod3JhcHBlcik7XG5cbiAgICB3aGlsZSAoaW5kZXgtLSkge1xuICAgICAgYXJnc1tpbmRleF0gPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgIH1cbiAgICB2YXIgaG9sZGVycyA9IChsZW5ndGggPCAzICYmIGFyZ3NbMF0gIT09IHBsYWNlaG9sZGVyICYmIGFyZ3NbbGVuZ3RoIC0gMV0gIT09IHBsYWNlaG9sZGVyKVxuICAgICAgPyBbXVxuICAgICAgOiByZXBsYWNlSG9sZGVycyhhcmdzLCBwbGFjZWhvbGRlcik7XG5cbiAgICBsZW5ndGggLT0gaG9sZGVycy5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCA8IGFyaXR5KSB7XG4gICAgICByZXR1cm4gY3JlYXRlUmVjdXJyeShcbiAgICAgICAgZnVuYywgYml0bWFzaywgY3JlYXRlSHlicmlkLCB3cmFwcGVyLnBsYWNlaG9sZGVyLCB1bmRlZmluZWQsXG4gICAgICAgIGFyZ3MsIGhvbGRlcnMsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBhcml0eSAtIGxlbmd0aCk7XG4gICAgfVxuICAgIHZhciBmbiA9ICh0aGlzICYmIHRoaXMgIT09IHJvb3QgJiYgdGhpcyBpbnN0YW5jZW9mIHdyYXBwZXIpID8gQ3RvciA6IGZ1bmM7XG4gICAgcmV0dXJuIGFwcGx5KGZuLCB0aGlzLCBhcmdzKTtcbiAgfVxuICByZXR1cm4gd3JhcHBlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVDdXJyeTtcbiIsInZhciBhcHBseSA9IHJlcXVpcmUoJy4vX2FwcGx5JyksXG4gICAgY3JlYXRlQ3RvciA9IHJlcXVpcmUoJy4vX2NyZWF0ZUN0b3InKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBmdW5jdGlvbiBtZXRhZGF0YS4gKi9cbnZhciBXUkFQX0JJTkRfRkxBRyA9IDE7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd3JhcHMgYGZ1bmNgIHRvIGludm9rZSBpdCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZ1xuICogb2YgYHRoaXNBcmdgIGFuZCBgcGFydGlhbHNgIHByZXBlbmRlZCB0byB0aGUgYXJndW1lbnRzIGl0IHJlY2VpdmVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgY3JlYXRlV3JhcGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtBcnJheX0gcGFydGlhbHMgVGhlIGFyZ3VtZW50cyB0byBwcmVwZW5kIHRvIHRob3NlIHByb3ZpZGVkIHRvXG4gKiAgdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHdyYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVBhcnRpYWwoZnVuYywgYml0bWFzaywgdGhpc0FyZywgcGFydGlhbHMpIHtcbiAgdmFyIGlzQmluZCA9IGJpdG1hc2sgJiBXUkFQX0JJTkRfRkxBRyxcbiAgICAgIEN0b3IgPSBjcmVhdGVDdG9yKGZ1bmMpO1xuXG4gIGZ1bmN0aW9uIHdyYXBwZXIoKSB7XG4gICAgdmFyIGFyZ3NJbmRleCA9IC0xLFxuICAgICAgICBhcmdzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgICAgbGVmdEluZGV4ID0gLTEsXG4gICAgICAgIGxlZnRMZW5ndGggPSBwYXJ0aWFscy5sZW5ndGgsXG4gICAgICAgIGFyZ3MgPSBBcnJheShsZWZ0TGVuZ3RoICsgYXJnc0xlbmd0aCksXG4gICAgICAgIGZuID0gKHRoaXMgJiYgdGhpcyAhPT0gcm9vdCAmJiB0aGlzIGluc3RhbmNlb2Ygd3JhcHBlcikgPyBDdG9yIDogZnVuYztcblxuICAgIHdoaWxlICgrK2xlZnRJbmRleCA8IGxlZnRMZW5ndGgpIHtcbiAgICAgIGFyZ3NbbGVmdEluZGV4XSA9IHBhcnRpYWxzW2xlZnRJbmRleF07XG4gICAgfVxuICAgIHdoaWxlIChhcmdzTGVuZ3RoLS0pIHtcbiAgICAgIGFyZ3NbbGVmdEluZGV4KytdID0gYXJndW1lbnRzWysrYXJnc0luZGV4XTtcbiAgICB9XG4gICAgcmV0dXJuIGFwcGx5KGZuLCBpc0JpbmQgPyB0aGlzQXJnIDogdGhpcywgYXJncyk7XG4gIH1cbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlUGFydGlhbDtcbiIsInZhciBjb21wb3NlQXJncyA9IHJlcXVpcmUoJy4vX2NvbXBvc2VBcmdzJyksXG4gICAgY29tcG9zZUFyZ3NSaWdodCA9IHJlcXVpcmUoJy4vX2NvbXBvc2VBcmdzUmlnaHQnKSxcbiAgICByZXBsYWNlSG9sZGVycyA9IHJlcXVpcmUoJy4vX3JlcGxhY2VIb2xkZXJzJyk7XG5cbi8qKiBVc2VkIGFzIHRoZSBpbnRlcm5hbCBhcmd1bWVudCBwbGFjZWhvbGRlci4gKi9cbnZhciBQTEFDRUhPTERFUiA9ICdfX2xvZGFzaF9wbGFjZWhvbGRlcl9fJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgZnVuY3Rpb24gbWV0YWRhdGEuICovXG52YXIgV1JBUF9CSU5EX0ZMQUcgPSAxLFxuICAgIFdSQVBfQklORF9LRVlfRkxBRyA9IDIsXG4gICAgV1JBUF9DVVJSWV9CT1VORF9GTEFHID0gNCxcbiAgICBXUkFQX0NVUlJZX0ZMQUcgPSA4LFxuICAgIFdSQVBfQVJZX0ZMQUcgPSAxMjgsXG4gICAgV1JBUF9SRUFSR19GTEFHID0gMjU2O1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogTWVyZ2VzIHRoZSBmdW5jdGlvbiBtZXRhZGF0YSBvZiBgc291cmNlYCBpbnRvIGBkYXRhYC5cbiAqXG4gKiBNZXJnaW5nIG1ldGFkYXRhIHJlZHVjZXMgdGhlIG51bWJlciBvZiB3cmFwcGVycyB1c2VkIHRvIGludm9rZSBhIGZ1bmN0aW9uLlxuICogVGhpcyBpcyBwb3NzaWJsZSBiZWNhdXNlIG1ldGhvZHMgbGlrZSBgXy5iaW5kYCwgYF8uY3VycnlgLCBhbmQgYF8ucGFydGlhbGBcbiAqIG1heSBiZSBhcHBsaWVkIHJlZ2FyZGxlc3Mgb2YgZXhlY3V0aW9uIG9yZGVyLiBNZXRob2RzIGxpa2UgYF8uYXJ5YCBhbmRcbiAqIGBfLnJlYXJnYCBtb2RpZnkgZnVuY3Rpb24gYXJndW1lbnRzLCBtYWtpbmcgdGhlIG9yZGVyIGluIHdoaWNoIHRoZXkgYXJlXG4gKiBleGVjdXRlZCBpbXBvcnRhbnQsIHByZXZlbnRpbmcgdGhlIG1lcmdpbmcgb2YgbWV0YWRhdGEuIEhvd2V2ZXIsIHdlIG1ha2VcbiAqIGFuIGV4Y2VwdGlvbiBmb3IgYSBzYWZlIGNvbWJpbmVkIGNhc2Ugd2hlcmUgY3VycmllZCBmdW5jdGlvbnMgaGF2ZSBgXy5hcnlgXG4gKiBhbmQgb3IgYF8ucmVhcmdgIGFwcGxpZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGRhdGEgVGhlIGRlc3RpbmF0aW9uIG1ldGFkYXRhLlxuICogQHBhcmFtIHtBcnJheX0gc291cmNlIFRoZSBzb3VyY2UgbWV0YWRhdGEuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGRhdGFgLlxuICovXG5mdW5jdGlvbiBtZXJnZURhdGEoZGF0YSwgc291cmNlKSB7XG4gIHZhciBiaXRtYXNrID0gZGF0YVsxXSxcbiAgICAgIHNyY0JpdG1hc2sgPSBzb3VyY2VbMV0sXG4gICAgICBuZXdCaXRtYXNrID0gYml0bWFzayB8IHNyY0JpdG1hc2ssXG4gICAgICBpc0NvbW1vbiA9IG5ld0JpdG1hc2sgPCAoV1JBUF9CSU5EX0ZMQUcgfCBXUkFQX0JJTkRfS0VZX0ZMQUcgfCBXUkFQX0FSWV9GTEFHKTtcblxuICB2YXIgaXNDb21ibyA9XG4gICAgKChzcmNCaXRtYXNrID09IFdSQVBfQVJZX0ZMQUcpICYmIChiaXRtYXNrID09IFdSQVBfQ1VSUllfRkxBRykpIHx8XG4gICAgKChzcmNCaXRtYXNrID09IFdSQVBfQVJZX0ZMQUcpICYmIChiaXRtYXNrID09IFdSQVBfUkVBUkdfRkxBRykgJiYgKGRhdGFbN10ubGVuZ3RoIDw9IHNvdXJjZVs4XSkpIHx8XG4gICAgKChzcmNCaXRtYXNrID09IChXUkFQX0FSWV9GTEFHIHwgV1JBUF9SRUFSR19GTEFHKSkgJiYgKHNvdXJjZVs3XS5sZW5ndGggPD0gc291cmNlWzhdKSAmJiAoYml0bWFzayA9PSBXUkFQX0NVUlJZX0ZMQUcpKTtcblxuICAvLyBFeGl0IGVhcmx5IGlmIG1ldGFkYXRhIGNhbid0IGJlIG1lcmdlZC5cbiAgaWYgKCEoaXNDb21tb24gfHwgaXNDb21ibykpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuICAvLyBVc2Ugc291cmNlIGB0aGlzQXJnYCBpZiBhdmFpbGFibGUuXG4gIGlmIChzcmNCaXRtYXNrICYgV1JBUF9CSU5EX0ZMQUcpIHtcbiAgICBkYXRhWzJdID0gc291cmNlWzJdO1xuICAgIC8vIFNldCB3aGVuIGN1cnJ5aW5nIGEgYm91bmQgZnVuY3Rpb24uXG4gICAgbmV3Qml0bWFzayB8PSBiaXRtYXNrICYgV1JBUF9CSU5EX0ZMQUcgPyAwIDogV1JBUF9DVVJSWV9CT1VORF9GTEFHO1xuICB9XG4gIC8vIENvbXBvc2UgcGFydGlhbCBhcmd1bWVudHMuXG4gIHZhciB2YWx1ZSA9IHNvdXJjZVszXTtcbiAgaWYgKHZhbHVlKSB7XG4gICAgdmFyIHBhcnRpYWxzID0gZGF0YVszXTtcbiAgICBkYXRhWzNdID0gcGFydGlhbHMgPyBjb21wb3NlQXJncyhwYXJ0aWFscywgdmFsdWUsIHNvdXJjZVs0XSkgOiB2YWx1ZTtcbiAgICBkYXRhWzRdID0gcGFydGlhbHMgPyByZXBsYWNlSG9sZGVycyhkYXRhWzNdLCBQTEFDRUhPTERFUikgOiBzb3VyY2VbNF07XG4gIH1cbiAgLy8gQ29tcG9zZSBwYXJ0aWFsIHJpZ2h0IGFyZ3VtZW50cy5cbiAgdmFsdWUgPSBzb3VyY2VbNV07XG4gIGlmICh2YWx1ZSkge1xuICAgIHBhcnRpYWxzID0gZGF0YVs1XTtcbiAgICBkYXRhWzVdID0gcGFydGlhbHMgPyBjb21wb3NlQXJnc1JpZ2h0KHBhcnRpYWxzLCB2YWx1ZSwgc291cmNlWzZdKSA6IHZhbHVlO1xuICAgIGRhdGFbNl0gPSBwYXJ0aWFscyA/IHJlcGxhY2VIb2xkZXJzKGRhdGFbNV0sIFBMQUNFSE9MREVSKSA6IHNvdXJjZVs2XTtcbiAgfVxuICAvLyBVc2Ugc291cmNlIGBhcmdQb3NgIGlmIGF2YWlsYWJsZS5cbiAgdmFsdWUgPSBzb3VyY2VbN107XG4gIGlmICh2YWx1ZSkge1xuICAgIGRhdGFbN10gPSB2YWx1ZTtcbiAgfVxuICAvLyBVc2Ugc291cmNlIGBhcnlgIGlmIGl0J3Mgc21hbGxlci5cbiAgaWYgKHNyY0JpdG1hc2sgJiBXUkFQX0FSWV9GTEFHKSB7XG4gICAgZGF0YVs4XSA9IGRhdGFbOF0gPT0gbnVsbCA/IHNvdXJjZVs4XSA6IG5hdGl2ZU1pbihkYXRhWzhdLCBzb3VyY2VbOF0pO1xuICB9XG4gIC8vIFVzZSBzb3VyY2UgYGFyaXR5YCBpZiBvbmUgaXMgbm90IHByb3ZpZGVkLlxuICBpZiAoZGF0YVs5XSA9PSBudWxsKSB7XG4gICAgZGF0YVs5XSA9IHNvdXJjZVs5XTtcbiAgfVxuICAvLyBVc2Ugc291cmNlIGBmdW5jYCBhbmQgbWVyZ2UgYml0bWFza3MuXG4gIGRhdGFbMF0gPSBzb3VyY2VbMF07XG4gIGRhdGFbMV0gPSBuZXdCaXRtYXNrO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lcmdlRGF0YTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGxlYWRpbmcgYW5kIHRyYWlsaW5nIHdoaXRlc3BhY2UuICovXG52YXIgcmVUcmltID0gL15cXHMrfFxccyskL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyO1xuIiwidmFyIHRvTnVtYmVyID0gcmVxdWlyZSgnLi90b051bWJlcicpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwLFxuICAgIE1BWF9JTlRFR0VSID0gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDg7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIGZpbml0ZSBudW1iZXIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjEyLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgY29udmVydGVkIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b0Zpbml0ZSgzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b0Zpbml0ZShOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9GaW5pdGUoSW5maW5pdHkpO1xuICogLy8gPT4gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDhcbiAqXG4gKiBfLnRvRmluaXRlKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b0Zpbml0ZSh2YWx1ZSkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiAwO1xuICB9XG4gIHZhbHVlID0gdG9OdW1iZXIodmFsdWUpO1xuICBpZiAodmFsdWUgPT09IElORklOSVRZIHx8IHZhbHVlID09PSAtSU5GSU5JVFkpIHtcbiAgICB2YXIgc2lnbiA9ICh2YWx1ZSA8IDAgPyAtMSA6IDEpO1xuICAgIHJldHVybiBzaWduICogTUFYX0lOVEVHRVI7XG4gIH1cbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/IHZhbHVlIDogMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b0Zpbml0ZTtcbiIsInZhciB0b0Zpbml0ZSA9IHJlcXVpcmUoJy4vdG9GaW5pdGUnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGFuIGludGVnZXIuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGxvb3NlbHkgYmFzZWQgb25cbiAqIFtgVG9JbnRlZ2VyYF0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvaW50ZWdlcikuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgaW50ZWdlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b0ludGVnZXIoMy4yKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLnRvSW50ZWdlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDBcbiAqXG4gKiBfLnRvSW50ZWdlcihJbmZpbml0eSk7XG4gKiAvLyA9PiAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwOFxuICpcbiAqIF8udG9JbnRlZ2VyKCczLjInKTtcbiAqIC8vID0+IDNcbiAqL1xuZnVuY3Rpb24gdG9JbnRlZ2VyKHZhbHVlKSB7XG4gIHZhciByZXN1bHQgPSB0b0Zpbml0ZSh2YWx1ZSksXG4gICAgICByZW1haW5kZXIgPSByZXN1bHQgJSAxO1xuXG4gIHJldHVybiByZXN1bHQgPT09IHJlc3VsdCA/IChyZW1haW5kZXIgPyByZXN1bHQgLSByZW1haW5kZXIgOiByZXN1bHQpIDogMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b0ludGVnZXI7XG4iLCJ2YXIgYmFzZVNldERhdGEgPSByZXF1aXJlKCcuL19iYXNlU2V0RGF0YScpLFxuICAgIGNyZWF0ZUJpbmQgPSByZXF1aXJlKCcuL19jcmVhdGVCaW5kJyksXG4gICAgY3JlYXRlQ3VycnkgPSByZXF1aXJlKCcuL19jcmVhdGVDdXJyeScpLFxuICAgIGNyZWF0ZUh5YnJpZCA9IHJlcXVpcmUoJy4vX2NyZWF0ZUh5YnJpZCcpLFxuICAgIGNyZWF0ZVBhcnRpYWwgPSByZXF1aXJlKCcuL19jcmVhdGVQYXJ0aWFsJyksXG4gICAgZ2V0RGF0YSA9IHJlcXVpcmUoJy4vX2dldERhdGEnKSxcbiAgICBtZXJnZURhdGEgPSByZXF1aXJlKCcuL19tZXJnZURhdGEnKSxcbiAgICBzZXREYXRhID0gcmVxdWlyZSgnLi9fc2V0RGF0YScpLFxuICAgIHNldFdyYXBUb1N0cmluZyA9IHJlcXVpcmUoJy4vX3NldFdyYXBUb1N0cmluZycpLFxuICAgIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vdG9JbnRlZ2VyJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGZ1bmN0aW9uIG1ldGFkYXRhLiAqL1xudmFyIFdSQVBfQklORF9GTEFHID0gMSxcbiAgICBXUkFQX0JJTkRfS0VZX0ZMQUcgPSAyLFxuICAgIFdSQVBfQ1VSUllfRkxBRyA9IDgsXG4gICAgV1JBUF9DVVJSWV9SSUdIVF9GTEFHID0gMTYsXG4gICAgV1JBUF9QQVJUSUFMX0ZMQUcgPSAzMixcbiAgICBXUkFQX1BBUlRJQUxfUklHSFRfRkxBRyA9IDY0O1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgZWl0aGVyIGN1cnJpZXMgb3IgaW52b2tlcyBgZnVuY2Agd2l0aCBvcHRpb25hbFxuICogYHRoaXNgIGJpbmRpbmcgYW5kIHBhcnRpYWxseSBhcHBsaWVkIGFyZ3VtZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbnxzdHJpbmd9IGZ1bmMgVGhlIGZ1bmN0aW9uIG9yIG1ldGhvZCBuYW1lIHRvIHdyYXAuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAgIDEgLSBgXy5iaW5kYFxuICogICAgMiAtIGBfLmJpbmRLZXlgXG4gKiAgICA0IC0gYF8uY3VycnlgIG9yIGBfLmN1cnJ5UmlnaHRgIG9mIGEgYm91bmQgZnVuY3Rpb25cbiAqICAgIDggLSBgXy5jdXJyeWBcbiAqICAgMTYgLSBgXy5jdXJyeVJpZ2h0YFxuICogICAzMiAtIGBfLnBhcnRpYWxgXG4gKiAgIDY0IC0gYF8ucGFydGlhbFJpZ2h0YFxuICogIDEyOCAtIGBfLnJlYXJnYFxuICogIDI1NiAtIGBfLmFyeWBcbiAqICA1MTIgLSBgXy5mbGlwYFxuICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7QXJyYXl9IFtwYXJ0aWFsc10gVGhlIGFyZ3VtZW50cyB0byBiZSBwYXJ0aWFsbHkgYXBwbGllZC5cbiAqIEBwYXJhbSB7QXJyYXl9IFtob2xkZXJzXSBUaGUgYHBhcnRpYWxzYCBwbGFjZWhvbGRlciBpbmRleGVzLlxuICogQHBhcmFtIHtBcnJheX0gW2FyZ1Bvc10gVGhlIGFyZ3VtZW50IHBvc2l0aW9ucyBvZiB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFthcnldIFRoZSBhcml0eSBjYXAgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtudW1iZXJ9IFthcml0eV0gVGhlIGFyaXR5IG9mIGBmdW5jYC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHdyYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVdyYXAoZnVuYywgYml0bWFzaywgdGhpc0FyZywgcGFydGlhbHMsIGhvbGRlcnMsIGFyZ1BvcywgYXJ5LCBhcml0eSkge1xuICB2YXIgaXNCaW5kS2V5ID0gYml0bWFzayAmIFdSQVBfQklORF9LRVlfRkxBRztcbiAgaWYgKCFpc0JpbmRLZXkgJiYgdHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbGVuZ3RoID0gcGFydGlhbHMgPyBwYXJ0aWFscy5sZW5ndGggOiAwO1xuICBpZiAoIWxlbmd0aCkge1xuICAgIGJpdG1hc2sgJj0gfihXUkFQX1BBUlRJQUxfRkxBRyB8IFdSQVBfUEFSVElBTF9SSUdIVF9GTEFHKTtcbiAgICBwYXJ0aWFscyA9IGhvbGRlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgYXJ5ID0gYXJ5ID09PSB1bmRlZmluZWQgPyBhcnkgOiBuYXRpdmVNYXgodG9JbnRlZ2VyKGFyeSksIDApO1xuICBhcml0eSA9IGFyaXR5ID09PSB1bmRlZmluZWQgPyBhcml0eSA6IHRvSW50ZWdlcihhcml0eSk7XG4gIGxlbmd0aCAtPSBob2xkZXJzID8gaG9sZGVycy5sZW5ndGggOiAwO1xuXG4gIGlmIChiaXRtYXNrICYgV1JBUF9QQVJUSUFMX1JJR0hUX0ZMQUcpIHtcbiAgICB2YXIgcGFydGlhbHNSaWdodCA9IHBhcnRpYWxzLFxuICAgICAgICBob2xkZXJzUmlnaHQgPSBob2xkZXJzO1xuXG4gICAgcGFydGlhbHMgPSBob2xkZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIHZhciBkYXRhID0gaXNCaW5kS2V5ID8gdW5kZWZpbmVkIDogZ2V0RGF0YShmdW5jKTtcblxuICB2YXIgbmV3RGF0YSA9IFtcbiAgICBmdW5jLCBiaXRtYXNrLCB0aGlzQXJnLCBwYXJ0aWFscywgaG9sZGVycywgcGFydGlhbHNSaWdodCwgaG9sZGVyc1JpZ2h0LFxuICAgIGFyZ1BvcywgYXJ5LCBhcml0eVxuICBdO1xuXG4gIGlmIChkYXRhKSB7XG4gICAgbWVyZ2VEYXRhKG5ld0RhdGEsIGRhdGEpO1xuICB9XG4gIGZ1bmMgPSBuZXdEYXRhWzBdO1xuICBiaXRtYXNrID0gbmV3RGF0YVsxXTtcbiAgdGhpc0FyZyA9IG5ld0RhdGFbMl07XG4gIHBhcnRpYWxzID0gbmV3RGF0YVszXTtcbiAgaG9sZGVycyA9IG5ld0RhdGFbNF07XG4gIGFyaXR5ID0gbmV3RGF0YVs5XSA9IG5ld0RhdGFbOV0gPT09IHVuZGVmaW5lZFxuICAgID8gKGlzQmluZEtleSA/IDAgOiBmdW5jLmxlbmd0aClcbiAgICA6IG5hdGl2ZU1heChuZXdEYXRhWzldIC0gbGVuZ3RoLCAwKTtcblxuICBpZiAoIWFyaXR5ICYmIGJpdG1hc2sgJiAoV1JBUF9DVVJSWV9GTEFHIHwgV1JBUF9DVVJSWV9SSUdIVF9GTEFHKSkge1xuICAgIGJpdG1hc2sgJj0gfihXUkFQX0NVUlJZX0ZMQUcgfCBXUkFQX0NVUlJZX1JJR0hUX0ZMQUcpO1xuICB9XG4gIGlmICghYml0bWFzayB8fCBiaXRtYXNrID09IFdSQVBfQklORF9GTEFHKSB7XG4gICAgdmFyIHJlc3VsdCA9IGNyZWF0ZUJpbmQoZnVuYywgYml0bWFzaywgdGhpc0FyZyk7XG4gIH0gZWxzZSBpZiAoYml0bWFzayA9PSBXUkFQX0NVUlJZX0ZMQUcgfHwgYml0bWFzayA9PSBXUkFQX0NVUlJZX1JJR0hUX0ZMQUcpIHtcbiAgICByZXN1bHQgPSBjcmVhdGVDdXJyeShmdW5jLCBiaXRtYXNrLCBhcml0eSk7XG4gIH0gZWxzZSBpZiAoKGJpdG1hc2sgPT0gV1JBUF9QQVJUSUFMX0ZMQUcgfHwgYml0bWFzayA9PSAoV1JBUF9CSU5EX0ZMQUcgfCBXUkFQX1BBUlRJQUxfRkxBRykpICYmICFob2xkZXJzLmxlbmd0aCkge1xuICAgIHJlc3VsdCA9IGNyZWF0ZVBhcnRpYWwoZnVuYywgYml0bWFzaywgdGhpc0FyZywgcGFydGlhbHMpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGNyZWF0ZUh5YnJpZC5hcHBseSh1bmRlZmluZWQsIG5ld0RhdGEpO1xuICB9XG4gIHZhciBzZXR0ZXIgPSBkYXRhID8gYmFzZVNldERhdGEgOiBzZXREYXRhO1xuICByZXR1cm4gc2V0V3JhcFRvU3RyaW5nKHNldHRlcihyZXN1bHQsIG5ld0RhdGEpLCBmdW5jLCBiaXRtYXNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVXcmFwO1xuIiwidmFyIGJhc2VSZXN0ID0gcmVxdWlyZSgnLi9fYmFzZVJlc3QnKSxcbiAgICBjcmVhdGVXcmFwID0gcmVxdWlyZSgnLi9fY3JlYXRlV3JhcCcpLFxuICAgIGdldEhvbGRlciA9IHJlcXVpcmUoJy4vX2dldEhvbGRlcicpLFxuICAgIHJlcGxhY2VIb2xkZXJzID0gcmVxdWlyZSgnLi9fcmVwbGFjZUhvbGRlcnMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgZnVuY3Rpb24gbWV0YWRhdGEuICovXG52YXIgV1JBUF9CSU5EX0ZMQUcgPSAxLFxuICAgIFdSQVBfUEFSVElBTF9GTEFHID0gMzI7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgYHRoaXNBcmdgXG4gKiBhbmQgYHBhcnRpYWxzYCBwcmVwZW5kZWQgdG8gdGhlIGFyZ3VtZW50cyBpdCByZWNlaXZlcy5cbiAqXG4gKiBUaGUgYF8uYmluZC5wbGFjZWhvbGRlcmAgdmFsdWUsIHdoaWNoIGRlZmF1bHRzIHRvIGBfYCBpbiBtb25vbGl0aGljIGJ1aWxkcyxcbiAqIG1heSBiZSB1c2VkIGFzIGEgcGxhY2Vob2xkZXIgZm9yIHBhcnRpYWxseSBhcHBsaWVkIGFyZ3VtZW50cy5cbiAqXG4gKiAqKk5vdGU6KiogVW5saWtlIG5hdGl2ZSBgRnVuY3Rpb24jYmluZGAsIHRoaXMgbWV0aG9kIGRvZXNuJ3Qgc2V0IHRoZSBcImxlbmd0aFwiXG4gKiBwcm9wZXJ0eSBvZiBib3VuZCBmdW5jdGlvbnMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBiaW5kLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0gey4uLip9IFtwYXJ0aWFsc10gVGhlIGFyZ3VtZW50cyB0byBiZSBwYXJ0aWFsbHkgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGJvdW5kIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBncmVldChncmVldGluZywgcHVuY3R1YXRpb24pIHtcbiAqICAgcmV0dXJuIGdyZWV0aW5nICsgJyAnICsgdGhpcy51c2VyICsgcHVuY3R1YXRpb247XG4gKiB9XG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ3VzZXInOiAnZnJlZCcgfTtcbiAqXG4gKiB2YXIgYm91bmQgPSBfLmJpbmQoZ3JlZXQsIG9iamVjdCwgJ2hpJyk7XG4gKiBib3VuZCgnIScpO1xuICogLy8gPT4gJ2hpIGZyZWQhJ1xuICpcbiAqIC8vIEJvdW5kIHdpdGggcGxhY2Vob2xkZXJzLlxuICogdmFyIGJvdW5kID0gXy5iaW5kKGdyZWV0LCBvYmplY3QsIF8sICchJyk7XG4gKiBib3VuZCgnaGknKTtcbiAqIC8vID0+ICdoaSBmcmVkISdcbiAqL1xudmFyIGJpbmQgPSBiYXNlUmVzdChmdW5jdGlvbihmdW5jLCB0aGlzQXJnLCBwYXJ0aWFscykge1xuICB2YXIgYml0bWFzayA9IFdSQVBfQklORF9GTEFHO1xuICBpZiAocGFydGlhbHMubGVuZ3RoKSB7XG4gICAgdmFyIGhvbGRlcnMgPSByZXBsYWNlSG9sZGVycyhwYXJ0aWFscywgZ2V0SG9sZGVyKGJpbmQpKTtcbiAgICBiaXRtYXNrIHw9IFdSQVBfUEFSVElBTF9GTEFHO1xuICB9XG4gIHJldHVybiBjcmVhdGVXcmFwKGZ1bmMsIGJpdG1hc2ssIHRoaXNBcmcsIHBhcnRpYWxzLCBob2xkZXJzKTtcbn0pO1xuXG4vLyBBc3NpZ24gZGVmYXVsdCBwbGFjZWhvbGRlcnMuXG5iaW5kLnBsYWNlaG9sZGVyID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZDtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgeyBiaW5kIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGVhY2ggfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGlzT2JqZWN0IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNhbWVsQ2FzZSB9IGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IFBST1hZX0NPTkZJR19QUk9QRVJUSUVTID0gWydoZWFkZXJzJywgJ3BhcmFtcycsICdkYXRhJ107XG5cbmNvbnN0IFBST1hZX0NPTkZJR19NRVRIT0RTID0ge1xuICAgIGdldChwcm9wLCBjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY29udGV4dFtwcm9wXTtcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIHNldChwcm9wLCBjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnRleHRbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGFkZChwcm9wLCBjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgY29udGV4dFtwcm9wXVtrZXldID0gdmFsdWU7XG4gICAgICAgIH07XG4gICAgfSxcbiAgICByZW1vdmUocHJvcCwgY29udGV4dCkge1xuICAgICAgICByZXR1cm4gKGtleSkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlIGNvbnRleHRbcHJvcF1ba2V5XTtcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1lcmdlKHByb3AsIGNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIChrZXksIHZhbHVlcykgPT4ge1xuICAgICAgICAgICAgZXh0ZW5kKGNvbnRleHRbcHJvcF0sIGtleSk7XG4gICAgICAgIH07XG4gICAgfVxufTtcblxuY29uc3QgbWV0aG9kID0gZnVuY3Rpb24oYWN0aW9uLCBwcm9wKSB7XG4gICAgcmV0dXJuIGNhbWVsQ2FzZShbYWN0aW9uLCBwcm9wXS5qb2luKCcgJykpO1xufTtcblxuY29uc3QgY2hhaW5hYmxlID0gZnVuY3Rpb24ocHJvcCkge1xuICAgIHJldHVybiAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZihrZXkgaW5zdGFuY2VvZiBGb3JtRGF0YSkge1xuICAgICAgICAgICAgdGhpc1ttZXRob2QoJ3NldCcsIHByb3ApXShrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoaXNPYmplY3Qoa2V5KSkge1xuICAgICAgICAgICAgdGhpc1ttZXRob2QoJ21lcmdlJywgcHJvcCldKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzW21ldGhvZCgnYWRkJywgcHJvcCldKGtleSwgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcXVlc3Qge1xuXG4gICAgY29uc3RydWN0b3IodXJsLCBjb25maWcgPSB7fSkge1xuICAgICAgICB0aGlzLiRjb25maWcgPSBleHRlbmQoe1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBoZWFkZXJzOiB7fSxcbiAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICBkYXRhOiB7fVxuICAgICAgICB9LCBjb25maWcpO1xuXG4gICAgICAgIGVhY2goUFJPWFlfQ09ORklHX01FVEhPRFMsIChjYWxsYmFjaywga2V5KSA9PiB7XG4gICAgICAgICAgICB0aGlzW21ldGhvZChrZXksICdjb25maWcnKV0gPSBiaW5kKGNhbGxiYWNrKSgnJGNvbmZpZycsIHRoaXMpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzWydjb25maWcnXSA9IGJpbmQoY2hhaW5hYmxlLCB0aGlzKSgnY29uZmlnJyk7XG5cbiAgICAgICAgZWFjaChQUk9YWV9DT05GSUdfUFJPUEVSVElFUywgKHByb3ApID0+IHtcbiAgICAgICAgICAgIGVhY2goUFJPWFlfQ09ORklHX01FVEhPRFMsIChjYWxsYmFjaywga2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpc1ttZXRob2Qoa2V5LCBwcm9wKV0gPSBiaW5kKGNhbGxiYWNrKShwcm9wLCB0aGlzLiRjb25maWcpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXNbcHJvcF0gPSBiaW5kKGNoYWluYWJsZSwgdGhpcykocHJvcCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy4kZXJyb3IgPSBudWxsO1xuICAgICAgICB0aGlzLiRzdGF0dXMgPSBudWxsO1xuICAgICAgICB0aGlzLiRzdGF0dXNUZXh0ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kcmVzcG9uc2UgPSBudWxsO1xuICAgICAgICB0aGlzLiRyZXF1ZXN0U2VudEF0ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kcmVzcG9uc2VSZWNlaXZlZEF0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBoYXNTZW50KCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLiRyZXF1ZXN0U2VudEF0O1xuICAgIH1cblxuICAgIGhhc1Jlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gISF0aGlzLiRyZXNwb25zZVJlY2VpdmVkQXQ7XG4gICAgfVxuXG4gICAgcGFzc2VkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNSZXNwb25zZSgpICYmICF0aGlzLiRlcnJvcjtcbiAgICB9XG5cbiAgICBmYWlsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc1Jlc3BvbnNlKCkgJiYgISF0aGlzLiRlcnJvcjtcbiAgICB9XG5cbiAgICBnZXRVcmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR1cmw7XG4gICAgfVxuXG4gICAgc2V0VXJsKHVybCkge1xuICAgICAgICB0aGlzLiR1cmwgPSB1cmw7XG4gICAgfVxuXG4gICAgZ2V0KHBhcmFtcyA9IHt9LCBoZWFkZXJzID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyYW1zKHBhcmFtcykuaGVhZGVycyhoZWFkZXJzKS5yZXF1ZXN0KCdnZXQnKTtcbiAgICB9XG5cbiAgICBwb3N0KGRhdGEgPSB7fSwgaGVhZGVycyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEoZGF0YSkuaGVhZGVycyhoZWFkZXJzKS5yZXF1ZXN0KCdwb3N0Jyk7XG4gICAgfVxuXG4gICAgcHV0KGRhdGEgPSB7fSwgaGVhZGVycyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEoZGF0YSkuaGVhZGVycyhoZWFkZXJzKS5yZXF1ZXN0KCdwdXQnKTtcbiAgICB9XG5cbiAgICBkZWxldGUoaGVhZGVycyA9IHt9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRlcnMoaGVhZGVycykucmVxdWVzdCgnZGVsZXRlJyk7XG4gICAgfVxuXG4gICAgcmVxdWVzdChtZXRob2QpIHtcbiAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB0aGlzLiRyZXF1ZXN0U2VudEF0ID0gbW9tZW50KCk7XG4gICAgICAgIHRoaXMuYWRkQ29uZmlnKCdtZXRob2QnLCBtZXRob2QpO1xuXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBheGlvcy5yZXF1ZXN0KHRoaXMuJGNvbmZpZykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZXNwb25zZVJlY2VpdmVkQXQgPSBtb21lbnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdGF0dXMgPSByZXNwb25zZS5zdGF0dXM7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RhdHVzVGV4dCA9IHJlc3BvbnNlLnN0YXR1c1RleHQ7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVycm9yID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgdGhpcy4kcmVzcG9uc2UgPSBlcnJvci5yZXNwb25zZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRyZXNwb25zZVJlY2VpdmVkQXQgPSBtb21lbnQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdGF0dXMgPSBlcnJvci5yZXNwb25zZS5zdGF0dXM7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RhdHVzVGV4dCA9IGVycm9yLnJlc3BvbnNlLnN0YXR1c1RleHQ7XG5cbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IHsgbWFwIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGVhY2ggfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsga2V5cyB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBzaXplIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaXNOdWxsIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHBpY2tCeSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyByZWR1Y2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBpc1VuZGVmaW5lZCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgUmVxdWVzdCBmcm9tICcuLi9SZXF1ZXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kZWwge1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgbW9kZWwgaW5zdGFuY2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhIG9iamVjdFxuICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRhdGEgPSB7fSwgcGFyYW1zID0ge30pIHtcbiAgICAgICAgdGhpcy4kY2hhbmdlZCA9IHt9O1xuICAgICAgICB0aGlzLiRleGlzdHMgPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kYXR0cmlidXRlcyA9IHt9O1xuICAgICAgICB0aGlzLiRrZXkgPSB0aGlzLmtleSgpO1xuICAgICAgICB0aGlzLiRmaWxlcyA9IHRoaXMuZmlsZXMoKTtcbiAgICAgICAgdGhpcy4kdGFibGUgPSB0aGlzLnRhYmxlKCk7XG4gICAgICAgIHRoaXMuJHByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXMoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKGRhdGEpO1xuXG4gICAgICAgIGVhY2gocGFyYW1zLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgdGhpc1trZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKCF0aGlzLiR0YWJsZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIHRhYmxlIG11c3QgYmUgZGVmaW5lZCBmb3IgZXZlcnkgbW9kZWwuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRpbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSB0aGUgbW9kZWwgd2l0aCB0aGUgZ2l2ZW4gZGF0YSB3aXRob3V0IGNvbnNpZGVyaW5nIHRoZSBkYXRhXG4gICAgICogYXMgXCJjaGFuZ2VkXCIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSBvYmplY3RcbiAgICAgKiBAcmV0dXJuIHRoaXNcbiAgICAgKi9cbiAgICBpbml0aWFsaXplKGRhdGEpIHtcbiAgICAgICAgdGhpcy4kaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5maWxsKGRhdGEpO1xuICAgICAgICB0aGlzLiRpbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lIHRoZSBjb3JyZXNwb25kaW5nIGRhdGFiYXNlIHRhYmxlIChha2EgQVBJIGVuZHBvaW50IHNsdWcpLlxuICAgICAqXG4gICAgICogQHJldHVybiBzdHJpbmdcbiAgICAgKi9cbiAgICB0YWJsZSgpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmUgYSBwcmltYXJ5IGtleS4gVGhpcyBpcyB1c2VkIHRvIGRldGVybWluZSBpZiB0aGUgbW9kZWwgZXhpc3RzIGFuZFxuICAgICAqIHdoaWNoIGVuZHBvaW50IHRvIHVzZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gc3RyaW5nXG4gICAgICovXG4gICAga2V5KCkge1xuICAgICAgICByZXR1cm4gJ2lkJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgcHJvcGVydGllcyB0aGF0IGFyZSBzZW50IHRvIHRoZSBBUEkuIElmIG5vIHByb3BlcnRpZXNcbiAgICAgKiBhcmUgZGVmaW5lZCwgdGhlbiBhbGwgdGhlIGF0dHJpYnV0ZXMgd2lsbCBiZSBpbmNsdWRlZCBpbiB0aGUgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gYXJyYXlcbiAgICAgKi9cbiAgICBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBhdHRyaWJ1dGVzIGluIHRoZSBtb2RlbCB3aXRoIHRoZSBkYXRhIGdpdmVuLlxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgb2JqZWN0XG4gICAgICogQHJldHVybiB0aGlzXG4gICAgICovXG4gICAgZmlsbChkYXRhKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlcyhkYXRhKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgb25lIG9yIG1vcmUgYXR0cmlidXRlcyBmcm9tIHRoZSBtb2RlbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhIHN0cmluZ3xhcnJheVxuICAgICAqIEByZXR1cm4gYXJyYXl8bWl4ZWRcbiAgICAgKi9cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIGlmKGlzQXJyYXkoa2V5KSB8fCBpc09iamVjdChrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGVzKCkuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLmluZGV4T2YodmFsdWUpICE9PSAtMTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3Igc2V0QXR0cmlidXRlcygpIGV4Y2VwdCB0aGlzIG1ldGhvZCByZXR1cm5zIGB0aGlzYC4gVGhpcyBtZXRob2RcbiAgICAgKiBhbHNvIGFjY2VwdHMgYW4gYXJyYXkgb2YgdmFsdWVzIG9yIGtleS92YWx1ZSBwYWlyLlxuICAgICAqXG4gICAgICogQHJldHVybiB0aGlzXG4gICAgICovXG4gICAgc2V0KGtleSwgdmFsdWUgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYoaXNBcnJheShrZXkpIHx8IGlzT2JqZWN0KGtleSkpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlcyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgYWxsIHRoZSBkZWZpbmVkIGF0dHJpYnV0ZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIGFycmF5XG4gICAgICovXG4gICAgZ2V0QXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGF0dHJpYnV0ZXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjaGFuZ2VkIGF0dHJpYnV0ZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4gYXJyYXlcbiAgICAgKi9cbiAgICBnZXRDaGFuZ2VkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIGtleXModGhpcy4kY2hhbmdlZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjaGFuZ2VkIGF0dHJpYnV0ZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm4gYXJyYXlcbiAgICAgKi9cbiAgICBnZXRPcmlnaW5hbFZhbHVlKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy4kY2hhbmdlZFtrZXldIHx8IHRoaXMuJGF0dHJpYnV0ZXNba2V5XTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHVuY2hhbmdlZCBhdHRyaWJ1dGVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIGFycmF5XG4gICAgICovXG4gICAgZ2V0VW5jaGFuZ2VkQXR0cmlidXRlcygpIHtcbiAgICAgICAgcmV0dXJuIGZpbHRlcihrZXlzKHRoaXMuJGF0dHJpYnV0ZXMpLCBrZXkgPT4gIShrZXkgaW4gdGhpcy4kY2hhbmdlZCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCBhbiBhdHRyaWJ1dGUgd2l0aCBhIGdpdmVuIGtleS4gSWYgbm8ga2V5IGlzIGRlZmluZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBrZXkgc3RyaW5nXG4gICAgICogQHBhcmFtIGRlZmF1bHQgdW5kZWZpbmVkfG1peGVkXG4gICAgICogQHJldHVybiBhcnJheVxuICAgICAqL1xuICAgIGdldEF0dHJpYnV0ZShrZXksIHZhbHVlID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRhdHRyaWJ1dGVzW2tleV0gfHwgdmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGFuIGFycmF5IG9yIG9iamVjdCBvZiBkYXRhIGFzIGF0dHJpYnV0ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYXR0cmlidXRlcyBhcnJheXxvYmplY3RcbiAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgKi9cbiAgICBzZXRBdHRyaWJ1dGVzKGRhdGEpIHtcbiAgICAgICAgaWYoIWlzQXJyYXkoZGF0YSkgJiYgIWlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0F0dHJpYnV0ZXMgbXVzdCBiZSBzZXQgd2l0aCBhbiBhcnJheSBvciBvYmplY3QuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBlYWNoKGRhdGEsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGFuIGF0dHJpYnV0ZSB3aXRoIGEgZ2l2ZW4ga2V5L3ZhbHVlIHBhaXIuIFRoaXMgd2lsbCB0cmFjayB0aGUgY2hhbmdlc1xuICAgICAqIGluIHRoZSBtb2RlbCB3aXRoaW4gdGhlIGB0aGlzLiRjaGFuZ2VkYCBwcm9wZXJ0eS4gSWYgdGhlIHByaW1hcnkga2V5XG4gICAgICogaXMgc2V0LCBpdCB3aWxsIGFsc28gY2hhbmdlIHRoZSBgdGhpcy4kZXhpc3RzYCBwcm9wZXJ0eS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBrZXkgc3RyaW5nXG4gICAgICogQHBhcmFtIHZhbHVlIG1peGVkXG4gICAgICogQHJldHVybiB2b2lkXG4gICAgICovXG4gICAgc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpIHtcbiAgICAgICAgaWYodGhpcy5nZXRBdHRyaWJ1dGUoa2V5KSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQXR0cmlidXRlQ2hhbmdlKGtleSwgdmFsdWUpO1xuXG4gICAgICAgICAgICBpZihpc1VuZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy4kYXR0cmlidXRlc1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXR0cmlidXRlc1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXZlcnQgdGhlIG1vZGVsIHRvIGl0cyBvcmlnaW5hbCBzdGF0ZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gYm9vbFxuICAgICAqL1xuICAgIHJldmVydCgpIHtcbiAgICAgICAgZWFjaCh0aGlzLiRjaGFuZ2VkLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYoIWlzVW5kZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGF0dHJpYnV0ZXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuJGF0dHJpYnV0ZXNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kY2hhbmdlZCA9IHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgaWYgdGhlIG1vZGVsIGhhcyBhIHByaW1hcnkga2V5IHNldC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gYm9vbFxuICAgICAqL1xuICAgIGV4aXN0cygpIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy4kZXhpc3RzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1vZGVsIGJlZW4gY2hhbmdlZCBvciBub3QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIGJvb2xcbiAgICAgKi9cbiAgICBoYXNDaGFuZ2VkKGtleSkge1xuICAgICAgICByZXR1cm4gIWtleSA/IHNpemUodGhpcy4kY2hhbmdlZCkgPiAwIDogIWlzVW5kZWZpbmVkKHRoaXMuJGNoYW5nZWRba2V5XSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRG9lcyB0aGUgbW9kZWwgaGF2ZSBhbnkgRmlsZSBvYmplY3RzLiBJZiBzbywgbmVlZCB0byBzZW5kIGFzIG11bHRpcGFydC5cbiAgICAgKlxuICAgICAqIEByZXR1cm4gYm9vbFxuICAgICAqL1xuICAgIGhhc0ZpbGVzKCkge1xuICAgICAgICBmdW5jdGlvbiBjb3VudChmaWxlcywgdG90YWwgPSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVkdWNlKGZpbGVzLCAoY2FycnksIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhcnJ5ICsgY291bnQodmFsdWUsIHRvdGFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZih2YWx1ZSBpbnN0YW5jZW9mIEZpbGUgfHwgdmFsdWUgaW5zdGFuY2VvZiBGaWxlTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FycnkgKyAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhcnJ5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRvdGFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb3VudCh0aGlzLnRvSlNPTigpKSAhPT0gMDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgc2V0dGluZ3MgdGhlICRjaGFuZ2VkIGF0dHJpYnV0ZXMgd2hlbiBhbiBhdHRyaWJ1dGUgdmFsdWUgaXMgc2V0LlxuICAgICAqXG4gICAgICogQHBhcmFtIGtleSBzdHJpbmdcbiAgICAgKiBAcGFyYW0gdmFsdWUgbWl4ZWRcbiAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgKi9cbiAgICBoYW5kbGVBdHRyaWJ1dGVDaGFuZ2Uoa2V5LCB2YWx1ZSkge1xuICAgICAgICBpZih0aGlzLiRpbml0aWFsaXplZCkge1xuICAgICAgICAgICAgaWYodGhpcy4kY2hhbmdlZFtrZXldID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLiRjaGFuZ2VkW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKCEoa2V5IGluIHRoaXMuJGNoYW5nZWQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY2hhbmdlZFtrZXldID0gdGhpcy5nZXRBdHRyaWJ1dGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGFuZGxlUHJpbWFyeUtleUNoYW5nZShrZXksIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYW4gYXJyYXkgb3Igb2JqZWN0IG9mIGRhdGEgYXMgYXR0cmlidXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBrZXkgc3RyaW5nXG4gICAgICogQHBhcmFtIHZhbHVlIG1peGVkXG4gICAgICogQHJldHVybiB2b2lkXG4gICAgICovXG4gICAgaGFuZGxlUHJpbWFyeUtleUNoYW5nZShrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmKHRoaXMuJGtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICB0aGlzLiRleGlzdHMgPSAhaXNVbmRlZmluZWQodmFsdWUpICYmICFpc051bGwodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2F2ZSB0aGUgbW9kZWwgdG8gdGhlIGRhdGFiYXNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSBvYmplY3RcbiAgICAgKiBAcmV0dXJuIGJvb2xcbiAgICAgKi9cbiAgICBzYXZlKGRhdGEgPSB7fSwgY29uZmlnID0ge30pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhpc3RzKCkgPyB0aGlzLmNyZWF0ZShkYXRhLCBjb25maWcpIDogdGhpcy51cGRhdGUoZGF0YSwgY29uZmlnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgbW9kZWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhIG9iamVjdFxuICAgICAqIEByZXR1cm4gYm9vbFxuICAgICAqL1xuICAgIGNyZWF0ZShkYXRhID0ge30sIGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIGlmKHRoaXMuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZShkYXRhLCBjb25maWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maWxsKGRhdGEpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoYC9hcGkvJHt0aGlzLnRhYmxlKCl9YCwgZXh0ZW5kKHtcbiAgICAgICAgICAgIGRhdGE6ICF0aGlzLmhhc0ZpbGVzKCkgPyB0aGlzLnRvSnNvbigpIDogdGhpcy50b0Zvcm1EYXRhKClcbiAgICAgICAgfSwgY29uZmlnKSkucG9zdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSBhbiBleGlzdGluZyBtb2RlbFxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgb2JqZWN0XG4gICAgICogQHJldHVybiBib29sXG4gICAgICovXG4gICAgdXBkYXRlKGRhdGEgPSB7fSwgY29uZmlnID0ge30pIHtcbiAgICAgICAgaWYoIXRoaXMuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShkYXRhLCBjb25maWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbWV0aG9kID0gdGhpcy5oYXNGaWxlcygpID8gJ3Bvc3QnIDogJ3B1dCc7XG5cbiAgICAgICAgdGhpcy5maWxsKGRhdGEpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoYC9hcGkvJHt0aGlzLnRhYmxlKCl9LyR7dGhpcy5nZXQodGhpcy5rZXkoKSl9YCwgZXh0ZW5kKHtcbiAgICAgICAgICAgIGRhdGE6ICF0aGlzLmhhc0ZpbGVzKCkgPyB0aGlzLnRvSnNvbigpIDogdGhpcy50b0Zvcm1EYXRhKClcbiAgICAgICAgfSwgY29uZmlnKSlbbWV0aG9kXSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhbiBleGlzdGluZyBtb2RlbFxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgb2JqZWN0XG4gICAgICogQHJldHVybiBib29sXG4gICAgICovXG4gICAgZGVsZXRlKGRhdGEgPSB7fSwgY29uZmlnID0ge30pIHtcbiAgICAgICAgaWYoIXRoaXMuZXhpc3RzKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIG1vZGVsIG11c3QgaGF2ZSBhIHByaW1hcnkga2V5IGJlZm9yZSBpdCBjYW4gYmUgZGVsZXRlLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maWxsKGRhdGEpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoYC9hcGkvJHt0aGlzLnRhYmxlKCl9LyR7dGhpcy5nZXQodGhpcy5rZXkoKSl9YCwgY29uZmlnKS5kZWxldGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIGFuIGV4aXN0aW5nIG1vZGVsIGJ5IGlkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSBvYmplY3RcbiAgICAgKiBAcmV0dXJuIGJvb2xcbiAgICAgKi9cbiAgICBzZWFyY2gocGFyYW1zID0ge30sIGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QoYC9hcGkvJHt0aGlzLnRhYmxlKCl9YCwgZXh0ZW5kKHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xuICAgICAgICAgICAgfSwgY29uZmlnKSkuZ2V0KCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShtYXAocmVzcG9uc2UuZGF0YSwgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgKHRoaXMuY29uc3RydWN0b3IpKGRhdGEpO1xuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0sIGVycm9ycyA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9ycyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmluZCBhbiBleGlzdGluZyBtb2RlbCBieSBpZFxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgb2JqZWN0XG4gICAgICogQHJldHVybiBib29sXG4gICAgICovXG4gICAgZmluZChpZCwgY29uZmlnID0ge30pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdChgL2FwaS8ke3RoaXMudGFibGUoKX0vJHtpZH1gLCBjb25maWcpLmdldCgpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5pbml0aWFsaXplKHJlc3BvbnNlKSk7XG4gICAgICAgICAgICB9LCBlcnJvcnMgPT4ge1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcnMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIHJlcXVlc3QgZnJvbSB0aGUgbW9kZWwgZGF0YVxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgb2JqZWN0XG4gICAgICogQHJldHVybiBib29sXG4gICAgICovXG4gICAgcmVxdWVzdCh1cmwsIGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVxdWVzdCh1cmwsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCB0aGUgTW9kZWwgaW5zdGFuY2UgdG8gYSBGb3JtRGF0YSBpbnN0YW5jZVxuICAgICAqXG4gICAgICogQHJldHVybiBvYmplY3RcbiAgICAgKi9cbiAgICB0b0Zvcm1EYXRhKCkge1xuICAgICAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgZWFjaCh0aGlzLnRvSlNPTigpLCAodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBlYWNoKHZhbHVlLCBpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5hcHBlbmQoa2V5LnJlcGxhY2UoLyguKykoXFxbLitcXF0/KSQvLCAnJDEnKSsnW10nLCBpdGVtKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvcm0uYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZm9ybTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0IHRoZSBpbnN0YW5jZSB0byBKU09OIHBheWxvYWRcbiAgICAgKlxuICAgICAqIEByZXR1cm4gb2JqZWN0XG4gICAgICovXG4gICAgdG9KU09OKCkge1xuICAgICAgICByZXR1cm4gcGlja0J5KHRoaXMuJGF0dHJpYnV0ZXMsICh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuJHByb3BlcnRpZXMubGVuZ3RoIHx8IChcbiAgICAgICAgICAgICAgICBrZXkgPT09IHRoaXMua2V5KCkgfHwgdGhpcy4kcHJvcGVydGllcy5pbmRleE9mKGtleSkgIT09IC0xXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBmb3IgdG9KU09OXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIG9iamVjdFxuICAgICAqL1xuICAgIHRvSnNvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudG9KU09OKCk7XG4gICAgfVxuXG59XG4iLCI8dGVtcGxhdGU+XG4gICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwib25TdWJtaXRcIiA6Y2xhc3M9XCJ7J2Zvcm0taW5saW5lJzogaW5saW5lfVwiIDpub3ZhbGlkYXRlPVwibm92YWxpZGF0ZVwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9mb3JtPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgTW9kZWwgZnJvbSAnQC9IdHRwL01vZGVsL01vZGVsJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gb2JqZWN0IG9mIGZvcm0gZGF0YVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgT2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNwbGF5IHRoZSBmb3JtIGZpZWxkcyBpbmxpbmVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IE9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHZhbGlkYXRlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgTW9kZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc3BsYXkgdGhlIGZvcm0gZmllbGRzIGlubGluZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgQm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgaW5saW5lOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgdGhlIGBzdWJtaXRgIGV2ZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBub3ZhbGlkYXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIFVSSSBvciBVUkwgdXNlZCB0byByZWRpcmVjdCB1c2VyIGFmdGVyIGZvcm0gc3VibWl0cyBzdWNjZXNzZnVsbHkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBGdW5jdGlvbnxTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHJlZGlyZWN0OiBbU3RyaW5nLCBGdW5jdGlvbl0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIHRoZSBgc3VibWl0YCBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgRnVuY3Rpb25cbiAgICAgICAgICovXG4gICAgICAgIG9uU3VibWl0OiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGRlZmF1bHQoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzdWJtaXQnLCBldmVudCk7XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLm1vZGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwuc2F2ZSh0aGlzLmRhdGEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBsb2FkUHJvZ3Jlc3M6IGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzdWJtaXQ6cHJvZ3Jlc3MnLCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TdWJtaXRTdWNjZXNzKGV2ZW50LCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgKGVycm9ycykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblN1Ym1pdEZhaWxlZChldmVudCwgZXJyb3JzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciB0aGUgYHN1Ym1pdDpzdWNjZXNzYCBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgRnVuY3Rpb25cbiAgICAgICAgICovXG4gICAgICAgIG9uU3VibWl0U3VjY2Vzczoge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBkZWZhdWx0KGV2ZW50LCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc3VibWl0OnN1Y2Nlc3MnLCBldmVudCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc3VibWl0OmNvbXBsZXRlJywgZXZlbnQsIHRydWUsIGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5yZWRpcmVjdCAmJiBpc0Z1bmN0aW9uKHRoaXMucmVkaXJlY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3QodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYodGhpcy5yZWRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB0aGlzLnJlZGlyZWN0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgdGhlIGBzdWJtaXQ6c3VjY2Vzc2AgZXZlbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEZ1bmN0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBvblN1Ym1pdEZhaWxlZDoge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBkZWZhdWx0KGV2ZW50LCBlcnJvcnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzdWJtaXQ6ZmFpbGVkJywgZXZlbnQsIGVycm9ycyk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc3VibWl0OmNvbXBsZXRlJywgZXZlbnQsIGZhbHNlLCBlcnJvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVycm9yczoge31cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cblxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgQmFzZUZvcm0gZnJvbSAnLi9CYXNlRm9ybSc7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJ0AvSGVscGVycy9WdWVJbnN0YWxsZXIvVnVlSW5zdGFsbGVyJztcblxuY29uc3QgcGx1Z2luID0gVnVlSW5zdGFsbGVyLnVzZSh7XG5cbiAgICBpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWVJbnN0YWxsZXIuY29tcG9uZW50cyh7XG4gICAgICAgICAgICBCYXNlRm9ybVxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlRm9ybTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHV1aWQoKSB7XG4gICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgYyA9PiB7XG4gICAgICAgIHZhciByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMCwgdiA9IGMgPT0gJ3gnID8gciA6IChyICYgMHgzIHwgMHg4KTtcbiAgICAgICAgcmV0dXJuIHYudG9TdHJpbmcoMTYpO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgcHJveHkoY2FsbGJhY2ssIGV2ZW50KSB7XG4gICAgICAgICAgICBpZihpc0Z1bmN0aW9uKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5zcGxpY2UoMSkpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8YVxuICAgICAgICA6aHJlZj1cImhyZWYgfHwgJyMnXCJcbiAgICAgICAgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCJcbiAgICAgICAgOmNsYXNzPVwieydhY3RpdmUnOiBhY3RpdmV9XCJcbiAgICAgICAgQGNsaWNrPVwicHJveHkob25DbGljaywgJGV2ZW50KTtvbkNsaWNrZWQoJGV2ZW50KTtcIj5cbiAgICAgICAgPGkgdi1pZj1cImljb25cIiA6Y2xhc3M9XCJpY29uXCIvPlxuICAgICAgICA8c2xvdD57e2xhYmVsfX08L3Nsb3Q+XG4gICAgPC9hPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IFByb3h5IGZyb20gJ0AvTWl4aW5zL1Byb3h5L1Byb3h5JztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbWl4aW5zOiBbUHJveHldLFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSXMgdGhlIG1lbnUgaXRlbSBhY3RpdmUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBPYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2ZTogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGBocmVmYCBhdHRyaWJ1dGUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBPYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIGhyZWY6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGxhYmVsIG9mIHRoZSBkcm9wZG93biBtZW51IGl0ZW0uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBPYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIGxhYmVsOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBpY29uIG9mIHRoZSBkcm9wZG93biBtZW51IGl0ZW0uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBPYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIGljb246IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgdGhlIGBjbGlja2AgZXZlbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBPYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIG9uQ2xpY2s6IEZ1bmN0aW9uXG5cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGNhbGxiYWNrIGZ1bmN0aW9uIGZvciB0aGUgYGNsaWNrYCBldmVudC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IE9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgb25DbGlja2VkKGV2ZW50KSB7XG4gICAgICAgICAgICBpZighdGhpcy5ocmVmKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBldmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gICAgPGg1IGNsYXNzPVwiZHJvcGRvd24taGVhZGVyXCI+XG4gICAgICAgIHt7aGVhZGVyfX1cblxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9oNT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdkcm9wZG93bi1tZW51LWhlYWRlcicsXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmFsdWUgb2YgdGhlIGhlYWRlclxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgT2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBoZWFkZXI6IFN0cmluZ1xuXG4gICAgfVxuXG59XG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1kaXZpZGVyXCI+PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnZHJvcGRvd24tbWVudS1kaXZpZGVyJ1xuXG59XG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51XCIgOmNsYXNzPVwieydkcm9wZG93bi1tZW51LXJpZ2h0JzogYWxpZ24gPT09ICdyaWdodCcsICdzaG93Jzogc2hvd31cIiA6YXJpYS1sYWJlbGxlZGJ5PVwiaWRcIj5cbiAgICAgICAgPHNsb3Q+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJpdGVtIGluIGl0ZW1zXCI+XG4gICAgICAgICAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJwcmVmaXgoaXRlbS50eXBlIHx8ICdpdGVtJywgJ2Ryb3Bkb3duLW1lbnUnKVwiIHYtYmluZD1cIml0ZW1cIiBAY2xpY2s9XCJvbkNsaWNrKCRldmVudCwgaXRlbSlcIiAvPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9zbG90PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHV1aWQgZnJvbSAnQC9IZWxwZXJzL1V1aWQvVXVpZCc7XG5pbXBvcnQgcHJlZml4IGZyb20gJ0AvSGVscGVycy9QcmVmaXgvUHJlZml4JztcbmltcG9ydCBEcm9wZG93bk1lbnVJdGVtIGZyb20gJy4vRHJvcGRvd25NZW51SXRlbSc7XG5pbXBvcnQgRHJvcGRvd25NZW51SGVhZGVyIGZyb20gJy4vRHJvcGRvd25NZW51SGVhZGVyJztcbmltcG9ydCBEcm9wZG93bk1lbnVEaXZpZGVyIGZyb20gJy4vRHJvcGRvd25NZW51RGl2aWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgRHJvcGRvd25NZW51SXRlbSxcbiAgICAgICAgRHJvcGRvd25NZW51SGVhZGVyLFxuICAgICAgICBEcm9wZG93bk1lbnVEaXZpZGVyXG4gICAgfSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBgaWRgIGF0dHJpYnV0ZSBvbiB0aGUgdG9nZ2xlIGJ1dHRvbiBhbmQgYXJpYSBsYWJlbC4gSWYgbm8gYGlkYCBpc1xuICAgICAgICAgKiBkZWZpbmVkLCB0aGVuIGEgVVVJRCB3aWxsIGJlIGdlbmVyYXRlZCBpbnN0ZWFkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgT2JqZWN0XG4gICAgICAgICAqL1xuICAgICAgICBpZDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogdXVpZFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNwbGF5IHRoZSBkcm9wZG93biBtZW51IGFsaWduZWQgbGVmdCBvciByaWdodFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBhbGlnbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2xlZnQnLFxuICAgICAgICAgICAgdmFsaWRhdGUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZih2YWx1ZS50b0xvd2VyQ2FzZSgpKSAhPT0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkZWZhdWx0IHZpc2liaWxpdHkgb2YgdGhlIGRyb3Bkb3duIG1lbnUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBPYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIHNob3c6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IG9mIGRyb3Bkb3duIGl0ZW1zLiBJZiBhbiBrZXkvdmFsdWUgcGFpciBpc24ndCBkZWZpbmVkLCB0aGVcbiAgICAgICAgICogZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQuIElmIG5vIGl0ZW1zIGFyZSBkZWZpbmVkLCB0aGVuIHRoZSBzbG90XG4gICAgICAgICAqIG5hbWVkIFwiaXRlbXNcIiBjYW4gYmUgdXNlZCB0byBkZWZpbmUgdGhlIG9wdGlvbnMgd2l0aCBIVE1MLlxuICAgICAgICAgKlxuICAgICAgICAgKiBbe1xuICAgICAgICAgKiAgICAgIHR5cGU6ICdpdGVtJywgLy8gU3RyaW5nIFtpdGVtfGhlYWRlcnxkaXZpZGVyXVxuICAgICAgICAgKiAgICAgIGhyZWY6ICcjJywgLy8gU3RyaW5nXG4gICAgICAgICAqICAgICAgbGFiZWw6ICdTb21lIGxhYmVsJywgLy8gU3RyaW5nXG4gICAgICAgICAqICAgICAgb25DbGljazogKGV2ZW50KSA9PiB7fSAvLyBGdW5jdGlvblxuICAgICAgICAgKiB9XVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgQXJyYXlcbiAgICAgICAgICovXG4gICAgICAgIGl0ZW1zOiBBcnJheVxuXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICBwcmVmaXg6IHByZWZpeCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgdGhlIGBjbGlja2AgZXZlbnQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSBPYmplY3QgZXZlbnRcbiAgICAgICAgICogQHBhcmFtIE9iamVjdCBpdGVtXG4gICAgICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgb25DbGljayhldmVudCwgaXRlbSkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnaXRlbTpjbGljaycsIGV2ZW50LCBpdGVtKTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTpzaG93JywgZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cblxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgRHJvcGRvd25NZW51IGZyb20gJy4vRHJvcGRvd25NZW51JztcbmltcG9ydCBEcm9wZG93bk1lbnVEaXZpZGVyIGZyb20gJy4vRHJvcGRvd25NZW51RGl2aWRlcic7XG5pbXBvcnQgRHJvcGRvd25NZW51SGVhZGVyIGZyb20gJy4vRHJvcGRvd25NZW51SGVhZGVyJztcbmltcG9ydCBWdWVJbnN0YWxsZXIgZnJvbSAnQC9IZWxwZXJzL1Z1ZUluc3RhbGxlci9WdWVJbnN0YWxsZXInO1xuXG5jb25zdCBwbHVnaW4gPSBWdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIERyb3Bkb3duTWVudSxcbiAgICAgICAgICAgIERyb3Bkb3duTWVudURpdmlkZXIsXG4gICAgICAgICAgICBEcm9wZG93bk1lbnVIZWFkZXJcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25NZW51O1xuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cImJ0bi1ncm91cFwiIDpjbGFzcz1cInsnZHJvcHVwJzogZHJvcHVwLCAnZHJvcHJpZ2h0JzogZHJvcHJpZ2h0LCAnZHJvcGxlZnQnOiBkcm9wbGVmdH1cIj5cblxuICAgICAgICA8c2xvdCBuYW1lPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInNwbGl0XCI+XG4gICAgICAgICAgICAgICAgPGEgdi1pZj1cImhyZWZcIiA6aHJlZj1cImhyZWZcIiA6Y2xhc3M9XCJhY3Rpb25DbGFzc2VzXCIgQGNsaWNrPVwib25DbGlja1wiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwibGFiZWwtd3JhcHBlclwiPjxpIHYtaWY9XCJpY29uXCIgOmNsYXNzPVwiaWNvblwiPjwvaT4gPHNsb3QgbmFtZT1cImxhYmVsXCI+e3tsYWJlbH19PC9zbG90Pjwvc2xvdD5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB2LWVsc2UgOnR5cGU9XCJ0eXBlXCIgOmNsYXNzPVwiYWN0aW9uQ2xhc3Nlc1wiIEBjbGljaz1cIm9uQ2xpY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImxhYmVsLXdyYXBwZXJcIj48aSB2LWlmPVwiaWNvblwiIDpjbGFzcz1cImljb25cIj48L2k+IDxzbG90IG5hbWU9XCJsYWJlbFwiPnt7bGFiZWx9fTwvc2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgYXJpYS1oYXNwb3B1cD1cInRydWVcIiA6YXJpYS1leHBhbmRlZD1cImlzRHJvcGRvd25TaG93aW5nXCIgOmlkPVwiaWRcIiA6Y2xhc3M9XCJ0b2dnbGVDbGFzc2VzXCIgQGNsaWNrLnByZXZlbnQ9XCIhaXNEcm9wZG93blNob3dpbmcgPyBzaG93RHJvcGRvd24oKSA6IGhpZGVEcm9wZG93bigpXCIgQGJsdXI9XCJvbkJsdXJcIj48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgICAgICAgIDxidXR0b24gYXJpYS1oYXNwb3B1cD1cInRydWVcIiA6YXJpYS1leHBhbmRlZD1cImlzRHJvcGRvd25TaG93aW5nXCIgOnR5cGU9XCJ0eXBlXCIgOmlkPVwiaWRcIiA6Y2xhc3M9XCJ0b2dnbGVDbGFzc2VzXCIgQGNsaWNrLnByZXZlbnQ9XCIhaXNEcm9wZG93blNob3dpbmcgPyBzaG93RHJvcGRvd24oKSA6IGhpZGVEcm9wZG93bigpXCIgQGJsdXI9XCJvbkJsdXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImxhYmVsLXdyYXBwZXJcIj48aSB2LWlmPVwiaWNvblwiIDpjbGFzcz1cImljb25cIj48L2k+IDxzbG90IG5hbWU9XCJsYWJlbFwiPnt7bGFiZWx9fTwvc2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgIDxkcm9wZG93bi1tZW51IDppZD1cImlkXCIgOml0ZW1zPVwiaXRlbXNcIiA6YWxpZ249XCJhbGlnblwiIDpzaG93LnN5bmM9XCJpc0Ryb3Bkb3duU2hvd2luZ1wiIEBpdGVtOmNsaWNrPVwib25JdGVtQ2xpY2tcIiB2LXRyYW5zZm9ybS1wb3NpdGlvbj5cbiAgICAgICAgICAgICAgICA8c2xvdC8+XG4gICAgICAgICAgICA8L2Ryb3Bkb3duLW1lbnU+XG4gICAgICAgIDwvc2xvdD5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHV1aWQgZnJvbSAnQC9IZWxwZXJzL1V1aWQvVXVpZCc7XG5pbXBvcnQgcHJlZml4IGZyb20gJ0AvSGVscGVycy9QcmVmaXgvUHJlZml4JztcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAnLi4vRHJvcGRvd25NZW51JztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2J1dHRvbi1kcm9wZG93bicsXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIERyb3Bkb3duTWVudVxuICAgIH0sXG5cbiAgICBkaXJlY3RpdmVzOiB7XG4gICAgICAgIHRyYW5zZm9ybVBvc2l0aW9uOiB7XG4gICAgICAgICAgICB1cGRhdGUoZWwsIGJpbmRpbmcsIHZub2RlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRvcCA9IG51bGwsIGJvdHRvbSA9IG51bGwsIGxlZnQgPSBudWxsLCByaWdodCA9IG51bGwsIHggPSAwLCB5ID0gMDtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG9mZnNldEVsZW1lbnQgPSBnZXRDb21wdXRlZFN0eWxlKHZub2RlLmNvbnRleHQuJGVsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgIHZub2RlLmNvbnRleHQuc3BsaXQgPyAnLmJ0bjpub3QoLmRyb3Bkb3duLXRvZ2dsZSknIDogJy5idG4uZHJvcGRvd24tdG9nZ2xlJ1xuICAgICAgICAgICAgICAgICkpO1xuXG4gICAgICAgICAgICAgICAgLy9pZih2bm9kZS5jb250ZXh0LnNwbGl0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHZub2RlLmNvbnRleHQuc3BsaXQgJiYgdm5vZGUuY29udGV4dC5hbGlnbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0gb2Zmc2V0RWxlbWVudC53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQgPSBudWxsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL31cblxuICAgICAgICAgICAgICAgIGVsLnN0eWxlLmxlZnQgPSBsZWZ0ID09PSBudWxsID8gJ2F1dG8nIDogbGVmdDtcbiAgICAgICAgICAgICAgICBlbC5zdHlsZS5yaWdodCA9IHJpZ2h0ID09PSBudWxsID8gJ2F1dG8nIDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgZWwuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke3h9LCAke3l9KWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gYXJyYXkgb2YgZHJvcGRvd24gaXRlbXMuIElmIGFuIGtleS92YWx1ZSBwYWlyIGlzbid0IGRlZmluZWQsIHRoZVxuICAgICAgICAgKiBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZC4gSWYgbm8gaXRlbXMgYXJlIGRlZmluZWQsIHRoZW4gdGhlIHNsb3RcbiAgICAgICAgICogbmFtZWQgXCJpdGVtc1wiIGNhbiBiZSB1c2VkIHRvIGRlZmluZSB0aGUgb3B0aW9ucyB3aXRoIEhUTUwuXG4gICAgICAgICAqXG4gICAgICAgICAqIFt7XG4gICAgICAgICAqICAgICAgdHlwZTogJ2l0ZW0nLCAvLyBTdHJpbmcgW2l0ZW18aGVhZGVyfGRpdmlkZXJdXG4gICAgICAgICAqICAgICAgaHJlZjogJyMnLCAvLyBTdHJpbmdcbiAgICAgICAgICogICAgICBsYWJlbDogJ1NvbWUgbGFiZWwnLCAvLyBTdHJpbmdcbiAgICAgICAgICogICAgICBvbkNsaWNrOiAoZXZlbnQpID0+IHt9IC8vIEZ1bmN0aW9uXG4gICAgICAgICAqIH1dXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBBcnJheVxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IEFycmF5LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYGhyZWZgIGF0dHJpYnV0ZSBvbiB0aGUgYWN0aW9uIGJ1dHRvbiAoaWYgYSBzcGxpdCBidXR0b24pLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBocmVmOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBidXR0b24gaWNvbiB0aGF0IGFwcGVhcnMgYmVmb3JlIHRoZSBsYWJlbC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgaWNvbjogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdG9nZ2xlIGJ1dHRvbidzIGxhYmVsLiBJZiBub3QgZGVmaW5lZCBhcyBhbiBhdHRyaWJ1dGUsXG4gICAgICAgICAqIHlvdSBjYW4gb3ZlcnJpZGUgd2l0aCB0aGUgY29tcG9uZW50J3Mgc2xvdCAoaW5uZXIgaHRtbCkuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGxhYmVsOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBgaWRgIGF0dHJpYnV0ZSBvbiB0aGUgdG9nZ2xlIGJ1dHRvbiBhbmQgYXJpYSBsYWJlbC4gSWYgbm8gYGlkYCBpc1xuICAgICAgICAgKiBkZWZpbmVkLCB0aGVuIGEgVVVJRCB3aWxsIGJlIGdlbmVyYXRlZCBpbnN0ZWFkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBpZDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogdXVpZFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYHR5cGVgIGF0dHJpYnV0ZSBvbiB0aGUgdG9nZ2xlIGJ1dHRvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnYnV0dG9uJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2l6ZSBjbGFzcyBvZiB0aGUgdG9nZ2xlIGJ1dHRvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnbWQnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0b2dnbGUgYnV0dG9uJ3MgdmFyaWFudCBjbGFzcy5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdmFyaWFudDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ3ByaW1hcnknXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc3BsYXkgdGhlIGRyb3Bkb3duIG1lbnUgYWxpZ25lZCBsZWZ0IG9yIHJpZ2h0XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGFsaWduOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnbGVmdCcsXG4gICAgICAgICAgICB2YWxpZGF0ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKHZhbHVlLnRvTG93ZXJDYXNlKCkpICE9PSAtMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGxheSB0aGUgZHJvcGRvd24gYnV0dG9uIHdpdGggYSBzcGxpdCB0b2dnbGUgYnV0dG9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgQm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgc3BsaXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNwbGF5IGFzIGEgZHJvcHVwIGluc3RlYWQgb2YgYSBkcm9wZG93bi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGRyb3B1cDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERpc3BsYXkgYXMgYSBkcm9wcmlnaHQgaW5zdGVhZCBvZiBhIGRyb3Bkb3duLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgQm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgZHJvcHJpZ2h0OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGxheSBhcyBhIGRyb3BsZWZ0IGluc3RlYWQgb2YgYSBkcm9wZG93bi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGRyb3BsZWZ0OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdyB0aGUgZHJvcGRvd24gbWVudVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHNob3dEcm9wZG93bigpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RvZ2dsZScsIHRoaXMuaXNEcm9wZG93blNob3dpbmcgPSB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3Nob3cnKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSGlkZSB0aGUgZHJvcGRvd24gbWVudVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGhpZGVEcm9wZG93bigpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RvZ2dsZScsIHRoaXMuaXNEcm9wZG93blNob3dpbmcgPSBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdoaWRlJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIHRoZSBgY2xpY2tgIGV2ZW50IGZvciB0aGUgYWN0aW9uIGJ1dHRvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZURyb3Bkb3duKCk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycsIGV2ZW50KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQSBjYWxsYmFjayBmdW5jdGlvbiBmb3IgdGhlIGBibHVyYCBldmVudCBmb3IgdGhlIGFjdGlvbiBidXR0b25cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBvbkJsdXIoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLiRlbC5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZURyb3Bkb3duKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEEgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIHRoZSBgaXRlbTpjbGlja2AgZXZlbnQgZm9yIHRoZSBhY3Rpb24gYnV0dG9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgb25JdGVtQ2xpY2soZXZlbnQsIGNoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdpdGVtOmNsaWNrJywgZXZlbnQsIGNoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgYWN0aW9uQ2xhc3NlcygpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgJ2J0bicsXG4gICAgICAgICAgICAgICAgcHJlZml4KHRoaXMuc2l6ZSwgJ2J0bicpLFxuICAgICAgICAgICAgICAgIHByZWZpeCh0aGlzLnZhcmlhbnQsICdidG4nKVxuICAgICAgICAgICAgXS5qb2luKCcgJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9nZ2xlQ2xhc3NlcygpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgJ2J0bicsXG4gICAgICAgICAgICAgICAgJ2Ryb3Bkb3duLXRvZ2dsZScsXG4gICAgICAgICAgICAgICAgcHJlZml4KHRoaXMuc2l6ZSwgJ2J0bicpLFxuICAgICAgICAgICAgICAgIHByZWZpeCh0aGlzLnZhcmlhbnQsICdidG4nKSxcbiAgICAgICAgICAgICAgICAodGhpcy5zcGxpdCA/ICdkcm9wZG93bi10b2dnbGUtc3BsaXQnIDogJycpLFxuICAgICAgICAgICAgXS5qb2luKCcgJyk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlzRHJvcGRvd25TaG93aW5nOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxufVxuXG48L3NjcmlwdD5cbiIsImltcG9ydCBCdXR0b25Ecm9wZG93biBmcm9tICcuL0J1dHRvbkRyb3Bkb3duJztcbmltcG9ydCBWdWVJbnN0YWxsZXIgZnJvbSAnQC9IZWxwZXJzL1Z1ZUluc3RhbGxlci9WdWVJbnN0YWxsZXInO1xuXG5jb25zdCBwbHVnaW4gPSBWdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIEJ1dHRvbkRyb3Bkb3duXG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkRyb3Bkb3duO1xuIiwiLyoqIEVycm9yIG1lc3NhZ2UgY29uc3RhbnRzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBuZWdhdGVzIHRoZSByZXN1bHQgb2YgdGhlIHByZWRpY2F0ZSBgZnVuY2AuIFRoZVxuICogYGZ1bmNgIHByZWRpY2F0ZSBpcyBpbnZva2VkIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIGFuZCBhcmd1bWVudHMgb2YgdGhlXG4gKiBjcmVhdGVkIGZ1bmN0aW9uLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBwcmVkaWNhdGUgdG8gbmVnYXRlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbmVnYXRlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gaXNFdmVuKG4pIHtcbiAqICAgcmV0dXJuIG4gJSAyID09IDA7XG4gKiB9XG4gKlxuICogXy5maWx0ZXIoWzEsIDIsIDMsIDQsIDUsIDZdLCBfLm5lZ2F0ZShpc0V2ZW4pKTtcbiAqIC8vID0+IFsxLCAzLCA1XVxuICovXG5mdW5jdGlvbiBuZWdhdGUocHJlZGljYXRlKSB7XG4gIGlmICh0eXBlb2YgcHJlZGljYXRlICE9ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEZVTkNfRVJST1JfVEVYVCk7XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMDogcmV0dXJuICFwcmVkaWNhdGUuY2FsbCh0aGlzKTtcbiAgICAgIGNhc2UgMTogcmV0dXJuICFwcmVkaWNhdGUuY2FsbCh0aGlzLCBhcmdzWzBdKTtcbiAgICAgIGNhc2UgMjogcmV0dXJuICFwcmVkaWNhdGUuY2FsbCh0aGlzLCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgIGNhc2UgMzogcmV0dXJuICFwcmVkaWNhdGUuY2FsbCh0aGlzLCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICB9XG4gICAgcmV0dXJuICFwcmVkaWNhdGUuYXBwbHkodGhpcywgYXJncyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmVnYXRlO1xuIiwidmFyIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIG5lZ2F0ZSA9IHJlcXVpcmUoJy4vbmVnYXRlJyksXG4gICAgcGlja0J5ID0gcmVxdWlyZSgnLi9waWNrQnknKTtcblxuLyoqXG4gKiBUaGUgb3Bwb3NpdGUgb2YgYF8ucGlja0J5YDsgdGhpcyBtZXRob2QgY3JlYXRlcyBhbiBvYmplY3QgY29tcG9zZWQgb2ZcbiAqIHRoZSBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0aWVzIG9mIGBvYmplY3RgIHRoYXRcbiAqIGBwcmVkaWNhdGVgIGRvZXNuJ3QgcmV0dXJuIHRydXRoeSBmb3IuIFRoZSBwcmVkaWNhdGUgaXMgaW52b2tlZCB3aXRoIHR3b1xuICogYXJndW1lbnRzOiAodmFsdWUsIGtleSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtwcmVkaWNhdGU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIHByb3BlcnR5LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6ICcyJywgJ2MnOiAzIH07XG4gKlxuICogXy5vbWl0Qnkob2JqZWN0LCBfLmlzTnVtYmVyKTtcbiAqIC8vID0+IHsgJ2InOiAnMicgfVxuICovXG5mdW5jdGlvbiBvbWl0Qnkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgcmV0dXJuIHBpY2tCeShvYmplY3QsIG5lZ2F0ZShiYXNlSXRlcmF0ZWUocHJlZGljYXRlKSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9taXRCeTtcbiIsImltcG9ydCB7IG1hcCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBpc051bGwgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgb21pdEJ5IH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGNhbWVsQ2FzZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgcHJlZml4IGZyb20gJ0AvSGVscGVycy9QcmVmaXgvUHJlZml4JztcblxuY29uc3QgQ09MT1JTID0gW1xuICAgICdwcmltYXJ5JyxcbiAgICAnc2Vjb25kYXJ5JyxcbiAgICAnc3VjY2VzcycsXG4gICAgJ2RhbmdlcicsXG4gICAgJ3dhcm5pbmcnLFxuICAgICdpbmZvJyxcbiAgICAnbGlnaHQnLFxuICAgICdkYXJrJyxcbiAgICAnd2hpdGUnXG5dO1xuXG5jb25zdCBwcm9wcyA9IHt9O1xuXG5lYWNoKFsndGV4dCcsICdiZycsICdiZy1ncmFkaWVudCddLCBuYW1lc3BhY2UgPT4ge1xuICAgIGVhY2goQ09MT1JTLCBjb2xvciA9PiB7XG4gICAgICAgIHByb3BzW2NhbWVsQ2FzZShwcmVmaXgoY29sb3IsIG5hbWVzcGFjZSkpXSA9IEJvb2xlYW47XG4gICAgfSk7XG59KTtcblxuZnVuY3Rpb24gY2xhc3NlcyhpbnN0YW5jZSwgbmFtZXNwYWNlKSB7XG4gICAgcmV0dXJuIGZpbHRlcihtYXAoQ09MT1JTLCBjb2xvciA9PiB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZVtjYW1lbENhc2UoY29sb3IgPSBwcmVmaXgoY29sb3IsIG5hbWVzcGFjZSkpXSA/IGNvbG9yIDogbnVsbDtcbiAgICB9KSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIHByb3BzOiBwcm9wcyxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICB0ZXh0Q29sb3IoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xhc3Nlcyh0aGlzLCAndGV4dCcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGJnQ29sb3IoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xhc3Nlcyh0aGlzLCAnYmcnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBiZ0dyYWRpZW50Q29sb3IoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2xhc3Nlcyh0aGlzLCAnYmctZ3JhZGllbnQnKTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgdGV4dENvbG9yQ2xhc3NlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRleHRDb2xvcigpLmpvaW4oJyAnKS50cmltKCkgfHwgbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICBiZ0NvbG9yQ2xhc3NlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJnQ29sb3IoKS5qb2luKCcgJykudHJpbSgpIHx8IG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmdHcmFkaWVudENvbG9yQ2xhc3NlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJnR3JhZGllbnRDb2xvcigpLmpvaW4oJyAnKS50cmltKCkgfHwgbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICBjb2xvcmFibGVDbGFzc2VzKCkge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IHt9O1xuXG4gICAgICAgICAgICBjbGFzc2VzW3RoaXMudGV4dENvbG9yQ2xhc3Nlc10gPSAhIXRoaXMudGV4dENvbG9yQ2xhc3NlcztcbiAgICAgICAgICAgIGNsYXNzZXNbdGhpcy5iZ0NvbG9yQ2xhc3Nlc10gPSAhIXRoaXMuYmdDb2xvckNsYXNzZXM7XG4gICAgICAgICAgICBjbGFzc2VzW3RoaXMuYmdHcmFkaWVudENvbG9yQ2xhc3Nlc10gPSAhIXRoaXMuYmdHcmFkaWVudENvbG9yQ2xhc3NlcztcblxuICAgICAgICAgICAgcmV0dXJuIG9taXRCeShjbGFzc2VzLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAha2V5IHx8ICF2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IGVhY2ggfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgY2FtZWxDYXNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGlzVW5kZWZpbmVkIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBwcmVmaXggZnJvbSAnQC9IZWxwZXJzL1ByZWZpeC9QcmVmaXgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZmllbGQgaWQgYXR0cmlidXRlIHZhbHVlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBpZDogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdmFsdWUgb2YgbGFiZWwgZWxlbWVudC4gSWYgbm8gdmFsdWUsIG5vIGxhYmVsIHdpbGwgYXBwZWFyLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBsYWJlbDogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZmllbGQgbmFtZSBhdHRyaWJ1dGUgdmFsdWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIG5hbWU6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGZpZWxkIGlkIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHBsYWNlaG9sZGVyIGF0dHJpYnV0ZSB2YWx1ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSXMgdGhlIGZpZWxkIHJlcXVpcmVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICByZXF1aXJlZDogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHJlZ2V4IHBhdHRlcm4gZm9yIHZhbGlkYXRpb24uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHBhdHRlcm46IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gaW5saW5lIGZpZWxkIHZhbGlkYXRpb24gZXJyb3IuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmd8Qm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgZXJyb3I6IFN0cmluZyxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gaW5saW5lIGZpZWxkIHZhbGlkYXRpb24gZXJyb3JzIHBhc3NlZCBhcyBvYmplY3Qgd2l0aCBrZXkvdmFsdWVcbiAgICAgICAgICogcGFpcnMuIElmIGVycm9ycyBwYXNzZWQgYXMgYW4gb2JqZWN0LCB0aGUgZm9ybSBuYW1lIHdpbGwgYmUgdXNlZCBmb3JcbiAgICAgICAgICogdGhlIGtleS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IE9iamVjdHxCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBlcnJvcnM6IFtPYmplY3QsIEFycmF5XSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU29tZSBmZWVkYmFjayB0byBhZGQgdG8gdGhlIGZpZWxkIG9uY2UgdGhlIGZpZWxkIGlzIHN1Y2Nlc3NmdWxseVxuICAgICAgICAgKiB2YWxpZC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgZmVlZGJhY2s6IFtTdHJpbmcsIEFycmF5XSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQW4gYXJyYXkgb2YgZXZlbnQgbmFtZXMgdGhhdCBjb3JyZWxhdGUgd2l0aCBjYWxsYmFjayBmdW5jdGlvbnNcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEZ1bmN0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBiaW5kRXZlbnRzOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsnZm9jdXMnLCAnYmx1cicsICdjaGFuZ2UnLCAnY2xpY2snLCAna2V5dXAnLCAna2V5ZG93bicsICdwcm9ncmVzcyddO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgZGVmYXVsdCBjbGFzcyBuYW1lIGFzc2lnbmVkIHRvIHRoZSBjb250cm9sIGVsZW1lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgZGVmYXVsdENvbnRyb2xDbGFzczoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2Zvcm0tY29udHJvbCdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSGlkZSB0aGUgbGFiZWwgZm9yIGJyb3dzZXJzLCBidXQgbGVhdmUgaXQgZm9yIHNjcmVlbiByZWFkZXJzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBoaWRlTGFiZWw6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZGl0aW9uYWwgbWFyZ2luL3BhZGRpbmcgY2xhc3NlcyBmb3IgZmluZSBjb250cm9sIG9mIHNwYWNpbmdcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgc3BhY2luZzogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2l6ZSBvZiB0aGUgZm9ybSBjb250cm9sXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdtZCcsXG4gICAgICAgICAgICB2YWxpZGF0ZTogdmFsdWUgPT4gWydzbScsICdtZCcsICdsZyddLmluZGV4T2YodmFsdWUpICE9PSAtMVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNwbGF5IHRoZSBmb3JtIGZpZWxkIGlubGluZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBpbmxpbmU6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIHRoZSBmb3JtIGNvbnRyb2wgaXMgcmVhZG9ubHksIGRpc3BsYXkgb25seSBhcyB0ZXh0P1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBwbGFpbnRleHQ6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIHRoZSBmb3JtIGNvbnRyb2wgcmVhZG9ubHk/XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHJlYWRvbmx5OiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJcyB0aGUgZm9ybSBjb250cm9sIGRpc2FibGVkP1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogU29tZSBpbnN0cnVjdGlvbnMgdG8gYXBwZWFyIHVuZGVyIHRoZSBmaWVsZCBsYWJlbFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBoZWxwVGV4dDogU3RyaW5nLFxuXG4gICAgfSxcblxuICAgIGRpcmVjdGl2ZXM6IHtcbiAgICAgICAgYmluZEV2ZW50czoge1xuICAgICAgICAgICAgYmluZChlbCwgYmluZGluZywgdm5vZGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudHMgPSBiaW5kaW5nLnZhbHVlIHx8IHZub2RlLmNvbnRleHQuYmluZEV2ZW50cztcblxuICAgICAgICAgICAgICAgIGVhY2goZXZlbnRzLCBuYW1lID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bm9kZS5jb250ZXh0LiRlbWl0KG5hbWUsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAgIGdldElucHV0RmllbGQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kZWwucXVlcnlTZWxlY3RvcignLmZvcm0tY29udHJvbCwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRGaWVsZEVycm9ycygpIHtcbiAgICAgICAgICAgIGxldCBlcnJvcnMgPSB0aGlzLmVycm9yIHx8IHRoaXMuZXJyb3JzO1xuXG4gICAgICAgICAgICBpZihpc09iamVjdCh0aGlzLmVycm9ycykpIHtcbiAgICAgICAgICAgICAgICBlcnJvcnMgPSB0aGlzLmVycm9yc1t0aGlzLm5hbWUgfHwgdGhpcy5pZF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAhZXJyb3JzIHx8IGlzQXJyYXkoZXJyb3JzKSB8fCBpc09iamVjdChlcnJvcnMpID8gZXJyb3JzIDogW2Vycm9yc107XG4gICAgICAgIH0sXG5cbiAgICAgICAgdXBkYXRlZCh2YWx1ZSwgZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoZXZlbnQgfHwgJ2lucHV0JywgdmFsdWUpO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICBjYWxsYmFja3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iaW5kRXZlbnRzLm1hcChldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiB0aGlzW2NhbWVsQ2FzZShbJ29uJywgZXZlbnRdLmpvaW4oJyAnKSldXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuZmlsdGVyKGV2ZW50ID0+ICFpc1VuZGVmaW5lZChldmVudC5jYWxsYmFjaykpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGludmFsaWRGZWVkYmFjaygpIHtcbiAgICAgICAgICAgIGlmKHRoaXMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZXJyb3JzID0gdGhpcy5nZXRGaWVsZEVycm9ycygpO1xuXG4gICAgICAgICAgICByZXR1cm4gaXNBcnJheShlcnJvcnMpID8gZXJyb3JzLmpvaW4oJzxicj4nKSA6IGVycm9ycztcbiAgICAgICAgfSxcblxuICAgICAgICB2YWxpZEZlZWRiYWNrKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzQXJyYXkodGhpcy5mZWVkYmFjaykgPyB0aGlzLmZlZWRiYWNrLmpvaW4oJzxicj4nKSA6IHRoaXMuZmVlZGJhY2s7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29udHJvbENsYXNzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdENvbnRyb2xDbGFzcyArICh0aGlzLnBsYWludGV4dCA/ICctcGxhaW50ZXh0JyA6ICcnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjb250cm9sU2l6ZUNsYXNzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCh0aGlzLnNpemUsIHRoaXMuY29udHJvbENsYXNzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjb250cm9sQ2xhc3NlcygpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sQ2xhc3MsXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9sU2l6ZUNsYXNzLFxuICAgICAgICAgICAgICAgICh0aGlzLnNwYWNpbmcgfHwgJycpLFxuICAgICAgICAgICAgICAgICh0aGlzLmludmFsaWRGZWVkYmFjayA/ICdpcy1pbnZhbGlkJyA6ICcnKVxuICAgICAgICAgICAgXS5qb2luKCcgJyk7XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCIgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKHsnZm9ybS1jaGVjay1pbmxpbmUnOiBpbmxpbmV9LCBjb250cm9sU2l6ZUNsYXNzKVwiPlxuICAgICAgICA8bGFiZWwgOmZvcj1cImlkXCIgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKCdmb3JtLWNoZWNrLWxhYmVsJywgY29sb3JhYmxlQ2xhc3NlcylcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgOm5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICA6aWQ9XCJpZFwiXG4gICAgICAgICAgICAgICAgOnZhbHVlPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgIDpyZXF1aXJlZD1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZCB8fCByZWFkb25seVwiXG4gICAgICAgICAgICAgICAgOnJlYWRvbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgIDpwYXR0ZXJuPVwicGF0dGVyblwiXG4gICAgICAgICAgICAgICAgOmNoZWNrZWQ9XCJ2YWx1ZSA9PT0gY2hlY2tlZFwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKGNvbnRyb2xDbGFzcywgKGludmFsaWRGZWVkYmFjayA/ICdpcy1pbnZhbGlkJzonJyksICEobGFiZWwgPyAncG9zaXRpb24tc3RhdGljJyA6ICcnKSlcIlxuICAgICAgICAgICAgICAgIHYtYmluZC1ldmVudHM9XCJiaW5kRXZlbnRzXCJcbiAgICAgICAgICAgICAgICB2LW9uOmNoYW5nZT1cInVwZGF0ZWQoJGV2ZW50LnRhcmdldC52YWx1ZSwgJ2NoYW5nZScpXCI+XG5cbiAgICAgICAgICAgIDxzbG90Pnt7bGFiZWx9fTwvc2xvdD5cblxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0tZmVlZGJhY2sgdi1pZj1cInZhbGlkRmVlZGJhY2tcIiB2LWh0bWw9XCJ2YWxpZEZlZWRiYWNrXCIgdmFsaWQgLz5cbiAgICAgICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwiaW52YWxpZEZlZWRiYWNrXCIgdi1odG1sPVwiaW52YWxpZEZlZWRiYWNrXCIgaW52YWxpZCAvPlxuICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJoZWxwXCI+XG4gICAgICAgICAgICA8aGVscC10ZXh0IHYtaWY9XCJoZWxwVGV4dFwiIHYtaHRtbD1cImhlbHBUZXh0XCIgLz5cbiAgICAgICAgPC9zbG90PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHByZWZpeCBmcm9tICdAL0hlbHBlcnMvUHJlZml4L1ByZWZpeCc7XG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJ0AvTWl4aW5zL0NvbG9yYWJsZS9Db2xvcmFibGUnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0AvTWl4aW5zL0Zvcm1Db250cm9sL0Zvcm1Db250cm9sJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ3JhZGlvLWZpZWxkJyxcblxuICAgIG1peGluczogW1xuICAgICAgICBDb2xvcmFibGUsXG4gICAgICAgIEZvcm1Db250cm9sXG4gICAgXSxcblxuICAgIG1vZGVsOiB7XG4gICAgICAgIHByb3A6ICdjaGVja2VkJyxcbiAgICAgICAgZXZlbnQ6ICdjaGFuZ2UnXG4gICAgfSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBmb3JtLWdyb3VwIHRvIHRoZSB3cmFwcGluZyBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGdyb3VwOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGxheSB0aGUgZm9ybSBmaWVsZCBhbmQgbGFiZWwgaW5saW5lXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBGdW5jdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgaW5saW5lOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNoZWNrZWQgdmFsdWVzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGNoZWNrZWQ6IFtOdW1iZXIsIFN0cmluZywgT2JqZWN0XSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNsYXNzIG5hbWUgYXNzaWduZWQgdG8gdGhlIGNvbnRyb2wgZWxlbWVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBkZWZhdWx0Q29udHJvbENsYXNzOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnZm9ybS1jaGVjay1pbnB1dCdcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgY29udHJvbENsYXNzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGVmYXVsdENvbnRyb2xDbGFzcztcbiAgICAgICAgfSxcblxuICAgICAgICBjb250cm9sU2l6ZUNsYXNzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCh0aGlzLnNpemUsICdmb3JtLWNvbnRyb2wnKTtcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCIgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKHsnZm9ybS1jaGVjay1pbmxpbmUnOiBpbmxpbmV9LCBjb250cm9sU2l6ZUNsYXNzKVwiPlxuICAgICAgICA8bGFiZWwgOmZvcj1cImlkXCIgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKCdmb3JtLWNoZWNrLWxhYmVsJywgY29sb3JhYmxlQ2xhc3NlcylcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgOm5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICA6aWQ9XCJpZFwiXG4gICAgICAgICAgICAgICAgOnZhbHVlPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgIDpyZXF1aXJlZD1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZCB8fCByZWFkb25seVwiXG4gICAgICAgICAgICAgICAgOnJlYWRvbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgIDpwYXR0ZXJuPVwicGF0dGVyblwiXG4gICAgICAgICAgICAgICAgOmNoZWNrZWQ9XCJjaGVja2VkLmluZGV4T2YodmFsdWUpICE9PSAtMVwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKGNvbnRyb2xDbGFzcywgKGludmFsaWRGZWVkYmFjayA/ICdpcy1pbnZhbGlkJzonJyksICEobGFiZWwgPyAncG9zaXRpb24tc3RhdGljJyA6ICcnKSlcIlxuICAgICAgICAgICAgICAgIHYtYmluZC1ldmVudHM9XCJiaW5kRXZlbnRzXCJcbiAgICAgICAgICAgICAgICB2LW9uOmNoYW5nZT1cInVwZGF0ZWQoJGV2ZW50LnRhcmdldC52YWx1ZSwgJ2NoYW5nZScpXCI+XG5cbiAgICAgICAgICAgIDxzbG90Pnt7bGFiZWx9fTwvc2xvdD5cblxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cImZlZWRiYWNrXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0tZmVlZGJhY2sgdi1pZj1cInZhbGlkRmVlZGJhY2tcIiB2LWh0bWw9XCJ2YWxpZEZlZWRiYWNrXCIgdmFsaWQgLz5cbiAgICAgICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwiaW52YWxpZEZlZWRiYWNrXCIgdi1odG1sPVwiaW52YWxpZEZlZWRiYWNrXCIgaW52YWxpZCAvPlxuICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJoZWxwXCI+XG4gICAgICAgICAgICA8aGVscC10ZXh0IHYtaWY9XCJoZWxwVGV4dFwiIHYtaHRtbD1cImhlbHBUZXh0XCIgLz5cbiAgICAgICAgPC9zbG90PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IFJhZGlvRmllbGQgZnJvbSAnQC9Db21wb25lbnRzL1JhZGlvRmllbGQvUmFkaW9GaWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdjaGVja2JveC1maWVsZCcsXG5cbiAgICBleHRlbmRzOiBSYWRpb0ZpZWxkLFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBjaGVja2VkIHZhbHVlc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBjaGVja2VkOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlZCh2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHRoaXMuY2hlY2tlZC5zbGljZSgwKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5jaGVja2VkLmluZGV4T2YodmFsdWUpO1xuXG4gICAgICAgICAgICBpZihpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBjaGVja2VkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgQ2hlY2tib3hGaWVsZCBmcm9tICcuL0NoZWNrYm94RmllbGQnO1xuaW1wb3J0IFZ1ZUluc3RhbGxlciBmcm9tICdAL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgQ2hlY2tib3hGaWVsZFxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveEZpZWxkO1xuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPjxzbG90Lz48L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnY29udGFpbmVyJ1xuXG59XG5cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IENvbnRhaW5lciBmcm9tICcuL0NvbnRhaW5lcic7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJ0AvSGVscGVycy9WdWVJbnN0YWxsZXIvVnVlSW5zdGFsbGVyJztcblxuY29uc3QgcGx1Z2luID0gVnVlSW5zdGFsbGVyLnVzZSh7XG5cbiAgICBpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWVJbnN0YWxsZXIuY29tcG9uZW50cyh7XG4gICAgICAgICAgICBDb250YWluZXJcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGZvcm0tZ3JvdXA+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImxhYmVsXCI+XG4gICAgICAgICAgICA8Zm9ybS1sYWJlbCB2LWlmPVwibGFiZWxcIiA6Zm9yPVwiaWRcIiB2LWh0bWw9XCJsYWJlbFwiIC8+XG4gICAgICAgIDwvc2xvdD5cblxuICAgICAgICA8c2xvdCBuYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgOnR5cGU9XCJ0eXBlXCJcbiAgICAgICAgICAgICAgICA6aWQ9XCJpZFwiXG4gICAgICAgICAgICAgICAgOnZhbHVlPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICA6cmVxdWlyZWQ9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWQgfHwgcmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgIDpyZWFkb25seT1cInJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICA6cGF0dGVybj1cInBhdHRlcm5cIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cIm1lcmdlQ2xhc3Nlcyhjb250cm9sQ2xhc3NlcywgY29sb3JhYmxlQ2xhc3NlcylcIlxuICAgICAgICAgICAgICAgIHYtYmluZC1ldmVudHM9XCJiaW5kRXZlbnRzXCJcbiAgICAgICAgICAgICAgICB2LW9uOmlucHV0PVwidXBkYXRlZCgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImhlbHBcIj5cbiAgICAgICAgICAgIDxoZWxwLXRleHQgdi1pZj1cImhlbHBUZXh0XCIgdi1odG1sPVwiaGVscFRleHRcIiAvPlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImZlZWRiYWNrXCI+XG4gICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwidmFsaWRGZWVkYmFja1wiIHYtaHRtbD1cInZhbGlkRmVlZGJhY2tcIiB2YWxpZCAvPlxuICAgICAgICAgICAgPGZvcm0tZmVlZGJhY2sgdi1pZj1cImludmFsaWRGZWVkYmFja1wiIHYtaHRtbD1cImludmFsaWRGZWVkYmFja1wiIGludmFsaWQgLz5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgPC9mb3JtLWdyb3VwPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJ0AvTWl4aW5zL0NvbG9yYWJsZS9Db2xvcmFibGUnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0AvTWl4aW5zL0Zvcm1Db250cm9sL0Zvcm1Db250cm9sJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2lucHV0LWZpZWxkJyxcblxuICAgIG1peGluczogW1xuICAgICAgICBDb2xvcmFibGUsXG4gICAgICAgIEZvcm1Db250cm9sXG4gICAgXSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0eXBlIGF0dHJpYnV0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAndGV4dCdcbiAgICAgICAgfVxuXG4gICAgfVxuXG59XG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGZvcm0tZ3JvdXA+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImxhYmVsXCI+XG4gICAgICAgICAgICA8Zm9ybS1sYWJlbCB2LWlmPVwibGFiZWxcIiA6Zm9yPVwiaWRcIiB2LWh0bWw9XCJsYWJlbFwiPjwvZm9ybS1sYWJlbD5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tZmlsZVwiPlxuXG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwibGFiZWxcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybS1sYWJlbCB2LWlmPVwibGFiZWxcIiA6Y2xhc3M9XCJtZXJnZUNsYXNzZXMoY29sb3JhYmxlQ2xhc3NlcywgJ2N1c3RvbS1maWxlLWxhYmVsJylcIiA6Zm9yPVwiaWRcIiB2LWh0bWw9XCJsYWJlbCB8fCAnQ2hvb3NlIGZpbGUnXCIgLz5cbiAgICAgICAgICAgIDwvc2xvdD5cblxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdi1iaW5kLWV2ZW50c1xuICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJjb250cm9sQ2xhc3Nlc1wiXG4gICAgICAgICAgICAgICAgOmlkPVwiaWRcIlxuICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICA6d2lkdGg9XCJ3aWR0aFwiXG4gICAgICAgICAgICAgICAgOmhlaWdodD1cImhlaWdodFwiXG4gICAgICAgICAgICAgICAgOnJlcXVpcmVkPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgIDptdWx0aXBsZT1cIm11bHRpcGxlXCJcbiAgICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgICAgdi1vbjpjaGFuZ2U9XCJ1cGRhdGVkKCRldmVudC50YXJnZXQuZmlsZXMpXCI+XG5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJoZWxwXCI+XG4gICAgICAgICAgICAgICAgPGhlbHAtdGV4dCB2LWlmPVwiaGVscFRleHRcIiB2LWh0bWw9XCJoZWxwVGV4dFwiIC8+XG4gICAgICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJmZWVkYmFja1wiPlxuICAgICAgICAgICAgICAgIDxmb3JtLWZlZWRiYWNrIHYtaWY9XCJ2YWxpZEZlZWRiYWNrXCIgdi1odG1sPVwidmFsaWRGZWVkYmFja1wiIHZhbGlkIC8+XG4gICAgICAgICAgICAgICAgPGZvcm0tZmVlZGJhY2sgdi1pZj1cImludmFsaWRGZWVkYmFja1wiIHYtaHRtbD1cImludmFsaWRGZWVkYmFja1wiIGludmFsaWQgLz5cbiAgICAgICAgICAgIDwvc2xvdD5cblxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZm9ybS1ncm91cD5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IElucHV0RmllbGQgZnJvbSAnQC9Db21wb25lbnRzL0lucHV0RmllbGQvSW5wdXRGaWVsZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdmaWxlLWZpZWxkJyxcblxuICAgIGV4dGVuZHM6IElucHV0RmllbGQsXG5cbiAgICBtb2RlbDoge1xuICAgICAgICBldmVudDogJ2NoYW5nZSdcbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNsYXNzIG5hbWUgYXNzaWduZWQgdG8gdGhlIGNvbnRyb2wgZWxlbWVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBkZWZhdWx0Q29udHJvbENsYXNzOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnY3VzdG9tLWZpbGUtaW5wdXQnXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IG9mIHZhbGlkIGV4dGVuc2lvbnNcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgZXh0ZW5zaW9uczogQXJyYXksXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB0eXBlIGF0dHJpYnV0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBtdWx0aXBsZTogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGhlaWdodCBhdHRyaWJ1dGUgZm9yIHRoZSBjb250cm9sIGVsZW1lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgaGVpZ2h0OiBbTnVtYmVyLCBTdHJpbmddLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgd2lkdGggYXR0cmlidXRlIGZvciB0aGUgY29udHJvbCBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHdpZHRoOiBbTnVtYmVyLCBTdHJpbmddXG5cbiAgICB9XG5cbn1cblxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgRmlsZUZpZWxkIGZyb20gJy4vRmlsZUZpZWxkJztcbmltcG9ydCBWdWVJbnN0YWxsZXIgZnJvbSAnQC9IZWxwZXJzL1Z1ZUluc3RhbGxlci9WdWVJbnN0YWxsZXInO1xuXG5jb25zdCBwbHVnaW4gPSBWdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIEZpbGVGaWVsZFxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlRmllbGQ7XG4iLCJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnbG9kYXNoJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVhZEZpbGUoZmlsZSwgcHJvZ3Jlc3MpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcjtcblxuICAgICAgICByZWFkZXIub25sb2FkID0gZSA9PiByZXNvbHZlKGUpO1xuICAgICAgICByZWFkZXIub25lcnJvciA9IGUgPT4gcmVqZWN0KGUpO1xuICAgICAgICByZWFkZXIub25hYm9ydCA9IGUgPT4gcmVqZWN0KGUpO1xuXG4gICAgICAgIHJlYWRlci5vbnByb2dyZXNzID0gZSA9PiB7XG4gICAgICAgICAgICBpZihlLmxlbmd0aENvbXB1dGFibGUgJiYgaXNGdW5jdGlvbihwcm9ncmVzcykpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyhwYXJzZUludCgoZS5sb2FkZWQgLyBlLnRvdGFsKSAqIDEwMCwgMTApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICB9KTtcbn1cbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYE51bWJlcmAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiAqKk5vdGU6KiogVG8gZXhjbHVkZSBgSW5maW5pdHlgLCBgLUluZmluaXR5YCwgYW5kIGBOYU5gLCB3aGljaCBhcmVcbiAqIGNsYXNzaWZpZWQgYXMgbnVtYmVycywgdXNlIHRoZSBgXy5pc0Zpbml0ZWAgbWV0aG9kLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgbnVtYmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNOdW1iZXIoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTnVtYmVyKEluZmluaXR5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTnVtYmVyKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gbnVtYmVyVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc051bWJlcjtcbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIiA6c3R5bGU9XCJ7J2hlaWdodCc6IGZvcm1hdHRlZEhlaWdodH1cIj5cbiAgICAgICAgPGRpdiByb2xlPVwicHJvZ3Jlc3NiYXJcIiA6c3R5bGU9XCJ7J3dpZHRoJzogcHJvZ3Jlc3MgKyAnJSd9XCIgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiA6Y2xhc3M9XCJtZXJnZUNsYXNzZXMocHJvZ3Jlc3NDbGFzc2VzLCBjb2xvcmFibGVDbGFzc2VzKVwiIDphcmlhLXZhbHVlbm93PVwicHJvZ3Jlc3NcIiBhcmlhLXZhbHVlbWluPVwiMFwiIGFyaWEtdmFsdWVtYXg9XCIxMDBcIj5cbiAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJsYWJlbFwiPnt7cHJvZ3Jlc3N9fSU8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHsgaXNOdW1iZXIgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICdAL01peGlucy9Db2xvcmFibGUvQ29sb3JhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ3Byb2dyZXNzLWJhcicsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgQ29sb3JhYmxlXG4gICAgXSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwcm9ncmVzcyBiYXIgcGVyY2VudGFnZSB2YWx1ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBwcm9ncmVzczoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGhlaWdodCBvZiB0aGUgcHJvZ3Jlc3MgYmFyXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGhlaWdodDogW051bWJlciwgU3RyaW5nXSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdyB0aGUgcHJvZ3Jlc3MgYmFyIHZhbHVlIGFzIGEgbGFiZWwgaW5zaWRlIHRoZSBiYXJcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgbGFiZWw6IEJvb2xlYW4sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3VsZCB0aGUgcHJvZ3Jlc3MgYmFyIGFwcGVhciB3aXRoIHN0cmlwZXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgc3RyaXBlZDogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdWxkIHRoZSBwcm9ncmVzcyBiYXIgYXBwZWFyIHdpdGggYW5pbWF0ZWQgc3RyaXBlc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBhbmltYXRlZDogQm9vbGVhblxuXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgZm9ybWF0dGVkSGVpZ2h0KCkge1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzLmhlaWdodCA/IG51bGwgOiAoXG4gICAgICAgICAgICAgICAgaXNOdW1iZXIodGhpcy5oZWlnaHQpID8gdGhpcy5oZWlnaHQgKyAncHgnIDogdGhpcy5oZWlnaHRcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcHJvZ3Jlc3NDbGFzc2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAncHJvZ3Jlc3MtYmFyLXN0cmlwZWQnOiB0aGlzLnN0cmlwZWQsXG4gICAgICAgICAgICAgICAgJ3Byb2dyZXNzLWJhci1hbmltYXRlZCc6IHRoaXMuYW5pbWF0ZWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgIH1cblxufVxuXG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJmaWxlLXByZXZpZXdcIiA6Y2xhc3M9XCJ7J2lzLWltYWdlJzogaXNJbWFnZX1cIj5cblxuICAgICAgICA8YSB2LWlmPVwiIWlzSW1hZ2UgfHwgaW1hZ2VcIiBocmVmPVwiI1wiIGNsYXNzPVwiZmlsZS1wcmV2aWV3LWNsb3NlXCIgQGNsaWNrLnByZXZlbnQ9XCIkZW1pdCgnY2xvc2UnLCBmaWxlKVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10aW1lcy1jaXJjbGVcIj48L2k+XG4gICAgICAgIDwvYT5cblxuICAgICAgICA8ZGl2IHYtaWY9XCJpc0ltYWdlXCIgY2xhc3M9XCJmaWxlLXByZXZpZXctaW1hZ2VcIj5cbiAgICAgICAgICAgIDxpbWcgdi1pZj1cImltYWdlXCIgOnNyYz1cImltYWdlXCIgY2xhc3M9XCJmaWxlLXByZXZpZXctdGh1bWJuYWlsXCI+XG4gICAgICAgICAgICA8cHJvZ3Jlc3MtYmFyIHYtZWxzZSB2LXJlYWR5PVwicmVhZEZpbGVcIiA6cHJvZ3Jlc3M9XCJsb2FkZWRcIiA6aGVpZ2h0PVwiMTBcIiAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cImZpbGUtcHJldmlldy1pY29uXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWZpbGUtb1wiPjwvaT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtcHJldmlldy1maWxlbmFtZVwiIHYtaHRtbD1cIm5hbWVcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtcHJldmlldy1maWxlc2l6ZVwiPih7e3NpemV9fSk8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHJlYWRGaWxlIGZyb20gJ0AvSGVscGVycy9SZWFkRmlsZS9SZWFkRmlsZSc7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnQC9Db21wb25lbnRzL1Byb2dyZXNzQmFyL1Byb2dyZXNzQmFyJztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2ZpbGUtcHJldmlldycsXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIFByb2dyZXNzQmFyXG4gICAgfSxcblxuICAgIGRpcmVjdGl2ZXM6IHtcbiAgICAgICAgcmVhZHk6IHtcbiAgICAgICAgICAgIGluc2VydGVkKGVsLCBiaW5kaW5nKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGlzRnVuY3Rpb24oYmluZGluZy52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJpbmRpbmcudmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgdXBsb2FkZWQgRmlsZSBvYmplY3RcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IE9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgZmlsZToge1xuICAgICAgICAgICAgdHlwZTogRmlsZSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IG9mIG1pbWUgdHlwZXMgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBkZXRlcm1pbmUgaWYgdGhlXG4gICAgICAgICAqIGZpbGUgaXMgYW4gaW1hZ2UuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBBcnJheVxuICAgICAgICAgKi9cbiAgICAgICAgaW1hZ2VNaW1lczoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICBkZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbJ2ltYWdlL2dpZicsICdpbWFnZS9wbmcnLCAnaW1hZ2UvanBlZycsICdpbWFnZS9ibXAnLCAnaW1hZ2Uvd2VicCddO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBmaWxlIG5hbWVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgbmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbGUubmFtZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBmaWxlIGV4dGVuc2lvblxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBleHRlbnNpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maWxlLm5hbWUuc3BsaXQoJy4nKS5wb3AoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXQgdGhlIGZpbGUgZm9ybWF0dGVkIHNpemVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgc2l6ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ5dGVzVG9TaXplKHRoaXMuZmlsZS5zaXplKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBmaWxlIHR5cGVcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdHlwZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbGUudHlwZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgdGhlIGZpbGUgYW4gaW1hZ2U/XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGlzSW1hZ2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbWFnZU1pbWVzLmluZGV4T2YodGhpcy50eXBlKSAhPT0gLTE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCB0aGUgbGFzdCB0aW1lIHRoZSBmaWxlIHdhcyBtb2RpZmllZCAoYXMgdGltZXN0YW1wKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBsYXN0TW9kaWZpZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maWxlLmxhc3RNb2RpZmllZDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogR2V0IHRoZSBsYXN0IHRpbWUgdGhlIGZpbGUgd2FzIG1vZGlmaWVkIChhcyBEYXRlKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBsYXN0TW9kaWZpZWREYXRlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlsZS5sYXN0TW9kaWZpZWREYXRlO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICByZWFkRmlsZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0ID0gbW9tZW50KCk7XG5cbiAgICAgICAgICAgIHJlYWRGaWxlKHRoaXMuZmlsZSwgZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZS5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVkID0gcGFyc2VJbnQoKGUubG9hZGVkIC8gZS50b3RhbCkgKiAxMDAsIDEwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGUgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlID0gZS50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgIH0sIDYwMCAtIG1vbWVudCgpLmRpZmYoc3RhcnQpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgXHRieXRlc1RvU2l6ZTogZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICBcdFx0dmFyIHNpemVzID0gWydCeXRlcycsICdLQicsICdNQicsICdHQicsICdUQiddO1xuICAgIFx0XHRpZiAoYnl0ZXMgPT0gMCkgcmV0dXJuICcwIEJ5dGUnO1xuICAgIFx0XHR2YXIgaSA9IHBhcnNlSW50KE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coMTAyNCkpKTtcbiAgICBcdFx0cmV0dXJuIE1hdGgucm91bmQoYnl0ZXMgLyBNYXRoLnBvdygxMDI0LCBpKSwgMikgKyAnICcgKyBzaXplc1tpXTtcbiAgICBcdH1cblxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbG9hZGVkOiAwLFxuICAgICAgICAgICAgaW1hZ2U6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG5cbn1cblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCAnLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvYm9vdHN0cmFwLnNjc3MnO1xuXG4kZmlsZS1wcmV2aWV3LWNsb3NlLXdpZHRoOiAkZm9udC1zaXplLWJhc2UgKiAyO1xuJGZpbGUtcHJldmlldy1jbG9zZS1oZWlnaHQ6ICRmb250LXNpemUtYmFzZSAqIDI7XG5cbi5maWxlLXByZXZpZXcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5maWxlLXByZXZpZXctY2xvc2Uge1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzMyUsIC0zMyUpO1xuXG4gICAgICAgIGkge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmZpbGUtcHJldmlldy1pY29uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgfVxuXG4gICAgLmZpbGUtcHJldmlldy10aHVtYm5haWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5maWxlLXByZXZpZXctZmlsZW5hbWUge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cblxuICAgIC5maWxlLXByZXZpZXctZmlsZW5hbWUsXG4gICAgLmZpbGUtcHJldmlldy1maWxlc2l6ZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbn1cblxuPC9zdHlsZT5cbiIsImltcG9ydCBGaWxlUHJldmlldyBmcm9tICcuL0ZpbGVQcmV2aWV3JztcbmltcG9ydCBWdWVJbnN0YWxsZXIgZnJvbSAnQC9IZWxwZXJzL1Z1ZUluc3RhbGxlci9WdWVJbnN0YWxsZXInO1xuXG5jb25zdCBwbHVnaW4gPSBWdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIEZpbGVQcmV2aWV3XG4gICAgICAgIH0pO1xuICAgIH1cblxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVQcmV2aWV3O1xuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiA6Y2xhc3M9XCJ7J2ludmFsaWQtZmVlZGJhY2snOiBpbnZhbGlkLCAndmFsaWQtZmVlZGJhY2snOiB2YWxpZCAmJiAhaW52YWxpZH1cIj5cbiAgICAgICAgPHNsb3Q+e3tsYWJlbH19PC9zbG90PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgQ29sb3JhYmxlIGZyb20gJ0AvTWl4aW5zL0NvbG9yYWJsZS9Db2xvcmFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnZm9ybS1mZWVkYmFjaycsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgQ29sb3JhYmxlXG4gICAgXSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSB2YWx1ZSBvZiBsYWJlbCBlbGVtZW50LiBJZiBubyB2YWx1ZSwgbm8gbGFiZWwgd2lsbCBhcHBlYXIuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGxhYmVsOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3VsZCB0aGUgZmVlZGJhY2sgbWFya2VkIGFzIGludmFsaWRcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgaW52YWxpZDogQm9vbGVhbixcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdWxkIHRoZSBmZWVkYmFjayBtYXJrZWQgYXMgaW52YWxpZFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICB2YWxpZDogQm9vbGVhblxuXG4gICAgfVxuXG59XG5cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IEZvcm1GZWVkYmFjayBmcm9tICcuL0Zvcm1GZWVkYmFjayc7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJ0AvSGVscGVycy9WdWVJbnN0YWxsZXIvVnVlSW5zdGFsbGVyJztcblxuY29uc3QgcGx1Z2luID0gVnVlSW5zdGFsbGVyLnVzZSh7XG5cbiAgICBpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWVJbnN0YWxsZXIuY29tcG9uZW50cyh7XG4gICAgICAgICAgICBGb3JtRmVlZGJhY2tcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybUZlZWRiYWNrO1xuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj48c2xvdC8+PC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ2Zvcm0tZ3JvdXAnXG4gICAgXG59XG5cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IEZvcm1Hcm91cCBmcm9tICcuL0Zvcm1Hcm91cCc7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJ0AvSGVscGVycy9WdWVJbnN0YWxsZXIvVnVlSW5zdGFsbGVyJztcblxuY29uc3QgcGx1Z2luID0gVnVlSW5zdGFsbGVyLnVzZSh7XG5cbiAgICBpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWVJbnN0YWxsZXIuY29tcG9uZW50cyh7XG4gICAgICAgICAgICBGb3JtR3JvdXBcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybUdyb3VwO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogU2hvdWxkIHNob3cgb25seSBmb3Igc2NyZWVucmVhZGVyc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgQm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgc3JPbmx5OiBCb29sZWFuLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG91bGQgYmUgZm9jdXNhYmxlIGZvciBzY3JlZW5yZWFkZXJzXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBzck9ubHlGb2N1c2FibGU6IEJvb2xlYW5cblxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBzY3JlZW5yZWFkZXJDbGFzc2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAnc3Itb25seSc6IHRoaXMuc3JPbmx5LFxuICAgICAgICAgICAgICAgICdzci1vbmx5LWZvY3VzYWJsZSc6IHRoaXMuc3JPbmx5Rm9jdXNhYmxlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGxhYmVsIDpjbGFzcz1cImNsYXNzZXNcIj48c2xvdC8+PC9sYWJlbD5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHsgZXh0ZW5kIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnQC9NaXhpbnMvQ29sb3JhYmxlL0NvbG9yYWJsZSc7XG5pbXBvcnQgU2NyZWVucmVhZGVycyBmcm9tICdAL01peGlucy9TY3JlZW5yZWFkZXJzL1NjcmVlbnJlYWRlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBuYW1lOiAnZm9ybS1sYWJlbCcsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgQ29sb3JhYmxlLFxuICAgICAgICBTY3JlZW5yZWFkZXJzXG4gICAgXSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGNsYXNzZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gZXh0ZW5kKHt9LCB0aGlzLnNjcmVlbnJlYWRlckNsYXNzZXMsIHRoaXMuY29sb3JhYmxlQ2xhc3Nlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cblxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgRm9ybUxhYmVsIGZyb20gJy4vRm9ybUxhYmVsJztcbmltcG9ydCBWdWVJbnN0YWxsZXIgZnJvbSAnQC9IZWxwZXJzL1Z1ZUluc3RhbGxlci9WdWVJbnN0YWxsZXInO1xuXG5jb25zdCBwbHVnaW4gPSBWdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIEZvcm1MYWJlbFxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtTGFiZWw7XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8c21hbGwgY2xhc3M9XCJmb3JtLXRleHRcIiA6Y2xhc3M9XCJjbGFzc2VzXCI+PHNsb3QgLz48L3NtYWxsPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IENvbG9yYWJsZSBmcm9tICdAL01peGlucy9Db2xvcmFibGUvQ29sb3JhYmxlJztcbmltcG9ydCBTY3JlZW5yZWFkZXJzIGZyb20gJ0AvTWl4aW5zL1NjcmVlbnJlYWRlcnMvU2NyZWVucmVhZGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdoZWxwLXRleHQnLFxuXG4gICAgbWl4aW5zOiBbXG4gICAgICAgIENvbG9yYWJsZSxcbiAgICAgICAgU2NyZWVucmVhZGVyc1xuICAgIF0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBjbGFzc2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIGV4dGVuZCh7fSwgdGhpcy5zY3JlZW5yZWFkZXJDbGFzc2VzLCB0aGlzLmNvbG9yYWJsZUNsYXNzZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IEhlbHBUZXh0IGZyb20gJy4vSGVscFRleHQnO1xuaW1wb3J0IFZ1ZUluc3RhbGxlciBmcm9tICdAL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgSGVscFRleHRcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSGVscFRleHQ7XG4iLCJpbXBvcnQgSW5wdXRGaWVsZCBmcm9tICcuL0lucHV0RmllbGQnO1xuaW1wb3J0IFZ1ZUluc3RhbGxlciBmcm9tICdAL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgSW5wdXRGaWVsZFxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBJbnB1dEZpZWxkO1xuIiwiPHRlbXBsYXRlPlxuICAgIDxmb3JtLWdyb3VwPlxuICAgICAgICA8c2xvdCBuYW1lPVwibGFiZWxcIj5cbiAgICAgICAgICAgIDxmb3JtLWxhYmVsIHYtaWY9XCJsYWJlbFwiIDpmb3I9XCJpZFwiIHYtaHRtbD1cImxhYmVsXCIgLz5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgICAgIDxkaXYgOmNsYXNzPVwiY29udHJvbENsYXNzZXNcIiB0YWJpbmRleD1cIjBcIiBAY2xpY2s9XCJ0b2dnbGUoKVwiIEBrZXl1cC4zMj1cInRvZ2dsZSgpXCIgQGtleXVwLjM3PVwidG9nZ2xlKG9mZlZhbHVlKVwiIEBrZXl1cC4zOT1cInRvZ2dsZShvblZhbHVlKVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpZ2h0LXN3aXRjaC1oYW5kbGVcIj48L2Rpdj5cbiAgICAgICAgXHQ8ZGl2IGNsYXNzPVwibGlnaHQtc3dpdGNoLWNvbnRhaW5lclwiPlxuICAgICAgICBcdFx0PGRpdiBjbGFzcz1cImxpZ2h0LXN3aXRjaC1sYWJlbCBvbi12YWx1ZVwiPjwvZGl2PlxuICAgICAgICBcdFx0PGRpdiBjbGFzcz1cImxpZ2h0LXN3aXRjaC1sYWJlbCBvZmYtdmFsdWVcIj48L2Rpdj5cbiAgICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgOm5hbWU9XCJuYW1lXCIgOnZhbHVlPVwidmFsdWVcIiA6aWQ9XCJpZFwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGQtbm9uZVwiPlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJmZWVkYmFja1wiPlxuICAgICAgICAgICAgPGZvcm0tZmVlZGJhY2sgdi1pZj1cInZhbGlkRmVlZGJhY2tcIiB2LWh0bWw9XCJ2YWxpZEZlZWRiYWNrXCIgdmFsaWQgLz5cbiAgICAgICAgICAgIDxmb3JtLWZlZWRiYWNrIHYtaWY9XCJpbnZhbGlkRmVlZGJhY2tcIiB2LWh0bWw9XCJpbnZhbGlkRmVlZGJhY2tcIiBpbnZhbGlkIC8+XG4gICAgICAgIDwvc2xvdD5cblxuICAgICAgICA8c2xvdCBuYW1lPVwiaGVscFwiPlxuICAgICAgICAgICAgPGhlbHAtdGV4dCB2LWlmPVwiaGVscFRleHRcIiB2LWh0bWw9XCJoZWxwVGV4dFwiIC8+XG4gICAgICAgIDwvc2xvdD5cbiAgICA8L2Zvcm0tZ3JvdXA+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaXNVbmRlZmluZWQgfSBmcm9tICdsb2Rhc2gnO1xuLy9pbXBvcnQgQmFzZUZpZWxkIGZyb20gJy4vQmFzZUZpZWxkJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAL01peGlucy9Gb3JtQ29udHJvbC9Gb3JtQ29udHJvbCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICdsaWdodC1zd2l0Y2gtZmllbGQnLFxuXG4gICAgbWl4aW5zOiBbRm9ybUNvbnRyb2xdLFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNsYXNzIG5hbWUgYXNzaWduZWQgdG8gdGhlIGNvbnRyb2wgZWxlbWVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBkZWZhdWx0Q29udHJvbENsYXNzOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnZm9ybS1jb250cm9sIGxpZ2h0LXN3aXRjaCdcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNsYXNzIG5hbWUgYXNzaWduZWQgdG8gdGhlIGNvbnRyb2wgZWxlbWVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmVDbGFzczoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ29uJ1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY2xhc3MgbmFtZSBhc3NpZ25lZCB0byB0aGUgY29udHJvbCBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIG9uVmFsdWU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDFcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNsYXNzIG5hbWUgYXNzaWduZWQgdG8gdGhlIGNvbnRyb2wgZWxlbWVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBvZmZWYWx1ZToge1xuICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICBpc0FjdGl2ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZSA9PT0gdGhpcy5vblZhbHVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNvbnRyb2xDbGFzc2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xDbGFzcyxcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xTaXplQ2xhc3MsXG4gICAgICAgICAgICAgICAgKHRoaXMuc3BhY2luZyB8fCAnJyksXG4gICAgICAgICAgICAgICAgKHRoaXMuaW52YWxpZEZlZWRiYWNrID8gJ2lzLWludmFsaWQnIDogJycpLFxuICAgICAgICAgICAgICAgICh0aGlzLmRyYWdnaW5nID8gJ2lzLWRyYWdnaW5nJyA6ICcnKSxcbiAgICAgICAgICAgICAgICAodGhpcy5pc0FjdGl2ZSA/ICdpcy1hY3RpdmUnIDogJycpXG4gICAgICAgICAgICBdLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICBnZXRUcmFuc2l0aW9uSW5NaWxsaXNlY29uZHMoKSB7XG4gICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IGdldENvbXB1dGVkU3R5bGUodGhpcy4kZWwucXVlcnlTZWxlY3RvcignLmxpZ2h0LXN3aXRjaC1oYW5kbGUnKSkudHJhbnNpdGlvbkR1cmF0aW9uO1xuICAgICAgICAgICAgY29uc3QgbnVtZXJpYyA9IHBhcnNlRmxvYXQoZHVyYXRpb24sIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IHVuaXQgPSBkdXJhdGlvbi5tYXRjaCgvbT9zLyk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAodW5pdFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVtZXJpYyAqIDEwMDA7XG4gICAgICAgICAgICAgICAgY2FzZSAnbXMnOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVtZXJpYztcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFwiJHt1bml0WzBdfVwiIGlzIG5vdCBhIHZhbGlkIHVuaXQgb2YgbWVhc3VyZS4gVW5pdCBtdXN0IGJlIFwic1wiIChzZWNvbmRzKSBvciBcIm1zXCIgKG1pbGxpc2Vjb25kcykuYCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9nZ2xlKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsICFpc1VuZGVmaW5lZCh2YWx1ZSkgPyB2YWx1ZSA6ICh0aGlzLmlzQWN0aXZlID8gdGhpcy5vZmZWYWx1ZSA6IHRoaXMub25WYWx1ZSkpO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgdmFsdWUoKSB7XG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSwgdGhpcy5nZXRUcmFuc2l0aW9uSW5NaWxsaXNlY29uZHMoKSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRyYWdnaW5nOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxufVxuXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5AaW1wb3J0ICcuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9ib290c3RyYXAuc2Nzcyc7XG5cbiRsaWdodC1zd2l0Y2gtYW5pbWF0aW9uLWVhc2luZzogZWFzZTtcbiRsaWdodC1zd2l0Y2gtYW5pbWF0aW9uLWxlbmd0aDogMXMgLyAzO1xuJGxpZ2h0LXN3aXRjaC1oYW5kbGUtd2lkdGg6ICRmb250LXNpemUtYmFzZSAqIDI7XG4kbGlnaHQtc3dpdGNoLWhhbmRsZS1oZWlnaHQ6ICRsaWdodC1zd2l0Y2gtaGFuZGxlLXdpZHRoO1xuJGxpZ2h0LXN3aXRjaC1zaXplLXdpZHRoOiAkbGlnaHQtc3dpdGNoLWhhbmRsZS13aWR0aCAqIDEuNTtcbiRsaWdodC1zd2l0Y2gtc2l6ZS1oZWlnaHQ6ICRsaWdodC1zd2l0Y2gtaGFuZGxlLWhlaWdodDtcbiRsaWdodC1zd2l0Y2gtbGFiZWwtd2lkdGg6ICRsaWdodC1zd2l0Y2gtaGFuZGxlLXdpZHRoO1xuJGxpZ2h0LXN3aXRjaC1sYWJlbC1oZWlnaHQ6ICRsaWdodC1zd2l0Y2gtaGFuZGxlLWhlaWdodDtcblxuQG1peGluIGxpZ2h0LXN3aXRjaC1zaXplKCRzaXplLCAkbW9kaWZpZXIpIHtcbiAgICAkaGFuZGxlLXdpZHRoOiAkbGlnaHQtc3dpdGNoLWhhbmRsZS13aWR0aCAqICRtb2RpZmllcjtcbiAgICAkaGFuZGxlLWhlaWdodDogJGhhbmRsZS13aWR0aDtcbiAgICAkc2l6ZS13aWR0aDogJGhhbmRsZS13aWR0aCAqIDEuNTtcbiAgICAkc2l6ZS1oZWlnaHQ6ICRoYW5kbGUtaGVpZ2h0O1xuICAgICRsYWJlbC13aWR0aDogJGhhbmRsZS13aWR0aDtcbiAgICAkbGFiZWwtaGVpZ2h0OiAkaGFuZGxlLWhlaWdodDtcblxuICAgICYubGlnaHQtc3dpdGNoLSN7JHNpemV9IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICBcdHdpZHRoOiAkc2l6ZS13aWR0aDtcbiAgICBcdGhlaWdodDogJGhhbmRsZS1oZWlnaHQ7XG4gICAgXHRib3JkZXItcmFkaXVzOiAkaGFuZGxlLXdpZHRoO1xuXG4gICAgICAgIC5saWdodC1zd2l0Y2gtaGFuZGxlIHtcbiAgICAgICAgICAgIHdpZHRoOiAkaGFuZGxlLXdpZHRoO1xuICAgICAgICAgICAgaGVpZ2h0OiAkaGFuZGxlLWhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5saWdodC1zd2l0Y2gtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGxlZnQ6IC0kaGFuZGxlLXdpZHRoIC8gMjtcbiAgICAgICAgICAgIHdpZHRoOiAkbGFiZWwtd2lkdGggKiAyO1xuICAgICAgICAgICAgaGVpZ2h0OiAkbGFiZWwtaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5pcy1hY3RpdmUge1xuICAgICAgICAgICAgLmxpZ2h0LXN3aXRjaC1oYW5kbGUge1xuICAgICAgICAgICAgICAgIGxlZnQ6ICRoYW5kbGUtd2lkdGggLyAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmxpZ2h0LXN3aXRjaC1sYWJlbCB7XG4gICAgICAgICAgICB3aWR0aDogJGxhYmVsLXdpZHRoO1xuICAgICAgICAgICAgaGVpZ2h0OiAkbGFiZWwtaGVpZ2h0O1xuXG4gICAgICAgICAgICAmLm9uLXZhbHVlIHtcbiAgICAgICAgICAgICAgICAvL2JvcmRlci1yYWRpdXM6ICRoYW5kbGUtd2lkdGggMCAwICRoYW5kbGUtd2lkdGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYub2ZmLXZhbHVlIHtcbiAgICAgICAgICAgICAgICAvL2JvcmRlci1yYWRpdXM6IDAgJGhhbmRsZS13aWR0aCAkaGFuZGxlLXdpZHRoIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5saWdodC1zd2l0Y2gge1xuICAgIHBhZGRpbmc6IDA7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Ym9yZGVyOiBub25lO1xuXHR3aWR0aDogJGxpZ2h0LXN3aXRjaC1zaXplLXdpZHRoO1xuXHRoZWlnaHQ6ICRsaWdodC1zd2l0Y2gtaGFuZGxlLWhlaWdodDtcblx0Ym9yZGVyLXJhZGl1czogJGxpZ2h0LXN3aXRjaC1oYW5kbGUtd2lkdGg7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcblx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgQGluY2x1ZGUgbGlnaHQtc3dpdGNoLXNpemUoJ3hzJywgLjUpO1xuICAgIEBpbmNsdWRlIGxpZ2h0LXN3aXRjaC1zaXplKCdzbScsIC43NSk7XG4gICAgQGluY2x1ZGUgbGlnaHQtc3dpdGNoLXNpemUoJ21kJywgMSk7XG4gICAgQGluY2x1ZGUgbGlnaHQtc3dpdGNoLXNpemUoJ2xnJywgMS41KTtcbiAgICBAaW5jbHVkZSBsaWdodC1zd2l0Y2gtc2l6ZSgneGwnLCAyKTtcblxuICAgIEBpbmNsdWRlIGZvcm0tdmFsaWRhdGlvbi1zdGF0ZShcInZhbGlkXCIsICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yKTtcbiAgICBAaW5jbHVkZSBmb3JtLXZhbGlkYXRpb24tc3RhdGUoXCJpbnZhbGlkXCIsICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IpO1xuXG4gICAgJi5pcy1pbnZhbGlkIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcjtcblxuICAgICAgICAmIC5saWdodC1zd2l0Y2gtaGFuZGxlIHtcblxuXG4gICAgICAgIH1cblxuICAgICAgICAmOm5vdCguaXMtYWN0aXZlKSAubGlnaHQtc3dpdGNoLWhhbmRsZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxpZ2h0LXN3aXRjaC1sYWJlbCB7XG4gICAgICAgICAgICAmLm9uLXZhbHVlIHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5vZmYtdmFsdWUge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmxpZ2h0LXN3aXRjaC1oYW5kbGUge1xuICAgICAgICB0b3A6IC0xcHg7XG4gICAgICAgIGxlZnQ6IC0xcHg7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogbGVmdCAkbGlnaHQtc3dpdGNoLWFuaW1hdGlvbi1sZW5ndGggJGxpZ2h0LXN3aXRjaC1hbmltYXRpb24tZWFzaW5nO1xuICAgICAgICB3aWR0aDogJGxpZ2h0LXN3aXRjaC1oYW5kbGUtd2lkdGg7XG4gICAgICAgIGhlaWdodDogJGxpZ2h0LXN3aXRjaC1oYW5kbGUtaGVpZ2h0O1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KHdoaXRlLCByZ2IoMjUwLCAyNTAsIDI1MCkgNTAlLCB3aGl0ZSA3NSUpO1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIH1cblxuICAgIC5saWdodC1zd2l0Y2gtY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiAtJGxpZ2h0LXN3aXRjaC1oYW5kbGUtd2lkdGggLyAyO1xuICAgICAgICB0b3A6ICgkbGlnaHQtc3dpdGNoLWhhbmRsZS1oZWlnaHQgLSAgJGxpZ2h0LXN3aXRjaC1sYWJlbC1oZWlnaHQpIC8gMjtcbiAgICAgICAgd2lkdGg6ICRsaWdodC1zd2l0Y2gtbGFiZWwtd2lkdGggKiAyO1xuICAgICAgICBoZWlnaHQ6ICRsaWdodC1zd2l0Y2gtbGFiZWwtaGVpZ2h0O1xuICAgICAgICB0cmFuc2l0aW9uOiBsZWZ0ICRsaWdodC1zd2l0Y2gtYW5pbWF0aW9uLWxlbmd0aCAkbGlnaHQtc3dpdGNoLWFuaW1hdGlvbi1lYXNpbmc7XG4gICAgfVxuXG4gICAgJjpub3QoLmlzLWFjdGl2ZSkge1xuICAgICAgICAmOm5vdCguaXMtZHJhZ2dpbmcpIC5vbi12YWx1ZSB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmlzLWFjdGl2ZSB7XG4gICAgICAgICY6bm90KC5pcy1kcmFnZ2luZykgLm9mZi12YWx1ZSB7XG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAubGlnaHQtc3dpdGNoLWhhbmRsZSB7XG4gICAgICAgICAgICBsZWZ0OiAkbGlnaHQtc3dpdGNoLWhhbmRsZS13aWR0aCAvIDI7XG4gICAgICAgIH1cblxuICAgICAgICAubGlnaHQtc3dpdGNoLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmxpZ2h0LXN3aXRjaC1sYWJlbCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6ICRsaWdodC1zd2l0Y2gtbGFiZWwtd2lkdGg7XG4gICAgICAgIGhlaWdodDogJGxpZ2h0LXN3aXRjaC1sYWJlbC1oZWlnaHQ7XG4gICAgICAgIC8vYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuICAgICAgICAmLm9uLXZhbHVlIHtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBiMDA3O1xuICAgICAgICAgICAgLy9ib3JkZXItcmFkaXVzOiAkbGlnaHQtc3dpdGNoLWhhbmRsZS13aWR0aCAwIDAgJGxpZ2h0LXN3aXRjaC1oYW5kbGUtd2lkdGg7XG4gICAgICAgIH1cblxuICAgICAgICAmLm9mZi12YWx1ZSB7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlYmVkZWY7XG4gICAgICAgICAgICAvL2JvcmRlci1yYWRpdXM6IDAgJGxpZ2h0LXN3aXRjaC1oYW5kbGUtd2lkdGggJGxpZ2h0LXN3aXRjaC1oYW5kbGUtd2lkdGggMDtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5cbjwvc3R5bGU+XG4iLCJpbXBvcnQgTGlnaHRTd2l0Y2hGaWVsZCBmcm9tICcuL0xpZ2h0U3dpdGNoRmllbGQnO1xuaW1wb3J0IFZ1ZUluc3RhbGxlciBmcm9tICdAL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgTGlnaHRTd2l0Y2hGaWVsZFxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBMaWdodFN3aXRjaEZpZWxkO1xuIiwiPHRlbXBsYXRlPlxuICAgIDxhIHYtaWY9XCJocmVmXCIgOmhyZWY9XCJocmVmXCIgY2xhc3M9XCJsaXN0LWdyb3VwLWl0ZW1cIiA6Y2xhc3M9XCJjbGFzc2VzXCIgQGNsaWNrPVwib25DbGlja1wiPlxuICAgICAgICA8c2xvdD57e2xhYmVsfX08L3Nsb3Q+IDxiYWRnZSB2LWlmPVwiYmFkZ2VcIiB2LWJpbmQ9XCJiYWRnZU9wdGlvbnNcIj48L2JhZGdlPlxuICAgIDwvYT5cbiAgICA8YSB2LWVsc2UtaWY9XCJhY3Rpb25cIiBocmVmPVwiI1wiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCIgOmNsYXNzPVwiY2xhc3Nlc1wiIEBjbGljay5wcmV2ZW50PVwib25DbGlja1wiPlxuICAgICAgICA8c2xvdD57e2xhYmVsfX08L3Nsb3Q+IDxiYWRnZSB2LWlmPVwiYmFkZ2VcIiB2LWJpbmQ9XCJiYWRnZU9wdGlvbnNcIj48L2JhZGdlPlxuICAgIDwvYT5cbiAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiIDpjbGFzcz1cImNsYXNzZXNcIiBAY2xpY2s9XCJvbkNsaWNrXCI+XG4gICAgICAgIDxzbG90Pnt7bGFiZWx9fTwvc2xvdD4gPGJhZGdlIHYtaWY9XCJiYWRnZVwiIHYtYmluZD1cImJhZGdlT3B0aW9uc1wiPjwvYmFkZ2U+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgQmFkZ2UgZnJvbSAnLi4vQmFkZ2UnO1xuaW1wb3J0IHByZWZpeCBmcm9tICdAL0hlbHBlcnMvUHJlZml4L1ByZWZpeCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgQmFkZ2VcbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGxpc3QgaXRlbSBsYWJlbC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IE9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbGlzdCBncm91cCBpdGVtIGFuIGFjdGlvbiwgb3IgY2xpY2thYmxlIGl0ZW0uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBhY3Rpb246IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbGlzdCBncm91cCBpdGVtIGFjdGl2ZS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IEJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBsaXN0IGdyb3VwIGl0ZW0gZGlzYWJsZWQuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBsaXN0IGdyb3VwIGl0ZW0gdmFyaWFudC5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgdmFyaWFudDogU3RyaW5nLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbGlzdCBncm91cCBpdGVtIGhyZWYgYXR0cmlidXRlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBocmVmOiBTdHJpbmcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBiYWRnZSBsYWJlbCAoaWYgbnVtYmVyIG9yIHN0cmluZykgb3Igb2JqZWN0IG9mIG9wdGlvbnMgdG8gcGFzcyB0b1xuICAgICAgICAgKiB0aGUgY29tcG9uZW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nfE9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgYmFkZ2U6IFtOdW1iZXIsIFN0cmluZywgT2JqZWN0XVxuXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG5cbiAgICAgICAgY2xhc3NlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSBwcmVmaXgoe1xuICAgICAgICAgICAgICAgICdhY3Rpb24nOiB0aGlzLmFjdGlvbixcbiAgICAgICAgICAgIH0sICdsaXN0LWdyb3VwLWl0ZW0nKTtcblxuICAgICAgICAgICAgY2xhc3Nlc1snYWN0aXZlJ10gPSB0aGlzLmlzQWN0aXZlO1xuICAgICAgICAgICAgY2xhc3Nlc1snZGlzYWJsZWQnXSA9IHRoaXMuaXNEaXNhYmxlZDtcblxuICAgICAgICAgICAgaWYodGhpcy52YXJpYW50KSB7XG4gICAgICAgICAgICAgICAgY2xhc3Nlc1twcmVmaXgodGhpcy52YXJpYW50LCAnbGlzdC1ncm91cC1pdGVtJyldID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNsYXNzZXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmFkZ2VPcHRpb25zKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzT2JqZWN0KHRoaXMuYmFkZ2UpID8gdGhpcy5iYWRnZSA6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogdGhpcy5iYWRnZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVG9nZ2xlIHRoZSBsaXN0IGl0ZW0ncyBhY3RpdmUgY2xhc3MuXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgdG9nZ2xlKCkge1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9ICF0aGlzLmlzQWN0aXZlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBY3RpdmF0ZSB0aGUgbGlzdCBpdGVtLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2YXRlKCkge1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlYWN0aXZhdGUgdGhlIGxpc3QgaXRlbS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBkZWFjdGl2YXRlKCkge1xuICAgICAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBY3RpdmF0ZSB0aGUgbGlzdCBpdGVtLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGRpc2FibGUoKSB7XG4gICAgICAgICAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVhY3RpdmF0ZSB0aGUgbGlzdCBpdGVtLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGVuYWJsZSgpIHtcbiAgICAgICAgICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIHRoZSBgY2xpY2tgIGV2ZW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZXZlbnQsIHRoaXMpO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcblxuICAgICAgICBpc0FjdGl2ZSh2YWx1ZSwgcHJldlZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6YWN0aXZlJywgdGhpcy5pc0FjdGl2ZSk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd0b2dnbGUnLCB0aGlzLmlzQWN0aXZlLCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQodmFsdWUgPyAnYWN0aXZhdGUnIDogJ2RlYWN0aXZhdGUnLCB0aGlzKTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0FjdGl2ZTogdGhpcy5hY3RpdmUsXG4gICAgICAgICAgICBpc0Rpc2FibGVkOiB0aGlzLmRpc2FibGVkXG4gICAgICAgIH07XG4gICAgfVxuXG59XG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJsaXN0LWdyb3VwXCIgOmNsYXNzPVwiY2xhc3Nlc1wiPlxuICAgICAgICA8c2xvdD5cbiAgICAgICAgICAgIDxsaXN0LWdyb3VwLWl0ZW0gdi1mb3I9XCIoaXRlbSwga2V5KSBpbiBpdGVtc1wiIDprZXk9XCJrZXlcIiB2LWJpbmQ9XCJpdGVtXCIvPlxuICAgICAgICA8L3Nsb3Q+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBlYWNoIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBMaXN0R3JvdXBJdGVtIGZyb20gJy4vTGlzdEdyb3VwSXRlbSc7XG5pbXBvcnQgcHJlZml4IGZyb20gJ0AvSGVscGVycy9QcmVmaXgvUHJlZml4JztcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBMaXN0R3JvdXBJdGVtXG4gICAgfSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IG9mIGxpc3QgaXRlbSBvYmplY3RzLlxuICAgICAgICAgKlxuICAgICAgICAgKiBbe2xhYmVsOiAnU29tZSBMYWJlbCcsIGJhZGdlOiAxfV1cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IE9iamVjdFxuICAgICAgICAgKi9cbiAgICAgICAgaXRlbXM6IEFycmF5LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYW4gdGhlIGxpc3QgaXRlbXMgYmUgYWN0aXZhdGVkLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgQm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZhdGVhYmxlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGxpc3QgZ3JvdXAgYXBwZWFyIGZsdXNoICh3aXRob3V0IHNvbWUgYm9yZGVycykuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBmbHVzaDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbiBhY3RpdmF0ZSBtdWx0aXBsZSBsaXN0IGl0ZW1zXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBtdWx0aXBsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBjbGFzc2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHByZWZpeCh7XG4gICAgICAgICAgICAgICAgJ2ZsdXNoJzogdGhpcy5mbHVzaFxuICAgICAgICAgICAgfSwgJ2xpc3QtZ3JvdXAnKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgYmluZEV2ZW50c1RvQ2hpbGRyZW4oKSB7XG4gICAgICAgICAgICBlYWNoKHRoaXMuJGNoaWxkcmVuLCBjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgY2hpbGQuJG9mZignY2xpY2snLCB0aGlzLm9uQ2xpY2tDaGlsZCk7XG4gICAgICAgICAgICAgICAgY2hpbGQuJG9uKCdjbGljaycsIHRoaXMub25DbGlja0NoaWxkKTtcbiAgICAgICAgICAgICAgICBjaGlsZC4kb2ZmKCdhY3RpdmF0ZScsIHRoaXMub25BY3RpdmF0ZSk7XG4gICAgICAgICAgICAgICAgY2hpbGQuJG9uKCdhY3RpdmF0ZScsIHRoaXMub25BY3RpdmF0ZSk7XG4gICAgICAgICAgICAgICAgY2hpbGQuJG9mZignZGVhY3RpdmF0ZScsIHRoaXMub25EZWFjdGl2YXRlKTtcbiAgICAgICAgICAgICAgICBjaGlsZC4kb24oJ2RlYWN0aXZhdGUnLCB0aGlzLm9uRGVhY3RpdmF0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBvbkNsaWNrQ2hpbGQoZXZlbnQsIGNoaWxkKSB7XG4gICAgICAgICAgICBpZih0aGlzLmFjdGl2YXRlYWJsZSkge1xuICAgICAgICAgICAgICAgIGNoaWxkLnRvZ2dsZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljazpjaGlsZCcsIGV2ZW50LCBjaGlsZCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb25BY3RpdmF0ZShpdGVtKSB7XG4gICAgICAgICAgICBpZighdGhpcy5tdWx0aXBsZSAmJiB0aGlzLmFjdGl2ZUl0ZW0gIT09IGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFjdGl2ZUl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJdGVtLmRlYWN0aXZhdGUoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBpdGVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG9uRGVhY3RpdmF0ZShpdGVtKSB7XG4gICAgICAgICAgICBpZighdGhpcy5tdWx0aXBsZSAmJiB0aGlzLmFjdGl2ZUl0ZW0gPT09IGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhY3RpdmVJdGVtOiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzVG9DaGlsZHJlbigpO1xuICAgIH0sXG5cbiAgICB1cGRhdGVkKCkge1xuICAgICAgICB0aGlzLmJpbmRFdmVudHNUb0NoaWxkcmVuKCk7XG4gICAgfVxuXG59XG5cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IExpc3RHcm91cCBmcm9tICcuL0xpc3RHcm91cCc7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJ0AvSGVscGVycy9WdWVJbnN0YWxsZXIvVnVlSW5zdGFsbGVyJztcblxuY29uc3QgcGx1Z2luID0gVnVlSW5zdGFsbGVyLnVzZSh7XG5cbiAgICBpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWVJbnN0YWxsZXIuY29tcG9uZW50cyh7XG4gICAgICAgICAgICBMaXN0R3JvdXBcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTGlzdEdyb3VwO1xuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJvdmVybGF5XCIgOmNsYXNzPVwieydzaG93JzogdmlzaWJsZX1cIiA6c3R5bGU9XCJ7YmFja2dyb3VuZDogYmFja2dyb3VuZH1cIiBAa2V5dXAuZXNjPVwiaGlkZVwiPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tbGluayBvdmVybGF5LWNsb3NlXCIgQGNsaWNrPVwib25DbGlja0Nsb3NlXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRpbWVzLWNpcmNsZVwiPjwvaT5cbiAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsYXktY29udGVudCBjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxzbG90IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ292ZXJsYXknLFxuXG4gICAgcHJvcHM6IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG92ZXJsYXkgYmFja2dyb3VuZCBjb2xvci5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgLjkyNSknXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIHRoZSBvdmVybGF5IHNob3dpbmcuXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBCb29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICB2aXNpYmxlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgdmlzaWJsZSh2YWx1ZSkge1xuICAgICAgICAgICAgaWYodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAgIGZvY3VzKCkge1xuICAgICAgICAgICAgY29uc3QgZWwgPSB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1jb250cm9sLCBpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpO1xuXG4gICAgICAgICAgICBpZihlbCkge1xuICAgICAgICAgICAgICAgIGVsLmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNob3cgdGhlIG92ZXJsYXlcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBzaG93KCkge1xuICAgICAgICAgICAgdGhpcy4kbW91bnQoZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkpO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2hvdycpO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOnZpc2libGUnLCB0cnVlKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSGlkZSB0aGUgb3ZlcmxheVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGhpZGUoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdoaWRlJyk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6dmlzaWJsZScsIGZhbHNlKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGNhbGxiYWNrIGZvciB0aGUgYGNsaWNrYCBldmVudCBvbiB0aGUgY2xvc2UgYnV0dG9uLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIG9uQ2xpY2tDbG9zZSgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrOmNsb3NlJyk7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIGlmKHRoaXMudmlzaWJsZSkge1xuICAgICAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cbkBpbXBvcnQgJy4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Jvb3RzdHJhcC5zY3NzJztcblxuLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogLTE7XG4gICAgb3BhY2l0eTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzMzbXMgZWFzZS1vdXQ7XG5cbiAgICAmLnNob3cge1xuICAgICAgICB6LWluZGV4OiAxMDAwMDtcbiAgICAgICAgb3BhY2l0eTogMTAwO1xuICAgIH1cblxuICAgIC5vdmVybGF5LWhlYWRlciB7XG4gICAgICAgIG1hcmdpbi10b3A6ICRmb250LXNpemUtYmFzZSAqIDEuNTtcbiAgICB9XG5cbiAgICAub3ZlcmxheS1jbG9zZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS4yNTtcbiAgICAgICAgY29sb3I6ICRncmF5LTcwMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6ICRmb250LXNpemUtYmFzZTtcbiAgICAgICAgcmlnaHQ6ICRmb250LXNpemUtYmFzZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAub3ZlcmxheS1jb250ZW50IHtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAkZm9udC1zaXplLWJhc2UgKiA2O1xuXG4gICAgICAgIC5vdmVybGF5LWNvbnRyb2xzIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogNHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAkZm9udC1zaXplLWJhc2U7XG5cbiAgICAgICAgICAgICYubGVmdCB7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYucmlnaHQge1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmICsgKiB7XG4gICAgICAgICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG48L3N0eWxlPlxuIiwiaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi9PdmVybGF5JztcbmltcG9ydCBWdWVJbnN0YWxsZXIgZnJvbSAnQC9IZWxwZXJzL1Z1ZUluc3RhbGxlci9WdWVJbnN0YWxsZXInO1xuXG5jb25zdCBwbHVnaW4gPSBWdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIE92ZXJsYXlcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgT3ZlcmxheTtcbiIsIjx0ZW1wbGF0ZT5cbiAgICA8bmF2IGFyaWEtbGFiZWw9XCJQYWdlIG5hdmlnYXRpb24gZXhhbXBsZVwiPlxuICAgICAgICA8dWwgY2xhc3M9XCJwYWdpbmF0aW9uXCIgOmNsYXNzPVwiY2xhc3Nlc1wiPlxuICAgICAgICBcdDxsaSBjbGFzcz1cInBhZ2UtaXRlbVwiIDpjbGFzcz1cInsnZGlzYWJsZWQnOiBjdXJyZW50UGFnZSA9PT0gMX1cIj5cbiAgICAgICAgXHRcdDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJwYWdlLWxpbmtcIiBhcmlhLWxhYmVsPVwiUHJldmlvdXNcIiBAY2xpY2sucHJldmVudD1cInByZXYoJGV2ZW50KVwiPlxuICAgICAgICBcdFx0XHQ8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mbGFxdW87PC9zcGFuPlxuICAgICAgICBcdFx0PC9hPlxuICAgICAgICBcdDwvbGk+XG4gICAgICAgICAgICA8bGkgdi1mb3I9XCJpdGVtIGluIHBhZ2VzXCIgOmRhdGEtcGFnZT1cIml0ZW0ucGFnZVwiIGNsYXNzPVwicGFnZS1pdGVtXCIgOmNsYXNzPVwieydhY3RpdmUnOiBpdGVtLnBhZ2UgPT09IGN1cnJlbnRQYWdlLCAnZGlzYWJsZWQnOiAhIWl0ZW0uZGl2aWRlcn1cIj5cbiAgICAgICAgICAgICAgICA8c2xvdCA6aXRlbT1cIml0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgdi1pZj1cIml0ZW0uZGl2aWRlclwiIGNsYXNzPVwicGFnZS1saW5rXCI+JmhlbGxpcDs8L2E+XG4gICAgICAgICAgICAgICAgXHQ8YSB2LWVsc2UgaHJlZj1cIiNcIiBjbGFzcz1cInBhZ2UtbGlua1wiIDpjbGFzcz1cIml0ZW0uY2xhc3NcIiA6ZGF0YS1sYWJlbD1cIml0ZW0ubGFiZWxcIiBAY2xpY2sucHJldmVudD1cInBhZ2luYXRlKGl0ZW0ucGFnZSwgJGV2ZW50KVwiPlxuICAgICAgICAgICAgICAgIFx0XHQ8c3BhbiB2LWlmPVwiaXRlbS5sYWJlbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHYtaHRtbD1cIml0ZW0ubGFiZWxcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgXHRcdDxzcGFuIHYtaWY9XCJpdGVtLnBhZ2VcIiBhcmlhLWhpZGRlbj1cInRydWVcIiB2LWh0bWw9XCJpdGVtLnBhZ2VcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgXHQ8L2E+XG4gICAgICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgXHQ8bGkgY2xhc3M9XCJwYWdlLWl0ZW1cIiA6Y2xhc3M9XCJ7J2Rpc2FibGVkJzogY3VycmVudFBhZ2UgPj0gdG90YWxQYWdlc31cIj5cbiAgICAgICAgXHRcdDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJwYWdlLWxpbmtcIiBhcmlhLWxhYmVsPVwiTmV4dFwiIEBjbGljay5wcmV2ZW50PVwibmV4dCgkZXZlbnQpXCI+XG4gICAgICAgIFx0XHRcdDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZyYXF1bzs8L3NwYW4+XG4gICAgICAgIFx0XHQ8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgIDwvbmF2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ3BhZ2luYXRpb24nLFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBhbGlnbm1lbnQgb2YgdGhlIHBhZ2luYXRpb24gY29tcG9uZW50LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcCBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIGFsaWduOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWxpZGF0ZTogdmFsdWUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBbJ3N0YXJ0JywgJ2VuZCcsICdjZW50ZXInXS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBwYWdlIG9uIHdoaWNoIHRoZSBwYWdpbmF0b3Igc2hvdWxkIHN0YXJ0LlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcCBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHBhZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDFcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRvdGFsIG51bWJlciBvZiBwYWdlcyBpbiB0aGUgcGFnaW5hdG9yLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcCBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHRvdGFsUGFnZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDFcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIG51bWJlciBvZiBwYWdlcyB0byBzaG93IHdoZW4gdGhlIHRvdGFsIG51bWJlciBvZiBwYWdlcyBpc1xuICAgICAgICAgKiBncmVhdGVyIHRoYW4gdGhlIG51bWJlciBvZiBwYWdlcyB0aGF0IHNob3VsZCBiZSBzaG93bi5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3AgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBzaG93UGFnZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDZcbiAgICAgICAgfSxcblxuICAgICAgICBvblBhZ2luYXRlOiBGdW5jdGlvblxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgbmV4dChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5wYWdpbmF0ZSh0aGlzLmN1cnJlbnRQYWdlID49IHRoaXMudG90YWxQYWdlcyA/IHRoaXMuY3VycmVudFBhZ2UgOiB0aGlzLmN1cnJlbnRQYWdlICsgMSwgZXZlbnQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHByZXYoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGUodGhpcy5jdXJyZW50UGFnZSA8PSAxID8gdGhpcy5jdXJyZW50UGFnZSA6IHRoaXMuY3VycmVudFBhZ2UgLSAxLCBldmVudCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGFnaW5hdGUocGFnZSwgZXZlbnQpIHtcbiAgICAgICAgICAgIGlmKGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cblx0XHRcdHRoaXMuc2V0QWN0aXZlUGFnZShwYWdlKTtcblxuICAgICAgICAgICAgaWYodGhpcy5vblBhZ2luYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vblBhZ2luYXRlKHBhZ2UsIGV2ZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4kZW1pdCgncGFnaW5hdGUnLCBwYWdlLCBldmVudCk7XG4gICAgICAgIH0sXG5cblx0XHRzZXRBY3RpdmVQYWdlKHBhZ2UpIHtcblx0XHRcdGlmKHRoaXMuY3VycmVudFBhZ2UgIT09IHBhZ2UpIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50UGFnZSA9IHBhZ2U7XG5cdFx0XHR9XG5cdFx0fSxcblxuICAgICAgICBnZW5lcmF0ZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VzID0gW107XG4gICAgICAgICAgICBjb25zdCBzaG93UGFnZXMgPSB0aGlzLnNob3dQYWdlcyAlIDIgPyB0aGlzLnNob3dQYWdlcyArIDE6IHRoaXMuc2hvd1BhZ2VzO1xuXG4gICAgICAgICAgICBsZXQgc3RhcnRQYWdlID0gKHRoaXMuY3VycmVudFBhZ2UgPj0gc2hvd1BhZ2VzKSA/IHRoaXMuY3VycmVudFBhZ2UgLSAoc2hvd1BhZ2VzIC8gMikgOiAxO1xuICAgICAgICAgICAgY29uc3Qgc3RhcnRPZmZzZXQgPSBzaG93UGFnZXMgKyBzdGFydFBhZ2U7XG4gICAgICAgICAgICBjb25zdCBlbmRQYWdlID0gKHRoaXMudG90YWxQYWdlcyA8IHN0YXJ0T2Zmc2V0KSA/IHRoaXMudG90YWxQYWdlcyA6IHN0YXJ0T2Zmc2V0O1xuICAgICAgICAgICAgY29uc3QgZGlmZiA9IHN0YXJ0UGFnZSAtIGVuZFBhZ2UgKyBzaG93UGFnZXM7XG5cbiAgICAgICAgICAgIHN0YXJ0UGFnZSAtPSAoc3RhcnRQYWdlIC0gZGlmZiA+IDApID8gZGlmZiA6IDA7XG5cbiAgICAgICAgICAgIGlmIChzdGFydFBhZ2UgPiAxKSB7XG4gICAgICAgICAgICAgICAgcGFnZXMucHVzaCh7cGFnZTogMX0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihzdGFydFBhZ2UgPiAyKSB7XG4gICAgICAgICAgICAgICAgcGFnZXMucHVzaCh7ZGl2aWRlcjogdHJ1ZX0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IobGV0IGkgPSBzdGFydFBhZ2U7IGkgPCBlbmRQYWdlOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwYWdlcy5wdXNoKHtwYWdlOiBpfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbmRQYWdlIDw9IHRoaXMudG90YWxQYWdlcykge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMudG90YWxQYWdlcyAtIDEgPiBlbmRQYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VzLnB1c2goe2RpdmlkZXI6IHRydWV9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwYWdlcy5wdXNoKHtwYWdlOiB0aGlzLnRvdGFsUGFnZXN9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhZ2VzO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICBwYWdlcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2xhc3NlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSB7fTtcblxuICAgICAgICAgICAgY2xhc3Nlc1snanVzdGlmeS1jb250ZW50LScgKyB0aGlzLmFsaWduXSA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiBjbGFzc2VzO1xuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuICB7XG4gICAgICAgICAgICBjdXJyZW50UGFnZTogdGhpcy5wYWdlXG4gICAgICAgIH07XG4gICAgfVxuXG59O1xuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL1BhZ2luYXRpb24nO1xuaW1wb3J0IFZ1ZUluc3RhbGxlciBmcm9tICdAL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgUGFnaW5hdGlvblxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uO1xuIiwiaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IFZ1ZUluc3RhbGxlciBmcm9tICdAL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgUHJvZ3Jlc3NCYXJcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG4iLCJpbXBvcnQgUmFkaW9GaWVsZCBmcm9tICcuL1JhZGlvRmllbGQnO1xuaW1wb3J0IFZ1ZUluc3RhbGxlciBmcm9tICdAL0hlbHBlcnMvVnVlSW5zdGFsbGVyL1Z1ZUluc3RhbGxlcic7XG5cbmNvbnN0IHBsdWdpbiA9IFZ1ZUluc3RhbGxlci51c2Uoe1xuXG4gICAgaW5zdGFsbChWdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgVnVlSW5zdGFsbGVyLmNvbXBvbmVudHMoe1xuICAgICAgICAgICAgUmFkaW9GaWVsZFxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBSYWRpb0ZpZWxkO1xuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGZvcm0tZ3JvdXA+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImxhYmVsXCI+XG4gICAgICAgICAgICA8Zm9ybS1sYWJlbCB2LWlmPVwibGFiZWxcIiA6Zm9yPVwiaWRcIiB2LWh0bWw9XCJsYWJlbFwiIC8+XG4gICAgICAgIDwvc2xvdD5cblxuICAgICAgICA8c2xvdCBuYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgIDppZD1cImlkXCJcbiAgICAgICAgICAgICAgICA6dmFsdWU9XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgOnJlcXVpcmVkPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkIHx8IHJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJyZWFkb25seVwiXG4gICAgICAgICAgICAgICAgOnBhdHRlcm49XCJwYXR0ZXJuXCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJtZXJnZUNsYXNzZXMoY29udHJvbENsYXNzZXMsIGNvbG9yYWJsZUNsYXNzZXMpXCJcbiAgICAgICAgICAgICAgICB2LW9uOmlucHV0PVwidXBkYXRlZCgkZXZlbnQudGFyZ2V0LnZhbHVlKVwiPlxuICAgICAgICAgICAgICAgIDxzbG90IC8+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJoZWxwXCI+XG4gICAgICAgICAgICA8aGVscC10ZXh0IHYtaWY9XCJoZWxwVGV4dFwiIHYtaHRtbD1cImhlbHBUZXh0XCIgLz5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJmZWVkYmFja1wiPlxuICAgICAgICAgICAgPGZvcm0tZmVlZGJhY2sgdi1pZj1cInZhbGlkRmVlZGJhY2tcIiB2LWh0bWw9XCJ2YWxpZEZlZWRiYWNrXCIgdmFsaWQgLz5cbiAgICAgICAgICAgIDxmb3JtLWZlZWRiYWNrIHYtaWY9XCJpbnZhbGlkRmVlZGJhY2tcIiB2LWh0bWw9XCJpbnZhbGlkRmVlZGJhY2tcIiBpbnZhbGlkIC8+XG4gICAgICAgIDwvc2xvdD5cblxuICAgIDwvZm9ybS1ncm91cD5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuLy9pbXBvcnQgQmFzZUZpZWxkIGZyb20gJy4vQmFzZUZpZWxkJztcbmltcG9ydCBDb2xvcmFibGUgZnJvbSAnQC9NaXhpbnMvQ29sb3JhYmxlL0NvbG9yYWJsZSc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQC9NaXhpbnMvRm9ybUNvbnRyb2wvRm9ybUNvbnRyb2wnO1xuXG5jb25zdCBDVVNUT01fU0VMRUNUX1BSRUZJWCA9ICdjdXN0b20tc2VsZWN0LSdcblxuZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbmFtZTogJ3NlbGVjdC1maWVsZCcsXG5cbiAgICBleHRlbmRzOiBGb3JtQ29udHJvbCxcblxuICAgIG1peGluczogW1xuICAgICAgICBGb3JtQ29udHJvbCxcbiAgICAgICAgQ29sb3JhYmxlXG4gICAgXSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBgY3VzdG9tLXNlbGVjdGAgdG8gdGhlIGZvcm0gY29udHJvbCBpZiB0cnVlLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBjdXN0b206IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcblxuICAgICAgICBjb250cm9sQ2xhc3MoKSB7XG4gICAgICAgICAgICBjb25zdCBjb250cm9sQ2xhc3MgPSB0aGlzLmN1c3RvbSA/ICdjdXN0b20tc2VsZWN0JyA6IHRoaXMuZGVmYXVsdENvbnRyb2xDbGFzcztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYWludGV4dCA/IGAke2NvbnRyb2xDbGFzc30tcGxhaW50ZXh0YCA6IGNvbnRyb2xDbGFzcztcbiAgICAgICAgfSxcblxuICAgICAgICBjdXN0b21TZWxlY3RDbGFzc2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBDVVNUT01fU0VMRUNUX1BSRUZJWC5yZXBsYWNlKC9cXC0kLywgJycpICsgKHRoaXMucGxhaW50ZXh0ID8gJy1wbGFpbnRleHQnIDogJycpLFxuICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tU2VsZWN0U2l6ZUNsYXNzLFxuICAgICAgICAgICAgICAgICh0aGlzLnNwYWNpbmcgfHwgJycpXG4gICAgICAgICAgICBdLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuPC9zY3JpcHQ+XG4iLCJpbXBvcnQgU2VsZWN0RmllbGQgZnJvbSAnLi9TZWxlY3RGaWVsZCc7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJ0AvSGVscGVycy9WdWVJbnN0YWxsZXIvVnVlSW5zdGFsbGVyJztcblxuY29uc3QgcGx1Z2luID0gVnVlSW5zdGFsbGVyLnVzZSh7XG5cbiAgICBpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWVJbnN0YWxsZXIuY29tcG9uZW50cyh7XG4gICAgICAgICAgICBTZWxlY3RGaWVsZFxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RGaWVsZDtcbiIsImltcG9ydCB7IGVhY2ggfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zZm9ybWVyIHtcblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgdGhlIHRyYW5zZm9ybWVyIGluc3RhbmNlIHVzaW5nIGFuIEhUVFAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGEgb2JqZWN0XG4gICAgICogQHJldHVybiB2b2lkXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVzcG9uc2UpIHtcbiAgICAgICAgaWYoIWlzT2JqZWN0KHRoaXMuJG9yaWdpbmFsUmVzcG9uc2UgPSByZXNwb25zZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHRyYW5zZm9ybWVyIG11c3QgYmUgaW5zdGFudGlhdGVkIHdpdGggYSByZXNwb25zZSBvYmplY3QuJyk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmKCFpc0FycmF5KHRoaXMuJHJlcXVpcmVkID0gdGhpcy5yZXF1aXJlZCgpKSB8fCAhdGhpcy4kcmVxdWlyZWQubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgdHJhbnNmb3JtZXIgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSByZXF1aXJlZCBwcm9wZXJ0eS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHRyYW5zZm9ybWVkUmVzcG9uc2UgPSB0aGlzLnRyYW5zZm9ybShyZXNwb25zZSk7XG4gICAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQSBtZXRob2QgdG8gb3ZlcnJpZGUgdG8gcGVyZm9ybSBsb2dpYyB0byBmaW5pc2hlZCBpbml0aWFsaXppbmcuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgKi9cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICAvL1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZSBhbiBhcnJheSBvZiByZXF1aXJlZCBwcm9wZXJ0aWUgd2l0aCBhdCBsZWFzdCBvbmUgdmFsdWUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgKi9cbiAgICByZXF1aXJlZCgpIHtcbiAgICAgICAgLy9cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmFuZm9ybSB0aGUgcmVzcG9uc2Ugb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICovXG4gICAgdHJhbnNmb3JtKHJlc3BvbnNlKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIHRyYW5mb3JtZWQgcmVzcG9uc2VcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgKi9cbiAgICByZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHRyYW5zZm9ybWVkUmVzcG9uc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgdGhlIHRyYW5mb3JtZWQgcmVzcG9uc2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHZvaWRcbiAgICAgKi9cbiAgICB2YWxpZGF0ZSgpIHtcbiAgICAgICAgaWYoIWlzT2JqZWN0KHRoaXMuJHRyYW5zZm9ybWVkUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSB0cmFuc2Zvcm1lZCByZXNwb25zZSBtdXN0IGJlIGFuIG9iamVjdC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVhY2godGhpcy4kcmVxdWlyZWQsIGtleSA9PiB7XG4gICAgICAgICAgICBpZighKGtleSBpbiB0aGlzLiR0cmFuc2Zvcm1lZFJlc3BvbnNlKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgXCIke2tleX1cIiBpcyBhIHJlcXVpcmVkIHByb3BlcnR5IGFuZCBkb2VzIG5vdCBleGlzdCBpbiB0aGUgdHJhbmZvcm1lZCByZXNwb25zZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBlYWNoIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGlzQXJyYXkgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFRyYW5zZm9ybWVyIGZyb20gJy4uL1RyYW5zZm9ybWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGVWaWV3VHJhbnNmb3JtZXIgZXh0ZW5kcyBUcmFuc2Zvcm1lciB7XG5cbiAgICByZXF1aXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC8vIFRoZSBlbmQgb2YgdGhlIGNvdW50IG9mIHRoZSBwYWdpbmF0ZWQgbGlzdC5cbiAgICAgICAgICAgICd0bycsXG5cbiAgICAgICAgICAgIC8vIFRoZSBzdGFydCBvZiB0aGUgY291bnQgb2YgdGhlIHBhZ2luYXRlZCBsaXN0LlxuICAgICAgICAgICAgJ2Zyb20nLFxuXG4gICAgICAgICAgICAvLyBUaGUgdG90YWwgbnVtYmVyIG9mIGl0ZW1zIChub3QganVzdCBpbmNsdWRlZCBpbiB0aGUgcGFnaW5hdGlvbilcbiAgICAgICAgICAgICd0b3RhbCcsXG5cbiAgICAgICAgICAgIC8vIFRoZSBudW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2VcbiAgICAgICAgICAgICdwZXJfcGFnZScsXG5cbiAgICAgICAgICAgIC8vIFRoZSBsYXN0IHBhZ2UgbnVtYmVyIChvciB0b3RhbCBwYWdlcylcbiAgICAgICAgICAgICdsYXN0X3BhZ2UnLFxuXG4gICAgICAgICAgICAvLyBUaGUgY3VycmVudCBwYWdlIG51bWJlclxuICAgICAgICAgICAgJ2N1cnJlbnRfcGFnZScsXG5cbiAgICAgICAgICAgIC8vIFRoZSBhY3R1YWwgcmVzcG9uc2UgZGF0YSB0byBhcHBlYXIgaW4gdGhlIHRhYmxlXG4gICAgICAgICAgICAnZGF0YSdcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kdHJhbnNmb3JtZWRSZXNwb25zZS5kYXRhO1xuICAgIH1cblxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmKCFpc0FycmF5KHRoaXMuZGF0YSgpKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZGF0YSBwcm9wZXJ0eSBtdXN0IGJlIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwidGFibGUtdmlld1wiPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXZpZXctaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJoZWFkaW5nXCI+PGgzIHYtaWY9XCJoZWFkaW5nXCIgdi1odG1sPVwiaGVhZGluZ1wiPjwvaDM+PC9zbG90PlxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiZGVzY3JpcHRpb25cIj48cCB2LWlmPVwiZGVzY3JpcHRpb25cIiB2LWh0bWw9XCJkZXNjcmlwdGlvblwiPjwvcD48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgICAgIDxzbG90IG5hbWU9XCJidXR0b25zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiYnV0dG9ucy5sZW5ndGhcIiBjbGFzcz1cImJ1dHRvbnMtd3JhcHBlciBteS0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgIFx0XHQ8YSB2LWZvcj1cIihidXR0b24sIGtleSkgaW4gYnV0dG9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhyZWY9XCJidXR0b24uaHJlZiB8fCAnIydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cImJ1dHRvbi5jbGFzc05hbWUgfHwgJ2J0biBidG4tcHJpbWFyeSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInByb3h5KGJ1dHRvbi5vbkNsaWNrLCAkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgdi1pZj1cImJ1dHRvbi5pY29uXCIgOmNsYXNzPVwiYnV0dG9uLmljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1odG1sPVwiYnV0dG9uLmxhYmVsXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlXCIgOmNsYXNzPVwieyd0YWJsZS1ob3Zlcic6ICFsb2FkaW5nfVwiPlxuXG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwidGhlYWRcIj5cbiAgICAgICAgICAgIFx0PHRoZWFkPlxuICAgICAgICAgICAgXHRcdDx0cj5cbiAgICAgICAgICAgIFx0XHRcdDx0aCBzY29wZT1cImNvbFwiIDp3aWR0aD1cImNvbHVtbi53aWR0aFwiIHYtZm9yPVwiY29sdW1uIGluIHRhYmxlQ29sdW1uc1wiPlxuICAgICAgICAgICAgXHRcdFx0ICAgIDxkaXYgdi1pZj1cImNvbHVtbi5pZFwiPlxuICAgICAgICAgICAgXHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJzb3J0XCIgOmRhdGEtaWQ9XCJjb2x1bW4uaWRcIiBAY2xpY2sucHJldmVudD1cIm9yZGVyQnkoY29sdW1uLmlkKVwiIHYtaHRtbD1cImNvbHVtbi5uYW1lIHx8IGNvbHVtbi5pZFwiPjwvYT5cbiAgICAgICAgICAgIFx0XHRcdFx0XHQ8aSB2LWlmPVwicmVxdWVzdC5wYXJhbXMub3JkZXIgPT09IGNvbHVtbi5pZCAmJiByZXF1ZXN0LnBhcmFtcy5zb3J0ID09PSAnYXNjJ1wiIGNsYXNzPVwic29ydC1pY29uIGZhIGZhLXNvcnQtYXNjXCI+PC9pPlxuICAgICAgICAgICAgXHRcdFx0XHRcdDxpIHYtaWY9XCJyZXF1ZXN0LnBhcmFtcy5vcmRlciA9PT0gY29sdW1uLmlkICYmIHJlcXVlc3QucGFyYW1zLnNvcnQgPT09ICdkZXNjJ1wiIGNsYXNzPVwic29ydC1pY29uIGZhIGZhLXNvcnQtZGVzY1wiPjwvaT5cbiAgICAgICAgICAgIFx0XHRcdFx0PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2Ugdi1odG1sPVwiY29sdW1uLm5hbWVcIj48L2Rpdj5cbiAgICAgICAgICAgIFx0XHRcdDwvdGg+XG4gICAgICAgICAgICBcdFx0PC90cj5cbiAgICAgICAgICAgIFx0PC90aGVhZD5cbiAgICAgICAgICAgIDwvc2xvdD5cblxuICAgICAgICAgICAgPHNsb3QgbmFtZT1cInRib2R5XCI+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICA8dHIgdi1pZj1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA6Y29sc3Bhbj1cInRhYmxlQ29sdW1ucy5sZW5ndGhcIiBjbGFzcz1cInBvc2l0aW9uLXJlbGF0aXZlXCIgOnN0eWxlPVwieydoZWlnaHQnOiBoZWlnaHQobWluSGVpZ2h0KX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YWN0aXZpdHktaW5kaWNhdG9yIDpjZW50ZXI9XCJ0cnVlXCI+PC9hY3Rpdml0eS1pbmRpY2F0b3I+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuXG4gICAgICAgICAgICAgICAgICAgIDxzbG90IHYtZWxzZSA6ZGF0YT1cImRhdGFcIiA6Y29sdW1ucz1cInRhYmxlQ29sdW1uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwiKHJvdywgaSkgaW4gZGF0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCB2LWZvcj1cImNvbHVtbiBpbiB0YWJsZUNvbHVtbnNcIiB2LWh0bWw9XCJyb3dbY29sdW1uLmlkXSB8fCByb3dbY29sdW1uLm5hbWVdXCI+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC9zbG90PlxuXG4gICAgICAgICAgICA8c2xvdCBuYW1lPVwidGZvb3RcIj5cbiAgICAgICAgICAgIFx0PHRmb290PlxuICAgICAgICAgICAgXHRcdDx0ZCA6Y29sc3Bhbj1cInRhYmxlQ29sdW1ucy5sZW5ndGhcIiBjbGFzcz1cInRhYmxlLXZpZXctZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwicGFnaW5hdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYWdpbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwYWdpbmF0ZSAmJiByZXNwb25zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBhZ2U9XCJyZXNwb25zZS5jdXJyZW50X3BhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dG90YWwtcGFnZXM9XCJyZXNwb25zZS5sYXN0X3BhZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b24tcGFnaW5hdGU9XCJvblBhZ2luYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgXHQ8L3Rmb290PlxuICAgICAgICAgICAgPC9zbG90PlxuXG4gICAgICAgIDwvdGFibGU+XG5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGtleXMgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgZWFjaCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBleHRlbmQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaXNPYmplY3QgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vUGFnaW5hdGlvbic7XG5pbXBvcnQgQWN0aXZpdHlJbmRpY2F0b3IgZnJvbSAnLi4vQWN0aXZpdHlJbmRpY2F0b3InO1xuaW1wb3J0IFByb3h5IGZyb20gJ0AvTWl4aW5zL1Byb3h5L1Byb3h5JztcbmltcG9ydCBSZXF1ZXN0IGZyb20gJ0AvSHR0cC9SZXF1ZXN0L1JlcXVlc3QnO1xuaW1wb3J0IFRhYmxlVmlld1RyYW5zZm9ybWVyIGZyb20gJ0AvSHR0cC9UYWJsZVZpZXdUcmFuc2Zvcm1lci9UYWJsZVZpZXdUcmFuc2Zvcm1lcic7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAndGFibGUtdmlldycsXG5cbiAgICBtaXhpbnM6IFtQcm94eV0sXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIFBhZ2luYXRpb24sXG4gICAgICAgIEFjdGl2aXR5SW5kaWNhdG9yXG4gICAgfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIC8vIChzdHJpbmcpIEEgcmVsYXRpdmUgb3IgYWJzb2x1dGUgZW5kcG9pbnQgVVJMIHVzZWQgdG8gZmV0Y2ggZGF0YVxuICAgICAgICB1cmw6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gKGludGVnZXIpIFRoZSBzdGFydGluZyBwYWdlIG9mIHRoZSB0YWJsZVxuICAgICAgICBwYWdlOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAxXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gKGludGVnZXIpIFRoZSB0b3RhbCBudW1iZXIgb2YgcmVzdWx0cyBwZXIgcGFnZVxuICAgICAgICBsaW1pdDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogMjBcbiAgICAgICAgfSxcblxuICAgICAgICAvLyAoc3RyaW5nKSBUaGUgY29sdW1uIHVzZWQgdG8gb3JkZXIgdGhlIGRhdGFcbiAgICAgICAgb3JkZXI6IFN0cmluZyxcblxuICAgICAgICAvLyAoc3RyaW5nKSBUaGUgc29ydCBkaXJlY3Rpb24gKGFzY3xkZXNjKVxuICAgICAgICBzb3J0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFsnYXNjJywgJ2Rlc2MnXS5pbmRleE9mKHZhbHVlKSAhPT0gLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gKGludGVnZXIpIFRoZSBtaW5pbXVtIGhlaWdodCBvZiB0aGUgcm93IHdoZW4gbG9hZGluZyBkYXRhXG4gICAgICAgIG1pbkhlaWdodDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogNDAwXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gKGFycmF5KSBBbiBhcnJheSBvZiBidXR0b24gb2JqZWN0c1xuICAgICAgICAvLyBbe2hyZWY6ICd0ZXN0LTEyMycsIGxhYmVsOiAnVGVzdCAxMjMnfV1cbiAgICAgICAgYnV0dG9uczoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7IHJldHVybiBbXTsgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIChhcnJheSkgQW4gYXJyYXkgb2YgdGFibGUgY29sdW1uXG4gICAgICAgIC8vIFt7aWQ6ICdkYXRhYmFzZV9pZCcsIG5hbWU6ICdEYXRhYmFzZSBpZCcsIHdpZHRoOiAnMjAlJ31dXG4gICAgICAgIGNvbHVtbnM6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4geyByZXR1cm4gW107IH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyAoc3RyaW5nKSBUaGUgdGFibGUgaGVhZGluZ1xuICAgICAgICBoZWFkaW5nOiBTdHJpbmcsXG5cbiAgICAgICAgLy8gKHN0cmluZykgVGhlIHRhYmxlIGRlc2NyaXB0aW9uXG4gICAgICAgIGRlc2NyaXB0aW9uOiBTdHJpbmcsXG5cbiAgICAgICAgLy8gKGJvb2wpIFNob3VsZCBzaG93IHRoZSBwYWdpbmF0aW9uIGZvciB0aGlzIHRhYmxlXG4gICAgICAgIHBhZ2luYXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIChvYmplY3QpIFRoZSBIVFRQIHJlc3BvbnNlIHRyYW5zZm9ybWVyIGluc3RhbmNlXG4gICAgICAgIHRyYW5zZm9ybWVyOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVGFibGVWaWV3VHJhbnNmb3JtZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgdGFibGVDb2x1bW5zKCkge1xuICAgICAgICAgICAgbGV0IGNvbHVtbnMgPSB0aGlzLmNvbHVtbnM7XG5cbiAgICAgICAgICAgIGlmKCFjb2x1bW5zIHx8ICFjb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGNvbHVtbnMgPSBrZXlzKHRoaXMuZGF0YVswXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zLm1hcChjb2x1bW4gPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBpc09iamVjdChjb2x1bW4pID8gY29sdW1uIDoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBjb2x1bW5cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuXG4gICAgICAgIG9yZGVyQnkob3JkZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRTb3J0ID0gJ2Rlc2MnO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFNvcnQgPSB0aGlzLmdldFJlcXVlc3RQYXJhbSgnc29ydCcpO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE9yZGVyID0gdGhpcy5nZXRSZXF1ZXN0UGFyYW0oJ29yZGVyJyk7XG5cbiAgICAgICAgICAgIHRoaXMuYWRkUmVxdWVzdFBhcmFtKCdvcmRlcicsIG9yZGVyKTtcbiAgICAgICAgICAgIHRoaXMuYWRkUmVxdWVzdFBhcmFtKCdzb3J0JyxcbiAgICAgICAgICAgICAgICBjdXJyZW50T3JkZXIgIT09IG9yZGVyIHx8ICFjdXJyZW50U29ydCA/IGRlZmF1bHRTb3J0IDogKFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50U29ydCA9PT0gZGVmYXVsdFNvcnQgPyAnYXNjJyA6IG51bGxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB0aGlzLmZldGNoKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LmhlYWRlcnNba2V5XSB8fCB2YWx1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIGFkZFJlcXVlc3RIZWFkZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYoIXRoaXMucmVxdWVzdC5oZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0LmhlYWRlcnMgPSB7fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0LmhlYWRlcnNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldFJlcXVlc3RQYXJhbShrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0LnBhcmFtc1trZXldIHx8IHZhbHVlXG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkUmVxdWVzdFBhcmFtKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLnJlcXVlc3QucGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0LnBhcmFtcyA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QucGFyYW1zW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSxcblxuICAgICAgICBmZXRjaCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCh0aGlzLnVybCwgdGhpcy5yZXF1ZXN0KTtcblxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3QuZ2V0KCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNmb3JtZXIgPSB0aGlzLnRyYW5zZm9ybWVyIHx8IG5ldyBUYWJsZVZpZXdUcmFuc2Zvcm1lcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZSA9IHRyYW5zZm9ybWVyLnJlc3BvbnNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gdHJhbnNmb3JtZXIuZGF0YSgpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSwgZXJyb3JzID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhlaWdodChtaW4pIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gW1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ3RoZWFkJyksXG4gICAgICAgICAgICAgICAgdGhpcy4kZWwucXVlcnlTZWxlY3RvcigndGJvZHknKVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgbGV0IGhlaWdodCA9IDA7XG5cbiAgICAgICAgICAgIGVhY2goZWxlbWVudHMsIGVsID0+IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQgKz0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBNYXRoLm1heChtaW4sIGhlaWdodCkgKyAncHgnO1xuICAgICAgICB9LFxuXG4gICAgICAgIG9uUGFnaW5hdGUocGFnZSwgZXZlbnQpIHtcbiAgICAgICAgICAgIGlmKCF0aGlzLnJlcXVlc3QucGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0LnBhcmFtcyA9IHt9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QucGFyYW1zLnBhZ2UgPSBwYWdlO1xuICAgICAgICAgICAgdGhpcy5mZXRjaCgpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAvLyAoYXJyYXkpIFRoZSBkYXRhc2V0IGZvciB0aGUgdGFibGVcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuJGF0dHJzLmRhdGEgfHwgW10sXG5cbiAgICAgICAgICAgIC8vIChib29sKSBJcyB0aGUgdGFibGUgY3VycmVudGx5IGxvYWRpbmcgZGF0YVxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG5cbiAgICAgICAgICAgIC8vIChudWxsfG9iamVjdCkgVGhlIHJlc3BvbnNlIG9iamVjdFxuICAgICAgICAgICAgcmVzcG9uc2U6IG51bGwsXG5cbiAgICAgICAgICAgIC8vIChvYmplY3QpIFRoZSBIVFRQIHJlcXVlc3Qgb2JqZWN0XG4gICAgICAgICAgICByZXF1ZXN0OiBleHRlbmQoe1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBwYWdlOiB0aGlzLnBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmxpbWl0LFxuICAgICAgICAgICAgICAgICAgICBvcmRlcjogdGhpcy5vcmRlcixcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdGhpcy5zb3J0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcy4kYXR0cnMucmVxdWVzdClcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5mZXRjaCgpO1xuICAgIH0sXG5cbiAgICAvKlxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiBleHRlbmQoe1xuICAgICAgICAgICAgYnV0dG9uczogW10sXG5cbiAgICAgICAgICAgIGNvbHVtbnM6IFtdLFxuXG4gICAgICAgICAgICBoZWFkZXI6IGZhbHNlLFxuXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZmFsc2UsXG5cbiAgICAgICAgICAgIC8vIChib29sKSBTaG91bGQgc2hvdyB0aGUgcGFnaW5hdGlvbiBmb3IgdGhpcyB0YWJsZVxuICAgICAgICAgICAgcGFnaW5hdGU6IHRydWUsXG5cbiAgICAgICAgICAgIC8vIChib29sKSBJcyB0aGUgdGFibGUgY3VycmVudGx5IGxvYWRpbmcgZGF0YVxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG5cbiAgICAgICAgICAgIC8vIChvYmplY3QpIEFuIG9iamVjdCB3aXRoIGtleS92YWx1ZSBwYWlycyBmb3IgY29tcG9uZW50cyB1c2VkIGluIHRoZSB0ZW1wbGF0ZVxuICAgICAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgIC8vIChzdHJpbmcpIFRoZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHRhYmxlIGhlYWRlclxuICAgICAgICAgICAgICAgIGhlYWRlcjogJ3RhYmxlLXZpZXctaGVhZGVyJyxcblxuICAgICAgICAgICAgICAgIC8vIChzdHJpbmcpIFRoZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHRhYmxlIHJvd1xuICAgICAgICAgICAgICAgIHJvdzogJ3RhYmxlLXZpZXctcm93JyxcblxuICAgICAgICAgICAgICAgIC8vIChzdHJpbmcpIFRoZSBuYW1lIG9mIHRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHRhYmxlIHJvd1xuICAgICAgICAgICAgICAgIGZvb3RlcjogJ3RhYmxlLXZpZXctZm9vdGVyJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8gKGludCkgVGhlIHN0YXJ0aW5nIHBhZ2VcbiAgICAgICAgICAgIC8vIHBhZ2U6IDEsXG5cbiAgICAgICAgICAgIC8vIChzdHJpbmcpIFRoZSBvcmRlciBvZiB0aGUgZGF0ZSBiZWluZyByZXR1cm5lZFxuICAgICAgICAgICAgLy8gb3JkZXI6IG51bGwsXG5cbiAgICAgICAgICAgIC8vIChzdHJpbmcpIEVpdGhlciBhc2Mgb3IgZGVzYyBzb3J0aW5nIG9yZGVyXG4gICAgICAgICAgICAvLyBzb3J0OiBudWxsLFxuXG4gICAgICAgICAgICAvLyAoaW50KSBUaGUgbnVtYmVycyBvZiByb3dzIHBlciBwYWdlXG4gICAgICAgICAgICAvLyBsaW1pdDogMjAsXG5cbiAgICAgICAgICAgIC8vIChib29sKSBGZXRjaCB0aGUgZGF0YSB3aGVuIHRhYmxlIGlzIHNob3duXG4gICAgICAgICAgICAvLyBmZXRjaE9uUmVuZGVyOiB0cnVlLFxuXG4gICAgICAgICAgICAvLyAoYXJyYXkpIEFuIGFycmF5IG9mIGhlYWRlcnMgYXBwZW5kZWQgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICAgIC8vIHJlcXVlc3RIZWFkZXJzOiBbXSxcblxuICAgICAgICAgICAgLy8gKGFycmF5KSBUaGUgZGVmYXVsdCBvcHRpb25zIHVzZWQgdG8gZ2VuZXJhdGUgdGhlIHF1ZXJ5IHN0cmluZ1xuICAgICAgICAgICAgLy8gZGVmYXVsdFJlcXVlc3REYXRhT3B0aW9uczogW1xuICAgICAgICAgICAgLy8gICAgJ3BhZ2UnLFxuICAgICAgICAgICAgLy8gICAgJ2xpbWl0JyxcbiAgICAgICAgICAgIC8vICAgICdvcmRlcicsXG4gICAgICAgICAgICAvLyAgICAnc29ydCdcbiAgICAgICAgICAgIC8vIF0sXG5cbiAgICAgICAgICAgIC8vIChvYmplY3QpIEFuIG9wdGlvbiB0byBwYXNzIGFuIG9iamVjdCB3aXRoIHJlcXVlc3QgZGF0YVxuICAgICAgICAgICAgLy8gcmVxdWVzdERhdGE6IHt9LFxuXG4gICAgICAgICAgICAvLyAoYXJyYXkpIEFkZGl0aW9uYWwgb3B0aW9ucyB1c2VkIHRvIGdlbmVyYXRlIHRoZSBxdWVyeSBzdHJpbmdcbiAgICAgICAgICAgIC8vIHJlcXVlc3REYXRhT3B0aW9uczogW10sXG5cbiAgICAgICAgICAgIC8vIChvYmplY3QpIFRoZSBib2R5IHZpZXcgb3B0aW9ucyBvYmplY3RcbiAgICAgICAgICAgIC8vIGJvZHlWaWV3T3B0aW9uczogZmFsc2UsXG5cbiAgICAgICAgICAgIC8vIChvYmplY3QpIFRoZSBwYWdpbmF0aW9uIHZpZXcgY2xhc3NcbiAgICAgICAgICAgIC8vIGZvb3RlclZpZXc6ICdwYWdpbmF0aW9uJyxcblxuICAgICAgICAgICAgLy8gKG9iamVjdCkgVGhlIHBhZ2luYXRpb24gdmlldyBvcHRpb25zIG9iamVjdFxuICAgICAgICAgICAgLy8gZm9vdGVyVmlld09wdGlvbnM6IGZhbHNlLFxuXG4gICAgICAgICAgICAvLyAoc3RyaW5nKSBUaGUgdGFibGUgZm9vdGVyIGNsYXNzIG5hbWVcbiAgICAgICAgICAgIC8vIGZvb3RlckNsYXNzTmFtZTogJ3RhYmxlLWhlYWRlcicsXG5cbiAgICAgICAgICAgIC8vIChzdHJpbmcpIFRoZSB0YWJsZSBoZWFkZXJcbiAgICAgICAgICAgIC8vIGhlYWRlcjogZmFsc2UsXG5cbiAgICAgICAgICAgIC8vIChzdHJpbmcpIFRoZSB0YWJsZSBoZWFkZXIgdGFnIG5hbWVcbiAgICAgICAgICAgIC8vIGhlYWRlclRhZ05hbWU6ICdoMycsXG5cbiAgICAgICAgICAgIC8vIChzdHJpbmcpIFRoZSB0YWJsZSBoZWFkZXIgY2xhc3MgbmFtZVxuICAgICAgICAgICAgLy8gaGVhZGVyQ2xhc3NOYW1lOiAndGFibGUtaGVhZGVyJyxcblxuICAgICAgICAgICAgLy8gKG9iamVjdCkgVGhlIGhlYWRlciB2aWV3IGNsYXNzXG4gICAgICAgICAgICAvLyBoZWFkZXJWaWV3OiBmYWxzZSxcblxuICAgICAgICAgICAgLy8gKG9iamVjdCkgVGhlIGhlYWRlciB2aWV3IG9wdGlvbnMgb2JqZWN0XG4gICAgICAgICAgICAvLyBoZWFkZXJWaWV3T3B0aW9uczogZmFsc2UsXG5cbiAgICAgICAgICAgIC8vIChzdHJpbmcpIFRoZSB0YWJsZSBkZXNjcmlwdGlvblxuICAgICAgICAgICAgLy8gZGVzY3JpcHRpb246IGZhbHNlLFxuXG4gICAgICAgICAgICAvLyAoc3RyaW5nKSBUaGUgdGFibGUgZGVzY3JpcHRpb24gdGFnXG4gICAgICAgICAgICAvLyBkZXNjcmlwdGlvblRhZzogJ3AnLFxuXG4gICAgICAgICAgICAvLyAoc3RyaW5nKSBUaGUgdGFibGUgZGVzY3JpcHRpb24gdGFnXG4gICAgICAgICAgICAvLyBkZXNjcmlwdGlvbkNsYXNzTmFtZTogJ2Rlc2NyaXB0aW9uIHJvdyBjb2wtc20tNicsXG5cbiAgICAgICAgICAgIC8vIChzdHJpbmcpIFRoZSB0YWJsZSBjbGFzcyBuYW1lXG4gICAgICAgICAgICAvLyB0YWJsZUNsYXNzTmFtZTogJ3RhYmxlJyxcblxuICAgICAgICAgICAgLy8gKHN0cmluZykgVGhlIGxvYWRpbmcgY2xhc3MgbmFtZVxuICAgICAgICAgICAgLy8gbG9hZGluZ0NsYXNzTmFtZTogJ2xvYWRpbmcnLFxuXG4gICAgICAgICAgICAvLyAoc3RyaW5nKSBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgaW4gdGhlIG1vZGVsIHN0b3JpbmcgdGhlIGNvbHVtbnNcbiAgICAgICAgICAgIC8vIGNoaWxkVmlld0NvbHVtbnNQcm9wZXJ0eTogJ2NvbHVtbnMnLFxuXG4gICAgICAgICAgICAvLyAob2JqZWN0KSBUaGUgYWN0aXZpdHkgaW5kaWNhdG9yIG9wdGlvbnNcbiAgICAgICAgICAgIC8vIGluZGljYXRvck9wdGlvbnM6IHtcbiAgICAgICAgICAgIC8vICAgICBpbmRpY2F0b3I6ICdzbWFsbCdcbiAgICAgICAgICAgIC8vIH0sXG5cbiAgICAgICAgICAgIC8vIChzdHJpbmcpIFRoZSBtZXNzYWdlIHRvIGRpc3BsYXkgaWYgdGhlcmUgYXJlIG5vIHRhYmxlIHJvd3NcbiAgICAgICAgICAgIC8vIGVtcHR5TWVzc2FnZTogJ05vIHJvd3MgZm91bmQnLFxuXG4gICAgICAgICAgICAvLyAoc3RyaW5nKSBUaGUgbmFtZSBvZiB0aGUgY2xhc3MgYXBwZW5kZWQgdG8gdGhlIGJ1dHRvbnNcbiAgICAgICAgICAgIC8vIGJ1dHRvbkNsYXNzTmFtZTogJ2J0biBidG4tZGVmYXVsdCcsXG4gICAgICAgIH0sIHRoaXMuJGF0dHJzKTtcbiAgICB9LFxuICAgICovXG5cbiAgICBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgICB0aGlzLiRvZmYoKTtcbiAgICB9XG59XG5cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IFRhYmxlVmlldyBmcm9tICcuL1RhYmxlVmlldyc7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJ0AvSGVscGVycy9WdWVJbnN0YWxsZXIvVnVlSW5zdGFsbGVyJztcblxuY29uc3QgcGx1Z2luID0gVnVlSW5zdGFsbGVyLnVzZSh7XG5cbiAgICBpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWVJbnN0YWxsZXIuY29tcG9uZW50cyh7XG4gICAgICAgICAgICBUYWJsZVZpZXdcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGVWaWV3O1xuIiwiPHRlbXBsYXRlPlxuICAgIDxmb3JtLWdyb3VwPlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJsYWJlbFwiPlxuICAgICAgICAgICAgPGZvcm0tbGFiZWwgdi1pZj1cImxhYmVsXCIgOmZvcj1cImlkXCIgdi1odG1sPVwibGFiZWxcIiAvPlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgIDppZD1cImlkXCJcbiAgICAgICAgICAgICAgICA6dmFsdWU9XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgIDpyZXF1aXJlZD1cInJlcXVpcmVkXCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZCB8fCByZWFkb25seVwiXG4gICAgICAgICAgICAgICAgOnJlYWRvbmx5PVwicmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgIDpwYXR0ZXJuPVwicGF0dGVyblwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwibWVyZ2VDbGFzc2VzKGNvbnRyb2xDbGFzc2VzLCBjb2xvcmFibGVDbGFzc2VzKVwiXG4gICAgICAgICAgICAgICAgdi1iaW5kLWV2ZW50cz1cImJpbmRFdmVudHNcIlxuICAgICAgICAgICAgICAgIHYtb246aW5wdXQ9XCJ1cGRhdGVkKCRldmVudC50YXJnZXQudmFsdWUpXCI+XG4gICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImhlbHBcIj5cbiAgICAgICAgICAgIDxoZWxwLXRleHQgdi1pZj1cImhlbHBUZXh0XCIgdi1odG1sPVwiaGVscFRleHRcIiAvPlxuICAgICAgICA8L3Nsb3Q+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImZlZWRiYWNrXCI+XG4gICAgICAgICAgICA8Zm9ybS1mZWVkYmFjayB2LWlmPVwidmFsaWRGZWVkYmFja1wiIHYtaHRtbD1cInZhbGlkRmVlZGJhY2tcIiB2YWxpZCAvPlxuICAgICAgICAgICAgPGZvcm0tZmVlZGJhY2sgdi1pZj1cImludmFsaWRGZWVkYmFja1wiIHYtaHRtbD1cImludmFsaWRGZWVkYmFja1wiIGludmFsaWQgLz5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgPC9mb3JtLWdyb3VwPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IENvbG9yYWJsZSBmcm9tICdAL01peGlucy9Db2xvcmFibGUvQ29sb3JhYmxlJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAL01peGlucy9Gb3JtQ29udHJvbC9Gb3JtQ29udHJvbCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICd0ZXh0YXJlYS1maWVsZCcsXG5cbiAgICBtaXhpbnM6IFtcbiAgICAgICAgQ29sb3JhYmxlLFxuICAgICAgICBGb3JtQ29udHJvbFxuICAgIF0sXG5cbiAgICBwcm9wczoge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHR5cGUgYXR0cmlidXRlXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICd0ZXh0J1xuICAgICAgICB9XG4gICAgfVxuXG59XG5cbjwvc2NyaXB0PlxuIiwiaW1wb3J0IFRleHRhcmVhRmllbGQgZnJvbSAnLi9UZXh0YXJlYUZpZWxkJztcbmltcG9ydCBWdWVJbnN0YWxsZXIgZnJvbSAnQC9IZWxwZXJzL1Z1ZUluc3RhbGxlci9WdWVJbnN0YWxsZXInO1xuXG5jb25zdCBwbHVnaW4gPSBWdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlLCBvcHRpb25zKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKHtcbiAgICAgICAgICAgIFRleHRhcmVhRmllbGRcbiAgICAgICAgfSk7XG4gICAgfVxuXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWFGaWVsZDtcbiIsInZhciBiYXNlRmluZEluZGV4ID0gcmVxdWlyZSgnLi9fYmFzZUZpbmRJbmRleCcpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vdG9JbnRlZ2VyJyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heDtcblxuLyoqXG4gKiBUaGlzIG1ldGhvZCBpcyBsaWtlIGBfLmZpbmRgIGV4Y2VwdCB0aGF0IGl0IHJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmaXJzdFxuICogZWxlbWVudCBgcHJlZGljYXRlYCByZXR1cm5zIHRydXRoeSBmb3IgaW5zdGVhZCBvZiB0aGUgZWxlbWVudCBpdHNlbGYuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAxLjEuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtwcmVkaWNhdGU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZnJvbUluZGV4PTBdIFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBmb3VuZCBlbGVtZW50LCBlbHNlIGAtMWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciB1c2VycyA9IFtcbiAqICAgeyAndXNlcic6ICdiYXJuZXknLCAgJ2FjdGl2ZSc6IGZhbHNlIH0sXG4gKiAgIHsgJ3VzZXInOiAnZnJlZCcsICAgICdhY3RpdmUnOiBmYWxzZSB9LFxuICogICB7ICd1c2VyJzogJ3BlYmJsZXMnLCAnYWN0aXZlJzogdHJ1ZSB9XG4gKiBdO1xuICpcbiAqIF8uZmluZEluZGV4KHVzZXJzLCBmdW5jdGlvbihvKSB7IHJldHVybiBvLnVzZXIgPT0gJ2Jhcm5leSc7IH0pO1xuICogLy8gPT4gMFxuICpcbiAqIC8vIFRoZSBgXy5tYXRjaGVzYCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLmZpbmRJbmRleCh1c2VycywgeyAndXNlcic6ICdmcmVkJywgJ2FjdGl2ZSc6IGZhbHNlIH0pO1xuICogLy8gPT4gMVxuICpcbiAqIC8vIFRoZSBgXy5tYXRjaGVzUHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmluZEluZGV4KHVzZXJzLCBbJ2FjdGl2ZScsIGZhbHNlXSk7XG4gKiAvLyA9PiAwXG4gKlxuICogLy8gVGhlIGBfLnByb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLmZpbmRJbmRleCh1c2VycywgJ2FjdGl2ZScpO1xuICogLy8gPT4gMlxuICovXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSwgZnJvbUluZGV4KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aDtcbiAgaWYgKCFsZW5ndGgpIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgdmFyIGluZGV4ID0gZnJvbUluZGV4ID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGZyb21JbmRleCk7XG4gIGlmIChpbmRleCA8IDApIHtcbiAgICBpbmRleCA9IG5hdGl2ZU1heChsZW5ndGggKyBpbmRleCwgMCk7XG4gIH1cbiAgcmV0dXJuIGJhc2VGaW5kSW5kZXgoYXJyYXksIGJhc2VJdGVyYXRlZShwcmVkaWNhdGUsIDMpLCBpbmRleCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZmluZEluZGV4O1xuIiwiLyoqXG4gKiBHZXRzIHRoZSBsYXN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBsYXN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5sYXN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiAzXG4gKi9cbmZ1bmN0aW9uIGxhc3QoYXJyYXkpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICByZXR1cm4gbGVuZ3RoID8gYXJyYXlbbGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGFzdDtcbiIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpLFxuICAgIGJhc2VTbGljZSA9IHJlcXVpcmUoJy4vX2Jhc2VTbGljZScpO1xuXG4vKipcbiAqIEdldHMgdGhlIHBhcmVudCB2YWx1ZSBhdCBgcGF0aGAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHBhdGggVGhlIHBhdGggdG8gZ2V0IHRoZSBwYXJlbnQgdmFsdWUgb2YuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcGFyZW50IHZhbHVlLlxuICovXG5mdW5jdGlvbiBwYXJlbnQob2JqZWN0LCBwYXRoKSB7XG4gIHJldHVybiBwYXRoLmxlbmd0aCA8IDIgPyBvYmplY3QgOiBiYXNlR2V0KG9iamVjdCwgYmFzZVNsaWNlKHBhdGgsIDAsIC0xKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFyZW50O1xuIiwidmFyIGNhc3RQYXRoID0gcmVxdWlyZSgnLi9fY2FzdFBhdGgnKSxcbiAgICBsYXN0ID0gcmVxdWlyZSgnLi9sYXN0JyksXG4gICAgcGFyZW50ID0gcmVxdWlyZSgnLi9fcGFyZW50JyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnVuc2V0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwcm9wZXJ0eSBwYXRoIHRvIHVuc2V0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBwcm9wZXJ0eSBpcyBkZWxldGVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbnNldChvYmplY3QsIHBhdGgpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG4gIG9iamVjdCA9IHBhcmVudChvYmplY3QsIHBhdGgpO1xuICByZXR1cm4gb2JqZWN0ID09IG51bGwgfHwgZGVsZXRlIG9iamVjdFt0b0tleShsYXN0KHBhdGgpKV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVVuc2V0O1xuIiwidmFyIGJhc2VVbnNldCA9IHJlcXVpcmUoJy4vX2Jhc2VVbnNldCcpLFxuICAgIGlzSW5kZXggPSByZXF1aXJlKCcuL19pc0luZGV4Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzcGxpY2UgPSBhcnJheVByb3RvLnNwbGljZTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wdWxsQXRgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaW5kaXZpZHVhbFxuICogaW5kZXhlcyBvciBjYXB0dXJpbmcgdGhlIHJlbW92ZWQgZWxlbWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge251bWJlcltdfSBpbmRleGVzIFRoZSBpbmRleGVzIG9mIGVsZW1lbnRzIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBiYXNlUHVsbEF0KGFycmF5LCBpbmRleGVzKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA/IGluZGV4ZXMubGVuZ3RoIDogMCxcbiAgICAgIGxhc3RJbmRleCA9IGxlbmd0aCAtIDE7XG5cbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgdmFyIGluZGV4ID0gaW5kZXhlc1tsZW5ndGhdO1xuICAgIGlmIChsZW5ndGggPT0gbGFzdEluZGV4IHx8IGluZGV4ICE9PSBwcmV2aW91cykge1xuICAgICAgdmFyIHByZXZpb3VzID0gaW5kZXg7XG4gICAgICBpZiAoaXNJbmRleChpbmRleCkpIHtcbiAgICAgICAgc3BsaWNlLmNhbGwoYXJyYXksIGluZGV4LCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJhc2VVbnNldChhcnJheSwgaW5kZXgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVB1bGxBdDtcbiIsInZhciBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBiYXNlUHVsbEF0ID0gcmVxdWlyZSgnLi9fYmFzZVB1bGxBdCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGVsZW1lbnRzIGZyb20gYGFycmF5YCB0aGF0IGBwcmVkaWNhdGVgIHJldHVybnMgdHJ1dGh5IGZvclxuICogYW5kIHJldHVybnMgYW4gYXJyYXkgb2YgdGhlIHJlbW92ZWQgZWxlbWVudHMuIFRoZSBwcmVkaWNhdGUgaXMgaW52b2tlZFxuICogd2l0aCB0aHJlZSBhcmd1bWVudHM6ICh2YWx1ZSwgaW5kZXgsIGFycmF5KS5cbiAqXG4gKiAqKk5vdGU6KiogVW5saWtlIGBfLmZpbHRlcmAsIHRoaXMgbWV0aG9kIG11dGF0ZXMgYGFycmF5YC4gVXNlIGBfLnB1bGxgXG4gKiB0byBwdWxsIGVsZW1lbnRzIGZyb20gYW4gYXJyYXkgYnkgdmFsdWUuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3ByZWRpY2F0ZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgcmVtb3ZlZCBlbGVtZW50cy5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIGFycmF5ID0gWzEsIDIsIDMsIDRdO1xuICogdmFyIGV2ZW5zID0gXy5yZW1vdmUoYXJyYXksIGZ1bmN0aW9uKG4pIHtcbiAqICAgcmV0dXJuIG4gJSAyID09IDA7XG4gKiB9KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheSk7XG4gKiAvLyA9PiBbMSwgM11cbiAqXG4gKiBjb25zb2xlLmxvZyhldmVucyk7XG4gKiAvLyA9PiBbMiwgNF1cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBpZiAoIShhcnJheSAmJiBhcnJheS5sZW5ndGgpKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGluZGV4ZXMgPSBbXSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBwcmVkaWNhdGUgPSBiYXNlSXRlcmF0ZWUocHJlZGljYXRlLCAzKTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KTtcbiAgICB9XG4gIH1cbiAgYmFzZVB1bGxBdChhcnJheSwgaW5kZXhlcyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVtb3ZlO1xuIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cInVwbG9hZC1maWVsZFwiIDpjbGFzcz1cInsnZm9ybS1ncm91cCc6IGdyb3VwLCAnZW5hYmxlLWRyb3B6b25lJzogZHJvcHpvbmV9XCIgQGRyYWdlbnRlci5wcmV2ZW50PVwib25EcmFnRW50ZXJcIiBAZHJhZ292ZXIucHJldmVudD1cIm9uRHJhZ092ZXJcIiBAZHJhZ2xlYXZlLnByZXZlbnQ9XCJvbkRyYWdMZWF2ZVwiPlxuXG4gICAgICAgIDxmaWxlLWZpZWxkIHYtaWY9XCJtdWx0aXBsZSAmJiAoIW1heFVwbG9hZHMgfHwgbWF4VXBsb2FkcyA+IGRhdGEubGVuZ3RoKSB8fCAhbXVsdGlwbGUgJiYgIWRhdGFcIiA6bmFtZT1cIm5hbWVcIiA6bGFiZWw9XCJsYWJlbFwiIDpoZWxwLXRleHQ9XCJoZWxwVGV4dFwiIDptdWx0aXBsZT1cIm11bHRpcGxlXCIgOndpZHRoPVwid2lkdGhcIiA6aGVpZ2h0PVwiaGVpZ2h0XCIgOmVycm9ycz1cImVycm9yc1wiIEBjaGFuZ2U9XCJtdWx0aXBsZSA/IGFkZEZpbGVzKCRldmVudC50YXJnZXQuZmlsZXMpIDogYWRkRmlsZSgkZXZlbnQudGFyZ2V0LmZpbGVzWzBdKVwiIC8+XG5cbiAgICAgICAgPGRpdiB2LWlmPVwibXVsdGlwbGVcIiBjbGFzcz1cInVwbG9hZC1maWVsZC1wcmV2aWV3IG10LTRcIj5cbiAgICAgICAgICAgIDxmaWxlLXByZXZpZXcgdi1mb3I9XCIoZmlsZSwga2V5KSBpbiBkYXRhXCIgOmtleT1cIltmaWxlLm5hbWUsIGZpbGUubGFzdE1vZGlmaWVkLCBmaWxlLnNpemVdLmpvaW4oJycpXCIgOmZpbGU9XCJmaWxlXCIgQGNsb3NlPVwicmVtb3ZlRmlsZShmaWxlKVwiICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHYtZWxzZS1pZj1cIiFtdWx0aXBsZSAmJiBkYXRhXCIgY2xhc3M9XCJ1cGxvYWQtZmllbGQtcHJldmlldyBtdC00XCI+XG4gICAgICAgICAgICA8ZmlsZS1wcmV2aWV3IDpmaWxlPVwiZGF0YVwiIEBjbG9zZT1cInJlbW92ZUZpbGUoZGF0YSlcIiAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiB2LWlmPVwic2hvd0Ryb3BFbGVtZW50XCIgY2xhc3M9XCJ1cGxvYWQtZmllbGQtZHJvcHpvbmVcIiA6c3R5bGU9XCJ7J21pbi1oZWlnaHQnOiBkcm9wem9uZU1pbkhlaWdodH1cIiBAZHJvcC5wcmV2ZW50PVwib25Ecm9wXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNsb3VkLXVwbG9hZFwiPjwvaT5cbiAgICAgICAgICAgIDxkaXY+RHJhZyBhbmQgZHJvcCBmaWxlcyB0byB1cGxvYWQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IGVhY2ggfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgcmVtb3ZlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBmaW5kSW5kZXggfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgaXNVbmRlZmluZWQgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0AvTWl4aW5zL0Zvcm1Db250cm9sL0Zvcm1Db250cm9sJztcbmltcG9ydCBGaWxlRmllbGQgZnJvbSAnQC9Db21wb25lbnRzL0ZpbGVGaWVsZC9GaWxlRmllbGQnO1xuaW1wb3J0IEZpbGVQcmV2aWV3IGZyb20gJ0AvQ29tcG9uZW50cy9GaWxlUHJldmlldy9GaWxlUHJldmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblxuICAgIG5hbWU6ICd1cGxvYWQtZmllbGQnLFxuXG4gICAgbWl4aW5zOiBbRm9ybUNvbnRyb2xdLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBGaWxlRmllbGQsXG4gICAgICAgIEZpbGVQcmV2aWV3XG4gICAgfSxcblxuICAgIG1vZGVsOiB7XG4gICAgICAgIHByb3A6ICdkYXRhJyxcbiAgICAgICAgZXZlbnQ6ICdjaGFuZ2UnXG4gICAgfSxcblxuICAgIHByb3BzOiB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElzIHRoZSB1c2VyIGRyYWdnaW5nIGEgZmlsZSBvdmVyIHRoZSBkcm9wem9uZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBkcmFnZ2luZzoge1xuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgQm9vbGVhbl0sXG4gICAgICAgICAgICBkZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBmaWxlcyB0aGF0IGEgdXNlciBjYW4gdXBsb2FkXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIG1heFVwbG9hZHM6IE51bWJlcixcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGhlaWdodCBhdHRyaWJ1dGUgZm9yIHRoZSBjb250cm9sIGVsZW1lbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgaGVpZ2h0OiBbTnVtYmVyLCBTdHJpbmddLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgd2lkdGggYXR0cmlidXRlIGZvciB0aGUgY29udHJvbCBlbGVtZW50XG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHdpZHRoOiBbTnVtYmVyLCBTdHJpbmddLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYW4gdXNlciBkcmFnL2Ryb3AgZmlsZXMgaW50byBicm93c2VyIHRvIHVwbG9hZCB0aGVtLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBkcm9wem9uZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FuIHVzZXIgZHJhZy9kcm9wIGZpbGVzIGludG8gYnJvd3NlciB0byB1cGxvYWQgdGhlbS5cbiAgICAgICAgICpcbiAgICAgICAgICogQHByb3BlcnR5IFN0cmluZ1xuICAgICAgICAgKi9cbiAgICAgICAgZHJvcHpvbmVNaW5IZWlnaHQ6IFtOdW1iZXIsIFN0cmluZ10sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbiB1c2VyIHVwbG9hZCBtdWx0aXBsZSBmaWxlc1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBtdWx0aXBsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBkYXRhIGF0dHJpYnV0ZVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgRmlsZXxGaWxlTGlzdHxBcnJheVxuICAgICAgICAgKi9cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgdHlwZTogW0ZpbGUsIEZpbGVMaXN0LCBBcnJheV0sXG4gICAgICAgICAgICBkZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5tdWx0aXBsZSA/IG51bGwgOiBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICByZW1vdmVGaWxlKGRhdGEpIHtcbiAgICAgICAgICAgIGlmKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlcyA9IHRoaXMuZGF0YS5zbGljZSgwKTtcblxuICAgICAgICAgICAgICAgIHJlbW92ZShmaWxlcywge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IGRhdGEuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgbGFzdE1vZGlmaWVkOiBkYXRhLmxhc3RNb2RpZmllZFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZmlsZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkRmlsZShmaWxlLCBzdWJqZWN0KSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0TW9kaWZpZWQ6IGZpbGUubGFzdE1vZGlmaWVkLFxuICAgICAgICAgICAgICAgIGxhc3RNb2RpZmllZERhdGU6IGZpbGUubGFzdE1vZGlmaWVkRGF0ZSxcbiAgICAgICAgICAgICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICAgICAgICAgICAgdHlwZTogZmlsZS50eXBlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlcyA9IHN1YmplY3QgfHwgdGhpcy5kYXRhLnNsaWNlKDApO1xuXG4gICAgICAgICAgICAgICAgaWYoIXRoaXMubWF4VXBsb2FkcyB8fCB0aGlzLm1heFVwbG9hZHMgPiBmaWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZmluZEluZGV4KGZpbGVzLCBkYXRhKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVzLnB1c2goZmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBmaWxlcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgZmlsZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBhZGRGaWxlcyhmaWxlcykge1xuICAgICAgICAgICAgY29uc3Qgc3ViamVjdCA9IHRoaXMuZGF0YS5zbGljZSgwKTtcblxuICAgICAgICAgICAgZWFjaChmaWxlcywgZmlsZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRGaWxlKGZpbGUsIHN1YmplY3QpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBgZHJhZ292ZXJgIGV2ZW50IGNhbGxiYWNrLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBvbkRyYWdPdmVyKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLmlzRHJhZ2dpbmdJbnNpZGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOmRyYWdnaW5nJywgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdkcmFnOm92ZXInLCBldmVudCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBgZHJhZ292ZXJgIGV2ZW50IGNhbGxiYWNrLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBvbkRyYWdFbnRlcihldmVudCkge1xuICAgICAgICAgICAgdGhpcy5pc0RyYWdnaW5nSW5zaWRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTpkcmFnZ2luZycsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZHJhZzplbnRlcicsIGV2ZW50KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIGBkcmFnbGVhdmVgIGV2ZW50IGNhbGxiYWNrLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBvbkRyYWdMZWF2ZShldmVudCkge1xuICAgICAgICAgICAgdGhpcy5pc0RyYWdnaW5nSW5zaWRlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6ZHJhZ2dpbmcnLCBmYWxzZSk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdkcmFnOmxlYXZlJywgZXZlbnQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgYGRyb3BgIGV2ZW50IGNhbGxiYWNrLlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcHJvcGVydHkgU3RyaW5nXG4gICAgICAgICAqL1xuICAgICAgICBvbkRyb3AoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNEcmFnZ2luZ0luc2lkZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hZGRGaWxlcyhldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMpO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOmRyYWdnaW5nJywgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZHJvcCcsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBzaG93RHJvcEVsZW1lbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gIWlzVW5kZWZpbmVkKHRoaXMuZHJhZ2dpbmcpID8gdGhpcy5kcmFnZ2luZyA6IHRoaXMuaXNEcmFnZ2luZ0luc2lkZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc0RyYWdnaW5nSW5zaWRlOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCAnLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvYm9vdHN0cmFwLnNjc3MnO1xuXG4udXBsb2FkLWZpZWxkIHtcblxuICAgICYuZW5hYmxlLWRyb3B6b25lIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICY6bm90KC5lbmFibGUtZHJvcHpvbmUpIC51cGxvYWQtZmllbGQtZHJvcHpvbmUge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgfVxuXG4gICAgLnVwbG9hZC1maWVsZC1kcm9wem9uZSB7XG4gICAgICAgIGNvbG9yOiAkaW5mbztcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJGluZm8sIDQ1JSk7XG4gICAgICAgIGJvcmRlcjogMnB4IGRhc2hlZCBsaWdodGVuKCRpbmZvLCAyNSUpO1xuICAgICAgICB0ZXh0LXNoYWRvdzogMCAxcHggMCB3aGl0ZTtcblxuICAgICAgICAmID4gaSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC51cGxvYWQtZmllbGQtcHJldmlldyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG5cbiAgICAudXBsb2FkLWZpZWxkLXByZXZpZXcgLmZpbGUtcHJldmlldzpub3QoLmlzLWltYWdlKSB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICB9XG5cbiAgICAudXBsb2FkLWZpZWxkLXByZXZpZXcgLmZpbGUtcHJldmlldy5pcy1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiAyMi43NSU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMyU7XG5cbiAgICAgICAgJjpudGgtY2hpbGQoNG4pIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC51cGxvYWQtZmllbGQtcHJldmlldyAuZmlsZS1wcmV2aWV3IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cblxuICAgIC51cGxvYWQtZmllbGQtcHJldmlldyAuZmlsZS1wcmV2aWV3LW5hbWUtbGFiZWwge1xuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIH1cbn1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgVXBsb2FkRmllbGQgZnJvbSAnLi9VcGxvYWRGaWVsZCc7XG5pbXBvcnQgVnVlSW5zdGFsbGVyIGZyb20gJ0AvSGVscGVycy9WdWVJbnN0YWxsZXIvVnVlSW5zdGFsbGVyJztcblxuY29uc3QgcGx1Z2luID0gVnVlSW5zdGFsbGVyLnVzZSh7XG5cbiAgICBpbnN0YWxsKFZ1ZSwgb3B0aW9ucykge1xuICAgICAgICBWdWVJbnN0YWxsZXIuY29tcG9uZW50cyh7XG4gICAgICAgICAgICBVcGxvYWRGaWVsZFxuICAgICAgICB9KTtcbiAgICB9XG5cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRGaWVsZDtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3BvbnNlVHJhbnNmb3JtZXIge1xuXG4gICAgY29uc3RydWN0b3IocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy4kcmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCBwcmVmaXggZnJvbSAnQC9IZWxwZXJzL1ByZWZpeC9QcmVmaXgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cbiAgICBwcm9wczoge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgc2l6ZSBvZiB0aGUgZm9ybSBjb250cm9sXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwcm9wZXJ0eSBTdHJpbmdcbiAgICAgICAgICovXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdtZCcsXG4gICAgICAgICAgICB2YWxpZGF0ZTogdmFsdWUgPT4gWydzbScsICdtZCcsICdsZyddLmluZGV4T2YodmFsdWUpICE9PSAtMVxuICAgICAgICB9XG5cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgc2l6ZWFibGVDbGFzcygpIHtcbiAgICAgICAgICAgIHJldHVybiBwcmVmaXgodGhpcy5zaXplLCB0aGlzLiRvcHRpb25zLm5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgeyBlYWNoIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAqIGFzIHBsdWdpbnMgZnJvbSAnLi9QbHVnaW5zJztcbmltcG9ydCAqIGFzIGNvbXBvbmVudHMgZnJvbSAnLi9Db21wb25lbnRzJztcbi8vaW1wb3J0ICogYXMgZGlyZWN0aXZlcyBmcm9tICcuL0RpcmVjdGl2ZXMnO1xuaW1wb3J0IFZ1ZUluc3RhbGxlciBmcm9tICcuL0hlbHBlcnMvVnVlSW5zdGFsbGVyJztcblxuZXhwb3J0ICogZnJvbSAnLi9IdHRwJztcbmV4cG9ydCAqIGZyb20gJy4vTWl4aW5zJztcbmV4cG9ydCAqIGZyb20gJy4vUGx1Z2lucyc7XG5leHBvcnQgKiBmcm9tICcuL0NvbXBvbmVudHMnO1xuLy9leHBvcnQgKiBmcm9tICcuL0RpcmVjdGl2ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBWdWVJbnN0YWxsZXIudXNlKHtcblxuICAgIGluc3RhbGwoVnVlKSB7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5wbHVnaW5zKFZ1ZSwgcGx1Z2lucyk7XG4gICAgICAgIFZ1ZUluc3RhbGxlci5jb21wb25lbnRzKFZ1ZSwgY29tcG9uZW50cyk7XG4gICAgICAgIC8vVnVlSW5zdGFsbGVyLmRpcmVjdGl2ZXMoVnVlLCBkaXJlY3RpdmVzKTtcbiAgICB9XG5cbn0pO1xuIl0sIm5hbWVzIjpbImdsb2JhbCIsImZyZWVHbG9iYWwiLCJTeW1ib2wiLCJyb290Iiwib2JqZWN0UHJvdG8iLCJuYXRpdmVPYmplY3RUb1N0cmluZyIsInN5bVRvU3RyaW5nVGFnIiwiZ2V0UmF3VGFnIiwib2JqZWN0VG9TdHJpbmciLCJpc09iamVjdCIsImJhc2VHZXRUYWciLCJjb3JlSnNEYXRhIiwiZnVuY1Byb3RvIiwiZnVuY1RvU3RyaW5nIiwiaGFzT3duUHJvcGVydHkiLCJpc01hc2tlZCIsImlzRnVuY3Rpb24iLCJ0b1NvdXJjZSIsImdldFZhbHVlIiwiYmFzZUlzTmF0aXZlIiwiZ2V0TmF0aXZlIiwiZGVmaW5lUHJvcGVydHkiLCJlcSIsImJhc2VBc3NpZ25WYWx1ZSIsImFzc2lnblZhbHVlIiwiYXBwbHkiLCJpZGVudGl0eSIsImNvbnN0YW50Iiwic2hvcnRPdXQiLCJiYXNlU2V0VG9TdHJpbmciLCJzZXRUb1N0cmluZyIsIm92ZXJSZXN0IiwiaXNMZW5ndGgiLCJNQVhfU0FGRV9JTlRFR0VSIiwiaXNBcnJheUxpa2UiLCJpc0luZGV4IiwiYmFzZVJlc3QiLCJpc0l0ZXJhdGVlQ2FsbCIsImlzT2JqZWN0TGlrZSIsImJhc2VJc0FyZ3VtZW50cyIsInN0dWJGYWxzZSIsImFyZ3NUYWciLCJmdW5jVGFnIiwibm9kZVV0aWwiLCJiYXNlVW5hcnkiLCJiYXNlSXNUeXBlZEFycmF5IiwiaXNBcnJheSIsImlzQXJndW1lbnRzIiwiaXNCdWZmZXIiLCJpc1R5cGVkQXJyYXkiLCJiYXNlVGltZXMiLCJuYXRpdmVLZXlzSW4iLCJpc1Byb3RvdHlwZSIsImFycmF5TGlrZUtleXMiLCJiYXNlS2V5c0luIiwiY3JlYXRlQXNzaWduZXIiLCJjb3B5T2JqZWN0Iiwia2V5c0luIiwicmVxdWlyZSQkMCIsImFzc29jSW5kZXhPZiIsImxpc3RDYWNoZUNsZWFyIiwibGlzdENhY2hlRGVsZXRlIiwibGlzdENhY2hlR2V0IiwibGlzdENhY2hlSGFzIiwibGlzdENhY2hlU2V0IiwiTGlzdENhY2hlIiwiTWFwIiwibmF0aXZlQ3JlYXRlIiwiSEFTSF9VTkRFRklORUQiLCJoYXNoQ2xlYXIiLCJoYXNoRGVsZXRlIiwiaGFzaEdldCIsImhhc2hIYXMiLCJoYXNoU2V0IiwiSGFzaCIsImlzS2V5YWJsZSIsImdldE1hcERhdGEiLCJtYXBDYWNoZUNsZWFyIiwibWFwQ2FjaGVEZWxldGUiLCJtYXBDYWNoZUdldCIsIm1hcENhY2hlSGFzIiwibWFwQ2FjaGVTZXQiLCJNYXBDYWNoZSIsInN0YWNrQ2xlYXIiLCJzdGFja0RlbGV0ZSIsInN0YWNrR2V0Iiwic3RhY2tIYXMiLCJzdGFja1NldCIsImNyZWF0ZUJhc2VGb3IiLCJVaW50OEFycmF5IiwiY2xvbmVBcnJheUJ1ZmZlciIsIm92ZXJBcmciLCJiYXNlQ3JlYXRlIiwiZ2V0UHJvdG90eXBlIiwib2JqZWN0VGFnIiwic2FmZUdldCIsImFzc2lnbk1lcmdlVmFsdWUiLCJpc0FycmF5TGlrZU9iamVjdCIsImNvcHlBcnJheSIsImNsb25lQnVmZmVyIiwiY2xvbmVUeXBlZEFycmF5IiwiaXNQbGFpbk9iamVjdCIsInRvUGxhaW5PYmplY3QiLCJpbml0Q2xvbmVPYmplY3QiLCJiYXNlRm9yIiwiU3RhY2siLCJiYXNlTWVyZ2VEZWVwIiwiYmFzZU1lcmdlIiwibmF0aXZlS2V5cyIsImJhc2VLZXlzIiwia2V5cyIsImNyZWF0ZUJhc2VFYWNoIiwiYmFzZUZvck93biIsImFycmF5RWFjaCIsImJhc2VFYWNoIiwiY2FzdEZ1bmN0aW9uIiwiVnVlIiwib3B0aW9ucyIsInByb3RvdHlwZSIsIm1lcmdlQ2xhc3NlcyIsImNsYXNzZXMiLCJzbGljZSIsImNhbGwiLCJhcmd1bWVudHMiLCJfaXNPYmplY3QiLCJhcmciLCJfaXNBcnJheSIsImJhc2VQcm9wZXJ0eU9mIiwiYXJyYXlNYXAiLCJpc1N5bWJvbCIsImJhc2VUb1N0cmluZyIsInRvU3RyaW5nIiwiZGVidXJyTGV0dGVyIiwicnNDb21ib01hcmtzUmFuZ2UiLCJyZUNvbWJvSGFsZk1hcmtzUmFuZ2UiLCJyc0NvbWJvU3ltYm9sc1JhbmdlIiwicnNDb21ib1JhbmdlIiwicnNDb21ibyIsImhhc1VuaWNvZGVXb3JkIiwidW5pY29kZVdvcmRzIiwiYXNjaWlXb3JkcyIsInJzQXBvcyIsImFycmF5UmVkdWNlIiwid29yZHMiLCJkZWJ1cnIiLCJjcmVhdGVDb21wb3VuZGVyIiwiTnVtYmVyIiwiU3RyaW5nIiwiJG9wdGlvbnMiLCJuYW1lIiwicHJlZml4Iiwic2l6ZSIsInJlcGxhY2UiLCJCYXNlVHlwZSIsIl9leHRlbmQiLCJwcm9wcyIsIkJvb2xlYW4iLCJfa2ViYWJDYXNlIiwidHlwZSIsIlZ1ZUluc3RhbGxlciIsInVzZSIsInBsdWdpbiIsIndpbmRvdyIsImRlZiIsIiRwbHVnaW5zIiwicGx1Z2lucyIsImNvbXBvbmVudCIsIiRjb21wb25lbnRzIiwiY29tcG9uZW50cyIsImRpcmVjdGl2ZSIsIiRkaXJlY3RpdmVzIiwiZGlyZWN0aXZlcyIsImNvbnZlcnRBbmltYXRpb25EZWxheVRvSW50IiwiZGVsYXkiLCJudW0iLCJwYXJzZUZsb2F0IiwibWF0Y2hlcyIsIm1hdGNoIiwidW5pdCIsIm1pbGxpc2Vjb25kcyIsImFuaW1hdGVkIiwiZWwiLCJjYWxsYmFjayIsImRlZmF1bHRWaWV3Iiwib3duZXJEb2N1bWVudCIsImRvY3VtZW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImFuaW1hdGlvbkR1cmF0aW9uIiwiJGVsIiwiZGlzYWJsZWQiLCJkaXNhYmxlIiwiY2xhc3NMaXN0IiwiYWRkIiwiJGVtaXQiLCJlbmFibGUiLCJyZW1vdmUiLCJldmVudCIsImJsb2NrIiwiYWN0aXZpdHkiLCJ2YXJpYW50Iiwib3JpZW50YXRpb24iLCJpbmRpY2F0b3IiLCJ2YWx1ZSIsInNob3dBY3Rpdml0eSIsImhpZGVBY3Rpdml0eSIsInNldENhY2hlQWRkIiwic2V0Q2FjaGVIYXMiLCJTZXRDYWNoZSIsImFycmF5U29tZSIsImNhY2hlSGFzIiwiQ09NUEFSRV9QQVJUSUFMX0ZMQUciLCJDT01QQVJFX1VOT1JERVJFRF9GTEFHIiwiYm9vbFRhZyIsImRhdGVUYWciLCJlcnJvclRhZyIsIm1hcFRhZyIsIm51bWJlclRhZyIsInJlZ2V4cFRhZyIsInNldFRhZyIsInN0cmluZ1RhZyIsInN5bWJvbFRhZyIsImFycmF5QnVmZmVyVGFnIiwiZGF0YVZpZXdUYWciLCJzeW1ib2xQcm90byIsIm1hcFRvQXJyYXkiLCJzZXRUb0FycmF5IiwiZXF1YWxBcnJheXMiLCJhcnJheVB1c2giLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInN0dWJBcnJheSIsImFycmF5RmlsdGVyIiwiYmFzZUdldEFsbEtleXMiLCJnZXRTeW1ib2xzIiwiZ2V0QWxsS2V5cyIsIlByb21pc2UiLCJ3ZWFrTWFwVGFnIiwiRGF0YVZpZXciLCJTZXQiLCJXZWFrTWFwIiwiYXJyYXlUYWciLCJnZXRUYWciLCJlcXVhbEJ5VGFnIiwiZXF1YWxPYmplY3RzIiwiYmFzZUlzRXF1YWxEZWVwIiwiYmFzZUlzRXF1YWwiLCJpc1N0cmljdENvbXBhcmFibGUiLCJnZXRNYXRjaERhdGEiLCJtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSIsImJhc2VJc01hdGNoIiwibWVtb2l6ZSIsIm1lbW9pemVDYXBwZWQiLCJpc0tleSIsInN0cmluZ1RvUGF0aCIsIklORklOSVRZIiwiY2FzdFBhdGgiLCJ0b0tleSIsImJhc2VHZXQiLCJoYXNQYXRoIiwiYmFzZUhhc0luIiwiZ2V0IiwiaGFzSW4iLCJiYXNlUHJvcGVydHkiLCJiYXNlUHJvcGVydHlEZWVwIiwiYmFzZU1hdGNoZXNQcm9wZXJ0eSIsImJhc2VNYXRjaGVzIiwicHJvcGVydHkiLCJiYXNlSXRlcmF0ZWUiLCJzdWJqZWN0IiwiZGVsaW1ldGVyIiwicHJlZml4ZXIiLCJrZXkiLCJzdHJpbmciLCJSZWdFeHAiLCJqb2luIiwiX21hcEtleXMiLCJWYXJpYW50IiwicGlsbCIsInNlY29uZGFyeSIsImJhc2VSZWR1Y2UiLCJiYXNlU2V0IiwibmF0aXZlR2V0U3ltYm9scyIsImdldFN5bWJvbHNJbiIsImdldEFsbEtleXNJbiIsImJhc2VQaWNrQnkiLCJiYXNlRmlsdGVyIiwicnNBc3RyYWxSYW5nZSIsInJzVmFyUmFuZ2UiLCJyc1pXSiIsInJzRml0eiIsInJzTW9kaWZpZXIiLCJyc05vbkFzdHJhbCIsInJzUmVnaW9uYWwiLCJyc1N1cnJQYWlyIiwicmVPcHRNb2QiLCJyc09wdFZhciIsInJzT3B0Sm9pbiIsInJzU2VxIiwiaGFzVW5pY29kZSIsInVuaWNvZGVTaXplIiwiYXNjaWlTaXplIiwiaXNTdHJpbmciLCJzdHJpbmdTaXplIiwiYmFzZU1hcCIsImJhc2VTbGljZSIsInJzQXN0cmFsIiwicnNTeW1ib2wiLCJyZVVuaWNvZGUiLCJ1bmljb2RlVG9BcnJheSIsImFzY2lpVG9BcnJheSIsInN0cmluZ1RvQXJyYXkiLCJjYXN0U2xpY2UiLCJjcmVhdGVDYXNlRmlyc3QiLCJ1cHBlckZpcnN0IiwiY2FwaXRhbGl6ZSIsIm1ldGFNYXAiLCJjcmVhdGVDdG9yIiwibmF0aXZlTWF4IiwiYmFzZUxvZGFzaCIsIm5vb3AiLCJyZWFsTmFtZXMiLCJMYXp5V3JhcHBlciIsIkxvZGFzaFdyYXBwZXIiLCJ3cmFwcGVyQ2xvbmUiLCJnZXRGdW5jTmFtZSIsImxvZGFzaCIsImdldERhdGEiLCJiYXNlU2V0RGF0YSIsInN0cmljdEluZGV4T2YiLCJiYXNlRmluZEluZGV4IiwiYmFzZUlzTmFOIiwiYmFzZUluZGV4T2YiLCJXUkFQX0JJTkRfRkxBRyIsImFycmF5SW5jbHVkZXMiLCJpbnNlcnRXcmFwRGV0YWlscyIsInVwZGF0ZVdyYXBEZXRhaWxzIiwiZ2V0V3JhcERldGFpbHMiLCJXUkFQX0JJTkRfS0VZX0ZMQUciLCJXUkFQX0NVUlJZX0ZMQUciLCJXUkFQX1BBUlRJQUxfRkxBRyIsIldSQVBfUEFSVElBTF9SSUdIVF9GTEFHIiwiaXNMYXppYWJsZSIsInNldERhdGEiLCJzZXRXcmFwVG9TdHJpbmciLCJXUkFQX0NVUlJZX1JJR0hUX0ZMQUciLCJXUkFQX0FSWV9GTEFHIiwiV1JBUF9GTElQX0ZMQUciLCJnZXRIb2xkZXIiLCJjb3VudEhvbGRlcnMiLCJjb21wb3NlQXJncyIsImNvbXBvc2VBcmdzUmlnaHQiLCJyZXBsYWNlSG9sZGVycyIsImNyZWF0ZVJlY3VycnkiLCJyZW9yZGVyIiwiY3JlYXRlSHlicmlkIiwiUExBQ0VIT0xERVIiLCJXUkFQX0NVUlJZX0JPVU5EX0ZMQUciLCJXUkFQX1JFQVJHX0ZMQUciLCJuYXRpdmVNaW4iLCJ0b051bWJlciIsInRvRmluaXRlIiwiRlVOQ19FUlJPUl9URVhUIiwidG9JbnRlZ2VyIiwibWVyZ2VEYXRhIiwiY3JlYXRlQmluZCIsImNyZWF0ZUN1cnJ5IiwiY3JlYXRlUGFydGlhbCIsImNyZWF0ZVdyYXAiLCJQUk9YWV9DT05GSUdfUFJPUEVSVElFUyIsIlBST1hZX0NPTkZJR19NRVRIT0RTIiwicHJvcCIsImNvbnRleHQiLCJ2YWx1ZXMiLCJtZXRob2QiLCJhY3Rpb24iLCJfY2FtZWxDYXNlIiwiY2hhaW5hYmxlIiwiRm9ybURhdGEiLCJSZXF1ZXN0IiwidXJsIiwiY29uZmlnIiwiJGNvbmZpZyIsIl9iaW5kIiwicmVzZXQiLCIkZXJyb3IiLCIkc3RhdHVzIiwiJHN0YXR1c1RleHQiLCIkcmVzcG9uc2UiLCIkcmVxdWVzdFNlbnRBdCIsIiRyZXNwb25zZVJlY2VpdmVkQXQiLCJoYXNSZXNwb25zZSIsIiR1cmwiLCJwYXJhbXMiLCJoZWFkZXJzIiwicmVxdWVzdCIsImRhdGEiLCJtb21lbnQiLCJhZGRDb25maWciLCJwcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJlcnJvciIsImVycm9ycyIsIk1vZGVsIiwiJGNoYW5nZWQiLCIkZXhpc3RzIiwiJGF0dHJpYnV0ZXMiLCIka2V5IiwiJGZpbGVzIiwiZmlsZXMiLCIkdGFibGUiLCJ0YWJsZSIsIiRwcm9wZXJ0aWVzIiwicHJvcGVydGllcyIsImluaXRpYWxpemUiLCJFcnJvciIsIiRpbml0aWFsaXplZCIsImZpbGwiLCJzZXRBdHRyaWJ1dGVzIiwiZ2V0QXR0cmlidXRlcyIsImZpbHRlciIsImluZGV4T2YiLCJnZXRBdHRyaWJ1dGUiLCJ1bmRlZmluZWQiLCJzZXRBdHRyaWJ1dGUiLCJfa2V5cyIsIl9maWx0ZXIiLCJoYW5kbGVBdHRyaWJ1dGVDaGFuZ2UiLCJfaXNVbmRlZmluZWQiLCJfc2l6ZSIsImNvdW50IiwidG90YWwiLCJfcmVkdWNlIiwiY2FycnkiLCJGaWxlIiwiRmlsZUxpc3QiLCJ0b0pTT04iLCJoYW5kbGVQcmltYXJ5S2V5Q2hhbmdlIiwiX2lzTnVsbCIsImV4aXN0cyIsImNyZWF0ZSIsInVwZGF0ZSIsImhhc0ZpbGVzIiwidG9Kc29uIiwidG9Gb3JtRGF0YSIsInBvc3QiLCJkZWxldGUiLCJfbWFwIiwiY29uc3RydWN0b3IiLCJpZCIsImZvcm0iLCJhcHBlbmQiLCJpdGVtIiwiX3BpY2tCeSIsImxlbmd0aCIsIk9iamVjdCIsIkZ1bmN0aW9uIiwibW9kZWwiLCJzYXZlIiwib25TdWJtaXRTdWNjZXNzIiwib25TdWJtaXRGYWlsZWQiLCJyZWRpcmVjdCIsIl9pc0Z1bmN0aW9uIiwibG9jYXRpb24iLCJ1dWlkIiwiciIsIk1hdGgiLCJyYW5kb20iLCJ2IiwiYyIsInNwbGljZSIsInByZXZlbnREZWZhdWx0IiwiUHJveHkiLCJocmVmIiwidG9Mb3dlckNhc2UiLCJBcnJheSIsImJpbmRpbmciLCJ2bm9kZSIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsIngiLCJ5Iiwib2Zmc2V0RWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzcGxpdCIsImFsaWduIiwid2lkdGgiLCJzdHlsZSIsInRyYW5zZm9ybSIsImlzRHJvcGRvd25TaG93aW5nIiwiaGlkZURyb3Bkb3duIiwiY29udGFpbnMiLCJyZWxhdGVkVGFyZ2V0IiwiY2hpbGQiLCJwaWNrQnkiLCJuZWdhdGUiLCJDT0xPUlMiLCJfZWFjaCIsImNvbG9yIiwibmFtZXNwYWNlIiwiaW5zdGFuY2UiLCJ0ZXh0Q29sb3IiLCJ0cmltIiwiYmdDb2xvciIsImJnR3JhZGllbnRDb2xvciIsInRleHRDb2xvckNsYXNzZXMiLCJiZ0NvbG9yQ2xhc3NlcyIsImJnR3JhZGllbnRDb2xvckNsYXNzZXMiLCJfb21pdEJ5IiwiZXZlbnRzIiwiYmluZEV2ZW50cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYXAiLCJnZXRGaWVsZEVycm9ycyIsImZlZWRiYWNrIiwiZGVmYXVsdENvbnRyb2xDbGFzcyIsInBsYWludGV4dCIsImNvbnRyb2xDbGFzcyIsImNvbnRyb2xTaXplQ2xhc3MiLCJzcGFjaW5nIiwiaW52YWxpZEZlZWRiYWNrIiwiQ29sb3JhYmxlIiwiRm9ybUNvbnRyb2wiLCJSYWRpb0ZpZWxkIiwiY2hlY2tlZCIsImluZGV4IiwicHVzaCIsIklucHV0RmllbGQiLCJyZWFkRmlsZSIsImZpbGUiLCJwcm9ncmVzcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJlIiwib25lcnJvciIsIm9uYWJvcnQiLCJvbnByb2dyZXNzIiwibGVuZ3RoQ29tcHV0YWJsZSIsInBhcnNlSW50IiwibG9hZGVkIiwicmVhZEFzRGF0YVVSTCIsImhlaWdodCIsIl9pc051bWJlciIsInN0cmlwZWQiLCJwb3AiLCJieXRlc1RvU2l6ZSIsImltYWdlTWltZXMiLCJsYXN0TW9kaWZpZWQiLCJsYXN0TW9kaWZpZWREYXRlIiwic3RhcnQiLCJpbWFnZSIsInRhcmdldCIsInJlc3VsdCIsImRpZmYiLCJieXRlcyIsInNpemVzIiwiaSIsImZsb29yIiwibG9nIiwicm91bmQiLCJwb3ciLCJzck9ubHkiLCJzck9ubHlGb2N1c2FibGUiLCJTY3JlZW5yZWFkZXJzIiwic2NyZWVucmVhZGVyQ2xhc3NlcyIsImNvbG9yYWJsZUNsYXNzZXMiLCJvblZhbHVlIiwiZHJhZ2dpbmciLCJpc0FjdGl2ZSIsImR1cmF0aW9uIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwibnVtZXJpYyIsIm9mZlZhbHVlIiwiZ2V0VHJhbnNpdGlvbkluTWlsbGlzZWNvbmRzIiwiaXNEaXNhYmxlZCIsImJhZGdlIiwicHJldlZhbHVlIiwiYWN0aXZlIiwiZmx1c2giLCIkY2hpbGRyZW4iLCIkb2ZmIiwib25DbGlja0NoaWxkIiwiJG9uIiwib25BY3RpdmF0ZSIsIm9uRGVhY3RpdmF0ZSIsImFjdGl2YXRlYWJsZSIsInRvZ2dsZSIsIm11bHRpcGxlIiwiYWN0aXZlSXRlbSIsImRlYWN0aXZhdGUiLCJiaW5kRXZlbnRzVG9DaGlsZHJlbiIsImZvY3VzIiwiJG1vdW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsImhpZGUiLCJ2aXNpYmxlIiwicGFnaW5hdGUiLCJjdXJyZW50UGFnZSIsInRvdGFsUGFnZXMiLCJwYWdlIiwiY3VycmVudFRhcmdldCIsInBhcmVudE5vZGUiLCJzZXRBY3RpdmVQYWdlIiwib25QYWdpbmF0ZSIsInBhZ2VzIiwic2hvd1BhZ2VzIiwic3RhcnRQYWdlIiwic3RhcnRPZmZzZXQiLCJlbmRQYWdlIiwiZ2VuZXJhdGUiLCJDVVNUT01fU0VMRUNUX1BSRUZJWCIsImN1c3RvbSIsImN1c3RvbVNlbGVjdFNpemVDbGFzcyIsIlRyYW5zZm9ybWVyIiwiJG9yaWdpbmFsUmVzcG9uc2UiLCIkcmVxdWlyZWQiLCJyZXF1aXJlZCIsIiR0cmFuc2Zvcm1lZFJlc3BvbnNlIiwidmFsaWRhdGUiLCJUYWJsZVZpZXdUcmFuc2Zvcm1lciIsImNvbHVtbnMiLCJjb2x1bW4iLCJvcmRlciIsImRlZmF1bHRTb3J0IiwiY3VycmVudFNvcnQiLCJnZXRSZXF1ZXN0UGFyYW0iLCJjdXJyZW50T3JkZXIiLCJhZGRSZXF1ZXN0UGFyYW0iLCJmZXRjaCIsImxvYWRpbmciLCJ0cmFuc2Zvcm1lciIsIm1pbiIsImVsZW1lbnRzIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwibWF4IiwiJGF0dHJzIiwibGltaXQiLCJzb3J0IiwicGFyZW50IiwibGFzdCIsImFycmF5UHJvdG8iLCJiYXNlVW5zZXQiLCJiYXNlUHVsbEF0IiwibWF4VXBsb2FkcyIsIl9maW5kSW5kZXgiLCJhZGRGaWxlIiwiaXNEcmFnZ2luZ0luc2lkZSIsImFkZEZpbGVzIiwiZGF0YVRyYW5zZmVyIiwiUmVzcG9uc2VUcmFuc2Zvcm1lciJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFO0VBQ3ZCLElBQUksSUFBSSxHQUFHLE9BQU8sS0FBSyxDQUFDO0VBQ3hCLE9BQU8sS0FBSyxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksUUFBUSxJQUFJLElBQUksSUFBSSxVQUFVLENBQUMsQ0FBQztDQUNsRTs7QUFFRCxjQUFjLEdBQUcsUUFBUTs7QUM5QnpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQSxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDOztBQUU1QixhQUFjLEdBQUcsT0FBTzs7Ozs7Ozs7Ozs7O0FDeEJ4QixJQUFJLFVBQVUsR0FBRyxPQUFPQSxjQUFNLElBQUksUUFBUSxJQUFJQSxjQUFNLElBQUlBLGNBQU0sQ0FBQyxNQUFNLEtBQUssTUFBTSxJQUFJQSxjQUFNLENBQUM7O0FBRTNGLGVBQWMsR0FBRyxVQUFVOztBQ0EzQixJQUFJ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RUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRztFQUM3RSxNQUFNLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUc7RUFDN0UsTUFBTSxFQUFFLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUc7RUFDbkQsTUFBTSxFQUFFLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUc7RUFDbkQsTUFBTSxFQUFFLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHO0VBQ3RDLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUk7RUFDMUIsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSTtFQUMxQixNQUFNLEVBQUUsSUFBSTs7RUFFWixRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7RUFDNUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzVDLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzNELFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzNELFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzNELFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7RUFDMUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztFQUMxRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztFQUMzRCxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztFQUMzRCxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztFQUMzRCxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7RUFDMUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRztFQUM3QixRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7RUFDNUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztFQUMxRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzNELFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzNELFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztFQUM1QyxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7RUFDNUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzVDLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztFQUM1QyxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztFQUMzRCxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztFQUMzRCxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7RUFDNUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0VBQzVDLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztFQUN6RixRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUs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
