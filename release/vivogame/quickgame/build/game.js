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
module.exports = __webpack_require__(16);


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
        Agrave: "??",
        Aacute: "??",
        Acirc: "??",
        Atilde: "??",
        Auml: "??",
        Aring: "??",
        AElig: "??",
        Ccedil: "??",
        Egrave: "??",
        Eacute: "??",
        Ecirc: "??",
        Euml: "??",
        Igrave: "??",
        Iacute: "??",
        Icirc: "??",
        Iuml: "??",
        ETH: "??",
        Ntilde: "??",
        Ograve: "??",
        Oacute: "??",
        Ocirc: "??",
        Otilde: "??",
        Ouml: "??",
        Oslash: "??",
        Ugrave: "??",
        Uacute: "??",
        Ucirc: "??",
        Uuml: "??",
        Yacute: "??",
        THORN: "??",
        szlig: "??",
        agrave: "??",
        aacute: "??",
        acirc: "??",
        atilde: "??",
        auml: "??",
        aring: "??",
        aelig: "??",
        ccedil: "??",
        egrave: "??",
        eacute: "??",
        ecirc: "??",
        euml: "??",
        igrave: "??",
        iacute: "??",
        icirc: "??",
        iuml: "??",
        eth: "??",
        ntilde: "??",
        ograve: "??",
        oacute: "??",
        ocirc: "??",
        otilde: "??",
        ouml: "??",
        oslash: "??",
        ugrave: "??",
        uacute: "??",
        ucirc: "??",
        uuml: "??",
        yacute: "??",
        thorn: "??",
        yuml: "??",
        nbsp: " ",
        iexcl: "??",
        cent: "??",
        pound: "??",
        curren: "??",
        yen: "??",
        brvbar: "??",
        sect: "??",
        uml: "??",
        copy: "??",
        ordf: "??",
        laquo: "??",
        not: "??",
        shy: "????",
        reg: "??",
        macr: "??",
        deg: "??",
        plusmn: "??",
        sup2: "??",
        sup3: "??",
        acute: "??",
        micro: "??",
        para: "??",
        middot: "??",
        cedil: "??",
        sup1: "??",
        ordm: "??",
        raquo: "??",
        frac14: "??",
        frac12: "??",
        frac34: "??",
        iquest: "??",
        times: "??",
        divide: "??",
        forall: "???",
        part: "???",
        exist: "???",
        empty: "???",
        nabla: "???",
        isin: "???",
        notin: "???",
        ni: "???",
        prod: "???",
        sum: "???",
        minus: "???",
        lowast: "???",
        radic: "???",
        prop: "???",
        infin: "???",
        ang: "???",
        and: "???",
        or: "???",
        cap: "???",
        cup: "???",
        int: "???",
        there4: "???",
        sim: "???",
        cong: "???",
        asymp: "???",
        ne: "???",
        equiv: "???",
        le: "???",
        ge: "???",
        sub: "???",
        sup: "???",
        nsub: "???",
        sube: "???",
        supe: "???",
        oplus: "???",
        otimes: "???",
        perp: "???",
        sdot: "???",
        Alpha: "??",
        Beta: "??",
        Gamma: "??",
        Delta: "??",
        Epsilon: "??",
        Zeta: "??",
        Eta: "??",
        Theta: "??",
        Iota: "??",
        Kappa: "??",
        Lambda: "??",
        Mu: "??",
        Nu: "??",
        Xi: "??",
        Omicron: "??",
        Pi: "??",
        Rho: "??",
        Sigma: "??",
        Tau: "??",
        Upsilon: "??",
        Phi: "??",
        Chi: "??",
        Psi: "??",
        Omega: "??",
        alpha: "??",
        beta: "??",
        gamma: "??",
        delta: "??",
        epsilon: "??",
        zeta: "??",
        eta: "??",
        theta: "??",
        iota: "??",
        kappa: "??",
        lambda: "??",
        mu: "??",
        nu: "??",
        xi: "??",
        omicron: "??",
        pi: "??",
        rho: "??",
        sigmaf: "??",
        sigma: "??",
        tau: "??",
        upsilon: "??",
        phi: "??",
        chi: "??",
        psi: "??",
        omega: "??",
        thetasym: "??",
        upsih: "??",
        piv: "??",
        OElig: "??",
        oelig: "??",
        Scaron: "??",
        scaron: "??",
        Yuml: "??",
        fnof: "??",
        circ: "??",
        tilde: "??",
        ensp: "???",
        emsp: "???",
        thinsp: "???",
        zwnj: "???",
        zwj: "???",
        lrm: "???",
        rlm: "???",
        ndash: "???",
        mdash: "???",
        lsquo: "???",
        rsquo: "???",
        sbquo: "???",
        ldquo: "???",
        rdquo: "???",
        bdquo: "???",
        dagger: "???",
        Dagger: "???",
        bull: "???",
        hellip: "???",
        permil: "???",
        prime: "???",
        Prime: "???",
        lsaquo: "???",
        rsaquo: "???",
        oline: "???",
        euro: "???",
        trade: "???",
        larr: "???",
        uarr: "???",
        rarr: "???",
        darr: "???",
        harr: "???",
        crarr: "???",
        lceil: "???",
        rceil: "???",
        lfloor: "???",
        rfloor: "???",
        loz: "???",
        spades: "???",
        clubs: "???",
        hearts: "???",
        diams: "???"
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
                case "??":
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
 * ??????LayaNative?????????????????????????????????
 * landscape           ??????
 * portrait            ??????
 * sensor_landscape    ??????(?????????)
 * sensor_portrait     ??????(?????????)
 */
window.screenOrientation = "sensor_landscape"; //-----libs-begin-----
//-----libs-end-------

__webpack_require__(14);

