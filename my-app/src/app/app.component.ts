import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Customer } from './models/customer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent {
customerList: Customer[] = [];
  

wyslij(event: Event): void {
  event.preventDefault();
  let newCustomer = new Customer();
  
  newCustomer.nazwa = (document.getElementById("nazwa") as HTMLInputElement).value;
  newCustomer.nip = (document.getElementById("NIP") as HTMLInputElement).value;
  newCustomer.miasto = (document.getElementById("miasto") as HTMLInputElement).value;
  newCustomer.ulica = (document.getElementById("ulica") as HTMLInputElement).value;
  newCustomer.numerDomu = (document.getElementById("numerDomu") as HTMLInputElement).value;
  newCustomer.numerMieszkania = (document.getElementById("numerMieszkania") as HTMLInputElement).value;
  newCustomer.kod = (document.getElementById("kodPocztowy") as HTMLInputElement).value;
  newCustomer.uwagi = (document.getElementById("uwagi") as HTMLInputElement).value;
  newCustomer.branza = (document.getElementById("branza") as HTMLInputElement).value;
  newCustomer.aktywny = (document.getElementById("aktywny") as HTMLInputElement).checked;


  this.customerList.push(newCustomer);
  console.log(newCustomer);

  (document.getElementById("customer-form") as HTMLInputElement).style.display = "none";
  (document.getElementById("customer-list") as HTMLInputElement).style.display = "block";

  let ul = (document.getElementById("customer-list-data") as HTMLInputElement);
  for (var i = 0; i <= this.customerList.length; i++) {
    ul.innerHTML += `<li> <img src="https://i.scdn.co/image/ab6761610000e5eb1e31a6602f9effd17959ae48"/>${this.customerList[i].getData()} Adres: ${this.customerList[i].getAdress()} <br>
    </li>`;
  }


}

dodaj(event: Event): void {
  event.preventDefault();
  (document.getElementById("nazwa") as HTMLInputElement).value = "FIRMA SP.ZOO";
  (document.getElementById("NIP") as HTMLInputElement).value = "82123949";
  (document.getElementById("miasto") as HTMLInputElement).value = "Myślenice";
  (document.getElementById("ulica") as HTMLInputElement).value = "Słowackiego";
  (document.getElementById("numerDomu") as HTMLInputElement).value = "341";
  (document.getElementById("numerMieszkania") as HTMLInputElement).value = "2";
  (document.getElementById("kodPocztowy") as HTMLInputElement).value = "32-400";
  (document.getElementById("uwagi") as HTMLInputElement).value = "Mam dużo uwag";
  (document.getElementById("branza") as HTMLInputElement).value = "IT";
  (document.getElementById("aktywny") as HTMLInputElement).checked = true;


}



showForm():void {
  (document.getElementById("customer-list-data") as HTMLInputElement).innerHTML = "";
  (document.getElementById("customer-list") as HTMLInputElement).style.display = "none";
  (document.getElementById("customer-form") as HTMLInputElement).style.display = "block";
}

}
