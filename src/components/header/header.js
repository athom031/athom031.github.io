$(document).ready(function () {
    // <!-- attach hover logo to logo in navbar -->
    var logoLink = $('#logo-link');
    var logoImg = $('#logo-img');
    logoLink.hover(
        function() {
            logoImg.attr('src', 'assets/navbar/logo-hover.png'); // path to the hover image
        },
        function() {
            logoImg.attr('src', 'assets/navbar/logo.png'); // path to the original image
        }
    );

});
