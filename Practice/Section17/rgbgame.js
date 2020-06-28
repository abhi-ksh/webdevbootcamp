let bgColor = "#232323";
let colorCount = 6;
let colors = randomColors(colorCount);
let boxes = document.querySelectorAll(".box");
let displayColor = document.querySelector("#displayColor");
let pickedColor = pickColor(colorCount);
let h1 = document.querySelector("h1");
let gameResult = document.querySelector("#gameResult");

function init(){
    setUpModeBtns();
    setUpColorBtns();   
}

init();

function setUpModeBtns(){
    let modeBtn = document.querySelectorAll(".mode");
    modeBtn.forEach(btn => {
        btn.addEventListener("click", function(){
            modeBtn[0].classList.remove("active");
            modeBtn[1].classList.remove("active");
            this.classList.add("active");
            colorCount = btn.value === "Easy" ? 3 : 6;
            newGame();
            for (let i = 0; i < boxes.length; i++) {
                if(colors[i]){
                    boxes[i].style.display = "block";
                }else{
                    boxes[i].style.display = "none"; 
                }
            }            
        });
    });
}

function setUpColorBtns(){
    for(let i = 0; i < colors.length; i++){
        boxes[i].style.backgroundColor = colors[i];
        boxes[i].addEventListener("click", function(){
            let clickedColor = this.style.backgroundColor
            // alert("Selected: " + );
            if(clickedColor === pickedColor){
                // alert("Correct");
                gameResult.textContent = "Correct!";
                changeBacks(pickedColor);
                h1.style.backgroundColor = pickedColor;
                resetButton.value = "Play Again?";
            } else {
                gameResult.textContent = "Try again.";
                this.style.backgroundColor = bgColor;
            }
        });
    }
}


let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", newGame);

function changeBacks(pickedColor){
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = pickedColor;
    }
}

function pickColor(colorCount){
    return colors[Math.floor(Math.random() * colorCount)];
}

function randomColors(num){
    let colors = [];
    for (let i = 0; i < num; i++) {
        colors.push(randomColor());    
    }
    return colors;
}

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function newGame(){
    colors = randomColors(colorCount);
    for(let i = 0; i < colors.length; i++){
        boxes[i].style.backgroundColor = colors[i];
    }    
    pickedColor = pickColor(colorCount);
    displayColor.textContent = pickedColor;
    h1.style.backgroundColor = "steelblue";
    gameResult.textContent = "";
    resetButton.value = "New Colors";   
}