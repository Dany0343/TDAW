document.addEventListener('DOMContentLoaded', () => {
    const ref = document.querySelector('.rgb');
    let numeros = []
    while(true) {
      let numero = parseInt(prompt("Introduzca los numeros para llenar el arreglo\nPresione 0 para parar"));
      if(numero == 0){
        break
      }
      else if (numero >= 0) {
        numeros.push(numero)
      }
      else {
        break
      }
    }
    function selectionSort(inputArr) { 
        let n = inputArr.length;
            
        for(let i = 0; i < n; i++) {
            let min = i;
            for(let j = i+1; j < n; j++){
                if(inputArr[j] < inputArr[min]) {
                    min=j; 
                }
             }
             if (min != i) {
                 let tmp = inputArr[i]; 
                 inputArr[i] = inputArr[min];
                 inputArr[min] = tmp;      
            }
        }
        return inputArr;
    }
    const h1 = document.createElement('h1');
    h1.textContent = `El arreglo a ordenar es: ${numeros}`
    ref.appendChild(h1)
    const h2 = document.createElement('h1');
    h2.textContent = `El arreglo ordenado queda: ${selectionSort(numeros)}`
    ref.appendChild(h2)
  })