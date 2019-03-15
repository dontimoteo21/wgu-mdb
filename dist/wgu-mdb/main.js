(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./charts/charts.module": [
		"./src/app/charts/charts.module.ts",
		"charts-charts-module"
	],
	"./customers/customers.module": [
		"./src/app/customers/customers.module.ts",
		"customers-customers-module"
	],
	"./profile/profile.module": [
		"./src/app/profile/profile.module.ts",
		"profile-profile-module"
	],
	"./projects/projects.module": [
		"./src/app/projects/projects.module.ts",
		"projects-projects-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _containers_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/admin/admin.component */ "./src/app/admin/containers/admin/admin.component.ts");
/* harmony import */ var _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/users-list/users-list.component */ "./src/app/admin/components/users-list/users-list.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/admin/components/user/user.component.ts");
/* harmony import */ var _store_admin_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/admin.reducer */ "./src/app/admin/store/admin.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_admin_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/admin.effects */ "./src/app/admin/store/admin.effects.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user-detail/user-detail.component */ "./src/app/admin/components/user-detail/user-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_containers_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"], _components_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_4__["UsersListComponent"], _components_user_user_component__WEBPACK_IMPORTED_MODULE_5__["UserComponent"], _components_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_12__["UserDetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["CollapseModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["CardsFreeModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["DropdownModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["BadgeModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["ButtonsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["IconsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forFeature('admin', _store_admin_reducer__WEBPACK_IMPORTED_MODULE_6__["adminReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"].forFeature([_store_admin_effects__WEBPACK_IMPORTED_MODULE_9__["AdminEffects"]])
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/components/user-detail/user-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/user-detail/user-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-card class=\"mb-4\">\r\n  <mdb-card-body class=\"py-4\">\r\n    <div class=\"mb-5 back-button\" (click)=\"closeDetails()\">\r\n      <mdb-icon fas icon=\"arrow-left\" class=\"mr-2\"></mdb-icon>\r\n      <span>Back to user list</span>\r\n    </div>\r\n    <div class=\"d-flex flex-row justify-content-between flex-wrap\">\r\n      <div class=\"d-flex flex-row\">\r\n        <div class=\"mr-4\">\r\n          <img *ngIf=\"user.photoUrl\" src=\"{{ user.photoUrl }}\" height=\"90\" width=\"90\" class=\"rounded-circle z-depth-0\"\r\n            alt=\"avatar image\">\r\n        </div>\r\n\r\n        <div class=\"pt-2\">\r\n          <h4>{{ user.displayName }}</h4>\r\n          <div>\r\n            <span class=\"mr-2\">\r\n              <mdb-badge *ngIf=\"!user.isOnline\" color=\"red\">Offline</mdb-badge>\r\n              <mdb-badge *ngIf=\"user.isOnline\" color=\"green\">Online</mdb-badge>\r\n            </span>\r\n            <span>\r\n              <mdb-badge *ngIf=\"user.isAdmin\" color=\"purple\">Admin</mdb-badge>\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mt-3\">\r\n        <button *ngIf=\"!user.isAdmin\" mdbBtn outline=\"true\" color=\"red\" (click)=\"onAddAdmin()\">Add admin privileges</button>\r\n        <button *ngIf=\"user.isAdmin\" mdbBtn outline=\"true\" color=\"red\" (click)=\"onRemoveAdmin()\">Remove admin\r\n          privileges</button>\r\n      </div>\r\n    </div>\r\n\r\n    <hr class=\"my-5\">\r\n\r\n    <div class=\"d-flex flex-row align-items-center\">\r\n      <h4 class=\"mr-3\">Projects</h4>\r\n      <button mdbBtn color=\"primary\" size=\"sm\" (click)=\"loadProjects()\">Load user projects</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"userProjectsLoading\" class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 50px\">\r\n      <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n    </div>\r\n\r\n    <app-projects-list *ngIf=\"!userProjectsLoading && projects\" [editable]=\"false\" [projects]=\"projects\" (projectDeleted)=\"onProjectDelete($event)\"></app-projects-list>\r\n\r\n    <hr class=\"my-5\">\r\n\r\n    <div class=\"d-flex flex-row align-items-center mb-4\">\r\n      <h4 class=\"mr-3\">Customers</h4>\r\n      <button mdbBtn color=\"primary\" size=\"sm\" (click)=\"loadCustomers()\">Load user customers</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"userCustomersLoading\" class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 50px\">\r\n      <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\r\n        <span class=\"sr-only\">Loading...</span>\r\n      </div>\r\n    </div>\r\n\r\n    <app-customers-list *ngIf=\"!userCustomersLoading && customers\" [customers]=\"customers\" (customerDeleted)=\"onCustomerDelete($event)\"></app-customers-list>\r\n  </mdb-card-body>\r\n</mdb-card>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/components/user-detail/user-detail.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/admin/components/user-detail/user-detail.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".back-button {\n  cursor: pointer;\n  font-size: 1.8rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy91c2VyLWRldGFpbC9DOlxcRGV2XFx3Z3UtbWRiMS9zcmNcXGFwcFxcYWRtaW5cXGNvbXBvbmVudHNcXHVzZXItZGV0YWlsXFx1c2VyLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFlO0VBQ2Ysa0JBQWlCLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy91c2VyLWRldGFpbC91c2VyLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrLWJ1dHRvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMS44cmVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/components/user-detail/user-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/user-detail/user-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent() {
        this.detailsClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.projectsLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.customersLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.projectDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.customerDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addAdmin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeAdmin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UserDetailComponent.prototype.ngOnInit = function () {
    };
    UserDetailComponent.prototype.closeDetails = function () {
        this.detailsClosed.emit();
    };
    UserDetailComponent.prototype.loadProjects = function () {
        this.projectsLoad.emit();
    };
    UserDetailComponent.prototype.loadCustomers = function () {
        this.customersLoad.emit();
    };
    UserDetailComponent.prototype.onProjectDelete = function (project) {
        this.projectDeleted.emit(project);
    };
    UserDetailComponent.prototype.onCustomerDelete = function (customer) {
        this.customerDeleted.emit(customer);
    };
    UserDetailComponent.prototype.onAddAdmin = function () {
        this.addAdmin.emit(this.user);
    };
    UserDetailComponent.prototype.onRemoveAdmin = function () {
        this.removeAdmin.emit(this.user);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserDetailComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], UserDetailComponent.prototype, "projects", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], UserDetailComponent.prototype, "customers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UserDetailComponent.prototype, "userProjectsLoading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], UserDetailComponent.prototype, "userCustomersLoading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserDetailComponent.prototype, "detailsClosed", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserDetailComponent.prototype, "projectsLoad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserDetailComponent.prototype, "customersLoad", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserDetailComponent.prototype, "projectDeleted", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserDetailComponent.prototype, "customerDeleted", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserDetailComponent.prototype, "addAdmin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserDetailComponent.prototype, "removeAdmin", void 0);
    UserDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/admin/components/user-detail/user-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-detail.component.scss */ "./src/app/admin/components/user-detail/user-detail.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/user/user.component.html":
/*!***********************************************************!*\
  !*** ./src/app/admin/components/user/user.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-card>\r\n  <mdb-card-body class=\"text-center py-4\">\r\n    <div>\r\n      <span *ngIf=\"!user.isOnline\" class=\"mr-2 float-left\">\r\n        <mdb-badge color=\"red\">Offline</mdb-badge>\r\n      </span>\r\n      <span *ngIf=\"user.isOnline\" class=\"mr-2 float-left\">\r\n        <mdb-badge color=\"green\">Online</mdb-badge>\r\n      </span>\r\n      <span class=\"float-left\">\r\n        <mdb-badge *ngIf=\"user.isAdmin\" color=\"purple\">Admin</mdb-badge>\r\n      </span>\r\n      <mdb-icon fas icon=\"ellipsis-v\" class=\"float-right grey-text\"></mdb-icon>\r\n    </div>\r\n    <div class=\"mt-5\">\r\n      <img *ngIf=\"user.photoUrl\" src=\"{{ user.photoUrl }}\" height=\"90\" width=\"90\" class=\"rounded-circle z-depth-0\" alt=\"avatar image\">\r\n    </div>\r\n    <div class=\"mt-3\">\r\n      {{ user.displayName }}\r\n    </div>\r\n    <div class=\"d-flex flex-column\">\r\n      <button class=\"mt-3\" mdbBtn color=\"danger\" size=\"sm\" (click)=\"removeAdminPrivileges()\" *ngIf=\"user.isAdmin\">Remove\r\n        admin privileges</button>\r\n      <button class=\"mt-3\" mdbBtn color=\"danger\" size=\"sm\" (click)=\"addAdminPrivileges()\" *ngIf=\"!user.isAdmin\">Add\r\n        admin privileges</button>\r\n      <button class=\"mt-2\" mdbBtn color=\"primary\" size=\"sm\" (click)=\"selectUser()\">Manage content</button>\r\n    </div>\r\n  </mdb-card-body>\r\n</mdb-card>\r\n"

/***/ }),

/***/ "./src/app/admin/components/user/user.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/admin/components/user/user.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/components/user/user.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/components/user/user.component.ts ***!
  \*********************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
        this.userSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addAdmin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeAdmin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.selectUser = function () {
        this.userSelected.emit(this.user);
    };
    UserComponent.prototype.addAdminPrivileges = function () {
        this.addAdmin.emit(this.user);
    };
    UserComponent.prototype.removeAdminPrivileges = function () {
        this.removeAdmin.emit(this.user);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "userSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "addAdmin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "removeAdmin", void 0);
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/admin/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/admin/components/user/user.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/admin/components/users-list/users-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/users-list/users-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"users-list d-flex flex-wrap\">\r\n  <div class=\"user\" *ngFor=\"let user of users; trackBy: trackByFn\">\r\n    <app-user [user]=\"user\" (userSelected)=\"onUserSelected($event)\" (addAdmin)=\"onAddAdmin($event)\" (removeAdmin)=\"onRemoveAdmin($event)\"></app-user>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/components/users-list/users-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/admin/components/users-list/users-list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".users-list {\n  box-sizing: border-box;\n  justify-content: center; }\n\n.user {\n  width: 80%;\n  margin: 1rem; }\n\n@media (min-width: 768px) {\n  .user {\n    width: calc(50% - 2rem); }\n  .users-list {\n    justify-content: normal; } }\n\n@media (min-width: 992px) {\n  .user {\n    width: calc(33.3333% - 2rem); } }\n\n@media (min-width: 1200px) {\n  .user {\n    width: calc(25% - 3rem); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29tcG9uZW50cy91c2Vycy1saXN0L0M6XFxEZXZcXHdndS1tZGIxL3NyY1xcYXBwXFxhZG1pblxcY29tcG9uZW50c1xcdXNlcnMtbGlzdFxcdXNlcnMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFzQjtFQUN0Qix3QkFBdUIsRUFDeEI7O0FBRUQ7RUFDRSxXQUFVO0VBQ1YsYUFBWSxFQUNiOztBQUVEO0VBQ0U7SUFDSSx3QkFBdUIsRUFDMUI7RUFFRDtJQUNJLHdCQUF1QixFQUMxQixFQUFBOztBQUdIO0VBQ0U7SUFDSSw2QkFBNEIsRUFDL0IsRUFBQTs7QUFHSDtFQUNFO0lBQ0ksd0JBQXVCLEVBQzFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb21wb25lbnRzL3VzZXJzLWxpc3QvdXNlcnMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2Vycy1saXN0IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udXNlciB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC51c2VyIHtcclxuICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMnJlbSk7XHJcbiAgfVxyXG5cclxuICAudXNlcnMtbGlzdCB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogbm9ybWFsO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLnVzZXIge1xyXG4gICAgICB3aWR0aDogY2FsYygzMy4zMzMzJSAtIDJyZW0pO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC51c2VyIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gM3JlbSk7XHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/components/users-list/users-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/components/users-list/users-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersListComponent = /** @class */ (function () {
    function UsersListComponent() {
        this.userSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addAdmin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeAdmin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UsersListComponent.prototype.ngOnInit = function () {
    };
    UsersListComponent.prototype.onUserSelected = function (user) {
        this.userSelected.emit(user);
    };
    UsersListComponent.prototype.onAddAdmin = function (user) {
        this.addAdmin.emit(user);
    };
    UsersListComponent.prototype.onRemoveAdmin = function (user) {
        this.removeAdmin.emit(user);
    };
    UsersListComponent.prototype.trackByFn = function (index) {
        return index;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], UsersListComponent.prototype, "users", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UsersListComponent.prototype, "userSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UsersListComponent.prototype, "addAdmin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UsersListComponent.prototype, "removeAdmin", void 0);
    UsersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users-list',
            template: __webpack_require__(/*! ./users-list.component.html */ "./src/app/admin/components/users-list/users-list.component.html"),
            styles: [__webpack_require__(/*! ./users-list.component.scss */ "./src/app/admin/components/users-list/users-list.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/admin/containers/admin/admin.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/containers/admin/admin.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-page-container container-fluid\">\r\n  <div class=\"section-header\">\r\n    <h3 class=\"grey-text\">Admin panel</h3>\r\n    <p class=\"grey-text pt-3\">Change settings for every user in your application</p>\r\n  </div>\r\n\r\n  <div *ngIf=\"usersListLoading$ | async\" class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 300px\">\r\n    <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\r\n      <span class=\"sr-only\">Loading...</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"!(usersListLoading$ | async)\" class=\"container-fluid mt-3 pb-5\">\r\n    <app-users-list *ngIf=\"!selectedUser\" [users]=\"users$ | async\" (userSelected)=\"onUserSelect($event)\" (addAdmin)=\"addAdminPrivileges($event)\"\r\n      (removeAdmin)=\"removeAdminPrivileges($event)\"></app-users-list>\r\n    <app-user-detail *ngIf=\"selectedUser\" [user]=\"selectedUser$ | async\" [projects]=\"userProjects$ | async\" [customers]=\"userCustomers$ | async\"\r\n      [userProjectsLoading]=\"userProjectsLoading$ | async\" [userCustomersLoading]=\"userCustomersLoading$ | async\"\r\n      (detailsClosed)=\"onDetailsClose()\" (projectsLoad)=\"onProjectsLoad()\" (customersLoad)=\"onCustomersLoad()\"\r\n      (projectDeleted)=\"onProjectDelete($event)\" (customerDeleted)=\"onCustomerDelete($event)\" (addAdmin)=\"addAdminPrivileges($event)\"\r\n      (removeAdmin)=\"removeAdminPrivileges($event)\"></app-user-detail>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/containers/admin/admin.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/admin/containers/admin/admin.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-page-container {\n  background: #000000 url('northstar.jpg');\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vY29udGFpbmVycy9hZG1pbi9DOlxcRGV2XFx3Z3UtbWRiMS9zcmNcXGFwcFxcYWRtaW5cXGNvbnRhaW5lcnNcXGFkbWluXFxhZG1pbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlDQUErRDtFQUMvRCx1QkFBc0IsRUFDekIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9jb250YWluZXJzL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtcGFnZS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMCB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbm9ydGhzdGFyLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/containers/admin/admin.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/containers/admin/admin.component.ts ***!
  \***********************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/admin.actions */ "./src/app/admin/store/admin.actions.ts");
/* harmony import */ var _store_admin_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/admin.selectors */ "./src/app/admin/store/admin.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/confirm-modal/confirm-modal.component */ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminComponent = /** @class */ (function () {
    function AdminComponent(store, modalService) {
        this.store = store;
        this.modalService = modalService;
        this.modalConfig = {
            class: 'modal-dialog-centered'
        };
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.users$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_store_admin_selectors__WEBPACK_IMPORTED_MODULE_3__["getUsersList"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (users) {
            if (!users || (users && users.length === 0)) {
                _this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["GetUsersList"]());
            }
            return users;
        }));
        this.usersListLoading$ = this.store.select(_store_admin_selectors__WEBPACK_IMPORTED_MODULE_3__["getUsersListLoading"]);
        this.userProjectsLoading$ = this.store.select(_store_admin_selectors__WEBPACK_IMPORTED_MODULE_3__["getUserProjectsLoading"]);
        this.userCustomersLoading$ = this.store.select(_store_admin_selectors__WEBPACK_IMPORTED_MODULE_3__["getUserCustomersLoading"]);
    };
    AdminComponent.prototype.onUserSelect = function (user) {
        this.uid = user.uid;
        this.selectedUser = user;
        this.selectedUser$ = this.store.select(_store_admin_selectors__WEBPACK_IMPORTED_MODULE_3__["getSelectedUser"], user.uid);
        this.userProjects$ = this.store.select(_store_admin_selectors__WEBPACK_IMPORTED_MODULE_3__["getUserProjects"], user.uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (projects) {
            if (projects && projects.length !== 0) {
                return projects;
            }
            else {
                return null;
            }
        }));
        this.userCustomers$ = this.store.select(_store_admin_selectors__WEBPACK_IMPORTED_MODULE_3__["getUserCustomers"], user.uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (customers) {
            if (customers && customers.length !== 0) {
                return customers;
            }
            else {
                return null;
            }
        }));
    };
    AdminComponent.prototype.onProjectsLoad = function () {
        this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["GetUserProjects"]({ uid: this.uid }));
    };
    AdminComponent.prototype.onCustomersLoad = function () {
        this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["GetUserCustomers"]({ uid: this.uid }));
    };
    AdminComponent.prototype.onDetailsClose = function () {
        this.selectedUser = null;
    };
    AdminComponent.prototype.openProjectConfirmModal = function (project) {
        var _this = this;
        this.modalRef = this.modalService.show(_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"], this.modalConfig);
        this.modalRef.content.confirmation
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(function (confirmation) {
            if (confirmation) {
                _this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteUserProject"]({
                    userId: _this.selectedUser.key,
                    projectId: project.key
                }));
            }
        });
    };
    AdminComponent.prototype.openCustomerConfirmModal = function (customer) {
        var _this = this;
        this.modalRef = this.modalService.show(_shared_components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmModalComponent"], this.modalConfig);
        this.modalRef.content.confirmation
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe(function (confirmation) {
            if (confirmation) {
                _this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["DeleteUserCustomer"]({
                    userId: _this.selectedUser.key,
                    customerId: customer.key
                }));
            }
        });
    };
    AdminComponent.prototype.onCustomerDelete = function (customer) {
        this.openCustomerConfirmModal(customer);
    };
    AdminComponent.prototype.onProjectDelete = function (project) {
        this.openProjectConfirmModal(project);
    };
    AdminComponent.prototype.addAdminPrivileges = function (user) {
        this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AddAdminPrivileges"]({ userId: user.key }));
    };
    AdminComponent.prototype.removeAdminPrivileges = function (user) {
        this.store.dispatch(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["RemoveAdminPrivileges"]({ userId: user.key }));
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/containers/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/containers/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_5__["MDBModalService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/guard/admin.guard.ts":
/*!********************************************!*\
  !*** ./src/app/admin/guard/admin.guard.ts ***!
  \********************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/admin/services/admin.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminGuard = /** @class */ (function () {
    function AdminGuard(router, adminService, afAuth) {
        this.router = router;
        this.adminService = adminService;
        this.afAuth = afAuth;
    }
    AdminGuard.prototype.canActivate = function () {
        var _this = this;
        return this.afAuth.authState
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) {
            if (!user) {
                _this.router.navigateByUrl('/login');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
            }
            return _this.adminService.checkAdminRole(user.uid)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (isAdmin) {
                if (isAdmin) {
                    return true;
                }
                else {
                    _this.router.navigateByUrl('');
                    return false;
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function () {
                _this.router.navigateByUrl('');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
            }));
        }));
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/admin/services/admin.service.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/services/admin.service.ts ***!
  \*************************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminService = /** @class */ (function () {
    function AdminService(db) {
        this.db = db;
        this.selectedUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.selectedUser$ = this.selectedUser.asObservable();
    }
    AdminService.prototype.getUsersList = function () {
        var usersRef = this.db.list('users');
        return usersRef.snapshotChanges();
    };
    AdminService.prototype.getUserProjects = function (uid) {
        var projectsRef = this.db.list('projects/' + uid);
        return projectsRef.snapshotChanges();
    };
    AdminService.prototype.getUserCustomers = function (uid) {
        var customersRef = this.db.list('customers/' + uid);
        return customersRef.snapshotChanges();
    };
    AdminService.prototype.checkAdminRole = function (uid) {
        return this.db.object('admins/' + uid).valueChanges();
    };
    AdminService.prototype.deleteUserProject = function (uid, projectId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.db.object("projects/" + uid + "/" + projectId).remove());
    };
    AdminService.prototype.deleteUserCustomer = function (uid, customerId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.db.object("customers/" + uid + "/" + customerId).remove());
    };
    AdminService.prototype.addAdminPrivileges = function (uid) {
        var adminsRef = this.db.object('admins/' + uid);
        this.db.object('users/' + uid).update({ isAdmin: true });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(adminsRef.set(true));
    };
    AdminService.prototype.removeAdminPrivileges = function (uid) {
        this.db.object('users/' + uid).update({ isAdmin: false });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.db.object('admins/' + uid).remove());
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/admin/store/admin.actions.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/store/admin.actions.ts ***!
  \**********************************************/
/*! exports provided: AdminActionTypes, GetUsersList, UsersListFetched, GetUserProjects, DeleteUserProject, UserProjectsLoaded, GetUserCustomers, DeleteUserCustomer, UserCustomersLoaded, AddAdminPrivileges, RemoveAdminPrivileges, AdminError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminActionTypes", function() { return AdminActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUsersList", function() { return GetUsersList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListFetched", function() { return UsersListFetched; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserProjects", function() { return GetUserProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserProject", function() { return DeleteUserProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProjectsLoaded", function() { return UserProjectsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUserCustomers", function() { return GetUserCustomers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserCustomer", function() { return DeleteUserCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCustomersLoaded", function() { return UserCustomersLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdminPrivileges", function() { return AddAdminPrivileges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveAdminPrivileges", function() { return RemoveAdminPrivileges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminError", function() { return AdminError; });
var AdminActionTypes;
(function (AdminActionTypes) {
    AdminActionTypes["GET_USERS_LIST"] = "[Admin] Get Users List";
    AdminActionTypes["USERS_LIST_FETCHED"] = "[Admin] Users list fetched";
    AdminActionTypes["GET_USER_PROJECTS"] = "[Admin] Get user projects";
    AdminActionTypes["USERS_PROJECTS_LOADED"] = "[Admin] User projects loaded";
    AdminActionTypes["DELETE_USER_PROJECT"] = "[Admin] Delete user project";
    AdminActionTypes["GET_USER_CUSTOMERS"] = "[Admin] Get user customers";
    AdminActionTypes["USERS_CUSTOMERS_LOADED"] = "[Admin] User customers loaded";
    AdminActionTypes["DELETE_USER_CUSTOMER"] = "[Admin] Delete user customer";
    AdminActionTypes["ADD_ADMIN_PRIVILEGES"] = "[Admin] Add admin privileges";
    AdminActionTypes["REMOVE_ADMIN_PRIVILEGES"] = "[Admin] Remove admin privileges";
    AdminActionTypes["ADMIN_ERROR"] = "[Admin] Error";
})(AdminActionTypes || (AdminActionTypes = {}));
var GetUsersList = /** @class */ (function () {
    function GetUsersList() {
        this.type = AdminActionTypes.GET_USERS_LIST;
    }
    return GetUsersList;
}());

var UsersListFetched = /** @class */ (function () {
    function UsersListFetched(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.USERS_LIST_FETCHED;
    }
    return UsersListFetched;
}());

var GetUserProjects = /** @class */ (function () {
    function GetUserProjects(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.GET_USER_PROJECTS;
    }
    return GetUserProjects;
}());

var DeleteUserProject = /** @class */ (function () {
    function DeleteUserProject(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.DELETE_USER_PROJECT;
    }
    return DeleteUserProject;
}());

var UserProjectsLoaded = /** @class */ (function () {
    function UserProjectsLoaded(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.USERS_PROJECTS_LOADED;
    }
    return UserProjectsLoaded;
}());

var GetUserCustomers = /** @class */ (function () {
    function GetUserCustomers(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.GET_USER_CUSTOMERS;
    }
    return GetUserCustomers;
}());

var DeleteUserCustomer = /** @class */ (function () {
    function DeleteUserCustomer(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.DELETE_USER_CUSTOMER;
    }
    return DeleteUserCustomer;
}());

var UserCustomersLoaded = /** @class */ (function () {
    function UserCustomersLoaded(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.USERS_CUSTOMERS_LOADED;
    }
    return UserCustomersLoaded;
}());

var AddAdminPrivileges = /** @class */ (function () {
    function AddAdminPrivileges(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.ADD_ADMIN_PRIVILEGES;
    }
    return AddAdminPrivileges;
}());

var RemoveAdminPrivileges = /** @class */ (function () {
    function RemoveAdminPrivileges(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.REMOVE_ADMIN_PRIVILEGES;
    }
    return RemoveAdminPrivileges;
}());

var AdminError = /** @class */ (function () {
    function AdminError(payload) {
        this.payload = payload;
        this.type = AdminActionTypes.ADMIN_ERROR;
    }
    return AdminError;
}());



/***/ }),

