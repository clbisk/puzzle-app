(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/heyawake-rules/heyawake-rules.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/heyawake-rules/heyawake-rules.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol>\r\n    <li>The numbers in some outlined areas indicate how many squares are painted; if there is no\r\n        number, there may be any number of painted squares, including zero</li>\r\n    <li>Painted squares cannot touch each other vertically or horizontally, but they can be diagonal\r\n    </li>\r\n    <li>All white squares form a contiguous area, forming a path that can get to each other white\r\n        square by a series of horizontal or vertical steps (diagonally does not count)</li>\r\n    <li>A line of white squares, running either horizontally or vertically, may not span more than\r\n        two outlined areas</li>\r\n</ol>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/heyawake/heyawake.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/heyawake/heyawake.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"vertically-centered\">\r\n    <div class=\"centered\">\r\n        <!-- puzzle grid -->\r\n        <div class=\"puzzle centered\">\r\n            <!-- puzzle rows -->\r\n            <div *ngFor=\"let row of userSolution; index as x\" class=\"vertically-centered\">\r\n                <!-- each column in a puzzle row -->\r\n                <div *ngFor=\"let n of row; index as y\" class=\"puzzle-cell\"\r\n                [class.right-border]=\"cellHasRightBoundary(x, y)\" [class.bottom-border]=\"cellHasLowerBoundary(x, y)\"\r\n                [class.left-border]=\"cellHasLeftBoundary(x, y)\" [class.top-border]=\"cellHasUpperBoundary(x, y)\"\r\n                [class.painted]=\"userSolution[y][x] !== null? !userSolution[y][x] : false\"\r\n                [class.blank]=\"userSolution[y][x] !== null? userSolution[y][x] : false\"\r\n                (click)=\"toggleCellColor(x, y)\">\r\n                    <div>{{clueInCell(x,y)}}</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hitori-rules/hitori-rules.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hitori-rules/hitori-rules.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ol>\r\n    <li>There is only one of each number left in a row, the rest are blacked out</li>\r\n    <li>Blacked out squares cannot touch each other vertically or horizontally, but they can be\r\n        diagonal</li>\r\n    <li>All white squares form a contiguous area, forming a path that can get to each other white\r\n        square by a series of horizontal or vertical steps (diagonally does not count)</li>\r\n</ol>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hitori/hitori.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hitori/hitori.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"vertically-centered\">\r\n    <div class=\"centered\">\r\n        <!-- puzzle grid -->\r\n        <div class=\"puzzle centered\" [class.correct]=\"correct\">\r\n            <!-- puzzle rows -->\r\n            <div *ngFor=\"let row of puzzleData; index as x\" class=\"vertically-centered\">\r\n                <!-- each column in a puzzle row -->\r\n                <div *ngFor=\"let n of row; index as y\" class=\"puzzle-cell centered\"\r\n                    [class.blackened-out]=\"userSolution[y][x] !== null? !userSolution[y][x] : false\"\r\n                    [class.circled]=\"userSolution[y][x] !== null? userSolution[y][x] : false\"\r\n                    (click)=\"toggleCellColor(x, y)\">\r\n                    <div class=\"vertically-centered\">\r\n                        {{n}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>The Infinite Puzzle Generator</h1>\r\n<div class=\"body\">\r\n    <div>\r\n        <ul ngbNav #nav=\"ngbNav\" [(activeId)]=\"active\" class=\"nav-tabs\">\r\n            <li [ngbNavItem]=\"'Hitori'\">\r\n                <a ngbNavLink>Hitori</a>\r\n            </li>\r\n            <li [ngbNavItem]=\"'Heyawake'\">\r\n                <a ngbNavLink>Heyawake</a>\r\n            </li>\r\n        </ul>\r\n\r\n        <div ngbNavContent class=\"mt-2 tab-content\">\r\n            <div class=\"left\">\r\n                <h3>{{active}} rules:</h3>\r\n                <div *ngIf=\"active === 'Hitori'\">\r\n                    <app-hitori-rules></app-hitori-rules>\r\n                </div>\r\n                <div *ngIf=\"active === 'Heyawake'\">\r\n                    <app-heyawake-rules></app-heyawake-rules>\r\n                </div>\r\n            </div>\r\n            <div class=\"right\">\r\n                <app-puzzle-size-selector [puzzleType]=\"active\"></app-puzzle-size-selector>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/puzzle-size-selector/puzzle-size-selector.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/puzzle-size-selector/puzzle-size-selector.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Try a {{puzzleType}} puzzle</h2>\r\n\r\n<div class=\"btn-group mr-3\">\r\n  <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n    <button class=\"btn btn-outline-primary\" ngbDropdownToggle>{{selectedSize}}</button>\r\n    <div class=\"dropdown-menu\" ngbDropdownMenu>\r\n      <button *ngFor=\"let size of puzzleSizes[puzzleType]\" (click)=\"selectSize(size)\" ngbDropdownItem>{{size}}</button>\r\n    </div>\r\n  </div>\r\n  <button type=\"button\" class=\"btn btn-outline-success\" [disabled]=\"selectedSize === 'Select Size'\"\r\n    routerLink=\"/puzzle/{{puzzleType}}/0000\" routerLinkActive=\"active\">Get Puzzle!</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/puzzle-view/puzzle-view.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/puzzle-view/puzzle-view.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>The Infinite Puzzle Generator</h1>\r\n\r\n<br />\r\n\r\n<div class=\"centered\">\r\n    <h3>Puzzle #{{id}}</h3>\r\n    <i class=\"fas fa-question-circle\" title=\"How to Play\" (click)=\"showHelp = !showHelp\"></i>\r\n</div>\r\n\r\n<div *ngIf=\"showHelp\" class=\"info-box bordered centered\">\r\n    <app-hitori-rules *ngIf=\"puzzleType === 'Hitori'\"></app-hitori-rules>\r\n    <app-heyawake-rules *ngIf=\"puzzleType === 'Heyawake'\"></app-heyawake-rules>\r\n</div>\r\n\r\n<div class=\"puzzle-frame bordered centered\">\r\n    <app-hitori *ngIf=\"puzzleType === 'Hitori'\" [id]=\"id\"></app-hitori>\r\n    <app-heyawake *ngIf=\"puzzleType === 'Heyawake'\"></app-heyawake>\r\n</div>\r\n\r\n<div class=\"centered\">\r\n    <div class=\"user-ratings\">\r\n        <div>\r\n            Rate this puzzle: <ngb-rating [(rate)]=\"userRating\" max=\"5\"></ngb-rating>\r\n        </div>\r\n        <div>\r\n            Rate its difficulty: <ngb-rating [(rate)]=\"userDifficultyRating\" max=\"5\"></ngb-rating>\r\n        </div>\r\n        <button type=\"button\" class=\"btn btn-outline-success\" [disabled]=\"!userRating || !userDifficultyRating\" (click)=\"ratePuzzle()\">Submit Rating</button>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'puzzle-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _puzzle_size_selector_puzzle_size_selector_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./puzzle-size-selector/puzzle-size-selector.component */ "./src/app/puzzle-size-selector/puzzle-size-selector.component.ts");
/* harmony import */ var _puzzle_view_puzzle_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./puzzle-view/puzzle-view.component */ "./src/app/puzzle-view/puzzle-view.component.ts");
/* harmony import */ var _puzzle_view_id_pipe_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./puzzle-view/id-pipe.pipe */ "./src/app/puzzle-view/id-pipe.pipe.ts");
/* harmony import */ var _hitori_hitori_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hitori/hitori.component */ "./src/app/hitori/hitori.component.ts");
/* harmony import */ var _heyawake_heyawake_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./heyawake/heyawake.component */ "./src/app/heyawake/heyawake.component.ts");
/* harmony import */ var _hitori_rules_hitori_rules_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hitori-rules/hitori-rules.component */ "./src/app/hitori-rules/hitori-rules.component.ts");
/* harmony import */ var _heyawake_rules_heyawake_rules_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./heyawake-rules/heyawake-rules.component */ "./src/app/heyawake-rules/heyawake-rules.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");















