// JUEGO EL AHORCADO

//Base de datos de 30 palabras
const bdPalabras = [
    "Varita",
    "Boleto",
    "Esconder",
    "Ojal",
    "Endulzar",
    "Retrovisor",
    "Raptar",
    "Aspiradora",
    "Micro",
    "Vociferar",
    "Miel",
    "Inesperada",
    "Atraer",
    "Empujar",
    "Coro",
    "Pantalla",
    "Calzado",
    "Caminata",
    "Congelador",
    "Olvidarse",
    "Camello",
    "Cubrir",
    "Podrido",
    "Segundos",
    "Claro",
    "Princesa",
    "Mantel",
    "Postizo",
    "Detenerse",
    "Bacteria"
];

//uso un arreglo de letras para verificar que el ingreso que hace el usuario sea válido
const letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//creo un objeto palabra donde guardo la palabra original por adivinar y en la que va avanzando el jugador
let palabra = {
    elegida: "",
    elegidaArray: [],
    adivinada: "",
    adivinadaArray: [],
};

//selecciono aleatoriamente una palabra dentro de la BD
palabra.elegida = bdPalabras[Math.floor(Math.random()*1000) % bdPalabras.length];
palabra.elegida = palabra.elegida.toUpperCase();

console.log(palabra.elegida);



for (let index = 0; index < palabra.elegida.length; index += 1){
    palabra.adivinada += "*";
    palabra.adivinadaArray[index] = "*";
}

let chances = 10;
let aciertos = 0;

//convierto un array de caracteres en un string
function arraytoString(array){
    let palabraAux = "";
    for(let index of array)
        palabraAux += index;
    return palabraAux;
}

//busco la letra elegida dentro de la palabra a adivinar y registro los aciertos
function buscarLetra(letraBuscada){
    for(let index = 0; index < palabra.elegida.length; index +=1){
        if (palabra.elegida[index] === letraBuscada){
            palabra.adivinadaArray[index] = letraBuscada;
            aciertos += 1;
        }
    }
    palabra.adivinada = arraytoString(palabra.adivinadaArray);
}


do{
    console.log("Oportunidades: " + chances);
    console.log ("Adivine la siguiente palabra: " + palabra.adivinada);
    let letra = prompt("Ingrese una letra");
    letra = letra.toUpperCase();

    //verifico si lo ingresado es válido
    if (letras.some(i => i == letra)){
        console.log(letra);
        buscarLetra(letra);
        if (aciertos === palabra.elegida.length){
            console.log(palabra.adivinada);
            console.log(`Felicitaciones! Adivinó la palabra ${palabra.elegida}`);
            break;
        }
    }else{
        alert("El valor ingresado es incorecto");
        continue;
    }
    chances -= 1;
}while (chances > 0);
if (chances == 0)
    console.log("Se terminaron los intentos para adivinar. La paralabra era " + palabra.elegida);