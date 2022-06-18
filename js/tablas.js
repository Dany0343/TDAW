document.addEventListener('DOMContentLoaded', () => {
    const ref = document.querySelector('.rgb');
    let num = parseInt(prompt("Introduzca el numero del cual desea la tabla de multiplicar"));
    for(let i = 1; i <= 10; i++) {
        let aux = i * num;
        const h1 = document.createElement('h1');
        h1.textContent = `${num} x ${i} = ${aux}`;
        ref.appendChild(h1)
    }
    
});