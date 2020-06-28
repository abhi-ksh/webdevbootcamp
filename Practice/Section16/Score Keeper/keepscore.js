let p1Button = document.querySelector("#p1Button");
let p2Button = document.querySelector("#p2Button");
let p1Score = document.querySelector("#p1Score");
let p2Score = document.querySelector("#p2Score");
let pTo = document.querySelector("#pTo") ;

let p1 = 0;
let p2 = 0;
let playingFor = 5;
let gameOver = false;

p1Button.addEventListener("click", function(){
    if(!gameOver){
        p1++;
        if(p1 === playingFor){
            gameOver = true;
            p1Score.classList.add("winner");
        } 
    }

    p1Score.textContent = p1;
});

p2Button.addEventListener("click", function(){
    if(!gameOver){
        p2++;
        if(p2 === playingFor){
            gameOver = true;
            p2Score.classList.add("winner");
        } 
    }
    
    p2Score.textContent = p2;
});


let reset = document.querySelector("#reset");
reset.addEventListener("click", function(){
    resetFun();
});

function resetFun(){
    p1 = 0;
    p2 = 0;
    // playingFor = 5;
    gameOver = false;
    p1Score.textContent = p1;
    p2Score.textContent = p2;
    // pTo.textContent = 5;
    p1Score.classList.remove("winner");
    p2Score.classList.remove("winner");
}

pTo.addEventListener("change",function(){
    pTo.textContent = this.value;
    playingFor = Number(this.value);
    pToDisplay.textContent = playingFor;
    resetFun();
});