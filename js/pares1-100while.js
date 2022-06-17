document.addEventListener('DOMContentLoaded', () => {
    const ref = document.querySelector('.rgb');
    const h1 = document.createElement('h1');
    let c=1;
    while(c<=100){
        if(c%2==0){
            const h1 = document.createElement('h1');
            h1.textContent = `Numero par: ${c}`;
            ref.appendChild(h1);;
        }
        c++
    }
});