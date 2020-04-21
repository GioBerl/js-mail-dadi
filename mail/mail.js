// Chiedi all'utente la sua email controlla che sia nella lista di chi può accedere (ergo: la mail è presente in un array contenente le email "autorizzate") e stampa un messaggio appropriato (sei in lista/non sei in lista)


// creo lista vip
var listaVip = ['pippo@gmail.com', 'pluto@gmail.com', 'paperino@gmail.com'];

//Chiedi all'utente la sua email
var mailUtente = prompt('Inserisci la tua mail');

//controlla che sia nella lista di chi può accedere
for (var i = 0; i < listaVip.length; i++) {
    if (mailUtente == listaVip[i]) {
        var vip = true;
    }
}

if (vip == true) {
    document.writeln('sei in lista');
} else {
    document.writeln('non sei in lista');
}