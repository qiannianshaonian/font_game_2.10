/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(19);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);

if (!window.navigator) window.navigator = {};
window.navigator.userAgent = 'Mozilla/5.0 (Linux; Android 5.1.1; Nexus 6 Build/LYZ28E) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 VVGame NetType/WIFI Language/zh_CN';

__webpack_require__(3);

if (window.requirePlugin) {
  requirePlugin("laya-library/laya.core.min.js");
  requirePlugin("laya-library/laya.ani.min.js");
  requirePlugin("laya-library/laya.d3.min.js");
  requirePlugin("laya-library/laya.html.min.js");
  requirePlugin("laya-library/laya.particle.min.js");
  requirePlugin("laya-library/laya.ui.min.js");
  requirePlugin("laya-library/laya.device.min.js");
  requirePlugin("laya-library/laya.physics.min.js");
  requirePlugin("laya-library/laya.tiledmap.min.js");
} else {
  __webpack_require__(4);

  __webpack_require__(5);

  __webpack_require__(6);

  __webpack_require__(7);

  __webpack_require__(8);

  __webpack_require__(9);

  __webpack_require__(10);

  __webpack_require__(11);

  __webpack_require__(12);
}

__webpack_require__(13);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

! function (e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(o, r, function (t) {
                return e[t]
            }.bind(null, r));
        return o
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 15)
}([function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.SYMBOL_NODE = Symbol("Node"), t.SYMBOL_FONTFACESET = Symbol("FontFaceSet"), t.SYMBOL_CHARACTER_DATA = Symbol("CharacterData"), t.SYMBOL_TEXT = Symbol("Text"), t.SYMBOL_DOCUMENT = Symbol("Document"), t.SYMBOL_HTMLDOCUMENT = Symbol("HTMLDocument"), t.SYMBOL_LOCATION = Symbol("location"), t.SYMBOL_LOCALSTORAGE = Symbol("localstorage"), t.SYMBOL_HASINSTANCE = Symbol("hasInstance"), t.SYMBOL_DEVICE_MOTION = Symbol("deviceMotion")
}, function (e, t, n) {
    "use strict";
    var o = this && this.__decorate || function (e, t, n, o) {
        var r, i = arguments.length,
            a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
        else
            for (var c = e.length - 1; c >= 0; c--)(r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a
    };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = new WeakMap,
        i = function (e) {
            return function (t, n) {
                t[n] = e
            }
        },
        a = function () {
            function e(e, t) {
                if (void 0 === t && (t = {
                        bubbles: !1,
                        cancelable: !1,
                        composed: !1
                    }), this.$type = "", this.$bubbles = !1, this.$cancelBubble = !1, this.$composed = !1, this.$stopped = !1, this.$currentTarget = null, this.$defaultPrevented = !1, this.$eventPhase = 2, this.$isTrusted = !1, this.$returnValue = !0, this.$target = null, this.$timeStamp = Date.now(), !e) throw new TypeError("Failed to construct 'Event': 1 argument required, but only 0 present.");
                this.$type = e, this.$bubbles = !!t.bubbles, this.$cancelable = !!t.cancelable, this.$composed = !!t.composed, this.srcElement = null, this.path = [], r.set(this, Object.create(null)), this.$passiveListener = null
            }
            return Object.defineProperty(e.prototype, "cancelBubble", {
                get: function () {
                    return this.$cancelBubble
                },
                set: function (e) {
                    this.$cancelBubble = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "returnValue", {
                get: function () {
                    return this.$returnValue
                },
                set: function (e) {
                    this.$returnValue = e
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.composedPath = function () {
                return null === this.$currentTarget ? [] : [this.$currentTarget]
            }, e.prototype.initEvent = function (e, t, n) {
                void 0 === t && (t = !1), void 0 === n && (n = !1), this.$type = e, this.$bubbles = t, this.$cancelable = n
            }, e.prototype.preventDefault = function () {
                null === this.$passiveListener ? this.cancelable && (this.$defaultPrevented = !0) : console.warn("Event#preventDefault() was called from a passive listener:", this.$passiveListener)
            }, e.prototype.stopImmediatePropagation = function () {
                this.$stopped = !0
            }, e.prototype.stopPropagation = function () {}, Object.defineProperty(e.prototype, "type", {
                get: function () {
                    return this.$type
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "target", {
                get: function () {
                    return this.$target
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "currentTarget", {
                get: function () {
                    return this.$currentTarget
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "timeStamp", {
                get: function () {
                    return this.$timeStamp
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "defaultPrevented", {
                get: function () {
                    return this.$defaultPrevented
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "bubbles", {
                get: function () {
                    return this.$bubbles
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "cancelable", {
                get: function () {
                    return this.$cancelable
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "eventPhase", {
                get: function () {
                    return this.$eventPhase
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "composed", {
                get: function () {
                    return this.$composed
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "isTrusted", {
                get: function () {
                    return this.$isTrusted
                },
                enumerable: !0,
                configurable: !0
            }), e.ALT_MASK = 1, e.AT_TARGET = 2, e.BUBBLING_PHASE = 3, e.CAPTURING_PHASE = 1, e.CONTROL_MASK = 2, e.META_MASK = 8, e.NONE = 0, e.SHIFT_MASK = 4, o([i(1)], e.prototype, "ALT_MASK", void 0), o([i(2)], e.prototype, "AT_TARGET", void 0), o([i(3)], e.prototype, "BUBBLING_PHASE", void 0), o([i(1)], e.prototype, "CAPTURING_PHASE", void 0), o([i(2)], e.prototype, "CONTROL_MASK", void 0), o([i(8)], e.prototype, "META_MASK", void 0), o([i(0)], e.prototype, "NONE", void 0), o([i(4)], e.prototype, "SHIFT_MASK", void 0), e
        }();
    t.default = a
}, function (e, t, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function (e, t) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }
            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        i = this && this.__decorate || function (e, t, n, o) {
            var r, i = arguments.length,
                a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
            else
                for (var c = e.length - 1; c >= 0; c--)(r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
            return i > 3 && a && Object.defineProperty(t, n, a), a
        },
        a = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = a(n(3)),
        l = function (e) {
            return function (t, n) {
                t[n] = e
            }
        },
        p = function (e) {
            function t() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                var o = e.call(this) || this;
                return o.$nodeType = 1, o.$nodeValue = "", o.$nodeName = "", o.$parentNode = null, o
            }
            return r(t, e), Object.defineProperty(t.prototype, "baseURI", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get baseURI' called on an object that does not implement interface Node.");
                    return ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "childNodes", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get childNodes' called on an object that does not implement interface Node.");
                    return []
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "firstChild", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get firstChild' called on an object that does not implement interface Node.");
                    return null
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isConnected", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get isConnected' called on an object that does not implement interface Node.")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "lastChild", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get lastChild' called on an object that does not implement interface Node.");
                    return null
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "nextSibling", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get nextSibling' called on an object that does not implement interface Node.");
                    if (!this.parentNode) return null;
                    for (var e = this.parentNode.children.length, n = !1, o = this.parentNode.children, r = 0; r < e; r++) {
                        var i = o[r];
                        if (n) return i;
                        i === this && (n = !0)
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "nodeName", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get nodeName' called on an object that does not implement interface Node.");
                    return this.$nodeName
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "nodeType", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get nodeType' called on an object that does not implement interface Node.");
                    return this.$nodeType
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "nodeValue", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get nodeValue' called on an object that does not implement interface Node.");
                    return this.$nodeValue
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "ownerDocument", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get ownerDocument' called on an object that does not implement interface Node.")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "parentElement", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get parentElement' called on an object that does not implement interface Node.");
                    return null === this.parentNode ? null : 1 === this.parentNode.nodeType ? this.parentNode : void 0
                },
                set: function (e) {
                    this.$parentNode = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "parentNode", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get parentNode' called on an object that does not implement interface Node.");
                    return this.$parentNode
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "previousSibling", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get previousSibling' called on an object that does not implement interface Node.")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "textContent", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get textContent' called on an object that does not implement interface Node.")
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.appendChild = function () {
                if (!(this instanceof t)) throw new TypeError("'appendChild' called on an object that does not implement interface Node.")
            }, t.prototype.cloneNode = function (e) {
                if (!(this instanceof t)) throw new TypeError("'cloneNode' called on an object that does not implement interface Node.")
            }, t.prototype.compareDocumentPosition = function (e) {
                if (!(this instanceof t)) throw new TypeError("'compareDocumentPosition' called on an object that does not implement interface Node.")
            }, t.prototype.contains = function (e) {
                if (!(this instanceof t)) throw new TypeError("'contains' called on an object that does not implement interface Node.")
            }, t.prototype.getRootNode = function (e) {
                if (!(this instanceof t)) throw new TypeError("'getRootNode' called on an object that does not implement interface Node.")
            }, t.prototype.hasChildNodes = function () {
                if (!(this instanceof t)) throw new TypeError("'hasChildNodes' called on an object that does not implement interface Node.")
            }, t.prototype.insertBefore = function () {
                if (!(this instanceof t)) throw new TypeError("'insertBefore' called on an object that does not implement interface Node.")
            }, t.prototype.isDefaultNamespace = function (e) {
                if (!(this instanceof t)) throw new TypeError("'isDefaultNamespace' called on an object that does not implement interface Node.")
            }, t.prototype.isEqualNode = function (e) {
                if (!(this instanceof t)) throw new TypeError("'isEqualNode' called on an object that does not implement interface Node.")
            }, t.prototype.isSameNode = function (e) {
                if (!(this instanceof t)) throw new TypeError("'isSameNode' called on an object that does not implement interface Node.")
            }, t.prototype.lookupNamespaceURI = function (e) {
                if (!(this instanceof t)) throw new TypeError("'lookupNamespaceURI' called on an object that does not implement interface Node.")
            }, t.prototype.lookupPrefix = function (e) {
                if (!(this instanceof t)) throw new TypeError("'lookupPrefix' called on an object that does not implement interface Node.")
            }, t.prototype.normalize = function () {
                if (!(this instanceof t)) throw new TypeError("'normalize' called on an object that does not implement interface Node.")
            }, t.prototype.removeChild = function () {
                if (!(this instanceof t)) throw new TypeError("'removeChild' called on an object that does not implement interface Node.")
            }, t.prototype.replaceChild = function () {
                if (!(this instanceof t)) throw new TypeError("'replaceChild' called on an object that does not implement interface Node.")
            }, t.prototype.setAttribute = function (e, t) {
                this[e] = t
            }, t.prototype.getAttribute = function (e) {
                return this[e]
            }, t.ATTRIBUTE_NODE = 2, t.CDATA_SECTION_NODE = 4, t.COMMENT_NODE = 8, t.DOCUMENT_FRAGMENT_NODE = 11, t.DOCUMENT_NODE = 9, t.DOCUMENT_POSITION_CONTAINED_BY = 16, t.DOCUMENT_POSITION_CONTAINS = 8, t.DOCUMENT_POSITION_DISCONNECTED = 1, t.DOCUMENT_POSITION_FOLLOWING = 4, t.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC = 32, t.DOCUMENT_POSITION_PRECEDING = 2, t.DOCUMENT_TYPE_NODE = 10, t.ELEMENT_NODE = 1, t.ENTITY_NODE = 6, t.ENTITY_REFERENCE_NODE = 5, t.NOTATION_NODE = 12, t.PROCESSING_INSTRUCTION_NODE = 7, t.TEXT_NODE = 3, i([l(2)], t.prototype, "ATTRIBUTE_NODE", void 0), i([l(4)], t.prototype, "CDATA_SECTION_NODE", void 0), i([l(8)], t.prototype, "COMMENT_NODE", void 0), i([l(11)], t.prototype, "DOCUMENT_FRAGMENT_NODE", void 0), i([l(9)], t.prototype, "DOCUMENT_NODE", void 0), i([l(16)], t.prototype, "DOCUMENT_POSITION_CONTAINED_BY", void 0), i([l(8)], t.prototype, "DOCUMENT_POSITION_CONTAINS", void 0), i([l(1)], t.prototype, "DOCUMENT_POSITION_DISCONNECTED", void 0), i([l(4)], t.prototype, "DOCUMENT_POSITION_FOLLOWING", void 0), i([l(32)], t.prototype, "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC", void 0), i([l(2)], t.prototype, "DOCUMENT_POSITION_PRECEDING", void 0), i([l(10)], t.prototype, "DOCUMENT_TYPE_NODE", void 0), i([l(1)], t.prototype, "ELEMENT_NODE", void 0), i([l(6)], t.prototype, "ENTITY_NODE", void 0), i([l(5)], t.prototype, "ENTITY_REFERENCE_NODE", void 0), i([l(12)], t.prototype, "NOTATION_NODE", void 0), i([l(7)], t.prototype, "PROCESSING_INSTRUCTION_NODE", void 0), i([l(3)], t.prototype, "TEXT_NODE", void 0), t
        }(c.default);
    t.default = p
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = new WeakMap,
        r = function () {
            function e() {
                o.set(this, Object.create(null))
            }
            return e.prototype.addEventListener = function (e, t, n) {
                if (!e) throw new TypeError("Failed to execute 'addEventListener' on 'EventTarget': 2 arguments required, but only 0 present.");
                if (!t) throw new TypeError("Failed to execute 'addEventListener' on 'EventTarget': 2 arguments required, but only 1 present.");
                if (!(t instanceof Object)) throw new TypeError("Failed to execute 'addEventListener' on 'EventTarget': The callback provided as parameter 2 is not an object.");
                var r = o.get(this);
                r[e] || (r[e] = []);
                for (var i = r[e], a = 0, c = i; a < c.length; a++) {
                    if (c[a] === t) return
                }
                i.push({
                    target: this,
                    listener: t,
                    options: n
                }), n && (n.capture && console.warn("EventTarget.addEventListener: options.capture is not implemented."), n.passive && console.warn("EventTarget.addEventListener: options.passive is not implemented."))
            }, e.prototype.removeEventListener = function (e, t, n) {
                if (!e) throw new TypeError("Failed to execute 'removeEventListener' on 'EventTarget': 2 arguments required, but only 0 present.");
                if (!t) throw new TypeError("Failed to execute 'removeEventListener' on 'EventTarget': 2 arguments required, but only 1 present.");
                if (!(t instanceof Object)) throw new TypeError("Failed to execute 'removeEventListener' on 'EventTarget': The callback provided as parameter 2 is not an object.");
                var r = o.get(this);
                r[e] || (r[e] = []);
                var i = r[e];
                n && console.warn("EventTarget.removeEventListener: options.capture or useCapture is not implemented.");
                for (var a = 0, c = i.length; a < c; a++)
                    if (t === i[a]) return void i.splice(a, 1)
            }, e.prototype.dispatchEvent = function (e) {
                if (!e) throw new TypeError("Failed to execute 'dispatchEvent' on 'EventTarget': 1 argument required, but only 0 present.");
                if (!(e instanceof Event)) throw new TypeError("Failed to execute 'dispatchEvent' on 'EventTarget': parameter 1 is not of type 'Event'.");
                var t = o.get(this)[e.type];
                if (t) {
                    Object.defineProperty(e, "target", {
                        configurable: !0,
                        writable: !0,
                        value: this
                    }), Object.defineProperty(e, "currentTarget", {
                        configurable: !0,
                        writable: !0,
                        value: this
                    });
                    for (var n = 0, r = t.length; n < r; n++) {
                        var i = t[n],
                            a = i.options;
                        a && a.once && i.target.removeEventListener(e.type, i.listener), "function" == typeof i.listener ? i.listener.call(i.target, e) : i.listener.handleEvent(e)
                    }
                    e.$currentTarget = null, e.$target = null
                }
                return !0
            }, e
        }();
    t.default = r
}, function (e, t, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function (e, t) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }
            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function (e) {
        function t() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            var o = e.apply(this, t) || this;
            return o.$accessKey = "", o.$accessKeyLabel = "", o.$dataset = {}, o.$dir = "", o.$draggable = !1, o.$hidden = !1, o.$innerText = "", o.$lang = "", o.$offsetHeight = 0, o.$offsetLeft = 0, o.$offsetTop = 0, o.$offsetWidth = 0, o.$style = {}, o.$tabIndex = 0, o.$title = "", t.length && "string" == typeof t[0] && (o.$tagName = t[0]), o
        }
        return r(t, e), t.prototype.blur = function () {
            if (!(this instanceof t)) throw new TypeError("'blur' called on an object that does not implement interface HTMLElement.")
        }, t.prototype.click = function () {
            if (!(this instanceof t)) throw new TypeError("'click' called on an object that does not implement interface HTMLElement.")
        }, t.prototype.focus = function () {
            if (!(this instanceof t)) throw new TypeError("'focus' called on an object that does not implement interface HTMLElement.")
        }, Object.defineProperty(t.prototype, "accessKey", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get accessKey' called on an object that does not implement interface HTMLElement.");
                return this.$accessKey
            },
            set: function (e) {
                this.$accessKey = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "accessKeyLabel", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get accessKeyLabel' called on an object that does not implement interface HTMLElement.");
                return this.$accessKeyLabel
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "dataset", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get dataset' called on an object that does not implement interface HTMLElement.");
                return this.$dataset
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "dir", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get dir' called on an object that does not implement interface HTMLElement.");
                return this.$dir
            },
            set: function (e) {
                this.$dir = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "draggable", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get draggable' called on an object that does not implement interface HTMLElement.");
                return this.$draggable
            },
            set: function (e) {
                this.$draggable = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "hidden", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get hidden' called on an object that does not implement interface HTMLElement.");
                return this.$hidden
            },
            set: function (e) {
                this.$hidden = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "innerText", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get innerText' called on an object that does not implement interface HTMLElement.");
                return this.$innerText
            },
            set: function (e) {
                this.$innerText = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "lang", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get lang' called on an object that does not implement interface HTMLElement.");
                return this.$lang
            },
            set: function (e) {
                this.$lang = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "offsetHeight", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get offsetHeight' called on an object that does not implement interface HTMLElement.");
                return this.$offsetHeight
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "offsetLeft", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get offsetLeft' called on an object that does not implement interface HTMLElement.");
                return this.$offsetLeft
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "offsetTop", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get offsetTop' called on an object that does not implement interface HTMLElement.");
                return this.$offsetTop
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "offsetWidth", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get offsetWidth' called on an object that does not implement interface HTMLElement.");
                return this.$offsetWidth
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onabort", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onabort' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onanimationcancel", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onanimationcancel' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onanimationend", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onanimationend' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onanimationiteration", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onanimationiteration' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onanimationstart", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onanimationstart' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onauxclick", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onauxclick' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onblur", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onblur' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "oncanplay", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get oncanplay' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "oncanplaythrough", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get oncanplaythrough' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onchange", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onchange' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onclick", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onclick' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onclose", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onclose' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "oncontextmenu", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get oncontextmenu' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "oncopy", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get oncopy' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "oncuechange", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get oncuechange' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "oncut", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get oncut' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ondblclick", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get ondblclick' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ondrag", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get ondrag' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ondragend", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get ondragend' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ondragenter", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get ondragenter' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ondragexit", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get ondragexit' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ondragleave", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get ondragleave' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ondragover", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get ondragover' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ondragstart", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get ondragstart' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ondrop", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get ondrop' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ondurationchange", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get ondurationchange' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onemptied", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onemptied' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onended", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onended' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onerror", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onerror' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onfocus", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onfocus' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ongotpointercapture", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get ongotpointercapture' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "oninput", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get oninput' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "oninvalid", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get oninvalid' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onkeydown", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onkeydown' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onkeypress", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onkeypress' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onkeyup", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onkeyup' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onload", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onload' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onloadeddata", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onloadeddata' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onloadedmetadata", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onloadedmetadata' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onloadend", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onloadend' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onloadstart", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onloadstart' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onlostpointercapture", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onlostpointercapture' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onmousedown", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onmousedown' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onmouseenter", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onmouseenter' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onmouseleave", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onmouseleave' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onmousemove", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onmousemove' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onmouseout", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onmouseout' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onmouseover", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onmouseover' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onmouseup", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onmouseup' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onmozfullscreenchange", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onmozfullscreenchange' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onmozfullscreenerror", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onmozfullscreenerror' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onpaste", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onpaste' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onpause", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onpause' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onplay", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onplay' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onplaying", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onplaying' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onpointercancel", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onpointercancel' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onpointerdown", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onpointerdown' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onpointerenter", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onpointerenter' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onpointerleave", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onpointerleave' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onpointermove", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onpointermove' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onpointerout", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onpointerout' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onpointerover", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onpointerover' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onpointerup", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onpointerup' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onprogress", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onprogress' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onratechange", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onratechange' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onreset", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onreset' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onresize", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onresize' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onscroll", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onscroll' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onseeked", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onseeked' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onseeking", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onseeking' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onselect", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onselect' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onselectstart", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onselectstart' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onshow", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onshow' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onstalled", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onstalled' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onsubmit", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onsubmit' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onsuspend", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onsuspend' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ontimeupdate", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get ontimeupdate' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ontoggle", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get ontoggle' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ontransitioncancel", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get ontransitioncancel' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ontransitionend", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get ontransitionend' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ontransitionrun", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get ontransitionrun' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ontransitionstart", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get ontransitionstart' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onvolumechange", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onvolumechange' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onwaiting", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onwaiting' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onwebkitanimationend", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onwebkitanimationend' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onwebkitanimationiteration", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onwebkitanimationiteration' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onwebkitanimationstart", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onwebkitanimationstart' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onwebkittransitionend", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onwebkittransitionend' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "onwheel", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get onwheel' called on an object that does not implement interface HTMLElement.")
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "style", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get style' called on an object that does not implement interface HTMLElement.");
                return this.$style
            },
            set: function (e) {
                this.$style = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "tabIndex", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get tabIndex' called on an object that does not implement interface HTMLElement.");
                return this.$tabIndex
            },
            set: function (e) {
                this.$tabIndex = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "title", {
            get: function () {
                if (!(this instanceof t)) throw new TypeError("'get title' called on an object that does not implement interface HTMLElement.");
                return this.$title
            },
            set: function (e) {
                this.$title = e
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(i(n(7)).default);
    t.default = a
}, function (e, t, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function (e, t) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }
            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        i = this && this.__decorate || function (e, t, n, o) {
            var r, i = arguments.length,
                a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
            else
                for (var c = e.length - 1; c >= 0; c--)(r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
            return i > 3 && a && Object.defineProperty(t, n, a), a
        },
        a = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = a(n(4)),
        l = function (e) {
            return function (t, n) {
                t[n] = e
            }
        },
        p = function (e) {
            function t() {
                for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
                var r = e.apply(this, n) || this;
                return r.$volume = 1, r.$duration = 0, r.$ended = !1, r.$muted = !1, r.$readyState = t.HAVE_NOTHING, r.$error = null, r.$paused = !1, r.$currentTime = 0, r.$playbackRate = 1, r
            }
            return r(t, e), t.prototype.addTextTrack = function () {
                if (!(this instanceof t)) throw new TypeError("'addTextTrack' called on an object that does not implement interface HTMLMediaElement.")
            }, t.prototype.canPlayType = function (e) {
                if (!(this instanceof t)) throw new TypeError("'canPlayType' called on an object that does not implement interface HTMLMediaElement.");
                return ""
            }, t.prototype.load = function () {
                if (!(this instanceof t)) throw new TypeError("'load' called on an object that does not implement interface HTMLMediaElement.")
            }, t.prototype.pause = function () {
                if (!(this instanceof t)) throw new TypeError("'pause' called on an object that does not implement interface HTMLMediaElement.")
            }, t.prototype.play = function () {
                if (!(this instanceof t)) throw new TypeError("'play' called on an object that does not implement interface HTMLMediaElement.")
            }, Object.defineProperty(t.prototype, "currentTime", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get currentTime' called on an object that does not implement interface HTMLMediaElement.");
                    return this.$currentTime
                },
                set: function (e) {
                    this.$currentTime = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "duration", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get duration' called on an object that does not implement interface HTMLMediaElement.");
                    return this.$duration
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "ended", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get ended' called on an object that does not implement interface HTMLMediaElement.");
                    return this.$ended
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "error", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get error' called on an object that does not implement interface HTMLMediaElement.");
                    return this.$error
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "muted", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get muted' called on an object that does not implement interface HTMLMediaElement.");
                    return this.$muted
                },
                set: function (e) {
                    this.$muted = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "paused", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get paused' called on an object that does not implement interface HTMLMediaElement.");
                    return this.$paused
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "playbackRate", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get playbackRate' called on an object that does not implement interface HTMLMediaElement.");
                    return this.$playbackRate
                },
                set: function (e) {
                    this.$playbackRate = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "readyState", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get readyState' called on an object that does not implement interface HTMLMediaElement.");
                    return this.$readyState
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "volume", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get volume' called on an object that does not implement interface HTMLMediaElement.");
                    return this.$volume
                },
                set: function (e) {
                    this.$volume = e
                },
                enumerable: !0,
                configurable: !0
            }), t.HAVE_CURRENT_DATA = 2, t.HAVE_ENOUGH_DATA = 4, t.HAVE_FUTURE_DATA = 3, t.HAVE_METADATA = 1, t.HAVE_NOTHING = 0, t.NETWORK_EMPTY = 0, t.NETWORK_IDLE = 1, t.NETWORK_LOADING = 2, t.NETWORK_NO_SOURCE = 3, i([l(2)], t.prototype, "HAVE_CURRENT_DATA", void 0), i([l(4)], t.prototype, "HAVE_ENOUGH_DATA", void 0), i([l(3)], t.prototype, "HAVE_FUTURE_DATA", void 0), i([l(1)], t.prototype, "HAVE_METADATA", void 0), i([l(0)], t.prototype, "HAVE_NOTHING", void 0), i([l(0)], t.prototype, "NETWORK_EMPTY", void 0), i([l(1)], t.prototype, "NETWORK_IDLE", void 0), i([l(2)], t.prototype, "NETWORK_LOADING", void 0), i([l(3)], t.prototype, "NETWORK_NO_SOURCE", void 0), t
        }(c.default);
    t.default = p
}, function (e, t, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function (e, t) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }
            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(n(5)),
        c = n(0),
        l = function (e) {
            function t(t, n) {
                var o = e.call(this, n) || this;
                return o.$muted = !1, o.$volume = 1, o.$innerAudioContext = qg.createInnerAudioContext(), t && "string" == typeof t && (o.src = t), o
            }
            return r(t, e), t.prototype.load = function () {
                console.warn("HTMLAudioElement.load() is not implemented.")
            }, t.prototype.play = function () {
                this.$innerAudioContext.play()
            }, t.prototype.pause = function () {
                this.$innerAudioContext.pause()
            }, t.prototype.destroy = function () {
                this.$muted = !1, this.$volume = 0, this.$innerAudioContext.destroy()
            }, t.prototype.canPlayType = function (e) {
                return void 0 === e && (e = ""), "string" != typeof e ? "" : e.indexOf("audio/mpeg") > -1 || e.indexOf("audio/mp4") ? "probably" : ""
            }, t.prototype.cloneNode = function () {
                var e = new t(this.$innerAudioContext.src, c.SYMBOL_NODE);
                return e.autoplay = this.$innerAudioContext.autoplay, e.loop = this.$innerAudioContext.loop, e
            }, Object.defineProperty(t.prototype, "currentTime", {
                get: function () {
                    return this.$innerAudioContext.currentTime
                },
                set: function (e) {
                    this.$innerAudioContext.seek(e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "duration", {
                get: function () {
                    return this.$innerAudioContext.duration
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "src", {
                get: function () {
                    return this.$innerAudioContext.src
                },
                set: function (e) {
                    this.$innerAudioContext.src = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "loop", {
                get: function () {
                    return this.$innerAudioContext.loop
                },
                set: function (e) {
                    this.$innerAudioContext.loop = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "autoplay", {
                get: function () {
                    return this.$innerAudioContext.autoplay
                },
                set: function (e) {
                    this.$innerAudioContext.autoplay = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "paused", {
                get: function () {
                    return this.$innerAudioContext.paused
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "volume", {
                get: function () {
                    return this.$innerAudioContext.volume
                },
                set: function (e) {
                    this.$volume = e, this.$innerAudioContext.volume = this.$volume
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "muted", {
                get: function () {
                    return this.$muted
                },
                set: function (e) {
                    this.$muted = e, this.$innerAudioContext.volume = e ? 0 : this.$volume
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(a.default);
    t.default = l
}, function (e, t, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function (e, t) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }
            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(n(2)),
        c = i(n(20)),
        l = function (e) {
            function t() {
                for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                var o = e.apply(this, t) || this;
                return o.$tagName = "", o.$className = "", o.$children = [], o.$clientLeft = 0, o.$clientTop = 0, o.$scrollLeft = 0, o.$scrollTop = 0, o.$clientWidth = 0, o.$clientHeight = 0, o.$innerHTML = "", o
            }
            return r(t, e), t.prototype.getBoundingClientRect = function () {
                if (!(this instanceof t)) throw new TypeError("'getBoundingClientRect' called on an object that does not implement interface Element.");
                return new c.default(0, 0, window.innerWidth, window.innerHeight)
            }, t.prototype.getClientRects = function () {
                if (!(this instanceof t)) throw new TypeError("'getClientRects' called on an object that does not implement interface Element.");
                return new c.default(0, 0, window.innerWidth, window.innerHeight)
            }, t.prototype.getElementsByClassName = function () {
                if (!(this instanceof t)) throw new TypeError("'getElementsByClassName' called on an object that does not implement interface Element.");
                return console.warn("not support getElementsByClassName"), [mainCanvas]
            }, t.prototype.getElementsByTagName = function () {
                if (!(this instanceof t)) throw new TypeError("'getElementsByTagName' called on an object that does not implement interface Element.");
                return console.warn("not support getElementsByTagName"), [mainCanvas]
            }, t.prototype.getElementsByTagNameNS = function () {
                if (!(this instanceof t)) throw new TypeError("'getElementsByTagNameNS' called on an object that does not implement interface Element.");
                return console.warn("not support getElementsByTagNameNS"), [mainCanvas]
            }, t.prototype.hasAttribute = function () {
                if (!(this instanceof t)) throw new TypeError("'hasAttribute' called on an object that does not implement interface Element.")
            }, t.prototype.hasAttributeNS = function () {
                if (!(this instanceof t)) throw new TypeError("'hasAttributeNS' called on an object that does not implement interface Element.")
            }, t.prototype.hasAttributes = function () {
                if (!(this instanceof t)) throw new TypeError("'hasAttributes' called on an object that does not implement interface Element.")
            }, t.prototype.hasPointerCapture = function () {
                if (!(this instanceof t)) throw new TypeError("'hasPointerCapture' called on an object that does not implement interface Element.")
            }, t.prototype.insertAdjacentElement = function () {
                if (!(this instanceof t)) throw new TypeError("'insertAdjacentElement' called on an object that does not implement interface Element.")
            }, t.prototype.insertAdjacentHTML = function () {
                if (!(this instanceof t)) throw new TypeError("'insertAdjacentHTML' called on an object that does not implement interface Element.")
            }, t.prototype.insertAdjacentText = function () {
                if (!(this instanceof t)) throw new TypeError("'insertAdjacentText' called on an object that does not implement interface Element.")
            }, Object.defineProperty(t.prototype, "children", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get children' called on an object that does not implement interface Element.");
                    return []
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "className", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get className' called on an object that does not implement interface Element.");
                    return this.$className
                },
                set: function (e) {
                    this.$className = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "clientHeight", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get clientHeight' called on an object that does not implement interface Element.");
                    return this.$clientHeight
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "clientLeft", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get clientLeft' called on an object that does not implement interface Element.");
                    return this.$clientLeft
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "clientTop", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get clientTop' called on an object that does not implement interface Element.");
                    return this.$clientTop
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "clientWidth", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get clientWidth' called on an object that does not implement interface Element.");
                    return this.$clientWidth
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "innerHTML", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get innerHTML' called on an object that does not implement interface Element.");
                    return this.$innerHTML
                },
                set: function (e) {
                    this.$innerHTML = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "scrollLeft", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get scrollLeft' called on an object that does not implement interface Element.");
                    return this.$scrollLeft
                },
                set: function (e) {
                    this.$scrollLeft = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "scrollTop", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get scrollTop' called on an object that does not implement interface Element.");
                    return this.$scrollTop
                },
                set: function (e) {
                    this.$scrollTop = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "tagName", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get tagName' called on an object that does not implement interface Element.");
                    return this.$tagName
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(a.default);
    t.default = l
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(0),
        r = function () {
            function e(e) {
                if (this.$host = "", this.$hostname = "", this.$origin = "", this.$port = "", this.$protocol = "", e !== o.SYMBOL_LOCATION) throw new TypeError("Illegal constructor.")
            }
            return Object.defineProperty(e.prototype, "ancestorOrigins", {
                get: function () {
                    if (!(this instanceof e)) throw new TypeError("'get ancestorOrigins' called on an object that does not implement interface Location.")
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "hash", {
                get: function () {
                    if (!(this instanceof e)) throw new TypeError("'get hash' called on an object that does not implement interface Location.");
                    return ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "host", {
                get: function () {
                    if (!(this instanceof e)) throw new TypeError("'get host' called on an object that does not implement interface Location.");
                    return this.$host
                },
                set: function (e) {
                    this.$host = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "hostname", {
                get: function () {
                    if (!(this instanceof e)) throw new TypeError("'get hostname' called on an object that does not implement interface Location.");
                    return this.$hostname
                },
                set: function (e) {
                    this.$hostname = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "href", {
                get: function () {
                    if (!(this instanceof e)) throw new TypeError("'get href' called on an object that does not implement interface Location.");
                    return "game.js"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "origin", {
                get: function () {
                    if (!(this instanceof e)) throw new TypeError("'get origin' called on an object that does not implement interface Location.");
                    return this.$origin
                },
                set: function (e) {
                    this.$origin = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "pathname", {
                get: function () {
                    if (!(this instanceof e)) throw new TypeError("'get pathname' called on an object that does not implement interface Location.");
                    return "game.js"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "port", {
                get: function () {
                    if (!(this instanceof e)) throw new TypeError("'get port' called on an object that does not implement interface Location.");
                    return this.$port
                },
                set: function (e) {
                    this.$port = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "protocol", {
                get: function () {
                    if (!(this instanceof e)) throw new TypeError("'get protocol' called on an object that does not implement interface Location.");
                    return this.$protocol
                },
                set: function (e) {
                    this.$protocol = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "search", {
                get: function () {
                    if (!(this instanceof e)) throw new TypeError("'get protocol' called on an object that does not implement interface Location.");
                    return ""
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.assign = function (t) {
                if (!(this instanceof e)) throw new TypeError("'get protocol' called on an object that does not implement interface Location.")
            }, e.prototype.reload = function (t) {
                if (!(this instanceof e)) throw new TypeError("'get protocol' called on an object that does not implement interface Location.")
            }, e.prototype.replace = function (t) {
                if (!(this instanceof e)) throw new TypeError("'get protocol' called on an object that does not implement interface Location.")
            }, e
        }();
    t.default = r, t.location = new r(o.SYMBOL_LOCATION)
}, function (e, t, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function (e, t) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }
            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function (e) {
        function t() {
            var t = e.call(this, "video") || this;
            return t.$poster = "", t
        }
        return r(t, e), t.prototype.getVideoPlaybackQuality = function () {}, Object.defineProperty(t.prototype, "length", {
            get: function () {
                return this instanceof t || console.error("'get height' called on an object that does not implement interface HTMLVideoElement."), 0
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "height", {
            get: function () {
                return this instanceof t || console.error("'get height' called on an object that does not implement interface HTMLVideoElement."), 0
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "mozDecodedFrames", {
            get: function () {
                return this instanceof t || console.error("'get mozDecodedFrames' called on an object that does not implement interface HTMLVideoElement."), 0
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "mozFrameDelay", {
            get: function () {
                return this instanceof t || console.error("'get mozFrameDelay' called on an object that does not implement interface HTMLVideoElement."), 0
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "mozHasAudio", {
            get: function () {
                return this instanceof t || console.error("'get mozHasAudio' called on an object that does not implement interface HTMLVideoElement."), 0
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "mozPaintedFrames", {
            get: function () {
                return this instanceof t || console.error("'get mozPaintedFrames' called on an object that does not implement interface HTMLVideoElement."), 0
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "mozParsedFrames", {
            get: function () {
                return this instanceof t || console.error("'get mozParsedFrames' called on an object that does not implement interface HTMLVideoElement."), 0
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "mozPresentedFrames", {
            get: function () {
                return this instanceof t || console.error("'get mozPresentedFrames' called on an object that does not implement interface HTMLVideoElement."), 0
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "poster", {
            get: function () {
                return this instanceof t || console.error("'get poster' called on an object that does not implement interface HTMLVideoElement."), this.$poster
            },
            set: function (e) {
                this.$poster = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "videoHeight", {
            get: function () {
                return this instanceof t || console.error("'get videoHeight' called on an object that does not implement interface HTMLVideoElement."), 0
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "videoWidth", {
            get: function () {
                return this instanceof t || console.error("'get videoWidth' called on an object that does not implement interface HTMLVideoElement."), 0
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "width", {
            get: function () {
                return this instanceof t || console.error("'get width' called on an object that does not implement interface HTMLVideoElement."), 0
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(i(n(5)).default);
    t.default = a
}, function (e, t, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function (e, t) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }
            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function (e) {
        function t() {
            var t = e.call(this, "script") || this;
            return t.$src = "", t.$text = "", t.$type = "", t.$referrerPolicy = "", t.$noModule = !1, t.$async = !1, t.$crossOrigin = null, t.$defer = !1, t.$integrity = "", t
        }
        return r(t, e), Object.defineProperty(t.prototype, "async", {
            get: function () {
                return this.$async
            },
            set: function (e) {
                this.$async = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "crossOrigin", {
            get: function () {
                return this.$crossOrigin
            },
            set: function (e) {
                this.$crossOrigin = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "defer", {
            get: function () {
                return this.$defer
            },
            set: function (e) {
                this.$defer = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "integrity", {
            get: function () {
                return this.$integrity
            },
            set: function (e) {
                this.$integrity = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "noModule", {
            get: function () {
                return this.$noModule
            },
            set: function (e) {
                this.$noModule = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "referrerPolicy", {
            get: function () {
                return this.$referrerPolicy
            },
            set: function (e) {
                this.$referrerPolicy = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "src", {
            get: function () {
                return this.$src
            },
            set: function (e) {
                this.$src = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "text", {
            get: function () {
                return this.$text
            },
            set: function (e) {
                this.$text = e
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "type", {
            get: function () {
                return this.$type
            },
            set: function (e) {
                this.$type = e
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(i(n(4)).default);
    t.default = a
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = qg.createImage().constructor
}, function (e, t, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function (e, t) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }
            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(n(25)),
        c = n(0),
        l = function (e) {
            function t(t) {
                void 0 === t && (t = "");
                var n = e.call(this, c.SYMBOL_NODE) || this;
                return n.data = t, n.$wholeText = t, n.$nodeValue = t, n.$nodeType = 3, n.$nodeName = "#text", n
            }
            return r(t, e), Object.defineProperty(t.prototype, "wholeText", {
                get: function () {
                    return this.$wholeText
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "assignedSlot", {
                get: function () {
                    if (this instanceof t) throw new TypeError("'get assignedSlot' called on an object that does not implement interface Text.");
                    return null
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "baseURI", {
                get: function () {
                    if (this instanceof t) throw new TypeError("'get baseURI' called on an object that does not implement interface Text.");
                    return "http://localhost/"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "childNodes", {
                get: function () {
                    if (this instanceof t) throw new TypeError("'get childNodes' called on an object that does not implement interface Text.");
                    return []
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "firstChild", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get firstChild' called on an object that does not implement interface Text.");
                    return null
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "lastChild", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get lastChild' called on an object that does not implement interface Text.");
                    return null
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.splitText = function (e) {
                if (!(this instanceof t)) throw new TypeError("'splitText' called on an object that does not implement interface Text.");
                return new t(this.data.slice(e))
            }, Object.defineProperty(t.prototype, "length", {
                get: function () {
                    return this.data.length
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(a.default);
    t.default = l
}, function (e, t, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function (e, t) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }
            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(n(3)),
        c = i(n(1)),
        l = function (e) {
            function t() {
                var t = e.call(this) || this;
                return t.status = "loading", t
            }
            return r(t, e), t.prototype.add = function (e) {
                var n = this;
                this instanceof t || console.error(new TypeError("'add' called on an object that does not implement interface FontFaceSet.")), this.status = e.status = "loading", this.dispatchEvent(new c.default("loading"));
                var o = qg.loadFont(e.family, e.source);
                setTimeout((function () {
                    o ? (e.status = n.status = "loaded", e.$resolve(), n.dispatchEvent(new c.default("loadingdone"))) : (e.status = n.status = "error", e.$reject(), n.dispatchEvent(new c.default("loadingerror")))
                }), 0)
            }, t.prototype.clear = function () {
                this instanceof t || console.error(new TypeError("'clear' called on an object that does not implement interface FontFaceSet."))
            }, t.prototype.delete = function () {
                this instanceof t || console.error(new TypeError("'delete' called on an object that does not implement interface FontFaceSet."))
            }, t.prototype.load = function () {
                this instanceof t || console.error(new TypeError("'load' called on an object that does not implement interface FontFaceSet."))
            }, Object.defineProperty(t.prototype, "onloading", {
                get: function () {
                    this instanceof t || console.error(new TypeError("'get onloading' called on an object that does not implement interface FontFaceSet."))
                },
                set: function (e) {
                    this.addEventListener("loading", e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "onloadingdone", {
                get: function () {
                    this instanceof t || console.error(new TypeError("'get onloadingdone' called on an object that does not implement interface FontFaceSet."))
                },
                set: function (e) {
                    this.addEventListener("loadingdone", e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "onloadingerror", {
                get: function () {
                    this instanceof t || console.error(new TypeError("'get onloadingerror' called on an object that does not implement interface FontFaceSet."))
                },
                set: function (e) {
                    this.addEventListener("loadingerror", e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "ready", {
                get: function () {
                    return this instanceof t ? Promise.resolve() : Promise.reject(new TypeError("'get ready' called on an object that does not implement interface FontFaceSet."))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "size", {
                get: function () {
                    this instanceof t || console.error(new TypeError("'get size' called on an object that does not implement interface FontFaceSet."))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "values", {
                get: function () {
                    this instanceof t || console.error(new TypeError("'get values' called on an object that does not implement interface FontFaceSet."))
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(a.default);
    t.default = l
}, function (e, t, n) {
    "use strict";

    function o(e, t) {
        for (var n in e) t[n] = e[n]
    }

    function r(e, t) {
        var n = e.prototype;
        if (!(n instanceof t)) {
            function r() {}
            r.prototype = t.prototype, o(n, r = new r), e.prototype = n = r
        }
        n.constructor != e && ("function" != typeof e && console.error("unknow Class:" + e), n.constructor = e)
    }
    var i = "http://www.w3.org/1999/xhtml",
        a = {},
        c = a.ELEMENT_NODE = 1,
        l = a.ATTRIBUTE_NODE = 2,
        p = a.TEXT_NODE = 3,
        u = a.CDATA_SECTION_NODE = 4,
        s = a.ENTITY_REFERENCE_NODE = 5,
        f = a.ENTITY_NODE = 6,
        d = a.PROCESSING_INSTRUCTION_NODE = 7,
        h = a.COMMENT_NODE = 8,
        m = a.DOCUMENT_NODE = 9,
        y = a.DOCUMENT_TYPE_NODE = 10,
        b = a.DOCUMENT_FRAGMENT_NODE = 11,
        _ = a.NOTATION_NODE = 12,
        g = {},
        O = {},
        E = (g.INDEX_SIZE_ERR = (O[1] = "Index size error", 1), g.DOMSTRING_SIZE_ERR = (O[2] = "DOMString size error", 2), g.HIERARCHY_REQUEST_ERR = (O[3] = "Hierarchy request error", 3)),
        w = (g.WRONG_DOCUMENT_ERR = (O[4] = "Wrong document", 4), g.INVALID_CHARACTER_ERR = (O[5] = "Invalid character", 5), g.NO_DATA_ALLOWED_ERR = (O[6] = "No data allowed", 6), g.NO_MODIFICATION_ALLOWED_ERR = (O[7] = "No modification allowed", 7), g.NOT_FOUND_ERR = (O[8] = "Not found", 8)),
        T = (g.NOT_SUPPORTED_ERR = (O[9] = "Not supported", 9), g.INUSE_ATTRIBUTE_ERR = (O[10] = "Attribute in use", 10));
    g.INVALID_STATE_ERR = (O[11] = "Invalid state", 11), g.SYNTAX_ERR = (O[12] = "Syntax error", 12), g.INVALID_MODIFICATION_ERR = (O[13] = "Invalid modification", 13), g.NAMESPACE_ERR = (O[14] = "Invalid namespace", 14), g.INVALID_ACCESS_ERR = (O[15] = "Invalid access", 15);

    function v(e, t) {
        if (t instanceof Error) var n = t;
        else n = this, Error.call(this, O[e]), this.message = O[e], Error.captureStackTrace && Error.captureStackTrace(this, v);
        return n.code = e, t && (this.message = this.message + ": " + t), n
    }

    function M() {}

    function D(e, t) {
        this._node = e, this._refresh = t, j(this)
    }

    function j(e) {
        var t = e._node._inc || e._node.ownerDocument._inc;
        if (e._inc != t) {
            var n = e._refresh(e._node);
            oe(e, "length", n.length), o(n, e), e._inc = t
        }
    }

    function N() {}

    function P(e, t) {
        for (var n = e.length; n--;)
            if (e[n] === t) return n
    }

    function K(e, t, n, o) {
        if (o ? t[P(t, o)] = n : t[t.length++] = n, e) {
            n.ownerElement = e;
            var r = e.ownerDocument;
            r && (o && R(r, e, o), function (e, t, n) {
                e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && (t._nsMap[n.prefix ? n.localName : ""] = n.value)
            }(r, e, n))
        }
    }

    function $(e, t, n) {
        var o = P(t, n);
        if (!(o >= 0)) throw v(w, new Error(e.tagName + "@" + n));
        for (var r = t.length - 1; o < r;) t[o] = t[++o];
        if (t.length = r, e) {
            var i = e.ownerDocument;
            i && (R(i, e, n), n.ownerElement = null)
        }
    }

    function A(e) {
        if (this._features = {}, e)
            for (var t in e) this._features = e[t]
    }

    function L() {}

    function V(e) {
        return ("<" == e ? "&lt;" : ">" == e && "&gt;") || "&" == e && "&amp;" || '"' == e && "&quot;" || "&#" + e.charCodeAt() + ";"
    }

    function C(e, t) {
        if (t(e)) return !0;
        if (e = e.firstChild)
            do {
                if (C(e, t)) return !0
            } while (e = e.nextSibling)
    }

    function S() {}

    function R(e, t, n, o) {
        e && e._inc++, "http://www.w3.org/2000/xmlns/" == n.namespaceURI && delete t._nsMap[n.prefix ? n.localName : ""]
    }

    function I(e, t, n) {
        if (e && e._inc) {
            e._inc++;
            var o = t.childNodes;
            if (n) o[o.length++] = n;
            else {
                for (var r = t.firstChild, i = 0; r;) o[i++] = r, r = r.nextSibling;
                o.length = i
            }
        }
    }

    function H(e, t) {
        var n = t.previousSibling,
            o = t.nextSibling;
        return n ? n.nextSibling = o : e.firstChild = o, o ? o.previousSibling = n : e.lastChild = n, I(e.ownerDocument, e), t
    }

    function x(e, t, n) {
        var o = t.parentNode;
        if (o && o.removeChild(t), t.nodeType === b) {
            var r = t.firstChild;
            if (null == r) return t;
            var i = t.lastChild
        } else r = i = t;
        var a = n ? n.previousSibling : e.lastChild;
        r.previousSibling = a, i.nextSibling = n, a ? a.nextSibling = r : e.firstChild = r, null == n ? e.lastChild = i : n.previousSibling = i;
        do {
            r.parentNode = e
        } while (r !== i && (r = r.nextSibling));
        return I(e.ownerDocument || e, e), t.nodeType == b && (t.firstChild = t.lastChild = null), t
    }

    function U() {
        this._nsMap = {}
    }

    function F() {}

    function k() {}

    function B() {}

    function W() {}

    function Y() {}

    function G() {}

    function q() {}

    function X() {}

    function z() {}

    function J() {}

    function Q() {}

    function Z() {}

    function ee(e, t) {
        var n = [],
            o = 9 == this.nodeType && this.documentElement || this,
            r = o.prefix,
            i = o.namespaceURI;
        if (i && null == r && null == (r = o.lookupPrefix(i))) var a = [{
            namespace: i,
            prefix: null
        }];
        return ne(this, n, e, t, a), n.join("")
    }

    function te(e, t, n) {
        var o = e.prefix || "",
            r = e.namespaceURI;
        if (!o && !r) return !1;
        if ("xml" === o && "http://www.w3.org/XML/1998/namespace" === r || "http://www.w3.org/2000/xmlns/" == r) return !1;
        for (var i = n.length; i--;) {
            var a = n[i];
            if (a.prefix == o) return a.namespace != r
        }
        return !0
    }

    function ne(e, t, n, o, r) {
        if (o) {
            if (!(e = o(e))) return;
            if ("string" == typeof e) return void t.push(e)
        }
        switch (e.nodeType) {
            case c:
                r || (r = []);
                r.length;
                var a = e.attributes,
                    f = a.length,
                    _ = e.firstChild,
                    g = e.tagName;
                n = i === e.namespaceURI || n, t.push("<", g);
                for (var O = 0; O < f; O++) {
                    "xmlns" == (E = a.item(O)).prefix ? r.push({
                        prefix: E.localName,
                        namespace: E.value
                    }) : "xmlns" == E.nodeName && r.push({
                        prefix: "",
                        namespace: E.value
                    })
                }
                for (O = 0; O < f; O++) {
                    var E;
                    if (te(E = a.item(O), 0, r)) {
                        var w = E.prefix || "",
                            T = E.namespaceURI,
                            v = w ? " xmlns:" + w : " xmlns";
                        t.push(v, '="', T, '"'), r.push({
                            prefix: w,
                            namespace: T
                        })
                    }
                    ne(E, t, n, o, r)
                }
                if (te(e, 0, r)) {
                    w = e.prefix || "", T = e.namespaceURI, v = w ? " xmlns:" + w : " xmlns";
                    t.push(v, '="', T, '"'), r.push({
                        prefix: w,
                        namespace: T
                    })
                }
                if (_ || n && !/^(?:meta|link|img|br|hr|input)$/i.test(g)) {
                    if (t.push(">"), n && /^script$/i.test(g))
                        for (; _;) _.data ? t.push(_.data) : ne(_, t, n, o, r), _ = _.nextSibling;
                    else
                        for (; _;) ne(_, t, n, o, r), _ = _.nextSibling;
                    t.push("</", g, ">")
                } else t.push("/>");
                return;
            case m:
            case b:
                for (_ = e.firstChild; _;) ne(_, t, n, o, r), _ = _.nextSibling;
                return;
            case l:
                return t.push(" ", e.name, '="', e.value.replace(/[<&"]/g, V), '"');
            case p:
                return t.push(e.data.replace(/[<&]/g, V));
            case u:
                return t.push("<![CDATA[", e.data, "]]>");
            case h:
                return t.push("\x3c!--", e.data, "--\x3e");
            case y:
                var M = e.publicId,
                    D = e.systemId;
                if (t.push("<!DOCTYPE ", e.name), M) t.push(' PUBLIC "', M), D && "." != D && t.push('" "', D), t.push('">');
                else if (D && "." != D) t.push(' SYSTEM "', D, '">');
                else {
                    var j = e.internalSubset;
                    j && t.push(" [", j, "]"), t.push(">")
                }
                return;
            case d:
                return t.push("<?", e.target, " ", e.data, "?>");
            case s:
                return t.push("&", e.nodeName, ";");
            default:
                t.push("??", e.nodeName)
        }
    }

    function oe(e, t, n) {
        e[t] = n
    }
    v.prototype = Error.prototype, o(g, v), M.prototype = {
        length: 0,
        item: function (e) {
            return this[e] || null
        },
        toString: function (e, t) {
            for (var n = [], o = 0; o < this.length; o++) ne(this[o], n, e, t);
            return n.join("")
        }
    }, D.prototype.item = function (e) {
        return j(this), this[e]
    }, r(D, M), N.prototype = {
        length: 0,
        item: M.prototype.item,
        getNamedItem: function (e) {
            for (var t = this.length; t--;) {
                var n = this[t];
                if (n.nodeName == e) return n
            }
        },
        setNamedItem: function (e) {
            var t = e.ownerElement;
            if (t && t != this._ownerElement) throw new v(T);
            var n = this.getNamedItem(e.nodeName);
            return K(this._ownerElement, this, e, n), n
        },
        setNamedItemNS: function (e) {
            var t, n = e.ownerElement;
            if (n && n != this._ownerElement) throw new v(T);
            return t = this.getNamedItemNS(e.namespaceURI, e.localName), K(this._ownerElement, this, e, t), t
        },
        removeNamedItem: function (e) {
            var t = this.getNamedItem(e);
            return $(this._ownerElement, this, t), t
        },
        removeNamedItemNS: function (e, t) {
            var n = this.getNamedItemNS(e, t);
            return $(this._ownerElement, this, n), n
        },
        getNamedItemNS: function (e, t) {
            for (var n = this.length; n--;) {
                var o = this[n];
                if (o.localName == t && o.namespaceURI == e) return o
            }
            return null
        }
    }, A.prototype = {
        hasFeature: function (e, t) {
            var n = this._features[e.toLowerCase()];
            return !(!n || t && !(t in n))
        },
        createDocument: function (e, t, n) {
            var o = new S;
            if (o.implementation = this, o.childNodes = new M, o.doctype = n, n && o.appendChild(n), t) {
                var r = o.createElementNS(e, t);
                o.appendChild(r)
            }
            return o
        },
        createDocumentType: function (e, t, n) {
            var o = new G;
            return o.name = e, o.nodeName = e, o.publicId = t, o.systemId = n, o
        }
    }, L.prototype = {
        firstChild: null,
        lastChild: null,
        previousSibling: null,
        nextSibling: null,
        attributes: null,
        parentNode: null,
        childNodes: null,
        ownerDocument: null,
        nodeValue: null,
        namespaceURI: null,
        prefix: null,
        localName: null,
        insertBefore: function (e, t) {
            return x(this, e, t)
        },
        replaceChild: function (e, t) {
            this.insertBefore(e, t), t && this.removeChild(t)
        },
        removeChild: function (e) {
            return H(this, e)
        },
        appendChild: function (e) {
            return this.insertBefore(e, null)
        },
        hasChildNodes: function () {
            return null != this.firstChild
        },
        cloneNode: function (e) {
            return function e(t, n, o) {
                var r = new n.constructor;
                for (var i in n) {
                    var a = n[i];
                    "object" != typeof a && a != r[i] && (r[i] = a)
                }
                n.childNodes && (r.childNodes = new M);
                r.ownerDocument = t;
                switch (r.nodeType) {
                    case c:
                        var p = n.attributes,
                            u = r.attributes = new N,
                            s = p.length;
                        u._ownerElement = r;
                        for (var f = 0; f < s; f++) r.setAttributeNode(e(t, p.item(f), !0));
                        break;
                    case l:
                        o = !0
                }
                if (o)
                    for (var d = n.firstChild; d;) r.appendChild(e(t, d, o)), d = d.nextSibling;
                return r
            }(this.ownerDocument || this, this, e)
        },
        normalize: function () {
            for (var e = this.firstChild; e;) {
                var t = e.nextSibling;
                t && t.nodeType == p && e.nodeType == p ? (this.removeChild(t), e.appendData(t.data)) : (e.normalize(), e = t)
            }
        },
        isSupported: function (e, t) {
            return this.ownerDocument.implementation.hasFeature(e, t)
        },
        hasAttributes: function () {
            return this.attributes.length > 0
        },
        lookupPrefix: function (e) {
            for (var t = this; t;) {
                var n = t._nsMap;
                if (n)
                    for (var o in n)
                        if (n[o] == e) return o;
                t = t.nodeType == l ? t.ownerDocument : t.parentNode
            }
            return null
        },
        lookupNamespaceURI: function (e) {
            for (var t = this; t;) {
                var n = t._nsMap;
                if (n && e in n) return n[e];
                t = t.nodeType == l ? t.ownerDocument : t.parentNode
            }
            return null
        },
        isDefaultNamespace: function (e) {
            return null == this.lookupPrefix(e)
        }
    }, o(a, L), o(a, L.prototype), S.prototype = {
        nodeName: "#document",
        nodeType: m,
        doctype: null,
        documentElement: null,
        _inc: 1,
        insertBefore: function (e, t) {
            if (e.nodeType == b) {
                for (var n = e.firstChild; n;) {
                    var o = n.nextSibling;
                    this.insertBefore(n, t), n = o
                }
                return e
            }
            return null == this.documentElement && e.nodeType == c && (this.documentElement = e), x(this, e, t), e.ownerDocument = this, e
        },
        removeChild: function (e) {
            return this.documentElement == e && (this.documentElement = null), H(this, e)
        },
        importNode: function (e, t) {
            return function e(t, n, o) {
                var r;
                switch (n.nodeType) {
                    case c:
                        (r = n.cloneNode(!1)).ownerDocument = t;
                    case b:
                        break;
                    case l:
                        o = !0
                }
                r || (r = n.cloneNode(!1));
                r.ownerDocument = t;
                r.parentNode = null;
                if (o)
                    for (var i = n.firstChild; i;) r.appendChild(e(t, i, o)), i = i.nextSibling;
                return r
            }(this, e, t)
        },
        getElementById: function (e) {
            var t = null;
            return C(this.documentElement, (function (n) {
                if (n.nodeType == c && n.getAttribute("id") == e) return t = n, !0
            })), t
        },
        createElement: function (e) {
            var t = new U;
            return t.ownerDocument = this, t.nodeName = e, t.tagName = e, t.childNodes = new M, (t.attributes = new N)._ownerElement = t, t
        },
        createDocumentFragment: function () {
            var e = new J;
            return e.ownerDocument = this, e.childNodes = new M, e
        },
        createTextNode: function (e) {
            var t = new B;
            return t.ownerDocument = this, t.appendData(e), t
        },
        createComment: function (e) {
            var t = new W;
            return t.ownerDocument = this, t.appendData(e), t
        },
        createCDATASection: function (e) {
            var t = new Y;
            return t.ownerDocument = this, t.appendData(e), t
        },
        createProcessingInstruction: function (e, t) {
            var n = new Q;
            return n.ownerDocument = this, n.tagName = n.target = e, n.nodeValue = n.data = t, n
        },
        createAttribute: function (e) {
            var t = new F;
            return t.ownerDocument = this, t.name = e, t.nodeName = e, t.localName = e, t.specified = !0, t
        },
        createEntityReference: function (e) {
            var t = new z;
            return t.ownerDocument = this, t.nodeName = e, t
        },
        createElementNS: function (e, t) {
            var n = new U,
                o = t.split(":"),
                r = n.attributes = new N;
            return n.childNodes = new M, n.ownerDocument = this, n.nodeName = t, n.tagName = t, n.namespaceURI = e, 2 == o.length ? (n.prefix = o[0], n.localName = o[1]) : n.localName = t, r._ownerElement = n, n
        },
        createAttributeNS: function (e, t) {
            var n = new F,
                o = t.split(":");
            return n.ownerDocument = this, n.nodeName = t, n.name = t, n.namespaceURI = e, n.specified = !0, 2 == o.length ? (n.prefix = o[0], n.localName = o[1]) : n.localName = t, n
        }
    }, r(S, L), U.prototype = {
        nodeType: c,
        hasAttribute: function (e) {
            return null != this.getAttributeNode(e)
        },
        getAttribute: function (e) {
            var t = this.getAttributeNode(e);
            return t && t.value || ""
        },
        getAttributeNode: function (e) {
            return this.attributes.getNamedItem(e)
        },
        setAttribute: function (e, t) {
            var n = this.ownerDocument.createAttribute(e);
            n.value = n.nodeValue = "" + t, this.setAttributeNode(n)
        },
        removeAttribute: function (e) {
            var t = this.getAttributeNode(e);
            t && this.removeAttributeNode(t)
        },
        appendChild: function (e) {
            return e.nodeType === b ? this.insertBefore(e, null) : function (e, t) {
                var n = t.parentNode;
                if (n) {
                    var o = e.lastChild;
                    n.removeChild(t);
                    o = e.lastChild
                }
                return o = e.lastChild, t.parentNode = e, t.previousSibling = o, t.nextSibling = null, o ? o.nextSibling = t : e.firstChild = t, e.lastChild = t, I(e.ownerDocument, e, t), t
            }(this, e)
        },
        setAttributeNode: function (e) {
            return this.attributes.setNamedItem(e)
        },
        setAttributeNodeNS: function (e) {
            return this.attributes.setNamedItemNS(e)
        },
        removeAttributeNode: function (e) {
            return this.attributes.removeNamedItem(e.nodeName)
        },
        removeAttributeNS: function (e, t) {
            var n = this.getAttributeNodeNS(e, t);
            n && this.removeAttributeNode(n)
        },
        hasAttributeNS: function (e, t) {
            return null != this.getAttributeNodeNS(e, t)
        },
        getAttributeNS: function (e, t) {
            var n = this.getAttributeNodeNS(e, t);
            return n && n.value || ""
        },
        setAttributeNS: function (e, t, n) {
            var o = this.ownerDocument.createAttributeNS(e, t);
            o.value = o.nodeValue = "" + n, this.setAttributeNode(o)
        },
        getAttributeNodeNS: function (e, t) {
            return this.attributes.getNamedItemNS(e, t)
        },
        getElementsByTagName: function (e) {
            return new D(this, (function (t) {
                var n = [];
                return C(t, (function (o) {
                    o === t || o.nodeType != c || "*" !== e && o.tagName != e || n.push(o)
                })), n
            }))
        },
        getElementsByTagNameNS: function (e, t) {
            return new D(this, (function (n) {
                var o = [];
                return C(n, (function (r) {
                    r === n || r.nodeType !== c || "*" !== e && r.namespaceURI !== e || "*" !== t && r.localName != t || o.push(r)
                })), o
            }))
        }
    }, S.prototype.getElementsByTagName = U.prototype.getElementsByTagName, S.prototype.getElementsByTagNameNS = U.prototype.getElementsByTagNameNS, r(U, L), F.prototype.nodeType = l, r(F, L), k.prototype = {
        data: "",
        substringData: function (e, t) {
            return this.data.substring(e, e + t)
        },
        appendData: function (e) {
            e = this.data + e, this.nodeValue = this.data = e, this.length = e.length
        },
        insertData: function (e, t) {
            this.replaceData(e, 0, t)
        },
        appendChild: function (e) {
            throw new Error(O[E])
        },
        deleteData: function (e, t) {
            this.replaceData(e, t, "")
        },
        replaceData: function (e, t, n) {
            n = this.data.substring(0, e) + n + this.data.substring(e + t), this.nodeValue = this.data = n, this.length = n.length
        }
    }, r(k, L), B.prototype = {
        nodeName: "#text",
        nodeType: p,
        splitText: function (e) {
            var t = this.data,
                n = t.substring(e);
            t = t.substring(0, e), this.data = this.nodeValue = t, this.length = t.length;
            var o = this.ownerDocument.createTextNode(n);
            return this.parentNode && this.parentNode.insertBefore(o, this.nextSibling), o
        }
    }, r(B, k), W.prototype = {
        nodeName: "#comment",
        nodeType: h
    }, r(W, k), Y.prototype = {
        nodeName: "#cdata-section",
        nodeType: u
    }, r(Y, k), G.prototype.nodeType = y, r(G, L), q.prototype.nodeType = _, r(q, L), X.prototype.nodeType = f, r(X, L), z.prototype.nodeType = s, r(z, L), J.prototype.nodeName = "#document-fragment", J.prototype.nodeType = b, r(J, L), Q.prototype.nodeType = d, r(Q, L), Z.prototype.serializeToString = function (e, t, n) {
        return ee.call(e, t, n)
    }, L.prototype.toString = ee;
    try {
        if (Object.defineProperty) {
            Object.defineProperty(D.prototype, "length", {
                get: function () {
                    return j(this), this.$$length
                }
            }), Object.defineProperty(L.prototype, "textContent", {
                get: function () {
                    return function e(t) {
                        switch (t.nodeType) {
                            case c:
                            case b:
                                var n = [];
                                for (t = t.firstChild; t;) 7 !== t.nodeType && 8 !== t.nodeType && n.push(e(t)), t = t.nextSibling;
                                return n.join("");
                            default:
                                return t.nodeValue
                        }
                    }(this)
                },
                set: function (e) {
                    switch (this.nodeType) {
                        case c:
                        case b:
                            for (; this.firstChild;) this.removeChild(this.firstChild);
                            (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
                            break;
                        default:
                            this.data = e, this.value = e, this.nodeValue = e
                    }
                }
            }), oe = function (e, t, n) {
                e["$$" + t] = n
            }
        }
    } catch (e) {}
    t.DOMImplementation = A, t.XMLSerializer = Z
}, function (e, t, n) {
    "use strict";
    var o = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        },
        r = this && this.__importStar || function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
            return t.default = e, t
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), window.top = window.parent = window, window.ontouchstart = null, window.ontouchmove = null, window.ontouchend = null, window.ontouchcancel = null, window.pageXOffset = window.pageYOffset = window.clientTop = window.clientLeft = 0, window.outerWidth = window.innerWidth, window.outerHeight = window.innerHeight;
    var i = o(n(1));
    window.Event = i.default;
    var a = o(n(16));
    window.TouchEvent = a.default;
    var c = o(n(17));
    window.MouseEvent = c.default;
    var l = o(n(18));
    window.KeyboardEvent = l.default;
    var p = o(n(19));
    window.DeviceMotionEvent = p.default;
    var u = o(n(3));
    window.EventTarget = u.default;
    var s = o(n(2));
    window.Node = s.default;
    var f = o(n(7));
    window.Element = f.default;
    var d = o(n(4));
    window.HTMLElement = d.default, window.mainCanvas = qg.createCanvas(), window.HTMLCanvasElement = window.mainCanvas.constructor;
    var h = n(21);
    window.document = h.document;
    var m = o(n(26));
    window.HTMLImageElement = m.default;
    var y = o(n(5));
    window.HTMLMediaElement = y.default;
    var b = o(n(6));
    window.HTMLAudioElement = b.default;
    var _ = o(n(6));
    window.Audio = _.default;
    var g = o(n(9));
    window.HTMLVideoElement = g.default;
    var O = o(n(10));
    window.HTMLScriptElement = O.default;
    var E = n(27);
    window.localStorage || (window.localStorage = E.localStorage);
    var w = o(n(28));
    window.FileReader = w.default;
    var T = o(n(29));
    window.FontFace = T.default;
    var v = o(n(13));
    window.FontFaceSet = v.default;
    var M = n(30);
    window.btoa = M.btoa, window.atob = M.atob, window.CanvasRenderingContext2D = qg.getCanvasRenderingContext2D();
    var D = n(31);
    window.Blob = D.Blob, window.URL = D.URL;
    var j = n(33);
    window.DOMParser = j.DOMParser;
    var N = r(n(36));
    window.Navigator = N.default, window.navigator = N.navigator;
    var P = o(n(11));
    window.Image = P.default;
    var K = o(n(12));
    window.Text = K.default;
    var $ = r(n(8));
    window.Location = $.default, window.location = $.location;
    var A = o(n(37));
    window.MediaError = A.default;
    var L = 0;
    switch (qg.getDeviceRotation()) {
        case 1:
            L = 90;
            break;
        case 2:
            L = 180;
            break;
        case 3:
            L = -90
    }
    window.orientation = L, window.devicePixelRatio = 1, window.screen = {
        availTop: 0,
        availLeft: 0,
        availHeight: window.innerWidth,
        availWidth: window.innerHeight,
        colorDepth: 8,
        pixelDepth: 8,
        left: 0,
        top: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        orientation: {
            type: "portrait-primary"
        },
        onorientationchange: function (e) {}
    }, window.addEventListener || (window.addEventListener = function (e, t, n) {
        window.mainCanvas.addEventListener(e, t, n)
    }), window.removeEventListener || (window.removeEventListener = function (e, t, n) {
        window.mainCanvas.removeEventListener(e, t, n)
    }), window.dispatchEvent || (window.dispatchEvent = function (e) {
        return window.mainCanvas.dispatchEvent(e), !0
    }), window.getComputedStyle = function (e) {
        return {
            position: "absolute",
            left: "0px",
            top: "0px",
            height: "0px"
        }
    }, window.focus = function () {}, window.scroll = function () {}, window.resize = function (e, t) {
        window.innerWidth = e, window.innerHeight = t, window.outerWidth = window.innerWidth, window.outerHeight = window.innerHeight, window.mainCanvas._width = window.innerWidth, window.mainCanvas._height = window.innerHeight, window.screen.availWidth = window.innerWidth, window.screen.availHeight = window.innerHeight, window.screen.width = window.innerWidth, window.screen.height = window.innerHeight
    }, window.alert = console.error.bind(console), window.close = qg.getClose ? qg.getClose : function () {}
}, function (e, t, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function (e, t) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }
            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function (e) {
        function t(t, n) {
            var o = e.call(this, t, n) || this;
            return o.$altKey = !1, o.$changedTouches = [], o.$ctrlKey = !1, o.$metaKey = !1, o.$shiftKey = !1, o.$targetTouches = [], o.$touches = [], o.$touches = n && n.touches || [], o.$targetTouches = n && n.targetTouches || [], o.$changedTouches = n && n.changedTouches || [], o
        }
        return r(t, e), Object.defineProperty(t.prototype, "altKey", {
            get: function () {
                return this.$altKey
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "changedTouches", {
            get: function () {
                return this.$changedTouches
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ctrlKey", {
            get: function () {
                return this.$ctrlKey
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "metaKey", {
            get: function () {
                return this.$metaKey
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "shiftKey", {
            get: function () {
                return this.$shiftKey
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "targetTouches", {
            get: function () {
                return this.$targetTouches
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "touches", {
            get: function () {
                return this.$touches
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(i(n(1)).default);
    t.default = a
}, function (e, t, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function (e, t) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }
            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function (e) {
        function t(t, n) {
            var o = e.call(this, t, n) || this;
            return o.$which = 0, o.$wheelDelta = 0, o.$altKey = !1, o.$button = 0, o.$buttons = -1, o.$clientX = 0, o.$clientY = 0, o.$ctrlKey = !1, o.$metaKey = !1, o.$movementX = 0, o.$movementY = 0, o.$offsetX = 0, o.$offsetY = 0, o.$pageX = 0, o.$pageY = 0, o.$relatedTarget = null, o.$screenX = 0, o.$screenY = 0, o.$shiftKey = !1, o.$x = 0, o.$y = 0, o.$canBubble = !1, o.$cancelable = !1, o.$detail = 0, o.$view = window, n && (o.$button = n.button || 0, o.$buttons = n.buttons || 0, o.$which = n.which || 0, o.$wheelDelta = n.wheelDelta || 0, o.$clientX = n.clientX || 0, o.$clientY = n.clientY || 0, o.$screenX = n.screenX || 0, o.$screenY = n.screenY || 0, o.$pageX = n.pageX || 0, o.$pageY = n.pageY || 0), o
        }
        return r(t, e), t.prototype.initMouseEvent = function (e, t, n, o, r, i, a, c, l, p, u, s, f, d, h) {
            this.$type = e, this.$canBubble = t, this.$cancelable = n, this.$view = o, this.$detail = r, this.$screenX = i, this.$screenY = a, this.$clientX = c, this.$clientY = l, this.$ctrlKey = p, this.$altKey = u, this.$shiftKey = s, this.$metaKey = f, this.$button = d, this.$relatedTarget = h
        }, Object.defineProperty(t.prototype, "button", {
            get: function () {
                return this.$button
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "buttons", {
            get: function () {
                return this.$buttons
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "which", {
            get: function () {
                return this.$which
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "wheelDelta", {
            get: function () {
                return this.$wheelDelta
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "clientX", {
            get: function () {
                return this.$clientX
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "clientY", {
            get: function () {
                return this.$clientY
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "screenX", {
            get: function () {
                return this.$screenX
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "screenY", {
            get: function () {
                return this.$screenY
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "pageX", {
            get: function () {
                return this.$pageX
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "pageY", {
            get: function () {
                return this.$pageY
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "movementX", {
            get: function () {
                return this.$movementX
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "movementY", {
            get: function () {
                return this.$movementY
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "offsetX", {
            get: function () {
                return this.$offsetX
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "offsetY", {
            get: function () {
                return this.$offsetY
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "x", {
            get: function () {
                return this.$x
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "y", {
            get: function () {
                return this.$y
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "shiftKey", {
            get: function () {
                return this.$shiftKey
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "ctrlKey", {
            get: function () {
                return this.$ctrlKey
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "metaKey", {
            get: function () {
                return this.$metaKey
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "altKey", {
            get: function () {
                return this.$altKey
            },
            enumerable: !0,
            configurable: !0
        }), t
    }(i(n(1)).default);
    t.default = a
}, function (e, t, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function (e, t) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }
            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        i = this && this.__decorate || function (e, t, n, o) {
            var r, i = arguments.length,
                a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
            else
                for (var c = e.length - 1; c >= 0; c--)(r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
            return i > 3 && a && Object.defineProperty(t, n, a), a
        },
        a = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = a(n(1)),
        l = function (e) {
            return function (t, n) {
                t[n] = e
            }
        },
        p = {
            48: ")",
            49: "!",
            50: "@",
            51: "#",
            52: "$",
            53: "%",
            54: "^",
            55: "&",
            56: "*",
            57: "("
        },
        u = !1,
        s = function (e) {
            function t(t, n) {
                var o = e.call(this, t) || this;
                o.$code = "", o.$key = "", "object" == typeof n ? (o.$altKeyActive = !!n.altKey && n.altKey, o.$ctrlKeyActive = !!n.ctrlKey && n.ctrlKey, o.$metaKeyActive = !!n.metaKey && n.metaKey, o.$shiftKeyActive = !!n.shiftKey && n.shiftKey, o.$keyCode = n.keyCode ? n.keyCode : -1, o.$repeat = !!n.repeat && n.repeat) : (o.$altKeyActive = !1, o.$ctrlKeyActive = !1, o.$metaKeyActive = !1, o.$shiftKeyActive = !1, o.$keyCode = -1, o.$repeat = !1);
                var r = o.$keyCode;
                if (r >= 48 && r <= 57) {
                    var i = r - 48;
                    o.$code = "Digit" + i, o.$key = o.$shiftKeyActive ? p[r] : "" + i
                } else if (r >= 10048 && r <= 10057) {
                    i = (r = o.$keyCode = r - 1e4) - 48;
                    o.$code = "Numpad" + i, o.$key = "" + i
                } else if (r >= 65 && r <= 90) {
                    var a = String.fromCharCode(r);
                    o.$code = "Key" + a, o.$key = o.$shiftKeyActive || u ? a : a.toLowerCase()
                } else r >= 112 && r <= 123 ? o.$code = o.$key = "F" + (r - 111) : 27 === r ? o.$code = o.$key = "Escape" : 189 === r ? (o.$code = "Minus", o.$key = o.$shiftKeyActive ? "$" : "-") : 187 === r ? (o.$code = "Equal", o.$key = o.$shiftKeyActive ? "+" : "=") : 220 === r ? (o.$code = "Backslash", o.$key = o.$shiftKeyActive ? "|" : "\\") : 192 === r ? (o.$code = "Backquote", o.$key = o.$shiftKeyActive ? "~" : "`") : 8 === r ? o.$code = o.$key = "Backspace" : 13 === r ? o.$code = o.$key = "Enter" : 219 === r ? (o.$code = "BracketLeft", o.$key = o.$shiftKeyActive ? "{" : "[") : 221 === r ? (o.$code = "BracketRight", o.$key = o.$shiftKeyActive ? "}" : "]") : 186 === r ? (o.$code = "Semicolon", o.$key = o.$shiftKeyActive ? ":" : ";") : 222 === r ? (o.$code = "Quote", o.$key = o.$shiftKeyActive ? '"' : "'") : 9 === r ? o.$code = o.$key = "Tab" : 17 === r ? (o.$code = "ControlLeft", o.$key = "Control") : 20017 === r ? (o.$keyCode = 17, o.$code = "ControlRight", o.$key = "Control") : 16 === r ? (o.$code = "ShiftLeft", o.$key = "Shift") : 20016 === r ? (o.$keyCode = 16, o.$code = "ShiftRight", o.$key = "Shift") : 18 === r ? (o.$code = "AltLeft", o.$key = "Alt") : 20018 === r ? (o.$keyCode = 18, o.$code = "AltRight", o.$key = "Alt") : 91 === r ? (o.$code = "MetaLeft", o.$key = "Meta") : 93 === r ? (o.$code = "MetaRight", o.$key = "Meta") : 37 === r ? o.$code = o.$key = "ArrowLeft" : 38 === r ? o.$code = o.$key = "ArrowUp" : 39 === r ? o.$code = o.$key = "ArrowRight" : 40 === r ? o.$code = o.$key = "ArrowDown" : 20093 === r ? (o.$keyCode = 93, o.$code = o.$key = "ContextMenu") : 20013 === r ? (o.$keyCode = 13, o.$code = "NumpadEnter", o.$key = "Enter") : 107 === r ? (o.$code = "NumpadAdd", o.$key = "+") : 109 === r ? (o.$code = "NumpadSubtract", o.$key = "-") : 106 === r ? (o.$code = "NumpadMultiply", o.$key = "*") : 111 === r ? (o.$code = "NumpadDivide", o.$key = "/") : 12 === r ? (o.$code = "NumLock", o.$key = "Clear") : 124 === r ? o.$code = o.$key = "F13" : 36 === r ? o.$code = o.$key = "Home" : 33 === r ? o.$code = o.$key = "PageUp" : 34 === r ? o.$code = o.$key = "PageDown" : 35 === r ? o.$code = o.$key = "End" : 188 === r ? (o.$code = "Comma", o.$key = o.$shiftKeyActive ? "<" : ",") : 190 === r ? (o.$code = "Period", o.$key = o.$shiftKeyActive ? ">" : ".") : 191 === r ? (o.$code = "Slash", o.$key = o.$shiftKeyActive ? "?" : "/") : 32 === r ? (o.$code = "Space", o.$key = " ") : 46 === r ? o.$code = o.$key = "Delete" : 110 === r ? (o.$code = "NumpadDecimal", o.$key = ".") : 20 === r ? (o.$code = o.$key = "CapsLock", "keyup" === t && (u = !u)) : console.log("Unknown keyCode: " + o.$keyCode);
                return o
            }
            return r(t, e), t.prototype.getModifierState = function () {
                return !1
            }, Object.defineProperty(t.prototype, "altKey", {
                get: function () {
                    return this.$altKeyActive
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "code", {
                get: function () {
                    return this.$code
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "ctrlKey", {
                get: function () {
                    return this.$ctrlKeyActive
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "isComposing", {
                get: function () {
                    return !1
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "key", {
                get: function () {
                    return this.$key
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "keyCode", {
                get: function () {
                    return this.$keyCode
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "location", {
                get: function () {
                    return 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "metaKey", {
                get: function () {
                    return this.$metaKeyActive
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "repeat", {
                get: function () {
                    return this.$repeat
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "shiftKey", {
                get: function () {
                    return this.$shiftKeyActive
                },
                enumerable: !0,
                configurable: !0
            }), t.DOM_KEY_LOCATION_LEFT = 1, t.DOM_KEY_LOCATION_NUMPAD = 3, t.DOM_KEY_LOCATION_RIGHT = 2, t.DOM_KEY_LOCATION_STANDARD = 0, t.DOM_VK_0 = 48, t.DOM_VK_1 = 49, t.DOM_VK_2 = 50, t.DOM_VK_3 = 51, t.DOM_VK_4 = 52, t.DOM_VK_5 = 53, t.DOM_VK_6 = 54, t.DOM_VK_7 = 55, t.DOM_VK_8 = 56, t.DOM_VK_9 = 57, t.DOM_VK_A = 65, t.DOM_VK_ACCEPT = 30, t.DOM_VK_ADD = 107, t.DOM_VK_ALT = 18, t.DOM_VK_ALTGR = 225, t.DOM_VK_AMPERSAND = 166, t.DOM_VK_ASTERISK = 170, t.DOM_VK_AT = 64, t.DOM_VK_ATTN = 246, t.DOM_VK_B = 66, t.DOM_VK_BACK_QUOTE = 192, t.DOM_VK_BACK_SLASH = 220, t.DOM_VK_BACK_SPACE = 8, t.DOM_VK_C = 67, t.DOM_VK_CANCEL = 3, t.DOM_VK_CAPS_LOCK = 20, t.DOM_VK_CIRCUMFLEX = 160, t.DOM_VK_CLEAR = 12, t.DOM_VK_CLOSE_BRACKET = 221, t.DOM_VK_CLOSE_CURLY_BRACKET = 175, t.DOM_VK_CLOSE_PAREN = 169, t.DOM_VK_COLON = 58, t.DOM_VK_COMMA = 188, t.DOM_VK_CONTEXT_MENU = 93, t.DOM_VK_CONTROL = 17, t.DOM_VK_CONVERT = 28, t.DOM_VK_CRSEL = 247, t.DOM_VK_D = 68, t.DOM_VK_DECIMAL = 110, t.DOM_VK_DELETE = 46, t.DOM_VK_DIVIDE = 111, t.DOM_VK_DOLLAR = 164, t.DOM_VK_DOUBLE_QUOTE = 162, t.DOM_VK_DOWN = 40, t.DOM_VK_E = 69, t.DOM_VK_EISU = 22, t.DOM_VK_END = 35, t.DOM_VK_EQUALS = 61, t.DOM_VK_EREOF = 249, t.DOM_VK_ESCAPE = 27, t.DOM_VK_EXCLAMATION = 161, t.DOM_VK_EXECUTE = 43, t.DOM_VK_EXSEL = 248, t.DOM_VK_F = 70, t.DOM_VK_F1 = 112, t.DOM_VK_F10 = 121, t.DOM_VK_F11 = 122, t.DOM_VK_F12 = 123, t.DOM_VK_F13 = 124, t.DOM_VK_F14 = 125, t.DOM_VK_F15 = 126, t.DOM_VK_F16 = 127, t.DOM_VK_F17 = 128, t.DOM_VK_F18 = 129, t.DOM_VK_F19 = 130, t.DOM_VK_F2 = 113, t.DOM_VK_F20 = 131, t.DOM_VK_F21 = 132, t.DOM_VK_F22 = 133, t.DOM_VK_F23 = 134, t.DOM_VK_F24 = 135, t.DOM_VK_F3 = 114, t.DOM_VK_F4 = 115, t.DOM_VK_F5 = 116, t.DOM_VK_F6 = 117, t.DOM_VK_F7 = 118, t.DOM_VK_F8 = 119, t.DOM_VK_F9 = 120, t.DOM_VK_FINAL = 24, t.DOM_VK_G = 71, t.DOM_VK_GREATER_THAN = 62, t.DOM_VK_H = 72, t.DOM_VK_HANGUL = 21, t.DOM_VK_HANJA = 25, t.DOM_VK_HASH = 163, t.DOM_VK_HELP = 6, t.DOM_VK_HOME = 36, t.DOM_VK_HYPHEN_MINUS = 173, t.DOM_VK_I = 73, t.DOM_VK_INSERT = 45, t.DOM_VK_J = 74, t.DOM_VK_JUNJA = 23, t.DOM_VK_K = 75, t.DOM_VK_KANA = 21, t.DOM_VK_KANJI = 25, t.DOM_VK_L = 76, t.DOM_VK_LEFT = 37, t.DOM_VK_LESS_THAN = 60, t.DOM_VK_M = 77, t.DOM_VK_META = 224, t.DOM_VK_MODECHANGE = 31, t.DOM_VK_MULTIPLY = 106, t.DOM_VK_N = 78, t.DOM_VK_NONCONVERT = 29, t.DOM_VK_NUMPAD0 = 96, t.DOM_VK_NUMPAD1 = 97, t.DOM_VK_NUMPAD2 = 98, t.DOM_VK_NUMPAD3 = 99, t.DOM_VK_NUMPAD4 = 100, t.DOM_VK_NUMPAD5 = 101, t.DOM_VK_NUMPAD6 = 102, t.DOM_VK_NUMPAD7 = 103, t.DOM_VK_NUMPAD8 = 104, t.DOM_VK_NUMPAD9 = 105, t.DOM_VK_NUM_LOCK = 144, t.DOM_VK_O = 79, t.DOM_VK_OPEN_BRACKET = 219, t.DOM_VK_OPEN_CURLY_BRACKET = 174, t.DOM_VK_OPEN_PAREN = 168, t.DOM_VK_P = 80, t.DOM_VK_PA1 = 253, t.DOM_VK_PAGE_DOWN = 34, t.DOM_VK_PAGE_UP = 33, t.DOM_VK_PAUSE = 19, t.DOM_VK_PERCENT = 165, t.DOM_VK_PERIOD = 190, t.DOM_VK_PIPE = 172, t.DOM_VK_PLAY = 250, t.DOM_VK_PLUS = 171, t.DOM_VK_PRINT = 42, t.DOM_VK_PRINTSCREEN = 44, t.DOM_VK_PROCESSKEY = 229, t.DOM_VK_Q = 81, t.DOM_VK_QUESTION_MARK = 63, t.DOM_VK_QUOTE = 222, t.DOM_VK_R = 82, t.DOM_VK_RETURN = 13, t.DOM_VK_RIGHT = 39, t.DOM_VK_S = 83, t.DOM_VK_SCROLL_LOCK = 145, t.DOM_VK_SELECT = 41, t.DOM_VK_SEMICOLON = 59, t.DOM_VK_SEPARATOR = 108, t.DOM_VK_SHIFT = 16, t.DOM_VK_SLASH = 191, t.DOM_VK_SLEEP = 95, t.DOM_VK_SPACE = 32, t.DOM_VK_SUBTRACT = 109, t.DOM_VK_T = 84, t.DOM_VK_TAB = 9, t.DOM_VK_TILDE = 176, t.DOM_VK_U = 85, t.DOM_VK_UNDERSCORE = 167, t.DOM_VK_UP = 38, t.DOM_VK_V = 86, t.DOM_VK_VOLUME_DOWN = 182, t.DOM_VK_VOLUME_MUTE = 181, t.DOM_VK_VOLUME_UP = 183, t.DOM_VK_W = 87, t.DOM_VK_WIN = 91, t.DOM_VK_WIN_ICO_00 = 228, t.DOM_VK_WIN_ICO_CLEAR = 230, t.DOM_VK_WIN_ICO_HELP = 227, t.DOM_VK_WIN_OEM_ATTN = 240, t.DOM_VK_WIN_OEM_AUTO = 243, t.DOM_VK_WIN_OEM_BACKTAB = 245, t.DOM_VK_WIN_OEM_CLEAR = 254, t.DOM_VK_WIN_OEM_COPY = 242, t.DOM_VK_WIN_OEM_CUSEL = 239, t.DOM_VK_WIN_OEM_ENLW = 244, t.DOM_VK_WIN_OEM_FINISH = 241, t.DOM_VK_WIN_OEM_FJ_JISHO = 146, t.DOM_VK_WIN_OEM_FJ_LOYA = 149, t.DOM_VK_WIN_OEM_FJ_MASSHOU = 147, t.DOM_VK_WIN_OEM_FJ_ROYA = 150, t.DOM_VK_WIN_OEM_FJ_TOUROKU = 148, t.DOM_VK_WIN_OEM_JUMP = 234, t.DOM_VK_WIN_OEM_PA1 = 235, t.DOM_VK_WIN_OEM_PA2 = 236, t.DOM_VK_WIN_OEM_PA3 = 237, t.DOM_VK_WIN_OEM_RESET = 233, t.DOM_VK_WIN_OEM_WSCTRL = 238, t.DOM_VK_X = 88, t.DOM_VK_Y = 89, t.DOM_VK_Z = 90, t.DOM_VK_ZOOM = 251, i([l(1)], t.prototype, "DOM_KEY_LOCATION_LEFT", void 0), i([l(3)], t.prototype, "DOM_KEY_LOCATION_NUMPAD", void 0), i([l(2)], t.prototype, "DOM_KEY_LOCATION_RIGHT", void 0), i([l(0)], t.prototype, "DOM_KEY_LOCATION_STANDARD", void 0), i([l(48)], t.prototype, "DOM_VK_0", void 0), i([l(49)], t.prototype, "DOM_VK_1", void 0), i([l(50)], t.prototype, "DOM_VK_2", void 0), i([l(51)], t.prototype, "DOM_VK_3", void 0), i([l(52)], t.prototype, "DOM_VK_4", void 0), i([l(53)], t.prototype, "DOM_VK_5", void 0), i([l(54)], t.prototype, "DOM_VK_6", void 0), i([l(55)], t.prototype, "DOM_VK_7", void 0), i([l(56)], t.prototype, "DOM_VK_8", void 0), i([l(57)], t.prototype, "DOM_VK_9", void 0), i([l(65)], t.prototype, "DOM_VK_A", void 0), i([l(30)], t.prototype, "DOM_VK_ACCEPT", void 0), i([l(107)], t.prototype, "DOM_VK_ADD", void 0), i([l(18)], t.prototype, "DOM_VK_ALT", void 0), i([l(225)], t.prototype, "DOM_VK_ALTGR", void 0), i([l(166)], t.prototype, "DOM_VK_AMPERSAND", void 0), i([l(170)], t.prototype, "DOM_VK_ASTERISK", void 0), i([l(64)], t.prototype, "DOM_VK_AT", void 0), i([l(246)], t.prototype, "DOM_VK_ATTN", void 0), i([l(66)], t.prototype, "DOM_VK_B", void 0), i([l(192)], t.prototype, "DOM_VK_BACK_QUOTE", void 0), i([l(220)], t.prototype, "DOM_VK_BACK_SLASH", void 0), i([l(8)], t.prototype, "DOM_VK_BACK_SPACE", void 0), i([l(67)], t.prototype, "DOM_VK_C", void 0), i([l(3)], t.prototype, "DOM_VK_CANCEL", void 0), i([l(20)], t.prototype, "DOM_VK_CAPS_LOCK", void 0), i([l(160)], t.prototype, "DOM_VK_CIRCUMFLEX", void 0), i([l(12)], t.prototype, "DOM_VK_CLEAR", void 0), i([l(221)], t.prototype, "DOM_VK_CLOSE_BRACKET", void 0), i([l(175)], t.prototype, "DOM_VK_CLOSE_CURLY_BRACKET", void 0), i([l(169)], t.prototype, "DOM_VK_CLOSE_PAREN", void 0), i([l(58)], t.prototype, "DOM_VK_COLON", void 0), i([l(188)], t.prototype, "DOM_VK_COMMA", void 0), i([l(93)], t.prototype, "DOM_VK_CONTEXT_MENU", void 0), i([l(17)], t.prototype, "DOM_VK_CONTROL", void 0), i([l(28)], t.prototype, "DOM_VK_CONVERT", void 0), i([l(247)], t.prototype, "DOM_VK_CRSEL", void 0), i([l(68)], t.prototype, "DOM_VK_D", void 0), i([l(110)], t.prototype, "DOM_VK_DECIMAL", void 0), i([l(46)], t.prototype, "DOM_VK_DELETE", void 0), i([l(111)], t.prototype, "DOM_VK_DIVIDE", void 0), i([l(164)], t.prototype, "DOM_VK_DOLLAR", void 0), i([l(162)], t.prototype, "DOM_VK_DOUBLE_QUOTE", void 0), i([l(40)], t.prototype, "DOM_VK_DOWN", void 0), i([l(69)], t.prototype, "DOM_VK_E", void 0), i([l(22)], t.prototype, "DOM_VK_EISU", void 0), i([l(35)], t.prototype, "DOM_VK_END", void 0), i([l(61)], t.prototype, "DOM_VK_EQUALS", void 0), i([l(249)], t.prototype, "DOM_VK_EREOF", void 0), i([l(27)], t.prototype, "DOM_VK_ESCAPE", void 0), i([l(161)], t.prototype, "DOM_VK_EXCLAMATION", void 0), i([l(43)], t.prototype, "DOM_VK_EXECUTE", void 0), i([l(248)], t.prototype, "DOM_VK_EXSEL", void 0), i([l(70)], t.prototype, "DOM_VK_F", void 0), i([l(112)], t.prototype, "DOM_VK_F1", void 0), i([l(121)], t.prototype, "DOM_VK_F10", void 0), i([l(122)], t.prototype, "DOM_VK_F11", void 0), i([l(123)], t.prototype, "DOM_VK_F12", void 0), i([l(124)], t.prototype, "DOM_VK_F13", void 0), i([l(125)], t.prototype, "DOM_VK_F14", void 0), i([l(126)], t.prototype, "DOM_VK_F15", void 0), i([l(127)], t.prototype, "DOM_VK_F16", void 0), i([l(128)], t.prototype, "DOM_VK_F17", void 0), i([l(129)], t.prototype, "DOM_VK_F18", void 0), i([l(130)], t.prototype, "DOM_VK_F19", void 0), i([l(113)], t.prototype, "DOM_VK_F2", void 0), i([l(131)], t.prototype, "DOM_VK_F20", void 0), i([l(132)], t.prototype, "DOM_VK_F21", void 0), i([l(133)], t.prototype, "DOM_VK_F22", void 0), i([l(134)], t.prototype, "DOM_VK_F23", void 0), i([l(135)], t.prototype, "DOM_VK_F24", void 0), i([l(114)], t.prototype, "DOM_VK_F3", void 0), i([l(115)], t.prototype, "DOM_VK_F4", void 0), i([l(116)], t.prototype, "DOM_VK_F5", void 0), i([l(117)], t.prototype, "DOM_VK_F6", void 0), i([l(118)], t.prototype, "DOM_VK_F7", void 0), i([l(119)], t.prototype, "DOM_VK_F8", void 0), i([l(120)], t.prototype, "DOM_VK_F9", void 0), i([l(24)], t.prototype, "DOM_VK_FINAL", void 0), i([l(71)], t.prototype, "DOM_VK_G", void 0), i([l(62)], t.prototype, "DOM_VK_GREATER_THAN", void 0), i([l(72)], t.prototype, "DOM_VK_H", void 0), i([l(21)], t.prototype, "DOM_VK_HANGUL", void 0), i([l(25)], t.prototype, "DOM_VK_HANJA", void 0), i([l(163)], t.prototype, "DOM_VK_HASH", void 0), i([l(6)], t.prototype, "DOM_VK_HELP", void 0), i([l(36)], t.prototype, "DOM_VK_HOME", void 0), i([l(173)], t.prototype, "DOM_VK_HYPHEN_MINUS", void 0), i([l(73)], t.prototype, "DOM_VK_I", void 0), i([l(45)], t.prototype, "DOM_VK_INSERT", void 0), i([l(74)], t.prototype, "DOM_VK_J", void 0), i([l(23)], t.prototype, "DOM_VK_JUNJA", void 0), i([l(75)], t.prototype, "DOM_VK_K", void 0), i([l(21)], t.prototype, "DOM_VK_KANA", void 0), i([l(25)], t.prototype, "DOM_VK_KANJI", void 0), i([l(76)], t.prototype, "DOM_VK_L", void 0), i([l(37)], t.prototype, "DOM_VK_LEFT", void 0), i([l(60)], t.prototype, "DOM_VK_LESS_THAN", void 0), i([l(77)], t.prototype, "DOM_VK_M", void 0), i([l(224)], t.prototype, "DOM_VK_META", void 0), i([l(31)], t.prototype, "DOM_VK_MODECHANGE", void 0), i([l(106)], t.prototype, "DOM_VK_MULTIPLY", void 0), i([l(78)], t.prototype, "DOM_VK_N", void 0), i([l(29)], t.prototype, "DOM_VK_NONCONVERT", void 0), i([l(96)], t.prototype, "DOM_VK_NUMPAD0", void 0), i([l(97)], t.prototype, "DOM_VK_NUMPAD1", void 0), i([l(98)], t.prototype, "DOM_VK_NUMPAD2", void 0), i([l(99)], t.prototype, "DOM_VK_NUMPAD3", void 0), i([l(100)], t.prototype, "DOM_VK_NUMPAD4", void 0), i([l(101)], t.prototype, "DOM_VK_NUMPAD5", void 0), i([l(102)], t.prototype, "DOM_VK_NUMPAD6", void 0), i([l(103)], t.prototype, "DOM_VK_NUMPAD7", void 0), i([l(104)], t.prototype, "DOM_VK_NUMPAD8", void 0), i([l(105)], t.prototype, "DOM_VK_NUMPAD9", void 0), i([l(144)], t.prototype, "DOM_VK_NUM_LOCK", void 0), i([l(79)], t.prototype, "DOM_VK_O", void 0), i([l(219)], t.prototype, "DOM_VK_OPEN_BRACKET", void 0), i([l(174)], t.prototype, "DOM_VK_OPEN_CURLY_BRACKET", void 0), i([l(168)], t.prototype, "DOM_VK_OPEN_PAREN", void 0), i([l(80)], t.prototype, "DOM_VK_P", void 0), i([l(253)], t.prototype, "DOM_VK_PA1", void 0), i([l(34)], t.prototype, "DOM_VK_PAGE_DOWN", void 0), i([l(33)], t.prototype, "DOM_VK_PAGE_UP", void 0), i([l(19)], t.prototype, "DOM_VK_PAUSE", void 0), i([l(165)], t.prototype, "DOM_VK_PERCENT", void 0), i([l(190)], t.prototype, "DOM_VK_PERIOD", void 0), i([l(172)], t.prototype, "DOM_VK_PIPE", void 0), i([l(250)], t.prototype, "DOM_VK_PLAY", void 0), i([l(171)], t.prototype, "DOM_VK_PLUS", void 0), i([l(42)], t.prototype, "DOM_VK_PRINT", void 0), i([l(44)], t.prototype, "DOM_VK_PRINTSCREEN", void 0), i([l(229)], t.prototype, "DOM_VK_PROCESSKEY", void 0), i([l(81)], t.prototype, "DOM_VK_Q", void 0), i([l(63)], t.prototype, "DOM_VK_QUESTION_MARK", void 0), i([l(222)], t.prototype, "DOM_VK_QUOTE", void 0), i([l(82)], t.prototype, "DOM_VK_R", void 0), i([l(13)], t.prototype, "DOM_VK_RETURN", void 0), i([l(39)], t.prototype, "DOM_VK_RIGHT", void 0), i([l(83)], t.prototype, "DOM_VK_S", void 0), i([l(145)], t.prototype, "DOM_VK_SCROLL_LOCK", void 0), i([l(41)], t.prototype, "DOM_VK_SELECT", void 0), i([l(59)], t.prototype, "DOM_VK_SEMICOLON", void 0), i([l(108)], t.prototype, "DOM_VK_SEPARATOR", void 0), i([l(16)], t.prototype, "DOM_VK_SHIFT", void 0), i([l(191)], t.prototype, "DOM_VK_SLASH", void 0), i([l(95)], t.prototype, "DOM_VK_SLEEP", void 0), i([l(32)], t.prototype, "DOM_VK_SPACE", void 0), i([l(109)], t.prototype, "DOM_VK_SUBTRACT", void 0), i([l(84)], t.prototype, "DOM_VK_T", void 0), i([l(9)], t.prototype, "DOM_VK_TAB", void 0), i([l(176)], t.prototype, "DOM_VK_TILDE", void 0), i([l(85)], t.prototype, "DOM_VK_U", void 0), i([l(167)], t.prototype, "DOM_VK_UNDERSCORE", void 0), i([l(38)], t.prototype, "DOM_VK_UP", void 0), i([l(86)], t.prototype, "DOM_VK_V", void 0), i([l(182)], t.prototype, "DOM_VK_VOLUME_DOWN", void 0), i([l(181)], t.prototype, "DOM_VK_VOLUME_MUTE", void 0), i([l(183)], t.prototype, "DOM_VK_VOLUME_UP", void 0), i([l(87)], t.prototype, "DOM_VK_W", void 0), i([l(91)], t.prototype, "DOM_VK_WIN", void 0), i([l(228)], t.prototype, "DOM_VK_WIN_ICO_00", void 0), i([l(230)], t.prototype, "DOM_VK_WIN_ICO_CLEAR", void 0), i([l(227)], t.prototype, "DOM_VK_WIN_ICO_HELP", void 0), i([l(240)], t.prototype, "DOM_VK_WIN_OEM_ATTN", void 0), i([l(243)], t.prototype, "DOM_VK_WIN_OEM_AUTO", void 0), i([l(245)], t.prototype, "DOM_VK_WIN_OEM_BACKTAB", void 0), i([l(254)], t.prototype, "DOM_VK_WIN_OEM_CLEAR", void 0), i([l(242)], t.prototype, "DOM_VK_WIN_OEM_COPY", void 0), i([l(239)], t.prototype, "DOM_VK_WIN_OEM_CUSEL", void 0), i([l(244)], t.prototype, "DOM_VK_WIN_OEM_ENLW", void 0), i([l(241)], t.prototype, "DOM_VK_WIN_OEM_FINISH", void 0), i([l(146)], t.prototype, "DOM_VK_WIN_OEM_FJ_JISHO", void 0), i([l(149)], t.prototype, "DOM_VK_WIN_OEM_FJ_LOYA", void 0), i([l(147)], t.prototype, "DOM_VK_WIN_OEM_FJ_MASSHOU", void 0), i([l(150)], t.prototype, "DOM_VK_WIN_OEM_FJ_ROYA", void 0), i([l(148)], t.prototype, "DOM_VK_WIN_OEM_FJ_TOUROKU", void 0), i([l(234)], t.prototype, "DOM_VK_WIN_OEM_JUMP", void 0), i([l(235)], t.prototype, "DOM_VK_WIN_OEM_PA1", void 0), i([l(236)], t.prototype, "DOM_VK_WIN_OEM_PA2", void 0), i([l(237)], t.prototype, "DOM_VK_WIN_OEM_PA3", void 0), i([l(233)], t.prototype, "DOM_VK_WIN_OEM_RESET", void 0), i([l(238)], t.prototype, "DOM_VK_WIN_OEM_WSCTRL", void 0), i([l(88)], t.prototype, "DOM_VK_X", void 0), i([l(89)], t.prototype, "DOM_VK_Y", void 0), i([l(90)], t.prototype, "DOM_VK_Z", void 0), i([l(251)], t.prototype, "DOM_VK_ZOOM", void 0), t
        }(c.default);
    t.default = s
}, function (e, t, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function (e, t) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }
            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(n(1)),
        c = function (e) {
            void 0 === e && (e = {
                x: null,
                y: null,
                z: null
            }), this.x = e.x, this.y = e.y, this.z = e.z
        },
        l = function (e) {
            void 0 === e && (e = {
                alpha: null,
                beta: null,
                gamma: null
            });
            var t = e.alpha,
                n = void 0 === t ? null : t,
                o = e.beta,
                r = void 0 === o ? null : o,
                i = e.gamma,
                a = void 0 === i ? null : i;
            this.alpha = n, this.beta = r, this.gamma = a
        },
        p = {},
        u = function (e) {
            function t(t, n) {
                void 0 === n && (n = {});
                var o = this;
                if (void 0 === t) throw new TypeError("TypeError: DeviceMotionEvent requires at least 1 argument, but only 0 were passed");
                o = e.call(this, "devicemotion") || this;
                var r = Symbol("DeviceMotionEvent"),
                    i = n.acceleration,
                    a = n.accelerationIncludingGravity,
                    u = n.rotationRate,
                    s = n.interval,
                    f = void 0 === s ? null : s;
                return p[r] = {
                    acceleration: new c(i),
                    accelerationIncludingGravity: new c(a),
                    rotationRate: new l(u),
                    interval: f
                }, o.__symbol__ = r, o
            }
            return r(t, e), t.prototype.initDeviceMotionEvent = function () {
                if (!(this instanceof t)) throw new TypeError("'initDeviceMotionEvent' called on an object that does not implement interface DeviceMotionEvent.")
            }, Object.defineProperty(t.prototype, "acceleration", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get acceleration' called on an object that does not implement interface DeviceMotionEvent.");
                    return p[this.__symbol__].acceleration
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "accelerationIncludingGravity", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get accelerationIncludingGravity' called on an object that does not implement interface DeviceMotionEvent.");
                    return p[this.__symbol__].accelerationIncludingGravity
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "rotationRate", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get rotationRate' called on an object that does not implement interface DeviceMotionEvent.");
                    return p[this.__symbol__].rotationRate
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "interval", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get interval' called on an object that does not implement interface DeviceMotionEvent.");
                    return p[this.__symbol__].interval
                },
                enumerable: !0,
                configurable: !0
            }), t
        }(a.default);
    t.default = u
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function (e, t, n, o) {
        this.x = e, this.y = t, this.width = n, this.height = o
    };
    t.default = o
}, function (e, t, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function (e, t) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }
            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(0),
        c = function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.$nodeType = 9, n.$nodeName = "#document", n
            }
            return r(t, e), t
        }(i(n(22)).default);
    t.default = c, t.document = new c(a.SYMBOL_NODE)
}, function (e, t, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function (e, t) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }
            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(0),
        c = i(n(2)),
        l = n(8),
        p = i(n(23)),
        u = i(n(9)),
        s = i(n(10)),
        f = i(n(4)),
        d = i(n(24)),
        h = i(n(11)),
        m = i(n(12)),
        y = i(n(13)),
        b = function (e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r(t, e), Object.defineProperty(t.prototype, "URL", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get URL' called on an object that does not implement interface Document.");
                    return "about:blank"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "bgColor", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get bgColor' called on an object that does not implement interface Document.");
                    return ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "body", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get body' called on an object that does not implement interface Document.");
                    var e = new f.default("body", a.SYMBOL_NODE);
                    return e.$style = {
                        width: window.innerWidth + "px",
                        height: window.innerHeight + "px"
                    }, e.$parentNode = mainCanvas, e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "fonts", {
                get: function () {
                    return new y.default
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "characterSet", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get characterSet' called on an object that does not implement interface Document.");
                    return "UTF-8"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "charset", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get charset' called on an object that does not implement interface Document.");
                    return "UTF-8"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "compatMode", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get compatMode' called on an object that does not implement interface Document.");
                    return "CSS1Compat"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "contentType", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get contentType' called on an object that does not implement interface Document.");
                    return "application/xml"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "cookie", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get cookie' called on an object that does not implement interface Document.");
                    return ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "designMode", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get designMode' called on an object that does not implement interface Document.");
                    return "off"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "dir", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get dir' called on an object that does not implement interface Document.");
                    return ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "doctype", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get doctype' called on an object that does not implement interface Document.");
                    return null
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "documentElement", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get documentElement' called on an object that does not implement interface Document.");
                    return mainCanvas
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "documentURI", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get documentURI' called on an object that does not implement interface Document.");
                    return "about:blank"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "domain", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get domain' called on an object that does not implement interface Document.");
                    return ""
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "head", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get head' called on an object that does not implement interface Document.");
                    var e = new f.default("head", a.SYMBOL_NODE);
                    return e.$style = {
                        width: window.innerWidth + "px",
                        height: window.innerHeight + "px"
                    }, e.$parentNode = mainCanvas, e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "inputEncoding", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get inputEncoding' called on an object that does not implement interface Document.");
                    return "UTF-8"
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "lastModified", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get lastModified' called on an object that does not implement interface Document.");
                    return (new Date).toLocaleString()
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "scripts", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get scripts' called on an object that does not implement interface Document.");
                    return []
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "location", {
                get: function () {
                    return l.location
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.createDocumentFragment = function () {
                if (!(this instanceof t)) throw new TypeError("'createDocumentFragment' called on an object that does not implement interface Document.");
                return new p.default
            }, t.prototype.createElement = function (e) {
                if (!(this instanceof t)) throw new TypeError("'createElement' called on an object that does not implement interface Document.");
                if (void 0 === e) throw new TypeError("Document.createElement requires at least 1 argument, but only 0 were passed");
                return "canvas" === e ? new HTMLCanvasElement : "audio" === e ? new d.default("") : "img" === e ? new h.default : "video" === e ? new u.default : "script" === e ? new s.default : new f.default(e, a.SYMBOL_NODE)
            }, t.prototype.createElementNS = function (e, n) {
                if (!(this instanceof t)) throw new TypeError("'createElementNS' called on an object that does not implement interface Document.");
                return this.createElement(n)
            }, t.prototype.createEvent = function (e) {
                if (!(this instanceof t)) throw new TypeError("'createEvent' called on an object that does not implement interface Document.");
                return window[e] ? new window[e] : null
            }, t.prototype.createTextNode = function (e) {
                if (!(this instanceof t)) throw new TypeError("'createTextNode' called on an object that does not implement interface Document.");
                return new m.default(e)
            }, t.prototype.elementFromPoint = function (e, n) {
                if (!(this instanceof t)) throw new TypeError("'elementFromPoint' called on an object that does not implement interface Document.");
                return window.canvas
            }, t.prototype.getElementById = function (e) {
                if (!(this instanceof t)) throw new TypeError("'getElementById' called on an object that does not implement interface Document.");
                return e === mainCanvas.id || "canvas" === e ? mainCanvas : new f.default(e, a.SYMBOL_NODE)
            }, t.prototype.getElementsByClassName = function (e) {
                if (!(this instanceof t)) throw new TypeError("'getElementsByClassName' called on an object that does not implement interface Document.");
                return [mainCanvas]
            }, t.prototype.getElementsByName = function (e) {
                if (!(this instanceof t)) throw new TypeError("'getElementsByName' called on an object that does not implement interface Document.");
                return "head" === e ? [this.head] : "body" === e ? [this.body] : "canvas" === e ? [mainCanvas] : [new f.default(e, a.SYMBOL_NODE)]
            }, t.prototype.getElementsByTagName = function (e) {
                if (!(this instanceof t)) throw new TypeError("'getElementsByTagName' called on an object that does not implement interface Document.");
                return "head" === e ? [this.head] : "body" === e ? [this.body] : "canvas" === e ? [mainCanvas] : [new f.default(e, a.SYMBOL_NODE)]
            }, t.prototype.getElementsByTagNameNS = function () {
                if (!(this instanceof t)) throw new TypeError("'getElementsByTagNameNS' called on an object that does not implement interface Document.");
                return [mainCanvas]
            }, t.prototype.querySelector = function (e) {
                return "head" === e ? this.head : "body" === e ? this.body : "canvas" === e ? mainCanvas : e === "#" + mainCanvas.id ? mainCanvas : new f.default(e, a.SYMBOL_NODE)
            }, t.prototype.querySelectorAll = function (e) {
                return "head" === e ? [this.head] : "body" === e ? [this.body] : "canvas" === e ? [mainCanvas] : [new f.default(e, a.SYMBOL_NODE)]
            }, t
        }(c.default);
    t.default = b
}, function (e, t, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function (e, t) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }
            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = n(0),
        c = function (e) {
            function t() {
                return e.call(this, a.SYMBOL_NODE) || this
            }
            return r(t, e), t
        }(i(n(2)).default);
    t.default = c
}, function (e, t, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function (e, t) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }
            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(n(6)),
        c = n(0),
        l = function (e) {
            function t(t) {
                return void 0 === t && (t = ""), e.call(this, t, c.SYMBOL_NODE) || this
            }
            return r(t, e), t
        }(a.default);
    t.default = l
}, function (e, t, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function (e, t) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }
            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        i = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = i(n(2)),
        c = {},
        l = function (e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.__symbol__ = Symbol("CharacterData"), c[n.__symbol__] = {
                    data: ""
                }, n
            }
            return r(t, e), Object.defineProperty(t.prototype, "data", {
                get: function () {
                    if (this instanceof t) throw new TypeError("'get data' called on an object that does not implement interface CharacterData.");
                    return c[this.__symbol__].data
                },
                set: function (e) {
                    if (this instanceof t) throw new TypeError("'set data' called on an object that does not implement interface CharacterData.");
                    c[this.__symbol__].data = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "length", {
                get: function () {
                    if (this instanceof t) throw new TypeError("'get length' called on an object that does not implement interface CharacterData.");
                    return c[this.__symbol__].data.length
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "nextElementSibling", {
                get: function () {
                    if (this instanceof t) throw new TypeError("'get nextElementSibling' called on an object that does not implement interface CharacterData.");
                    if (!this.parentNode) return null;
                    for (var e = this.parentNode.children.length, n = !1, o = this.parentNode.children, r = 0; r < e; r++) {
                        var i = o[r];
                        if (n && 1 === i.nodeType) return i;
                        i === this && (n = !0)
                    }
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "previousElementSibling", {
                get: function () {
                    if (this instanceof t) throw new TypeError("'get previousElementSibling' called on an object that does not implement interface CharacterData.");
                    return console.warn("##TODO##CharacterData:previousElementSibling"), null
                },
                enumerable: !0,
                configurable: !0
            }), t.prototype.after = function () {
                if (this instanceof t) throw new TypeError("'after' called on an object that does not implement interface CharacterData.")
            }, t.prototype.before = function () {
                if (this instanceof t) throw new TypeError("'before' called on an object that does not implement interface CharacterData.")
            }, t.prototype.appendData = function () {
                if (this instanceof t) throw new TypeError("'appendData' called on an object that does not implement interface CharacterData.")
            }, t.prototype.deleteData = function () {
                if (this instanceof t) throw new TypeError("'deleteData' called on an object that does not implement interface CharacterData.")
            }, t.prototype.insertData = function () {
                if (this instanceof t) throw new TypeError("'insertData' called on an object that does not implement interface CharacterData.")
            }, t.prototype.remove = function () {
                if (this instanceof t) throw new TypeError("'remove' called on an object that does not implement interface CharacterData.")
            }, t.prototype.replaceData = function () {
                if (this instanceof t) throw new TypeError("'replaceData' called on an object that does not implement interface CharacterData.")
            }, t.prototype.replaceWith = function () {
                if (this instanceof t) throw new TypeError("'replaceWith' called on an object that does not implement interface CharacterData.")
            }, t
        }(a.default);
    t.default = l
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = qg.createImage().constructor
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(0),
        r = function () {
            function e(e) {
                switch (this.symbol = null, this.symbol = e, e) {
                    case o.SYMBOL_LOCALSTORAGE:
                        break;
                    default:
                        console.error(new TypeError("Illegal constructor"))
                }
            }
            return Object.defineProperty(e.prototype, "length", {
                get: function () {
                    return this instanceof e || console.error(new TypeError("Illegal invocation")), (this.symbol = o.SYMBOL_LOCALSTORAGE) ? qg.getStorageInfoSync().keys.length : 0
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.key = function (t) {
                if (this instanceof e || console.error(new TypeError("Illegal invocation")), this.symbol = o.SYMBOL_LOCALSTORAGE) return qg.getStorageInfoSync().keys[t]
            }, e.prototype.clear = function () {
                this instanceof e || console.error(new TypeError("Illegal invocation")), (this.symbol = o.SYMBOL_LOCALSTORAGE) && qg.clearStorageSync()
            }, e.prototype.getItem = function (t) {
                if (this instanceof e || console.error(new TypeError("Illegal invocation")), this.symbol = o.SYMBOL_LOCALSTORAGE) return qg.getStorageSync({
                    key: t
                })
            }, e.prototype.removeItem = function (t) {
                this instanceof e || console.error(new TypeError("Illegal invocation")), (this.symbol = o.SYMBOL_LOCALSTORAGE) && qg.deleteStorageSync({
                    key: t
                })
            }, e.prototype.setItem = function (t, n) {
                this instanceof e || console.error(new TypeError("Illegal invocation")), (this.symbol = o.SYMBOL_LOCALSTORAGE) && qg.setStorageSync({
                    key: t,
                    value: n
                })
            }, e
        }();
    t.default = r, t.localStorage = new r(o.SYMBOL_LOCALSTORAGE)
}, function (e, t, n) {
    "use strict";
    var o, r = this && this.__extends || (o = function (e, t) {
            return (o = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function (e, t) {
                    e.__proto__ = t
                } || function (e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(e, t)
        }, function (e, t) {
            function n() {
                this.constructor = e
            }
            o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }),
        i = this && this.__decorate || function (e, t, n, o) {
            var r, i = arguments.length,
                a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
            else
                for (var c = e.length - 1; c >= 0; c--)(r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, n, a) : r(t, n)) || a);
            return i > 3 && a && Object.defineProperty(t, n, a), a
        },
        a = this && this.__importDefault || function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = a(n(3)),
        l = a(n(1)),
        p = function (e) {
            return function (t, n) {
                t[n] = e
            }
        },
        u = function (e) {
            function t() {
                var t = e.call(this) || this;
                return t.$result = null, t.$error = null, t.$readyState = 0, t.$onabort = null, t.$onerror = null, t.$onload = null, t.$onloadend = null, t.$onloadstart = null, t.$onprogress = null, t
            }
            return r(t, e), t.prototype.abort = function () {
                if (!(this instanceof t)) throw new TypeError("'abort' called on an object that does not implement interface FileReader.")
            }, t.prototype.readAsArrayBuffer = function () {
                if (!(this instanceof t)) throw new TypeError("'abort' called on an object that does not implement interface FileReader.")
            }, t.prototype.readAsBinaryString = function () {
                if (!(this instanceof t)) throw new TypeError("'abort' called on an object that does not implement interface FileReader.")
            }, t.prototype.readAsDataURL = function (e) {
                if (!(this instanceof t)) throw new TypeError("'abort' called on an object that does not implement interface FileReader.");
                this.$result = "data:image/png;base64," + window.btoa(e), this.dispatchEvent(new l.default("load"))
            }, t.prototype.readAsText = function () {
                if (!(this instanceof t)) throw new TypeError("'abort' called on an object that does not implement interface FileReader.")
            }, Object.defineProperty(t.prototype, "error", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get error' called on an object that does not implement interface FileReader.");
                    return this.$error
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "onabort", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get onabort' called on an object that does not implement interface FileReader.");
                    return this.$onabort
                },
                set: function (e) {
                    this.$onabort = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "onerror", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get onerror' called on an object that does not implement interface FileReader.");
                    return this.$onerror
                },
                set: function (e) {
                    this.$onerror = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "onload", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get onload' called on an object that does not implement interface FileReader.");
                    return this.$onload
                },
                set: function (e) {
                    this.$onload = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "onloadend", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get onloadend' called on an object that does not implement interface FileReader.");
                    return this.$onloadend
                },
                set: function (e) {
                    this.$onloadend = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "onloadstart", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get onloadstart' called on an object that does not implement interface FileReader.");
                    return this.$onloadstart
                },
                set: function (e) {
                    this.$onloadstart = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "onprogress", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get onprogress' called on an object that does not implement interface FileReader.");
                    return this.$onprogress
                },
                set: function (e) {
                    this.$onprogress = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "readyState", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get readyState' called on an object that does not implement interface FileReader.");
                    return this.$readyState
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(t.prototype, "result", {
                get: function () {
                    if (!(this instanceof t)) throw new TypeError("'get result' called on an object that does not implement interface FileReader.");
                    return this.$result
                },
                enumerable: !0,
                configurable: !0
            }), t.EMPTY = 0, t.LOADING = 1, t.DONE = 2, i([p(0)], t.prototype, "EMPTY", void 0), i([p(1)], t.prototype, "LOADING", void 0), i([p(2)], t.prototype, "DONE", void 0), t
        }(c.default);
    t.default = u
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function () {
        function e(e, t, n) {
            this.family = e, this.source = t, this.descriptors = n, this.status = "unloaded"
        }
        return e.prototype.load = function () {}, Object.defineProperty(e.prototype, "loaded", {
            get: function () {
                var t = this;
                if (!(this instanceof e)) return new Promise((function (e, n) {
                    t.$resolve = e, t.$reject = n
                }))
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.default = o
}, function (e, t, n) {
    "use strict";
    ! function () {
        function e(e) {
            this.message = e
        }
        var n = t,
            o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        e.prototype = new Error, e.prototype.name = "InvalidCharacterError", n.btoa || (n.btoa = function (t) {
            for (var n, r, i = String(t), a = 0, c = o, l = ""; i.charAt(0 | a) || (c = "=", a % 1); l += c.charAt(63 & n >> 8 - a % 1 * 8)) {
                if ((r = i.charCodeAt(a += .75)) > 255) throw new e("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
                n = n << 8 | r
            }
            return l
        }), n.atob || (n.atob = function (t) {
            var n = String(t).replace(/[=]+$/, "");
            if (n.length % 4 == 1) throw new e("'atob' failed: The string to be decoded is not correctly encoded.");
            for (var r, i, a = 0, c = 0, l = ""; i = n.charAt(c++); ~i && (r = a % 4 ? 64 * r + i : i, a++ % 4) ? l += String.fromCharCode(255 & r >> (-2 * a & 6)) : 0) i = o.indexOf(i);
            return l
        })
    }()
}, function (e, t, n) {
    "use strict";
    (function (n) {
        var o, r, i;
        ! function (n) {
            r = [t], void 0 === (i = "function" == typeof (o = function (e) {
                if (e.URL = n.URL || n.webkitURL, n.Blob && n.URL) try {
                    return void new Blob
                } catch (e) {}
                var t = n.BlobBuilder || n.WebKitBlobBuilder || n.MozBlobBuilder || function () {
                    var t = function (e) {
                            return Object.prototype.toString.call(e).match(/^\[object\s(.*)\]$/)[1]
                        },
                        o = function () {
                            this.data = []
                        },
                        r = function (e, t, n) {
                            this.data = e, this.size = e.length, this.type = t, this.encoding = n
                        },
                        i = o.prototype,
                        a = r.prototype,
                        c = n.FileReaderSync,
                        l = function (e) {
                            this.code = this[this.name = e]
                        },
                        p = "NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR".split(" "),
                        u = p.length,
                        s = n.URL || n.webkitURL || e,
                        f = s.createObjectURL,
                        d = s.revokeObjectURL,
                        h = s,
                        m = n.btoa,
                        y = n.atob,
                        b = n.ArrayBuffer,
                        _ = n.Uint8Array,
                        g = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;
                    for (r.fake = a.fake = !0; u--;) l.prototype[p[u]] = u + 1;
                    return s.createObjectURL || (h = e.URL = function (e) {
                        var t, n = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
                        return n.href = e, "origin" in n || ("data:" === n.protocol.toLowerCase() ? n.origin = null : (t = e.match(g), n.origin = t && t[1])), n
                    }), h.createObjectURL = function (e) {
                        var t, n = e.type;
                        return null === n && (n = "application/octet-stream"), e instanceof r ? (t = "data:" + n, "base64" === e.encoding ? t + ";base64," + e.data : "URI" === e.encoding ? t + "," + decodeURIComponent(e.data) : m ? t + ";base64," + m(e.data) : t + "," + encodeURIComponent(e.data)) : f ? f.call(s, e) : void 0
                    }, h.revokeObjectURL = function (e) {
                        "data:" !== e.substring(0, 5) && d && d.call(s, e)
                    }, i.append = function (e) {
                        var n = this.data;
                        if (_ && (e instanceof b || e instanceof _)) {
                            for (var o = "", i = new _(e), a = 0, p = i.length; a < p; a++) o += String.fromCharCode(i[a]);
                            n.push(o)
                        } else if ("Blob" === t(e) || "File" === t(e)) {
                            if (!c) throw new l("NOT_READABLE_ERR");
                            var u = new c;
                            n.push(u.readAsBinaryString(e))
                        } else e instanceof r ? "base64" === e.encoding && y ? n.push(y(e.data)) : "URI" === e.encoding ? n.push(decodeURIComponent(e.data)) : "raw" === e.encoding && n.push(e.data) : ("string" != typeof e && (e += ""), n.push(unescape(encodeURIComponent(e))))
                    }, i.getBlob = function (e) {
                        return arguments.length || (e = null), new r(this.data.join(""), e, "raw")
                    }, i.toString = function () {
                        return "[object BlobBuilder]"
                    }, a.slice = function (e, t, n) {
                        var o = arguments.length;
                        return o < 3 && (n = null), new r(this.data.slice(e, o > 1 ? t : this.data.length), n, this.encoding)
                    }, a.toString = function () {
                        return "[object Blob]"
                    }, a.close = function () {
                        this.size = 0, delete this.data
                    }, o
                }();
                e.Blob = function (e, n) {
                    var o = n && n.type || "",
                        r = new t;
                    if (e)
                        for (var i = 0, a = e.length; i < a; i++) Uint8Array && e[i] instanceof Uint8Array ? r.append(e[i].buffer) : r.append(e[i]);
                    var c = r.getBlob(o);
                    return !c.slice && c.webkitSlice && (c.slice = c.webkitSlice), c
                };
                var o = Object.getPrototypeOf || function (e) {
                    return e.__proto__
                };
                e.Blob.prototype = o(new e.Blob)
            }) ? o.apply(t, r) : o) || (e.exports = i)
        }("undefined" != typeof self && self || "undefined" != typeof window && window || void 0 !== n && n || this.content || this)
    }).call(this, n(32))
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    "use strict";

    function o(e) {
        this.options = e || {
            locator: {}
        }
    }

    function r() {
        this.cdata = !1
    }

    function i(e, t) {
        t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber
    }

    function a(e) {
        if (e) return "\n@" + (e.systemId || "") + "#[line:" + e.lineNumber + ",col:" + e.columnNumber + "]"
    }

    function c(e, t, n) {
        return "string" == typeof e ? e.substr(t, n) : e.length >= t + n || t ? new java.lang.String(e, t, n) + "" : e
    }

    function l(e, t) {
        e.currentElement ? e.currentElement.appendChild(t) : e.doc.appendChild(t)
    }
    o.prototype.parseFromString = function (e, t) {
        var n = this.options,
            o = new u,
            i = n.domBuilder || new r,
            c = n.errorHandler,
            l = n.locator,
            s = n.xmlns || {},
            f = /\/x?html?$/.test(t),
            d = f ? p.entityMap : {
                lt: "<",
                gt: ">",
                amp: "&",
                quot: '"',
                apos: "'"
            };
        return l && i.setDocumentLocator(l), o.errorHandler = function (e, t, n) {
            if (!e) {
                if (t instanceof r) return t;
                e = t
            }
            var o = {},
                i = e instanceof Function;

            function c(t) {
                var r = e[t];
                !r && i && (r = 2 == e.length ? function (n) {
                    e(t, n)
                } : e), o[t] = r && function (e) {
                    r("[xmldom " + t + "]\t" + e + a(n))
                } || function () {}
            }
            return n = n || {}, c("warning"), c("error"), c("fatalError"), o
        }(c, i, l), o.domBuilder = n.domBuilder || i, f && (s[""] = "http://www.w3.org/1999/xhtml"), s.xml = s.xml || "http://www.w3.org/XML/1998/namespace", e ? o.parse(e, s, d) : o.errorHandler.error("invalid doc source"), i.doc
    }, r.prototype = {
        startDocument: function () {
            this.doc = (new s).createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId)
        },
        startElement: function (e, t, n, o) {
            var r = this.doc,
                a = r.createElementNS(e, n || t),
                c = o.length;
            l(this, a), this.currentElement = a, this.locator && i(this.locator, a);
            for (var p = 0; p < c; p++) {
                e = o.getURI(p);
                var u = o.getValue(p),
                    s = (n = o.getQName(p), r.createAttributeNS(e, n));
                this.locator && i(o.getLocator(p), s), s.value = s.nodeValue = u, a.setAttributeNode(s)
            }
        },
        endElement: function (e, t, n) {
            var o = this.currentElement;
            o.tagName;
            this.currentElement = o.parentNode
        },
        startPrefixMapping: function (e, t) {},
        endPrefixMapping: function (e) {},
        processingInstruction: function (e, t) {
            var n = this.doc.createProcessingInstruction(e, t);
            this.locator && i(this.locator, n), l(this, n)
        },
        ignorableWhitespace: function (e, t, n) {},
        characters: function (e, t, n) {
            if (e = c.apply(this, arguments)) {
                if (this.cdata) var o = this.doc.createCDATASection(e);
                else o = this.doc.createTextNode(e);
                this.currentElement ? this.currentElement.appendChild(o) : /^\s*$/.test(e) && this.doc.appendChild(o), this.locator && i(this.locator, o)
            }
        },
        skippedEntity: function (e) {},
        endDocument: function () {
            this.doc.normalize()
        },
        setDocumentLocator: function (e) {
            (this.locator = e) && (e.lineNumber = 0)
        },
        comment: function (e, t, n) {
            e = c.apply(this, arguments);
            var o = this.doc.createComment(e);
            this.locator && i(this.locator, o), l(this, o)
        },
        startCDATA: function () {
            this.cdata = !0
        },
        endCDATA: function () {
            this.cdata = !1
        },
        startDTD: function (e, t, n) {
            var o = this.doc.implementation;
            if (o && o.createDocumentType) {
                var r = o.createDocumentType(e, t, n);
                this.locator && i(this.locator, r), l(this, r)
            }
        },
        warning: function (e) {
            console.warn("[xmldom warning]\t" + e, a(this.locator))
        },
        error: function (e) {
            console.error("[xmldom error]\t" + e, a(this.locator))
        },
        fatalError: function (e) {
            throw console.error("[xmldom fatalError]\t" + e, a(this.locator)), e
        }
    }, "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, (function (e) {
        r.prototype[e] = function () {
            return null
        }
    }));
    var p = n(34),
        u = n(35).XMLReader,
        s = t.DOMImplementation = n(14).DOMImplementation;
    t.XMLSerializer = n(14).XMLSerializer, t.DOMParser = o
}, function (e, t, n) {
    "use strict";
    t.entityMap = {
        lt: "<",
        gt: ">",
        amp: "&",
        quot: '"',
        apos: "'",
        Agrave: "À",
        Aacute: "Á",
        Acirc: "Â",
        Atilde: "Ã",
        Auml: "Ä",
        Aring: "Å",
        AElig: "Æ",
        Ccedil: "Ç",
        Egrave: "È",
        Eacute: "É",
        Ecirc: "Ê",
        Euml: "Ë",
        Igrave: "Ì",
        Iacute: "Í",
        Icirc: "Î",
        Iuml: "Ï",
        ETH: "Ð",
        Ntilde: "Ñ",
        Ograve: "Ò",
        Oacute: "Ó",
        Ocirc: "Ô",
        Otilde: "Õ",
        Ouml: "Ö",
        Oslash: "Ø",
        Ugrave: "Ù",
        Uacute: "Ú",
        Ucirc: "Û",
        Uuml: "Ü",
        Yacute: "Ý",
        THORN: "Þ",
        szlig: "ß",
        agrave: "à",
        aacute: "á",
        acirc: "â",
        atilde: "ã",
        auml: "ä",
        aring: "å",
        aelig: "æ",
        ccedil: "ç",
        egrave: "è",
        eacute: "é",
        ecirc: "ê",
        euml: "ë",
        igrave: "ì",
        iacute: "í",
        icirc: "î",
        iuml: "ï",
        eth: "ð",
        ntilde: "ñ",
        ograve: "ò",
        oacute: "ó",
        ocirc: "ô",
        otilde: "õ",
        ouml: "ö",
        oslash: "ø",
        ugrave: "ù",
        uacute: "ú",
        ucirc: "û",
        uuml: "ü",
        yacute: "ý",
        thorn: "þ",
        yuml: "ÿ",
        nbsp: " ",
        iexcl: "¡",
        cent: "¢",
        pound: "£",
        curren: "¤",
        yen: "¥",
        brvbar: "¦",
        sect: "§",
        uml: "¨",
        copy: "©",
        ordf: "ª",
        laquo: "«",
        not: "¬",
        shy: "­­",
        reg: "®",
        macr: "¯",
        deg: "°",
        plusmn: "±",
        sup2: "²",
        sup3: "³",
        acute: "´",
        micro: "µ",
        para: "¶",
        middot: "·",
        cedil: "¸",
        sup1: "¹",
        ordm: "º",
        raquo: "»",
        frac14: "¼",
        frac12: "½",
        frac34: "¾",
        iquest: "¿",
        times: "×",
        divide: "÷",
        forall: "∀",
        part: "∂",
        exist: "∃",
        empty: "∅",
        nabla: "∇",
        isin: "∈",
        notin: "∉",
        ni: "∋",
        prod: "∏",
        sum: "∑",
        minus: "−",
        lowast: "∗",
        radic: "√",
        prop: "∝",
        infin: "∞",
        ang: "∠",
        and: "∧",
        or: "∨",
        cap: "∩",
        cup: "∪",
        int: "∫",
        there4: "∴",
        sim: "∼",
        cong: "≅",
        asymp: "≈",
        ne: "≠",
        equiv: "≡",
        le: "≤",
        ge: "≥",
        sub: "⊂",
        sup: "⊃",
        nsub: "⊄",
        sube: "⊆",
        supe: "⊇",
        oplus: "⊕",
        otimes: "⊗",
        perp: "⊥",
        sdot: "⋅",
        Alpha: "Α",
        Beta: "Β",
        Gamma: "Γ",
        Delta: "Δ",
        Epsilon: "Ε",
        Zeta: "Ζ",
        Eta: "Η",
        Theta: "Θ",
        Iota: "Ι",
        Kappa: "Κ",
        Lambda: "Λ",
        Mu: "Μ",
        Nu: "Ν",
        Xi: "Ξ",
        Omicron: "Ο",
        Pi: "Π",
        Rho: "Ρ",
        Sigma: "Σ",
        Tau: "Τ",
        Upsilon: "Υ",
        Phi: "Φ",
        Chi: "Χ",
        Psi: "Ψ",
        Omega: "Ω",
        alpha: "α",
        beta: "β",
        gamma: "γ",
        delta: "δ",
        epsilon: "ε",
        zeta: "ζ",
        eta: "η",
        theta: "θ",
        iota: "ι",
        kappa: "κ",
        lambda: "λ",
        mu: "μ",
        nu: "ν",
        xi: "ξ",
        omicron: "ο",
        pi: "π",
        rho: "ρ",
        sigmaf: "ς",
        sigma: "σ",
        tau: "τ",
        upsilon: "υ",
        phi: "φ",
        chi: "χ",
        psi: "ψ",
        omega: "ω",
        thetasym: "ϑ",
        upsih: "ϒ",
        piv: "ϖ",
        OElig: "Œ",
        oelig: "œ",
        Scaron: "Š",
        scaron: "š",
        Yuml: "Ÿ",
        fnof: "ƒ",
        circ: "ˆ",
        tilde: "˜",
        ensp: " ",
        emsp: " ",
        thinsp: " ",
        zwnj: "‌",
        zwj: "‍",
        lrm: "‎",
        rlm: "‏",
        ndash: "–",
        mdash: "—",
        lsquo: "‘",
        rsquo: "’",
        sbquo: "‚",
        ldquo: "“",
        rdquo: "”",
        bdquo: "„",
        dagger: "†",
        Dagger: "‡",
        bull: "•",
        hellip: "…",
        permil: "‰",
        prime: "′",
        Prime: "″",
        lsaquo: "‹",
        rsaquo: "›",
        oline: "‾",
        euro: "€",
        trade: "™",
        larr: "←",
        uarr: "↑",
        rarr: "→",
        darr: "↓",
        harr: "↔",
        crarr: "↵",
        lceil: "⌈",
        rceil: "⌉",
        lfloor: "⌊",
        rfloor: "⌋",
        loz: "◊",
        spades: "♠",
        clubs: "♣",
        hearts: "♥",
        diams: "♦"
    }
}, function (e, t, n) {
    "use strict";
    var o = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
        r = new RegExp("[\\-\\.0-9" + o.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"),
        i = new RegExp("^" + o.source + r.source + "*(?::" + o.source + r.source + "*)?$"),
        a = 0,
        c = 1,
        l = 2,
        p = 3,
        u = 4,
        s = 5,
        f = 6,
        d = 7;

    function h() {}

    function m(e, t) {
        return t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t
    }

    function y(e, t, n, o, r, i) {
        for (var h, m = ++t, y = a;;) {
            var b = e.charAt(m);
            switch (b) {
                case "=":
                    if (y === c) h = e.slice(t, m), y = p;
                    else {
                        if (y !== l) throw new Error("attribute equal must after attrName");
                        y = p
                    }
                    break;
                case "'":
                case '"':
                    if (y === p || y === c) {
                        if (y === c && (i.warning('attribute value must after "="'), h = e.slice(t, m)), t = m + 1, !((m = e.indexOf(b, t)) > 0)) throw new Error("attribute value no end '" + b + "' match");
                        _ = e.slice(t, m).replace(/&#?\w+;/g, r), n.add(h, _, t - 1), y = s
                    } else {
                        if (y != u) throw new Error('attribute value must after "="');
                        _ = e.slice(t, m).replace(/&#?\w+;/g, r), n.add(h, _, t), i.warning('attribute "' + h + '" missed start quot(' + b + ")!!"), t = m + 1, y = s
                    }
                    break;
                case "/":
                    switch (y) {
                        case a:
                            n.setTagName(e.slice(t, m));
                        case s:
                        case f:
                        case d:
                            y = d, n.closed = !0;
                        case u:
                        case c:
                        case l:
                            break;
                        default:
                            throw new Error("attribute invalid close char('/')")
                    }
                    break;
                case "":
                    return i.error("unexpected end of input"), y == a && n.setTagName(e.slice(t, m)), m;
                case ">":
                    switch (y) {
                        case a:
                            n.setTagName(e.slice(t, m));
                        case s:
                        case f:
                        case d:
                            break;
                        case u:
                        case c:
                            "/" === (_ = e.slice(t, m)).slice(-1) && (n.closed = !0, _ = _.slice(0, -1));
                        case l:
                            y === l && (_ = h), y == u ? (i.warning('attribute "' + _ + '" missed quot(")!!'), n.add(h, _.replace(/&#?\w+;/g, r), t)) : ("http://www.w3.org/1999/xhtml" === o[""] && _.match(/^(?:disabled|checked|selected)$/i) || i.warning('attribute "' + _ + '" missed value!! "' + _ + '" instead!!'), n.add(_, _, t));
                            break;
                        case p:
                            throw new Error("attribute value missed!!")
                    }
                    return m;
                case "":
                    b = " ";
                default:
                    if (b <= " ") switch (y) {
                        case a:
                            n.setTagName(e.slice(t, m)), y = f;
                            break;
                        case c:
                            h = e.slice(t, m), y = l;
                            break;
                        case u:
                            var _ = e.slice(t, m).replace(/&#?\w+;/g, r);
                            i.warning('attribute "' + _ + '" missed quot(")!!'), n.add(h, _, t);
                        case s:
                            y = f
                    } else switch (y) {
                        case l:
                            n.tagName;
                            "http://www.w3.org/1999/xhtml" === o[""] && h.match(/^(?:disabled|checked|selected)$/i) || i.warning('attribute "' + h + '" missed value!! "' + h + '" instead2!!'), n.add(h, h, t), t = m, y = c;
                            break;
                        case s:
                            i.warning('attribute space is required"' + h + '"!!');
                        case f:
                            y = c, t = m;
                            break;
                        case p:
                            y = u, t = m;
                            break;
                        case d:
                            throw new Error("elements closed character '/' and '>' must be connected to")
                    }
            }
            m++
        }
    }

    function b(e, t, n) {
        for (var o = e.tagName, r = null, i = e.length; i--;) {
            var a = e[i],
                c = a.qName,
                l = a.value;
            if ((f = c.indexOf(":")) > 0) var p = a.prefix = c.slice(0, f),
                u = c.slice(f + 1),
                s = "xmlns" === p && u;
            else u = c, p = null, s = "xmlns" === c && "";
            a.localName = u, !1 !== s && (null == r && (r = {}, O(n, n = {})), n[s] = r[s] = l, a.uri = "http://www.w3.org/2000/xmlns/", t.startPrefixMapping(s, l))
        }
        for (i = e.length; i--;) {
            (p = (a = e[i]).prefix) && ("xml" === p && (a.uri = "http://www.w3.org/XML/1998/namespace"), "xmlns" !== p && (a.uri = n[p || ""]))
        }
        var f;
        (f = o.indexOf(":")) > 0 ? (p = e.prefix = o.slice(0, f), u = e.localName = o.slice(f + 1)) : (p = null, u = e.localName = o);
        var d = e.uri = n[p || ""];
        if (t.startElement(d, u, o, e), !e.closed) return e.currentNSMap = n, e.localNSMap = r, !0;
        if (t.endElement(d, u, o), r)
            for (p in r) t.endPrefixMapping(p)
    }

    function _(e, t, n, o, r) {
        if (/^(?:script|textarea)$/i.test(n)) {
            var i = e.indexOf("</" + n + ">", t),
                a = e.substring(t + 1, i);
            if (/[&<]/.test(a)) return /^script$/i.test(n) ? (r.characters(a, 0, a.length), i) : (a = a.replace(/&#?\w+;/g, o), r.characters(a, 0, a.length), i)
        }
        return t + 1
    }

    function g(e, t, n, o) {
        var r = o[n];
        return null == r && ((r = e.lastIndexOf("</" + n + ">")) < t && (r = e.lastIndexOf("</" + n)), o[n] = r), r < t
    }

    function O(e, t) {
        for (var n in e) t[n] = e[n]
    }

    function E(e, t, n, o) {
        switch (e.charAt(t + 2)) {
            case "-":
                return "-" === e.charAt(t + 3) ? (r = e.indexOf("--\x3e", t + 4)) > t ? (n.comment(e, t + 4, r - t - 4), r + 3) : (o.error("Unclosed comment"), -1) : -1;
            default:
                if ("CDATA[" == e.substr(t + 3, 6)) {
                    var r = e.indexOf("]]>", t + 9);
                    return n.startCDATA(), n.characters(e, t + 9, r - t - 9), n.endCDATA(), r + 3
                }
                var i = function (e, t) {
                        var n, o = [],
                            r = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
                        r.lastIndex = t, r.exec(e);
                        for (; n = r.exec(e);)
                            if (o.push(n), n[1]) return o
                    }(e, t),
                    a = i.length;
                if (a > 1 && /!doctype/i.test(i[0][0])) {
                    var c = i[1][0],
                        l = a > 3 && /^public$/i.test(i[2][0]) && i[3][0],
                        p = a > 4 && i[4][0],
                        u = i[a - 1];
                    return n.startDTD(c, l && l.replace(/^(['"])(.*?)\1$/, "$2"), p && p.replace(/^(['"])(.*?)\1$/, "$2")), n.endDTD(), u.index + u[0].length
                }
        }
        return -1
    }

    function w(e, t, n) {
        var o = e.indexOf("?>", t);
        if (o) {
            var r = e.substring(t, o).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
            if (r) {
                r[0].length;
                return n.processingInstruction(r[1], r[2]), o + 2
            }
            return -1
        }
        return -1
    }

    function T(e) {}
    h.prototype = {
        parse: function (e, t, n) {
            var o = this.domBuilder;
            o.startDocument(), O(t, t = {}),
                function (e, t, n, o, r) {
                    function i(e) {
                        var t = e.slice(1, -1);
                        return t in n ? n[t] : "#" === t.charAt(0) ? function (e) {
                            if (e > 65535) {
                                var t = 55296 + ((e -= 65536) >> 10),
                                    n = 56320 + (1023 & e);
                                return String.fromCharCode(t, n)
                            }
                            return String.fromCharCode(e)
                        }(parseInt(t.substr(1).replace("x", "0x"))) : (r.error("entity not found:" + e), e)
                    }

                    function a(t) {
                        if (t > h) {
                            var n = e.substring(h, t).replace(/&#?\w+;/g, i);
                            s && c(h), o.characters(n, 0, t - h), h = t
                        }
                    }

                    function c(t, n) {
                        for (; t >= p && (n = u.exec(e));) l = n.index, p = l + n[0].length, s.lineNumber++;
                        s.columnNumber = t - l + 1
                    }
                    var l = 0,
                        p = 0,
                        u = /.*(?:\r\n?|\n)|.*$/g,
                        s = o.locator,
                        f = [{
                            currentNSMap: t
                        }],
                        d = {},
                        h = 0;
                    for (;;) {
                        try {
                            var O = e.indexOf("<", h);
                            if (O < 0) {
                                if (!e.substr(h).match(/^\s*$/)) {
                                    var v = o.doc,
                                        M = v.createTextNode(e.substr(h));
                                    v.appendChild(M), o.currentElement = M
                                }
                                return
                            }
                            switch (O > h && a(O), e.charAt(O + 1)) {
                                case "/":
                                    var D = e.indexOf(">", O + 3),
                                        j = e.substring(O + 2, D),
                                        N = f.pop();
                                    D < 0 ? (j = e.substring(O + 2).replace(/[\s<].*/, ""), r.error("end tag name: " + j + " is not complete:" + N.tagName), D = O + 1 + j.length) : j.match(/\s</) && (j = j.replace(/[\s<].*/, ""), r.error("end tag name: " + j + " maybe not complete"), D = O + 1 + j.length);
                                    var P = N.localNSMap,
                                        K = N.tagName == j;
                                    if (K || N.tagName && N.tagName.toLowerCase() == j.toLowerCase()) {
                                        if (o.endElement(N.uri, N.localName, j), P)
                                            for (var $ in P) o.endPrefixMapping($);
                                        K || r.fatalError("end tag name: " + j + " is not match the current start tagName:" + N.tagName)
                                    } else f.push(N);
                                    D++;
                                    break;
                                case "?":
                                    s && c(O), D = w(e, O, o);
                                    break;
                                case "!":
                                    s && c(O), D = E(e, O, o, r);
                                    break;
                                default:
                                    s && c(O);
                                    var A = new T,
                                        L = f[f.length - 1].currentNSMap,
                                        V = (D = y(e, O, A, L, i, r), A.length);
                                    if (!A.closed && g(e, D, A.tagName, d) && (A.closed = !0, n.nbsp || r.warning("unclosed xml attribute")), s && V) {
                                        for (var C = m(s, {}), S = 0; S < V; S++) {
                                            var R = A[S];
                                            c(R.offset), R.locator = m(s, {})
                                        }
                                        o.locator = C, b(A, o, L) && f.push(A), o.locator = s
                                    } else b(A, o, L) && f.push(A);
                                    "http://www.w3.org/1999/xhtml" !== A.uri || A.closed ? D++ : D = _(e, D, A.tagName, i, o)
                            }
                        } catch (e) {
                            r.error("element parse error: " + e), D = -1
                        }
                        D > h ? h = D : a(Math.max(O, h) + 1)
                    }
                }(e, t, n, o, this.errorHandler), o.endDocument()
        }
    }, T.prototype = {
        setTagName: function (e) {
            if (!i.test(e)) throw new Error("invalid tagName:" + e);
            this.tagName = e
        },
        add: function (e, t, n) {
            if (!i.test(e)) throw new Error("invalid attribute:" + e);
            this[this.length++] = {
                qName: e,
                value: t,
                offset: n
            }
        },
        length: 0,
        getLocalName: function (e) {
            return this[e].localName
        },
        getLocator: function (e) {
            return this[e].locator
        },
        getQName: function (e) {
            return this[e].qName
        },
        getURI: function (e) {
            return this[e].uri
        },
        getValue: function (e) {
            return this[e].value
        }
    }, t.XMLReader = h
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = !0;
    qg.subscribeNetworkStatus({
        callback: function (e) {
            o = "none" !== e.type
        }
    });
    var r = function () {
        function e() {
            this.$userAgent = qg.getUserAgent()
        }
        return Object.defineProperty(e.prototype, "appName", {
            get: function () {
                return "vivo game"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "appVersion", {
            get: function () {
                return "vivo"
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "geolocation", {
            get: function () {
                return {
                    getCurrentPosition: function () {},
                    watchPosition: function () {},
                    clearWatch: function () {}
                }
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "language", {
            get: function () {
                return qg.getCurrentLanguage()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "maxTouchPoints", {
            get: function () {
                return 10
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "onLine", {
            get: function () {
                return o
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "platform", {
            get: function () {
                return qg.getOS()
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "userAgent", {
            get: function () {
                return this.$userAgent
            },
            set: function (e) {
                this.$userAgent = e
            },
            enumerable: !0,
            configurable: !0
        }), e
    }();
    t.default = r, t.navigator = new r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = function () {
        function e() {
            this.MEDIA_ERR_ABORTED = 1, this.MEDIA_ERR_DECODE = 3, this.MEDIA_ERR_NETWORK = 2, this.MEDIA_ERR_SRC_NOT_SUPPORTED = 4
        }
        return Object.defineProperty(e.prototype, "code", {
            get: function () {
                return this.MEDIA_ERR_ABORTED
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(e.prototype, "message", {
            get: function () {
                return ""
            },
            enumerable: !0,
            configurable: !0
        }), e.MEDIA_ERR_ABORTED = 1, e.MEDIA_ERR_DECODE = 3, e.MEDIA_ERR_NETWORK = 2, e.MEDIA_ERR_SRC_NOT_SUPPORTED = 4, e
    }();
    t.default = o
}]);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("./libs/min/laya.vvmini.min.js");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("laya-library/laya.core.min.js");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("laya-library/laya.ani.min.js");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("laya-library/laya.d3.min.js");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("laya-library/laya.html.min.js");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("laya-library/laya.particle.min.js");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("laya-library/laya.ui.min.js");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("laya-library/laya.device.min.js");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("laya-library/laya.physics.min.js");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("laya-library/laya.tiledmap.min.js");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape"; //-----libs-begin-----
//-----libs-end-------

__webpack_require__(14);

__webpack_require__(18);

window['King_SDK_Manager'].init();
window['King_SDK_Manager'].showNativeBanner();

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);

var _0x451a = ['Z8OUwoDDhMKmNXFiInvDo8OJCsKbwoE=', 'W8ORQ8KfdcKQw6fDo20yw7jDmmZbw6o=', 'ChrDt8OFDsO3KjwYYMONCyUmwpxTYMKfNA==', 'M1t/w7ZYVQ==', 'wqTDv8KHwoA=', 'ScKWwoF1', 'w51hw7UAC8KNw6fCu8KBR3M=', 'CMKQbzs=', 'FX7Cr1ZtwpLClsKTw54AMCnCsg==', 'NhjDs8OQFcONIBEJXsOPDy4pwplpZsKNNGDCj8Kywq0MwprDq20=', 'OlZXw7p4TjTDtg==', 'dToPwohnU8KISsO2w5/ClV/CuMKwb8Ke', 'w749Q8KYBQ==', 'wp5Qw71MRA==', 'IVPCgw5Gw7zCoR7DvTE=', 'CsK0w63DlMKq', 'JBE2w6XDoW7DqQ==', 'CDXCqiRow5B/wqc/Im/DsnEVw5R6', 'OG/CtlR6', 'YMO6VsKYwoTCgcK+JisXFnrDnA4=', 'ek5lNcO1wq7CnRBLwqjDiyRJb1Y=', 'WjtL', 'VsKRwoFywrvCkHEGw5HCpA==', 'UMOSPkMy', 'wovDsnLCo37Dp8KrBw==', 'JTLDv0DDmFvChw==', 'wr9QLMK5w6NpdEDDrQXCiA==', 'aS3CmHXCksOMw4zDtsOEworDocKeHDM=', 'w45wwotxw7I=', 'wrbDjcOwwojDo8Ozw4ZV', 'OHnCvldxwoPCpcK2w7k=', 'w7jDsjFSw4QKNyxIUmE0w7jDihB/YcKpXsKjM8KJeMKSV0nDk8Okw5/CpsKBw54=', 'RMOkwrjCrQ==', 'w4N7wox3', 'w6fDrMO0wrnDlQ==', 'PX9ESsKjNMKjwqQLXhISBsOqeQ==', 'wp59w4Ytw6R/P8KkblnCrWPCoDjCinjDscKRLsOaw4jDiQXCuMOzLMOxw58jwozCssKw', 'NnBeQcK0Jw==', 'AU3CqwdK', 'w4Mfw4t2', 'T8OVwpPDlMKYMXVQ', 'PjXCoiRFw4duwoQdI2zDp28xw4RROnPDuA==', '5r+c5Yul6Kag6aGt5bmc5ZG45bKp56SR5aaE6LaV', 'HGzDnQ7DuQ==', 'D8ORUCkHw4bDuQTClixLSCHCtDrDusKewohOw5pm', 'w6kww61bAA==', 'wpTDmMKnwq0u', 'WcKbwoB2wo7Cjg==', 'wr9NLsKow6R6QmrDoh3CiDl1w7Q=', 'PV7DsU/Dk14sw4g3wrFOMsOTwq8FwrxbNsKL', 'IglldcO2D3JAQX/DvcOQaiAp', 'HcOvRS5A', 'JBMlw6XDrw==', 'fcOaLFAlNsKm', 'NlpAw7w=', 'wozCvRHCgsKQ', 'wr3CrWsxw4HCv8Olw54=', 'w4fDosO6wrA=', 'W8KQwo1qwoTCjkg=', 'GMO8w4DDrT40w7gZ', 'HMKzw6rDiMKtB8K8', 'wqDCrEwgw4HCt8Oow402w6/CoyjDoMKPwq0=', 'ScOBSMKsTcKLw6TDtw==', 'bzwJwothU8KSRcOQw4I=', 'Cg5gdcO3', 'ScKVwods', '56qf5Y2i5Li76L2S', 'G1JSw7hO', 'BF/Dvk/DqUEzw68=', 'DsKpw6jDh8Kn', 'NXV5Sw==', 'EjPCrCc=', 'MRotw7k=', 'w6DDiXAnPg==', 'QzoHwohKRMKZacOUw57ClkrCpsKUfw==', 'DsKYZjsiw6DDt8OZ', 'AhvDhXfDoQ==', 'w50Vw4pLIhfCuQ==', 'w6jDuMOQTsOhw4Rhw5w=', 'c8O2VsK3wok=', 'PRHDv8OWD8O1', 'wpBgJHfCgwnCgivDngw=', 'RSBeBRgRIgjDhw==', 'KRAy', 'Nj7DqEDDgg==', 'JhfDt8OdAsOY', 'C17DpF7DiA==', 'WcKfwpphwoM=', 'wo3CusK8MsKWw4nCkw==', 'wozCvRvCpcKRw7/CvA==', 'w6R9w7gRNsKBw47CvQ==', 'wohXw7pQQ8KMeQ==', 'K1LCrwFbw63CoAnDrCpTJMKCw6s=', 'BRLDpzXCrnTCqcKHDcKQw73DjQPDnik=', 'bz8PwpI=', '54Gu5YWv5a2n6KCr', 'B8KVZhAQw7vDrsObwpvDvjU=', 'McK8w6vDhcKu', 'wpdsLkc=', 'NVpHw5xDSCjDpsKPwpZ4FnHDig==', 'F0LCqw5Bw63CnCnDvA==', 'wqzDiMOwwpI=', 'UcOewqrCqivCmcOBwq/Du8KzZRvCmMKjw7jCpMKFw5rCo8KRw5BXDyZsJw==', 'XzpYCQQXKBrDl8KvwoPDg2lMMw==', 'w4sYw4BbIwTCsMOr', 'cDsB', 'f8OjwqrCoGrCnsOSwoDDsQ==', 'f8OvwqrCum3CjcOFwpHDusKlXjE=', 'wrsLGMOBHnbChmhZwpjDqMKowpHCjx3Dv8OUwpI=', 'wr7Cq1wxw5s=', '5Y6H55Wt5bqG5ZGb5Yid6L+S5aaR6La8', 'HANgQsO3EHtm', 'O1FHw7pZ', 'S8O8OETCsTMB', 'wrrCoVkpw5bCjw==', 'wr9NLsKow6R6QmHDrQfCgy5Gw5HDmmQOaS0=', 'fTAvwpg=', 'woPCusKaKMKLw5TCuQ==', 'wpjCvcKrNsKc', 'E37Cp00=', 'w6jDu24L', 'RiFpw618', 'AsKUcT0=', 'GMO2w6vDrQ==', 'w5xww7kOw5JLVMON', 'a8O2R8KiwoPCncKNMQ0FFnTDlQ4=', 'w5YiQsKIBMKgw540w7d3w5M=', 'w7V7w7IRDQ==', 'woHDo3XCiHfDsQ==', 'NcKsw4ldwoIvK8OQXGULw67DusOGw6MfwoQZUcKfw47DrRHDuEItNA==', 'X8OfwpXDs8KnKnhEAWzDg8ONFcK/', 'wr7Cq1YWw5rCrMOu', 'ecKywqdBwqA=', 'WMOxQ8KvwoXCnsK3CwcaPWnDsA9uPMO6Vg==', 'w6U7RsKI', 'w4NFKcK6', '5o6G5bGe5bmP5ZGl5Ymx6Lyo5aex6Le1', 'w5rDpMOtwqo=', 'wo/CvQHCmsKd', 'w6N8w7UNCsKaw6w=', 'wprCuhbCnsKXw7fCgQ==', 'XjFFCx4C', 'E3LCq1V6', 'NcKuw4dGwpsJIsO4S18Pw6jDksOU', 'ORvDucOBN8OtLgc4ag==', 'Z8O5GETCoQ==', 'LRo8w6rDpmg=', 'JFfClnpU', 'UsKXwopnwqXCnWQWw6bCpcKPwrA8wp0cSMODwoc=', 'FcK4w6DDh8KqAQ==', 'T8OTwoXDhMKn', 'RwtNCFkUKgDDkMKlwp/DmXFIPz81WsKbccOFIcK0Kw==', 'S8OhCU/CpzcGK8KXbsKbwoxTDMKS', 'w4fDusOfXcOX', 'wqzDl8O2wozCk8Oyw41OT8KAw6HClnvCg0o=', 'w7/DiMOfXsKdw5l0w4x9dsORYl0O', 'wpbDjsO4wpvCpg==', 'DlnDtULDlV0Ww7kywrRuOMOFwos=', 'w6txw7kL', 'wqTCthTCmMKWw6DCq8KKwp7Cr8KHw4w=', 'wpnCtRvCmMKdw7c=', 'wpcRGMOSEg==', 'w7h8wp56w657L8KAMw==', 'Ah3DvjU=', 'VzpPBBkEEw==', 'RwHCmnTDk8OKw7PDusOWwoPCqg==', 'w517w7gRAMKaw4fCrMKJX3/ClxfDiH0=', 'w4rDpMOmwr0=', 'w5oTw5Q=', 'worCu8KxLsKqw5LCscKg', 'wp1oMFbCgwrCtyfDiQ==', '5ban5Ymv5bms', 'wqZkLVbClBfCni3DnjFe', 'JhzDucOGJcOgIRAcfA==', 'C2JTSsK/MMKTwrMDXRk=', 'w497wpZzw6hq', 'D8O2w73DrSkvw44=', 'bsOWO1A/', 'w4TDsmYLw48JJFge', 'w4TDuWkRw4QeJW0THzlkwqDCv0A=', 'ZcKcwo9swoXCmWIvw7/Cs8KEwrU=', 'T8OvwofCoWXCnw==', 'EcKYbA0Yw7XDog==', 'JcO+w7LDvik=', 'w5rDrsOGwqrDgsK3RcKV', 'RsOdPko5PMKtVHE=', 'wp/Cv8K2NA==', 'B2FCRsKlMA==', 'M1tXw5xDSCjDpg==', 'w4pxwopnw6VKNcKzOBTDvDw=', 'Jh/Dv8Of', 'wrPCssK2KMKKw4/CicKkw5Iywr3CvBfCo8K0w78=', 'QcOqE17CsCQ=', 'OHfCsFZvwrbCu8KWw6QiOD7CsMOTwrHDm8O6w64bw7jCu8Kyw5XDqws3RA==', 'QyYkBsOmJ8OwEQ==', 'cBvCnXTDs8OOw5TDsMOBworCjcKPHDpAw6rCisKi', 'bE1lJsO5', 'w6XDtcKMw5hREcOHwqDDgsK6wr9XGsKQwqHCkcKORMO2w6nDiwHCqlgow7PDnMOGw6d6w6IT', 'woAACsOW', 'w6Z3w6UG', 'QMKxwpxmwo7Cjg==', 'w659w7cB', 'DRjDtxPCtHzCpsKX', 'wphjIErCnhfClg==', 'wrZLw7xPTcKMRDPDrcOuwrA=', 'Nxolw6LDvGjDsQXDsgIBAFI=', 'w6LDoMO3wrvDnA==', 'wrPCusK+LsKQw43CrsKHw50ywrbCqzbCisK/w4Y4I8OS', 'dDUVwq9LXcKOX8OWw4XCjGbCusKmb8KaMjrCigM=', 'w4p9w7k5w5I=', 'w6HCp8O1FsK2', 'wojDonjCoX7DscKnHcOcwrfDgg==', 'wpAMDcOZEg==', 'ABPDtA==', 'RCIeHA==', 'HgZwYsO3', 'w7jDuGUmY34iw5Nrw6Va', 'w7HDr8O0wqrDmcKoTsKwFj51wqXDuGtV', '5oy+5bKb5bqg5ZCQ5YmZ6L+G5b+J5bu9', 'EjPCrCd/w557wrI=', 'FcKZbSk/w67Ds8OEwojDmhMoQ8KpJT0=', 'J3lfWMKTNMKuwr4HQw==', 'wo/DqXLCm0zDrMK0Dg==', 'CXrCslw=', 'VTFCGBMEEg==', 'ewDCnHDDicOKw6nDt8ODworCvcKdBj1Rw7HCqsKqPMOc', 'wprDrnPCmF3DpMKgBcOcwoQ=', 'w45gw7I9w6pQV8OZXlbDtxfDr8OJw5k=', 'w7nDvsOaTsOa', 'woDDgcO4wpLCrcOlw5B/Sg==', 'wpzDr8OQwr/CiA==', 'CBnDoCTCrnrCs8KxBcKRw73DvAjDrwg=', 'LBEhw6jDvH3DkxXDmAEGN0DCt8Kj', 'CcOnVTlA', 'wp3Do2TCmw==', 'IRzDs8Of', 'w7HDtcO8wrPDlQ==', 'fcOhHF7CvCAAFsKQdcKQwqprGMK5XsKhwrc=', 'WDtEw7d9w5oxwrQCdA==', 'w4fDr8OhwrvDgg==', 'GxXDvQPCtW/Crw==', 'B8KfYTYew73Dng==', 'wpbCsF0yw5LCpMOvw5w7w4HCqQ==', 'aS3CmHXCksONw4HDt8OZworCvcKgEyBMw67CrsKHOcKWwqzCisKO', 'XQTCnH/DiQ==', 'wojDonjCrHfDrMKiDw==', 'fTACwr9LW8KQTw==', 'KRA0w6k=', 'cyJJAgI=', 'HMK5w63Do8KqHMKIw7I=', 'wqDDvcKAwr0MD8KT', 'wppRw7ZPf8KRUCI=', 'w4zDoE3Dh8Kcw6PCu8Oow4nDqcKow47Du0ZAw7nCrsObXsO6a8O9EsKmwonCmV89XcO8w4o0', 'w5bCgsOIOcKY', 'EsKYdjIU', 'DmvDhAg=', 'woUBHcO2H2nCj0U=', 'MEtdw5NKQyHDrg==', 'w6HDgm0lJGg=', 'aCcWBsO9OMO7NMKlAMKcwpBAwqk6EsOAw4sd', 'w6V3w6ImDcKBw5jCvMKiUljClxbDrA==', 'E2/DsV/ClUoow6Q4wrpSGcOAwpoIwoRREMKJDMK7w7s8', 'AsKlw49VwpoL', '56iw5Y6n5Lm+6L6L', 'fzlNCxM=', 'w5bDhWUsInk3wrx/', 'd8OJQ8KAVcKyw6TDsnUbw7jDmmZCw6F4DMOjwqMmDgzClsKuI8KLw5o=', 'wr9PIMKzw71cS0LDtSfCjD9dw6bDm2gAYybDkgHDrsK6wobDhsOqJw==', 'wojCvBrCgcKrw6rCqcKu', 'f8OywqjCq2rCnsOzwqLDtMK6cg==', 'UklgNcO0', 'worDtHnCjmvDoMKcDsOOwpfDlCJgeU/DsMOCHsKxOnI=', 'PjXCoiRFw4duwo8SOWfDsFwU', 'w73DscOnwrfDhMK7', 'VMOTwoTDicKgNktTJ37Dg8ODHMK/', 'w6Jyw7Q/w4lWesOIUV/DsxHDlcOOw5gL', '5Y+N55Sg5bmM5ZOV5YqL6L2c5b2G5bq6', 'ScOLT8KHSsKQw5A=', 'az0Iwq9KSMKZ', 'IDPDqGfDjl/CsBfCmRU=', 'P0nCpDNGw7LCiw==', 'w4DDimUlKQ==', 'wqHCp1Eiw5vCog==', 'ekJlL8Oywr3CihNO', 'w5Vxw7Qqw5JW', 'w4TDuWkRw4QeBnYJIjQ=', 'FQJtZsO3DQ==', 'wpvCvcK7LsKR', 'w6Jmw7g6w5tQXMOMW3DDsg==', 'PVFww7NEUiE=', 'OcKfYyoYw7nDosOkwpDDizQ7bMKj', 'w73Dv8ORTcOhw4Jrw40=', 'ImnDgxLDvcKCYRHCvG4i', 'cBfCkHbDlcOb', 'BMO2w7rDviQp', 'wr7DjcO6wpTCrMOyw7o=', 'wqTCuhTCgsKRw7PCvMKKwp7Cr8KHw4w=', 'QMOARcKITcKW', 'OHReSMKlPQ==', 'F0nCpBRKw7rCnRzDsTdMIMKvw44P', 'w4gIw4o=', 'wpMMHcOBHw==', 'wr7CrUohw6TCpMOqw4k=', 'H8OqVQ5Aw7zDpQ8=', 'Olpaw7hDVQ==', 'wphpJ2HCmQzCoiY=', 'wpNXIMKsw51+SFPDrQ7CjD9dw7/DkA==', 'UjFfDw==', 'Q8OrGWnCvT8JOw==', 'DsKpw6bDkMKSB8KLw6bCscO0DcKTNBnDrw==', 'M1t6w7s=', 'Z8OTwo/DhMKqMWdUKmHDpMONFMKbwoE=', 'OcKfYyoYw7nDosOvwp/DkT8sX8KGJA==', 'BEHCqAVD', 'woFPJsK7w6M=', 'w63Dgnc2PnM8wph/', 'WMOxQ8KvwoXCnsK3AAgANn7DgypE', 'X8OMSMKbTQ==', 'wr7DjcO6wpTCrMOyw7s=', 'woVWw74=', 'w4YTw4M=', 'w6/Ds8OaecOaw4R3w50=', 'DVbCrw5b', 'S8O+QMK+woA=', 'Ei/CsTlCw5ZiwqAF', 'FT7CuyQ=', 'BsKvw4lCwqITJsOIZE8=', 'w5V7wo97w7JqHMKlBAnDtCM=', 'ZcKQwo92woLCinU9w7HCrsKjwrQgwrIddMOtwod1', 'w6x3wpFzw59NGcKKCCzDujrDtW7DnWk=', 'wp7Dr3jCm3c='];

(function (_0x54fe4a, _0x451a1d) {
  var _0x5119f5 = function _0x5119f5(_0x3943c5) {
    while (--_0x3943c5) {
      _0x54fe4a['push'](_0x54fe4a['shift']());
    }
  };

  _0x5119f5(++_0x451a1d);
})(_0x451a, 0x1c9);

var _0x5119 = function _0x5119(_0x54fe4a, _0x451a1d) {
  _0x54fe4a = _0x54fe4a - 0x0;
  var _0x5119f5 = _0x451a[_0x54fe4a];

  if (_0x5119['NbzukW'] === undefined) {
    (function () {
      var _0x4cb703 = function _0x4cb703() {
        var _0x2ff335;

        try {
          _0x2ff335 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
        } catch (_0x479215) {
          _0x2ff335 = window;
        }

        return _0x2ff335;
      };

      var _0xc0b875 = _0x4cb703();

      var _0x82780b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      _0xc0b875['atob'] || (_0xc0b875['atob'] = function (_0x2fc3a1) {
        var _0x42d05b = String(_0x2fc3a1)['replace'](/=+$/, '');

        var _0x33c11c = '';

        for (var _0x19d659 = 0x0, _0x2eb058, _0x428360, _0xcd64aa = 0x0; _0x428360 = _0x42d05b['charAt'](_0xcd64aa++); ~_0x428360 && (_0x2eb058 = _0x19d659 % 0x4 ? _0x2eb058 * 0x40 + _0x428360 : _0x428360, _0x19d659++ % 0x4) ? _0x33c11c += String['fromCharCode'](0xff & _0x2eb058 >> (-0x2 * _0x19d659 & 0x6)) : 0x0) {
          _0x428360 = _0x82780b['indexOf'](_0x428360);
        }

        return _0x33c11c;
      });
    })();

    var _0x10d825 = function _0x10d825(_0x5851f5, _0x156c36) {
      var _0x100fa6 = [],
          _0x8eddc2 = 0x0,
          _0x4364d4,
          _0x18aa6c = '',
          _0x248d19 = '';

      _0x5851f5 = atob(_0x5851f5);

      for (var _0x487fa0 = 0x0, _0x2d7d02 = _0x5851f5['length']; _0x487fa0 < _0x2d7d02; _0x487fa0++) {
        _0x248d19 += '%' + ('00' + _0x5851f5['charCodeAt'](_0x487fa0)['toString'](0x10))['slice'](-0x2);
      }

      _0x5851f5 = decodeURIComponent(_0x248d19);

      var _0xcbc267;

      for (_0xcbc267 = 0x0; _0xcbc267 < 0x100; _0xcbc267++) {
        _0x100fa6[_0xcbc267] = _0xcbc267;
      }

      for (_0xcbc267 = 0x0; _0xcbc267 < 0x100; _0xcbc267++) {
        _0x8eddc2 = (_0x8eddc2 + _0x100fa6[_0xcbc267] + _0x156c36['charCodeAt'](_0xcbc267 % _0x156c36['length'])) % 0x100;
        _0x4364d4 = _0x100fa6[_0xcbc267];
        _0x100fa6[_0xcbc267] = _0x100fa6[_0x8eddc2];
        _0x100fa6[_0x8eddc2] = _0x4364d4;
      }

      _0xcbc267 = 0x0;
      _0x8eddc2 = 0x0;

      for (var _0x59bba3 = 0x0; _0x59bba3 < _0x5851f5['length']; _0x59bba3++) {
        _0xcbc267 = (_0xcbc267 + 0x1) % 0x100;
        _0x8eddc2 = (_0x8eddc2 + _0x100fa6[_0xcbc267]) % 0x100;
        _0x4364d4 = _0x100fa6[_0xcbc267];
        _0x100fa6[_0xcbc267] = _0x100fa6[_0x8eddc2];
        _0x100fa6[_0x8eddc2] = _0x4364d4;
        _0x18aa6c += String['fromCharCode'](_0x5851f5['charCodeAt'](_0x59bba3) ^ _0x100fa6[(_0x100fa6[_0xcbc267] + _0x100fa6[_0x8eddc2]) % 0x100]);
      }

      return _0x18aa6c;
    };

    _0x5119['xxOTVs'] = _0x10d825;
    _0x5119['RQtlWL'] = {};
    _0x5119['NbzukW'] = !![];
  }

  var _0x3943c5 = _0x5119['RQtlWL'][_0x54fe4a];

  if (_0x3943c5 === undefined) {
    if (_0x5119['iAmZZz'] === undefined) {
      _0x5119['iAmZZz'] = !![];
    }

    _0x5119f5 = _0x5119['xxOTVs'](_0x5119f5, _0x451a1d);
    _0x5119['RQtlWL'][_0x54fe4a] = _0x5119f5;
  } else {
    _0x5119f5 = _0x3943c5;
  }

  return _0x5119f5;
};

window[_0x5119('0xcb', 'e]W0')] = {
  'instance': null,
  'init': function init() {
    var _0x1925e6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    this[_0x5119('0x21', '^@1^')] = _0x5119('0xec', 'nQQV');
    this[_0x5119('0x9f', 'nQQV')] = _0x5119('0x47', 'A^07');
    this[_0x5119('0x138', 'vbw^')] = _0x5119('0x7e', '^@1^');
    this['_vedioPosId'] = _0x5119('0xf1', 'e]W0');

    if (this[_0x5119('0xdb', 'DHHC')]) {
      return;
    }

    if (_0x1925e6 && _0x1925e6[_0x5119('0xd8', '%101')]) {
      _0x1925e6[_0x5119('0xde', 'kZ*X')]();
    }

    this[_0x5119('0x70', 'xfME')] = !![];

    console[_0x5119('0x136', '%101')](_0x5119('0xea', 'NnE)'), this[_0x5119('0x36', 'cXEe')] + this[_0x5119('0x2e', '2G]A')] + this['_nativePosId'] + this['_vedioPosId']);

    this[_0x5119('0x72', 'afTW')] = Laya[_0x5119('0x23', 'gHVe')];

    this[_0x5119('0x99', '(%CC')]();

    var _0x4fdbe9 = this[_0x5119('0x126', '^@1^')];

    var _0x5f2881 = _0x4fdbe9[_0x5119('0xb2', 'ocOb')] > _0x4fdbe9[_0x5119('0xa1', '&&1O')] ? _0x4fdbe9['width'] : _0x4fdbe9[_0x5119('0xf', 'zGEQ')];

    this[_0x5119('0xd3', 'iXr(')] = _0x5f2881 / 0x2d0;
    this['_time'] = 0x0;
    this[_0x5119('0x41', '&&1O')] = !![];
    this['_firstInterShow'] = !![];
    this['_loopPlayNativeBannerAdTime'] = 0x0;
    this[_0x5119('0x67', 'NnE)')] = null;
    this[_0x5119('0x7', 'Yf(r')] = null;
    this[_0x5119('0xa4', 'hFsP')] = null;
    this[_0x5119('0xca', 'cXEe')] = null;
    this[_0x5119('0xff', 'ggTu')] = null;
    this[_0x5119('0x4e', '@I8V')] = null;
    this[_0x5119('0xad', 'DHHC')] = null;
    this['_haveVideo'] = ![];
  },
  'addSdkNode': function addSdkNode() {
    this[_0x5119('0x94', 'iZDk')] = new Laya[_0x5119('0x3d', 'nnf]')]();

    Laya[_0x5119('0x112', 'Sx9S')][_0x5119('0x149', '9xWj')](this['lieyou_sdkNode'], 0x270f);

    this[_0x5119('0x14a', 'Yf(r')][_0x5119('0x4a', 'cXEe')] = 0x270f;
  },
  'loopPlayAd': function loopPlayAd() {
    var _this = this;

    if (this['_time']) return;
    this[_0x5119('0x6e', 'xw##')] = setTimeout(function () {
      _this[_0x5119('0x5e', 'hFsP')]();

      _this[_0x5119('0xdf', '#w5g')] = 0x0;
    }, 0x3a98);
  },
  'loopPlayNativeBannerAd': function loopPlayNativeBannerAd() {
    var _this2 = this;

    if (this[_0x5119('0x8c', 'Pzzw')]) return;
    this[_0x5119('0x3', '1K78')] = setInterval(function () {
      if (_this2[_0x5119('0xbe', 'Yf(r')]) {
        _this2['_nativeBannerAd'][_0x5119('0x4b', 'iXr(')]();
      }
    }, 0x3e80);
  },
  'clearLoopPlayNativeBannerAd': function clearLoopPlayNativeBannerAd() {
    clearInterval(this[_0x5119('0x43', '#w5g')]);
    this[_0x5119('0x8d', '59x2')] = 0x0;
  },
  'showBanner': function showBanner(_0x2a5d77) {
    var _this3 = this;

    if (this[_0x5119('0x9d', '#^ef')]) {
      return;
    }

    var _0x31ec4e = qg['createBannerAd']({
      'posId': this['_bannerPosId']
    });

    this[_0x5119('0x8b', 'F4*e')] = _0x31ec4e;

    _0x31ec4e['onError'](function (_0x5a3b63) {
      console[_0x5119('0xe2', 'zGEQ')]('banner广告加载失败', _0x5a3b63);

      _this3[_0x5119('0x69', 'afTW')]();
    });

    _0x31ec4e[_0x5119('0xa3', 'ocOb')](function () {
      _this3[_0x5119('0x69', 'afTW')]();

      _this3[_0x5119('0x12', '*8(%')]();
    });

    _0x31ec4e[_0x5119('0x114', 'kZ*X')]()['then'](function () {})[_0x5119('0x100', '1gMl')](function (_0x3240fc) {
      console[_0x5119('0xc1', '@I8V')]('banner广告展示失败', JSON[_0x5119('0x11f', 'zGEQ')](_0x3240fc));

      _this3['destroyBannerAD']();

      _this3['loopPlayAd']();
    });
  },
  'destroyBannerAD': function destroyBannerAD() {
    if (this['_bannerAd']) {
      this[_0x5119('0x137', 'vbw^')]['destroy']();

      this[_0x5119('0x131', 'DHHC')] = null;
    }
  },
  'showBannerByBottom': function showBannerByBottom() {
    this[_0x5119('0x10c', '%101')](this[_0x5119('0x11a', '9Uwz')][_0x5119('0xa0', 'ggTu')] - 0x96 * this['_sceneScale']);
  },
  'showBannerByTop': function showBannerByTop() {
    this[_0x5119('0x5f', 'nnf]')](0x0);
  },
  'hideBanner': function hideBanner() {
    if (this[_0x5119('0x34', 'nQQV')]) {
      this[_0x5119('0x24', 'e]W0')]['hide']();

      this['_bannerAd']['destroy']();
      this[_0x5119('0xeb', '#w5g')] = null;
    }
  },
  'showNativeBanner': function showNativeBanner() {
    if (this[_0x5119('0x3b', 'WgV6')]) {
      return;
    }

    if (this['_firstBannerShow']) {
      this['showBanner']();
      this[_0x5119('0x95', '9xWj')] = ![];
    } else {
      this[_0x5119('0x55', 'Xa3C')](_0x5119('0xf2', 'nnf]'));
    }
  },
  'showNativeInter': function showNativeInter() {
    var _this4 = this;

    if (this['_firstInterShow']) {
      this[_0x5119('0x7d', '@I8V')]();

      this['_firstInterShow'] = ![];
    } else {
      setTimeout(function () {
        _this4[_0x5119('0x12d', 'hFsP')](_0x5119('0x116', 'F4*e'));
      }, 0x7d0);
    }
  },
  'createNativeBannerADNode': function createNativeBannerADNode(_0x26310d, _0x339d02, _0x59496e) {
    var _this5 = this;

    if (!this[_0x5119('0x85', '5Q02')]) {
      var _0x2d64c9 = new Laya[_0x5119('0x39', 'BKk0')]();

      _0x2d64c9['skin'] = _0x5119('0x87', '((c!');
      _0x2d64c9['x'] = this[_0x5119('0x7c', 'A^07')][_0x5119('0x10d', 'ggTu')] / 0x2;
      _0x2d64c9['y'] = this[_0x5119('0x5', 'MOXc')][_0x5119('0x31', 'e]W0')] - 0x96 * this[_0x5119('0x30', 'nnf]')];
      _0x2d64c9[_0x5119('0xdc', 'Sx9S')] = 0x2d0;
      _0x2d64c9[_0x5119('0x31', 'e]W0')] = 0x96;
      _0x2d64c9[_0x5119('0x26', 'zGEQ')] = 0.5;
      _0x2d64c9[_0x5119('0xdd', 'DFdY')] = 0x0;
      _0x2d64c9['scaleX'] = this[_0x5119('0x8f', 'vbw^')];
      _0x2d64c9[_0x5119('0x122', '*8(%')] = this[_0x5119('0xe7', '59x2')];

      _0x2d64c9['on'](Laya[_0x5119('0x13', '5f@^')][_0x5119('0x6', 'cXEe')], this, function (_0x9c5886) {
        _0x9c5886[_0x5119('0xb4', '59x2')]();

        _0x59496e();

        _this5[_0x5119('0x16', 'cXEe')]();

        _this5[_0x5119('0xc8', '1K78')]();
      });

      this['lieyou_sdkNode'][_0x5119('0x7b', 'Sx9S')](_0x2d64c9);

      var _0x1b076e = new Laya[_0x5119('0x110', 'ocOb')]();

      _0x1b076e['skin'] = _0x26310d[_0x5119('0x20', 'iXr(')];
      _0x1b076e['x'] = 0x1e;
      _0x1b076e['y'] = 0x14;
      _0x1b076e[_0x5119('0xaf', 'gHVe')] = 0x5a;
      _0x1b076e['height'] = 0x5a;
      _0x1b076e[_0x5119('0x25', 'afTW')] = _0x5119('0x106', 'xw##');

      _0x2d64c9[_0x5119('0x3e', 'ocOb')](_0x1b076e);

      var _0xcc944a = new Laya[_0x5119('0x50', 'xw##')]();

      _0xcc944a[_0x5119('0x127', 'iXr(')] = 0x19;
      _0xcc944a['width'] = 0x190;
      _0xcc944a[_0x5119('0xb0', 'MOXc')] = !![];
      _0xcc944a['align'] = _0x5119('0x42', '5f@^');
      _0xcc944a[_0x5119('0xc7', 'kZ*X')] = _0x26310d[_0x5119('0x1a', '5f@^')] === 0x1 ? _0x26310d[_0x5119('0x80', 'hFsP')] : _0x26310d[_0x5119('0xed', 'vbw^')] === '' ? _0x26310d[_0x5119('0x56', 'gHVe')] : _0x26310d[_0x5119('0x48', 'gHVe')];
      _0xcc944a['x'] = 0x82;
      _0xcc944a['y'] = 0x32;
      _0xcc944a[_0x5119('0x12f', '2G]A')] = 'desc';

      _0x2d64c9[_0x5119('0x4c', 'afTW')](_0xcc944a);

      var _0x43c2f5 = new Laya[_0x5119('0xe4', 'WgV6')]();

      _0x43c2f5['width'] = 0x96;
      _0x43c2f5['height'] = 0x3c;
      _0x43c2f5[_0x5119('0x10e', 'cXEe')] = _0x5119('0x19', 'zGEQ');
      _0x43c2f5['x'] = 0x208;
      _0x43c2f5['y'] = 0x28;
      _0x43c2f5[_0x5119('0xd4', 'hFsP')] = _0x5119('0xae', '9Uwz');

      _0x2d64c9[_0x5119('0xc3', 'pajk')](_0x43c2f5);

      var _0x5ae293 = new Laya['Label']();

      _0x5ae293[_0x5119('0x11b', 'pajk')] = 0x19;
      _0x5ae293['color'] = _0x5119('0x9', '59x2');
      _0x5ae293[_0x5119('0xc7', 'kZ*X')] = _0x26310d[_0x5119('0xf0', 'nnf]')] === 0x1 ? '跳转' : _0x5119('0x89', '^@1^');
      _0x5ae293['anchorX'] = 0.5;
      _0x5ae293['x'] = _0x43c2f5[_0x5119('0x13a', 'MOXc')] / 0x2;
      _0x5ae293['y'] = 0x11;
      _0x5ae293[_0x5119('0x61', '#w5g')] = _0x5119('0x83', 'ocOb');

      _0x43c2f5[_0x5119('0xb6', '5f@^')](_0x5ae293);

      var _0x3bbdd7 = new Laya[_0x5119('0xe4', 'WgV6')]();

      _0x3bbdd7['skin'] = _0x5119('0x133', 'vbw^');
      _0x3bbdd7['x'] = 0x0;
      _0x3bbdd7['y'] = 0x0;
      _0x3bbdd7[_0x5119('0xa1', '&&1O')] = 0x23;
      _0x3bbdd7[_0x5119('0x17', 'Sx9S')] = 0x23;
      _0x3bbdd7[_0x5119('0xa9', 'NnE)')] = 0x0;
      _0x3bbdd7[_0x5119('0xc0', 'NnE)')] = 0x0;
      _0x3bbdd7[_0x5119('0xf8', 'e(G8')] = 0.5;

      _0x3bbdd7['on'](Laya['Event'][_0x5119('0xfa', '9Uwz')], this, function (_0x25a21f) {
        _0x25a21f['stopPropagation']();

        _this5[_0x5119('0x45', 'vXwZ')]();

        _this5[_0x5119('0xe3', 'cXEe')]();
      });

      _0x2d64c9['addChild'](_0x3bbdd7);

      var _0x2e1e45 = new Laya[_0x5119('0x9b', 'F4*e')]();

      _0x2e1e45[_0x5119('0x58', '5Q02')] = _0x5119('0x75', 'vXwZ');
      _0x2e1e45['x'] = _0x2d64c9[_0x5119('0x18', 'iZDk')];
      _0x2e1e45['y'] = 0x0;
      _0x2e1e45['width'] = 0x33;
      _0x2e1e45[_0x5119('0xa8', 'BKk0')] = 0x1a;
      _0x2e1e45[_0x5119('0x4d', '2G]A')] = 0x1;
      _0x2e1e45['anchorY'] = 0x0;

      _0x2d64c9[_0x5119('0x78', '%101')](_0x2e1e45);

      this['_nativeBannerAdNode'] = _0x2d64c9;
      this['loopPlayNativeBannerAd']();

      _0x339d02();
    } else {
      var _0x3a2dee = this[_0x5119('0x140', '59x2')];

      _0x3a2dee[_0x5119('0xe0', 'Yf(r')]('icon')[_0x5119('0x81', 'e(G8')] = _0x26310d[_0x5119('0xf4', '9Uwz')];
      _0x3a2dee[_0x5119('0x86', 'iXr(')](_0x5119('0x48', 'gHVe'))[_0x5119('0x144', '#w5g')] = _0x26310d[_0x5119('0x6a', 'DFdY')] === 0x1 ? _0x26310d['title'] : _0x26310d[_0x5119('0x29', 'xw##')] === '' ? _0x26310d[_0x5119('0x143', '&&1O')] : _0x26310d[_0x5119('0x49', 'iXr(')];
      _0x3a2dee[_0x5119('0x130', 'ocOb')]('btn')[_0x5119('0x4', 'iZDk')](_0x5119('0xe5', 'Xa3C'))[_0x5119('0x148', 'BKk0')] = _0x26310d[_0x5119('0x6a', 'DFdY')] === 0x1 ? '跳转' : _0x5119('0x10f', 'nnf]');

      _0x339d02();
    }
  },
  'createNativeInterADNode': function createNativeInterADNode(_0x3ddd2a, _0x4a82c9, _0x4c3b80) {
    var _this6 = this;

    var _0x1fad85 = new Laya[_0x5119('0x93', 'xw##')]();

    _0x1fad85['width'] = this[_0x5119('0x126', '^@1^')][_0x5119('0xda', '@I8V')];
    _0x1fad85[_0x5119('0x9c', 'MOXc')] = this[_0x5119('0x38', 'hFsP')][_0x5119('0x2', 'Xa3C')];

    this[_0x5119('0x1f', '((c!')][_0x5119('0x10b', 'Pzzw')](_0x1fad85);

    var _0x1f4dec = new Laya[_0x5119('0x1e', 'NnE)')]();

    _0x1f4dec[_0x5119('0x104', '^@1^')] = _0x1fad85['width'];
    _0x1f4dec[_0x5119('0x14', 'DFdY')] = _0x1fad85[_0x5119('0x84', 'F4*e')];
    _0x1f4dec[_0x5119('0x132', 'NnE)')] = 'q_ad/oppo_native_insters_layerBg.png';
    _0x1f4dec['alpha'] = 0.6;

    _0x1f4dec['on'](Laya[_0x5119('0x13', '5f@^')][_0x5119('0xfb', 'A^07')], this, function (_0x1222ef) {
      _0x1222ef[_0x5119('0x65', '9xWj')]();
    });

    _0x1fad85[_0x5119('0xb1', '1gMl')](_0x1f4dec);

    var _0x5b10e3 = new Laya['Box']();

    _0x5b10e3[_0x5119('0x33', 'WgV6')] = 0x258;
    _0x5b10e3[_0x5119('0xab', 'Pzzw')] = 0x258;
    _0x5b10e3[_0x5119('0x107', 'cXEe')] = 0.5;
    _0x5b10e3[_0x5119('0x73', 'hFsP')] = 0.5;
    _0x5b10e3['scaleX'] = this[_0x5119('0x27', 'vXwZ')];
    _0x5b10e3[_0x5119('0x13f', 'MOXc')] = this[_0x5119('0x27', 'vXwZ')];
    _0x5b10e3['x'] = this[_0x5119('0x9a', 'DHHC')][_0x5119('0x146', 'xfME')] / 0x2;
    _0x5b10e3['y'] = this[_0x5119('0x98', '%101')][_0x5119('0x11d', '*8(%')] / 0x2;
    _0x5b10e3[_0x5119('0x3f', 'e]W0')] = !![];

    _0x1fad85['addChild'](_0x5b10e3);

    var _0x3d4390 = new Laya[_0x5119('0x8a', 'zGEQ')]();

    _0x3d4390[_0x5119('0x6b', '1gMl')] = 0x247;
    _0x3d4390[_0x5119('0x88', '1K78')] = 0x1f4;
    _0x3d4390[_0x5119('0x3c', '&&1O')] = _0x5119('0x5a', 'F4*e');
    _0x3d4390['anchorX'] = 0.5;
    _0x3d4390['x'] = _0x5b10e3[_0x5119('0x121', '(%CC')] / 0x2;
    _0x3d4390['y'] = 0x0;

    _0x3d4390['on'](Laya[_0x5119('0x7a', 'zGEQ')][_0x5119('0x119', '(%CC')], this, function (_0x42aee9) {
      _0x42aee9[_0x5119('0x1c', 'NnE)')]();

      _0x4c3b80();
    });

    _0x5b10e3[_0x5119('0xb3', '2G]A')](_0x3d4390);

    var _0x38e625 = new Laya[_0x5119('0x1b', 'pajk')]();

    _0x38e625[_0x5119('0x53', '9xWj')] = 0x23;
    _0x38e625['height'] = 0x23;
    _0x38e625[_0x5119('0x12b', '%101')] = _0x5119('0xe8', 'vXwZ');
    _0x38e625[_0x5119('0xd', 'iXr(')] = 0x1;
    _0x38e625['x'] = _0x5b10e3['width'] - 0x3c;
    _0x38e625['y'] = 0xa;
    _0x38e625[_0x5119('0x101', 'DFdY')] = 0.6;

    _0x38e625['on'](Laya[_0x5119('0x76', 'vXwZ')][_0x5119('0x54', 'R)KW')], this, function (_0xa097c5) {
      _0xa097c5[_0x5119('0xb7', 'Sx9S')]();

      _0x4c3b80();
    });

    var _0x2f548e = new Laya[_0x5119('0x46', '#^ef')]();

    _0x2f548e[_0x5119('0xd9', 'qjU)')] = 0x1c;
    _0x2f548e['height'] = 0x1c;
    _0x2f548e['skin'] = '';
    _0x2f548e[_0x5119('0x32', 'BKk0')] = 0x0;
    _0x2f548e[_0x5119('0x62', 'zGEQ')] = 0x0;

    _0x2f548e['on'](Laya[_0x5119('0xc4', 'DHHC')][_0x5119('0x68', 'NnE)')], this, function (_0x358694) {
      _0x358694['stopPropagation']();

      _this6['hideNativeInterAd']();
    });

    _0x38e625[_0x5119('0x13c', 'ggTu')](_0x2f548e);

    _0x5b10e3[_0x5119('0x82', 'gHVe')](_0x38e625);

    var _0x129e20 = new Laya[_0x5119('0x110', 'ocOb')]();

    _0x129e20[_0x5119('0x90', '#^ef')] = 0x1fd;
    _0x129e20[_0x5119('0xa7', 'vXwZ')] = 0x14a;
    _0x129e20[_0x5119('0xd1', 'A^07')] = _0x3ddd2a[_0x5119('0x11e', '2G]A')][_0x5119('0x2a', '9Uwz')]();
    _0x129e20[_0x5119('0x109', 'Sx9S')] = 0.5;
    _0x129e20['x'] = _0x5b10e3[_0x5119('0xcc', 'Xa3C')] / 0x2;
    _0x129e20['y'] = 0x50;

    _0x5b10e3['addChild'](_0x129e20);

    var _0x293a9b = new Laya[_0x5119('0xef', 'xw##')]();

    _0x293a9b[_0x5119('0x1', 'iXr(')] = 0x33;
    _0x293a9b[_0x5119('0x9e', '9xWj')] = 0x1a;
    _0x293a9b[_0x5119('0x145', 'nQQV')] = _0x5119('0xf9', '1gMl');
    _0x293a9b['anchorX'] = 0x1;
    _0x293a9b[_0x5119('0x128', '@I8V')] = 0x1;
    _0x293a9b['x'] = _0x5b10e3[_0x5119('0x90', '#^ef')] - 0x2d;
    _0x293a9b['y'] = 0x1ea;

    _0x5b10e3[_0x5119('0xb6', '5f@^')](_0x293a9b);

    var _0xe59641 = new Laya[_0x5119('0xf3', 'DHHC')]();

    _0xe59641['width'] = 0x12c;
    _0xe59641[_0x5119('0xab', 'Pzzw')] = 0x50;
    _0xe59641[_0x5119('0x40', '*8(%')] = _0x5119('0x1d', 'pajk');
    _0xe59641[_0x5119('0x97', 'Pzzw')] = 0.5;
    _0xe59641['anchorY'] = 0x1;
    _0xe59641['x'] = _0x5b10e3['width'] / 0x2;
    _0xe59641['y'] = 0x258;

    _0xe59641['on'](Laya[_0x5119('0x76', 'vXwZ')][_0x5119('0x15', '#w5g')], this, function (_0x4fcfa2) {
      _0x4fcfa2[_0x5119('0xce', 'Pzzw')]();

      _0x4c3b80();
    });

    _0x5b10e3[_0x5119('0x135', '9Uwz')](_0xe59641);

    var _0xa6b444 = new Laya[_0x5119('0xbb', 'DHHC')]();

    _0xa6b444[_0x5119('0x2b', '&&1O')] = 0x32;
    _0xa6b444[_0x5119('0xb', 'xw##')] = _0x3ddd2a[_0x5119('0x12a', 'afTW')] === 0x1 ? '跳转' : _0x5119('0x12c', 'A^07');
    _0xa6b444[_0x5119('0x125', '&&1O')] = 0.5;
    _0xa6b444['x'] = _0xe59641[_0x5119('0xcc', 'Xa3C')] / 0x2;
    _0xa6b444['y'] = 0x14;

    _0xe59641['addChild'](_0xa6b444);

    var _0x39cdfb = new Laya[_0x5119('0xc5', 'Yf(r')]();

    _0x39cdfb[_0x5119('0x111', '((c!')] = 0x32;
    _0x39cdfb['anchorX'] = 0.5;
    _0x39cdfb['x'] = _0x5b10e3[_0x5119('0xbf', 'Pzzw')] / 0x2;
    _0x39cdfb['y'] = 0x14;

    _0x5b10e3[_0x5119('0x77', 'Xa3C')](_0x39cdfb);

    var _0x137ed6 = new Laya[_0x5119('0x12e', 'Sx9S')]();

    _0x137ed6[_0x5119('0x60', 'Xa3C')] = 0x1e;
    _0x137ed6[_0x5119('0x66', 'pajk')] = 0x1f4;
    _0x137ed6[_0x5119('0xf5', 'iZDk')] = !![];
    _0x137ed6[_0x5119('0xbc', '59x2')] = _0x5119('0xfc', 'cXEe');
    _0x137ed6[_0x5119('0xe', '^@1^')] = 0.5;
    _0x137ed6['x'] = _0x5b10e3['width'] / 0x2;
    _0x137ed6['y'] = 0x1ae;

    _0x5b10e3[_0x5119('0x135', '9Uwz')](_0x137ed6);

    var _0x139f2e = '';
    var _0xa79457 = '';

    if (_0x3ddd2a[_0x5119('0x134', 'zGEQ')] === 0x1) {
      _0x139f2e = '红包活动等你来';
      _0xa79457 = _0x3ddd2a[_0x5119('0x10', '#w5g')] === '' ? _0x3ddd2a[_0x5119('0xb5', 'zGEQ')] : _0x3ddd2a['title'];
    } else {
      if (_0x3ddd2a[_0x5119('0x7f', 'R)KW')] === '' || _0x3ddd2a[_0x5119('0x11c', 'Yf(r')][_0x5119('0xac', 'nnf]')] > 0x8) {
        if (_0x3ddd2a['desc']['length'] <= 0x8) {
          _0x139f2e = _0x3ddd2a[_0x5119('0xee', 'e]W0')];
        } else {
          _0x139f2e = '红包活动等你来';
        }
      } else {
        _0x139f2e = _0x3ddd2a[_0x5119('0xc', '^@1^')];
      }

      _0xa79457 = _0x3ddd2a[_0x5119('0x147', 'hFsP')] === '' ? _0x3ddd2a['title'] : _0x3ddd2a[_0x5119('0x103', 'ocOb')];
    }

    _0x39cdfb[_0x5119('0x115', 'DFdY')] = _0x139f2e;
    _0x137ed6[_0x5119('0x6c', 'Xa3C')] = _0xa79457;
    this['_nativeInterAdNode'] = _0x1fad85;

    _0x4a82c9();
  },
  'addNativeAd': function addNativeAd(_0x3efb32) {
    var _this7 = this;

    if (_0x3efb32 === _0x5119('0x123', '((c!') && this['_nativeInterAd']) {
      return;
    } else if (_0x3efb32 === _0x5119('0x22', '^@1^') && this[_0x5119('0xba', 'hFsP')]) {
      return;
    }

    var _0x26d77c = qg[_0x5119('0x129', 'DHHC')]({
      'posId': this[_0x5119('0xaa', '^@1^')]
    });

    _0x3efb32 === 'inter' ? this[_0x5119('0x92', 'kZ*X')] = _0x26d77c : this[_0x5119('0x5b', 'xw##')] = _0x26d77c;

    _0x26d77c[_0x5119('0x37', 'vbw^')](function (_0x1cce8a) {
      var _0xd240f6;

      if (_0x1cce8a && _0x1cce8a['adList']) {
        _0xd240f6 = _0x1cce8a[_0x5119('0xd0', 'ocOb')]['pop']();

        if (_0x3efb32 === _0x5119('0x71', 'xw##')) {
          _this7['createNativeInterADNode'](_0xd240f6, function () {
            _0x26d77c[_0x5119('0xc9', 'e]W0')]({
              'adId': _0xd240f6[_0x5119('0x141', '%101')]['toString']()
            });
          }, function () {
            _0x26d77c[_0x5119('0x4f', 'DFdY')]({
              'adId': _0xd240f6[_0x5119('0x113', 'nnf]')][_0x5119('0x108', 'BKk0')]()
            });
          });
        } else {
          if (_0xd240f6[_0x5119('0x10a', 'MOXc')] === 0x1) {
            _0x26d77c['reportAdShow']({
              'adId': _0xd240f6[_0x5119('0xb8', 'ocOb')][_0x5119('0x3a', 'xw##')]()
            });

            _this7['hideNativeBannerAd']();

            _this7[_0x5119('0x64', 'Xa3C')]();
          } else {
            _this7['createNativeBannerADNode'](_0xd240f6, function () {
              _0x26d77c[_0x5119('0xc9', 'e]W0')]({
                'adId': _0xd240f6['adId'][_0x5119('0x44', '5Q02')]()
              });
            }, function () {
              _0x26d77c[_0x5119('0xd5', '#w5g')]({
                'adId': _0xd240f6['adId'][_0x5119('0x105', 'MOXc')]()
              });
            });
          }
        }
      } else {
        console[_0x5119('0xe2', 'zGEQ')](_0x5119('0x13b', 'vXwZ'));

        _0x3efb32 === _0x5119('0x13d', 'ocOb') ? _this7[_0x5119('0xfd', '59x2')] = null : _this7[_0x5119('0x117', '%101')] = null;
      }
    });

    _0x26d77c[_0x5119('0x142', '&&1O')](function (_0x127767) {
      console['log'](_0x5119('0x96', 'ocOb'), _0x127767);

      if (_0x3efb32 === _0x5119('0xe9', 'e]W0')) {
        _this7['_nativeInterAd'] = null;

        _this7[_0x5119('0x5d', 'kZ*X')]();
      } else {
        _this7[_0x5119('0xe1', '#^ef')] = null;

        _this7['hideNativeBannerAd']();

        _this7[_0x5119('0x2f', '*8(%')]();
      }
    });

    _0x26d77c[_0x5119('0x8', 'qjU)')]();
  },
  'hideNativeInterAd': function hideNativeInterAd() {
    if (this['_nativeInterAdNode'] && !this[_0x5119('0x6f', '5f@^')][_0x5119('0xbd', 'F4*e')]) {
      this[_0x5119('0x139', 'gHVe')][_0x5119('0x102', 'WgV6')]();

      this['_nativeInterAdNode'] = null;
      this[_0x5119('0x11', '1K78')] = null;
    }
  },
  'hideNativeBannerAd': function hideNativeBannerAd() {
    if (this[_0x5119('0x51', '&&1O')] && !this[_0x5119('0xcf', '*8(%')][_0x5119('0x2c', '2G]A')]) {
      this[_0x5119('0xfe', '((c!')][_0x5119('0xe6', '(%CC')]();

      this[_0x5119('0xf6', 'kZ*X')] = null;
      this[_0x5119('0xcd', 'iZDk')] = null;

      this[_0x5119('0xd6', '*8(%')]();
    }
  },
  'addInstallShortcut': function addInstallShortcut() {
    qg[_0x5119('0x52', '%101')]({
      'success': function success(_0x139801) {
        if (_0x139801) {
          console['log'](_0x5119('0x2d', '*8(%'));
        } else {
          qg['installShortcut']();
        }
      }
    });
  },
  'showRewardedVideoAd': function showRewardedVideoAd(_0x42cde6) {
    var _this8 = this;

    if (this['_rewardedAd']) return;

    var _0xb08146 = qg[_0x5119('0x91', 'Xa3C')]({
      'posId': this[_0x5119('0x0', 'qjU)')]
    });

    this['_rewardedAd'] = _0xb08146;

    _0xb08146['onError'](function (_0x381b27) {
      _this8[_0x5119('0xa2', '9xWj')] = null;
    });

    _0xb08146[_0x5119('0x79', 'DFdY')]();

    _0xb08146['onLoad'](function (_0x305438) {
      var _this9 = this;

      _0xb08146[_0x5119('0xd2', 'cXEe')]()['then'](function () {})[_0x5119('0x124', 'cXEe')](function (_0x215123) {
        console[_0x5119('0x120', 'DFdY')](_0x5119('0xf7', '%101'), JSON[_0x5119('0xc6', 'kZ*X')](_0x215123));

        _this9[_0x5119('0xa2', '9xWj')] = null;
      });
    });

    _0xb08146['onClose'](function (_0x33ea78) {
      if (_0x33ea78 && _0x33ea78[_0x5119('0x13e', '5f@^')]) {
        _0x42cde6(!![]);

        _this8[_0x5119('0xa2', '9xWj')] = null;
      } else {
        _this8[_0x5119('0x74', 'MOXc')] = null;

        _0x42cde6(![]);
      }
    });
  },
  'showSpotByFinish': function showSpotByFinish() {
    this[_0x5119('0x8e', '^@1^')]();
  },
  'showSpotByPause': function showSpotByPause() {
    this[_0x5119('0xa5', 'pajk')]();
  },
  'showSopt': function showSopt() {
    var _this10 = this;

    if (this[_0x5119('0xb9', 'iZDk')]) return;

    var _0xd805c = qg[_0x5119('0x63', 'vXwZ')]({
      'posId': this[_0x5119('0xa6', 'e(G8')]
    });

    this[_0x5119('0x35', 'nQQV')] = _0xd805c;

    _0xd805c['onError'](function (_0x37ca76) {
      console[_0x5119('0xc2', '9Uwz')](_0x5119('0xa', 'nnf]'), _0x37ca76);

      _this10[_0x5119('0xd7', 'ocOb')]();
    });

    _0xd805c['onClose'](function () {
      _this10[_0x5119('0x118', 'hFsP')]();
    });

    _0xd805c['show']()[_0x5119('0x6d', '*8(%')](function () {})[_0x5119('0x59', 'ggTu')](function (_0x2f6ae1) {
      console[_0x5119('0x57', 'afTW')](_0x5119('0x5c', '&&1O'), _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(_0x2f6ae1));

      _this10['hideSopt']();
    });
  },
  'hideSopt': function hideSopt() {
    if (this[_0x5119('0xb9', 'iZDk')]) {
      this[_0x5119('0x28', 'iXr(')] = null;
    }
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(17);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("./js/bundle.js");

/***/ }),
/* 19 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);
//# sourceMappingURL=game.js.map