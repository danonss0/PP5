"use strict";
let newCustomer = new Customer();
function wyslij(event) {
    event.preventDefault();
    let newCustomer = new Customer();
    newCustomer.nazwa = document.getElementById("nazwafirmy").value;
    newCustomer.nip = document.getElementById("NIP").value;
    newCustomer.miasto = document.getElementById("miasto").value;
    newCustomer.ulica = document.getElementById("ulica").value;
    newCustomer.numerDomu = document.getElementById("numerDomu").value;
    newCustomer.numerMieszkania = document.getElementById("numerMieszkania").value;
    newCustomer.kod = document.getElementById("kodPocztowy").value;
    newCustomer.uwagi = document.getElementById("uwagi").value;
    newCustomer.branza = document.getElementById("branza").value;
    newCustomer.aktywny = document.getElementById("aktywny").checked;
    customerList.push(newCustomer);
    console.log(newCustomer);
    document.getElementById('customer-form').style.display = "none";
    document.getElementById('customer-list').style.display = "block";
    let ul = document.getElementById('customer-list-data');
    for (var i = 0; i <= customerList.length; i++) {
        ul.innerHTML += `<li> <img src="https://i.scdn.co/image/ab6761610000e5eb1e31a6602f9effd17959ae48"/>${customerList[i].getData()} Adres: ${customerList[i].getAdress()} <br>
    </li>`;
    }
}
function dodaj(event) {
    event.preventDefault();
    document.getElementById("nazwafirmy").value = "FIRMA SP.ZOO";
    document.getElementById("NIP").value = "82123949";
    document.getElementById("miasto").value = "Myślenice";
    document.getElementById("ulica").value = "Słowackiego";
    document.getElementById("numerDomu").value = "341";
    document.getElementById("numerMieszkania").value = "2";
    document.getElementById("kodPocztowy").value = "32-400";
    document.getElementById("uwagi").value = "Mam dużo uwag";
    document.getElementById("branza").value = "IT";
    document.getElementById("aktywny").checked = true;
}
var customerList = [];
function showForm() {
    document.getElementById("customer-list-data").innerHTML = "";
    document.getElementById('customer-list').style.display = "none";
    document.getElementById('customer-form').style.display = "block";
}
