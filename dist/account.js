"use strict";
class Account {
    constructor(id, _owner, _balance) {
        this.id = id;
        this._owner = _owner;
        this._balance = _balance;
        Account._members++;
    }
    get owner() {
        return this._owner;
    }
    set owner(newName) {
        if (newName.length < 3)
            throw new Error("new name must be more then 3 characters");
        this._owner = newName;
    }
    static getMembers() {
        return Account._members;
    }
    getBalance() {
        return this._balance;
    }
    deposit(amount) {
        if (amount <= 0)
            throw new Error("amount cannot be less than one");
        this._balance = this._balance + amount;
    }
    withdraw(amount) {
        if (this._balance < amount)
            throw new Error("You don't have enough money");
        this._balance = this._balance - amount;
        return amount;
    }
}
Account._members = 0;
const account = new Account(1, "Youssef", 10);
console.log(account.owner);
//# sourceMappingURL=account.js.map