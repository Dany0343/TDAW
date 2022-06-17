const ref = document.querySelector('.rgb');
const h1 = document.createElement('h1')
let dato1 = 15;
let dato2 = 9;
let dato3 = 17;
document.write ('El mayor entre ' + dato1 +', ' + dato2 + ' y ' + dato3);
if((dato1 > dato2) && (dato1 > dato3)){
    h1.textContent = `El mayor es: ${dato1}`
    ref.appendChild(h1)
}
if((dato2 > dato3) && (dato2 > dato1)){
    h1.textContent = `El mayor es: ${dato2}`
    ref.appendChild(h1)
}
if((dato3 > dato2) && (dato3 > dato1)){
    h1.textContent = `El mayor es: ${dato3}`
    ref.appendChild(h1)
}