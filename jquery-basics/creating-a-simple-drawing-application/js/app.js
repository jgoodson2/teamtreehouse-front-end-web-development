//Problem: No user interaction causes application to change

//solution: when user interacts, cause changes appropriately
var color = $(".selected").css("background-color");
var context = $("canvas")[0].getContext("2d");

//when clicking on control list items
$(".controls").on("click","li",function () {
///deselect sibling elements
    $(this).siblings().removeClass("selected");
///select clicked item
    $(this).addClass("selected");
    //cache current color
    color = $(this).css("background-color");
});

//when new color is pressed
$("#revealColorSelect").click(function () {
///show color select or hide the color select
    $("#colorSelect").toggle();
});

function changeColor() {
///update the new color span
    var r = $("#red").val();
    var g = $("#green").val();
    var b = $("#blue").val();
    $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}

//When color sliders change
$("input[type=range]").change(changeColor);


//when add color is pressed
$("#addNewColor").click(function () {
///append the color to the controls UL
    var $newColor = $("<li></li>");
    $newColor.css("backgroundColor", $("#newColor").css("backgroundColor"));
    $(".controls ul").append($newColor);
///select the new color
//    $newColor.siblings().removeClass("selected");
//    $newColor.addClass("selected");
    $newColor.click();
});


//on mouse events on the canvas
///draw lines

context.beginPath();
context.moveTo(10, 10);
context.lineTo(20, 10);
context.lineTo(20, 20);
context.lineTo(10, 20);
context.closePath();
context.stroke();