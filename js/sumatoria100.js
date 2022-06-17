document.addEventListener('DOMContentLoaded', () => {
    const ref = document.querySelector('.rgb');
    const h1 = document.createElement('h1');
    let c=0;
    for (let x=0; x<=100; x++){
        c=c+x;
    }
    h1.textContent = `La suma de los primeros 100 numeros es: ${c}`;
    ref.appendChild(h1);
});