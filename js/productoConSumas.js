document.addEventListener('DOMContentLoaded', () => {
    const ref = document.querySelector('.rgb');
    let num1 = parseInt(prompt("Ingrese el primer numero"));
    let num2 = parseInt(prompt("Ingrese el segundo numero"));
    let producto = 0;
    for(let i = 0; i < num1; i++) {
        producto = producto + num2;
    }
    const h1 = document.createElement('h1');
    h1.textContent = `El producto es: ${producto}`;
    ref.appendChild(h1)
});