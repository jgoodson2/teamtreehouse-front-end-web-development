$(document).ready(function () {
    $('form').submit(function (evt) {
        evt.preventDefault();
        var searchTerm = $('#search').val();
        var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        var flickrOptions = {
            tags: searchTerm,
            format: "json"
        };

        function displayPhotos(data) {
            var photoHTML = '<ul>';
            $.each(data.items, function (i, photo) {
                photoHTML += '<li class="grid-25 table-grid-50">';
                photoHTML += '<a href="' + photo.link + '" class="image">';
                photoHTML += '<img src="' + photo.media.m + '">';
                photoHTML += '</a>';
                photoHTML += "</li>";
            });
            photoHTML += '</ul>';
            $("#photos").html(photoHTML);
        }

        $.getJSON(flickrAPI, flickrOptions, displayPhotos);

    });
});