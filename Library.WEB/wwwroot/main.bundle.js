webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/library/library.module": [
		"./src/app/library/library.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'library',
        children: [
            { path: '', loadChildren: 'app/library/library.module#LibraryModule' },
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\n  <div class='row'>\n    <div class='col-sm-3'>\n      <nav-menu></nav-menu>\n    </div>\n    <div class='col-sm-9 body-content'>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//system
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var edit_service_1 = __webpack_require__("./src/app/home/edit.service.ts");
//kendo
var kendo_angular_grid_1 = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
//modules
var library_module_1 = __webpack_require__("./src/app/library/library.module.ts");
//components
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var navmenu_component_1 = __webpack_require__("./src/app/navmenu/navmenu.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navmenu_component_1.NavmenuComponent,
                home_component_1.HomeComponent,
            ],
            imports: [
                http_1.HttpClientModule,
                http_1.HttpClientJsonpModule,
                app_routing_module_1.routing,
                platform_browser_1.BrowserModule,
                router_1.RouterModule,
                library_module_1.LibraryModule,
                forms_1.FormsModule,
                kendo_angular_grid_1.GridModule
            ],
            providers: [
                {
                    deps: [http_1.HttpClient],
                    provide: edit_service_1.EditService,
                    useFactory: function (jsonp) { return function () { return new edit_service_1.EditService(jsonp); }; }
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/home/edit.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var tap_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
var map_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var CREATE_ACTION = 'create';
var UPDATE_ACTION = 'update';
var REMOVE_ACTION = 'destroy';
var EditService = /** @class */ (function (_super) {
    __extends(EditService, _super);
    function EditService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.data = [];
        return _this;
    }
    EditService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch()
            .pipe(tap_1.tap(function (data) {
            _this.data = data;
        }))
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    EditService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    EditService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(REMOVE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    EditService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        // find orignal data item
        var originalDataItem = this.data.find(function (item) { return item.ProductID === dataItem.ProductID; });
        // revert changes
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    EditService.prototype.reset = function () {
        this.data = [];
    };
    EditService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        return this.http
            .jsonp("https://demos.telerik.com/kendo-ui/service/Products/" + action + "?" + this.serializeModels(data), 'callback')
            .pipe(map_1.map(function (res) { return res; }));
    };
    EditService.prototype.serializeModels = function (data) {
        return data ? "&models=" + JSON.stringify([data]) : '';
    };
    EditService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], EditService);
    return EditService;
}(BehaviorSubject_1.BehaviorSubject));
exports.EditService = EditService;


/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<form novalidate #myForm=\"ngForm\">\n  <kendo-grid\n      [data]=\"view | async\"\n      [height]=\"533\"\n      [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n      [pageable]=\"true\" [sortable]=\"true\"\n      (dataStateChange)=\"onStateChange($event)\"\n      (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\n      (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\n      (add)=\"addHandler($event, myForm)\"\n      [navigable]=\"true\"\n    >\n    <ng-template kendoGridToolbarTemplate>\n        <button kendoGridAddCommand type=\"button\">Add new</button>\n    </ng-template>\n    <kendo-grid-column field=\"ProductName\" title=\"Product Name\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.ProductName\" kendoGridFocusable name=\"ProductName\" class=\"k-textbox\" required/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"UnitPrice\" editor=\"numeric\" title=\"Price\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.UnitPrice\" kendoGridFocusable name=\"UnitPrice\" class=\"k-textbox\" type=\"number\"/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"Discontinued\" editor=\"boolean\" title=\"Discontinued\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.Discontinued\" kendoGridFocusable name=\"Discontinued\" type=\"checkbox\"/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"UnitsInStock\" editor=\"numeric\" title=\"Units In Stock\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input\n                [(ngModel)]=\"dataItem.UnitsInStock\"\n                kendoGridFocusable\n                name=\"UnitsInStock\"\n                required\n                min=\"0\"\n                max=\"99\"\n                class=\"k-textbox\"\n                type=\"number\"/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-command-column title=\"command\" width=\"220\">\n        <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n            <button kendoGridEditCommand type=\"button\" class=\"k-primary\">Edit</button>\n            <button kendoGridRemoveCommand type=\"button\">Remove</button>\n            <button\nkendoGridSaveCommand type=\"button\"\n[disabled]=\"myForm.invalid || myForm.pristine\">{{ isNew ? 'Add' : 'Update' }}</button>\n            <button kendoGridCancelCommand type=\"button\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\n        </ng-template>\n    </kendo-grid-command-column>\n  </kendo-grid>\n</form>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var kendo_data_query_1 = __webpack_require__("./node_modules/@progress/kendo-data-query/dist/es/main.js");
var products_1 = __webpack_require__("./src/app/home/products.ts");
var map_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var edit_service_1 = __webpack_require__("./src/app/home/edit.service.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(editServiceFactory) {
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.editService = editServiceFactory();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.view = this.editService.pipe(map_1.map(function (data) { return kendo_data_query_1.process(data, _this.gridState); }));
        this.editService.read();
    };
    HomeComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        this.editService.read();
    };
    HomeComponent.prototype.addHandler = function (_a, formInstance) {
        var sender = _a.sender;
        formInstance.reset();
        this.closeEditor(sender);
        sender.addRow(new products_1.Product());
    };
    HomeComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        this.editedProduct = Object.assign({}, dataItem);
        sender.editRow(rowIndex);
    };
    HomeComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
    };
    HomeComponent.prototype.saveHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem, isNew = _a.isNew;
        this.editService.save(dataItem, isNew);
        sender.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedProduct = undefined;
    };
    HomeComponent.prototype.removeHandler = function (_a) {
        var dataItem = _a.dataItem;
        this.editService.remove(dataItem);
    };
    HomeComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.editService.resetItem(this.editedProduct);
        this.editedRowIndex = undefined;
        this.editedProduct = undefined;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
        }),
        __param(0, core_1.Inject(edit_service_1.EditService)),
        __metadata("design:paramtypes", [Object])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/home/products.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product() {
        this.ProductName = '';
        this.Discontinued = false;
        this.UnitPrice = 0;
    }
    return Product;
}());
exports.Product = Product;


/***/ }),

/***/ "./src/app/library/all-library/all-library.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 >All Library</h1>\n<br/>  \n\n<form novalidate #myForm=\"ngForm\">\n  <kendo-grid\n      [data]=\"view | async\"\n      [height]=\"533\"\n      [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n      [pageable]=\"true\" [sortable]=\"true\"\n      (dataStateChange)=\"onStateChange($event)\"\n      [navigable]=\"true\"\n    >\n\n    <kendo-grid-column field=\"name\" title=\"Name\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.name\" kendoGridFocusable name=\"name\" class=\"k-textbox\" required/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"type\" title=\"Type\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.type\" kendoGridFocusable name=\"type\" class=\"k-textbox\" required/>\n        </ng-template>\n    </kendo-grid-column>\n  </kendo-grid>\n</form>"

