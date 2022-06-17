document.addEventListener('DOMContentLoaded', () => {
    const ref = document.querySelector('.rgb');
    let c=1;
    do{
        if(c%2==0){
            const h1 = document.createElement('h1');
            h1.textContent = `Numero par: ${c}`
            ref.appendChild(h1);
        }
    c++
    }while(c<=100);
    
});