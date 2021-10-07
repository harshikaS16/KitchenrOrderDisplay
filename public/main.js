(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    width: 1400px;\r\n    height: 167px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    margin-left: -56px;\r\n}  \r\n\r\n  .btn{\r\n    height: 54px;\r\n    width: 20%;\r\n    margin: auto;\r\n    margin-right: 30px;\r\n    margin-top: 16px;\r\n    border: none;\r\n    color: rgb(0, 3, 0);\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\r\n    transition: ease-in 0.2s;\r\n    background-color: #FFDE05;\r\n  }  \r\n\r\n  .btn:hover{\r\n      background-color:#4A4865;\r\n      transition: ease-in 0.2s;\r\n  }  \r\n\r\n  h2{\r\n      height: 2em;\r\n      font: x-large;\r\n      font-family: \"Open Sans\", sans-serif;\r\n      color: white;\r\n  }\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"container\">\n        <h2 class=\"heading\" layout =\"row\">Welcome to Dalviroo Kitchen</h2>\n          <button class=\"btn\" [routerLink]=\"['/createOrder']\">Create Order</button>\n          <button class=\"btn\" [routerLink]=\"['/addPrediction']\">Add Prediction</button>\n          <button class=\"btn\" [routerLink]=\"['/displayBoard']\">Go to Board</button>\n          <button class=\"btn\" [routerLink]=\"['/getReport']\">Download Report</button>\n      </div>\n  <router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_create_order_create_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/create-order/create-order.component */ "./src/app/components/create-order/create-order.component.ts");
/* harmony import */ var _components_display_board_display_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/display-board/display-board.component */ "./src/app/components/display-board/display-board.component.ts");
/* harmony import */ var _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/reports/reports.component */ "./src/app/components/reports/reports.component.ts");
/* harmony import */ var _services_faasos_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/faasos-api.service */ "./src/app/services/faasos-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: 'createOrder', component: _components_create_order_create_order_component__WEBPACK_IMPORTED_MODULE_7__["CreateOrderComponent"], data: [{ 'type': 'creation' }] },
    { path: 'addPrediction', component: _components_create_order_create_order_component__WEBPACK_IMPORTED_MODULE_7__["CreateOrderComponent"], data: [{ 'type': 'prediction' }] },
    { path: 'displayBoard', component: _components_display_board_display_board_component__WEBPACK_IMPORTED_MODULE_8__["DisplayBoardComponent"] },
    { path: 'getReport', component: _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_9__["ReportsComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_create_order_create_order_component__WEBPACK_IMPORTED_MODULE_7__["CreateOrderComponent"],
                _components_display_board_display_board_component__WEBPACK_IMPORTED_MODULE_8__["DisplayBoardComponent"],
                _components_reports_reports_component__WEBPACK_IMPORTED_MODULE_9__["ReportsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesModule"]
            ],
            providers: [
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"],
                _services_faasos_api_service__WEBPACK_IMPORTED_MODULE_10__["FaasosApiService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/create-order/create-order.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/create-order/create-order.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flash-message {\r\n    color: white;\r\n    font-size: 15px;\r\n    font-family: sans-serif;\r\n    padding-right: 222px;\r\n}\r\n\r\n.displayContainer{\r\n    display: block;\r\n    width: 780px;\r\n    height: 220px;\r\n    margin: auto;\r\n    margin-top: -55px;\r\n    text-align: center;\r\n    padding: 100px 30px;\r\n    overflow: hidden;\r\n    padding-top: 103px;\r\n    padding-left: 202px;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    padding-left: 190px;\r\n    padding-bottom: 10px;\r\n}\r\n\r\nli {\r\n    font: 200 20px/1.5 Helvetica, Verdana, sans-serif;\r\n    border-bottom: 1px solid #ccc;\r\n  }\r\n\r\nli:last-child {\r\n    border: none;\r\n  }\r\n\r\nli a {\r\n    text-decoration: none;\r\n    color: white;\r\n    display: block;\r\n    width: 200px;\r\n    transition: font-size 0.3s ease, background-color 0.3s ease;\r\n  }\r\n\r\nli a:hover {\r\n    color: black;\r\n    font-size: 20px;\r\n    background: #FFDE05;\r\n  }\r\n\r\n.formInput{     \r\n    display: block;\r\n    width: 75%;     \r\n    height: 40px;     \r\n    border-radius:4px;     \r\n    background:#ecf0f1;     \r\n    border: #ccc 1px solid;     \r\n    padding: 8px;     \r\n    font-size:1em;     \r\n    margin-bottom: 18px;   \r\n  }\r\n\r\n.btn{\r\n    height: 54px;\r\n    width: 38%;\r\n    margin: auto;\r\n    margin-right: 176px;\r\n    margin-top: 16px;\r\n    border: none;\r\n    color: rgb(0, 3, 0);\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\r\n    transition: ease-in 0.2s;\r\n    background-color: #FFDE05;\r\n  }\r\n\r\n.btn:hover{\r\n      background-color:#4A4865;\r\n      transition: ease-in 0.2s;\r\n  }"

/***/ }),

/***/ "./src/app/components/create-order/create-order.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/create-order/create-order.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"displayContainer\">\n    <div class=\"input-field col s12\">\n      <input class=\"formInput\" placeholder=\"Select the Item..\" type=\"text\" [(ngModel)]=query (keyup)=filter()>\n    </div>\n    <div *ngIf=\"filteredList.length > 0\">\n        <ul *ngFor=\"let item of filteredList\">\n            <li>\n                <a (click)=\"select(item)\">{{item}}</a>\n            </li>\n        </ul>\n    </div>\n    <div>\n      <input class=\"formInput\" placeholder=\"Add the Quantity ordered..\" type=\"number\" min=\"0\" [(ngModel)]=\"quantity\">\n    </div>\n    <div>\n      <button class=\"btn\" *ngIf=\"updateType === 'creation'\" (click)=\"create()\">Place Order</button>\n      <button class=\"btn\" *ngIf=\"updateType === 'prediction'\" (click)=\"create()\">Set the Prediction</button>\n    </div>\n    <flash-messages class=\"flash-message\"></flash-messages>\n</div>  "

/***/ }),

