const ref = document.querySelector('.rgb');
const h1 = document.createElement('h1')
let edad = prompt("Introduce tu edad");
if (edad >= 18){
    h1.textContent = 'Puedes votar'
    ref.appendChild(h1)
}else{
    h1.textContent = 'No puedes votar'
    ref.appendChild(h1)
}