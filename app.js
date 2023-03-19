"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
var generateId = function (target) {
    var generatedId = "id_".concat((Math.random() * 1000).toFixed(0));
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.id = generatedId;
            return _this;
        }
        return class_1;
    }(target));
};
function readonly(target, key) {
    Object.defineProperty(target, key, {
        writable: false,
        configurable: false,
    });
}
var User = /** @class */ (function () {
    function User(name) {
        this.registrationDate = new Date();
        // let d = new Date();
        this.name = name;
        // this.registrationDate = d;
        this.orderHistory = new Array;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.addOrder = function (ord) {
        this.orderHistory.push(ord);
    };
    __decorate([
        readonly,
        __metadata("design:type", Date)
    ], User.prototype, "registrationDate", void 0);
    User = __decorate([
        generateId,
        __metadata("design:paramtypes", [String])
    ], User);
    return User;
}());
var Order = /** @class */ (function () {
    function Order(name, price) {
        this.name = name;
        this.price = price;
    }
    Order.prototype.addToShopingCart = function () {
    };
    return Order;
}());
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart() {
    }
    return ShoppingCart;
}());
var Good = /** @class */ (function () {
    function Good() {
    }
    return Good;
}());
var me = new User('Polina');
console.log(me);
