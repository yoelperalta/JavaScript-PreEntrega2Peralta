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

const letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

let palabra = {
    elegida: "",
    elegidaArray: [],
    adivinada: "",
    adivinadaArray: [],
};

palabra.elegida = bdPalabras[Math.floor(Math.random()*1000) % bdPalabras.length];
palabra.elegida = palabra.elegida.toUpperCase();

console.log(palabra.elegida);



/*let palabra.elegidaArray = palabra.elegida.split("");
let palabra.adivinadaArray = [];
let palabra.adivinada = "";*/

for (let index = 0; index < palabra.elegida.length; index += 1){
    palabra.adivinada += "*";
    palabra.adivinadaArray[index] = "*";
}

let chances = 10;
let aciertos = 0;

function arraytoString(array){
    let palabraAux = "";
    for(let index of array)
        palabraAux += index;
    return palabraAux;
}

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