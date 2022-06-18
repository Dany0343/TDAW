document.addEventListener('DOMContentLoaded', () => {
    const ref = document.querySelector('.rgb');
    while(true){
        let num = parseInt(prompt("Digite un numero \n0.Para salir"));
        if(num > 0) {
            if((num % 2) === 0) {
                const h1 = document.createElement('h1');
                h1.textContent = `${num} es un numero par`;
                ref.appendChild(h1);
            }
            else {
                const h1 = document.createElement('h1');
                h1.textContent = `${num} no es un numero par`;;
                ref.appendChild(h1);
            }
        }
        else {
            break;
        }
    }
    
});