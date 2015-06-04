//Problem: it looks gross in smaller browser widths and small devices
//Solution: to hide the text links and swap them out with a more appropriate navigation\

//Create a select and append to #menu

var $select;
$select = $("<select></select>");
$("#menu").append($select);
//Cycle over menu links
  //Create an option
  //options value is the href of link
  //optiosn text is text of link
  //append option to select
//Create button to click to go to select's location
  //bind click action to button
  //go to select's location
//Modify CSS to hide links on small widths and show button and select
//Also hides select and button on larger widths and shows links
//deal with selected options depending on current page