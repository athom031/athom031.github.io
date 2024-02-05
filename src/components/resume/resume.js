// script for resume page

$(document).ready(function(){
    // load header at #header
    $("#header").load("/src/components/header/header.html", function() {
        // add 'active' class to the 'Resume' link after the header is loaded
        $('.navbar').find(`[href="/src/components/resume"]`).addClass('active');
    });
    // load footer at #footer
    $("#footer").load("/src/components/footer/footer.html");
});
