//Problem: user when clicking on image goes to dead end

//Solution: create an overlay with large image - Lightbox

//1. capture the click event on a link to an image
$("#imageGallery a").click(function(event){
    event.preventDefault();
    var href = $(this).attr("href");
    console.log(href);
  //1.1 show the overlay
  //1.2 update overlay to the image linked in the link
  //1.3 Get child's alt attribute and set caption
});
//2. Add an overlay
  //2.1 an image
  //2.2 a caption
//3. when overlay is clicked
  //3.1 hide overlay