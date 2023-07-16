abstract class Payment {
    constructor(public currency:string) {}

    abstract pay(): void;

    protected paid():boolean {
        return true;
    }

    protected noPaid():boolean {
        return false;
    }
}

class PaymentWithUSD extends Payment {
    constructor(currency:string) {
        super(currency);
    }

    pay(): void {
        // USD payment logic...
        console.log("Paid with USD");
    }
}

class PaymentWithDinar extends Payment {
    constructor(currency:string) {
        super(currency);
    }

   pay(): void {
       // Dinar payment logic...
       console.log("Paid with Dinar");
   }
}

class PaymentWithDirham extends Payment {
    pay(): void {
        console.log("Paid with Dirham");
    }
}