const appRoutes = [
    { path: '', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"] },
    { path: 'puzzle/:puzzle-type/:id', component: _puzzle_view_puzzle_view_component__WEBPACK_IMPORTED_MODULE_8__["PuzzleViewComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _puzzle_size_selector_puzzle_size_selector_component__WEBPACK_IMPORTED_MODULE_7__["PuzzleSizeSelectorComponent"],
            _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"],
            _puzzle_view_puzzle_view_component__WEBPACK_IMPORTED_MODULE_8__["PuzzleViewComponent"],
            _puzzle_view_id_pipe_pipe__WEBPACK_IMPORTED_MODULE_9__["IdPipePipe"],
            _hitori_hitori_component__WEBPACK_IMPORTED_MODULE_10__["HitoriComponent"],
            _heyawake_heyawake_component__WEBPACK_IMPORTED_MODULE_11__["HeyawakeComponent"],
            _hitori_rules_hitori_rules_component__WEBPACK_IMPORTED_MODULE_12__["HitoriRulesComponent"],
            _heyawake_rules_heyawake_rules_component__WEBPACK_IMPORTED_MODULE_13__["HeyawakeRulesComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/heyawake-rules/heyawake-rules.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/heyawake-rules/heyawake-rules.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("li {\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGV5YXdha2UtcnVsZXMvQzpcXFVzZXJzXFxjbGJpc1xcRG9jdW1lbnRzXFxIb21ld29ya1xcQ2Fwc3RvbmVcXHB1enpsZS1hcHAvc3JjXFxhcHBcXGhleWF3YWtlLXJ1bGVzXFxoZXlhd2FrZS1ydWxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGV5YXdha2UtcnVsZXMvaGV5YXdha2UtcnVsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaGV5YXdha2UtcnVsZXMvaGV5YXdha2UtcnVsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufSIsImxpIHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/heyawake-rules/heyawake-rules.component.ts":
/*!************************************************************!*\
  !*** ./src/app/heyawake-rules/heyawake-rules.component.ts ***!
  \************************************************************/
/*! exports provided: HeyawakeRulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeyawakeRulesComponent", function() { return HeyawakeRulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeyawakeRulesComponent = class HeyawakeRulesComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeyawakeRulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-heyawake-rules',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./heyawake-rules.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/heyawake-rules/heyawake-rules.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./heyawake-rules.component.scss */ "./src/app/heyawake-rules/heyawake-rules.component.scss")).default]
    })
], HeyawakeRulesComponent);



