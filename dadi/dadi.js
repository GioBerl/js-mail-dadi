// chiedi un numero all'utente tra 1 e 6 (giocata human) e estrai un numero casuale tra 1 e 6 (giocata PC). Chi fa il numero più alto vince!

// chiedi un numero all'utente tra 1 e 6
var dadoUtente = prompt('inserisci un numero compreso tra 1 e 6');

// estrai un numero casuale tra 1 e 6 (giocata PC)
var dadoComputer = Math.floor(Math.random() * 6) + 1;

//Chi fa il numero più alto vince!
console.log(`numero utente => ${dadoUtente}\n`);
console.log(`numero computer => ${dadoComputer}`);


if (dadoUtente > dadoComputer) {
    console.log('utente vince');
} else if (dadoUtente == dadoComputer) {
    console.log('pareggio');
} else {
    console.log('computer vince');
}