/***/ }),

/***/ "./src/app/library/all-library/all-library.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var all_library_service_1 = __webpack_require__("./src/app/library/all-library/all-library.service.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var kendo_data_query_1 = __webpack_require__("./node_modules/@progress/kendo-data-query/dist/es/main.js");
var map_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var AllLibraryComponent = /** @class */ (function () {
    function AllLibraryComponent(bookServiceFactory) {
        this.gridState = {
            sort: [],
            skip: 0,
            take: 12
        };
        this.allLibraryService = bookServiceFactory;
    }
    AllLibraryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.view = this.allLibraryService.pipe(map_1.map(function (data) { return kendo_data_query_1.process(data, _this.gridState); }));
        this.allLibraryService.read();
    };
    AllLibraryComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        console.log(this.gridState);
        this.allLibraryService.read();
    };
    AllLibraryComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("./src/app/library/all-library/all-library.component.html"),
            providers: [all_library_service_1.AllLibraryService],
            styleUrls: []
        }),
        __param(0, core_1.Inject(all_library_service_1.AllLibraryService)),
        __metadata("design:paramtypes", [Object])
    ], AllLibraryComponent);
    return AllLibraryComponent;
}());
exports.AllLibraryComponent = AllLibraryComponent;


/***/ }),

/***/ "./src/app/library/all-library/all-library.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var tap_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
var map_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var AllLibraryService = /** @class */ (function (_super) {
    __extends(AllLibraryService, _super);
    function AllLibraryService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.url = "/api/library";
        _this.data = [];
        return _this;
    }
    AllLibraryService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch()
            .pipe(tap_1.tap(function (data) {
            _this.data = data;
        }))
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    AllLibraryService.prototype.reset = function () {
        this.data = [];
    };
    AllLibraryService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        if (action == '') {
            return this.http.get(this.url)
                .pipe(map_1.map(function (res) { return res; }));
        }
    };
    AllLibraryService.prototype.serializeModels = function (data) {
        return data ? "&models=" + JSON.stringify([data]) : '';
    };
    AllLibraryService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AllLibraryService);
    return AllLibraryService;
}(BehaviorSubject_1.BehaviorSubject));
exports.AllLibraryService = AllLibraryService;


/***/ }),

/***/ "./src/app/library/author/author.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Authors</h1>\n<br/>  \n\n<form novalidate #myForm=\"ngForm\">\n  <kendo-grid\n      [data]=\"view | async\"\n      [height]=\"533\"\n      [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n      [pageable]=\"true\" [sortable]=\"true\"\n      (dataStateChange)=\"onStateChange($event)\"\n      (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\n      (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\n      (add)=\"addHandler($event, myForm)\"\n      [navigable]=\"true\"\n    >\n    <ng-template kendoGridToolbarTemplate>\n        <button kendoGridAddCommand type=\"button\">Add new</button>\n    </ng-template>\n    <kendo-grid-column field=\"authorName\" title=\"Name\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.authorName\" kendoGridFocusable name=\"authorName\" class=\"k-textbox\" required/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"year\" editor=\"numeric\" title=\"Year\">\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n          <input [(ngModel)]=\"dataItem.year\" kendoGridFocusable name=\"year\" class=\"k-textbox\" type=\"number\"/>\n      </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-command-column title=\"Command\" width=\"220\">\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n          <button kendoGridEditCommand type=\"button\" class=\"k-primary\">Edit</button>\n          <button kendoGridRemoveCommand type=\"button\">Remove</button>\n          <button kendoGridSaveCommand type=\"button\"\n                  [disabled]=\"myForm.invalid || myForm.pristine\">{{ isNew ? 'Add' : 'Update' }}\n          </button>\n          <button kendoGridCancelCommand type=\"button\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\n      </ng-template>\n  </kendo-grid-command-column>\n  </kendo-grid>\n</form>"

/***/ }),

/***/ "./src/app/library/author/author.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var author_service_1 = __webpack_require__("./src/app/library/author/author.service.ts");
var author_model_1 = __webpack_require__("./src/app/library/author/author.model.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var kendo_data_query_1 = __webpack_require__("./node_modules/@progress/kendo-data-query/dist/es/main.js");
var map_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var AuthorComponent = /** @class */ (function () {
    function AuthorComponent(bookServiceFactory) {
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.authorService = bookServiceFactory;
    }
    AuthorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.view = this.authorService.pipe(map_1.map(function (data) { return kendo_data_query_1.process(data, _this.gridState); }));
        this.authorService.read();
    };
    AuthorComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        console.log(this.gridState);
        this.authorService.read();
    };
    AuthorComponent.prototype.addHandler = function (_a, formInstance) {
        var sender = _a.sender;
        formInstance.reset();
        this.closeEditor(sender);
        var newAuthor = new author_model_1.Author();
        sender.addRow(newAuthor);
    };
    AuthorComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        this.editedAuthor = Object.assign({}, dataItem);
        console.log(sender);
        sender.editRow(rowIndex);
    };
    AuthorComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
    };
    AuthorComponent.prototype.saveHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem, isNew = _a.isNew;
        this.authorService.save(dataItem, isNew);
        sender.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedAuthor = undefined;
    };
    AuthorComponent.prototype.removeHandler = function (_a) {
        var dataItem = _a.dataItem;
        this.authorService.remove(dataItem);
    };
    AuthorComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.authorService.resetItem(this.editedAuthor);
        this.editedRowIndex = undefined;
        this.editedAuthor = undefined;
    };
    AuthorComponent = __decorate([
        core_1.Component({
            selector: 'app-author',
            template: __webpack_require__("./src/app/library/author/author.component.html"),
            providers: [author_service_1.AuthorService]
        }),
        __param(0, core_1.Inject(author_service_1.AuthorService)),
        __metadata("design:paramtypes", [Object])
    ], AuthorComponent);
    return AuthorComponent;
}());
exports.AuthorComponent = AuthorComponent;


/***/ }),

/***/ "./src/app/library/author/author.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Author = /** @class */ (function () {
    function Author(authorId, authorName, year) {
        if (authorId === void 0) { authorId = 0; }
        this.authorId = authorId;
        this.authorName = authorName;
        this.year = year;
    }
    return Author;
}());
exports.Author = Author;


/***/ }),

