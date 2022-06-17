document.addEventListener('DOMContentLoaded', () => {
    const ref = document.querySelector('.rgb');
    const h1 = document.createElement('h1');
    let c=1;
    let s=0;
    do{
        s=s+c;
        c++
    }while(c<=100)
    h1.textContent = `La suma de los primeros 100 numeros es: ${s}`;
    ref.appendChild(h1);
    
});