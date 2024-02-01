// script for box_bot_hackathon page

$(document).ready(function(){
    // <!-- load header at #header-->
    $(function(){
        $("#header").load("../../header/header.html");
    });
    // <!-- load footer at #footer-->
    $(function(){
        $("#footer").load("../../footer/footer.html");
    });
    // get rid of active class on page load
    $(document).ready(function() {
        $('.active').removeClass('active');
    });
});