/***/ "./src/app/library/author/author.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var tap_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
var map_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var CREATE_ACTION = 'create';
var UPDATE_ACTION = 'update';
var REMOVE_ACTION = 'destroy';
var AuthorService = /** @class */ (function (_super) {
    __extends(AuthorService, _super);
    function AuthorService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.url = "/api/author";
        _this.data = [];
        return _this;
    }
    AuthorService.prototype.getData = function () {
        this.read();
        return this.data;
    };
    AuthorService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch()
            .pipe(tap_1.tap(function (data) {
            _this.data = data;
        }))
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    AuthorService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    AuthorService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(REMOVE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    AuthorService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        // find orignal data item
        var originalDataItem = this.data.find(function (item) { return item.authorId === dataItem.authorId; });
        // revert changes
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    AuthorService.prototype.reset = function () {
        this.data = [];
    };
    AuthorService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        if (action == '') {
            return this.http.get(this.url)
                .pipe(map_1.map(function (res) { return res; }));
        }
        if (action == CREATE_ACTION) {
            console.log(data);
            return this.http
                .post(this.url, data)
                .pipe(map_1.map(function (res) { return res; }));
        }
        if (action == REMOVE_ACTION) {
            return this.http
                .delete(this.url + "/" + data.authorId)
                .pipe(map_1.map(function (res) { return res; }));
        }
        if (action == UPDATE_ACTION) {
            console.log(data);
            return this.http
                .put(this.url + "/" + data.authorId, data)
                .pipe(map_1.map(function (res) { return res; }));
        }
    };
    AuthorService.prototype.serializeModels = function (data) {
        return data ? "&models=" + JSON.stringify([data]) : '';
    };
    AuthorService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AuthorService);
    return AuthorService;
}(BehaviorSubject_1.BehaviorSubject));
exports.AuthorService = AuthorService;


/***/ }),

/***/ "./src/app/library/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Books</h1>\n<br/>  \n\n<form novalidate #myForm=\"ngForm\">\n  <kendo-grid [data]=\"view | async\"\n              [height]=\"533\"\n              [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n              [pageable]=\"true\" [sortable]=\"true\"\n              (dataStateChange)=\"onStateChange($event)\"\n              (selectionChange)=\"selectionChange($event)\"\n              (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\n              (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\n              (add)=\"addHandler($event, myForm)\"\n              [navigable]=\"true\"\n              [selectable]=\"selectableSettings\">\n    <ng-template kendoGridToolbarTemplate>\n      <button kendoGridAddCommand type=\"button\">Add new</button>\n    </ng-template>\n    <kendo-grid-column field=\"name\" title=\"Name\">\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n        <input [(ngModel)]=\"dataItem.name\" kendoGridFocusable name=\"name\" class=\"k-textbox\" required/>\n      </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"authorsFormated\" title=\"Authors\">\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n        <kendo-multiselect #list\n                           [data]=\"authorList\"\n                           [(ngModel)]=\"dataItem.authors\"\n                           [ngModelOptions]=\"{standalone: true}\"\n                           [filterable]=\"true\"\n                            (valueChange)=\"multiselectValueChange($event)\"\n                           textField=\"authorName\"\n                           valueField=\"authorId\"\n                           placeholder=\"Authors\">\n        </kendo-multiselect>\n      </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"yearOfPublishing\" editor=\"numeric\" title=\"Year\">\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n          <input [(ngModel)]=\"dataItem.yearOfPublishing\" kendoGridFocusable name=\"yearOfPublishing\" class=\"k-textbox\" type=\"number\"/>\n      </ng-template>\n    </kendo-grid-column>\n\n    <kendo-grid-column field=\"publicHousesFormated\" title=\"Publiation Houses\">\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n        <kendo-multiselect #list\n                           [data]=\"publicHouseList\"\n                           [(ngModel)]=\"dataItem.publicHouses\"\n                           [ngModelOptions]=\"{standalone: true}\"\n                           [filterable]=\"true\"\n                            (valueChange)=\"multiselectValueChange($event)\"\n                           textField=\"publicHouseName\"\n                           valueField=\"publicHouseId\"\n                           placeholder=\"Public Houses\">\n        </kendo-multiselect>\n      </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-command-column title=\"command\" width=\"220\">\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n        <button kendoGridEditCommand type=\"button\" class=\"k-primary\">Edit</button>\n        <button kendoGridRemoveCommand type=\"button\">Remove</button>\n        <button kendoGridSaveCommand type=\"button\"\n                [disabled]=\"myForm.invalid\">\n          {{ isNew ? 'Add' : 'Update' }}\n        </button>\n        <button kendoGridCancelCommand type=\"button\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\n      </ng-template>\n    </kendo-grid-command-column>\n  </kendo-grid>\n</form>"

/***/ }),

/***/ "./src/app/library/book/book.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var book_model_1 = __webpack_require__("./src/app/library/book/book.model.ts");
var book_service_1 = __webpack_require__("./src/app/library/book/book.service.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var kendo_data_query_1 = __webpack_require__("./node_modules/@progress/kendo-data-query/dist/es/main.js");
var map_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var BookComponent = /** @class */ (function () {
    function BookComponent(bookServiceFactory) {
        this.selectedIds = Array();
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.selectableSettings = {
            checkboxOnly: false,
            mode: 'multiple'
        };
        this.bookService = bookServiceFactory;
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.view = this.bookService.pipe(map_1.map(function (data) { return kendo_data_query_1.process(data, _this.gridState); }));
        this.bookService.getPublicHouseList().subscribe(function (data) {
            _this.publicHouseList = data;
        });
        this.bookService.getAuthorList().subscribe(function (data) {
            _this.authorList = data;
        });
        this.bookService.read();
    };
    BookComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        console.log(this.gridState);
        this.bookService.read();
    };
    BookComponent.prototype.selectionChange = function (event) {
        var _this = this;
        event.selectedRows.forEach(function (e) { return _this.selectedIds.push(e.dataItem.bookId); });
        event.deselectedRows.forEach(function (e) { return _this.selectedIds = _this.selectedIds.filter(function (item) { return item != e.dataItem.bookId; }); });
        console.log(this.selectedIds);
    };
    BookComponent.prototype.addHandler = function (_a, formInstance) {
        var sender = _a.sender;
        formInstance.reset();
        this.closeEditor(sender);
        var newBook = new book_model_1.Book();
        sender.addRow(newBook);
    };
    BookComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        this.editedBook = Object.assign({}, dataItem);
        console.log(sender);
        sender.editRow(rowIndex);
    };
    BookComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
    };
    BookComponent.prototype.saveHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem, isNew = _a.isNew;
        this.bookService.save(dataItem, isNew);
        sender.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedBook = undefined;
    };
    BookComponent.prototype.removeHandler = function (_a) {
        var dataItem = _a.dataItem;
        this.bookService.remove(dataItem);
    };
    BookComponent.prototype.multiselectValueChange = function () {
    };
    BookComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.bookService.resetItem(this.editedBook);
        this.editedRowIndex = undefined;
        this.editedBook = undefined;
    };
    BookComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("./src/app/library/book/book.component.html"),
            providers: [book_service_1.BookService],
            styleUrls: []
        }),
        __param(0, core_1.Inject(book_service_1.BookService)),
        __metadata("design:paramtypes", [Object])
    ], BookComponent);
    return BookComponent;
}());
exports.BookComponent = BookComponent;