/***/ }),

/***/ "./src/app/heyawake/heyawake.component.scss":
/*!**************************************************!*\
  !*** ./src/app/heyawake/heyawake.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".puzzle-cell {\n  width: 50px;\n  height: 50px;\n  border: thin solid black;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding-left: 5px;\n  background: lightgray;\n}\n.puzzle-cell div {\n  font-size: 20px;\n  font-weight: bold;\n}\n.painted {\n  background: #474747;\n}\n.blank {\n  background: white;\n}\n.left-border {\n  border-left: 3px solid black;\n}\n.right-border {\n  border-right: 3px solid black;\n}\n.bottom-border {\n  border-bottom: 3px solid black;\n}\n.top-border {\n  border-top: 3px solid black;\n}\n.puzzle {\n  border: 3px solid black;\n  border-left: 3px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGV5YXdha2UvQzpcXFVzZXJzXFxjbGJpc1xcRG9jdW1lbnRzXFxIb21ld29ya1xcQ2Fwc3RvbmVcXHB1enpsZS1hcHAvc3JjXFxhcHBcXGhleWF3YWtlXFxoZXlhd2FrZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGV5YXdha2UvaGV5YXdha2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQVBVO0VBUVYseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDTko7QURRSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ05SO0FEVUE7RUFDSSxtQkFqQlE7QUNVWjtBRFVBO0VBQ0ksaUJBQUE7QUNQSjtBRFVBO0VBQ0ksNEJBMUJVO0FDbUJkO0FEVUE7RUFDSSw2QkE5QlU7QUN1QmQ7QURVQTtFQUNJLDhCQWxDVTtBQzJCZDtBRFVBO0VBQ0ksMkJBdENVO0FDK0JkO0FEVUE7RUFDSSx1QkExQ1U7RUEyQ1YsNEJBM0NVO0FDb0NkIiwiZmlsZSI6InNyYy9hcHAvaGV5YXdha2UvaGV5YXdha2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaW5mby1ibHVlOiByZ2IoMzgsIDk3LCA5Nyk7XHJcbiR0aGVtZS1saWdodC1ncmF5OiByZ2JhKDAsMCwwLC4xMjUpO1xyXG4kdGhlbWUtYm9yZGVyOiB0aGluIHNvbGlkICR0aGVtZS1saWdodC1ncmF5O1xyXG4kY2VsbC1ib3JkZXI6IHRoaW4gc29saWQgYmxhY2s7XHJcbiRyb29tLWJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xyXG4kZGFyay1ncmF5OiByZ2IoNzEsIDcxLCA3MSk7XHJcblxyXG4ucHV6emxlLWNlbGwge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6ICRjZWxsLWJvcmRlcjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYWludGVkIHtcclxuICAgIGJhY2tncm91bmQ6ICRkYXJrLWdyYXk7XHJcbn1cclxuXHJcbi5ibGFuayB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmxlZnQtYm9yZGVyIHtcclxuICAgIGJvcmRlci1sZWZ0OiAkcm9vbS1ib3JkZXI7XHJcbn1cclxuXHJcbi5yaWdodC1ib3JkZXIge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAkcm9vbS1ib3JkZXI7XHJcbn1cclxuXHJcbi5ib3R0b20tYm9yZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206ICRyb29tLWJvcmRlcjtcclxufVxyXG5cclxuLnRvcC1ib3JkZXIge1xyXG4gICAgYm9yZGVyLXRvcDogJHJvb20tYm9yZGVyO1xyXG59XHJcblxyXG4ucHV6emxlIHtcclxuICAgIGJvcmRlcjogJHJvb20tYm9yZGVyOyAvL21hcmtzIHRoZSB0b3AgYW5kIGxlZnQgYm9yZGVycyBhcyBpbXBsaWNpdCBib3VuZGFyaWVzIGZvciBzb21lIHJvb21cclxuICAgIGJvcmRlci1sZWZ0OiAkcm9vbS1ib3JkZXI7XHJcbn0iLCIucHV6emxlLWNlbGwge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXI6IHRoaW4gc29saWQgYmxhY2s7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xufVxuLnB1enpsZS1jZWxsIGRpdiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wYWludGVkIHtcbiAgYmFja2dyb3VuZDogIzQ3NDc0Nztcbn1cblxuLmJsYW5rIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5sZWZ0LWJvcmRlciB7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgYmxhY2s7XG59XG5cbi5yaWdodC1ib3JkZXIge1xuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCBibGFjaztcbn1cblxuLmJvdHRvbS1ib3JkZXIge1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XG59XG5cbi50b3AtYm9yZGVyIHtcbiAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIGJsYWNrO1xufVxuXG4ucHV6emxlIHtcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgYmxhY2s7XG59Il19 */");

