document.addEventListener('DOMContentLoaded', () => {
    const ref = document.querySelector('.rgb');
    let numeros = []
    while(true) {
        let numero = parseInt(prompt("Introduzca los numeros para llenar el arreglo\nPresione 0 para parar"));
        if(numero == 0){
            break
        }
        else if (numero >= 0) {
            numeros.push(numero)
        }
        else {
            break
        }
    }
    let mayor = 0;
    for(let i = 0; i < numeros.length; i++) {
        if(mayor < numeros[i]) {
            mayor = numeros[i];
            continue; 
        }
        else {
            continue;
        }
    }
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h1');
    h1.textContent = `El arreglo es: ${numeros}`;
    h2.textContent = `El numero mayor es: ${mayor}`;
    ref.appendChild(h1);
    ref.appendChild(h2);
});