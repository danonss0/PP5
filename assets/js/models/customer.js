"use strict";
class Customer {
    constructor() {
        this.nazwa = "";
        this.nip = "";
        this.miasto = "";
        this.ulica = "";
        this.numerDomu = "";
        this.numerMieszkania = "";
        this.kod = "";
        this.uwagi = "";
        this.branza = "";
        this.aktywny = true;
    }
    getData() {
        return `${this.nazwa} NIP: ${this.nip}`;
    }
    getAdress() {
        return `${this.kod} ${this.miasto} ${this.ulica} ${this.numerDomu}/${this.numerMieszkania}`;
    }
}
class Supplier extends Customer {
    constructor(accountNumber) {
        super();
        this.accountNumber = accountNumber;
        this.invoice = [];
        this.accountNumber = accountNumber;
    }
}
