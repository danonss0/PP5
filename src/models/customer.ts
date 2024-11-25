class Customer{
    nazwa = ""
    nip = ""
    miasto = ""
    ulica = ""
    numerDomu = ""
    numerMieszkania = ""
    kod = ""
    uwagi = ""
    branza = ""
    aktywny = true

    getData(){
      return `${this.nazwa} NIP: ${this.nip}`;
    }
    getAdress(){
      return `${this.kod} ${this.miasto} ${this.ulica} ${this.numerDomu}/${this.numerMieszkania}`
    }

}
class Supplier extends Customer{
  constructor(accountNumber){
    super();
    this.accountNumber = accountNumber;
  }
  accountNumber = accountNumber;
  invoice = [];
  
}
