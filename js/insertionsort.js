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
    function insertionSort(inputArr) {
        let n = inputArr.length;
            for (let i = 1; i < n; i++) {
                // Choosing the first element in our unsorted subarray
                let current = inputArr[i];
                // The last element of our sorted subarray
                let j = i-1; 
                while ((j > -1) && (current < inputArr[j])) {
                    inputArr[j+1] = inputArr[j];
                    j--;
                }
                inputArr[j+1] = current;
            }
        return inputArr;
    }
    const h1 = document.createElement('h1');
    h1.textContent = `El arreglo a ordenar es: ${numeros}`
    ref.appendChild(h1)
    const h2 = document.createElement('h1');
    h2.textContent = `El arreglo ordenado queda: ${insertionSort(numeros)}`
    ref.appendChild(h2)
  })