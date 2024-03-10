let km = parseInt ( prompt('Inserisci i kilometri da percorrere'));
console.log(km);

let age = parseInt(prompt('Inserisci la tua età'));
console.log(age);

let price = km * (0.21);
console.log(price);


if(age < 18){
    price = price - ( price * 20 / 100);
    document.getElementById('priceticket').innerHTML = 'Il prezzo del biglietto é :' + price.toFixed(2)
} else if (age >=65){
    price = price - ( price * 40 / 100);
    document.getElementById('priceticket').innerHTML = 'Il prezzo del biglietto é :' + price.toFixed(2)
} else {
    price = km * 0.21;
    document.getElementById('priceticket').innerHTML = 'Il prezzo del biglietto é :' + price.toFixed(2)
}