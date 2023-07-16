"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function IsEmail(classPrototype, propertyName) {
    let value;
    const descriptor = {
        get() {
            return value;
        },
        set(newValue) {
            if (!newValue.includes("@") || !newValue.includes(".com")) {
                throw new Error("Invalid Email!");
            }
            value = newValue;
        }
    };
    Object.defineProperty(classPrototype, propertyName, descriptor);
}
class User {
    constructor(email) {
        this.email = email;
    }
}
__decorate([
    IsEmail
], User.prototype, "email", void 0);
const youssef = new User("youssef@email.com");
console.log(youssef.email);
//# sourceMappingURL=property-decorator.js.map