__webpack_require__(15);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("./js/bundle.js");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var _0xb7de = ['CFRQdww=', 'w5QGSsOfwpc7EcOKwrttNMOsw5YKRw==', 'bsOFUMKXw6VxWSxgwptA', 'w63Cjno=', 'wqvDvMKDGcO7wpLDi8K8', 'MkJA', 'AURJwoYNXScFMlwiwrEcYsOm', 'w643KMOFFcKcwpNnTw==', 'w4bDogIufsKD', 'ayzDr8OKwrfCuDtQL8O/LcKiKBrDkUU=', 'w6DClFFWI8KxwqY=', 'wqXDtsKECsOAwo8=', 'VXwNwqNZUcKd', 'Y01/w4Ujw6TDswICG8KOecKow4fCkBbCusKJw7vCp8OtBGg=', 'w5rCqcKGCw3Dtj7ClQvDjsOSW10eaMK4LcKRKMKKP8KWYw==', 'JsOjWcKULcOZZMK7', 'RzA3aMOQ', 'wqzDt8KJLsOAwpLDncK9', 'fMKEwoXCjMO7DUbDrsO0CUo6N8Kn', 'WMOZQcKFw7Y=', 'HT0RIcOvaDfCrcKIw6Mtw49TZsKXTV0MTMKDwozCiMOPWg==', 'wrrDusKJGcOA', 'P0NEwpoHXQ0=', 'wop+OijDmCM=', 'HlJHcAwl', 'QsO7AnbCsAzCncKbHEtUW1TClcKlwqHCmnVFBEB6ZcKH', 'Q8K/NsKKw67DlcK8w5nCjcKUw6bCtMKKw7bDocO1wrfCpl8=', 'wpBaw5bCvA8=', 'w4gRaBlOw4pSw4InPzk=', 'XSzDp8OKwprCrypzDcO+LsK3Nj7DgW7DigHChA==', 'QsOVwrFJJMOXZg==', 'cGwAwphzcRY=', 'w7MGfhpdw5dP', 'ecKnw5fCpcKyYyfDuQ==', 'AC3DqA==', 'w6vDpHPClgHCrMOSwrkw', 'w7vCsnkfXD3ClA==', 'a3sAwr9TUcK2wocYLMKLdsK0wrQz', 'w6HCtVMBaCrCn2ZJSRRtw7zDjSw=', 'L8K0OMKUdTV4', 'w6/Cl3DCicK/wonDkMOQw6TDusO7w4AgwpR5CAoB', 'Z3pBCjBST8KM', 'w43Dph8qfg==', 'aMK5MsKQ', 'w4oBUMOpwowgFw==', 'EXlHw4nDmg==', 'wopAw4PCvhhOLsKzw4kkwpTDqztZAA==', 'EcKKwqx7wpnDpsKSw6DCr8KRXgQ=', 'ay/DocOrwoHCtQNYH8Ok', 'w6IcV8OXwoA=', 'MUNkwp4HXDE=', 'w5tcRWPDhcKpbMOMXsK0dMKYJmDClg==', 'S0nDgMKmw61VwqjDrirDon/CucKhw7U=', 'IMOQckvDsD0=', 'R8OJBsKCwqtVwpRNw7XCrjQ=', 'csO7fMKjw48=', 'w6fDqGTChz3CosOfwrUibEU3DsKfDRB/IA==', 'WsOKF3fDrQ==', 'eE7DhMKrw6tWwpLDjSHDunjCsg==', 'XSDDp8OQwp3CvD1wCA==', 'B8KKwq93', 'TXR7w5xWw7cDSzTDuTTDrMKuwq/CqBlJDg==', 'dhAcEg==', 'w5/Cn8KTA0c=', 'w6vCn2dQI8Kxwq3CszHDocKyL8OOOMK9', 'ZnfCssOYwpLCv3cECcO0JsK0cEjDhxLCnAbDlg/CncOkeMKAwrrDhQEjBsKtH8Ka', 'wop0FSnDhCVZ', 'wpIEwrNKw7o=', 'YsK1wqHCmsKmAVg=', 'wq/Cj2tS', 'ISYaNMO+fynCo8KPw4M/', 'esKywoDCnMK8', 'GC3DnE0qb13Diw==', 'QsOVwrtuJQ==', 'QTktJcOL', 'R3EPwqdTew==', 'w4gBbABBw51Ew6Yn', 'eGwXwpVuYi3CsgLDocKNMlfCnwY=', 'w5teS3jDnMKPZcOvRsKUe8KJPVfCl8Ocw4rCskMOQCsrVcOkFjc=', '5r+n5YqR6KWj6aGO5bu95ZGq5bKi56an5aW/6Las', 'w643KMOFFcKcwpN2RGpNwoo=', 'EcO+VMKcGw==', 'f8K0OcKKw6LDkQ==', '5Y6s55a75bic5ZGY5Yi/6LyT5aeN6LeQ', 'w7zCkntTH8K/wqDCmCbDqsKeK8OSF8KcCg==', 'DSbDq3owb1/DiA==', 'wovDnsKoNQDDuzA=', 'HHnDnMO+Ug==', 'ZFppw4c=', 'wp8PwrRM', 'w4jCt8OcOw==', 'w5oNSsO5wo0zHsOawpB7FMOZw4If', 'wrrCtXlVw6Jgw4Nxw5xkwpgrw5fDtUjDjlbCn1XCkMKlLcOF', 'wp3DmcKvKQc=', '5bWD5YmO5bqz', 'bzsycsOWWRTCg8OI', 'w452eMONwpjDu1k+LGAf', 'c0tow405w6bDlAUP', 'w6MKeQJK', 'QcOZwqdu', 'T8K5w53CvMKV', 'wpLDvcKMGcOBwo3DlMKbS3vDmU4rCQbDgQ4HwpY=', 'TXR7w5xWw7cDQDvDoz/Du8KdworCgjhCD8OD', 'YW51w5hvw7MJcjvDqjDDqsKGwqTCiA==', 'wrpcw5fCrsKtwqU=', 'w647KMOfEsKPwoR2RGpNwoo=', 'wpTCiHlfwqNnw5Bew5Y=', 'fcKmw5zCpsKJ', 'w5jCin3CgcKU', 'WW1GLDZecMKLO8KNeQ==', 'w6ZtecOOwpE=', 'QMK4woHDlA==', 'w6LClWFXNMKKwrzCgz/DusK7Ig==', 'a8ORDMKJ', 'RMKKdsKGw53DicO+AHTDmsKe', 'wqLCiXdf', 'w7TCimbChcKfwo/DjcOfw6s=', 'WXxEJzZeUcKpPg==', 'b8KlOMKOw5fDkcK2w6vCjcKdw6nCpcKRw5jDqw==', 'XcKtwoPDgcOjwoXDoFHClUrDh04UHsKL', 'aMKXd8KCw6jDicOBH2bDtMKbHMK2wqw3', 'c35Tw4w=', 'w5A5OcODGg==', 'woXDnsKOLx3Dpho=', 'wqrCjnxiwqlpw6xww5Zk', 'w4FEQXnDmA==', 'OWZGw5nDm8OeecOhw7h0CQ==', 'enN+w419w6AIbD/Dvw==', 'bMKKdsKhw5HDgcOL', 'OWNAw5jDnMOUesOtw6pRCA==', 'wrZcw43CvcK3wr4z', 'VEjDisKow4BBwpnDsyvDuw==', 'UsK1woXCnMK9GE/DiMOpGAE4GMKkUMK9wrFE', 'wpTChHlFwqR0w4ddw5NvwoQAw4TDgEU=', 'w7sGYwlbw5A=', 'ecK7w4rCu8KPaz7Dq8Kn', 'GCvDu1U9', 'YlbDgMKxw7Y=', 'W8O2LMKkwo4=', 'D3XDi8Op', 'RsOeW8Kzw615WA==', 'wovDlMKvHgfDoATChg==', 'IsK1OsKY', '5Yyx55aY5biU5ZCD5Yq26L6K5b+m5biD', 'b8KLfcKc', 'wo7DlcK4Pg==', 'XHcHwqxeVw==', 'c1d1w5MVw6DDkw0TAA==', 'Ikx2dRczw5g=', 'cXdLGjFBRg==', 'CiYALMO+', 'wrZcw43CvcK3wr4zF8KNwq3Cll4twqQf', 'TXR7w5xWw7cDSzTDuTTDrMKuwq8=', 'w61cTWPDqMK+fcOvfMK1d8KNOETChsO7', 'Q8KjMsKJw6bDkcK9w77CiMK7w6w=', 'IsOjWMKIEcODS8K8fxrCp8OGw4kV', 'f8K+wpTCh8KmGmvDpcOUBAs9', 'w4DDpgYs', 'VXwNwqNZUcKc', 'w6IaW8ONwoQoFsObwrZDPg==', 'wqQEwqZbw6HCtMKGwrLDiF1QwqN3OH5nw5bCmnU=', 'LcK/NcKIfzV5', 'w6M9w7rDt2jDksKsIsKewpxlVSbDl0c=', 'w77CqFkIVy3Cr2VMRTt2w7HDhw==', 'fDgxecOU', 'ZcK+wo3Cj8K8Gg==', 'fsKzwovCnw==', 'YcK0wovCmMKEAkvDuMOGCA==', 'wpnDhMKkLT/DuwfCksK1BsKOwpXCtGcn', 'w4/Dow8KfsKewohf', 'MyTDpksrcnrDgsKmRsKxRzM1woA=', 'wo1Xw5/CvcKswqcvHMKCwrfCnUkewoE=', 'w7TCgsKOAkc=', 'SVJ7w4My', 'L8OuWcKyFsOfeMKr', 'R8K6woPDnw==', 'EcK0OsKIczFFwpVaKHrDgMKwwpzDiF8HLsO2', 'OXxMw5LDgsOhRcOvw7JzDMOoFcOSOMONw5LDllbCu8KiwoXDosONwrB6wqc=', 'YmkKwp4=', 'w4/DqQghecKFwrw=', 'w6XCrk4VbyrCkWY=', 'MyzDrk0xcFbDpcK8V8KmZho+wrnDucKxwp4=', 'w44AUcONwqc7HMOQwrdw', 'F0BGwpUN', 'cXdBPTA=', 'F8KAwo9gwpnDu8K9w6M=', 'w77Crl0V', 'w5kwIMOME8KN', 'w4Y8LcOfEw==', 'asOSwr5uJMObZmkuFivChnxWcg==', 'wpwPwrNsw6DCq8KPwpTDq0pwwqdoHA==', 'w7IKw7YG', 'H3XDgMO+', 'w4IJw74Ww6zCo8KBwpXCkAsIw7ExSChKw5jDjnNUVUbDoAQAwpduw4XCoAoRw70=', 'w5QLUcOU', 'HyEXKMO0fyA=', 'w45qfMOOwpDDv1gSJlUew7nClcKH', 'w7dZTXk=', 'w6fCl8KFCk4=', 'w4cnTMOewoAo', 'U0/DtsKrw7BJwpnDug==', 'ElZcdB0=', 'KsOvTsKS', 'TXxzw5pMw7UvbC7DqCPDjcKHwqTCkQ==', 'U0XDncKr', 'CsKBwqhxwpk=', 'c3YN', 'ahANAcOoYQ==', 'WMKvUcKxw7M=', 'w7IZAMOoMA==', 'c8KGccKVw5DDjw==', 'w67DrXDCihI=', 'UEnDgcKrw6o=', 'QC3Dvg==', 'NkhOwpUAWw==', 'w7HDqQo9f8KBwoF5w61DwpAIIMKew7HCp8KXCcKN', 'bsOZVMKUw611WAtlwrRKURECFg==', 'w5A7KsODFMKLwrk=', 'w6PCoMOUMMOV', 'wpTChHlFwqR0w4dWw5x1wo8Xw7fDpQ==', 'ccOUEcKCwrdRwqRaw73CrT/CmFnDpnw=', 'VcOLDWbDjAfChsKQ', 'w5EBW8ODwoovLcONwrZpFMOXw4sf', '56qg5Y2j5Lqz6L+3', 'w6E/w7zDvnXDrMKa', 'XQYHA8OucMKsYMKaMS4=', 'w6bDr3PClhLCr8OHwo88ZnUiA8KEHA==', 'IMOYekk=', 'bMK/woDCq8K8B0bDpQ==', 'wrxAw5bCrwNZKMKOw44/wp/DjQNN', 'KkhfwoY=', 'woJCw57CvAQ=', 'GioHIw==', 'PcOhVMKf', 'wpRHw5PCrwI=', 'w5DClntLIcKOwrjCkCnDgcK9PsOVD8KcOsKWaMOvwoBNfWJsZsKew6s=', 'eTQye8Od', 'V8OdwrF0KMOf5bm85ZGh5Yuv6LyF5aW06LeG', 'w5HCv8OVKsOJ', 'eiZ4w7VhVn4=', 'Z8K0wo3DlsOW', 'CCfDvE0qaUo=', 'w648J8OfHsKLwpJSQm1two9GwrUP', 'T0HDlsKMw6pPwoXDqS3DvEXCn8Krw6N0einCrDvDkg==', 'DMOdclPDvBLCk8KrJD3Ds8KNMMKpw7E=', 'w7jDqG7CsRrCucOO', 'b21sJzFPbMKeP8KT', 'w7drc8OOwqrDoEc+', 'w6IEUcOVwpUKHsOfwqtMO8OMw4YMR1x7O8OSSgLDhsKCwrBHbsKQ', 'w4w3X8Oew4ouHcOLwrFqdMOIw4Ed', 'wqJ3FybDjg==', 'w7c4w7vDonI=', 'w4kBSsOWwoA=', 'Sy/Dp8OZwpY=', 'bsOBUMKEw61sbSZ3wpNA', 'WDw6e8OQSA==', 'cXFXLQ9JQsKY', 'w7NbQGPDhA==', 'wqMJw6APTMODG8K6N0wVX8Kh', 'w7hqacOfwovDqF4vIU4Vw5/CrcKTwrw=', 'wo4Ew7EWW8OhM8K6EU8=', 'W3bCtwg8YFHCnsOqFsKlcm9rw4XCpsOtwpoYw7pYwq3DqxF/T8OtacKvw63DnMOz', 'UEnDi8KMw6tawpI=', 'VXYKwoheSsKpwpc=', 'WcOSXMKHw6x3', 'SsK8wp/Dkg==', 'UiV6w7pr', 'YsKqw5HCtcKJeA==', 'wonDlcKlKQrDuzA=', 'LcKoPsKdbiJpwrlPI2bDlsK2wrTDmHgJJsOSMA==', 'wphxHy8=', 'wrxMw5bCtQRKP8KGw4Q=', 'ecK+wpzCnA==', 'TWx/w4xWw642bSnDhDU=', 'Y01/w4Ujw6TDvwIYHMKdbsKgw40=', 'eGEMwp4=', 'w4gBbABBw51Ew7csDRQd', 'ahwAAw==', 'w7TChcKECkzDsQzCmATDh8OF', 'w4oBWsOOwo0=', 'w6LDpgkseg==', 'DiPDoVc9dA==', 'woJ0AiTDmTZiw7LCk8KyW8KwFcKMdQ==', 'XcOVwrt/HsOCc18=', 'QMOMDGXDjAHCjMKB', 'DMORcknDuwHChMKoIQ==', 'eE7DhMKrw6tWwpLDlCDDvVTCpMKEw7ROdCHCpQ==', '57us5Y+f5rWg5YmU562T5Lyn5p2F', 'w58iw7zDs3TDu8KQLsKPwqBs', 'wr1Xw7LCpsKkwrU=', 'wo1Lw5vCvsKkwqMuMMKIwoLCnA==', 'JS/Drl49', 'byB+w7M=', 'HyEXKMO0fyE=', 'c35+w6tXw6gKZg==', 'w64hIMOGHg==', '56mE5Y+y5LiL6L6f', 'wotHw5PCviROOcKuw5YuwrjDnixHAF7Ck20=', 'RcOeQcKMw6E=', 'WG8Cwpd5', 'B3Rqw5k=', 'fW0E', 'YXJ1w599w6AIbD/Dvw==', 'OsOjScKdGw==', 'w58zw77DuHTDu8KxDMKK', '5o6s5bCA5biL5ZCK5Yi76L2w5b275bu0', 'ccK3wo3DhcOawoHDqmPClUPDiF8PMMKB', 'PUxTwpEA', 'RCp6w7NgQVTCsyM=', 'w5tUTWXDn8KrS8OvUcK0f8KPB0nCncOp', '54Oq5YWI5a6a6KOi', 'wpxzEjXDgw==', 'eWcKwpd0dw==', 'w6hdRXM=', 'IsOlWg==', 'P8OcdA==', 'aFpzw4M/w7U=', 'UsOZwqtZJcOEb08NAQvCgmNy', 'RMONB2bDtw==', 'NGTDkcOnXw==', 'Y15uw4c/', 'DnVKw5rDmsOF', 'YxEAJcOofMKTZw==', 'w63CjnpoMMK8wrHCnQ==', 'AsKLwrhXwoPDu8K/w6A=', 'L1ZbVRkiw5jDgQ==', 'fcK/NMKWw6jDkcKA', 'PH1UfVcvw43DnSfCgjNUJsKzaAwtacOkfsODF1NufnLCm3dPJ3d0wr7CmsKWwo8=', 'wrjCnndBwp1ww41vw5NmwosRw5/Drk8=', 'UMObXMKHw6o=', 'wrAIw5kE', 'RkTDgcKcw6pJwpvDuQ==', 'REzDgMK+w7BswpjDsj7DmV3Ct8K8w55hbyzCtjvDtHDDksOwwocPwp4a', 'PcOSfkI=', 'fMKEwoXCjMO7DEvDr8OpCRYEOMK0d8KkwrBiUBfDn0jDncKxXkU=', 'V0/DlQ==', 'w4fCk8KJCFbDvA==', 'AUtOwoAbWxYQNUYuwqIjS8OtXg==', 'MMKfwq59wp/Dtw==', 'wop+Eg/DiiNow7DCn8KcUQ==', 'V8KCesKXw5Q=', 'w7zCkntT', 'd1Z+w5A/', 'w7/DrnA=', 'w6bDsknCjBrCt8Okwqoxew==', 'V8OBEGbDrQHChcK3E0BIcEfCoMKI', 'XcKxwoPDhsOgwpjDv1U=', 'VHQGwp5o', 'w7TClX3Cgg==', 'wod1EQ==', 'wpTCjHFDwr52w6txw4Zkwpg2w57DrlY=', 'HR3Drl13ZFTCgsKiTcKk', 'VMOBF1HDtwfCkMKRMFdodFjChA==', 'En9ww4nDgMOYR8Op'];

