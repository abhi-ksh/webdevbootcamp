function calcAvg(scores){
    var sum = 0;
    for(let i = 0; i < scores.length; i++){
        sum += scores[i];
    }

    return Math.round(sum/scores.length);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
var avg = calcAvg(scores);

console.log(avg);

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
avg = calcAvg(scores2);
console.log(avg);

