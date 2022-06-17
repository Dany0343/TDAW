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

document.write('El arreglo a ordenar es: 15,24,52,63,32,35,12,19,20,26,23,8,7,6,3,1,22');
document.write('</br>El arreglo ordenado queda: '+selectionSort([15,24,52,63,32,35,12,19,20,26,23,8,7,6,3,1,22]));