/***/ }),

/***/ "./src/app/heyawake/heyawake.component.ts":
/*!************************************************!*\
  !*** ./src/app/heyawake/heyawake.component.ts ***!
  \************************************************/
/*! exports provided: HeyawakeComponent, Room */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeyawakeComponent", function() { return HeyawakeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeyawakeComponent = class HeyawakeComponent {
    constructor() {
        this.roomBoundaries = [];
        //transformations of puzzle data to make visual representation easier
        this.rightBoundaries = []; //coords of cells that need a dark right side
        this.lowerBoundaries = []; //coords of cells that need a dark bottom side
        this.leftBoundaries = []; //coords of cells that need a dark left side
        this.upperBoundaries = []; //coords of cells that need a dark top side
        this.userSolution = [];
    }
    ngOnInit() {
        this.size = 6;
        for (let i = 0; i < this.size; i++) {
            this.userSolution.push(new Array(this.size));
            for (let j = 0; j < this.size; j++) {
                this.userSolution[i][j] = null;
            }
        }
        this.roomBoundaries = [
            new Room([0, 0], [2, 1], 2),
            new Room([3, 0], [5, 1], 3),
            new Room([0, 2], [5, 3], 5),
            new Room([0, 4], [5, 5])
        ];
        //calculate where boundaries need to be drawn on the puzzle display
        this.roomBoundaries.forEach(room => {
            //calculate where the left and right boundary of this room needs to be drawn
            let leftBoundaryX = room.topLeft[0];
            let rightBoundaryX = room.bottomRight[0];
            for (let boundaryY = room.topLeft[1]; boundaryY <= room.bottomRight[1]; boundaryY++) {
                this.leftBoundaries.push([leftBoundaryX, boundaryY]);
                this.rightBoundaries.push([rightBoundaryX, boundaryY]);
            }
            //calculate where the top and bottom boundary of this room needs to be drawn
            let topBoundaryY = room.topLeft[1];
            let bottomBoundaryY = room.bottomRight[1];
            for (let boundaryX = room.topLeft[0]; boundaryX <= room.bottomRight[0]; boundaryX++) {
                this.upperBoundaries.push([boundaryX, topBoundaryY]);
                this.lowerBoundaries.push([boundaryX, bottomBoundaryY]);
            }
        });
    }
    toggleCellColor(cellX, cellY) {
        const prev = this.userSolution[cellY][cellX];
        console.log(prev);
        this.userSolution[cellY][cellX] = prev === null ? false : prev === false ? true : null;
    }
    cellHasRightBoundary(cellX, cellY) {
        return this.rightBoundaries.some(boundary => (boundary[0] === cellX) && (boundary[1] === cellY));
    }
    cellHasLowerBoundary(cellX, cellY) {
        return this.lowerBoundaries.some(boundary => (boundary[0] === cellX) && (boundary[1] === cellY));
    }
    cellHasLeftBoundary(cellX, cellY) {
        return this.leftBoundaries.some(boundary => (boundary[0] === cellX) && (boundary[1] === cellY));
    }
    cellHasUpperBoundary(cellX, cellY) {
        return this.upperBoundaries.some(boundary => (boundary[0] === cellX) && (boundary[1] === cellY));
    }
    clueInCell(cellX, cellY) {
        let clue;
        this.roomBoundaries.forEach(room => {
            if ((room.topLeft[0] === cellX) && (room.topLeft[1] === cellY)) {
                clue = room.clue;
            }
        });
        return clue;
    }
};
HeyawakeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-heyawake',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./heyawake.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/heyawake/heyawake.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./heyawake.component.scss */ "./src/app/heyawake/heyawake.component.scss")).default]
    })
], HeyawakeComponent);

