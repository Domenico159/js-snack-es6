
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

    console.log(nome , peso);

    
}

let biciLeggeraNome =bici[biciLeggera].nome ;

let biciLeggeraPeso =bici[biciLeggera].peso;

boxLeggera.innerHTML = `<h3>Nome:  <span class="nome">${biciLeggeraNome}</span> Peso: <span class="peso">${biciLeggeraPeso} kg</span>`;


console.log(bici[biciLeggera]);








