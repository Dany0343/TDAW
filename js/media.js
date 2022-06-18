document.addEventListener('DOMContentLoaded', () => {
    const ref = document.querySelector('.rgb');
    let numeros = [];
    while(true) {
        let numero = parseInt(prompt("Introduzca los numeros para obtener la media\nPresione 0 para parar"));
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
    let suma = 0;
    let media = 0;
    for(let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }
    media = suma / numeros.length;
    const h1 = document.createElement('h1');
    h1.textContent = `Los numeros introducidos son: ${numeros}`;
    ref.appendChild(h1);

    const h2 = document.createElement('h1');
    h2.textContent = `La media es: ${media}`;
    ref.appendChild(h2);
})