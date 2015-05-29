//Problem: user when clicking on image goes to dead end

//Solution: create an overlay with large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption =$("<p></p>");

$overlay.append($image);
$overlay.append($caption);


// Add an overlay
$("body").append($overlay);
//0.1 an image
//0.2 a caption

// capture the click event on a link to an image
$("#imageGallery a").click(function(event){
    event.preventDefault();
    var imageLocation = $(this).attr("href");
    var imageAlt = $(this).children("img").attr("alt");
    //console.log(href);
    // update overlay to the image linked in the link
    $image.attr("src", imageLocation);
    // Get child's alt attribute and set caption
    $image.attr("alt", imageAlt);

    $caption.text(imageAlt);

    // show the overlay
    $overlay.show();
});
// when overlay is clicked
$overlay.click(function(){
    // hide overlay
    $(this).hide();
});