/***/ }),

/***/ "./src/app/library/book/book.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Book = /** @class */ (function () {
    function Book(bookId, name, authorName, yearOfPublishing, publicHouses, publicHousesFormated, authors, authorsFormated) {
        if (bookId === void 0) { bookId = 0; }
        this.bookId = bookId;
        this.name = name;
        this.authorName = authorName;
        this.yearOfPublishing = yearOfPublishing;
        this.publicHouses = publicHouses;
        this.publicHousesFormated = publicHousesFormated;
        this.authors = authors;
        this.authorsFormated = authorsFormated;
    }
    return Book;
}());
exports.Book = Book;


/***/ }),

/***/ "./src/app/library/book/book.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var tap_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
var map_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var CREATE_ACTION = 'create';
var UPDATE_ACTION = 'update';
var REMOVE_ACTION = 'destroy';
var BookService = /** @class */ (function (_super) {
    __extends(BookService, _super);
    function BookService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.url = "/api/book";
        _this.data = [];
        return _this;
    }
    BookService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch()
            .pipe(tap_1.tap(function (data) {
            _this.data = data;
        }))
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    BookService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    BookService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(REMOVE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    BookService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        // find orignal data item
        var originalDataItem = this.data.find(function (item) { return item.bookId == dataItem.bookId; });
        console.log(this.data);
        console.log(originalDataItem);
        console.log(dataItem);
        // revert changes
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    BookService.prototype.reset = function () {
        this.data = [];
    };
    BookService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        if (action == '') {
            return this.http.get(this.url)
                .pipe(map_1.map(function (res) { return res; }));
        }
        if (action == CREATE_ACTION) {
            console.log(data);
            return this.http
                .post(this.url, data)
                .pipe(map_1.map(function (res) { return res; }));
        }
        if (action == REMOVE_ACTION) {
            return this.http
                .delete(this.url + "/" + data.bookId)
                .pipe(map_1.map(function (res) { return res; }));
        }
        if (action == UPDATE_ACTION) {
            console.log(data);
            return this.http
                .put(this.url + "/" + data.bookId, data)
                .pipe(map_1.map(function (res) { return res; }));
        }
    };
    BookService.prototype.getPublicHouseList = function () {
        return this.http.get('api/publichouse').pipe(map_1.map(function (res) { return res; }));
    };
    BookService.prototype.getAuthorList = function () {
        return this.http.get('api/author').pipe(map_1.map(function (res) { return res; }));
    };
    BookService.prototype.serializeModels = function (data) {
        return data ? "&models=" + JSON.stringify([data]) : '';
    };
    BookService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], BookService);
    return BookService;
}(BehaviorSubject_1.BehaviorSubject));
exports.BookService = BookService;


/***/ }),

/***/ "./src/app/library/brochure/brochure.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Brochures</h1>\n<br/>  \n\n<form novalidate #myForm=\"ngForm\">\n  <kendo-grid\n      [data]=\"view | async\"\n      [height]=\"533\"\n      [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n      [pageable]=\"true\" [sortable]=\"true\"\n      (dataStateChange)=\"onStateChange($event)\"\n      (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\n      (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\n      (add)=\"addHandler($event, myForm)\"\n      [navigable]=\"true\"\n    >\n    <ng-template kendoGridToolbarTemplate>\n        <button kendoGridAddCommand type=\"button\">Add new</button>\n    </ng-template>\n    <kendo-grid-column field=\"name\" title=\"Brochure Name\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.name\" kendoGridFocusable name=\"name\" class=\"k-textbox\" required/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"typeOfCover\" title=\"Cover\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.typeOfCover\" kendoGridFocusable name=\"typeOfCover\" class=\"k-textbox\" required/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"numberOfPages\" editor=\"numeric\" title=\"Pages\">\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n          <input [(ngModel)]=\"dataItem.numberOfPages\" kendoGridFocusable name=\"numberOfPages\" class=\"k-textbox\" type=\"number\"/>\n      </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-command-column title=\"Command\" width=\"220\">\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n          <button kendoGridEditCommand type=\"button\" class=\"k-primary\">Edit</button>\n          <button kendoGridRemoveCommand type=\"button\">Remove</button>\n          <button kendoGridSaveCommand type=\"button\"\n                  [disabled]=\"myForm.invalid || myForm.pristine\">{{ isNew ? 'Add' : 'Update' }}\n          </button>\n          <button kendoGridCancelCommand type=\"button\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\n      </ng-template>\n  </kendo-grid-command-column>\n  </kendo-grid>\n</form>"

/***/ }),

/***/ "./src/app/library/brochure/brochure.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var brochure_service_1 = __webpack_require__("./src/app/library/brochure/brochure.service.ts");
var brochure_model_1 = __webpack_require__("./src/app/library/brochure/brochure.model.ts");
var kendo_data_query_1 = __webpack_require__("./node_modules/@progress/kendo-data-query/dist/es/main.js");
var map_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var BrochureComponent = /** @class */ (function () {
    function BrochureComponent(bookServiceFactory) {
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.brochureService = bookServiceFactory;
    }
    BrochureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.view = this.brochureService.pipe(map_1.map(function (data) { return kendo_data_query_1.process(data, _this.gridState); }));
        this.brochureService.read();
    };
    BrochureComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        console.log(this.gridState);
        this.brochureService.read();
    };
    BrochureComponent.prototype.addHandler = function (_a, formInstance) {
        var sender = _a.sender;
        formInstance.reset();
        this.closeEditor(sender);
        var newBrochure = new brochure_model_1.Brochure();
        sender.addRow(newBrochure);
    };
    BrochureComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        this.editedBrochure = Object.assign({}, dataItem);
        console.log(sender);
        sender.editRow(rowIndex);
    };
    BrochureComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
    };
    BrochureComponent.prototype.saveHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem, isNew = _a.isNew;
        this.brochureService.save(dataItem, isNew);
        sender.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedBrochure = undefined;
    };
    BrochureComponent.prototype.removeHandler = function (_a) {
        var dataItem = _a.dataItem;
        this.brochureService.remove(dataItem);
    };
    BrochureComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.brochureService.resetItem(this.editedBrochure);
        this.editedRowIndex = undefined;
        this.editedBrochure = undefined;
    };
    BrochureComponent = __decorate([
        core_1.Component({
            template: __webpack_require__("./src/app/library/brochure/brochure.component.html"),
            providers: [brochure_service_1.BrochureService],
            styleUrls: []
        }),
        __param(0, core_1.Inject(brochure_service_1.BrochureService)),
        __metadata("design:paramtypes", [Object])
    ], BrochureComponent);
    return BrochureComponent;
}());
exports.BrochureComponent = BrochureComponent;