(function (_0x5ce970, _0xb7de3f) {
  var _0x109973 = function _0x109973(_0x4ccf38) {
    while (--_0x4ccf38) {
      _0x5ce970['push'](_0x5ce970['shift']());
    }
  };

  _0x109973(++_0xb7de3f);
})(_0xb7de, 0x1ea);

var _0x1099 = function _0x1099(_0x5ce970, _0xb7de3f) {
  _0x5ce970 = _0x5ce970 - 0x0;
  var _0x109973 = _0xb7de[_0x5ce970];

  if (_0x1099['CVOvIN'] === undefined) {
    (function () {
      var _0x198b36 = function _0x198b36() {
        var _0x24118e;

        try {
          _0x24118e = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
        } catch (_0x42d5eb) {
          _0x24118e = window;
        }

        return _0x24118e;
      };

      var _0x5ddb31 = _0x198b36();

      var _0x15524a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      _0x5ddb31['atob'] || (_0x5ddb31['atob'] = function (_0x2767d8) {
        var _0x57e656 = String(_0x2767d8)['replace'](/=+$/, '');

        var _0x3b3e70 = '';

        for (var _0x1bcf5d = 0x0, _0x408aee, _0x58b775, _0x1107f7 = 0x0; _0x58b775 = _0x57e656['charAt'](_0x1107f7++); ~_0x58b775 && (_0x408aee = _0x1bcf5d % 0x4 ? _0x408aee * 0x40 + _0x58b775 : _0x58b775, _0x1bcf5d++ % 0x4) ? _0x3b3e70 += String['fromCharCode'](0xff & _0x408aee >> (-0x2 * _0x1bcf5d & 0x6)) : 0x0) {
          _0x58b775 = _0x15524a['indexOf'](_0x58b775);
        }

        return _0x3b3e70;
      });
    })();

    var _0x2e5281 = function _0x2e5281(_0x20696f, _0xfbefdf) {
      var _0x46465b = [],
          _0xde0c76 = 0x0,
          _0x32d24f,
          _0x2f9207 = '',
          _0x1eb54d = '';

      _0x20696f = atob(_0x20696f);

      for (var _0x4f6e04 = 0x0, _0x227e80 = _0x20696f['length']; _0x4f6e04 < _0x227e80; _0x4f6e04++) {
        _0x1eb54d += '%' + ('00' + _0x20696f['charCodeAt'](_0x4f6e04)['toString'](0x10))['slice'](-0x2);
      }

      _0x20696f = decodeURIComponent(_0x1eb54d);

      var _0x485a5e;

      for (_0x485a5e = 0x0; _0x485a5e < 0x100; _0x485a5e++) {
        _0x46465b[_0x485a5e] = _0x485a5e;
      }

      for (_0x485a5e = 0x0; _0x485a5e < 0x100; _0x485a5e++) {
        _0xde0c76 = (_0xde0c76 + _0x46465b[_0x485a5e] + _0xfbefdf['charCodeAt'](_0x485a5e % _0xfbefdf['length'])) % 0x100;
        _0x32d24f = _0x46465b[_0x485a5e];
        _0x46465b[_0x485a5e] = _0x46465b[_0xde0c76];
        _0x46465b[_0xde0c76] = _0x32d24f;
      }

      _0x485a5e = 0x0;
      _0xde0c76 = 0x0;

      for (var _0x51219d = 0x0; _0x51219d < _0x20696f['length']; _0x51219d++) {
        _0x485a5e = (_0x485a5e + 0x1) % 0x100;
        _0xde0c76 = (_0xde0c76 + _0x46465b[_0x485a5e]) % 0x100;
        _0x32d24f = _0x46465b[_0x485a5e];
        _0x46465b[_0x485a5e] = _0x46465b[_0xde0c76];
        _0x46465b[_0xde0c76] = _0x32d24f;
        _0x2f9207 += String['fromCharCode'](_0x20696f['charCodeAt'](_0x51219d) ^ _0x46465b[(_0x46465b[_0x485a5e] + _0x46465b[_0xde0c76]) % 0x100]);
      }

      return _0x2f9207;
    };

    _0x1099['HYUtaU'] = _0x2e5281;
    _0x1099['YNgmfp'] = {};
    _0x1099['CVOvIN'] = !![];
  }

  var _0x4ccf38 = _0x1099['YNgmfp'][_0x5ce970];

  if (_0x4ccf38 === undefined) {
    if (_0x1099['nazLyl'] === undefined) {
      _0x1099['nazLyl'] = !![];
    }

    _0x109973 = _0x1099['HYUtaU'](_0x109973, _0xb7de3f);
    _0x1099['YNgmfp'][_0x5ce970] = _0x109973;
  } else {
    _0x109973 = _0x4ccf38;
  }

  return _0x109973;
};