/***/ "./src/app/admin/store/admin.effects.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/store/admin.effects.ts ***!
  \**********************************************/
/*! exports provided: AdminEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEffects", function() { return AdminEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../store/admin.actions */ "./src/app/admin/store/admin.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/admin.service */ "./src/app/admin/services/admin.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AdminEffects = /** @class */ (function () {
    function AdminEffects(actions$, adminService) {
        var _this = this;
        this.actions$ = actions$;
        this.adminService = adminService;
        this.getUsersList$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminActionTypes"].GET_USERS_LIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () { return _this.adminService.getUsersList()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (users) {
            var usersList = users.map(function (res) {
                var key = res.payload.key;
                var user = res.payload.val();
                return {
                    key: key,
                    uid: user.uid,
                    displayName: user.displayName,
                    email: user.email,
                    providerId: user.providerId,
                    photoUrl: user.photoUrl,
                    isNewUser: user.isNewUser,
                    isAdmin: user.isAdmin,
                    isOnline: user.isOnline
                };
            });
            return (new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["UsersListFetched"]({ usersList: usersList }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminError"]({ error: error })); })); }));
        this.getUserProjects$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminActionTypes"].GET_USER_PROJECTS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (payload) { return _this.adminService.getUserProjects(payload.uid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var projectsData = data.map(function (res) {
                var key = res.payload.key;
                var project = res.payload.val();
                return {
                    key: key || null,
                    title: project.title || null,
                    description: project.description || null,
                    photoUrl: project.photoUrl || null
                };
            });
            return (new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["UserProjectsLoaded"]({ uid: payload.uid, userProjects: projectsData }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminError"]({ error: error })); })); }));
        this.deleteUserProject$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminActionTypes"].DELETE_USER_PROJECT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (payload) { return _this.adminService.deleteUserProject(payload.userId, payload.projectId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminError"]({ error: error })); })); }));
        this.getUserCustomers$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminActionTypes"].GET_USER_CUSTOMERS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (payload) { return _this.adminService.getUserCustomers(payload.uid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            var customersData = data.map(function (res) {
                var key = res.payload.key;
                var customer = res.payload.val();
                return {
                    key: key,
                    id: customer.id,
                    name: customer.name,
                    description: customer.description
                };
            });
            return (new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["UserCustomersLoaded"]({ uid: payload.uid, userCustomers: customersData }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminError"]({ error: error })); })); }));
        this.deleteUserCustomer$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminActionTypes"].DELETE_USER_CUSTOMER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (payload) { return _this.adminService.deleteUserCustomer(payload.userId, payload.customerId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminError"]({ error: error })); })); }));
        this.addAdminPrivileges$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminActionTypes"].ADD_ADMIN_PRIVILEGES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (payload) { return _this.adminService.addAdminPrivileges(payload.userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminError"]({ error: error })); })); }));
        this.removeAdminPrivileges$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminActionTypes"].REMOVE_ADMIN_PRIVILEGES), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (payload) { return _this.adminService.removeAdminPrivileges(payload.userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _store_admin_actions__WEBPACK_IMPORTED_MODULE_2__["AdminError"]({ error: error })); })); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AdminEffects.prototype, "getUsersList$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AdminEffects.prototype, "getUserProjects$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AdminEffects.prototype, "deleteUserProject$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AdminEffects.prototype, "getUserCustomers$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AdminEffects.prototype, "deleteUserCustomer$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AdminEffects.prototype, "addAdminPrivileges$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AdminEffects.prototype, "removeAdminPrivileges$", void 0);
    AdminEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"], _services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]])
    ], AdminEffects);
    return AdminEffects;
}());