class Room {
    constructor(topLeft, bottomRight, clue) {
        this.topLeft = topLeft;
        this.bottomRight = bottomRight;
        this.clue = clue ? clue : null;
    }
}


/***/ }),

/***/ "./src/app/hitori-rules/hitori-rules.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/hitori-rules/hitori-rules.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("li {\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGl0b3JpLXJ1bGVzL0M6XFxVc2Vyc1xcY2xiaXNcXERvY3VtZW50c1xcSG9tZXdvcmtcXENhcHN0b25lXFxwdXp6bGUtYXBwL3NyY1xcYXBwXFxoaXRvcmktcnVsZXNcXGhpdG9yaS1ydWxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGl0b3JpLXJ1bGVzL2hpdG9yaS1ydWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9oaXRvcmktcnVsZXMvaGl0b3JpLXJ1bGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGkge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn0iLCJsaSB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/hitori-rules/hitori-rules.component.ts":
/*!********************************************************!*\
  !*** ./src/app/hitori-rules/hitori-rules.component.ts ***!
  \********************************************************/
/*! exports provided: HitoriRulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HitoriRulesComponent", function() { return HitoriRulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HitoriRulesComponent = class HitoriRulesComponent {
    constructor() { }
    ngOnInit() {
    }
};
HitoriRulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hitori-rules',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hitori-rules.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hitori-rules/hitori-rules.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hitori-rules.component.scss */ "./src/app/hitori-rules/hitori-rules.component.scss")).default]
    })
], HitoriRulesComponent);



/***/ }),

/***/ "./src/app/hitori/hitori.component.scss":
/*!**********************************************!*\
  !*** ./src/app/hitori/hitori.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".puzzle-cell {\n  width: 50px;\n  height: 50px;\n  border: 2px solid black;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.puzzle-cell div {\n  font-size: 40px;\n}\n.blackened-out {\n  background: black;\n}\n.circled {\n  background: url('500px-Circle_-_black_simple.svg.png');\n  background-size: 47px;\n}\n.puzzle {\n  border: 2px solid black;\n}\n.correct {\n  background-color: greenyellow;\n  padding: 20px;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGl0b3JpL0M6XFxVc2Vyc1xcY2xiaXNcXERvY3VtZW50c1xcSG9tZXdvcmtcXENhcHN0b25lXFxwdXp6bGUtYXBwL3NyY1xcYXBwXFxoaXRvcmlcXGhpdG9yaS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaGl0b3JpL2hpdG9yaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBTFk7RUFNWix5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQ0pKO0FETUk7RUFDSSxlQUFBO0FDSlI7QURRQTtFQUNJLGlCQUFBO0FDTEo7QURRQTtFQUNJLHNEQUFBO0VBQ0EscUJBQUE7QUNMSjtBRFFBO0VBQ0ksdUJBdkJZO0FDa0JoQjtBRFFBO0VBQ0ksNkJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvaGl0b3JpL2hpdG9yaS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRpbmZvLWJsdWU6IHJnYigzOCwgOTcsIDk3KTtcclxuJHRoZW1lLWxpZ2h0LWdyYXk6IHJnYmEoMCwwLDAsLjEyNSk7XHJcbiR0aGVtZS1ib3JkZXI6IHRoaW4gc29saWQgJHRoZW1lLWxpZ2h0LWdyYXk7XHJcbiRwdXp6bGUtYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcblxyXG4ucHV6emxlLWNlbGwge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6ICRwdXp6bGUtYm9yZGVyO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ibGFja2VuZWQtb3V0IHtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG4uY2lyY2xlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vNTAwcHgtQ2lyY2xlXy1fYmxhY2tfc2ltcGxlLnN2Zy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNDdweDtcclxufVxyXG5cclxuLnB1enpsZSB7XHJcbiAgICBib3JkZXI6ICRwdXp6bGUtYm9yZGVyOyAvL21ha2VzIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBib3JkZXIgY29uc2lzdGVudCBmb3IgdGhlIG91dGVyIGJveGVzXHJcbn1cclxuXHJcbi5jb3JyZWN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufSIsIi5wdXp6bGUtY2VsbCB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5wdXp6bGUtY2VsbCBkaXYge1xuICBmb250LXNpemU6IDQwcHg7XG59XG5cbi5ibGFja2VuZWQtb3V0IHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5jaXJjbGVkIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi81MDBweC1DaXJjbGVfLV9ibGFja19zaW1wbGUuc3ZnLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0N3B4O1xufVxuXG4ucHV6emxlIHtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG59XG5cbi5jb3JyZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/hitori/hitori.component.ts":
/*!********************************************!*\
  !*** ./src/app/hitori/hitori.component.ts ***!
  \********************************************/
