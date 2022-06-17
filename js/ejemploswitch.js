//const ref = document.querySelector('.rgb');
//const h1 = document.createElement('h1')
// let dato1 = prompt('Escribe tu nombre');
// switch (dato1.toUpperCase()){
//     case 'OSCAR' : h1.textContent = `Hola: ${dato1}`; 
//     ref.appendChild(h1);
//     break;
//     case 'DANIEL' :h1.textContent = `Hola: ${dato1}`; 
//     ref.appendChild(h1);
//     break;
//     case 'BUCIO' :h1.textContent = `Hola: ${dato1}`;
//     ref.appendChild(h1);
//     break;
//     case 'BARRERA' :h1.textContent = `Hola: ${dato1}`; 
//     ref.appendChild(h1);
//     break;
//     default: document.write('Error no hay coincidencias' +dato1);
//     break;
//}

const ref = document.querySelector('.rgb');
const h1 = document.createElement('h1')

// h1.textContent = `El mayor es: ${dato2}`
// ref.appendChild(h1)

let dato1 = prompt('Escribe tu nombre');
switch (dato1.toUpperCase()){
    case 'OSCAR' : h1.textContent = `Hola ${dato1}`; 
    ref.appendChild(h1);
    break;
    case 'DANIEL' :h1.textContent = `Hola ${dato1}`; 
    ref.appendChild(h1);
    break;
    case 'BUCIO' :h1.textContent = `Hola ${dato1}`;
    ref.appendChild(h1);
    break;
    case 'BARRERA' :h1.textContent = `Hola ${dato1}`; 
    ref.appendChild(h1);
    break;
    default: document.write('Error no hay coincidencias' +dato1);
    break;
}