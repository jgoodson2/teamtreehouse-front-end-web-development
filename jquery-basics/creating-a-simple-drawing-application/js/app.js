//Problem: No user interaction causes application to change

//solution: when user interacts, cause changes appropriately
var color = $(".selected").css("background-color");
var context = $("canvas")[0].getContext("2d");
var $canvas = $("canvas");
var lastEvent;
var mousedown = false;

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
$canvas.mousedown(function(e){
  lastEvent = e;
    mousedown = true;
}).mousemove(function(e){
///draw lines
if(mousedown ){
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;}
}).mouseup(function(){
    mousedown = false;
}).mouseleave(function(){
    $canvas.mouseup();
});