/*! exports provided: HitoriComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HitoriComponent", function() { return HitoriComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _puzzle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../puzzle.service */ "./src/app/puzzle.service.ts");



let HitoriComponent = class HitoriComponent {
    constructor(puzzleService) {
        this.puzzleService = puzzleService;
        this.userSolution = [];
        this.correct = false;
    }
    ngOnInit() {
        this.puzzleService.getPuzzle("Hitori", this.id).subscribe(puzzle => {
            this.puzzleData = JSON.parse(puzzle.data);
            this.correctSolution = JSON.parse(puzzle.solution);
            //initialize empty solution
            const size = this.puzzleData.length;
            for (let i = 0; i < size; i++) {
                this.userSolution.push(new Array());
                for (let j = 0; j < size; j++) {
                    this.userSolution[i][j] = null;
                }
            }
        });
    }
    /**
     * toggles the color of squares when the user clicks on them (empty, colored, circled)
     * @param cellX
     * @param cellY
     */
    toggleCellColor(cellX, cellY) {
        const prev = this.userSolution[cellY][cellX];
        this.userSolution[cellY][cellX] = prev === null ? false : prev === false ? true : null;
        this.check();
    }
    /**
     * checks if the user solution is correct
     */
    check() {
        if (JSON.stringify(this.userSolution) === JSON.stringify(this.correctSolution))
            this.correct = true;
        console.log(this.correct);
        console.log(this.correctSolution);
        console.log(this.userSolution);
    }
};
HitoriComponent.ctorParameters = () => [
    { type: _puzzle_service__WEBPACK_IMPORTED_MODULE_2__["PuzzleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], HitoriComponent.prototype, "id", void 0);
HitoriComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-hitori',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hitori.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hitori/hitori.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hitori.component.scss */ "./src/app/hitori/hitori.component.scss")).default]
    })
], HitoriComponent);



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  font-size: 60;\n  text-align: center;\n}\n\na {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.body {\n  padding: 30px;\n}\n\n.tab-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.tab-content h3 {\n  padding-bottom: 10px;\n}\n\n.tab-content .left {\n  width: 60%;\n  border-right: thin solid rgba(0, 0, 0, 0.125);\n  padding-right: 20px;\n}\n\n.tab-content .right {\n  padding-left: 10px;\n  width: 40%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL0M6XFxVc2Vyc1xcY2xiaXNcXERvY3VtZW50c1xcSG9tZXdvcmtcXENhcHN0b25lXFxwdXp6bGUtYXBwL3NyY1xcYXBwXFxsYW5kaW5nLXBhZ2VcXGxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0kseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNGSjs7QURLQTtFQUNJLGFBQUE7QUNGSjs7QURLQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtBQ0ZKOztBRElJO0VBQ0ksb0JBQUE7QUNGUjs7QURLSTtFQUNJLFVBQUE7RUFDQSw2Q0F6Qk87RUEwQlAsbUJBQUE7QUNIUjs7QURLSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0aGVtZS1saWdodC1ncmF5OiByZ2JhKDAsMCwwLC4xMjUpO1xyXG4kdGhlbWUtYm9yZGVyOiB0aGluIHNvbGlkICR0aGVtZS1saWdodC1ncmF5O1xyXG5cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiA2MDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYSB7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuLmJvZHkge1xyXG4gICAgcGFkZGluZzogMzBweDsgICAgXHJcbn1cclxuXHJcbi50YWItY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxlZnQge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAkdGhlbWUtYm9yZGVyO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAucmlnaHQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG59IiwiaDEge1xuICBmb250LXNpemU6IDYwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmEge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmJvZHkge1xuICBwYWRkaW5nOiAzMHB4O1xufVxuXG4udGFiLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLnRhYi1jb250ZW50IGgzIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4udGFiLWNvbnRlbnQgLmxlZnQge1xuICB3aWR0aDogNjAlO1xuICBib3JkZXItcmlnaHQ6IHRoaW4gc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4udGFiLWNvbnRlbnQgLnJpZ2h0IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB3aWR0aDogNDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingPageComponent = class LandingPageComponent {
    constructor() { }
    ngOnInit() { }
};
LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing-page.component.scss */ "./src/app/landing-page/landing-page.component.scss")).default]
    })
], LandingPageComponent);



