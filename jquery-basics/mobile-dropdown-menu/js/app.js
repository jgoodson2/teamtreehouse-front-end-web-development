//Problem: it looks gross in smaller browser widths and small devices
//Solution: to hide the text links and swap them out with a more appropriate navigation\

//Create a select and append to #menu

var $select;
$select = $("<select></select>");
$("#menu").append($select);
//Cycle over menu links
///////$("#menu a").each()
$("#menu a").each(function(index){
    var $anchor = $(this);
    //Create an option
    var $option = $("<option></option>");

    //deal with selected option depending on current pg
    if($anchor.parent().hasClass("selected")){
        $option.prop("selected", true);
    }

    //option's value is the href of link
    $option.val($anchor.attr("href"));
    //option's text is text of link
    $option.text($anchor.text());
    //append option to select
    $select.append($option);
});
////Create button to click to go to select's location
//var $button = $("<button>Go!</button>");
//$("#menu").append($button);

  //bind change listener to the select
$select.change(function(){
    //go to select's location
window.location = $select.val();
});
