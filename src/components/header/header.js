// footer component script

$(document).ready(function () {
    // change make hamburger icon clickable if media screen is a phone
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    // <!-- attach hover logo to logo in navbar -->
    var logoLink = $('#logo-link');
    var logoImg = $('#logo-img');
    logoLink.hover(
        function() {
            logoImg.attr('src', '/assets/navbar/logo-hover.png'); // path to the hover image
        },
        function() {
            logoImg.attr('src', '/assets/navbar/logo.png'); // path to the original image
        }
    );

});