/***/ }),

/***/ "./src/app/admin/store/admin.reducer.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/store/admin.reducer.ts ***!
  \**********************************************/
/*! exports provided: adminReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminReducer", function() { return adminReducer; });
/* harmony import */ var _admin_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.state */ "./src/app/admin/store/admin.state.ts");
/* harmony import */ var _admin_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.actions */ "./src/app/admin/store/admin.actions.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};


function adminReducer(state, action) {
    if (state === void 0) { state = _admin_state__WEBPACK_IMPORTED_MODULE_0__["adminInitialState"]; }
    var _a, _b;
    switch (action.type) {
        case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["AdminActionTypes"].GET_USERS_LIST: {
            return Object.assign({}, state, {
                usersListLoading: true
            });
        }
        case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["AdminActionTypes"].USERS_LIST_FETCHED: {
            return Object.assign({}, state, {
                usersList: action.payload.usersList,
                usersListLoading: false
            });
        }
        case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["AdminActionTypes"].GET_USER_PROJECTS: {
            return Object.assign({}, state, {
                userProjectsLoading: true
            });
        }
        case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["AdminActionTypes"].USERS_PROJECTS_LOADED: {
            return Object.assign({}, state, {
                userProjects: __assign({}, state.userProjects, (_a = {}, _a[action.payload.uid] = action.payload.userProjects, _a)),
                userProjectsLoading: false
            });
        }
        case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["AdminActionTypes"].GET_USER_CUSTOMERS: {
            return Object.assign({}, state, {
                userCustomersLoading: true
            });
        }
        case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["AdminActionTypes"].USERS_CUSTOMERS_LOADED: {
            return Object.assign({}, state, {
                userCustomers: __assign({}, state.userCustomers, (_b = {}, _b[action.payload.uid] = action.payload.userCustomers, _b)),
                userCustomersLoading: false
            });
        }
        case _admin_actions__WEBPACK_IMPORTED_MODULE_1__["AdminActionTypes"].ADMIN_ERROR: {
            return Object.assign({}, state, {
                error: action.payload.error
            });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/admin/store/admin.selectors.ts":
/*!************************************************!*\
  !*** ./src/app/admin/store/admin.selectors.ts ***!
  \************************************************/
/*! exports provided: getAdminState, getUsersList, getUsersListLoading, getSelectedUser, getUserProjects, getUserCustomers, getUserProjectsLoading, getUserCustomersLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAdminState", function() { return getAdminState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersList", function() { return getUsersList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersListLoading", function() { return getUsersListLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedUser", function() { return getSelectedUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserProjects", function() { return getUserProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserCustomers", function() { return getUserCustomers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserProjectsLoading", function() { return getUserProjectsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserCustomersLoading", function() { return getUserCustomersLoading; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var getAdminState = function (state) { return state.admin; };
var getUsersList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAdminState, function (admin) { return admin.usersList; });
var getUsersListLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAdminState, function (admin) { return admin.usersListLoading; });
var getSelectedUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getUsersList, function (usersList, uid) { return usersList.filter(function (user) { return user.uid === uid; })[0]; });
var getUserProjects = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAdminState, function (admin, uid) {
    if (admin.userProjects.hasOwnProperty(uid)) {
        return admin.userProjects[uid];
    }
    else {
        return null;
    }
});
var getUserCustomers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAdminState, function (admin, uid) {
    if (admin.userCustomers.hasOwnProperty(uid)) {
        return admin.userCustomers[uid];
    }
    else {
        return null;
    }
});
var getUserProjectsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAdminState, function (admin) { return admin.userProjectsLoading; });
var getUserCustomersLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAdminState, function (admin) { return admin.userCustomersLoading; });


/***/ }),

/***/ "./src/app/admin/store/admin.state.ts":
/*!********************************************!*\
  !*** ./src/app/admin/store/admin.state.ts ***!
  \********************************************/
/*! exports provided: adminInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminInitialState", function() { return adminInitialState; });
// import { Project } from 'src/app/projects/models/project.model';
var adminInitialState = {
    usersList: [],
    usersListLoading: false,
    userProjects: {},
    userProjectsLoading: false,
    userCustomers: {},
    userCustomersLoading: false,
    error: null
};


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/components/register/register.component */ "./src/app/auth/components/register/register.component.ts");
/* harmony import */ var _core_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/home/home.component */ "./src/app/core/home/home.component.ts");
/* harmony import */ var _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/components/login/login.component */ "./src/app/auth/components/login/login.component.ts");
/* harmony import */ var _auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/guards/auth.guard */ "./src/app/auth/guards/auth.guard.ts");
/* harmony import */ var _core_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/main/main.component */ "./src/app/core/main/main.component.ts");
/* harmony import */ var _core_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/page-not-found/page-not-found.component */ "./src/app/core/page-not-found/page-not-found.component.ts");
/* harmony import */ var _admin_containers_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/containers/admin/admin.component */ "./src/app/admin/containers/admin/admin.component.ts");
/* harmony import */ var _admin_guard_admin_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/guard/admin.guard */ "./src/app/admin/guard/admin.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: _core_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], children: [
            { path: '', component: _core_main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"] },
            { path: 'projects', loadChildren: './projects/projects.module#ProjectsModule', canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
            { path: 'customers', loadChildren: './customers/customers.module#CustomersModule', canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule', canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsDataModule', canActivate: [_auth_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
            { path: 'admin-panel', component: _admin_containers_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"], canActivate: [_admin_guard_admin_guard__WEBPACK_IMPORTED_MODULE_9__["AdminGuard"]] }
        ] },
    { path: 'register', component: _auth_components_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'login', component: _auth_components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: '**', component: _core_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <app-header [user]=\"user$ | async\" [isLoggedIn]=\"isLoggedIn$ | async\" [isLoading]=\"isLoading$ | async\" [isAdmin]=\"isAdmin$ | async\"\r\n    (logout)=\"onLogout($event)\"></app-header>\r\n</header>\r\n\r\n<main>\r\n  <router-outlet></router-outlet>\r\n</main>\r\n\r\n<footer class=\"app-footer\" [ngClass]=\"{'footer-absolute': (isLoggedIn$ | async) || (isLoading$ | async)}\">\r\n  <app-footer></app-footer>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
/* harmony import */ var _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.user$ = this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getUser"]);
        this.isLoggedIn$ = this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsLoggedIn"]);
        this.isLoading$ = this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsLoading"]);
        this.isAdmin$ = this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsAdmin"]);
    };
    AppComponent.prototype.onLogout = function (user) {
        this.store.dispatch(new _auth_store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["LogoutRequested"]({ user: user }));
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
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
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_11__["AuthModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_18__["ModalModule"].forRoot(),
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_17__["AdminModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_19__["DragDropModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].firebase),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__["AngularFirestoreModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_15__["AngularFireDatabaseModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_7__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_7__["metaReducers"] }),
                !_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument() : [],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forRoot([])
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_auth_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/auth.reducer */ "./src/app/auth/store/auth.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _store_auth_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store/auth.effects */ "./src/app/auth/store/auth.effects.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/auth/components/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/auth/components/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["InputsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["InputUtilitiesModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["ButtonsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["CardsFreeModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["WavesModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_9__["IconsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('auth', _store_auth_reducer__WEBPACK_IMPORTED_MODULE_3__["authReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature([_store_auth_effects__WEBPACK_IMPORTED_MODULE_5__["AuthEffects"]])
            ],
            declarations: [_components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]],
            exports: [_components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/components/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/auth/components/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid full-page-container\">\r\n  <div class=\"row h-100 justify-content-center align-items-center\">\r\n    <div class=\"col-lg-4 col-sm-8 animated fadeIn\">\r\n      <!-- Material form login -->\r\n      <mdb-card class=\"z-depth-2\">\r\n\r\n        <div class=\"white text-center py-4\">\r\n          <h5>\r\n            <strong>Log in</strong>\r\n          </h5>\r\n        </div>\r\n\r\n\r\n        <!--Card content-->\r\n        <mdb-card-body class=\"px-lg-5 pt-0\">\r\n          <div *ngIf=\"error$ | async as error\" class=\"alert alert-danger\" role=\"alert\">\r\n            {{ error }}\r\n          </div>\r\n          <!-- Form -->\r\n          <form [formGroup]=\"loginForm\" class=\"text-center\" style=\"color: #757575;\">\r\n\r\n            <!-- Email -->\r\n            <div class=\"md-form\">\r\n              <input mdbValidate [validateSuccess]=\"false\" type=\"email\" id=\"email\" class=\"form-control\" formControlName=\"email\" mdbInput>\r\n              <label for=\"email\">E-mail</label>\r\n              <mdb-error *ngIf=\"email && email.invalid && (email.dirty || email.touched)\">Email is required</mdb-error>\r\n            </div>\r\n\r\n            <!-- Password -->\r\n            <div class=\"md-form\">\r\n              <input mdbValidate [validateSuccess]=\"false\" type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" mdbInput>\r\n              <label for=\"password\">Password</label>\r\n              <mdb-error *ngIf=\"password && password.invalid && (password.dirty || password.touched)\">Password is required</mdb-error>\r\n            </div>\r\n\r\n            <!-- Sign in button -->\r\n            <button mdbBtn color=\"primary\" block=\"true\" class=\"my-4 waves-effect z-depth-0\"\r\n              mdbWavesEffect type=\"submit\" (click)=\"onLogin()\">Log in</button>\r\n\r\n            <!-- Register -->\r\n            <p>Not a member?\r\n              <a routerLink=\"/register\">Register</a>\r\n            </p>\r\n\r\n            <!-- Social login -->\r\n            <p>or log in with:</p>\r\n            <a type=\"button\" class=\"mr-4\" (click)=\"onFacebookLogin('facebook')\">\r\n              <mdb-icon fab icon=\"facebook-f\"></mdb-icon>\r\n            </a>\r\n            <a type=\"button\" class=\"mr-4\" (click)=\"onTwitterLogin('twitter')\">\r\n              <mdb-icon fab icon=\"twitter\"></mdb-icon>\r\n            </a>\r\n            <a type=\"button\" (click)=\"onGoogleLogin('google')\">\r\n              <mdb-icon fab icon=\"google-plus-g\"></mdb-icon>\r\n            </a>\r\n          </form>\r\n          <!-- Form -->\r\n\r\n        </mdb-card-body>\r\n\r\n      </mdb-card>\r\n      <!-- Material form login -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/components/login/login.component.scss":
/*!************************************************************!*\
  !*** ./src/app/auth/components/login/login.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-page-container {\n  background-image: url('northstar.jpg');\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb21wb25lbnRzL2xvZ2luL0M6XFxEZXZcXHdndS1tZGIxL3NyY1xcYXBwXFxhdXRoXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1Q0FBNkQ7RUFDN0QsdUJBQXNCLEVBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtcGFnZS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL25vcnRoc3Rhci5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/auth/components/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/auth/components/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var _store_auth_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(store) {
        this.store = store;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
        this.error$ = this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_auth_selectors__WEBPACK_IMPORTED_MODULE_4__["getError"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (error) {
            if (error && (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password')) {
                return 'Invalid login or password';
            }
            else {
                return null;
            }
        }));
    };
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () { return this.loginForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () { return this.loginForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onLogin = function () {
        if (this.loginForm.valid) {
            this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["LoginRequested"](this.loginForm.value));
        }
    };
    LoginComponent.prototype.onGoogleLogin = function (authProvider) {
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SocialLogin"]({ authProvider: authProvider }));
    };
    LoginComponent.prototype.onFacebookLogin = function (authProvider) {
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SocialLogin"]({ authProvider: authProvider }));
    };
    LoginComponent.prototype.onTwitterLogin = function (authProvider) {
        this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["SocialLogin"]({ authProvider: authProvider }));
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/components/register/register.component.html":
/*!******************************************************************!*\
  !*** ./src/app/auth/components/register/register.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid full-page-container\">\r\n  <div class=\"row h-100 justify-content-center align-items-center\">\r\n    <div class=\"col-lg-4 col-sm-8 animated fadeIn\">\r\n      <!-- Material form login -->\r\n      <mdb-card class=\"z-depth-2\">\r\n\r\n        <div class=\"text-center py-4\">\r\n          <h5>\r\n            <strong>Register</strong>\r\n          </h5>\r\n        </div>\r\n\r\n\r\n        <!--Card content-->\r\n        <mdb-card-body class=\"px-lg-5 pt-0\">\r\n          <div *ngIf=\"error$ | async as error\" class=\"alert alert-danger\" role=\"alert\">\r\n            {{ error }}\r\n          </div>\r\n          <!-- Form -->\r\n          <form [formGroup]=\"registerForm\" class=\"text-center\" style=\"color: #757575;\">\r\n\r\n            <!-- Username -->\r\n            <div class=\"md-form\">\r\n              <input type=\"text\" id=\"username\" class=\"form-control\" formControlName=\"username\" mdbInput>\r\n              <label for=\"username\">Username</label>\r\n            </div>\r\n\r\n            <!-- Email -->\r\n            <div class=\"md-form\">\r\n              <input mdbValidate [validateSuccess]=\"false\" type=\"email\" id=\"email\" class=\"form-control\" formControlName=\"email\" mdbInput>\r\n              <label for=\"email\">E-mail</label>\r\n              <mdb-error *ngIf=\"email && email.invalid && (email.dirty || email.touched)\">Email is required</mdb-error>\r\n            </div>\r\n\r\n            <!-- Password -->\r\n            <div class=\"md-form\">\r\n              <input mdbValidate [validateSuccess]=\"false\" type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" mdbInput>\r\n              <label for=\"password\">Password</label>\r\n              <mdb-error *ngIf=\"password && password.invalid && password.errors && password.errors.required && (password.dirty || password.touched)\">Password is required</mdb-error>\r\n              <mdb-error *ngIf=\"password && password.invalid && password.errors && password.errors.minlength && (password.dirty || password.touched)\">Password must be at least 6 characters long</mdb-error>\r\n            </div>\r\n\r\n            <!-- Sign in button -->\r\n            <button mdbBtn color=\"primary\" block=\"true\" class=\"my-4 waves-effect z-depth-0\"\r\n              mdbWavesEffect type=\"submit\" (click)=\"onRegister()\">Register</button>\r\n\r\n            <!-- Register -->\r\n            <p>Already have an account?\r\n              <a routerLink=\"/login\">Log In</a>\r\n            </p>\r\n\r\n          </form>\r\n          <!-- Form -->\r\n\r\n        </mdb-card-body>\r\n\r\n      </mdb-card>\r\n      <!-- Material form login -->\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/components/register/register.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/auth/components/register/register.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-page-container {\n  background: #000000 url('northstar.jpg');\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb21wb25lbnRzL3JlZ2lzdGVyL0M6XFxEZXZcXHdndS1tZGIxL3NyY1xcYXBwXFxhdXRoXFxjb21wb25lbnRzXFxyZWdpc3RlclxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5Q0FBK0Q7RUFDL0QsdUJBQXNCLEVBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtcGFnZS1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMCB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvbm9ydGhzdGFyLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/components/register/register.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/auth/components/register/register.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var _store_auth_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(store) {
        this.store = store;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)])
        });
        this.error$ = this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_auth_selectors__WEBPACK_IMPORTED_MODULE_4__["getError"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (error) {
            if (error) {
                if (error.code === 'auth/weak-password') {
                    return error.message;
                }
                else if (error.code === 'auth/email-already-in-use') {
                    return 'User with this email address already exist';
                }
            }
            else {
                return null;
            }
        }));
    };
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () { return this.registerForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () { return this.registerForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onRegister = function () {
        var username = this.registerForm.value.username;
        var email = this.registerForm.value.email;
        var password = this.registerForm.value.password;
        if (this.registerForm.valid) {
            this.store.dispatch(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_3__["RegisterRequested"]({ username: username, email: email, password: password }));
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/auth/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/auth/components/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/auth/guards/auth.guard.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/guards/auth.guard.ts ***!
  \*******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/auth/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.getUser = function () {
        return this.authService.getAuthState();
    };
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return this.getUser()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            if (!user) {
                _this.router.navigateByUrl('/login');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () {
            _this.router.navigateByUrl('/login');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(afAuth, db) {
        this.afAuth = afAuth;
        this.db = db;
    }
    AuthService.prototype.register = function (email, password) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.afAuth.auth.createUserWithEmailAndPassword(email, password));
    };
    AuthService.prototype.updateProfile = function (displayName, photoUrl) {
        var userProfile = this.afAuth.auth.currentUser;
        if (userProfile) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(userProfile.updateProfile({ displayName: displayName, photoURL: photoUrl }));
        }
    };
    AuthService.prototype.login = function (email, password) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.afAuth.auth.signInWithEmailAndPassword(email, password));
    };
    AuthService.prototype.socialLogin = function (authProvider) {
        var provider;
        if (authProvider === 'google') {
            provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
        }
        if (authProvider === 'facebook') {
            provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].FacebookAuthProvider();
        }
        if (authProvider === 'twitter') {
            provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].TwitterAuthProvider();
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.afAuth.auth.signInWithPopup(provider));
    };
    AuthService.prototype.logout = function (uid) {
        this.updateOnlineStatus(uid, false);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.afAuth.auth.signOut());
    };
    AuthService.prototype.saveUser = function (user) {
        var users = this.db.object('users/' + user.uid);
        return users.set(user);
    };
    AuthService.prototype.updateOnlineStatus = function (uid, status) {
        if (status) {
            this.db.database.ref().child('users/' + uid).onDisconnect().update({ isOnline: false });
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.db.object('users/' + uid).update({ isOnline: status }));
    };
    AuthService.prototype.checkUserRole = function (uid) {
        return this.db.object('admins/' + uid).valueChanges();
    };
    AuthService.prototype.getAuthState = function () {
        return this.afAuth.authState;
    };
    AuthService.prototype.getCurrentUser = function () {
        return this.afAuth.auth.currentUser;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/store/auth.actions.ts":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.actions.ts ***!
  \********************************************/
/*! exports provided: AuthActionTypes, RegisterRequested, RegisterCompleted, RegisterFailed, UpdateProfile, UpdateProfileSuccess, LoginRequested, LoginSuccess, LoginFailed, SocialLogin, LogoutRequested, LogoutCompleted, SaveUser, UpdateOnlineStatus, CheckUserRole, UpdateUserRole, GetUser, AuthError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return AuthActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRequested", function() { return RegisterRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterCompleted", function() { return RegisterCompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFailed", function() { return RegisterFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfile", function() { return UpdateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileSuccess", function() { return UpdateProfileSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRequested", function() { return LoginRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginSuccess", function() { return LoginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFailed", function() { return LoginFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialLogin", function() { return SocialLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutRequested", function() { return LogoutRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutCompleted", function() { return LogoutCompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveUser", function() { return SaveUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateOnlineStatus", function() { return UpdateOnlineStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckUserRole", function() { return CheckUserRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserRole", function() { return UpdateUserRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUser", function() { return GetUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthError", function() { return AuthError; });
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["REGISTER_REQUESTED"] = "[Auth] REGISTER Requested";
    AuthActionTypes["REGISTER_COMPLETED"] = "[Auth] REGISTER Completed";
    AuthActionTypes["REGISTER_FAILED"] = "[Auth] REGISTER Failed";
    AuthActionTypes["UPDATE_PROFILE"] = "[Auth] Update profile";
    AuthActionTypes["UPDATE_PROFILE_SUCCESS"] = "[Auth] Update profile success";
    AuthActionTypes["LOGIN_REQUESTED"] = "[Auth] LOGIN Requested";
    AuthActionTypes["LOGIN_SUCCESS"] = "[Auth] LOGIN Success";
    AuthActionTypes["LOGIN_FAILED"] = "[Auth] LOGIN Failed";
    AuthActionTypes["SOCIAL_LOGIN"] = "[Auth] Social media login";
    AuthActionTypes["LOGOUT_REQUESTED"] = "[Auth] LOGOUT requested";
    AuthActionTypes["LOGOUT_COMPLETED"] = "[Auth] LOGOUT completed";
    AuthActionTypes["SAVE_USER"] = "[Auth] Save user";
    AuthActionTypes["UPDATE_ONLINE_STATUS"] = "[Auth] Update online status";
    AuthActionTypes["CHECK_USER_ROLE"] = "[Auth] Check user role";
    AuthActionTypes["UPDATE_USER_ROLE"] = "[Auth] Update user role";
    AuthActionTypes["GET_USER"] = "[Auth] GET User";
    AuthActionTypes["AUTH_ERROR"] = "[Auth] Error";
})(AuthActionTypes || (AuthActionTypes = {}));
var RegisterRequested = /** @class */ (function () {
    function RegisterRequested(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.REGISTER_REQUESTED;
    }
    return RegisterRequested;
}());

var RegisterCompleted = /** @class */ (function () {
    function RegisterCompleted() {
        this.type = AuthActionTypes.REGISTER_COMPLETED;
    }
    return RegisterCompleted;
}());

var RegisterFailed = /** @class */ (function () {
    function RegisterFailed(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.REGISTER_FAILED;
    }
    return RegisterFailed;
}());

var UpdateProfile = /** @class */ (function () {
    function UpdateProfile(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.UPDATE_PROFILE;
    }
    return UpdateProfile;
}());

var UpdateProfileSuccess = /** @class */ (function () {
    function UpdateProfileSuccess(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.UPDATE_PROFILE_SUCCESS;
    }
    return UpdateProfileSuccess;
}());

var LoginRequested = /** @class */ (function () {
    function LoginRequested(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_REQUESTED;
    }
    return LoginRequested;
}());

var LoginSuccess = /** @class */ (function () {
    function LoginSuccess(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_SUCCESS;
    }
    return LoginSuccess;
}());

var LoginFailed = /** @class */ (function () {
    function LoginFailed() {
        this.type = AuthActionTypes.LOGIN_FAILED;
    }
    return LoginFailed;
}());

var SocialLogin = /** @class */ (function () {
    function SocialLogin(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.SOCIAL_LOGIN;
    }
    return SocialLogin;
}());

var LogoutRequested = /** @class */ (function () {
    function LogoutRequested(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGOUT_REQUESTED;
    }
    return LogoutRequested;
}());

var LogoutCompleted = /** @class */ (function () {
    function LogoutCompleted() {
        this.type = AuthActionTypes.LOGOUT_COMPLETED;
    }
    return LogoutCompleted;
}());

var SaveUser = /** @class */ (function () {
    function SaveUser(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.SAVE_USER;
    }
    return SaveUser;
}());

var UpdateOnlineStatus = /** @class */ (function () {
    function UpdateOnlineStatus(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.UPDATE_ONLINE_STATUS;
    }
    return UpdateOnlineStatus;
}());

var CheckUserRole = /** @class */ (function () {
    function CheckUserRole(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.CHECK_USER_ROLE;
    }
    return CheckUserRole;
}());

var UpdateUserRole = /** @class */ (function () {
    function UpdateUserRole(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.UPDATE_USER_ROLE;
    }
    return UpdateUserRole;
}());

var GetUser = /** @class */ (function () {
    function GetUser() {
        this.type = AuthActionTypes.GET_USER;
    }
    return GetUser;
}());

var AuthError = /** @class */ (function () {
    function AuthError(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.AUTH_ERROR;
    }
    return AuthError;
}());



/***/ }),

/***/ "./src/app/auth/store/auth.effects.ts":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.effects.ts ***!
  \********************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/auth/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../store/auth.actions */ "./src/app/auth/store/auth.actions.ts");
/* harmony import */ var _shared_services_gravatar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/gravatar.service */ "./src/app/shared/services/gravatar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, authService, gravatarService, router) {
        var _this = this;
        this.actions$ = actions$;
        this.authService = authService;
        this.gravatarService = gravatarService;
        this.router = router;
        this.registerAction$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].REGISTER_REQUESTED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (payload) {
            return _this.authService.register(payload.email, payload.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
                var gravatarUrl = _this.gravatarService.getUserGravatar(res.user.email);
                var user = {
                    uid: res.user.uid,
                    displayName: payload.username || res.user.displayName,
                    email: res.user.email,
                    providerId: res.additionalUserInfo.providerId,
                    photoUrl: res.user.photoURL || gravatarUrl,
                    isNewUser: res.additionalUserInfo.isNewUser,
                    isAdmin: false,
                    isOnline: true
                };
                return user;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) {
                return [
                    new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["RegisterCompleted"](),
                    new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LoginSuccess"]({ user: user }),
                    new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateProfile"]({ displayName: payload.username, photoUrl: user.photoUrl }),
                    new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["SaveUser"]({ user: user })
                ];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { _this.router.navigateByUrl(''); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthError"]({ error: error })); }));
        }));
        this.saveUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].SAVE_USER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (payload) { return _this.authService.saveUser(payload.user); }));
        this.updateOnlineStatus$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].UPDATE_ONLINE_STATUS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (payload) { return _this.authService.updateOnlineStatus(payload.uid, payload.status); }));
        this.checkUserRole$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].CHECK_USER_ROLE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (payload) { return _this.authService.checkUserRole(payload.uid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (isAdmin) {
            return new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateUserRole"]({ isAdmin: isAdmin });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthError"]({ error: error })); })); }));
        this.updateProfile$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].UPDATE_PROFILE), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (payload) {
            return _this.authService.updateProfile(payload.displayName, payload.photoUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
                var currentUser = _this.authService.getCurrentUser();
                var updatedUser = {
                    uid: currentUser.uid || null,
                    displayName: currentUser.displayName || null,
                    email: currentUser.email || null,
                    providerId: currentUser.providerData[0].providerId || null,
                    photoUrl: currentUser.photoURL || null
                };
                return new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateProfileSuccess"]({ user: updatedUser });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthError"](error)); }));
        }));
        this.loginAction$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].LOGIN_REQUESTED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (payload) {
            return _this.authService.login(payload.email, payload.password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
                var user = {
                    uid: res.user.uid,
                    displayName: res.user.displayName,
                    email: res.user.email,
                    providerId: res.additionalUserInfo.providerId,
                    photoUrl: res.user.photoURL,
                    isNewUser: res.additionalUserInfo.isNewUser
                };
                return new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LoginSuccess"]({ user: user });
            }), 
            /*         switchMap( (user: any) => {
                      if (user.isNewUser) {
                        return [
                          new auth.LoginSuccess({ user }),
                          new auth.SaveUser( { uid: user.uid, name: user.displayName }),
                          new auth.CheckUserRole( {uid: user.uid })
                        ];
                      } else {
                        return [ new auth.LoginSuccess( {user }), new auth.CheckUserRole({ uid: user.uid })];
                      }
                    }), */
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.router.navigateByUrl(''); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthError"]({ error: error })); }));
        }));
        this.loginSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].LOGIN_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (payload) {
            return [
                new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["UpdateOnlineStatus"]({ uid: payload.user.uid, status: true }),
                new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["CheckUserRole"]({ uid: payload.user.uid })
            ];
        }));
        this.socialLogin$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].SOCIAL_LOGIN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (payload) { return _this.authService.socialLogin(payload.authProvider)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
            var user = {
                uid: res.user.uid,
                displayName: res.user.displayName,
                email: res.user.email,
                providerId: res.additionalUserInfo.providerId,
                photoUrl: res.user.photoURL,
                isNewUser: res.additionalUserInfo.isNewUser
            };
            return user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (user) {
            if (user.isNewUser) {
                return [
                    new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LoginSuccess"]({ user: user }),
                    new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["SaveUser"]({ user: user }),
                    new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["CheckUserRole"]({ uid: user.uid })
                ];
            }
            else {
                return [new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LoginSuccess"]({ user: user }), new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["CheckUserRole"]({ uid: user.uid })];
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.router.navigateByUrl(''); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthError"]({ error: error }));
        })); }));
        this.logoutAction$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].LOGOUT_REQUESTED), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (payload) { return _this.authService.logout(payload.user.uid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return (new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LogoutCompleted"]()); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.router.navigateByUrl(''); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthError"]({ error: error }));
        })); }));
        this.getUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthActionTypes"].GET_USER), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function () { return _this.authService.getAuthState()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (authData) {
            if (authData) {
                var user = {
                    uid: authData.uid,
                    displayName: authData.displayName,
                    email: authData.email,
                    providerId: authData.providerData[0].providerId,
                    photoUrl: authData.photoURL,
                };
                return new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LoginSuccess"]({ user: user });
            }
            else {
                return new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["LoginFailed"]();
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["AuthError"]({ error: error })); })); }));
        this.init$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["defer"])(function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(new _store_auth_actions__WEBPACK_IMPORTED_MODULE_6__["GetUser"]());
        });
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "registerAction$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "saveUser$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "updateOnlineStatus$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "checkUserRole$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "updateProfile$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "loginAction$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "loginSuccess$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "socialLogin$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "logoutAction$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "getUser$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"])
    ], AuthEffects.prototype, "init$", void 0);
    AuthEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_services_gravatar_service__WEBPACK_IMPORTED_MODULE_7__["GravatarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/app/auth/store/auth.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/auth/store/auth.reducer.ts ***!
  \********************************************/
/*! exports provided: authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _auth_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.state */ "./src/app/auth/store/auth.state.ts");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.actions */ "./src/app/auth/store/auth.actions.ts");