/***/ }),

/***/ "./src/app/library/brochure/brochure.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Brochure = /** @class */ (function () {
    function Brochure(brochureId, name, typeOfCover, numberOfPages) {
        if (brochureId === void 0) { brochureId = 0; }
        this.brochureId = brochureId;
        this.name = name;
        this.typeOfCover = typeOfCover;
        this.numberOfPages = numberOfPages;
    }
    return Brochure;
}());
exports.Brochure = Brochure;


/***/ }),

/***/ "./src/app/library/brochure/brochure.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var tap_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
var map_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var CREATE_ACTION = 'create';
var UPDATE_ACTION = 'update';
var REMOVE_ACTION = 'destroy';
var BrochureService = /** @class */ (function (_super) {
    __extends(BrochureService, _super);
    function BrochureService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.url = "/api/brochure";
        _this.data = [];
        return _this;
    }
    BrochureService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch()
            .pipe(tap_1.tap(function (data) {
            _this.data = data;
        }))
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    BrochureService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    BrochureService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(REMOVE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    BrochureService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        // find orignal data item
        var originalDataItem = this.data.find(function (item) { return item.brochureId === dataItem.brochureId; });
        // revert changes
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    BrochureService.prototype.reset = function () {
        this.data = [];
    };
    BrochureService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        if (action == '') {
            return this.http.get(this.url)
                .pipe(map_1.map(function (res) { return res; }));
        }
        if (action == CREATE_ACTION) {
            console.log(data);
            return this.http
                .post(this.url, data)
                .pipe(map_1.map(function (res) { return res; }));
        }
        if (action == REMOVE_ACTION) {
            return this.http
                .delete(this.url + "/" + data.brochureId)
                .pipe(map_1.map(function (res) { return res; }));
        }
        if (action == UPDATE_ACTION) {
            console.log(data);
            return this.http
                .put(this.url + "/" + data.brochureId, data)
                .pipe(map_1.map(function (res) { return res; }));
        }
    };
    BrochureService.prototype.serializeModels = function (data) {
        return data ? "&models=" + JSON.stringify([data]) : '';
    };
    BrochureService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], BrochureService);
    return BrochureService;
}(BehaviorSubject_1.BehaviorSubject));
exports.BrochureService = BrochureService;


/***/ }),

/***/ "./src/app/library/library.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//system
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var common_1 = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
//kendo ui
var kendo_angular_grid_1 = __webpack_require__("./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
var kendo_angular_buttons_1 = __webpack_require__("./node_modules/@progress/kendo-angular-buttons/dist/es/index.js");
var kendo_angular_dropdowns_1 = __webpack_require__("./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
//services
var brochure_service_1 = __webpack_require__("./src/app/library/brochure/brochure.service.ts");
var magazine_service_1 = __webpack_require__("./src/app/library/magazine/magazine.service.ts");
var book_service_1 = __webpack_require__("./src/app/library/book/book.service.ts");
var public_house_service_1 = __webpack_require__("./src/app/library/public-house/public-house.service.ts");
var all_library_service_1 = __webpack_require__("./src/app/library/all-library/all-library.service.ts");
var author_service_1 = __webpack_require__("./src/app/library/author/author.service.ts");
//components
var brochure_component_1 = __webpack_require__("./src/app/library/brochure/brochure.component.ts");
var library_routing_1 = __webpack_require__("./src/app/library/library.routing.ts");
var book_component_1 = __webpack_require__("./src/app/library/book/book.component.ts");
var magazine_component_1 = __webpack_require__("./src/app/library/magazine/magazine.component.ts");
var public_house_component_1 = __webpack_require__("./src/app/library/public-house/public-house.component.ts");
var all_library_component_1 = __webpack_require__("./src/app/library/all-library/all-library.component.ts");
var author_component_1 = __webpack_require__("./src/app/library/author/author.component.ts");
var LibraryModule = /** @class */ (function () {
    function LibraryModule() {
    }
    LibraryModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                library_routing_1.LibraryRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                kendo_angular_grid_1.GridModule,
                kendo_angular_buttons_1.ButtonsModule,
                kendo_angular_dropdowns_1.DropDownsModule,
                animations_1.BrowserAnimationsModule
            ],
            declarations: [
                brochure_component_1.BrochureComponent,
                book_component_1.BookComponent,
                magazine_component_1.MagazineComponent,
                public_house_component_1.PublicHouseComponent,
                all_library_component_1.AllLibraryComponent,
                author_component_1.AuthorComponent
            ],
            providers: [
                brochure_service_1.BrochureService,
                magazine_service_1.MagazineService,
                book_service_1.BookService,
                public_house_service_1.PublicHouseService,
                all_library_service_1.AllLibraryService,
                author_service_1.AuthorService
            ]
        })
    ], LibraryModule);
    return LibraryModule;
}());
exports.LibraryModule = LibraryModule;


/***/ }),

/***/ "./src/app/library/library.routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//system
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
//components
var brochure_component_1 = __webpack_require__("./src/app/library/brochure/brochure.component.ts");
var book_component_1 = __webpack_require__("./src/app/library/book/book.component.ts");
var public_house_component_1 = __webpack_require__("./src/app/library/public-house/public-house.component.ts");
var magazine_component_1 = __webpack_require__("./src/app/library/magazine/magazine.component.ts");
var all_library_component_1 = __webpack_require__("./src/app/library/all-library/all-library.component.ts");
var author_component_1 = __webpack_require__("./src/app/library/author/author.component.ts");
var routes = [
    {
        path: 'library',
        children: [
            { path: 'brochure', component: brochure_component_1.BrochureComponent, data: { title: "Brochures" } },
            { path: 'book', component: book_component_1.BookComponent, data: { title: "Books" } },
            { path: 'magazine', component: magazine_component_1.MagazineComponent, data: { title: "Magazines" } },
            { path: 'publichouse', component: public_house_component_1.PublicHouseComponent, data: { title: "Publication Houses" } },
            { path: 'alllibrary', component: all_library_component_1.AllLibraryComponent, data: { title: "All Library" } },
            { path: 'author', component: author_component_1.AuthorComponent, data: { title: "Authors" } },
        ]
    }
];
var LibraryRoutingModule = /** @class */ (function () {
    function LibraryRoutingModule() {
    }
    LibraryRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [
                router_1.RouterModule
            ]
        })
    ], LibraryRoutingModule);
    return LibraryRoutingModule;
}());
exports.LibraryRoutingModule = LibraryRoutingModule;