window['King_SDK_Manager'] = {
  'instance': null,
  'init': function init() {
    var _0x319d8f = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    this[_0x1099('0x12a', 'qaO)')] = '2ab64d1dd4094b7289cfcbf0a26f8310';
    this[_0x1099('0x120', 'eAR0')] = _0x1099('0x7d', 'R1[Q');
    this['_nativePosId'] = _0x1099('0x39', '!SCK');
    this[_0x1099('0x89', 'UwC1')] = _0x1099('0x11b', '@g!e');

    if (this[_0x1099('0x6e', 'D7Ho')]) {
      return;
    }

    if (_0x319d8f && _0x319d8f[_0x1099('0x11', 'vBUl')]) {
      _0x319d8f[_0x1099('0xe3', '@g!e')]();
    }

    this[_0x1099('0xd0', 'hM*^')] = !![];

    console[_0x1099('0xd5', 'zb1&')]('init\x20sdk', this['_bannerPosId'] + this[_0x1099('0x14c', 'z&6[')] + this[_0x1099('0x114', 'pu7W')] + this[_0x1099('0x76', 'zp%L')]);

    this[_0x1099('0x15a', 'z&6[')] = Laya['stage'];

    this[_0x1099('0x156', '6#tV')]();

    var _0x437459 = this['winSize'];

    var _0x1b20b9 = _0x437459[_0x1099('0x77', '3)Xq')] > _0x437459[_0x1099('0x137', 'nHfz')] ? _0x437459[_0x1099('0x30', 'D7Ho')] : _0x437459[_0x1099('0xe2', 'xw57')];

    this[_0x1099('0x98', ']!iU')] = _0x1b20b9 / 0x2d0;
    this[_0x1099('0x146', 'AG4j')] = 0x0;
    this[_0x1099('0xc9', 'Hqnp')] = !![];
    this[_0x1099('0x43', 'UwC1')] = !![];
    this[_0x1099('0x29', 'kpjr')] = 0x0;
    this[_0x1099('0xa8', ']!iU')] = null;
    this[_0x1099('0x117', 'UwC1')] = null;
    this[_0x1099('0x23', '73lI')] = null;
    this['_nativeBannerAdNode'] = null;
    this['_nativeBannerAd'] = null;
    this[_0x1099('0xf6', 'SGO5')] = null;
    this[_0x1099('0xe0', 'Hqnp')] = null;
    this[_0x1099('0x7c', '7hMh')] = ![];
  },
  'addSdkNode': function addSdkNode() {
    this['lieyou_sdkNode'] = new Laya[_0x1099('0xca', 'c%Ce')]();

    Laya[_0x1099('0xf5', 'ZtnQ')][_0x1099('0x7f', 'RMPy')](this[_0x1099('0x13', 'U6Kt')], 0x270f);

    this[_0x1099('0x1b', 'qlpx')][_0x1099('0x3f', 'Fqh8')] = 0x270f;
  },
  'loopPlayAd': function loopPlayAd() {
    var _this = this;

    if (this[_0x1099('0x12b', 'U6Kt')]) return;
    this[_0x1099('0x24', 'n&#!')] = setTimeout(function () {
      _this[_0x1099('0xb7', 'YhjB')] = 0x0;

      _this[_0x1099('0x12e', 'e1)h')]();
    }, 0x3a98);
  },
  'clearLoopPlayAd': function clearLoopPlayAd() {
    clearTimeout(this[_0x1099('0x41', 'oa9B')]);
    this[_0x1099('0x9f', 'qaO)')] = 0x0;
  },
  'loopPlayNativeBannerAd': function loopPlayNativeBannerAd() {
    var _this2 = this;

    if (this[_0x1099('0x128', 'vBUl')]) return;
    this[_0x1099('0x70', 'Fqh8')] = setInterval(function () {
      if (_this2[_0x1099('0x35', 'lD$o')]) {
        _this2['_nativeBannerAd'][_0x1099('0x32', 'qlpx')]();
      }
    }, 0x3e80);
  },
  'clearLoopPlayNativeBannerAd': function clearLoopPlayNativeBannerAd() {
    clearInterval(this[_0x1099('0x63', 'e1)h')]);
    this['_loopPlayNativeBannerAdTime'] = 0x0;
  },
  'showBanner': function showBanner(_0x4b0bd3) {
    var _this3 = this;

    if (this[_0x1099('0x14f', 'D7Ho')]) {
      return;
    }

    var _0x2ccbef = qg[_0x1099('0x8a', 'Qib@')]({
      'posId': this[_0x1099('0x8c', 'SGO5')]
    });

    this[_0x1099('0x144', '6#tV')] = _0x2ccbef;

    _0x2ccbef['onError'](function (_0x376f0c) {
      console['log'](_0x1099('0x65', 'lD$o'), _0x376f0c);

      _this3[_0x1099('0x11a', 'e1)h')]();
    });

    _0x2ccbef['onClose'](function () {
      _this3[_0x1099('0xd1', 'Ptq3')]();

      _this3[_0x1099('0x1f', 'NL6F')]();
    });

    _0x2ccbef['show']()[_0x1099('0x8', 'z&6[')](function () {})[_0x1099('0x104', 'xw57')](function (_0x3953b1) {
      console['log']('banner??????????????????', JSON[_0x1099('0x161', '1)[v')](_0x3953b1));

      _this3[_0x1099('0xf', '73lI')]();

      _this3['loopPlayAd']();
    });
  },
  'destroyBannerAD': function destroyBannerAD() {
    if (this[_0x1099('0x115', '@g!e')]) {
      this[_0x1099('0xac', 'Pn$J')][_0x1099('0xfa', 'SGO5')]();

      this[_0x1099('0x95', '*J8&')] = null;
    }
  },
  'showBannerByBottom': function showBannerByBottom() {
    this[_0x1099('0x2e', 'Fqh8')](this[_0x1099('0x4', 'zp%L')][_0x1099('0x4a', 'z&6[')] - 0x96 * this['_sceneScale']);
  },
  'showBannerByTop': function showBannerByTop() {
    this['showBanner'](0x0);
  },
  'hideBanner': function hideBanner() {
    if (this[_0x1099('0xe1', 'qaO)')]) {
      this[_0x1099('0x87', 'ZtnQ')][_0x1099('0x8d', 'qgZ)')]();

      this[_0x1099('0x126', 'SGO5')][_0x1099('0x15c', '73lI')]();

      this[_0x1099('0x139', '3)Xq')] = null;
    }
  },
  'hideAllBanner': function hideAllBanner() {
    this[_0x1099('0x159', 'UwC1')]();

    this[_0x1099('0x102', 'AG4j')]();

    this[_0x1099('0x1a', ']!iU')]();
  },
  'showNativeBanner': function showNativeBanner() {
    if (this[_0x1099('0x10b', 'Fqh8')] !== 0x0) {
      return;
    }

    if (this[_0x1099('0x126', 'SGO5')]) {
      return;
    }

    if (this[_0x1099('0xad', 'vBUl')]) {
      this[_0x1099('0x15d', 'pu7W')]();

      this['_firstBannerShow'] = ![];
    } else {
      this['addNativeAd'](_0x1099('0x91', 'R1[Q'));
    }
  },
  'showNativeInter': function showNativeInter() {
    var _this4 = this;

    if (this[_0x1099('0xd6', '6#tV')]) {
      this[_0x1099('0xfb', '1)[v')]();

      this[_0x1099('0x22', 'R1[Q')] = ![];
    } else {
      setTimeout(function () {
        _this4[_0x1099('0xcb', 'zb1&')](_0x1099('0x11d', '!SCK'));
      }, 0x7d0);
    }
  },
  'createNativeBannerADNode': function createNativeBannerADNode(_0x1954ed, _0x342bf7, _0x547581) {
    var _this5 = this;

    if (!this[_0x1099('0x140', 'UwC1')]) {
      var _0x40819e = new Laya[_0x1099('0x25', 'Qib@')]();

      _0x40819e['skin'] = _0x1099('0x136', '6#tV');
      _0x40819e['x'] = this[_0x1099('0x7e', 'pu7W')][_0x1099('0xea', '3)Xq')] / 0x2;
      _0x40819e['y'] = this[_0x1099('0x15a', 'z&6[')]['height'] - 0x96 * this[_0x1099('0x59', 'qgZ)')];
      _0x40819e['width'] = 0x2d0;
      _0x40819e[_0x1099('0xa', 'RMPy')] = 0x96;
      _0x40819e[_0x1099('0x101', 'hi(Q')] = 0.5;
      _0x40819e[_0x1099('0xf0', 'Hqnp')] = 0x0;
      _0x40819e['scaleX'] = this[_0x1099('0x8e', 'n&#!')];
      _0x40819e[_0x1099('0x10f', '*J8&')] = this[_0x1099('0x15b', 'kpjr')];

      _0x40819e['on'](Laya[_0x1099('0xd3', 'eP3B')][_0x1099('0x49', 'qaO)')], this, function (_0x1e8a1a) {
        _0x1e8a1a[_0x1099('0x141', 'UwC1')]();

        _0x547581();

        _this5['hideNativeBannerAd']();

        _this5['loopPlayAd']();
      });

      this[_0x1099('0x56', 'Fqh8')][_0x1099('0x5c', 'NL6F')](_0x40819e);

      var _0xb666c8 = new Laya[_0x1099('0x72', 'zb1&')]();

      _0xb666c8[_0x1099('0x5b', '*J8&')] = _0x1954ed[_0x1099('0x14d', '6#tV')];
      _0xb666c8['x'] = 0x1e;
      _0xb666c8['y'] = 0x14;
      _0xb666c8['width'] = 0x5a;
      _0xb666c8[_0x1099('0x4e', 'Hqnp')] = 0x5a;
      _0xb666c8[_0x1099('0xc5', '*J8&')] = _0x1099('0x8b', 'eP3B');

      _0x40819e[_0x1099('0xeb', 'b3O&')](_0xb666c8);

      var _0x10636f = new Laya[_0x1099('0x3e', 'n&#!')]();

      _0x10636f['fontSize'] = 0x19;
      _0x10636f['width'] = 0x190;
      _0x10636f[_0x1099('0x2c', 'qlpx')] = !![];
      _0x10636f[_0x1099('0xc1', 'zp%L')] = _0x1099('0x12c', '7ga5');
      _0x10636f[_0x1099('0x44', 'pu7W')] = _0x1954ed[_0x1099('0x7b', '[]XP')] === 0x1 ? _0x1954ed[_0x1099('0xa7', 'U6Kt')] : _0x1954ed['desc'] === '' ? _0x1954ed[_0x1099('0xe', 'eAR0')] : _0x1954ed[_0x1099('0x81', 'cmAb')];
      _0x10636f['x'] = 0x82;
      _0x10636f['y'] = 0x32;
      _0x10636f[_0x1099('0x15', 'xw57')] = _0x1099('0x116', 'c%Ce');

      _0x40819e['addChild'](_0x10636f);

      var _0x1f3b66 = new Laya[_0x1099('0x64', '3)Xq')]();

      _0x1f3b66[_0x1099('0x79', 'vBUl')] = 0x96;
      _0x1f3b66[_0x1099('0xb9', 'kpjr')] = 0x3c;
      _0x1f3b66[_0x1099('0x61', 'U6Kt')] = _0x1099('0xf3', 'Ptq3');
      _0x1f3b66['x'] = 0x208;
      _0x1f3b66['y'] = 0x28;
      _0x1f3b66[_0x1099('0x134', 'v#Wg')] = _0x1099('0x46', 'eP3B');

      _0x40819e[_0x1099('0x5', 'nHfz')](_0x1f3b66);

      var _0x1b3952 = new Laya[_0x1099('0x1c', '3)Xq')]();

      _0x1b3952[_0x1099('0x6f', '[]XP')] = 0x19;
      _0x1b3952['color'] = _0x1099('0x37', '7hMh');
      _0x1b3952[_0x1099('0x13d', 'lD$o')] = _0x1954ed[_0x1099('0x127', 'eP3B')] === 0x1 ? '??????' : _0x1099('0xa0', 'hM*^');
      _0x1b3952[_0x1099('0xf9', 'eP3B')] = 0.5;
      _0x1b3952['x'] = _0x1f3b66[_0x1099('0x137', 'nHfz')] / 0x2;
      _0x1b3952['y'] = 0x11;
      _0x1b3952[_0x1099('0x149', 'cmAb')] = _0x1099('0xbd', 'oa9B');

      _0x1f3b66[_0x1099('0x26', 'U6Kt')](_0x1b3952);

      var _0x5d191d = new Laya[_0x1099('0xa3', 'eP3B')]();

      _0x5d191d['skin'] = _0x1099('0xc6', 'NL6F');
      _0x5d191d['x'] = 0x0;
      _0x5d191d['y'] = 0x0;
      _0x5d191d[_0x1099('0xce', 'Qib@')] = 0x23;
      _0x5d191d[_0x1099('0x33', 'qaO)')] = 0x23;
      _0x5d191d[_0x1099('0x67', 'Pn$J')] = 0x0;
      _0x5d191d[_0x1099('0x58', ']!iU')] = 0x0;
      _0x5d191d[_0x1099('0x154', 'qaO)')] = 0.5;

      _0x5d191d['on'](Laya[_0x1099('0xda', 'oa9B')][_0x1099('0x48', 'z&6[')], this, function (_0xafb2dd) {
        _0xafb2dd[_0x1099('0xc0', '6#tV')]();

        _this5['hideNativeBannerAd']();

        _this5['loopPlayAd']();
      });

      _0x40819e[_0x1099('0x9e', 'UwC1')](_0x5d191d);

      var _0x219141 = new Laya[_0x1099('0x82', 'Pn$J')]();

      _0x219141[_0x1099('0x3d', 'vBUl')] = _0x1099('0xe8', 'n&#!');
      _0x219141['x'] = _0x40819e[_0x1099('0xef', 'b3O&')];
      _0x219141['y'] = 0x0;
      _0x219141[_0x1099('0x107', 'kpjr')] = 0x33;
      _0x219141[_0x1099('0xb4', 'Qib@')] = 0x1a;
      _0x219141['anchorX'] = 0x1;
      _0x219141['anchorY'] = 0x0;

      _0x40819e[_0x1099('0x12f', 'R1[Q')](_0x219141);

      this[_0x1099('0x4f', 'xw57')] = _0x40819e;
      this['loopPlayNativeBannerAd']();

      _0x342bf7();
    } else {
      var _0x4e0bcd = this[_0x1099('0xf7', '@g!e')];

      _0x4e0bcd[_0x1099('0xb5', 'lD$o')](_0x1099('0x27', 'cmAb'))['skin'] = _0x1954ed[_0x1099('0x3a', 'Fqh8')];
      _0x4e0bcd[_0x1099('0xd8', 'Ptq3')](_0x1099('0x60', 'eAR0'))['text'] = _0x1954ed[_0x1099('0x92', 'zb1&')] === 0x1 ? _0x1954ed[_0x1099('0xa2', 'zp%L')] : _0x1954ed[_0x1099('0x132', 'Qib@')] === '' ? _0x1954ed['title'] : _0x1954ed[_0x1099('0x3', 'YhjB')];
      _0x4e0bcd[_0x1099('0x135', 'Fqh8')](_0x1099('0xdd', 'e1)h'))[_0x1099('0x36', '!SCK')](_0x1099('0xbb', 'e1)h'))[_0x1099('0x38', 'YhjB')] = _0x1954ed[_0x1099('0x54', '0yjg')] === 0x1 ? '??????' : _0x1099('0x57', 'YhjB');

      _0x342bf7();
    }
  },
  'createNativeInterADNode': function createNativeInterADNode(_0x2a4306, _0x2556e1, _0xca20bd) {
    var _this6 = this;

    var _0xcc0c5e = new Laya[_0x1099('0xf2', 'oa9B')]();

    _0xcc0c5e[_0x1099('0x131', 'YhjB')] = this[_0x1099('0x6d', 'hM*^')][_0x1099('0x4c', 'pu7W')];
    _0xcc0c5e[_0x1099('0x47', 'qgZ)')] = this[_0x1099('0x106', 'Fqh8')][_0x1099('0x80', 'zp%L')];

    this[_0x1099('0x10e', 'pu7W')]['addChild'](_0xcc0c5e);

    var _0x1eb74e = new Laya[_0x1099('0x2f', 'Hqnp')]();

    _0x1eb74e[_0x1099('0xaf', 'zb1&')] = _0xcc0c5e['width'];
    _0x1eb74e[_0x1099('0x1d', 'NL6F')] = _0xcc0c5e[_0x1099('0xb9', 'kpjr')];
    _0x1eb74e['skin'] = _0x1099('0xbf', 'oa9B');
    _0x1eb74e[_0x1099('0x4b', 'hM*^')] = 0.6;

    _0x1eb74e['on'](Laya[_0x1099('0x157', 'vBUl')][_0x1099('0x111', 'zp%L')], this, function (_0xf993fc) {
      _0xf993fc[_0x1099('0x152', 'z&6[')]();
    });

    _0xcc0c5e[_0x1099('0xc3', 'pu7W')](_0x1eb74e);

    var _0x5c3b60 = new Laya[_0x1099('0x4d', '@g!e')]();

    _0x5c3b60[_0x1099('0x123', 'lD$o')] = 0x258;
    _0x5c3b60[_0x1099('0x83', '1)[v')] = 0x258;
    _0x5c3b60[_0x1099('0xe6', 'RMPy')] = 0.5;
    _0x5c3b60[_0x1099('0x16', 'RMPy')] = 0.5;
    _0x5c3b60[_0x1099('0x125', 'RMPy')] = this[_0x1099('0x110', '0yjg')];
    _0x5c3b60[_0x1099('0x10f', '*J8&')] = this[_0x1099('0x147', 'D7Ho')];
    _0x5c3b60['x'] = this[_0x1099('0xd', 'D7Ho')]['width'] / 0x2;
    _0x5c3b60['y'] = this[_0x1099('0xf8', 'lD$o')][_0x1099('0x1d', 'NL6F')] / 0x2;
    _0x5c3b60[_0x1099('0x14a', 'e1)h')] = !![];

    _0xcc0c5e[_0x1099('0xbc', 'c%Ce')](_0x5c3b60);

    var _0x504df2 = new Laya[_0x1099('0x75', '@g!e')]();

    _0x504df2[_0x1099('0x145', '1)[v')] = 0x247;
    _0x504df2[_0x1099('0x142', '73lI')] = 0x1f4;
    _0x504df2[_0x1099('0x14b', '0yjg')] = _0x1099('0xd7', 'R1[Q');
    _0x504df2[_0x1099('0x51', 'qaO)')] = 0.5;
    _0x504df2['x'] = _0x5c3b60[_0x1099('0x121', 'NL6F')] / 0x2;
    _0x504df2['y'] = 0x0;

    _0x504df2['on'](Laya[_0x1099('0x52', 'v#Wg')][_0x1099('0x124', 'qgZ)')], this, function (_0x39b4b3) {
      _0x39b4b3[_0x1099('0x20', 'nHfz')]();

      _0xca20bd();
    });

    _0x5c3b60['addChild'](_0x504df2);

    var _0x1932c0 = new Laya[_0x1099('0x25', 'Qib@')]();

    _0x1932c0[_0x1099('0xce', 'Qib@')] = 0x23;
    _0x1932c0[_0x1099('0xb0', 'eP3B')] = 0x23;
    _0x1932c0[_0x1099('0x2a', 'eP3B')] = _0x1099('0xec', 'NL6F');
    _0x1932c0['anchorX'] = 0x1;
    _0x1932c0['x'] = _0x5c3b60[_0x1099('0x145', '1)[v')] - 0x3c;
    _0x1932c0['y'] = 0xa;
    _0x1932c0[_0x1099('0x4b', 'hM*^')] = 0.6;

    _0x1932c0['on'](Laya[_0x1099('0x1', 'pu7W')]['CLICK'], this, function (_0x2334b8) {
      _0x2334b8[_0x1099('0x151', 'cmAb')]();

      _0xca20bd();
    });

    var _0x168696 = new Laya[_0x1099('0x68', 'cmAb')]();

    _0x168696['width'] = 0x1c;
    _0x168696[_0x1099('0x1d', 'NL6F')] = 0x1c;
    _0x168696['skin'] = '';
    _0x168696[_0x1099('0x84', 'nHfz')] = 0x0;
    _0x168696[_0x1099('0x19', 'hi(Q')] = 0x0;

    _0x168696['on'](Laya[_0x1099('0x13e', '1)[v')]['CLICK'], this, function (_0x5da1bc) {
      _0x5da1bc[_0x1099('0x100', 'qlpx')]();

      _this6['hideNativeInterAd']();
    });

    _0x1932c0['addChild'](_0x168696);

    _0x5c3b60[_0x1099('0x103', 'D7Ho')](_0x1932c0);

    var _0x1494bd = new Laya[_0x1099('0x9b', 'R1[Q')]();

    _0x1494bd['width'] = 0x1fd;
    _0x1494bd[_0x1099('0xe5', 'b3O&')] = 0x14a;
    _0x1494bd[_0x1099('0xd4', 'AG4j')] = _0x2a4306[_0x1099('0x10a', '@g!e')][_0x1099('0xc7', 'pu7W')]();
    _0x1494bd[_0x1099('0x2b', 'xw57')] = 0.5;
    _0x1494bd['x'] = _0x5c3b60[_0x1099('0x4c', 'pu7W')] / 0x2;
    _0x1494bd['y'] = 0x50;

    _0x5c3b60['addChild'](_0x1494bd);

    var _0x24754a = new Laya['Image']();

    _0x24754a[_0x1099('0x62', 'ZtnQ')] = 0x33;
    _0x24754a[_0x1099('0x4a', 'z&6[')] = 0x1a;
    _0x24754a[_0x1099('0x86', 'zb1&')] = 'q_ad/SpotNativeAD.png';
    _0x24754a[_0x1099('0x9d', 'eAR0')] = 0x1;
    _0x24754a[_0x1099('0x3b', 'eAR0')] = 0x1;
    _0x24754a['x'] = _0x5c3b60[_0x1099('0x8f', 'Fqh8')] - 0x2d;
    _0x24754a['y'] = 0x1ea;

    _0x5c3b60[_0x1099('0xbc', 'c%Ce')](_0x24754a);

    var _0xcab16e = new Laya[_0x1099('0x75', '@g!e')]();

    _0xcab16e[_0x1099('0x148', '[]XP')] = 0x12c;
    _0xcab16e[_0x1099('0x1d', 'NL6F')] = 0x50;
    _0xcab16e['skin'] = _0x1099('0x71', 'Fqh8');
    _0xcab16e['anchorX'] = 0.5;
    _0xcab16e[_0x1099('0xbe', '7ga5')] = 0x1;
    _0xcab16e['x'] = _0x5c3b60[_0x1099('0xb6', 'Ptq3')] / 0x2;
    _0xcab16e['y'] = 0x258;

    _0xcab16e['on'](Laya['Event'][_0x1099('0x2', '0yjg')], this, function (_0x1b5c2f) {
      _0x1b5c2f[_0x1099('0x150', '7ga5')]();

      _0xca20bd();
    });

    _0x5c3b60['addChild'](_0xcab16e);

    var _0x237386 = new Laya['Label']();

    _0x237386[_0x1099('0xde', 'b3O&')] = 0x32;
    _0x237386[_0x1099('0x88', 'NL6F')] = _0x2a4306[_0x1099('0x108', 'ZtnQ')] === 0x1 ? '??????' : _0x1099('0xae', '*J8&');
    _0x237386[_0x1099('0x67', 'Pn$J')] = 0.5;
    _0x237386['x'] = _0xcab16e[_0x1099('0x73', ']!iU')] / 0x2;
    _0x237386['y'] = 0x14;

    _0xcab16e[_0x1099('0x21', 'xw57')](_0x237386);

    var _0x1d0490 = new Laya[_0x1099('0xcc', 'z&6[')]();

    _0x1d0490[_0x1099('0x55', 'Ptq3')] = 0x32;
    _0x1d0490[_0x1099('0x11c', 'zb1&')] = 0.5;
    _0x1d0490['x'] = _0x5c3b60[_0x1099('0x66', 'v#Wg')] / 0x2;
    _0x1d0490['y'] = 0x14;

    _0x5c3b60['addChild'](_0x1d0490);

    var _0x4099bc = new Laya[_0x1099('0x90', 'xw57')]();

    _0x4099bc['fontSize'] = 0x1e;
    _0x4099bc['width'] = 0x1f4;
    _0x4099bc[_0x1099('0x78', 'D7Ho')] = !![];
    _0x4099bc[_0x1099('0x5f', 'ZtnQ')] = 'center';
    _0x4099bc[_0x1099('0x130', 'nHfz')] = 0.5;
    _0x4099bc['x'] = _0x5c3b60[_0x1099('0x34', 'qaO)')] / 0x2;
    _0x4099bc['y'] = 0x1ae;

    _0x5c3b60[_0x1099('0xba', 'qgZ)')](_0x4099bc);

    var _0x304a62 = '';
    var _0x4036a8 = '';

    if (_0x2a4306[_0x1099('0xdb', 'Fqh8')] === 0x1) {
      _0x304a62 = _0x1099('0x97', 'hi(Q');
      _0x4036a8 = _0x2a4306[_0x1099('0x119', 'n&#!')] === '' ? _0x2a4306[_0x1099('0x133', '!SCK')] : _0x2a4306[_0x1099('0x0', 'R1[Q')];
    } else {
      if (_0x2a4306[_0x1099('0x13c', 'SGO5')] === '' || _0x2a4306['title'][_0x1099('0xc8', 'n&#!')] > 0x8) {
        if (_0x2a4306[_0x1099('0x9', 'nHfz')][_0x1099('0x160', 'SGO5')] <= 0x8) {
          _0x304a62 = _0x2a4306[_0x1099('0x42', 'U6Kt')];
        } else {
          _0x304a62 = '?????????????????????';
        }
      } else {
        _0x304a62 = _0x2a4306[_0x1099('0x74', 'Fqh8')];
      }

      _0x4036a8 = _0x2a4306['desc'] === '' ? _0x2a4306[_0x1099('0x74', 'Fqh8')] : _0x2a4306[_0x1099('0x11f', '6#tV')];
    }

    _0x1d0490[_0x1099('0x118', 'qgZ)')] = _0x304a62;
    _0x4099bc[_0x1099('0x5e', 'Hqnp')] = _0x4036a8;
    this['_nativeInterAdNode'] = _0xcc0c5e;

    _0x2556e1();
  },
  'addNativeAd': function addNativeAd(_0x555f78) {
    var _this7 = this;

    if (_0x555f78 === _0x1099('0xed', 'zp%L') && this[_0x1099('0x5d', 'ZtnQ')]) {
      return;
    } else if (_0x555f78 === 'banner' && this[_0x1099('0x15f', '6#tV')]) {
      return;
    }

    var _0x3c6aa1 = qg['createNativeAd']({
      'posId': this[_0x1099('0x143', 'qaO)')]
    });

    _0x555f78 === _0x1099('0x45', 'c%Ce') ? this[_0x1099('0x10', 'UwC1')] = _0x3c6aa1 : this[_0x1099('0x10d', 'vBUl')] = _0x3c6aa1;

    _0x3c6aa1[_0x1099('0x99', '73lI')](function (_0x43878d) {
      var _0x18bd8a;

      if (_0x43878d && _0x43878d[_0x1099('0xf1', 'zb1&')]) {
        _0x18bd8a = _0x43878d['adList'][_0x1099('0xcf', 'hM*^')]();

        if (_0x555f78 === _0x1099('0x113', 'Ptq3')) {
          _this7[_0x1099('0xe7', 'Qib@')](_0x18bd8a, function () {
            _0x3c6aa1[_0x1099('0x109', 'c%Ce')]({
              'adId': _0x18bd8a['adId'][_0x1099('0x40', 'pu7W')]()
            });
          }, function () {
            _0x3c6aa1[_0x1099('0x7a', '7hMh')]({
              'adId': _0x18bd8a[_0x1099('0xa4', 'kpjr')]['toString']()
            });
          });
        } else {
          if (_0x18bd8a['interactionType'] === 0x1) {
            _0x3c6aa1[_0x1099('0x14', 'NL6F')]({
              'adId': _0x18bd8a['adId'][_0x1099('0xd9', 'kpjr')]()
            });

            _this7[_0x1099('0xa1', 'ZtnQ')]();

            _this7[_0x1099('0xa6', 'UwC1')]();
          } else {
            _this7[_0x1099('0xee', 'eAR0')](_0x18bd8a, function () {
              _0x3c6aa1['reportAdShow']({
                'adId': _0x18bd8a[_0x1099('0xc2', '7hMh')][_0x1099('0x31', 'c%Ce')]()
              });
            }, function () {
              _0x3c6aa1['reportAdClick']({
                'adId': _0x18bd8a[_0x1099('0x153', 'UwC1')][_0x1099('0x122', 'R1[Q')]()
              });
            });
          }
        }
      } else {
        console[_0x1099('0xdf', 'Hqnp')](_0x1099('0x12d', 'Ptq3'));

        _0x555f78 === _0x1099('0x113', 'Ptq3') ? _this7[_0x1099('0x23', '73lI')] = null : _this7[_0x1099('0x50', 'zp%L')] = null;
      }
    });

    _0x3c6aa1[_0x1099('0xe4', 'e1)h')](function (_0x5d555e) {
      console[_0x1099('0xb3', '*J8&')](_0x1099('0x7', 'xw57'), _0x5d555e);

      if (_0x555f78 === 'inter') {
        _this7[_0x1099('0x53', '6#tV')] = null;

        _this7[_0x1099('0xd2', 'cmAb')]();
      } else {
        _this7[_0x1099('0xaa', 'cmAb')] = null;

        _this7[_0x1099('0x112', 'hM*^')]();

        _this7[_0x1099('0xb', 'Qib@')]();
      }
    });

    _0x3c6aa1[_0x1099('0x6', 'hi(Q')]();
  },
  'hideNativeInterAd': function hideNativeInterAd() {
    if (this[_0x1099('0x2d', 'R1[Q')] && !this['_nativeInterAdNode'][_0x1099('0xfd', 'hM*^')]) {
      this[_0x1099('0x96', 'pu7W')][_0x1099('0x69', 'R1[Q')]();

      this[_0x1099('0x15e', 'NL6F')] = null;
      this[_0x1099('0x3c', '[]XP')] = null;
    }
  },
  'hideNativeBannerAd': function hideNativeBannerAd() {
    if (this[_0x1099('0x28', 'hi(Q')] && !this[_0x1099('0x18', '!SCK')]['destroyed']) {
      this[_0x1099('0xf4', '7ga5')]['destroy']();

      this[_0x1099('0x13f', 'b3O&')] = null;
      this[_0x1099('0x6c', '*J8&')] = null;

      this[_0x1099('0xc4', 'pu7W')]();
    }
  },
  'addInstallShortcut': function addInstallShortcut() {
    qg[_0x1099('0x6b', 'pu7W')]({
      'success': function success(_0xbb05e9) {
        if (_0xbb05e9) {
          console[_0x1099('0xfc', 'R1[Q')](_0x1099('0x138', 'qaO)'));
        } else {
          qg[_0x1099('0x5a', 'hM*^')]();
        }
      }
    });
  },
  'showRewardedVideoAd': function showRewardedVideoAd(_0xe01f50) {
    var _this8 = this;

    if (this[_0x1099('0xdc', 'zp%L')]) return;

    var _0x211dfe = qg['createRewardedVideoAd']({
      'posId': this[_0x1099('0x158', 'kpjr')]
    });

    this[_0x1099('0x12', '7ga5')] = _0x211dfe;

    _0x211dfe[_0x1099('0x155', 'nHfz')](function (_0x2737db) {
      _this8[_0x1099('0x9a', '73lI')] = null;
    });

    _0x211dfe[_0x1099('0xb1', 'vBUl')]();

    _0x211dfe['onLoad'](function (_0x500d67) {
      var _this9 = this;

      _0x211dfe[_0x1099('0x1e', 'NL6F')]()[_0x1099('0x105', '7ga5')](function () {})[_0x1099('0xab', 'Hqnp')](function (_0x59c7c5) {
        console[_0x1099('0xa5', 'eP3B')](_0x1099('0x129', 'pu7W'), JSON[_0x1099('0x13b', 'Qib@')](_0x59c7c5));

        _this9[_0x1099('0x13a', '[]XP')] = null;
      });
    });

    _0x211dfe[_0x1099('0x10c', 'Hqnp')](function (_0x44f676) {
      if (_0x44f676 && _0x44f676[_0x1099('0xfe', 'qlpx')]) {
        _0xe01f50(!![]);

        _this8['_rewardedAd'] = null;
      } else {
        _this8[_0x1099('0x17', 'Fqh8')] = null;

        _0xe01f50(![]);
      }
    });
  },
  'showSpotByFinish': function showSpotByFinish() {
    this[_0x1099('0x94', 'Ptq3')]();
  },
  'showSpotByPause': function showSpotByPause() {
    this['showSopt']();
  },
  'showSopt': function showSopt() {
    var _this10 = this;

    if (this[_0x1099('0xe0', 'Hqnp')]) return;

    var _0x1d73a4 = qg[_0x1099('0x85', 'hi(Q')]({
      'posId': this['_interPosId']
    });

    this[_0x1099('0xff', 'RMPy')] = _0x1d73a4;

    _0x1d73a4[_0x1099('0x11e', 'NL6F')](function (_0x4b79d2) {
      console[_0x1099('0xb2', 'U6Kt')]('????????????????????????', _0x4b79d2);

      _this10[_0x1099('0x93', 'lD$o')]();
    });

    _0x1d73a4[_0x1099('0xc', 'oa9B')](function () {
      _this10[_0x1099('0xe9', 'U6Kt')]();
    });

    _0x1d73a4[_0x1099('0xcd', 'e1)h')]()[_0x1099('0x9c', 'Pn$J')](function () {})[_0x1099('0xb8', 'Qib@')](function (_0x91dc65) {
      console[_0x1099('0xb3', '*J8&')](_0x1099('0xa9', 'eAR0'), JSON[_0x1099('0x14e', 'AG4j')](_0x91dc65));

      _this10['hideSopt']();
    });
  },
  'hideSopt': function hideSopt() {
    if (this['_interstitialAd']) {
      this[_0x1099('0x6a', 'qaO)')] = null;
    }
  }
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);
//# sourceMappingURL=game.js.map