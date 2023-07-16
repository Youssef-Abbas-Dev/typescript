class Account {

    private static _members:number = 0;
    
    username?:string;
    constructor(public readonly id:number,private _owner:string,private _balance:number){
        Account._members++;
    }

    get owner():string {
        return this._owner;
    }

    set owner(newName:string) {
        if(newName.length < 3)
          throw new Error("new name must be more then 3 characters");

        this._owner = newName;
    }

    static getMembers():number {
        return Account._members;
    }

    getBalance():number {
        // more logic...
        return this._balance;
    }

    deposit(amount:number) : void {
        if(amount <= 0)
          throw new Error("amount cannot be less than one");

        this._balance = this._balance + amount;
    }

    withdraw(amount:number) :number {
        if(this._balance < amount)
          throw new Error("You don't have enough money");

        this._balance = this._balance - amount;
        return amount;
    }
} 

const account = new Account(1,"Youssef",10);
console.log(account.owner);