/***/ }),

/***/ "./src/app/library/magazine/magazine.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Magazines</h1>\n<br/>  \n\n<form novalidate #myForm=\"ngForm\">\n  <kendo-grid\n      [data]=\"view | async\"\n      [height]=\"533\"\n      [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n      [pageable]=\"true\" [sortable]=\"true\"\n      (dataStateChange)=\"onStateChange($event)\"\n      (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\n      (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\n      (add)=\"addHandler($event, myForm)\"\n      [navigable]=\"true\"\n    >\n    <ng-template kendoGridToolbarTemplate>\n        <button kendoGridAddCommand type=\"button\">Add new</button>\n    </ng-template>\n    <kendo-grid-column field=\"name\" title=\"Magazine Name\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.name\" kendoGridFocusable name=\"name\" class=\"k-textbox\" required/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"authorName\" title=\"Author\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.authorName\" kendoGridFocusable name=\"authorName\" class=\"k-textbox\" required/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"yearOfPublishing\" editor=\"numeric\" title=\"Year\">\n      <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n          <input [(ngModel)]=\"dataItem.yearOfPublishing\" kendoGridFocusable name=\"yearOfPublishing\" class=\"k-textbox\" type=\"number\"/>\n      </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-command-column title=\"Command\" width=\"220\">\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n          <button kendoGridEditCommand type=\"button\" class=\"k-primary\">Edit</button>\n          <button kendoGridRemoveCommand type=\"button\">Remove</button>\n          <button kendoGridSaveCommand type=\"button\"\n                  [disabled]=\"myForm.invalid || myForm.pristine\">{{ isNew ? 'Add' : 'Update' }}\n          </button>\n          <button kendoGridCancelCommand type=\"button\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\n      </ng-template>\n  </kendo-grid-command-column>\n  </kendo-grid>\n</form>"

/***/ }),

/***/ "./src/app/library/magazine/magazine.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var magazine_model_1 = __webpack_require__("./src/app/library/magazine/magazine.model.ts");
var magazine_service_1 = __webpack_require__("./src/app/library/magazine/magazine.service.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var kendo_data_query_1 = __webpack_require__("./node_modules/@progress/kendo-data-query/dist/es/main.js");
var map_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var MagazineComponent = /** @class */ (function () {
    function MagazineComponent(bookServiceFactory) {
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.brochureService = bookServiceFactory;
    }
    MagazineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.view = this.brochureService.pipe(map_1.map(function (data) { return kendo_data_query_1.process(data, _this.gridState); }));
        this.brochureService.read();
    };
    MagazineComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        console.log(this.gridState);
        this.brochureService.read();
    };
    MagazineComponent.prototype.addHandler = function (_a, formInstance) {
        var sender = _a.sender;
        formInstance.reset();
        this.closeEditor(sender);
        var newBrochure = new magazine_model_1.Magazine();
        sender.addRow(newBrochure);
    };
    MagazineComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        this.editedBrochure = Object.assign({}, dataItem);
        console.log(sender);
        sender.editRow(rowIndex);
    };
    MagazineComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
    };
    MagazineComponent.prototype.saveHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem, isNew = _a.isNew;
        this.brochureService.save(dataItem, isNew);
        sender.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedBrochure = undefined;
    };
    MagazineComponent.prototype.removeHandler = function (_a) {
        var dataItem = _a.dataItem;
        this.brochureService.remove(dataItem);
    };
    MagazineComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.brochureService.resetItem(this.editedBrochure);
        this.editedRowIndex = undefined;
        this.editedBrochure = undefined;
    };
    MagazineComponent = __decorate([
        core_1.Component({
            selector: 'app-magazine',
            template: __webpack_require__("./src/app/library/magazine/magazine.component.html"),
            providers: [magazine_service_1.MagazineService]
        }),
        __param(0, core_1.Inject(magazine_service_1.MagazineService)),
        __metadata("design:paramtypes", [Object])
    ], MagazineComponent);
    return MagazineComponent;
}());
exports.MagazineComponent = MagazineComponent;


/***/ }),

/***/ "./src/app/library/magazine/magazine.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Magazine = /** @class */ (function () {
    function Magazine(magazineId, name, authorName, yearOfPublishing) {
        if (magazineId === void 0) { magazineId = 0; }
        this.magazineId = magazineId;
        this.name = name;
        this.authorName = authorName;
        this.yearOfPublishing = yearOfPublishing;
    }
    return Magazine;
}());
exports.Magazine = Magazine;


/***/ }),

/***/ "./src/app/library/magazine/magazine.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var tap_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
var map_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var CREATE_ACTION = 'create';
var UPDATE_ACTION = 'update';
var REMOVE_ACTION = 'destroy';
var MagazineService = /** @class */ (function (_super) {
    __extends(MagazineService, _super);
    function MagazineService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.url = "/api/magazine";
        _this.data = [];
        return _this;
    }
    MagazineService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch()
            .pipe(tap_1.tap(function (data) {
            _this.data = data;
        }))
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    MagazineService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    MagazineService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(REMOVE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    MagazineService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        // find orignal data item
        var originalDataItem = this.data.find(function (item) { return item.magazineId === dataItem.magazineId; });
        // revert changes
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    MagazineService.prototype.reset = function () {
        this.data = [];
    };
    MagazineService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        if (action == '') {
            return this.http.get(this.url)
                .pipe(map_1.map(function (res) { return res; }));
        }
        if (action == CREATE_ACTION) {
            console.log(data);
            return this.http
                .post(this.url, data)
                .pipe(map_1.map(function (res) { return res; }));
        }
        if (action == REMOVE_ACTION) {
            return this.http
                .delete(this.url + "/" + data.magazineId)
                .pipe(map_1.map(function (res) { return res; }));
        }
        if (action == UPDATE_ACTION) {
            console.log(data);
            return this.http
                .put(this.url + "/" + data.magazineId, data)
                .pipe(map_1.map(function (res) { return res; }));
        }
    };
    MagazineService.prototype.serializeModels = function (data) {
        return data ? "&models=" + JSON.stringify([data]) : '';
    };
    MagazineService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], MagazineService);
    return MagazineService;
}(BehaviorSubject_1.BehaviorSubject));
exports.MagazineService = MagazineService;


