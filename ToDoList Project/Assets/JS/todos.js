//To strike off specific todos on completion
$("ul").on("click", "li", function(){//We can add event listeners in jQuery only on the elemnts that exist initially when the page loads, Run this code only when an li inside of ul is clicked
    // console.log($(this).css("color"));
    // if($(this).css("color") === "rgb(128, 128, 128)"){
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     });
    // } else{
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    // }
    $(this).toggleClass("completed");
});

//To delete a todo by clicking on X
$("ul").on("click", "span", function(){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
});

$("input").on("keypress", function(event){
    if(event.which === 13){
        var toDoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + toDoText + "</li>");
    }
});

$("#note").on("click", function(){
    $("input").slideDown(500);
});

$("#minus").on("click", function(){
    $("input").slideUp(500);
});