/***/ "./src/app/components/create-order/create-order.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/create-order/create-order.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreateOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOrderComponent", function() { return CreateOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_faasos_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/faasos-api.service */ "./src/app/services/faasos-api.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utilities_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utilities/menu */ "./src/utilities/menu.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateOrderComponent = /** @class */ (function () {
    function CreateOrderComponent(apiService, flashMessage, route) {
        this.apiService = apiService;
        this.flashMessage = flashMessage;
        this.route = route;
        this.menuList = _utilities_menu__WEBPACK_IMPORTED_MODULE_5__["MENU"];
        this.query = "";
        this.filteredList = [];
        this.updateType = "";
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].nodeApi);
        this.updateType = route.snapshot.data[0]['type'];
    }
    CreateOrderComponent.prototype.ngOnInit = function () {
    };
    /**
     * Filter the menu items based on the typed input
     * @returns {Array} filteredList
     */
    CreateOrderComponent.prototype.filter = function () {
        if (this.query !== "") {
            this.filteredList = this.menuList.filter(function (el) {
                return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
            }.bind(this));
        }
        else {
            this.filteredList = [];
        }
    };
    /**
     * Set the selected menu item
     * @param {JSON} item
     */
    CreateOrderComponent.prototype.select = function (item) {
        this.query = item;
        this.filteredList = [];
    };
    /**
     * Create the order or Set the Prediction based on updateType field
     */
    CreateOrderComponent.prototype.create = function () {
        var _this = this;
        if (this.query !== undefined && this.query !== "" && this.quantity !== null && this.quantity > 0) {
            if (this.updateType === 'creation') {
                var createBody = {
                    name: this.query,
                    orderedQuantity: this.quantity
                };
                this.apiService.createOrder(createBody)
                    .subscribe(function (res) {
                    if (res) {
                        _this.flashMessage.show("Order has been created for " + _this.query);
                        _this.socket.emit('add-item', createBody);
                    }
                });
            }
            else {
                var predictBody = {
                    name: this.query,
                    predictedQuantity: this.quantity
                };
                this.apiService.setPrediction(predictBody)
                    .subscribe(function (res) {
                    if (res) {
                        _this.flashMessage.show("Prediction has been set for " + _this.query);
                        _this.socket.emit('add-item', createBody);
                    }
                });
            }
        }
        else {
            this.flashMessage.show("Please enter valid details");
        }
    };
    CreateOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-order',
            template: __webpack_require__(/*! ./create-order.component.html */ "./src/app/components/create-order/create-order.component.html"),
            styles: [__webpack_require__(/*! ./create-order.component.css */ "./src/app/components/create-order/create-order.component.css")]
        }),
        __metadata("design:paramtypes", [_services_faasos_api_service__WEBPACK_IMPORTED_MODULE_1__["FaasosApiService"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CreateOrderComponent);
    return CreateOrderComponent;
}());