/***/ }),

/***/ "./src/app/puzzle-size-selector/puzzle-size-selector.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/puzzle-size-selector/puzzle-size-selector.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHV6emxlLXNpemUtc2VsZWN0b3IvQzpcXFVzZXJzXFxjbGJpc1xcRG9jdW1lbnRzXFxIb21ld29ya1xcQ2Fwc3RvbmVcXHB1enpsZS1hcHAvc3JjXFxhcHBcXHB1enpsZS1zaXplLXNlbGVjdG9yXFxwdXp6bGUtc2l6ZS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHV6emxlLXNpemUtc2VsZWN0b3IvcHV6emxlLXNpemUtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHV6emxlLXNpemUtc2VsZWN0b3IvcHV6emxlLXNpemUtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufSIsImgyIHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/puzzle-size-selector/puzzle-size-selector.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/puzzle-size-selector/puzzle-size-selector.component.ts ***!
  \************************************************************************/
/*! exports provided: PuzzleSizeSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleSizeSelectorComponent", function() { return PuzzleSizeSelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PuzzleSizeSelectorComponent = class PuzzleSizeSelectorComponent {
    constructor() {
        this.puzzleSizes = puzzleSizes;
    }
    ngOnInit() { this.selectedSize = "Select Size"; }
    ngOnChanges(changes) {
        for (let propName in changes) {
            if (propName === 'puzzleType') {
                console.log("size changed");
                this.selectedSize = "Select Size";
            }
        }
    }
    selectSize(size) {
        this.selectedSize = size;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PuzzleSizeSelectorComponent.prototype, "puzzleType", void 0);
PuzzleSizeSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-puzzle-size-selector',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./puzzle-size-selector.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/puzzle-size-selector/puzzle-size-selector.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./puzzle-size-selector.component.scss */ "./src/app/puzzle-size-selector/puzzle-size-selector.component.scss")).default]
    })
], PuzzleSizeSelectorComponent);

const puzzleSizes = {
    "Hitori": ["5x5", "6x6", "7x7", "8x8", "9x9"],
    "Heyawake": ["9x9", "10x10", "11x11", "15x15"]
};


/***/ }),

/***/ "./src/app/puzzle-view/id-pipe.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/puzzle-view/id-pipe.pipe.ts ***!
  \*********************************************/
/*! exports provided: IdPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdPipePipe", function() { return IdPipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IdPipePipe = class IdPipePipe {
    transform(value) {
        return value.toString().replace(',', '');
    }
};
IdPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'idPipe'
    })
], IdPipePipe);



/***/ }),