/***/ }),

/***/ "./src/app/library/public-house/public-house.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Publication Houses</h1>\n<br/>  \n\n<form novalidate #myForm=\"ngForm\">\n  <kendo-grid\n      [data]=\"view | async\"\n      [height]=\"533\"\n      [pageSize]=\"gridState.take\" [skip]=\"gridState.skip\" [sort]=\"gridState.sort\"\n      [pageable]=\"true\" [sortable]=\"true\"\n      (dataStateChange)=\"onStateChange($event)\"\n      (edit)=\"editHandler($event)\" (cancel)=\"cancelHandler($event)\"\n      (save)=\"saveHandler($event)\" (remove)=\"removeHandler($event)\"\n      (add)=\"addHandler($event, myForm)\"\n      [navigable]=\"true\"\n    >\n    <ng-template kendoGridToolbarTemplate>\n        <button kendoGridAddCommand type=\"button\">Add new</button>\n    </ng-template>\n    <kendo-grid-column field=\"publicHouseName\" title=\"House Name\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.publicHouseName\" kendoGridFocusable name=\"publicHouseName\" class=\"k-textbox\" required/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-column field=\"country\" title=\"Country\">\n        <ng-template kendoGridEditTemplate let-dataItem=\"dataItem\">\n            <input [(ngModel)]=\"dataItem.country\" kendoGridFocusable name=\"country\" class=\"k-textbox\" required/>\n        </ng-template>\n    </kendo-grid-column>\n    <kendo-grid-command-column title=\"Command\" width=\"220\">\n      <ng-template kendoGridCellTemplate let-isNew=\"isNew\">\n          <button kendoGridEditCommand type=\"button\" class=\"k-primary\">Edit</button>\n          <button kendoGridRemoveCommand type=\"button\">Remove</button>\n          <button kendoGridSaveCommand type=\"button\"\n                  [disabled]=\"myForm.invalid || myForm.pristine\">{{ isNew ? 'Add' : 'Update' }}\n          </button>\n          <button kendoGridCancelCommand type=\"button\">{{ isNew ? 'Discard changes' : 'Cancel' }}</button>\n      </ng-template>\n  </kendo-grid-command-column>\n  </kendo-grid>\n</form>"

/***/ }),

/***/ "./src/app/library/public-house/public-house.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var public_house_service_1 = __webpack_require__("./src/app/library/public-house/public-house.service.ts");
var public_house_model_1 = __webpack_require__("./src/app/library/public-house/public-house.model.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var kendo_data_query_1 = __webpack_require__("./node_modules/@progress/kendo-data-query/dist/es/main.js");
var map_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var PublicHouseComponent = /** @class */ (function () {
    function PublicHouseComponent(bookServiceFactory) {
        this.gridState = {
            sort: [],
            skip: 0,
            take: 10
        };
        this.publicHouseService = bookServiceFactory;
    }
    PublicHouseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.view = this.publicHouseService.pipe(map_1.map(function (data) { return kendo_data_query_1.process(data, _this.gridState); }));
        this.publicHouseService.read();
    };
    PublicHouseComponent.prototype.onStateChange = function (state) {
        this.gridState = state;
        console.log(this.gridState);
        this.publicHouseService.read();
    };
    PublicHouseComponent.prototype.addHandler = function (_a, formInstance) {
        var sender = _a.sender;
        formInstance.reset();
        this.closeEditor(sender);
        var newPublicHouse = new public_house_model_1.PublicHouse();
        sender.addRow(newPublicHouse);
    };
    PublicHouseComponent.prototype.editHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem;
        this.closeEditor(sender);
        this.editedRowIndex = rowIndex;
        this.editedPublicHouse = Object.assign({}, dataItem);
        console.log(sender);
        sender.editRow(rowIndex);
    };
    PublicHouseComponent.prototype.cancelHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex;
        this.closeEditor(sender, rowIndex);
    };
    PublicHouseComponent.prototype.saveHandler = function (_a) {
        var sender = _a.sender, rowIndex = _a.rowIndex, dataItem = _a.dataItem, isNew = _a.isNew;
        this.publicHouseService.save(dataItem, isNew);
        sender.closeRow(rowIndex);
        this.editedRowIndex = undefined;
        this.editedPublicHouse = undefined;
    };
    PublicHouseComponent.prototype.removeHandler = function (_a) {
        var dataItem = _a.dataItem;
        this.publicHouseService.remove(dataItem);
    };
    PublicHouseComponent.prototype.closeEditor = function (grid, rowIndex) {
        if (rowIndex === void 0) { rowIndex = this.editedRowIndex; }
        grid.closeRow(rowIndex);
        this.publicHouseService.resetItem(this.editedPublicHouse);
        this.editedRowIndex = undefined;
        this.editedPublicHouse = undefined;
    };
    PublicHouseComponent = __decorate([
        core_1.Component({
            selector: 'app-publichouse',
            template: __webpack_require__("./src/app/library/public-house/public-house.component.html"),
            providers: [public_house_service_1.PublicHouseService]
        }),
        __param(0, core_1.Inject(public_house_service_1.PublicHouseService)),
        __metadata("design:paramtypes", [Object])
    ], PublicHouseComponent);
    return PublicHouseComponent;
}());
exports.PublicHouseComponent = PublicHouseComponent;


/***/ }),

/***/ "./src/app/library/public-house/public-house.model.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PublicHouse = /** @class */ (function () {
    function PublicHouse(publicHouseId, publicHouseName, country) {
        if (publicHouseId === void 0) { publicHouseId = 0; }
        this.publicHouseId = publicHouseId;
        this.publicHouseName = publicHouseName;
        this.country = country;
    }
    return PublicHouse;
}());
exports.PublicHouse = PublicHouse;


/***/ }),

