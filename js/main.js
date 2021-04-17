
// Snack 1
// Creare un array di oggetti: 
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bici = [
    {
        nome: 'Pablo',
        peso:7,
    },
    {
        nome: 'Pink',
        peso:10,
    },
    {
        nome: 'Carbon-Plus',
        peso:6,
    },
    {
        nome: 'Zeus',
        peso:12,
    },
    {
        nome: 'Ciccio',
        peso:13,
    },

];

let box = document.getElementById('box1');

let boxLeggera = document.getElementById('bici-leggera');

let {nome , peso} =bici;

let biciLeggera = 0 ;

for(let i = 0; i < bici.length;i++){

    nome = bici[i].nome;

    peso = bici[i].peso;

    box.innerHTML += `<h3>Nome:  <span class="nome">${nome}</span> Peso: <span class="peso">${peso} kg</span>`;

    if(bici[biciLeggera].peso > bici[i].peso){
        biciLeggera = i;
    }

    // console.log(nome , peso);

    
}

let biciLeggeraNome =bici[biciLeggera].nome ;

let biciLeggeraPeso =bici[biciLeggera].peso;

boxLeggera.innerHTML = `<h3>Nome:  <span class="nome">${biciLeggeraNome}</span> Peso: <span class="peso">${biciLeggeraPeso} kg</span>`;


// console.log(bici[biciLeggera]);






// Snack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.



const squadre = [
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Palermo',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Roma',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Foggia',
        puntiFatti: 0,
        falliSubiti: 0,
    },
   

];

var boxSquadre1 = document.getElementById('squadre1');

var boxSquadre2 = document.getElementById('squadre2');



const squadre2 =[];


     for(let i = 0 ; i < squadre.length;i++){

        var numRandomPunti = numerRandom(0 , 30);

        var numRandomFalli = numerRandom(0 , 30);

        squadre[i].puntiFatti =numRandomPunti ;

        squadre[i].falliSubiti =numRandomFalli ;


        falliSubiti = squadre[i].falliSubiti;

        let nomeSquadre =squadre[i].nome;

        squadre2.push({
            nome:squadre[i].nome,
            falliSubiti:squadre[i].falliSubiti
        })

        boxSquadre1.innerHTML += `<li><span class="nome-squadre">Nome:  ${nomeSquadre}</span>  <span class="punti">Punti fatti:  ${squadre[i].puntiFatti}</span>  <span class="falli">Falli subiti:  ${squadre[i].falliSubiti}</span></li>`;

        boxSquadre2.innerHTML += `<li><span class="nome-squadre">Nome:  ${nomeSquadre}</span>  <span class="falli">Falli subiti:  ${squadre[i].falliSubiti}</span></li>`;

     }

     console.log('************************* squadre 1 **********************************');

     console.table(squadre);

     console.log('************************* squadre 2 **********************************');

     console.table(squadre2);
     


//      jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
// inseriti dall'utente (è possibile usare, ad esempio, for/foreach/filter

const frutti = ['fragola','banana','mela','kiwi','mango','papaya'];

const box3 =document.getElementById('box3');

const userFruit =document.getElementById('user-fruit') ;

let min = parseInt(prompt(`Inserisci un numero da 0 a ${frutti.length}`)) ;

while(isNaN(min) || (min > frutti.length  || min < 0)){
    min = parseInt(prompt(`Numero errato per favore inserire un numero da 0 a ${frutti.length}`)) ;
}

let max =parseInt(prompt(`Inserisci un numero da ${min} a ${frutti.length}`)) ;

while(isNaN(min) || (min > max  || max > frutti.length)){
    max =parseInt(prompt(`Numero errato per favore inserire un numero da ${min} a ${frutti.length}`)) ;
}


const newFrutti = frutti.filter((element , index) => {

    if(index >= min && index <= max ){

        return element;

    }

});

frutti.forEach((element) => {

    box3.innerHTML += `<h3> ${element}</h3>  `;

});

newFrutti.forEach((element) => {

    userFruit.innerHTML += `<h3> ${element}</h3>  `;

});


// console.log(frutti);

// console.log(newFrutti);


// console.log(min);

// console.log(max);









// jsnack 4
// Dato un'array con dei capi d'abbigliamento - oggetti che contengono informazioni su nome modello, tipologia e colore - si aggiunga a ciascun elemento una ulteriore proprietà che indichi il costo del prodotto.
// Per inserire il costo del singolo prodotto si scriva una funzione che generi un numero random da 10 a 50 (potete sfruttare il map per aggiungere la nuova proprietà)

     


     

     



























// Funcion *************************************************************

function numerRandom(min , max) {
    
    return Math.floor( Math.random() * ( max - min +1 ) + min )

}








