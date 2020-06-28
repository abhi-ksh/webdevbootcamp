// add click listener to the lis to gray out
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// add a listener to X for detecting delete and stop event bubbling
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// adding a new task
$("#newTask").keypress(function (event) {
    if(event.which === 13){
        console.log("You typed: " + $(this).val());
        $("ul").append("<li> <span>X</span> " + $(this).val() + "</li>" );
        $(this).val("");
    }
});

$(".fa-plus-square").click(function (event) {
    $("#newTask").fadeToggle();
});