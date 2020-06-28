let list = [];
let input = "";

while(input !== "quit"){
    input = prompt("What would you like to do?");
    if(input === "new"){
        addToList(list);
    } else if(input === "list"){
        listInput(list);
    } else if(input === "delete"){
        deleteInput(list);
    }
}

console.log("Quitting the app.");

function listInput(list){
    console.log("**********");
    list.forEach(function(l, i){
        console.log( i + ":" + l);
    });
    console.log("**********");
}

function deleteInput(list){
    let command = prompt("Enter the index you would like to delete:");
    list.splice(command,1);
    console.log("Element Deleted");
}

function addToList(list){
    let item = prompt("Enter the item to list:");
    list.push(item);
    console.log("Element Added");
}