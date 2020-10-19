var name = prompt("Quale è il tuo nome?");
var cognome = prompt("Quale è il tuo cognome?");
var colore = prompt ("Quale è il tuo colore preferito?");
var password = (name + cognome + colore + "19");


document.getElementById("pass").innerHTML = password;