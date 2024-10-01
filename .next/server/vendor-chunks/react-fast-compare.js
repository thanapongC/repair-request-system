/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-fast-compare";
exports.ids = ["vendor-chunks/react-fast-compare"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-fast-compare/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-fast-compare/index.js ***!
  \**************************************************/
/***/ ((module) => {

eval("/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */\n\nvar hasElementType = typeof Element !== 'undefined';\nvar hasMap = typeof Map === 'function';\nvar hasSet = typeof Set === 'function';\nvar hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;\n\n// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js\n\nfunction equal(a, b) {\n  // START: fast-deep-equal es6/index.js 3.1.3\n  if (a === b) return true;\n\n  if (a && b && typeof a == 'object' && typeof b == 'object') {\n    if (a.constructor !== b.constructor) return false;\n\n    var length, i, keys;\n    if (Array.isArray(a)) {\n      length = a.length;\n      if (length != b.length) return false;\n      for (i = length; i-- !== 0;)\n        if (!equal(a[i], b[i])) return false;\n      return true;\n    }\n\n    // START: Modifications:\n    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code\n    //    to co-exist with es5.\n    // 2. Replace `for of` with es5 compliant iteration using `for`.\n    //    Basically, take:\n    //\n    //    ```js\n    //    for (i of a.entries())\n    //      if (!b.has(i[0])) return false;\n    //    ```\n    //\n    //    ... and convert to:\n    //\n    //    ```js\n    //    it = a.entries();\n    //    while (!(i = it.next()).done)\n    //      if (!b.has(i.value[0])) return false;\n    //    ```\n    //\n    //    **Note**: `i` access switches to `i.value`.\n    var it;\n    if (hasMap && (a instanceof Map) && (b instanceof Map)) {\n      if (a.size !== b.size) return false;\n      it = a.entries();\n      while (!(i = it.next()).done)\n        if (!b.has(i.value[0])) return false;\n      it = a.entries();\n      while (!(i = it.next()).done)\n        if (!equal(i.value[1], b.get(i.value[0]))) return false;\n      return true;\n    }\n\n    if (hasSet && (a instanceof Set) && (b instanceof Set)) {\n      if (a.size !== b.size) return false;\n      it = a.entries();\n      while (!(i = it.next()).done)\n        if (!b.has(i.value[0])) return false;\n      return true;\n    }\n    // END: Modifications\n\n    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {\n      length = a.length;\n      if (length != b.length) return false;\n      for (i = length; i-- !== 0;)\n        if (a[i] !== b[i]) return false;\n      return true;\n    }\n\n    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;\n    // START: Modifications:\n    // Apply guards for `Object.create(null)` handling. See:\n    // - https://github.com/FormidableLabs/react-fast-compare/issues/64\n    // - https://github.com/epoberezkin/fast-deep-equal/issues/49\n    if (a.valueOf !== Object.prototype.valueOf && typeof a.valueOf === 'function' && typeof b.valueOf === 'function') return a.valueOf() === b.valueOf();\n    if (a.toString !== Object.prototype.toString && typeof a.toString === 'function' && typeof b.toString === 'function') return a.toString() === b.toString();\n    // END: Modifications\n\n    keys = Object.keys(a);\n    length = keys.length;\n    if (length !== Object.keys(b).length) return false;\n\n    for (i = length; i-- !== 0;)\n      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;\n    // END: fast-deep-equal\n\n    // START: react-fast-compare\n    // custom handling for DOM elements\n    if (hasElementType && a instanceof Element) return false;\n\n    // custom handling for React/Preact\n    for (i = length; i-- !== 0;) {\n      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {\n        // React-specific: avoid traversing React elements' _owner\n        // Preact-specific: avoid traversing Preact elements' __v and __o\n        //    __v = $_original / $_vnode\n        //    __o = $_owner\n        // These properties contain circular references and are not needed when\n        // comparing the actual elements (and not their owners)\n        // .$$typeof and ._store on just reasonable markers of elements\n\n        continue;\n      }\n\n      // all other properties should be traversed as usual\n      if (!equal(a[keys[i]], b[keys[i]])) return false;\n    }\n    // END: react-fast-compare\n\n    // START: fast-deep-equal\n    return true;\n  }\n\n  return a !== a && b !== b;\n}\n// end fast-deep-equal\n\nmodule.exports = function isEqual(a, b) {\n  try {\n    return equal(a, b);\n  } catch (error) {\n    if (((error.message || '').match(/stack|recursion/i))) {\n      // warn on circular references, don't crash\n      // browsers give this different errors name and messages:\n      // chrome/safari: \"RangeError\", \"Maximum call stack size exceeded\"\n      // firefox: \"InternalError\", too much recursion\"\n      // edge: \"Error\", \"Out of stack space\"\n      console.warn('react-fast-compare cannot handle circular refs');\n      return false;\n    }\n    // some other error. we should definitely know about these\n    throw error;\n  }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtZmFzdC1jb21wYXJlL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFVBQVU7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixVQUFVO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLFVBQVU7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVwYWlyLW5vdGlmaWNhdGlvbi1zeXN0ZW0vLi9ub2RlX21vZHVsZXMvcmVhY3QtZmFzdC1jb21wYXJlL2luZGV4LmpzP2UxNWEiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIE1hcDpyZWFkb25seSwgU2V0OnJlYWRvbmx5LCBBcnJheUJ1ZmZlcjpyZWFkb25seSAqL1xuXG52YXIgaGFzRWxlbWVudFR5cGUgPSB0eXBlb2YgRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCc7XG52YXIgaGFzTWFwID0gdHlwZW9mIE1hcCA9PT0gJ2Z1bmN0aW9uJztcbnZhciBoYXNTZXQgPSB0eXBlb2YgU2V0ID09PSAnZnVuY3Rpb24nO1xudmFyIGhhc0FycmF5QnVmZmVyID0gdHlwZW9mIEFycmF5QnVmZmVyID09PSAnZnVuY3Rpb24nICYmICEhQXJyYXlCdWZmZXIuaXNWaWV3O1xuXG4vLyBOb3RlOiBXZSAqKmRvbid0KiogbmVlZCBgZW52SGFzQmlnSW50NjRBcnJheWAgaW4gZmRlIGVzNi9pbmRleC5qc1xuXG5mdW5jdGlvbiBlcXVhbChhLCBiKSB7XG4gIC8vIFNUQVJUOiBmYXN0LWRlZXAtZXF1YWwgZXM2L2luZGV4LmpzIDMuMS4zXG4gIGlmIChhID09PSBiKSByZXR1cm4gdHJ1ZTtcblxuICBpZiAoYSAmJiBiICYmIHR5cGVvZiBhID09ICdvYmplY3QnICYmIHR5cGVvZiBiID09ICdvYmplY3QnKSB7XG4gICAgaWYgKGEuY29uc3RydWN0b3IgIT09IGIuY29uc3RydWN0b3IpIHJldHVybiBmYWxzZTtcblxuICAgIHZhciBsZW5ndGgsIGksIGtleXM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgIGxlbmd0aCA9IGEubGVuZ3RoO1xuICAgICAgaWYgKGxlbmd0aCAhPSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgICBpZiAoIWVxdWFsKGFbaV0sIGJbaV0pKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBTVEFSVDogTW9kaWZpY2F0aW9uczpcbiAgICAvLyAxLiBFeHRyYSBgaGFzPFR5cGU+ICYmYCBoZWxwZXJzIGluIGluaXRpYWwgY29uZGl0aW9uIGFsbG93IGVzNiBjb2RlXG4gICAgLy8gICAgdG8gY28tZXhpc3Qgd2l0aCBlczUuXG4gICAgLy8gMi4gUmVwbGFjZSBgZm9yIG9mYCB3aXRoIGVzNSBjb21wbGlhbnQgaXRlcmF0aW9uIHVzaW5nIGBmb3JgLlxuICAgIC8vICAgIEJhc2ljYWxseSwgdGFrZTpcbiAgICAvL1xuICAgIC8vICAgIGBgYGpzXG4gICAgLy8gICAgZm9yIChpIG9mIGEuZW50cmllcygpKVxuICAgIC8vICAgICAgaWYgKCFiLmhhcyhpWzBdKSkgcmV0dXJuIGZhbHNlO1xuICAgIC8vICAgIGBgYFxuICAgIC8vXG4gICAgLy8gICAgLi4uIGFuZCBjb252ZXJ0IHRvOlxuICAgIC8vXG4gICAgLy8gICAgYGBganNcbiAgICAvLyAgICBpdCA9IGEuZW50cmllcygpO1xuICAgIC8vICAgIHdoaWxlICghKGkgPSBpdC5uZXh0KCkpLmRvbmUpXG4gICAgLy8gICAgICBpZiAoIWIuaGFzKGkudmFsdWVbMF0pKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gICAgYGBgXG4gICAgLy9cbiAgICAvLyAgICAqKk5vdGUqKjogYGlgIGFjY2VzcyBzd2l0Y2hlcyB0byBgaS52YWx1ZWAuXG4gICAgdmFyIGl0O1xuICAgIGlmIChoYXNNYXAgJiYgKGEgaW5zdGFuY2VvZiBNYXApICYmIChiIGluc3RhbmNlb2YgTWFwKSkge1xuICAgICAgaWYgKGEuc2l6ZSAhPT0gYi5zaXplKSByZXR1cm4gZmFsc2U7XG4gICAgICBpdCA9IGEuZW50cmllcygpO1xuICAgICAgd2hpbGUgKCEoaSA9IGl0Lm5leHQoKSkuZG9uZSlcbiAgICAgICAgaWYgKCFiLmhhcyhpLnZhbHVlWzBdKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaXQgPSBhLmVudHJpZXMoKTtcbiAgICAgIHdoaWxlICghKGkgPSBpdC5uZXh0KCkpLmRvbmUpXG4gICAgICAgIGlmICghZXF1YWwoaS52YWx1ZVsxXSwgYi5nZXQoaS52YWx1ZVswXSkpKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaGFzU2V0ICYmIChhIGluc3RhbmNlb2YgU2V0KSAmJiAoYiBpbnN0YW5jZW9mIFNldCkpIHtcbiAgICAgIGlmIChhLnNpemUgIT09IGIuc2l6ZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaXQgPSBhLmVudHJpZXMoKTtcbiAgICAgIHdoaWxlICghKGkgPSBpdC5uZXh0KCkpLmRvbmUpXG4gICAgICAgIGlmICghYi5oYXMoaS52YWx1ZVswXSkpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBFTkQ6IE1vZGlmaWNhdGlvbnNcblxuICAgIGlmIChoYXNBcnJheUJ1ZmZlciAmJiBBcnJheUJ1ZmZlci5pc1ZpZXcoYSkgJiYgQXJyYXlCdWZmZXIuaXNWaWV3KGIpKSB7XG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgICAgaWYgKGFbaV0gIT09IGJbaV0pIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChhLmNvbnN0cnVjdG9yID09PSBSZWdFeHApIHJldHVybiBhLnNvdXJjZSA9PT0gYi5zb3VyY2UgJiYgYS5mbGFncyA9PT0gYi5mbGFncztcbiAgICAvLyBTVEFSVDogTW9kaWZpY2F0aW9uczpcbiAgICAvLyBBcHBseSBndWFyZHMgZm9yIGBPYmplY3QuY3JlYXRlKG51bGwpYCBoYW5kbGluZy4gU2VlOlxuICAgIC8vIC0gaHR0cHM6Ly9naXRodWIuY29tL0Zvcm1pZGFibGVMYWJzL3JlYWN0LWZhc3QtY29tcGFyZS9pc3N1ZXMvNjRcbiAgICAvLyAtIGh0dHBzOi8vZ2l0aHViLmNvbS9lcG9iZXJlemtpbi9mYXN0LWRlZXAtZXF1YWwvaXNzdWVzLzQ5XG4gICAgaWYgKGEudmFsdWVPZiAhPT0gT2JqZWN0LnByb3RvdHlwZS52YWx1ZU9mICYmIHR5cGVvZiBhLnZhbHVlT2YgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGIudmFsdWVPZiA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGEudmFsdWVPZigpID09PSBiLnZhbHVlT2YoKTtcbiAgICBpZiAoYS50b1N0cmluZyAhPT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyAmJiB0eXBlb2YgYS50b1N0cmluZyA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYi50b1N0cmluZyA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIGEudG9TdHJpbmcoKSA9PT0gYi50b1N0cmluZygpO1xuICAgIC8vIEVORDogTW9kaWZpY2F0aW9uc1xuXG4gICAga2V5cyA9IE9iamVjdC5rZXlzKGEpO1xuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggIT09IE9iamVjdC5rZXlzKGIpLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KVxuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwga2V5c1tpXSkpIHJldHVybiBmYWxzZTtcbiAgICAvLyBFTkQ6IGZhc3QtZGVlcC1lcXVhbFxuXG4gICAgLy8gU1RBUlQ6IHJlYWN0LWZhc3QtY29tcGFyZVxuICAgIC8vIGN1c3RvbSBoYW5kbGluZyBmb3IgRE9NIGVsZW1lbnRzXG4gICAgaWYgKGhhc0VsZW1lbnRUeXBlICYmIGEgaW5zdGFuY2VvZiBFbGVtZW50KSByZXR1cm4gZmFsc2U7XG5cbiAgICAvLyBjdXN0b20gaGFuZGxpbmcgZm9yIFJlYWN0L1ByZWFjdFxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOykge1xuICAgICAgaWYgKChrZXlzW2ldID09PSAnX293bmVyJyB8fCBrZXlzW2ldID09PSAnX192JyB8fCBrZXlzW2ldID09PSAnX19vJykgJiYgYS4kJHR5cGVvZikge1xuICAgICAgICAvLyBSZWFjdC1zcGVjaWZpYzogYXZvaWQgdHJhdmVyc2luZyBSZWFjdCBlbGVtZW50cycgX293bmVyXG4gICAgICAgIC8vIFByZWFjdC1zcGVjaWZpYzogYXZvaWQgdHJhdmVyc2luZyBQcmVhY3QgZWxlbWVudHMnIF9fdiBhbmQgX19vXG4gICAgICAgIC8vICAgIF9fdiA9ICRfb3JpZ2luYWwgLyAkX3Zub2RlXG4gICAgICAgIC8vICAgIF9fbyA9ICRfb3duZXJcbiAgICAgICAgLy8gVGhlc2UgcHJvcGVydGllcyBjb250YWluIGNpcmN1bGFyIHJlZmVyZW5jZXMgYW5kIGFyZSBub3QgbmVlZGVkIHdoZW5cbiAgICAgICAgLy8gY29tcGFyaW5nIHRoZSBhY3R1YWwgZWxlbWVudHMgKGFuZCBub3QgdGhlaXIgb3duZXJzKVxuICAgICAgICAvLyAuJCR0eXBlb2YgYW5kIC5fc3RvcmUgb24ganVzdCByZWFzb25hYmxlIG1hcmtlcnMgb2YgZWxlbWVudHNcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy8gYWxsIG90aGVyIHByb3BlcnRpZXMgc2hvdWxkIGJlIHRyYXZlcnNlZCBhcyB1c3VhbFxuICAgICAgaWYgKCFlcXVhbChhW2tleXNbaV1dLCBiW2tleXNbaV1dKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBFTkQ6IHJlYWN0LWZhc3QtY29tcGFyZVxuXG4gICAgLy8gU1RBUlQ6IGZhc3QtZGVlcC1lcXVhbFxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIGEgIT09IGEgJiYgYiAhPT0gYjtcbn1cbi8vIGVuZCBmYXN0LWRlZXAtZXF1YWxcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0VxdWFsKGEsIGIpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZXF1YWwoYSwgYik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKCgoZXJyb3IubWVzc2FnZSB8fCAnJykubWF0Y2goL3N0YWNrfHJlY3Vyc2lvbi9pKSkpIHtcbiAgICAgIC8vIHdhcm4gb24gY2lyY3VsYXIgcmVmZXJlbmNlcywgZG9uJ3QgY3Jhc2hcbiAgICAgIC8vIGJyb3dzZXJzIGdpdmUgdGhpcyBkaWZmZXJlbnQgZXJyb3JzIG5hbWUgYW5kIG1lc3NhZ2VzOlxuICAgICAgLy8gY2hyb21lL3NhZmFyaTogXCJSYW5nZUVycm9yXCIsIFwiTWF4aW11bSBjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIlxuICAgICAgLy8gZmlyZWZveDogXCJJbnRlcm5hbEVycm9yXCIsIHRvbyBtdWNoIHJlY3Vyc2lvblwiXG4gICAgICAvLyBlZGdlOiBcIkVycm9yXCIsIFwiT3V0IG9mIHN0YWNrIHNwYWNlXCJcbiAgICAgIGNvbnNvbGUud2FybigncmVhY3QtZmFzdC1jb21wYXJlIGNhbm5vdCBoYW5kbGUgY2lyY3VsYXIgcmVmcycpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICAvLyBzb21lIG90aGVyIGVycm9yLiB3ZSBzaG91bGQgZGVmaW5pdGVseSBrbm93IGFib3V0IHRoZXNlXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-fast-compare/index.js\n");

/***/ })

};
;