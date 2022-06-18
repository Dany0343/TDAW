document.addEventListener('DOMContentLoaded', () => {
    const ref = document.querySelector('.rgb');
    let textos = []
    while(true) {
        let texto = prompt("Introduzca un texto\nPresione 0 para parar de escribir textos");
        if(texto == '0'){
            break
        }
        else {
            textos.push(texto);
        }
    }
    console.log(textos)
    for(let i = 0; i < textos.length; i++) {
        if(i == 0) {
            const h1 = document.createElement('h1');
            const h2 = document.createElement('h1');
            const h3 = document.createElement('h1');
            const h4 = document.createElement('h1');
            h1.textContent = `El texto ${i + 1} proporcionado es: ${textos[i]}`;
            h2.textContent = `La longitud es: ${textos[i].length}`;
            h3.textContent = `En mayusculas es: ${textos[i].toUpperCase()}`;
            h4.textContent = `En minusculas es: ${textos[i].toLowerCase()}`;
            ref.appendChild(h1);
            ref.appendChild(h2);
            ref.appendChild(h3);
            ref.appendChild(h4);
        }
        else {
            const h1 = document.createElement('h1');
            const h2 = document.createElement('h1');
            const h3 = document.createElement('h1');
            const h4 = document.createElement('h1');
            h1.textContent = `El texto ${i + 1} proporcionado es: ${textos[i]}`;
            h2.textContent = `La longitud es: ${textos[i].length}`;
            h3.textContent = `En mayusculas es: ${textos[i].toUpperCase()}`;
            h4.textContent = `En minusculas es: ${textos[i].toLowerCase()}`;
            ref.appendChild(h1);
            ref.appendChild(h2);
            ref.appendChild(h3);
            ref.appendChild(h4);
        }
    }
});