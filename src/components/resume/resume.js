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
    // get rid of active class on page load
    $(document).ready(function() {
        $('.active').removeClass('active');
        // add 'active' class to the 'Resume' link
        $('a[href="/src/components/resume"]').addClass('active');
    });
});
