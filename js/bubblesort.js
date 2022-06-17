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
  function bubble(arr) {
    let len = arr.length;
  
    for (let i = 0; i < len ; i++) {
      for(let j = 0 ; j < len - i - 1; j++){ 
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j + 1] = temp;
      }
     }
    }
    return arr;
  }
  const h1 = document.createElement('h1');
  h1.textContent = `El arreglo a ordenar es: ${numeros}`
  ref.appendChild(h1)
  const h2 = document.createElement('h1');
  h2.textContent = `El arreglo ordenado queda: ${bubble(numeros)}`
  ref.appendChild(h2)
})