/***/ }),

/***/ "./src/app/components/display-board/display-board.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/display-board/display-board.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".displayContainer{\r\n    display: block;\r\n    width: 780px;\r\n    height: auto;\r\n    margin-top: 30px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    padding: 12px 220px;\r\n}\r\n\r\ntable {\r\n    color: white;\r\n    font-family: sans-serif;\r\n    border-spacing: 49px 0;\r\n}\r\n\r\n.btn {\r\n    background-color: #FFDE05;\r\n    border-radius: 4px;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\r\n    text-decoration: none;\r\n    border: none;\r\n    height: 32px;\r\n    width: 60px;\r\n}\r\n\r\n.btn:hover{\r\n    background-color:#4A4865;\r\n    transition: ease-in 0.2s;\r\n}"

/***/ }),

/***/ "./src/app/components/display-board/display-board.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/display-board/display-board.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"displayContainer\">\n    <table *ngIf=\"isDataLoaded\">\n        <thead>\n            <tr>\n                <th>Name</th>\n                <th>Quantity</th>\n                <th>Created-till-now</th>\n                <th>Predicted</th>\n                <th>Status</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let item of list\">\n                <td style=\"text-align: left\"> {{ item.name }} </td>\n                <td> {{ item.orderedQuantity }} </td>\n                <td> {{ item.createdCount }}</td>\n                <td> {{ item.predictedQuantity }} </td>\n                <td> <button [disabled]=\"item.orderedQuantity===0\" class=\"btn\" (click)=\"done(item)\">Done</button> </td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/components/display-board/display-board.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/display-board/display-board.component.ts ***!
  \*********************************************************************/
/*! exports provided: DisplayBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayBoardComponent", function() { return DisplayBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_faasos_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/faasos-api.service */ "./src/app/services/faasos-api.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DisplayBoardComponent = /** @class */ (function () {
    function DisplayBoardComponent(apiService, cd) {
        this.apiService = apiService;
        this.cd = cd;
        this.isDataLoaded = false;
        this.list = [];
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].nodeApi);
    }
    DisplayBoardComponent.prototype.ngOnInit = function () {
        this.populateData();
        this.socket.on('new-item', function (data) {
            this.populateData();
        }.bind(this));
    };
    /**
     * Populate the Item List to be displayed from the service
     */
    DisplayBoardComponent.prototype.populateData = function () {
        var _this = this;
        this.apiService.getDisplayData()
            .subscribe(function (res) {
            _this.list = JSON.parse(res);
            _this.isDataLoaded = true;
        });
    };
    /**
     * Update the Created Quantity and Ordered Quantity Count on click of "Done"
     * @param {JSON} item
     */
    DisplayBoardComponent.prototype.done = function (item) {
        var _this = this;
        var updateBody = {
            _id: item._id,
            name: item.name,
            orderedQuantity: item.orderedQuantity - 1,
            createdCount: item.createdCount + 1,
            predictedQuantity: item.predictedQuantity,
            _v: item._v
        };
        this.apiService.updateCreatedCount(updateBody)
            .subscribe(function (res) {
            if (res) {
                _this.socket.emit('add-item', updateBody);
            }
        });
    };
    DisplayBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-board',
            template: __webpack_require__(/*! ./display-board.component.html */ "./src/app/components/display-board/display-board.component.html"),
            styles: [__webpack_require__(/*! ./display-board.component.css */ "./src/app/components/display-board/display-board.component.css")],
        }),
        __metadata("design:paramtypes", [_services_faasos_api_service__WEBPACK_IMPORTED_MODULE_2__["FaasosApiService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DisplayBoardComponent);
    return DisplayBoardComponent;
}());



/***/ }),

/***/ "./src/app/components/reports/reports.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/reports/reports.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\r\n    color: white;\r\n    text-align: center;\r\n    font-family: sans-serif;\r\n    font-size: 20px;\r\n    padding-top: 85px;\r\n}"

/***/ }),

/***/ "./src/app/components/reports/reports.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/reports/reports.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\n  Your file is being downloaded..\n</h3>\n"

/***/ }),

/***/ "./src/app/components/reports/reports.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/reports/reports.component.ts ***!
  \*********************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_csv_Angular2_csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-csv/Angular2-csv */ "./node_modules/angular2-csv/Angular2-csv.js");