/***/ "./src/app/library/public-house/public-house.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var tap_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
var map_1 = __webpack_require__("./node_modules/rxjs/_esm5/operators/map.js");
var CREATE_ACTION = 'create';
var UPDATE_ACTION = 'update';
var REMOVE_ACTION = 'destroy';
var PublicHouseService = /** @class */ (function (_super) {
    __extends(PublicHouseService, _super);
    function PublicHouseService(http) {
        var _this = _super.call(this, []) || this;
        _this.http = http;
        _this.url = "/api/publichouse";
        _this.data = [];
        return _this;
    }
    PublicHouseService.prototype.getData = function () {
        this.read();
        return this.data;
    };
    PublicHouseService.prototype.read = function () {
        var _this = this;
        if (this.data.length) {
            return _super.prototype.next.call(this, this.data);
        }
        this.fetch()
            .pipe(tap_1.tap(function (data) {
            _this.data = data;
        }))
            .subscribe(function (data) {
            _super.prototype.next.call(_this, data);
        });
    };
    PublicHouseService.prototype.save = function (data, isNew) {
        var _this = this;
        var action = isNew ? CREATE_ACTION : UPDATE_ACTION;
        this.reset();
        this.fetch(action, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    PublicHouseService.prototype.remove = function (data) {
        var _this = this;
        this.reset();
        this.fetch(REMOVE_ACTION, data)
            .subscribe(function () { return _this.read(); }, function () { return _this.read(); });
    };
    PublicHouseService.prototype.resetItem = function (dataItem) {
        if (!dataItem) {
            return;
        }
        // find orignal data item
        var originalDataItem = this.data.find(function (item) { return item.publicHouseId === dataItem.publicHouseId; });
        // revert changes
        Object.assign(originalDataItem, dataItem);
        _super.prototype.next.call(this, this.data);
    };
    PublicHouseService.prototype.reset = function () {
        this.data = [];
    };
    PublicHouseService.prototype.fetch = function (action, data) {
        if (action === void 0) { action = ''; }
        if (action == '') {
            return this.http.get(this.url)
                .pipe(map_1.map(function (res) { return res; }));
        }
        if (action == CREATE_ACTION) {
            console.log(data);
            return this.http
                .post(this.url, data)
                .pipe(map_1.map(function (res) { return res; }));
        }
        if (action == REMOVE_ACTION) {
            return this.http
                .delete(this.url + "/" + data.publicHouseId)
                .pipe(map_1.map(function (res) { return res; }));
        }
        if (action == UPDATE_ACTION) {
            console.log(data);
            return this.http
                .put(this.url + "/" + data.publicHouseId, data)
                .pipe(map_1.map(function (res) { return res; }));
        }
    };
    PublicHouseService.prototype.serializeModels = function (data) {
        return data ? "&models=" + JSON.stringify([data]) : '';
    };
    PublicHouseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PublicHouseService);
    return PublicHouseService;
}(BehaviorSubject_1.BehaviorSubject));
exports.PublicHouseService = PublicHouseService;


/***/ }),

/***/ "./src/app/navmenu/navmenu.component.css":
/***/ (function(module, exports) {

module.exports = "li .glyphicon {\r\n    margin-right: 10px;\r\n  }\r\n  \r\n  /* Highlighting rules for nav menu items */\r\n  \r\n  li.link-active a,\r\n  li.link-active a:hover,\r\n  li.link-active a:focus {\r\n    background-color: #4189C7;\r\n    color: white;\r\n  }\r\n  \r\n  /* Keep the nav menu independent of scrolling and on top of other items */\r\n  \r\n  .main-nav {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: 1;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    /* On small screens, convert the nav menu to a vertical sidebar */\r\n    .main-nav {\r\n      height: 100%;\r\n      width: calc(25% - 20px);\r\n    }\r\n  \r\n    .navbar {\r\n      border-radius: 0px;\r\n      border-width: 0px;\r\n      height: 100%;\r\n    }\r\n  \r\n    .navbar-header {\r\n      float: none;\r\n    }\r\n  \r\n    .navbar-collapse {\r\n      border-top: 1px solid #444;\r\n      padding: 0px;\r\n    }\r\n  \r\n    .navbar ul {\r\n      float: none;\r\n    }\r\n  \r\n    .navbar li {\r\n      float: none;\r\n      font-size: 15px;\r\n      margin: 6px;\r\n    }\r\n  \r\n      .navbar li a {\r\n        padding: 10px 16px;\r\n        border-radius: 4px;\r\n      }\r\n  \r\n    .navbar a {\r\n      /* If a menu item's text is too long, truncate it */\r\n      width: 100%;\r\n      white-space: nowrap;\r\n      overflow: hidden;\r\n      text-overflow: ellipsis;\r\n    }\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/navmenu/navmenu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='main-nav'>\n  <div class='navbar navbar-inverse'>\n    <div class='navbar-header'>\n      <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\n        <span class='sr-only'>Toggle navigation</span>\n        <span class='icon-bar'></span>\n        <span class='icon-bar'></span>\n        <span class='icon-bar'></span>\n      </button>\n      <a class='navbar-brand' [routerLink]=\"['/home']\">Library</a>\n    </div>\n    <div class='clearfix'></div>\n    <div class='navbar-collapse collapse'>\n      <ul class='nav navbar-nav'>\n        <li [routerLinkActive]=\"['link-active']\">\n          <a [routerLink]=\"['/home']\">\n            <span class='glyphicon glyphicon-home'></span> Home\n          </a>\n        </li>\n        <li [routerLinkActive]=\"['link-active']\">\n          <a [routerLink]=\"['library/book']\">\n            <span class='glyphicon glyphicon-book'></span> Books\n          </a>\n        </li>\n        <li [routerLinkActive]=\"['link-active']\">\n          <a [routerLink]=\"['library/brochure']\">\n            <span class='glyphicon glyphicon-picture'></span> Brochures\n          </a>\n        </li>\n        <li [routerLinkActive]=\"['link-active']\">\n          <a [routerLink]=\"['library/magazine']\">\n            <span class='glyphicon glyphicon-file'></span> Magazines\n          </a>\n        </li>\n        <li [routerLinkActive]=\"['link-active']\">\n          <a [routerLink]=\"['library/publichouse']\">\n            <span class='glyphicon glyphicon-briefcase'></span> Publication Houses\n          </a>\n        </li>\n        <li [routerLinkActive]=\"['link-active']\">\n          <a [routerLink]=\"['library/author']\">\n            <span class='glyphicon glyphicon-paperclip'></span> Authors\n          </a>\n        </li>\n        <li [routerLinkActive]=\"['link-active']\">\n          <a [routerLink]=\"['library/alllibrary']\">\n            <span class='glyphicon glyphicon-th-list'></span> All Library\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/navmenu/navmenu.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var NavmenuComponent = /** @class */ (function () {
    function NavmenuComponent() {
    }
    NavmenuComponent.prototype.ngOnInit = function () {
    };
    NavmenuComponent = __decorate([
        core_1.Component({
            selector: 'nav-menu',
            template: __webpack_require__("./src/app/navmenu/navmenu.component.html"),
            styles: [__webpack_require__("./src/app/navmenu/navmenu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavmenuComponent);
    return NavmenuComponent;
}());
exports.NavmenuComponent = NavmenuComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map