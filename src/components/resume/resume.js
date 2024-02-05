// script for resume page

$(document).ready(function(){
    // <!-- load header at #header-->
    $(function(){
        $("#header").load("/src/components/header/header.html");
    });
    // <!-- load footer at #footer-->
    $(function(){
        $("#footer").load("/src/components/footer/footer.html");
    });

    $(function(){
        // get rid of active class on page load
        $('.active').removeClass('active');
        // add 'active' class to the 'Resume' link
        $('.navbar').find(`[href="/src/components/resume"]`).addClass('active');
    });
});
