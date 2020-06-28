let toDoList = document.querySelectorAll("li");

for(let i = 0; i < toDoList.length; i++){
    toDoList[i].addEventListener("mouseover", function(){
        this.classList.add("selected");
    });
    toDoList[i].addEventListener("mouseout", function(){
        this.classList.remove("selected");
    });
    toDoList[i].addEventListener("click", function(){
        this.classList.toggle("done");
    });
}