function authReducer(state, action) {
    if (state === void 0) { state = _auth_state__WEBPACK_IMPORTED_MODULE_0__["authInitialState"]; }
    switch (action.type) {
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LOGIN_SUCCESS: {
            return Object.assign({}, state, {
                user: action.payload.user,
                isLoggedIn: true,
                isLoading: false,
                error: null
            });
        }
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].UPDATE_PROFILE_SUCCESS: {
            return Object.assign({}, state, {
                user: action.payload.user,
            });
        }
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].UPDATE_USER_ROLE: {
            return Object.assign({}, state, {
                isAdmin: action.payload.isAdmin
            });
        }
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LOGIN_FAILED: {
            return Object.assign({}, state, {
                user: null,
                isLoading: false,
                isLoggedIn: false
            });
        }
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].AUTH_ERROR: {
            return Object.assign({}, state, {
                error: action.payload.error
            });
        }
        case _auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LOGOUT_COMPLETED: {
            return Object.assign({}, state, {
                user: null,
                isLoading: false,
                isLoggedIn: false
            });
        }
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/auth/store/auth.selectors.ts":
/*!**********************************************!*\
  !*** ./src/app/auth/store/auth.selectors.ts ***!
  \**********************************************/
/*! exports provided: getAuthState, getUser, getIsLoggedIn, getIsLoading, getIsAdmin, getError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthState", function() { return getAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoggedIn", function() { return getIsLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsLoading", function() { return getIsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIsAdmin", function() { return getIsAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var getAuthState = function (state) { return state.auth; };
var getUser = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, function (auth) { return auth.user; });
var getIsLoggedIn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, function (auth) { return auth.isLoggedIn; });
var getIsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, function (auth) { return auth.isLoading; });
var getIsAdmin = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, function (auth) { return auth.isAdmin; });
var getError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getAuthState, function (auth) { return auth.error; });


/***/ }),

