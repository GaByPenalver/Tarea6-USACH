// 1.- Mostrar en consola la secuencia de Fibonacci: 

// a. Entre los números 0 y 1000.
function mostrarFibonacci() {
let a = 0;
let b = 1;

console.log(a);
console.log(b);

while (true) {
    let resultado = a + b;
    if (resultado > 1000) {
        break;
    }
    console.log(resultado);
    a = b;
    b = resultado;

}
}

mostrarFibonacci();


//b. Números pares entre 0 y 1000.

function mostrarPares() {
    for (let i = 0; i <= 1000; i += 2) { 
        console.log(i); 
    }
}

mostrarPares();



//c. Números impares entre 0 y 1000.

function mostrarImpares() {
    for (let i = 1; i <= 1000; i += 2) {
        console.log(i);
    }
}

mostrarImpares();



// 2. Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.

let pokemon =
[
'Pikachu',
'Charmander',
'Bulbasaur',
'Squirtle'
]

let pokemonMayusculas = pokemon.map(pokemon =>pokemon.toUpperCase());
document.write(pokemonMayusculas);



// 3. Del siguiente arreglo de objetos, retornar otro arreglo con los pokemon tipo fuego. 

let pokemon1 = [

    {
        nombre: 'Pikachu',
        tipo: 'Electrico'
    },
    {
        nombre: 'Charmander',
        tipo: 'Fuego',
    },
    {
        nombre: 'Bulbasaur',
        tipo: 'Planta'
    },
    {
        nombre: 'Squirtle',
        tipo: 'Agua'
    },
    {
        nombre: 'Charmeleon',
        tipo: 'Fuego'
    },
    {
        nombre: 'Weedle',
        tipo: 'bicho'
    },
    {
        nombre: 'Charizard',
        tipo: 'Fuego'
    }
]

let pokemonFuego = pokemon1.filter(pokemon1 => pokemon1.tipo === 'Fuego');
document.write(pokemonFuego.map(pokemon1 => pokemon1.nombre));