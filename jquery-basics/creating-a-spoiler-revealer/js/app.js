//Prevent spoilers from showing
//Solution: Hide spoilers and present them thru user interaction

//1. Hide spoiler
$(".spoiler span").hide();
//2. Add a button
$(".spoiler").append("<button>reveal spoiler!!!</button>");
//3. When button pressed,
$("button").click(function(){
    $(".spoiler span").show();
    $("button").hide();
});
////A. Show spoiler
////B. Get rid of button