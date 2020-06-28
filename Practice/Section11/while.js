console.log("Print numbers from -11 to 19");
let i = -11;
while(i < 20){
    console.log(i);
    i++;
}

console.log("Print all even numbers from 10 to 40");
let j = 10;
while(j < 40){
    if(j % 2 === 0){
        console.log(j);
    }
    j++;
}

console.log("Print all odd numbers from 300 to 333");
let k = 300;
while(k < 333){
    if(k % 2 !== 0){
        console.log(k);
    }
    k++;
}

console.log("Print all numbers divisible by 3 and 5 between 5 and 50");
let l = 5;
while(l < 50){
    if(l % 3 === 0 && l % 5 === 0){
        console.log(l);
    }
    l++;
}

// <h1>Print numbers from -11 to 19</h1>
// <h1>Print all even numbers from 10 to 40</h1>
// <h1>Print all odd numbers from 300 to 333</h1>
// <h1>Print all numbers divisible by 3 and 5 between 5 and 50</h1>