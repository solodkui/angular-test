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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _card_list_card_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-list/card-list.component */ "./src/app/card-list/card-list.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    { path: '', redirectTo: '/card-list/1', pathMatch: 'full' },
    { path: '*', redirectTo: '/card-list/1', pathMatch: 'full' },
    { path: 'card-list/:page', component: _card_list_card_list_component__WEBPACK_IMPORTED_MODULE_0__["CardListComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "app-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".app-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n  padding-top: 30px;\n  background: linear-gradient(270deg, #8FB1D3 0%, #8F96D3 100%), #8FB1D3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzRUFBQTtBQURGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuXHJcbi5hcHAtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICRjLWJsdWUtb25lIDAlLCAkYy1ibHVlLXR3byAxMDAlKSxcclxuICAgICRjLWJsdWUtb25lO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _svg_svg_heart_svg_heart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./svg/svg-heart/svg-heart.component */ "./src/app/svg/svg-heart/svg-heart.component.ts");
/* harmony import */ var _card_list_card_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card-list/card-list.component */ "./src/app/card-list/card-list.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _svg_svg_message_svg_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./svg/svg-message/svg-message.component */ "./src/app/svg/svg-message/svg-message.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _svg_svg_heart_svg_heart_component__WEBPACK_IMPORTED_MODULE_6__["SvgHeartComponent"],
        _card_list_card_list_component__WEBPACK_IMPORTED_MODULE_7__["CardListComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
        _svg_svg_message_svg_message_component__WEBPACK_IMPORTED_MODULE_9__["SvgMessageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _svg_svg_heart_svg_heart_component__WEBPACK_IMPORTED_MODULE_6__["SvgHeartComponent"],
                    _card_list_card_list_component__WEBPACK_IMPORTED_MODULE_7__["CardListComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
                    _svg_svg_message_svg_message_component__WEBPACK_IMPORTED_MODULE_9__["SvgMessageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/card-list/card-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/card-list/card-list.component.ts ***!
  \**************************************************/
/*! exports provided: CardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardListComponent", function() { return CardListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../card/card.component */ "./src/app/card/card.component.ts");






function CardListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("info", user_r2);
} }
function CardListComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardListComponent_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.goTo(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](item_r3 == ctx_r1.page ? "card-list__navigation_item--active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3, " ");
} }
class CardListComponent {
    constructor(route, router, usersService) {
        this.route = route;
        this.router = router;
        this.usersService = usersService;
        this.users = [];
        this.navigationList = [];
    }
    ngOnInit() {
        // Get Page
        this.page = this.route.snapshot.params.page;
        // Get Users
        this.getUsers();
    }
    getUsers() {
        this.usersService.getUsers(this.page).subscribe((response) => {
            this.users = response.data;
            this.totalPages = response.total_pages;
            this.generateNavigation();
        });
    }
    generateNavigation() {
        this.navigationList = [];
        for (let i = 1; i <= this.totalPages; i++) {
            this.navigationList.push(i);
        }
    }
    goTo(page) {
        this.router.navigate(['/card-list/' + page]);
        this.page = page;
        this.getUsers();
    }
    editId(id) {
        let userid = id, newId = 'card-item-' + userid;
        return newId;
    }
}
CardListComponent.ɵfac = function CardListComponent_Factory(t) { return new (t || CardListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"])); };
CardListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardListComponent, selectors: [["app-card-list"]], decls: 5, vars: 2, consts: [[1, "card-list"], [1, "card-list__wrapper", "wrapper"], ["class", "card-list__item", 4, "ngFor", "ngForOf"], [1, "card-list__navigation", "wrapper"], ["class", "card-list__navigation_item", 3, "click", 4, "ngFor", "ngForOf"], [1, "card-list__item"], [1, "card-list__item_wrapper"], [3, "info"], [1, "card-list__navigation_item", 3, "click"]], template: function CardListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardListComponent_div_2_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardListComponent_a_4_Template, 3, 3, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navigationList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _card_card_component__WEBPACK_IMPORTED_MODULE_4__["CardComponent"]], styles: [".card-list[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 34px;\n  z-index: 9;\n}\n.card-list__wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 30px;\n}\n@media (max-width: 1024px) {\n  .card-list__wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .card-list__wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}\n.card-list__navigation[_ngcontent-%COMP%] {\n  padding: 30px 0;\n  display: flex;\n  justify-content: center;\n}\n.card-list__navigation_item[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  background: #fff;\n  border-radius: 4px;\n  margin-right: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 1.25rem;\n  line-height: 1.4375rem;\n  cursor: pointer;\n  transition: 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.card-list__navigation_item[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.card-list__navigation_item[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.card-list__navigation_item--active[_ngcontent-%COMP%] {\n  color: #7A8FA5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC1saXN0L2NhcmQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvbWVkaWEuc2NzcyIsInNyYy9zdHlsZXMvbWl4aW5zLnNjc3MiLCJzcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFIRjtBQUtFO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsY0FBQTtBQUhKO0FDeUhBO0VEekhFO0lBTUkscUNBQUE7RUFGSjtBQUNGO0FDb0hBO0VEekhFO0lBVUkscUNBQUE7RUFESjtBQUNGO0FBSUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBRko7QUFJSTtFRVZGLFdBQUE7RUFDQSxZQUFBO0VGV0ksZ0JHNUJJO0VINkJKLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDR3hCSztFSHlCTCxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSw4Q0d4Qks7QUh1Qlg7QUFHTTtFQUNFLHFCQUFBO0FBRFI7QUFJTTtFQUNFLGVBQUE7QUFGUjtBQUtNO0VBQ0UsY0c3Q007QUgwQ2QiLCJmaWxlIjoic3JjL2FwcC9jYXJkLWxpc3QvY2FyZC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9taXhpbnNcIjtcclxuQGltcG9ydCBcIi4uLy4uL3N0eWxlcy9tZWRpYVwiO1xyXG5cclxuLmNhcmQtbGlzdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDM0cHg7XHJcbiAgei1pbmRleDogOTtcclxuXHJcbiAgJl9fd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGdyaWQtZ2FwOiAzMHB4O1xyXG5cclxuICAgIEBpbmNsdWRlIG1lZGlhKCc8PWRlc2t0b3AnKSB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgbWVkaWEoJzw9dGFibGV0Jykge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fbmF2aWdhdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgJl9pdGVtIHtcclxuICAgICAgQGluY2x1ZGUgc2l6ZSg1MCk7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRjLXdoaXRlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAkZi1yb2JvdG87XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiByZW0oMjApO1xyXG4gICAgICBsaW5lLWhlaWdodDogcmVtKDIzKTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB0cmFuc2l0aW9uOiAkdC1ub3JtYWw7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLS1hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAkYy1ibHVlLWZvdXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiXHJcbi8vICAgICAgIF8gICAgICAgICAgICBfICAgICAgICAgICBfICAgICAgICAgICAgICAgICAgICAgICAgICAgXyBfICAgICAgIFxyXG4vLyAgICAgIChfKSAgICAgICAgICB8IHwgICAgICAgICB8IHwgICAgICAgICAgICAgICAgICAgICAgICAgfCAoXykgICAgICBcclxuLy8gICAgICAgXyBfIF9fICAgX19ffCB8XyAgIF8gIF9ffCB8IF9fXyAgIF8gX18gX19fICAgX19fICBfX3wgfF8gIF9fIF8gXHJcbi8vICAgICAgfCB8ICdfIFxcIC8gX198IHwgfCB8IHwvIF9gIHwvIF8gXFwgfCAnXyBgIF8gXFwgLyBfIFxcLyBfYCB8IHwvIF9gIHxcclxuLy8gICAgICB8IHwgfCB8IHwgKF9ffCB8IHxffCB8IChffCB8ICBfXy8gfCB8IHwgfCB8IHwgIF9fLyAoX3wgfCB8IChffCB8XHJcbi8vICAgICAgfF98X3wgfF98XFxfX198X3xcXF9fLF98XFxfXyxffFxcX19ffCB8X3wgfF98IHxffFxcX19ffFxcX18sX3xffFxcX18sX3xcclxuLy9cclxuLy8gICAgICAgICAgU2ltcGxlLCBlbGVnYW50IGFuZCBtYWludGFpbmFibGUgbWVkaWEgcXVlcmllcyBpbiBTYXNzXHJcbi8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgIGh0dHA6Ly9pbmNsdWRlLW1lZGlhLmNvbVxyXG4vLyAgICAgIFxyXG4vLyAgICAgICAgICAgQXV0aG9yOiBFZHVhcmRvIEJvdWNhcyA8bWFpbEBlZHVhcmRvYm91Y2FzLmNvbT5cclxuLy9cclxuLy8vXHJcbi8vLyBDcmVhdGVzIGEgbGlzdCBvZiBnbG9iYWwgYnJlYWtwb2ludHNcclxuLy8vXHJcbi8vLyBAYXV0aG9yIEVkdWFyZG8gQm91Y2FzXHJcbi8vL1xyXG4vLy8gQGV4YW1wbGUgc2NzcyAtIENyZWF0ZXMgYSBzaW5nbGUgYnJlYWtwb2ludCB3aXRoIHRoZSBsYWJlbCBgcGhvbmVgXHJcbi8vLyAgJGJyZWFrcG9pbnRzOiAoJ3Bob25lJzogMzIwcHgpO1xyXG4vLy9cclxuJGJyZWFrcG9pbnRzOiAoXHJcbiAgJ2lwaG9uZSc6IDM4MHB4LFxyXG4gICdwaG9uZSc6IDQ4MHB4LFxyXG4gICd0YWJsZXQnOiA3NjhweCwgXHJcbiAgJ2Rlc2t0b3AnOiAxMDI0cHgsXHJcbiAgJ3NjcmVlbic6IDEyMDBweCxcclxuICAnbGFyZ2UnOiAxNjAwcHhcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8vL1xyXG4vLy8gQ3JlYXRlcyBhIGxpc3Qgb2Ygc3RhdGljIGV4cHJlc3Npb25zIG9yIG1lZGlhIHR5cGVzXHJcbi8vL1xyXG4vLy8gQGF1dGhvciBFZHVhcmRvIEJvdWNhc1xyXG4vLy9cclxuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc2luZ2xlIG1lZGlhIHR5cGUgKHNjcmVlbilcclxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6ICgnc2NyZWVuJzogJ3NjcmVlbicpO1xyXG4vLy9cclxuLy8vIEBleGFtcGxlIHNjc3MgLSBDcmVhdGVzIGEgc3RhdGljIGV4cHJlc3Npb24gd2l0aCBsb2dpY2FsIGRpc2p1bmN0aW9uIChPUiBvcGVyYXRvcilcclxuLy8vICAkbWVkaWEtZXhwcmVzc2lvbnM6IChcclxuLy8vICAgICAncmV0aW5hMngnOiAoXHJcbi8vLyAgICAgICAgICcoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKScsIFxyXG4vLy8gICAgICAgICAnKG1pbi1yZXNvbHV0aW9uOiAxOTJkcGkpJ1xyXG4vLy8gICAgIClcclxuLy8vICk7XHJcbi8vL1xyXG4kbWVkaWEtZXhwcmVzc2lvbnM6IChcclxuICAnc2NyZWVuJzogJ3NjcmVlbicsIFxyXG4gICdwcmludCc6ICdwcmludCcsIFxyXG4gICdoYW5kaGVsZCc6ICdoYW5kaGVsZCcsXHJcbiAgJ3JldGluYTJ4JzogKFxyXG4gICAgICAnKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMiknLCBcclxuICAgICAgJyhtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSdcclxuICApLCBcclxuICAncmV0aW5hM3gnOiAoXHJcbiAgICAgICcoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKScsIFxyXG4gICAgICAnKG1pbi1yZXNvbHV0aW9uOiAzNTBkcGkpJ1xyXG4gIClcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8vL1xyXG4vLy8gRGVmaW5lcyBhIG51bWJlciB0byBiZSBhZGRlZCBvciBzdWJ0cmFjdGVkIGZyb20gZWFjaCB1bml0IHdoZW4gZGVjbGFyaW5nIGJyZWFrcG9pbnRzIHdpdGggZXhjbHVzaXZlIGludGVydmFsc1xyXG4vLy9cclxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcclxuLy8vXHJcbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIHBpeGVscyBpcyBkZWZpbmVkIGFzIGAxYCBieSBkZWZhdWx0XHJcbi8vLyAgQGluY2x1ZGUgbWVkaWEoXCI+MTI4cHhcIikge31cclxuLy8vXHJcbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xyXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAxMjlweCkge31cclxuLy8vXHJcbi8vLyBAZXhhbXBsZSBzY3NzIC0gSW50ZXJ2YWwgZm9yIGVtcyBpcyBkZWZpbmVkIGFzIGAwLjAxYCBieSBkZWZhdWx0XHJcbi8vLyAgQGluY2x1ZGUgbWVkaWEoXCI+MjBlbVwiKSB7fVxyXG4vLy9cclxuLy8vICAvKiBHZW5lcmF0ZXM6ICovXHJcbi8vLyAgQG1lZGlhIChtaW4td2lkdGg6IDIwLjAxZW0pIHt9XHJcbi8vL1xyXG4vLy8gQGV4YW1wbGUgc2NzcyAtIEludGVydmFsIGZvciByZW1zIGlzIGRlZmluZWQgYXMgYDAuMWAgYnkgZGVmYXVsdCwgdG8gYmUgdXNlZCB3aXRoIGBmb250LXNpemU6IDYyLjUlO2BcclxuLy8vICBAaW5jbHVkZSBtZWRpYShcIj4yLjByZW1cIikge31cclxuLy8vXHJcbi8vLyAgLyogR2VuZXJhdGVzOiAqL1xyXG4vLy8gIEBtZWRpYSAobWluLXdpZHRoOiAyLjFyZW0pIHt9XHJcbi8vL1xyXG4kdW5pdC1pbnRlcnZhbHM6IChcclxuICAncHgnOiAxLCBcclxuICAnZW0nOiAwLjAxLCBcclxuICAncmVtJzogMC4xXHJcbikgIWRlZmF1bHQ7XHJcbi8vL1xyXG4vLy8gR2VuZXJhdGVzIGEgbWVkaWEgcXVlcnkgYmFzZWQgb24gYSBsaXN0IG9mIGNvbmRpdGlvbnNcclxuLy8vXHJcbi8vLyBAYXV0aG9yIEVkdWFyZG8gQm91Y2FzXHJcbi8vL1xyXG4vLy8gQHBhcmFtIHtMaXN0fSAgICRjb25kaXRpb25zICAtIE1lZGlhIHF1ZXJ5IGNvbmRpdGlvbnNcclxuLy8vXHJcbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBhIHNpbmdsZSBzZXQgYnJlYWtwb2ludFxyXG4vLy8gIEBpbmNsdWRlIG1lZGlhKFwiPnBob25lXCIpIHsgfVxyXG4vLy9cclxuLy8vIEBleGFtcGxlIHNjc3MgLSBXaXRoIHR3byBzZXQgYnJlYWtwb2ludHNcclxuLy8vICBAaW5jbHVkZSBtZWRpYShcIj5waG9uZVwiLCBcIjw9dGFibGV0XCIpIHsgfSBcclxuLy8vXHJcbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBjdXN0b20gdmFsdWVzXHJcbi8vLyAgQGluY2x1ZGUgbWVkaWEoXCI+PTM1OHB4XCIsIFwiPDg1MHB4XCIpIHsgfSBcclxuLy8vXHJcbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBzZXQgYnJlYWtwb2ludHMgd2l0aCBjdXN0b20gdmFsdWVzXHJcbi8vLyAgQGluY2x1ZGUgbWVkaWEoXCI+ZGVza3RvcFwiLCBcIjw9MTM1MHB4XCIpIHsgfSBcclxuLy8vXHJcbi8vLyBAZXhhbXBsZSBzY3NzIC0gV2l0aCBhIHN0YXRpYyBleHByZXNzaW9uXHJcbi8vLyAgQGluY2x1ZGUgbWVkaWEoXCJyZXRpbmEyeFwiKSB7IH0gXHJcbi8vL1xyXG4vLy8gQGV4YW1wbGUgc2NzcyAtIE1peGluZyBldmVyeXRoaW5nXHJcbi8vLyAgQGluY2x1ZGUgbWVkaWEoXCI+PTM1MHB4XCIsIFwiPHRhYmxldFwiLCBcInJldGluYTN4XCIpIHsgfSBcclxuLy8vXHJcbkBtaXhpbiBtZWRpYSgkY29uZGl0aW9ucy4uLikge1xyXG5AZm9yICRpIGZyb20gMSB0aHJvdWdoIGxlbmd0aCgkY29uZGl0aW9ucykge1xyXG4gICRjb25kaXRpb25zOiBzZXQtbnRoKCRjb25kaXRpb25zLCAkaSwgcGFyc2UtZXhwcmVzc2lvbihudGgoJGNvbmRpdGlvbnMsICRpKSkpO1xyXG59XHJcblxyXG4kYnJhbmNoZXM6IGdldC1xdWVyeS1icmFuY2hlcygkY29uZGl0aW9ucyk7XHJcbiRxdWVyeTogJyc7XHJcblxyXG5AZWFjaCAkYnJhbmNoIGluICRicmFuY2hlcyB7XHJcbiAgQGlmIChzdHItbGVuZ3RoKCRxdWVyeSkgIT0gMCkge1xyXG4gICAgJHF1ZXJ5OiAkcXVlcnkgKyAnLCAnO1xyXG4gIH1cclxuXHJcbiAgJHF1ZXJ5OiAkcXVlcnkgKyAkYnJhbmNoO1xyXG59XHJcblxyXG5AbWVkaWEgI3skcXVlcnl9IHtcclxuICBAY29udGVudDtcclxufVxyXG59XHJcblxyXG4vLy9cclxuLy8vIFJlYWRzIGEgbGlzdCBvZiBtZWRpYSBxdWVyeSBleHByZXNzaW9ucyBhbmQgc2VwYXJhdGVzIGxvZ2ljYWwgZGlzanVuY3Rpb25zIGludG8gZGlmZmVyZW50IGJyYW5jaGVzXHJcbi8vL1xyXG4vLy8gQGF1dGhvciBFZHVhcmRvIEJvdWNhc1xyXG4vLy9cclxuLy8vIEBwYXJhbSB7TGlzdH0gICAkZXhwcmVzc2lvbnMgIC0gbGlzdCBvZiBleHByZXNzaW9uc1xyXG4vLy9cclxuLy8vIEB0aHJvd3MgYCRleHByZXNzaW9uYCBpcyBub3QgYSB2YWxpZCBleHByZXNzaW9uXHJcbi8vL1xyXG4vLy8gQHJldHVybiB7TGlzdCB8IE51bGx9XHJcbi8vL1xyXG5AZnVuY3Rpb24gZ2V0LXF1ZXJ5LWJyYW5jaGVzKCRleHByZXNzaW9ucykge1xyXG4kcmVzdWx0OiAnJztcclxuJGhhcy1ncm91cHM6IGZhbHNlO1xyXG5cclxuLy8gR2V0dGluZyBpbml0aWFsIHNuYXBzaG90IGFuZCBsb29raW5nIGZvciBncm91cHNcclxuQGVhY2ggJGV4cHJlc3Npb24gaW4gJGV4cHJlc3Npb25zIHtcclxuICBAaWYgKHN0ci1sZW5ndGgoJHJlc3VsdCkgIT0gMCkge1xyXG4gICAgJHJlc3VsdDogJHJlc3VsdCArICcgYW5kICc7XHJcbiAgfVxyXG5cclxuICBAaWYgKHR5cGUtb2YoJGV4cHJlc3Npb24pID09ICdzdHJpbmcnKSB7XHJcbiAgICAkcmVzdWx0OiAkcmVzdWx0ICsgJGV4cHJlc3Npb247XHJcbiAgfSBAZWxzZSBpZiAodHlwZS1vZigkZXhwcmVzc2lvbikgPT0gJ2xpc3QnKSB7XHJcbiAgICAkcmVzdWx0OiAkcmVzdWx0ICsgbnRoKCRleHByZXNzaW9uLCAxKTtcclxuICAgICRoYXMtZ3JvdXBzOiB0cnVlO1xyXG4gIH0gQGVsc2Uge1xyXG4gICAgQHdhcm4gJyN7JGV4cHJlc3Npb259IGlzIG5vdCBhIHZhbGlkIGV4cHJlc3Npb24uJztcclxuICB9XHJcbn1cclxuXHJcbi8vIElmIHdlIGhhdmUgZ3JvdXBzLCB3ZSBoYXZlIHRvIGNyZWF0ZSBhbGwgcG9zc2libGUgY29tYmluYXRpb25zXHJcbkBpZiAkaGFzLWdyb3VwcyB7XHJcbiAgQGVhY2ggJGV4cHJlc3Npb24gaW4gJGV4cHJlc3Npb25zIHtcclxuICAgIEBpZiAodHlwZS1vZigkZXhwcmVzc2lvbikgPT0gJ2xpc3QnKSB7XHJcbiAgICAgICRmaXJzdDogbnRoKCRleHByZXNzaW9uLCAxKTtcclxuXHJcbiAgICAgIEBlYWNoICRtZW1iZXIgaW4gJGV4cHJlc3Npb24ge1xyXG4gICAgICAgIEBpZiAoJG1lbWJlciAhPSAkZmlyc3QpIHtcclxuICAgICAgICAgIEBlYWNoICRwYXJ0aWFsIGluICRyZXN1bHQge1xyXG4gICAgICAgICAgICAkcmVzdWx0OiBqb2luKCRyZXN1bHQsIHN0ci1yZXBsYWNlLWZpcnN0KCRmaXJzdCwgJG1lbWJlciwgJHBhcnRpYWwpKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkByZXR1cm4gJHJlc3VsdDtcclxufVxyXG5cclxuLy8vXHJcbi8vLyBQYXJzZXMgYSBzdHJpbmcgdG8gZm9ybSBhIG1lZGlhIHF1ZXJ5IGV4cHJlc3Npb25cclxuLy8vXHJcbi8vLyBAYXV0aG9yIEVkdWFyZG8gQm91Y2FzXHJcbi8vL1xyXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICAgJGV4cHJlc3Npb24gIC0gZXhwcmVzc2lvbiAoaW4gc3RyaW5nKVxyXG4vLy9cclxuLy8vIEB0aHJvd3MgRXhwcmVzc2lvbiB3aXRoIHR5cGUgYHR5cGUtb2YoJGV4cHJlc3Npb24pYCBkZXRlY3RlZCwgc3RyaW5nIGV4cGVjdGVkXHJcbi8vLyBAdGhyb3dzIGAkZXhwcmVzc2lvbmAgaXMgbWlzc2luZyBhbiBvcGVyYXRvclxyXG4vLy8gQHRocm93cyBVbmtub3duIHVuaXQ6IGAkdW5pdGBcclxuLy8vXHJcbi8vLyBAcmV0dXJuIHtTdHJpbmcgfCBOdWxsfVxyXG4vLy9cclxuQGZ1bmN0aW9uIHBhcnNlLWV4cHJlc3Npb24oJGV4cHJlc3Npb24pIHtcclxuJG9wZXJhdG9yOiAnJztcclxuJHZhbHVlOiAnJztcclxuJGVsZW1lbnQ6ICcnO1xyXG4kcmVzdWx0OiAnJztcclxuJGlzLXdpZHRoOiB0cnVlO1xyXG5cclxuQGlmICh0eXBlLW9mKCRleHByZXNzaW9uKSAhPSAnc3RyaW5nJykge1xyXG4gIEB3YXJuICdFeHByZXNzaW9uIHdpdGggdHlwZSBgI3t0eXBlLW9mKCRleHByZXNzaW9uKX1gIGRldGVjdGVkLCBzdHJpbmcgZXhwZWN0ZWQuJztcclxufVxyXG5cclxuLy8gU2VwYXJhdGluZyB0aGUgb3BlcmF0b3IgZnJvbSB0aGUgcmVzdCBvZiB0aGUgZXhwcmVzc2lvblxyXG5AaWYgKHN0ci1zbGljZSgkZXhwcmVzc2lvbiwgMiwgMikgPT0gJz0nKSB7XHJcbiAgJG9wZXJhdG9yOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sIDEsIDIpO1xyXG4gICR2YWx1ZTogc3RyLXNsaWNlKCRleHByZXNzaW9uLCAzKTtcclxufSBAZWxzZSB7XHJcbiAgJG9wZXJhdG9yOiBzdHItc2xpY2UoJGV4cHJlc3Npb24sIDEsIDEpO1xyXG4gICR2YWx1ZTogc3RyLXNsaWNlKCRleHByZXNzaW9uLCAyKTtcclxufVxyXG5cclxuLy8gQ2hlY2tpbmcgd2hhdCB0eXBlIG9mIGV4cHJlc3Npb24gd2UncmUgZGVhbGluZyB3aXRoXHJcbkBpZiBtYXAtaGFzLWtleSgkYnJlYWtwb2ludHMsICR2YWx1ZSkge1xyXG4gICRyZXN1bHQ6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkdmFsdWUpO1xyXG59IEBlbHNlIGlmIG1hcC1oYXMta2V5KCRtZWRpYS1leHByZXNzaW9ucywgJGV4cHJlc3Npb24pIHtcclxuICAkcmVzdWx0OiBtYXAtZ2V0KCRtZWRpYS1leHByZXNzaW9ucywgJGV4cHJlc3Npb24pO1xyXG4gICRpcy13aWR0aDogZmFsc2U7XHJcbn0gQGVsc2Uge1xyXG4gICRyZXN1bHQ6IHRvLW51bWJlcigkdmFsdWUpO1xyXG59XHJcblxyXG5AaWYgKCRpcy13aWR0aCkge1xyXG4gICR1bml0OiB1bml0KCRyZXN1bHQpO1xyXG4gICRpbnRlcnZhbDogMDtcclxuICBcclxuICBAaWYgKG1hcC1oYXMta2V5KCR1bml0LWludGVydmFscywgJHVuaXQpKSB7XHJcbiAgICAkaW50ZXJ2YWw6IG1hcC1nZXQoJHVuaXQtaW50ZXJ2YWxzLCAkdW5pdCk7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAd2FybiAnVW5rbm93biB1bml0OiAjeyR1bml0fSc7XHJcbiAgfSBcclxuICAgICBcclxuICBAaWYgKCRvcGVyYXRvciA9PSAnPicpIHtcclxuICAgICRlbGVtZW50OiAnKG1pbi13aWR0aDogI3skcmVzdWx0ICsgJGludGVydmFsfSknO1xyXG4gIH0gQGVsc2UgaWYgKCRvcGVyYXRvciA9PSAnPCcpIHtcclxuICAgICRlbGVtZW50OiAnKG1heC13aWR0aDogI3skcmVzdWx0IC0gJGludGVydmFsfSknO1xyXG4gIH0gQGVsc2UgaWYgKCRvcGVyYXRvciA9PSAnPj0nKSB7XHJcbiAgICAkZWxlbWVudDogJyhtaW4td2lkdGg6ICN7JHJlc3VsdH0pJztcclxuICB9IEBlbHNlIGlmICgkb3BlcmF0b3IgPT0gJzw9Jykge1xyXG4gICAgJGVsZW1lbnQ6ICcobWF4LXdpZHRoOiAjeyRyZXN1bHR9KSc7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICBAd2FybiAnI3skZXhwcmVzc2lvbn0gaXMgbWlzc2luZyBhbiBvcGVyYXRvci4nO1xyXG4gIH1cclxufSBAZWxzZSB7XHJcbiAgJGVsZW1lbnQ6ICRyZXN1bHQ7XHJcbn1cclxuXHJcbkByZXR1cm4gJGVsZW1lbnQ7XHJcbn1cclxuXHJcbi8vL1xyXG4vLy8gUmVwbGFjZXMgdGhlIGZpcnN0IG9jY3VyZW5jZSBvZiB0aGUgc3RyaW5nIHdpdGggdGhlIHJlcGxhY2VtZW50IHN0cmluZ1xyXG4vLy9cclxuLy8vIEBhdXRob3IgRWR1YXJkbyBCb3VjYXNcclxuLy8vXHJcbi8vLyBAcGFyYW0ge1N0cmluZ30gICAkc2VhcmNoICAtIFRoZSB2YWx1ZSBiZWluZyBzZWFyY2hlZCBmb3JcclxuLy8vIEBwYXJhbSB7U3RyaW5nfSAgICRyZXBsYWNlICAtIFRoZSByZXBsYWNlbWVudCBzdHJpbmdcclxuLy8vIEBwYXJhbSB7U3RyaW5nfSAgICRzdWJqZWN0ICAtIFRoZSBzdHJpbmcgYmVpbmcgcmVwbGFjZWQgb25cclxuLy8vXHJcbi8vLyBAcmV0dXJuIHtTdHJpbmcgfCBOdWxsfVxyXG4vLy9cclxuQGZ1bmN0aW9uIHN0ci1yZXBsYWNlLWZpcnN0KCRzZWFyY2gsICRyZXBsYWNlLCAkc3ViamVjdCkge1xyXG4kc2VhcmNoLXN0YXJ0OiBzdHItaW5kZXgoJHN1YmplY3QsICRzZWFyY2gpO1xyXG5cclxuQGlmICRzZWFyY2gtc3RhcnQgPT0gbnVsbCB7XHJcbiAgQHJldHVybiAkc3ViamVjdDtcclxufVxyXG5cclxuJHJlc3VsdDogc3RyLXNsaWNlKCRzdWJqZWN0LCAwLCAkc2VhcmNoLXN0YXJ0IC0gMSk7XHJcbiRyZXN1bHQ6ICRyZXN1bHQgKyAkcmVwbGFjZTtcclxuJHJlc3VsdDogJHJlc3VsdCArIHN0ci1zbGljZSgkc3ViamVjdCwgJHNlYXJjaC1zdGFydCArIHN0ci1sZW5ndGgoJHNlYXJjaCkpO1xyXG5cclxuQHJldHVybiAkcmVzdWx0O1xyXG59XHJcblxyXG4vLy9cclxuLy8vIENhc3RzIGEgbnVtYmVyIHRvIGEgc3RyaW5nXHJcbi8vL1xyXG4vLy8gQGF1dGhvciBIdWdvIEdpcmF1ZGVsXHJcbi8vL1xyXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICAgJHN0cmluZyAgLSBOdW1iZXIgdG8gYmUgcGFyc2VkXHJcbi8vL1xyXG4vLy8gQHJldHVybiB7TGlzdCB8IE51bGx9XHJcbi8vL1xyXG5AZnVuY3Rpb24gdG8tbnVtYmVyKCRzdHJpbmcpIHtcclxuLy8gTWF0cmljZXNcclxuJHN0cmluZ3M6ICcwJyAnMScgJzInICczJyAnNCcgJzUnICc2JyAnNycgJzgnICc5JztcclxuJG51bWJlcnM6ICAwICAgMSAgIDIgICAzICAgNCAgIDUgICA2ICAgNyAgIDggICA5O1xyXG5cclxuLy8gUmVzdWx0XHJcbiRyZXN1bHQ6IDA7XHJcbiRkaXZpZGVyOiAwO1xyXG4kbWludXM6IGZhbHNlO1xyXG5cclxuLy8gTG9vcGluZyB0aHJvdWdoIGFsbCBjaGFyYWN0ZXJzXHJcbkBmb3IgJGkgZnJvbSAxIHRocm91Z2ggc3RyLWxlbmd0aCgkc3RyaW5nKSB7XHJcbiAgJGNoYXJhY3Rlcjogc3RyLXNsaWNlKCRzdHJpbmcsICRpLCAkaSk7XHJcbiAgJGluZGV4OiBpbmRleCgkc3RyaW5ncywgJGNoYXJhY3Rlcik7XHJcbiAgXHJcblxyXG4gIEBpZiAkY2hhcmFjdGVyID09ICctJyB7XHJcbiAgICAkbWludXM6IHRydWU7XHJcbiAgfVxyXG4gIFxyXG4gIEBlbHNlIGlmICRjaGFyYWN0ZXIgPT0gJy4nIHtcclxuICAgICRkaXZpZGVyOiAxO1xyXG4gIH1cclxuICBcclxuICBAZWxzZSB7XHJcbiAgICBAaWYgdHlwZS1vZigkaW5kZXgpICE9ICdudW1iZXInIHtcclxuICAgICAgJHJlc3VsdDogaWYoJG1pbnVzLCAkcmVzdWx0ICogLTEsICRyZXN1bHQpO1xyXG4gICAgICBAcmV0dXJuIF9sZW5ndGgoJHJlc3VsdCwgc3RyLXNsaWNlKCRzdHJpbmcsICRpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgJG51bWJlcjogbnRoKCRudW1iZXJzLCAkaW5kZXgpO1xyXG4gICAgXHJcbiAgICBAaWYgJGRpdmlkZXIgPT0gMCB7XHJcbiAgICAgICRyZXN1bHQ6ICRyZXN1bHQgKiAxMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQGVsc2Uge1xyXG4gICAgICAvLyBNb3ZlIHRoZSBkZWNpbWFsIGRvdCB0byB0aGUgbGVmdFxyXG4gICAgICAkZGl2aWRlcjogJGRpdmlkZXIgKiAxMDtcclxuICAgICAgJG51bWJlcjogJG51bWJlciAvICRkaXZpZGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAkcmVzdWx0OiAkcmVzdWx0ICsgJG51bWJlcjtcclxuICB9XHJcbn1cclxuXHJcbkByZXR1cm4gaWYoJG1pbnVzLCAkcmVzdWx0ICogLTEsICRyZXN1bHQpO1xyXG59XHJcblxyXG5AZnVuY3Rpb24gX2xlbmd0aCgkbnVtYmVyLCAkdW5pdCkge1xyXG4kc3RyaW5nczogJ3B4JyAnY20nICdtbScgJyUnICdjaCcgJ3BpY2EnICdpbicgJ2VtJyAncmVtJyAncHQnICdwYycgJ2V4JyAndncnICd2aCcgJ3ZtaW4nICd2bWF4JztcclxuJHVuaXRzOiAgIDFweCAgMWNtICAxbW0gIDElICAxY2ggIDFwaWNhICAxaW4gIDFlbSAgMXJlbSAgMXB0ICAxcGMgIDFleCAgMXZ3ICAxdmggIDF2bWluICAxdm1heDtcclxuJGluZGV4OiBpbmRleCgkc3RyaW5ncywgJHVuaXQpO1xyXG5cclxuQGlmIHR5cGUtb2YoJGluZGV4KSAhPSAnbnVtYmVyJyB7XHJcbiAgQHdhcm4gJ1Vua25vd24gdW5pdCBgI3skdW5pdH1gLic7XHJcbiAgQHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuQHJldHVybiAkbnVtYmVyICogbnRoKCR1bml0cywgJGluZGV4KTtcclxufSIsIkBpbXBvcnQgJy4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuQG1peGluIGJhY2tncm91bmRDb250YWluQ2VudGVyIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gYmFja2dyb3VuZENvdmVyQ2VudGVyIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbn1cclxuXHJcbkBmdW5jdGlvbiByZW0oJHB4KSB7XHJcbiAgQHJldHVybiAkcHggLyAkZnMtYmFzZSArIHJlbTtcclxufVxyXG5cclxuQG1peGluIHNpemUoJHB4KSB7XHJcbiAgd2lkdGg6ICRweCArIHB4O1xyXG4gIGhlaWdodDogJHB4ICsgcHg7XHJcbn1cclxuXHJcbkBtaXhpbiBjbGVhcmZpeCB7XHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtYXhDZW50ZXJlZCgkd2lkdGhQeCkge1xyXG4gIG1heC13aWR0aDogJHdpZHRoUHggKyBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuQG1peGluIGZpeGVkR2xvYmFsIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiBhYnNvbHV0ZWx5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcbkBtaXhpbiBhYnNvbHV0ZWx5Q2VudGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuQG1peGluIGFic29sdXRlbHlDZW50ZXJIVCgkdG9wKSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAkdG9wO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG5AbWl4aW4gYWJzb2x1dGVseUNlbnRlckhCIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbkBtaXhpbiBhYnNvbHV0ZWx5RnVsbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuQG1peGluIGxpbWl0VGV4dCgkbGluZXMsICRsaW5lSGVpZ2h0KSB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogJGxpbmVzO1xyXG4gIGxpbmUtaGVpZ2h0OiAkbGluZUhlaWdodDtcclxuICBtYXgtaGVpZ2h0OiAkbGluZUhlaWdodCAqICRsaW5lcyArIFwicHhcIjtcclxufVxyXG5cclxuQG1peGluIGdyYWRpZW50VGV4dCgkZ3JhZGllbnQsICRjb2xvcikge1xyXG4gIGJhY2tncm91bmQ6ICRncmFkaWVudDtcclxuICAtbXMtYmFja2dyb3VuZDogbm9uZTtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxuICAtbXMtYmFja2dyb3VuZC1zaXplOiAxMHB4O1xyXG59XHJcbiIsIi8vIENvbG9yc1xyXG4kYy1ibGFjazogIzAwMDtcclxuJGMtd2hpdGU6ICNmZmY7XHJcbiRjLXNpbHZlcjogIzdBOEZBNTtcclxuJGMtc2lsdmVyLWxpZ2h0OiAjRTVFNUU1O1xyXG4kYy1ibHVlLW9uZTogIzhGQjFEMztcclxuJGMtYmx1ZS10d286ICM4Rjk2RDM7XHJcbiRjLWJsdWUtdGhyZWU6ICNBNUJDRDI7XHJcbiRjLWJsdWUtZm91cjogIzdBOEZBNTtcclxuXHJcbi8vIEZvbnRzXHJcbiRmLXJ1ZGE6ICdSdWRhJywgc2Fucy1zZXJpZjtcclxuJGYtcm9ib3RvOiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHJcbi8vIEZvbnQgU2l6ZVxyXG4kZnMtYmFzZTogMTY7XHJcblxyXG4vLyBUcmFuc2l0aW9uXHJcbiR0LW5vcm1hbDogLjM1cyBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTtcclxuXHJcbi8vIFRleHQgU2hhZG93XHJcbiR0cy1ub3JtYWw6IDJweCAycHggMnB4IHJnYmEoJGMtYmxhY2ssIDAuNCk7XHJcblxyXG4vLyBCb3ggU2hhZG93XHJcbiRicy1ub3JtYWw6IDNweCA0cHggN3B4IHJnYmEoJGMtYmxhY2ssIC4zKTsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card-list',
                templateUrl: './card-list.component.html',
                styleUrls: ['./card-list.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _svg_svg_message_svg_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/svg-message/svg-message.component */ "./src/app/svg/svg-message/svg-message.component.ts");




const _c0 = ["card"];
class CardComponent {
    constructor() { }
    ngOnInit() { }
    cardAnimation() {
        gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(this.card.nativeElement, 1, {
            scale: 1,
            opacity: 1,
        });
    }
    editText(text) {
        let newText;
        if (text.length > 12) {
            newText = text.slice(0, 11) + '...';
            return newText;
        }
        else {
            return text;
        }
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], viewQuery: function CardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.card = _t.first);
    } }, inputs: { info: "info" }, decls: 34, vars: 8, consts: [[1, "card"], ["card", ""], [1, "card__wrapper"], [1, "card__message"], [1, "card__photo"], [1, "card__photo_wrapper"], ["alt", "", 1, "card__photo_image", 3, "src"], [1, "card__content"], [1, "card__item"], [1, "card__item_title"], [1, "card__item_subtitle"], [1, "card__item", 3, "title"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-svg-message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "First_name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Last_name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Avatar:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.info.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.info.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.editText(ctx.info.email));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.first_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.info.last_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.info.avatar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.editText(ctx.info.avatar));
    } }, directives: [_svg_svg_message_svg_message_component__WEBPACK_IMPORTED_MODULE_2__["SvgMessageComponent"]], styles: [".card[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: 0px 4px 20px #A5BCD2;\n  padding: 24px;\n  border-radius: 6px;\n  width: 100%;\n  max-width: 300px;\n  position: relative;\n  margin: auto;\n  transition: 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.card__wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.card__message[_ngcontent-%COMP%] {\n  width: 25px;\n  position: absolute;\n  top: 13px;\n  right: 10px;\n  cursor: pointer;\n  transition: 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.card__message[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.card__photo_wrapper[_ngcontent-%COMP%] {\n  width: 84.24px;\n  height: 84.24px;\n  border-radius: 10px;\n  overflow: hidden;\n  transform: rotate(45deg);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.card__photo_image[_ngcontent-%COMP%] {\n  transform: rotate(-45deg);\n}\n.card__content[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 100%;\n}\n.card__item[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 2px solid rgba(122, 143, 165, 0.4);\n  padding-bottom: 5.5px;\n  margin-top: 10px;\n}\n.card__item[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.card__item_title[_ngcontent-%COMP%] {\n  color: #7A8FA5;\n  font-style: normal;\n  text-transform: uppercase;\n  font-weight: normal;\n  font-size: 1rem;\n  line-height: 1.1875rem;\n}\n.card__item_subtitle[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 1.25rem;\n  line-height: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxlcy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLHNCQ0ZRO0VER1IsZ0NBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSw4Q0NNUztBRFJYO0FBSUU7RUFDRSxxQkFBQTtBQUZKO0FBS0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUhKO0FBTUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSw4Q0NaTztBRFFYO0FBTUk7RUFDRSxxQkFBQTtBQUpOO0FBU0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUE47QUFVSTtFQUNFLHlCQUFBO0FBUk47QUFZRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQVZKO0FBYUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpREFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFYSjtBQWFJO0VBQ0UsYUFBQTtBQVhOO0FBY0k7RUFDRSxjQ2pFUTtFRGtFUixrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFaTjtBQWVJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFiTiIsImZpbGUiOiJzcmMvYXBwL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMvbWl4aW5zXCI7XHJcblxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGMtd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyMHB4ICRjLWJsdWUtdGhyZWU7XHJcbiAgcGFkZGluZzogMjRweDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAzMDBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRyYW5zaXRpb246ICR0LW5vcm1hbDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgfVxyXG5cclxuICAmX193cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICZfX21lc3NhZ2Uge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEzcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246ICR0LW5vcm1hbDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fcGhvdG8ge1xyXG4gICAgJl93cmFwcGVyIHtcclxuICAgICAgd2lkdGg6IDg0LjI0cHg7XHJcbiAgICAgIGhlaWdodDogODQuMjRweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmX2ltYWdlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJl9faXRlbSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYmEoMTIyLCAxNDMsIDE2NSwgMC40KTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1LjVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgJl90aXRsZSB7XHJcbiAgICAgIGNvbG9yOiAkYy1ibHVlLWZvdXI7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiByZW0oMTYpO1xyXG4gICAgICBsaW5lLWhlaWdodDogcmVtKDE5KTtcclxuICAgIH1cclxuXHJcbiAgICAmX3N1YnRpdGxlIHtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiByZW0oMjApO1xyXG4gICAgICBsaW5lLWhlaWdodDogcmVtKDI0KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gQ29sb3JzXHJcbiRjLWJsYWNrOiAjMDAwO1xyXG4kYy13aGl0ZTogI2ZmZjtcclxuJGMtc2lsdmVyOiAjN0E4RkE1O1xyXG4kYy1zaWx2ZXItbGlnaHQ6ICNFNUU1RTU7XHJcbiRjLWJsdWUtb25lOiAjOEZCMUQzO1xyXG4kYy1ibHVlLXR3bzogIzhGOTZEMztcclxuJGMtYmx1ZS10aHJlZTogI0E1QkNEMjtcclxuJGMtYmx1ZS1mb3VyOiAjN0E4RkE1O1xyXG5cclxuLy8gRm9udHNcclxuJGYtcnVkYTogJ1J1ZGEnLCBzYW5zLXNlcmlmO1xyXG4kZi1yb2JvdG86ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG5cclxuLy8gRm9udCBTaXplXHJcbiRmcy1iYXNlOiAxNjtcclxuXHJcbi8vIFRyYW5zaXRpb25cclxuJHQtbm9ybWFsOiAuMzVzIGN1YmljLWJlemllciguNCwwLC4yLDEpO1xyXG5cclxuLy8gVGV4dCBTaGFkb3dcclxuJHRzLW5vcm1hbDogMnB4IDJweCAycHggcmdiYSgkYy1ibGFjaywgMC40KTtcclxuXHJcbi8vIEJveCBTaGFkb3dcclxuJGJzLW5vcm1hbDogM3B4IDRweCA3cHggcmdiYSgkYy1ibGFjaywgLjMpOyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss'],
            }]
    }], function () { return []; }, { info: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['card', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _svg_svg_heart_svg_heart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../svg/svg-heart/svg-heart.component */ "./src/app/svg/svg-heart/svg-heart.component.ts");




const _c0 = ["headerCard"];
class HeaderComponent {
    constructor() {
        // Variables
        this.headerTitle = 'Developed With Love By:';
        this.headerSubtitle = 'George Bluth';
    }
    ngOnInit() {
        // Set Style (Before Animation)
        gsap__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].set(this.headerCard.nativeElement, {
            y: -200,
        });
        // Starting Animation
        this.headerCardAnimation();
    }
    headerCardAnimation() {
        gsap__WEBPACK_IMPORTED_MODULE_1__["TweenMax"].to(this.headerCard.nativeElement, 3, {
            y: 0,
            ease: gsap__WEBPACK_IMPORTED_MODULE_1__["Elastic"].easeOut.config(0.8, 0.3),
            delay: 1,
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerCard = _t.first);
    } }, decls: 11, vars: 2, consts: [[1, "header"], [1, "header__wrapper", "wrapper"], [1, "header__card"], ["headerCard", ""], [1, "header__card_heart"], [1, "header__card_content"], [1, "header__card_title"], [1, "header__card_subtitle"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-svg-heart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.headerTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.headerSubtitle, " ");
    } }, directives: [_svg_svg_heart_svg_heart_component__WEBPACK_IMPORTED_MODULE_2__["SvgHeartComponent"]], styles: [".header[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n}\n.header__card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 280px;\n  background-color: #fff;\n  box-shadow: 0px 2px 16px #A5BCD2;\n  border-radius: 6px;\n  padding: 10px;\n  font-size: 1.25rem;\n  font-style: normal;\n  line-height: 24px;\n  display: flex;\n  cursor: default;\n}\n.header__card_heart[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 21.25px;\n  overflow: hidden;\n  margin-right: 10px;\n}\n.header__card_title[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n.header__card_subtitle[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  line-height: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFGRjtBQUlFO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JDUk07RURTTixnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBRko7QUFJSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZOO0FBS0k7RUFDRSxtQkFBQTtBQUhOO0FBTUk7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFKTiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vc3R5bGVzL21peGluc1wiO1xyXG5cclxuLmhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDEwO1xyXG5cclxuICAmX19jYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAyODBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjLXdoaXRlO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxNnB4ICRjLWJsdWUtdGhyZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiByZW0oMjApO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxuICAgICZfaGVhcnQge1xyXG4gICAgICB3aWR0aDogMjVweDtcclxuICAgICAgaGVpZ2h0OiAyMS4yNXB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJl90aXRsZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcblxyXG4gICAgJl9zdWJ0aXRsZSB7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiByZW0oMjQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyBDb2xvcnNcclxuJGMtYmxhY2s6ICMwMDA7XHJcbiRjLXdoaXRlOiAjZmZmO1xyXG4kYy1zaWx2ZXI6ICM3QThGQTU7XHJcbiRjLXNpbHZlci1saWdodDogI0U1RTVFNTtcclxuJGMtYmx1ZS1vbmU6ICM4RkIxRDM7XHJcbiRjLWJsdWUtdHdvOiAjOEY5NkQzO1xyXG4kYy1ibHVlLXRocmVlOiAjQTVCQ0QyO1xyXG4kYy1ibHVlLWZvdXI6ICM3QThGQTU7XHJcblxyXG4vLyBGb250c1xyXG4kZi1ydWRhOiAnUnVkYScsIHNhbnMtc2VyaWY7XHJcbiRmLXJvYm90bzogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblxyXG4vLyBGb250IFNpemVcclxuJGZzLWJhc2U6IDE2O1xyXG5cclxuLy8gVHJhbnNpdGlvblxyXG4kdC1ub3JtYWw6IC4zNXMgY3ViaWMtYmV6aWVyKC40LDAsLjIsMSk7XHJcblxyXG4vLyBUZXh0IFNoYWRvd1xyXG4kdHMtbm9ybWFsOiAycHggMnB4IDJweCByZ2JhKCRjLWJsYWNrLCAwLjQpO1xyXG5cclxuLy8gQm94IFNoYWRvd1xyXG4kYnMtbm9ybWFsOiAzcHggNHB4IDdweCByZ2JhKCRjLWJsYWNrLCAuMyk7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
            }]
    }], function () { return []; }, { headerCard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['headerCard', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");




class UsersService {
    constructor(http) {
        this.http = http;
    }
    getUsers(page) {
        return this.http
            .get(`https://reqres.in/api/users?page=${page}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((response) => response.json()));
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }]; }, null); })();


/***/ }),

/***/ "./src/app/svg/svg-heart/svg-heart.component.ts":
/*!******************************************************!*\
  !*** ./src/app/svg/svg-heart/svg-heart.component.ts ***!
  \******************************************************/
/*! exports provided: SvgHeartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgHeartComponent", function() { return SvgHeartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SvgHeartComponent {
    constructor() { }
    ngOnInit() { }
}
SvgHeartComponent.ɵfac = function SvgHeartComponent_Factory(t) { return new (t || SvgHeartComponent)(); };
SvgHeartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SvgHeartComponent, selectors: [["app-svg-heart"]], decls: 2, vars: 0, consts: [["viewBox", "0 0 25 23", "xmlns", "http://www.w3.org/2000/svg", 1, "svg"], ["d", "M23.176 2.96247C21.9429 1.61633 20.2323 0.875 18.3594 0.875C15.7252 0.875 14.0575 2.38867 13.1223 3.65852C12.8797 3.98803 12.6733 4.31843 12.5 4.62934C12.3267 4.31843 12.1204 3.98803 11.8777 3.65852C10.9425 2.38867 9.27481 0.875 6.64062 0.875C4.76768 0.875 3.05708 1.61638 1.82397 2.96252C0.647803 4.24665 0 5.96646 0 7.80513C0 9.80659 0.812158 11.6681 2.55591 13.6634C4.11436 15.4468 6.3564 17.285 8.95264 19.4135C9.92007 20.2067 10.9205 21.027 11.9856 21.9236L12.0176 21.9506C12.1557 22.0669 12.3278 22.125 12.5 22.125C12.6722 22.125 12.8443 22.0668 12.9824 21.9506L13.0144 21.9236C14.0795 21.027 15.0799 20.2068 16.0475 19.4135C18.6436 17.285 20.8856 15.4468 22.4441 13.6634C24.1878 11.6681 25 9.80659 25 7.80513C25 5.96646 24.3522 4.24665 23.176 2.96247ZM15.0973 18.3408C14.2633 19.0246 13.405 19.7283 12.5 20.4852C11.595 19.7284 10.7367 19.0246 9.90254 18.3407C4.82153 14.1749 1.46484 11.4229 1.46484 7.80513C1.46484 6.30979 1.98267 4.92089 2.92295 3.89435C3.87402 2.85616 5.19429 2.28438 6.64062 2.28438C8.64888 2.28438 9.94707 3.47473 10.6824 4.47332C11.342 5.36893 11.6862 6.27178 11.8036 6.61835C11.9018 6.90844 12.1829 7.10477 12.5 7.10477C12.8171 7.10477 13.0982 6.90844 13.1964 6.61835C13.3138 6.27178 13.658 5.36893 14.3176 4.47328C15.0529 3.47473 16.3511 2.28438 18.3594 2.28438C19.8057 2.28438 21.126 2.85616 22.077 3.89435C23.0173 4.92089 23.5352 6.30979 23.5352 7.80513C23.5352 11.4229 20.1785 14.1749 15.0973 18.3408Z"]], template: function SvgHeartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N2Zy9zdmctaGVhcnQvc3ZnLWhlYXJ0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SvgHeartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-svg-heart',
                templateUrl: './svg-heart.component.html',
                styleUrls: ['./svg-heart.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/svg/svg-message/svg-message.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/svg/svg-message/svg-message.component.ts ***!
  \**********************************************************/
/*! exports provided: SvgMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgMessageComponent", function() { return SvgMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SvgMessageComponent {
    constructor() { }
    ngOnInit() {
    }
}
SvgMessageComponent.ɵfac = function SvgMessageComponent_Factory(t) { return new (t || SvgMessageComponent)(); };
SvgMessageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SvgMessageComponent, selectors: [["app-svg-message"]], decls: 2, vars: 0, consts: [["viewBox", "0 0 25 19", "xmlns", "http://www.w3.org/2000/svg", 1, "svg"], ["d", "M22.6562 0.125H2.34377C1.05133 0.125 0 1.17633 0 2.46876V16.5312C0 17.8237 1.05133 18.875 2.34377 18.875H22.6562C23.9487 18.875 25 17.8237 25 16.5312V2.46876C25 1.17633 23.9487 0.125 22.6562 0.125ZM22.6562 1.68749C22.7624 1.68749 22.8634 1.70951 22.9557 1.74797L12.5 10.81L2.04427 1.74797C2.13659 1.70957 2.23757 1.68749 2.34371 1.68749H22.6562ZM22.6562 17.3125H2.34377C1.91271 17.3125 1.56249 16.9623 1.56249 16.5312V3.39876L11.9881 12.4342C12.1353 12.5616 12.3177 12.625 12.5 12.625C12.6823 12.625 12.8647 12.5617 13.0119 12.4342L23.4375 3.39876V16.5312C23.4375 16.9623 23.0873 17.3125 22.6562 17.3125Z"]], template: function SvgMessageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N2Zy9zdmctbWVzc2FnZS9zdmctbWVzc2FnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SvgMessageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-svg-message',
                templateUrl: './svg-message.component.html',
                styleUrls: ['./svg-message.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\programming\projects\lastTest\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map