/* harmony import */ var angular2_csv_Angular2_csv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_csv_Angular2_csv__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_faasos_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/faasos-api.service */ "./src/app/services/faasos-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(apiService) {
        this.apiService = apiService;
    }
    ReportsComponent.prototype.ngOnInit = function () {
        this.populateData();
    };
    /**
     * Get all the item details to be presented in the excel
     */
    ReportsComponent.prototype.populateData = function () {
        var _this = this;
        this.apiService.getDisplayData()
            .subscribe(function (res) {
            _this.createTable(JSON.parse(res));
        });
    };
    /**
     * Create an Array in the excel format
     * @param {Array} data
     */
    ReportsComponent.prototype.createTable = function (data) {
        var excelArray = [
            {
                name: "Dish Name",
                createdQuantity: "Produced",
                predictedQuantity: "Predicted"
            }
        ];
        underscore__WEBPACK_IMPORTED_MODULE_2__["map"](data, function (item) {
            var newItem = {
                "name": item.name,
                "createdQuantity": item.createdCount,
                "predictedQuantity": item.predictedQuantity
            };
            excelArray.push(newItem);
        });
        this.createReport(excelArray);
    };
    /**
     * Create Report
     * @param {Array} data
     */
    ReportsComponent.prototype.createReport = function (data) {
        new angular2_csv_Angular2_csv__WEBPACK_IMPORTED_MODULE_1__["Angular2Csv"](data, 'Dalviroo Kitchen Report');
    };
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/components/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.css */ "./src/app/components/reports/reports.component.css")]
        }),
        __metadata("design:paramtypes", [_services_faasos_api_service__WEBPACK_IMPORTED_MODULE_3__["FaasosApiService"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/services/faasos-api.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/faasos-api.service.ts ***!
  \************************************************/
/*! exports provided: FaasosApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaasosApiService", function() { return FaasosApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FaasosApiService = /** @class */ (function () {
    function FaasosApiService(http) {
        this.http = http;
    }
    /**
     * Create Headers for API call
     * @param headers
     * @return {Headers} headers
     */
    FaasosApiService.prototype.createHeaders = function (headers) {
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    /**
     * Service call to place the order
     * @param {JSON} payload Payload for the service
     * @return {Boolean}
     */
    FaasosApiService.prototype.createOrder = function (payload) {
        var header = this.createHeaders(new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]());
        return this.http.post('dishes/createOrder', payload, { headers: header })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            console.log(data._body);
            return true;
        }));
    };
    /**
      * Service call to get all the item details
      * @return {Array} Array of items
      */
    FaasosApiService.prototype.getDisplayData = function () {
        var header = this.createHeaders(new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]());
        return this.http.get('dishes/getData', { headers: header })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            console.log(data._body);
            return data._body;
        }));
    };
    /**
      * Service call to update the Order Created Count
      * @param {JSON} payload Payload for the service
      * @return {Boolean}
      */
    FaasosApiService.prototype.updateCreatedCount = function (payload) {
        var header = this.createHeaders(new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]());
        return this.http.post('dishes/createdCount', payload, { headers: header })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            console.log(data._body);
            return true;
        }));
    };
    /**
      * Service call to set the Predictions for an item
      * @param {JSON} payload Payload for the service
      * @return {Boolean}
      */
    FaasosApiService.prototype.setPrediction = function (payload) {
        var header = this.createHeaders(new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]());
        return this.http.post('dishes/setPrediction', payload, { headers: header })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
            console.log(data._body);
            return true;
        }));
    };
    FaasosApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], FaasosApiService);
    return FaasosApiService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    nodeApi: "http://localhost:3000"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/utilities/menu.ts":
/*!*******************************!*\
  !*** ./src/utilities/menu.ts ***!
  \*******************************/
/*! exports provided: MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU", function() { return MENU; });
var MENU = [
    "Mixed Veg",
    "Chatpate Chole",
    "Tandoori Aloo",
    "Mushroom Salsa",
    "Mushroom Tikka",
    "Veggie Delight",
    "Masala Paneer Tikka",
    "Fiery Panner Tikka",
    "Paneer Mushroom",
    "Veg Feast",
    "Egg Chatpata",
    "Egg Potato",
    "Chicken Seekh",
    "Fiery Seekh Kebab",
    "Chicken Delight",
    "Sizzling Chicken",
    "Reshmi Kebab",
    "Chicken Bhuna",
    "Masala Chicken Tikka",
    "Chicken Mushroom",
    "Smoked Chicken and Corn",
    "Mutton Boti",
    "Chicken Feast"
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Harshika Shete\Desktop\Projects\Angular\faasosKitchen\angular-src\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map