"use strict";
class Payment {
    constructor(currency) {
        this.currency = currency;
    }
    paid() {
        return true;
    }
    noPaid() {
        return false;
    }
}
class PaymentWithUSD extends Payment {
    constructor(currency) {
        super(currency);
    }
    pay() {
        console.log("Paid with USD");
    }
}
class PaymentWithDinar extends Payment {
    constructor(currency) {
        super(currency);
    }
    pay() {
        console.log("Paid with Dinar");
    }
}
class PaymentWithDirham extends Payment {
    pay() {
        console.log("Paid with Dirham");
    }
}
//# sourceMappingURL=abstractClass.js.map