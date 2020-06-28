var arr1 = [1, 2, 3, 4];
var uni = [1, 1, 1, 1];
function printReverse(arr){
    console.log("Printing in Reverse :");    
    for(let i = arr.length - 1; i >= 0 ; i--){
        console.log(arr[i]);
    }
}

function isUniform(arr){
    let first = arr[0];
    console.log("Is the array uniform?");
    for(let i = 1; i < arr.length; i++){
        if(arr[i] !== first){
            return false;
        }
    }

    return true;
}

function sumArray(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
}

function max(arr){
    let max = arr[0];
    console.log("Maximum number from the array is: ")
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}