/***/ "./src/app/auth/store/auth.state.ts":
/*!******************************************!*\
  !*** ./src/app/auth/store/auth.state.ts ***!
  \******************************************/
/*! exports provided: authInitialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInitialState", function() { return authInitialState; });
var authInitialState = {
    user: null,
    isAdmin: false,
    isLoggedIn: false,
    isLoading: true,
    error: null
};


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/core/welcome/welcome.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/main.component */ "./src/app/core/main/main.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/core/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/core/dashboard/dashboard.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/core/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["NavbarModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["IconsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["DropdownModule"].forRoot(),
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["CardsFreeModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_6__["ButtonsModule"]
            ],
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"]
            ],
            exports: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_5__["MainComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/dashboard/dashboard.component.html":
/*!*********************************************************!*\
  !*** ./src/app/core/dashboard/dashboard.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/core/dashboard/dashboard.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/dashboard/dashboard.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/dashboard/dashboard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _projects_services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../projects/services/projects.service */ "./src/app/projects/services/projects.service.ts");
/* harmony import */ var _customers_services_customers_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../customers/services/customers.service */ "./src/app/customers/services/customers.service.ts");
/* harmony import */ var _auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(store, projectsService, customersService) {
        this.store = store;
        this.projectsService = projectsService;
        this.customersService = customersService;
        this.projects = [
            {
                title: 'Project 1',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                photoUrl: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg'
            },
            {
                title: 'Project 2',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                photoUrl: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(98).jpg'
            },
            {
                title: 'Project 3',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                photoUrl: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(99).jpg'
            },
            {
                title: 'Project 4',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
                photoUrl: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(95).jpg'
            }
        ];
        this.customers = [
            {
                id: 1,
                name: 'Example customer 1',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                id: 2,
                name: 'Example customer 2',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                id: 3,
                name: 'Example customer 3',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                id: 4,
                name: 'Example customer 4',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
            },
            {
                id: 5,
                name: 'Example customer 5',
                description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
            }
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.initProjects();
        this.initCustomers();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
        if (this.projectsSub) {
            this.projectsSub.unsubscribe();
        }
        if (this.customersSub) {
            this.customersSub.unsubscribe();
        }
    };
    DashboardComponent.prototype.initProjects = function () {
        var _this = this;
        this.projectsSub = this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_5__["getUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (user) {
            if (user) {
                return _this.projectsService.get(user.uid);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["empty"])();
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe(function (projects) {
            if (projects.length === 0) {
                _this.projectsService.addProjects(_this.projects);
            }
        });
    };
    DashboardComponent.prototype.initCustomers = function () {
        var _this = this;
        this.customersSub = this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_5__["getUser"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (user) {
            if (user) {
                return _this.customersService.get(user.uid);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["empty"])();
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .subscribe(function (customers) {
            if (customers.length === 0) {
                _this.customersService.addCustomers(_this.customers);
            }
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/core/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/core/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _projects_services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"],
            _customers_services_customers_service__WEBPACK_IMPORTED_MODULE_4__["CustomersService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-copyright text-center text-white py-3 primary-color-dark darken-2\">\r\n  &copy; 2019 Copyright:\r\n  <a class=\"text-white\" href=\"https:/wgu.edu\">wgu.edu</a>\r\n</footer>"

/***/ }),

/***/ "./src/app/core/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/core/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Navbar-->\r\n<mdb-navbar #navbar SideClass=\"navbar navbar-expand-lg navbar-light white justify-content-between\" [containerInside]=\"false\">\r\n\r\n  <!-- Navbar brand -->\r\n  <mdb-navbar-brand>\r\n      <a class=\"navbar-brand\" routerLink=\"/\">\r\n          <img src=\"../../../assets/img/WGULogo.png\" height=\"50\" alt=\"\">\r\n      </a>\r\n  </mdb-navbar-brand>\r\n\r\n  <!-- Collapsible content -->\r\n  <links>\r\n\r\n    <!-- Links -->\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li *ngIf=\"isLoggedIn && !isLoading\" class=\"nav-item\">\r\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" mdbWavesEffect>Home<span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li *ngIf=\"isLoggedIn && !isLoading\" class=\"nav-item\">\r\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/projects\" routerLinkActive=\"active\" mdbWavesEffect>Degrees</a>\r\n      </li>\r\n      <li *ngIf=\"isLoggedIn && !isLoading\" class=\"nav-item\">\r\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/customers\" routerLinkActive=\"active\" mdbWavesEffect>Courses</a>\r\n      </li>\r\n      <li *ngIf=\"isLoggedIn && !isLoading\" class=\"nav-item\">\r\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/charts\" routerLinkActive=\"active\" mdbWavesEffect>Financial</a>\r\n      </li>\r\n      <li *ngIf=\"isLoggedIn && !isLoading\" class=\"nav-item\">\r\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/profile\" routerLinkActive=\"active\" mdbWavesEffect>Profile</a>\r\n      </li>\r\n      <li *ngIf=\"isLoggedIn && !isLoading && isAdmin\" class=\"nav-item\">\r\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/admin-panel\" routerLinkActive=\"active\" mdbWavesEffect>Admin panel</a>\r\n      </li>\r\n    </ul>\r\n    <!-- Links -->\r\n\r\n    <!-- Search form -->\r\n    <ul class=\"navbar-nav\" *ngIf=\"!isLoggedIn && !isLoading\">\r\n      <li class=\"nav-item waves-light\">\r\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/login\" mdbWavesEffect>Login</a>\r\n      </li>\r\n      <li class=\"nav-item waves-light\">\r\n        <a (click)=\"navbar.hide()\" class=\"nav-link waves-light\" routerLink=\"/register\" mdbWavesEffect>Register</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul class=\"navbar-nav\" *ngIf=\"isLoggedIn && !isLoading\">\r\n      <li class=\"nav-link waves-light dropdown avatar p-0 avatar-dropdown\" mdbDropdown>\r\n        <a mdbDropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link waves-light\" mdbWavesEffect>\r\n          <img *ngIf=\"user.photoUrl\" src=\"{{ user.photoUrl }}\" height=\"35\" width=\"35\" class=\"rounded-circle z-depth-0\" alt=\"avatar image\">\r\n        </a>\r\n          <div *dropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown-primary\" role=\"menu\">\r\n              <div *ngIf=\"user.displayName\" class=\"text-center py-2 px-2\">{{ user.displayName }}</div>\r\n              <div *ngIf=\"!user.displayName\" class=\"text-center py-2 px-2\">Anonymous user</div>\r\n              <div class=\"divider dropdown-divider\"></div>\r\n              <a class=\"dropdown-item text-center waves-light\" mdbWavesEffect (click)=\"onLogout(); navbar.hide()\">Logout</a>\r\n          </div>\r\n      </li>\r\n      <li class=\"nav-item waves-light logout-button\">\r\n        <a class=\"nav-link waves-light\" mdbWavesEffect (click)=\"onLogout(); navbar.hide()\">Logout</a>\r\n      </li>\r\n    </ul>\r\n  </links>\r\n  <!-- Collapsible content -->\r\n\r\n</mdb-navbar>\r\n<!--/.Navbar-->\r\n"

/***/ }),

/***/ "./src/app/core/header/header.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link.active {\n  background-color: #eee; }\n\n.logout-button {\n  display: none; }\n\n.avatar-dropdown {\n  display: block; }\n\n@media (max-width: 992px) {\n  .avatar-dropdown {\n    display: none; }\n  .logout-button {\n    display: block; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9oZWFkZXIvQzpcXERldlxcd2d1LW1kYjEvc3JjXFxhcHBcXGNvcmVcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXNCLEVBQ3ZCOztBQUVEO0VBQ0UsY0FBYSxFQUNkOztBQUVEO0VBQ0UsZUFBYyxFQUNmOztBQUVEO0VBQ0U7SUFDRSxjQUFhLEVBQ2Q7RUFFRDtJQUNFLGVBQWMsRUFDZixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29yZS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxufVxyXG5cclxuLmxvZ291dC1idXR0b24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5hdmF0YXItZHJvcGRvd24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuYXZhdGFyLWRyb3Bkb3duIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubG9nb3V0LWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.logout = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.clicked = this.clicked === undefined ? false : true;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onLogout = function () {
        this.logout.emit(this.user);
    };
    HeaderComponent.prototype.setClicked = function (val) {
        this.clicked = val;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "isLoggedIn", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "isLoading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "isAdmin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "logout", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/core/header/header.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/core/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoading$ | async\" class=\"d-flex justify-content-center align-items-center\" style=\"margin-top: 400px\">\r\n  <div class=\"spinner-grow text-primary\" role=\"status\" style=\"width: 4rem; height: 4rem;\">\r\n    <span class=\"sr-only\">Loading...</span>\r\n  </div>\r\n</div>\r\n<app-welcome *ngIf=\"!(isLoggedIn$ | async) && !(isLoading$ | async)\"></app-welcome>\r\n<app-dashboard *ngIf=\"(isLoggedIn$ | async) && !(isLoading$ | async)\"></app-dashboard>"

/***/ }),

/***/ "./src/app/core/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/core/home/home.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/store/auth.selectors */ "./src/app/auth/store/auth.selectors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(store) {
        this.store = store;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.isLoggedIn$ = this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsLoggedIn"]);
        this.isLoading$ = this.store.select(_auth_store_auth_selectors__WEBPACK_IMPORTED_MODULE_2__["getIsLoading"]);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/core/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/core/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/core/main/main.component.html":
/*!***********************************************!*\
  !*** ./src/app/core/main/main.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n<div class=\"container py-5\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <mdb-card cdkDrag class=\"animated fadeIn mb-3\" borderColor=\"border-black\">\r\n        <mdb-card-header>App section</mdb-card-header>\r\n        <mdb-card-body class=\"p-3\">\r\n          <mdb-card-title>\r\n            <h5 class=\"mb-3\">Courses</h5>\r\n          </mdb-card-title>\r\n          <mdb-card-text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi blanditiis, assumenda dolorem\r\n            possimus id qui ut eaque. Similique porro labore commodi impedit deserunt? Officiis nihil rem aut molestias\r\n            illum eos! Similique accusantium reprehenderit necessitatibus quo totam provident laudantium recusandae\r\n            sapiente, nemo ex illum nobis, officia, vero dolores! Distinctio similique pariatur, at sint nemo quidem\r\n            commodi vel rerum aliquid quibusdam? Perferendis.</mdb-card-text>\r\n          <a routerLink=\"/projects\" mdbBtn color=\"blue\">Go to section</a>\r\n        </mdb-card-body>\r\n      </mdb-card>\r\n    </div>\r\n\r\n    <div cdkDrag class=\"col-md-6\">\r\n      <mdb-card class=\"animated fadeIn mb-3\" borderColor=\"border-black\">\r\n        <mdb-card-header>App section</mdb-card-header>\r\n        <mdb-card-body class=\"p-3\">\r\n          <mdb-card-title>\r\n            <h5 class=\"mb-3\">Degrees</h5>\r\n          </mdb-card-title>\r\n          <mdb-card-text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi blanditiis, assumenda dolorem\r\n            possimus id qui ut eaque. Similique porro labore commodi impedit deserunt? Officiis nihil rem aut molestias\r\n            illum eos! Similique accusantium reprehenderit necessitatibus quo totam provident laudantium recusandae\r\n            sapiente, nemo ex illum nobis, officia, vero dolores! Distinctio similique pariatur, at sint nemo quidem\r\n            commodi vel rerum aliquid quibusdam? Perferendis.</mdb-card-text>\r\n          <a routerLink=\"/customers\" mdbBtn color=\"blue\">Go to section</a>\r\n        </mdb-card-body>\r\n      </mdb-card>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-md-6\">\r\n      <mdb-card class=\"animated fadeIn mb-3\" borderColor=\"border-black\">\r\n        <mdb-card-header>App section</mdb-card-header>\r\n        <mdb-card-body class=\"p-3\">\r\n          <mdb-card-title>\r\n            <h5 class=\"mb-3\">Financial</h5>\r\n          </mdb-card-title>\r\n          <mdb-card-text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi blanditiis, assumenda dolorem\r\n            possimus id qui ut eaque. Similique porro labore commodi impedit deserunt? Officiis nihil rem aut molestias\r\n            illum eos! Similique accusantium reprehenderit necessitatibus quo totam provident laudantium recusandae\r\n            sapiente, nemo ex illum nobis, officia, vero dolores! Distinctio similique pariatur, at sint nemo quidem\r\n            commodi vel rerum aliquid quibusdam? Perferendis.</mdb-card-text>\r\n          <a routerLink=\"/charts\" mdbBtn color=\"blue\">Go to section</a>\r\n        </mdb-card-body>\r\n      </mdb-card>\r\n    </div>\r\n\r\n    <div class=\"col-md-6\">\r\n      <mdb-card class=\"animated fadeIn mb-3\" borderColor=\"border-black\">\r\n        <mdb-card-header>App section</mdb-card-header>\r\n        <mdb-card-body class=\"p-3\">\r\n          <mdb-card-title>\r\n            <h5 class=\"mb-3\">Profile</h5>\r\n          </mdb-card-title>\r\n          <mdb-card-text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi blanditiis, assumenda dolorem\r\n            possimus id qui ut eaque. Similique porro labore commodi impedit deserunt? Officiis nihil rem aut molestias\r\n            illum eos! Similique accusantium reprehenderit necessitatibus quo totam provident laudantium recusandae\r\n            sapiente, nemo ex illum nobis, officia, vero dolores! Distinctio similique pariatur, at sint nemo quidem\r\n            commodi vel rerum aliquid quibusdam? Perferendis.</mdb-card-text>\r\n          <a routerLink=\"/profile\" mdbBtn color=\"blue\">Go to section</a>\r\n        </mdb-card-body>\r\n      </mdb-card>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/core/main/main.component.scss":
/*!***********************************************!*\
  !*** ./src/app/core/main/main.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  background: #000000 url('northstar.jpg');\n  background-size: cover; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9tYWluL0M6XFxEZXZcXHdndS1tZGIxL3NyY1xcYXBwXFxjb3JlXFxtYWluXFxtYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQTREO0VBQzVELHVCQUFzQixFQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwIHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9ub3J0aHN0YXIuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/core/main/main.component.ts":
/*!*********************************************!*\
  !*** ./src/app/core/main/main.component.ts ***!
  \*********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/core/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/core/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/core/page-not-found/page-not-found.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/core/page-not-found/page-not-found.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row \" >\r\n    <div class=\"col-md-8\">\r\n      <img src=\"https://mdbootstrap.com/img/Marketing/other/logo/logo-mdb-angular-small.png\" alt=\"Error 404\" class=\"img-fluid\">\r\n      <h2 class=\"h2-responsive mt-3 mb-2\">404. That's an error.</h2>\r\n      <h4>The requested URL was not found on this server.</h4>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <img src=\"https://mdbootstrap.com/img/Others/grafika404-bf.png\" alt=\"Error 404\" class=\"img-fluid\">\r\n    </div>\r\n  </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/core/page-not-found/page-not-found.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/core/page-not-found/page-not-found.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 55%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.full {\n  min-height: 40rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9wYWdlLW5vdC1mb3VuZC9DOlxcRGV2XFx3Z3UtbWRiMS9zcmNcXGFwcFxcY29yZVxccGFnZS1ub3QtZm91bmRcXHBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBUztFQUNULG1CQUFrQjtFQUNsQixTQUFRO0VBQ1IsVUFBUztFQUVULHlDQUFnQztVQUFoQyxpQ0FBZ0MsRUFDakM7O0FBR0Q7RUFDRSxrQkFBaUIsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDU1JTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuZnVsbCB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MHJlbTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/core/page-not-found/page-not-found.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/page-not-found/page-not-found.component.ts ***!
  \*****************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/core/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/core/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/core/welcome/welcome.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/welcome/welcome.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid full-page-container\">\r\n  <div class=\"row h-100 justify-content-center\">\r\n    <div class=\"col-md-8 text-center fadeIn animated mt-5\">\r\n      <h1 class=\"app-heading white-text font-bold mb-4\">WGU NorthStar</h1>\r\n      <a mdbBtn color=\"primary\" size=\"lg\" class=\"mb-2 mt-0\" routerLink=\"/register\">Create account</a>\r\n      <p>\r\n        <small class=\"white-text mb-5\">Already have an account?\r\n          <a routerLink=\"/login\">Log in</a></small>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/core/welcome/welcome.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/welcome/welcome.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-page-container {\n  background: #000000 url('northstar.jpg');\n  background-size: cover; }\n\n.app-heading {\n  font-size: 5.5rem;\n  font-weight: 200;\n  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS93ZWxjb21lL0M6XFxEZXZcXHdndS1tZGIxL3NyY1xcYXBwXFxjb3JlXFx3ZWxjb21lXFx3ZWxjb21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUNBQTREO0VBQzVELHVCQUFzQixFQUN6Qjs7QUFDRDtFQUNJLGtCQUFpQjtFQUNqQixpQkFBZ0I7RUFDaEIseUVBQXdFLEVBQzNFIiwiZmlsZSI6InNyYy9hcHAvY29yZS93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC1wYWdlLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwIHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9ub3J0aHN0YXIuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5hcHAtaGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDUuNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LWZhbWlseTogJ0ZyYW5rbGluIEdvdGhpYyBNZWRpdW0nLCAnQXJpYWwgTmFycm93JywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/core/welcome/welcome.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/welcome/welcome.component.ts ***!
  \***************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/core/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/app/core/welcome/welcome.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/customers/services/customers.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/customers/services/customers.service.ts ***!
  \*********************************************************/
/*! exports provided: CustomersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function() { return CustomersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomersService = /** @class */ (function () {
    function CustomersService(db, afAuth) {
        this.db = db;
        this.afAuth = afAuth;
    }
    Object.defineProperty(CustomersService.prototype, "userId", {
        get: function () {
            if (this.afAuth.auth.currentUser) {
                return this.afAuth.auth.currentUser.uid;
            }
        },
        enumerable: true,
        configurable: true
    });
    CustomersService.prototype.add = function (customer, userId) {
        var customers = this.db.list("customers/" + userId);
        return customers.push(customer);
    };
    CustomersService.prototype.addCustomers = function (customers) {
        var _this = this;
        var userId = this.userId;
        if (userId) {
            customers.forEach(function (customer) {
                _this.db.list("customers/" + userId).push(customer);
            });
        }
    };
    CustomersService.prototype.get = function (userId) {
        return this.db.list("customers/" + userId).snapshotChanges();
    };
    CustomersService.prototype.update = function (customer, userId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.db.object("customers/" + userId + "/" + customer.key)
            .update({
            id: customer.id,
            name: customer.name,
            description: customer.description,
        }));
    };
    CustomersService.prototype.delete = function (customer, userId) {
        return this.db.object("customers/" + userId + "/" + customer.key).remove();
    };
    CustomersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], CustomersService);
    return CustomersService;
}());



