document.addEventListener('DOMContentLoaded', () => {
    const ref = document.querySelector('.rgb');
    const salto = document.createElement('br');
    for (let i=1; i<101; i++){
        if(i % 2 == 0){
            const h1 = document.createElement('h1');
            const salto = document.createElement('br');
            h1.textContent = `Numero par: ${i}`;
            h1.classList.add("efectolinea");
            ref.appendChild(h1);
            ref.appendChild(salto)
        }
    }
});
