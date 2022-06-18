document.addEventListener('DOMContentLoaded', () => {
    const ref = document.querySelector('.rgb');
    let numeros1 = [];
    let numeros2 = [];

    while(true) {
        let numero = parseInt(prompt("Introduzca los numeros para llenar el arreglo 1\nPresione 0 para parar"));
        if(numero == 0){
            break
        }
        else if (numero >= 0) {
            numeros1.push(numero)
        }
        else {
            break
        }
    }
    while(true) {
        let numero2 = parseInt(prompt("Introduzca los numeros para llenar el arreglo 2\nPresione 0 para parar"));
        if(numero2 == 0){
            break
        }
        else if (numero2 >= 0) {
            numeros2.push(numero2)
        }
        else {
            break
        }
    }
    if((numeros1.length == numeros2.length) && (numeros1.length != 0)) {
        const h1 = document.createElement('h1');
        h1.textContent = "La longitud de los arreglos es igual, se puede continuar";
        ref.appendChild(h1);
        let numeros3 = [];
        for(let i = 0; i < numeros1.length; i++) {
            numeros3[i] = numeros1[i] + numeros2[i];
        }
        const h2 = document.createElement('h1');
        h2.textContent = `El primer arreglo es: ${numeros1}`;
        ref.appendChild(h2);

        const h3 = document.createElement('h1');
        h3.textContent = `El segundo arreglo es: ${numeros2}`;
        ref.appendChild(h3);

        const h4 = document.createElement('h1');
        h4.textContent = `El tercer arreglo es: ${numeros3}`;
        ref.appendChild(h4);
    }
    else {
        const h1 = document.createElement('h1');
        h1.textContent = "La longitud de los arreglos no es igual, no se puede continuar";
        ref.appendChild(h1)
    }
});