/***/ }),

/***/ "./src/app/projects/services/projects.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/projects/services/projects.service.ts ***!
  \*******************************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectsService = /** @class */ (function () {
    function ProjectsService(db, afAuth) {
        this.db = db;
        this.afAuth = afAuth;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].firebase.databaseURL;
    }
    Object.defineProperty(ProjectsService.prototype, "userId", {
        get: function () {
            if (this.afAuth.auth.currentUser) {
                return this.afAuth.auth.currentUser.uid;
            }
        },
        enumerable: true,
        configurable: true
    });
    ProjectsService.prototype.add = function (project, userId) {
        var projects = this.db.list("projects/" + userId);
        return projects.push(project);
    };
    ProjectsService.prototype.addProjects = function (projects) {
        var _this = this;
        var userId = this.userId;
        projects.forEach(function (project) {
            _this.db.list("projects/" + userId).push(project);
        });
    };
    ProjectsService.prototype.get = function (userId) {
        return this.db.list("projects/" + userId).snapshotChanges();
    };
    ProjectsService.prototype.update = function (project, userId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.db.object("projects/" + userId + "/" + project.key)
            .update({
            title: project.title,
            description: project.description,
            photoUrl: project.photoUrl
        }));
    };
    ProjectsService.prototype.delete = function (project, userId) {
        return this.db.object("projects/" + userId + "/" + project.key).remove();
    };
    ProjectsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, clearState, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearState", function() { return clearState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _auth_store_auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/store/auth.reducer */ "./src/app/auth/store/auth.reducer.ts");
