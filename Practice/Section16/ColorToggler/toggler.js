// alert("connected!")
let button = document.querySelector("#b1");
let body = document.querySelector("body");
// button.addEventListener("click", function(){
//     console.log(body.style.background);
//     body.style.backgroundColor = (body.style.backgroundColor === "teal" ? "white": "teal");
// });

button.addEventListener("click", switchColor);

function switchColor(){
    document.body.classList.toggle("purple");
}