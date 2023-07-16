"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Controller(endPoint) {
    return (constructor) => {
        console.log("Controller Decorator Called");
        constructor.prototype.endPoint = endPoint;
        constructor.prototype.login = () => {
            console.log("You logged in successfully");
        };
    };
}
function Guard(role) {
    return (constructor) => {
        console.log("Guard Decorator Called");
        constructor.prototype.role = role;
    };
}
let Auth = class Auth {
};
Auth = __decorate([
    Guard("Manager"),
    Controller("/api/auth")
], Auth);
//# sourceMappingURL=class-decorator.js.map