/***/ "./src/app/puzzle-view/puzzle-view.component.scss":
/*!********************************************************!*\
  !*** ./src/app/puzzle-view/puzzle-view.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1, h3 {\n  text-align: center;\n}\n\n.user-ratings {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.user-ratings ngb-rating {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.info-box {\n  padding-top: 15px;\n}\n\n.bordered {\n  margin: 20px 60px 20px 60px;\n  border: thin solid rgba(0, 0, 0, 0.125);\n  border-radius: 10px;\n}\n\n.puzzle-frame {\n  height: 600px;\n}\n\n.fa-question-circle {\n  color: #266161;\n}\n\napp-hitori {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHV6emxlLXZpZXcvQzpcXFVzZXJzXFxjbGJpc1xcRG9jdW1lbnRzXFxIb21ld29ya1xcQ2Fwc3RvbmVcXHB1enpsZS1hcHAvc3JjXFxhcHBcXHB1enpsZS12aWV3XFxwdXp6bGUtdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHV6emxlLXZpZXcvcHV6emxlLXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxrQkFBQTtBQ0hKOztBRE1BO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0hKOztBREtJO0VBQ0ksMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDSFI7O0FET0E7RUFDSSxpQkFBQTtBQ0pKOztBRE9BO0VBQ0ksMkJBQUE7RUFDQSx1Q0F0Qlc7RUF1QlgsbUJBQUE7QUNKSjs7QURPQTtFQUNJLGFBQUE7QUNKSjs7QURPQTtFQUNJLGNBakNRO0FDNkJaOztBRE9BO0VBQ0ksV0FBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvcHV6emxlLXZpZXcvcHV6emxlLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkaW5mby1ibHVlOiByZ2IoMzgsIDk3LCA5Nyk7XHJcbiR0aGVtZS1saWdodC1ncmF5OiByZ2JhKDAsMCwwLC4xMjUpO1xyXG4kdGhlbWUtYm9yZGVyOiB0aGluIHNvbGlkICR0aGVtZS1saWdodC1ncmF5O1xyXG5cclxuaDEsIGgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnVzZXItcmF0aW5ncyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIG5nYi1yYXRpbmcge1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuLmluZm8tYm94IHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uYm9yZGVyZWQge1xyXG4gICAgbWFyZ2luOiAyMHB4IDYwcHggMjBweCA2MHB4O1xyXG4gICAgYm9yZGVyOiAkdGhlbWUtYm9yZGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnB1enpsZS1mcmFtZSB7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG59XHJcblxyXG4uZmEtcXVlc3Rpb24tY2lyY2xlIHtcclxuICAgIGNvbG9yOiAkaW5mby1ibHVlO1xyXG59XHJcblxyXG5hcHAtaGl0b3JpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59IiwiaDEsIGgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udXNlci1yYXRpbmdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4udXNlci1yYXRpbmdzIG5nYi1yYXRpbmcge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5pbmZvLWJveCB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG4uYm9yZGVyZWQge1xuICBtYXJnaW46IDIwcHggNjBweCAyMHB4IDYwcHg7XG4gIGJvcmRlcjogdGhpbiBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnB1enpsZS1mcmFtZSB7XG4gIGhlaWdodDogNjAwcHg7XG59XG5cbi5mYS1xdWVzdGlvbi1jaXJjbGUge1xuICBjb2xvcjogIzI2NjE2MTtcbn1cblxuYXBwLWhpdG9yaSB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/puzzle-view/puzzle-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/puzzle-view/puzzle-view.component.ts ***!
  \******************************************************/
/*! exports provided: PuzzleViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleViewComponent", function() { return PuzzleViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _puzzle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../puzzle.service */ "./src/app/puzzle.service.ts");




let PuzzleViewComponent = class PuzzleViewComponent {
    constructor(route, puzzleService) {
        this.route = route;
        this.puzzleService = puzzleService;
    }
    ngOnInit() {
        //initialize user rating to 0
        this.userRating = 0;
        this.userDifficultyRating = 0;
        //get the route params (from url)
        this.routeSubscription = this.route.params.subscribe(params => {
            this.puzzleType = params['puzzle-type'];
            this.id = params['id'];
        });
    }
    ngOnDestroy() {
        //clean up clean up
        this.routeSubscription.unsubscribe();
    }
    ratePuzzle() {
        console.log("yay");
        this.puzzleService.putRatings(this.puzzleType, this.id, this.userRating, this.userDifficultyRating).subscribe();
    }
};
PuzzleViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _puzzle_service__WEBPACK_IMPORTED_MODULE_3__["PuzzleService"] }
];
PuzzleViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-puzzle-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./puzzle-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/puzzle-view/puzzle-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./puzzle-view.component.scss */ "./src/app/puzzle-view/puzzle-view.component.scss")).default]
    })
], PuzzleViewComponent);



/***/ }),

/***/ "./src/app/puzzle.service.ts":
/*!***********************************!*\
  !*** ./src/app/puzzle.service.ts ***!
  \***********************************/
/*! exports provided: PuzzleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleService", function() { return PuzzleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let PuzzleService = class PuzzleService {
    constructor(http) {
        this.http = http;
        this.PUZZLE_URL = "https://wbeo70qxe2.execute-api.us-east-1.amazonaws.com/Prod/";
    }
    getPuzzle(puzzleType, id) {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().append('Access-Control-Allow-Origin', '*').append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS').append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
        return this.http.get(this.PUZZLE_URL + puzzleType + "/" + id, { "headers": this.headers });
    }
    putRatings(puzzleType, id, rating, difficultyRating) {
        return this.http.post(this.PUZZLE_URL + puzzleType + "/" + id, { "rating": rating, "difficultyRating": difficultyRating });
    }
};
PuzzleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PuzzleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PuzzleService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\clbis\Documents\Homework\Capstone\puzzle-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map