/* harmony import */ var _admin_store_admin_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin/store/admin.reducer */ "./src/app/admin/store/admin.reducer.ts");


var reducers = {
    auth: _auth_store_auth_reducer__WEBPACK_IMPORTED_MODULE_0__["authReducer"],
    admin: _admin_store_admin_reducer__WEBPACK_IMPORTED_MODULE_1__["adminReducer"]
};
function clearState(reducer) {
    return function (state, action) {
        if (action.type === '[Auth] LOGOUT completed') {
            state = undefined;
        }
        return reducer(state, action);
    };
}
var metaReducers = [clearState];


/***/ }),

/***/ "./src/app/shared/components/confirm-modal/confirm-modal.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/confirm-modal/confirm-modal.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">×</span>\r\n    </button>\r\n    <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Delete</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>Are you sure you want to delete this item?</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" mdbBtn color=\"white\" class=\"black-text waves-light\" aria-label=\"Close\" (click)=\"modalRef.hide()\"\r\n      mdbWavesEffect>Cancel</button>\r\n    <button type=\"button\" mdbBtn color=\"red\" class=\"waves-light\" mdbWavesEffect (click)=\"onDelete()\">Delete</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/confirm-modal/confirm-modal.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/confirm-modal/confirm-modal.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbmZpcm0tbW9kYWwvY29uZmlybS1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/confirm-modal/confirm-modal.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmModalComponent = /** @class */ (function () {
    function ConfirmModalComponent(modalRef) {
        this.modalRef = modalRef;
        this.confirmation = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ConfirmModalComponent.prototype.ngOnInit = function () {
    };
    ConfirmModalComponent.prototype.onDelete = function () {
        this.confirmation.next(true);
        this.modalRef.hide();
    };
    ConfirmModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-modal',
            template: __webpack_require__(/*! ./confirm-modal.component.html */ "./src/app/shared/components/confirm-modal/confirm-modal.component.html"),
            styles: [__webpack_require__(/*! ./confirm-modal.component.scss */ "./src/app/shared/components/confirm-modal/confirm-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBModalRef"]])
    ], ConfirmModalComponent);
    return ConfirmModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/customers-list/customers-list.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/customers-list/customers-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"z-depth-1\">\r\n  <table class=\"table table-striped table-responsive-md btn-table\" mdbTable borderless=\"true\">\r\n    <thead style=\"background-color: transparent\">\r\n      <tr>\r\n        <th>Id</th>\r\n        <th>Name</th>\r\n        <th>Description</th>\r\n        <th>Actions</th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <tr *ngFor=\"let customer of customers; trackBy: trackByFn\">\r\n        <th scope=\"row\">{{ customer.id }}</th>\r\n        <td>{{ customer.name }}</td>\r\n        <td>{{ customer.description }}</td>\r\n        <td>\r\n          <a (click)=\"onEdit(customer)\" class=\"mr-2\"><mdb-icon fas icon=\"edit\"></mdb-icon></a>\r\n          <a (click)=\"onDelete(customer)\"><mdb-icon fas icon=\"trash\"></mdb-icon></a>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/customers-list/customers-list.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/customers-list/customers-list.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2N1c3RvbWVycy1saXN0L2N1c3RvbWVycy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/customers-list/customers-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/customers-list/customers-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: CustomersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersListComponent", function() { return CustomersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomersListComponent = /** @class */ (function () {
    function CustomersListComponent() {
        this.customerDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.customerEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CustomersListComponent.prototype.ngOnInit = function () {
    };
    CustomersListComponent.prototype.onEdit = function (customer) {
        this.customerEdited.emit(customer);
    };
    CustomersListComponent.prototype.onDelete = function (customer) {
        this.customerDeleted.emit(customer);
    };
    CustomersListComponent.prototype.trackByFn = function (index) {
        return index;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CustomersListComponent.prototype, "customers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomersListComponent.prototype, "customerDeleted", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomersListComponent.prototype, "customerEdited", void 0);
    CustomersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers-list',
            template: __webpack_require__(/*! ./customers-list.component.html */ "./src/app/shared/components/customers-list/customers-list.component.html"),
            styles: [__webpack_require__(/*! ./customers-list.component.scss */ "./src/app/shared/components/customers-list/customers-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomersListComponent);
    return CustomersListComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/customers-modal/customers-modal.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/customers-modal/customers-modal.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">×</span>\r\n    </button>\r\n    <h4 class=\"modal-title w-100\" id=\"myModalLabel\">{{ heading }}</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form #customerForm=\"ngForm\">\r\n      <div class=\"md-form\">\r\n        <input type=\"text\" id=\"id\" name=\"id\" class=\"form-control\" [(ngModel)]=\"customer.id\" mdbInput mdbValidate [validateSuccess]=\"false\" #id=\"ngModel\" required>\r\n        <label for=\"id\">Id</label>\r\n        <mdb-error *ngIf=\"id && id.invalid && (id.dirty || id.touched)\">Id is required</mdb-error>\r\n      </div>\r\n\r\n      <div class=\"md-form\">\r\n        <input type=\"text\" id=\"name\" name=\"name\" class=\"form-control\" [(ngModel)]=\"customer.name\" mdbInput mdbValidate [validateSuccess]=\"false\" #name=\"ngModel\" required>\r\n        <label for=\"name\">Name</label>\r\n        <mdb-error *ngIf=\"name && name.invalid && (name.dirty || name.touched)\">Name is required</mdb-error>\r\n      </div>\r\n\r\n      <div class=\"md-form\">\r\n        <textarea type=\"text\" id=\"description\" name=\"description\" class=\"md-textarea form-control\" [(ngModel)]=\"customer.description\" mdbInput mdbValidate [validateSuccess]=\"false\" #description=\"ngModel\" required></textarea>\r\n        <label for=\"description\">Description</label>\r\n        <mdb-error *ngIf=\"description && description.invalid && (description.dirty || description.touched)\">Description is required</mdb-error>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" mdbBtn color=\"white\" class=\"black-text waves-light\" aria-label=\"Close\" (click)=\"modalRef.hide()\"\r\n      mdbWavesEffect>Close</button>\r\n    <button type=\"button\" mdbBtn color=\"red\" class=\"relative waves-light\" mdbWavesEffect (click)=\"onSave()\">Save</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/customers-modal/customers-modal.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/customers-modal/customers-modal.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2N1c3RvbWVycy1tb2RhbC9jdXN0b21lcnMtbW9kYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/customers-modal/customers-modal.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/customers-modal/customers-modal.component.ts ***!
  \********************************************************************************/
/*! exports provided: CustomersModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModalComponent", function() { return CustomersModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomersModalComponent = /** @class */ (function () {
    function CustomersModalComponent(modalRef) {
        this.modalRef = modalRef;
        this.customer = {};
        this.customerData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    CustomersModalComponent.prototype.ngOnInit = function () {
    };
    CustomersModalComponent.prototype.onSave = function () {
        if (this.customerForm.valid) {
            this.customerData.next(this.customer);
            this.modalRef.hide();
        }
        else {
            var controls_1 = this.customerForm.controls;
            Object.keys(controls_1).forEach(function (controlName) { return controls_1[controlName].markAsTouched(); });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('customerForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], CustomersModalComponent.prototype, "customerForm", void 0);
    CustomersModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers-modal',
            template: __webpack_require__(/*! ./customers-modal.component.html */ "./src/app/shared/components/customers-modal/customers-modal.component.html"),
            styles: [__webpack_require__(/*! ./customers-modal.component.scss */ "./src/app/shared/components/customers-modal/customers-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBModalRef"]])
    ], CustomersModalComponent);
    return CustomersModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/project-modal/project-modal.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/project-modal/project-modal.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-content\">\r\n  <div class=\"modal-header\">\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">×</span>\r\n    </button>\r\n    <h4 class=\"modal-title w-100\" id=\"myModalLabel\">{{ heading }}</h4>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <form #projectForm=\"ngForm\">\r\n      <div class=\"md-form\">\r\n        <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"project.title\" mdbInput mdbValidate [validateSuccess]=\"false\" #title=\"ngModel\" required>\r\n        <label for=\"title\">Title</label>\r\n        <mdb-error *ngIf=\"title && title.invalid && (title.dirty || title.touched)\">Title is required</mdb-error>\r\n      </div>\r\n\r\n      <div class=\"md-form\">\r\n        <textarea type=\"text\" id=\"description\" class=\"md-textarea form-control\" name=\"description\" [(ngModel)]=\"project.description\" mdbInput mdbValidate [validateSuccess]=\"false\" #description=\"ngModel\" required></textarea>\r\n        <label for=\"description\">Description</label>\r\n        <mdb-error *ngIf=\"description && description.invalid && (description.dirty || description.touched)\">Description is required</mdb-error>\r\n      </div>\r\n\r\n      <div class=\"md-form\">\r\n        <input type=\"text\" id=\"photo\" class=\"form-control\" name=\"photoUrl\" [(ngModel)]=\"project.photoUrl\" mdbInput>\r\n        <label for=\"photo\">Photo URL</label>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" mdbBtn color=\"white\" class=\"black-text waves-light\" aria-label=\"Close\" (click)=\"modalRef.hide()\"\r\n      mdbWavesEffect>Close</button>\r\n    <button type=\"button\" mdbBtn color=\"primary\" class=\"relative waves-light\" mdbWavesEffect (click)=\"onSave()\">Save!</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/project-modal/project-modal.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/project-modal/project-modal.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb2plY3QtbW9kYWwvcHJvamVjdC1tb2RhbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/project-modal/project-modal.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/project-modal/project-modal.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProjectModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModalComponent", function() { return ProjectModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectModalComponent = /** @class */ (function () {
    function ProjectModalComponent(modalRef) {
        this.modalRef = modalRef;
        this.projectData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.project = {};
    }
    ProjectModalComponent.prototype.ngOnInit = function () {
    };
    ProjectModalComponent.prototype.onSave = function () {
        if (this.projectForm.valid) {
            this.projectData.next(this.project);
            this.modalRef.hide();
        }
        else {
            var controls_1 = this.projectForm.controls;
            Object.keys(controls_1).forEach(function (controlName) { return controls_1[controlName].markAsTouched(); });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('projectForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"])
    ], ProjectModalComponent.prototype, "projectForm", void 0);
    ProjectModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-modal',
            template: __webpack_require__(/*! ./project-modal.component.html */ "./src/app/shared/components/project-modal/project-modal.component.html"),
            styles: [__webpack_require__(/*! ./project-modal.component.scss */ "./src/app/shared/components/project-modal/project-modal.component.scss")]
        }),
        __metadata("design:paramtypes", [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBModalRef"]])
    ], ProjectModalComponent);
    return ProjectModalComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/project/project.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/project/project.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-card>\r\n  <!--Card image-->\r\n  <mdb-card-img *ngIf=\"project.photoUrl\" src=\"{{ project.photoUrl }}\" alt=\"Card image cap\" class=\"waves-light\"\r\n    mdbWavesEffect></mdb-card-img>\r\n  <!-- <mdb-card-img *ngIf=\"!project.photoUrl\" src=\"https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(97).jpg\" alt=\"Card image cap\"></mdb-card-img> -->\r\n  <!--Card content-->\r\n  <mdb-card-body>\r\n\r\n    <!--Title-->\r\n    <mdb-card-title>\r\n      <h4>{{ project.title }}</h4>\r\n    </mdb-card-title>\r\n\r\n    <!--Text-->\r\n    <mdb-card-text> {{ project.description }}\r\n    </mdb-card-text>\r\n\r\n    <div class=\"text-left\">\r\n      <a *ngIf=\"editable\" mdbBtn color=\"primary\" mdbWavesEffect (click)=\"onEdit()\">Edit</a>\r\n      <a mdbBtn class=\"red lighten-1 white-text\" mdbWavesEffect (click)=\"onDelete()\">Delete</a>\r\n    </div>\r\n  </mdb-card-body>\r\n</mdb-card>"

/***/ }),

/***/ "./src/app/shared/components/project/project.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/project/project.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shared/components/project/project.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/project/project.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectComponent = /** @class */ (function () {
    function ProjectComponent() {
        this.editable = true;
        this.deleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.edited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProjectComponent.prototype.ngOnInit = function () {
    };
    ProjectComponent.prototype.onDelete = function () {
        this.deleted.emit(this.project);
    };
    ProjectComponent.prototype.onEdit = function () {
        this.edited.emit(this.project);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectComponent.prototype, "project", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectComponent.prototype, "editable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProjectComponent.prototype, "deleted", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProjectComponent.prototype, "edited", void 0);
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/shared/components/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.scss */ "./src/app/shared/components/project/project.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/projects-list/projects-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/projects-list/projects-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"projects-list d-flex flex-wrap fadeIn animated\">\r\n    <div class=\"project\" *ngFor=\"let project of projects; trackBy: trackByFunction\">\r\n      <app-project [project]=\"project\" [editable]=\"editable\" (deleted)=\"onProjectDelete($event)\" (edited)=\"onProjectEdit($event)\"></app-project>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/components/projects-list/projects-list.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/projects-list/projects-list.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projects-list {\n  box-sizing: border-box;\n  justify-content: center; }\n\n.project {\n  width: 80%;\n  margin: 1rem; }\n\n@media (min-width: 768px) {\n  .project {\n    width: calc(50% - 2rem); }\n  .projects-list {\n    justify-content: normal; } }\n\n@media (min-width: 992px) {\n  .project {\n    width: calc(33.3333% - 2rem); } }\n\n@media (min-width: 1200px) {\n  .project {\n    width: calc(25% - 3rem); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcHJvamVjdHMtbGlzdC9DOlxcRGV2XFx3Z3UtbWRiMS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxwcm9qZWN0cy1saXN0XFxwcm9qZWN0cy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXNCO0VBQ3RCLHdCQUF1QixFQUMxQjs7QUFFRDtFQUNJLFdBQVU7RUFDVixhQUFZLEVBQ2Y7O0FBRUQ7RUFDSTtJQUNJLHdCQUF1QixFQUMxQjtFQUVEO0lBQ0ksd0JBQXVCLEVBQzFCLEVBQUE7O0FBR0w7RUFDSTtJQUNJLDZCQUE0QixFQUMvQixFQUFBOztBQUdMO0VBQ0k7SUFDSSx3QkFBdUIsRUFDMUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3Byb2plY3RzLWxpc3QvcHJvamVjdHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0cy1saXN0IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2plY3Qge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogMXJlbTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAucHJvamVjdCB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMnJlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2plY3RzLWxpc3Qge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogbm9ybWFsO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5wcm9qZWN0IHtcclxuICAgICAgICB3aWR0aDogY2FsYygzMy4zMzMzJSAtIDJyZW0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgICAucHJvamVjdCB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMjUlIC0gM3JlbSk7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/projects-list/projects-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/projects-list/projects-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProjectsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsListComponent", function() { return ProjectsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsListComponent = /** @class */ (function () {
    function ProjectsListComponent() {
        this.editable = true;
        this.projectDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.projectEdited = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ProjectsListComponent.prototype.ngOnInit = function () {
    };
    ProjectsListComponent.prototype.onProjectDelete = function (project) {
        this.projectDeleted.emit(project);
    };
    ProjectsListComponent.prototype.onProjectEdit = function (project) {
        this.projectEdited.emit(project);
    };
    ProjectsListComponent.prototype.trackByFunction = function (index) {
        return index;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProjectsListComponent.prototype, "projects", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectsListComponent.prototype, "editable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProjectsListComponent.prototype, "projectDeleted", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProjectsListComponent.prototype, "projectEdited", void 0);
    ProjectsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects-list',
            template: __webpack_require__(/*! ./projects-list.component.html */ "./src/app/shared/components/projects-list/projects-list.component.html"),
            styles: [__webpack_require__(/*! ./projects-list.component.scss */ "./src/app/shared/components/projects-list/projects-list.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsListComponent);
    return ProjectsListComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/gravatar.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/gravatar.service.ts ***!
  \*****************************************************/
/*! exports provided: GravatarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GravatarService", function() { return GravatarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! md5 */ "./node_modules/md5/md5.js");
/* harmony import */ var md5__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(md5__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GravatarService = /** @class */ (function () {
    function GravatarService() {
    }
    GravatarService.prototype.getUserGravatar = function (email) {
        if (email) {
            return "https://www.gravatar.com/avatar/" + md5__WEBPACK_IMPORTED_MODULE_1__(email);
        }
    };
    GravatarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GravatarService);
    return GravatarService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/confirm-modal/confirm-modal.component */ "./src/app/shared/components/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _components_customers_modal_customers_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/customers-modal/customers-modal.component */ "./src/app/shared/components/customers-modal/customers-modal.component.ts");
/* harmony import */ var _components_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/project-modal/project-modal.component */ "./src/app/shared/components/project-modal/project-modal.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_project_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/project/project.component */ "./src/app/shared/components/project/project.component.ts");
/* harmony import */ var _components_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/projects-list/projects-list.component */ "./src/app/shared/components/projects-list/projects-list.component.ts");
/* harmony import */ var _components_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/customers-list/customers-list.component */ "./src/app/shared/components/customers-list/customers-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmModalComponent"],
                _components_customers_modal_customers_modal_component__WEBPACK_IMPORTED_MODULE_4__["CustomersModalComponent"],
                _components_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_5__["ProjectModalComponent"],
                _components_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsListComponent"],
                _components_project_project_component__WEBPACK_IMPORTED_MODULE_7__["ProjectComponent"],
                _components_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_9__["CustomersListComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["InputsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["InputUtilitiesModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["IconsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["ButtonsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["CardsFreeModule"]
            ],
            exports: [_components_projects_list_projects_list_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsListComponent"], _components_project_project_component__WEBPACK_IMPORTED_MODULE_7__["ProjectComponent"], _components_customers_list_customers_list_component__WEBPACK_IMPORTED_MODULE_9__["CustomersListComponent"]],
            providers: [],
            entryComponents: [
                _components_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmModalComponent"],
                _components_customers_modal_customers_modal_component__WEBPACK_IMPORTED_MODULE_4__["CustomersModalComponent"],
                _components_project_modal_project_modal_component__WEBPACK_IMPORTED_MODULE_5__["ProjectModalComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
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
    firebase: {
        apiKey: 'AIzaSyAkj5hcwUJeSTU3YdO4CFv6xHcAXu5gFvI',
        authDomain: 'wgu-proto.firebaseapp.com',
        databaseURL: 'https://wgu-proto.firebaseio.com',
        projectId: 'wgu-proto',
        storageBucket: 'wgu-proto.appspot.com',
        messagingSenderId: '905760558177'
    }
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Dev\wgu-mdb1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map