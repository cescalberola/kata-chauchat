//crear variable cargador
let cargador = [];

//ponemos el cargador a la chauchat para que "haga cosas"
for (let cartucho = 0; cartucho < 7; cartucho++) {
    cargador.push("pium!");
}
console.log(cargador);
//Si algo entraba, como una "ramita" existe un 80% de probabilidad de que se quede "pillada"
//Si se queda pillada, no habrá tiros y sólo mostrará un mensaje: _"Illo, me he quedao pillá!"
//Cada 3 disparos se imprimirá un espacio
function chauchat(){
    let ramita = Math.random();
    if (ramita < 0.8)
        return alert("Illo, me he quedao pillá!");
}
for (i=0; i<chauchat.length; i++) { if(i%3==0){
    console.log(''); }
    console.log(chauchat[i]) }
    