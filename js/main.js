
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


     


     

     



























// Funcion *************************************************************

function numerRandom(min , max) {
    
    return Math.floor( Math.random() * ( max - min +1 ) + min )

}








