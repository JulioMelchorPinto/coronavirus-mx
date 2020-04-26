function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _pages_country_country_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/country/country.component */
    "./src/app/pages/country/country.component.ts");
    /* harmony import */


    var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/not-found/not-found.component */
    "./src/app/pages/not-found/not-found.component.ts");
    /* harmony import */


    var _pages_assistance_assistance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/assistance/assistance.component */
    "./src/app/pages/assistance/assistance.component.ts");

    var routes = [{
      path: '',
      component: _pages_assistance_assistance_component__WEBPACK_IMPORTED_MODULE_5__["AssistanceComponent"]
    }, {
      path: 'dashboard',
      component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }, {
      path: 'country/:name',
      component: _pages_country_country_component__WEBPACK_IMPORTED_MODULE_3__["CountryComponent"]
    }, {
      path: '**',
      component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _layouts_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./layouts/layout.component */
    "./src/app/layouts/layout.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-layout");
        }
      },
      directives: [_layouts_layout_component__WEBPACK_IMPORTED_MODULE_1__["LayoutComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/youtube-player */
    "./node_modules/@angular/youtube-player/__ivy_ngcc__/fesm2015/youtube-player.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-bootstrap/accordion */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/accordion/fesm2015/ngx-bootstrap-accordion.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-bootstrap/popover */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _layouts_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./layouts/layout.component */
    "./src/app/layouts/layout.component.ts");
    /* harmony import */


    var _layouts_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./layouts/topbar/topbar.component */
    "./src/app/layouts/topbar/topbar.component.ts");
    /* harmony import */


    var _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./layouts/navbar/navbar.component */
    "./src/app/layouts/navbar/navbar.component.ts");
    /* harmony import */


    var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./layouts/footer/footer.component */
    "./src/app/layouts/footer/footer.component.ts");
    /* harmony import */


    var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _pages_country_country_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pages/country/country.component */
    "./src/app/pages/country/country.component.ts");
    /* harmony import */


    var _pages_assistance_assistance_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pages/assistance/assistance.component */
    "./src/app/pages/assistance/assistance.component.ts");
    /* harmony import */


    var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pages/not-found/not-found.component */
    "./src/app/pages/not-found/not-found.component.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
    /* harmony import */


    var _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./shared/countup/countup.component */
    "./src/app/shared/countup/countup.component.ts"); // Imports from ngx-bootstrap
    // Import Routing
    // Imports from components


    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {};

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_24__["PERFECT_SCROLLBAR_CONFIG"],
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_24__["PerfectScrollbarModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(), ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_9__["AccordionModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_11__["TabsModule"].forRoot(), ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_12__["PopoverModule"].forRoot(), _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].production,
        registrationStrategy: 'registerImmediately'
      }), _angular_youtube_player__WEBPACK_IMPORTED_MODULE_7__["YouTubePlayerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"], _layouts_layout_component__WEBPACK_IMPORTED_MODULE_15__["LayoutComponent"], _layouts_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_16__["TopbarComponent"], _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"], _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"], _pages_country_country_component__WEBPACK_IMPORTED_MODULE_20__["CountryComponent"], _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_22__["NotFoundComponent"], _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_25__["CountupComponent"], _pages_assistance_assistance_component__WEBPACK_IMPORTED_MODULE_21__["AssistanceComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_24__["PerfectScrollbarModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_9__["AccordionModule"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_11__["TabsModule"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_12__["PopoverModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_7__["YouTubePlayerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"], _layouts_layout_component__WEBPACK_IMPORTED_MODULE_15__["LayoutComponent"], _layouts_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_16__["TopbarComponent"], _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"], _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_19__["DashboardComponent"], _pages_country_country_component__WEBPACK_IMPORTED_MODULE_20__["CountryComponent"], _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_22__["NotFoundComponent"], _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_25__["CountupComponent"], _pages_assistance_assistance_component__WEBPACK_IMPORTED_MODULE_21__["AssistanceComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_24__["PerfectScrollbarModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(), ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_9__["AccordionModule"].forRoot(), ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_11__["TabsModule"].forRoot(), ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_12__["PopoverModule"].forRoot(), _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].production,
            registrationStrategy: 'registerImmediately'
          }), _angular_youtube_player__WEBPACK_IMPORTED_MODULE_7__["YouTubePlayerModule"]],
          providers: [{
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_24__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/getdata.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/services/getdata.service.ts ***!
    \**************************************************/

  /*! exports provided: GetdataService */

  /***/
  function srcAppCoreServicesGetdataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetdataService", function () {
      return GetdataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"];

    var GetdataService = /*#__PURE__*/function () {
      function GetdataService(_http) {
        _classCallCheck(this, GetdataService);

        this._http = _http;
        this.host = "https://api.coronastatistics.live";
      }

      _createClass(GetdataService, [{
        key: "getAll",
        value: function getAll(type) {
          return this._http.get("".concat(this.host, "/countries?sort=").concat(type)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "getCountry",
        value: function getCountry(name) {
          return this._http.get("".concat(this.host, "/countries/").concat(name)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "getTimeline",
        value: function getTimeline() {
          return this._http.get("".concat(this.host, "/timeline")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "getTimelineCountry",
        value: function getTimelineCountry(country) {
          return this._http.get("".concat(this.host, "/timeline/").concat(country)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "getTimelineGlobal",
        value: function getTimelineGlobal() {
          return this._http.get("".concat(this.host, "/timeline/global")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          var errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
          } else {
            // Get server-side error
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          window.alert("Por favor, revisa tu conecci&oacute;n a internet!.");
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }
      }]);

      return GetdataService;
    }();

    GetdataService.ɵfac = function GetdataService_Factory(t) {
      return new (t || GetdataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    GetdataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GetdataService,
      factory: GetdataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetdataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layouts/footer/footer.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/layouts/footer/footer.component.ts ***!
    \****************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppLayoutsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 24,
      vars: 0,
      consts: [[1, "footer"], [1, "container-fluid"], [1, "row"], [1, "col-md-6"], [1, "text-danger"], [1, "fas", "fa-heart"], ["href", "https://twitter.com/MelchorPinto"], [1, "text-md-right", "footer-links", "d-none", "d-sm-block"], ["href", "https://github.com/JulioMelchorPinto/"], [1, "text-blue"], [1, "fab", "fa-osi"], ["href", "https://paypal.me/beaverNet"], [1, "text-warning"], [1, "fas", "fa-mug-hot"], [1, "text-success"], [1, "far", "fa-paper-plane"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 2020 \xA9 para M\xE9xico con ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " por ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Julio C\xE9sar Melchor Pinto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Repositorio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Patroc\xEDname");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Contacto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layouts/layout.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/layouts/layout.component.ts ***!
    \*********************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppLayoutsLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./topbar/topbar.component */
    "./src/app/layouts/topbar/topbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/layouts/footer/footer.component.ts");

    var LayoutComponent = /*#__PURE__*/function () {
      function LayoutComponent() {
        _classCallCheck(this, LayoutComponent);

        this.showMobileMenu = false;
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)();
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      decls: 5,
      vars: 0,
      consts: [["id", "topnav-dark"], [1, "wrapper"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-topbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        }
      },
      directives: [_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_1__["TopbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './layout.component.html',
          styleUrls: ['./layout.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layouts/navbar/navbar.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/layouts/navbar/navbar.component.ts ***!
    \****************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppLayoutsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showMobileMenu = false;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // activate menu item based on location
          var links = document.getElementsByClassName('side-nav-link-ref');
          var matchingMenuItem = null; // tslint:disable-next-line: prefer-for-of

          for (var i = 0; i < links.length; i++) {
            // tslint:disable-next-line: no-string-literal
            if (location.pathname === links[i]['pathname']) {
              matchingMenuItem = links[i];
              break;
            }
          }

          if (matchingMenuItem) {
            matchingMenuItem.classList.add('active');
            var parent = matchingMenuItem.parentElement;
            /**
             * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
             * We should come up with non hard coded approach
             */

            if (parent) {
              parent.classList.add('active');
              var parent2 = parent.parentElement;

              if (parent2) {
                parent2.classList.add('in');
              }

              var parent3 = parent2.parentElement;

              if (parent3) {
                parent3.classList.add('active');
                var childAnchor = parent3.querySelector('.has-dropdown');

                if (childAnchor) {
                  childAnchor.classList.add('active');
                }
              }

              var parent4 = parent3.parentElement;

              if (parent4) {
                parent4.classList.add('in');
              }

              var parent5 = parent4.parentElement;

              if (parent5) {
                parent5.classList.add('active');
              }
            }
          }
        }
        /**
         * On menu click
         */

      }, {
        key: "onMenuClick",
        value: function onMenuClick(event) {
          var nextEl = event.target.nextSibling;

          if (nextEl && !nextEl.classList.contains('open')) {
            var parentEl = event.target.parentNode;

            if (parentEl) {
              parentEl.classList.remove('open');
            }

            nextEl.classList.add('open');
          } else if (nextEl) {
            nextEl.classList.remove('open');
          }

          return false;
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      inputs: {
        showMobileMenu: "showMobileMenu"
      },
      decls: 2,
      vars: 0,
      consts: [[1, "topbar-menu"], [1, "container-fluid"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [];
      }, {
        showMobileMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/layouts/topbar/topbar.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/layouts/topbar/topbar.component.ts ***!
    \****************************************************/

  /*! exports provided: TopbarComponent */

  /***/
  function srcAppLayoutsTopbarTopbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopbarComponent", function () {
      return TopbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["/"];
    };

    var _c1 = function _c1(a0) {
      return {
        show: a0
      };
    };

    var _c2 = function _c2() {
      return ["link-active"];
    };

    var _c3 = function _c3() {
      return {
        exact: true
      };
    };

    var _c4 = function _c4() {
      return ["/country/mexico"];
    };

    var _c5 = function _c5() {
      return ["/dashboard"];
    };

    var TopbarComponent = /*#__PURE__*/function () {
      function TopbarComponent() {
        _classCallCheck(this, TopbarComponent);

        this.showButton = false;
        this.isExpanded = false;
      }

      _createClass(TopbarComponent, [{
        key: "collapse",
        value: function collapse() {
          this.isExpanded = false;
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.isExpanded = !this.isExpanded;
        }
      }, {
        key: "onbeforeinstallprompt",
        value: function onbeforeinstallprompt(e) {
          console.log(e); // Prevent Chrome 67 and earlier from automatically showing the prompt

          e.preventDefault(); // Stash the event so it can be triggered later.

          this.deferredPrompt = e;
          this.showButton = true;
        }
      }, {
        key: "addToHomeScreen",
        value: function addToHomeScreen() {
          var _this = this;

          // hide our user interface that shows our A2HS button
          this.showButton = false; // Show the prompt

          this.deferredPrompt.prompt(); // Wait for the user to respond to the prompt

          this.deferredPrompt.userChoice.then(function (choiceResult) {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
            } else {
              console.log('User dismissed the A2HS prompt');
            }

            _this.deferredPrompt = null;
          });
        }
      }]);

      return TopbarComponent;
    }();

    TopbarComponent.ɵfac = function TopbarComponent_Factory(t) {
      return new (t || TopbarComponent)();
    };

    TopbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopbarComponent,
      selectors: [["app-topbar"]],
      hostBindings: function TopbarComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeinstallprompt", function TopbarComponent_beforeinstallprompt_HostBindingHandler($event) {
            return ctx.onbeforeinstallprompt($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 20,
      vars: 22,
      consts: [[1, "navbar", "navbar-expand-md", "navbar-toggleable-md", "bg-light", "mb-1", "sticky-topbar"], [1, "container"], [1, "navbar-brand", 3, "routerLink"], ["src", "assets/images/logo-light.png", "height", "40"], ["type", "button", "data-toggle", "collapse", "data-target", ".navbar-collapse", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "far", "fa-caret-square-down"], [1, "navbar-collapse", "collapse", "d-md-inline-flex", "flex-md-row-reverse", 3, "ngClass"], [1, "navbar-nav", "flex-grow"], [1, "nav-item", 3, "routerLinkActive"], [1, "btn", "btn-md", "btn-outlined-danger", "waves-effect", "waves-light", "width-lg", "mt-1", "mb-1", "nav-link", "text-dark", 3, "routerLink"], [1, "fas", "fa-info-circle", "mr-1"], [1, "nav-item", 3, "routerLinkActive", "routerLinkActiveOptions"], [1, "btn", "btn-md", "btn-outlined-success", "waves-effect", "waves-light", "width-lg", "mt-1", "mb-1", "nav-link", "text-dark", 3, "routerLink"], ["width", "20", "src", "assets/flags/mx.svg"], [1, "btn", "btn-md", "btn-outlined-primary", "waves-effect", "waves-light", "width-lg", "mt-1", "mb-1", "nav-link", "text-dark", 3, "routerLink"], ["width", "15", "src", "assets/flags/world.png"]],
      template: function TopbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_Template_button_click_4_listener() {
            return ctx.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Informaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Datos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " El mundo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", ctx.isExpanded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx.isExpanded));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c2))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c2))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c5));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: [".sticky-topbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0px;\n  width: 100%;\n  z-index: 100;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RPQ1VNRU5UT1MvSkNNUC9SZXBvc2l0b3Jpby9iZWF2ZXJOZXQvY29yb25hdmlydXMtbXgvc3JjL2FwcC9sYXlvdXRzL3RvcGJhci90b3BiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dHMvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL3RvcGJhci90b3BiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RpY2t5LXRvcGJhciB7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0dG9wIDogMHB4O1xuXHR3aWR0aDoxMDAlO1xuXHR6LWluZGV4OiAxMDA7XG5cdGhlaWdodDogNTBweDtcbn0iLCIuc3RpY2t5LXRvcGJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDA7XG4gIGhlaWdodDogNTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-topbar',
          templateUrl: './topbar.component.html',
          styleUrls: ['./topbar.component.scss']
        }]
      }], function () {
        return [];
      }, {
        onbeforeinstallprompt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:beforeinstallprompt', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/assistance/assistance.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/assistance/assistance.component.ts ***!
    \**********************************************************/

  /*! exports provided: getAccordionConfig, getTabsetConfig, AssistanceComponent */

  /***/
  function srcAppPagesAssistanceAssistanceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getAccordionConfig", function () {
      return getAccordionConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getTabsetConfig", function () {
      return getTabsetConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssistanceComponent", function () {
      return AssistanceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap/accordion */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/accordion/fesm2015/ngx-bootstrap-accordion.js");
    /* harmony import */


    var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/tabs */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm2015/ngx-bootstrap-tabs.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap/popover */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/popover/fesm2015/ngx-bootstrap-popover.js");
    /* harmony import */


    var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/youtube-player */
    "./node_modules/@angular/youtube-player/__ivy_ngcc__/fesm2015/youtube-player.js");

    var _c0 = ["autoShownModal"];

    function AssistanceComponent_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Conoce c\xF3mo se ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "dispersa");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " el virus");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h6", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Actualmente, no existe vacuna para prevenir el contagio de ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "COVID-19");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "El virus se contagia principalmente con el contacto de persona a persona, cuando las diminutas gotas que provienen de la tos o el estornudo de una persona infectada son expulsadas al exterior.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutAnimation", undefined);
      }
    }

    function AssistanceComponent_div_1_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Medidas para ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "PROTEJERTE");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " a ti mismo");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "L\xE1vate las manos con agua y jab\xF3n durante 20 segundos. Evita tocarte la cara, en especial los ojos, nar\xEDz y boca. Recuerda que \xE9sta es la v\xEDa de entrada del virus.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutAnimation", undefined);
      }
    }

    function AssistanceComponent_div_1_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Evita el contacto ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "CERCANO");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " con las personas.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Has caso de las medidas de distanciamiento social de tu comunidad. Recuerda que esto es fundamental para acabar con esta pandemia.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutAnimation", undefined);
      }
    }

    function AssistanceComponent_div_1_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Toma medidas para ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "PROTEGERTE");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " a ti mismo");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Cu\xFArete con un pa\xF1uelo nar\xEDz y boca cuando estornudes o tosas, o con el interior de tu antebrazo. L\xE1vate las manos inmediatamente con agua y con jab\xF3n al menos durante 20 segundos, o aplica en tus manos gel sanitizante con cuando menos 70% de alcohol. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutAnimation", undefined);
      }
    }

    function AssistanceComponent_div_1_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "LAVA Y ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "DESINFECTA");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Lava y desinfecta las superficies con las que regularmente tienes contacto. \xC9sto incluye mesas, perillas de puertas, interruptores de luz, manijas, escritorios, tel\xE9fonos, teclados, inodoros, lavamanos, etc. Si ves una superficie sucia, l\xEDmpiala: Usa detergente o jab\xF3n apropiado para la desinfecci\xF3n. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutAnimation", undefined);
      }
    }

    function AssistanceComponent_div_1_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AssistanceComponent_div_1_div_10_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r33);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r32.nextStep();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Siguiente ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function AssistanceComponent_div_1_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 97, 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "No quiero ver esto de nuevo");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AssistanceComponent_div_1_div_11_Template_button_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r36);

          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r35.close(_r34.checked);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Cerrar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1() {
      return {
        show: true
      };
    };

    function AssistanceComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 77, 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onHidden", function AssistanceComponent_div_1_Template_div_onHidden_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r38);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r37.onHidden();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AssistanceComponent_div_1_div_5_Template, 13, 1, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AssistanceComponent_div_1_div_6_Template, 9, 1, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AssistanceComponent_div_1_div_7_Template, 9, 1, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AssistanceComponent_div_1_div_8_Template, 9, 1, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, AssistanceComponent_div_1_div_9_Template, 8, 1, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AssistanceComponent_div_1_div_10_Template, 5, 0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AssistanceComponent_div_1_div_11_Template, 11, 0, "div", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r21.modalStep == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r21.modalStep == 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r21.modalStep == 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r21.modalStep == 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r21.modalStep == 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r21.modalStep != 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r21.modalStep == 5);
      }
    }

    function AssistanceComponent_ng_template_66_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0, "Aqu\xED est\xE1: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 102);
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHtml", ctx_r23.html_popover_wuhan, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
      }
    }

    function getAccordionConfig() {
      return Object.assign(new ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionConfig"](), {
        closeOthers: true
      });
    }

    function getTabsetConfig() {
      return Object.assign(new ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsetConfig"](), {
        type: 'tabs'
      });
    }

    var AssistanceComponent = /*#__PURE__*/function () {
      function AssistanceComponent() {
        _classCallCheck(this, AssistanceComponent);

        this.isCollapsed = false;
        this.isModalShown = false;
        this.modalStep = 1;
        this.html_popover_wuhan = "<a href=\"https://www.google.com/maps/place/Wuhan,+Hubei,+China/\" target=\"_blank\"><img src=\"assets/images/wuhan-map.png\"></a>";
      }

      _createClass(AssistanceComponent, [{
        key: "showModal",
        value: function showModal() {
          this.modalStep = 1;
          this.isModalShown = true;
        }
      }, {
        key: "showModalVul",
        value: function showModalVul() {}
      }, {
        key: "hideModal",
        value: function hideModal() {
          this.autoShownModal.hide();
        }
      }, {
        key: "onHidden",
        value: function onHidden() {
          this.isModalShown = false;
        }
      }, {
        key: "nextStep",
        value: function nextStep() {
          this.modalStep += 1;
        }
      }, {
        key: "close",
        value: function close(dontShow) {
          if (dontShow) {
            localStorage.setItem("dontShow", "true");
          }

          this.hideModal();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var tag;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!localStorage.getItem("dontShow")) {
                      this.showModal();
                    } // youtube SDK


                    tag = document.createElement('script');
                    tag.src = "https://www.youtube.com/iframe_api";
                    document.body.appendChild(tag);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AssistanceComponent;
    }();

    AssistanceComponent.ɵfac = function AssistanceComponent_Factory(t) {
      return new (t || AssistanceComponent)();
    };

    AssistanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AssistanceComponent,
      selectors: [["app-assistance"]],
      viewQuery: function AssistanceComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.autoShownModal = _t.first);
        }
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionConfig"],
        useFactory: getAccordionConfig
      }, {
        provide: ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsetConfig"],
        useFactory: getTabsetConfig
      }])],
      decls: 180,
      vars: 10,
      consts: [[1, "container-fluid"], ["bsModal", "", "class", "modal fade d-block", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-auto-name", 3, "config", "onHidden", 4, "ngIf"], [1, "main-title"], [1, "display-4"], [1, "text-success"], ["href", "tel:8000044800", 1, "btn", "btn-md", "btn-lighten-danger", "waves-effect", "waves-light", "width-lg"], [1, "fas", "fa-phone", "mr-1"], ["href", "https://web.whatsapp.com/send?phone=5586338589", "target", "_blank"], ["src", "assets/images/whatsapp.png"], [1, "row"], [1, "col-xl-12"], [1, "col-12"], [3, "justified"], ["heading", "YO"], [3, "isAnimated"], ["heading", "\xBFQu\xE9 son los virus y coronavirus?"], [1, "text-justify"], ["tooltip", "Aquello que existe", 1, "text-pink"], ["tooltip", "Nanoscopico, del orden de 10 a 100 nm", 1, "text-pink"], [1, "text-center", "mb-1"], ["src", "assets/images/coronavirus01.png"], ["tooltip", "Es el mas com\xFAn, y afecta principalmente a ni\xF1os menores de 5 a\xF1os", 1, "text-pink"], ["tooltip", "Descubierto en 2004", 1, "text-pink"], ["tooltip", "Descubierto en 2005", 1, "text-pink"], ["tooltip", "Descubierto en 2003, con una letalidad del 10%", 1, "text-pink"], ["tooltip", "Descubierto en 2012, con una letalidad del 32%", 1, "text-pink"], ["tooltip", "Descubierto en 2020, es el virus causante de la pandemia actual", 1, "text-danger"], ["heading", "\xBFCu\xE1l es la diferencia COVID-19 y SARS-CoV2?"], ["popTemplateWuhan", ""], [1, "text-pink", 3, "popover", "outsideClick"], ["tooltip", "Nuevo coronavirus o Novel-CoV", 1, "text-pink"], ["tooltip", "Organizaci\xF3n Mundial de la Salud", 1, "text-pink"], ["tooltip", "Severe Acute Respiratory Syndrome (S\xEDndrome Respiratorio Agudo Grave), por sus siglas en ingl\xE9s", 1, "text-danger"], ["tooltip", "Coronavirus Infectious Disease, por sus siglas en ingl\xE9s", 1, "text-danger"], ["heading", "\xBFC\xF3mo prevenir el contagio?"], ["type", "button", 1, "btn", "btn-sm", "btn-lighten-warning", "waves-effect", "waves-light", 3, "click"], ["heading", "MI COMUNIDAD"], ["heading", "Fake news en tiempos del Coronavirus"], ["videoId", "_f6BvSNZLLs", "suggestedQuality", "highres", 3, "height", "width", "startSeconds", "endSeconds"], ["heading", "MI TRABAJO"], ["heading", "Me han despedido o me descansaron sin goce de sueldo"], [1, "text-danger"], [1, "text-blue"], ["role", "button", "href", "https://procuraduriadigital.stps.gob.mx/reporte-trabajador", "target", "_blank", 1, "btn", "btn-sm", "btn-lighten-success", "waves-effect", "waves-light"], ["heading", "Apoyo Solidario a la Palabra"], ["role", "button", "href", "https://adodigital.imss.gob.mx/creditopalabra/", 1, "btn", "btn-sm", "btn-lighten-success", "waves-effect", "waves-light"], ["role", "button", "href", "tel:8006232323", 1, "btn", "btn-sm", "btn-lighten-success", "waves-effect", "waves-light"], [1, "fas", "fa-phone", "ml-1"], ["heading", "Video - Los alcances del plan de rescate econ\xF3mico en M\xE9xico por COVID-19"], ["videoId", "LqyBm4iLz58", "suggestedQuality", "highres", 3, "height", "width", "startSeconds", "endSeconds"], ["heading", "MI PA\xCDS"], ["heading", "Datos en M\xE9xico"], ["tooltip", "Unidades Monitoras de Enfermedad Respiratoria-viral", 1, "text-pink"], ["tooltip", "IMSS, ISSSTE, SEDENA, SEMAR, etc.)", 1, "text-pink"], ["role", "button", "href", "http://187.191.75.115/gobmx/salud/datos_abiertos/datos_abiertos_covid19.zip", 1, "btn", "btn-sm", "btn-lighten-success", "waves-effect", "waves-light", "mr-2", "ml-2"], ["role", "button", "href", "http://187.191.75.115/gobmx/salud/datos_abiertos/diccionario_datos_covid19.zip", 1, "btn", "btn-sm", "btn-lighten-success", "waves-effect", "waves-light", "mr-2", "ml-2"], ["heading", "Reporte Comunitario de Mobilidad en M\xE9xico"], ["role", "button", "href", "https://www.gstatic.com/covid19/mobility/2020-04-17_MX_Mobility_Report_en.pdf", 1, "btn", "btn-sm", "btn-lighten-success", "waves-effect", "waves-light", "mr-2", "ml-2"], ["heading", "Video - La ca\xEDda del precio del petr\xF3leo por COVID-19"], ["videoId", "Jg81_XLpLgY", "suggestedQuality", "highres", 3, "height", "width", "startSeconds", "endSeconds"], ["heading", "Video - Residuos hospitalarios efecto colateral del COVID-19"], ["videoId", "evTh8Alh3mE", "suggestedQuality", "highres", 3, "height", "width", "startSeconds", "endSeconds"], ["heading", "Video - Hospital covid-19 en Centro Citibanamex operar\xE1 a partir del 1 de Mayo: UNAM"], ["videoId", "CYeS8rWKMfw", "suggestedQuality", "highres", 3, "height", "width", "startSeconds", "endSeconds"], ["heading", "EL AMBIENTE"], ["heading", ""], ["heading", "LA CIENCIA"], ["heading", "Video - La COVID-19: \xBFqu\xE9 es y qu\xE9 debemos hacer?"], ["videoId", "RKdGA5e3b_g", "suggestedQuality", "highres", 3, "height", "width", "startSeconds", "endSeconds"], ["heading", "Inicia en M\xE9xico la Fase 3 de emergencia sanitaria por la COVID-19"], ["videoId", "Di-ylWsg0fc", "suggestedQuality", "highres", 3, "height", "width", "startSeconds", "endSeconds"], ["heading", "Video - Infecci\xF3n Respiratoria Aguda (IRA): COVID-19"], ["videoId", "CvYYSb3VBVU", "suggestedQuality", "highres", 3, "height", "width", "startSeconds", "endSeconds"], ["heading", "Video - COVID-19 - Consulta directa"], ["videoId", "EJ-4ZQeJtD4", "suggestedQuality", "highres", 3, "height", "width", "startSeconds", "endSeconds"], ["id", "slider-1-slide-1-layer-4", "href", "http://cdc.hispace.hicloud.com/000000uo", "target", "_blank", "rel", "noopener", "data-type", "button", "data-color", "#205b4d", "data-xy", "x:c;xo:190px,185px,185px,0;y:m;yo:170px,186px,165px,190px;", "data-text", "s:15;l:17,17,17,14;fw:800;a:center;", "data-dim", "w:155px,155px,155px,162px;h:46px;", "data-rsp_bd", "off", "data-padding", "t:12;r:12;b:12;l:12;", "data-border", "bow:2px,2px,2px,2px;", "data-frame_0", "y:50;", "data-frame_1", "st:3030;sp:1000;", "data-frame_999", "o:0;tp:600;e:nothing;st:w;sR:4470;", "data-frame_hover", "c:#205b4d;bor:0px,0px,0px,0px;bos:none;bow:2px,2px,2px,2px;oX:50;oY:50;sp:100ms;e:power0.in;", 1, "rs-layer", "rev-btn", 2, "z-index", "13", "background", "url('https://coronavirus.gob.mx/wp-content/uploads/2020/04/AG_icon_20200106.svg') no-repeat center center", "background-size", "contain", "font-family", "Montserrat", "cursor", "pointer", "outline", "none", "box-shadow", "none", "box-sizing", "border-box", "-moz-box-sizing", "border-box", "-webkit-box-sizing", "border-box"], ["id", "slider-1-slide-1-layer-6", "href", "https://apps.apple.com/mx/app/covid-19mx/id1505632889", "target", "_blank", "rel", "noopener", "data-type", "button", "data-color", "#205b4d", "data-xy", "x:c;xo:0,0,0,100px;y:m;yo:170px,185px,165px,122px;", "data-text", "s:15;l:17,17,17,14;fw:800;a:center;", "data-dim", "w:155px,155px,155px,162px;h:46px;", "data-rsp_bd", "off", "data-padding", "t:12;r:12;b:12;l:12;", "data-border", "bow:2px,2px,2px,2px;", "data-frame_0", "y:50;", "data-frame_1", "st:3030;sp:1000;", "data-frame_999", "o:0;tp:600;e:nothing;st:w;sR:4470;", "data-frame_hover", "c:#205b4d;bor:0px,0px,0px,0px;bos:none;bow:2px,2px,2px,2px;oX:50;oY:50;sp:100ms;e:power0.in;", 1, "rs-layer", "rev-btn", 2, "z-index", "12", "background", "url('https://coronavirus.gob.mx/wp-content/uploads/2020/04/Download_on_the_App_Store_Badge_ESMX_RGB_blk_100217.svg') no-repeat center center", "background-size", "contain", "font-family", "Montserrat", "cursor", "pointer", "outline", "none", "box-shadow", "none", "box-sizing", "border-box", "-moz-box-sizing", "border-box", "-webkit-box-sizing", "border-box"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-auto-name", 1, "modal", "fade", "d-block", 3, "config", "onHidden"], ["autoShownModal", "bs-modal"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "text-center", "pt-4"], ["class", "modal-step", 4, "ngIf"], ["class", "col-12 text-center", 4, "ngIf"], [1, "modal-step"], ["src", "assets/images/step-1.png", "width", "125"], [1, "text-white", "mt-3"], [1, "text-white"], ["src", "assets/images/step-2.png", "width", "125"], ["src", "assets/images/step-3.png", "width", "125"], ["src", "assets/images/step-4.png", "width", "125"], ["src", "assets/images/step-5.png", "width", "125"], [1, "col-12", "text-center"], [1, "btn", "btn-secondary", "waves-effect", "waves-light", "mb-4", 3, "click"], [1, "fa", "fa-arrow-right", "mr-1"], [1, "form-group"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "forDontShow", 1, "custom-control-input"], ["dontShow", ""], ["for", "forDontShow", 1, "custom-control-label"], [1, "btn", "btn-blue", "waves-effect", "waves-light", "mb-4", 3, "click"], [1, "fas", "fa-times-circle", "mr-1"], [3, "innerHtml"]],
      template: function AssistanceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AssistanceComponent_div_1_Template, 12, 9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "coronavirus-mx");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Este sitio reune informaci\xF3n sobre la pandemia por ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Coronavirus");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, ".");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Si tienes alg\xFAn s\xEDntoma: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Llama ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Chat con Susana distancia: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "tabset", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "tab", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "accordion", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "accordion-group", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Un virus es un ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "ente");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " muy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "peque\xF1o");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " que tiene s\xF3lo puede reproducirse dentro de la c\xE9lula de otro organismo vivo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Coronavirus es una clase de virus que posee puntas en forma de coronas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Los coronavirus que pueden hospedarse en c\xE9lulas de mam\xEDferos se les llama Beta-Coronavirus ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " En los humanos, existen algunos coronavirus (HCoV) estudiados desde 1960, todos causantes de enfermedades respiratorias: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "HCoV-229E");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "HCoV-OC43");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "HCoV-NL63");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "HCoV-HKU1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "SARS-CoV");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "MERS-CoV");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "SARS-CoV2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "accordion-group", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, AssistanceComponent_ng_template_66_Template, 2, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " El 31 de diciembre de 2019, se inform\xF3 de la existencia de 27 casos de neumon\xEDa at\xEDpica en la provincia de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Wuhan");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, " en Hubei, China; cuyos pacientes iniciaron sintomatolog\xEDa el 8 de diciembre de 2019, incluyendo 7 casos graves, con exposici\xF3n com\xFAn a un mercado de marisco, pescado y animales vivos en la ciudad de Wuhan. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, " El 7 de enero de 2020, se identific\xF3 el virus causante de esa infestaci\xF3n y lo llamaron ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "2019-nCoV");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, ". El 11 de febrero de 2020, la ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "span", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "OMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " cambia el nombre temporal de 2019-nCoV por el de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "span", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "SARS-CoV2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " y nombra a ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "COVID-19");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, " como la enfermedad asociada a este virus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "accordion-group", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, " Sigue las recomendaciones de higiene y sana distancia de tu localidad: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AssistanceComponent_Template_button_click_90_listener() {
            return ctx.showModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Prevenci\xF3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "tab", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "accordion", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "accordion-group", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "youtube-player", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "tab", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "accordion", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "accordion-group", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, " Si fuiste ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "DESPEDIDO");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, " o te mandaron a descansar sin gose de sueldo, las ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "LEYES");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, " te protegen. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, " PROFEDET ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "accordion-group", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, " Verifica si puedes acceder a este apoyo a empresas: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "RFC");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, " Si no fuiste acreedor al apoyo en el sitio oficial del IMSS, llama a al n\xFAmero (800) 623-2323 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "a", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Llama");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "accordion-group", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](124, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "youtube-player", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "tab", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "accordion", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "accordion-group", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](130, " Informaci\xF3n del Sistema de Vigilancia Epidemiol\xF3gica de Enfermedades Respiratoria Viral recopilada de las 475 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "span", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "USMER");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, " en todo el pa\xEDs de todo el ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "span", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "sector salud");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, ". ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, " Casos diarios por estado (.ZIP) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, " Diccionario de datos (.ZIP) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "accordion-group", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, " Reporte preparado por Google con base en los registros de localizaci\xF3n y tr\xE1fico de dispositivos con cuentas de Google activas. Este reporte incluye categor\xEDas de movilidad como visitas a farmacias, tiendas y supermercados, parques, lugar de trabajo, etc. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, " Reporte (.PDF) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "accordion-group", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "youtube-player", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "accordion-group", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, " La doctora Alethia V\xE1zquez Morillas, investigadora de la UAM, Unidad Azcapotzalco refiere a los residuos hospitalarios generados por la contingencia del COVID-19 como una fuerte presi\xF3n a las instituciones de salud debido a la capacidad de infraestructura y equipamiento. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "youtube-player", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "accordion-group", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](156, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](157, "youtube-player", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "tab", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "accordion", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "accordion-group", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "accordion-group", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "tab", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "accordion", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "accordion-group", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "youtube-player", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "accordion-group", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](170, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](171, "youtube-player", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "accordion-group", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](174, "youtube-player", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "accordion-group", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "youtube-player", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "a", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](179, "a", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isModalShown);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("justified", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isAnimated", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("popover", _r22)("outsideClick", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isAnimated", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isAnimated", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isAnimated", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isAnimated", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isAnimated", true);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsetComponent"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabDirective"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionComponent"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionPanelComponent"], ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipDirective"], ngx_bootstrap_popover__WEBPACK_IMPORTED_MODULE_8__["PopoverDirective"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_9__["YouTubePlayer"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalDirective"]],
      styles: [".main-title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RPQ1VNRU5UT1MvSkNNUC9SZXBvc2l0b3Jpby9iZWF2ZXJOZXQvY29yb25hdmlydXMtbXgvc3JjL2FwcC9wYWdlcy9hc3Npc3RhbmNlL2Fzc2lzdGFuY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Fzc2lzdGFuY2UvYXNzaXN0YW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGtCQUFBO0FDQ0QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hc3Npc3RhbmNlL2Fzc2lzdGFuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi10aXRsZSB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIubWFpbi10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInOutAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(600)])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AssistanceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-assistance',
          templateUrl: './assistance.component.html',
          styleUrls: ['./assistance.component.scss'],
          providers: [{
            provide: ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_4__["AccordionConfig"],
            useFactory: getAccordionConfig
          }, {
            provide: ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsetConfig"],
            useFactory: getTabsetConfig
          }],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeInOutAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(600)])])]
        }]
      }], function () {
        return [];
      }, {
        autoShownModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['autoShownModal', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/country/country.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/country/country.component.ts ***!
    \****************************************************/

  /*! exports provided: CountryComponent */

  /***/
  function srcAppPagesCountryCountryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryComponent", function () {
      return CountryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @amcharts/amcharts4/core */
    "./node_modules/@amcharts/amcharts4/core.js");
    /* harmony import */


    var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @amcharts/amcharts4/charts */
    "./node_modules/@amcharts/amcharts4/charts.js");
    /* harmony import */


    var _core_services_getdata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../core/services/getdata.service */
    "./src/app/core/services/getdata.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/countup/countup.component */
    "./src/app/shared/countup/countup.component.ts");

    function CountryComponent_h2_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/flags/", ctx_r13.countryCodes[ctx_r13.country.country].toLowerCase(), ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx_r13.country.country);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Estad\xEDsticas para ", ctx_r13.country.country, " ");
      }
    }

    function CountryComponent_h4_99_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\nDistribuci\xF3n de casos en ", ctx_r14.country.country, "\n");
      }
    }

    function CountryComponent_span_117_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r15.totalRecoveries / ctx_r15.finishedCases * 100, ".1-2"), "%");
      }
    }

    function CountryComponent_ng_template_118_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "N/A");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CountryComponent_span_128_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r18.totalDeaths / ctx_r18.finishedCases * 100, ".1-2"), "%");
      }
    }

    function CountryComponent_ng_template_129_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "N/A");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var CountryComponent = /*#__PURE__*/function () {
      function CountryComponent(route, _getDataService, zone) {
        _classCallCheck(this, CountryComponent);

        this.route = route;
        this._getDataService = _getDataService;
        this.zone = zone;
        this.isLoading = true;
        this.totalCases = 0;
        this.totalDeaths = 0;
        this.totalCritical = 0;
        this.todayCases = 0;
        this.todayDeaths = 0;
        this.activeCases = 0;
        this.casesPer1M = 0;
        this.finishedCases = 0;
        this.countryCodes = {
          'Afghanistan': 'AF',
          'Aland Islands': 'AX',
          'Albania': 'AL',
          'Algeria': 'DZ',
          'American Samoa': 'AS',
          'Andorra': 'AD',
          'Angola': 'AO',
          'Anguilla': 'AI',
          'Antarctica': 'AQ',
          'Antigua And Barbuda': 'AG',
          'Argentina': 'AR',
          'Armenia': 'AM',
          'Aruba': 'AW',
          'Australia': 'AU',
          'Austria': 'AT',
          'Azerbaijan': 'AZ',
          'Bahamas': 'BS',
          'Bahrain': 'BH',
          'Bangladesh': 'BD',
          'Barbados': 'BB',
          'Belarus': 'BY',
          'Belgium': 'BE',
          'Belize': 'BZ',
          'Benin': 'BJ',
          'Bermuda': 'BM',
          'Bhutan': 'BT',
          'Bolivia': 'BO',
          'Bosnia and Herzegovina': 'BA',
          'Botswana': 'BW',
          'Bouvet Island': 'BV',
          'Brazil': 'BR',
          'British Indian Ocean Territory': 'IO',
          'Brunei': 'BN',
          'Bulgaria': 'BG',
          'Burkina Faso': 'BF',
          'Burundi': 'BI',
          'Cambodia': 'KH',
          'Cameroon': 'CM',
          'Canada': 'CA',
          'Cape Verde': 'CV',
          'Cayman Islands': 'KY',
          'Central African Republic': 'CF',
          'Chad': 'TD',
          'Chile': 'CL',
          'China': 'CN',
          'Christmas Island': 'CX',
          'Cocos (Keeling) Islands': 'CC',
          'Colombia': 'CO',
          'Comoros': 'KM',
          'Congo': 'CG',
          'DRC': 'CD',
          'Cook Islands': 'CK',
          'Costa Rica': 'CR',
          'Ivory Coast': 'CI',
          'Croatia': 'HR',
          'Cuba': 'CU',
          'Cyprus': 'CY',
          'Czechia': 'CZ',
          'Denmark': 'DK',
          'Djibouti': 'DJ',
          'Dominica': 'DM',
          'Dominican Republic': 'DO',
          'Ecuador': 'EC',
          'Egypt': 'EG',
          'El Salvador': 'SV',
          'Equatorial Guinea': 'GQ',
          'Eritrea': 'ER',
          'Estonia': 'EE',
          'Ethiopia': 'ET',
          'Falkland Islands': 'FK',
          'Faeroe Islands': 'FO',
          'Fiji': 'FJ',
          'Finland': 'FI',
          'France': 'FR',
          'French Guiana': 'GF',
          'French Polynesia': 'PF',
          'French Southern Territories': 'TF',
          'Gabon': 'GA',
          'Gambia': 'GM',
          'Georgia': 'GE',
          'Germany': 'DE',
          'Ghana': 'GH',
          'Gibraltar': 'GI',
          'Greece': 'GR',
          'Greenland': 'GL',
          'Grenada': 'GD',
          'Guadeloupe': 'GP',
          'Guam': 'GU',
          'Guatemala': 'GT',
          'Guernsey': 'GG',
          'Guinea': 'GN',
          'Guinea-Bissau': 'GW',
          'Guyana': 'GY',
          'Haiti': 'HT',
          'Heard Island & Mcdonald Islands': 'HM',
          'Holy See (Vatican City State)': 'VA',
          'Honduras': 'HN',
          'Hong Kong': 'HK',
          'Hungary': 'HU',
          'Iceland': 'IS',
          'India': 'IN',
          'Indonesia': 'ID',
          'Iran': 'IR',
          'Iraq': 'IQ',
          'Ireland': 'IE',
          'Isle Of Man': 'IM',
          'Israel': 'IL',
          'Italy': 'IT',
          'Jamaica': 'JM',
          'Japan': 'JP',
          'Channel Islands': 'JE',
          'Jordan': 'JO',
          'Kazakhstan': 'KZ',
          'Kenya': 'KE',
          'Kiribati': 'KI',
          'Korea': 'KR',
          'S. Korea': 'KR',
          'Kuwait': 'KW',
          'Kyrgyzstan': 'KG',
          'Lao People\'s Democratic Republic': 'LA',
          'Latvia': 'LV',
          'Lebanon': 'LB',
          'Lesotho': 'LS',
          'Liberia': 'LR',
          'Libyan Arab Jamahiriya': 'LY',
          'Liechtenstein': 'LI',
          'Lithuania': 'LT',
          'Luxembourg': 'LU',
          'Macao': 'MO',
          'Macedonia': 'MK',
          'Madagascar': 'MG',
          'Malawi': 'MW',
          'Malaysia': 'MY',
          'Maldives': 'MV',
          'Mali': 'ML',
          'Malta': 'MT',
          'Marshall Islands': 'MH',
          'Martinique': 'MQ',
          'Mauritania': 'MR',
          'Mauritius': 'MU',
          'Mayotte': 'YT',
          'Mexico': 'MX',
          'Micronesia, Federated States Of': 'FM',
          'Moldova': 'MD',
          'Monaco': 'MC',
          'Mongolia': 'MN',
          'Montenegro': 'ME',
          'Montserrat': 'MS',
          'Morocco': 'MA',
          'Mozambique': 'MZ',
          'Myanmar': 'MM',
          'Namibia': 'NA',
          'Nauru': 'NR',
          'Nepal': 'NP',
          'Netherlands': 'NL',
          'Netherlands Antilles': 'AN',
          'New Caledonia': 'NC',
          'New Zealand': 'NZ',
          'Nicaragua': 'NI',
          'Niger': 'NE',
          'Nigeria': 'NG',
          'Niue': 'NU',
          'Norfolk Island': 'NF',
          'North Macedonia': 'MP',
          'Norway': 'NO',
          'Oman': 'OM',
          'Pakistan': 'PK',
          'Palau': 'PW',
          'Palestine': 'PS',
          'Panama': 'PA',
          'Papua New Guinea': 'PG',
          'Paraguay': 'PY',
          'Peru': 'PE',
          'Philippines': 'PH',
          'Pitcairn': 'PN',
          'Poland': 'PL',
          'Portugal': 'PT',
          'Puerto Rico': 'PR',
          'Qatar': 'QA',
          'Réunion': 'RE',
          'Romania': 'RO',
          'Russia': 'RU',
          'Rwanda': 'RW',
          'Saint Barthelemy': 'BL',
          'St. Barth': 'BL',
          'Saint Helena': 'SH',
          'Saint Kitts And Nevis': 'KN',
          'Saint Lucia': 'LC',
          'Saint Martin': 'MF',
          'Saint Pierre And Miquelon': 'PM',
          'St. Vincent Grenadines': 'VC',
          'Samoa': 'WS',
          'San Marino': 'SM',
          'Sao Tome And Principe': 'ST',
          'Saudi Arabia': 'SA',
          'Senegal': 'SN',
          'Serbia': 'RS',
          'Seychelles': 'SC',
          'Sierra Leone': 'SL',
          'Singapore': 'SG',
          'Slovakia': 'SK',
          'Slovenia': 'SI',
          'Solomon Islands': 'SB',
          'Somalia': 'SO',
          'South Africa': 'ZA',
          'South Georgia And Sandwich Isl.': 'GS',
          'Spain': 'ES',
          'Sri Lanka': 'LK',
          'Sudan': 'SD',
          'Suriname': 'SR',
          'Svalbard And Jan Mayen': 'SJ',
          'Swaziland': 'SZ',
          'Sweden': 'SE',
          'Switzerland': 'CH',
          'Syrian Arab Republic': 'SY',
          'Taiwan': 'TW',
          'Tajikistan': 'TJ',
          'Tanzania': 'TZ',
          'Thailand': 'TH',
          'Timor-Leste': 'TL',
          'Togo': 'TG',
          'Tokelau': 'TK',
          'Tonga': 'TO',
          'Trinidad and Tobago': 'TT',
          'Tunisia': 'TN',
          'Turkey': 'TR',
          'Turkmenistan': 'TM',
          'Turks And Caicos Islands': 'TC',
          'Tuvalu': 'TV',
          'Uganda': 'UG',
          'Ukraine': 'UA',
          'UAE': 'AE',
          'UK': 'GB',
          'USA': 'US',
          'United States Outlying Islands': 'UM',
          'Uruguay': 'UY',
          'Uzbekistan': 'UZ',
          'Vanuatu': 'VU',
          'Venezuela': 'VE',
          'Vietnam': 'VN',
          'Virgin Islands, British': 'VG',
          'U.S. Virgin Islands': 'VI',
          'Wallis And Futuna': 'WF',
          'Western Sahara': 'EH',
          'Yemen': 'YE',
          'Zambia': 'ZM',
          'Zimbabwe': 'ZW',
          'Curaçao': 'CW'
        };
      }

      _createClass(CountryComponent, [{
        key: "loadPieChart",
        value: function loadPieChart() {
          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("pieChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["PieChart"]);

          chart.data.push({
            type: 'Recoveries',
            number: this.totalRecoveries,
            "color": _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#10c469")
          });
          chart.data.push({
            type: 'Deaths',
            number: this.totalDeaths,
            "color": _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#ff5b5b")
          });
          chart.data.push({
            type: 'Critical',
            number: this.totalCritical,
            "color": _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#f9c851")
          });
          var pieSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["PieSeries"]());
          pieSeries.dataFields.value = "number";
          pieSeries.dataFields.category = "type";
          pieSeries.labels.template.disabled = true;
          pieSeries.ticks.template.disabled = true;
          pieSeries.slices.template.propertyFields.fill = "color";
          pieSeries.slices.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#313a46");
          pieSeries.slices.template.strokeWidth = 1;
          pieSeries.slices.template.strokeOpacity = 1;
          this.pieChart = chart;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this2 = this;

          this.zone.runOutsideAngular(function () {
            if (_this2.pieChart) {
              _this2.pieChart.dispose();
            }

            if (_this2.lineChart) {
              _this2.lineChart.dispose();
            }

            if (_this2.radarChart) {
              _this2.radarChart.dispose();
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          var nameTimeline = this.route.snapshot.paramMap.get("name").toLowerCase();

          if (nameTimeline == "usa") {
            nameTimeline = "us";
          } else if (nameTimeline == "taiwan") {
            nameTimeline = "taiwan*";
          } else if (nameTimeline == "isle of man") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "aruba") {
            nameTimeline = "netherlands";
          } else if (nameTimeline == "sint maarten") {
            nameTimeline = "netherlands";
          } else if (nameTimeline == "st. vincent grenadines") {
            nameTimeline = "saint vincent and the grenadines";
          } else if (nameTimeline == "timor-leste") {
            nameTimeline = "East Timor";
          } else if (nameTimeline == "montserrat") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "gambia") {
            nameTimeline = "gambia, the";
          } else if (nameTimeline == "cayman islands") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "bermuda") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "greenland") {
            nameTimeline = "denmark";
          } else if (nameTimeline == "st. barth") {
            nameTimeline = "saint barthelemy";
          } else if (nameTimeline == "congo") {
            nameTimeline = "congo (brazzaville)";
          } else if (nameTimeline == "saint martin") {
            nameTimeline = "france";
          } else if (nameTimeline == "gibraltar") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "mayotte") {
            nameTimeline = "france";
          } else if (nameTimeline == "bahamas") {
            nameTimeline = "bahamas, the";
          } else if (nameTimeline == "french guiana") {
            nameTimeline = "france";
          } else if (nameTimeline == "u.s. virgin islands") {
            nameTimeline = "us";
          } else if (nameTimeline == "curaçao") {
            nameTimeline = "netherlands";
          } else if (nameTimeline == "puerto rico") {
            nameTimeline = "us";
          } else if (nameTimeline == "french polynesia") {
            nameTimeline = "france";
          } else if (nameTimeline == "ivory coast") {
            nameTimeline = "Cote d'Ivoire";
          } else if (nameTimeline == "macao") {
            nameTimeline = "china";
          } else if (nameTimeline == "drc") {
            nameTimeline = "congo (kinshasa)";
          } else if (nameTimeline == "channel islands") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "réunion") {
            nameTimeline = "france";
          } else if (nameTimeline == "guadeloupe") {
            nameTimeline = "france";
          } else if (nameTimeline == "faeroe islands") {
            nameTimeline = "Denmark";
          } else if (nameTimeline == "uae") {
            nameTimeline = "United Arab Emirates";
          } else if (nameTimeline == "diamond princess") {
            nameTimeline = "australia";
          } else if (nameTimeline == "hong kong") {
            nameTimeline = "china";
          } else if (nameTimeline == "uk") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "car") {
            nameTimeline = "central african republic";
          }

          this.zone.runOutsideAngular(function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])(_this3._getDataService.getCountry(_this3.route.snapshot.paramMap.get("name")), _this3._getDataService.getTimelineCountry(nameTimeline)).subscribe(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  getAllData = _ref2[0],
                  getTimelineData = _ref2[1];

              _this3.isLoading = false;
              _this3.country = getAllData;
              _this3.totalCases = getAllData["cases"];
              _this3.totalDeaths = getAllData["deaths"];
              _this3.totalRecoveries = getAllData["recovered"];
              _this3.totalCritical = getAllData["critical"];
              _this3.todayCases = getAllData["todayCases"];
              _this3.todayDeaths = getAllData["todayDeaths"];
              _this3.activeCases = getAllData["active"];
              _this3.casesPer1M = getAllData["casesPerOneMillion"];
              _this3.finishedCases = _this3.totalDeaths + _this3.totalRecoveries;
              _this3.timeLine = getTimelineData;

              _this3.loadPieChart();

              _this3.loadLineChart();

              _this3.loadRadar();
            });
          });
        }
      }, {
        key: "loadLineChart",
        value: function loadLineChart() {
          var _this4 = this;

          var caseData = [];

          if (!this.timeLine.multiple) {
            caseData = this.timeLine.data.timeline;
          } else {
            var data = {};
            this.timeLine.data.forEach(function (element) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _this5 = this;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        element.timeline.forEach(function (o) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    if (!data.hasOwnProperty(o.date)) {
                                      data[o.date] = {};
                                      data[o.date]["cases"] = 0;
                                      data[o.date]["deaths"] = 0;
                                      data[o.date]["recovered"] = 0;
                                    }

                                    data[o.date].cases += parseInt(o.cases);
                                    data[o.date].deaths += parseInt(o.deaths);
                                    data[o.date].recovered += parseInt(o.recovered);

                                  case 4:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2);
                          }));
                        });

                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));
            });
            Object.keys(data).forEach(function (key) {
              caseData.push({
                date: new Date(key),
                cases: data[key].cases,
                recovered: data[key].recovered,
                deaths: data[key].deaths
              });
            });
          }

          caseData.push({
            date: new Date().getTime(),
            cases: this.totalCases,
            recovered: this.totalRecoveries,
            deaths: this.totalDeaths
          });

          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("lineChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYChart"]);

          chart.numberFormatter.numberFormat = "#a";
          chart.numberFormatter.bigNumberPrefixes = [{
            "number": 1e+3,
            "suffix": "K"
          }, {
            "number": 1e+6,
            "suffix": "M"
          }, {
            "number": 1e+9,
            "suffix": "B"
          }]; // Create axes

          var dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["DateAxis"]());
          dateAxis.renderer.minGridDistance = 50;
          var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
          valueAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#adb5bd");
          dateAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#adb5bd");
          chart = this.createSeriesLine(chart, "#21AFDD", "cases");
          chart = this.createSeriesLine(chart, "#10c469", "recovered");
          chart = this.createSeriesLine(chart, "#ff5b5b", "deaths");
          chart.data = caseData;
          chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["Legend"]();
          chart.legend.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#adb5bd");
          chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYCursor"]();
          this.lineChart = chart;
        }
      }, {
        key: "loadRadar",
        value: function loadRadar() {
          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("radarChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["RadarChart"]); // Add data


          chart.data = [{
            "category": "Critical",
            "value": this.totalCritical / this.activeCases * 100,
            "full": 100
          }, {
            "category": "Death",
            "value": this.totalDeaths / this.finishedCases * 100,
            "full": 100
          }, {
            "category": "Recovered",
            "value": this.totalRecoveries / this.finishedCases * 100,
            "full": 100
          }, {
            "category": "Active",
            "value": 100 - this.totalCritical / this.activeCases * 100,
            "full": 100
          }]; // Make chart not full circle

          chart.startAngle = -90;
          chart.endAngle = 180;
          chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["percent"](20); // Set number format

          chart.numberFormatter.numberFormat = "#.#'%'"; // Create axes

          var categoryAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["CategoryAxis"]());
          categoryAxis.dataFields.category = "category";
          categoryAxis.renderer.grid.template.location = 0;
          categoryAxis.renderer.grid.template.strokeOpacity = 0;
          categoryAxis.renderer.labels.template.horizontalCenter = "right";
          categoryAxis.renderer.labels.template.adapter.add("fill", function (fill, target) {
            if (target.dataItem.index == 0) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#f9c851");
            }

            if (target.dataItem.index == 1) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#ff5b5b");
            }

            if (target.dataItem.index == 2) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#10c469");
            }

            return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#21AFDD");
          });
          categoryAxis.renderer.minGridDistance = 10;
          var valueAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
          valueAxis.renderer.grid.template.strokeOpacity = 0;
          valueAxis.min = 0;
          valueAxis.max = 100;
          valueAxis.strictMinMax = true;
          valueAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#adb5bd"); // Create series

          var series1 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["RadarColumnSeries"]());
          series1.dataFields.valueX = "full";
          series1.dataFields.categoryY = "category";
          series1.clustered = false;
          series1.columns.template.fill = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["InterfaceColorSet"]().getFor("alternativeBackground");
          series1.columns.template.fillOpacity = 0.08;
          series1.columns.template["cornerRadiusTopLeft"] = 20;
          series1.columns.template.strokeWidth = 0;
          series1.columns.template.radarColumn.cornerRadius = 20;
          var series2 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["RadarColumnSeries"]());
          series2.dataFields.valueX = "value";
          series2.dataFields.categoryY = "category";
          series2.clustered = false;
          series2.columns.template.strokeWidth = 0;
          series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
          series2.columns.template.radarColumn.cornerRadius = 20;
          series2.columns.template.adapter.add("fill", function (fill, target) {
            //return chart.colors.getIndex(target.dataItem.index);
            if (target.dataItem.index == 0) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#f9c851");
            }

            if (target.dataItem.index == 1) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#ff5b5b");
            }

            if (target.dataItem.index == 2) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#10c469");
            }

            return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#21AFDD");
          }); // Add cursor

          chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["RadarCursor"]();
          chart.cursor.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#282e38");
          chart.tooltip.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#282e38");
          this.radarChart = chart;
        }
      }, {
        key: "createSeriesLine",
        value: function createSeriesLine(chart, color, type) {
          var name = type.charAt(0).toUpperCase() + type.slice(1);
          var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["LineSeries"]());
          series.dataFields.valueY = type;
          series.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"](color);
          series.dataFields.dateX = "date";
          series.strokeWidth = 2;
          series.minBulletDistance = 10;
          series.tooltipText = "{valueY} " + name;
          series.tooltip.pointerOrientation = "vertical";
          series.tooltip.background.cornerRadius = 20;
          series.tooltip.background.fillOpacity = 0.5;
          series.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"](color);
          series.legendSettings.labelText = name;
          series.tooltip.autoTextColor = false;
          series.tooltip.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#282e38");
          return chart;
        }
      }]);

      return CountryComponent;
    }();

    CountryComponent.ɵfac = function CountryComponent_Factory(t) {
      return new (t || CountryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_getdata_service__WEBPACK_IMPORTED_MODULE_5__["GetdataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    CountryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CountryComponent,
      selectors: [["app-country"]],
      decls: 174,
      vars: 90,
      consts: [[1, "container-fluid"], ["class", "text-center mt-3 mb-3", 4, "ngIf"], [1, "row"], [1, "col-xl-3", "col-md-6", "col-6"], [1, "card-box"], [1, "header-title", "m-0", "text-md-left", "text-center"], [1, "topBoxes"], [1, "fa-3x", "text-center"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2"], [1, "topBoxesDetails", "text-md-right", "text-center"], [1, "badge", "badge-blue", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "mdi", "mdi-trending-up"], [1, "font-weight-normal"], [1, "text-muted"], [1, "progress", "progress-bar-alt-blue", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-blue", 2, "width", "100%"], [1, "badge", "badge-danger", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "progress", "progress-bar-alt-danger", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "100%"], [1, "badge", "badge-success", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "progress", "progress-bar-alt-success", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "100%"], [1, "badge", "badge-warning", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "progress", "progress-bar-alt-warning", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "100%"], [1, "col-xl-4"], [1, "header-title", "mb-3"], [1, "inbox-widget"], ["id", "radarChart", 2, "width", "100%", "height", "400px"], [1, "col-xl-8"], [1, "header-title", "mt-0", "mb-3", "mt-md-0"], [1, "table-responsive"], ["id", "lineChart", 2, "width", "100%", "height", "400px", "overflow", "hidden"], ["class", "header-title mb-3", 4, "ngIf"], ["id", "pieChart", 2, "width", "100%", "height", "300px"], [1, "col-xl-5"], [1, "header-title", "mt-0", "mb-3"], [1, "col-12"], [1, "col-xl-6", "col-md-6"], [1, "card-box", "widget-user", "bg-d"], [1, "text-center"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-blue"], [1, "font-weight-normal", "text-success"], [4, "ngIf", "ngIfElse"], ["naRecovery", ""], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-danger"], [1, "font-weight-normal", "text-danger"], ["naDeath", ""], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-warning"], [1, "font-weight-normal", "text-warning"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-info"], [1, "font-weight-normal", "text-info"], [1, "col-xl-3"], [1, "card-box", "text-center"], ["target", "_blank", "href", "https://www.facebook.com/sharer/sharer.php?u=https://coronavirus-mx.web.app", 1, "btn", "btn-icon", "waves-effect", "btn-blue", "mr-1"], [1, "fab", "fa-facebook"], ["target", "_blank", "href", "https://twitter.com/intent/tweet?url=https://coronavirus-mx.web.app&hashtags=Covid_19,CoronavirusPandemic,coronastatistics,corona&text=Stay%20Updated%20with%20Live%20Coronavirus%20Tracker", 1, "btn", "btn-icon", "waves-effect", "btn-blue", "mr-1"], [1, "fab", "fa-twitter"], ["target", "_blank", "href", "https://vk.com/share.php?url=https://coronavirus-mx.web.app", 1, "btn", "btn-icon", "waves-effect", "btn-blue", "mr-1"], [1, "fab", "fa-vk"], ["href", "whatsapp://send?text=Datos en tiempo real sobre la pandemia https://coronavirus-mx.web.app", "data-action", "share/whatsapp/share", 1, "btn", "btn-icon", "waves-effect", "btn-blue"], [1, "fab", "fa-whatsapp"], ["href", "https://paypal.me/beaverNet", 1, "btn", "btn-", "waves-effect", "btn-danger", "d-block", "mt-2", "mx-auto"], [1, "fas", "fa-coffee"], [1, "text-center", "mt-3", "mb-3"], ["width", "100px", 3, "src", "alt"]],
      template: function CountryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CountryComponent_h2_1_Template, 3, 3, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Infectados");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Muertos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Recuperados");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](49, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](56, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Graves");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](69, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](73, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](76, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "h4", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Distribuci\xF3n de los \xEDndices:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "h4", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Historial infeccioso");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, CountryComponent_h4_99_Template, 2, 1, "h4", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "h4", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "\xCDndice de contagio");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "h2", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](117, CountryComponent_span_117_Template, 3, 4, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](118, CountryComponent_ng_template_118_Template, 2, 0, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "\xCDndice de recuperaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "h2", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](128, CountryComponent_span_128_Template, 3, 4, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](129, CountryComponent_ng_template_129_Template, 2, 0, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "\xCDndice de mortalidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "h2", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](140, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "\xCDndices de casos graves");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "i", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "h2", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](150, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Casos leves");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Comparte con tus amigos, familiares y colegas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Mantenlos informados de los datos en tiempo real sobre la evoluci\xF3n del COVID-19");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "i", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](162, "i", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "i", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "a", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "i", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "a", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](168, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, " Patroc\xEDname ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Datos COVID-19");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "app-countup");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](119);

          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](130);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 63, ctx.totalCases), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.todayCases, " hoy");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](30, 65, ctx.totalDeaths / ctx.finishedCases * 100, ".1-2"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 68, ctx.totalDeaths), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.todayDeaths, " hoy");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](49, 70, ctx.totalRecoveries / ctx.finishedCases * 100, ".1-2"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 73, ctx.totalRecoveries), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](56, 75, ctx.activeCases), " restantes");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](69, 77, ctx.totalCritical / ctx.activeCases * 100, ".1-2"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](73, 80, ctx.totalCritical), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](76, 82, ctx.casesPer1M), " por mill\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.finishedCases > 0)("ngIfElse", _r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.finishedCases > 0)("ngIfElse", _r19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](140, 84, ctx.totalCritical / ctx.activeCases * 100, ".1-2"), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](150, 87, 100 - ctx.totalCritical / ctx.activeCases * 100, ".1-2"), "%");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_8__["CountupComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]],
      styles: [".bg-d[_ngcontent-%COMP%] {\n  background-color: #282d37;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RPQ1VNRU5UT1MvSkNNUC9SZXBvc2l0b3Jpby9iZWF2ZXJOZXQvY29yb25hdmlydXMtbXgvc3JjL2FwcC9wYWdlcy9jb3VudHJ5L2NvdW50cnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvdW50cnkvY291bnRyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb3VudHJ5L2NvdW50cnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmQzNztcbn0iLCIuYmctZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODJkMzc7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CountryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-country',
          templateUrl: './country.component.html',
          styleUrls: ['./country.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _core_services_getdata_service__WEBPACK_IMPORTED_MODULE_5__["GetdataService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @amcharts/amcharts4/core */
    "./node_modules/@amcharts/amcharts4/core.js");
    /* harmony import */


    var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @amcharts/amcharts4/charts */
    "./node_modules/@amcharts/amcharts4/charts.js");
    /* harmony import */


    var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @amcharts/amcharts4/themes/animated */
    "./node_modules/@amcharts/amcharts4/themes/animated.js");
    /* harmony import */


    var _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @amcharts/amcharts4/maps */
    "./node_modules/@amcharts/amcharts4/maps.js");
    /* harmony import */


    var _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @amcharts/amcharts4-geodata/worldLow */
    "./node_modules/@amcharts/amcharts4-geodata/worldLow.js");
    /* harmony import */


    var _core_services_getdata_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../core/services/getdata.service */
    "./src/app/core/services/getdata.service.ts");
    /* harmony import */


    var fuse_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! fuse.js */
    "./node_modules/fuse.js/dist/fuse.js");
    /* harmony import */


    var fuse_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-bootstrap/tooltip */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm2015/ngx-bootstrap-tooltip.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../shared/countup/countup.component */
    "./src/app/shared/countup/countup.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function DashboardComponent_div_117_img_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 107);
      }

      if (rf & 2) {
        var country_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/flags/", ctx_r7.countryCodes[country_r6.country].toLowerCase(), ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", country_r6.country);
      }
    }

    function DashboardComponent_div_117_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 108);
      }

      if (rf & 2) {
        var country_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", country_r6.country);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/country", a1];
    };

    function DashboardComponent_div_117_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DashboardComponent_div_117_img_3_Template, 1, 2, "img", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DashboardComponent_div_117_ng_template_4_Template, 1, 1, "ng-template", null, 100, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " & ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var country_r6 = ctx.$implicit;

        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, country_r6.country.toLowerCase()));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.countryCodes[country_r6.country])("ngIfElse", _r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](country_r6.country);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", country_r6.cases, " Casos");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", country_r6.deaths, " Muertos");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", country_r6.todayCases, " Casos");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", country_r6.todayDeaths, " Muertos");
      }
    }

    function DashboardComponent_h2_219_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx_r5.isLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.fuse.list.length, "");
      }
    } //am4core.useTheme(am4themes_dataviz);


    _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__["default"]);

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(zone, _getDataService) {
        _classCallCheck(this, DashboardComponent);

        this.zone = zone;
        this._getDataService = _getDataService;
        this.caseData = [];
        this.recoveriesData = [];
        this.deathData = [];
        this.isLoading = true;
        this.isLoadingMap = true;
        this.isLoadingCountries = true;
        this.sortType = "todayCases";
        this.countryCodes = {
          'Afghanistan': 'AF',
          'Aland Islands': 'AX',
          'Albania': 'AL',
          'Algeria': 'DZ',
          'American Samoa': 'AS',
          'Andorra': 'AD',
          'Angola': 'AO',
          'Anguilla': 'AI',
          'Antarctica': 'AQ',
          'Antigua And Barbuda': 'AG',
          'Argentina': 'AR',
          'Armenia': 'AM',
          'Aruba': 'AW',
          'Australia': 'AU',
          'Austria': 'AT',
          'Azerbaijan': 'AZ',
          'Bahamas': 'BS',
          'Bahrain': 'BH',
          'Bangladesh': 'BD',
          'Barbados': 'BB',
          'Belarus': 'BY',
          'Belgium': 'BE',
          'Belize': 'BZ',
          'Benin': 'BJ',
          'Bermuda': 'BM',
          'Bhutan': 'BT',
          'Bolivia': 'BO',
          'Bosnia and Herzegovina': 'BA',
          'Botswana': 'BW',
          'Bouvet Island': 'BV',
          'Brazil': 'BR',
          'British Indian Ocean Territory': 'IO',
          'Brunei': 'BN',
          'Bulgaria': 'BG',
          'Burkina Faso': 'BF',
          'Burundi': 'BI',
          'Cambodia': 'KH',
          'Cameroon': 'CM',
          'Canada': 'CA',
          'Cape Verde': 'CV',
          'Cayman Islands': 'KY',
          'Central African Republic': 'CF',
          'Chad': 'TD',
          'Chile': 'CL',
          'China': 'CN',
          'Christmas Island': 'CX',
          'Cocos (Keeling) Islands': 'CC',
          'Colombia': 'CO',
          'Comoros': 'KM',
          'Congo': 'CG',
          'DRC': 'CD',
          'Cook Islands': 'CK',
          'Costa Rica': 'CR',
          'Ivory Coast': 'CI',
          'Croatia': 'HR',
          'Cuba': 'CU',
          'Cyprus': 'CY',
          'Czechia': 'CZ',
          'Denmark': 'DK',
          'Djibouti': 'DJ',
          'Dominica': 'DM',
          'Dominican Republic': 'DO',
          'Ecuador': 'EC',
          'Egypt': 'EG',
          'El Salvador': 'SV',
          'Equatorial Guinea': 'GQ',
          'Eritrea': 'ER',
          'Estonia': 'EE',
          'Ethiopia': 'ET',
          'Falkland Islands': 'FK',
          'Faeroe Islands': 'FO',
          'Fiji': 'FJ',
          'Finland': 'FI',
          'France': 'FR',
          'French Guiana': 'GF',
          'French Polynesia': 'PF',
          'French Southern Territories': 'TF',
          'Gabon': 'GA',
          'Gambia': 'GM',
          'Georgia': 'GE',
          'Germany': 'DE',
          'Ghana': 'GH',
          'Gibraltar': 'GI',
          'Greece': 'GR',
          'Greenland': 'GL',
          'Grenada': 'GD',
          'Guadeloupe': 'GP',
          'Guam': 'GU',
          'Guatemala': 'GT',
          'Guernsey': 'GG',
          'Guinea': 'GN',
          'Guinea-Bissau': 'GW',
          'Guyana': 'GY',
          'Haiti': 'HT',
          'Heard Island & Mcdonald Islands': 'HM',
          'Holy See (Vatican City State)': 'VA',
          'Honduras': 'HN',
          'Hong Kong': 'HK',
          'Hungary': 'HU',
          'Iceland': 'IS',
          'India': 'IN',
          'Indonesia': 'ID',
          'Iran': 'IR',
          'Iraq': 'IQ',
          'Ireland': 'IE',
          'Isle Of Man': 'IM',
          'Israel': 'IL',
          'Italy': 'IT',
          'Jamaica': 'JM',
          'Japan': 'JP',
          'Channel Islands': 'JE',
          'Jordan': 'JO',
          'Kazakhstan': 'KZ',
          'Kenya': 'KE',
          'Kiribati': 'KI',
          'Korea': 'KR',
          'S. Korea': 'KR',
          'Kuwait': 'KW',
          'Kyrgyzstan': 'KG',
          'Lao People\'s Democratic Republic': 'LA',
          'Latvia': 'LV',
          'Lebanon': 'LB',
          'Lesotho': 'LS',
          'Liberia': 'LR',
          'Libyan Arab Jamahiriya': 'LY',
          'Liechtenstein': 'LI',
          'Lithuania': 'LT',
          'Luxembourg': 'LU',
          'Macao': 'MO',
          'Macedonia': 'MK',
          'Madagascar': 'MG',
          'Malawi': 'MW',
          'Malaysia': 'MY',
          'Maldives': 'MV',
          'Mali': 'ML',
          'Malta': 'MT',
          'Marshall Islands': 'MH',
          'Martinique': 'MQ',
          'Mauritania': 'MR',
          'Mauritius': 'MU',
          'Mayotte': 'YT',
          'Mexico': 'MX',
          'Micronesia, Federated States Of': 'FM',
          'Moldova': 'MD',
          'Monaco': 'MC',
          'Mongolia': 'MN',
          'Montenegro': 'ME',
          'Montserrat': 'MS',
          'Morocco': 'MA',
          'Mozambique': 'MZ',
          'Myanmar': 'MM',
          'Namibia': 'NA',
          'Nauru': 'NR',
          'Nepal': 'NP',
          'Netherlands': 'NL',
          'Netherlands Antilles': 'AN',
          'New Caledonia': 'NC',
          'New Zealand': 'NZ',
          'Nicaragua': 'NI',
          'Niger': 'NE',
          'Nigeria': 'NG',
          'Niue': 'NU',
          'Norfolk Island': 'NF',
          'North Macedonia': 'MP',
          'Norway': 'NO',
          'Oman': 'OM',
          'Pakistan': 'PK',
          'Palau': 'PW',
          'Palestine': 'PS',
          'Panama': 'PA',
          'Papua New Guinea': 'PG',
          'Paraguay': 'PY',
          'Peru': 'PE',
          'Philippines': 'PH',
          'Pitcairn': 'PN',
          'Poland': 'PL',
          'Portugal': 'PT',
          'Puerto Rico': 'PR',
          'Qatar': 'QA',
          'Réunion': 'RE',
          'Romania': 'RO',
          'Russia': 'RU',
          'Rwanda': 'RW',
          'Saint Barthelemy': 'BL',
          'St. Barth': 'BL',
          'Saint Helena': 'SH',
          'Saint Kitts And Nevis': 'KN',
          'Saint Lucia': 'LC',
          'Saint Martin': 'MF',
          'Saint Pierre And Miquelon': 'PM',
          'St. Vincent Grenadines': 'VC',
          'Samoa': 'WS',
          'San Marino': 'SM',
          'Sao Tome And Principe': 'ST',
          'Saudi Arabia': 'SA',
          'Senegal': 'SN',
          'Serbia': 'RS',
          'Seychelles': 'SC',
          'Sierra Leone': 'SL',
          'Singapore': 'SG',
          'Slovakia': 'SK',
          'Slovenia': 'SI',
          'Solomon Islands': 'SB',
          'Somalia': 'SO',
          'South Africa': 'ZA',
          'South Georgia And Sandwich Isl.': 'GS',
          'Spain': 'ES',
          'Sri Lanka': 'LK',
          'Sudan': 'SD',
          'Suriname': 'SR',
          'Svalbard And Jan Mayen': 'SJ',
          'Swaziland': 'SZ',
          'Sweden': 'SE',
          'Switzerland': 'CH',
          'Syrian Arab Republic': 'SY',
          'Taiwan': 'TW',
          'Tajikistan': 'TJ',
          'Tanzania': 'TZ',
          'Thailand': 'TH',
          'Timor-Leste': 'TL',
          'Togo': 'TG',
          'Tokelau': 'TK',
          'Tonga': 'TO',
          'Trinidad and Tobago': 'TT',
          'Tunisia': 'TN',
          'Turkey': 'TR',
          'Turkmenistan': 'TM',
          'Turks And Caicos Islands': 'TC',
          'Tuvalu': 'TV',
          'Uganda': 'UG',
          'Ukraine': 'UA',
          'UAE': 'AE',
          'UK': 'GB',
          'USA': 'US',
          'United States Outlying Islands': 'UM',
          'Uruguay': 'UY',
          'Uzbekistan': 'UZ',
          'Vanuatu': 'VU',
          'Venezuela': 'VE',
          'Vietnam': 'VN',
          'Virgin Islands, British': 'VG',
          'U.S. Virgin Islands': 'VI',
          'Wallis And Futuna': 'WF',
          'Western Sahara': 'EH',
          'Yemen': 'YE',
          'Zambia': 'ZM',
          'Zimbabwe': 'ZW',
          'Curaçao': 'CW'
        };
        this.countries = [];
      }

      _createClass(DashboardComponent, [{
        key: "calculateSum",
        value: function calculateSum(index) {
          var array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.countries;
          var total = 0;

          for (var i = 0, _len = array.length; i < _len; i++) {
            total += array[i][index];
          }

          return total;
        }
      }, {
        key: "sortData",
        value: function sortData(data, sortBy) {
          try {
            var sortProp = sortBy;
            data.sort(function (a, b) {
              if (a[sortProp] < b[sortProp]) {
                return -1;
              } else if (a[sortProp] > b[sortProp]) {
                return 1;
              }

              return 0;
            });
          } catch (e) {
            console.error("ERROR while sorting", e);
            return data;
          }

          return data;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this6 = this;

          this.zone.runOutsideAngular(function () {
            if (_this6.pieChart) {
              _this6.pieChart.dispose();
            }

            if (_this6.mapChart) {
              _this6.mapChart.dispose();
            }

            if (_this6.lineChart) {
              _this6.lineChart.dispose();
            }

            if (_this6.radarChart) {
              _this6.radarChart.dispose();
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this7 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    if (!localStorage.getItem("dontShow")) {//this.showModal();
                    }

                    this.zone.runOutsideAngular(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                        var _this8 = this;

                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this._getDataService.getAll(this.sortType), this._getDataService.getTimelineGlobal()).subscribe(function (_ref3) {
                                  var _ref4 = _slicedToArray(_ref3, 2),
                                      getAllData = _ref4[0],
                                      getTimelineData = _ref4[1];

                                  _this8.isLoading = false;
                                  _this8.isLoadingCountries = false;
                                  _this8.isLoadingMap = false;
                                  _this8.countries = getAllData;
                                  _this8.totalCases = _this8.calculateSum("cases");
                                  _this8.totalDeaths = _this8.calculateSum("deaths");
                                  _this8.totalRecoveries = _this8.calculateSum("recovered");
                                  _this8.totalCritical = _this8.calculateSum("critical");
                                  _this8.todayCases = _this8.calculateSum("todayCases");
                                  _this8.todayDeaths = _this8.calculateSum("todayDeaths");
                                  _this8.activeCases = _this8.calculateSum("active");
                                  _this8.casesPer1M = _this8.calculateSum("casesPerOneMillion");
                                  _this8.finishedCases = _this8.totalDeaths + _this8.totalRecoveries;
                                  _this8.fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_9__(_this8.countries, {
                                    shouldSort: true,
                                    threshold: 0.6,
                                    location: 0,
                                    distance: 100,
                                    minMatchCharLength: 1,
                                    keys: ["country"]
                                  });
                                  _this8.timeLine = getTimelineData;

                                  _this8.loadLineChart(false);

                                  _this8.loadRadar();

                                  _this8.loadPieChart();
                                });

                              case 1:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this);
                      }));
                    });

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "searchCountries",
        value: function searchCountries(key) {
          if (key) {
            this.countries = this.fuse.search(key);
            if (Object(util__WEBPACK_IMPORTED_MODULE_11__["isUndefined"])(this.directiveScroll)) return;
            this.directiveScroll.directiveRef.scrollToTop();
            return;
          }

          this.countries = this.fuse.list;
        }
      }, {
        key: "sortCountries",
        value: function sortCountries(key, skey) {
          this.isLoadingCountries = true;
          this.sortType = key;
          this.loadSorted();
        }
      }, {
        key: "loadSorted",
        value: function loadSorted() {
          var _this9 = this;

          this._getDataService.getAll(this.sortType).subscribe(function (data) {
            _this9.countries = data;
            _this9.isLoadingCountries = false;
          });
        }
      }, {
        key: "loadPieChart",
        value: function loadPieChart() {
          var tempData = this.fuse.list.slice();
          this.sortData(tempData, "cases");
          tempData = tempData.reverse();

          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("pieChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["PieChart"]);

          chart.data = tempData.slice(0, 10);
          var otherCases = tempData.slice(10, tempData.length);
          chart.data.push({
            country: 'Other',
            cases: this.calculateSum("cases", otherCases)
          });
          var pieSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["PieSeries"]());
          pieSeries.dataFields.value = "cases";
          pieSeries.dataFields.category = "country";
          pieSeries.labels.template.disabled = true;
          pieSeries.ticks.template.disabled = true;
          pieSeries.slices.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#313a46");
          pieSeries.slices.template.strokeWidth = 1;
          pieSeries.slices.template.strokeOpacity = 1;
          this.pieChart = chart;
          this.loadMap("cases");
        }
      }, {
        key: "loadLineChart",
        value: function loadLineChart(chartType) {
          var _this10 = this;

          this.caseData = [];

          if (this.lineChart) {
            this.lineChart.dispose();
          }

          Object.keys(this.timeLine).forEach(function (key) {
            _this10.caseData.push({
              date: new Date(key),
              cases: _this10.timeLine[key].cases,
              recoveries: _this10.timeLine[key].recovered,
              deaths: _this10.timeLine[key].deaths
            });
          });
          this.caseData.push({
            date: new Date().getTime(),
            cases: this.totalCases,
            recoveries: this.totalRecoveries,
            deaths: this.totalDeaths
          });

          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("lineChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYChart"]);

          chart.numberFormatter.numberFormat = "#a";
          chart.numberFormatter.bigNumberPrefixes = [{
            "number": 1e+3,
            "suffix": "K"
          }, {
            "number": 1e+6,
            "suffix": "M"
          }, {
            "number": 1e+9,
            "suffix": "B"
          }]; // Create axes

          var dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["DateAxis"]());
          dateAxis.renderer.minGridDistance = 50;
          var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
          valueAxis.logarithmic = chartType;
          valueAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#adb5bd");
          dateAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#adb5bd");
          chart = this.createSeriesLine(chart, "#21AFDD", "cases");
          chart = this.createSeriesLine(chart, "#10c469", "recoveries");
          chart = this.createSeriesLine(chart, "#ff5b5b", "deaths");
          chart.data = this.caseData;
          chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["Legend"]();
          chart.legend.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#adb5bd");
          chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYCursor"]();
          this.lineChart = chart;
        }
      }, {
        key: "loadMap",
        value: function loadMap(option) {
          var _this11 = this;

          this.isLoadingMap = true;

          if (this.mapChart) {
            this.mapChart.dispose();
          }

          var color = "#21AFDD";

          if (option == "recovered") {
            color = "#10c469";
          } else if (option == "critical") {
            color = "#f9c851";
          } else if (option == "deaths") {
            color = "#ff5b5b";
          }

          var mapData = [];
          this.fuse.list.forEach(function (element) {
            if (element[option] != 0) {
              mapData.push({
                id: _this11.countryCodes[element.country],
                name: element.country,
                value: element[option],
                color: _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"](color)
              });
            }
          });

          var chartMap = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("worldChart", _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_6__["MapChart"]); // Set map definition


          chartMap.geodata = _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_7__["default"]; // Set projection

          chartMap.projection = new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_6__["projections"].Miller(); // Create map polygon series

          var polygonSeries = chartMap.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_6__["MapPolygonSeries"]());
          polygonSeries.exclude = ["AQ"];
          polygonSeries.useGeodata = true;
          polygonSeries.nonScalingStroke = true;
          polygonSeries.strokeWidth = 0.5;
          polygonSeries.calculateVisualCenter = true;
          var imageSeries = chartMap.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_6__["MapImageSeries"]());
          imageSeries.data = mapData;
          imageSeries.dataFields.value = "value";
          var imageTemplate = imageSeries.mapImages.template;
          imageTemplate.nonScaling = true;
          var circle = imageTemplate.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["Circle"]);
          circle.fillOpacity = 0.7;
          circle.propertyFields.fill = "color";
          circle.tooltipText = "{name}: [bold]{value}[/]";
          chartMap.events.on("ready", function () {
            _this11.isLoadingMap = false;
          });
          imageSeries.heatRules.push({
            "target": circle,
            "property": "radius",
            "min": 4,
            "max": 30,
            "dataField": "value"
          });
          imageTemplate.adapter.add("latitude", function (latitude, target) {
            var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext["id"]);

            if (polygon) {
              return polygon.visualLatitude;
            }

            return latitude;
          });
          imageTemplate.adapter.add("longitude", function (longitude, target) {
            var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext["id"]);

            if (polygon) {
              return polygon.visualLongitude;
            }

            return longitude;
          });
          var polygonTemplate = polygonSeries.mapPolygons.template;
          polygonTemplate.tooltipText = "{name}";
          polygonTemplate.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#282d37");
          polygonTemplate.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#313a46");
          this.mapChart = chartMap;
        }
      }, {
        key: "loadRadar",
        value: function loadRadar() {
          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("radarChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["RadarChart"]); // Add data


          chart.data = [{
            "category": "Critical",
            "value": this.totalCritical / this.activeCases * 100,
            "full": 100
          }, {
            "category": "Death",
            "value": this.totalDeaths / this.finishedCases * 100,
            "full": 100
          }, {
            "category": "Recovered",
            "value": this.totalRecoveries / this.finishedCases * 100,
            "full": 100
          }, {
            "category": "Active",
            "value": 100 - this.totalCritical / this.activeCases * 100,
            "full": 100
          }]; // Make chart not full circle

          chart.startAngle = -90;
          chart.endAngle = 180;
          chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["percent"](20); // Set number format

          chart.numberFormatter.numberFormat = "#.#'%'"; // Create axes

          var categoryAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["CategoryAxis"]());
          categoryAxis.dataFields.category = "category";
          categoryAxis.renderer.grid.template.location = 0;
          categoryAxis.renderer.grid.template.strokeOpacity = 0;
          categoryAxis.renderer.labels.template.horizontalCenter = "right";
          categoryAxis.renderer.labels.template.adapter.add("fill", function (fill, target) {
            if (target.dataItem.index == 0) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#f9c851");
            }

            if (target.dataItem.index == 1) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#ff5b5b");
            }

            if (target.dataItem.index == 2) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#10c469");
            }

            return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#21AFDD");
          });
          categoryAxis.renderer.minGridDistance = 10;
          var valueAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
          valueAxis.renderer.grid.template.strokeOpacity = 0;
          valueAxis.min = 0;
          valueAxis.max = 100;
          valueAxis.strictMinMax = true;
          valueAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#adb5bd"); // Create series

          var series1 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["RadarColumnSeries"]());
          series1.dataFields.valueX = "full";
          series1.dataFields.categoryY = "category";
          series1.clustered = false;
          series1.columns.template.fill = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["InterfaceColorSet"]().getFor("alternativeBackground");
          series1.columns.template.fillOpacity = 0.08;
          series1.columns.template["cornerRadiusTopLeft"] = 20;
          series1.columns.template.strokeWidth = 0;
          series1.columns.template.radarColumn.cornerRadius = 20;
          var series2 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["RadarColumnSeries"]());
          series2.dataFields.valueX = "value";
          series2.dataFields.categoryY = "category";
          series2.clustered = false;
          series2.columns.template.strokeWidth = 0;
          series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
          series2.columns.template.radarColumn.cornerRadius = 20;
          series2.columns.template.adapter.add("fill", function (fill, target) {
            //return chart.colors.getIndex(target.dataItem.index);
            if (target.dataItem.index == 0) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#f9c851");
            }

            if (target.dataItem.index == 1) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#ff5b5b");
            }

            if (target.dataItem.index == 2) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#10c469");
            }

            return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#21AFDD");
          }); // Add cursor

          chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["RadarCursor"]();
          chart.cursor.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#282e38");
          chart.tooltip.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#282e38");
          this.radarChart = chart;
        }
      }, {
        key: "createSeriesLine",
        value: function createSeriesLine(chart, color, type) {
          var name = type.charAt(0).toUpperCase() + type.slice(1);
          var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["LineSeries"]());
          series.dataFields.valueY = type;
          series.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"](color);
          series.dataFields.dateX = "date";
          series.strokeWidth = 2;
          series.minBulletDistance = 10;
          series.tooltipText = "{valueY} " + name;
          series.tooltip.pointerOrientation = "vertical";
          series.tooltip.background.cornerRadius = 20;
          series.tooltip.background.fillOpacity = 0.5;
          series.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"](color);
          series.legendSettings.labelText = name;
          series.tooltip.autoTextColor = false;
          series.tooltip.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#282e38");
          return chart;
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_getdata_service__WEBPACK_IMPORTED_MODULE_8__["GetdataService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      viewQuery: function DashboardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.directiveScroll = _t.first);
        }
      },
      decls: 243,
      vars: 97,
      consts: [[1, "container-fluid"], [1, "text-center", "mt-2", "mb-2"], [1, "row"], ["role", "button", "href", "https://www.gstatic.com/covid19/mobility/Global_Mobility_Report.csv?cachebust=911a386b6c9c230f", "tooltip", "Archivo de datos en formato .CSV", 1, "btn", "btn-sm", "btn-lighten-warning", "waves-effect", "waves-light", "mr-2", "ml-2"], [1, "fab", "fa-google", "mr-2"], [1, "col-xl-3", "col-md-6", "col-6"], [1, "card-box"], [1, "header-title", "m-0", "text-md-left", "text-center"], [1, "topBoxes"], [1, "fa-3x", "text-center"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2"], [1, "topBoxesDetails", "text-md-right", "text-center"], [1, "badge", "badge-blue", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "mdi", "mdi-trending-up"], [1, "font-weight-normal"], [1, "text-muted"], [1, "progress", "progress-bar-alt-blue", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-blue", 2, "width", "100%"], [1, "badge", "badge-danger", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "progress", "progress-bar-alt-danger", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "100%"], [1, "badge", "badge-success", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "progress", "progress-bar-alt-success", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "100%"], [1, "badge", "badge-warning", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "progress", "progress-bar-alt-warning", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "100%"], [1, "col-xl-4"], [1, "float-right"], [1, "header-title", "mb-3"], [1, "form-group", "row"], [1, "col-md-8", "col-8"], ["type", "text", "id", "example-placeholder", 1, "form-control", 3, "placeholder", "keyup"], ["search", ""], [1, "col-md-4", "col-4"], [1, "custom-select", 3, "change"], ["sortBy", ""], ["selected", "", "disabled", ""], ["value", "cases"], ["value", "todayCases"], ["value", "deaths"], ["value", "todayDeaths"], ["value", "recovered"], [1, "infectedCountries"], [2, "height", "346px"], ["perfectscrollbar", ""], ["class", "infectedCountry", 4, "ngFor", "ngForOf"], [1, "col-xl-8"], [1, "card"], [1, "float-md-right", "float-right", "d-md-inline", "d-none"], ["type", "button", 1, "btn", "btn-xs", "btn-lighten-blue", "waves-effect", "waves-light", "width-xs", "mr-md-1", "mr-0", 3, "click"], ["type", "button", 1, "btn", "btn-xs", "btn-lighten-danger", "waves-effect", "waves-light", "width-xs", "mr-md-1", "mr-0", 3, "click"], ["type", "button", 1, "btn", "btn-xs", "btn-lighten-success", "waves-effect", "waves-light", "width-xs", "mr-md-1", "mr-0", 3, "click"], ["type", "button", 1, "btn", "btn-xs", "btn-lighten-warning", "waves-effect", "waves-light", "width-xs", 3, "click"], [1, "header-title", "mt-0", "mb-3", "mt-md-0"], [1, "table-responsive"], ["id", "worldChart", 2, "width", "100%", "height", "400px", "overflow", "hidden"], [1, "float-right", "d-md-none", "d-inline"], ["type", "button", 1, "btn", "btn-block", "btn-xs", "btn-lighten-blue", "waves-effect", "waves-light", "width-xs", "mr-md-0", "mr-0", 3, "click"], ["type", "button", 1, "btn", "btn-block", "btn-xs", "btn-lighten-danger", "waves-effect", "waves-light", "width-xs", "mr-md-0", "mr-0", 3, "click"], ["type", "button", 1, "btn", "btn-block", "btn-xs", "btn-lighten-success", "waves-effect", "waves-light", "width-xs", "mr-md-0", "mr-0", 3, "click"], ["type", "button", 1, "btn", "btn-block", "btn-xs", "btn-lighten-warning", "waves-effect", "waves-light", "width-xs", 3, "click"], [1, "inbox-widget"], ["id", "radarChart", 2, "width", "100%", "height", "400px"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "enableLogarithmicScale", 1, "custom-control-input", 3, "change"], ["enableLogarithmicScale", ""], ["for", "enableLogarithmicScale", 1, "custom-control-label"], ["id", "lineChart", 2, "width", "100%", "height", "400px", "overflow", "hidden"], ["id", "pieChart", 2, "width", "100%", "height", "300px"], [1, "col-xl-5"], [1, "header-title", "mt-0", "mb-3"], [1, "col-12"], [1, "col-xl-6", "col-md-6"], [1, "card-box", "widget-user", "bg-d"], [1, "text-center"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-blue"], [1, "font-weight-normal", "text-success"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-danger"], [1, "font-weight-normal", "text-danger"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-warning"], [1, "font-weight-normal", "text-warning"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-info"], ["class", "font-weight-normal text-info", 3, "d-none", 4, "ngIf"], [1, "col-xl-3"], [1, "card-box", "text-center"], ["target", "_blank", "href", "https://www.facebook.com/sharer/sharer.php?u=https://coronavirus-mx.web.app", 1, "btn", "btn-icon", "waves-effect", "btn-blue", "mr-1"], [1, "fab", "fa-facebook"], ["target", "_blank", "href", "https://twitter.com/intent/tweet?url=https://coronavirus-mx.web.app&hashtags=Covid_19,CoronavirusPandemic,coronastatistics,corona&text=Stay%20Updated%20with%20Live%20Coronavirus%20Tracker", 1, "btn", "btn-icon", "waves-effect", "btn-blue", "mr-1"], [1, "fab", "fa-twitter"], ["target", "_blank", "href", "https://vk.com/share.php?url=https://coronavirus-mx.web.app", 1, "btn", "btn-icon", "waves-effect", "btn-blue", "mr-1"], [1, "fab", "fa-vk"], ["href", "whatsapp://send?text=Datos en tiempo real sobre la pandemia https://coronavirus-mx.web.app", "data-action", "share/whatsapp/share", 1, "btn", "btn-icon", "waves-effect", "btn-blue"], [1, "fab", "fa-whatsapp"], ["href", "https://paypal.me/beaverNet", 1, "btn", "btn-", "waves-effect", "btn-danger", "d-block", "mt-1", "mx-auto"], [1, "fas", "fa-coffee"], [1, "infectedCountry"], [3, "routerLink"], [1, "infectedCountryFlag"], ["style", "height: 30px;\n                width: 40px;", 3, "src", "alt", 4, "ngIf", "ngIfElse"], ["unknown", ""], [1, "infectedCountryName", "mt-0", "mb-1"], [1, "infectedCountryDetails", "font-weight-bold"], [1, "text-blue"], [1, "text-danger"], [1, "infectedCountryCases", "text-blue"], [1, "infectedCountryDeaths", "text-danger"], [2, "height", "30px", "width", "40px", 3, "src", "alt"], ["src", "assets/flags/unknown.svg", 3, "alt"], [1, "font-weight-normal", "text-info"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Estad\xEDstica mundial");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Mobilidad Global ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Infectados");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h2", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Muertes");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h2", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Recuperados");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h2", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](59, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](62, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Graves");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](75, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "h2", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](79, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](82, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "Estad\xEDsticas de hoy:");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "h4", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Pa\xEDses afectados ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "input", 32, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function DashboardComponent_Template_input_keyup_95_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](96);

            return ctx.searchCountries(_r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "select", 35, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DashboardComponent_Template_select_change_98_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](99);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](96);

            return ctx.sortCountries(_r1.value, _r0.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Ordenar por");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Casos Totales");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Casos Hoy");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Muertes Totales");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Muertes Hoy");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Total Recuperados");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "perfect-scrollbar", 44, 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](117, DashboardComponent_div_117_Template, 18, 10, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_122_listener() {
            return ctx.loadMap("cases");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "Casos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_124_listener() {
            return ctx.loadMap("deaths");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Muertos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_126_listener() {
            return ctx.loadMap("recovered");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "Recuperados");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "button", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_128_listener() {
            return ctx.loadMap("critical");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "Graves");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "h4", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "Mapa de Infecci\xF3n ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_137_listener() {
            return ctx.loadMap("cases");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Casos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_139_listener() {
            return ctx.loadMap("deaths");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "Muertos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_141_listener() {
            return ctx.loadMap("recovered");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Recuperados");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_143_listener() {
            return ctx.loadMap("critical");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "Graves");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "h4", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "\xCDndice de distribuci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](151, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "input", 65, 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DashboardComponent_Template_input_change_158_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](159);

            return ctx.loadLineChart(_r4.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "label", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Escala logar\xEDtmica");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "h4", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "Historial infeccioso");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](165, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "h4", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "Distribuci\xF3n infecciosa por pa\xEDs");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](174, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](176, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "h4", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "\xCDndice de contagio");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "h2", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](191, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](193, "\xCDndice de recuperados");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](198, "i", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "h2", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](201, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "\xCDndice de mortalidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](208, "i", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "h2", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](211, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "\xCDndice de pacientes graves");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](218, "i", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](219, DashboardComponent_h2_219_Template, 2, 3, "h2", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "Pa\xEDses afectados");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](225, "D\xEDas desde el comienzo de la pandemia");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "app-countup");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "Comparte con tus amigos, familiares y colegas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "Mantenlos informados sobre las noticias ma\xE1 recientes del COVID-19");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "a", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](233, "i", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "a", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](235, "i", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "a", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](237, "i", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](239, "i", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "a", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](241, "i", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, " Patroc\xEDname ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 67, ctx.totalCases), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.todayCases, " hoy");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](36, 69, ctx.totalDeaths / ctx.finishedCases * 100, ".1-2"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 72, ctx.totalDeaths), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.todayDeaths, " hoy");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](55, 74, ctx.totalRecoveries / ctx.finishedCases * 100, ".1-2"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](59, 77, ctx.totalRecoveries), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](62, 79, ctx.activeCases), " restantes");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](75, 81, ctx.totalCritical / ctx.activeCases * 100, ".1-2"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](79, 84, ctx.totalCritical), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](82, 86, ctx.casesPer1M), " por cada mill\xF3n de habitantes");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", "Busca en los ", ctx.countries.length, " pa\xEDses afectados");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoadingCountries);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoadingCountries);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.countries);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoadingMap);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoadingMap);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](191, 88, ctx.totalRecoveries / ctx.finishedCases * 100, ".1-2"), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](201, 91, ctx.totalDeaths / ctx.finishedCases * 100, ".1-2"), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](211, 94, ctx.totalCritical / ctx.activeCases * 100, ".1-2"), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fuse);
        }
      },
      directives: [ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_13__["TooltipDirective"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_15__["CountupComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["DecimalPipe"]],
      styles: [".bg-d[_ngcontent-%COMP%] {\n  background-color: #282e38;\n}\n\n.modal-step[_ngcontent-%COMP%] {\n  min-height: 180px;\n  transition: all 0.2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Wb2x1bWVzL0RPQ1VNRU5UT1MvSkNNUC9SZXBvc2l0b3Jpby9iZWF2ZXJOZXQvY29yb25hdmlydXMtbXgvc3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmUzODtcbn1cbi5tb2RhbC1zdGVwe1xuICBtaW4taGVpZ2h0OiAxODBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59IiwiLmJnLWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyZTM4O1xufVxuXG4ubW9kYWwtc3RlcCB7XG4gIG1pbi1oZWlnaHQ6IDE4MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn0iXX0= */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["trigger"])('fadeInOutAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])(600)])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["trigger"])('fadeInOutAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["style"])({
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_12__["animate"])(600)])])]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _core_services_getdata_service__WEBPACK_IMPORTED_MODULE_8__["GetdataService"]
        }];
      }, {
        directiveScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/not-found/not-found.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/not-found/not-found.component.ts ***!
    \********************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppPagesNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 24,
      vars: 0,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", "text-center"], [1, "mt-5"], ["src", "assets/images/404.png", "width", "500"], [1, "col-xl-4"], [1, "card", "card-box"], [1, "header-title", "mb-3"], [1, "float-md-left", "float-left", "d-md-none", "d-inline"], ["type", "button", "routerLink", "/", 1, "btn", "btn-block", "btn-sm", "btn-lighten-warning", "waves-effect", "waves-light", "width-sm", "mr-md-1", "mr-0"], ["type", "button", "routerLink", "/assistance", 1, "btn", "btn-block", "btn-sm", "btn-lighten-danger", "waves-effect", "waves-light", "width-sm", "mr-md-1", "mr-0"], [1, "float-left", "d-md-inline", "d-none"], ["type", "button", "routerLink", "/", 1, "btn", "btn-sm", "btn-lighten-warning", "waves-effect", "waves-light", "width-sm", "mr-md-1", "mr-0"], ["type", "button", "routerLink", "/assistance", 1, "btn", "btn-sm", "btn-lighten-danger", "waves-effect", "waves-light", "width-sm", "mr-md-1", "mr-0"], [1, "col-md-8"]],
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Esta p\xE1gina no existe.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Puedes regresar a los siguientes sitios:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Datos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Asistencia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Datos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Asistencia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html',
          styleUrls: ['./not-found.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/countup/countup.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/countup/countup.component.ts ***!
    \*****************************************************/

  /*! exports provided: CountupComponent */

  /***/
  function srcAppSharedCountupCountupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountupComponent", function () {
      return CountupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CountupComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r39.timer["days"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r39.timer["hours"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r39.timer["minutes"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r39.timer["seconds"], " ");
      }
    }

    var CountupComponent = /*#__PURE__*/function () {
      function CountupComponent() {
        _classCallCheck(this, CountupComponent);

        this.oldDate = new Date("2019-12-01");
      }

      _createClass(CountupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          setInterval(function () {
            _this12.timer = _this12.dhms(Math.floor(new Date().getTime() - _this12.oldDate.getTime()));
          }, 1000);
        }
      }, {
        key: "dhms",
        value: function dhms(difference) {
          var days, hours, mins, secs;
          days = Math.floor(difference / (60 * 60 * 1000 * 24) * 1);
          hours = Math.floor(difference % (60 * 60 * 1000 * 24) / (60 * 60 * 1000) * 1);
          mins = Math.floor(difference % (60 * 60 * 1000 * 24) % (60 * 60 * 1000) / (60 * 1000) * 1);
          secs = Math.floor(difference % (60 * 60 * 1000 * 24) % (60 * 60 * 1000) % (60 * 1000) / 1000 * 1);
          return {
            days: days,
            hours: hours,
            minutes: mins,
            seconds: secs
          };
        }
      }]);

      return CountupComponent;
    }();

    CountupComponent.ɵfac = function CountupComponent_Factory(t) {
      return new (t || CountupComponent)();
    };

    CountupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CountupComponent,
      selectors: [["app-countup"]],
      decls: 10,
      vars: 1,
      consts: [["class", "row font-weight-bold", 4, "ngIf"], [1, "row"], [1, "col-3"], [1, "row", "font-weight-bold"]],
      template: function CountupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CountupComponent_div_0_Template, 9, 4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dias");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Horas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Minutos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Segundos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.timer);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb3VudHVwL2NvdW50dXAuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-countup',
          templateUrl: './countup.component.html',
          styleUrls: ['./countup.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Volumes/DOCUMENTOS/JCMP/Repositorio/beaverNet/coronavirus-mx/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map