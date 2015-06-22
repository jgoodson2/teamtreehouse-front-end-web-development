//Problem: No user interaction causes application to change

//solution: when user interacts, cause changes appropriately
var color = $(".selected").css("background-color");

//when clicking on control list items
$(".controls li").click(function(){
///deselect sibling elements
$(this).siblings().removeClass("selected");
///select clicked item
$(this).addClass("selected");
    //cache current color
    color = $(this).css("background-color");
});

//when new color is pressed
$("#revealColorSelect").click(function(){
///show color select or hide the color select
$("#colorSelect").show();
});

//When color sliders change
///update the new color span

//when add color is pressed
///append the color to the controls UL
///select the new color

//on mouse events on the canvas
///draw lines